import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of service — Habitforge" },
      { name: "description", content: "Terms and conditions for using Habitforge." },
      { property: "og:title", content: "Terms of service — Habitforge" },
      { property: "og:description", content: "Terms and conditions for using Habitforge." },
    ],
  }),
  component: TermsPage,
});

const toc = [
  "Agreement to terms",
  "Eligibility",
  "Account registration",
  "Acceptable use",
  "User content",
  "Intellectual property",
  "Subscription and payments",
  "Refund policy",
  "Termination",
  "Disclaimer of warranties",
  "Limitation of liability",
  "Indemnification",
  "Governing law",
  "Changes to terms",
  "Contact us",
];

function TermsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <span className="label-mono">Terms of service</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Terms of service.</h1>
        <p className="mt-4 text-lg text-muted-foreground">Last updated: August 25, 2026</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[200px_1fr]">
          <aside className="hidden lg:block">
            <p className="label-mono">On this page</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {toc.map((item) => (
                <li key={item} className="hover:text-foreground transition-colors">
                  <a href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}>{item}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-12 text-sm text-muted-foreground leading-relaxed">
            <section id="agreement-to-terms">
              <h2 className="text-xl font-semibold text-foreground">1. Agreement to terms</h2>
              <p className="mt-3">By accessing or using Habitforge, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
            </section>

            <section id="eligibility">
              <h2 className="text-xl font-semibold text-foreground">2. Eligibility</h2>
              <p className="mt-3">You must be at least 13 years old to use Habitforge. By using the service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these terms.</p>
            </section>

            <section id="account-registration">
              <h2 className="text-xl font-semibold text-foreground">3. Account registration</h2>
              <p className="mt-3">To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            </section>

            <section id="acceptable-use">
              <h2 className="text-xl font-semibold text-foreground">4. Acceptable use</h2>
              <p className="mt-3">You agree not to use Habitforge for any unlawful, abusive, or harmful purpose. Prohibited activities include, but are not limited to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Violating any applicable laws or regulations</li>
                <li>Impersonating any person or entity</li>
                <li>Harassing, threatening, or intimidating other users</li>
                <li>Posting false, misleading, or defamatory content</li>
                <li>Attempting to gain unauthorized access to Habitforge systems</li>
                <li>Using automated systems to access the service without permission</li>
                <li>Interfering with or disrupting the integrity or performance of Habitforge</li>
              </ul>
            </section>

            <section id="user-content">
              <h2 className="text-xl font-semibold text-foreground">5. User content</h2>
              <p className="mt-3">You retain ownership of any content you submit to Habitforge, including habit data, posts, and comments. By submitting content, you grant Habitforge a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content solely for the purpose of providing and improving the service. You are solely responsible for the content you post and its legality.</p>
            </section>

            <section id="intellectual-property">
              <h2 className="text-xl font-semibold text-foreground">6. Intellectual property</h2>
              <p className="mt-3">Habitforge and its original content, features, and functionality are owned by Habitforge and are protected by international copyright, trademark, patent, and other intellectual property laws. Our trademarks and trade dress may not be used without prior written consent.</p>
            </section>

            <section id="subscription-and-payments">
              <h2 className="text-xl font-semibold text-foreground">7. Subscription and payments</h2>
              <p className="mt-3">Certain features of Habitforge may require a paid subscription. By subscribing, you agree to pay the applicable fees as described at the time of purchase. Fees are non-refundable except as required by law or as explicitly stated in our refund policy. We may change our pricing with reasonable notice.</p>
            </section>

            <section id="refund-policy">
              <h2 className="text-xl font-semibold text-foreground">8. Refund policy</h2>
              <p className="mt-3">We offer a 30-day money-back guarantee for paid subscriptions. If you are not satisfied with Habitforge within the first 30 days of your subscription, contact us for a full refund. After 30 days, refunds are evaluated on a case-by-case basis.</p>
            </section>

            <section id="termination">
              <h2 className="text-xl font-semibold text-foreground">9. Termination</h2>
              <p className="mt-3">We may suspend or terminate your access to Habitforge at any time, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties. You may also terminate your account at any time through the settings page. Upon termination, all provisions of these terms which by their nature should survive termination shall survive.</p>
            </section>

            <section id="disclaimer-of-warranties">
              <h2 className="text-xl font-semibold text-foreground">10. Disclaimer of warranties</h2>
              <p className="mt-3">Habitforge is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the service will be uninterrupted, secure, or error-free.</p>
            </section>

            <section id="limitation-of-liability">
              <h2 className="text-xl font-semibold text-foreground">11. Limitation of liability</h2>
              <p className="mt-3">To the fullest extent permitted by law, Habitforge shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising from your use of or inability to use the service. Our total liability to you for any claims arising from these terms or the service shall not exceed the amount you paid us in the twelve months preceding the claim.</p>
            </section>

            <section id="indemnification">
              <h2 className="text-xl font-semibold text-foreground">12. Indemnification</h2>
              <p className="mt-3">You agree to indemnify and hold harmless Habitforge and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of or in any way connected with your access to or use of the service, your violation of these terms, or your violation of any rights of another party.</p>
            </section>

            <section id="governing-law">
              <h2 className="text-xl font-semibold text-foreground">13. Governing law</h2>
              <p className="mt-3">These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Habitforge operates, without regard to its conflict of law provisions. Any legal action or proceeding arising under these terms shall be brought exclusively in the courts located in that jurisdiction.</p>
            </section>

            <section id="changes-to-terms">
              <h2 className="text-xl font-semibold text-foreground">14. Changes to terms</h2>
              <p className="mt-3">We reserve the right to modify these terms at any time. If we make material changes, we will notify you by email or through an in-app notification. Your continued use of Habitforge after such changes constitutes acceptance of the new terms. We encourage you to review this page periodically.</p>
            </section>

            <section id="contact-us">
              <h2 className="text-xl font-semibold text-foreground">15. Contact us</h2>
              <p className="mt-3">If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>By email: <Link to="/contact" className="text-foreground underline underline-offset-4">hello@habitforge.app</Link></li>
                <li>Through our <Link to="/contact" className="text-foreground underline underline-offset-4">contact form</Link></li>
                <li>By mail: Habitforge, Remote, Worldwide</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
