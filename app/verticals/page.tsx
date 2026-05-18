import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/button";
import { Eyebrow } from "@/components/eyebrow";
import { Container, Section } from "@/components/section";
import { ROUTES } from "@/lib/utils";
import { VERTICAL_CONTENT } from "@/lib/verticals-data";

export const metadata: Metadata = {
  title: "Verticals — Five operating models",
  description:
    "DatacentrIQ ships with vertical templates: NBFC collections, retail revenue recovery, influencer growth, winery distributors, and sales productivity.",
};

export default function VerticalsIndexPage() {
  return (
    <>
      <Hero />
      <Grid />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <Section
      bleed
      className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 -top-32 h-[460px] radial-glow"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <Container className="relative">
        <Eyebrow number="V/00" tone="accent">
          Vertical solutions
        </Eyebrow>
        <h1 className="mt-7 max-w-4xl font-display text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.0] tracking-[-0.025em] text-ink">
          One platform.{" "}
          <span className="italic text-gradient-brand">
            Five operating models.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-[16.5px] leading-[1.65] text-ink-dim">
          Each vertical ships with a default ontology slice, KPI tree, signal
          recipes, causal questions, and decision policies — drawn from real
          engagements. Start with one tower. Expand into an enterprise operating
          layer.
        </p>
      </Container>
    </Section>
  );
}

function Grid() {
  return (
    <Section
      pageLabel="Verticals"
      pageIndex="V/01"
      className="border-t border-border bg-bg-elev/30 py-20 sm:py-24"
    >
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VERTICAL_CONTENT.map((v, i) => (
            <Link
              key={v.slug}
              href={`${ROUTES.verticals}/${v.slug}`}
              className="group card-elev rounded-xl p-6 flex flex-col gap-4 min-h-[300px] hover:border-border-strong transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-accent">
                  V/{(i + 1).toString().padStart(2, "0")}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-ink-mute group-hover:text-ink transition-colors"
                />
              </div>
              <h2 className="font-display text-[26px] leading-[1.1] tracking-tight text-ink">
                {v.name}
              </h2>
              <p className="text-[13.5px] leading-[1.6] text-ink-dim">
                {v.headline}
              </p>
              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                  {v.domain}
                </span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-dim">
                  {v.towers.length} towers
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Cta() {
  return (
    <Section className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow number="V/06">Don&apos;t see your operating model?</Eyebrow>
          <h2 className="mt-6 font-display text-[40px] sm:text-[56px] leading-[1.0] tracking-[-0.025em] text-ink">
            We build new towers in{" "}
            <span className="italic text-gradient-brand">8–12 weeks.</span>
          </h2>
          <p className="mt-7 max-w-xl text-[16px] leading-[1.6] text-ink-dim">
            Talk to us about an industry-specific Control Tower. The fastest
            path is a paid pilot — defined ontology slice, KPI tree, one
            decision domain — credited toward an annual subscription.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={ROUTES.demo} variant="primary" size="lg" arrow>
              Talk to us
            </Button>
            <Button href={ROUTES.platform} variant="secondary" size="lg">
              See the platform
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
