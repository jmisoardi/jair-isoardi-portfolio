import type { Metadata } from "next"
import { Camera, MessageSquare, Image, Monitor, Aperture, Sun } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Sobre mí | Jair Isoardi Fotografía",
  description:
    "Conocé a Jair Isoardi, fotógrafo profesional en La Pampa, Argentina. Especialista en retratos, pre 15, embarazos y fotografía artística.",
}

const steps = [
  {
    number: "01",
    title: "Conversamos",
    description:
      "Nos contactamos por WhatsApp o mail para conocer tu idea, definir el tipo de sesión, la locación y coordinar todos los detalles.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "La sesión",
    description:
      "Nos encontramos en el lugar acordado. Te guío durante toda la sesión para que te sientas cómoda/o y natural frente a la cámara.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Entrega",
    description:
      "Recibís tus fotos editadas profesionalmente en una galería online privada, listas para descargar y compartir.",
    icon: Image,
  },
]

const gear = [
  { icon: Camera, label: "Canon EOS R6 Mark II" },
  { icon: Aperture, label: "RF 50mm f/1.2L, RF 85mm f/1.2L" },
  { icon: Sun, label: "Godox AD600 Pro + modificadores" },
  { icon: Monitor, label: "Calibración de color profesional" },
]

export default function SobreMiPage() {
  return (
    <main>
      <Navbar />

      {/* Bio section */}
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
            {/* Profile photo */}
            <div className="lg:w-2/5">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-lg">
                <img
                  src="/sobre-mi/Jair-4k-Editada.jpg"
                  alt="Jair Isoardi - Fotógrafo profesional"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 lg:pt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Sobre mí
              </p>
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Jair Isoardi
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Fotógrafo profesional &middot; La Pampa, Argentina
              </p>

              <div className="mt-8 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Soy Jair, fotógrafo profesional nacido y criado en La Pampa.
                  Hace más de 8 años que me dedico a capturar momentos que
                  importan: desde la emoción de unos 15 hasta la dulzura de una
                  espera, pasando por retratos que reflejan la identidad de cada
                  persona.
                </p>
                <p>
                  Mi enfoque combina técnica profesional con un trato cercano y
                  relajado. Creo que las mejores fotos nacen cuando la persona
                  frente a la cámara se siente cómoda y libre. Por eso, cada
                  sesión es una experiencia personalizada donde la prioridad sos
                  vos.
                </p>
                <p>
                  Trabajo tanto en estudio como en exteriores, aprovechando la
                  belleza natural de La Pampa: sus campos, lagunas y atardeceres
                  únicos. Mi objetivo es crear imágenes que te emocionen cada
                  vez que las mires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How a session works */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Proceso
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              {"¿Cómo funciona una sesión?"}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-start rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-secondary">
                  <step.icon className="size-5 text-accent" />
                </div>
                <p className="text-xs font-semibold text-accent">
                  {step.number}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Equipo
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Mi equipo de trabajo
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {gear.map((g) => (
              <div
                key={g.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <g.icon className="size-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {g.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
