"use client"

import { MessageSquareX, Clock, TrendingUp, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
  {
    icon: MessageSquareX,
    title: "Channel Chaos",
    description: "Leads come from Zillow, your website, social, calls, walk-ins. Most slip through the cracks.",
  },
  {
    icon: Clock,
    title: "Slow Response",
    description: "Every hour you wait, the prospect gets colder. Your team can't respond at 11pm or on weekends.",
  },
  {
    icon: TrendingUp,
    title: "Scaling Costs",
    description: "Hiring more leasing agents to handle lead volume destroys your margins.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-destructive/10 blur-3xl rounded-full translate-x-1/2 opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-destructive font-bold uppercase tracking-widest text-xs mb-4"
        >
          <AlertCircle className="size-4" />
          The Problem
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-3xl leading-tight"
        >
          Most property managers lose <span className="text-destructive">30-50%</span> of their leads before anyone even responds.
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {problems.map((problem, index) => (
            <motion.div 
              key={problem.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="space-y-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-background/5 border border-background/10 flex items-center justify-center group-hover:bg-destructive/20 group-hover:border-destructive/50 transition-all duration-300">
                <problem.icon className="size-7 text-background/80 group-hover:text-destructive transition-colors" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{problem.title}</h3>
                <p className="text-background/60 leading-relaxed text-lg">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
