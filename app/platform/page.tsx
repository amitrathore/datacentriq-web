import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Compass,
  Database,
  FileCheck2,
  FlaskConical,
  GitBranch,
  GitMerge,
  History,
  Layers,
  Lock,
  MessagesSquare,
  Network,
  PlayCircle,
  Radar,
  Target,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/button";
import { Eyebrow } from "@/components/eyebrow";
import { Container, Section } from "@/components/section";
import { ROUTES } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Platform — The Artifact Factory",
  description:
    "DatacentrIQ is a governed AI artifact factory. Ontology, KPIs, Control Towers, causal claims, decisions, execution, and outcomes — every artifact tested, traced, reviewed, approved, versioned.",
};

export default function PlatformPage() {
  return (
    <>
      <Hero />
      <Thesis />
      <Lifecycle />
      <Factories />
      <Modules />
      <DeploymentDetail />
      <Security />
      <FinalCta />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <Section
      bleed
      className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 -top-32 h-[520px] radial-glow"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1.05fr_0.9fr] gap-12 lg:gap-20 items-end">
          <div className="max-w-2xl">
            <Eyebrow number="P/01" tone="accent">
              The Platform
            </Eyebrow>
            <h1 className="mt-7 font-display text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-0.025em] text-ink">
              A governed{" "}
              <span className="italic text-gradient-brand">
                AI artifact factory
              </span>{" "}
              for the enterprise.
            </h1>
            <p className="mt-8 max-w-[580px] text-[16.5px] leading-[1.65] text-ink-dim">
              DatacentrIQ converts raw schemas and business intent into{" "}
              <span className="text-ink">approved enterprise artifacts</span>:
              ontology, KPIs, Control Towers, causal claims, decision policies,
              workflows, and outcome learning. AI drafts. The system tests. Humans
              approve. The platform learns.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
                Book a demo
              </Button>
              <Button href={`${ROUTES.verticals}`} variant="secondary" size="lg">
                See vertical templates
              </Button>
            </div>
          </div>

          <ArtifactFlow />
        </div>
      </Container>
    </Section>
  );
}

