import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/brand";
import { useAuth, initials } from "@/lib/auth";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
] as const;

const footerLinks = {
  Product: [
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/challenges", label: "Challenges" },
    { to: "/changelog", label: "Changelog" },
  ],
  Company: [
    { to: "/about", label: "About" },
    { to: "/careers", label: "Careers" },
    { to: "/press", label: "Press" },
    { to: "/contact", label: "Contact" },
  ],
  Legal: [
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
    { to: "/security", label: "Security" },
    { to: "/cookies", label: "Cookies" },
  ],
} as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const { user, ready } = useAuth();
  const name = user?.name ?? "Alex Morgan";

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Logo tone="dark" />
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-foreground"
                activeProps={{ className: "!text-foreground font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {ready && user ? (
              <>
                <Link to="/dashboard" className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary">Dashboard</Link>
                <span className="grid size-9 place-items-center rounded-full bg-mint-soft font-mono text-xs text-ink">{initials(name)}</span>
              </>
            ) : (
              <>
                <Link to="/login" className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Log in</Link>
                <Link to="/signup" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]">Start free</Link>
              </>
            )}
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-border bg-sidebar text-sidebar-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="max-w-xs text-sm text-sidebar-foreground/60">
              A quiet place to build the days you want, one repetition at a time.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, items]) => (
            <FooterCol key={title} title={title} items={items} />
          ))}
        </div>
        <div className="border-t border-sidebar-border px-5 py-6 text-center font-mono text-xs tracking-widest text-sidebar-foreground/50">
          © {new Date().getFullYear()} HABITFORGE — SMALL STEPS, REAL MOMENTUM
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: readonly { to: string; label: string }[] }) {
  return (
    <div>
      <p className="label-mono !text-sidebar-foreground/50">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-sidebar-foreground/75">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="transition-colors hover:text-mint">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
