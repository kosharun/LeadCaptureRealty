import { Building, Building2, Home, Landmark, LineChart, Users } from "lucide-react"

const clientTypes = [
  {
    icon: Building2,
    title: "Property management companies",
    description: "Managing portfolios of residential or commercial properties",
  },
  {
    icon: Home,
    title: "Real estate operators",
    description: "Running day-to-day property and tenant operations",
  },
  {
    icon: Building,
    title: "Rental businesses",
    description: "Short-term, mid-term, or long-term rental operators",
  },
  {
    icon: Users,
    title: "Brokerages",
    description: "Teams needing custom CRM, listings, or workflow tools",
  },
  {
    icon: Landmark,
    title: "Real estate startups",
    description: "Proptech founders building their first product",
  },
  {
    icon: LineChart,
    title: "Investors with operational complexity",
    description: "Multi-property portfolios needing consolidated systems",
  },
]

export function ClientsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Clients
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight">
            Who we work with
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in serving real estate businesses with complex operational needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <client.icon className="size-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{client.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
