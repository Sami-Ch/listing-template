"use client";

import type { DragEndEvent } from "@dnd-kit/core";
import {
	closestCenter,
	DndContext,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {
	SortableContext,
	sortableKeyboardCoordinates,
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
	ChevronDown,
	ChevronRight,
	ChevronsUpDown,
	Copy,
	GripVertical,
	Image as ImageIcon,
	Link as LinkIcon,
	Plus,
	Trash2,
	Type,
} from "lucide-react";
import React, { useCallback, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTemplateStore } from "@/store/useTemplateStore";
import type {
	ContentElement,
	SectionData,
	TemplateColors,
} from "@/types/template";

function normalizeHex(input: string): string {
	const t = input.trim();
	if (/^#[0-9A-Fa-f]{6}$/.test(t)) return t;
	if (/^[0-9A-Fa-f]{6}$/.test(t)) return `#${t}`;
	return "#000000";
}

function ThemeColorRow({
	label,
	colorKey,
	value,
	onChange,
}: {
	label: string;
	colorKey: keyof TemplateColors;
	value: string;
	onChange: (key: keyof TemplateColors, hex: string) => void;
}) {
	const hex = normalizeHex(value);
	return (
		<div className="flex min-w-0 items-center gap-2">
			<span className="w-[5.5rem] shrink-0 text-[10px] text-zinc-500">
				{label}
			</span>
			<input
				className="h-8 w-10 shrink-0 cursor-pointer rounded border border-zinc-700 bg-zinc-900 p-0.5"
				onChange={(e) => onChange(colorKey, e.target.value)}
				title={label}
				type="color"
				value={hex}
			/>
			<Input
				className="h-8 min-w-0 flex-1 border-zinc-700 bg-zinc-800 font-mono text-white text-xs"
				onChange={(e) => onChange(colorKey, e.target.value)}
				value={value.startsWith("#") ? value : hex}
			/>
		</div>
	);
}

type EditorBlock =
	| { kind: "single"; key: string; el: ContentElement }
	| {
			kind: "specPair";
			labelKey: string;
			valueKey: string;
			labelEl: ContentElement;
			valueEl: ContentElement;
	  };

/** Groups adjacent Spec Label + Spec Value text fields into one horizontal row in the UI. */
function groupEditorBlocks(
	elements: Record<string, ContentElement>,
): EditorBlock[] {
	const entries = Object.entries(elements);
	const blocks: EditorBlock[] = [];
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		if (!entry) continue;
		const [key, el] = entry;
		const next = entries[i + 1];
		if (
			next &&
			el.type === "text" &&
			next[1].type === "text" &&
			el.label === "Spec Label" &&
			next[1].label === "Spec Value"
		) {
			blocks.push({
				kind: "specPair",
				labelKey: key,
				valueKey: next[0],
				labelEl: el,
				valueEl: next[1],
			});
			i += 1;
			continue;
		}
		blocks.push({ kind: "single", key, el });
	}
	return blocks;
}

function PaddingRow({
	elKey,
	elVal,
	sectionId,
	updateSectionElement,
	caption,
}: {
	elKey: string;
	elVal: ContentElement;
	sectionId: string;
	updateSectionElement: (
		sid: string,
		eid: string,
		u: Partial<ContentElement>,
	) => void;
	caption: string;
}) {
	return (
		<div className="space-y-1">
			<span className="text-[10px] text-zinc-600">{caption}</span>
			<div className="grid grid-cols-4 gap-2">
				{(
					[
						"paddingTop",
						"paddingRight",
						"paddingBottom",
						"paddingLeft",
					] as const
				).map((dir) => (
					<Input
						className="h-7 border-zinc-800 bg-zinc-950 text-center text-[10px] text-zinc-500 focus:border-zinc-600 focus:text-white"
						key={dir}
						onChange={(e) =>
							updateSectionElement(sectionId, elKey, {
								styles: { ...elVal.styles, [dir]: e.target.value },
							})
						}
						placeholder={dir.replace("padding", "").charAt(0)}
						value={elVal.styles?.[dir] || ""}
					/>
				))}
			</div>
		</div>
	);
}

// ─── Spec label + value (one row) ───────────────────────────────────────
function SpecPairEditor({
	labelKey,
	valueKey,
	labelEl,
	valueEl,
	sectionId,
	updateSectionElement,
}: {
	labelKey: string;
	valueKey: string;
	labelEl: ContentElement;
	valueEl: ContentElement;
	sectionId: string;
	updateSectionElement: (
		sid: string,
		eid: string,
		u: Partial<ContentElement>,
	) => void;
}) {
	return (
		<div className="space-y-2 rounded-lg border border-zinc-700/80 bg-zinc-900/30 py-2 pl-3">
			<div className="flex min-w-0 items-center gap-2 pr-3">
				<Type className="h-4 w-4 shrink-0 text-zinc-500" />
				<Label className="font-semibold text-xs text-zinc-400 uppercase tracking-wide">
					Spec
				</Label>
			</div>
			<div className="grid min-w-0 grid-cols-1 gap-3 pr-3 sm:grid-cols-2">
				<div className="min-w-0 space-y-1">
					<span className="text-[10px] text-zinc-500">Label</span>
					<Input
						className="w-full min-w-0 border-zinc-700 bg-zinc-900 text-sm text-white focus:border-blue-500"
						onChange={(e) =>
							updateSectionElement(sectionId, labelKey, {
								value: e.target.value,
							})
						}
						value={labelEl.value}
					/>
				</div>
				<div className="min-w-0 space-y-1">
					<span className="text-[10px] text-zinc-500">Value</span>
					<Input
						className="w-full min-w-0 border-zinc-700 bg-zinc-900 text-sm text-white focus:border-blue-500"
						onChange={(e) =>
							updateSectionElement(sectionId, valueKey, {
								value: e.target.value,
							})
						}
						value={valueEl.value}
					/>
				</div>
			</div>
			<div className="space-y-2 pr-3 pb-1">
				<PaddingRow
					caption="Label spacing (T · R · B · L)"
					elKey={labelKey}
					elVal={labelEl}
					sectionId={sectionId}
					updateSectionElement={updateSectionElement}
				/>
				<PaddingRow
					caption="Value spacing (T · R · B · L)"
					elKey={valueKey}
					elVal={valueEl}
					sectionId={sectionId}
					updateSectionElement={updateSectionElement}
				/>
			</div>
		</div>
	);
}

// ─── Element Editor ─────────────────────────────────────────────────────
function ElementEditor({
	elKey,
	elVal,
	sectionId,
	updateSectionElement,
}: {
	elKey: string;
	elVal: ContentElement;
	sectionId: string;
	updateSectionElement: (
		sid: string,
		eid: string,
		u: Partial<ContentElement>,
	) => void;
}) {
	const label = elVal.label || elKey;

	return (
		<div className="space-y-2 border-zinc-700 border-l-2 py-2 pl-3">
			<div className="flex min-w-0 items-center gap-2">
				{elVal.type === "text" && (
					<Type className="h-4 w-4 shrink-0 text-zinc-500" />
				)}
				{elVal.type === "image" && (
					<ImageIcon className="h-4 w-4 shrink-0 text-zinc-500" />
				)}
				{elVal.type === "link" && (
					<LinkIcon className="h-4 w-4 shrink-0 text-blue-400" />
				)}
				<Label className="min-w-0 font-semibold text-xs text-zinc-400 uppercase tracking-wide">
					{label}
				</Label>
			</div>

			{/* Text element — wider panel: use textarea sooner so lines are not cramped */}
			{elVal.type === "text" &&
				(elVal.value.length > 36 ? (
					<Textarea
						className="min-h-[88px] resize-y border-zinc-700 bg-zinc-900 text-sm text-white focus:border-blue-500"
						onChange={(e) =>
							updateSectionElement(sectionId, elKey, { value: e.target.value })
						}
						value={elVal.value}
					/>
				) : (
					<Input
						className="w-full min-w-0 border-zinc-700 bg-zinc-900 text-sm text-white focus:border-blue-500"
						onChange={(e) =>
							updateSectionElement(sectionId, elKey, { value: e.target.value })
						}
						value={elVal.value}
					/>
				))}

			{/* Link element */}
			{elVal.type === "link" && (
				<div className="grid min-w-0 gap-2 sm:grid-cols-2">
					<Input
						className="min-w-0 border-zinc-700 bg-zinc-900 text-sm text-white focus:border-blue-500"
						onChange={(e) =>
							updateSectionElement(sectionId, elKey, { value: e.target.value })
						}
						placeholder="Link text"
						value={elVal.value}
					/>
					<Input
						className="min-w-0 border-zinc-700 bg-zinc-900 text-blue-300 text-xs focus:border-blue-500"
						onChange={(e) =>
							updateSectionElement(sectionId, elKey, { href: e.target.value })
						}
						placeholder="URL (href)"
						value={elVal.href || "#"}
					/>
				</div>
			)}

			{/* Image element */}
			{elVal.type === "image" && (
				<div className="space-y-2">
					<Input
						className="w-full min-w-0 border-zinc-700 bg-zinc-900 text-sm text-white focus:border-blue-500"
						onChange={(e) =>
							updateSectionElement(sectionId, elKey, { src: e.target.value })
						}
						placeholder="Image URL"
						value={elVal.src || ""}
					/>
					<div className="flex min-w-0 gap-2">
						<Input
							className="min-w-0 flex-1 border-zinc-700 bg-zinc-900 text-white text-xs focus:border-blue-500"
							onChange={(e) =>
								updateSectionElement(sectionId, elKey, { alt: e.target.value })
							}
							placeholder="Alt text"
							value={elVal.alt || ""}
						/>
						<Input
							className="w-28 shrink-0 border-zinc-700 bg-zinc-900 text-white text-xs focus:border-blue-500"
							onChange={(e) =>
								updateSectionElement(sectionId, elKey, {
									styles: { ...elVal.styles, width: e.target.value },
								})
							}
							placeholder="Width"
							value={elVal.styles?.width || ""}
						/>
					</div>
				</div>
			)}

			<PaddingRow
				caption="Spacing (T · R · B · L)"
				elKey={elKey}
				elVal={elVal}
				sectionId={sectionId}
				updateSectionElement={updateSectionElement}
			/>
		</div>
	);
}

// ─── Sortable Section Card ──────────────────────────────────────────────
function SortableSection({
	section,
	idx: _idx,
	isCollapsed,
	onSectionOpenChange,
	updateSectionElement,
	updateSectionHeroColumnOrder,
	duplicateSection,
	removeSection,
}: {
	section: SectionData;
	idx: number;
	isCollapsed: boolean;
	onSectionOpenChange: (id: string, open: boolean) => void;
	updateSectionElement: (
		sid: string,
		eid: string,
		u: Partial<ContentElement>,
	) => void;
	updateSectionHeroColumnOrder: (
		sid: string,
		order: "imageLeft" | "imageRight",
	) => void;
	duplicateSection: (id: string) => void;
	removeSection: (id: string) => void;
}) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: section.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		zIndex: isDragging ? 50 : 1,
		opacity: isDragging ? 0.6 : 1,
	};

	const elementCount = Object.keys(section.elements).length;

	return (
		<div
			className="mb-3 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-800/40 shadow-sm transition-colors hover:border-zinc-700"
			ref={setNodeRef}
			style={style}
		>
			<Collapsible
				onOpenChange={(open) => onSectionOpenChange(section.id, open)}
				open={!isCollapsed}
			>
				{/* Header */}
				<div className="flex items-center justify-between bg-zinc-800/60 px-4 py-3.5 transition-colors">
					<div className="flex min-w-0 flex-1 items-center gap-2">
						<div
							className="cursor-grab rounded p-1 hover:bg-zinc-700 active:cursor-grabbing"
							{...attributes}
							{...listeners}
						>
							<GripVertical className="h-4 w-4 text-zinc-600" />
						</div>

						<CollapsibleTrigger className="flex flex-1 cursor-pointer items-center gap-2 text-left outline-none transition-colors hover:text-blue-400">
							{isCollapsed ? (
								<ChevronRight className="h-4 w-4 text-zinc-500" />
							) : (
								<ChevronDown className="h-4 w-4 text-zinc-500" />
							)}
							<span className="truncate font-bold text-sm text-zinc-300 uppercase tracking-wider">
								{section.label || section.type}
							</span>
						</CollapsibleTrigger>
					</div>

					<div className="flex items-center gap-1.5">
						<Badge
							className="border-zinc-700 bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-500"
							variant="secondary"
						>
							{elementCount}
						</Badge>
						<button
							className="rounded p-1.5 text-zinc-500 transition-colors hover:bg-zinc-700 hover:text-white"
							onClick={() => duplicateSection(section.id)}
							title="Duplicate section"
							type="button"
						>
							<Copy className="h-4 w-4" />
						</button>
						<button
							className="rounded p-1.5 text-zinc-500 transition-colors hover:bg-red-900/50 hover:text-red-400"
							onClick={() => removeSection(section.id)}
							title="Delete section"
							type="button"
						>
							<Trash2 className="h-4 w-4" />
						</button>
					</div>
				</div>

				{/* Content */}
				<CollapsibleContent>
					<div
						className="space-y-5 px-5 py-4"
						onPointerDown={(e) => e.stopPropagation()}
					>
						{section.type === "hero" && (
							<div className="space-y-2 border-zinc-800 border-b pb-3">
								<Label className="text-[10px] text-zinc-500 uppercase tracking-wide">
									Image column
								</Label>
								<Select
									onValueChange={(v) =>
										updateSectionHeroColumnOrder(
											section.id,
											v as "imageLeft" | "imageRight",
										)
									}
									value={section.heroColumnOrder ?? "imageLeft"}
								>
									<SelectTrigger className="h-9 border-zinc-700 bg-zinc-800 text-white text-xs">
										<SelectValue />
									</SelectTrigger>
									<SelectContent className="border-zinc-700 bg-zinc-900">
										<SelectItem
											className="text-white text-xs"
											value="imageLeft"
										>
											Image left (default)
										</SelectItem>
										<SelectItem
											className="text-white text-xs"
											value="imageRight"
										>
											Image right
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						)}
						{elementCount === 0 ? (
							<p className="py-2 text-xs text-zinc-600 italic">
								No editable elements in this section
							</p>
						) : (
							groupEditorBlocks(section.elements).map((block) =>
								block.kind === "specPair" ? (
									<SpecPairEditor
										key={`${block.labelKey}-${block.valueKey}`}
										labelEl={block.labelEl}
										labelKey={block.labelKey}
										sectionId={section.id}
										updateSectionElement={updateSectionElement}
										valueEl={block.valueEl}
										valueKey={block.valueKey}
									/>
								) : (
									<ElementEditor
										elKey={block.key}
										elVal={block.el}
										key={block.key}
										sectionId={section.id}
										updateSectionElement={updateSectionElement}
									/>
								),
							)
						)}
					</div>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
}

