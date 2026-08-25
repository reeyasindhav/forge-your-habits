import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Flame } from "@/components/brand";
import { habits as seed, type Habit } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/habits")({
  head: () => ({
    meta: [
      { title: "My habits — Habitforge" },
      { name: "description", content: "Manage your routines, weekly grid and streaks in one calm place." },
      { property: "og:title", content: "My habits — Habitforge" },
      { property: "og:description", content: "Manage your routines and weekly grid." },
    ],
  }),
  component: HabitsPage,
});

const days = ["M", "T", "W", "T", "F", "S", "S"];
const filters = ["All", "Movement", "Mind", "Focus", "Rest", "Craft"] as const;

function HabitsPage() {
  const [items, setItems] = useState<Habit[]>(seed);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");

  const shown = items.filter((h) => filter === "All" || h.category === filter);

  return (
    <AppShell eyebrow="Your routines" title="My habits.">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all",
                filter === f
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-mint hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          onClick={() => setAdding((v) => !v)}
          className="flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          {adding ? <X className="size-4" /> : <Plus className="size-4" />} {adding ? "Cancel" : "New habit"}
        </button>
      </div>

      {adding && (
        <form
          className="surface mt-5 flex animate-fade-up flex-col gap-3 p-6 sm:flex-row sm:items-center"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            setItems((prev) => [
              {
                id: `h${prev.length + 1}`,
                name,
                detail: "15 min · Daily",
                streak: 0,
                best: 0,
                done: false,
                category: "Mind",
                weekly: [false, false, false, false, false, false, false],
              },
              ...prev,
            ]);
            setName("");
            setAdding(false);
          }}
        >
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ten minutes of stretching"
            className="flex-1 rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-mint focus:ring-4 focus:ring-mint/15"
          />
          <button className="rounded-full bg-mint px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]">
            Add to my routine
          </button>
        </form>
      )}

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {shown.map((h, i) => (
          <article
            key={h.id}
            className="surface lift animate-fade-up p-6"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <p className="label-mono">{h.category}</p>
                <h3 className="mt-1 truncate text-xl font-semibold">{h.name}</h3>
                <p className="text-xs text-muted-foreground">{h.detail}</p>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 font-mono text-xs">
                <Flame className="size-3.5 text-flame" /> {h.streak}
              </span>
            </div>

            <div className="mt-5 flex gap-1.5">
              {h.weekly.map((v, idx) => (
                <button
                  key={idx}
                  aria-label={`Day ${idx + 1}`}
                  onClick={() =>
                    setItems((prev) =>
                      prev.map((x) =>
                        x.id === h.id
                          ? { ...x, weekly: x.weekly.map((w, j) => (j === idx ? !w : w)) }
                          : x,
                      ),
                    )
                  }
                  className={cn(
                    "grid h-10 flex-1 place-items-center rounded-xl font-mono text-[0.65rem] transition-all hover:scale-105",
                    v ? "bg-mint text-ink" : "bg-secondary text-muted-foreground",
                  )}
                >
                  {v ? <Check className="size-3.5 animate-pop" /> : days[idx]}
                </button>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span>Best streak · {h.best} days</span>
              <span className="font-mono">
                {Math.round((h.weekly.filter(Boolean).length / 7) * 100)}% this week
              </span>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
