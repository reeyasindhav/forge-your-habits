import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { AuthAside, AuthField } from "@/components/auth-parts";
import { Logo } from "@/components/brand";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account — Habitforge" },
      { name: "description", content: "Start a free Habitforge account and build routines that actually stick." },
      { property: "og:title", content: "Create your account — Habitforge" },
      { property: "og:description", content: "Start free and build routines that actually stick." },
    ],
  }),
  component: SignupPage,
});

const perks = ["Unlimited habits", "Streak & milestone tracking", "Community challenges"];

function SignupPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("Alex Morgan");
  const [email, setEmail] = useState("alex@habitforge.app");
  const [password, setPassword] = useState("");

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-14 sm:px-14">
        <div className="mx-auto w-full max-w-sm animate-fade-up">
          <Logo tone="dark" />
          <p className="label-mono mt-12">Free forever plan</p>
          <h1 className="mt-2 text-4xl font-semibold">Start small today.</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            One habit is enough to begin. Add more when the first one sticks.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              signIn(email, name);
              navigate({ to: "/dashboard" });
            }}
          >
            <AuthField label="Full name" value={name} onChange={setName} />
            <AuthField label="Email" type="email" value={email} onChange={setEmail} />
            <AuthField label="Password" type="password" value={password} onChange={setPassword} />
            <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
              Create my space
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <ul className="mt-8 space-y-2">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="size-4 text-mint" />
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-muted-foreground">
            Already forging?{" "}
            <Link to="/login" className="font-medium text-foreground underline underline-offset-4">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <AuthAside
        quote="The weekly grid finally turned fully green. Small steps really do compound."
        person="Priya Raman · 63 day streak"
      />
    </div>
  );
}
