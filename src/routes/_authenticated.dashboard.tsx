import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronRight, MoreHorizontal, Plus, Sparkles, Trophy } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Flame, ProgressRing } from "@/components/brand";
import { habits as seed, heatmap } from "@/lib/mock-data";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Today — Habitforge" },
      { name: "description", content: "Your daily rhythm: streaks, today's habits and weekly consistency." },
      { property: "og:title", content: "Today — Habitforge" },
      { property: "og:description", content: "Your daily rhythm at a glance." },
    ],
  }),
  component: Dashboard,
});

const days = ["M", "T", "W", "T", "F", "S", "S"];

function Dashboard() {
  const { user } = useAuth();
  const [items, setItems] = useState(seed.slice(0, 4));
  const done = items.filter((h) => h.done).length;
  const pct = Math.round((done / items.length) * 100);
  const first = (user?.name ?? "Alex").split(" ")[0];

  return (
    <AppShell eyebrow="Tuesday, June 18" title={`Good morning, ${first}.`}>
      <div className="grid gap-5 lg:grid-cols-3">
        <section className="relative animate-fade-up overflow-hidden rounded-3xl bg-sidebar p-8 text-sidebar-foreground lg:col-span-1">
          <Flame className="absolute -right-10 top-4 size-56 text-mint/10" animated={false} />
          <p className="label-mono !text-sidebar-foreground/50">Your daily rhythm</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05]">
            Small steps.
            <br />
            <span className="text-sidebar-foreground/55">Real momentum.</span>
          </h2>
          <p className="mt-4 max-w-xs text-sm text-sidebar-foreground/70">
            You're building a practice that lasts. Keep showing up for yourself.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="grid size-11 place-items-center rounded-full bg-mint text-ink">
              <Flame className="size-5" />
            </span>
            <div>
              <p className="font-mono text-lg tracking-tight">12 day streak</p>
              <p className="text-xs text-sidebar-foreground/60">Best: 24 days</p>
            </div>
          </div>
        </section>

        <section className="surface animate-fade-up p-8" style={{ animationDelay: "80ms" }}>
          <p className="label-mono">This week</p>
          <div className="mt-4 flex items-end gap-3">
            <span className="font-display text-5xl font-semibold">
              {done}/{items.length}
            </span>
            <span className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
              <Check className="size-4 text-mint" /> habits completed
            </span>
          </div>
          <div className="mt-6 flex gap-2">
            {days.map((d, i) => (
              <span
                key={i}
                className={cn(
                  "grid h-9 flex-1 place-items-center rounded-lg font-mono text-xs transition-colors",
                  i < 4 ? "bg-mint-soft text-ink" : "bg-secondary text-muted-foreground",
                )}
              >
                {d}
              </span>
            ))}
          </div>
        </section>

        <section className="surface animate-fade-up p-8" style={{ animationDelay: "160ms" }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="label-mono">Consistency</p>
              <p className="mt-4 font-display text-5xl font-semibold">{pct}%</p>
            </div>
            <ProgressRing value={pct} label="goal" />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            You're <strong className="text-foreground">4%</strong> ahead of last week.
          </p>
        </section>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
        <section className="surface animate-fade-up p-8" style={{ animationDelay: "200ms" }}>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <div className="min-w-0">
              <p className="label-mono">Today's habits</p>
              <h3 className="mt-1 text-2xl font-semibold">Make it count.</h3>
            </div>
            <Link
              to="/habits"
              className="flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Plus className="size-4" /> Add habit
            </Link>
          </div>

          <ul className="mt-6 space-y-3">
            {items.map((h, i) => (
              <li
                key={h.id}
                className={cn(
                  "flex animate-fade-up items-center gap-4 rounded-2xl border p-4 transition-colors",
                  h.done ? "border-mint/40 bg-mint-soft/50" : "border-border bg-card hover:border-mint/40",
                )}
                style={{ animationDelay: `${240 + i * 60}ms` }}
              >
                <button
                  aria-label={`Toggle ${h.name}`}
                  onClick={() =>
                    setItems((prev) =>
                      prev.map((x) => (x.id === h.id ? { ...x, done: !x.done } : x)),
                    )
                  }
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full border transition-all",
                    h.done ? "border-mint bg-mint text-ink" : "border-border bg-secondary hover:border-mint",
                  )}
                >
                  {h.done && <Check className="size-4 animate-pop" />}
                </button>
                <div className="min-w-0 flex-1">
                  <p className={cn("truncate font-medium", h.done && "text-muted-foreground line-through")}>
                    {h.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">{h.detail}</p>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <Flame className="size-3.5 text-flame" /> {h.streak} days
                </span>
                <MoreHorizontal className="size-4 shrink-0 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </section>

        <section className="surface animate-fade-up p-8" style={{ animationDelay: "260ms" }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="label-mono">Community pulse</p>
              <h3 className="mt-1 text-2xl font-semibold">You're not alone.</h3>
            </div>
            <Sparkles className="size-5 text-mint" />
          </div>

          <div className="mt-6 rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-mint-soft text-ink">
                <Trophy className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">30 day early riser</p>
                <p className="text-xs text-muted-foreground">2,841 people participating</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Your progress</span>
              <span className="font-mono">18 / 30 days</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-background">
              <div className="h-full rounded-full bg-mint transition-all duration-1000" style={{ width: "60%" }} />
            </div>
          </div>

          <Link
            to="/challenges"
            className="lift mt-4 flex items-center justify-between rounded-2xl border border-border p-5 text-sm font-medium"
          >
            Explore challenges
            <ChevronRight className="size-4" />
          </Link>
        </section>
      </div>

      <section className="surface mt-5 animate-fade-up p-8" style={{ animationDelay: "320ms" }}>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="label-mono">Your consistency</p>
            <h3 className="mt-1 text-2xl font-semibold">Every day adds up.</h3>
          </div>
          <div className="flex shrink-0 items-center gap-4 text-xs text-muted-foreground">
            <Legend className="bg-secondary" label="Missed" />
            <Legend className="bg-mint-soft" label="Partial" />
            <Legend className="bg-mint" label="Complete" />
          </div>
        </div>
        <div className="mt-6 flex justify-between font-mono text-xs text-muted-foreground">
          <span>May 20</span>
          <span>Jun 18</span>
        </div>
        <div className="mt-2 grid grid-flow-col grid-rows-5 gap-1.5 overflow-x-auto pb-1">
          {heatmap.map((v, i) => (
            <span
              key={i}
              className={cn(
                "size-6 rounded-md transition-transform hover:scale-125",
                v === 0 ? "bg-transparent" : v === 1 ? "bg-secondary" : "bg-mint-soft",
              )}
            />
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function Legend({ className, label }: { className: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn("size-2.5 rounded-full", className)} />
      {label}
    </span>
  );
}