function ArtifactFlow() {
  const NODES = [
    { label: "Schema", icon: Database },
    { label: "Ontology", icon: Network },
    { label: "KPI Registry", icon: GitBranch },
    { label: "Control Tower", icon: Workflow },
    { label: "Causal Model", icon: GitMerge },
    { label: "Decision Policy", icon: FileCheck2 },
    { label: "Execution", icon: PlayCircle },
    { label: "Outcome Learning", icon: History },
  ];
  return (
    <div className="card-elev rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
          Artifact flow
        </span>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent">
          Governed
        </span>
      </div>
      <ol className="flex flex-col gap-1.5">
        {NODES.map((n, i) => {
          const Icon = n.icon;
          return (
            <li
              key={n.label}
              className="group relative rounded-lg border border-border bg-bg-elev/50 px-4 py-3 flex items-center gap-3"
            >
              <span className="font-mono text-[10px] tabular-nums tracking-[0.18em] text-ink-mute">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <Icon size={14} className="text-brand" strokeWidth={1.5} />
              <span className="text-[13.5px] text-ink">{n.label}</span>
              {i < NODES.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[27px] -bottom-1.5 h-2 w-px bg-border-strong"
                />
              )}
              <span className="ml-auto font-mono text-[9.5px] tracking-[0.18em] uppercase text-ink-mute">
                Versioned
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CORE THESIS                                                         */
/* ------------------------------------------------------------------ */

function Thesis() {
  return (
    <Section
      pageLabel="Core thesis"
      pageIndex="P/02"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="P/02">Core thesis</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              The defensibility{" "}
              <span className="italic text-ink-dim">is not the agents.</span>
              <br />
              It&apos;s the{" "}
              <span className="italic text-gradient-brand">
                governed artifacts.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              Anyone can wire an LLM to a database. What compounds over time is
              an enterprise registry of approved ontology, metric lineage,
              causal claims, Control Tower specs, decision policies, execution
              workflows, and outcome feedback loops.
            </p>
            <blockquote className="mt-8 border-l-2 border-brand/70 pl-5">
              <p className="font-display text-[20px] leading-[1.35] tracking-tight text-ink">
                AI proposes. The system tests and traces. Humans approve. The
                platform learns from outcomes.
              </p>
              <p className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                Core principle · DatacentrIQ
              </p>
            </blockquote>
          </div>

          <div className="flex flex-col gap-4">
            {ARTIFACTS.map((a) => (
              <div
                key={a.name}
                className="card-elev rounded-xl p-5 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <a.icon
                      size={14}
                      className="text-brand"
                      strokeWidth={1.5}
                    />
                    <span className="font-display text-[18px] tracking-tight text-ink">
                      {a.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
                    {a.tag}
                  </span>
                </div>
                <p className="text-[13px] leading-[1.55] text-ink-dim">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

const ARTIFACTS = [
  {
    name: "Ontology",
    icon: Network,
    tag: "Semantic foundation",
    desc: "Business entities, relationships, attributes, and semantic mappings derived from schemas, query logs, and human review.",
  },
  {
    name: "KPI Registry",
    icon: GitBranch,
    tag: "Single source of truth",
    desc: "Approved metrics with formulas, owners, lineage, grain, refresh cadence, and access policies. Versioned.",
  },
  {
    name: "Control Tower",
    icon: Workflow,
    tag: "Operating lens",
    desc: "Use-case-driven cockpit: objective, KPIs, signals, priority cases, causal model, decisions, workflows, outcomes.",
  },
  {
    name: "Signal Recipe",
    icon: Radar,
    tag: "Attention detector",
    desc: "Tested logic for when a KPI movement, anomaly, or segment warrants attention — with backtest quality scores.",
  },
  {
    name: "Causal Claim",
    icon: GitMerge,
    tag: "Reasoned hypothesis",
    desc: "A specific causal edge with evidence, confidence, valid population, valid range, assumptions, and review status.",
  },
  {
    name: "Decision Policy",
    icon: FileCheck2,
    tag: "Governed action",
    desc: "Rules defining what actions can be recommended, who approves them, what constraints apply, and how rollback triggers.",
  },
  {
    name: "Execution Workflow",
    icon: PlayCircle,
    tag: "Closed loop",
    desc: "Steps, owners, SLAs, escalation rules, integration hooks, and completion tracking — bound to decisions.",
  },
  {
    name: "Outcome Plan",
    icon: History,
    tag: "Learning input",
    desc: "Measurement design comparing expected vs actual impact. Variance feeds back into future recommendations.",
  },
];

/* ------------------------------------------------------------------ */
/* ARTIFACT LIFECYCLE                                                  */
/* ------------------------------------------------------------------ */

const LIFECYCLE = [
  { name: "Draft", desc: "AI proposal" },
  { name: "Generated", desc: "Structured artifact" },
  { name: "Tested", desc: "Backtest, falsify" },
  { name: "Reviewed", desc: "Human-in-the-loop" },
  { name: "Approved", desc: "Sign-off & owner" },
  { name: "Published", desc: "Live in runtime" },
  { name: "Monitored", desc: "Drift & quality" },
  { name: "Versioned", desc: "v1.x · v1.x+1" },
  { name: "Deprecated", desc: "Retired, traceable" },
];

function Lifecycle() {
  return (
    <Section
      pageLabel="Artifact lifecycle"
      pageIndex="P/03"
      className="border-t border-border"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="P/03">Artifact lifecycle</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            The platform does not{" "}
            <span className="italic text-ink-dim">treat AI output as truth.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            Every artifact passes through a governed lifecycle. Nothing reaches
            production without being tested, traced, reviewed, and approved.
          </p>
        </div>

        <ol className="mt-14 relative">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[34px] h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
          />
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 relative">
            {LIFECYCLE.map((step, i) => (
              <li
                key={step.name}
                className="relative card-elev rounded-lg p-4 flex flex-col items-start gap-2"
              >
                <span className="font-mono text-[10px] tabular-nums tracking-[0.2em] uppercase text-accent">
                  S{(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="font-display text-[18px] tracking-tight text-ink leading-none">
                  {step.name}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-mute">
                  {step.desc}
                </span>
              </li>
            ))}
          </div>
        </ol>

        <p className="mt-12 max-w-2xl font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute">
          Every published artifact carries provenance — data source, owner,
          confidence, last refresh, and human approver.
        </p>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* THE THREE FACTORIES                                                 */
/* ------------------------------------------------------------------ */

function Factories() {
  return (
    <Section
      pageLabel="Factories"
      pageIndex="P/04"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="P/04">Three core factories</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Generated.{" "}
            <span className="italic text-ink-dim">Tested.</span> Approved.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            Three guided workflows produce the most important artifacts. Each
            one is a sequence of inspectable workspaces, not a single LLM call.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          <OntologyFactoryCard />
          <ControlTowerFactoryCard />
          <CausalFactoryCard />
        </div>
      </Container>
    </Section>
  );
}

function OntologyFactoryCard() {
  return (
    <article className="card-elev rounded-xl overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.2fr]">
        <div className="p-7 lg:p-9 border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Network size={16} className="text-brand" strokeWidth={1.5} />
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
              Factory 01
            </span>
          </div>
          <h3 className="font-display text-[28px] sm:text-[32px] leading-[1.05] tracking-tight text-ink">
            Ontology Factory
          </h3>
          <p className="text-[14px] leading-[1.65] text-ink-dim max-w-md">
            Converts raw database schemas into a business-level ontology that
            business users can think in — entities, relationships, attributes,
            confidence, PII classification.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[
              "Schemas",
              "Glossary",
              "Query logs",
              "Confidence",
              "PII",
              "Lineage",
            ].map((c) => (
              <span
                key={c}
                className="rounded-md border border-border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-mute"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 lg:p-8 grid sm:grid-cols-2 gap-4 bg-bg-elev/40">
          <CodeBlock
            label="Raw schema"
            lines={[
              "loan_account_master",
              "cust_mst",
              "coll_visit",
              "txn_hist",
            ]}
            tone="dim"
          />
          <CodeBlock
            label="Generated entity"
            lines={[
              "Entity: Loan Account",
              "  has: Customer",
              "  has: Repayment Events",
              "  has: Collection Actions",
              "  belongs to: Branch",
            ]}
            tone="bright"
          />
        </div>
      </div>
    </article>
  );
}

function ControlTowerFactoryCard() {
  const STEPS = [
    "Intent",
    "Understanding",
    "Ontology",
    "Filters",
    "KPIs",
    "Signals",
    "Cases",
    "Causal DAG",
    "Scenarios",
    "Decisions",
    "Execution",
    "Outcomes",
    "Preview",
    "Publish",
  ];
  return (
    <article className="card-elev rounded-xl overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.2fr]">
        <div className="p-7 lg:p-9 border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Workflow size={16} className="text-brand" strokeWidth={1.5} />
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
              Factory 02
            </span>
          </div>
          <h3 className="font-display text-[28px] sm:text-[32px] leading-[1.05] tracking-tight text-ink">
            Control Tower Factory
          </h3>
          <p className="text-[14px] leading-[1.65] text-ink-dim max-w-md">
            Converts human intent into a governed operating tower through a
            sequence of custom workspaces — every artifact inspected before
            publish.
          </p>
          <div className="mt-2 rounded-lg border border-border bg-bg-elev/50 p-3.5">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
              Intent input
            </div>
            <p className="mt-1.5 text-[13.5px] text-ink leading-snug">
              &ldquo;Create a tower to reduce stockout-driven revenue loss in
              North Region.&rdquo;
            </p>
          </div>
        </div>

        <div className="p-6 lg:p-8 bg-bg-elev/40">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute mb-4">
            14-step guided generation
          </div>
          <ol className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {STEPS.map((s, i) => (
              <li
                key={s}
                className="rounded-md border border-border bg-bg-card px-3 py-2 flex items-center gap-2"
              >
                <span className="font-mono text-[9.5px] tabular-nums tracking-[0.18em] text-ink-mute">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-[12.5px] text-ink-dim">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}

function CausalFactoryCard() {
  return (
    <article className="card-elev rounded-xl overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.2fr]">
        <div className="p-7 lg:p-9 border-b lg:border-b-0 lg:border-r border-border flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <FlaskConical size={16} className="text-brand" strokeWidth={1.5} />
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
              Factory 03
            </span>
          </div>
          <h3 className="font-display text-[28px] sm:text-[32px] leading-[1.05] tracking-tight text-ink">
            Causal DAG Factory
          </h3>
          <p className="text-[14px] leading-[1.65] text-ink-dim max-w-md">
            Production-grade causal graphs are not LLM one-shots. The platform
            assembles, falsifies, revises, and reviews — claims carry evidence,
            confidence, valid population, and valid range.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[
              "Edges",
              "Temporal order",
              "Counter-evidence",
              "Confounders",
              "Heterogeneous",
              "Backtest",
            ].map((c) => (
              <span
                key={c}
                className="rounded-md border border-border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-mute"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 lg:p-8 bg-bg-elev/40 flex flex-col gap-3">
          <div className="rounded-lg border border-border bg-bg-card p-4">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
              Causal claim
            </div>
            <div className="mt-1 font-display text-[18px] leading-tight tracking-tight text-ink">
              Inventory cover → reduced stockout rate
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <ClaimChip label="Confidence" value="88%" tone="good" />
              <ClaimChip label="Population" value="Fast-moving" />
              <ClaimChip label="Range" value="3–9 days" />
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-x-3 gap-y-1.5">
              <EvidenceLine ok text="Temporal order holds" />
              <EvidenceLine ok text="Stable across 9/10 windows" />
              <EvidenceLine ok text="Strongest for high velocity" />
              <EvidenceLine text="Weak for seasonal SKUs" />
            </div>
          </div>
          <div className="rounded-md border border-border bg-bg-card px-4 py-2.5 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase">
            <span className="text-ink-mute">CC-0142 · v1.3</span>
            <span className="text-good inline-flex items-center gap-2">
              <Lock size={11} /> Approved for fast-moving SKUs
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function CodeBlock({
  label,
  lines,
  tone = "dim",
}: {
  label: string;
  lines: string[];
  tone?: "dim" | "bright";
}) {
  return (
    <div className="rounded-lg border border-border bg-bg-card overflow-hidden">
      <div className="px-3 py-2 border-b border-border bg-bg-elev/60 font-mono text-[10px] tracking-[0.2em] uppercase text-ink-mute">
        {label}
      </div>
      <pre
        className={`px-4 py-3.5 font-mono text-[12px] leading-[1.65] whitespace-pre-wrap ${
          tone === "bright" ? "text-ink" : "text-ink-mute"
        }`}
      >
        {lines.join("\n")}
      </pre>
    </div>
  );
}

function ClaimChip({
  label,
  value,
  tone = "ink",
}: {
  label: string;
  value: string;
  tone?: "ink" | "good";
}) {
  return (
    <div className="rounded-md border border-border bg-bg-elev/40 px-2.5 py-2">
      <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-mute">
        {label}
      </div>
      <div
        className={`mt-0.5 text-[12.5px] tracking-tight ${
          tone === "good" ? "text-good" : "text-ink"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function EvidenceLine({ text, ok }: { text: string; ok?: boolean }) {
  return (
    <div className="flex items-start gap-2 text-[12px] leading-[1.5]">
      <CheckCircle2
        size={11}
        className={`mt-0.5 shrink-0 ${ok ? "text-good" : "text-warn"}`}
        strokeWidth={2}
      />
      <span className={ok ? "text-ink-dim" : "text-ink-mute"}>{text}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MODULES                                                             */
/* ------------------------------------------------------------------ */

const MODULES = [
  {
    n: "M/01",
    name: "Home",
    tag: "Operating brief",
    icon: Compass,
    desc: "The daily decision agenda — what to focus on, what changed, what's blocked, what to simulate, what we learned. Not a dashboard of dashboards.",
  },
  {
    n: "M/02",
    name: "Tower Hub",
    tag: "Portfolio",
    icon: Boxes,
    desc: "Every published and draft Control Tower with value at risk, trust score, active cases, pending decisions, blockers, and recommended next step.",
  },
  {
    n: "M/03",
    name: "Tower Runtime",
    tag: "Operate",
    icon: Workflow,
    desc: "The operating page for a specific tower: today's focus, signals, drivers, scenarios, decision queue, execution blockers, outcome learning.",
  },
  {
    n: "M/04",
    name: "Tower Studio",
    tag: "Build",
    icon: Layers,
    desc: "Guided construction. Every step a custom workspace — intent, ontology, filters, KPIs, signals, cases, DAGs, scenarios, decisions, workflows, outcomes, publish.",
  },
  {
    n: "M/05",
    name: "Co-Pilot",
    tag: "Reason",
    icon: MessagesSquare,
    desc: "Enterprise reasoning grounded on approved artifacts. Not a generic chatbot — every answer references ontology, metrics, causal claims, and evidence.",
  },
  {
    n: "M/06",
    name: "Causal Intelligence",
    tag: "Explain",
    icon: GitMerge,
    desc: "Root cause, driver decomposition, counterfactuals, what-if simulation, mediation, saturation, drift monitoring — with confidence boundaries.",
  },
  {
    n: "M/07",
    name: "Decisions",
    tag: "Decide",
    icon: Target,
    desc: "Decision objects: linked tower, expected impact, confidence, causal reasoning, approvals, owner, deadline, constraints, rollback, measurement window.",
  },
  {
    n: "M/08",
    name: "Execution",
    tag: "Act",
    icon: PlayCircle,
    desc: "Tasks, owners, SLAs, escalations, integration hooks, blockers, completion measurement, impact decay tracking.",
  },
  {
    n: "M/09",
    name: "Outcomes",
    tag: "Measure",
    icon: History,
    desc: "Expected vs actual. Variance. Root cause of the variance. Learning that flows back into future simulations and recommendations.",
  },
  {
    n: "M/10",
    name: "Data & Trust",
    tag: "Govern",
    icon: Lock,
    desc: "Freshness, coverage, source quality, lineage, PII compliance, causal claim status, model drift, signal backtest quality, execution reliability.",
  },
];

function Modules() {
  return (
    <Section
      pageLabel="Product modules"
      pageIndex="P/05"
      className="border-t border-border"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="P/05">Product modules</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Ten modules.{" "}
            <span className="italic text-ink-dim">One operating layer.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            Each module is a first-class product surface — visible, inspectable,
            bound to the artifact registry. Nothing operates as a black box.
          </p>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {MODULES.map((m) => {
            const Icon = m.icon;
            return (
              <li
                key={m.name}
                className="group bg-bg-card hover:bg-surface/60 transition-colors p-6 sm:p-7 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon size={14} className="text-brand" strokeWidth={1.5} />
                    <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                      {m.n} · {m.tag}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-ink-mute group-hover:text-ink transition-colors"
                  />
                </div>
                <h3 className="font-display text-[24px] tracking-tight text-ink leading-tight">
                  {m.name}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-ink-dim">
                  {m.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* DEPLOYMENT DETAIL                                                   */
/* ------------------------------------------------------------------ */

const ACCESS_MODES = [
  {
    mode: "No-data demo",
    desc: "Synthetic or sample data only",
    use: "First demo and product pitch",
  },
  {
    mode: "Metadata-only",
    desc: "Schemas, glossary, names",
    use: "Ontology and tower blueprinting",
  },
  {
    mode: "Aggregated data",
    desc: "Branch/segment-level data only",
    use: "Executive towers, trend analysis",
  },
  {
    mode: "Query-in-place",
    desc: "Compute runs inside client environment",
    use: "Production intelligence without raw export",
  },
  {
    mode: "Private deployment",
    desc: "Full/partial deployment inside client VPC/on-prem",
    use: "Strictly regulated clients",
  },
];

function DeploymentDetail() {
  return (
    <Section
      id="deployment"
      pageLabel="Deployment"
      pageIndex="P/06"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="P/06">Data access</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              Five modes,{" "}
              <span className="italic text-ink-dim">one operating model.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              Regulated sectors don&apos;t need to export raw data. DatacentrIQ
              can start with metadata, expand to aggregates, and run
              production-grade query-in-place compute through a secure
              data-plane agent.
            </p>
          </div>

          <div className="card-elev rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_1.2fr_1.4fr] px-6 py-4 border-b border-border bg-bg-elev/60 font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
              <span>Mode</span>
              <span>Description</span>
              <span>Use case</span>
            </div>
            <div className="divide-y divide-border">
              {ACCESS_MODES.map((m) => (
                <div
                  key={m.mode}
                  className="grid grid-cols-[1fr_1.2fr_1.4fr] px-6 py-5 items-start gap-4"
                >
                  <span className="font-display text-[16px] tracking-tight text-ink">
                    {m.mode}
                  </span>
                  <span className="text-[13px] leading-[1.55] text-ink-dim">
                    {m.desc}
                  </span>
                  <span className="text-[13px] leading-[1.55] text-ink-mute">
                    {m.use}
                  </span>
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
/* SECURITY                                                            */
/* ------------------------------------------------------------------ */

function Security() {
  return (
    <Section
      pageLabel="Security"
      pageIndex="P/07"
      className="border-t border-border"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="P/07">Security &amp; governance</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              Control plane.{" "}
              <span className="italic text-ink-dim">Client data plane.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              The control plane is hosted by DatacentrIQ. The data plane runs
              inside the client&apos;s VPC. Outbound-only secure connections.
              Read-only credentials. No public IP. Query firewalls, PII masking,
              aggregation thresholds, audit logging.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <PlaneCard
                title="Control plane"
                subtitle="Hosted by DatacentrIQ"
                items={[
                  "UI · Tower Studio",
                  "Workflow orchestration",
                  "Artifact registry",
                  "Model orchestration",
                  "Tenant configuration",
                ]}
                tone="brand"
              />
              <PlaneCard
                title="Client data plane"
                subtitle="Runs inside client VPC"
                items={[
                  "Secure data agent",
                  "Read-only DB connectors",
                  "DuckDB / query federation",
                  "Query policy engine",
                  "Aggregation + masking",
                  "Audit logger",
                ]}
                tone="accent"
              />
            </div>

            <div className="card-elev rounded-xl p-6">
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute mb-4">
                Security principles
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  "No raw data export by default",
                  "No inbound access into client VPC",
                  "Outbound-only secure connection",
                  "Read-only credentials",
                  "No public IP",
                  "Query firewall",
                  "PII masking",
                  "Aggregation thresholds",
                  "Full audit logging",
                  "Client-managed secrets",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-ink-dim"
                  >
                    <Lock
                      size={11}
                      className="mt-1 shrink-0 text-good"
                      strokeWidth={2}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PlaneCard({
  title,
  subtitle,
  items,
  tone,
}: {
  title: string;
  subtitle: string;
  items: string[];
  tone: "brand" | "accent";
}) {
  const accent = tone === "brand" ? "text-brand" : "text-accent";
  return (
    <div className="card-elev rounded-xl p-5 flex flex-col gap-4">
      <div>
        <div
          className={`font-mono text-[10px] tracking-[0.22em] uppercase ${accent}`}
        >
          {subtitle}
        </div>
        <div className="mt-1.5 font-display text-[22px] tracking-tight text-ink">
          {title}
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((i) => (
          <li
            key={i}
            className="rounded-md border border-border bg-bg-elev/40 px-3 py-2 text-[12.5px] text-ink-dim"
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
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
          <Eyebrow number="P/08">Engagement</Eyebrow>
          <h2 className="mt-6 font-display text-[44px] sm:text-[60px] leading-[1.0] tracking-[-0.025em] text-ink">
            See the platform in your{" "}
            <span className="italic text-gradient-brand">own data context.</span>
          </h2>
          <p className="mt-7 max-w-xl text-[16px] leading-[1.6] text-ink-dim">
            A pilot starts with one decision domain and ships a governed Control
            Tower in 8–12 weeks. Talk to us about pricing and pilot terms.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
              Book a demo
            </Button>
            <Link
              href={ROUTES.verticals}
              className="font-mono text-[12px] tracking-[0.18em] uppercase text-ink-dim hover:text-ink inline-flex items-center gap-2"
            >
              Explore vertical templates <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
