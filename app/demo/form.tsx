"use client";

import Script from "next/script";
import { ArrowUpRight } from "lucide-react";

const TALLY_FORM_ID = "GxANOz";
const TALLY_FORM_URL = `https://tally.so/r/${TALLY_FORM_ID}`;
const TALLY_EMBED_URL =
  `https://tally.so/embed/${TALLY_FORM_ID}` +
  "?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export function DemoForm() {
  return (
    <div className="card-elev relative rounded-2xl p-3 sm:p-4">
      <div className="flex flex-col gap-2 border-b border-border px-3 pb-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
          Request a working session
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-good">
          <span className="size-1.5 rounded-full bg-good" /> Replies within 24h
        </span>
      </div>

      <iframe
        data-tally-src={TALLY_EMBED_URL}
        loading="eager"
        width="100%"
        height="640"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        title="Request a DatacentrIQ working session"
        className="block w-full"
      />

      <div className="flex items-center justify-between gap-4 border-t border-border px-3 pb-2 pt-4">
        <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-ink-mute">
          Six short steps · No raw data required
        </p>
        <a
          href={TALLY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex shrink-0 items-center gap-1.5 rounded font-mono text-[9px] uppercase tracking-[0.16em] text-ink-dim transition-colors hover:text-brand"
        >
          Open full page <ArrowUpRight size={11} />
        </a>
      </div>

      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
    </div>
  );
}
