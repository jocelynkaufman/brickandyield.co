const features = [
  {
    title: "Your Brand, Not Zillow\u2019s",
    description:
      "Your clients aren\u2019t using your IDX site \u2014 they\u2019re on Zillow. Replace outdated email alerts and clunky search pages with a branded mobile app they actually open. Your name, your brokerage, your app on their phone.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="10" y="4" width="20" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M17 8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="30" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Curated, Not Searched",
    description:
      "You\u2019re not giving clients a search bar. You\u2019re curating properties for them with context only an agent can provide. That\u2019s what makes you irreplaceable.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M4 14h32" stroke="currentColor" strokeWidth="2" />
        <circle cx="28" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M31 27l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Investor & House Hack Analysis",
    description:
      "Every listing shows cash flow projections, cap rates, and house hack scenarios. Give your investor clients instant answers without spreadsheets.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="4" width="28" height="32" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 16h16M12 22h10M12 28h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 10h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Buyer & Seller Portals",
    description:
      "Buyers and sellers each get their own portal. Present offers, send showing feedback, track transactions. Co-buyers and co-sellers get separate logins with shared access. Onboard sellers at the consultation and capture the lead from day one.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="6" width="14" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="6" width="14" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12h6M24 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 18h6M24 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built for Agents and Brokers",
    description:
      "Whether you\u2019re an independent agent or running a brokerage, Brick & Yield scales with you. Broker dashboard gives you oversight of every agent\u2019s pipeline without adding busywork.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M20 17v5M15 25l-2-1M25 25l2-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Learn Tab",
    description:
      "Curate educational content for your clients so you don\u2019t answer the same questions every transaction. First-time buyer guides, investment basics, market updates \u2014 all branded to you.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M6 8h12v24H6zM22 8h12v24H22z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 8v24" stroke="currentColor" strokeWidth="2" />
        <path d="M10 14h4M10 20h4M26 14h4M26 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text">
            What You Get
          </h2>
          <p className="mt-4 text-lg text-dark-text/70 max-w-2xl mx-auto">
            CRM + IDX in one platform — built by an agent, for solo agents and broker teams alike. Make yourself irreplaceable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-misty-aqua/30 transition-shadow hover:shadow-md"
            >
              <div className="text-oracle mb-5">{feature.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-dark-text mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-text/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
