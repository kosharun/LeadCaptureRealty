import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
          Lead Capture for Property Management
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
          {"You're Losing Leads."}
          <br />
          <span className="text-muted-foreground">We Fix That.</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
          We help property management companies capture every lead, respond instantly 24/7, 
          and convert more prospects into signed leases.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 h-12 text-base">
            Book a Discovery Call
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
