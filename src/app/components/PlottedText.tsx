import glyphs from "../plotted-glyphs.json";

type GlyphKey = keyof typeof glyphs;

/**
 * Single-stroke (Hershey) lettering rendered as SVG paths — the plotter's own
 * handwriting. Server-rendered and font-independent: the title is legible in
 * the first byte of HTML. `draw` adds the one-time pen entrance (pure CSS, so
 * it runs without JS and disappears under prefers-reduced-motion).
 */
export default function PlottedText({
  k,
  label,
  draw = false,
  delay = 0,
  strokeWidth = 1.1,
  className = "",
}: {
  k: GlyphKey;
  /** Accessible text. Omit ONLY when a sibling sr-only element carries it. */
  label?: string;
  draw?: boolean;
  delay?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const g = glyphs[k];
  return (
    <svg
      viewBox={`0 0 ${g.w} ${g.h}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`plotted ${draw ? "plot-draw" : ""} ${className}`}
      style={{ aspectRatio: `${g.w} / ${g.h}` }}
    >
      {g.chars.map((c, i) => (
        <path
          key={i}
          d={c.d}
          transform={`translate(${c.x},0)`}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={draw ? { animationDelay: `${delay + i * 55}ms` } : undefined}
        />
      ))}
    </svg>
  );
}