// ─── Add Section Button ─────────────────────────────────────────────────
function AddSectionButton({
	afterSectionId,
	sectionTypes,
	addSection,
}: {
	afterSectionId: string;
	sectionTypes: string[];
	addSection: (afterId: string, type: string) => void;
}) {
	const [open, setOpen] = useState(false);

	if (!open) {
		return (
			<div className="flex justify-center py-3">
				<button
					className="flex w-full items-center justify-center gap-1 rounded-lg border border-zinc-700 border-dashed bg-zinc-900/50 px-4 py-2 text-xs text-zinc-600 transition-colors hover:text-blue-400"
					onClick={() => setOpen(true)}
					type="button"
				>
					<Plus className="h-4 w-4" />
					<span>Add another section</span>
				</button>
			</div>
		);
	}

	return (
		<div className="my-2 flex flex-wrap justify-center gap-2 rounded-lg border border-zinc-700 border-dashed bg-zinc-900/50 px-3 py-3">
			{sectionTypes.map((type) => (
				<Button
					className="h-6 border-zinc-700 px-2 text-[10px] text-zinc-400 uppercase tracking-wider hover:border-blue-500 hover:text-white"
					key={type}
					onClick={() => {
						addSection(afterSectionId, type);
						setOpen(false);
					}}
					size="sm"
					variant="outline"
				>
					{type}
				</Button>
			))}
			<Button
				className="h-6 px-2 text-[10px] text-zinc-600"
				onClick={() => setOpen(false)}
				size="sm"
				variant="ghost"
			>
				Cancel
			</Button>
		</div>
	);
}

