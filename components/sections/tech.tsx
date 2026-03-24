import { Badge } from "@/components/ui/badge"

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "APIs",
  "n8n",
  "Automation",
  "AI workflows",
  "Admin systems",
  "Internal tools",
  "Product design",
]

export function TechSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Capabilities
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight">
            Our tech stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern tools and frameworks for building production-grade systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-card border border-border hover:bg-foreground hover:text-background transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
