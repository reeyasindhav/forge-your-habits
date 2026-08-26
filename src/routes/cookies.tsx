import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies policy — Habitforge" },
      { name: "description", content: "What cookies Habitforge uses, why we use them, and how you can manage them." },
      { property: "og:title", content: "Cookies policy — Habitforge" },
      { property: "og:description", content: "What cookies Habitforge uses and how to manage them." },
    ],
  }),
  component: CookiesPage,
});

const cookieTable = [
  { name: "habitforge.session", provider: "Habitforge", purpose: "Keeps you signed in during a browsing session.", expiry: "Session / 7 days", type: "Essential" },
  { name: "habitforge.consent", provider: "Habitforge", purpose: "Stores your cookie consent choice so we do not ask again.", expiry: "12 months", type: "Essential" },
  { name: "_ga / _ga_*", provider: "Google Analytics", purpose: "Distinguishes unique users and sessions for analytics.", expiry: "26 months", type: "Analytics" },
  { name: "_gid", provider: "Google Analytics", purpose: "Distinguishes unique users within a 24-hour window.", expiry: "24 hours", type: "Analytics" },
  { name: "_fbp", provider: "Meta", purpose: "Used to deliver and measure advertising campaigns.", expiry: "90 days", type: "Marketing" },
  { name: "lang", provider: "Habitforge", purpose: "Remembers your preferred language or region.", expiry: "12 months", type: "Functional" },
];

function CookiesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <span className="label-mono">Cookies policy</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Cookies & similar technologies.</h1>
        <p className="mt-4 text-lg text-muted-foreground">Last updated: August 25, 2026</p>

        <div className="mt-12 space-y-12 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">What are cookies?</h2>
            <p className="mt-3">Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work more efficiently, to remember user preferences, and to provide information to site owners.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">How we use cookies</h2>
            <p className="mt-3">We use cookies and similar technologies to operate Habitforge, understand how you use our services, and improve your experience. We do not use cookies to identify you personally unless you have created an account and signed in.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Types of cookies we use</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 font-medium text-foreground">Cookie</th>
                    <th className="py-3 pr-4 font-medium text-foreground">Provider</th>
                    <th className="py-3 pr-4 font-medium text-foreground">Purpose</th>
                    <th className="py-3 pr-4 font-medium text-foreground">Expiry</th>
                    <th className="py-3 font-medium text-foreground">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row) => (
                    <tr key={row.name} className="border-b border-border/60">
                      <td className="py-3 pr-4 font-mono text-xs">{row.name}</td>
                      <td className="py-3 pr-4">{row.provider}</td>
                      <td className="py-3 pr-4">{row.purpose}</td>
                      <td className="py-3 pr-4">{row.expiry}</td>
                      <td className="py-3">
                        <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-xs">{row.type}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Essential cookies</h2>
            <p className="mt-3">These cookies are required for Habitforge to function properly. They enable core features such as authentication, security, and session management. Disabling essential cookies may prevent the app from working as expected.</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Session cookies that keep you signed in</li>
              <li>Consent cookies that remember your cookie preferences</li>
              <li>Security cookies that help detect suspicious activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Functional cookies</h2>
            <p className="mt-3">Functional cookies allow Habitforge to remember choices you have made in the past, such as your preferred language or region. These cookies are optional and you can disable them in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Analytics cookies</h2>
            <p className="mt-3">We use analytics cookies to understand how visitors interact with Habitforge. This helps us improve the product, fix issues, and prioritize new features. Analytics data is aggregated and anonymized where possible.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Marketing cookies</h2>
            <p className="mt-3">Marketing cookies are used to deliver relevant advertisements to you on other platforms. They track your activity across websites to measure campaign effectiveness. You can opt out of marketing cookies at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Third-party cookies</h2>
            <p className="mt-3">Some cookies are placed by third-party services that appear on our pages, including analytics providers and advertising networks. We do not control these cookies. Please review the privacy policies of those third parties for more information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">How to manage cookies</h2>
            <p className="mt-3">Most browsers allow you to view, delete, or block cookies through their settings. The process varies by browser. Here are the most common options:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Settings → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
            <p className="mt-3">Please note that disabling certain cookies may affect the functionality of Habitforge. Essential cookies cannot be disabled because they are required for the app to work.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Local storage</h2>
            <p className="mt-3">In addition to cookies, we use browser local storage to keep you signed in and remember your preferences. Local storage behaves similarly to cookies but can hold more data. You can clear local storage at any time through your browser settings or by signing out of Habitforge.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Do Not Track</h2>
            <p className="mt-3">Some browsers support a “Do Not Track” signal that requests websites to disable tracking. Habitforge currently does not respond to Do Not Track signals because there is no universal standard for how sites should interpret them. Instead, we offer direct controls through cookie consent and browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Updates to this policy</h2>
            <p className="mt-3">We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of material changes through the app or by email. The “Last updated” date at the top of this page indicates when this policy was most recently revised.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">More information</h2>
            <p className="mt-3">For more details about how we handle your data, see our <Link to="/privacy" className="text-foreground underline underline-offset-4">Privacy Policy</Link>. If you have questions about cookies, contact us at <Link to="/contact" className="text-foreground underline underline-offset-4">/contact</Link> or hello@habitforge.app.</p>
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
