import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { SolutionSection } from "@/components/sections/solution"
import { ROISection } from "@/components/sections/roi"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { OfferSection } from "@/components/sections/offer"
import { GuaranteeSection } from "@/components/sections/guarantee"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ROISection />
      <HowItWorksSection />
      <OfferSection />
      <GuaranteeSection />
      <CTASection />
      <Footer />
    </main>
  )
}
