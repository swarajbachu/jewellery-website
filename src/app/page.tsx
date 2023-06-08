import AboutSection from '@/components/aboutsection'
import HeroSection from '@/components/herosection'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
    </div>
  )
}
