"use client";

import { useEffect, useState } from "react";
import EditorSidebar from "@/components/editor/EditorSidebar";
import LivePreview from "@/components/preview/LivePreview";

export default function Home() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<main className="flex h-screen w-full items-center justify-center overflow-hidden bg-zinc-900 text-white">
				<div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-800 border-t-white" />
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
