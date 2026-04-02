import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-paper-brown to-warbler">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text">
          Ready to give your clients a better experience?
        </h2>
        <Link
          href="#join"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-oracle px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-oracle/90"
        >
          Join the Waitlist
        </Link>
      </div>
    </section>
  );
}
