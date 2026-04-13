export default function Pricing() {
  const features = [
    "Branded client app (iOS)",
    "Full client pipeline with stages",
    "Transaction management & deadline tracking",
    "Commission calculator",
    "40+ MLS search filters incl. investment analysis",
    "Calendar with Google Calendar sync",
    "In-app messaging (general + property-specific)",
    "Buyer & seller portals",
    "Household & co-buyer support",
    "Zapier integration",
    "Push notifications",
    "Learn tab for client education",
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text">
            Simple Pricing
          </h2>
          <p className="mt-4 text-lg text-dark-text/70 max-w-2xl mx-auto">
            Lock in the founder&apos;s rate before it&apos;s gone.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-warbler relative">
            <div className="absolute -top-3.5 left-8">
              <span className="bg-warbler text-dark-text text-xs font-semibold px-4 py-1.5 rounded-full">
                Limited Availability
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-dark-text">
                Founder&apos;s Rate
              </h3>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl text-dark-text/40 line-through">
                  $99
                </span>
                <span className="font-[family-name:var(--font-heading)] text-5xl text-dark-text">
                  $69
                </span>
                <span className="text-dark-text/60">/mo</span>
              </div>
              <p className="mt-4 text-dark-text/70 leading-relaxed">
                Lock in the early adopter rate &mdash; goes to $99/mo after
                founder slots fill up. No contracts, cancel anytime.
              </p>
              <ul className="mt-6 space-y-3">
                {features.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-dark-text/80"
                  >
                    <svg
                      className="w-5 h-5 text-oracle mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className="mt-8 block w-full text-center rounded-lg bg-warbler px-6 py-3.5 font-semibold text-dark-text transition-colors hover:bg-warbler/90"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
