import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'LeaseLayer | Custom Software for Real Estate Operations',
  description: 'We design and build platforms, internal tools, AI workflows, and automations for real estate operators, property managers, and rental businesses.',
  keywords: ['real estate software', 'property management', 'automation', 'AI workflows', 'internal tools', 'custom platforms'],
  openGraph: {
    title: 'LeaseLayer | Custom Software for Real Estate Operations',
    description: 'Boutique real estate software agency building custom platforms, internal tools, and AI-enabled workflows.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
