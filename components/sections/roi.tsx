"use client"

import { motion } from "framer-motion"
import { Calculator, TrendingUp } from "lucide-react"

export function ROISection() {
  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4"
            >
              <Calculator className="size-4" />
              The Math
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight"
            >
              Simple ROI you can calculate today.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed mb-8"
            >
              We don't just capture leads; we generate revenue. See how much you're leaving on the table.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-semibold"
            >
              <TrendingUp className="size-5" />
              Average ROI: 12x in 6 months
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-background border border-border/50 rounded-[2.5rem] p-10 sm:p-14 shadow-2xl shadow-primary/5 relative"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center justify-between group">
                <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">Average lease value</span>
                <span className="text-2xl font-bold">$1,500/mo</span>
              </div>
              <div className="h-px bg-border/50" />
              <div className="flex items-center justify-between group">
                <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">Extra monthly leases</span>
                <span className="text-2xl font-bold text-primary">+5/month</span>
              </div>
              <div className="h-px bg-border/50" />
              <div className="flex items-center justify-between pt-4">
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-1">Additional Monthly Revenue</span>
                  <span className="text-5xl font-black tracking-tighter">$7,500</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <p className="text-sm text-muted-foreground font-medium text-center">
                Most clients see positive ROI within the first 30 days of implementation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
