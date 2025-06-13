import { Wine, Users, GraduationCap, Store, CalendarDays, Utensils, Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

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
            title="Tasts de Vi a Domicili"
            description="Experiències sensorials personalitzades. Tast de 6 vins excepcionals per particulars, restaurants i empreses. Formatiu o lúdic, adaptat a les teves preferències."
          />

          <ServiceCard
            icon={<GraduationCap />}
            title="Formació d'Equips de Sala"
            description="Formació especialitzada de 8 hores per a personal de restaurants i hotels. Excel·lència en el servei, motivació d'equip i coneixement del vi. Bonificable per FUNDAE."
          />

          <ServiceCard
            icon={<Users />}
            title="Esdeveniments Privats"
            description="Serveis de sommelier per a esdeveniments privats, celebracions especials i activitats de team building per empreses."
          />

          <ServiceCard
            icon={<Store />}
            title="Assessorament Professional"
            description="Consultoria per a restaurants, hotels i espais d'esdeveniments sobre cartes de vi, servei i posicionament."
          />

          <ServiceCard
            icon={<CalendarDays />}
            title="Subscripció Mensual"
            description="Comunitat de descoberta vinícola. Cada mes una ampolla seleccionada amb tast organolèptic en línia i notes detallades."
          />

          <ServiceCard
            icon={<Utensils />}
            title="Maridatges Especials"
            description="Creació d'experiències de maridatge úniques entre gastronomia local i vins seleccionats per a ocasions especials."
          />
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#8c1c3c]">El Nostre Gran Valor: La Personalització</h3>
          <p className="text-center text-lg mb-6 text-gray-600">
            Cada tast que organitzem és únic i pensat exclusivament per a tu. Ens adaptem completament a les teves preferències.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Personalitzem Tot</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nombre de vins</li>
                <li>• Estil del tast (formatiu, lúdic o combinat)</li>
                <li>• Tipus de vi i fil conductor</li>
                <li>• Durada de l'experiència</li>
                <li>• Espai (casa, empresa o lloc especial)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Experiència Única</h4>
              <p className="text-sm text-gray-600">
                Viatge per diferents regions vitivinícoles, on parlarem del clima, terreny, varietat 
                i posarem en valor la grandíssima feina que hi ha al darrere de cada ampolla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
  );
}