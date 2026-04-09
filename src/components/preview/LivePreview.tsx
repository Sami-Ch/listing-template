"use client";

import { Download, Monitor, Smartphone, Tablet } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { generateFullHtml } from "@/lib/htmlGenerator";
import { useTemplateStore } from "@/store/useTemplateStore";

type DeviceMode = "desktop" | "tablet" | "mobile";

const FRAME_WIDTHS: Record<DeviceMode, string> = {
	desktop: "100%",
	tablet: "768px",
	mobile: "375px",
};

export default function LivePreview() {
	const { activeTemplate } = useTemplateStore();
	const [device, setDevice] = useState<DeviceMode>("desktop");
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const lastTemplateIdRef = useRef<string | null>(null);

	const reloadIframe = useCallback(() => {
		if (!activeTemplate || !iframeRef.current) return;
		const html = generateFullHtml(activeTemplate);
		iframeRef.current.srcdoc = html;
		lastTemplateIdRef.current = activeTemplate.id;
	}, [activeTemplate]);

	useEffect(() => {
		if (!activeTemplate) return;
		if (
			lastTemplateIdRef.current !== activeTemplate.id ||
			(iframeRef.current?.srcdoc &&
				!iframeRef.current.contentDocument?.querySelector(
					"[data-customizer-section]",
				))
		) {
			reloadIframe();
		}
	}, [activeTemplate, reloadIframe]);

	const prevSectionsRef = useRef(
		activeTemplate?.sections.map((s) => s.id).join(","),
	);
	useEffect(() => {
		const currentSections = activeTemplate?.sections.map((s) => s.id).join(",");
		if (activeTemplate && currentSections !== prevSectionsRef.current) {
			reloadIframe();
			prevSectionsRef.current = currentSections;
		}
	}, [activeTemplate, reloadIframe]);

	useEffect(() => {
		if (!activeTemplate || !iframeRef.current) return;
		if (lastTemplateIdRef.current !== activeTemplate.id) return;

		const doc = iframeRef.current.contentDocument;
		if (!doc) return;

		const themeEl = doc.getElementById("listing-theme-vars");
		if (themeEl) {
			const c = activeTemplate.colors;
			themeEl.textContent = `:root {
  --c-background: ${c.background};
  --c-primary: ${c.primary};
  --c-foreground: ${c.foreground};
  --c-secondary: ${c.secondary};
}`;
		}

		activeTemplate.sections.forEach((section) => {
			const sectionNode = doc.querySelector(
				`[data-customizer-section="${section.id}"]`,
			);
			if (!sectionNode) return;

			if (section.type === "hero") {
				const order = section.heroColumnOrder ?? "imageLeft";
				sectionNode.classList.toggle(
					"hero--image-right",
					order === "imageRight",
				);
			}

			Object.values(section.elements).forEach((element) => {
				const elNode = sectionNode.querySelector(
					`[data-customizer-element="${element.id}"]`,
				);
				if (!elNode) return;

				if (element.type === "image") {
					(elNode as HTMLImageElement).src = element.src || "";
					if (element.alt) (elNode as HTMLImageElement).alt = element.alt;
				} else if (element.type === "text") {
					if (elNode.textContent !== element.value) {
						elNode.textContent = element.value;
					}
				} else if (element.type === "link") {
					if (elNode.textContent !== element.value) {
						elNode.textContent = element.value;
					}
					if (element.href) {
						let finalHref = element.href;
						if (
							finalHref &&
							!finalHref.startsWith("http") &&
							!finalHref.startsWith("mailto") &&
							!finalHref.startsWith("#")
						) {
							finalHref = `https://${finalHref}`;
						}
						(elNode as HTMLAnchorElement).href = finalHref;
					}
				}

				if (element.styles) {
					const htmlEl = elNode as HTMLElement;
					const st = htmlEl.style as unknown as Record<string, string>;
					Object.entries(element.styles).forEach(([prop, val]) => {
						if (val) {
							st[prop] = !Number.isNaN(Number(val)) ? `${val}px` : val;
						} else {
							st[prop] = "";
						}
					});
				}
			});
		});
	}, [activeTemplate]);

	const handleDownload = useCallback(() => {
		if (!activeTemplate) return;
		const html = generateFullHtml(activeTemplate, true);
		const blob = new Blob([html], { type: "text/html" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${activeTemplate.name.replace(/\s+/g, "_").toLowerCase()}_listing.html`;
		a.click();
		URL.revokeObjectURL(url);
	}, [activeTemplate]);

	if (!activeTemplate) {
		return (
			<div className="flex flex-1 items-center justify-center bg-zinc-900">
				<p className="text-sm text-zinc-500 italic">Select a template</p>
			</div>
		);
	}

	return (
		<div className="flex min-w-0 flex-1 flex-col overflow-hidden bg-zinc-900">
			<div className="flex h-14 shrink-0 items-center justify-between border-zinc-800 border-b bg-zinc-900 px-5">
				<div className="flex gap-1 rounded-lg border border-zinc-800 bg-zinc-900 p-1">
					{(
						[
							{ key: "desktop", Icon: Monitor },
							{ key: "tablet", Icon: Tablet },
							{ key: "mobile", Icon: Smartphone },
						] as const
					).map(({ key, Icon }) => (
						<button
							className={`rounded-md p-2 transition-colors ${
								device === key
									? "bg-zinc-700 text-white"
									: "text-zinc-500 hover:bg-zinc-800 hover:text-white"
							}`}
							key={key}
							onClick={() => setDevice(key)}
							type="button"
						>
							<Icon className="h-4 w-4" />
						</button>
					))}
				</div>

				<Button
					className="gap-2 border-none bg-linear-to-r from-amber-500 to-orange-600 px-6 font-bold text-sm text-white shadow-lg shadow-orange-900/20 transition-all hover:from-amber-600 hover:to-orange-700 active:scale-95"
					onClick={handleDownload}
					type="button"
				>
					<Download className="h-4 w-4" />
					Export HTML
				</Button>
			</div>

			<div className="custom-scrollbar flex min-h-0 flex-1 flex-col overflow-hidden bg-zinc-900">
				<div
					className="mx-auto flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden bg-white shadow-2xl transition-all duration-300"
					style={{
						width: FRAME_WIDTHS[device],
						maxWidth: "100%",
						borderRadius: device !== "desktop" ? "16px" : "0",
						border: device !== "desktop" ? "8px solid #222" : "none",
						...(device !== "desktop"
							? { height: "800px", flex: "none" }
							: { minHeight: 0 }),
					}}
				>
					<iframe
						className="h-full min-h-0 w-full flex-1 border-none"
						ref={iframeRef}
						sandbox="allow-same-origin"
						title="template-preview"
					/>
				</div>
			</div>
		</div>
	);
}
