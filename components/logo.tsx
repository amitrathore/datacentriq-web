import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  href?: string;
  size?: "sm" | "md";
};

export function Logo({ className, href = "/", size = "md" }: Props) {
  const dim = size === "sm" ? 18 : 22;
  const text = size === "sm" ? "text-[14px]" : "text-[15px]";

  const inner = (
    <span className={cn("inline-flex items-center gap-2.5 text-ink", className)}>
      <Mark size={dim} />
      <span className={cn("font-display tracking-tight", text)}>
        Datacentr<span className="text-brand">IQ</span>
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
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <linearGradient id="dciq-g" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--brand)" />
          <stop offset="1" stopColor="var(--brand-deep)" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="7" stroke="url(#dciq-g)" strokeWidth="1.25" />
      <path
        d="M9 11h7a5 5 0 0 1 0 10H9V11Z"
        stroke="url(#dciq-g)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="21.5" cy="20.5" r="2.25" fill="var(--accent-strong)" />
    </svg>
  );
}
