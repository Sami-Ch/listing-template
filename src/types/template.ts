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

export type SectionData = {
  id: string;
  type: string; // e.g., 'header', 'hero', 'specs', 'description', 'info', 'badges', 'footer'
  label?: string; // Human-readable section name
  elements: Record<string, ContentElement>;
  styles?: ElementStyles;
};

export type TemplateSchema = {
  id: string;
  name: string;
  colors: Record<string, string>;
  fonts: Record<string, string>;
  sections: SectionData[];
};
