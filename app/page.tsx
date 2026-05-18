import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Database,
  GitBranch,
  Layers,
  Lock,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/button";
import { DecisionLoop } from "@/components/decision-loop";
import { Eyebrow } from "@/components/eyebrow";
import { Container, Section } from "@/components/section";
import { TowerMock } from "@/components/tower-mock";
import { ROUTES, VERTICALS } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <Problem />
      <CategoryShift />
      <Architecture />
      <LoopSection />
      <Capabilities />
      <Towers />
      <Trust />
      <Deployment />
      <VerticalsTeaser />
      <FinalCta />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <Section bleed className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="absolute inset-x-0 -top-40 h-[640px] radial-glow"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center min-h-[calc(100svh-4rem)] py-12 lg:py-20">
          <div className="max-w-2xl">
            <Eyebrow number="01" tone="accent">
              The Enterprise Decision Intelligence Platform
            </Eyebrow>

            <h1 className="mt-7 text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.025em] font-medium text-ink">
              Move beyond{" "}
              <span className="font-display italic text-gradient-brand">
                dashboards.
              </span>
              <br />
              Build{" "}
              <span className="font-display italic text-gradient-brand">
                decision intelligence
              </span>{" "}
              control towers.
            </h1>

            <p className="mt-8 max-w-[560px] text-[16.5px] leading-[1.65] text-ink-dim">
              DatacentrIQ is the governed AI layer that turns enterprise data
              into use-case-driven Control Towers — cockpits that explain what
              changed, reason causally, recommend decisions, track execution,
              and learn from outcomes.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
                Book a demo
              </Button>
              <Button href={ROUTES.platform} variant="secondary" size="lg">
                Explore the platform
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">
              <span className="inline-flex items-center gap-2">
                <CircleDot size={12} className="text-good" /> Live in pilot
              </span>
              <span className="opacity-30">·</span>
              <span>NBFC</span>
              <span>Retail</span>
              <span>Influencer</span>
              <span>Sales</span>
              <span>Winery</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-12 -z-10 opacity-70"
              aria-hidden
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(37,99,235,0.08), transparent 70%)",
              }}
            />
            <div className="relative">
              <TowerMock />
              <CoPilotPeek className="absolute -bottom-10 -left-10 hidden md:block w-[340px]" />
              <ProvenanceTag className="absolute -top-6 right-6 hidden md:flex" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CoPilotPeek({ className }: { className?: string }) {
  return (
    <div
      className={`card-elev rounded-xl p-4 backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
        <Sparkles size={11} className="text-accent" /> Co-Pilot
      </div>
      <p className="mt-2.5 text-[13px] leading-[1.55] text-ink">
        Why is recovery soft in North this week?
      </p>
      <div className="mt-3 rounded-lg border border-border bg-bg-elev/60 px-3 py-2.5 text-[12.5px] leading-[1.55] text-ink-dim">
        <span className="text-ink">3 of 14 branches</span> show roll-forward
        spikes; <span className="text-ink">supplier delay</span> upstream is the
        likely driver.{" "}
        <Link
          href={ROUTES.platform}
          className="text-brand hover:text-ink underline underline-offset-2"
        >
          See evidence →
        </Link>
      </div>
    </div>
  );
}

function ProvenanceTag({ className }: { className?: string }) {
  return (
    <div
      className={`card-elev rounded-full px-3.5 py-2 flex items-center gap-2 ${
        className ?? ""
      }`}
    >
      <Lock size={11} className="text-good" />
      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-dim">
        HITL governed · audit trail
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CATEGORY STRIP                                                      */
/* ------------------------------------------------------------------ */

function CategoryStrip() {
  return (
    <section className="relative border-y border-border bg-bg-elev/40">
      <Container className="py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute">
          Operating layer above BI · Not a dashboard tool
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-ink-dim">
          <Pill>Ontology</Pill>
          <Pill>MetricIQ</Pill>
          <Pill>Causal DAGs</Pill>
          <Pill>Decision policies</Pill>
          <Pill>Outcome learning</Pill>
          <Pill>VPC / on-prem</Pill>
        </div>
      </Container>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[10.5px] tracking-[0.16em] uppercase text-ink-dim">
      <span className="size-1 rounded-full bg-brand/70" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* PROBLEM                                                             */
/* ------------------------------------------------------------------ */

function Problem() {
  return (
    <Section pageLabel="The decision gap" pageIndex="02">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <Eyebrow number="02">The enterprise decision gap</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              Enterprises have{" "}
              <span className="italic text-ink-dim">dashboards.</span>
              <br />
              Decisions are still hard.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              Most organizations have BI tools, MIS packs, warehouses, and data
              teams. But decision-making still depends on manual interpretation,
              analyst bandwidth, and fragmented business context.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {[
              {
                label: "Why decisions still slow down",
                items: [
                  "Dashboards show what happened, but rarely explain why",
                  "Business users wait for analysts for follow-up questions",
                  "Metric definitions differ across teams and reports",
                  "CXO review packs are prepared manually",
                  "Insights do not automatically become actions",
                  "Decisions are rarely tracked back to outcomes",
                ],
              },
              {
                label: "What business teams keep asking",
                items: [
                  "Why did this move?",
                  "What changed compared to last week?",
                  "Which region, branch, or segment needs attention?",
                  "What should we do next?",
                  "Who owns the action?",
                  "Did the action actually improve the number?",
                ],
              },
            ].map((col) => (
              <div key={col.label} className="bg-bg-card p-7">
                <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-accent">
                  {col.label}
                </div>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {col.items.map((it) => (
                    <li
                      key={it}
                      className="text-[13.5px] leading-[1.55] text-ink-dim flex gap-3"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-mute/60" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* CATEGORY SHIFT                                                      */
/* ------------------------------------------------------------------ */

const SHIFT_ROWS = [
  ["Shows what happened", "Explains why it happened"],
  ["Dashboards and reports", "Contextual operational answers"],
  ["Analyst-led exploration", "Business-user investigation"],
  ["Static metrics", "Governed metric intelligence"],
  ["Manual MIS", "Automated insight briefs"],
  ["Alerts", "Enterprise agents"],
  ["Insight ends in a meeting", "Insight becomes tracked action"],
] as const;

function CategoryShift() {
  return (
    <Section
      pageLabel="Category shift"
      pageIndex="03"
      className="border-t border-border"
    >
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="03">Category shift</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              The next layer{" "}
              <span className="italic text-ink-dim">after BI</span> is decision
              intelligence.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              BI helps enterprises see data. DatacentrIQ helps enterprises
              understand movement, make decisions, and act with confidence —
              above the existing stack, not a replacement for it.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute">
              <span>BI remains the system of visibility</span>
              <span className="h-px w-6 bg-border-strong" />
              <span className="text-ink">DatacentrIQ is the system of decisions</span>
            </div>
          </div>

          <div className="card-elev rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 px-6 py-4 border-b border-border bg-bg-elev/60">
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                Traditional BI
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-accent">
                DatacentrIQ DI
              </div>
            </div>
            <div className="divide-y divide-border">
              {SHIFT_ROWS.map(([left, right]) => (
                <div
                  key={left}
                  className="grid grid-cols-2 px-6 py-4 items-center"
                >
                  <span className="text-[13.5px] text-ink-mute line-through decoration-ink-mute/30">
                    {left}
                  </span>
                  <span className="text-[14px] text-ink">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* ARCHITECTURE                                                        */
/* ------------------------------------------------------------------ */

const LAYERS = [
  {
    name: "DecisionOps",
    desc: "Track actions, ownership, approvals, and outcomes",
    icon: CheckCircle2,
  },
  {
    name: "Enterprise Agents",
    desc: "Monitor, investigate, recommend, and automate workflows",
    icon: Workflow,
  },
  {
    name: "CausalIQ",
    desc: "Identify true drivers and simulate interventions",
    icon: GitBranch,
  },
  {
    name: "Control Tower Runtime",
    desc: "Create function-specific enterprise decision cockpits",
    icon: Workflow,
  },
  {
    name: "Movement Explanation",
    desc: "Explain KPI, segment, region, and portfolio changes",
    icon: Layers,
  },
  {
    name: "Contextual Intelligence",
    desc: "Answer operational questions grounded in business context",
    icon: Sparkles,
  },
  {
    name: "MetricIQ",
    desc: "Govern metrics, formulas, ownership, lineage, and access",
    icon: GitBranch,
  },
  {
    name: "Ontology Core",
    desc: "Map entities, relationships, hierarchies, and business context",
    icon: Network,
  },
  {
    name: "Data Connectivity",
    desc: "Connect enterprise data sources and applications",
    icon: Database,
  },
] as const;

function Architecture() {
  return (
    <Section
      pageLabel="Architecture"
      pageIndex="04"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="04">Platform architecture</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            One platform.{" "}
            <span className="italic text-ink-dim">Nine intelligence layers.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            DatacentrIQ is a layered decision intelligence platform. Each layer
            is independently inspectable and approvable — the platform does not
            treat AI output as truth.
          </p>
        </div>

        <ol className="mt-14 flex flex-col gap-px bg-border rounded-xl overflow-hidden border border-border">
          {LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <li
                key={layer.name}
                className="group relative bg-bg-card hover:bg-surface/60 transition-colors px-6 sm:px-8 py-5 sm:py-6 grid grid-cols-[44px_minmax(0,1fr)_minmax(0,1.6fr)_auto] items-center gap-5"
              >
                <span className="font-mono text-[11px] tabular-nums tracking-[0.2em] uppercase text-ink-mute group-hover:text-accent transition-colors">
                  L{(i + 1).toString().padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className="text-brand"
                  />
                  <span className="font-display text-[20px] sm:text-[22px] tracking-tight text-ink">
                    {layer.name}
                  </span>
                </div>
                <span className="text-[13.5px] leading-[1.55] text-ink-dim hidden sm:block">
                  {layer.desc}
                </span>
                <span className="text-ink-mute group-hover:text-ink-dim transition-colors">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* DECISION LOOP                                                       */
/* ------------------------------------------------------------------ */

function LoopSection() {
  return (
    <Section
      pageLabel="Decision-to-outcome"
      pageIndex="05"
      className="border-t border-border"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          <div>
            <Eyebrow number="05">Decision-to-outcome loop</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              AI proposes.
              <br />
              The system{" "}
              <span className="italic text-ink-dim">tests and traces.</span>
              <br />
              Humans approve.
              <br />
              The platform{" "}
              <span className="italic text-gradient-brand">
                learns from outcomes.
              </span>
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              DatacentrIQ does not stop at insights. Every decision is owned,
              executed, measured against expectation, and fed back into the
              system as a learnable signal.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
              <Stat label="Expected" value="$85K" tone="ink" />
              <Stat label="Actual" value="$70K" tone="good" />
              <Stat label="Variance" value="−$15K" tone="warn" />
            </div>
            <p className="mt-4 text-[12.5px] text-ink-mute leading-[1.6] max-w-md">
              <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-accent">
                Learning ·
              </span>{" "}
              future simulations should include execution-latency penalty in
              high-volume regions.
            </p>
          </div>

          <div className="flex justify-center">
            <DecisionLoop className="w-full max-w-[480px]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Stat({
  label,
  value,
  tone = "ink",
}: {
  label: string;
  value: string;
  tone?: "ink" | "good" | "warn";
}) {
  const toneClass =
    tone === "good"
      ? "text-good"
      : tone === "warn"
      ? "text-warn"
      : "text-ink";
  return (
    <div className="rounded-lg border border-border bg-bg-card px-3.5 py-3">
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute">
        {label}
      </div>
      <div
        className={`mt-1.5 font-display text-[22px] leading-none tracking-tight ${toneClass}`}
      >
        {value}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CAPABILITIES                                                        */
/* ------------------------------------------------------------------ */

const CAPABILITIES = [
  {
    n: "01",
    name: "Governed AI Layer",
    desc: "Enterprise-grade intelligence with RBAC, lineage, prompt/response logs, human approvals — and flexible deployment.",
    chips: ["RBAC", "Audit logs", "Lineage", "SSO/SAML"],
  },
  {
    n: "02",
    name: "Contextual Intelligence",
    desc: "Operational questions answered with business context — direct answers, breakdowns, suggested follow-ups, and recommended actions.",
    chips: ["NLQ", "Breakdowns", "Follow-ups", "Suggested action"],
  },
  {
    n: "03",
    name: "MetricIQ",
    desc: "Most enterprise analytics problems are metric-trust problems. MetricIQ standardizes definitions, formulas, ownership, lineage, and approvals.",
    chips: ["Catalogue", "Lineage", "Owners", "Versioning"],
  },
  {
    n: "04",
    name: "Movement Explanation",
    desc: "Explain why KPIs, segments, branches, products, or customer groups changed — across region, team, process stage, channel, and time.",
    chips: ["Drivers", "Segments", "Branches", "Time"],
  },
  {
    n: "05",
    name: "Insight Briefs",
    desc: "Automated review-ready briefs for collections, portfolio quality, branch performance, customer intelligence, and revenue leakage.",
    chips: ["Weekly", "Portfolio", "Branch", "Risk"],
  },
  {
    n: "06",
    name: "Control Towers",
    desc: "Function-specific decision cockpits with monitoring, explanations, decision cards, workflows, and outcome tracking.",
    chips: ["Collections", "Revenue", "Branch", "Customer 360"],
  },
  {
    n: "07",
    name: "CausalIQ",
    desc: "Move from correlation to causation: causal DAG generation, driver analysis, what-if simulation, counterfactuals, HITL validation.",
    chips: ["DAGs", "Drivers", "What-if", "Counterfactual"],
  },
  {
    n: "08",
    name: "Enterprise Agents",
    desc: "Agents that monitor KPIs, detect exceptions, investigate movement, recommend actions, and trigger governed workflows.",
    chips: ["Monitoring", "Investigation", "Recommendation", "Workflow"],
  },
] as const;

function Capabilities() {
  return (
    <Section
      pageLabel="Capabilities"
      pageIndex="06"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="06">Eight core capabilities</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            From question to{" "}
            <span className="italic text-gradient-brand">tracked outcome.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            Each capability is a first-class product surface — visible,
            inspectable, and bound to enterprise artifacts. Nothing operates as
            a black box.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {CAPABILITIES.map((c) => (
            <article
              key={c.name}
              className="group bg-bg-card hover:bg-surface/60 transition-colors p-6 flex flex-col gap-4 min-h-[260px]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                  Capability {c.n}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-ink-mute group-hover:text-ink transition-colors"
                />
              </div>
              <h3 className="font-display text-[22px] leading-[1.1] tracking-tight text-ink">
                {c.name}
              </h3>
              <p className="text-[13px] leading-[1.6] text-ink-dim">{c.desc}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-mute"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTROL TOWERS                                                      */
/* ------------------------------------------------------------------ */

const TOWERS = [
  {
    name: "Collections Recovery",
    domain: "NBFC · BFSI",
    blurb:
      "Prioritize customers, optimize field actions, and learn which interventions drove recovery.",
    metric: "$5.4M recovered · +8.1%",
  },
  {
    name: "Revenue Recovery",
    domain: "Retail · Commerce",
    blurb:
      "Recover lost revenue from stockouts, supplier delays, and allocation gaps with simulated interventions.",
    metric: "$85K impact · 82% conf.",
  },
  {
    name: "Customer 360",
    domain: "BFSI · D2C · SaaS",
    blurb:
      "Unified profile, behavior timeline, risk and opportunity signals, next-best action.",
    metric: "Cross-sell · retention",
  },
  {
    name: "Influencer Growth",
    domain: "Creator-led commerce",
    blurb:
      "Estimate true incremental influence, detect saturation, reallocate toward LTV-creating creators.",
    metric: "ROAS · LTV/CAC",
  },
  {
    name: "Sales Productivity",
    domain: "Enterprise B2B sales",
    blurb:
      "Explain why the bottom of the bell curve performs worse — and what coaching, leads, or territory moves close the gap.",
    metric: "Win-rate · velocity",
  },
  {
    name: "Branch & Field",
    domain: "Distributed operations",
    blurb:
      "Branch scorecards, field productivity, disbursement quality, collection discipline — geographically aware.",
    metric: "Scorecards · maps",
  },
] as const;

function Towers() {
  return (
    <Section
      pageLabel="Control Towers"
      pageIndex="07"
      className="border-t border-border"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow number="07">Control Towers</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              A dashboard shows status.
              <br />A control tower{" "}
              <span className="italic text-ink-dim">runs the function.</span>
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] leading-[1.65] text-ink-dim">
            Each tower is a governed operating system around one business
            objective — with monitoring, explanations, decision cards,
            workflows, and outcome tracking.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOWERS.map((t) => (
            <article
              key={t.name}
              className="card-elev rounded-xl p-6 flex flex-col gap-4 hover:border-border-strong transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-accent">
                  {t.domain}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] tracking-[0.2em] uppercase text-ink-mute">
                  <span className="size-1 rounded-full bg-good" /> Live
                </span>
              </div>
              <h3 className="font-display text-[26px] leading-[1.05] tracking-tight text-ink">
                {t.name}
              </h3>
              <p className="text-[13.5px] leading-[1.6] text-ink-dim">
                {t.blurb}
              </p>
              <div className="mt-auto pt-3 border-t border-border flex items-center justify-between font-mono text-[10.5px] tracking-[0.18em] uppercase">
                <span className="text-ink-dim">{t.metric}</span>
                <span className="text-ink-mute">Tower →</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* TRUST / GOVERNANCE                                                  */
/* ------------------------------------------------------------------ */

function Trust() {
  return (
    <Section
      pageLabel="Governance"
      pageIndex="08"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <Eyebrow number="08">Governance &amp; trust</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              The moat isn&apos;t the agents.
              <br />
              It&apos;s the{" "}
              <span className="italic text-gradient-brand">governed artifacts.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              Every ontology, metric, causal claim, decision policy, and
              workflow is an inspectable enterprise artifact. AI drafts it. The
              system tests it. Humans approve it. The platform versions it. The
              outcome calibrates it.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
              {[
                ["Draft", "AI-generated proposal"],
                ["Tested", "Structurally + statistically"],
                ["Reviewed", "Human-in-the-loop"],
                ["Approved", "Versioned & published"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-lg border border-border bg-bg-card px-4 py-3"
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                    {k}
                  </div>
                  <div className="mt-1 text-[12.5px] leading-[1.5] text-ink-dim">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ClaimCard />
        </div>
      </Container>
    </Section>
  );
}

function ClaimCard() {
  return (
    <div className="card-elev rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-bg-elev/60">
        <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
          Causal claim · CC-0142
        </div>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-good">
          <Lock size={11} /> Approved
        </span>
      </div>
      <div className="p-6 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
            Claim
          </div>
          <p className="mt-1.5 font-display text-[22px] leading-[1.2] tracking-tight text-ink">
            Inventory cover reduces stockout rate.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Field label="Confidence" value="88%" tone="good" />
          <Field label="Population" value="Fast-moving SKUs" />
          <Field label="Range" value="3–9 day cover" />
        </div>

        <div className="rounded-lg border border-border bg-bg-elev/60 p-4 space-y-2.5">
          <Evidence good text="Temporal order holds across all windows" />
          <Evidence good text="Stable effect in 9 of 10 historical windows" />
          <Evidence good text="Strongest effect in high-velocity SKUs" />
          <Evidence text="Weak effect for seasonal slow-moving SKUs" />
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-border">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute">
            Reviewed · 2026-04-22 · M. Pathak
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
            v1.3
          </span>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  tone = "ink",
}: {
  label: string;
  value: string;
  tone?: "ink" | "good";
}) {
  return (
    <div className="rounded-md border border-border bg-bg-elev/40 px-3 py-2.5">
      <div className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-ink-mute">
        {label}
      </div>
      <div
        className={`mt-1 text-[14px] tracking-tight ${
          tone === "good" ? "text-good" : "text-ink"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function Evidence({ text, good }: { text: string; good?: boolean }) {
  return (
    <div className="flex gap-2.5 items-start text-[12.5px] leading-[1.5]">
      <CheckCircle2
        size={12}
        strokeWidth={2}
        className={`mt-1 shrink-0 ${good ? "text-good" : "text-warn"}`}
      />
      <span className={good ? "text-ink-dim" : "text-ink-mute"}>{text}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* DEPLOYMENT                                                          */
/* ------------------------------------------------------------------ */

type Deployment = {
  name: string;
  blurb: string;
  bullets: string[];
  featured?: boolean;
};

const DEPLOYMENTS: Deployment[] = [
  {
    name: "DatacentrIQ Cloud",
    blurb: "Fastest start with managed infrastructure.",
    bullets: [
      "Hosted control plane",
      "Tower Studio + artifact registry",
      "SSO/SAML readiness",
    ],
  },
  {
    name: "Customer VPC",
    blurb: "Runs inside the customer cloud environment.",
    bullets: [
      "Read-only secure data agent",
      "Query-in-place compute",
      "No raw data export",
    ],
    featured: true,
  },
  {
    name: "On-Premise",
    blurb: "For regulated or restricted deployments.",
    bullets: [
      "Air-gap capable",
      "Client-managed secrets",
      "Full audit logging",
    ],
  },
];

function Deployment() {
  return (
    <Section
      pageLabel="Deployment"
      pageIndex="09"
      className="border-t border-border"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="09">Deployment</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              Bring intelligence{" "}
              <span className="italic text-ink-dim">to the data</span> —
              <br />
              not the data to the intelligence.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              Three deployment options, one operating model. For regulated
              clients, computation runs inside your VPC with read-only
              credentials, query firewalls, and PII masking. No raw data
              export by default.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {DEPLOYMENTS.map((d) => (
              <div
                key={d.name}
                className={`relative rounded-xl border p-6 flex flex-col gap-5 min-h-[300px] ${
                  d.featured
                    ? "border-brand/50 bg-bg-card ring-1 ring-brand/20"
                    : "border-border bg-bg-card"
                }`}
              >
                {d.featured && (
                  <span className="absolute -top-2 left-6 rounded-full bg-brand-deep px-2.5 py-0.5 font-mono text-[9.5px] tracking-[0.2em] uppercase text-white">
                    Most common
                  </span>
                )}
                <div>
                  <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                    Mode
                  </div>
                  <h3 className="mt-2 font-display text-[22px] leading-[1.15] tracking-tight text-ink">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-ink-dim">
                    {d.blurb}
                  </p>
                </div>
                <ul className="mt-auto flex flex-col gap-2">
                  {d.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[12.5px] leading-[1.5] text-ink-dim"
                    >
                      <CheckCircle2
                        size={11}
                        className="mt-1 text-brand shrink-0"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* VERTICALS TEASER                                                    */
/* ------------------------------------------------------------------ */

function VerticalsTeaser() {
  return (
    <Section
      pageLabel="Vertical solutions"
      pageIndex="10"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="10">Vertical solutions</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            One platform.{" "}
            <span className="italic text-ink-dim">Many operating models.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            DatacentrIQ ships with vertical templates for the highest-value
            first use cases. Start with one tower, expand into an enterprise
            operating layer.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VERTICALS.map((v, i) => (
            <Link
              key={v.slug}
              href={`${ROUTES.verticals}/${v.slug}`}
              className="group card-elev rounded-xl p-6 flex flex-col gap-4 min-h-[200px] hover:border-border-strong transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                  V/{(i + 1).toString().padStart(2, "0")}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-ink-mute group-hover:text-ink transition-colors"
                />
              </div>
              <h3 className="font-display text-[22px] leading-[1.15] tracking-tight text-ink">
                {v.name}
              </h3>
              <p className="text-[13px] leading-[1.55] text-ink-dim">
                {v.headline}
              </p>
            </Link>
          ))}
          <Link
            href={ROUTES.verticals}
            className="group rounded-xl border border-dashed border-border-strong p-6 flex flex-col justify-between min-h-[200px] hover:border-brand/60 hover:bg-bg-card/40 transition-colors"
          >
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
              See all
            </span>
            <span className="font-display text-[22px] leading-[1.15] tracking-tight text-ink inline-flex items-center gap-2">
              All verticals
              <ArrowUpRight
                size={18}
                className="text-ink-mute group-hover:text-ink"
              />
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FINAL CTA                                                           */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <Section className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-x-0 -top-20 h-[420px] radial-glow"
        aria-hidden
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow number="11">Engagement path</Eyebrow>
          <h2 className="mt-6 font-display text-[44px] sm:text-[64px] leading-[0.98] tracking-[-0.025em] text-ink">
            Build your{" "}
            <span className="italic text-gradient-brand">
              first Control Tower.
            </span>
          </h2>
          <p className="mt-7 max-w-xl text-[16px] leading-[1.6] text-ink-dim">
            Pick one high-value decision domain. We&apos;ll define the ontology
            slice, KPI tree, signals, and decision policy — and stand up a
            governed pilot in 8–12 weeks.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
              Book a demo
            </Button>
            <Button href={ROUTES.platform} variant="secondary" size="lg">
              Read the platform
            </Button>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-5 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {[
            ["Discovery", "Use-case blueprint"],
            ["Data onboarding", "Governed foundation"],
            ["Metric setup", "MetricIQ catalogue"],
            ["Intelligence layer", "Business adoption"],
            ["Tower blueprint", "Roadmap"],
          ].map(([title, sub], i) => (
            <div key={title} className="bg-bg-card p-6">
              <div className="font-mono text-[10px] tabular-nums tracking-[0.22em] uppercase text-accent">
                Phase 0{i + 1}
              </div>
              <div className="mt-3 font-display text-[18px] leading-[1.15] tracking-tight text-ink">
                {title}
              </div>
              <div className="mt-1.5 text-[12px] leading-[1.5] text-ink-mute">
                {sub}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
