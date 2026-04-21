import Image from "next/image";

const screenshots = [
  {
    src: "/images/2.png",
    alt: "Brick & Yield client app — review curated properties from your agent",
    caption: "Review curated properties",
  },
  {
    src: "/images/4.png",
    alt: "Brick & Yield client app — saved properties with cap rate and cash flow analysis",
    caption: "Cap rate & cash flow on every listing",
  },
  {
    src: "/images/3.png",
    alt: "Brick & Yield client app — learn guides for every step of the process",
    caption: "Built-in guides for every step",
  },
  {
    src: "/images/1.png",
    alt: "Brick & Yield client app — track your buying journey and milestones",
    caption: "Track your buying journey",
  },
];

export default function AppScreenshots() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text">
            What Your Clients See
          </h2>
          <p className="mt-4 text-lg text-dark-text/70 max-w-2xl mx-auto">
            A branded mobile app that keeps clients engaged &mdash; and off
            Zillow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {screenshots.map((shot) => (
            <div key={shot.src} className="flex flex-col items-center gap-4">
              <div className="relative w-full aspect-[9/19] rounded-2xl overflow-hidden bg-misty-aqua/20 border border-misty-aqua/30 shadow-sm">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 22vw"
                />
              </div>
              <p className="text-sm text-dark-text/70 text-center font-medium">
                {shot.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
