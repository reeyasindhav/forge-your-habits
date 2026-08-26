import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { AuthAside, AuthField } from "@/components/auth-parts";
import { Logo } from "@/components/brand";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password — Habitforge" },
      { name: "description", content: "Request a password reset link for your Habitforge account." },
      { property: "og:title", content: "Reset password — Habitforge" },
      { property: "og:description", content: "Request a password reset link for your Habitforge account." },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-14 sm:px-14">
        <div className="mx-auto w-full max-w-sm animate-fade-up">
          <Logo tone="dark" />

          {!submitted ? (
            <>
              <p className="label-mono mt-12">Password reset</p>
              <h1 className="mt-2 text-4xl font-semibold">Forgot your password?</h1>
              <p className="mt-3 text-sm text-muted-foreground">Enter the email associated with your account and we will send you a reset link.</p>

              <form className="mt-8 space-y-4" onSubmit={submit}>
                <AuthField label="Email" type="email" value={email} onChange={setEmail} />
                <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
                  Send reset link
                </button>
              </form>

              <p className="mt-8 text-sm text-muted-foreground">
                <Link to="/login" className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4">
                  <ArrowLeft className="size-3.5" /> Back to login
                </Link>
              </p>
            </>
          ) : (
            <div className="animate-fade-up">
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-secondary p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-mint text-ink">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">Check your inbox</p>
                  <p className="text-xs text-muted-foreground">We sent a password reset link to {email}</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Did not receive it? Check your spam folder or try again.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-sm font-medium text-foreground underline underline-offset-4">Try another email</button>
              <p className="mt-8 text-sm text-muted-foreground">
                <Link to="/login" className="inline-flex items-center gap-1 font-medium text-foreground underline underline-offset-4">
                  <ArrowLeft className="size-3.5" /> Back to login
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
      <AuthAside
        quote="Consistency over intensity. Small steps compound."
        person="Maya Okafor · 40 day streak"
      />
    </div>
  );
}
