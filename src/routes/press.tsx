import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Habitforge" },
      { name: "description", content: "Press resources, brand assets, media mentions, and company information for Habitforge." },
      { property: "og:title", content: "Press — Habitforge" },
      { property: "og:description", content: "Press resources, brand assets, and media mentions for Habitforge." },
    ],
  }),
  component: PressPage,
});

const mentions = [
  {
    outlet: "TechCrunch",
    headline: "Habitforge raises seed to help users build routines that stick",
    excerpt: "The funding will be used to expand the team and launch community challenges, with a focus on making habit building feel less like a chore and more like a daily ritual.",
    date: "Jul 28, 2026",
    url: "https://techcrunch.com",
  },
  {
    outlet: "Product Hunt",
    headline: "Featured as Product of the Day",
    excerpt: "Habitforge topped Product Hunt with 1,200+ upvotes on its public launch, praised for its minimal design and focus on long-term habit formation.",
    date: "Jul 15, 2026",
    url: "https://www.producthunt.com",
  },
  {
    outlet: "Indie Hackers",
    headline: "From side project to 12k active users in 3 months",
    excerpt: "Founder Alex Chen talks about bootstrapping Habitforge, the design choices behind its calm interface, and why simplicity beats feature bloat.",
    date: "Jun 22, 2026",
    url: "https://www.indiehackers.com",
  },
  {
    outlet: "The Verge",
    headline: "The best habit trackers for building better routines in 2026",
    excerpt: "Habitforge was named one of the best productivity apps of 2026 for its clean UI, streak animations, and community-driven accountability.",
    date: "Jun 10, 2026",
    url: "https://www.theverge.com",
  },
];

const assets = [
  { title: "Logo pack", desc: "SVG, PNG, and dark-mode variants", file: "habitforge-logos.zip" },
  { title: "App screenshots", desc: "Dashboard, habits, and progress views", file: "habitforge-screenshots.zip" },
  { title: "Brand guidelines", desc: "Colors, typography, and usage rules", file: "habitforge-brand-kit.pdf" },
];

const facts = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Remote, worldwide" },
  { label: "Active users", value: "12,400+" },
  { label: "Habits completed", value: "1.2M+" },
  { label: "Countries", value: "80+" },
  { label: "Team size", value: "8" },
];

function PressPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="label-mono">Press</span>
          <h1 className="animate-heading mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Habitforge in the news.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Brand assets, media mentions, and company information for journalists and partners.</p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="animate-heading text-2xl font-semibold">Recent mentions</h2>
            <div className="mt-6 space-y-6">
              {mentions.map((m, i) => (
                <a key={m.outlet} href={m.url} target="_blank" rel="noreferrer" className="surface lift animate-fade-up block p-6" style={{ animationDelay: `${i * 80}ms` }}>
                  <p className="text-xs text-muted-foreground">{m.outlet} · {m.date}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">{m.headline}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.excerpt}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <section className="surface animate-fade-up p-8">
               <h2 className="animate-heading text-xl font-semibold">Company facts</h2>
              <p className="mt-3 text-sm text-muted-foreground">Quick stats for articles and roundups.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {facts.map((f) => (
                  <div key={f.label}>
                    <p className="text-xs text-muted-foreground">{f.label}</p>
                    <p className="mt-1 font-mono text-sm font-medium">{f.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="surface animate-fade-up p-8" style={{ animationDelay: "100ms" }}>
               <h2 className="animate-heading text-xl font-semibold">Brand assets</h2>
              <p className="mt-3 text-sm text-muted-foreground">Logos, screenshots, and brand guidelines for media use.</p>
              <div className="mt-6 space-y-3">
                {assets.map((a) => (
                  <div key={a.title} className="flex items-center justify-between rounded-2xl border border-border p-4">
                    <div>
                      <p className="text-sm font-medium">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.desc}</p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-mono text-muted-foreground">{a.file}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">All assets are provided for editorial use only. Please do not alter logos or imply endorsement without permission.</p>
            </section>

            <section className="surface animate-fade-up p-8" style={{ animationDelay: "200ms" }}>
               <h2 className="animate-heading text-xl font-semibold">Press contact</h2>
              <p className="mt-3 text-sm text-muted-foreground">For interviews, reviews, or partnership inquiries.</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-foreground font-medium">Email:</span>
                  <Link to="/contact" className="text-foreground underline underline-offset-4">press@habitforge.app</Link>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-foreground font-medium">Response time:</span>
                  <span>Within 24 hours</span>
                </div>
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">Contact press</Link>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
