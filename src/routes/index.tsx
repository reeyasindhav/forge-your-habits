import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Flame } from "lucide-react";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Habitforge — Build routines that stick" },
      { name: "description", content: "A clean, minimal habit tracker with streaks, progress rings, and community challenges to help you build routines that last." },
      { property: "og:title", content: "Habitforge — Build routines that stick" },
      { property: "og:description", content: "Track streaks, join challenges, and stay accountable with a calm productivity environment." },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Active forgers", value: "12.4k" },
  { label: "Habits completed", value: "1.2M" },
  { label: "Longest streak", value: "365 days" },
  { label: "Avg. consistency", value: "78%" },
];

const features = [
  {
    title: "Streak tracking",
    desc: "Visual streak flames and daily completion grids keep motivation visible.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Weekly habit grid",
    desc: "See your entire week at a glance with colour-coded completion cells.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Progress rings",
    desc: "Circular progress indicators turn abstract goals into concrete feedback.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70",
  },
  {
    title: "Community challenges",
    desc: "Join public challenges, cheer others on, and stay accountable together.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70",
  },
];

const steps = [
  { num: "01", title: "Create your account", desc: "Sign up in seconds. No credit card required." },
  { num: "02", title: "Add your first habit", desc: "Start small. One habit is enough to begin." },
  { num: "03", title: "Track daily", desc: "Check off each day and watch your streak grow." },
  { num: "04", title: "Join challenges", desc: "Compete, cheer, and grow with the community." },
];

const testimonials = [
  { name: "Maya Okafor", streak: 40, body: "Day 40 of morning pages. The first ten days were willpower, the rest has been momentum.", img: "https://i.pravatar.cc/160?img=47" },
  { name: "Priya Raman", streak: 63, body: "The weekly grid finally turned fully green. Small steps really do compound.", img: "https://i.pravatar.cc/160?img=32" },
  { name: "Theo Lindqvist", streak: 1, body: "Missed yesterday for the first time in 3 weeks. Logging it, not spiralling about it. Back out at 6am.", img: "https://i.pravatar.cc/160?img=12" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="label-mono">Daily habit & routine tracker</span>
              <h1 className="animate-heading mt-4 text-5xl sm:text-6xl font-semibold leading-[1.05]">
                Small steps.
                <br />
                <span className="text-muted-foreground">Real momentum.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Forge Your Habits helps you build routines that stick with streaks, progress rings, and community accountability. A calm, minimal space to grow.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/signup" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
                  Start free <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/features" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary">
                  See how it works
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
                {["Free forever plan", "No credit card", "Cancel anytime"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-mint" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "100ms" }}>
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=70" alt="Quiet morning workspace" className="animate-bounce-soft animate-highlight rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-mint text-ink">
                    <Flame className="size-5" />
                  </span>
                  <div>
                    <p className="font-mono text-sm font-medium">12 day streak</p>
                    <p className="text-xs text-muted-foreground">Best: 24 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center animate-fade-up">
                <p className="font-display text-4xl font-semibold">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="label-mono">Features</span>
          <h2 className="animate-heading mt-4 text-3xl sm:text-4xl font-semibold leading-tight">Everything you need to build habits that last.</h2>
          <p className="mt-4 text-lg text-muted-foreground">No noise, no complexity. Just the tools that help you show up every day.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => (
            <article key={f.title} className="surface lift animate-fade-up overflow-hidden" style={{ animationDelay: `${i * 80}ms` }}>
              <img src={f.img} alt={f.title} className="animate-bounce-soft animate-highlight h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-sidebar text-sidebar-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <span className="label-mono !text-sidebar-foreground/50">How it works</span>
          <h2 className="animate-heading mt-4 text-3xl sm:text-4xl font-semibold leading-tight">Four steps to a better routine.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="animate-fade-up">
                <span className="font-mono text-xs tracking-widest text-mint">{s.num}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-sidebar-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <span className="label-mono">Community</span>
          <h2 className="animate-heading mt-4 text-3xl sm:text-4xl font-semibold leading-tight">You are not forging alone.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <article key={t.name} className="surface animate-fade-up p-6" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="size-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.streak} day streak</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{t.body}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Ready to forge your habits?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">Start small today. One habit is enough to begin. Add more when the first one sticks.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/signup" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
              Create my space <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/login" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary">
              Log in
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
