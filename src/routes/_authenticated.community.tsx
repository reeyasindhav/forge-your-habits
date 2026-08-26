import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Flame, Heart, Trophy } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { posts, leaderboard } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/community")({
  head: () => ({
    meta: [
      { title: "Community — Habitforge" },
      { name: "description", content: "Cheer on fellow forgers, share wins, and climb the leaderboard." },
      { property: "og:title", content: "Community — Habitforge" },
      { property: "og:description", content: "Cheer on fellow forgers and climb the leaderboard." },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const [cheered, setCheered] = useState<Set<string>>(new Set());

  const toggleCheer = (id: string) =>
    setCheered((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <AppShell eyebrow="Together" title="Community.">
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <section className="surface animate-fade-up p-8">
          <p className="label-mono">Feed</p>
          <h3 className="mt-1 text-2xl font-semibold">What forgers are saying.</h3>
          <div className="mt-6 space-y-4">
            {posts.map((p, i) => (
              <article key={p.id} className="animate-fade-up rounded-2xl border border-border p-5" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="flex items-center gap-3">
                  <img src={p.avatar} alt={p.author} className="size-10 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{p.author}</p>
                    <p className="truncate text-xs text-muted-foreground">{p.handle} · {p.time}</p>
                  </div>
                  <span className="ml-auto flex shrink-0 items-center gap-1.5 font-mono text-xs text-flame">
                    <Flame className="size-3.5" /> {p.streak}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed">{p.body}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <button onClick={() => toggleCheer(p.id)} className={cn("flex items-center gap-1.5 transition-colors", cheered.has(p.id) ? "text-red-500" : "hover:text-foreground")}>
                    <Heart className={cn("size-4", cheered.has(p.id) && "fill-current")} /> {p.cheers + (cheered.has(p.id) ? 1 : 0)}
                  </button>
                  <span className="cursor-pointer hover:text-foreground">Reply</span>
                  <span className="cursor-pointer hover:text-foreground">Share</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <section className="surface animate-fade-up p-8">
            <div className="flex items-center gap-2">
              <Trophy className="size-5 text-mint" />
              <p className="label-mono">Leaderboard</p>
            </div>
            <ul className="mt-6 space-y-3">
              {leaderboard.map((u, i) => (
                <li key={u.name} className="flex items-center gap-3 rounded-2xl border border-border p-3">
                  <span className="grid size-8 place-items-center rounded-full bg-secondary font-mono text-xs text-muted-foreground">{i + 1}</span>
                  <img src={u.avatar} alt={u.name} className="size-9 rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{u.name}</p>
                    <p className="font-mono text-xs text-flame">{u.streak} day streak</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="surface animate-fade-up p-8" style={{ animationDelay: "100ms" }}>
            <p className="label-mono">Trending</p>
            <div className="mt-4 space-y-3">
              {["#MorningPages", "#DeepWork", "#NoScroll", "#RunClub"].map((tag) => (
                <div key={tag} className="flex items-center justify-between rounded-2xl border border-border px-4 py-3 text-sm hover:border-mint/40 cursor-pointer transition-colors">
                  <span>{tag}</span>
                  <span className="text-xs text-muted-foreground">Trending</span>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </AppShell>
  );
}
