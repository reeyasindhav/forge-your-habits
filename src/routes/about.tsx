import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Habitforge" },
      { name: "description", content: "Our mission is to help people build habits that last through calm design and community accountability." },
      { property: "og:title", content: "About — Habitforge" },
      { property: "og:description", content: "Our mission is to help people build habits that last." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="label-mono">About</span>
          <h1 className="animate-heading mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Small steps. Real momentum.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">Habitforge was born from a simple observation: most productivity tools are either too complex or too shallow. We believe the best habit tracker is one that stays out of your way, shows you meaningful progress, and connects you to a community that cares.</p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="surface p-8">
            <h2 className="animate-heading text-2xl font-semibold">Our mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">We want to help 1 million people build at least one habit that lasts. Not through guilt, gamification, or manipulation — but through calm design, honest feedback, and genuine accountability.</p>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70" alt="Team collaborating" className="animate-bounce-soft animate-highlight mt-6 rounded-2xl" />
          </div>
          <div className="surface p-8">
            <h2 className="animate-heading text-2xl font-semibold">Our story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">Started in a small apartment in 2024, Habitforge began as a personal project to track morning pages and meditation. Friends wanted in. Then their friends. Today, thousands of forgers use it to build routines that actually stick.</p>
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=70" alt="Quiet morning" className="animate-bounce-soft animate-highlight mt-6 rounded-2xl" />
          </div>
        </div>
        <div className="mt-16 surface p-8 text-center">
          <h2 className="animate-heading text-2xl font-semibold">Join us.</h2>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Whether you are building your first habit or your fiftieth, Habitforge is the quiet place to make it happen.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">Start free</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary">Contact us</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
