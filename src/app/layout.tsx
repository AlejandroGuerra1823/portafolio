import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Martian_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "swap",
});

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

export const viewport: Viewport = {
  themeColor: "#faf7f0",
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${mono.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster position="bottom-center" gap={8} />
      </body>
    </html>
  );
}
