"use client";

import React, { useState, useCallback } from "react";
import { useTemplateStore } from "@/store/useTemplateStore";
import {
  GripVertical,
  Image as ImageIcon,
  Type,
  Link as LinkIcon,
  ChevronDown,
  ChevronRight,
  Copy,
  Trash2,
  Plus,
  ChevronsUpDown,
} from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import type { ContentElement } from "@/types/template";

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
    <div className="border-l-2 border-zinc-700 pl-3 py-2 space-y-2">
      <div className="flex items-center gap-2">
         {elVal.type === "text" && (
          <Type className="w-4 h-4 text-zinc-500 shrink-0" />
        )}
        {elVal.type === "image" && (
          <ImageIcon className="w-4 h-4 text-zinc-500 shrink-0" />
        )}
        {elVal.type === "link" && (
          <LinkIcon className="w-4 h-4 text-blue-400 shrink-0" />
        )}
        <Label className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
          {label}
        </Label>
      </div>

      {/* Text element */}
      {elVal.type === "text" &&
        (elVal.value.length > 60 ? (
          <Textarea
            className="bg-zinc-900 border-zinc-700 text-sm text-white min-h-[90px] resize-none focus:border-blue-500"
            value={elVal.value}
            onChange={(e) =>
              updateSectionElement(sectionId, elKey, { value: e.target.value })
            }
          />
        ) : (
          <Input
            className="bg-zinc-900 border-zinc-700 text-sm text-white focus:border-blue-500"
            value={elVal.value}
            onChange={(e) =>
              updateSectionElement(sectionId, elKey, { value: e.target.value })
            }
          />
        ))}

      {/* Link element */}
      {elVal.type === "link" && (
        <div className="space-y-1.5">
          <Input
            className="bg-zinc-900 border-zinc-700 text-sm text-white focus:border-blue-500"
            value={elVal.value}
            placeholder="Link text"
            onChange={(e) =>
              updateSectionElement(sectionId, elKey, { value: e.target.value })
            }
          />
          <Input
            className="bg-zinc-900 border-zinc-700 text-xs text-blue-300 focus:border-blue-500"
            value={elVal.href || "#"}
            placeholder="URL (href)"
            onChange={(e) =>
              updateSectionElement(sectionId, elKey, { href: e.target.value })
            }
          />
        </div>
      )}

      {/* Image element */}
      {elVal.type === "image" && (
        <div className="space-y-1.5">
          <Input
            className="bg-zinc-900 border-zinc-700 text-sm text-white focus:border-blue-500"
            value={elVal.src || ""}
            placeholder="Image URL"
            onChange={(e) =>
              updateSectionElement(sectionId, elKey, { src: e.target.value })
            }
          />
          <div className="flex gap-1.5">
            <Input
              className="bg-zinc-900 border-zinc-700 text-xs text-white focus:border-blue-500 flex-1"
              value={elVal.alt || ""}
              placeholder="Alt text"
              onChange={(e) =>
                updateSectionElement(sectionId, elKey, { alt: e.target.value })
              }
            />
            <Input
              className="bg-zinc-900 border-zinc-700 text-xs text-white focus:border-blue-500 w-24"
              value={elVal.styles?.width || ""}
              placeholder="Width"
              onChange={(e) =>
                updateSectionElement(sectionId, elKey, {
                  styles: { ...elVal.styles, width: e.target.value },
                })
              }
            />
          </div>
        </div>
      )}

      {/* 4-Direction Padding */}
      <div className="grid grid-cols-4 gap-1">
        {(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"] as const).map(
          (dir) => (
            <Input
              key={dir}
              className="bg-zinc-950 border-zinc-800 text-center text-[10px] text-zinc-500 focus:text-white focus:border-zinc-600 h-7"
              placeholder={dir.replace("padding", "").charAt(0)}
              value={elVal.styles?.[dir] || ""}
              onChange={(e) =>
                updateSectionElement(sectionId, elKey, {
                  styles: { ...elVal.styles, [dir]: e.target.value },
                })
              }
            />
          ),
        )}
      </div>
    </div>
  );
}

