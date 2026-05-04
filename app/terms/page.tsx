import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Platform Terms of Service for Brick & Yield LLC real estate technology platform.",
  openGraph: {
    title: "Terms of Service — Brick & Yield",
    description:
      "Platform Terms of Service for Brick & Yield LLC real estate technology platform.",
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
          Brick &amp; Yield Platform Terms of Service
        </h1>
        <p className="text-dark-text/60 mb-10">
          Version 1.1.0 &middot; Effective April 28, 2026
        </p>

        <div className="space-y-8 text-dark-text/80 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-dark-text mb-3">
              Brick &amp; Yield Platform Terms of Service
            </h2>
            <p className="text-dark-text/60 mb-1">Version 1.1.0</p>
            <p className="text-dark-text/60 mb-4">Effective Date: April 28, 2026</p>
            <p>
              This Platform Terms of Service (&ldquo;Agreement&rdquo;) is a legal contract between
              you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Brick &amp;
              Yield LLC (&ldquo;Brick &amp; Yield,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;). By clicking &ldquo;I Accept&rdquo; or by accessing or using the
              Brick &amp; Yield platform, you agree to be bound by the terms and conditions of this
              Agreement.
            </p>
            <p className="mt-3">
              If you do not agree to these terms, you may not access or use the platform.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              1. Definitions
            </h2>
            <p>
              <strong>&ldquo;Platform&rdquo;</strong> means the Brick &amp; Yield software
              application, website, and related services accessible at{" "}
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
              </a>
              , including iOS and Android mobile applications operated by Brick &amp; Yield.
            </p>
            <p className="mt-3">
              <strong>&ldquo;MLS Data&rdquo;</strong> means real estate listing data, property
              information, media, and related content provided through a Multiple Listing Service
              (&ldquo;MLS&rdquo;) via data feed, API, or other authorized means.
            </p>
            <p className="mt-3">
              <strong>&ldquo;IDX&rdquo;</strong> means Internet Data Exchange, the system and
              policies governing the display of MLS listing data on internet-based platforms.
            </p>
            <p className="mt-3">
              <strong>&ldquo;IDX Data&rdquo;</strong> means MLS Data limited to the data fields
              approved by the applicable MLS for IDX display, as those fields may be updated by the
              applicable MLS from time to time.
            </p>
            <p className="mt-3">
              <strong>&ldquo;Organization&rdquo;</strong> means the brokerage entity registered on
              the Platform with which you are associated.
            </p>
            <p className="mt-3">
              <strong>&ldquo;Principal Broker&rdquo;</strong> means the broker designated as the
              managing broker for an Organization on the Platform. The Principal Broker has
              elevated permissions, including the ability to approve or deny agent access.
            </p>
            <p className="mt-3">
              <strong>&ldquo;Client Report&rdquo;</strong> means a report Brick &amp; Yield is
              required to submit periodically to one or more applicable MLSes identifying agents,
              brokers, and end users of the Platform, pursuant to Brick &amp; Yield&rsquo;s vendor
              or licensing agreements with such MLSes.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              2. Eligibility and Authorization
            </h2>
            <p>
              <strong>2.1. MLS Membership Required.</strong> You must be an active member in good
              standing of a Multiple Listing Service participating with Brick &amp; Yield to access
              MLS Data through the Platform. Your access to MLS Data is contingent upon your
              continued active membership status with the applicable MLS. If your MLS membership
              lapses, is suspended, or is terminated, your access to MLS Data through the Platform
              will be automatically revoked.
            </p>
            <p className="mt-3">
              <strong>2.2. Valid Real Estate License.</strong> You represent and warrant that you
              hold a valid, active real estate license issued by the appropriate state regulatory
              authority for your jurisdiction. You agree to promptly notify Brick &amp; Yield if
              your license status changes.
            </p>
            <p className="mt-3">
              <strong>2.3. Broker Authorization.</strong> If you are an agent, your access to the
              Platform may require authorization from your Principal Broker. Your Principal Broker
              may revoke this authorization at any time, which may result in the suspension of your
              Platform access.
            </p>
            <p className="mt-3">
              <strong>2.4. Accurate Information.</strong> You agree to provide accurate, current,
              and complete information during registration, including your legal name, MLS User ID,
              license number, office affiliation, and contact information. You agree to update this
              information promptly if it changes.
            </p>
            <p className="mt-3">
              <strong>2.5. Brokerage Affiliation Verification.</strong> You represent and warrant
              that the brokerage affiliation, license, MLS user ID, and MLS membership information
              you provide is accurate as recorded with the applicable MLS and any other applicable
              regulatory body. You authorize Brick &amp; Yield to verify this information against
              the applicable MLS roster and other authoritative sources at any time, and to suspend
              or revoke your Platform access if any of that information becomes inaccurate or out
              of date.
            </p>
            <p className="mt-3">
              <strong>2.6. Broker Notification.</strong> If you are an agent, you acknowledge and
              consent to Brick &amp; Yield notifying your Principal Broker by email of your
              registration on the Platform, including your name and account status, and providing
              your Principal Broker with the ability to revoke your authorization to access the
              Platform. This notification serves as part of Brick &amp; Yield&rsquo;s compliance
              with applicable MLS rules and your Principal Broker&rsquo;s right of control over
              your IDX activity.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              3. Account and Security
            </h2>
            <p>
              <strong>3.1. Account Responsibility.</strong> You are solely responsible for
              maintaining the confidentiality of your account credentials and for all activity that
              occurs under your account. You agree to notify Brick &amp; Yield immediately of any
              unauthorized use of your account.
            </p>
            <p className="mt-3">
              <strong>3.2. One Account Per Person.</strong> Each user may maintain only one account
              on the Platform. Sharing account credentials with any other person is prohibited.
            </p>
            <p className="mt-3">
              <strong>3.3. Access Controls.</strong> Brick &amp; Yield maintains access control
              systems that may restrict your use of the Platform based on your MLS membership
              status, broker authorization status, and subscription status. You agree not to
              circumvent, disable, or interfere with these access controls.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              4. Subscription Plans and Payment
            </h2>
            <p>
              <strong>4.1. Subscription Plans.</strong> The Platform offers both free and paid
              subscription plans. Free plans provide limited, read-only access to certain Platform
              features. Paid plans provide full access to Platform features, including write and
              management capabilities. The specific features available under each plan are
              described on the Platform.
            </p>
            <p className="mt-3">
              <strong>4.2. Billing.</strong> Paid subscription fees are billed on a recurring basis
              (monthly or annually, as selected). You authorize Brick &amp; Yield to charge your
              designated payment method for all applicable fees.
            </p>
            <p className="mt-3">
              <strong>4.3. Plan Changes.</strong> You may upgrade or downgrade your subscription
              plan at any time. If your paid subscription lapses or payment fails, your access will
              revert to the free plan or be suspended, depending on your role and the features
              affected.
            </p>
            <p className="mt-3">
              <strong>4.4. No Refunds.</strong> Subscription fees are non-refundable except as
              required by applicable law or as expressly stated in our refund policy.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              5. Principal Broker Responsibilities
            </h2>
            <p>
              <strong>5.1. Agent Authorization.</strong> If you are designated as the Principal
              Broker for your Organization, you have the ability to approve or deny agent access
              requests through the Platform. Agents may not access the Platform on behalf of your
              Organization until you have approved their access.
            </p>
            <p className="mt-3">
              <strong>5.2. Organization Management.</strong> As Principal Broker, you may manage
              your Organization&rsquo;s settings, including organization name and branding,
              through the Platform.
            </p>
            <p className="mt-3">
              <strong>5.3. Agent Oversight.</strong> You acknowledge that, as a licensed broker,
              you have supervisory responsibilities over the agents affiliated with your
              Organization under applicable state real estate licensing law. Your approval of an
              agent&rsquo;s access to the Platform does not transfer your supervisory obligations
              to Brick &amp; Yield.
            </p>
            <p className="mt-3">
              <strong>5.4. Revocation of Access.</strong> You may revoke an agent&rsquo;s access to
              the Platform at any time by toggling their authorization status in the Platform or by
              sending written notice (including email to{" "}
              <a
                href="mailto:admin@brickandyield.co"
                className="text-oracle underline hover:text-warbler"
              >
                admin@brickandyield.co
              </a>
              ). Revocation takes effect within one (1) business day of receipt.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              6. MLS Data Usage and IDX Compliance
            </h2>
            <p>
              <strong>6.1. Authorized Use.</strong> You may use MLS Data accessed through the
              Platform solely for the purpose of conducting licensed real estate activities on
              behalf of your clients. You may not use MLS Data for any purpose unrelated to real
              estate brokerage services.
            </p>
            <p className="mt-3">
              <strong>6.2. MLS Rules and Regulations.</strong> You acknowledge that your use of MLS
              Data through the Platform is subject to the rules, regulations, and policies of the
              applicable MLS through which you access data. You agree to comply with all applicable
              MLS and IDX rules, including those governing data display, attribution, and consumer
              disclosure.
            </p>
            <p className="mt-3">
              <strong>6.3. Prohibited Uses of MLS Data.</strong> You shall not:
            </p>
            <ul className="list-none pl-6 mt-2 space-y-2">
              <li>
                (a) Copy, reproduce, redistribute, retransmit, or publish any MLS Data obtained
                through the Platform, except as necessary to serve your clients in the ordinary
                course of real estate brokerage;
              </li>
              <li>
                (b) Use MLS Data to compile, directly or indirectly, a database or collection of
                listings or listing information, other than in the normal course of business;
              </li>
              <li>
                (c) Display MLS Data on any website, application, or platform other than the Brick
                &amp; Yield Platform without prior written authorization from Brick &amp; Yield and
                the applicable MLS;
              </li>
              <li>
                (d) Scrape, harvest, or use automated means to extract MLS Data from the Platform;
              </li>
              <li>
                (e) Share MLS Data access credentials or provide access to MLS Data to any
                unlicensed individual, except as permitted by IDX rules for consumer display;
              </li>
              <li>
                (f) Use MLS Data in any manner that violates applicable federal, state, or local
                laws, including the Fair Housing Act.
              </li>
            </ul>
            <p className="mt-3">
              <strong>6.4. Data Accuracy.</strong> While Brick &amp; Yield makes reasonable efforts
              to ensure the accuracy of MLS Data, you acknowledge that MLS Data is provided by
              third parties and may contain errors or omissions. You shall not represent MLS Data
              as guaranteed or warranted as to its accuracy.
            </p>
            <p className="mt-3">
              <strong>6.5. IDX Scope; No VOW Data.</strong> The MLS Data made available through
              the Platform is limited to data fields approved by the applicable MLS for IDX display
              (&ldquo;IDX Data&rdquo;). The Platform does not function as a Virtual Office Website
              (VOW), and does not provide VOW-tier data, sold listing prices (where designated as
              confidential by the applicable MLS), or other restricted data fields. You acknowledge
              that the Platform&rsquo;s data scope is intentionally limited to IDX-approved fields,
              and you shall not request, attempt to extract, or rely upon the Platform for data
              outside that scope.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              7. Client Data and Privacy
            </h2>
            <p>
              <strong>7.1. Client and Organization Data.</strong> In the course of using the
              Platform, you may collect and manage information about your clients and your
              organization, including contact information, property preferences, transaction
              details, and organizational settings. You are responsible for ensuring that your
              collection and use of this information complies with applicable privacy laws.
            </p>
            <p className="mt-3">
              <strong>7.2. Data Ownership.</strong> You retain ownership of your client
              relationship data and organizational data that you input into the Platform. MLS Data
              remains the property of the applicable MLS and its participants.
            </p>
            <p className="mt-3">
              <strong>7.3. Data Portability.</strong> Upon termination of your account, you may
              request an export of your client relationship and organizational data. MLS Data will
              not be included in any data export.
            </p>
            <p className="mt-3">
              <strong>7.4. Privacy Policy.</strong> Your use of the Platform is also governed by
              the Brick &amp; Yield Privacy Policy, which is incorporated herein by reference.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              8. Acceptable Use
            </h2>
            <p>
              <strong>8.1.</strong> You agree not to:
            </p>
            <ul className="list-none pl-6 mt-2 space-y-2">
              <li>
                (a) Use the Platform for any unlawful purpose or in violation of any applicable
                law or regulation;
              </li>
              <li>(b) Interfere with or disrupt the integrity or performance of the Platform;</li>
              <li>
                (c) Attempt to gain unauthorized access to any portion of the Platform or its
                related systems;
              </li>
              <li>
                (d) Use the Platform to transmit any viruses, malware, or other harmful code;
              </li>
              <li>(e) Reverse engineer, decompile, or disassemble any portion of the Platform;</li>
              <li>
                (f) Use the Platform in any manner that could damage, disable, or impair the
                Platform or interfere with any other party&rsquo;s use of the Platform;
              </li>
              <li>
                (g) Use the Platform to engage in any form of discrimination prohibited by the Fair
                Housing Act or applicable state and local fair housing laws.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              9. Intellectual Property
            </h2>
            <p>
              <strong>9.1. Platform Ownership.</strong> The Platform, including its design,
              features, functionality, and underlying technology, is the property of Brick &amp;
              Yield and is protected by intellectual property laws. This Agreement does not grant
              you any ownership rights in the Platform.
            </p>
            <p className="mt-3">
              <strong>9.2. Limited License.</strong> Subject to your compliance with this
              Agreement, Brick &amp; Yield grants you a limited, non-exclusive, non-transferable,
              revocable license to access and use the Platform for its intended purpose.
            </p>
            <p className="mt-3">
              <strong>9.3. Feedback.</strong> If you provide suggestions, ideas, or feedback
              regarding the Platform, you grant Brick &amp; Yield the right to use such feedback
              without restriction or compensation.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              10. Disclaimers
            </h2>
            <p>
              <strong>10.1. &ldquo;As Is&rdquo; Basis.</strong> THE PLATFORM IS PROVIDED ON AN
              &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. BRICK &amp; YIELD DISCLAIMS
              ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-3">
              <strong>10.2. No Guarantee of Accuracy.</strong> BRICK &amp; YIELD DOES NOT WARRANT
              THAT MLS DATA IS ACCURATE, COMPLETE, OR CURRENT. YOU ARE RESPONSIBLE FOR
              INDEPENDENTLY VERIFYING ANY INFORMATION BEFORE RELYING ON IT IN A REAL ESTATE
              TRANSACTION.
            </p>
            <p className="mt-3">
              <strong>10.3. Service Availability.</strong> BRICK &amp; YIELD DOES NOT GUARANTEE
              UNINTERRUPTED OR ERROR-FREE ACCESS TO THE PLATFORM. THE PLATFORM MAY BE UNAVAILABLE
              DUE TO MAINTENANCE, UPDATES, OR CIRCUMSTANCES BEYOND OUR CONTROL.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              11. Limitation of Liability
            </h2>
            <p>
              <strong>11.1.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, BRICK &amp; YIELD
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM, INCLUDING BUT NOT
              LIMITED TO LOSS OF PROFITS, LOSS OF DATA, OR LOSS OF BUSINESS OPPORTUNITIES.
            </p>
            <p className="mt-3">
              <strong>11.2.</strong> BRICK &amp; YIELD&rsquo;S TOTAL AGGREGATE LIABILITY ARISING
              OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES PAID BY
              YOU TO BRICK &amp; YIELD IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO
              THE CLAIM. IF YOU ARE ON A FREE PLAN, THIS AMOUNT SHALL NOT EXCEED ONE HUNDRED
              DOLLARS ($100).
            </p>
            <p className="mt-3">
              <strong>11.3. MLS Fines and Penalties.</strong> You acknowledge that violations of
              MLS rules and regulations may result in fines, penalties, or suspension imposed by
              the applicable MLS. Brick &amp; Yield shall not be liable for any fines, penalties,
              or sanctions imposed on you by any MLS or regulatory body as a result of your actions
              or omissions.
            </p>
            <p className="mt-3">
              <strong>11.4. Acknowledgment of Risk.</strong> You acknowledge that real estate
              brokerage involves substantial risk and significant potential liability, and that
              Brick &amp; Yield&rsquo;s role is limited to providing the Platform. You assume sole
              responsibility for your real estate activities, including verification of MLS Data
              accuracy, compliance with all applicable laws, and the supervision (in the case of a
              Principal Broker) of your affiliated agents.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              12. Indemnification
            </h2>
            <p>
              <strong>12.1.</strong> You agree to indemnify, defend, and hold harmless Brick &amp;
              Yield, its officers, directors, employees, and agents from and against any claims,
              damages, losses, liabilities, costs, and expenses (including reasonable
              attorneys&rsquo; fees) arising out of or related to:
            </p>
            <ul className="list-none pl-6 mt-2 space-y-2">
              <li>(a) Your use of the Platform;</li>
              <li>(b) Your violation of this Agreement;</li>
              <li>
                (c) Your violation of any applicable law, rule, or regulation, including MLS rules
                and fair housing laws;
              </li>
              <li>
                (d) Your negligence or willful misconduct in connection with your real estate
                activities;
              </li>
              <li>
                (e) Any dispute between you and your clients, agents, or brokerage arising from use
                of the Platform.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              13. Termination
            </h2>
            <p>
              <strong>13.1. By You.</strong> You may terminate this Agreement at any time by
              canceling your subscription (if applicable) and ceasing use of the Platform.
            </p>
            <p className="mt-3">
              <strong>13.2. By Brick &amp; Yield.</strong> Brick &amp; Yield may suspend or
              terminate your access to the Platform at any time, with or without cause, including
              but not limited to:
            </p>
            <ul className="list-none pl-6 mt-2 space-y-2">
              <li>(a) Violation of this Agreement;</li>
              <li>(b) Loss of active MLS membership;</li>
              <li>(c) Loss of active real estate license;</li>
              <li>
                (d) Revocation of broker authorization (for agents), including by email to{" "}
                <a
                  href="mailto:admin@brickandyield.co"
                  className="text-oracle underline hover:text-warbler"
                >
                  admin@brickandyield.co
                </a>{" "}
                or any other written notice from a Principal Broker;
              </li>
              <li>(e) Non-payment of subscription fees (for paid plan users);</li>
              <li>
                (f) Conduct that Brick &amp; Yield reasonably believes may expose the Platform, its
                users, or MLS Data to risk.
              </li>
            </ul>
            <p className="mt-3">
              <strong>13.3. Effect on Organization.</strong> If your access is terminated and you
              are the Principal Broker for an Organization, agents affiliated with your
              Organization may also lose access to the Platform until a new Principal Broker is
              designated or the issue is resolved.
            </p>
            <p className="mt-3">
              <strong>13.4. Survival.</strong> Upon termination, your right to access the Platform
              ceases immediately. You must cease all use of MLS Data obtained through the Platform.
              Sections 7 (Client Data and Privacy), 9 (Intellectual Property), 10 (Disclaimers), 11
              (Limitation of Liability), 12 (Indemnification), and this Section 13.4 shall survive
              termination.
            </p>
            <p className="mt-3">
              <strong>13.5. Automatic Suspension or Revocation.</strong> In addition to the
              foregoing, your access to the Platform will be automatically suspended or revoked,
              without further notice, upon any of the following events:
            </p>
            <ul className="list-none pl-6 mt-2 space-y-2">
              <li>
                (a) Termination, suspension, or lapse of your active membership or subscriber
                status with the applicable MLS;
              </li>
              <li>(b) Termination, suspension, or lapse of your real estate license;</li>
              <li>
                (c) A change in your brokerage affiliation as reflected in the applicable MLS
                roster, until your access is re-verified under your new affiliation;
              </li>
              <li>
                (d) For agents, revocation of broker authorization by your Principal Broker,
                whether communicated by email, in-platform action, or any other written notice; and
              </li>
              <li>
                (e) Conduct that Brick &amp; Yield reasonably believes may expose the Platform, its
                users, or MLS Data to risk.
              </li>
            </ul>
            <p className="mt-3">
              You agree that Brick &amp; Yield is not liable to you for any suspension or
              revocation pursuant to this Section 13.5.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              14. Security and Breach Notification
            </h2>
            <p>
              <strong>14.1. Security Practices.</strong> Brick &amp; Yield implements commercially
              reasonable security measures to protect the Platform and MLS Data. You agree to
              cooperate with Brick &amp; Yield in maintaining platform security, including by
              promptly reporting any suspected security incidents.
            </p>
            <p className="mt-3">
              <strong>14.2. Breach Notification.</strong> In the event of a data breach affecting
              your information or MLS Data, Brick &amp; Yield will notify you and the applicable
              MLS in accordance with applicable law and our MLS agreements.
            </p>
            <p className="mt-3">
              <strong>14.3. Your Obligations.</strong> You agree to maintain reasonable security
              practices in connection with your use of the Platform, including using strong
              passwords, keeping your credentials confidential, and accessing the Platform only
              from secure devices and networks.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              15. Audit and Compliance
            </h2>
            <p>
              <strong>15.1. Audit Rights.</strong> You acknowledge that participating MLSes have
              the right to audit IDX participants and their use of MLS Data. Brick &amp; Yield
              maintains audit trail logs as required by applicable MLS rules. You agree to
              cooperate with any audit requested by a participating MLS or Brick &amp; Yield.
            </p>
            <p className="mt-3">
              <strong>15.2. Compliance Monitoring.</strong> Brick &amp; Yield may monitor your use
              of the Platform to ensure compliance with this Agreement and applicable MLS IDX
              rules. You consent to such monitoring as a condition of your use of the Platform.
            </p>
            <p className="mt-3">
              <strong>15.3. MLS Vendor License and Client Reports.</strong> You acknowledge that
              Brick &amp; Yield operates the Platform under one or more vendor or licensing
              agreements with the applicable MLS, including (where applicable) an Enterprise Vendor
              License with{" "}
              <a
                href="http://UtahRealEstate.com"
                className="text-oracle underline hover:text-warbler"
                target="_blank"
                rel="noopener noreferrer"
              >
                UtahRealEstate.com
              </a>{" "}
              (URE). As a condition of these agreements, Brick &amp; Yield is required to
              periodically submit reports to the applicable MLS identifying agents, brokers, and
              other end users of the Platform (each, a &ldquo;Client Report&rdquo;). By accepting
              this Agreement, you consent to the inclusion of your identifying information &mdash;
              including your name, real estate license number, MLS user ID, brokerage affiliation,
              email, and account status &mdash; on Client Reports submitted by Brick &amp; Yield to
              the applicable MLS.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              16. Modifications to Agreement
            </h2>
            <p>
              <strong>16.1.</strong> Brick &amp; Yield reserves the right to modify this Agreement
              at any time. When we do, we will update the version number and effective date.
              Material changes will require your re-acceptance before you can continue using the
              Platform.
            </p>
            <p className="mt-3">
              <strong>16.2.</strong> Your continued use of the Platform after being presented with
              updated terms constitutes acceptance of those terms.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
              17. General Provisions
            </h2>
            <p>
              <strong>17.1. Governing Law.</strong> This Agreement shall be governed by and
              construed in accordance with the laws of the State of Utah, without regard to its
              conflict of law principles.
            </p>
            <p className="mt-3">
              <strong>17.2. Dispute Resolution.</strong> Any dispute arising out of or related to
              this Agreement shall be resolved through binding arbitration administered in Salt
              Lake County, Utah, in accordance with the rules of the American Arbitration
              Association.
            </p>
            <p className="mt-3">
              <strong>17.3. Entire Agreement.</strong> This Agreement, together with the Privacy
              Policy, constitutes the entire agreement between you and Brick &amp; Yield regarding
              your use of the Platform.
            </p>
            <p className="mt-3">
              <strong>17.4. Severability.</strong> If any provision of this Agreement is found to
              be unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
            <p className="mt-3">
              <strong>17.5. No Waiver.</strong> Brick &amp; Yield&rsquo;s failure to enforce any
              provision of this Agreement shall not constitute a waiver of that provision.
            </p>
            <p className="mt-3">
              <strong>17.6. Assignment.</strong> You may not assign or transfer this Agreement
              without Brick &amp; Yield&rsquo;s prior written consent. Brick &amp; Yield may assign
              this Agreement without restriction.
            </p>
            <p className="mt-3">
              <strong>17.7. Contact Information.</strong> For questions regarding this Agreement,
              contact us at:{" "}
              <a
                href="mailto:support@brickandyield.co"
                className="text-oracle underline hover:text-warbler"
              >
                support@brickandyield.co
              </a>
            </p>
          </section>

          <section>
            <p className="italic">
              By clicking &ldquo;I Accept,&rdquo; you acknowledge that you have read, understood,
              and agree to be bound by this Platform Terms of Service.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
