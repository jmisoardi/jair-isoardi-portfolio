"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Category } from "@/lib/data"

interface BookNowProps {
  category?: Category | string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
}

export function BookNow({
  category = "fotografía",
  variant = "default",
  size = "default",
  className,
  children,
}: BookNowProps) {
  const message = encodeURIComponent(
    `Hola Jair! Quisiera reservar una sesión de ${category}.`
  )
  const whatsappUrl = `https://wa.me/5491100000000?text=${message}`

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="size-4" />
        {children ?? "Reservar por WhatsApp"}
      </a>
    </Button>
  )
}
