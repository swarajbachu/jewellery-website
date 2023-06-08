import AboutSection from '@/components/aboutsection'
import CTA from '@/components/ctasection'
import FAQ from '@/components/faqsection'
import HeroSection from '@/components/herosection'
import WorkSection from '@/components/work'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <CTA />
      <FAQ />
    </div>
  )
}
