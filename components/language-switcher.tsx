"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="bg-white/90 backdrop-blur-sm shadow-lg border-2 hover:bg-white">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Canviar idioma / Change language / Changer de langue / Cambiar idioma</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("ca")}>Català {language === "ca" && "✓"}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("es")}>Español {language === "es" && "✓"}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("fr")}>Français {language === "fr" && "✓"}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("en")}>English {language === "en" && "✓"}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
