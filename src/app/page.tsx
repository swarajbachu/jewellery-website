import AboutSection from '@/components/aboutsection'
import CTA from '@/components/ctasection'
import FAQ from '@/components/faqsection'
import Hero from '@/components/hero'
import HeroSection from '@/components/herosection'
import WorkSection from '@/components/work'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WorkSection />
      <FAQ />
      <CTA />
    </div>
  )
}
