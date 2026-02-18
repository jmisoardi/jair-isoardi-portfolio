import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookNow } from "@/components/book-now"

export function CtaSection() {
  return (
    <section className="bg-foreground py-24 text-background">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-background/50">
          Trabajemos juntos
        </p>
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
          Tu próxima sesión de fotos te está esperando
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-background/60">
          Cada sesión es una experiencia única y personalizada. Contactame para
          crear algo increíble juntos.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookNow
            size="lg"
            className="rounded-full bg-background px-8 text-foreground hover:bg-background/90"
          />
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-background/20 bg-transparent px-8 text-background hover:bg-background/10 hover:text-background"
            asChild
          >
            <Link href="/contacto">
              Enviar mensaje
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
