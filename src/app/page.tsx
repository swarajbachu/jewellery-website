import AboutSection from '@/components/aboutsection'
import CTA from '@/components/ctasection'
import HeroSection from '@/components/herosection'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <CTA />
    </div>
  )
}
