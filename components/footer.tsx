export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
            <span className="text-background font-bold text-xs">LC</span>
          </div>
          <span className="text-sm text-muted-foreground">LeadCapture Realty</span>
        </div>
        <p className="text-sm text-muted-foreground">
          2026 LeadCapture Realty. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
