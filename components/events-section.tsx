import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export function EventsSection() {
  return (
    <section id="events" className="py-20 bg-[#8c1c3c]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">Propers Esdeveniments</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Descobreix les nostres experiències de tast i formació
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488260734_17892024252221828_405772439183229151_n.jpg-ABOx7i2iIPQiVlQ8i9V12drprDQix0.jpeg"
            title="Tast de Vins Sant Jordi"
            date="22 d'abril, 2025"
            location="Sala de Juntes - Farinera Teixidor"
            description="Celebra Sant Jordi amb una experiència única de tast de vins. Places limitades!"
          />

          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480280779_17869262043313976_971015795609725576_n.jpg-hYdSdeAMEMwFiP8SuJdRpmEap0Fqk6.jpeg"
            title="Tast de Vins per a 6 Persones"
            date="15 de maig, 2025"
            location="Restaurant Can Candela"
            description="Sorteig d'un tast de vins exclusiu per a 6 persones. Participa ara!"
          />

          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468268764_923962722604938_5881729319542442687_n.jpg-3U2PsCOgoftA0UAMzCdDm612byzIJN.jpeg"
            title="Tast de Vins a la Costa Brava"
            date="30 de juny, 2025"
            location="Terrassa amb vistes al mar"
            description="Gaudeix d'un tast de vins amb les millors vistes de la Costa Brava."
          />
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#8c1c3c] hover:bg-[#6d1530]">
            <CalendarDays className="mr-2 h-4 w-4" />
            Veure tots els esdeveniments
          </Button>
        </div>
      </div>
    </section>
  )
}

function EventCard({
  image,
  title,
  date,
  location,
  description,
}: {
  image: string
  title: string
  date: string
  location: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-1">
          <CalendarDays className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="text-gray-600 mb-4">
          <span>{location}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button
          variant="outline"
          className="w-full border-[#8c1c3c] text-[#8c1c3c] hover:bg-[#8c1c3c] hover:text-white"
        >
          Reservar plaça
        </Button>
      </div>
    </div>
  )
}
