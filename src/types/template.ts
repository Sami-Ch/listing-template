export type ElementStyles = {
	paddingTop?: string;
	paddingRight?: string;
	paddingBottom?: string;
	paddingLeft?: string;
	width?: string;
	height?: string;
	color?: string;
	fontSize?: string;
	textAlign?: "left" | "center" | "right";
};

export type ContentElement = {
	id: string;
	type: "text" | "image" | "link";
	label?: string; // Human-readable name for the editor UI
	value: string;
	src?: string;
	alt?: string;
	href?: string; // For link elements
	styles?: ElementStyles;
};

/** User-controlled theme tokens (injected as CSS :root variables in export/preview). */
export type TemplateColors = {
	background: string;
	primary: string;
	foreground: string;
	secondary: string;
};

export type SectionData = {
	id: string;
	type: string; // e.g., 'header', 'hero', 'specs', 'description', 'info', 'badges', 'footer'
	label?: string; // Human-readable section name
	elements: Record<string, ContentElement>;
	styles?: ElementStyles;
	/** Only used when type === 'hero' (two-column product heroes). */
	heroColumnOrder?: "imageLeft" | "imageRight";
};

export type TemplateSchema = {
	id: string;
	name: string;
	colors: TemplateColors;
	sections: SectionData[];
};
