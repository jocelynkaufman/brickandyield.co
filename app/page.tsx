import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MLSRegions from "@/components/MLSRegions";
import Replacing from "@/components/Replacing";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import JoinForm from "@/components/JoinForm";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <MLSRegions />
      <Replacing />
      <Pricing />

      {/* Social Proof / Founder Story */}
      <section className="py-24 bg-off-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-dark-text leading-snug">
            &ldquo;Built by a Utah real estate agent who got tired of losing
            clients to Zillow.&rdquo;
          </p>
          <div className="mt-8 text-dark-text/70 leading-relaxed max-w-xl mx-auto space-y-4">
            <p>
              Jocelyn built Brick &amp; Yield because she needed it for her own
              business first. After watching too many clients drift to the big
              portals, she designed a platform that keeps agents at the center of
              every relationship.
            </p>
            <p>
              Now she&apos;s licensing it to other agents and brokers who want
              the same edge.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <JoinForm />
      <CTABanner />
    </>
  );
}
