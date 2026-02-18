"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categoryData = [
  {
    title: "Retratos",
    description:
      "Sesiones que capturan tu esencia con luz natural y profesional.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=625&fit=crop",
  },
  {
    title: "Pre 15",
    description:
      "Celebrá tus 15 con fotos que van a durar para siempre.",
    image:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&h=625&fit=crop",
  },
  {
    title: "Embarazos",
    description:
      "Capturamos la dulzura y emoción de la espera.",
    image:
      "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=500&h=625&fit=crop",
  },
  {
    title: "Artísticos",
    description:
      "Fotografía creativa que rompe lo convencional.",
    image:
      "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=500&h=625&fit=crop",
  },
]

export function CategoryCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Especialidades
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Cada historia merece ser contada
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryData.map((cat) => (
            <Link
              key={cat.title}
              href={`/portfolio?category=${encodeURIComponent(cat.title)}`}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <div className="absolute right-4 bottom-4 left-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-background">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-background/70">
                      {cat.description}
                    </p>
                  </div>
                  <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm transition-colors group-hover:bg-background/40">
                    <ArrowUpRight className="size-4 text-background" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
