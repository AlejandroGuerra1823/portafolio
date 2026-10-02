---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface brief — src/app/page.tsx (portfolio home, mode: Persuade)

Scope: the whole one-page portfolio (hero + Dilo case + 3 AI projects + experience + certs + about + contact), bilingual EN/ES. Audience: recruiters/CTOs from LinkedIn (often 390px in-app browser), 30–90s. Primary actions: Download CV (EN/ES), Contact, Verify on GitHub. Untouched: all factual copy/metrics from PRODUCT.md, CV PDFs under /cv/, photo /images/yoPelinegro.jpeg. Anti-goals: the dark-neon dev-terminal rut (the incumbent, discarded), the white Swiss CV, any metric living only inside ornament or behind interaction.

## Direction contract

THESIS: A pen-plotter sheet that draws the engineer's record live under his direction — "I direct machines that build" made physical. One idea: directed disorder (agents execute, he doses their freedom; anomalies are what his systems catch). Refuses the category default — dark terminal portfolio with neon accent — and refuses to fix it by retreating to a minimal white CV: this page is a working drawing with a job header, not a decorated résumé.

OWN-WORLD: Technical paper #FAF7F0 carrying plotted structure (registration marks, job header strip, ruled plot axis); ink #1C1C1C; plotter blue #2038B0 owns every drawn figure, rule, label and the one unbroken pen line that travels the page; signal red #C62E2E reserved exclusively for what his systems detect (anomalies) — red is semantics, never decoration. One Drenched passage: the Dilo case as a blueprint lámina (deep blueprint blue ground #1B2F7E→#2038B0, paper-white ink). Type: display names/numerals as Hershey-style single-stroke SVG paths (drawn, FOUT-immune); labels/readouts in a drafting-template face (Routed Gothic self-hosted; Martian Mono fallback) with tabular numerals; body Atkinson Hyperlegible. Recognizable with all content removed: grid of concentric squares with seeded perturbation, leader-line annotations, single-stroke display, one blue traveling line, one blueprint plate.

STORY: At 0ms (SSR final state) the visitor already reads: name, "AI Engineer", Medellín, the one-line credit hook ("Architected a digital banking wallet, zero→production; since 2026 he ships with AI agents under his direction"), the four headline metrics printed with labels and sources, and three working buttons. The pen then animates toward that printed state — motion decorates, never constructs. Scroll advances the plot job down one ruled axis: Dilo blueprint → three repos as numbered láminas with eval readouts → experience → certs → contact. In the agent lámina, the disorder slider (discrete steps 0/1/5/20%) makes the thesis tangible: raising disorder reveals red anomalies and stamps `detected: N · false positives: 0 · F1 0.89`. Exit belief: "this person directs machines with discipline, and every claim is verifiable one tap away."

FIRST VIEWPORT: 390px-first. Top: plot-job header strip `PLOT AG-2026 · ALEJANDRO GUERRA · AI ENGINEER · MEDELLÍN, CO` with EN|ES toggle as job parameter. Center: the name as ONE giant single-stroke mark (hierarchy courage), the credit hook beneath it in ink, and beside/below it the Molnár field — 10×14 concentric squares at 1% seeded disorder, 3 red anomaly cells — annotated with a leader line. Bottom, inside the viewport: the fixed ficha — four metrics printed with labels (F1 0.89 · Recall@1 90% · MRR 0.925 · LLM-judge 5.0/5) each with its source path, and the primary actions as real buttons with plotted-stamp skin: [Download CV] [Contact] [GitHub]. The ficha and CTAs never participate in the drawing theater. The pen line enters top-left, draws through the field, exits toward section two.

FORM: Vera Molnár «(Dés)Ordres» / pen-plotter drawing — candidate 7 of 7 on the ordered grounded list (billete-guilloché fusion was 1st; Model Record 2nd; Libro Mayor 3rd; Observatorio 4th; Manual de Normas 5th; Bass 6th). Seed key b42aa6c7, assigned by the roll. All six dealt challengers declined on both axes; each donated a raise:
- Raise (jacquard brocade): full traceability — every figure links to its data row (RESULTS.md / repo / dataset); drawing and instruction are synchronized layers.
- Raise (mesophotic dive): one vertical ruler governs the page — a plot axis with advancing job state (section coordinates as plotted ticks).
- Raise (ANSI BBS): arrival is the event — the page streams in as a live plot job under its header; fully keyboard-operable.
- Raise (darkroom): the portrait develops — his photo emerges once from paper (grayscale develop, settled; static under reduced-motion).
- Raise (gothic mook): annotated everything — every figure carries a leader-line label naming it and its source.
- Raise (illuminated initial): one giant mark owns the hero, and the pen line never lifts — one continuous line is the page's wayfinding thread.
- Raise (judges' iron rule): every headline metric exists printed, labeled, at first paint, with a verification link; the world may echo it as ornament but never solely host it.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Open decisions a builder must not invent
- No monetary symbols anywhere near metrics (world adjacency risk is low here, keep it zero).
- deviceorientation is never used; slider and scroll drive everything; reduced-motion = sheet fully plotted.
- ES layouts are the base case (+25% text); EN inherits.
- SSR serves the final plotted state; animation subtracts (draws toward it) via progressive enhancement.
