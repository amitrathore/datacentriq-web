import type { Metadata } from "next";
import {
  ArrowUpRight,
  Compass,
  FileCheck2,
  GitMerge,
  Layers,
  Lock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/button";
import { Eyebrow } from "@/components/eyebrow";
import { Container, Section } from "@/components/section";
import { ROUTES } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About — Why we built DatacentrIQ",
  description:
    "DatacentrIQ exists because enterprises don't have a dashboard shortage. They have a decision-system shortage. Our philosophy, principles, and how we engage.",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Thesis />
      <Principles />
      <Approach />
      <Cta />
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
      className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 -top-32 h-[460px] radial-glow"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <Container className="relative">
        <Eyebrow number="A/01" tone="accent">
          About
        </Eyebrow>
        <h1 className="mt-7 max-w-4xl font-display text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-0.025em] text-ink">
          Most enterprises don&apos;t have a{" "}
          <span className="italic text-ink-dim">dashboard shortage.</span>
          <br />
          They have a{" "}
          <span className="italic text-gradient-brand">decision-system shortage.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-[17px] leading-[1.65] text-ink-dim">
          DatacentrIQ exists because the gap between insight and action is
          where enterprise value compounds — and that gap has gone
          un-engineered for too long.
        </p>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FOUNDING THESIS                                                     */
/* ------------------------------------------------------------------ */

function Thesis() {
  return (
    <Section
      pageLabel="Founding thesis"
      pageIndex="A/02"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="A/02">Founding thesis</Eyebrow>
            <h2 className="mt-6 font-display text-[36px] sm:text-[44px] leading-[1.05] tracking-[-0.02em] text-ink">
              The dashboards{" "}
              <span className="italic text-ink-dim">were never the bottleneck.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 max-w-2xl text-[15px] leading-[1.75] text-ink-dim">
            <p>
              Walk into almost any operational leader&apos;s office and
              you&apos;ll find three monitors, a half-built MIS pack, and an
              analyst on Slack. The data is mostly there. The dashboards exist.
              But every important question still bottlenecks on a human
              interpreting numbers, cross-referencing context, and writing the
              same explanation for the fourth time this quarter.
            </p>
            <p>
              The category we built into existed before AI agents made it
              fashionable. Operators need a natural operating layer that
              answers: <span className="text-ink">where should I look first,
              what changed today, which entity is affected, what&apos;s the
              likely cause, what decision is recommended, who needs to
              approve, what workflow should execute</span> — and{" "}
              <span className="text-ink">did the action actually work.</span>
            </p>
            <p>
              That layer doesn&apos;t live inside a BI tool. It also
              doesn&apos;t live inside a chatbot. It lives in a governed,
              ontology-aware, causally-reasoning, outcome-learning operating
              system built around named business objectives — Control Towers.
            </p>
            <blockquote className="mt-2 border-l-2 border-brand/70 pl-6 py-1">
              <p className="font-display text-[22px] leading-[1.35] tracking-tight text-ink">
                AI proposes. The system tests and traces. Humans approve. The
                platform learns from outcomes.
              </p>
              <p className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                Core principle · DatacentrIQ
              </p>
            </blockquote>
            <p>
              That sentence is load-bearing. It&apos;s why governance is a
              first-class product surface, not an afterthought. It&apos;s why
              every causal claim carries evidence, confidence, valid
              population, and valid range. It&apos;s why every decision is
              owned, executed, measured, and fed back as a learnable signal.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* PRINCIPLES                                                          */
/* ------------------------------------------------------------------ */

const PRINCIPLES = [
  {
    n: "01",
    icon: FileCheck2,
    title: "Governed artifacts beat clever agents",
    body: "The defensibility of an enterprise AI system is not the model. It's the approved ontology, metric lineage, causal claim registry, Control Tower specs, decision policies, and outcome feedback loops that compound over time.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "AI drafts. Humans approve.",
    body: "Every artifact passes through Draft → Tested → Reviewed → Approved → Published → Monitored → Versioned. Production never sees an unvetted LLM output. HITL is not a compliance feature; it's the product.",
  },
  {
    n: "03",
    icon: GitMerge,
    title: "Cause, not just correlation",
    body: "We don't ship academic causal toys. We ship causal claims bound to a population, a range, evidence, and confidence — used inside Control Towers to recommend interventions, not to generate explanations.",
  },
  {
    n: "04",
    icon: Compass,
    title: "Operate around named objectives",
    body: "Every Control Tower exists to move one number: collection rate, recovered revenue, ROAS, win-rate, retention. If we can't tie a tower to a measurable business outcome, we don't ship it.",
  },
  {
    n: "05",
    icon: Lock,
    title: "Intelligence to the data — not the data to intelligence",
    body: "For regulated clients, compute runs inside the client VPC through a secure data-plane agent. No raw data export by default. Read-only credentials. Query firewall. Aggregation thresholds. Audit logs.",
  },
  {
    n: "06",
    icon: Layers,
    title: "Land thin. Expand to an operating layer.",
    body: "Start with one decision domain in 8–12 weeks. Prove value. Add towers. Build the enterprise artifact registry. The strongest version of the product is one no team would dismantle.",
  },
];

function Principles() {
  return (
    <Section
      pageLabel="Principles"
      pageIndex="A/03"
      className="border-t border-border"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="A/03">Principles</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Six commitments{" "}
            <span className="italic text-ink-dim">we hold ourselves to.</span>
          </h2>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {PRINCIPLES.map((p) => {
            const Icon = p.icon;
            return (
              <li
                key={p.n}
                className="bg-bg-card p-7 sm:p-8 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon size={14} className="text-brand" strokeWidth={1.5} />
                    <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
                      Principle {p.n}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-[22px] leading-[1.2] tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-[1.65] text-ink-dim">
                  {p.body}
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
/* APPROACH                                                            */
/* ------------------------------------------------------------------ */

function Approach() {
  return (
    <Section
      pageLabel="Approach"
      pageIndex="A/04"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="A/04">How we engage</Eyebrow>
            <h2 className="mt-6 font-display text-[36px] sm:text-[44px] leading-[1.05] tracking-[-0.02em] text-ink">
              Partnership,{" "}
              <span className="italic text-ink-dim">not exploration.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              We don&apos;t do unpaid POCs. They produce demos that no team
              wants to operate. The best engagement is a paid 8–12 week pilot
              that ships a governed Control Tower bound to a measurable outcome
              — credit applied toward an annual subscription.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <ApproachCard
              title="Decision-first"
              body="We start with one decision domain — the hardest one you have. If we can't move a number, we'll tell you."
            />
            <ApproachCard
              title="Ontology-visible"
              body="Your enterprise ontology is not backend plumbing. It's a product surface — visible, editable, versioned, owned."
            />
            <ApproachCard
              title="Causal where it pays"
              body="Causal claims are bound to populations and ranges. Where the evidence is thin, the platform says so."
            />
            <ApproachCard
              title="HITL by default"
              body="Generated ontology, towers, DAGs, KPIs, and recommendations are reviewable, editable, versioned, and auditable."
            />
            <ApproachCard
              title="BI-friendly"
              body="We sit above Power BI, Tableau, Looker, Metabase, Snowflake, Databricks — we don't ask anyone to rip and replace."
            />
            <ApproachCard
              title="Regulated-ready"
              body="Cloud, customer VPC, or on-prem. Query-in-place. No raw data export. Full audit logging. Client-managed secrets."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ApproachCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-elev rounded-xl p-5 flex flex-col gap-2.5">
      <h3 className="font-display text-[20px] tracking-tight text-ink leading-tight">
        {title}
      </h3>
      <p className="text-[13px] leading-[1.6] text-ink-dim">{body}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA                                                                 */
/* ------------------------------------------------------------------ */

function Cta() {
  return (
    <Section className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-x-0 -top-20 h-[420px] radial-glow"
        aria-hidden
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow number="A/05">Talk to us</Eyebrow>
          <h2 className="mt-6 font-display text-[44px] sm:text-[60px] leading-[1.0] tracking-[-0.025em] text-ink">
            Bring your{" "}
            <span className="italic text-gradient-brand">hardest decision.</span>
          </h2>
          <p className="mt-7 max-w-xl text-[16px] leading-[1.6] text-ink-dim">
            We&apos;ll tell you whether DatacentrIQ is a fit — and if it
            isn&apos;t, we&apos;ll tell you who is.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
              Book a demo
            </Button>
            <Link
              href={ROUTES.platform}
              className="font-mono text-[12px] tracking-[0.18em] uppercase text-ink-dim hover:text-ink inline-flex items-center gap-2"
            >
              Read the platform <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
