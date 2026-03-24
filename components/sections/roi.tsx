export function ROISection() {
  return (
    <section className="py-24 px-6 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
          The Math
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 max-w-2xl text-balance">
          Simple ROI you can calculate today.
        </h2>
        
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 max-w-2xl">
          <div className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-muted-foreground">Average lease value</span>
              <span className="text-2xl font-semibold">$1,500/mo</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <span className="text-muted-foreground">Additional leases from better follow-up</span>
              <span className="text-2xl font-semibold">+5/month</span>
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <span className="text-lg font-medium">Additional monthly revenue</span>
              <span className="text-3xl font-bold text-foreground">$7,500</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Most clients see ROI within the first 30 days.
          </p>
        </div>
      </div>
    </section>
  )
}
