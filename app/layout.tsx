import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DatacentrIQ — The Enterprise Decision Intelligence Platform",
    template: "%s · DatacentrIQ",
  },
  description:
    "Move beyond dashboards. DatacentrIQ helps enterprises build governed Decision Intelligence Control Towers that explain what changed, reason causally, recommend decisions, track execution, and learn from outcomes.",
  metadataBase: new URL("https://datacentriq.ai"),
  openGraph: {
    title: "DatacentrIQ — The Enterprise Decision Intelligence Platform",
    description:
      "From dashboards to decisions. A governed AI layer that turns enterprise data into Control Towers, causal intelligence, and executable workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} ${jet.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
