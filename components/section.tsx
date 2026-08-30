import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
  pageLabel?: string;
  pageIndex?: string;
};

export function Section({ id, children, className, bleed, pageLabel, pageIndex }: Props) {
  return (
    <section
      id={id}
      className={cn("relative", bleed ? "" : "py-28 sm:py-36", className)}
    >
      {pageLabel && (
        <div className="pointer-events-none absolute right-6 top-6 hidden md:flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute/60">
          <span>{pageLabel}</span>
          {pageIndex && <span className="tabular-nums">{pageIndex}</span>}
        </div>
      )}
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
