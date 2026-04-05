"use client"

import { Check, Gift } from "lucide-react"
import { motion } from "framer-motion"

const offerPoints = [
  "14-day pilot program",
  "No long-term commitment",
  "Performance-based pricing",
  "Full setup included",
  "Dedicated support",
]

export function OfferSection() {
  return (
    <section className="py-24 px-6 bg-foreground text-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4"
            >
              <Gift className="size-4" />
              The Offer
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight"
            >
              Start with a <span className="text-primary italic">risk-free</span> pilot.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-background/60 mb-10 max-w-xl leading-relaxed"
            >
              We believe in earning your business. Start with a 14-day pilot and see the results before committing to a long-term partnership.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 bg-background/5 p-10 rounded-[2.5rem] border border-background/10 backdrop-blur-sm"
          >
            {offerPoints.map((point, index) => (
              <motion.div 
                key={point} 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="size-5 text-primary" />
                </div>
                <span className="text-xl font-medium text-background/80">{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
