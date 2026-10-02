"use client";

/**
 * Adds .is-inked once, the first time the wrapped figure enters the viewport,
 * so its .fig-line draws itself exactly once — a plotter never un-draws.
 * Without JS (or under reduced motion) nothing is added and the figure is
 * simply printed.
 */

import { useEffect, useRef } from "react";

export default function InkOnView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-inked");
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
