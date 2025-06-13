"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"ca" | "es">("ca")

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Canviar idioma / Cambiar idioma</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("ca")}>Català {language === "ca" && "✓"}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("es")}>Español {language === "es" && "✓"}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
