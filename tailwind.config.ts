import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  // hover: utilities only where a real pointer exists — otherwise the first
  // tap on a touch screen leaves hover styles stuck
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
