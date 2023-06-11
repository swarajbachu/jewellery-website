import AboutSection from '@/components/aboutsection'
import About2 from '@/components/aboutsection2'
import CTA from '@/components/ctasection'
import Gallery from '@/components/gallery'
import Products from '@/components/products'
import Slideshow from '@/components/slideshow'


export default function Home() {
  return (
    <div>
      <Slideshow />
      <AboutSection />
      <About2 />
      <Gallery  />
      <Products />
      <CTA />
    </div>
  )
}
