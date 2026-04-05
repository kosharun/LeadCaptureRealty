"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Navbar() {
  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Solutions", href: "#solutions" },
    { name: "ROI Calculator", href: "#roi" },
    { name: "Case Studies", href: "#case-studies" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-between h-20">
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-primary/20">
              <span className="text-primary-foreground font-black text-lg">L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight leading-none">LeadCapture</span>
              <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Realty</span>
            </div>
          </motion.a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <Button variant="ghost" className="hidden sm:flex rounded-full font-semibold">
              Log in
            </Button>
            <Button className="rounded-full px-6 h-11 font-bold shadow-lg shadow-primary/10 hover:shadow-primary/25 transition-all">
              Book a Call
            </Button>
          </motion.div>
        </nav>
      </div>
    </header>
  )
}
