# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Alejandro Guerra's personal portfolio — alejo-guerra-dev.vercel.app. Next.js 15 (App Router) + Tailwind CSS 3 + framer-motion 12 + lucide-react + sonner. Deployed on Vercel: **every push to `main` deploys to production automatically** — always run `yarn build` locally and confirm it passes before pushing.

## Commands

```bash
yarn dev        # dev server (turbopack)
yarn build      # production build — REQUIRED before every push
yarn start      # serve the production build
node scripts/gen-plotted.mjs   # regenerate single-stroke lettering (src/app/plotted-glyphs.json)
```

## The visual world — "1% de Desorden" (pen-plotter, after Vera Molnár)

The site is a plotted technical sheet: the page is drawn by a machine under human direction. Governing docs (read them before any visual change):

- `PRODUCT.md` — product truth; every metric on the page is real and traceable to public repos. **Never invent or embellish a number.**
- `.impeccable/surfaces/src-app-page-tsx.md` — the direction contract (thesis, own-world tokens, first-viewport promise, named raises). The build is audited against it.
- `DESIGN.md` — the recorded design system (written by the documenter after each finish review).

Non-negotiable laws of this world:
- **SSR persuades at 0ms.** The served HTML always carries the final, fully-drawn state; animation re-traces toward it (never constructs it). framer-motion components must gate `initial` behind mount/interaction (see `Develop.tsx`, `DisorderLab.tsx`).
- **The pen draws linear, once.** Stroke draw-ins use `linear` (a plotter's real physics — the one sanctioned use), run once, and never scrub backwards with scroll. Text is printed (no entrance animations on prose).
- **Red = what the system detects.** `--signal` is semantics (flagged cells, anomalies), never decoration.
- **Honest counts.** The Molnár field's `disorder` prop IS the literal probability — a recruiter who counts cells must find the label true.
- **Reduced motion = the sheet fully plotted.** Identity survives with zero animation.
- **ES is the base layout case** (+25% text); EN inherits. Every visible string exists in both languages in `COPY`/labels, including plotted glyphs (regenerate via the script when adding display strings; Hershey has no accented glyphs — pick accent-free words for plotted headings).
- Display lettering is single-stroke SVG from `plotted-glyphs.json` (FOUT-immune). Labels/readouts: Martian Mono with `tabular-nums`. Body: Atkinson Hyperlegible.
- Icons: lucide stroke at 1.5px only; external links take a trailing `ArrowUpRight`; no filled brand glyphs.
- Mobile scene is primary: LinkedIn in-app browser at 390px. Keep `future.hoverOnlyWhenSupported`, `color-scheme: only light`, 28px slider touch target, `overscroll-x-contain` on horizontal scrollers, and the first viewport at 390×844 must contain name, hook, the four metrics and the three primary actions — in both languages.

## Architecture

- `src/app/page.tsx` — the whole site, one client component; all copy in the bilingual `COPY` object (EN default, ES via header toggle).
- `src/app/components/` — `PlottedText` (Hershey lettering), `MolnarField` (seeded grid; `mulberry32` PRNG shared logic with `molnarStats` — keep RNG call parity), `DisorderLab` (the thesis slider, discrete steps), `figures.tsx` (RecallCurve + DiloTimeline, real eval data only), `Develop` (portrait), `InkOnView` (one-time draw trigger), `CopyEmail` (clipboard with webview fallback).
- `public/cv/` — resume PDFs (EN/ES), generated from `~/Desktop/busqueda_empleo/03_cv_portafolio/cv_master_*.html`; update there, re-render, copy here.
- The eval figures mirror `~/Desktop/projects-ai/*/evals/*.md` — when evals change upstream, update the figures AND the metrics legend together.

## Process

This repo uses the impeccable skill's workflow: material UI changes should end with `impeccable detect --json` over changed files and (for significant work) a finish review before pushing. TypeScript is strict and `COPY` is `as const` — comparisons against literal values that no longer exist in the union break the build; delete dead branches instead of casting.
