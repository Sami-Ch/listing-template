"use client";

import React, { useEffect, useState } from "react";
import EditorSidebar from "@/components/editor/EditorSidebar";
import LivePreview from "@/components/preview/LivePreview";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="flex h-screen w-full overflow-hidden bg-zinc-900 text-white items-center justify-center">
        <div className="w-6 h-6 border-2 border-zinc-800 border-t-white rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="flex h-screen w-full overflow-hidden bg-zinc-900 text-white">
      <EditorSidebar />
      <LivePreview />
    </main>
  );
}
