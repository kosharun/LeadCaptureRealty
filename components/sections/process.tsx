const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a focused conversation about your operations, pain points, and what success looks like. No lengthy proposals—just real understanding of your workflow.",
  },
  {
    number: "02",
    title: "System Mapping",
    description:
      "We map out your current processes, integrations, and data flows. This helps us identify quick wins and plan a realistic scope for what we'll build together.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "We work in focused sprints, shipping usable features weekly. You see progress fast and provide feedback as we build, not after months of waiting.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "Once live, we monitor, optimize, and extend. Many clients stay with us long-term because real estate operations keep evolving—and so does the software.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Process
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight">
            How we work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical, no-fluff process designed for operators who need results.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 0 ? "" : "lg:text-right"
                }`}
              >
                <div
                  className={`${
                    index % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:pl-16 lg:col-start-2"
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-4xl lg:text-5xl font-bold text-muted-foreground/30">
                      {step.number}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md lg:max-w-none">
                    {step.description}
                  </p>
                </div>

                <div className="hidden lg:flex absolute left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-foreground border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
