import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Brick & Yield LLC. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy — Brick & Yield",
    description:
      "Privacy Policy for Brick & Yield LLC. Learn how we collect, use, and protect your information.",
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
          Version 1.0.0 &middot; Effective April 11, 2026
        </p>

        <div className="space-y-8 text-dark-text/80 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-dark-text mb-3">
              Brick &amp; Yield Privacy Policy
            </h2>
            <p className="text-dark-text/60 mb-1">Version 1.0.0</p>
            <p className="text-dark-text/60 mb-4">Effective Date: April 11, 2026</p>
            <p>
              Brick &amp; Yield LLC (&ldquo;Brick &amp; Yield,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;) is committed to protecting the privacy of our users. This Privacy
              Policy describes how we collect, use, disclose, and safeguard your information when you
              use the Brick &amp; Yield platform, including the applications at{" "}
              <a
                href="http://brickandyield.app"
                className="text-oracle underline hover:text-warbler"
                target="_blank"
                rel="noopener noreferrer"
              >
                brickandyield.app
              </a>{" "}
              and{" "}
              <a
                href="http://admin.brickandyield.app"
                className="text-oracle underline hover:text-warbler"
                target="_blank"
                rel="noopener noreferrer"
              >
                admin.brickandyield.app
              </a>{" "}
              (collectively, the &ldquo;Platform&rdquo;).
            </p>
            <p className="mt-3">
              By accessing or using the Platform, you consent to the practices described in this
              Privacy Policy. If you do not agree with this Privacy Policy, please do not use the
              Platform.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              1. Information We Collect
            </h2>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              1.1. Information You Provide
            </h3>
            <p>
              When you register for and use the Platform, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Account Information:</strong> Your name, email address, phone number, and
                profile photo.
              </li>
              <li>
                <strong>Professional Information:</strong> Your real estate license number, MLS User
                ID, MLS office ID, office name, brokerage affiliation, and website URL.
              </li>
              <li>
                <strong>Payment Information:</strong> If you subscribe to a paid plan, our
                third-party payment processor collects your billing information, including credit
                card number, billing address, and related payment details. Brick &amp; Yield does
                not store full credit card numbers on our servers.
              </li>
              <li>
                <strong>Client Relationship Data:</strong> Information you input about your clients,
                including client names, contact information, property preferences, notes, transaction
                details, and communication records.
              </li>
              <li>
                <strong>Communications:</strong> Any messages, feedback, or support requests you
                send to us.
              </li>
            </ul>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              1.2. Information Collected Automatically
            </h3>
            <p>
              When you access the Platform, we automatically collect certain technical information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Usage Data:</strong> Pages visited, features used, actions taken, date and
                time of access, and session duration.
              </li>
              <li>
                <strong>Device Information:</strong> Device type, operating system, browser type,
                screen resolution, and unique device identifiers.
              </li>
              <li>
                <strong>Log Data:</strong> IP address, access times, referring URLs, and error logs.
              </li>
              <li>
                <strong>Audit Trail Data:</strong> As required by applicable MLS rules for IDX
                compliance, we log access to MLS data, including who accessed what data and when.
                This audit trail is maintained for a minimum of three (3) years as required by our
                MLS agreements.
              </li>
            </ul>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              1.3. Information from Third Parties
            </h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Firebase Authentication:</strong> We use Firebase for account authentication
                and may receive authentication tokens, login timestamps, and account status
                information from Google Firebase.
              </li>
              <li>
                <strong>MLS Providers:</strong> We access MLS listing data through participating
                Multiple Listing Services via RESO Web API or other authorized data feeds. We may
                receive member status information related to your MLS membership.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Platform Operation:</strong> To provide, maintain, and improve the Platform
                and its features.
              </li>
              <li>
                <strong>Account Management:</strong> To create and manage your account, authenticate
                your identity, and process your subscription.
              </li>
              <li>
                <strong>MLS Data Access:</strong> To provide you with access to MLS property data in
                accordance with your membership status and our agreements with participating MLSes.
              </li>
              <li>
                <strong>Communication:</strong> To send you service-related notifications, including
                account alerts, subscription updates, and agent authorization status changes.
              </li>
              <li>
                <strong>Security and Compliance:</strong> To maintain audit trails, monitor for
                unauthorized access, detect and prevent fraud, and comply with applicable MLS IDX
                rules and law.
              </li>
              <li>
                <strong>Support:</strong> To respond to your inquiries and provide customer support.
              </li>
              <li>
                <strong>Analytics:</strong> To understand how users interact with the Platform and
                to improve our services. We do not sell your personal information for advertising
                purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              3. How We Share Your Information
            </h2>
            <p>
              We do not sell your personal information. We may share your information in the
              following circumstances:
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              3.1. With Your Organization
            </h3>
            <p>
              If you are affiliated with a brokerage organization on the Platform, your Principal
              Broker may have access to certain information about your account, including your name,
              email, MLS User ID, authorization status, and activity within the organization.
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              3.2. With Participating MLSes
            </h3>
            <p>
              As required by our IDX licensing agreements, we may provide participating MLSes with
              periodic reports containing member information, including names, MLS User IDs, license
              numbers, office information, roles, and contact details. Participating MLSes may also
              request audit trail data during compliance audits.
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              3.3. Service Providers
            </h3>
            <p>
              We share information with third-party service providers who assist us in operating the
              Platform, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Firebase (Google):</strong> Authentication and user management
              </li>
              <li>
                <strong>Supabase:</strong> Database hosting and management
              </li>
              <li>
                <strong>SendGrid (Twilio):</strong> Email delivery for notifications and
                communications
              </li>
              <li>
                <strong>Payment Processors:</strong> Subscription billing and payment processing
              </li>
            </ul>
            <p className="mt-3">
              These providers are contractually obligated to use your information only for the
              purposes of providing services to us and to maintain appropriate security measures.
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              3.4. Legal Requirements
            </h3>
            <p>
              We may disclose your information if required to do so by law, regulation, legal
              process, or governmental request, or if we believe disclosure is necessary to protect
              the rights, property, or safety of Brick &amp; Yield, our users, or the public.
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              3.5. Business Transfers
            </h3>
            <p>
              In the event of a merger, acquisition, reorganization, or sale of assets, your
              information may be transferred as part of that transaction. We will notify you of any
              such change in ownership or control.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              4. MLS Data Privacy
            </h2>
            <p>
              MLS Data accessed through the Platform is subject to the rules and regulations of the
              applicable MLS regarding data privacy and usage:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>MLS Data is provided for authorized real estate brokerage purposes only.</li>
              <li>
                We maintain access controls to ensure only active, authorized MLS members can access
                MLS Data.
              </li>
              <li>
                Audit trail logs of MLS Data access are maintained for a minimum of three (3) years
                as required by our MLS agreements.
              </li>
              <li>MLS Data remains the property of the applicable MLS and its participants.</li>
              <li>
                We do not use MLS Data for purposes unrelated to providing our Platform services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              5. Data Security
            </h2>
            <p>
              We implement commercially reasonable technical and organizational measures to protect
              your information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Encryption of data in transit using TLS/SSL.</li>
              <li>Encryption of sensitive data at rest.</li>
              <li>Role-based access controls limiting who can access your information.</li>
              <li>Audit trail logging of data access and administrative actions.</li>
              <li>Regular security reviews of our systems and practices.</li>
            </ul>
            <p className="mt-3">
              While we strive to protect your information, no method of electronic storage or
              internet transmission is completely secure. We cannot guarantee absolute security.
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              5.1. Breach Notification
            </h3>
            <p>
              In the event of a data breach that affects your personal information, we will notify
              you in accordance with applicable state and federal law. We will also notify any
              affected participating MLSes in accordance with our IDX licensing agreements.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your information for as long as your account is active or as needed to
              provide you with our services. Specific retention periods include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Account Data:</strong> Retained for the duration of your account plus one
                (1) year after termination.
              </li>
              <li>
                <strong>Audit Trail Data:</strong> Retained for a minimum of three (3) years, as
                required by our MLS agreements.
              </li>
              <li>
                <strong>Client Relationship Data:</strong> Retained for the duration of your
                account. Upon account termination, you may request an export of this data before it
                is deleted.
              </li>
              <li>
                <strong>Payment Records:</strong> Retained as required by applicable tax and
                financial regulations.
              </li>
              <li>
                <strong>ToS Acceptance Records:</strong> Retained indefinitely for compliance
                purposes.
              </li>
            </ul>
            <p className="mt-3">
              When data is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              7. Your Rights and Choices
            </h2>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              7.1. Access and Correction
            </h3>
            <p>
              You may access and update your account information at any time through the Platform.
              For professional information managed by your organization or the system (such as MLS
              User ID), contact{" "}
              <a
                href="mailto:support@brickandyield.co"
                className="text-oracle underline hover:text-warbler"
              >
                support@brickandyield.co
              </a>
              .
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              7.2. Data Export
            </h3>
            <p>
              You may request an export of your client relationship data by contacting{" "}
              <a
                href="mailto:support@brickandyield.co"
                className="text-oracle underline hover:text-warbler"
              >
                support@brickandyield.co
              </a>
              . MLS Data is not included in data exports.
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              7.3. Account Deletion
            </h3>
            <p>
              You may request deletion of your account by contacting{" "}
              <a
                href="mailto:support@brickandyield.co"
                className="text-oracle underline hover:text-warbler"
              >
                support@brickandyield.co
              </a>
              . Please note that certain information may be retained as required by law or for
              legitimate business purposes, including audit trail records required by our MLS
              agreements.
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              7.4. Communication Preferences
            </h3>
            <p>
              You may opt out of non-essential email communications by following the unsubscribe
              instructions in those emails. You cannot opt out of service-related notifications
              necessary for the operation of your account.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              The Platform is not intended for use by individuals under the age of 18. We do not
              knowingly collect personal information from children. If we become aware that we have
              collected information from a child under 18, we will take steps to delete that
              information.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              9. State-Specific Privacy Rights
            </h2>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              9.1. Utah Consumer Privacy Act (UCPA)
            </h3>
            <p>
              If you are a Utah resident, you may have additional rights under the Utah Consumer
              Privacy Act, including the right to access, delete, and obtain a portable copy of your
              personal data, and the right to opt out of the sale of personal data or targeted
              advertising. We do not sell your personal data.
            </p>
            <p className="mt-3">
              To exercise your rights under the UCPA, contact us at{" "}
              <a
                href="mailto:support@brickandyield.co"
                className="text-oracle underline hover:text-warbler"
              >
                support@brickandyield.co
              </a>
              . We will respond to your request within forty-five (45) days.
            </p>

            <h3 className="font-semibold text-dark-text mt-4 mb-2">
              9.2. California Residents
            </h3>
            <p>
              If you are a California resident, you may have additional rights under the California
              Consumer Privacy Act (CCPA). We do not sell personal information as defined by the
              CCPA. To exercise your rights under the CCPA, contact us at{" "}
              <a
                href="mailto:support@brickandyield.co"
                className="text-oracle underline hover:text-warbler"
              >
                support@brickandyield.co
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              10. Third-Party Links
            </h2>
            <p>
              The Platform may contain links to third-party websites or services. We are not
              responsible for the privacy practices of these third parties. We encourage you to
              review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              version number and effective date. Material changes will be communicated through the
              Platform or via email. Your continued use of the Platform after any changes
              constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              12. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices,
              contact us at:
            </p>
            <p className="mt-3">
              <strong>Brick &amp; Yield LLC</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:support@brickandyield.co"
                className="text-oracle underline hover:text-warbler"
              >
                support@brickandyield.co
              </a>
            </p>
          </section>

          <section>
            <p className="text-dark-text/60 italic">Last Updated: April 11, 2026</p>
          </section>
        </div>
      </article>
    </div>
  );
}
