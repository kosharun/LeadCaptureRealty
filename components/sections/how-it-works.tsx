const steps = [
  {
    number: "01",
    title: "Install",
    description: "We connect to your existing lead sources in under 48 hours. No IT team needed.",
  },
  {
    number: "02",
    title: "Capture & Qualify",
    description: "Every lead is instantly captured, responded to, and scored based on your criteria.",
  },
  {
    number: "03",
    title: "Convert",
    description: "Your team gets warm, qualified leads ready to tour. You close more leases.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 max-w-2xl">
          Three steps to never miss a lead again.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-6xl font-bold text-muted/50 mb-4 block">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
