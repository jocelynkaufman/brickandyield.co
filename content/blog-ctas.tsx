import Link from "next/link";
import Script from "next/script";

/* ──────────────────────────────────────────────
   EDIT THESE VALUES to update every blog CTA
   ────────────────────────────────────────────── */

const CTA_LINKS = {
  features: { href: "/#features", label: "See what Brick & Yield offers" },
  pricing: { href: "/#pricing", label: "View pricing" },
  howItWorks: { href: "/#how-it-works", label: "See how it works" },
  join: { href: "#blog-form", label: "Join the waitlist" },
};

const FORM_ID = "ss6uUK9BuwAAvyZUHAsd";
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const FORM_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

/* ──────────────────────────────────────────────
   Inline link — drop into any paragraph
   Usage: <CtaLink to="features" /> or <CtaLink to="pricing" />
   ────────────────────────────────────────────── */

/* ──────────────────────────────────────────────
   Convenience aliases used by article files
   ────────────────────────────────────────────── */

export function CtaWaitlist({ children }: { children?: React.ReactNode }) {
  return <CtaLink to="join" />;
}

export function CtaFeatures({ children }: { children?: React.ReactNode }) {
  return <CtaLink to="features" />;
}

export function CtaPricing({ children }: { children?: React.ReactNode }) {
  return <CtaLink to="pricing" />;
}

/** No-op — the form is rendered by BlogPostLayout automatically */
export function CtaForm() {
  return null;
}

export function CtaLink({ to }: { to: keyof typeof CTA_LINKS }) {
  const { href, label } = CTA_LINKS[to];
  return (
    <Link
      href={href}
      className="text-warbler underline underline-offset-2 hover:text-warbler/80 transition-colors"
    >
      {label}
    </Link>
  );
}

/* ──────────────────────────────────────────────
   Mid-article banner — a highlighted CTA block
   ────────────────────────────────────────────── */

export function CtaBanner({
  heading = "Ready to stop losing clients to Zillow?",
  text = "Brick & Yield gives you a branded client portal with curated searches, investor tools, and a native mobile app.",
  linkTo = "join" as keyof typeof CTA_LINKS,
}) {
  const { href, label } = CTA_LINKS[linkTo];
  return (
    <aside className="my-10 rounded-lg bg-oracle/10 border border-oracle/20 px-6 py-8 text-center">
      <p className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-2">
        {heading}
      </p>
      <p className="text-dark-text/70 mb-4">{text}</p>
      <Link
        href={href}
        className="inline-block rounded-md bg-oracle px-6 py-2.5 text-sm font-medium text-white hover:bg-oracle/90 transition-colors"
      >
        {label}
      </Link>
    </aside>
  );
}

/* ──────────────────────────────────────────────
   Bottom-of-article form section
   ────────────────────────────────────────────── */

export function CtaFormSection({
  heading = "Get Early Access to Brick & Yield",
  text = "Join the waitlist and lock in the founder's rate. We'll reach out to get you set up.",
}) {
  return (
    <section id="blog-form" className="mt-16 rounded-lg bg-oracle px-6 py-12 text-center scroll-mt-24">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white mb-2">
        {heading}
      </h2>
      <p className="text-pitter-patter text-base mb-8 max-w-xl mx-auto">
        {text}
      </p>

      <div className="w-full max-w-lg mx-auto">
        <iframe
          src={FORM_SRC}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "3px",
          }}
          id={`blog-form-${FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Waitlist"
          data-height="611"
          data-layout-iframe-id={`blog-form-${FORM_ID}`}
          data-form-id={FORM_ID}
          title="Waitlist"
        />
      </div>
      <Script src={FORM_SCRIPT} strategy="afterInteractive" />

      <p className="mt-8 text-xs text-pitter-patter/80 max-w-lg mx-auto leading-relaxed">
        By submitting this form, you agree to receive text messages from Brick
        and Yield LLC regarding our platform and real estate technology services.
        Message frequency varies. Message and data rates may apply. Reply STOP to
        opt out at any time. Reply HELP for help. See our{" "}
        <Link href="/terms" className="underline hover:text-warbler">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline hover:text-warbler">
          Privacy Policy
        </Link>
        .
      </p>
    </section>
  );
}
