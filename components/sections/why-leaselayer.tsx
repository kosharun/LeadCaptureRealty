import { Building, Cog, Users } from "lucide-react"

const values = [
  {
    icon: Building,
    title: "Real estate focus",
    description:
      "We understand rental workflows, property operations, records, tenant processes, and operational bottlenecks.",
  },
  {
    icon: Cog,
    title: "Automation-first thinking",
    description:
      "We don't just build interfaces. We reduce repetitive work with integrations, workflow automation, and AI-assisted processes.",
  },
  {
    icon: Users,
    title: "Senior execution",
    description:
      "You work directly with experienced builders. Fast communication, lean execution, and no bloated agency layers.",
  },
]

export function WhyLeaseLayerSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Why LeaseLayer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A boutique agency that speaks your language and builds what you actually need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mb-6">
                <value.icon className="size-6 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
