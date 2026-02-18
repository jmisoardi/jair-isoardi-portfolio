"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-secondary">
          <Send className="size-6 text-accent" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          Mensaje enviado
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Gracias por tu mensaje. Te voy a responder dentro de las próximas 24
          horas. Mientras tanto, podés seguirme en Instagram @jairisoardi.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => setSubmitted(false)}
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Nombre completo
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="phone"
            className="text-sm font-medium text-foreground"
          >
            Teléfono
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+54 9 ..."
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-foreground">
            Tipo de sesión
          </Label>
          <Select name="session-type">
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Seleccioná una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retratos">Retratos</SelectItem>
              <SelectItem value="pre15">Pre 15</SelectItem>
              <SelectItem value="embarazos">Embarazos</SelectItem>
              <SelectItem value="artisticos">Artísticos</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="date" className="text-sm font-medium text-foreground">
          Fecha preferida
        </Label>
        <Input
          id="date"
          name="date"
          type="date"
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Mensaje
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Contame un poco sobre la sesión que tenés en mente..."
          className="resize-none rounded-xl"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        <Send className="size-4" />
        Enviar mensaje
      </Button>
    </form>
  )
}
