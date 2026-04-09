const fs = require("fs");
const path = require("path");

const templatesDir = path.join(__dirname, "../templates");
const outputSeedDataPath = path.join(__dirname, "../src/lib/seedData.ts");

const templates = [
	{ id: "luxe_noir", file: "luxe_noir.html", name: "Luxe Noir" },
	{ id: "crystal_clean", file: "crystal_clean.html", name: "Crystal Clean" },
	{ id: "floral_essence", file: "floral_essence.html", name: "Floral Essence" },
	{
		id: "vintage_boutique",
		file: "vintage_boutique.html",
		name: "Vintage Boutique",
	},
];

let rawTemplatesCode =
	"export const rawTemplates: Record<string, string> = {\\n";
let seedDataCode = `import type { TemplateSchema } from '@/types/template';\\n\\nexport const sampleTemplates: TemplateSchema[] = [\\n`;

templates.forEach((t) => {
	const filePath = path.join(templatesDir, t.file);
	if (fs.existsSync(filePath)) {
		const content = fs.readFileSync(filePath, "utf-8");
		rawTemplatesCode += `  '${t.id}': \\\`${content.replace(/\\`/g, "\\\\`").replace(/\\$/g, "\\\\$")}\\\`,\\n`;

		// Generate a basic seed data object
		seedDataCode += `
  {
    id: '${t.id}',
    name: '${t.name}',
    colors: {},
    fonts: {},
    sections: [
      {
        id: 'header_1',
        type: 'header',
        elements: {
          logo: { id: 'l1', type: 'image', value: '', src: '/assets/logo.png', alt: 'Logo', styles: { width: '200px' } }
        }
      },
      {
        id: 'hero_1',
        type: 'hero',
        elements: {
          brand: { id: 'b1', type: 'text', value: 'Brand Name' },
          title: { id: 't1', type: 'text', value: 'Product Title' },
          image: { id: 'i1', type: 'image', value: '', src: '/assets/bottle1.png', styles: { width: '100%'} }
        }
      },
      {
        id: 'desc_1',
        type: 'description',
        elements: {
          heading: { id: 'dh1', type: 'text', value: 'The Description' },
          text: { id: 'dt1', type: 'text', value: 'A classic description of the product.' }
        }
      }
    ]
  },`;
	}
});

rawTemplatesCode += "};\\n";
seedDataCode += `\\n];\\n`;

fs.writeFileSync(
	path.join(__dirname, "../src/lib/templatesRaw.ts"),
	rawTemplatesCode,
);
fs.writeFileSync(outputSeedDataPath, seedDataCode);
console.log("Seed data generated successfully!");
