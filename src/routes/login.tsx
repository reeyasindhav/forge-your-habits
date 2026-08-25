import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AuthAside, AuthField } from "@/components/auth-parts";
import { Logo } from "@/components/brand";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Habitforge" },
      { name: "description", content: "Sign back into Habitforge and pick your streak up where you left it." },
      { property: "og:title", content: "Log in — Habitforge" },
      { property: "og:description", content: "Sign back into Habitforge and continue your streak." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("alex@habitforge.app");
  const [password, setPassword] = useState("forge1234");

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-14 sm:px-14">
        <div className="mx-auto w-full max-w-sm animate-fade-up">
          <Logo tone="dark" />
          <p className="label-mono mt-12">Welcome back</p>
          <h1 className="mt-2 text-4xl font-semibold">Pick it back up.</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Your streak is waiting. Nothing to catch up on, just today.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              signIn(email, "Alex Morgan");
              navigate({ to: "/dashboard" });
            }}
          >
            <AuthField label="Email" type="email" value={email} onChange={setEmail} />
            <AuthField label="Password" type="password" value={password} onChange={setPassword} />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="accent-[oklch(0.75_0.14_163)]" />
                Keep me signed in
              </label>
              <span className="cursor-pointer hover:text-foreground">Forgot password?</span>
            </div>
            <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
              Enter Habitforge
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <p className="mt-8 text-sm text-muted-foreground">
            New here?{" "}
            <Link to="/signup" className="font-medium text-foreground underline underline-offset-4">
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <AuthAside
        quote="Day 40 of morning pages. The first ten days were willpower, the rest has been momentum."
        person="Maya Okafor · 40 day streak"
      />
    </div>
  );
}
