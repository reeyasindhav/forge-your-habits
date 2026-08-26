import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Habitforge" },
      { name: "description", content: "Get in touch with the Habitforge team." },
      { property: "og:title", content: "Contact — Habitforge" },
      { property: "og:description", content: "Get in touch with the Habitforge team." },
    ],
  }),
  component: ContactPage,
});

const subjects = ["General question", "Feature request", "Bug report", "Partnership", "Other"];

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="label-mono">Contact</span>
              <h1 className="animate-heading mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Say hello.</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">Have a question, idea, or just want to say hi? Fill out the form and we will get back to you within 24 hours.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="size-5 text-mint" />
                <span>hello@habitforge.app</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="size-5 text-mint" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="size-5 text-mint" />
                <span>Remote, worldwide</span>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70" alt="Team" className="animate-bounce-soft animate-highlight mt-10 rounded-3xl" />
          </div>

          <div className="surface animate-fade-up p-8">
            {sent ? (
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Message sent.</h3>
                <p className="mt-3 text-sm text-muted-foreground">Thanks for reaching out. We will reply within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <label className="block">
                  <span className="label-mono">Name</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1.5 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:border-mint focus:ring-4 focus:ring-mint/15" />
                </label>
                <label className="block">
                  <span className="label-mono">Email</span>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1.5 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:border-mint focus:ring-4 focus:ring-mint/15" />
                </label>
                <label className="block">
                  <span className="label-mono">Subject</span>
                  <select value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-1.5 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:border-mint focus:ring-4 focus:ring-mint/15">
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="label-mono">Message</span>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="mt-1.5 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:border-mint focus:ring-4 focus:ring-mint/15" />
                </label>
                <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
                  Send message <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
