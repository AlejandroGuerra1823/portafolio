---
name: 1% de Desorden
description: A pen-plotter sheet (after Vera Molnár) that draws an AI engineer's verified record on technical paper.
colors:
  paper: "#faf7f0"
  paper-deep: "#f2eee2"
  ink: "#1c1c1c"
  ink-soft: "#5c564a"
  pen: "#2038b0"
  pen-deep: "#192c8f"
  signal: "#c62e2e"
  rule: "#d9d3c2"
  line: "rgba(28, 28, 28, 0.3)"
  blueprint-paper: "#1c2f80"
  blueprint-paper-deep: "#182a74"
  blueprint-ink: "#f6f3e9"
  blueprint-ink-soft: "#b7c1ee"
  blueprint-pen-deep: "#ffffff"
  blueprint-signal: "#ff8273"
  blueprint-rule: "#33479c"
  blueprint-line: "rgba(246, 243, 233, 0.4)"
typography:
  display:
    fontFamily: "Hershey single-stroke SVG paths (src/app/plotted-glyphs.json via PlottedText; not a CSS font)"
    fontWeight: 400
    letterSpacing: "normal"
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.08em"
  readout:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 600
    letterSpacing: "normal"
rounded:
  focus: "1px"
  stamp: "2px"
spacing:
  gutter: "20px"
  section-y: "80px"
  section-y-md: "112px"
  container: "64rem"
components:
  button-primary:
    backgroundColor: "{colors.pen}"
    textColor: "{colors.paper}"
    rounded: "{rounded.stamp}"
    padding: "0.68rem 1.15rem"
  button-primary-hover:
    backgroundColor: "{colors.pen-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    padding: "0.68rem 1.15rem"
  button-ghost-hover:
    textColor: "{colors.pen}"
  plot-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.stamp}"
  plot-toast:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pen}"
    rounded: "{rounded.stamp}"
    padding: "0.6rem 1rem"
---

# Design System: 1% de Desorden

## Overview

**Creative North Star: "1% de Desorden"** — a pen-plotter sheet, after Vera Molnár's «(Dés)Ordres».

The page is a single sheet of warm technical paper on which a plotter executes a job (`PLOT AG-2026`). Everything on it behaves like plotted output: single-stroke display lettering, hairline figures stroked in plotter-pen blue, registration marks in the corners, mono-face labels and readouts, leader-line annotations, section coordinates as axis ticks, and one unbroken pen line travelling down the left edge of the whole document. Content and instrument are the same thesis: directed disorder — the engineer doses the machine's freedom, and signal red appears only where the system detects an anomaly.

The world refuses both the dark-neon dev-terminal and the minimal white CV. It is dense with annotation but never decorated: every figure is labeled and traceable to a source file, every headline metric is printed in the server-rendered HTML at first paint, and motion only re-traces what is already true. One passage drowns: the Dilo case study is a blueprint lámina where the token set inverts (deep blueprint blue ground, paper-white pen).

