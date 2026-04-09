import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
	title: "Perfume Builder — eBay Listing Templates",
	description: "Customize and export premium eBay perfume listing templates",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className="dark" lang="en">
			<body
				className={`${inter.className} min-h-screen bg-zinc-900 text-zinc-50 antialiased`}
			>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}
