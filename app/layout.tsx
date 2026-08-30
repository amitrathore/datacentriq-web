import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DatacentrIQ — The Enterprise Decision Intelligence Platform",
    template: "%s · DatacentrIQ",
  },
  description:
    "Turn enterprise data into a living operating model. DatacentrIQ helps human and AI agents explain change, choose governed actions, and measure what works.",
  applicationName: "DatacentrIQ",
  metadataBase: new URL("https://datacentriq.co"),
  openGraph: {
    title: "Turn enterprise data into decisions that learn.",
    description:
      "DatacentrIQ helps human and AI agents explain change, choose governed actions, execute safely, and measure what works.",
    url: "/",
    siteName: "DatacentrIQ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn enterprise data into decisions that learn.",
    description:
      "A governed decision intelligence platform for actions you can explain, control, and measure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
