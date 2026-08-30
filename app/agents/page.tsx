import type { Metadata } from "next";
import {
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  GitMerge,
  History,
  Lock,
  PlayCircle,
  Radar,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

import { AgentLoopMock } from "@/components/agent-loop-mock";
import { Button } from "@/components/button";
import { Eyebrow } from "@/components/eyebrow";
import { Container, Section } from "@/components/section";
import { ROUTES } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enterprise Agents — DatacentrIQ",
  description:
    "Agents that monitor KPIs, investigate exceptions, recommend governed actions, and trigger execution workflows — all within an approved artifact stack. Not autonomous scripts. Contextual actors that ask before they act.",
};

export default function AgentsPage() {
  return (
    <>
      <Hero />
      <TheLoop />
      <AgentTypes />
      <GovernanceAnatomy />
      <WorkedExamples />
      <ComparisonTable />
      <Configuration />
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
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <Eyebrow number="AG/01" tone="accent">
              Enterprise Agents
            </Eyebrow>
            <h1 className="mt-7 font-display text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-0.025em] text-ink">
              Agents that{" "}
              <span className="italic text-gradient-brand">ask before</span>{" "}
              they act.
            </h1>
            <p className="mt-8 max-w-[580px] text-[16.5px] leading-[1.65] text-ink-dim">
              DatacentrIQ agents are not autonomous scripts. They are{" "}
              <span className="text-ink">contextual actors inside the governed artifact stack</span>{" "}
              — bound to approved signal recipes, decision policies, and causal
              claims. They monitor, investigate, draft recommendations, and
              pause for human approval before executing.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
                Book a demo
              </Button>
              <Button href={ROUTES.platform} variant="secondary" size="lg">
                Explore the platform
              </Button>
            </div>
          </div>

          <AgentLoopMock className="w-full" />
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* THE LOOP                                                            */
/* ------------------------------------------------------------------ */

const LOOP_STEPS = [
  {
    n: "01",
    name: "Monitor",
    desc: "Watches approved KPI signal recipes continuously against governed thresholds",
  },
  {
    n: "02",
    name: "Detect",
    desc: "Fires when a threshold or recipe condition triggers; logs the signal event with timestamp and entity scope",
  },
  {
    n: "03",
    name: "Investigate",
    desc: "Queries the ontology and MetricIQ layer, traverses causal claim registry, forms a root-cause hypothesis",
  },
  {
    n: "04",
    name: "Draft",
    desc: "Creates a decision draft citing which causal claims were used, expected impact, confidence, and policy constraints",
  },
  {
    n: "05",
    name: "Approve",
    desc: "Surfaces to the human HITL queue; the agent is paused until the appropriate role approves or rejects",
  },
  {
    n: "06",
    name: "Execute",
    desc: "Post-approval, triggers the governed execution workflow — tasks, owners, SLAs, escalation rules, integration hooks",
  },
  {
    n: "07",
    name: "Measure",
    desc: "Tracks completion and submits an outcome measurement request; variance feeds back into future agent calibration",
  },
] as const;

function TheLoop() {
  return (
    <Section
      pageLabel="The agent loop"
      pageIndex="AG/02"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="AG/02">The agent loop</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Seven steps.{" "}
            <span className="italic text-ink-dim">One closed loop.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            Every agent cycle follows the same governed sequence — from signal
            detection to outcome measurement. No step is skipped. No execution
            happens without approval.
          </p>
        </div>

        <ol className="mt-14 relative">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[34px] h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative">
            {LOOP_STEPS.map((step) => (
              <li
                key={step.name}
                className="relative card-elev rounded-lg p-4 flex flex-col gap-2"
              >
                <span className="font-mono text-[10px] tabular-nums tracking-[0.2em] uppercase text-accent">
                  {step.n}
                </span>
                <span className="font-display text-[18px] tracking-tight text-ink leading-none">
                  {step.name}
                </span>
                <span className="font-mono text-[10px] tracking-[0.13em] uppercase text-ink-mute leading-relaxed">
                  {step.desc}
                </span>
              </li>
            ))}
          </div>
        </ol>

        <p className="mt-12 max-w-2xl font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute">
          The agent loop is not configurable beyond the artifact boundary — it
          cannot skip the approval gate or bypass decision policy checks.
        </p>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* AGENT TYPES                                                         */
/* ------------------------------------------------------------------ */

const AGENT_TYPES = [
  {
    n: "T/01",
    name: "Monitoring Agent",
    icon: Radar,
    desc: "Continuously watches a set of KPI signal recipes against approved thresholds. Fires a detection event when conditions are met. Does not investigate or act — it watches.",
    chips: ["Signal recipes", "KPI thresholds", "Entity scope", "Cadence"],
  },
  {
    n: "T/02",
    name: "Investigation Agent",
    icon: GitMerge,
    desc: "Triggered by a detection event. Traverses the ontology and causal claim registry to form a root-cause hypothesis. Cites claims with evidence, confidence, valid population, and valid range.",
    chips: ["Causal claims", "Ontology traversal", "Driver analysis", "Evidence"],
  },
  {
    n: "T/03",
    name: "Recommendation Agent",
    icon: Target,
    desc: "Converts a causal hypothesis into a decision draft. Checks the applicable Decision Policy for permitted actions, required approvals, constraints, and rollback rules. Surfaces ranked recommendations with expected impact.",
    chips: ["Decision policy", "Impact estimate", "Confidence", "Constraints"],
  },
  {
    n: "T/04",
    name: "Execution Agent",
    icon: PlayCircle,
    desc: "Post-approval, coordinates the execution workflow — assigns tasks, tracks SLAs, routes escalations, fires integration hooks, and monitors completion. Submits the outcome measurement window on close.",
    chips: ["Workflow coordination", "SLA tracking", "Escalation", "Outcome"],
  },
] as const;

function AgentTypes() {
  return (
    <Section
      pageLabel="Agent types"
      pageIndex="AG/03"
      className="border-t border-border"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="AG/03">Four archetypes</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Not one agent.{" "}
            <span className="italic text-ink-dim">Four roles.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            Each archetype has a defined scope of authority and a clear
            handoff point. A monitoring agent cannot recommend. An execution
            agent cannot fire without an approved decision.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {AGENT_TYPES.map((t) => {
            const Icon = t.icon;
            return (
              <article
                key={t.name}
                className="bg-bg-card p-6 sm:p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <Icon size={15} className="text-brand" strokeWidth={1.5} />
                  <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                    {t.n}
                  </span>
                </div>
                <h3 className="font-display text-[24px] leading-[1.1] tracking-tight text-ink">
                  {t.name}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-ink-dim">
                  {t.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {t.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-mute"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* GOVERNANCE ANATOMY                                                  */
/* ------------------------------------------------------------------ */

const GOVERNANCE_GATES = [
  {
    n: "G/01",
    icon: FileCheck2,
    name: "Policy check",
    desc: "Before drafting a recommendation, the agent must match an approved Decision Policy — defining permitted actions, required approvers, constraints, and rollback triggers. No policy match, no draft.",
  },
  {
    n: "G/02",
    icon: GitMerge,
    name: "Evidence citation",
    desc: "Every recommendation must cite which causal claims it relied on, with their confidence score, valid population, valid range, and evidence source. Claims without a registry entry cannot be cited.",
  },
  {
    n: "G/03",
    icon: CheckCircle2,
    name: "Approval gate",
    desc: "No execution without a human approver with the correct RBAC role. The agent surfaces the recommendation, expected impact, confidence, and rollback conditions. The agent is paused until the gate is resolved.",
  },
  {
    n: "G/04",
    icon: History,
    name: "Outcome measurement",
    desc: "After execution, the agent submits a measurement design comparing expected vs actual impact against the defined window. Variance is logged and feeds back into future agent calibration and signal threshold tuning.",
  },
];

function GovernanceAnatomy() {
  return (
    <Section
      pageLabel="Governance anatomy"
      pageIndex="AG/04"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="AG/04">Governance anatomy</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              Agents operate{" "}
              <span className="italic text-ink-dim">inside guardrails.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              Four governance checkpoints sit inside every agent loop. They
              cannot be bypassed. Each checkpoint produces a logged, traceable
              artifact that carries provenance, ownership, and version.
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
            <div className="mt-8 flex flex-wrap gap-2">
              {["Audit trail", "RBAC", "Prompt logs", "Version-pinned artifacts"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-mute"
                >
                  <ShieldCheck size={10} strokeWidth={1.75} className="text-brand" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {GOVERNANCE_GATES.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.name}
                  className="card-elev rounded-xl p-5 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Icon size={14} className="text-brand" strokeWidth={1.5} />
                      <span className="font-display text-[18px] tracking-tight text-ink">
                        {g.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
                      {g.n}
                    </span>
                  </div>
                  <p className="text-[13px] leading-[1.55] text-ink-dim">
                    {g.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* WORKED EXAMPLES                                                     */
/* ------------------------------------------------------------------ */

const EXAMPLES = [
  {
    vertical: "NBFC / Collections",
    name: "Collections Recovery Agent",
    signal: "Roll-forward rate +0.4 pp in North Cluster N-3",
    investigation: "Field visit frequency → recovery rate (88% conf, DPD 30–60). 9 branches affected. Visit completion gap identified.",
    recommendation: "Reassign 41 high-risk accounts to top-quartile agents",
    gate: "Branch Operations Manager · BranchOps-Reassign-v2 · SLA 4h",
    outcome: "14-day window · Expected $85K recovery · Win-rate vs target",
  },
  {
    vertical: "Enterprise Sales",
    name: "Sales Coaching Agent",
    signal: "Bottom-quartile rep conversion drops below 0.8 deals/week for 3 consecutive weeks",
    investigation: "Lead quality score, call volume, manager coaching interactions. 'Poor lead quality' identified as primary driver (82% conf, tenure < 12 months).",
    recommendation: "Reassign 12 high-probability leads from Q4 pool to reps with < 60% quota attainment",
    gate: "Sales Manager · LeadReassign-CoachingPolicy-v1 · SLA 24h",
    outcome: "30-day window · Expected win-rate +2.1 pp · CRM assignment rules updated",
  },
  {
    vertical: "Retail & Commerce",
    name: "Revenue Recovery Agent",
    signal: "Inventory cover drops below 3 days for 5 fast-moving SKUs in North Region",
    investigation: "Supplier fill-rate history, demand forecast, causal claim: stockout → revenue loss (91% conf, seasonal-adjusted). $32K at risk.",
    recommendation: "Escalate supplier + accelerate replenishment for SKUs X, Y, Z — North DC priority",
    gate: "Procurement Owner · SupplierEscalation-v3 · SLA 6h",
    outcome: "7-day window · Expected $32K revenue recovery · Fill-rate variance tracked",
  },
] as const;

function WorkedExamples() {
  return (
    <Section
      pageLabel="Worked examples"
      pageIndex="AG/05"
      className="border-t border-border"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="AG/05">Illustrative worked examples</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Agents in the field.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            Three illustrative agent cycles — from signal detection to outcome
            measurement — across NBFC, Sales, and Retail.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6">
          {EXAMPLES.map((ex, i) => (
            <article key={ex.name} className="card-elev rounded-xl overflow-hidden">
              <div className="px-6 sm:px-8 py-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <Workflow size={14} className="text-brand" strokeWidth={1.5} />
                  <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                    {ex.vertical} · Example {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[26px] sm:text-[30px] leading-[1.1] tracking-tight text-ink">
                  {ex.name}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5">
                <ExampleColumn icon={Radar} title="Signal" accent={false}>
                  {ex.signal}
                </ExampleColumn>
                <ExampleColumn icon={GitMerge} title="Investigation" accent={false}>
                  {ex.investigation}
                </ExampleColumn>
                <ExampleColumn icon={Target} title="Recommendation" accent>
                  {ex.recommendation}
                </ExampleColumn>
                <ExampleColumn icon={Lock} title="Approval gate" accent={false}>
                  {ex.gate}
                </ExampleColumn>
                <ExampleColumn icon={History} title="Outcome window" accent={false}>
                  {ex.outcome}
                </ExampleColumn>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ExampleColumn({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: typeof Radar;
  title: string;
  accent: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b md:border-b-0 md:border-r last:border-r-0 border-border p-5 sm:p-6 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Icon
          size={12}
          className={accent ? "text-accent" : "text-brand"}
          strokeWidth={1.75}
        />
        <span
          className={`font-mono text-[10px] tracking-[0.22em] uppercase ${
            accent ? "text-accent" : "text-ink-mute"
          }`}
        >
          {title}
        </span>
      </div>
      <p className="text-[12.5px] leading-[1.55] text-ink-dim">{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* COMPARISON TABLE                                                    */
/* ------------------------------------------------------------------ */

const COMPARISON_ROWS = [
  ["Fire-and-forget alerts", "Full monitor → investigate → approve → execute cycle"],
  ["No business context", "Ontology-grounded context — entities, hierarchies, relationships"],
  ["No causal reasoning", "Cites approved causal claims with evidence and confidence bounds"],
  ["No human approval", "HITL approval gate — role-based, policy-defined, audited"],
  ["No workflow integration", "Triggers governed execution workflows with SLAs and escalation"],
  ["No outcome tracking", "Variance against expected impact feeds back into calibration"],
  ["Configured in code", "Configured via Signal Recipe and Decision Policy artifacts"],
  ["Black box", "Every step logged — prompt, response, claim cited, approval chain"],
] as const;

function ComparisonTable() {
  return (
    <Section
      pageLabel="vs. alert tools"
      pageIndex="AG/06"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="AG/06">Alert tools vs. agents</Eyebrow>
            <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
              Not a smarter{" "}
              <span className="italic text-ink-dim">alert system.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              Alert tools fire and stop. DatacentrIQ agents investigate,
              reason, recommend, obtain approval, execute, and measure — bound
              to the governed artifact stack throughout.
            </p>
          </div>

          <div className="card-elev rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 px-6 py-4 border-b border-border bg-bg-elev/60">
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                Alert tools / rule engines
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-accent">
                DatacentrIQ agents
              </div>
            </div>
            <div className="divide-y divide-border">
              {COMPARISON_ROWS.map(([left, right]) => (
                <div
                  key={left}
                  className="grid grid-cols-2 px-6 py-4 items-start"
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
/* CONFIGURATION                                                       */
/* ------------------------------------------------------------------ */

const SETUP_STEPS = [
  {
    n: "01",
    title: "Define the Signal Recipe",
    body: "Specify which KPI to watch, the threshold logic, the entity scope (branch, region, product), and the monitoring cadence. The recipe is an approved artifact — versioned, tested, and owned.",
  },
  {
    n: "02",
    title: "Define the Decision Policy",
    body: "Specify which actions the agent may recommend, who must approve them, what constraints apply (budget caps, entity limits, blackout periods), and what triggers a rollback. The policy is reviewed and approved before publish.",
  },
  {
    n: "03",
    title: "Publish the agent",
    body: "Select which Control Tower the agent monitors, which signal recipe activates it, and which execution workflow it may invoke post-approval. The agent is pinned to the artifact versions active at publish time.",
  },
] as const;

function Configuration() {
  return (
    <Section
      pageLabel="Configuration"
      pageIndex="AG/07"
      className="border-t border-border"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="AG/07">Configuration</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Three steps to{" "}
            <span className="italic text-ink-dim">deploy an agent.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-ink-dim">
            No code. No model prompts written by hand. The agent is assembled
            from approved artifacts — signal recipe, decision policy, and
            execution workflow — already in the registry.
          </p>
        </div>

        <ol className="mt-14 grid sm:grid-cols-3 gap-4">
          {SETUP_STEPS.map((s) => (
            <li
              key={s.n}
              className="card-elev rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="font-mono text-[10px] tabular-nums tracking-[0.22em] uppercase text-accent">
                Step {s.n}
              </div>
              <h3 className="font-display text-[22px] tracking-tight text-ink leading-tight">
                {s.title}
              </h3>
              <p className="text-[13.5px] leading-[1.55] text-ink-dim">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute">
          Agents are version-pinned to artifacts at publish time — a signal
          recipe update or policy revision creates a new version, not a silent
          change to running agents.
        </p>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FINAL CTA                                                           */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <Section
      pageLabel="Get started"
      pageIndex="AG/08"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="AG/08" tone="accent">
            Get started
          </Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[52px] leading-[1.05] tracking-[-0.02em] text-ink">
            Agents that{" "}
            <span className="italic text-gradient-brand">compound</span> with
            your artifact registry.
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-[1.65] text-ink-dim">
            The longer the ontology, metric lineage, and causal claim registry
            mature, the more precise the agents become. Start with one decision
            domain. The agents get sharper with every approved artifact.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
              Book a demo
            </Button>
            <Button href={ROUTES.platform} variant="secondary" size="lg">
              Platform overview
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