// ─── Main Editor Sidebar ────────────────────────────────────────────────
export default function EditorSidebar() {
	const {
		activeTemplate,
		templates,
		setActiveTemplate,
		updateSectionElement,
		updateTemplateColors,
		updateSectionHeroColumnOrder,
		reorderSections,
		addSection,
		duplicateSection,
		removeSection,
	} = useTemplateStore();
	const [collapsedSections, setCollapsedSections] = useState<
		Record<string, boolean>
	>({});

	const sensors = useSensors(
		useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	const onSectionOpenChange = useCallback((id: string, open: boolean) => {
		setCollapsedSections((prev) => ({ ...prev, [id]: !open }));
	}, []);

	const collapseAll = useCallback(() => {
		if (!activeTemplate) return;
		const all: Record<string, boolean> = {};
		activeTemplate.sections.forEach((s) => {
			all[s.id] = true;
		});
		setCollapsedSections(all);
	}, [activeTemplate]);

	const expandAll = useCallback(() => {
		if (!activeTemplate) return;
		const all: Record<string, boolean> = {};
		activeTemplate.sections.forEach((s) => {
			all[s.id] = false;
		});
		setCollapsedSections(all);
	}, [activeTemplate]);

	if (!activeTemplate) {
		return (
			<div className="flex h-full w-[min(40vw,720px)] min-w-[480px] max-w-[720px] shrink-0 flex-col items-center justify-center border-zinc-800 border-r bg-zinc-950 p-6 text-white">
				<ChevronsUpDown className="mb-4 h-10 w-10 text-zinc-700" />
				<p className="text-sm text-zinc-500">
					Select a template to start editing
				</p>
			</div>
		);
	}

	function handleDragEnd(event: DragEndEvent) {
		if (!activeTemplate) return;
		const { active, over } = event;
		if (over && active.id !== over.id) {
			const oldIndex = activeTemplate.sections.findIndex(
				(s) => s.id === active.id,
			);
			const newIndex = activeTemplate.sections.findIndex(
				(s) => s.id === over.id,
			);
			reorderSections(oldIndex, newIndex);
		}
	}

	// Get unique section types for the "Add Section" menu
	const sectionTypes = [...new Set(activeTemplate.sections.map((s) => s.type))];

	return (
		<div className="flex h-full w-[min(40vw,720px)] min-w-[480px] max-w-[720px] shrink-0 flex-col border-zinc-800 border-r bg-zinc-900 text-white shadow-xl">
			{/* Sticky Header */}
			<div className="z-20 shrink-0 space-y-4 border-zinc-800 border-b bg-zinc-900/80 p-5 backdrop-blur-md">
				{/* Template Selector */}
				<Select
					onValueChange={(val) => {
						if (val) {
							setActiveTemplate(val);
							setCollapsedSections({});
						}
					}}
					value={activeTemplate.id}
				>
					<SelectTrigger className="h-10 border-zinc-700/50 bg-zinc-800 px-4 text-white">
						<SelectValue placeholder="Choose template" />
					</SelectTrigger>
					<SelectContent className="border-zinc-700 bg-zinc-900">
						{templates.map((t) => (
							<SelectItem
								className="text-white hover:bg-zinc-800 focus:bg-zinc-800"
								key={t.id}
								value={t.id}
							>
								{t.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<div className="space-y-2 rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
					<span className="font-bold text-[10px] text-zinc-500 uppercase tracking-widest">
						Theme colors
					</span>
					<ThemeColorRow
						colorKey="background"
						label="Background"
						onChange={(k, v) => updateTemplateColors({ [k]: v })}
						value={activeTemplate.colors.background}
					/>
					<ThemeColorRow
						colorKey="primary"
						label="Primary"
						onChange={(k, v) => updateTemplateColors({ [k]: v })}
						value={activeTemplate.colors.primary}
					/>
					<ThemeColorRow
						colorKey="foreground"
						label="Foreground"
						onChange={(k, v) => updateTemplateColors({ [k]: v })}
						value={activeTemplate.colors.foreground}
					/>
					<ThemeColorRow
						colorKey="secondary"
						label="Secondary"
						onChange={(k, v) => updateTemplateColors({ [k]: v })}
						value={activeTemplate.colors.secondary}
					/>
				</div>

				{/* Actions */}
				<div className="flex items-center justify-between">
					<span className="font-bold text-[10px] text-zinc-500 uppercase tracking-widest">
						Sections ({activeTemplate.sections.length})
					</span>
					<div className="flex gap-1">
						<Button
							className="h-6 px-2 text-[10px] text-zinc-500 uppercase tracking-wider hover:text-white"
							onClick={expandAll}
							size="sm"
							variant="ghost"
						>
							Expand
						</Button>
						<Button
							className="h-6 px-2 text-[10px] text-zinc-500 uppercase tracking-wider hover:text-white"
							onClick={collapseAll}
							size="sm"
							variant="ghost"
						>
							Collapse
						</Button>
					</div>
				</div>
			</div>

			{/* Scrollable Sections */}
			<div className="custom-scrollbar flex-1 overflow-y-auto">
				<div className="p-5">
					<DndContext
						collisionDetection={closestCenter}
						onDragEnd={handleDragEnd}
						sensors={sensors}
					>
						<SortableContext
							items={activeTemplate.sections.map((s) => s.id)}
							strategy={verticalListSortingStrategy}
						>
							{activeTemplate.sections.map((section, idx) => (
								<React.Fragment key={section.id}>
									<SortableSection
										duplicateSection={duplicateSection}
										idx={idx}
										isCollapsed={collapsedSections[section.id] ?? true}
										onSectionOpenChange={onSectionOpenChange}
										removeSection={removeSection}
										section={section}
										updateSectionElement={updateSectionElement}
										updateSectionHeroColumnOrder={updateSectionHeroColumnOrder}
									/>
									<AddSectionButton
										addSection={addSection}
										afterSectionId={section.id}
										sectionTypes={sectionTypes}
									/>
								</React.Fragment>
							))}
						</SortableContext>
					</DndContext>
				</div>
			</div>
		</div>
	);
}
