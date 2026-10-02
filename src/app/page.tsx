"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import PlottedText from "./components/PlottedText";
import MolnarField from "./components/MolnarField";
import DisorderLab from "./components/DisorderLab";
import Develop from "./components/Develop";
import CopyEmail from "./components/CopyEmail";
import InkOnView from "./components/InkOnView";
import { DiloTimeline, RecallCurve } from "./components/figures";

type Lang = "en" | "es";

const LINKS = {
  github: "https://github.com/AlejandroGuerra1823",
  linkedin: "https://linkedin.com/in/alejandro-guerra-developer",
  email: "guerramanuel299@gmail.com",
  repoAgent: "https://github.com/AlejandroGuerra1823/financial-analysis-agent",
  repoRag: "https://github.com/AlejandroGuerra1823/financial-docs-rag",
  repoMcp: "https://github.com/AlejandroGuerra1823/colombia-finance-mcp",
  evalAgent: "https://github.com/AlejandroGuerra1823/financial-analysis-agent/blob/main/evals/RESULTS.md",
  evalRag: "https://github.com/AlejandroGuerra1823/financial-docs-rag/blob/main/evals/RETRIEVAL_RESULTS.md",
  evalJudge: "https://github.com/AlejandroGuerra1823/financial-docs-rag/blob/main/evals/JUDGE_RESULTS.md",
};

const cvPath = (lang: Lang) =>
  lang === "en" ? "/cv/CV_Alejandro_Guerra_EN.pdf" : "/cv/CV_Alejandro_Guerra_ES.pdf";

