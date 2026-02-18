"use client"

import { useState, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { galleryItems, categories, type GalleryItem } from "@/lib/data"
import { Lightbox } from "@/components/lightbox"
import { cn } from "@/lib/utils"

export function PortfolioGallery() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"
  const [activeFilter, setActiveFilter] = useState(initialCategory)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filters = ["All", ...categories]

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const handleSelect = useCallback((item: GalleryItem) => {
    setSelectedItem(item)
  }, [])

  const handleClose = useCallback(() => {
    setSelectedItem(null)
  }, [])

  return (
    <>
      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
              activeFilter === filter
                ? "bg-foreground text-background shadow-sm"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            )}
          >
            {filter === "All" ? "Todos" : filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
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
              <p className="mt-1 text-xs text-muted-foreground">
                {item.location}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <Lightbox item={selectedItem} onClose={handleClose} />
      )}
    </>
  )
}
