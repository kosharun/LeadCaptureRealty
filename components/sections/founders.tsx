import { Code2, Workflow } from "lucide-react"

const founders = [
  {
    icon: Code2,
    title: "Founder 01",
    role: "Product & Engineering",
    bio: "Full-stack builder focused on shipping custom software, internal systems, and product infrastructure.",
  },
  {
    icon: Workflow,
    title: "Founder 02",
    role: "Automation & Systems",
    bio: "Focused on workflows, integrations, operational tooling, and automation-first implementation using tools like n8n.",
  },
]

export function FoundersSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Team
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight">
            Built by two senior operators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A compact team with deep experience in software and real estate systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                  <founder.icon className="size-8 text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {founder.title}
                  </div>
                  <div className="text-xl font-semibold">{founder.role}</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            We work as a compact senior team: direct communication, high ownership, fast execution.
          </p>
        </div>
      </div>
    </section>
  )
}
