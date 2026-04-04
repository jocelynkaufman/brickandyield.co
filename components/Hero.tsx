export default function Hero() {
  return (
    <section className="relative bg-oracle overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-oracle via-oracle to-dark-text/80" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Your Clients Deserve Better Than Email Alerts
          </h1>
          <p className="mt-6 text-lg md:text-xl text-pitter-patter leading-relaxed max-w-2xl">
            Brick &amp; Yield gives agents a branded client portal with curated
            property searches, investor analysis, and a native mobile app — so
            your clients stay with you, not Zillow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* Hidden for A2P compliance — using chat widget only for now */}
            {/* <a
              href="#join"
              className="inline-flex items-center justify-center rounded-lg bg-warbler px-8 py-3.5 text-base font-semibold text-dark-text transition-colors hover:bg-warbler/90"
            >
              Join the Waitlist
            </a> */}
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-pitter-patter px-8 py-3.5 text-base font-semibold text-pitter-patter transition-colors hover:bg-pitter-patter/10"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60L1440 60L1440 0C1200 50 240 50 0 0L0 60Z"
            fill="#F7F4F0"
          />
        </svg>
      </div>
    </section>
  );
}
