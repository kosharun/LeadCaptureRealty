"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026)
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])
  
  return (
    <footer className="py-20 px-6 border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <span className="text-primary-foreground font-black text-lg">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none">LeadCapture</span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Realty</span>
              </div>
            </a>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
              We help property management companies capture every lead, respond instantly 24/7, and convert more prospects.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Product</h4>
            <ul className="space-y-4">
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a></li>
              <li><a href="#roi" className="text-muted-foreground hover:text-primary transition-colors">ROI Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} LeadCapture Realty. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
