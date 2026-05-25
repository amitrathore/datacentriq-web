"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AgentLoopMock({ className }: { className?: string }) {
  return (
    <div
      data-theme="dark"
      className={cn(
        "relative card-elev rounded-xl overflow-hidden scanline bg-bg text-ink",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-bg-elev/60">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-bad/70" />
            <span className="size-1.5 rounded-full bg-warn/70" />
            <span className="size-1.5 rounded-full bg-good/70" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">
            Agent · Collections Recovery
          </span>
        </div>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-accent">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          Running
        </span>
      </div>

      <div className="p-5 flex flex-col gap-3">
        {/* Step 1: Signal */}
        <AgentStep
          stepLabel="01 · Detect"
          tone="bad"
          delay={0}
        >
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-bad mb-1">
            Signal fired
          </div>
          <div className="text-[13px] text-ink">
            Roll-forward rate +0.4 pp · North Cluster N-3
          </div>
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mt-1">
            Threshold: +0.2 pp · 3-day rolling
          </div>
        </AgentStep>

        {/* Step 2: Investigation */}
        <AgentStep
          stepLabel="02 · Investigate"
          tone="warn"
          delay={0.15}
        >
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-warn mb-1">
            Causal claim cited
          </div>
          <div className="text-[13px] text-ink">
            Field visit frequency → Recovery rate
          </div>
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mt-1">
            Confidence 88% · DPD 30–60 · 9 branches affected
          </div>
        </AgentStep>

        {/* Step 3: Recommendation */}
        <AgentStep
          stepLabel="03 · Recommend"
          tone="ink"
          delay={0.3}
        >
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-accent mb-1">
            Decision draft
          </div>
          <div className="text-[13px] text-ink">
            Reassign 41 high-risk accounts to top-quartile agents
          </div>
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mt-1">
            Expected impact $85K · Confidence 82%
          </div>
        </AgentStep>

        {/* Step 4: HITL gate */}
        <AgentStep
          stepLabel="04 · Approval gate"
          tone="good"
          delay={0.45}
        >
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-good mb-1">
            Awaiting approval
          </div>
          <div className="text-[13px] text-ink">
            Queued for R. Sharma · Branch Operations Manager
          </div>
          <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute mt-1">
            Policy: BranchOps-Reassign-v2 · SLA 4h
          </div>
        </AgentStep>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-bg-elev/60 px-5 py-3.5 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
          Agent paused · awaiting human decision
        </span>
        <div className="flex items-center gap-2">
          <span className="rounded-md border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
            Reject
          </span>
          <span className="rounded-md border border-border-strong bg-bg-elev px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-ink">
            Approve &amp; Execute
          </span>
        </div>
      </div>
    </div>
  );
}

function AgentStep({
  stepLabel,
  tone,
  delay,
  children,
}: {
  stepLabel: string;
  tone: "bad" | "warn" | "ink" | "good";
  delay: number;
  children: React.ReactNode;
}) {
  const borderColor =
    tone === "bad"
      ? "border-bad/30"
      : tone === "warn"
        ? "border-warn/30"
        : tone === "good"
          ? "border-good/30"
          : "border-border";

  return (
    <motion.div
      className={`rounded-lg border ${borderColor} bg-bg-elev/40 px-4 py-3`}
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
    >
      <div className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-ink-mute mb-2">
        {stepLabel}
      </div>
      {children}
    </motion.div>
  );
}
