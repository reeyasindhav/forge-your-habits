import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Habitforge" },
      { name: "description", content: "Streak flames, weekly grids, progress rings, and community challenges — the tools you need to build habits that last." },
      { property: "og:title", content: "Features — Habitforge" },
      { property: "og:description", content: "Streak flames, weekly grids, progress rings, and community challenges." },
    ],
  }),
  component: FeaturesPage,
});

const items = [
  { title: "Streak flames", desc: "Animated flame icons mark your daily streak and reward consistency.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=70" },
  { title: "Weekly habit grid", desc: "A clean 7-day grid shows which habits you completed each day.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=70" },
  { title: "Progress rings", desc: "Circular progress charts turn abstract goals into concrete, satisfying feedback.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70" },
  { title: "Community challenges", desc: "Join public challenges, cheer others on, and stay accountable together.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70" },
  { title: "Milestones", desc: "Unlock badges for 7 days, 14 days, 21 days, and beyond.", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=70" },
  { title: "Cross-device sync", desc: "Your habits travel with you. Log from any device, anytime.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70" },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="label-mono">Features</span>
          <h1 className="animate-heading mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Everything you need to build habits that last.</h1>
          <p className="mt-4 text-lg text-muted-foreground">No noise, no complexity. Just the tools that help you show up every day.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <article key={f.title} className="surface lift animate-fade-up overflow-hidden" style={{ animationDelay: `${i * 80}ms` }}>
              <img src={f.img} alt={f.title} className="animate-bounce-soft animate-highlight h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 surface p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="label-mono">Why Habitforge</span>
              <h2 className="animate-heading mt-4 text-3xl font-semibold leading-tight">Built for the long game, not the quick win.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">Most habit trackers overwhelm you with charts, streaks, and notifications. Habitforge strips it back. A clean, calm interface that keeps your attention on what matters: doing the work.</p>
              <ul className="mt-6 space-y-3">
                {["Minimal design that reduces cognitive load", "Streak animations that reward consistency", "Community accountability that keeps you going", "Privacy-first: your data stays yours"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-mint" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=70" alt="Quiet workspace" className="animate-bounce-soft animate-highlight rounded-3xl" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
