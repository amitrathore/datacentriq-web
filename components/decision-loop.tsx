"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STEPS = [
  { label: "Detect", caption: "Signals & exceptions" },
  { label: "Explain", caption: "Likely drivers" },
  { label: "Decide", caption: "Governed actions" },
  { label: "Act", caption: "Workflow & owners" },
  { label: "Measure", caption: "Expected vs actual" },
  { label: "Learn", caption: "System calibrates" },
] as const;

export function DecisionLoop({ className }: { className?: string }) {
  const size = 440;
  const cx = size / 2;
  const cy = size / 2;
  const r = 160;
  const nodes = STEPS.map((s, i) => {
    const angle = (Math.PI * 2 * i) / STEPS.length - Math.PI / 2;
    return {
      ...s,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      angle,
    };
  });

  return (
    <div className={cn("relative mx-auto", className)} style={{ maxWidth: size }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-auto block"
        aria-hidden
      >
        <defs>
          <radialGradient id="loop-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4d8bff" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#4d8bff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#4d8bff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="loop-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7bb0ff" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#e9b27a" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7bb0ff" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <circle cx={cx} cy={cy} r={r + 60} fill="url(#loop-glow)" />

        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="url(#loop-ring)"
          strokeWidth="1"
          strokeDasharray="2 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        <circle cx={cx} cy={cy} r={r - 32} fill="none" stroke="rgba(255,255,255,0.05)" />
        <circle cx={cx} cy={cy} r={r - 64} fill="none" stroke="rgba(255,255,255,0.04)" />

        {/* Connector arcs between nodes */}
        {nodes.map((n, i) => {
          const next = nodes[(i + 1) % nodes.length];
          const mx = (n.x + next.x) / 2;
          const my = (n.y + next.y) / 2;
          // outward curve
          const cxArc = (mx + cx) / 2 + (mx - cx) * 0.08;
          const cyArc = (my + cy) / 2 + (my - cy) * 0.08;
          return (
            <motion.path
              key={`arc-${i}`}
              d={`M ${n.x} ${n.y} Q ${cxArc} ${cyArc} ${next.x} ${next.y}`}
              fill="none"
              stroke="rgba(122,160,255,0.35)"
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: 0.1 * i }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.label}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: 0.08 * i + 0.2 }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={9}
              fill="#0b0f17"
              stroke="#7bb0ff"
              strokeWidth="1.5"
            />
            <circle cx={n.x} cy={n.y} r={3} fill="#e9b27a" />
          </motion.g>
        ))}

        {/* Center label */}
        <g>
          <text
            x={cx}
            y={cy - 8}
            textAnchor="middle"
            className="fill-ink"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              letterSpacing: "-0.02em",
            }}
          >
            Decision-to-
          </text>
          <text
            x={cx}
            y={cy + 22}
            textAnchor="middle"
            className="fill-ink"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              letterSpacing: "-0.02em",
            }}
          >
            Outcome Loop
          </text>
          <text
            x={cx}
            y={cy + 48}
            textAnchor="middle"
            className="fill-ink-mute"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            HITL Governed
          </text>
        </g>
      </svg>

      {/* Labels overlaid in HTML for crisp typography */}
      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((n, i) => {
          const dx = n.x - cx;
          const dy = n.y - cy;
          const offset = 32;
          const ox = dx === 0 ? 0 : (dx / Math.abs(dx)) * offset;
          const oy = dy === 0 ? 0 : (dy / Math.abs(dy)) * offset;
          const left = ((n.x + ox) / size) * 100;
          const top = ((n.y + oy) / size) * 100;
          const align =
            dx > 30 ? "left-full" : dx < -30 ? "right-full" : "translate-x-[-50%]";
          return (
            <motion.div
              key={`label-${i}`}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: 0.08 * i + 0.4 }}
            >
              <div className={cn("min-w-[112px] text-center", align)}>
                <div className="font-display text-[18px] tracking-tight text-ink leading-none">
                  {n.label}
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
                  {n.caption}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
