"use client";

/**
 * The thesis made tangible: a slider that doses how much freedom the machine
 * gets. Discrete steps (a plotter re-runs a job; it does not interpolate).
 * The readout is true of this demo by construction — every perturbed cell
 * beyond tolerance is flagged, none invented — which playfully mirrors the
 * agent's real eval (precision 100%, zero false positives), printed beside it
 * with its source.
 */

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MolnarField, { molnarStats } from "./MolnarField";

const STEPS = [0, 0.01, 0.05, 0.2];

export default function DisorderLab({
  labels,
}: {
  labels: {
    slider: string;
    perturbed: string;
    flagged: string;
    falsePositives: string;
    f1: string;
    caption: string;
  };
}) {
  const [step, setStep] = useState(1);
  // SSR must serve the readout printed and legible; the settle animation only
  // exists once the visitor has actually moved the slider.
  const [interacted, setInteracted] = useState(false);
  const reduced = useReducedMotion();
  const disorder = STEPS[step];
  const seed = 2026 + step * 17;
  const stats = molnarStats(12, 8, disorder, seed);

  return (
    <figure className="plot-panel">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[var(--rule)] px-4 py-3">
        <label htmlFor="disorder" className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ink-soft)]">
          {labels.slider}
        </label>
        <input
          id="disorder"
          type="range"
          min={0}
          max={3}
          step={1}
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
            setInteracted(true);
          }}
          className="disorder-slider"
          aria-valuetext={`${(disorder * 100).toFixed(0)}%`}
        />
        <span className="font-mono text-sm tabular-nums text-[var(--pen)]">{(disorder * 100).toFixed(0)}%</span>
      </div>

      <MolnarField cols={12} rows={8} disorder={disorder} seed={seed} className="block w-full px-4 py-4" />

      <motion.figcaption
        key={step}
        initial={interacted && !reduced ? { opacity: 0.4, transform: "scale(0.98)" } : false}
        animate={{ opacity: 1, transform: "scale(1)" }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className="flex flex-wrap gap-x-6 gap-y-1 border-t border-[var(--rule)] px-4 py-3 font-mono text-[12px] tabular-nums"
      >
        <span className="text-[var(--ink-soft)]">
          {labels.perturbed}: <strong className="font-semibold text-[var(--ink)]">{stats.perturbed}</strong>
        </span>
        <span className="text-[var(--signal)]">
          {labels.flagged}: <strong className="font-semibold">{stats.flagged}</strong>
        </span>
        <span className="text-[var(--ink-soft)]">
          {labels.falsePositives}: <strong className="font-semibold text-[var(--ink)]">0</strong>
        </span>
        <span className="text-[var(--pen)]">{labels.f1}</span>
        <span className="w-full text-[11px] normal-case text-[var(--ink-soft)]">{labels.caption}</span>
      </motion.figcaption>
    </figure>
  );
}
