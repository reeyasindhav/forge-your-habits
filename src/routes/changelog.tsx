import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — Habitforge" },
      { name: "description", content: "Latest updates and improvements to Habitforge." },
      { property: "og:title", content: "Changelog — Habitforge" },
      { property: "og:description", content: "Latest updates and improvements to Habitforge." },
    ],
  }),
  component: ChangelogPage,
});

const releases = [
  { version: "1.2.0", date: "Aug 20, 2026", changes: ["Added community leaderboard", "Improved mobile navigation", "Fixed streak calculation bug"] },
  { version: "1.1.0", date: "Aug 5, 2026", changes: ["Introduced progress rings", "Added weekly habit grid", "Launch of community feed"] },
  { version: "1.0.0", date: "Jul 15, 2026", changes: ["Initial public launch", "Habit tracking and streaks", "Login and signup flows"] },
];

function ChangelogPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <span className="label-mono">Changelog</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">What is new.</h1>
        <p className="mt-4 text-lg text-muted-foreground">A running list of updates and improvements.</p>
        <div className="mt-12 space-y-10">
          {releases.map((r) => (
            <div key={r.version} className="surface animate-fade-up p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">v{r.version}</h2>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {r.changes.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary">Request a feature</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
