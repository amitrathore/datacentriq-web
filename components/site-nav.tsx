"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { cn, ROUTES } from "@/lib/utils";

const NAV = [
  { href: ROUTES.platform, label: "Platform" },
  { href: ROUTES.agents, label: "Agents" },
  { href: ROUTES.verticals, label: "Verticals" },
  { href: ROUTES.about, label: "About" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-theme="dark"
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border bg-bg/90 backdrop-blur-xl"
          : "border-border bg-bg/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex h-[66px] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {NAV.map((item) => {
              const active =
                pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "focus-ring rounded px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                    active ? "text-ink" : "text-ink-dim hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href={ROUTES.demo} size="md">
              Book a call
            </Button>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-border-strong text-ink md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div
            id="mobile-navigation"
            className="border-t border-border pb-5 pt-3 md:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded px-2 py-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-dim hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href={ROUTES.demo}
                size="lg"
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                Book a call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
