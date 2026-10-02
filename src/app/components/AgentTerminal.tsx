"use client";

/**
 * The hero centerpiece: a terminal that "runs an agent" introducing the owner.
 * The command types character by character; tool-call output streams line by line.
 * Respects prefers-reduced-motion (renders everything instantly).
 */

import { useEffect, useRef, useState } from "react";

export interface TermLine {
  text: string;
  kind: "cmd" | "step" | "out" | "ok";
}

const STYLES: Record<TermLine["kind"], string> = {
  cmd: "text-slate-100",
  step: "text-teal-300",
  out: "text-slate-400",
  ok: "text-emerald-400",
};

const CHAR_DELAY_MS = 28;
const LINE_DELAY_MS = 170;

export default function AgentTerminal({ lines, title }: { lines: TermLine[]; title: string }) {
  const [visible, setVisible] = useState<TermLine[]>([]);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setVisible([]);
    setTyped("");
    setDone(false);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(lines);
      setDone(true);
      return;
    }

    const schedule = (fn: () => void, ms: number) => {
      const timer = setTimeout(fn, ms);
      timers.current.push(timer);
      return timer;
    };

    let clock = 400;
    lines.forEach((line, index) => {
      if (line.kind === "cmd") {
        for (let i = 1; i <= line.text.length; i++) {
          schedule(() => setTyped(line.text.slice(0, i)), clock);
          clock += CHAR_DELAY_MS;
        }
        schedule(() => {
          setTyped("");
          setVisible((v) => [...v, line]);
        }, clock);
        clock += 260;
      } else {
        schedule(() => setVisible((v) => [...v, line]), clock);
        clock += LINE_DELAY_MS;
      }
      if (index === lines.length - 1) {
        schedule(() => setDone(true), clock + 150);
      }
    });

    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [visible, typed]);

  return (
    <div className="rounded-2xl border border-[#1e3347] bg-[#060b14]/90 shadow-[0_0_60px_-15px_rgba(63,214,194,0.25)] backdrop-blur overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#16233a] bg-[#0a1322]">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-mono text-slate-500">{title}</span>
      </div>
      <div
        ref={bodyRef}
        className="px-4 py-4 font-mono text-[13px] leading-relaxed h-[290px] overflow-y-auto"
      >
        {visible.map((line, index) => (
          <div key={index} className={STYLES[line.kind]}>
            {line.kind === "cmd" ? (
              <>
                <span className="text-teal-400">$ </span>
                {line.text}
              </>
            ) : (
              line.text
            )}
          </div>
        ))}
        {typed && (
          <div className={STYLES.cmd}>
            <span className="text-teal-400">$ </span>
            {typed}
            <span className="inline-block w-2 h-4 align-middle bg-teal-300 animate-pulse ml-0.5" />
          </div>
        )}
        {done && (
          <div className="text-slate-100">
            <span className="text-teal-400">$ </span>
            <span className="inline-block w-2 h-4 align-middle bg-teal-300 animate-pulse ml-0.5" />
          </div>
        )}
      </div>
    </div>
  );
}