// ─── Sortable Section Card ──────────────────────────────────────────────
function SortableSection({
  section,
  idx,
  isCollapsed,
  toggleCollapse,
  updateSectionElement,
  duplicateSection,
  removeSection,
}: {
  section: { id: string; type: string; label?: string; elements: Record<string, ContentElement> };
  idx: number;
  isCollapsed: boolean;
  toggleCollapse: (id: string) => void;
  updateSectionElement: (sid: string, eid: string, u: Partial<ContentElement>) => void;
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
      ref={setNodeRef}
      style={style}
      className="bg-zinc-800/40 rounded-xl border border-zinc-800/80 overflow-hidden mb-3 hover:border-zinc-700 transition-colors shadow-sm"
    >
      <Collapsible open={!isCollapsed} onOpenChange={() => toggleCollapse(section.id)}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 bg-zinc-800/60 transition-colors">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div
              className="cursor-grab active:cursor-grabbing p-1 hover:bg-zinc-700 rounded"
              {...attributes}
              {...listeners}
            >
              <GripVertical className="w-4 h-4 text-zinc-600" />
            </div>

            <CollapsibleTrigger
              className="flex items-center gap-2 hover:text-blue-400 transition-colors flex-1 text-left outline-none cursor-pointer"
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-zinc-500" />
              )}
              <span className="text-sm font-bold uppercase tracking-wider text-zinc-300 truncate">
                {section.label || section.type}
              </span>
            </CollapsibleTrigger>
          </div>

          <div className="flex items-center gap-1.5">
            <Badge
              variant="secondary"
              className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-500 border-zinc-700"
            >
              {elementCount}
            </Badge>
            <button
              title="Duplicate section"
              onClick={() => duplicateSection(section.id)}
              className="p-1.5 hover:bg-zinc-700 rounded text-zinc-500 hover:text-white transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              title="Delete section"
              onClick={() => removeSection(section.id)}
              className="p-1.5 hover:bg-red-900/50 rounded text-zinc-500 hover:text-red-400 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <CollapsibleContent>
          <div
            className="px-4 py-4 space-y-5"
            onPointerDown={(e) => e.stopPropagation()}
          >
            {elementCount === 0 ? (
              <p className="text-xs text-zinc-600 italic py-2">
                No editable elements in this section
              </p>
            ) : (
              Object.entries(section.elements).map(([elKey, elVal]) => (
                <ElementEditor
                  key={elKey}
                  elKey={elKey}
                  elVal={elVal}
                  sectionId={section.id}
                  updateSectionElement={updateSectionElement}
                />
              ))
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
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 text-xs text-zinc-600 hover:text-blue-400 transition-colors bg-zinc-900/50 px-4 py-2 rounded-lg border border-dashed border-zinc-700 w-full justify-center"
        >
          <Plus className="w-4 h-4" />
          <span>Add another section</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center py-3 px-3 bg-zinc-900/50 rounded-lg border border-dashed border-zinc-700 my-2">
      {sectionTypes.map((type) => (
        <Button
          key={type}
          variant="outline"
          size="sm"
          className="text-[10px] h-6 px-2 uppercase tracking-wider border-zinc-700 text-zinc-400 hover:text-white hover:border-blue-500"
          onClick={() => {
            addSection(afterSectionId, type);
            setOpen(false);
          }}
        >
          {type}
        </Button>
      ))}
      <Button
        variant="ghost"
        size="sm"
        className="text-[10px] h-6 px-2 text-zinc-600"
        onClick={() => setOpen(false)}
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

  const toggleCollapse = useCallback((id: string) => {
    setCollapsedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const collapseAll = useCallback(() => {
    if (!activeTemplate) return;
    const all: Record<string, boolean> = {};
    activeTemplate.sections.forEach((s) => {
      all[s.id] = true;
    });
    setCollapsedSections(all);
  }, [activeTemplate]);

  const expandAll = useCallback(() => setCollapsedSections({}), []);

  if (!activeTemplate) {
    return (
      <div className="w-[420px] shrink-0 border-r border-zinc-800 bg-zinc-950 p-6 text-white flex flex-col justify-center items-center h-full">
        <ChevronsUpDown className="w-10 h-10 text-zinc-700 mb-4" />
        <p className="text-zinc-500 text-sm">
          Select a template to start editing
        </p>
      </div>
    );
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = activeTemplate!.sections.findIndex(
        (s) => s.id === active.id,
      );
      const newIndex = activeTemplate!.sections.findIndex(
        (s) => s.id === over.id,
      );
      reorderSections(oldIndex, newIndex);
    }
  }

  // Get unique section types for the "Add Section" menu
  const sectionTypes = [
    ...new Set(activeTemplate.sections.map((s) => s.type)),
  ];

  return (
    <div className="w-[420px] shrink-0 border-r border-zinc-800 bg-zinc-900 text-white flex flex-col h-full shadow-xl">
      {/* Sticky Header */}
      <div className="p-5 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md z-20 space-y-4 shrink-0">
        {/* Template Selector */}
        <Select
          value={activeTemplate.id}
          onValueChange={(val) => {
            if (val) {
              setActiveTemplate(val);
              setCollapsedSections({});
            }
          }}
        >
          <SelectTrigger className="bg-zinc-800 border-zinc-700/50 text-white h-10 px-4">
            <SelectValue placeholder="Choose template" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-700">
            {templates.map((t) => (
              <SelectItem
                key={t.id}
                value={t.id}
                className="text-white hover:bg-zinc-800 focus:bg-zinc-800"
              >
                {t.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
            Sections ({activeTemplate.sections.length})
          </span>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="text-[10px] h-6 px-2 text-zinc-500 hover:text-white uppercase tracking-wider"
              onClick={expandAll}
            >
              Expand
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[10px] h-6 px-2 text-zinc-500 hover:text-white uppercase tracking-wider"
              onClick={collapseAll}
            >
              Collapse
            </Button>
          </div>
        </div>
      </div>

      {/* Scrollable Sections */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={activeTemplate.sections.map((s) => s.id)}
              strategy={verticalListSortingStrategy}
            >
              {activeTemplate.sections.map((section, idx) => (
                <React.Fragment key={section.id}>
                  <SortableSection
                    section={section}
                    idx={idx}
                    isCollapsed={collapsedSections[section.id] ?? false}
                    toggleCollapse={toggleCollapse}
                    updateSectionElement={updateSectionElement}
                    duplicateSection={duplicateSection}
                    removeSection={removeSection}
                  />
                  <AddSectionButton
                    afterSectionId={section.id}
                    sectionTypes={sectionTypes}
                    addSection={addSection}
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
