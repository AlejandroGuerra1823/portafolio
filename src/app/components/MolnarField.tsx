/**
 * The Molnár field — a plotted grid of concentric squares with seeded
 * perturbation, after Vera Molnár's «(Dés)Ordres» (1974). Deterministic
 * (mulberry32), so server and client always draw the same sheet. Cells whose
 * perturbation exceeds tolerance are flagged in signal red: the red on this
 * site always means "what the system detected", never decoration.
 */

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface MolnarStats {
  perturbed: number;
  flagged: number;
}

export function molnarStats(cols: number, rows: number, disorder: number, seed: number): MolnarStats {
  const rand = mulberry32(seed);
  let perturbed = 0;
  let flagged = 0;
  for (let i = 0; i < cols * rows; i++) {
    const hit = rand() < disorder; // disorder IS the probability — a counted claim stays honest
    const magnitude = hit ? 0.35 + rand() * 0.65 : 0;
    // keep RNG call parity with the renderer
    rand();
    if (hit) perturbed++;
    if (magnitude > 0.72) flagged++;
  }
  return { perturbed, flagged };
}

export default function MolnarField({
  cols = 10,
  rows = 14,
  disorder = 0.01,
  seed = 2026,
  rings = 4,
  draw = false,
  className = "",
}: {
  cols?: number;
  rows?: number;
  disorder?: number;
  seed?: number;
  rings?: number;
  draw?: boolean;
  className?: string;
}) {
  const CELL = 26;
  const PAD = 4;
  const rand = mulberry32(seed);
  const cells: { x: number; y: number; squares: string[]; flagged: boolean }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const hit = rand() < disorder; // keep in exact parity with molnarStats
      const magnitude = hit ? 0.35 + rand() * 0.65 : 0;
      const angleSeed = rand();
      const flagged = magnitude > 0.72;
      const cx = c * CELL + CELL / 2;
      const cy = r * CELL + CELL / 2;
      const squares: string[] = [];
      for (let k = 0; k < rings; k++) {
        const half = (CELL / 2 - PAD) * (1 - k / rings);
        const jitter = magnitude * 4 * (k / rings);
        const angle = magnitude * (angleSeed - 0.5) * 24 * (k / rings);
        const dx = cx + (angleSeed - 0.5) * jitter * 2;
        const dy = cy + (0.5 - angleSeed) * jitter * 2;
        squares.push(
          `M${(dx - half).toFixed(1)},${(dy - half).toFixed(1)} h${(half * 2).toFixed(1)} v${(half * 2).toFixed(1)} h${(-half * 2).toFixed(1)} Z` +
            `|${angle.toFixed(1)}|${dx.toFixed(1)}|${dy.toFixed(1)}`
        );
      }
      cells.push({ x: cx, y: cy, squares, flagged });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${cols * CELL} ${rows * CELL}`}
      aria-hidden="true"
      className={`plotted ${draw ? "plot-draw-field" : ""} ${className}`}
    >
      {cells.map((cell, i) => (
        <g key={i} className={cell.flagged ? "mf-flag" : "mf-pen"}>
          {cell.squares.map((s, k) => {
            const [d, angle, cx, cy] = s.split("|");
            const drawn = draw && k === 0; // only the outer ring draws — the theater must not fight hydration
            return (
              <path
                key={k}
                d={d}
                className={drawn ? "mf-draw" : undefined}
                transform={`rotate(${angle} ${cx} ${cy})`}
                pathLength={1}
                fill="none"
                stroke="currentColor"
                strokeWidth={cell.flagged ? 1.4 : 1}
                vectorEffect="non-scaling-stroke"
                style={drawn ? { animationDelay: `${(i % cols) * 40 + Math.floor(i / cols) * 30}ms` } : undefined}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}
