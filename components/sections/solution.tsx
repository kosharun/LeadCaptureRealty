"use client"

import { Clock, Target, Database, CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const solutions = [
  {
    icon: Clock,
    title: "24/7 Instant Response",
    description: "Every lead gets a personalized response within seconds, day or night.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Target,
    title: "Zero Missed Leads",
    description: "We capture from every channel: website, Zillow, Apartments.com, social, phone.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: CheckCircle2,
    title: "Auto-Qualification",
    description: "Leads are scored and qualified before your team ever touches them.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Database,
    title: "Centralized Data",
    description: "One dashboard. Every lead. Every touchpoint. Full visibility.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
]

export function SolutionSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4"
          >
            <Sparkles className="size-4" />
            The Solution
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-balance leading-[1.1]"
          >
            Automated lead capture that <span className="text-primary italic">actually</span> works while you sleep.
          </motion.h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.title} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl ${solution.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                <solution.icon className={`size-7 ${solution.color}`} />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
