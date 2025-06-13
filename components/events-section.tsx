import { Wine, Users, GraduationCap, Store, CalendarDays, Utensils, Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function EventsSection() {
  return (
    <section id="events" className="py-20 bg-[#8c1c3c]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">Propers Esdeveniments</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Descobreix les nostres experiències de tast i formació especialitzada
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488260734_17892024252221828_405772439183229151_n.jpg-ABOx7i2iIPQiVlQ8i9V12drprDQix0.jpeg"
            title="Tast de Vins Sant Jordi"
            date="22 d'abril, 2025"
            location="Sala de Juntes - Farinera Teixidor"
            description="Celebra Sant Jordi amb una experiència única de tast de 6 vins excepcionals. Viatge per regions vitivinícoles catalanes. Places limitades!"
          />

          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480280779_17869262043313976_971015795609725576_n.jpg-hYdSdeAMEMwFiP8SuJdRpmEap0Fqk6.jpeg"
            title="Formació d'Equips de Sala"
            date="15 de maig, 2025"
            location="Restaurant Can Candela"
            description="Formació especialitzada de 8 hores per equips de sala. Servei d'excel·lència, motivació d'equip i coneixement del vi."
          />

          <EventCard
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468268764_923962722604938_5881729319542442687_n.jpg-3U2PsCOgoftA0UAMzCdDm612byzIJN.jpeg"
            title="Subscripció Mensual - Comunitat Vi"
            date="Cada mes"
            location="Tast online + enviament a casa"
            description="Uneix-te a la nostra comunitat. Cada mes una ampolla seleccionada amb tast organolèptic en línia i notes detallades."
          />
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#8c1c3c] hover:bg-[#6d1530] text-white rounded-lg font-medium">
            <CalendarDays className="mr-2 h-4 w-4 inline" />
            Veure tots els esdeveniments
          </button>
        </div>
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