const COPY = {
  en: {
    nav: { dilo: "Dilo", projects: "Projects", experience: "Experience", contact: "Contact", cv: "Resume" },
    hero: {
      srTitle: "Alejandro Guerra — AI Engineer",
      hook:
        "I build banking products people use every day. I architected Dilo — Banco Atlántida's digital wallet — from zero to production in both app stores, and since February 2026 I ship it with AI agents working under my architecture and review.",
      place: "Medellín, Colombia · open to AI Engineer & Full-Stack + AI roles · on-site, hybrid or remote",
      figCaption: "fig. 01 — after Vera Molnár, «(Dés)Ordres»: seeded 5% disorder. Red marks what the system flags.",
      metricsTitle: "Published evaluation results",
      metrics: [
        { v: "0.89", label: "F1 · anomaly detection", src: "financial-analysis-agent / RESULTS.md", href: LINKS.evalAgent },
        { v: "90%", label: "Recall@1 · retrieval", src: "financial-docs-rag / RETRIEVAL_RESULTS.md", href: LINKS.evalRag },
        { v: "0.925", label: "MRR · retrieval ranking", src: "financial-docs-rag / RETRIEVAL_RESULTS.md", href: LINKS.evalRag },
        { v: "5.0/5", label: "LLM-judge · 100% grounded", src: "financial-docs-rag / JUDGE_RESULTS.md", href: LINKS.evalJudge },
      ],
      cta: "Download resume",
      contact: "Contact",
    },
    dilo: {
      tick: "№ 02 · blueprint",
      lead: "A digital banking wallet, built from zero in a regulated environment — cards, payments, identity, biometrics — with store releases from day one.",
      blocks: [
        {
          t: "The challenge",
          b: "Banco Atlántida (Honduras) needed a new digital wallet built from scratch: credit, debit and virtual cards, payments, identity and biometrics — shipping to both app stores from the first release.",
        },
        {
          t: "What I did",
          b: "Defined the architecture, coding standards and CI/CD pipelines (Azure DevOps) and led the 5-person team that built it. Shipped card management, payment-gateway integrations, bill payments, event ticketing, QR payments, Auth0 authentication and facial-recognition onboarding (FacePhi). I own every release to both stores.",
        },
        {
          t: "The outcome",
          b: "Launched on the App Store and Play Store in June 2026. Features keep shipping — today with a 2-person team, powered by the agentic workflow I designed with Claude Code and MCP.",
        },
      ],
      timeline: {
        pace: "delivery pace: constant",
        events: [
          { at: 0.04, date: "SEP 2025", text: "kickoff — first commit" },
          { at: 0.46, date: "FEB 2026", text: "100% agentic workflow", text2: "team 5 → 2" },
          { at: 0.84, date: "JUN 2026", text: "launched · App Store + Play Store" },
        ],
      },
      stackLabel: "parts list",
      stack: "React Native · TypeScript · Java Spring Boot · AWS · Azure DevOps · Auth0 · FacePhi · Evertec · Thales · Apple Pay / Google Pay (in-app provisioning)",
    },
    agent: {
      tick: "№ 03 · lámina",
      titleKey: "agent_en" as const,
      lead: "A multi-step LangGraph agent that categorizes bank transactions and detects anomalies with a hybrid rules + LLM pipeline — measured by a public eval suite.",
      lab: {
        slider: "disorder",
        perturbed: "perturbed cells",
        flagged: "flagged",
        falsePositives: "false positives",
        f1: "production F1: 0.89",
        caption: "Interactive demonstration: I decide how much freedom the machine gets; everything beyond tolerance is flagged, nothing else. The production numbers are below.",
      },
      resultsTitle: "Eval results — 48 labeled transactions, 5 gold anomalies",
      results: [
        ["categorization accuracy", "95.8% (46/48)"],
        ["anomaly precision", "100% — zero false positives"],
        ["anomaly recall", "80%"],
        ["F1", "0.89"],
      ],
      honesty: "One anomaly was missed (t031). It is published in the eval results, not hidden — that is the point of evals.",
      source: "Source: RESULTS.md",
      repo: "View repository",
      tags: "Python · LangGraph · Anthropic API · pytest",
    },
    rag: {
      tick: "№ 04 · lámina",
      lead: "A FastAPI RAG service over Colombian financial documents: cited answers, pgvector or a local index, and two public eval suites — retrieval metrics and an LLM-as-judge rubric.",
      figTitle: "Recall@k — 20 Spanish questions over 10 documents, k=5",
      figY: "recall",
      judgeLine: "LLM-as-judge on generated answers: 5.0/5 average · 100% grounded · 100% valid citations.",
      sources: "Sources: RETRIEVAL_RESULTS.md · JUDGE_RESULTS.md",
      repo: "View repository",
      tags: "FastAPI · pgvector · fastembed · Docker",
    },
    mcp: {
      tick: "№ 05 · lámina",
      lead: "An MCP server exposing Colombia's official TRM (USD/COP): current and historical rates, statistics and conversions — usable directly from Claude via the Model Context Protocol. 16 unit tests.",
      parts: "3 MCP tools · settled-rate caching · Socrata (datos.gov.co) client",
      repo: "View repository",
      tags: "TypeScript · MCP SDK · zod · vitest",
    },
    experience: {
      tick: "№ 06 · record",
      titleKey: "exp_en" as const,
      jobs: [
        {
          title: "Mobile Development Lead",
          company: "Sofka Technologies — consultant for Banco Atlántida",
          period: "SEP 2025 — PRESENT · REMOTE",
          bullets: [
            "Architected and built Dilo, the bank's digital wallet, from scratch to production (launched June 2026); led the 5-person build team and own every store release.",
            "Moved the project to a 100% agentic workflow: AI agents (Claude Code, MCP) plan, implement and test under my architecture and review.",
            "Integrated Apple Pay and Google Pay in the bank's main app (in-app provisioning, Evertec & Thales SDKs).",
          ],
        },
        {
          title: "Mobile Developer",
          company: "Q10 — EdTech, LATAM",
          period: "APR 2024 — SEP 2025 · MEDELLÍN",
          bullets: [
            "Built and deployed 70+ white-label mobile apps across LATAM with push notifications, maps, QR and NFC.",
            "Defined new mobile architecture patterns adopted by the team; owned deployments and production support.",
          ],
        },
        {
          title: "Front-End Developer",
          company: "Emprendi — startup",
          period: "SEP 2023 — MAR 2024 · REMOTE",
          bullets: [
            "Built responsive web and mobile interfaces (Next.js, React, React Native, TailwindCSS) and integrated RESTful APIs.",
          ],
        },
        {
          title: "Mobile Developer & Tester",
          company: "Q10",
          period: "APR 2021 — SEP 2023 · MEDELLÍN",
          bullets: [
            "Started in QA and grew into mobile development: test planning, then feature development, incident resolution and store deployments.",
          ],
        },
      ],
    },
    certs: {
      tick: "№ 07 · calibration",
      titleKey: "certs_en" as const,
      items: [
        "Anthropic — Claude Code 101",
        "Anthropic — Claude 101",
        "Anthropic — AI Fluency: Frameworks and Foundations",
        "Anthropic — Introduction to Agent Skills",
        "Anthropic — AI Capabilities and Limitations",
        "Sofka — AI Fundamentals",
      ],
    },
    about: {
      tick: "№ 08 · profile",
      titleKey: "about_en" as const,
      body:
        "I started programming in school with Scratch, graduated as a software technician, and never stopped building. Five years later my work runs in production banking and education apps used across Latin America. In 2026, agentic development changed how I work — and where I'm going: applying AI engineering to real products, starting with the domain I know best. Off the keyboard, music keeps me sane and curious.",
      langs: "Spanish (native) · English (B2)",
      photoAlt: "Alejandro Guerra",
    },
    contact: {
      tick: "№ 09 · contact",
      titleKey: "contact_en" as const,
      body: "Open to AI Engineer and Full-Stack + AI roles — Colombia or remote.",
      email: "Write me",
      copy: "Copy email",
      copied: "email copied",
    },
    footer: "© 2026 Alejandro Guerra — Built with Next.js, shipped with AI agents.",
    endOfPlot: "END OF PLOT · AG-2026",
  },
  es: {
    nav: { dilo: "Dilo", projects: "Proyectos", experience: "Experiencia", contact: "Contacto", cv: "Hoja de vida" },
    hero: {
      srTitle: "Alejandro Guerra — AI Engineer",
      hook:
        "Construyo productos bancarios que la gente usa todos los días. Diseñé la arquitectura de Dilo — la billetera digital de Banco Atlántida — desde cero hasta producción en ambas tiendas, y desde febrero de 2026 la construyo con agentes de IA que trabajan bajo mi arquitectura y revisión.",
      place: "Medellín, Colombia · abierto a roles de AI Engineer y Full-Stack + IA · presencial, híbrido o remoto",
      figCaption: "fig. 01 — según Vera Molnár, «(Dés)Ordres»: 5% de desorden sembrado. El rojo marca lo que el sistema detecta.",
      metricsTitle: "Resultados de evaluación publicados",
      metrics: [
        { v: "0,89", label: "F1 · detección de anomalías", src: "financial-analysis-agent / RESULTS.md", href: LINKS.evalAgent },
        { v: "90%", label: "Recall@1 · recuperación", src: "financial-docs-rag / RETRIEVAL_RESULTS.md", href: LINKS.evalRag },
        { v: "0,925", label: "MRR · ranking de recuperación", src: "financial-docs-rag / RETRIEVAL_RESULTS.md", href: LINKS.evalRag },
        { v: "5,0/5", label: "Juez LLM · 100% con sustento", src: "financial-docs-rag / JUDGE_RESULTS.md", href: LINKS.evalJudge },
      ],
      cta: "Descargar hoja de vida",
      contact: "Contacto",
    },
    dilo: {
      tick: "№ 02 · plano",
      lead: "Una billetera digital bancaria construida desde cero en un entorno regulado — tarjetas, pagos, identidad, biometría — con releases a tiendas desde el día uno.",
      blocks: [
        {
          t: "El reto",
          b: "Banco Atlántida (Honduras) necesitaba una billetera digital nueva construida desde cero: tarjetas de crédito, débito y virtuales, pagos, identidad y biometría — publicando en ambas tiendas desde el primer release.",
        },
        {
          t: "Lo que hice",
          b: "Definí la arquitectura, los estándares de código y los pipelines de CI/CD (Azure DevOps) y lideré el equipo de 5 personas que la construyó. Entregamos gestión de tarjetas, pasarelas de pago, pago de servicios, boletería, pagos QR, autenticación con Auth0 y onboarding con reconocimiento facial (FacePhi). Soy responsable de cada release a ambas tiendas.",
        },
        {
          t: "El resultado",
          b: "Lanzada en App Store y Play Store en junio de 2026. Las funcionalidades siguen saliendo — hoy con un equipo de 2 personas, impulsado por el flujo agéntico que diseñé con Claude Code y MCP.",
        },
      ],
      timeline: {
        pace: "ritmo de entrega: constante",
        events: [
          { at: 0.04, date: "SEP 2025", text: "kickoff — primer commit" },
          { at: 0.46, date: "FEB 2026", text: "flujo 100% agéntico", text2: "equipo 5 → 2" },
          { at: 0.84, date: "JUN 2026", text: "lanzamiento · App Store + Play Store" },
        ],
      },
      stackLabel: "lista de partes",
      stack: "React Native · TypeScript · Java Spring Boot · AWS · Azure DevOps · Auth0 · FacePhi · Evertec · Thales · Apple Pay / Google Pay (aprovisionamiento in-app)",
    },
    agent: {
      tick: "№ 03 · lámina",
      titleKey: "agent_es" as const,
      lead: "Un agente LangGraph multi-paso que categoriza movimientos bancarios y detecta anomalías con un pipeline híbrido de reglas + LLM — medido por una suite de evals pública.",
      lab: {
        slider: "desorden",
        perturbed: "celdas perturbadas",
        flagged: "detectadas",
        falsePositives: "falsos positivos",
        f1: "F1 en producción: 0,89",
        caption: "Demostración interactiva: yo decido cuánta libertad tiene la máquina; todo lo que excede la tolerancia se marca, nada más. Los números de producción están abajo.",
      },
      resultsTitle: "Resultados del eval — 48 transacciones etiquetadas, 5 anomalías doradas",
      results: [
        ["accuracy de categorización", "95,8% (46/48)"],
        ["precisión en anomalías", "100% — cero falsos positivos"],
        ["recall en anomalías", "80%"],
        ["F1", "0,89"],
      ],
      honesty: "Una anomalía se escapó (t031). Está publicada en los resultados del eval, no escondida — para eso son los evals.",
      source: "Fuente: RESULTS.md",
      repo: "Ver repositorio",
      tags: "Python · LangGraph · Anthropic API · pytest",
    },
    rag: {
      tick: "№ 04 · lámina",
      lead: "Un servicio RAG en FastAPI sobre documentos financieros colombianos: respuestas con citas, pgvector o índice local, y dos suites de evals públicas — métricas de recuperación y un juez LLM con rúbrica.",
      figTitle: "Recall@k — 20 preguntas en español sobre 10 documentos, k=5",
      figY: "recall",
      judgeLine: "Juez LLM sobre las respuestas generadas: promedio 5,0/5 · 100% con sustento · 100% de citas válidas.",
      sources: "Fuentes: RETRIEVAL_RESULTS.md · JUDGE_RESULTS.md",
      repo: "Ver repositorio",
      tags: "FastAPI · pgvector · fastembed · Docker",
    },
    mcp: {
      tick: "№ 05 · lámina",
      lead: "Un servidor MCP que expone la TRM oficial de Colombia (USD/COP): tasa actual e histórica, estadísticas y conversiones — consultable desde Claude vía Model Context Protocol. 16 tests unitarios.",
      parts: "3 herramientas MCP · caché de tasas en firme · cliente Socrata (datos.gov.co)",
      repo: "Ver repositorio",
      tags: "TypeScript · MCP SDK · zod · vitest",
    },
    experience: {
      tick: "№ 06 · registro",
      titleKey: "exp_es" as const,
      jobs: [
        {
          title: "Mobile Development Lead",
          company: "Sofka Technologies — consultor para Banco Atlántida",
          period: "SEP 2025 — ACTUALIDAD · REMOTO",
          bullets: [
            "Diseñé la arquitectura y construí Dilo, la billetera digital del banco, desde cero hasta producción (lanzada en junio de 2026); lideré el equipo de 5 personas y soy responsable de cada release.",
            "Llevé el proyecto a un flujo 100% agéntico: agentes de IA (Claude Code, MCP) planifican, implementan y prueban bajo mi arquitectura y revisión.",
            "Integré Apple Pay y Google Pay en la app principal del banco (aprovisionamiento in-app, SDKs de Evertec y Thales).",
          ],
        },
        {
          title: "Desarrollador móvil",
          company: "Q10 — EdTech, LATAM",
          period: "ABR 2024 — SEP 2025 · MEDELLÍN",
          bullets: [
            "Construí y desplegué más de 70 apps móviles white-label en LATAM con notificaciones push, mapas, QR y NFC.",
            "Definí nuevos patrones de arquitectura móvil adoptados por el equipo; responsable de despliegues y soporte en producción.",
          ],
        },
        {
          title: "Desarrollador front-end",
          company: "Emprendi — startup",
          period: "SEP 2023 — MAR 2024 · REMOTO",
          bullets: [
            "Construí interfaces web y móviles responsivas (Next.js, React, React Native, TailwindCSS) e integré APIs RESTful.",
          ],
        },
        {
          title: "Desarrollador móvil y tester",
          company: "Q10",
          period: "ABR 2021 — SEP 2023 · MEDELLÍN",
          bullets: [
            "Empecé en QA y crecí hacia desarrollo: planes de prueba, luego desarrollo de funcionalidades, incidentes y despliegues a tiendas.",
          ],
        },
      ],
    },
    certs: {
      tick: "№ 07 · calibración",
      titleKey: "certs_es" as const,
      items: [
        "Anthropic — Claude Code 101",
        "Anthropic — Claude 101",
        "Anthropic — AI Fluency: Frameworks and Foundations",
        "Anthropic — Introduction to Agent Skills",
        "Anthropic — AI Capabilities and Limitations",
        "Sofka — Fundamentos de IA",
      ],
    },
    about: {
      tick: "№ 08 · perfil",
      titleKey: "about_es" as const,
      body:
        "Empecé a programar en el colegio con Scratch, me gradué como técnico en desarrollo de software y nunca paré de construir. Cinco años después mi trabajo corre en producción en apps de banca y educación usadas en toda Latinoamérica. En 2026 el desarrollo agéntico cambió mi forma de trabajar — y mi rumbo: aplicar ingeniería de IA a productos reales, empezando por el dominio que mejor conozco. Fuera del teclado, la música me mantiene cuerdo y curioso.",
      langs: "Español (nativo) · Inglés (B2)",
      photoAlt: "Alejandro Guerra",
    },
    contact: {
      tick: "№ 09 · contacto",
      titleKey: "contact_es" as const,
      body: "Abierto a roles de AI Engineer y Full-Stack + IA — Colombia o remoto.",
      email: "Escríbeme",
      copy: "Copiar correo",
      copied: "correo copiado",
    },
    footer: "© 2026 Alejandro Guerra — Hecho con Next.js, entregado con agentes de IA.",
    endOfPlot: "FIN DEL PLOT · AG-2026",
  },
} as const;

function RegMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 14 14" className={`reg-mark ${className}`} aria-hidden="true">
      <path d="M7 0 V14 M0 7 H14" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

function Lamina({
  id,
  tick,
  heading,
  blueprint = false,
  children,
}: {
  id: string;
  tick: string;
  heading: React.ReactNode;
  blueprint?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 ${blueprint ? "blueprint" : ""}`}>
      <span aria-hidden className="axis-rule" />
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28 lg:pl-14">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 md:mb-14">
          {heading}
          <span className="axis-tick">{tick}</span>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const navItems = [
    { label: t.nav.dilo, href: "#dilo" },
    { label: t.nav.projects, href: "#agent" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Job header — the sheet's own chrome */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-5 font-mono text-[11px] tracking-[0.06em]">
          <a href="#top" className="whitespace-nowrap font-semibold text-[var(--ink)]">
            PLOT AG-2026
          </a>
          <span className="hidden text-[var(--ink-soft)] md:inline">· ALEJANDRO GUERRA · AI ENGINEER · MEDELLÍN, CO</span>
          <nav className="ml-auto flex min-w-0 items-center gap-4 overflow-x-auto overscroll-x-contain">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden whitespace-nowrap uppercase text-[var(--ink-soft)] transition-colors hover:text-[var(--pen)] active:text-[var(--pen)] md:inline"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvPath(lang)}
              download
              className="whitespace-nowrap border border-[var(--pen)] px-2 py-1 uppercase text-[var(--pen)] transition-colors hover:bg-[var(--pen)] hover:text-[#faf7f0] active:bg-[var(--pen)] active:text-[#faf7f0]"
            >
              {t.nav.cv}
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="whitespace-nowrap border border-[var(--line)] px-2 py-1 uppercase text-[var(--ink)] transition-colors hover:border-[var(--pen)] hover:text-[var(--pen)] active:border-[var(--pen)] active:text-[var(--pen)]"
              aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
            >
              {lang === "en" ? "EN|es" : "en|ES"}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ———— № 01 · The sheet ———— */}
        <section className="relative">
          <span aria-hidden className="axis-rule axis-rule--draw" />
          <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-8 md:pb-20 md:pt-20 lg:pl-14">
            <RegMark className="left-2 top-4" />
            <RegMark className="right-2 top-4" />

            <div className="grid items-start gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              <div className="lg:col-start-1 lg:row-start-1">
                <h1>
                  <span className="sr-only">{t.hero.srTitle}</span>
                  <PlottedText k="name1" draw className="w-full max-w-[560px] text-[var(--ink)]" strokeWidth={1.6} />
                  <PlottedText k="name2" draw delay={700} className="mt-2 w-[66%] max-w-[370px] text-[var(--ink)]" strokeWidth={1.6} />
                </h1>
                <PlottedText
                  k={lang === "en" ? "role" : "role_es"}
                  label={lang === "en" ? "AI Engineer" : "Ingeniero de IA"}
                  draw
                  delay={1250}
                  className={`mt-4 text-[var(--pen)] ${lang === "en" ? "w-[46%] max-w-[250px]" : "w-[58%] max-w-[320px]"}`}
                  strokeWidth={1.3}
                />
                <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-[var(--ink)] md:mt-8 md:text-base">{t.hero.hook}</p>
                <p className="leader mt-3 max-w-[62ch] font-mono text-[12px] leading-relaxed text-[var(--ink-soft)]">{t.hero.place}</p>
              </div>

              {/* The legend: printed evidence + working actions. Never part of the theater.
                  In DOM order before the figure so the actions sit inside the first
                  viewport at 390px — the theater is the reward, never the gate. */}
              <div className="plot-panel lg:col-start-1 lg:row-start-2">
              <p className="border-b border-[var(--rule)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink-soft)]">
                {t.hero.metricsTitle}
              </p>
              <dl className="grid grid-cols-2 gap-px bg-[var(--rule)] lg:grid-cols-4">
                {t.hero.metrics.map((m) => (
                  <div key={m.label} className="relative bg-[var(--paper)] px-3 py-2.5 sm:px-4 sm:py-3">
                    <dt className="font-mono text-[10px] leading-snug text-[var(--ink-soft)] sm:text-[11px]">{m.label}</dt>
                    <dd className="mt-1">
                      <span className="tabular font-mono text-xl font-semibold text-[var(--pen)] md:text-2xl">{m.v}</span>
                      {/* full source path on ≥sm; on phones the whole cell is the link */}
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={m.src}
                        className="mt-1 hidden truncate font-mono text-[10px] text-[var(--ink-soft)] underline decoration-[var(--rule)] decoration-1 underline-offset-2 transition-colors hover:text-[var(--pen)] hover:decoration-[var(--pen)] sm:block"
                      >
                        {m.src}
                      </a>
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.label} — ${m.src}`}
                        className="absolute inset-0 sm:hidden"
                      />
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-2 border-t border-[var(--rule)] px-3 py-3 sm:gap-3 sm:px-4 sm:py-4">
                <a href={cvPath(lang)} download className="stamp-btn">
                  <Download size={15} strokeWidth={1.5} aria-hidden /> {t.hero.cta}
                </a>
                <a href="#contact" className="stamp-btn stamp-btn--ghost">
                  <Mail size={15} strokeWidth={1.5} aria-hidden /> {t.hero.contact}
                </a>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="stamp-btn stamp-btn--ghost">
                  GitHub <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden />
                </a>
              </div>
            </div>

              <figure className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pt-2">
                <MolnarField cols={10} rows={11} disorder={0.05} seed={1805} draw className="mx-auto w-full max-w-[340px]" />
                <figcaption className="leader mt-3 font-mono text-[11px] leading-relaxed text-[var(--ink-soft)]">
                  {t.hero.figCaption}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ———— № 02 · DILO — the blueprint ———— */}
        <Lamina
          id="dilo"
          tick={t.dilo.tick}
          blueprint
          heading={
            <h2>
              <span className="sr-only">Dilo</span>
              <PlottedText k="dilo" className="w-[180px] text-[var(--ink)] md:w-[240px]" strokeWidth={1.5} />
            </h2>
          }
        >
          <p className="max-w-[68ch] leading-relaxed text-[var(--ink)]">{t.dilo.lead}</p>

          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {t.dilo.blocks.map((block) => (
              <div key={block.t} className="leader">
                <h3 className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--ink)]">{block.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">{block.b}</p>
              </div>
            ))}
          </div>

          <div className="scroll-fade mt-12 text-[var(--ink)]">
            <div
              className="overflow-x-auto overscroll-x-contain"
              tabIndex={0}
              role="region"
              aria-label={t.dilo.timeline.pace}
            >
              <div className="min-w-[560px]">
                <DiloTimeline events={[...t.dilo.timeline.events]} paceLabel={t.dilo.timeline.pace} />
              </div>
            </div>
          </div>

          <p className="mt-8 font-mono text-[12px] leading-relaxed">
            <span className="uppercase tracking-[0.08em] text-[var(--ink-soft)]">{t.dilo.stackLabel}: </span>
            <span className="text-[var(--ink)]">{t.dilo.stack}</span>
          </p>
        </Lamina>

        {/* ———— № 03 · AGENT ———— */}
        <Lamina
          id="agent"
          tick={t.agent.tick}
          heading={
            <h2>
              <span className="sr-only">{lang === "en" ? "Financial-analysis agent" : "Agente de análisis financiero"}</span>
              <PlottedText k={t.agent.titleKey} className="w-[220px] text-[var(--ink)] md:w-[300px]" strokeWidth={1.4} />
            </h2>
          }
        >
          <p className="max-w-[68ch] leading-relaxed text-[var(--ink)]">{t.agent.lead}</p>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <DisorderLab labels={t.agent.lab} />

            <div>
              <h3 className="font-mono text-[12px] uppercase leading-relaxed tracking-[0.08em] text-[var(--ink-soft)]">
                {t.agent.resultsTitle}
              </h3>
              <dl className="mt-3 border-t border-[var(--rule)]">
                {t.agent.results.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 border-b border-[var(--rule)] py-2.5">
                    <dt className="font-mono text-[12px] text-[var(--ink-soft)]">{k}</dt>
                    <dd className="tabular min-w-0 text-right font-mono text-sm font-semibold text-[var(--pen)]">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="leader mt-4 max-w-[52ch] text-[14px] leading-relaxed text-[var(--ink-soft)]">{t.agent.honesty}</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px]">
                <a href={LINKS.evalAgent} target="_blank" rel="noopener noreferrer" className="text-[var(--ink-soft)] underline decoration-1 underline-offset-4 hover:text-[var(--pen)]">
                  {t.agent.source}
                </a>
                <a href={LINKS.repoAgent} target="_blank" rel="noopener noreferrer" className="text-[var(--pen)] underline decoration-1 underline-offset-4">
                  {t.agent.repo} ↗
                </a>
                <span className="text-[var(--ink-soft)]">{t.agent.tags}</span>
              </p>
            </div>
          </div>
        </Lamina>

        {/* ———— № 04 · RAG ———— */}
        <Lamina
          id="rag"
          tick={t.rag.tick}
          heading={
            <h2>
              <span className="sr-only">RAG</span>
              <PlottedText k="rag" className="w-[130px] text-[var(--ink)] md:w-[170px]" strokeWidth={1.5} />
            </h2>
          }
        >
          <p className="max-w-[68ch] leading-relaxed text-[var(--ink)]">{t.rag.lead}</p>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            <InkOnView>
              <figure className="plot-panel p-4">
                <RecallCurve title={t.rag.figTitle} yLabel={t.rag.figY} />
                <figcaption className="leader mt-2 font-mono text-[11px] leading-relaxed text-[var(--ink-soft)]">
                  {t.rag.figTitle} · MRR 0.925
                </figcaption>
              </figure>
            </InkOnView>
            <div>
              <p className="max-w-[52ch] text-[15px] leading-relaxed text-[var(--ink)]">{t.rag.judgeLine}</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px]">
                <a href={LINKS.evalRag} target="_blank" rel="noopener noreferrer" className="text-[var(--ink-soft)] underline decoration-1 underline-offset-4 hover:text-[var(--pen)]">
                  {t.rag.sources}
                </a>
                <a href={LINKS.repoRag} target="_blank" rel="noopener noreferrer" className="text-[var(--pen)] underline decoration-1 underline-offset-4">
                  {t.rag.repo} ↗
                </a>
                <span className="text-[var(--ink-soft)]">{t.rag.tags}</span>
              </p>
            </div>
          </div>
        </Lamina>

        {/* ———— № 05 · MCP ———— */}
        <Lamina
          id="mcp"
          tick={t.mcp.tick}
          heading={
            <h2>
              <span className="sr-only">MCP</span>
              <PlottedText k="mcp" className="w-[150px] text-[var(--ink)] md:w-[200px]" strokeWidth={1.5} />
            </h2>
          }
        >
          <p className="max-w-[68ch] leading-relaxed text-[var(--ink)]">{t.mcp.lead}</p>
          <p className="leader mt-6 font-mono text-[12px] text-[var(--ink-soft)]">{t.mcp.parts}</p>
          <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px]">
            <a href={LINKS.repoMcp} target="_blank" rel="noopener noreferrer" className="text-[var(--pen)] underline decoration-1 underline-offset-4">
              {t.mcp.repo} ↗
            </a>
            <span className="text-[var(--ink-soft)]">{t.mcp.tags}</span>
          </p>
        </Lamina>

        {/* ———— № 06 · EXPERIENCE ———— */}
        <Lamina
          id="experience"
          tick={t.experience.tick}
          heading={
            <h2>
              <span className="sr-only">{lang === "en" ? "Experience" : "Experiencia"}</span>
              <PlottedText k={t.experience.titleKey} className="w-full max-w-[280px] text-[var(--ink)] md:max-w-[380px]" strokeWidth={1.4} />
            </h2>
          }
        >
          <div className="space-y-12">
            {t.experience.jobs.map((job) => (
              <article key={job.title + job.period} className="grid gap-x-10 gap-y-2 md:grid-cols-[200px_minmax(0,1fr)]">
                <p className="tabular font-mono text-[11px] leading-relaxed tracking-[0.04em] text-[var(--ink-soft)]">{job.period}</p>
                <div>
                  <h3 className="font-semibold text-[var(--ink)]">{job.title}</h3>
                  <p className="font-mono text-[12px] text-[var(--pen)]">{job.company}</p>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="leader max-w-[72ch] text-[15px] leading-relaxed text-[var(--ink-soft)]">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Lamina>

        {/* ———— № 07 · CERTIFICATIONS ———— */}
        <Lamina
          id="certs"
          tick={t.certs.tick}
          heading={
            <h2>
              <span className="sr-only">{lang === "en" ? "Certifications" : "Certificaciones"}</span>
              <PlottedText k={t.certs.titleKey} className="w-full max-w-[280px] text-[var(--ink)] md:max-w-[440px]" strokeWidth={1.3} />
            </h2>
          }
        >
          <ul className="grid max-w-3xl gap-x-10 border-t border-[var(--rule)] md:grid-cols-2">
            {t.certs.items.map((c) => (
              <li key={c} className="border-b border-[var(--rule)] py-2.5 font-mono text-[12px] leading-relaxed text-[var(--ink)]">
                {c}
              </li>
            ))}
          </ul>
        </Lamina>

        {/* ———— № 08 · PROFILE ———— */}
        <Lamina
          id="about"
          tick={t.about.tick}
          heading={
            <h2>
              <span className="sr-only">{lang === "en" ? "Profile" : "Perfil"}</span>
              <PlottedText k={t.about.titleKey} className="w-[200px] text-[var(--ink)] md:w-[260px]" strokeWidth={1.4} />
            </h2>
          }
        >
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <Develop
              src="/images/yoPelinegro.jpeg"
              alt={t.about.photoAlt}
              className="h-44 w-44 border border-[var(--line)] object-cover md:h-52 md:w-52"
            />
            <div>
              <p className="max-w-[68ch] leading-relaxed text-[var(--ink)]">{t.about.body}</p>
              <p className="leader mt-5 font-mono text-[12px] text-[var(--ink-soft)]">{t.about.langs}</p>
            </div>
          </div>
        </Lamina>

        {/* ———— № 09 · CONTACT ———— */}
        <Lamina
          id="contact"
          tick={t.contact.tick}
          heading={
            <h2>
              <span className="sr-only">{lang === "en" ? "Contact" : "Contacto"}</span>
              <PlottedText k={t.contact.titleKey} className="w-[260px] text-[var(--ink)] md:w-[340px]" strokeWidth={1.4} />
            </h2>
          }
        >
          <p className="max-w-[62ch] leading-relaxed text-[var(--ink)]">{t.contact.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${LINKS.email}`} className="stamp-btn">
              <Mail size={15} strokeWidth={1.5} aria-hidden /> {t.contact.email}
            </a>
            <CopyEmail email={LINKS.email} label={t.contact.copy} stamped={t.contact.copied} />
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="stamp-btn stamp-btn--ghost">
              LinkedIn <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden />
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="stamp-btn stamp-btn--ghost">
              GitHub <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden />
            </a>
          </div>
        </Lamina>
      </main>

      <footer className="relative border-t border-[var(--line)]">
        <span aria-hidden className="axis-rule" />
        <RegMark className="bottom-3 left-2" />
        <RegMark className="bottom-3 right-2" />
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-[11px] text-[var(--ink-soft)] lg:pl-14">
          <span>{t.footer}</span>
          <span className="tracking-[0.1em]">{t.endOfPlot}</span>
        </div>
      </footer>
    </div>
  );
}
