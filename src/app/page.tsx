import AboutSection from '@/components/aboutsection'
import CTA from '@/components/ctasection'
import Products from '@/components/products'
import Slideshow from '@/components/slideshow'


export default function Home() {
  return (
    <div>
      <Slideshow />

      <AboutSection />
      <Products />
      <CTA />
    </div>
  )
}
