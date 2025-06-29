"use client"

import { CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function EventsSection() {
  const { t } = useLanguage();

  return (
    <section id="events" className="py-20 bg-[#8c1c3c]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">{t.events.title}</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          {t.events.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488260734_17892024252221828_405772439183229151_n.jpg-ABOx7i2iIPQiVlQ8i9V12drprDQix0.jpeg"
            title="Experiències per empreses"
            date="2025"
            location="Demana informació."
            description="Team Building amb Can Candela i Temps Per Vi
T’agradaria oferir al teu equip una experiència diferent i significativa? Et proposem una activitat de Team Building única que combina una cata de vins amb un taller creatiu d’espelmes. Tastarem vins, n’analitzarem els aromes i, a partir d’aquests, crearàs la teva pròpia espelma ecològica amb ampolles de vi reciclades.
Una activitat sensorial i sostenible que reforça la cohesió d’equip i t’emportes un record cap a casa."
          />

          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480280779_17869262043313976_971015795609725576_n.jpg-hYdSdeAMEMwFiP8SuJdRpmEap0Fqk6.jpeg"
            title="Tast de vins mensual"
            date="Dimecres al mes"
            location="Restaurant Ditifet"
            description="Reserva’t un dimecres al mes!
T’esperem al tast de vins que fem mensualment al restaurant Dit i Fet. Una experiència única per descobrir nous vins, compartir bons moments i gaudir d’un ambient acollidor.
Places limitades. Obrim llistes! Demana més informació i no et quedis fora."
          />

          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468268764_923962722604938_5881729319542442687_n.jpg-3U2PsCOgoftA0UAMzCdDm612byzIJN.jpeg"
            title="Subscripció Mensual - Comunitat Vi"
            date="Cada mes"
            location="Tast online + enviament a casa"
            description="Uneix-te a la nostra comunitat. Cada mes una ampolla seleccionada amb tast organolèptic en línia i notes detallades."
          />
        </div>

       {/* <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#8c1c3c] hover:bg-[#6d1530] text-white rounded-lg font-medium">
            <CalendarDays className="mr-2 h-4 w-4 inline" />
            Veure tots els esdeveniments
          </button>
        </div>*/}
      </div>
    </section>
  );
}

function EventCard({ image, title, date, location, description }: {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
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
        <button className="w-full px-4 py-2 border-2 border-[#8c1c3c] text-[#8c1c3c] hover:bg-[#8c1c3c] hover:text-white rounded-lg font-medium transition-colors">
          Reservar plaça
        </button>
      </div>
    </div>
  );
}
