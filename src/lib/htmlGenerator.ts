import type { TemplateSchema } from "@/types/template";
import { rawTemplates } from "./templatesRaw";
import { sampleTemplates } from "./seedData";

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

    // 1. Build blueprints of pure initial HTML elements by their section type
    const originalTemplate = sampleTemplates.find(t => t.id === template.id);
    const originalSectionsMap = new Map<string, string>();
    originalTemplate?.sections.forEach(s => originalSectionsMap.set(s.id, s.type));

    const blueprintsByType = new Map<string, HTMLElement>();
    sectionParent.querySelectorAll("[data-customizer-section]").forEach(node => {
      const id = node.getAttribute("data-customizer-section");
      if (id) {
        const type = originalSectionsMap.get(id);
        if (type && !blueprintsByType.has(type)) {
          blueprintsByType.set(type, node.cloneNode(true) as HTMLElement);
        }
      }
    });

    // 2. Clear parent container and rebuild entirely based on user's active sections state
    sectionParent.innerHTML = '';

    for (const section of template.sections) {
      const blueprint = blueprintsByType.get(section.type);
      if (!blueprint) continue;

      const node = blueprint.cloneNode(true) as HTMLElement;
      node.setAttribute("data-customizer-section", section.id);

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
              (elNode.style as any)[prop] = !isNaN(Number(val)) ? `${val}px` : val;
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
