import Link from "next/link"
import { Instagram, MapPin, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Jair Isoardi
              </h3>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Fotografía Profesional
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Retratos con identidad. Sesiones en estudio y exterior en La
              Pampa, Argentina.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navegación
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Servicios", href: "/servicios" },
                { label: "Sobre mí", href: "/sobre-mi" },
                { label: "Contacto", href: "/contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/jairisoardi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="size-4" />
                @jairisoardi
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href="mailto:contacto@jairisoardi.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                contacto@jairisoardi.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                Santa Rosa, La Pampa, Argentina
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Jair Isoardi Fotografía. Todos
            los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/jairisoardi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
