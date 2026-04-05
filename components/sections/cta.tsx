"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-foreground text-background">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-bold uppercase tracking-widest mb-10"
        >
          <Calendar className="size-4" />
          Limited availability for April
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Ready to stop losing <span className="text-primary italic">valuable</span> leads?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Book a 15-minute discovery call. We'll show you exactly how many leads you're missing and how to fix it with our automated capture system.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all bg-primary text-primary-foreground">
            Book a Discovery Call
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-50 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            Free consultation
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            No commitment
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            Real advice
          </div>
        </motion.div>
      </div>
    </section>
  )
}
