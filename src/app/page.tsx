"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

type Lang = "en" | "es";

const COPY = {
  en: {
    nav: { about: "About", experience: "Experience", building: "Building now", certs: "Certifications", contact: "Contact", cv: "Résumé" },
    hero: {
      eyebrow: "Manuel Alejandro Guerra Arango · Medellín, Colombia",
      titlePre: "AI",
      titlePost: "Engineer",
      subtitle: "Agentic Development · Digital Banking · Mobile & Full-Stack",
      lead:
        "I build banking products people use every day — and since 2026, I build them with AI agents. I architected Dilo, a digital banking wallet, from scratch to production, and now I build agentic systems on top of 5+ years of full-stack and mobile engineering.",
      cta: "Download résumé",
    },
    highlights: [
      { title: "A banking wallet, from scratch", body: "Architecture, standards and CI/CD for Dilo (Banco Atlántida) — from the first commit to production in both app stores." },
      { title: "100% agentic since Feb 2026", body: "AI agents plan, implement and test features under my architecture and code review — delivery stayed on pace when the team went from five to two." },
      { title: "70+ apps shipped", body: "White-label mobile apps for educational institutions across Latin America, released to the App Store and Play Store." },
    ],
    caseStudy: {
      heading: "Case study — Dilo",
      problem: { title: "The challenge", body: "Banco Atlántida (Honduras) needed a new digital wallet built from zero in a regulated banking environment: cards, payments, identity and biometrics — with store releases from day one." },
      solution: { title: "What I did", body: "Defined the architecture, coding standards and CI/CD pipelines (Azure DevOps) and led the 5-person team that built it. Shipped credit, debit and virtual cards, payment-gateway integrations, bill payments, event ticketing, QR payments, Auth0 authentication and facial-recognition onboarding (FacePhi). I own every release to both stores." },
      outcome: { title: "The outcome", body: "Launched on the App Store and Play Store in June 2026. New features keep shipping — today with a 2-person team, powered by an agentic workflow I designed with Claude Code and MCP." },
      stack: ["React Native", "TypeScript", "Java Spring Boot", "AWS", "Azure DevOps", "Auth0", "FacePhi", "Evertec · Thales"],
    },
    experience: {
      heading: "Experience",
      jobs: [
        {
          title: "Mobile Development Lead",
          company: "Sofka Technologies — consultant for Banco Atlántida",
          period: "Sep 2025 – Present · Remote",
          bullets: [
            "Architected and built Dilo, the bank's digital wallet, from scratch to production (launched June 2026); led the 5-person build team and own every store release.",
            "Moved the project to a 100% agentic workflow: AI agents (Claude Code, MCP) plan, implement and test under my architecture and review.",
            "Integrated Apple Pay and Google Pay in the bank's main app (in-app provisioning, Evertec & Thales SDKs).",
          ],
        },
        {
          title: "Mobile Developer",
          company: "Q10 — EdTech, LATAM",
          period: "Apr 2024 – Sep 2025 · Medellín",
          bullets: [
            "Built and deployed 70+ white-label mobile apps across LATAM with push notifications, maps, QR and NFC.",
            "Defined new mobile architecture patterns adopted by the team; owned deployments and production support.",
          ],
        },
        {
          title: "Front-End Developer",
          company: "Emprendi — startup",
          period: "Sep 2023 – Mar 2024 · Remote",
          bullets: [
            "Built responsive web and mobile interfaces (Next.js, React, React Native, TailwindCSS) and integrated RESTful APIs.",
          ],
        },
        {
          title: "Mobile Developer & Tester",
          company: "Q10",
          period: "Apr 2021 – Sep 2023 · Medellín",
          bullets: [
            "Started in QA and grew into mobile development: test planning, then feature development, incident resolution and store deployments.",
          ],
        },
      ],
    },
    building: {
      heading: "Building now",
      sub: "Public AI portfolio in progress — shipping in this order:",
      items: [
        { name: "MCP server — Colombian financial data", desc: "Colombia's official TRM (USD/COP) with history, stats and conversions — usable directly from Claude via the Model Context Protocol. 16 unit tests.", status: "Shipped", tags: ["MCP", "TypeScript"], href: "https://github.com/AlejandroGuerra1823/colombia-finance-mcp" },
        { name: "Financial-analysis agent", desc: "Multi-step LangGraph agent: transaction categorization + hybrid rules/LLM anomaly detection, scored by a public eval suite — 95.8% accuracy, F1 0.89, zero false positives.", status: "Shipped", tags: ["Python", "LangGraph", "Evals"], href: "https://github.com/AlejandroGuerra1823/financial-analysis-agent" },
        { name: "RAG over financial documents", desc: "FastAPI RAG service over Colombian finance docs: cited answers, pgvector or local index, dual eval suites — Recall@1 90%, MRR 0.925, LLM-judge 5.0/5 with 100% groundedness.", status: "Shipped", tags: ["FastAPI", "pgvector", "RAG"], href: "https://github.com/AlejandroGuerra1823/financial-docs-rag" },
      ],
      follow: "Follow along on GitHub",
    },
    certs: {
      heading: "Certifications",
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
      heading: "About me",
      body:
        "I started programming in school with Scratch, graduated as a software technician, and never stopped building. Five years later my work runs in production banking and education apps used across Latin America. In 2026, agentic development changed how I work — and where I'm going: applying AI engineering to real products, starting with the domain I know best. Off the keyboard, music keeps me sane and curious.",
      langs: "Spanish (native) · English (B2)",
    },
    contact: {
      heading: "Let's talk",
      body: "Open to AI Engineer and Full-Stack + AI roles — Colombia or remote.",
      email: "Write me",
    },
    footer: "Built with Next.js — shipped with AI agents.",
  },
  es: {
    nav: { about: "Sobre mí", experience: "Experiencia", building: "En construcción", certs: "Certificaciones", contact: "Contacto", cv: "Hoja de vida" },
    hero: {
      eyebrow: "Manuel Alejandro Guerra Arango · Medellín, Colombia",
      titlePre: "AI",
      titlePost: "Engineer",
      subtitle: "Desarrollo agéntico · Banca digital · Móvil y Full-Stack",
      lead:
        "Construyo productos bancarios que la gente usa todos los días — y desde 2026, los construyo con agentes de IA. Diseñé la arquitectura de Dilo, una billetera digital bancaria, desde cero hasta producción, y hoy construyo sistemas agénticos sobre más de 5 años de ingeniería full-stack y móvil.",
      cta: "Descargar hoja de vida",
    },
    highlights: [
      { title: "Una billetera bancaria, desde cero", body: "Arquitectura, estándares y CI/CD de Dilo (Banco Atlántida) — del primer commit a producción en ambas tiendas." },
      { title: "100% agéntico desde feb 2026", body: "Agentes de IA planifican, implementan y prueban bajo mi arquitectura y revisión — el ritmo de entrega se mantuvo cuando el equipo pasó de cinco a dos." },
      { title: "Más de 70 apps publicadas", body: "Apps móviles white-label para instituciones educativas de Latinoamérica, publicadas en App Store y Play Store." },
    ],
    caseStudy: {
      heading: "Caso de estudio — Dilo",
      problem: { title: "El reto", body: "Banco Atlántida (Honduras) necesitaba una billetera digital nueva construida desde cero en un entorno bancario regulado: tarjetas, pagos, identidad y biometría — con releases a tiendas desde el día uno." },
      solution: { title: "Lo que hice", body: "Definí la arquitectura, los estándares de código y los pipelines de CI/CD (Azure DevOps) y lideré el equipo de 5 personas que la construyó. Entregamos tarjetas de crédito, débito y virtuales, pasarelas de pago, pago de servicios, boletería, pagos QR, Auth0 y onboarding con reconocimiento facial (FacePhi). Soy responsable de cada release a ambas tiendas." },
      outcome: { title: "El resultado", body: "Lanzada en App Store y Play Store en junio de 2026. Las funcionalidades siguen saliendo — hoy con un equipo de 2 personas, impulsado por el flujo agéntico que diseñé con Claude Code y MCP." },
      stack: ["React Native", "TypeScript", "Java Spring Boot", "AWS", "Azure DevOps", "Auth0", "FacePhi", "Evertec · Thales"],
    },
    experience: {
      heading: "Experiencia",
      jobs: [
        {
          title: "Mobile Development Lead",
          company: "Sofka Technologies — consultor para Banco Atlántida",
          period: "sep 2025 – actualidad · Remoto",
          bullets: [
            "Diseñé la arquitectura y construí Dilo, la billetera digital del banco, desde cero hasta producción (lanzada en junio 2026); lideré el equipo de 5 personas y soy responsable de cada release.",
            "Llevé el proyecto a un flujo 100% agéntico: agentes de IA (Claude Code, MCP) planifican, implementan y prueban bajo mi arquitectura y revisión.",
            "Integré Apple Pay y Google Pay en la app principal del banco (aprovisionamiento in-app, SDKs de Evertec y Thales).",
          ],
        },
        {
          title: "Desarrollador móvil",
          company: "Q10 — EdTech, LATAM",
          period: "abr 2024 – sep 2025 · Medellín",
          bullets: [
            "Construí y desplegué más de 70 apps móviles white-label en LATAM con notificaciones push, mapas, QR y NFC.",
            "Definí nuevos patrones de arquitectura móvil adoptados por el equipo; responsable de despliegues y soporte en producción.",
          ],
        },
        {
          title: "Desarrollador front-end",
          company: "Emprendi — startup",
          period: "sep 2023 – mar 2024 · Remoto",
          bullets: [
            "Construí interfaces web y móviles responsivas (Next.js, React, React Native, TailwindCSS) e integré APIs RESTful.",
          ],
        },
        {
          title: "Desarrollador móvil y tester",
          company: "Q10",
          period: "abr 2021 – sep 2023 · Medellín",
          bullets: [
            "Empecé en QA y crecí hacia desarrollo: planes de prueba, luego desarrollo de funcionalidades, incidentes y despliegues a tiendas.",
          ],
        },
      ],
    },
    building: {
      heading: "En construcción",
      sub: "Portafolio público de IA en progreso — saliendo en este orden:",
      items: [
        { name: "Servidor MCP — datos financieros de Colombia", desc: "La TRM oficial de Colombia (USD/COP) con histórico, estadísticas y conversiones — consultable desde Claude vía Model Context Protocol. 16 tests unitarios.", status: "Publicado", tags: ["MCP", "TypeScript"], href: "https://github.com/AlejandroGuerra1823/colombia-finance-mcp" },
        { name: "Agente de análisis financiero", desc: "Agente LangGraph multi-paso: categorización de movimientos + detección híbrida de anomalías (reglas + LLM), medido por una suite de evals pública — 95,8% de accuracy, F1 0,89, cero falsos positivos.", status: "Publicado", tags: ["Python", "LangGraph", "Evals"], href: "https://github.com/AlejandroGuerra1823/financial-analysis-agent" },
        { name: "RAG sobre documentos financieros", desc: "Servicio RAG en FastAPI sobre docs financieros colombianos: respuestas con citas, pgvector o índice local, doble suite de evals — Recall@1 90%, MRR 0,925, juez LLM 5,0/5 con 100% de groundedness.", status: "Publicado", tags: ["FastAPI", "pgvector", "RAG"], href: "https://github.com/AlejandroGuerra1823/financial-docs-rag" },
      ],
      follow: "Síguelo en GitHub",
    },
    certs: {
      heading: "Certificaciones",
      items: [
        "Anthropic — Claude Code 101",
        "Anthropic — Claude 101",
        "Anthropic — AI Fluency: Frameworks and Foundations",
        "Anthropic — Introduction to Agent Skills",
        "Anthropic — AI Capabilities and Limitations",
        "Sofka — AI Fundamentos",
      ],
    },
    about: {
      heading: "Sobre mí",
      body:
        "Empecé a programar en el colegio con Scratch, me gradué como técnico en desarrollo de software y nunca paré de construir. Cinco años después mi trabajo corre en producción en apps de banca y educación usadas en toda Latinoamérica. En 2026 el desarrollo agéntico cambió mi forma de trabajar — y mi rumbo: aplicar ingeniería de IA a productos reales, empezando por el dominio que mejor conozco. Fuera del teclado, la música me mantiene cuerdo y curioso.",
      langs: "Español (nativo) · Inglés (B2)",
    },
    contact: {
      heading: "Hablemos",
      body: "Abierto a roles de AI Engineer y Full-Stack + IA — Colombia o remoto.",
      email: "Escríbeme",
    },
    footer: "Hecho con Next.js — entregado con agentes de IA.",
  },
} as const;

