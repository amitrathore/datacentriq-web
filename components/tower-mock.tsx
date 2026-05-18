"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TowerMock({ className }: { className?: string }) {
  return (
    <div
      data-theme="dark"
      className={cn(
        "relative card-elev rounded-xl overflow-hidden scanline bg-bg text-ink",
        className
      )}
    >
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-bg-elev/60">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-bad/70" />
            <span className="size-1.5 rounded-full bg-warn/70" />
            <span className="size-1.5 rounded-full bg-good/70" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">
            Collections · Decision Intelligence Layer
          </span>
        </div>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-good">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-good" />
          </span>
          Live
        </span>
      </div>

      <div className="p-5 grid grid-cols-3 gap-3">
        <Kpi
          label="Collection efficiency"
          value="86.4%"
          delta="+1.2 pp"
          tone="good"
        />
        <Kpi
          label="Portfolio at risk"
          value="5.2%"
          delta="+0.4 pp"
          tone="bad"
        />
        <Kpi
          label="Open actions"
          value="148"
          delta="32 due today"
          tone="warn"
        />
      </div>

      <div className="px-5 pb-5 grid grid-cols-5 gap-3">
        <Chart />
        <div className="col-span-2 flex flex-col gap-2.5">
          <SignalRow
            label="Roll-forward 30+ DPD"
            cluster="North · Cluster N-3"
            confidence={92}
          />
          <SignalRow
            label="Promise-to-pay broken"
            cluster="West · Branch W-12"
            confidence={87}
          />
          <SignalRow
            label="Field visit gap"
            cluster="Central · 9 branches"
            confidence={78}
          />
        </div>
      </div>

      <div className="border-t border-border bg-bg-elev/60 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent">
            Decision draft
          </span>
          <span className="text-[13px] text-ink truncate">
            Reassign 41 high-risk accounts to top-quartile agents
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
            Impact $85K · 82% conf.
          </span>
          <span className="rounded-md border border-border-strong px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-ink">
            Approve
          </span>
        </div>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "good" | "bad" | "warn";
}) {
  const toneClass =
    tone === "good" ? "text-good" : tone === "bad" ? "text-bad" : "text-warn";
  return (
    <div className="rounded-lg border border-border bg-bg-elev/40 px-4 py-3.5">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-[28px] leading-none tracking-tight text-ink">
          {value}
        </span>
        <span className={cn("text-[11px] font-mono", toneClass)}>{delta}</span>
      </div>
    </div>
  );
}

function SignalRow({
  label,
  cluster,
  confidence,
}: {
  label: string;
  cluster: string;
  confidence: number;
}) {
  return (
    <div className="rounded-lg border border-border bg-bg-elev/40 px-3.5 py-2.5 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="text-[12.5px] text-ink truncate">{label}</div>
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute truncate">
          {cluster}
        </div>
      </div>
      <div className="shrink-0 font-mono text-[10px] tracking-[0.16em] text-ink-dim">
        {confidence}%
      </div>
    </div>
  );
}

function Chart() {
  // Synthetic bar+line composition for decorative purposes
  const bars = [
    32, 38, 36, 41, 45, 43, 48, 52, 58, 62, 64, 61, 65, 71,
  ];
  return (
    <div className="col-span-3 rounded-lg border border-border bg-bg-elev/40 px-4 pt-3 pb-3 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
            Recovery, last 14 days
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-[22px] leading-none tracking-tight text-ink">
              $5.4M
            </span>
            <span className="text-[11px] font-mono text-good">+8.1%</span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
            Recovered vs target
          </div>
          <div className="font-mono text-[11px] text-ink-dim">
            $5.4M / $6.0M
          </div>
        </div>
      </div>

      <svg viewBox="0 0 280 70" className="mt-3 w-full h-[70px]">
        <defs>
          <linearGradient id="bar-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7bb0ff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#4d8bff" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={i * 20 + 2}
            y={70 - h}
            width={12}
            height={h}
            rx={2}
            fill="url(#bar-g)"
            initial={{ scaleY: 0, transformOrigin: "bottom" }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 * i, duration: 0.5 }}
            style={{ transformBox: "fill-box" }}
          />
        ))}
        <motion.path
          d={`M ${bars
            .map(
              (h, i) =>
                `${i * 20 + 8},${70 - h - 6}`
            )
            .join(" L ")}`}
          fill="none"
          stroke="#e9b27a"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.4 }}
        />
      </svg>
    </div>
  );
}
