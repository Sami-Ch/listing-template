const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const templatesDir = path.join(__dirname, "../templates");

const TEMPLATES = [
	{ id: "luxe_noir", file: "luxe_noir.html", name: "Luxe Noir" },
	{ id: "crystal_clean", file: "crystal_clean.html", name: "Crystal Clean" },
	{ id: "floral_essence", file: "floral_essence.html", name: "Floral Essence" },
	{
		id: "vintage_boutique",
		file: "vintage_boutique.html",
		name: "Vintage Boutique",
	},
];

/** Default theme per template (must match initial :root --c-* in each HTML file). */
const DEFAULT_COLORS = {
	luxe_noir: {
		background: "#0a0a0a",
		primary: "#d4af37",
		foreground: "#ffffff",
		secondary: "#a0a0a0",
	},
	crystal_clean: {
		background: "#ffffff",
		primary: "#333333",
		foreground: "#222222",
		secondary: "#666666",
	},
	floral_essence: {
		background: "#fffbfb",
		primary: "#b86b6b",
		foreground: "#4a4a4a",
		secondary: "#7a7a7a",
	},
	vintage_boutique: {
		background: "#fdfaf4",
		primary: "#8e735b",
		foreground: "#2c2520",
		secondary: "#5a524a",
	},
};

const TEXT_LEAF_SELECTOR = [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"p",
	".badge-item",
	".badge",
	".badge-pill",
	".spec-label",
	".spec-value",
	".data-label",
	".data-value",
	".product-brand",
	".product-title",
	".brand-name",
	".section-title",
	".section-header",
	".description-text",
	".store-title",
	".fragrance-description",
	".tagline",
	".floral-title",
	".banner-text",
	".section-heart",
	".info-content",
	".spec-name",
	".spec-content",
	".brand-stamp",
	".desc-text",
	".desc-ornament",
	".footer-line",
	".footer-tagline",
	".card-title",
	".card-text",
	"li",
].join(", ");

function labelForTextElement(tag, cls) {
	if (cls.includes("product-brand")) return "Brand";
	if (cls.includes("product-title")) return "Product Title";
	if (cls.includes("section-title")) return "Section Title";
	if (cls.includes("section-header")) return "Section Title";
	if (cls.includes("description-text")) return "Description";
	if (cls.includes("badge-item")) return "Badge";
	if (cls.includes("badge-pill")) return "Badge";
	if (cls.includes("badge") && tag === "span") return "Badge";
	if (cls.includes("spec-label")) return "Spec Label";
	if (cls.includes("spec-value")) return "Spec Value";
	if (cls.includes("data-label")) return "Spec Label";
	if (cls.includes("data-value")) return "Spec Value";
	if (cls.includes("spec-name")) return "Spec Label";
	if (cls.includes("spec-content")) return "Spec Value";
	if (cls.includes("store-title")) return "Store Title";
	if (cls.includes("brand-name")) return "Brand line";
	if (cls.includes("tagline")) return "Tagline";
	if (cls.includes("floral-title")) return "Subheading";
	if (cls.includes("banner-text")) return "Paragraph";
	if (cls.includes("section-heart")) return "Ornament";
	if (cls.includes("brand-stamp")) return "Brand line";
	if (cls.includes("desc-text")) return "Description";
	if (cls.includes("desc-ornament")) return "Ornament";
	if (cls.includes("footer-line")) return "Footer text";
	if (cls.includes("footer-tagline")) return "Footer";
	if (cls.includes("info-content")) return "Paragraph";
	if (tag === "h1") return "Heading";
	if (tag === "h2") return "Subheading";
	if (tag === "h3") return "Heading 3";
	if (tag === "h4") return "H4";
	if (tag === "h5") return "Heading 5";
	if (tag === "h6") return "Heading 6";
	if (tag === "p") return "Paragraph";
	if (tag === "li") return "List Item";
	return tag.toUpperCase();
}

function shouldSkipTextLeaf($, el) {
	const tag = (el.tagName || el.name || "").toLowerCase();
	const cls = $(el).attr("class") || "";
	if (cls.includes("info-content") && $(el).find("ul").length > 0) return true;
	if (cls.includes("description-text") && $(el).find("p").length > 0)
		return true;
	if (tag === "p" && $(el).find("a").length > 0) return true;
	return false;
}

