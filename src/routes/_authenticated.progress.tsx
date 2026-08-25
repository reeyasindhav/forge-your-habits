import { createFileRoute } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Lock, Medal } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ProgressRing } from "@/components/brand";
import { milestones, monthlyTrend, weeklyTrend, habits } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/progress")({
  head: () => ({
    meta: [
      { title: "Progress — Habitforge" },
      { name: "description", content: "Consistency charts, completion rates and unlocked milestones." },
      { property: "og:title", content: "Progress — Habitforge" },
      { property: "og:description", content: "Consistency charts and milestones." },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  return (
    <AppShell eyebrow="Last 30 days" title="Every day adds up.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Completion rate", value: "84%", note: "+12% vs last month" },
          { label: "Longest streak", value: "24", note: "Morning movement" },
          { label: "Habits tracked", value: String(habits.length), note: "Across 5 categories" },
          { label: "Perfect days", value: "11", note: "All habits complete" },
        ].map((s, i) => (
          <div key={s.label} className="surface animate-fade-up p-6" style={{ animationDelay: `${i * 70}ms` }}>
            <p className="label-mono">{s.label}</p>
            <p className="mt-3 font-display text-4xl font-semibold">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <section className="surface animate-fade-up p-8">
          <p className="label-mono">Weekly completion</p>
          <h3 className="mt-1 text-2xl font-semibold">Seven days at a glance.</h3>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyTrend}>
                <CartesianGrid vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} width={24} />
                <Tooltip cursor={{ fill: "var(--color-secondary)" }} />
                <Bar dataKey="done" radius={8} fill="var(--color-mint)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="surface flex animate-fade-up flex-col items-center justify-center p-8 text-center">
          <p className="label-mono">Monthly consistency</p>
          <div className="my-6">
            <ProgressRing value={84} size={180} label="84% CONSISTENT" />
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Your best month yet. Five weeks of steady repetitions, not perfect ones.
          </p>
        </section>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <section className="surface animate-fade-up p-8">
          <p className="label-mono">Trend</p>
          <h3 className="mt-1 text-2xl font-semibold">Momentum curve.</h3>
          <div className="mt-6 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrend}>
                <defs>
                  <linearGradient id="mintFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-mint)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-mint)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="week" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} width={30} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="rate"
                  stroke="var(--color-mint)"
                  strokeWidth={3}
                  fill="url(#mintFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="surface animate-fade-up p-8">
          <p className="label-mono">Milestones</p>
          <h3 className="mt-1 text-2xl font-semibold">Worth celebrating.</h3>
          <ul className="mt-6 space-y-3">
            {milestones.map((m) => (
              <li
                key={m.label}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border p-4",
                  m.unlocked ? "border-mint/40 bg-mint-soft/40" : "border-dashed border-border",
                )}
              >
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full",
                    m.unlocked ? "bg-mint text-ink" : "bg-secondary text-muted-foreground",
                  )}
                >
                  {m.unlocked ? <Medal className="size-4" /> : <Lock className="size-4" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{m.label}</p>
                  <p className="font-mono text-xs text-muted-foreground">{m.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </AppShell>
  );
}
