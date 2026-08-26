import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-chrome";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Habitforge" },
      { name: "description", content: "How Habitforge protects your account, data, and infrastructure." },
      { property: "og:title", content: "Security — Habitforge" },
      { property: "og:description", content: "How Habitforge protects your account, data, and infrastructure." },
    ],
  }),
  component: SecurityPage,
});

const toc = [
  "Overview",
  "Data encryption",
  "Infrastructure security",
  "Application security",
  "Authentication and access control",
  "Vulnerability management",
  "Security monitoring",
  "Incident response",
  "Responsible disclosure",
  "Compliance",
  "User responsibilities",
  "Contact us",
];

function SecurityPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <span className="label-mono">Security</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">Security.</h1>
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
            <section id="overview">
              <h2 className="text-xl font-semibold text-foreground">1. Overview</h2>
              <p className="mt-3">Security is foundational to Habitforge. We design our systems, processes, and policies to protect your data and maintain trust. This page describes the technical, operational, and administrative measures we use to safeguard your information.</p>
            </section>

            <section id="data-encryption">
              <h2 className="text-xl font-semibold text-foreground">2. Data encryption</h2>
              <p className="mt-3">We encrypt data in transit and at rest using industry-standard protocols and algorithms.</p>
              <h3 className="mt-6 text-base font-semibold text-foreground">In transit</h3>
              <p className="mt-2">All communication between your browser and our servers uses TLS 1.2 or higher. We disable older, insecure protocols and cipher suites. Certificates are managed through trusted certificate authorities.</p>
              <h3 className="mt-6 text-base font-semibold text-foreground">At rest</h3>
              <p className="mt-2">Sensitive data stored in our databases and object storage is encrypted using AES-256 or equivalent. Encryption keys are managed separately from encrypted data and rotated according to our key-management policy.</p>
            </section>

            <section id="infrastructure-security">
              <h2 className="text-xl font-semibold text-foreground">3. Infrastructure security</h2>
              <p className="mt-3">Our infrastructure is hosted on modern cloud providers with strong security controls. We use network segmentation, firewalls, and private networking to limit exposure. Access to production systems is restricted to authorized personnel and requires multi-factor authentication.</p>
              <p className="mt-3">We apply operating-system and runtime security patches on a regular cadence. Infrastructure-as-code and immutable deployments reduce configuration drift and improve auditability.</p>
            </section>

            <section id="application-security">
              <h2 className="text-xl font-semibold text-foreground">4. Application security</h2>
              <p className="mt-3">We follow secure software development practices across the Habitforge codebase:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Input validation and output encoding to prevent injection attacks</li>
                <li>Authentication and authorization checks on every protected route and API endpoint</li>
                <li>Rate limiting and abuse detection to reduce automated attacks</li>
                <li>Dependency scanning and automated updates for known vulnerabilities</li>
                <li>Static analysis and code review before changes reach production</li>
                <li>Secrets managed through secure vaults and never stored in client-side bundles</li>
              </ul>
            </section>

            <section id="authentication-and-access-control">
              <h2 className="text-xl font-semibold text-foreground">5. Authentication and access control</h2>
              <p className="mt-3">Habitforge requires authentication to access personalized data. We enforce strong password policies and support secure authentication flows. Session tokens are stored securely and expire after a defined period of inactivity.</p>
              <p className="mt-3">Internally, access to production systems and sensitive data follows the principle of least privilege. Privileged actions are logged and reviewed.</p>
            </section>

            <section id="vulnerability-management">
              <h2 className="text-xl font-semibold text-foreground">6. Vulnerability management</h2>
              <p className="mt-3">We actively monitor for security vulnerabilities in our dependencies, containers, and infrastructure. Reported issues are triaged, prioritized, and remediated based on severity. Critical vulnerabilities are addressed as quickly as operational constraints allow.</p>
              <p className="mt-3">We perform regular security assessments and encourage external security research under our responsible disclosure program.</p>
            </section>

            <section id="security-monitoring">
              <h2 className="text-xl font-semibold text-foreground">7. Security monitoring</h2>
              <p className="mt-3">We maintain logging and monitoring across application, infrastructure, and network layers. Alerts are configured for anomalous activity, failed authentication patterns, and other indicators of compromise. Logs are retained for a limited period to support incident investigation and operational debugging.</p>
            </section>

            <section id="incident-response">
              <h2 className="text-xl font-semibold text-foreground">8. Incident response</h2>
              <p className="mt-3">We maintain an incident response plan that defines roles, escalation paths, and communication procedures. In the event of a security incident involving personal data, we will investigate promptly, contain the impact, and notify affected users and regulators as required by applicable law.</p>
              <p className="mt-3">Notifications will include the nature of the incident, the types of data affected, and steps users can take to protect themselves, where appropriate.</p>
            </section>

            <section id="responsible-disclosure">
              <h2 className="text-xl font-semibold text-foreground">9. Responsible disclosure</h2>
              <p className="mt-3">We welcome reports from security researchers. If you discover a vulnerability, please report it privately rather than through public channels.</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Email: <Link to="/contact" className="text-foreground underline underline-offset-4">hello@habitforge.app</Link></li>
                <li>Subject line: <span className="font-mono text-xs">Security Vulnerability Report</span></li>
                <li>Include a detailed description, steps to reproduce, and potential impact</li>
              </ul>
              <p className="mt-3">We will acknowledge receipt within 3 business days and provide a timeline for remediation. We ask that you do not access or modify data beyond what is necessary to demonstrate the issue. We will not pursue legal action against researchers who follow this policy.</p>
            </section>

            <section id="compliance">
              <h2 className="text-xl font-semibold text-foreground">10. Compliance</h2>
              <p className="mt-3">Habitforge is committed to complying with applicable data protection and privacy laws, including the GDPR and CCPA where relevant. Our security and privacy practices are designed to meet these obligations, but specific rights and processes may vary depending on your jurisdiction.</p>
              <p className="mt-3">We may obtain third-party security audits or certifications as the service grows. Any certifications will be listed here.</p>
            </section>

            <section id="user-responsibilities">
              <h2 className="text-xl font-semibold text-foreground">11. User responsibilities</h2>
              <p className="mt-3">Security is a shared responsibility. You can help protect your account by:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Using a strong, unique password</li>
                <li>Not sharing your credentials with anyone</li>
                <li>Enabling any available multi-factor authentication</li>
                <li>Keeping your devices and browsers up to date</li>
                <li>Logging out of shared or public devices</li>
                <li>Reporting suspicious activity to <Link to="/contact" className="text-foreground underline underline-offset-4">hello@habitforge.app</Link></li>
              </ul>
            </section>

            <section id="contact-us">
              <h2 className="text-xl font-semibold text-foreground">12. Contact us</h2>
              <p className="mt-3">If you have questions about Habitforge security, please contact us:</p>
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
