import { Shield } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-8">
          <Shield className="size-8 text-foreground" />
        </div>
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
          Our Guarantee
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-balance">
          {"If we don't increase your qualified leads, you don't pay month two."}
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          {"We're confident in our system. If you don't see measurable improvement in lead capture and response rates, the second month is on us."}
        </p>
      </div>
    </section>
  )
}
