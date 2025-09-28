"use client"

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { CurrentProjectsSection } from '@/components/sections/current-projects'
import { PortfolioSection } from '@/components/sections/portfolio'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CurrentProjectsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}