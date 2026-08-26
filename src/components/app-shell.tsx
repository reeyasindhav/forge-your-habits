import { Link, useNavigate } from "@tanstack/react-router";
import {
  Bell,
  Home,
  LogOut,
  Settings,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Menu,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Logo } from "@/components/brand";
import { useAuth, initials } from "@/lib/auth";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/dashboard", label: "Today", icon: Home },
  { to: "/habits", label: "My habits", icon: Target },
  { to: "/progress", label: "Progress", icon: TrendingUp },
  { to: "/challenges", label: "Challenges", icon: Trophy },
  { to: "/community", label: "Community", icon: Users },
] as const;

export function AppShell({
  children,
  eyebrow,
  title,
}: {
  children: ReactNode;
  eyebrow: string;
  title: string;
}) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const name = user?.name ?? "Alex Morgan";

  const sidebar = (
    <div className="flex h-full flex-col gap-8 bg-sidebar p-6 text-sidebar-foreground">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          className="text-sidebar-foreground/70 lg:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X className="size-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {nav.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-sidebar-foreground/70 transition-all hover:bg-sidebar-accent hover:text-sidebar-foreground"
            activeProps={{
              className: "bg-sidebar-accent !text-sidebar-foreground font-medium shadow-sm",
            }}
          >
            <Icon className="size-[18px] shrink-0" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="space-y-1 border-t border-sidebar-border pt-6">
        <Link
          to="/settings"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
          activeProps={{ className: "bg-sidebar-accent !text-sidebar-foreground" }}
        >
          <Settings className="size-[18px]" />
          Settings
        </Link>
        <div className="mt-2 flex items-center gap-3 rounded-2xl bg-sidebar-accent p-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-mint font-mono text-xs text-ink">
            {initials(name)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{name}</p>
            <p className="truncate text-xs text-sidebar-foreground/60">Personal space</p>
          </div>
          <button
            aria-label="Sign out"
            onClick={() => setConfirmOpen(true)}
            className="text-sidebar-foreground/60 transition-colors hover:text-sidebar-foreground"
          >
            <LogOut className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen lg:flex">
      <aside className="fixed inset-y-0 left-0 hidden w-[264px] lg:block">{sidebar}</aside>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/50 animate-fade-in" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[280px] animate-fade-in">{sidebar}</div>
        </div>
      )}

      <div className="flex-1 lg:ml-[264px]">
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                className="rounded-xl border border-border p-2 lg:hidden"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="size-4" />
              </button>
              <div className="min-w-0">
                <p className="label-mono">{eyebrow}</p>
                <h1 className="truncate text-2xl font-semibold sm:text-3xl">{title}</h1>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                aria-label="Notifications"
                className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Bell className="size-5" />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-mint" />
              </button>
              <span className="grid size-9 place-items-center rounded-full bg-mint-soft font-mono text-xs text-ink">
                {initials(name)}
              </span>
            </div>
          </div>
        </header>
        <main className={cn("px-5 pb-16 pt-6 sm:px-8")}>{children}</main>
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-ink/50 animate-fade-in" onClick={() => setConfirmOpen(false)} />
          <div className="surface relative w-full max-w-sm animate-fade-up p-6">
            <h3 className="text-lg font-semibold">Sign out?</h3>
            <p className="mt-2 text-sm text-muted-foreground">You will be returned to the home page. Your data will stay saved.</p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button onClick={() => setConfirmOpen(false)} className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary">Cancel</button>
              <button
                onClick={() => {
                  setConfirmOpen(false);
                  signOut();
                  navigate({ to: "/", replace: true });
                }}
                className="rounded-full bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground transition-transform hover:scale-[1.03]"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
