# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: tech recruiters, hiring managers and CTOs/engineering leads evaluating Manuel Alejandro Guerra Arango for **AI Engineer** and **Full-Stack + AI** roles — in Colombia (local/hybrid), LATAM remote, and US/EU remote. They arrive mid-task from his LinkedIn profile (very often the LinkedIn mobile in-app browser), his GitHub profile, or a link on his CV. They give the page 30–90 seconds on first visit and are deciding one thing: "is this person worth a conversation?"

Secondary: peer engineers and the AI community (status/credibility audience) arriving from GitHub or shared links.

## Product Purpose

Convert a profile visit into a hiring conversation. The page must make a skeptical technical evaluator believe — through verifiable evidence, not claims — that the owner is a production-grade AI engineer with a rare substrate: senior full-stack/mobile engineering in regulated digital banking. Success = CV downloaded, GitHub opened, or email/LinkedIn contact initiated. A second-order goal: the page itself should signal industry status — the craft of the site is part of the proof.

## Positioning

The one claim neighbors cannot truthfully copy: **he architected a digital banking wallet (Dilo, Banco Atlántida) from zero to production in both app stores, then moved its delivery to a 100% agentic workflow (Claude Code + MCP) that kept pace when the team went 5 → 2 — and he ships public AI projects with published evals** (MCP server, LangGraph agent, RAG service). Evidence-first: every headline metric on the page is real and reproducible from public repos.

## Operating Context

- Linked from LinkedIn (EN primary profile), GitHub profile README, and both CV PDFs — it is the hub of a coherent cross-platform personal brand.
- Frequent first contact happens inside the LinkedIn mobile in-app browser: mobile rendering and load speed are first-class, not an afterthought.
- Bilingual by contract: every visible string exists in EN (default) and ES; a language toggle switches the whole page including any narrative/dynamic content.
- Deploys to production automatically on every push to `main` (Vercel, alejo-guerra-dev.vercel.app). `yarn build` must pass before any push.

## Capabilities and Constraints

- Stack: Next.js 15 (App Router), Tailwind CSS 3, framer-motion 12, React Three Fiber available. React 19.
- CV PDFs served from `/cv/CV_Alejandro_Guerra_EN.pdf` and `_ES.pdf` — the download affordance must remain prominent in both languages.
- Real photo asset: `/images/yoPelinegro.jpeg`.
- All animation must respect `prefers-reduced-motion`; heavy effects (WebGL) degrade gracefully and never gate content.
- Content truth (fixed facts, never to be embellished): Dilo launched June 2026 on both stores; team of 5 led, now 2; 100% agentic workflow since Feb 2026; Apple Pay/Google Pay integration (Evertec, Thales); 70+ white-label apps shipped at Q10; 3 public AI projects with published evals — colombia-finance-mcp (16 tests), financial-analysis-agent (95.8% accuracy, F1 0.89, zero false positives), financial-docs-rag (Recall@1 90%, MRR 0.925, LLM-judge 5.0/5, 100% groundedness); 6 certifications (5 Anthropic, 1 Sofka); Spanish native, English B2; started with Scratch in school; music as the off-keyboard fact.

## Brand Commitments

- Name and title: "Alejandro Guerra — AI Engineer". Voice: direct, concrete, evidence-first; zero hype adjectives about himself (the metrics talk).
- The previous navy/teal (#070d18 / #3fd6c2) identity was explicitly **released** by the owner on 2026-10-02: the visual world may be fully rebuilt. Consequence recorded: after shipping, the LinkedIn/GitHub banner and CV accent color must be regenerated to match the new world so the cross-platform brand stays coherent.
- No invented testimonials, logos, client quotes, business metrics (Dilo business KPIs are explicitly off-limits), salaries, or capability claims.

## Evidence on Hand

- Live repos: github.com/AlejandroGuerra1823/{colombia-finance-mcp, financial-analysis-agent, financial-docs-rag} — each with tests and published eval results (RESULTS.md / RETRIEVAL_RESULTS.md / JUDGE_RESULTS.md).
- Case study material for Dilo (challenge/solution/outcome + stack) already written and verified in both languages.
- Full bilingual copy for experience timeline (4 roles), certifications, about, contact — in `src/app/page.tsx` of the incumbent build.
- Absences that must not be fabricated: testimonials, press, client logos beyond naming Banco Atlántida/Sofka/Q10 factually, download/user counts for Dilo.

## Product Principles

1. **Prove, don't claim** — evals, metrics, and live demonstrations are the design material; adjectives are not.
2. **The site is the portfolio's fourth project** — its own craft must demonstrate the engineering taste the copy claims.
3. **Recruiter on a phone first** — the 390px in-app-browser rendering is the primary scene, not the degraded one.
4. **Bilingual parity always** — EN and ES are equal citizens; nothing ships in one language.
5. **One brand across platforms** — whatever world wins here propagates to LinkedIn banner, GitHub, and CV next.

## Accessibility & Inclusion

Respect `prefers-reduced-motion` everywhere; maintain WCAG AA contrast for all text; the page must be fully readable and navigable with motion and WebGL disabled.
