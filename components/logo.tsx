import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  href?: string;
  size?: "sm" | "md";
};

export function Logo({ className, href = "/", size = "md" }: Props) {
  const dim = size === "sm" ? 24 : 34;
  const text = size === "sm" ? "text-[16px]" : "text-[22px]";

  const inner = (
    <span className={cn("inline-flex items-center gap-3 text-ink", className)}>
      <Mark size={dim} />
      <span className={cn("font-sans font-semibold tracking-[-0.035em]", text)}>
        Datacentr<span className="font-bold">IQ</span>
      </span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="inline-flex items-center" aria-label="DatacentrIQ home">
      {inner}
    </Link>
  );
}

function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <rect x="20" y="21" width="13" height="57" fill="currentColor" />
      <rect x="37" y="21" width="20" height="7" fill="currentColor" />
      <rect x="37" y="31" width="30" height="7" fill="currentColor" />
      <rect x="37" y="41" width="36" height="7" fill="currentColor" />
      <rect x="37" y="51" width="36" height="7" fill="currentColor" />
      <rect x="37" y="61" width="30" height="7" fill="currentColor" />
      <rect x="37" y="71" width="20" height="7" fill="currentColor" />
    </svg>
  );
}
