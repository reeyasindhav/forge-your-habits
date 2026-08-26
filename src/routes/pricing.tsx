import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Habitforge" },
      { name: "description", content: "Free forever for individuals. Paid plans for teams and power users." },
      { property: "og:title", content: "Pricing — Habitforge" },
      { property: "og:description", content: "Free forever for individuals. Paid plans for teams and power users." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "For individuals building their first routines.",
    features: ["Unlimited habits", "Streak tracking", "Weekly grid", "Community challenges"],
    cta: "Start free",
    to: "/signup",
  },
  {
    name: "Pro",
    price: "$6",
    period: "/ month",
    desc: "For serious forgers who want deeper insights.",
    features: ["Everything in Free", "Advanced analytics", "Custom reminders", "Priority support", "Ad-free experience"],
    cta: "Start Pro trial",
    to: "/signup",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$12",
    period: "/ seat / month",
    desc: "For groups, families, or small teams.",
    features: ["Everything in Pro", "Shared challenges", "Team leaderboard", "Admin controls", "SSO & audit logs"],
    cta: "Contact sales",
    to: "/about",
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="label-mono">Pricing</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Simple, transparent pricing.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Start free and upgrade when you are ready. No surprises.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {tiers.map((t, i) => (
            <div key={t.name} className={`surface animate-fade-up p-6 sm:p-8 ${t.highlighted ? "border-mint/40 shadow-lg" : ""}`} style={{ animationDelay: `${i * 80}ms` }}>
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6">
                <span className="font-display text-4xl font-semibold">{t.price}</span>
                <span className="text-muted-foreground">{t.period}</span>
              </div>
              <Link to={t.to} className={`mt-6 flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.03] ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border bg-secondary text-foreground hover:bg-background"}`}>
                {t.cta}
              </Link>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-mint" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 surface p-8 text-center">
          <p className="label-mono">Guarantee</p>
          <h3 className="mt-4 text-2xl font-semibold">30-day money-back guarantee</h3>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Try Pro or Team risk-free. If Habitforge is not for you, we will refund you within 30 days. No questions asked.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
