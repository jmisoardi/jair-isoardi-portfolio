"use client"

import { useEffect } from "react"
import { X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookNow } from "@/components/book-now"
import type { GalleryItem } from "@/lib/data"

interface LightboxProps {
  item: GalleryItem
  onClose: () => void
}

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-card shadow-2xl">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 size-9 rounded-full bg-card/80 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X className="size-4" />
        </Button>

        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="flex-1 md:max-w-[60%]">
            <div className="aspect-[3/2] md:aspect-auto md:h-full">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                {item.category}
              </p>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {item.title}
              </h2>
              <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" />
                {item.location}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div className="mt-8">
              <BookNow
                category={item.category}
                className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Reservar este estilo
              </BookNow>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