**Key Characteristics:**
- Warm paper ground (#faf7f0) with hairline stroked figures; nothing is filled except button grounds and data-point dots
- Plotter pen blue (#2038b0) owns every drawn figure, rule, metric readout, and the travelling axis line
- Signal red (#c62e2e) is semantics only — it marks what the system detected, never decoration
- Exactly one inverted blueprint section (`.blueprint` re-scopes the custom properties)
- SSR serves the final plotted state; animation is a one-time linear pen re-trace toward it
- Bilingual EN/ES with ES as the layout base case; light-only (`color-scheme: only light`)

## Colors

A five-voice palette — paper, ink, pen, signal, rule — expressed twice: once on paper, once inverted inside the blueprint. All tokens live as CSS custom properties on `:root` (globals.css) and are re-scoped by `.blueprint`.

### Primary
- **Plotter Pen** (`--pen`, #2038b0): the machine's ink. Every drawn figure, metric value, leader line, axis rule, link accent, selection highlight, caret, and focus outline. Primary button ground.
- **Pen Pressed** (`--pen-deep`, #192c8f): primary button hover ground and its border.

### Secondary
- **Signal Red** (`--signal`, #c62e2e): exclusively what the system detects — flagged anomaly cells in the Molnár fields and the "flagged" readout in the Disorder Lab. Appears nowhere else.

### Neutral
- **Technical Paper** (`--paper`, #faf7f0): page and panel ground.
- **Deep Paper** (`--paper-deep`, #f2eee2): scrollbar track; recessed paper.
- **Ink** (`--ink`, #1c1c1c): body text, headings, stamped-button borders.
- **Soft Ink** (`--ink-soft`, #5c564a): secondary text, labels, figure captions — a warm brown tinted from the paper, deliberately not gray.
- **Ruled Line** (`--rule`, #d9d3c2): the sheet's pale ruled lines — table/list row dividers, panel inner dividers, metric-grid gaps.
- **Panel Stroke** (`--line`, rgba(28,28,28,0.3)): 1px panel and image borders, ghost-button borders, slider track.

### Blueprint (the one Drenched passage)
Inside `.blueprint` the same variable names invert: ground #1c2f80 (deep #182a74), ink #f6f3e9 with soft ink #b7c1ee, the pen draws in paper-white (#f6f3e9, pressed #ffffff), signal becomes #ff8273, rule #33479c, panel stroke rgba(246,243,233,0.4). Components written against the variables need no blueprint-specific code.

### Named Rules
**The Red Means Detected Rule.** Signal red appears only on what the system flags (anomaly cells, flagged counts). Red is never decoration, emphasis, or an error style invented for layout.
**The One Blueprint Rule.** Exactly one section on the page carries `.blueprint`. The inversion is an event, not a theme.
**The Warm Neutral Rule.** There is no gray. Secondary text and marks are warm ink-soft (#5c564a) tinted from the paper; dividers are the paper's own ruled lines (#d9d3c2).

## Typography

**Display Font:** Hershey single-stroke SVG lettering (generated by `scripts/gen-plotted.mjs` into `src/app/plotted-glyphs.json`, rendered by `PlottedText`) — not a webfont
**Body Font:** Atkinson Hyperlegible (400/700, next/font, `--font-body`; fallback system-ui)
**Label/Mono Font:** Martian Mono (400/600, next/font, `--font-mono`; fallback ui-monospace)

**Character:** The display voice is the plotter's own handwriting — round-capped single strokes (stroke-width 1.3–1.6, `vector-effect: non-scaling-stroke`), FOUT-immune because it is paths, not glyphs. Martian Mono is the drafting-template voice for every label and number; Atkinson Hyperlegible carries prose with maximum legibility. (The direction contract proposed Routed Gothic for labels; the build shipped Martian Mono as the face itself — Martian Mono is normative.)

### Hierarchy
- **Display** (PlottedText, stroke 1.3–1.6, sized by container width, e.g. hero name max 560px wide): section names and the hero mark only. Always paired with an `sr-only` text or `aria-label`; never styled HTML text.
- **Readout** (Martian Mono 600, 20–24px, `tabular-nums`): headline metric values, in pen blue.
- **Body** (Atkinson 400, 15–16px, leading-relaxed, max 62–72ch): prose, case-study blocks, bullets.
- **Label** (Martian Mono 400, 10–12px, tracking 0.04–0.08em, uppercase for headers/ticks/buttons): figure labels (10px SVG `.fig-label`), nav (11px), axis ticks (11px), panel headers, sources, stacks, periods.

### Named Rules
**The Drawn Display Rule.** Display type is single-stroke SVG via `PlottedText`, period. No HTML heading is ever set in a display webfont; `h1/h2` wrap the SVG plus screen-reader text.
**The Tabular Numbers Rule.** Every numeric readout (metrics, periods, lab counters) sets `tabular-nums`.

## Layout

One column down one sheet. Content lives in a `max-w-5xl` (64rem) container with 20px gutters (`px-5`), offset `lg:pl-14` to leave room for the plot axis. Every section is a `Lamina`: a `<section>` carrying the 1.5px pen-blue `axis-rule` down its left edge (segments abut so the line never lifts, hero to footer), a heading row with the plotted title left and a mono `axis-tick` coordinate right (`№ 02 · blueprint` … `№ 09 · contacto`), then content. Vertical rhythm: `py-20 md:py-28` (80/112px) per lamina; `mb-10 md:mb-14` under headings; internal stacks on multiples of 8–12 (mt-3/4/6/8/10).

390px-first. The hero is a `lg:grid-cols-[7fr_5fr]` grid; the metrics ficha (plot-panel) precedes the Molnár figure in DOM order so metrics and CTAs sit in the first mobile viewport. The sticky job-header strip (h-14, mono 11px) is the sheet's chrome. Wide figures (timeline) use an inner `overflow-x-auto` region with a `.scroll-fade` gradient affordance on mobile only (hidden ≥768px). ES copy (+25%) is the base layout case; EN inherits. Hover styles exist only under `(hover: hover) and (pointer: fine)` (Tailwind `hoverOnlyWhenSupported` + media-queried CSS).

## Elevation & Depth

The sheet is flat. There are no layered surfaces, no overlays, no tonal elevation — a single piece of paper with things drawn on it. Depth is conveyed by hairline strokes (`--line` panel borders) and the one inversion event (the blueprint lámina reads as a different plate, not a raised surface). Exactly two soft shadows exist, both grounding "stamped" objects onto the paper:

### Shadow Vocabulary
- **Stamp** (`box-shadow: 0 2px 10px rgba(32, 56, 176, 0.22)`): the primary stamp button only — a pen-blue-tinted settle.
- **Toast stamp** (`box-shadow: 0 3px 14px rgba(28, 25, 18, 0.18)`): the plot-toast, which floats by nature.

### Named Rules
**The Flat Sheet Rule.** No new shadows. Panels, cards, images, and the blueprint sit on the paper with 1px strokes; only the two stamp shadows above exist.

## Shapes

Drawn, square, hairline. Strokes are 1–1.6px (`vector-effect: non-scaling-stroke` on every SVG path) with round caps and joins — pen nib physics. Corners are effectively square: 2px radius on stamped objects (buttons, panels, toast, slider thumb) and 1px on the focus outline; nothing rounder exists. Figures are outlines, never fills — the only fills are the primary button's pen-blue ground, data-point dots, and timeline event dots. Recurring geometry: concentric squares with seeded perturbation (MolnarField, deterministic mulberry32), registration marks (14px crosshair + circle) at sheet corners, leader lines (`.leader`, a 1rem × 1.5px pen dash before annotations), and 1.5px axis segments.

## Components

### Buttons (`.stamp-btn`)
- **Character:** stamped onto the paper — mono, uppercase, square.
- **Shape:** near-square (2px radius), 1.5px border, padding 0.68rem 1.15rem, Martian Mono 0.8rem, tracking 0.04em, uppercase, 0.55rem icon gap.
- **Primary:** pen-blue ground (#2038b0), paper text (#faf7f0), pen-deep border, stamp shadow. Hover (fine pointers only): ground deepens to pen-deep. Active: `scale(0.97)` at 160ms `--ease-out`.
- **Ghost (`--ghost`):** transparent ground, ink text, `--line` border, no shadow. Hover: border and text turn pen blue.
- **Micro variant:** header CV/language controls — 1px bordered mono 11px chips (`px-2 py-1`, uppercase); CV chip inverts to pen-ground on hover.

### Cards / Containers (`.plot-panel`)
- **Corner Style:** 2px radius, 1px `--line` border, `--paper` ground, no shadow.
- **Structure:** mono-label header row and footer rows divided by 1px `--rule`; the metrics ficha is a `gap-px bg-[--rule]` grid of paper cells (ruled-line gaps as dividers).

### Inputs (`.disorder-slider`)
- **Style:** the only input — a range slider drawn as a 1.5px `--line` track with a 14px square thumb (paper fill, 1.5px pen border, 2px radius) inside a 28px touch target; `touch-action: none`. Discrete steps only (0/1/5/20% — a plotter re-runs a job, it does not interpolate). Active: thumb scales 1.15.
- **Focus (all controls):** `outline: 2px solid var(--pen); outline-offset: 2px` on `:focus-visible`.

### Navigation (job header)
- **Style:** sticky, h-14, paper ground, 1px `--line` bottom border; Martian Mono 11px, tracking 0.06em, uppercase. Plot ID left in semibold ink; links in ink-soft, hover/active to pen blue; EN|ES toggle as a job parameter chip.

### Toast (`.plot-toast`)
- Headless sonner `toast.custom`: paper ground, 1.5px ink border, pen-blue mono uppercase 0.78rem text, toast-stamp shadow, bottom-center.

### Signature: PlottedText, MolnarField, plotted figures
- **PlottedText:** Hershey paths from `plotted-glyphs.json`, `currentColor` stroke; optional `draw` re-trace (0.3s linear per path, 55ms stagger).
- **MolnarField:** cols×rows concentric-square grid, seeded disorder; flagged cells (`.mf-flag`) switch to signal red at stroke 1.4 vs pen 1.0. Hero: 10×11, 5% disorder, seed 1805; only outer rings animate (`.mf-draw`).
- **Figures (RecallCurve, DiloTimeline):** server-rendered SVG, `--rule` gridlines, pen data strokes (1.6px), 10px `.fig-label` mono annotations; every figure carries a leader-line caption naming its source file. Below-the-fold figures ink once via `InkOnView` → `.is-inked` (0.7s linear), never scroll-scrubbed.

### Motion grammar
All entrance motion is a linear pen re-trace (stroke-dashoffset 1→0): 0.3–0.35s glyphs/field, 0.7s figures, 1.6s hero axis. UI state transitions use 160–180ms with `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`. Everything animates once, after which the state is identical to the SSR output; `prefers-reduced-motion` removes all of it (the sheet is simply printed).

## Do's and Don'ts

### Do:
- **Do** render every drawn element as stroked SVG with `vector-effect: non-scaling-stroke`, stroke 1–1.6px, round caps, `currentColor` or `var(--pen)`.
- **Do** write components against the custom properties (`--paper`, `--ink`, `--pen`, `--signal`, `--rule`, `--line`) so they survive the `.blueprint` inversion unchanged.
- **Do** serve the final plotted state from the server; add motion only as a one-time linear re-trace toward it (The SSR-Final-State Rule), removed under reduced motion.
- **Do** print every metric in the HTML, in Martian Mono tabular figures, with a labeled source link (repo / RESULTS.md path) — a figure may echo a number, never solely host it.
- **Do** annotate figures with `.leader` leader-line captions and mono `.fig-label`s; give every section an `axis-tick` coordinate.
- **Do** gate hover styles behind `(hover: hover) and (pointer: fine)`, keep uppercase labels in Martian Mono at 10–12px, and localize every string EN/ES (ES is the layout base case).

### Don't:
- **Don't** use signal red for anything the system did not detect — no red CTAs, errors-as-decoration, or accents.
- **Don't** add a second blueprint/inverted section, a dark mode, or any ground other than the paper tokens.
- **Don't** set display type as HTML text in a display font — plotted headings come only from `PlottedText` + sr-only text.
- **Don't** scroll-scrub, loop, or reverse draw animations — a plotter never un-draws — and don't animate the metrics ficha or CTAs (they never join the theater).
- **Don't** introduce gray neutrals, radii above 2px, new shadows, filled illustration shapes, gradients (beyond the `.scroll-fade` paper fade), monetary symbols near metrics, or `deviceorientation` input.
- **Don't** fake field counts — Molnár stats are computed from the same seeded RNG that renders the cells (`molnarStats` keeps call parity with the renderer).
