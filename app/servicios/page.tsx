import type { Metadata } from "next"
import { Check, Sparkles } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookNow } from "@/components/book-now"
import { CtaSection } from "@/components/sections/cta-section"
import { services, pricingPlans, faqItems } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ServicesFaq } from "@/components/services-faq"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Servicios | Jair Isoardi Fotografía",
  description:
    "Descubrí los servicios y paquetes de fotografía profesional. Retratos, Pre 15, Embarazos y Artísticos. La Pampa, Argentina.",
}

export default function ServiciosPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Servicios
            </p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Servicios y paquetes
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Cada tipo de sesión está diseñada para capturar momentos únicos
              con la mejor calidad y atención personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Service sections */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-20">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={cn(
                  "flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16",
                  idx % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <div className="flex-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <BookNow
                    category={service.title}
                    size="sm"
                    className="mt-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {`Reservar sesión de ${service.title}`}
                  </BookNow>
                </div>
                <div className="flex-1">
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {"¿Qué incluye?"}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                          <span className="text-sm text-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Paquetes
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Elegí el paquete ideal para vos
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md",
                  plan.highlighted
                    ? "border-accent shadow-md"
                    : "border-border"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      <Sparkles className="size-3" />
                      Más elegido
                    </span>
                  </div>
                )}
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <p className="mt-4 font-serif text-4xl font-semibold text-foreground">
                  {plan.price}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Add-ons
                  </p>
                  {plan.addOns.map((addOn) => (
                    <p key={addOn} className="text-xs text-muted-foreground">
                      {addOn}
                    </p>
                  ))}
                </div>

                <div className="mt-8">
                  {plan.highlighted ? (
                    <BookNow className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Reservar ahora
                    </BookNow>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full rounded-full"
                      asChild
                    >
                      <Link href="/contacto">Consultar</Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              FAQ
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Preguntas frecuentes
            </h2>
          </div>
          <ServicesFaq items={faqItems} />
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
