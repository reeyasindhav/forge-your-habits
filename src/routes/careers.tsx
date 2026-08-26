import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Habitforge" },
      { name: "description", content: "Join the Habitforge team and help people build habits that last." },
      { property: "og:title", content: "Careers — Habitforge" },
      { property: "og:description", content: "Join the Habitforge team." },
    ],
  }),
  component: CareersPage,
});

const openings = [
  { title: "Senior Frontend Engineer", location: "Remote", type: "Full-time" },
  { title: "Product Designer", location: "Remote", type: "Full-time" },
  { title: "Community Manager", location: "Remote", type: "Part-time" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <span className="label-mono">Careers</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Build with us.</h1>
        <p className="mt-4 text-lg text-muted-foreground">We are a small, distributed team looking for curious, kind humans to join us.</p>
        <div className="mt-12 space-y-4">
          {openings.map((o) => (
            <div key={o.title} className="surface animate-fade-up p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.location} · {o.type}</p>
              </div>
              <Link to="/contact" className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary">Apply</Link>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
