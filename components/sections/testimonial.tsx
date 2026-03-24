import { Layers, Rocket, Target } from "lucide-react"

const reasons = [
  {
    icon: Layers,
    title: "We think in systems, not just screens",
    description:
      "Every feature we build considers how it connects to your existing operations, data flows, and team workflows.",
  },
  {
    icon: Rocket,
    title: "We move fast and iterate with the product",
    description:
      "Weekly shipping, continuous feedback, and real progress you can see—not months of planning before action.",
  },
  {
    icon: Target,
    title: "We care about operational impact",
    description:
      "We measure success by hours saved, errors reduced, and processes streamlined—not just features delivered.",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Why clients work with us long-term
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond the initial build, we become true partners in your operational success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center bg-card rounded-2xl p-8 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mx-auto mb-6">
                <reason.icon className="size-6 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
