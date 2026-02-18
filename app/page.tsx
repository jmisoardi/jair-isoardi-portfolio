import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { CategoryCards } from "@/components/sections/category-cards"
import { FeaturedGallery } from "@/components/sections/featured-gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CategoryCards />
      <FeaturedGallery />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}
