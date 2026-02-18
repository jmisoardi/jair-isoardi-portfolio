import { Star } from "lucide-react"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Lo que dicen mis clientes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary font-semibold text-foreground text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sesión de {t.session}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
