import AboutSection from '@/components/About/aboutsection'
import About2 from '@/components/About/aboutsection2'
import CTA from '@/components/ctasection'
import CarouselPage from '@/components/herosections/carosual'
import Slideshow from '@/components/herosections/slideshow'
import Gallery from '@/components/products/gallery'

import SlidingTestimonial from '@/components/testimonials/slidingtestimonials'


export default function Home() {
  return (
    <div>
      <CarouselPage />
      <AboutSection />
      <About2 />
      <Gallery  />
      <SlidingTestimonial />
      <CTA />
    </div>
  )
}
