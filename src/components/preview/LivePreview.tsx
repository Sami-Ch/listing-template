"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTemplateStore } from "@/store/useTemplateStore";
import { generateFullHtml } from "@/lib/htmlGenerator";
import { Monitor, Smartphone, Tablet, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [iframeHeight, setIframeHeight] = useState(800);

  // Full re-render only when the template ID changes
  const reloadIframe = useCallback(() => {
    if (!activeTemplate || !iframeRef.current) return;
    const html = generateFullHtml(activeTemplate);
    iframeRef.current.srcdoc = html;
    lastTemplateIdRef.current = activeTemplate.id;
  }, [activeTemplate]);

  // Reload when the template switches or sections are added/removed
  useEffect(() => {
    if (!activeTemplate) return;
    const sectionCount = activeTemplate.sections.length;
    if (lastTemplateIdRef.current !== activeTemplate.id || (iframeRef.current?.srcdoc && !iframeRef.current.contentDocument?.querySelector('[data-customizer-section]'))) {
      reloadIframe();
    }
  }, [activeTemplate, reloadIframe]);

  // Handle section count changes (Add/Remove)
  const prevSectionCount = useRef(activeTemplate?.sections.length || 0);
  useEffect(() => {
    if (activeTemplate && activeTemplate.sections.length !== prevSectionCount.current) {
      reloadIframe();
      prevSectionCount.current = activeTemplate.sections.length;
    }
  }, [activeTemplate?.sections.length, reloadIframe, activeTemplate]);

  // Surgical DOM updates when element data changes (no flash)
  useEffect(() => {
    if (!activeTemplate || !iframeRef.current) return;
    if (lastTemplateIdRef.current !== activeTemplate.id) return; // Wait for full reload

    const doc = iframeRef.current.contentDocument;
    if (!doc) return;

    activeTemplate.sections.forEach((section) => {
      const sectionNode = doc.querySelector(
        `[data-customizer-section="${section.id}"]`,
      );
      if (!sectionNode) return;

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
              !finalHref.startsWith("#") &&
              finalHref.includes(".")
            ) {
              finalHref = `https://${finalHref}`;
            }
            (elNode as HTMLAnchorElement).href = finalHref;
          }
        }

        if (element.styles) {
          const htmlEl = elNode as HTMLElement;
          if (element.styles.paddingTop)
            htmlEl.style.paddingTop = element.styles.paddingTop;
          if (element.styles.paddingRight)
            htmlEl.style.paddingRight = element.styles.paddingRight;
          if (element.styles.paddingBottom)
            htmlEl.style.paddingBottom = element.styles.paddingBottom;
          if (element.styles.paddingLeft)
            htmlEl.style.paddingLeft = element.styles.paddingLeft;
          if (element.styles.width) htmlEl.style.width = element.styles.width;
          if (element.styles.fontSize)
            htmlEl.style.fontSize = element.styles.fontSize;
          if (element.styles.color) htmlEl.style.color = element.styles.color;
        }
      });
    });
  }, [activeTemplate]);

  // Auto-resize iframe to content height (eliminates double scrollbar)
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      const doc = iframe.contentDocument;
      if (doc?.body) {
        // Inject styles to prevent inner scrolling and fix fonts
        const style = doc.createElement("style");
        style.textContent = `
          html, body { 
            height: auto !important; 
            overflow: visible !important; 
            margin: 0 !important; 
            padding: 0 !important;
          }
          * { scrollbar-width: none !important; }
          ::-webkit-scrollbar { display: none !important; }
        `;
        doc.head.appendChild(style);
      }

      const tryResize = () => {
        const d = iframe.contentDocument;
        if (d?.body) {
          const h = d.documentElement.scrollHeight || d.body.scrollHeight;
          if (h > 0 && Math.abs(h - iframeHeight) > 10) {
            setIframeHeight(h + 60);
          }
        }
      };

      tryResize();
      // More aggressive polling for height changes (images, transitions)
      const intervals = [100, 500, 1000, 2000, 5000];
      intervals.forEach(ms => setTimeout(tryResize, ms));
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, [iframeHeight]);

  // Handle download export
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
      <div className="flex-1 bg-zinc-900 flex items-center justify-center">
        <p className="text-zinc-500 italic text-sm">Select a template</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-zinc-900 min-w-0 overflow-hidden">
      {/* Top Bar */}
      <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-5 bg-zinc-900 shrink-0">
        {/* Device Toggles */}
        <div className="flex gap-1 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
          {(
            [
              { key: "desktop", Icon: Monitor },
              { key: "tablet", Icon: Tablet },
              { key: "mobile", Icon: Smartphone },
            ] as const
          ).map(({ key, Icon }) => (
            <button
              key={key}
              onClick={() => setDevice(key)}
              className={`p-2 rounded-md transition-colors ${
                device === key
                  ? "bg-zinc-700 text-white"
                  : "text-zinc-500 hover:text-white hover:bg-zinc-800"
              }`}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* Export */}
        <Button
          onClick={handleDownload}
          className="bg-linear-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm gap-2 px-6 shadow-lg shadow-orange-900/20 border-none transition-all active:scale-95"
        >
          <Download className="w-4 h-4" />
          Export HTML
        </Button>
      </div>

      {/* Canvas */}
      <div className="flex-1 overflow-auto bg-zinc-900 flex justify-center p-8 custom-scrollbar">
        <div
          className="bg-white transition-all duration-300 shadow-2xl overflow-hidden mx-auto"
          style={{
            width: FRAME_WIDTHS[device],
            maxWidth: "100%",
            borderRadius: device !== "desktop" ? "16px" : "0",
            border: device !== "desktop" ? "8px solid #222" : "none",
          }}
        >
          <iframe
            ref={iframeRef}
            className="w-full border-none block"
            style={{ height: `${iframeHeight}px` }}
            title="template-preview"
            sandbox="allow-same-origin"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
