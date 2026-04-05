import type { TemplateSchema } from "@/types/template";
import { rawTemplates } from "./templatesRaw";

/**
 * Generates final eBay-ready HTML from a template schema.
 * Uses DOMParser to parse the raw template, applies user edits,
 * reorders sections, and strips data attributes for clean export.
 */
export function generateFullHtml(template: TemplateSchema, forExport: boolean = false): string {
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

    // Inject safe fonts for template to avoid Inter inheritance or blocked fonts
    const styleTag = doc.createElement("style");
    styleTag.textContent = `
      body { 
        font-family: Arial, Helvetica, sans-serif !important; 
        -webkit-font-smoothing: antialiased;
        margin: 0;
      }
    `;
    doc.head.appendChild(styleTag);

    // 1. Inject user edits into DOM nodes
    for (const section of template.sections) {
      const sectionNode = sectionParent.querySelector(
        `[data-customizer-section="${section.id}"]`,
      ) as HTMLElement | null;
      if (!sectionNode) continue;

      if (section.styles) {
        Object.assign(sectionNode.style, section.styles);
      }

      for (const element of Object.values(section.elements)) {
        const elNode = sectionNode.querySelector(
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
          if (element.href) {
            let absoluteHref = element.href;
            if (
              absoluteHref &&
              !absoluteHref.startsWith("http") &&
              !absoluteHref.startsWith("mailto") &&
              !absoluteHref.startsWith("#") &&
              absoluteHref.includes(".")
            ) {
              absoluteHref = `https://${absoluteHref}`;
            }
            (elNode as HTMLAnchorElement).href = absoluteHref;
          }
        }

        if (element.styles) {
          Object.assign(elNode.style, element.styles);
        }
      }
    }

    // 2. Reorder sections
    const reorderedNodes = template.sections
      .map((s) =>
        sectionParent.querySelector(
          `[data-customizer-section="${s.id}"]`,
        ),
      )
      .filter(Boolean);

    for (const node of reorderedNodes) {
      sectionParent.appendChild(node!);
    }

    // 3. Strip data attributes for clean eBay export
    const exportDoc = doc.cloneNode(true) as Document;
    if (forExport) {
      exportDoc
        .querySelectorAll("[data-customizer-section], [data-customizer-element]")
        .forEach((el) => {
          el.removeAttribute("data-customizer-section");
          el.removeAttribute("data-customizer-element");
        });
    }

    return "<!DOCTYPE html>\n" + exportDoc.documentElement.outerHTML;
  } catch (e) {
    console.error("Error generating HTML:", e);
    return '<div style="color:red;padding:2rem">Failed to render template</div>';
  }
}
