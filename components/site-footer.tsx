import Link from "next/link";
import { Logo } from "@/components/logo";
import { ROUTES, VERTICALS } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-bg-elev">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row md:gap-14 lg:gap-20">
          <div className="md:w-[42%] lg:w-[40%]">
            <Logo />
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-ink-dim">
              From dashboards to decisions. A governed AI layer that turns enterprise
              data into Control Towers, causal intelligence, and executable
              workflows.
            </p>
            <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.22em] text-ink-mute">
              The Enterprise Decision Intelligence Platform
            </p>
          </div>

          <div className="mt-12 md:mt-0 flex-1 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <FooterColumn title="Platform">
              <FooterLink href={`${ROUTES.platform}#architecture`}>Architecture</FooterLink>
              <FooterLink href={`${ROUTES.platform}#capabilities`}>Capabilities</FooterLink>
              <FooterLink href={`${ROUTES.platform}#control-towers`}>Control Towers</FooterLink>
              <FooterLink href={ROUTES.agents}>Enterprise Agents</FooterLink>
              <FooterLink href={`${ROUTES.platform}#governance`}>Governance &amp; Trust</FooterLink>
              <FooterLink href={`${ROUTES.platform}#deployment`}>Deployment</FooterLink>
            </FooterColumn>

            <FooterColumn title="Verticals">
              {VERTICALS.map((v) => (
                <FooterLink key={v.slug} href={`${ROUTES.verticals}/${v.slug}`}>
                  {v.name}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Company">
              <FooterLink href={ROUTES.about}>About</FooterLink>
              <FooterLink href={ROUTES.demo}>Book a demo</FooterLink>
              <FooterLink href={`${ROUTES.demo}#pilot`}>Pilot program</FooterLink>
            </FooterColumn>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[12px] text-ink-mute">
            © {new Date().getFullYear()} DatacentrIQ. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mute">
            Decision Intelligence for your Human and AI Agents.
          </p>
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
      <h4 className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ink-mute mb-4">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[13px] text-ink-dim hover:text-ink transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
