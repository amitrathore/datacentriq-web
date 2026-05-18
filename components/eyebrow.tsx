import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "good";
  number?: string;
};

export function Eyebrow({ children, className, tone = "default", number }: Props) {
  const toneClass =
    tone === "accent"
      ? "text-accent"
      : tone === "good"
      ? "text-good"
      : "text-ink-mute";
  return (
    <div
      className={cn(
        "font-mono text-[11px] tracking-[0.22em] uppercase flex items-center gap-3",
        toneClass,
        className
      )}
    >
      {number && (
        <span className="text-ink-mute/70 tabular-nums">{number}</span>
      )}
      <span className="h-px w-6 bg-current opacity-40" />
      <span>{children}</span>
    </div>
  );
}
