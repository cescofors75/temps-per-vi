import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Wine, GraduationCap, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468268764_923962722604938_5881729319542442687_n.jpg-3U2PsCOgoftA0UAMzCdDm612byzIJN.jpeg"
        alt="Costa Brava wine tasting experience"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      <div className="container relative z-10 mx-auto px-4 text-white">
        <div className="flex flex-col items-start max-w-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/melcior-3.jpg-p5Qms7OmzCuiwEpB5IG6SdcKPF471f.jpeg"
            alt="Melcior Montero - Sommelier"
            width={120}
            height={120}
            className="rounded-full border-4 border-white mb-6 object-cover"
          />

          <div className="mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480280779_17869262043313976_971015795609725576_n.jpg-hYdSdeAMEMwFiP8SuJdRpmEap0Fqk6.jpeg"
              alt="Temps per Vi logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">Melcior Montero</h1>
          <h2 className="text-xl md:text-2xl font-light mb-6">Sommelier Professional · Costa Brava</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Amb més de 10 anys d&apos;experiència al Celler de Can Roca, ofereixo serveis de sommelier, formació de
            personal i experiències úniques al voltant del vi.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#8c1c3c] hover:bg-[#6d1530] text-white">
              Contactar
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Serveis
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <Wine className="h-6 w-6" />
              <span>Tasts de Vi</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span>Formació</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span>Esdeveniments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
