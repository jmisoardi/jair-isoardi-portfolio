import type { Metadata } from "next"
import { Instagram, MapPin, Mail, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { BookNow } from "@/components/book-now"

export const metadata: Metadata = {
  title: "Contacto | Jair Isoardi Fotografía",
  description:
    "Contactá a Jair Isoardi para reservar tu sesión fotográfica. WhatsApp, email o formulario de contacto. La Pampa, Argentina.",
}

export default function ContactoPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Contacto
            </p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
              Hablemos de tu sesión
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Completá el formulario o contactame directamente por WhatsApp. Respondo dentro de las 24 horas.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              {/* WhatsApp CTA */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Contacto directo
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"¿Preferís"}  chatear? Escribime por WhatsApp y coordinamos todo en minutos.
                </p>
                <BookNow
                  size="lg"
                  className="mt-6 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                />
              </div>

              {/* Contact info */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Información
                </h3>
                <div className="mt-4 flex flex-col gap-4">
                  <a
                    href="https://instagram.com/jairisoardi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-secondary">
                      <Instagram className="size-4" />
                    </div>
                    @jairisoardi
                  </a>
                  <a
                    href="https://wa.me/5491100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-secondary">
                      <MessageCircle className="size-4" />
                    </div>
                    WhatsApp
                  </a>
                  <a
                    href="mailto:contacto@jairisoardi.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-secondary">
                      <Mail className="size-4" />
                    </div>
                    contacto@jairisoardi.com
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex size-9 items-center justify-center rounded-full bg-secondary">
                      <MapPin className="size-4" />
                    </div>
                    Santa Rosa, La Pampa, Argentina
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
