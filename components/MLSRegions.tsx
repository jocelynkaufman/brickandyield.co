export default function MLSRegions() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text">
            MLS Coverage
          </h2>
          <p className="mt-4 text-lg text-dark-text/70 max-w-2xl mx-auto">
            Currently live and expanding fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Active MLS */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-misty-aqua/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg text-dark-text mb-1">
              Wasatch Front Regional MLS
            </h3>
            <p className="text-dark-text/60 text-sm">WFRMLS &mdash; Utah</p>
          </div>

          {/* Coming Soon */}
          <div className="bg-white/60 rounded-2xl p-8 shadow-sm border border-misty-aqua/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-warbler/20 px-3 py-1 text-xs font-semibold text-dark-text/70">
                <span className="h-1.5 w-1.5 rounded-full bg-warbler" />
                Coming Soon
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg text-dark-text/60 mb-1">
              More Markets
            </h3>
            <p className="text-dark-text/40 text-sm">
              Additional MLS regions in the works
            </p>
          </div>

          {/* Request */}
          <div className="bg-white/60 rounded-2xl p-8 shadow-sm border border-dashed border-misty-aqua/50 flex flex-col justify-center">
            <h3 className="font-[family-name:var(--font-heading)] text-lg text-dark-text/70 mb-2">
              Don&apos;t see your MLS?
            </h3>
            <p className="text-dark-text/50 text-sm mb-4">
              Join the waitlist and let us know which market you&apos;re in.
            </p>
            <a
              href="#join"
              className="inline-block text-center rounded-md bg-oracle px-5 py-2.5 text-sm font-medium text-white hover:bg-oracle/90 transition-colors"
            >
              Request Your MLS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
