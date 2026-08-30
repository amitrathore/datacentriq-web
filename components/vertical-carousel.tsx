"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type VerticalCarouselItem = {
  name: string;
  domain: string;
  headline: string;
  tagline: string;
  href: string;
};

export function VerticalCarousel({ items }: { items: readonly VerticalCarouselItem[] }) {
  const pages = Array.from({ length: Math.ceil(items.length / 2) }, (_, index) =>
    items.slice(index * 2, index * 2 + 2)
  );
  const [page, setPage] = useState(0);

  const move = (direction: -1 | 1) => {
    setPage((current) => (current + direction + pages.length) % pages.length);
  };

  return (
    <div>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
        {pages[page].map((item, index) => (
          <article key={item.href} className="bg-bg p-6 sm:p-8 lg:min-h-[330px]">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand">
              {String(page * 2 + index + 1).padStart(2, "0")} / Vertical
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute">
              {item.domain}
            </p>
            <h3 className="mt-3 text-[26px] font-semibold leading-[1.08] tracking-[-0.03em]">
              {item.name}
            </h3>
            <p className="mt-4 text-[15px] font-medium leading-6 text-ink">
              {item.headline}
            </p>
            <p className="mt-3 text-sm leading-6 text-ink-dim">{item.tagline}</p>
            <Link
              href={item.href}
              className="focus-ring mt-7 inline-flex items-center gap-2 rounded font-mono text-[10px] uppercase tracking-[0.12em] text-brand hover:text-ink"
            >
              Explore vertical <ArrowUpRight size={13} />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2" aria-label="Carousel pages">
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show verticals page ${index + 1}`}
              aria-current={page === index ? "true" : undefined}
              onClick={() => setPage(index)}
              className={cn(
                "focus-ring h-2 rounded-full transition-[width,background-color]",
                page === index ? "w-5 bg-brand" : "w-2 bg-ink/20"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label="Previous verticals" className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-border-strong text-ink hover:border-brand hover:text-brand">
            <ArrowLeft size={16} />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next verticals" className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-border-strong text-ink hover:border-brand hover:text-brand">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
