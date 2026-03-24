import { Clock, Target, Database, CheckCircle2 } from "lucide-react"

const solutions = [
  {
    icon: Clock,
    title: "24/7 Instant Response",
    description: "Every lead gets a personalized response within seconds, day or night.",
  },
  {
    icon: Target,
    title: "Zero Missed Leads",
    description: "We capture from every channel: website, Zillow, Apartments.com, social, phone.",
  },
  {
    icon: CheckCircle2,
    title: "Auto-Qualification",
    description: "Leads are scored and qualified before your team ever touches them.",
  },
  {
    icon: Database,
    title: "Centralized Data",
    description: "One dashboard. Every lead. Every touchpoint. Full visibility.",
  },
]

export function SolutionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
          The Solution
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 max-w-2xl text-balance">
          Automated lead capture that works while you sleep.
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div 
              key={solution.title} 
              className="flex gap-5 p-6 rounded-2xl border border-border bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <solution.icon className="size-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