const LINKS = {
  github: "https://github.com/AlejandroGuerra1823",
  linkedin: "https://linkedin.com/in/alejandro-guerra-developer",
  email: "mailto:guerramanuel299@gmail.com",
};

const cvPath = (lang: Lang) =>
  lang === "en" ? "/cv/CV_Alejandro_Guerra_EN.pdf" : "/cv/CV_Alejandro_Guerra_ES.pdf";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
      <span className="text-teal-300">/ </span>
      {children}
    </h2>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = COPY[lang];

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.building, href: "#building" },
    { label: t.nav.certs, href: "#certs" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-200">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-[#070d18]/85 border-b border-[#16233a]">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="leading-tight">
            <span className="block font-bold text-slate-100">Alejandro Guerra</span>
            <span className="block text-xs text-teal-300 tracking-wide">AI Engineer</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((it) => (
              <a key={it.href} href={it.href} className="text-sm text-slate-300 hover:text-teal-300 transition-colors">
                {it.label}
              </a>
            ))}
            <a
              href={cvPath(lang)}
              download
              className="text-sm px-3 py-1.5 rounded-lg border border-teal-400/40 text-teal-300 hover:bg-teal-400/10 transition-colors flex items-center gap-2"
            >
              <FaDownload size={12} /> {t.nav.cv}
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-[#0e1b2e] border border-[#22334d] text-slate-300 hover:border-teal-400/50"
              aria-label="Switch language"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>

          <button className="md:hidden text-slate-200" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[#16233a] bg-[#0a1424] px-5 py-4 flex flex-col gap-4">
            {navItems.map((it) => (
              <a key={it.href} href={it.href} onClick={() => setMenuOpen(false)} className="text-slate-200">
                {it.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href={cvPath(lang)} download className="text-teal-300 flex items-center gap-2">
                <FaDownload size={12} /> {t.nav.cv}
              </a>
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-[#0e1b2e] border border-[#22334d]"
              >
                {lang === "en" ? "ES" : "EN"}
              </button>
            </div>
          </div>
        )}
      </nav>

      <main id="top" className="max-w-6xl mx-auto px-5">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <p className="text-xs md:text-sm tracking-widest uppercase text-slate-400 mb-4">{t.hero.eyebrow}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50">
            <span className="text-teal-300">{t.hero.titlePre}</span> {t.hero.titlePost}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300">{t.hero.subtitle}</p>
          <p className="mt-6 max-w-3xl text-slate-300/90 leading-relaxed">{t.hero.lead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={cvPath(lang)} download className="px-5 py-2.5 rounded-xl bg-teal-400 text-[#062220] font-semibold hover:bg-teal-300 transition-colors flex items-center gap-2">
              <FaDownload /> {t.hero.cta}
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl border border-[#2a3d59] hover:border-teal-400/60 transition-colors flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl border border-[#2a3d59] hover:border-teal-400/60 transition-colors flex items-center gap-2">
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <p className="mt-8 font-mono text-sm text-teal-300/80">
            <span className="text-slate-500">$</span> github.com/AlejandroGuerra1823
          </p>
        </section>

        {/* Highlights */}
        <section className="pb-20 grid md:grid-cols-3 gap-5">
          {t.highlights.map((h) => (
            <div key={h.title} className="rounded-2xl bg-[#0c1626] border border-[#1c2b3f] p-6 hover:border-teal-400/40 transition-colors">
              <h3 className="font-semibold text-slate-100 mb-2">{h.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{h.body}</p>
            </div>
          ))}
        </section>

        {/* Case study */}
        <section id="about" className="pb-20 scroll-mt-24">
          <SectionTitle>{t.caseStudy.heading}</SectionTitle>
          <div className="grid md:grid-cols-3 gap-5">
            {[t.caseStudy.problem, t.caseStudy.solution, t.caseStudy.outcome].map((block, i) => (
              <div key={block.title} className="rounded-2xl bg-[#0c1626] border border-[#1c2b3f] p-6">
                <p className="font-mono text-xs text-teal-300 mb-2">0{i + 1}</p>
                <h3 className="font-semibold text-slate-100 mb-2">{block.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {t.caseStudy.stack.map((s) => (
              <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#0e1b2e] border border-[#22334d] text-slate-300">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="pb-20 scroll-mt-24">
          <SectionTitle>{t.experience.heading}</SectionTitle>
          <div className="space-y-8 border-l border-[#1c2b3f] pl-6 md:pl-8">
            {t.experience.jobs.map((job) => (
              <div key={job.title + job.period} className="relative">
                <span className="absolute -left-[31px] md:-left-[39px] top-1.5 h-3 w-3 rounded-full bg-teal-400" />
                <h3 className="font-semibold text-slate-100">{job.title}</h3>
                <p className="text-sm text-teal-300/90">{job.company}</p>
                <p className="text-xs text-slate-500 mb-3">{job.period}</p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-sm text-slate-400 leading-relaxed">
                      <span className="text-teal-300/70 mr-2">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Building now */}
        <section id="building" className="pb-20 scroll-mt-24">
          <SectionTitle>{t.building.heading}</SectionTitle>
          <p className="text-slate-400 mb-6 -mt-2">{t.building.sub}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {t.building.items.map((p) => (
              <div key={p.name} className="rounded-2xl bg-[#0c1626] border border-[#1c2b3f] p-6 flex flex-col">
                <span className="self-start text-[11px] font-mono px-2.5 py-1 rounded-full mb-3 bg-teal-400/15 text-teal-300 border border-teal-400/30">
                  ✓ {p.status}
                </span>
                <h3 className="font-semibold text-slate-100 mb-2">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors underline decoration-[#2a3d59] underline-offset-4">
                    {p.name}
                  </a>
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0e1b2e] border border-[#22334d] text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-sm text-teal-300 hover:underline">
            <FaGithub /> {t.building.follow} →
          </a>
        </section>

        {/* Certifications */}
        <section id="certs" className="pb-20 scroll-mt-24">
          <SectionTitle>{t.certs.heading}</SectionTitle>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {t.certs.items.map((c) => (
              <li key={c} className="text-sm text-slate-300">
                <span className="text-teal-300/70 mr-2">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section className="pb-20">
          <SectionTitle>{t.about.heading}</SectionTitle>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/yoPelinegro.jpeg" alt="Alejandro Guerra" className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border border-[#1c2b3f]" />
            <div>
              <p className="max-w-3xl text-slate-300/90 leading-relaxed">{t.about.body}</p>
              <p className="mt-4 text-sm font-mono text-slate-400">{t.about.langs}</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-24 scroll-mt-24">
          <div className="rounded-2xl bg-gradient-to-br from-[#0c1626] to-[#0d2130] border border-[#1c2b3f] p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-3">{t.contact.heading}</h2>
            <p className="text-slate-400 mb-6">{t.contact.body}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={LINKS.email} className="px-5 py-2.5 rounded-xl bg-teal-400 text-[#062220] font-semibold hover:bg-teal-300 transition-colors flex items-center gap-2">
                <FaEnvelope /> {t.contact.email}
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl border border-[#2a3d59] hover:border-teal-400/60 transition-colors flex items-center gap-2">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl border border-[#2a3d59] hover:border-teal-400/60 transition-colors flex items-center gap-2">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#16233a] py-8 text-center text-xs text-slate-500 font-mono">
        © 2026 Alejandro Guerra — {t.footer}
      </footer>
    </div>
  );
}
