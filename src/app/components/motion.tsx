"use client";

/** Motion primitives: scroll reveals and mouse-tracked spotlight cards. */

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: -200, y: -200, active: false });

  return (
    <div
      ref={ref}
      onMouseMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setSpot({ x: event.clientX - rect.left, y: event.clientY - rect.top, active: true });
      }}
      onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
      className={`relative overflow-hidden rounded-2xl bg-[#0c1626] border border-[#1c2b3f] transition-colors duration-300 hover:border-teal-400/40 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spot.active ? 1 : 0,
          background: `radial-gradient(260px circle at ${spot.x}px ${spot.y}px, rgba(63,214,194,0.10), transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
