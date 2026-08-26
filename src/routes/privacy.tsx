import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Habitforge" },
      { name: "description", content: "How Habitforge collects, uses, discloses, and safeguards your information." },
      { property: "og:title", content: "Privacy policy — Habitforge" },
      { property: "og:description", content: "How Habitforge collects, uses, discloses, and safeguards your information." },
    ],
  }),
  component: PrivacyPage,
});

const toc = [
  "Information we collect",
  "How we use your information",
  "How we share your information",
  "Data retention",
  "Your privacy rights",
  "Security",
  "Children's privacy",
  "International data transfers",
  "Changes to this policy",
  "Contact us",
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <span className="label-mono">Privacy policy</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Privacy policy.</h1>
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
            <section id="information-we-collect">
              <h2 className="text-xl font-semibold text-foreground">1. Information we collect</h2>
              <p className="mt-3">We collect information you provide directly to us, information we obtain automatically when you use Habitforge, and information from third-party sources.</p>
              <h3 className="mt-6 text-base font-semibold text-foreground">Account information</h3>
              <p className="mt-2">When you create an account, we collect your name, email address, and password hash. You may also optionally provide profile information such as a profile photo or bio.</p>
              <h3 className="mt-6 text-base font-semibold text-foreground">Usage data</h3>
              <p className="mt-2">We collect information about your interactions with Habitforge, including habits created, completions logged, streaks, progress metrics, and feature usage. This includes device information, IP address, browser type, and operating system.</p>
              <h3 className="mt-6 text-base font-semibold text-foreground">Community content</h3>
              <p className="mt-2">If you participate in community features, we collect posts, comments, likes, and other content you choose to share.</p>
            </section>

            <section id="how-we-use-your-information">
              <h2 className="text-xl font-semibold text-foreground">2. How we use your information</h2>
              <p className="mt-3">We use the information we collect to provide, maintain, and improve Habitforge. Specific uses include:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Creating and managing your account</li>
                <li>Processing habit completions and calculating streaks</li>
                <li>Providing progress analytics and visualizations</li>
                <li>Enabling community features such as challenges, feed posts, and leaderboards</li>
                <li>Sending transactional emails such as password resets and security alerts</li>
                <li>Responding to your comments, questions, and support requests</li>
                <li>Monitoring and analyzing usage patterns to improve the product</li>
                <li>Detecting, investigating, and preventing fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section id="how-we-share-your-information">
              <h2 className="text-xl font-semibold text-foreground">3. How we share your information</h2>
              <p className="mt-3">We do not sell your personal information. We may share your information in the following limited circumstances:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong>Service providers:</strong> We share data with vendors who perform services on our behalf, such as hosting, analytics, and customer support. These providers are bound by contractual obligations to protect your data.</li>
                <li><strong>Legal obligations:</strong> We may disclose information if required by law, regulation, or legal process, or to protect the rights, property, or safety of Habitforge, our users, or the public.</li>
                <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change.</li>
                <li><strong>Community features:</strong> Information you choose to share in community areas, such as your username, streak count, and posts, will be visible to other users.</li>
              </ul>
            </section>

            <section id="data-retention">
              <h2 className="text-xl font-semibold text-foreground">4. Data retention</h2>
              <p className="mt-3">We retain your account information for as long as your account is active or as needed to provide you with services. You may request deletion of your account and associated data at any time through the settings page or by contacting us. We will delete or anonymize your data within 30 days of your request, except where we are required to retain certain information by law.</p>
            </section>

            <section id="your-privacy-rights">
              <h2 className="text-xl font-semibold text-foreground">5. Your privacy rights</h2>
              <p className="mt-3">Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data.</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service.</li>
                <li><strong>Objection:</strong> Object to our processing of your personal data.</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent where we rely on consent to process your data.</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at <Link to="/contact" className="text-foreground underline underline-offset-4">/contact</Link> or hello@habitforge.app.</p>
            </section>

            <section id="security">
              <h2 className="text-xl font-semibold text-foreground">6. Security</h2>
              <p className="mt-3">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit and at rest, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100 percent secure, and we cannot guarantee absolute security.</p>
            </section>

            <section id="childrens-privacy">
              <h2 className="text-xl font-semibold text-foreground">7. Children's privacy</h2>
              <p className="mt-3">Habitforge is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
            </section>

            <section id="international-data-transfers">
              <h2 className="text-xl font-semibold text-foreground">8. International data transfers</h2>
              <p className="mt-3">Habitforge operates globally. Your information may be transferred to and processed in countries other than your own, including the United States. These countries may have data protection laws that differ from those in your jurisdiction. By using Habitforge, you consent to the transfer of your information to these countries.</p>
            </section>

            <section id="changes-to-this-policy">
              <h2 className="text-xl font-semibold text-foreground">9. Changes to this policy</h2>
              <p className="mt-3">We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email or through an in-app notification. The "Last updated" date at the top of this page indicates when this policy was most recently revised. Your continued use of Habitforge after changes become effective constitutes acceptance of the updated policy.</p>
            </section>

            <section id="contact-us">
              <h2 className="text-xl font-semibold text-foreground">10. Contact us</h2>
              <p className="mt-3">If you have questions about this Privacy Policy, please contact us:</p>
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
