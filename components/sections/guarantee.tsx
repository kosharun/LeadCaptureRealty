"use client"

import { Shield, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function GuaranteeSection() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center mx-auto mb-10 shadow-xl shadow-primary/5"
        >
          <Shield className="size-10 text-primary" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6"
        >
          Our Guarantee
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 text-balance leading-[1.1]"
        >
          If we don't increase your leads, <span className="text-primary underline underline-offset-8 decoration-primary/20">you don't pay.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {"We're so confident in our AI-driven capture system that we put our money where our mouth is. If you don't see a measurable improvement in lead response rates, your second month is entirely on us."}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary/50 border border-border/50 text-sm font-semibold"
        >
          <CheckCircle2 className="size-4 text-emerald-500" />
          No hidden fees or complex contracts
        </motion.div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  )
}
