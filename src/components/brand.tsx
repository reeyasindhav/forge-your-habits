import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Flame({ className, animated = true }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("size-4", animated && "animate-flicker", className)}>
      <path
        d="M12 2c.6 3.2-1.4 4.6-2.8 6.1C7.6 9.8 6 11.4 6 14a6 6 0 0012 0c0-2.4-1.1-3.9-2.3-5.3-.6.9-1.3 1.4-2 1.5.6-2.6-.4-5.6-1.7-8.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-mint text-ink transition-transform group-hover:scale-105">
        <Flame className="size-4" />
      </span>
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          tone === "light" ? "text-sidebar-foreground" : "text-foreground",
        )}
      >
        habitforge
      </span>
    </Link>
  );
}

export function ProgressRing({
  value,
  size = 96,
  label,
}: {
  value: number;
  size?: number;
  label?: string;
}) {
  const r = size / 2 - 6;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={6} className="stroke-muted" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={6}
          strokeLinecap="round"
          fill="none"
          className="stroke-mint transition-[stroke-dashoffset] duration-1000 ease-out"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
        />
      </svg>
      <span className="absolute font-mono text-[0.6rem] tracking-widest text-muted-foreground">
        {label ?? `${value}%`}
      </span>
    </div>
  );
}
