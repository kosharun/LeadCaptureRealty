import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Layers, RefreshCw, Rocket, Settings } from "lucide-react"

const outcomes = [
  {
    icon: Layers,
    title: "Multi-module real-estate platform",
  },
  {
    icon: Settings,
    title: "Rental and property workflow support",
  },
  {
    icon: RefreshCw,
    title: "Ongoing product development partnership",
  },
  {
    icon: Rocket,
    title: "Built with fast iteration and AI-assisted development",
  },
]

export function CaseStudySection() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-background/60 uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight">
            Case Study
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge variant="secondary" className="bg-background/10 text-background border-background/20 mb-6">
              Long-term product development
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              RecordLOGS
            </h3>
            <p className="text-lg text-background/70 leading-relaxed mb-8">
              Over the last 2 years, we have been continuously developing a real-estate operations platform with modules for rentals, records, listings, and day-to-day property workflows.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-background/5 rounded-xl p-4 border border-background/10"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                    <outcome.icon className="size-4 text-background" />
                  </div>
                  <span className="text-sm font-medium text-background/90 leading-snug">
                    {outcome.title}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-background/50 italic">
              Selected work can be shared in more detail during discovery calls.
            </p>
          </div>

          <div className="relative">
            <div className="bg-background/5 rounded-2xl border border-background/10 p-4 lg:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                  <div className="w-3 h-3 rounded-full bg-background/20" />
                </div>
                <div className="flex-1 h-6 bg-background/10 rounded-md mx-4" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/5 rounded-xl border border-background/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center">
                      <Layers className="size-5 text-background/70" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-background">Rental Module</div>
                      <div className="text-xs text-background/50">Unit tracking, lease management</div>
                    </div>
                  </div>
                  <CheckCircle2 className="size-5 text-emerald-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-background/5 rounded-xl border border-background/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center">
                      <Settings className="size-5 text-background/70" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-background">Records System</div>
                      <div className="text-xs text-background/50">Document storage, search, tagging</div>
                    </div>
                  </div>
                  <CheckCircle2 className="size-5 text-emerald-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-background/5 rounded-xl border border-background/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center">
                      <Rocket className="size-5 text-background/70" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-background">Property Workflows</div>
                      <div className="text-xs text-background/50">Task automation, notifications</div>
                    </div>
                  </div>
                  <CheckCircle2 className="size-5 text-emerald-400" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-background/5 rounded-lg border border-background/10">
                  <div className="text-2xl font-bold text-background">2+</div>
                  <div className="text-xs text-background/50">Years</div>
                </div>
                <div className="text-center p-3 bg-background/5 rounded-lg border border-background/10">
                  <div className="text-2xl font-bold text-background">4</div>
                  <div className="text-xs text-background/50">Modules</div>
                </div>
                <div className="text-center p-3 bg-background/5 rounded-lg border border-background/10">
                  <div className="text-2xl font-bold text-background">100+</div>
                  <div className="text-xs text-background/50">Features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
