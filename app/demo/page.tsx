import type { Metadata } from "next";
import {
  Boxes,
  Building2,
  CheckCircle2,
  Crown,
  Layers,
  Lock,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Eyebrow } from "@/components/eyebrow";
import { Container, Section } from "@/components/section";
import { DemoForm } from "./form";

export const metadata: Metadata = {
  title: "Book a demo · Talk to us about a pilot",
  description:
    "See DatacentrIQ on your own data context. Start with one Control Tower in 8–12 weeks. Talk to us about a paid pilot and packaging.",
};

export default function DemoPage() {
  return (
    <>
      <Hero />
      <SkuLadder />
      <Pilot />
      <Faq />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO + FORM                                                         */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <Section
      bleed
      className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 -top-32 h-[520px] radial-glow"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-start">
          <div className="max-w-2xl">
            <Eyebrow number="D/01" tone="accent">
              Book a demo
            </Eyebrow>
            <h1 className="mt-7 font-display text-[44px] sm:text-[60px] lg:text-[68px] leading-[1.0] tracking-[-0.025em] text-ink">
              See DatacentrIQ on{" "}
              <span className="italic text-gradient-brand">
                your own data context.
              </span>
            </h1>
            <p className="mt-8 max-w-[560px] text-[16.5px] leading-[1.65] text-ink-dim">
              A demo runs against a synthetic version of your operating model
              and a representative Control Tower. If you decide to proceed, an
              8–12 week paid pilot ships a governed tower on your real data.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl">
              {EXPECT.map((e) => (
                <div
                  key={e.label}
                  className="rounded-lg border border-border bg-bg-card px-4 py-3.5"
                >
                  <div className="flex items-center gap-2">
                    <e.icon size={12} className="text-brand" strokeWidth={1.75} />
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                      {e.label}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-[1.55] text-ink-dim">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-ink-mute">
              <span className="inline-flex items-center gap-2">
                <Lock size={11} className="text-good" /> No raw data export
                required for a demo
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={11} className="text-good" /> Metadata-only
                onboarding available
              </span>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <DemoForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}

const EXPECT = [
  {
    icon: Workflow,
    label: "30-minute demo",
    body: "Live walkthrough of a Control Tower runtime, Co-Pilot, decisions, and the artifact lifecycle.",
  },
  {
    icon: Boxes,
    label: "Use-case fit",
    body: "We review your top decision domain (collections, revenue, growth, productivity) and recommend a starting tower.",
  },
  {
    icon: Layers,
    label: "Data fit",
    body: "We discuss your warehouse/lakehouse, PII constraints, and the right data-access mode for production.",
  },
  {
    icon: Building2,
    label: "Pilot path",
    body: "If there's a match, we scope an 8–12 week paid pilot creditable toward an annual subscription.",
  },
];

/* ------------------------------------------------------------------ */
/* SKU LADDER (pricing hidden behind demo)                             */
/* ------------------------------------------------------------------ */

const SKUS = [
  {
    name: "Starter",
    blurb: "AI self-serve analytics without dashboard backlog.",
    buyer: "Head of Data · RevOps · business ops",
    includes: [
      "3–5 connectors",
      "Semantic layer + NLQ",
      "Generated dashboards",
      "Basic anomaly detection",
      "Scheduled summaries",
    ],
    icon: Layers,
  },
  {
    name: "Control Tower",
    blurb: "One business-critical command center for decisions.",
    buyer: "COO · business head · transformation lead",
    includes: [
      "One published tower",
      "Ontology slice + KPI tree",
      "Operational dashboard",
      "RCA + causal driver view",
      "Decision cards + alerts",
      "Outcome tracking",
    ],
    icon: Workflow,
    featured: true,
  },
  {
    name: "DecisionOps",
    blurb: "Governed decisions and HITL workflows.",
    buyer: "COO · CDAO · risk/ops head",
    includes: [
      "Workflow builder + approvals",
      "Decision logs + business rules",
      "Simulations + scenario design",
      "Causal DAG management",
      "ROI tracking + auditability",
      "Model monitoring",
    ],
    icon: ShieldCheck,
  },
  {
    name: "Enterprise",
    blurb: "Multi-tower enterprise decision layer.",
    buyer: "CIO · CDAO · CEO office",
    includes: [
      "Enterprise ontology",
      "Multiple towers",
      "RBAC / RLS / CLS",
      "SSO + SCIM",
      "VPC / on-prem · BYO LLM",
      "Audit logs + APIs",
      "Dedicated success",
    ],
    icon: Crown,
  },
];

function SkuLadder() {
  return (
    <Section
      pageLabel="Packaging"
      pageIndex="D/02"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="D/02">Packaging</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Land with one tower.{" "}
            <span className="italic text-ink-dim">Expand to an operating layer.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            Four SKUs across the decision lifecycle. Pricing depends on
            data volume, deployment mode, and tower count — we&apos;ll share it
            during the demo.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SKUS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.name}
                className={`relative card-elev rounded-xl p-6 flex flex-col gap-5 min-h-[420px] ${
                  s.featured ? "border-brand/50 ring-1 ring-brand/20" : ""
                }`}
              >
                {s.featured && (
                  <span className="absolute -top-2 left-6 rounded-full bg-brand-deep px-2.5 py-0.5 font-mono text-[9.5px] tracking-[0.22em] uppercase text-ink">
                    Most common
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon size={14} className="text-brand" strokeWidth={1.5} />
                    <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                      Package
                    </span>
                  </div>
                  <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.18em] uppercase text-ink-mute">
                    Talk to us
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[28px] tracking-tight text-ink leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-ink-dim">
                    {s.blurb}
                  </p>
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                  Buyer · {s.buyer}
                </div>
                <ul className="mt-auto flex flex-col gap-2">
                  {s.includes.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[12.5px] leading-[1.5] text-ink-dim"
                    >
                      <CheckCircle2
                        size={11}
                        className="mt-1 text-brand shrink-0"
                        strokeWidth={2}
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute">
          Pricing architecture · Platform fee + Control Tower fee + AI/agent
          credits + enterprise add-ons.
        </p>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* PILOT PROGRAM                                                       */
/* ------------------------------------------------------------------ */

const PHASES = [
  {
    n: "01",
    title: "Discovery",
    body: "Identify the decision domain, key questions, and stakeholders. Use-case blueprint.",
  },
  {
    n: "02",
    title: "Data onboarding",
    body: "Connect priority sources. Establish a governed foundation. Metadata-first if needed.",
  },
  {
    n: "03",
    title: "Metric setup",
    body: "Define metrics, formulas, ownership, lineage. MetricIQ catalogue published.",
  },
  {
    n: "04",
    title: "Intelligence layer",
    body: "Enable questions and movement explanation. Business adoption begins.",
  },
  {
    n: "05",
    title: "Causal & scenario",
    body: "Generate candidate DAG, validate claims, configure scenarios. Trust scoring.",
  },
  {
    n: "06",
    title: "Execution & outcomes",
    body: "Wire workflows, assign owners, track decisions. Measure expected vs actual.",
  },
  {
    n: "07",
    title: "Expansion",
    body: "Add towers. Expand users. Build the enterprise artifact registry.",
  },
];

function Pilot() {
  return (
    <Section
      id="pilot"
      pageLabel="Pilot program"
      pageIndex="D/03"
      className="border-t border-border"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="D/03">Pilot program</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              One decision domain.{" "}
              <span className="italic text-ink-dim">8–12 weeks.</span>{" "}
              <span className="italic text-gradient-brand">
                Measurable outcome.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              A paid pilot ships a governed Control Tower bound to a specific
              business outcome — recovered revenue, improved collection rate,
              spend reallocation, productivity lift. Pilot fee is creditable
              toward an annual subscription.
            </p>
            <div className="mt-8 rounded-lg border border-border bg-bg-card p-5">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                Recommended first towers
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12.5px] text-ink-dim">
                <li>· NBFC Collections</li>
                <li>· Retail Revenue Recovery</li>
                <li>· Influencer Growth</li>
                <li>· Sales Productivity</li>
                <li className="col-span-2">· Customer 360</li>
              </ul>
            </div>
          </div>

          <ol className="grid sm:grid-cols-2 gap-3">
            {PHASES.map((p) => (
              <li
                key={p.n}
                className="card-elev rounded-xl p-5 flex flex-col gap-2.5"
              >
                <div className="font-mono text-[10px] tabular-nums tracking-[0.22em] uppercase text-accent">
                  Phase {p.n}
                </div>
                <h3 className="font-display text-[20px] tracking-tight text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-ink-dim">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQ = [
  {
    q: "We already have dashboards. Why DatacentrIQ?",
    a: "Dashboards show what happened. DatacentrIQ helps teams decide what to do next. It connects metrics to causes, decisions, execution, and outcomes — above your existing BI stack, not a replacement for it.",
  },
  {
    q: "We can't share raw data.",
    a: "You don't have to. We can start with metadata or aggregated data, and production runs query-in-place inside your environment through a secure data-plane agent. No raw data export by default.",
  },
  {
    q: "Aren't AI-generated causal DAGs unreliable?",
    a: "We agree. The Causal DAG Factory does not treat LLM output as truth. Candidate claims are constrained by ontology, validated structurally, tested against data, challenged by a critic process, reviewed by humans, and published only with explicit confidence and validity boundaries.",
  },
  {
    q: "How is this different from BI + ChatGPT?",
    a: "BI + ChatGPT can explain dashboards. DatacentrIQ creates governed operating artifacts — ontology, KPIs, control towers, causal claims, decision policies, execution workflows, and outcome learning. It becomes part of how the enterprise operates, not just how it asks questions.",
  },
  {
    q: "Everyone has AI agents now. What's the moat?",
    a: "Agents are not the moat. Governed enterprise artifacts are. Defensibility comes from approved ontology, metric lineage, causal claim registry, Control Tower specs, decision policies, execution workflows, and outcome feedback loops that compound over time.",
  },
  {
    q: "What does pricing look like?",
    a: "Platform fee + Control Tower fee + AI/agent credits + enterprise add-ons. Exact numbers depend on data volume, tower count, deployment mode, and term — we'll share them during the demo.",
  },
];

function Faq() {
  return (
    <Section
      pageLabel="FAQ"
      pageIndex="D/04"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="D/04">Common questions</Eyebrow>
            <h2 className="mt-6 font-display text-[36px] sm:text-[44px] leading-[1.05] tracking-[-0.02em] text-ink">
              Asked before{" "}
              <span className="italic text-ink-dim">the demo.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              If you have an objection that&apos;s not here, bring it to the call —
              we have a written answer for almost every concern enterprise
              buyers raise.
            </p>
          </div>

          <ol className="flex flex-col gap-3">
            {FAQ.map((f, i) => (
              <li
                key={f.q}
                className="card-elev rounded-xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[10px] tabular-nums tracking-[0.22em] uppercase text-ink-mute mt-1.5">
                    Q{(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[20px] leading-[1.25] tracking-tight text-ink">
                    {f.q}
                  </h3>
                </div>
                <p className="ml-9 text-[13.5px] leading-[1.65] text-ink-dim">
                  {f.a}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute">
            Still reading?
          </p>
          <p className="mt-3 font-display text-[28px] leading-[1.25] tracking-tight text-ink">
            Talk to us. Bring your{" "}
            <span className="italic text-ink-dim">hardest decision domain.</span>{" "}
            We&apos;ll tell you whether DatacentrIQ is a fit — and if not, who
            is.
          </p>
          <p className="mt-6 font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
            Honesty is part of how we package.
          </p>
        </div>
      </Container>
    </Section>
  );
}

