import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { SafariViewportFix } from "@/components/safari-viewport-fix"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Temps per Vi | Melcior Montero - Sommelier Professional",
  description:
    "Serveis de sommelier professional a la Costa Brava. Més de 10 anys d'experiència al Celler de Can Roca. Tasts de vi, formació de personal i esdeveniments.",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <head>
      </head>
      <body className={inter.className}>
        <SafariViewportFix />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
             <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
