import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle2,
  GitMerge,
  ListChecks,
  Radar,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/button";
import { Eyebrow } from "@/components/eyebrow";
import { Container, Section } from "@/components/section";
import { ROUTES } from "@/lib/utils";
import {
  type Tower,
  type VerticalContent,
  VERTICAL_CONTENT,
  VERTICAL_SLUGS,
  getVertical,
} from "@/lib/verticals-data";

export function generateStaticParams() {
  return VERTICAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVertical(slug);
  if (!v) return { title: "Vertical" };
  return {
    title: `${v.name} — Vertical`,
    description: v.tagline,
  };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVertical(slug);
  if (!v) notFound();

  const idx = VERTICAL_CONTENT.findIndex((x) => x.slug === slug);
  const next = VERTICAL_CONTENT[(idx + 1) % VERTICAL_CONTENT.length];

  return (
    <>
      <Hero v={v} />
      <Struggles v={v} />
      <Towers towers={v.towers} />
      <Entities entities={v.entities} />
      <Pitch v={v} />
      <NextVertical next={next} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function Hero({ v }: { v: VerticalContent }) {
  return (
    <Section
      bleed
      className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 -top-40 h-[520px] radial-glow"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />

      <Container className="relative">
        <Link
          href={ROUTES.verticals}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute hover:text-ink"
        >
          ← All verticals
        </Link>

        <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-end">
          <div className="max-w-2xl">
            <Eyebrow number={v.domain.split(" · ")[0]} tone="accent">
              {v.domain}
            </Eyebrow>
            <h1 className="mt-7 font-display text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-[-0.025em] text-ink">
              {v.headline.split(/[.?!]/)[0]}
              <span className="text-ink-dim">.</span>
            </h1>
            <p className="mt-8 max-w-[560px] text-[16px] leading-[1.65] text-ink-dim">
              {v.hero}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
                Book a demo
              </Button>
              <Button href={ROUTES.platform} variant="secondary" size="lg">
                See the platform
              </Button>
            </div>
          </div>

          <div className="card-elev rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                Illustrative outcome
              </span>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-brand">
                <span className="size-1.5 rounded-full bg-brand" /> Demo data
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {v.outcome.map((o) => (
                <div
                  key={o.label}
                  className="rounded-lg border border-border bg-bg-elev/40 px-3.5 py-3"
                >
                  <div className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-ink-mute">
                    {o.label}
                  </div>
                  <div
                    className={`mt-1.5 font-display text-[20px] leading-none tracking-tight ${
                      o.tone === "good" ? "text-good" : "text-ink"
                    }`}
                  >
                    {o.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-border bg-bg-elev/40 p-4">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-accent">
                Vertical templates
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {v.towers.slice(0, 4).map((t) => (
                  <li
                    key={t.name}
                    className="flex items-center gap-2 text-[12.5px] text-ink-dim"
                  >
                    <span className="size-1 rounded-full bg-brand" />
                    {t.name}
                  </li>
                ))}
                {v.towers.length > 4 && (
                  <li className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-mute">
                    +{v.towers.length - 4} more below
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* WHY THIS VERTICAL FITS                                              */
/* ------------------------------------------------------------------ */

function Struggles({ v }: { v: VerticalContent }) {
  return (
    <Section
      pageLabel="Why this vertical"
      pageIndex="V·01"
      className="border-t border-border"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="01">Why this vertical fits</Eyebrow>
            <h2 className="mt-6 font-display text-[36px] sm:text-[44px] leading-[1.05] tracking-[-0.02em] text-ink">
              The decisions{" "}
              <span className="italic text-ink-dim">are causal,</span>
              <br />
              not just{" "}
              <span className="italic text-ink-dim">correlative.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              {v.fitsBecause}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {v.struggles.map((s) => (
              <div
                key={s}
                className="rounded-lg border border-border bg-bg-card px-4 py-3 flex items-start gap-3"
              >
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-ink-mute/60" />
                <span className="text-[13.5px] leading-[1.55] text-ink-dim">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTROL TOWERS                                                      */
/* ------------------------------------------------------------------ */

function Towers({ towers }: { towers: Tower[] }) {
  return (
    <Section
      pageLabel="Possible towers"
      pageIndex="V·02"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow number="02">Possible Control Towers</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[48px] leading-[1.05] tracking-[-0.02em] text-ink">
            Each tower is a{" "}
            <span className="italic text-ink-dim">governed operating lens.</span>
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          {towers.map((t, i) => (
            <TowerCard key={t.name} t={t} index={i + 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function TowerCard({ t, index }: { t: Tower; index: number }) {
  const hasContent = t.kpis || t.signals || t.decisions || t.causal || t.scenarios;
  return (
    <article className="card-elev rounded-xl overflow-hidden">
      <div className="px-6 sm:px-8 py-6 border-b border-border flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <Workflow size={14} className="text-brand" strokeWidth={1.5} />
            <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
              Tower {index.toString().padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-3 font-display text-[26px] sm:text-[30px] leading-[1.1] tracking-tight text-ink">
            {t.name}
          </h3>
          <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-dim">
            {t.purpose}
          </p>
        </div>
      </div>

      {hasContent && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {t.kpis && (
            <TowerColumn icon={ListChecks} title="KPIs" items={t.kpis} />
          )}
          {t.signals && (
            <TowerColumn icon={Radar} title="Signals" items={t.signals} />
          )}
          {t.decisions && (
            <TowerColumn
              icon={CheckCircle2}
              title="Decisions"
              items={t.decisions}
              accent
            />
          )}
          {t.causal && (
            <TowerColumn icon={GitMerge} title="Causal" items={t.causal} />
          )}
          {t.scenarios && (
            <TowerColumn icon={Sparkles} title="Scenarios" items={t.scenarios} />
          )}
        </div>
      )}
    </article>
  );
}

function TowerColumn({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: typeof ListChecks;
  title: string;
  items: string[];
  accent?: boolean;
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
      <ul className="flex flex-col gap-1.5">
        {items.map((it) => (
          <li
            key={it}
            className="text-[12.5px] leading-[1.55] text-ink-dim flex items-start gap-2"
          >
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-ink-mute/50" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ENTITIES                                                            */
/* ------------------------------------------------------------------ */

function Entities({ entities }: { entities: string[] }) {
  return (
    <Section
      pageLabel="Ontology slice"
      pageIndex="V·03"
      className="border-t border-border"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <Eyebrow number="03">Ontology slice</Eyebrow>
            <h2 className="mt-6 font-display text-[36px] sm:text-[44px] leading-[1.05] tracking-[-0.02em] text-ink">
              The business{" "}
              <span className="italic text-ink-dim">thinks in entities,</span>
              <br />
              not tables.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.65] text-ink-dim">
              Every Control Tower runs over a named slice of the enterprise
              ontology. Approved. Versioned. Owner-assigned.
            </p>
          </div>

          <div className="card-elev rounded-xl p-6 sm:p-8">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute mb-5">
              Entities · Vertical default
            </div>
            <div className="flex flex-wrap gap-2">
              {entities.map((e) => (
                <span
                  key={e}
                  className="rounded-md border border-border bg-bg-elev/40 px-3 py-1.5 text-[12.5px] text-ink"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* PITCH                                                               */
/* ------------------------------------------------------------------ */

function Pitch({ v }: { v: VerticalContent }) {
  return (
    <Section
      pageLabel="In one sentence"
      pageIndex="V·04"
      className="border-t border-border bg-bg-elev/30"
    >
      <Container>
        <div className="max-w-3xl">
          <Eyebrow number="04">In one sentence</Eyebrow>
          <p className="mt-8 font-display text-[28px] sm:text-[36px] leading-[1.25] tracking-[-0.015em] text-ink">
            &ldquo;
            {v.pitch}
            &rdquo;
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
              Book a demo
            </Button>
            <Button href={ROUTES.platform} variant="secondary" size="lg">
              Read the platform
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* NEXT VERTICAL                                                       */
/* ------------------------------------------------------------------ */

function NextVertical({
  next,
}: {
  next: (typeof VERTICAL_CONTENT)[number];
}) {
  return (
    <Section className="border-t border-border">
      <Container>
        <Link
          href={`${ROUTES.verticals}/${next.slug}`}
          className="group card-elev rounded-xl px-7 py-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 hover:border-border-strong transition-colors"
        >
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute">
              Next vertical
            </div>
            <h3 className="mt-3 font-display text-[28px] sm:text-[40px] leading-[1.05] tracking-tight text-ink">
              {next.name}
            </h3>
            <p className="mt-2 max-w-md text-[13.5px] leading-[1.55] text-ink-dim">
              {next.headline}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ink-dim group-hover:text-ink">
            Continue <ArrowUpRight size={14} />
          </span>
        </Link>
      </Container>
    </Section>
  );
}
