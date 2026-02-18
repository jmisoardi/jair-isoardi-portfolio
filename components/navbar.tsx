"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BookNow } from "@/components/book-now"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Jair Isoardi
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Fotografía
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="icon" className="size-9 rounded-full" asChild>
            <a
              href="https://instagram.com/jairisoardi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
          </Button>
          <ThemeToggle />
          <BookNow size="sm" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90" />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-full"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-border bg-background/95 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <a
                  href="https://instagram.com/jairisoardi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="size-4" />
                  Instagram
                </a>
              </Button>
              <BookNow size="sm" className="flex-1 rounded-full bg-accent text-accent-foreground hover:bg-accent/90" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
