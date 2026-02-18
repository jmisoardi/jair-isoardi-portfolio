"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { galleryItems } from "@/lib/data"

const featured = galleryItems.slice(0, 12)

export function FeaturedGallery() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Portfolio
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Trabajo destacado
            </h2>
          </div>
          <Button variant="ghost" className="group rounded-full" asChild>
            <Link href="/portfolio">
              Ver todo el portfolio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div
                className={
                  item.aspect === "portrait" ? "aspect-[4/5]" : "aspect-square"
                }
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {item.category}
                </p>
                <h3 className="mt-1 text-sm font-medium text-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
