"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Activity,
  Check,
  Database,
  FileText,
  Network,
  RefreshCw,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    name: "Sources",
    caption:
      "Connect ERP, CRM, warehouses, telemetry and documents into one governed foundation.",
  },
  {
    name: "Digital Twin",
    caption:
      "Assemble a living model of business entities, relationships, policies and context.",
  },
  {
    name: "Control Tower",
    caption:
      "Generate an operating centre for the signals and decisions that matter to each use case.",
  },
  {
    name: "Decisions",
    caption:
      "Recommend governed actions with evidence, confidence and human approval where needed.",
  },
  {
    name: "Measure",
    caption:
      "Track every intervention against its baseline so teams can see what actually changed.",
  },
  {
    name: "Learn",
    caption:
      "Feed outcomes back into the twin so each operating cycle becomes sharper and more useful.",
  },
] as const;

export function PlatformStory() {
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const update = () => {
      frameRef.current = null;
      const track = trackRef.current;
      if (!track || !window.matchMedia("(min-width: 1024px)").matches) return;
      const rect = track.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      if (range <= 0) return;
      const progress = Math.max(0, Math.min(0.999, -rect.top / range));
      setActive(Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length)));
    };

    const schedule = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [reduceMotion]);

  const selectStage = useCallback(
    (index: number) => {
      setActive(index);
      const track = trackRef.current;
      if (!track || reduceMotion || !window.matchMedia("(min-width: 1024px)").matches) {
        return;
      }
      const top = track.getBoundingClientRect().top + window.scrollY;
      const range = track.offsetHeight - window.innerHeight;
      window.scrollTo({
        top: top + range * ((index + 0.5) / STAGES.length),
        behavior: "smooth",
      });
    },
    [reduceMotion]
  );

  const handleStageKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % STAGES.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + STAGES.length) % STAGES.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = STAGES.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectStage(nextIndex);
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [nextIndex]?.focus();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={trackRef}
        className={cn("relative", reduceMotion ? "lg:h-auto" : "lg:h-[330vh]")}
      >
        <div className="lg:sticky lg:top-[66px] lg:flex lg:min-h-[calc(100vh-66px)] lg:items-center">
          <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-12">
          <div className="max-w-3xl">
            <p className="dc-label text-ink-mute">The platform · How it works</p>
            <h2 className="mt-5 text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[44px]">
              From raw data to decisions that learn — end to end.
            </h2>
          </div>

          <div className="mt-10 grid items-stretch gap-6 lg:mt-12 lg:grid-cols-[260px_1fr] lg:gap-10">
            <div className="rounded-xl border border-border bg-bg-card p-5 shadow-[0_24px_60px_-40px_rgba(19,19,17,0.45)] sm:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand">
                {String(active + 1).padStart(2, "0")} / {String(STAGES.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[26px] font-semibold tracking-[-0.03em]">
                {STAGES[active].name}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-ink-dim">
                {STAGES[active].caption}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1" role="tablist" aria-label="Platform stages">
                {STAGES.map((stage, index) => (
                  <button
                    key={stage.name}
                    id={`platform-stage-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={active === index}
                    aria-controls="platform-stage-panel"
                    tabIndex={active === index ? 0 : -1}
                    onClick={() => selectStage(index)}
                    onKeyDown={(event) => handleStageKeyDown(event, index)}
                    className={cn(
                      "focus-ring flex min-h-11 items-center gap-2 rounded-md border px-2.5 py-2 text-left transition-colors sm:px-3",
                      active === index
                        ? "border-brand bg-brand/8 text-ink"
                        : "border-transparent text-ink-mute hover:border-border hover:text-ink"
                    )}
                  >
                    <span className="font-mono text-[9px] text-brand sm:text-[10px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate text-[10px] font-medium sm:text-[12px]">
                      {stage.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[410px] overflow-hidden rounded-xl border border-border bg-[#f8f7f4] p-4 sm:p-7 lg:min-h-[450px]">
              <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
              <div className="relative flex min-h-[378px] items-center justify-center lg:min-h-[394px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    id="platform-stage-panel"
                    className="w-full"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    role="tabpanel"
                    aria-labelledby={`platform-stage-${active}`}
                  >
                    <StageVisual stage={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="sr-only" aria-live="polite">
            Stage {active + 1}: {STAGES[active].name}. {STAGES[active].caption}
          </p>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

function StageVisual({ stage }: { stage: number }) {
  switch (stage) {
    case 0:
      return <SourcesVisual />;
    case 1:
      return <TwinVisual />;
    case 2:
      return <TowerVisual />;
    case 3:
      return <DecisionVisual />;
    case 4:
      return <MeasureVisual />;
    default:
      return <LearnVisual />;
  }
}

const SOURCES = [
  { icon: Database, name: "ERP", position: "left-[8%] top-[10%]" },
  { icon: Users, name: "CRM", position: "right-[8%] top-[10%]" },
  { icon: Activity, name: "Telemetry", position: "left-[4%] bottom-[12%]" },
  { icon: FileText, name: "Documents", position: "right-[4%] bottom-[12%]" },
] as const;

function SourcesVisual() {
  return (
    <div className="relative mx-auto h-[330px] max-w-[620px]">
      <svg className="absolute inset-0 size-full" viewBox="0 0 620 330" aria-hidden>
        {[[90, 65], [530, 65], [75, 270], [545, 270]].map(([x, y], index) => (
          <motion.line
            key={index}
            x1={x}
            y1={y}
            x2="310"
            y2="165"
            stroke="#2f6fb2"
            strokeOpacity=".45"
            strokeDasharray="5 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
          />
        ))}
      </svg>
      {SOURCES.map((source, index) => (
        <motion.div
          key={source.name}
          className={cn("absolute", source.position)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.08 }}
        >
          <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2.5 shadow-sm">
            <source.icon size={16} className="text-brand" />
            <span className="text-xs font-semibold">{source.name}</span>
          </div>
        </motion.div>
      ))}
      <div className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#131311] px-5 py-6 text-center text-[#f3f2ef] shadow-xl">
        <p className="font-mono text-[8px] uppercase tracking-[0.13em] text-[#8fb8dc]">Governed foundation</p>
        <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Unified</p>
        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#8f8d85]">Live context</p>
      </div>
    </div>
  );
}

const TWIN_NODES = [
  ["Customer", "left-[10%] top-[18%]"],
  ["Order", "left-[42%] top-[7%]"],
  ["Product", "right-[7%] top-[25%]"],
  ["Site", "left-[44%] top-[48%]"],
  ["Supplier", "right-[8%] bottom-[12%]"],
  ["Contract", "left-[15%] bottom-[10%]"],
] as const;

function TwinVisual() {
  return (
    <div className="relative mx-auto h-[330px] max-w-[620px]">
      <Network className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand/20" size={180} strokeWidth={0.8} />
      {TWIN_NODES.map(([name, position], index) => (
        <motion.div
          key={name}
          className={cn("absolute", position)}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.07 }}
        >
          <div className={cn(
            "flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold shadow-sm",
            index === 0 ? "border-brand bg-[#131311] text-white" : "border-border bg-white"
          )}>
            <span className="size-2 rounded-full bg-brand" />
            {name}
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
        {["Entities", "Relationships", "Coverage"].map((label, index) => (
          <div key={label} className={cn("px-3 py-2.5 text-center sm:px-5", index > 0 && "border-l border-border")}>
            <p className="text-sm font-semibold">{["Mapped", "Linked", "Governed"][index]}</p>
            <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.1em] text-ink-mute">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TowerVisual() {
  const kpis = [
    ["Yield", "On plan", "+"],
    ["Fill rate", "Watch", "−"],
    ["Margin", "Improving", "+"],
  ];
  return (
    <div className="mx-auto max-w-[620px] space-y-3">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {kpis.map(([label, value, delta], index) => (
          <motion.div key={label} className="rounded-lg border border-border bg-white p-3 sm:p-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
            <p className="text-[10px] text-ink-mute sm:text-xs">{label}</p>
            <p className="mt-2 text-sm font-semibold sm:text-lg">{value}</p>
            <p className={cn("mt-1 font-mono text-[9px]", delta === "+" ? "text-good" : "text-bad")}>{delta} trend</p>
          </motion.div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-white p-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">Signals · active</p>
          {["Demand shift detected", "Supplier SLA slipping", "Service level at risk"].map((signal) => (
            <div key={signal} className="mt-3 flex items-center gap-2 border-t border-border pt-3 text-xs">
              <Activity size={13} className="text-brand" /> {signal}
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-white p-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">Recommended decisions</p>
          {["Rebalance allocation", "Review pricing", "Notify operator"].map((decision) => (
            <div key={decision} className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs">
              {decision}<Sparkles size={12} className="text-brand" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DecisionVisual() {
  return (
    <div className="mx-auto max-w-[600px]">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">Decision cockpit · Illustrative</p>
      <div className="space-y-3">
        {["Rebalance inventory", "Adjust regional price", "Escalate supplier review"].map((decision, index) => (
          <motion.div key={decision} className="grid gap-3 rounded-lg border border-border bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
            <div>
              <p className="text-sm font-semibold">{decision}</p>
              <p className="mt-1 text-xs text-ink-dim">Evidence attached · policy checks passed</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-md bg-brand px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-white">
              <Check size={11} /> Approve
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MeasureVisual() {
  return (
    <div className="mx-auto grid max-w-[620px] gap-4 sm:grid-cols-[1.5fr_1fr]">
      <div className="rounded-lg border border-border bg-white p-5">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">Outcome vs baseline</p>
          <TrendingUp size={16} className="text-brand" />
        </div>
        <svg viewBox="0 0 320 150" className="mt-5 w-full" aria-label="Illustrative rising outcome trend">
          <path d="M10 115 C70 112 90 107 130 98 S210 68 310 30" fill="none" stroke="#2f6fb2" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 115 H310" fill="none" stroke="#8a8880" strokeDasharray="4 5" />
          <path d="M10 115 C70 112 90 107 130 98 S210 68 310 30 V140 H10 Z" fill="rgba(47,111,178,.1)" />
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
        {["Baseline locked", "Impact attributed", "Owner notified"].map((item, index) => (
          <motion.div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-white p-3 text-xs font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
            <Check className="text-good" size={15} /> {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LearnVisual() {
  const nodes = ["Twin", "Decide", "Measure", "Learn"];
  return (
    <div className="mx-auto grid max-w-[620px] items-center gap-8 sm:grid-cols-[1fr_1.2fr]">
      <div className="relative mx-auto size-64">
        <motion.div className="absolute inset-8 rounded-full border border-dashed border-brand/60" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
        <RefreshCw className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand" size={48} strokeWidth={1.2} />
        {nodes.map((node, index) => {
          const positions = ["left-1/2 top-0 -translate-x-1/2", "right-0 top-1/2 -translate-y-1/2", "bottom-0 left-1/2 -translate-x-1/2", "left-0 top-1/2 -translate-y-1/2"];
          return <span key={node} className={cn("absolute rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold shadow-sm", positions[index])}>{node}</span>;
        })}
      </div>
      <div className="rounded-lg border border-border bg-white p-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-mute">Closed-loop learning</p>
        <h4 className="mt-3 text-xl font-semibold tracking-[-0.025em]">The operating model improves with use.</h4>
        <p className="mt-3 text-sm leading-6 text-ink-dim">Corrections from teams, measured outcomes and policy changes become governed context for the next decision.</p>
      </div>
    </div>
  );
}
