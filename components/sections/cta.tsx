import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-muted/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-balance">
          Ready to stop losing leads?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Book a 15-minute discovery call. {"We'll"} show you exactly how many leads {"you're"} missing and how to fix it.
        </p>
        <Button size="lg" className="rounded-full px-8 h-12 text-base">
          Book a Discovery Call
          <ArrowRight className="ml-2 size-4" />
        </Button>
        <p className="text-sm text-muted-foreground mt-6">
          Free consultation. No commitment. Real advice.
        </p>
      </div>
    </section>
  )
}