function extractElements($, sectionEl) {
	const elements = {};
	let textIdx = 0;
	let imgIdx = 0;
	let linkIdx = 0;

	$(sectionEl)
		.find("img")
		.each(function () {
			const key = "image_" + imgIdx;
			$(this).attr("data-customizer-element", key);
			elements[key] = {
				id: key,
				type: "image",
				label: $(this).attr("alt") || "Image " + imgIdx,
				value: "",
				src: $(this).attr("src") || "",
				alt: $(this).attr("alt") || "",
				styles: {},
			};
			imgIdx++;
		});

	$(sectionEl)
		.find("a")
		.each(function () {
			const text = $(this).text().trim();
			if (!text) return;
			const key = "link_" + linkIdx;
			$(this).attr("data-customizer-element", key);
			elements[key] = {
				id: key,
				type: "link",
				label: text,
				value: text,
				href: $(this).attr("href") || "#",
				styles: {},
			};
			linkIdx++;
		});

	$(sectionEl)
		.find(TEXT_LEAF_SELECTOR)
		.each(function () {
			if ($(this).attr("data-customizer-element")) return;
			const tag = (this.tagName || this.name || "").toLowerCase();
			if (tag === "a") return;
			if (tag === "li" && $(this).find("a").length > 0) return;
			if (shouldSkipTextLeaf($, this)) return;

			const text = $(this).text().trim();
			if (!text) return;

			const key = "text_" + textIdx;
			$(this).attr("data-customizer-element", key);
			const cls = $(this).attr("class") || "";

			elements[key] = {
				id: key,
				type: "text",
				label: labelForTextElement(tag, cls),
				value: text,
				styles: {},
			};
			textIdx++;
		});

	return elements;
}

function detectSectionType(el, $) {
	const tag = (el.tagName || el.name || "").toLowerCase();
	const cls = $(el).attr("class") || "";

	if (tag === "header" || cls.includes("header")) return "header";
	if (tag === "main" || cls.includes("hero") || cls.includes("product-hero"))
		return "hero";
	if (
		cls.includes("trust-badge") ||
		(cls.includes("badge") && cls.includes("trust"))
	)
		return "badges";
	if (cls.includes("trust-badges")) return "badges";
	if (cls.includes("item-specific") || cls.includes("spec")) return "specs";
	if (cls.includes("description") || cls.includes("fragrance"))
		return "description";
	if (
		cls.includes("info-grid") ||
		cls.includes("info-card") ||
		cls.includes("policies") ||
		cls.includes("tester")
	)
		return "info";
	if (cls.includes("performance") || cls.includes("notes")) return "details";
	if (tag === "footer" || cls.includes("footer")) return "footer";
	if (tag === "section") return "section";
	return "section";
}

const allRaw = {};
const allSeeds = [];

for (const t of TEMPLATES) {
	const filePath = path.join(templatesDir, t.file);
	if (!fs.existsSync(filePath)) {
		console.error("MISSING:", filePath);
		continue;
	}

	let content = fs.readFileSync(filePath, "utf-8");
	content = content.replace(/src="assets\//g, 'src="/assets/');

	const $ = cheerio.load(content);

	const container = $(".listing-container").length
		? $(".listing-container")
		: $(".listing-wrapper");

	if (!container.length) {
		console.error("No container found in", t.file);
		continue;
	}

	let sectionParent = container;
	const inner = container.find("> .inner-container");
	if (inner.length) sectionParent = inner;

	const sectionsData = [];
	let totalElements = 0;

	sectionParent.children().each(function (i) {
		const el = $(this);
		el.attr("data-customizer-section", "section_" + i);

		const type = detectSectionType(this, $);
		const elements = extractElements($, this);
		totalElements += Object.keys(elements).length;

		const sectionRow = {
			id: "section_" + i,
			type,
			label: type.charAt(0).toUpperCase() + type.slice(1),
			elements,
		};
		if (type === "hero") {
			sectionRow.heroColumnOrder = "imageLeft";
		}
		sectionsData.push(sectionRow);
	});

	allRaw[t.id] = $.html();
	allSeeds.push({
		id: t.id,
		name: t.name,
		colors: DEFAULT_COLORS[t.id] || {
			background: "#ffffff",
			primary: "#333333",
			foreground: "#111111",
			secondary: "#666666",
		},
		sections: sectionsData,
	});

	console.log(
		`✓ ${t.name}: ${sectionsData.length} sections, ${totalElements} elements`,
	);
}

let rawTs =
	"/* eslint-disable */\n// Auto-generated — do not edit manually\nexport const rawTemplates: Record<string, string> = {\n";
for (const [id, html] of Object.entries(allRaw)) {
	const escaped = html
		.replace(/\\/g, "\\\\")
		.replace(/`/g, "\\`")
		.replace(/\$/g, "\\$");
	rawTs += `  '${id}': \`${escaped}\`,\n`;
}
rawTs += "};\n";
fs.writeFileSync(path.join(__dirname, "../src/lib/templatesRaw.ts"), rawTs);

let seedTs = `import type { TemplateSchema } from "@/types/template";\n\n`;
seedTs += `// Auto-generated — do not edit manually\n`;
seedTs += `export const sampleTemplates: TemplateSchema[] = ${JSON.stringify(allSeeds, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, "../src/lib/seedData.ts"), seedTs);

console.log(`\n✅ Done! ${allSeeds.length} templates written.`);
console.log(
	`   Raw templates: ${(Buffer.byteLength(rawTs) / 1024).toFixed(1)} KB`,
);
console.log(
	`   Seed data: ${(Buffer.byteLength(seedTs) / 1024).toFixed(1)} KB`,
);
