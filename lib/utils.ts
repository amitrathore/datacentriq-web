import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ROUTES = {
  home: "/",
  platform: "/platform",
  agents: "/agents",
  verticals: "/verticals",
  about: "/about",
  demo: "/demo",
} as const;

export const VERTICALS = [
  {
    slug: "nbfc-collections",
    name: "NBFC / Collections",
    headline: "From MIS packs to a Collections Control Tower.",
    tagline:
      "Prioritize customers, optimize field actions, and learn which interventions actually drove recovery.",
  },
  {
    slug: "retail",
    name: "Retail & Commerce",
    headline: "Recover the revenue you didn't know was leaking.",
    tagline:
      "Stockouts, supplier delays, misallocation, promotion margin loss — explained, simulated, and acted on.",
  },
  {
    slug: "influencer-growth",
    name: "Influencer & Creator Growth",
    headline: "Move beyond likes, views, and last-click attribution.",
    tagline:
      "Estimate true incremental influence, detect saturation, and reallocate budget toward LTV-creating creators.",
  },
  {
    slug: "winery",
    name: "Winery & Distributor",
    headline: "Channel-, vintage-, and club-level decision intelligence.",
    tagline:
      "Distributor performance, tasting-room conversion, wine club retention, and inventory allocation in one operating layer.",
  },
  {
    slug: "sales-productivity",
    name: "Sales Productivity",
    headline: "Move the bottom of the bell curve, not the leaderboard.",
    tagline:
      "Explain why 30 reps do 0.5 sales/day and 70 do 2 — and recommend the coaching, leads, and territory moves that close the gap.",
  },
] as const;

export type VerticalSlug = (typeof VERTICALS)[number]["slug"];
