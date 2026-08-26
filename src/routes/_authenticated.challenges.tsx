import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronRight, Trophy, Users } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { challenges as seed, type Challenge } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/challenges")({
  head: () => ({
    meta: [
      { title: "Challenges — Habitforge" },
      { name: "description", content: "Join community challenges, track your progress, and stay accountable with fellow forgers." },
      { property: "og:title", content: "Challenges — Habitforge" },
      { property: "og:description", content: "Join community challenges and stay accountable." },
    ],
  }),
  component: ChallengesPage,
});

function ChallengesPage() {
  const [items, setItems] = useState<Challenge[]>(seed);

  const toggle = (id: string) =>
    setItems((prev) =>
      prev.map((c) => (c.id === id ? { ...c, joined: !c.joined } : c)),
    );

  return (
    <AppShell eyebrow="Community" title="Challenges.">
      <div className="surface animate-fade-up p-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div>
            <p className="label-mono">Public challenges</p>
            <h3 className="mt-1 text-2xl font-semibold">Find your next challenge.</h3>
            <p className="mt-2 text-sm text-muted-foreground">Join a community challenge and build habits alongside thousands of others.</p>
          </div>
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs text-muted-foreground">
            <Users className="size-4" /> {items.reduce((a, b) => a + b.participants, 0).toLocaleString()} participants
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {items.map((c, i) => (
          <article key={c.id} className="surface lift animate-fade-up overflow-hidden" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="relative h-48">
              <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="text-sm text-white/80">{c.blurb}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Trophy className="size-3.5 text-flame" /> {c.participants.toLocaleString()} participants
                </span>
                <span>{c.days} days</span>
              </div>
              {c.joined && (
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Your progress</span>
                    <span className="font-mono">{c.progress} / {c.days} days</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-mint transition-all duration-1000" style={{ width: `${Math.round((c.progress / c.days) * 100)}%` }} />
                  </div>
                </div>
              )}
              <button
                onClick={() => toggle(c.id)}
                className={cn(
                  "mt-4 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.03]",
                  c.joined ? "border border-border bg-secondary text-foreground" : "bg-primary text-primary-foreground",
                )}
              >
                {c.joined ? <><Check className="size-4" /> Joined</> : <>Join challenge <ChevronRight className="size-4" /></>}
              </button>
            </div>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
