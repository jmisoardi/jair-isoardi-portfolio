"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookNow } from "@/components/book-now"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=1920&h=1080&fit=crop"
          alt="Sesión fotográfica profesional"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Fotografía profesional &middot; La Pampa, Argentina
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Retratos con identidad. Sesiones en estudio y exterior.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          Pre 15 &bull; Embarazos &bull; Artísticos &bull; Retratos
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
            asChild
          >
            <Link href="/portfolio">
              Ver portfolio
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <BookNow
            size="lg"
            variant="outline"
            className="rounded-full border-foreground/20 px-8 hover:bg-foreground/5"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
