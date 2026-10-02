"use client";

/**
 * The darkroom raise: the portrait develops once into existence when it
 * enters the viewport. SSR and the first client render always serve the
 * plain, fully-developed photo (motion subtracts, never constructs) — the
 * animated element only mounts after hydration, and never under reduced
 * motion.
 */

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Develop({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || reduced) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} />;
  }
  return (
    <motion.img
      key="develop"
      src={src}
      alt={alt}
      className={className}
      initial={{ filter: "grayscale(1) brightness(1.08) contrast(0.92)", opacity: 0.9 }}
      whileInView={{ filter: "grayscale(0) brightness(1) contrast(1)", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
    />
  );
}
