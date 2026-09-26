import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alejandro Guerra — AI Engineer",
  description:
    "AI Engineer & Senior Full-Stack/Mobile Developer. I architected a digital banking wallet from scratch and build agentic systems with Claude Code & MCP. Medellín, Colombia.",
  openGraph: {
    title: "Alejandro Guerra — AI Engineer",
    description:
      "Agentic development · Digital banking · Mobile & Full-Stack. Built a banking wallet from scratch; building AI agents on top of 5+ years of engineering.",
    url: "https://alejo-guerra-dev.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
