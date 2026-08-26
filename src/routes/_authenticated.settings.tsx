import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Moon, Shield, User } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/_authenticated/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Habitforge" },
      { name: "description", content: "Manage your profile, preferences, and account settings." },
      { property: "og:title", content: "Settings — Habitforge" },
      { property: "og:description", content: "Manage your profile and preferences." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name ?? "Alex Morgan");
  const [email] = useState(user?.email ?? "alex@habitforge.app");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const save = () => {
    signOut();
    navigate({ to: "/", replace: true });
  };

  return (
    <AppShell eyebrow="Preferences" title="Settings.">
      <div className="grid gap-5 lg:grid-cols-3">
        <section className="surface animate-fade-up p-8 lg:col-span-1">
          <p className="label-mono">Account</p>
          <h3 className="mt-1 text-2xl font-semibold">Profile</h3>
          <div className="mt-6 flex items-center gap-4">
            <div className="grid size-14 place-items-center rounded-full bg-mint font-mono text-lg text-ink">
              {name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-muted-foreground">{email}</p>
            </div>
          </div>
        </section>

        <section className="lg:col-span-2 space-y-5">
          <section className="surface animate-fade-up p-8" style={{ animationDelay: "80ms" }}>
            <div className="flex items-center gap-2">
              <User className="size-5 text-mint" />
              <p className="label-mono">Personal info</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="label-mono">Full name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:border-mint focus:ring-4 focus:ring-mint/15" />
              </label>
              <label className="block">
                <span className="label-mono">Email</span>
                <input value={email} disabled className="mt-1.5 w-full rounded-2xl border border-input bg-secondary px-4 py-3 text-sm text-muted-foreground" />
              </label>
            </div>
          </section>

          <section className="surface animate-fade-up p-8" style={{ animationDelay: "160ms" }}>
            <div className="flex items-center gap-2">
              <Bell className="size-5 text-mint" />
              <p className="label-mono">Notifications</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Daily reminders</p>
                <p className="text-xs text-muted-foreground">Get reminded to check in on your habits.</p>
              </div>
              <button onClick={() => setNotifications((v) => !v)} className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${notifications ? "bg-mint" : "bg-secondary"}`}>
                <span className={`inline-block size-4 rounded-full bg-white transition-transform ${notifications ? "translate-x-6" : "translate-x-1"}`} />
              </button>
            </div>
          </section>

          <section className="surface animate-fade-up p-8" style={{ animationDelay: "240ms" }}>
            <div className="flex items-center gap-2">
              <Moon className="size-5 text-mint" />
              <p className="label-mono">Appearance</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Dark mode</p>
                <p className="text-xs text-muted-foreground">Switch between light and dark themes.</p>
              </div>
              <button onClick={() => setDarkMode((v) => !v)} className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${darkMode ? "bg-mint" : "bg-secondary"}`}>
                <span className={`inline-block size-4 rounded-full bg-white transition-transform ${darkMode ? "translate-x-6" : "translate-x-1"}`} />
              </button>
            </div>
          </section>

          <section className="surface animate-fade-up p-8" style={{ animationDelay: "320ms" }}>
            <div className="flex items-center gap-2">
              <Shield className="size-5 text-mint" />
              <p className="label-mono">Danger zone</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Signing out will clear your local session. You can always sign back in.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={save} className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary">Save changes</button>
              <button onClick={signOut} className="rounded-full bg-destructive px-5 py-2.5 text-sm font-medium text-destructive-foreground transition-transform hover:scale-[1.03]">Sign out</button>
            </div>
          </section>
        </section>
      </div>
    </AppShell>
  );
}
