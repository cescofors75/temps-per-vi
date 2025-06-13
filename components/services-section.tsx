import type React from "react"
import { Wine, Users, GraduationCap, Store, CalendarDays, Utensils } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">Serveis</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Ofereixo una àmplia gamma de serveis relacionats amb el món del vi, adaptats a les necessitats de cada client
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Wine />}
            title="Tasts de Vi"
            description="Experiències de tast personalitzades per a grups privats, empreses o esdeveniments especials."
          />

          <ServiceCard
            icon={<GraduationCap />}
            title="Formació de Personal"
            description="Formació especialitzada per a personal de sala de restaurants i hotels sobre servei i coneixement de vins."
          />

          <ServiceCard
            icon={<Users />}
            title="Esdeveniments Privats"
            description="Serveis de sommelier per a esdeveniments privats, celebracions i sopars especials."
          />

          <ServiceCard
            icon={<Store />}
            title="Assessorament a Cellers"
            description="Consultoria per a cellers sobre posicionament, màrqueting i millora de productes."
          />

          <ServiceCard
            icon={<CalendarDays />}
            title="Rutes Enoturístiques"
            description="Disseny i guiatge de rutes enoturístiques personalitzades per la Costa Brava."
          />

          <ServiceCard
            icon={<Utensils />}
            title="Maridatges"
            description="Creació d'experiències de maridatge úniques entre gastronomia local i vins seleccionats."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-[#8c1c3c]/10 rounded-full flex items-center justify-center mb-4 text-[#8c1c3c]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
