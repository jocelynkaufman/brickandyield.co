const features = [
  {
    title: "Agent-Curated Searches",
    description:
      "You set up the search criteria. Your clients see only what you want them to see. No search bar — you stay at the center of every deal.",
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
    title: "Branded Mobile App",
    description:
      "Your clients download a real app — not a website shortcut. Push notifications for new listings, in-app messaging, and your brand front and center.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="10" y="4" width="20" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M17 8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="30" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Mortgage & Net Sheet Tools",
    description:
      "Built-in mortgage calculators and seller net sheets right at the listing level. Clients can run their own numbers without leaving the app.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 14h28M14 14v20M26 14v20" stroke="currentColor" strokeWidth="2" />
        <path d="M18 20h4M18 26h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Broker & Team Oversight",
    description:
      "Manage your agents, see their pipeline, and maintain oversight of every client relationship. Built for independent broker-owners who want control.",
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
    title: "No CRM Required",
    description:
      "Brick & Yield works standalone. No existing CRM needed. Manage your active clients, their searches, transactions, and communications in one place.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 10h24v22H8z" stroke="currentColor" strokeWidth="2" rx="3" />
        <path d="M14 18l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            Everything your clients need — branded, curated, and built to keep them coming back to you.
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
