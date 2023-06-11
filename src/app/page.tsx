import AboutSection from '@/components/aboutsection'
import ContactUs from '@/components/contactus'
import CTA from '@/components/ctasection'
import FAQ from '@/components/faqsection'
import Hero from '@/components/hero'
import HeroSection from '@/components/herosection'
import Products from '@/components/products'
import WorkSection from '@/components/work'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Products />
      <CTA />
    </div>
  )
}
