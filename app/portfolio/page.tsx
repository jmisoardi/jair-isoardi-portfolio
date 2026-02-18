import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioGallery } from "@/components/portfolio-gallery"

export const metadata: Metadata = {
  title: "Portfolio | Jair Isoardi Fotografía",
  description:
    "Explorá mi portfolio de fotografía profesional: Retratos, Pre 15, Embarazos y Artísticos. La Pampa, Argentina.",
}

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Portfolio
            </p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Mi trabajo
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Cada sesión es única. Explorá las diferentes categorías y encontrá
              el estilo que más te represente.
            </p>
          </div>
          <PortfolioGallery />
        </div>
      </section>
      <Footer />
    </main>
  )
}
