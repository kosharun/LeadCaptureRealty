"use client"

import { motion } from "framer-motion"
import { Download, Zap, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Install",
    description: "We connect to your existing lead sources in under 48 hours. No IT team needed.",
    icon: Download,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    number: "02",
    title: "Capture & Qualify",
    description: "Every lead is instantly captured, responded to, and scored based on your criteria.",
    icon: Zap,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    number: "03",
    title: "Convert",
    description: "Your team gets warm, qualified leads ready to tour. You close more leases.",
    icon: BarChart3,
    color: "bg-emerald-500/10 text-emerald-600",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-primary mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Three steps to never miss a lead again.
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="group relative p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <step.icon className="size-7" />
              </div>
              
              <div className="absolute top-8 right-8 text-4xl font-black group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
