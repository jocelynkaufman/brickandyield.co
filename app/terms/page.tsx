import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Brick and Yield LLC real estate technology platform.",
  openGraph: {
    title: "Terms of Service \u2014 Brick & Yield",
    description:
      "Terms of Service for Brick and Yield LLC real estate technology platform.",
    url: "https://brickandyield.co/terms",
  },
  alternates: { canonical: "https://brickandyield.co/terms" },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-dark-text/60 mb-10">
          Effective Date: April 2, 2026
        </p>

        <div className="space-y-8 text-dark-text/80 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website, platform, mobile application, or any services
              provided by Brick and Yield LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;), you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;)
              agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree
              to these Terms, do not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              2. Description of Service
            </h2>
            <p>
              Brick and Yield LLC provides a white-labeled real estate client portal platform
              licensed to real estate agents and brokers. The platform includes MLS-integrated
              property search, client management tools, investor analysis (including cash flow
              projections, cap rate calculations, and house hack scenarios), a branded mobile
              application, in-app messaging, mortgage calculators, seller net sheet tools, and
              transaction management capabilities. The platform is currently available in the
              Wasatch Front Regional MLS (WFRMLS) market in Utah.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              3. Eligibility
            </h2>
            <p>
              To use the Brick and Yield platform, you must be: (a) at least 18 years of age;
              (b) a licensed real estate agent or broker in good standing with your state
              licensing authority; and (c) capable of forming a binding contract under applicable
              law. By using our services, you represent and warrant that you meet all eligibility
              requirements.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              4. Account Registration
            </h2>
            <p>
              To access the platform, you must create an account and provide accurate, current,
              and complete information during the registration process. You are responsible for
              maintaining the confidentiality of your account credentials, including your password.
              You agree to notify us immediately of any unauthorized use of your account. You are
              responsible for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              5. Subscription and Payment
            </h2>
            <p>
              The Brick and Yield platform is offered on a monthly subscription basis. Subscription
              pricing is as published on the website and may vary based on the plan selected.
              Payment is processed through third-party payment processors, including Stripe.
              By subscribing, you authorize us to charge your designated payment method on a
              recurring monthly basis.
            </p>
            <p className="mt-3">
              You may cancel your subscription at any time. Upon cancellation, you will retain
              access to the platform through the end of your current billing period. No refunds
              will be issued for partial months. We reserve the right to change subscription
              pricing with 30 days&apos; notice to existing subscribers.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              6. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Use the platform for any unlawful purpose or in violation of any applicable local, state, or federal law</li>
              <li>Violate any MLS rules, IDX display requirements, or licensing regulations</li>
              <li>Share, transfer, or allow others to use your login credentials or account access</li>
              <li>Attempt to reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code of the platform</li>
              <li>Use the platform to send unsolicited commercial communications or spam</li>
              <li>Interfere with or disrupt the integrity or performance of the platform</li>
              <li>Upload or transmit any malicious code, viruses, or harmful content</li>
              <li>Use the platform in any manner that could damage, disable, or impair our servers or networks</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              7. SMS/Text Messaging Terms
            </h2>
            <p>
              By opting in to receive text messages from Brick and Yield LLC, you consent to
              receive recurring automated text messages regarding our platform, services, updates,
              and related communications at the mobile phone number you provide. Consent is not
              a condition of purchase.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Message frequency varies. Message and data rates may apply.</li>
              <li>
                You may opt out at any time by replying <strong>STOP</strong> to any message
                you receive from us. After you send STOP, you will receive a one-time
                confirmation message and no further text messages will be sent.
              </li>
              <li>
                For assistance, reply <strong>HELP</strong> to any message or contact us at{" "}
                <a href="mailto:jocelyn@brickandyield.co" className="text-oracle underline hover:text-warbler">
                  jocelyn@brickandyield.co
                </a>.
              </li>
              <li>
                Text messaging originator opt-in data and consent will not be shared with any
                third parties.
              </li>
              <li>
                Brick and Yield LLC will not sell, rent, or share your mobile phone number or
                SMS opt-in consent information with third parties or affiliates for marketing
                or promotional purposes.
              </li>
              <li>
                Carriers are not liable for delayed or undelivered messages.
              </li>
            </ul>
            <p className="mt-3">
              For questions about text messaging, contact{" "}
              <a href="mailto:jocelyn@brickandyield.co" className="text-oracle underline hover:text-warbler">
                jocelyn@brickandyield.co
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              8. Intellectual Property
            </h2>
            <p>
              All content, features, functionality, software, code, design elements, trademarks,
              and branding associated with the Brick and Yield platform are owned by Brick and
              Yield LLC and are protected by United States and international intellectual property
              laws. Users receive a limited, non-exclusive, non-transferable, revocable license to
              access and use the platform for its intended purpose during the term of their subscription.
            </p>
            <p className="mt-3">
              Users may display MLS data through the platform in accordance with applicable IDX
              rules and their MLS membership agreements. Users may not copy, reproduce, modify,
              distribute, or create derivative works from the platform or its content.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              9. MLS Data &amp; IDX Compliance
            </h2>
            <p>
              MLS data displayed through the platform is provided under Internet Data Exchange
              (IDX) license agreements with the applicable Multiple Listing Service(s). Users
              must comply with all applicable MLS rules, including but not limited to data
              attribution requirements, display rules, and usage restrictions. Brick and Yield LLC
              is not responsible for the accuracy, completeness, or timeliness of MLS data. MLS
              data is intended for personal, non-commercial use by consumers and may not be used
              for any purpose other than identifying potential properties consumers may be interested
              in purchasing.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              10. Privacy
            </h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy, available at{" "}
              <Link href="/privacy" className="text-oracle underline hover:text-warbler">
                brickandyield.co/privacy
              </Link>
              . By using our services, you consent to the practices described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              11. Termination
            </h2>
            <p>
              Either party may terminate the subscription at any time. You may cancel your
              subscription through your account settings or by contacting us. Brick and Yield LLC
              reserves the right to suspend or terminate your account immediately, without prior
              notice, if you violate these Terms, engage in fraudulent activity, or if we
              reasonably believe that your actions may cause legal liability for you, other users,
              or the Company. Upon termination, your right to use the platform ceases immediately,
              and you must discontinue all use of the service.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              12. Disclaimers
            </h2>
            <p>
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. BRICK AND YIELD LLC DOES NOT WARRANT THAT THE SERVICE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR SECURE. WE DO NOT GUARANTEE ANY SPECIFIC RESULTS
              FROM USE OF THE PLATFORM. THE PLATFORM IS A TECHNOLOGY TOOL AND IS NOT RESPONSIBLE
              FOR REAL ESTATE TRANSACTION OUTCOMES, INVESTMENT RETURNS, OR DECISIONS MADE BASED
              ON DATA DISPLAYED WITHIN THE PLATFORM.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              13. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BRICK AND YIELD LLC, ITS
              OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
              TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR
              RELATED TO YOUR USE OF THE SERVICE. BRICK AND YIELD LLC&apos;S TOTAL LIABILITY FOR
              ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AGGREGATE FEES PAID BY
              YOU TO BRICK AND YIELD LLC IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              14. SMS Delivery Disclaimer
            </h2>
            <p>
              Brick and Yield LLC is not responsible for any delays, failures in delivery, or any
              other issues related to the transmission or receipt of text messages. Delivery of
              text messages is subject to effective transmission by your mobile carrier and is not
              guaranteed. Your carrier may charge you additional fees for sending or receiving text
              messages depending on your wireless plan.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              15. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Utah, without regard to its conflict of law provisions. Any disputes arising
              under or in connection with these Terms shall be resolved in the state or federal
              courts located in Utah.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              16. Changes to Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms at any time. When we make
              material changes, we will notify users via email at the address associated with
              their account. Your continued use of the service after any changes constitutes
              acceptance of the updated Terms. We encourage you to review these Terms periodically.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              17. Contact
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-3">
              <strong>Brick and Yield LLC</strong>
              <br />
              Email:{" "}
              <a href="mailto:jocelyn@brickandyield.co" className="text-oracle underline hover:text-warbler">
                jocelyn@brickandyield.co
              </a>
              <br />
              Website:{" "}
              <Link href="/" className="text-oracle underline hover:text-warbler">
                brickandyield.co
              </Link>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
