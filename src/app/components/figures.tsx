/**
 * Plotted data figures. Every number here is real and traceable:
 * RecallCurve ← financial-docs-rag/evals/RETRIEVAL_RESULTS.md
 * DiloTimeline ← verified case-study facts (PRODUCT.md).
 * Server components: the figures are in the HTML before any JS runs.
 */

const RECALL_POINTS = [
  { k: 1, v: 0.9 },
  { k: 3, v: 0.95 },
  { k: 5, v: 0.95 },
];

export function RecallCurve({ title, yLabel }: { title: string; yLabel: string }) {
  const W = 340;
  const H = 190;
  const PL = 44;
  const PB = 34;
  const PT = 18;
  const PR = 16;
  const x = (k: number) => PL + ((k - 1) / 4) * (W - PL - PR);
  const y = (v: number) => PT + (1 - (v - 0.8) / 0.2) * (H - PT - PB);
  const line = RECALL_POINTS.map((p, i) => `${i === 0 ? "M" : "L"}${x(p.k).toFixed(1)},${y(p.v).toFixed(1)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title} className="plotted w-full">
      {[0.8, 0.85, 0.9, 0.95, 1.0].map((v) => (
        <g key={v}>
          <line x1={PL} x2={W - PR} y1={y(v)} y2={y(v)} stroke="var(--rule)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
          <text x={PL - 6} y={y(v) + 3} textAnchor="end" className="fig-label">
            {v.toFixed(2)}
          </text>
        </g>
      ))}
      {[1, 3, 5].map((k) => (
        <text key={k} x={x(k)} y={H - PB + 16} textAnchor="middle" className="fig-label">
          k={k}
        </text>
      ))}
      <text x={PL} y={H - 4} className="fig-label">
        {yLabel}
      </text>
      <path d={line} pathLength={1} fill="none" stroke="var(--pen)" strokeWidth={1.6} strokeLinecap="round" vectorEffect="non-scaling-stroke" className="fig-line" />
      {RECALL_POINTS.map((p) => (
        <g key={p.k}>
          <circle cx={x(p.k)} cy={y(p.v)} r={3.2} fill="var(--paper)" stroke="var(--pen)" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
          <text x={x(p.k)} y={y(p.v) - 9} textAnchor="middle" className="fig-label fig-label--strong">
            {(p.v * 100).toFixed(0)}%
          </text>
        </g>
      ))}
    </svg>
  );
}

export function DiloTimeline({
  events,
  paceLabel,
}: {
  events: { at: number; date: string; text: string; text2?: string }[]; // at: 0..1 along the line
  paceLabel: string;
}) {
  const W = 680;
  const H = 186;
  const PL = 14;
  const PR = 14;
  const Y = 128;
  const x = (t: number) => PL + t * (W - PL - PR);
  // SEP and FEB share the low tier (their labels never meet); JUN goes high so
  // FEB's long label can run right without its stem ever crossing JUN's text.
  const tier = (i: number) => (i === 2 ? 96 : 42);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={paceLabel} className="plotted w-full">
      <line x1={PL} x2={W - PR} y1={Y} y2={Y} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <text x={W - PR} y={Y + 24} textAnchor="end" className="fig-label fig-label--inherit">
        {paceLabel}
      </text>
      {events.map((e, i) => {
        const tx = x(e.at) + (e.at > 0.8 ? -6 : 6);
        const anchor = e.at > 0.8 ? "end" : "start";
        const lift = e.text2 ? 12 : 0; // two-line labels stack upward from the stem top
        return (
          <g key={i}>
            <line x1={x(e.at)} x2={x(e.at)} y1={Y} y2={Y - tier(i)} stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            <circle cx={x(e.at)} cy={Y} r={3.4} fill="currentColor" />
            <text x={tx} y={Y - tier(i) - 12 - lift} textAnchor={anchor} className="fig-label fig-label--inherit fig-label--strong">
              {e.date}
            </text>
            <text x={tx} y={Y - tier(i) - lift} textAnchor={anchor} className="fig-label fig-label--inherit">
              {e.text}
            </text>
            {e.text2 && (
              <text x={tx} y={Y - tier(i) + 12 - lift} textAnchor={anchor} className="fig-label fig-label--inherit">
                {e.text2}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
