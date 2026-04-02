const steps = [
  {
    number: "01",
    title: "Sign Up & Get Licensed",
    description:
      "Choose your plan and get access to the admin portal and branded client app within 24 hours.",
  },
  {
    number: "02",
    title: "Set Up Your Clients",
    description:
      "Add your clients, configure their search criteria, and invite them to download the app.",
  },
  {
    number: "03",
    title: "Let the Portal Work",
    description:
      "Clients get curated listings with investment metrics. You get notified when they\u2019re engaged. No more chasing.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-oracle relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-pitter-patter max-w-2xl mx-auto">
            Get up and running in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center md:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-warbler/20 mb-6">
                <span className="font-[family-name:var(--font-heading)] text-2xl text-warbler">
                  {step.number}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-white mb-3">
                {step.title}
              </h3>
              <p className="text-pitter-patter leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(100%+8px)] w-[calc(100%-72px)] h-0.5 bg-pitter-patter/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
