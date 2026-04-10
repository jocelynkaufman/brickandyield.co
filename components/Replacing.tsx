export default function Replacing() {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text">
            What You&apos;re Replacing
          </h2>
          <p className="mt-4 text-lg text-dark-text/70 max-w-xl mx-auto">
            Brick &amp; Yield replaces tools you&apos;re already paying for &mdash; or can work alongside them. Either way, you come out ahead.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { tool: "IDX Website", cost: "$50\u2013150/mo", note: "Clients don\u2019t use it \u2014 they use Zillow. Replace it with an app they actually open." },
            { tool: "CRM", cost: "$50\u2013300/mo", note: "Manage active clients, messaging, and pipeline stages without a bloated CRM." },
            { tool: "Spreadsheets & Notes", cost: "Free but painful", note: "Stop tracking investor analysis, transaction checklists, and client notes across 5 apps." },
            { tool: "Email Alert Systems", cost: "$25\u201375/mo", note: "Push notifications to a branded app beat buried emails every time." },
          ].map((item) => (
            <div
              key={item.tool}
              className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl border border-misty-aqua/30 px-6 py-4 gap-2"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-dark-text">{item.tool}</span>
                  <span className="text-xs text-dark-text/40 bg-misty-aqua/20 rounded-full px-2.5 py-0.5">{item.cost}</span>
                </div>
                <p className="text-sm text-dark-text/60 mt-1">{item.note}</p>
              </div>
              <div className="shrink-0 text-oracle font-semibold text-sm whitespace-nowrap">
                Replaced by B&amp;Y
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center bg-oracle/5 rounded-xl border border-oracle/15 px-6 py-6">
          <p className="text-dark-text/70 text-sm">
            Most agents spend <strong className="text-dark-text">$175&ndash;525/mo</strong> on tools Brick &amp; Yield replaces.
          </p>
          <p className="mt-1 font-[family-name:var(--font-heading)] text-xl text-oracle">
            You pay $69/mo.
          </p>
        </div>
      </div>
    </section>
  );
}
