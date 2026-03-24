import { MessageSquareX, Clock, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: MessageSquareX,
    title: "Channel Chaos",
    description: "Leads come from Zillow, your website, social, calls, walk-ins. Most slip through the cracks.",
  },
  {
    icon: Clock,
    title: "Slow Response",
    description: "Every hour you wait, the prospect gets colder. Your team can't respond at 11pm or on weekends.",
  },
  {
    icon: TrendingUp,
    title: "Scaling Costs",
    description: "Hiring more leasing agents to handle lead volume destroys your margins.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-background/60 mb-4">
          The Problem
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 max-w-2xl">
          Most property managers lose 30-50% of their leads before anyone responds.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                <problem.icon className="size-6 text-background/80" />
              </div>
              <h3 className="text-xl font-semibold">{problem.title}</h3>
              <p className="text-background/70 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
