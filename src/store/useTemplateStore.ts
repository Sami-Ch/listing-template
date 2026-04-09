import { create } from "zustand";
import type {
	ContentElement,
	ElementStyles,
	SectionData,
	TemplateSchema,
} from "../types/template";

interface TemplateState {
	activeTemplate: TemplateSchema | null;
	templates: TemplateSchema[];
	setTemplates: (templates: TemplateSchema[]) => void;
	setActiveTemplate: (id: string) => void;
	updateSectionElement: (
		sectionId: string,
		elementId: string,
		updates: Partial<ContentElement>,
	) => void;
	updateSectionStyles: (
		sectionId: string,
		styles: Partial<ElementStyles>,
	) => void;
	reorderSections: (startIndex: number, endIndex: number) => void;
	addSection: (afterSectionId: string, sectionType: string) => void;
	duplicateSection: (sectionId: string) => void;
	removeSection: (sectionId: string) => void;
	updateTemplateColors: (colors: Partial<TemplateSchema["colors"]>) => void;
	updateSectionHeroColumnOrder: (
		sectionId: string,
		order: "imageLeft" | "imageRight",
	) => void;
}

let nextSectionCounter = 100;
function generateSectionId(): string {
	return `section_${nextSectionCounter++}`;
}

function deepClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj)) as T;
}

import { sampleTemplates } from "../lib/seedData";

export const useTemplateStore = create<TemplateState>((set) => ({
	activeTemplate: sampleTemplates[0] ? deepClone(sampleTemplates[0]) : null,
	templates: sampleTemplates,

	setTemplates: (templates) => set({ templates }),

	setActiveTemplate: (id) =>
		set((state) => {
			const found = state.templates.find((t) => t.id === id);
			return { activeTemplate: found ? deepClone(found) : null };
		}),

	updateSectionElement: (sectionId, elementId, updates) =>
		set((state) => {
			if (!state.activeTemplate) return state;

			const sections = state.activeTemplate.sections.map((section) => {
				if (section.id !== sectionId) return section;
				const existingEl = section.elements[elementId];
				return {
					...section,
					elements: {
						...section.elements,
						[elementId]: {
							...existingEl,
							...updates,
							styles: {
								...existingEl?.styles,
								...updates.styles,
							},
						} as ContentElement,
					},
				};
			});

			return {
				activeTemplate: { ...state.activeTemplate, sections },
			};
		}),

	updateSectionStyles: (sectionId, styles) =>
		set((state) => {
			if (!state.activeTemplate) return state;

			const sections = state.activeTemplate.sections.map((section) => {
				if (section.id !== sectionId) return section;
				return {
					...section,
					styles: { ...section.styles, ...styles },
				};
			});

			return {
				activeTemplate: { ...state.activeTemplate, sections },
			};
		}),

	reorderSections: (startIndex, endIndex) =>
		set((state) => {
			if (!state.activeTemplate) return state;
			const result = Array.from(state.activeTemplate.sections);
			const [removed] = result.splice(startIndex, 1);
			if (removed) {
				result.splice(endIndex, 0, removed);
			}
			return {
				activeTemplate: { ...state.activeTemplate, sections: result },
			};
		}),

	addSection: (afterSectionId, sectionType) =>
		set((state) => {
			if (!state.activeTemplate) return state;

			// Find a section of the requested type to use as a template
			const templateSection = state.activeTemplate.sections.find(
				(s) => s.type === sectionType,
			);

			const newSection: SectionData = templateSection
				? {
						...deepClone(templateSection),
						id: generateSectionId(),
					}
				: {
						id: generateSectionId(),
						type: sectionType,
						label: sectionType.charAt(0).toUpperCase() + sectionType.slice(1),
						elements: {},
					};

			const idx = state.activeTemplate.sections.findIndex(
				(s) => s.id === afterSectionId,
			);
			const insertAt =
				idx >= 0 ? idx + 1 : state.activeTemplate.sections.length;
			const sections = [...state.activeTemplate.sections];
			sections.splice(insertAt, 0, newSection);

			return {
				activeTemplate: { ...state.activeTemplate, sections },
			};
		}),

	duplicateSection: (sectionId) =>
		set((state) => {
			if (!state.activeTemplate) return state;

			const idx = state.activeTemplate.sections.findIndex(
				(s) => s.id === sectionId,
			);
			if (idx === -1) return state;

			const original = state.activeTemplate.sections[idx];
			if (!original) return state;

			const cloned: SectionData = {
				...deepClone(original),
				id: generateSectionId(),
			};

			const sections = [...state.activeTemplate.sections];
			sections.splice(idx + 1, 0, cloned);

			return {
				activeTemplate: { ...state.activeTemplate, sections },
			};
		}),

	removeSection: (sectionId) =>
		set((state) => {
			if (!state.activeTemplate) return state;
			const sections = state.activeTemplate.sections.filter(
				(s) => s.id !== sectionId,
			);
			return {
				activeTemplate: { ...state.activeTemplate, sections },
			};
		}),

	updateTemplateColors: (colors) =>
		set((state) => {
			if (!state.activeTemplate) return state;
			return {
				activeTemplate: {
					...state.activeTemplate,
					colors: { ...state.activeTemplate.colors, ...colors },
				},
			};
		}),

	updateSectionHeroColumnOrder: (sectionId, order) =>
		set((state) => {
			if (!state.activeTemplate) return state;
			const sections = state.activeTemplate.sections.map((section) =>
				section.id === sectionId && section.type === "hero"
					? { ...section, heroColumnOrder: order }
					: section,
			);
			return {
				activeTemplate: { ...state.activeTemplate, sections },
			};
		}),
}));
