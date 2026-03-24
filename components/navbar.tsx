import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">LC</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">LeadCapture Realty</span>
          </a>
          <Button size="sm" className="rounded-full px-5">
            Book a Call
          </Button>
        </nav>
      </div>
    </header>
  )
}
