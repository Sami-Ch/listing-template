import type { TemplateSchema } from "@/types/template";
import { sampleTemplates } from "./seedData";
import { rawTemplates } from "./templatesRaw";

/**
 * Generates final eBay-ready HTML from a template schema.
 * Uses DOMParser to parse the raw template, applies user edits,
 * reorders sections, and strips data attributes for clean export.
 */
export function generateFullHtml(
	template: TemplateSchema,
	forExport: boolean = false,
): string {
	if (typeof window === "undefined") return "";

	const rawHtml = rawTemplates[template.id];
	if (!rawHtml)
		return '<div style="color: white; padding: 2rem;">Template not found.</div>';

	try {
		const parser = new DOMParser();
		const doc = parser.parseFromString(rawHtml, "text/html");

		// Find container — templates use .listing-container or .listing-wrapper
		const container =
			doc.querySelector(".listing-container") ||
			doc.querySelector(".listing-wrapper");
		if (!container) return doc.documentElement.outerHTML;

		const inner = container.querySelector(":scope > .inner-container");
		const sectionParent = inner || container;

		const safeBodyStyle = doc.createElement("style");
		safeBodyStyle.textContent = `
      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }
    `;
		doc.head.appendChild(safeBodyStyle);

		// In-app preview only: templates use vertical margin on .listing-container so the body
		// color shows as a gutter; flush the card to the iframe top/bottom. Export keeps margins.
		if (!forExport) {
			const previewFrameStyle = doc.createElement("style");
			previewFrameStyle.id = "listing-preview-frame";
			previewFrameStyle.textContent = `
      .listing-container,
      .listing-wrapper {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }
    `;
			doc.head.appendChild(previewFrameStyle);
		}

		// Must come after the template's own <style> blocks so these :root tokens win in the cascade.
		const themeStyle = doc.createElement("style");
		themeStyle.id = "listing-theme-vars";
		themeStyle.textContent = `:root {
  --c-background: ${template.colors.background};
  --c-primary: ${template.colors.primary};
  --c-foreground: ${template.colors.foreground};
  --c-secondary: ${template.colors.secondary};
}`;
		doc.head.appendChild(themeStyle);

		// 1. Build blueprints of pure initial HTML elements by their section type
		const originalTemplate = sampleTemplates.find((t) => t.id === template.id);
		const originalSectionsMap = new Map<string, string>();
		for (const s of originalTemplate?.sections ?? []) {
			originalSectionsMap.set(s.id, s.type);
		}

		const blueprintsByType = new Map<string, HTMLElement>();
		sectionParent
			.querySelectorAll("[data-customizer-section]")
			.forEach((node) => {
				const id = node.getAttribute("data-customizer-section");
				if (id) {
					const type = originalSectionsMap.get(id);
					if (type && !blueprintsByType.has(type)) {
						blueprintsByType.set(type, node.cloneNode(true) as HTMLElement);
					}
				}
			});

		// 2. Clear parent container and rebuild entirely based on user's active sections state
		sectionParent.innerHTML = "";

		for (const section of template.sections) {
			const blueprint = blueprintsByType.get(section.type);
			if (!blueprint) continue;

			const node = blueprint.cloneNode(true) as HTMLElement;
			node.setAttribute("data-customizer-section", section.id);

			if (section.type === "hero") {
				const order = section.heroColumnOrder ?? "imageLeft";
				node.classList.toggle("hero--image-right", order === "imageRight");
			}

			if (section.styles) {
				Object.assign(node.style, section.styles);
			}

			for (const element of Object.values(section.elements)) {
				const elNode = node.querySelector(
					`[data-customizer-element="${element.id}"]`,
				) as HTMLElement | null;
				if (!elNode) continue;

				if (element.type === "image") {
					(elNode as HTMLImageElement).src = element.src || "";
					if (element.alt) (elNode as HTMLImageElement).alt = element.alt;
				} else if (element.type === "text") {
					elNode.textContent = element.value;
				} else if (element.type === "link") {
					elNode.textContent = element.value;
					if (element.href !== undefined) {
						let absoluteHref = element.href || "#";
						if (
							absoluteHref !== "#" &&
							!absoluteHref.startsWith("http") &&
							!absoluteHref.startsWith("mailto") &&
							!absoluteHref.startsWith("#")
						) {
							absoluteHref = `https://${absoluteHref}`;
						}
						elNode.setAttribute("href", absoluteHref);
					}
				}

				if (element.styles) {
					Object.entries(element.styles).forEach(([prop, val]) => {
						if (val) {
							const cssVal = !Number.isNaN(Number(val)) ? `${val}px` : val;
							(elNode.style as unknown as Record<string, string>)[prop] =
								cssVal;
						}
					});
				}
			}

			sectionParent.appendChild(node);
		}

		// 3. Strip data attributes for clean eBay export
		const exportDoc = doc.cloneNode(true) as Document;
		if (forExport) {
			exportDoc
				.querySelectorAll(
					"[data-customizer-section], [data-customizer-element]",
				)
				.forEach((el) => {
					el.removeAttribute("data-customizer-section");
					el.removeAttribute("data-customizer-element");
				});
			exportDoc.getElementById("listing-theme-vars")?.removeAttribute("id");
		}

		return `<!DOCTYPE html>\n${exportDoc.documentElement.outerHTML}`;
	} catch (e) {
		console.error("Error generating HTML:", e);
		return '<div style="color:red;padding:2rem">Failed to render template</div>';
	}
}
