// Generates single-stroke (Hershey) lettering as SVG path data at build time.
// Output: src/app/plotted-glyphs.json — consumed by <PlottedText/>.
// Re-run with: node scripts/gen-plotted.mjs
import { renderTextArray } from "hersheytext";
import { writeFileSync } from "node:fs";

const STRINGS = {
  name1: "ALEJANDRO",
  name2: "GUERRA",
  role: "AI ENGINEER",
  role_es: "INGENIERO DE IA",
  dilo: "DILO",
  agent_en: "AGENT",
  agent_es: "AGENTE",
  rag: "RAG",
  mcp: "MCP",
  exp_en: "EXPERIENCE",
  exp_es: "EXPERIENCIA",
  certs_en: "CERTIFICATIONS",
  certs_es: "CERTIFICACIONES",
  about_en: "PROFILE",
  about_es: "PERFIL",
  contact_en: "CONTACT",
  contact_es: "CONTACTO",
};

const GAP = 3.5; // pen-up advance between glyphs, in Hershey units
const SPACE = 10;

function compose(text) {
  const glyphs = renderTextArray(text, { font: "futural" });
  let x = 0;
  const chars = [];
  for (const g of glyphs) {
    if (!g || !g.d || g.type === "space") {
      x += SPACE;
      continue;
    }
    const xs = [...g.d.matchAll(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g)].map((m) => parseFloat(m[1]));
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    chars.push({ d: g.d, x: x - minX });
    x += maxX - minX + GAP;
  }
  return { w: Math.max(1, Math.round((x - GAP) * 10) / 10), h: 24, chars };
}

const out = {};
for (const [key, text] of Object.entries(STRINGS)) out[key] = compose(text);
writeFileSync(new URL("../src/app/plotted-glyphs.json", import.meta.url), JSON.stringify(out));
console.log(`plotted-glyphs.json written: ${Object.keys(out).length} strings`);
