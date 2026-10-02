# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Alejandro Guerra's personal portfolio — alejo-guerra-dev.vercel.app. Next.js 15 (App Router) + Tailwind CSS 3 + Framer Motion 12 + React Three Fiber. Deployed on Vercel: **every push to `main` deploys to production automatically** — always run `yarn build` locally and confirm it passes before pushing.

## Commands

```bash
yarn dev        # dev server (turbopack)
yarn build      # production build — REQUIRED before every push
yarn start      # serve the production build
```

## Architecture

- `src/app/page.tsx` — the whole site, one client component. All copy lives in the `COPY` object with `en`/`es` variants (EN is the default; the navbar button toggles). **Every visible string must exist in both languages.** The hero terminal script lives in `TERMINAL` (also bilingual).
- `src/app/components/AgentTerminal.tsx` — typewriter terminal in the hero; respects `prefers-reduced-motion` (renders instantly).
- `src/app/components/NodeField.tsx` — R3F particle network behind the hero. Lazy-loaded (`next/dynamic`, `ssr: false`) and only mounted on ≥768px viewports without reduced motion — keep it that way for performance.
- `src/app/components/motion.tsx` — `Reveal` (scroll reveal) and `SpotlightCard` (mouse-tracked glow).
- `public/cv/` — the downloadable résumé PDFs (EN/ES). They are generated from `~/Desktop/busqueda_empleo/03_cv_portafolio/cv_master_*.html` — update there, re-render, and copy here.

## Conventions

- Brand: background `#070d18`, panels `#0c1626`, borders `#1c2b3f`, accent teal `#3fd6c2` (matches the owner's LinkedIn/GitHub banner). No other accent colors.
- TypeScript is strict and `COPY` is `as const`: when all items in a list share a literal value, conditionals on other values become `never` and **break the build** — simplify dead branches instead of adding casts.
- Animations must respect `prefers-reduced-motion` (see `Reveal` and `AgentTerminal` for the pattern).
- The "Projects" section mirrors the owner's GitHub profile README ("Building now") — when a project ships or changes, update both.
