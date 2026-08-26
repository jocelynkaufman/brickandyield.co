/* ──────────────────────────────────────────────
   EDIT THESE VALUES to update every blog CTA
   ────────────────────────────────────────────── */

const CTA_LINKS = {
  features: { href: "/#features", label: "See what Brick & Yield offers" },
  pricing: { href: "/#pricing", label: "View pricing" },
  howItWorks: { href: "/#how-it-works", label: "See how it works" },
  join: { href: "https://admin.brickandyield.app/sign-up", label: "Sign Up" },
};

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
    <a
      href={href}
      className="text-warbler underline underline-offset-2 hover:text-warbler/80 transition-colors"
    >
      {label}
    </a>
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
    <aside className="my-10 rounded-2xl bg-brand-dark-green/5 border border-brand-dark-green/15 px-6 py-8 text-center">
      <p className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        {heading}
      </p>
      <p className="text-gray-600 mb-4">{text}</p>
      <a
        href={href}
        className="inline-block rounded-lg bg-brand-dark-green px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-green transition-colors no-underline"
      >
        {label}
      </a>
    </aside>
  );
}
