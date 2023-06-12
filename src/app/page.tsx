import AboutSection from '@/components/About/aboutsection'
import About2 from '@/components/About/aboutsection2'
import CTA from '@/components/ctasection'
import Gallery from '@/components/gallery'
import Slideshow from '@/components/slideshow'
import SlidingTestimonial from '@/components/testimonials/slidingtestimonials'


export default function Home() {
  return (
    <div>
      <Slideshow />
      <AboutSection />
      <About2 />
      <Gallery  />
      <SlidingTestimonial />
      <CTA />
    </div>
  )
}
