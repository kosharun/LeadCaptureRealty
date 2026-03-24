import { Check } from "lucide-react"

const offerPoints = [
  "14-day pilot program",
  "No long-term commitment",
  "Performance-based pricing",
  "Full setup included",
  "Dedicated support",
]

export function OfferSection() {
  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-background/60 mb-4">
          The Offer
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 max-w-2xl">
          Start with a risk-free pilot.
        </h2>
        <p className="text-lg text-background/70 mb-10 max-w-xl">
          We believe in earning your business. Start with a 14-day pilot and see the results before committing.
        </p>
        
        <ul className="space-y-4">
          {offerPoints.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-background/10 flex items-center justify-center">
                <Check className="size-4 text-background" />
              </div>
              <span className="text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
