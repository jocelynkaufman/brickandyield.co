import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Brick and Yield LLC. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy \u2014 Brick & Yield",
    description:
      "Privacy Policy for Brick and Yield LLC. Learn how we collect, use, and protect your information.",
    url: "https://brickandyield.co/privacy",
  },
  alternates: { canonical: "https://brickandyield.co/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 bg-off-white">
      <article className="mx-auto max-w-3xl px-6 lg:px-8 prose-custom">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-oracle hover:text-warbler transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text mb-2">
          Privacy Policy
        </h1>
        <p className="text-dark-text/60 mb-10">
          Effective Date: April 2, 2026
        </p>

        <div className="space-y-8 text-dark-text/80 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              1. Introduction
            </h2>
            <p>
              Brick and Yield LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              operates a real estate technology platform that provides white-labeled client portal
              services to real estate agents and brokers. This Privacy Policy explains how we
              collect, use, disclose, and protect information from visitors to our website
              (brickandyield.co), users of our platform, and individuals who interact with our
              waitlist, forms, and communications.
            </p>
            <p className="mt-3">
              By accessing or using our website and services, you agree to the collection and use
              of information in accordance with this Privacy Policy. If you do not agree with our
              practices, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              2. Information We Collect
            </h2>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              Information You Provide
            </h3>
            <p>
              When you sign up for our waitlist, create an account, or interact with our forms,
              we may collect:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Brokerage name and office information</li>
              <li>Real estate license number and state of licensure</li>
              <li>MLS affiliation and membership information</li>
              <li>Payment information (processed securely through Stripe; we do not store full payment card details)</li>
            </ul>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              Information Collected Automatically
            </h3>
            <p>
              When you visit our website or use our platform, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited, time spent on pages, and navigation paths</li>
              <li>Referring website or source</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              Information from Third Parties
            </h3>
            <p>
              We receive property listing data from Multiple Listing Services (MLS) under IDX
              license agreements. This data consists of property information and does not include
              personal consumer data.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide, operate, maintain, and improve our platform and services</li>
              <li>Process your registration, waitlist submissions, and account setup</li>
              <li>Communicate with you about your account, platform updates, new features, and service-related matters</li>
              <li>Send transactional messages, including account setup notifications, listing alerts, and transaction updates</li>
              <li>Send marketing and promotional communications (only with your consent, and only from Brick and Yield LLC)</li>
              <li>Process payments and manage subscriptions</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Comply with legal obligations and enforce our Terms of Service</li>
              <li>Protect against fraud, unauthorized access, and other security concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              4. SMS/Text Messaging Privacy
            </h2>
            <p>
              If you opt in to receive text messages from Brick and Yield LLC, we collect your
              mobile phone number and SMS consent status. The following terms apply to our text
              messaging program:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                We use your phone number solely to send you messages related to our platform
                and services, as described at the time of opt-in.
              </li>
              <li>
                <strong>
                  We will not sell, rent, loan, trade, lease, or otherwise transfer for profit
                  any phone numbers or personal information collected through our SMS program
                  to any unaffiliated third party.
                </strong>
              </li>
              <li>
                <strong>
                  Text messaging originator opt-in data and consent will not be shared with
                  any third parties.
                </strong>
              </li>
              <li>
                You may opt out of text messages at any time by replying <strong>STOP</strong> to
                any message you receive from us. After opting out, you will receive a one-time
                confirmation message and no further text messages will be sent.
              </li>
              <li>
                For help, reply <strong>HELP</strong> or contact us at{" "}
                <a href="mailto:jocelyn@brickandyield.co" className="text-oracle underline hover:text-warbler">
                  jocelyn@brickandyield.co
                </a>.
              </li>
              <li>Message frequency varies. Message and data rates may apply.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              5. How We Share Your Information
            </h2>
            <p>
              We do not sell your personal information. We may share information in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Service Providers:</strong> We share information with third-party service
                providers who help us operate our platform, including cloud infrastructure
                (Google/Firebase, Supabase), email and messaging services (SendGrid/Twilio),
                payment processing (Stripe), and CRM services (GoHighLevel). These providers
                are contractually obligated to protect your information and use it only for the
                purposes we specify.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required
                to do so by law, in response to a subpoena, court order, or other legal process,
                or to protect the rights, property, or safety of Brick and Yield LLC, our users,
                or the public.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or
                sale of all or a portion of our assets, your information may be transferred as
                part of that transaction. We will notify you of any such change in ownership or
                control.
              </li>
            </ul>
            <p className="mt-3">
              <strong>
                We do not share your mobile phone number or SMS opt-in data with third parties
                for marketing purposes.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              6. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to analyze website traffic, improve
              site functionality, and understand how users interact with our website. Cookies are
              small text files stored on your device by your web browser.
            </p>
            <p className="mt-3">
              We may use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="mt-3">
              You can manage cookie preferences through your browser settings. Disabling cookies
              may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              7. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to provide our services,
              fulfill the purposes described in this Privacy Policy, comply with legal obligations,
              resolve disputes, and enforce our agreements. When your information is no longer
              needed, we will securely delete or anonymize it.
            </p>
            <p className="mt-3">
              You may request deletion of your personal data at any time by contacting us at{" "}
              <a href="mailto:privacy@brickandyield.co" className="text-oracle underline hover:text-warbler">
                privacy@brickandyield.co
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              8. Data Security
            </h2>
            <p>
              We implement commercially reasonable technical, administrative, and organizational
              measures to protect your personal information against unauthorized access, alteration,
              disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>Secure cloud infrastructure hosted on Google Cloud Platform and Supabase</li>
              <li>Access controls and authentication for platform administration</li>
              <li>Regular security reviews and updates</li>
            </ul>
            <p className="mt-3">
              While we strive to protect your information, no method of transmission over the
              Internet or electronic storage is completely secure. We cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              9. Your Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal
              information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
              <li><strong>Data portability:</strong> Request a copy of your data in a portable format</li>
            </ul>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              Utah Consumer Privacy Act (UCPA)
            </h3>
            <p>
              If you are a Utah resident, you have the right to: access your personal data,
              delete your personal data, obtain a copy of your data in a portable format, and
              opt out of the processing of your personal data for targeted advertising or sale
              (we do not sell personal data).
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              California Consumer Privacy Act (CCPA)
            </h3>
            <p>
              If you are a California resident, you have the right to: know what personal
              information we collect, use, and disclose; request deletion of your personal
              information; and opt out of the sale of personal information. We do not sell
              personal information as defined by the CCPA.
            </p>

            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@brickandyield.co" className="text-oracle underline hover:text-warbler">
                privacy@brickandyield.co
              </a>.
              We will respond to your request within the timeframe required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not
              knowingly collect personal information from children. If we become aware that we
              have collected personal information from a child under 18, we will take steps to
              delete that information promptly. If you believe a child has provided us with
              personal information, please contact us at{" "}
              <a href="mailto:privacy@brickandyield.co" className="text-oracle underline hover:text-warbler">
                privacy@brickandyield.co
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              11. Third-Party Services
            </h2>
            <p>
              We use the following third-party services to operate our platform. Each service has
              its own privacy policy governing how it handles data:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Google/Firebase</strong> — Authentication, hosting, and analytics.{" "}
                <a href="https://policies.google.com/privacy" className="text-oracle underline hover:text-warbler" target="_blank" rel="noopener noreferrer">
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <strong>Supabase</strong> — Database and backend services.{" "}
                <a href="https://supabase.com/privacy" className="text-oracle underline hover:text-warbler" target="_blank" rel="noopener noreferrer">
                  Supabase Privacy Policy
                </a>
              </li>
              <li>
                <strong>SendGrid/Twilio</strong> — Email and text messaging services.{" "}
                <a href="https://www.twilio.com/legal/privacy" className="text-oracle underline hover:text-warbler" target="_blank" rel="noopener noreferrer">
                  Twilio Privacy Policy
                </a>
              </li>
              <li>
                <strong>Stripe</strong> — Payment processing.{" "}
                <a href="https://stripe.com/privacy" className="text-oracle underline hover:text-warbler" target="_blank" rel="noopener noreferrer">
                  Stripe Privacy Policy
                </a>
              </li>
              <li>
                <strong>GoHighLevel</strong> — CRM and form services.{" "}
                <a href="https://www.gohighlevel.com/privacy-policy" className="text-oracle underline hover:text-warbler" target="_blank" rel="noopener noreferrer">
                  GoHighLevel Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technology, legal requirements, or other factors. When we make material
              changes, we will notify users via email or by posting a prominent notice on our
              website. Your continued use of our services after any changes constitutes acceptance
              of the updated Privacy Policy. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              13. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <p className="mt-3">
              <strong>Brick and Yield LLC</strong>
              <br />
              Privacy inquiries:{" "}
              <a href="mailto:privacy@brickandyield.co" className="text-oracle underline hover:text-warbler">
                privacy@brickandyield.co
              </a>
              <br />
              General inquiries:{" "}
              <a href="mailto:jocelyn@brickandyield.co" className="text-oracle underline hover:text-warbler">
                jocelyn@brickandyield.co
              </a>
              <br />
              Website:{" "}
              <Link href="/" className="text-oracle underline hover:text-warbler">
                brickandyield.co
              </Link>
              <br />
              Location: Utah, United States
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
