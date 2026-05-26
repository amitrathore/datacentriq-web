"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn, ROUTES } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: ROUTES.platform, label: "Platform" },
  { href: ROUTES.agents, label: "Agents" },
  { href: ROUTES.verticals, label: "Verticals" },
  { href: ROUTES.about, label: "About" },
];

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[backdrop-filter,background-color,border-color] duration-300",
        scrolled
          ? "backdrop-blur-md bg-bg/70 border-b border-border"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <div className="h-16 flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const active =
                pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] tracking-tight transition-colors",
                    active ? "text-ink" : "text-ink-dim hover:text-ink"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button href={ROUTES.demo} variant="primary" size="md" arrow>
              Book a demo
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border-strong text-ink-dim hover:text-ink"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 pt-1 flex flex-col gap-1 border-t border-border/60 mt-px">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-3 text-[15px] text-ink-dim hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href={ROUTES.demo} variant="primary" size="lg" arrow className="w-full">
                Book a demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
