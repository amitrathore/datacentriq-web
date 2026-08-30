import Link from "next/link";
import { Logo } from "@/components/logo";
import { ROUTES, VERTICALS } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer data-theme="dark" className="border-t border-border bg-bg text-ink">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr] lg:gap-20">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-6 text-ink-dim">
              Turning enterprise data into measurable business outcomes through
              governed decision intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">
            <FooterColumn title="Platform">
              <FooterLink href={ROUTES.platform}>How it works</FooterLink>
              <FooterLink href={ROUTES.agents}>Enterprise agents</FooterLink>
              <FooterLink href="/#governance">Governance</FooterLink>
              <FooterLink href={`${ROUTES.platform}#deployment`}>Deployment</FooterLink>
            </FooterColumn>

            <FooterColumn title="Verticals">
              {VERTICALS.map((vertical) => (
                <FooterLink
                  key={vertical.slug}
                  href={`${ROUTES.verticals}/${vertical.slug}`}
                >
                  {vertical.name}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Company">
              <FooterLink href={ROUTES.about}>About</FooterLink>
              <FooterLink href={ROUTES.demo}>Book a call</FooterLink>
              <FooterLink href="mailto:hello@datacentriq.co">Email us</FooterLink>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DatacentrIQ · All rights reserved</span>
          <span>Decision intelligence for human and AI agents</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-mute">
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="focus-ring rounded text-[13px] text-ink-dim transition-colors hover:text-ink"
      >
        {children}
      </Link>
    </li>
  );
}
