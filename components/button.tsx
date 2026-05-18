import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  external?: boolean;
};

const sizeMap: Record<Size, string> = {
  md: "h-10 px-4 text-[13px]",
  lg: "h-12 px-5 text-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  arrow,
  external,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-[transform,background,color,border-color] active:translate-y-px";
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "text-ink-dim hover:text-ink";

  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowUpRight size={14} strokeWidth={1.75} className="-mr-0.5" />}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={cn(base, sizeMap[size], variantClass, className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, sizeMap[size], variantClass, className)}>
      {content}
    </Link>
  );
}
