import { Building2, LayoutDashboard, Users, Brain, Workflow, Rocket } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Custom Real Estate Platforms",
    description:
      "End-to-end platforms tailored to your specific property operations, from tenant management to portfolio analytics.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Tools & Admin Dashboards",
    description:
      "Powerful back-office interfaces that give your team control over operations, data, and workflows.",
  },
  {
    icon: Users,
    title: "CRM / PMS / Tenant Management",
    description:
      "Custom systems for managing relationships, properties, and tenant lifecycles in one unified experience.",
  },
  {
    icon: Brain,
    title: "AI Workflows & Operational Automation",
    description:
      "AI-assisted processes that handle document extraction, classification, communications, and decision support.",
  },
  {
    icon: Workflow,
    title: "n8n Integrations & Process Automation",
    description:
      "Connect your tools and automate repetitive processes with robust, maintainable workflow automation.",
  },
  {
    icon: Rocket,
    title: "MVPs for Real Estate Startups",
    description:
      "Fast, focused product development for proptech founders who need to validate and ship quickly.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Services
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight">
            What we build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized software services for real estate operations and property businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground transition-colors duration-300">
                <service.icon className="size-5 text-foreground group-hover:text-background transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
