import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Check,
  Cloud,
  FileSearch,
  LockKeyhole,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";
import { AgentLoopMock } from "@/components/agent-loop-mock";
import { Button } from "@/components/button";
import { PlatformStory } from "@/components/platform-story";
import {
  VerticalCarousel,
  type VerticalCarouselItem,
} from "@/components/vertical-carousel";
import { ROUTES } from "@/lib/utils";
import { VERTICAL_CONTENT } from "@/lib/verticals-data";

const VERTICAL_ITEMS: VerticalCarouselItem[] = VERTICAL_CONTENT.map((vertical) => ({
  name: vertical.name,
  domain: vertical.domain,
  headline: vertical.headline,
  tagline: vertical.tagline,
  href: `${ROUTES.verticals}/${vertical.slug}`,
}));

export default function HomePage() {
  return (
    <>
      <Hero />
      <VerticalStrip />
      <section id="platform-story" className="light-section">
        <PlatformStory />
      </section>
      <AgentsCallout />
      <Verticals />
      <Compounding />
      <Outcomes />
      <Governance />
      <CallToAction />
    </>
  );
}

function Hero() {
  return (
    <section data-theme="dark" className="relative overflow-hidden bg-bg text-ink">
      <div className="dc-grid-dark absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute inset-y-0 right-0 w-3/4 bg-[radial-gradient(ellipse_at_70%_40%,rgba(47,111,178,0.17),transparent_67%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[calc(88svh-66px)] max-w-[1200px] items-center justify-center px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10">
        <div className="max-w-[960px]">
          <p className="dc-label inline-flex items-center gap-3 text-ink-mute">
            <span className="size-2 rounded-full bg-brand shadow-[0_0_0_6px_rgba(143,184,220,0.08)]" />
            Enterprise AI transformation · Decision intelligence
          </p>
          <h1 className="mt-8 text-balance text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[62px] lg:text-[76px]">
            Turn enterprise data into measurable business outcomes.
          </h1>
          <p className="mx-auto mt-7 max-w-[700px] text-[17px] leading-7 text-ink-dim sm:text-[20px] sm:leading-8">
            DatacentrIQ helps teams understand why business metrics change,
            identify the right actions, execute them across human and AI agents,
            and learn from every outcome.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href={ROUTES.demo} size="lg" arrow>
              Book a call
            </Button>
            <Link
              href="#platform-story"
              className="focus-ring inline-flex h-12 items-center gap-2 rounded-md border border-border-strong px-5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white/5"
            >
              Walk the platform <ArrowDown size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function VerticalStrip() {
  return (
    <section data-theme="dark" className="border-y border-border bg-bg text-ink">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 py-9 sm:px-8 lg:flex-row lg:px-10">
        <p className="dc-label shrink-0 text-ink-mute">Built for</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start">
          {VERTICAL_CONTENT.map((vertical) => (
            <Link
              key={vertical.slug}
              href={`${ROUTES.verticals}/${vertical.slug}`}
              className="focus-ring rounded text-[15px] font-semibold text-ink-dim transition-colors hover:text-ink sm:text-[18px]"
            >
              {vertical.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentsCallout() {
  return (
    <section data-theme="dark" className="dark-section overflow-hidden border-t border-border">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10 lg:py-28">
        <div>
          <p className="dc-label text-brand">Enterprise agents</p>
          <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-[48px]">
            Give every agent the context to make governed decisions.
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-7 text-ink-dim">
            Agents work from the same digital twin, policies and evidence as
            your teams. They investigate, recommend, route approvals, execute
            workflows and measure what happened next.
          </p>
          <Link
            href={ROUTES.agents}
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded font-mono text-[11px] uppercase tracking-[0.12em] text-brand hover:text-ink"
          >
            Explore enterprise agents <ArrowUpRight size={14} />
          </Link>
        </div>
        <div>
          <p className="mb-3 text-right font-mono text-[9px] uppercase tracking-[0.12em] text-ink-mute">
            Illustrative interface
          </p>
          <AgentLoopMock />
        </div>
      </div>
    </section>
  );
}

function Verticals() {
  return (
    <section data-theme="dark" className="dark-section border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="dc-label text-ink-mute">Vertical operating models</p>
          <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.07] tracking-[-0.04em] sm:text-[48px]">
            Built for how your industry actually runs.
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-ink-dim sm:text-[18px]">
            The digital twin speaks your entities and the control tower focuses
            on decisions your teams already make.
          </p>
        </div>
        <div className="mt-10">
          <VerticalCarousel items={VERTICAL_ITEMS} />
        </div>
      </div>
    </section>
  );
}

function Compounding() {
  return (
    <section className="light-section">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <p className="dc-label text-ink-mute">Why it compounds</p>
        <p className="mt-6 max-w-[1020px] text-balance text-[30px] font-medium leading-[1.3] tracking-[-0.03em] sm:text-[42px]">
          Every decision and every correction from your best people feeds back
          into the digital twin. The model of your business gets sharper with
          use — so <span className="text-brand">the advantage compounds</span>.
        </p>
      </div>
    </section>
  );
}

const OUTCOMES = [
  {
    title: "Faster cycles",
    body: "Move from signal to governed action without waiting for another analysis backlog.",
  },
  {
    title: "Less manual analysis",
    body: "Give teams causal context and reusable investigations instead of static report packs.",
  },
  {
    title: "Measurable impact",
    body: "Connect decisions to owners, execution and observed outcomes against a baseline.",
  },
  {
    title: "Auditable decisions",
    body: "Retain the evidence, policy checks, approvals and lineage behind every action.",
  },
] as const;

function Outcomes() {
  return (
    <section data-theme="dark" className="dark-section">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <p className="dc-label text-ink-mute">Business outcomes</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((outcome, index) => (
            <article key={outcome.title} className="bg-bg p-6 sm:p-7">
              <p className="font-mono text-[10px] text-brand">O—0{index + 1}</p>
              <h2 className="mt-7 text-[22px] font-semibold tracking-[-0.03em]">
                {outcome.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink-dim">{outcome.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const GOVERNANCE = [
  {
    icon: UserCheck,
    title: "Governance & control",
    body: "Role-based permissions, policy guardrails and human approval paths.",
    items: ["Scoped access", "Approval gates", "Policy controls"],
  },
  {
    icon: FileSearch,
    title: "Auditable & explainable",
    body: "Evidence, decision lineage and versioned context for every recommendation.",
    items: ["Decision logs", "Evidence trail", "Model versions"],
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    body: "Enterprise security patterns for sensitive, high-stakes operating data.",
    items: ["SSO & RBAC", "Encryption", "PII controls"],
  },
  {
    icon: Cloud,
    title: "Deploy your way",
    body: "Fit the platform to your data estate and operating constraints.",
    items: ["Private deployment", "API-first", "Cloud-aligned"],
  },
] as const;

const EXPECTATIONS = [
  { icon: Workflow, text: "A working session around one decision domain." },
  { icon: Bot, text: "A sketch of the twin, agents and governance behind it." },
  { icon: LockKeyhole, text: "A practical path to a controlled production pilot." },
] as const;

function Governance() {
  return (
    <section id="governance" className="light-section border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="dc-label text-ink-mute">Trust & governance</p>
          <h2 className="mt-5 text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[48px]">
            Enterprise-grade by default.
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-ink-dim sm:text-[18px]">
            High-stakes teams can only use AI on decisions they can control,
            explain and prove.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {GOVERNANCE.map((pillar, index) => (
            <article key={pillar.title} className="rounded-xl border border-border bg-white p-6">
              <div className="flex items-center justify-between">
                <pillar.icon size={19} className="text-brand" strokeWidth={1.6} />
                <span className="font-mono text-[9px] text-brand">G—0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.025em]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-dim">{pillar.body}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-ink-dim">
                    <Check size={12} className="text-brand" /> {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="paper-section border-t border-border">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-28">
        <div>
          <p className="dc-label text-ink-mute">Get started</p>
          <h2 className="mt-5 max-w-2xl text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[56px]">
            See your operations as a living model.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-7 text-ink-dim">
            Bring one decision domain. We’ll map the digital twin behind it and
            identify the first measurable operating win.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={ROUTES.demo} size="lg" arrow>
              Book a call
            </Button>
            <a
              href="mailto:hello@datacentriq.co"
              className="focus-ring rounded font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim hover:text-brand"
            >
              hello@datacentriq.co
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
          <p className="dc-label text-ink-mute">What to expect</p>
          {EXPECTATIONS.map((expectation, index) => (
            <div key={expectation.text} className="mt-5 flex gap-4 border-t border-border pt-5">
              <expectation.icon className="mt-0.5 shrink-0 text-brand" size={17} strokeWidth={1.6} />
              <div>
                <p className="font-mono text-[9px] text-brand">0{index + 1}</p>
                <p className="mt-1 text-sm leading-6 text-ink-dim">{expectation.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
