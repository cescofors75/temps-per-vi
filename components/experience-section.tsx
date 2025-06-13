import { Wine, Users, GraduationCap, Store, CalendarDays, Utensils, Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">Experiència Professional</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Una trajectòria professional dedicada a l'excel·lència en el món del vi i l'hospitalitat
        </p>

        <div className="space-y-12">
          <ExperienceItem
            years="2010-2020"
            title="Maître-Sommelier"
            company="El Celler de Can Roca"
            description="Responsable de la selecció de vins i maridatges en un dels millors restaurants del món amb 3 estrelles Michelin. Vaig començar des de baix, creixent a cada pas, fins a convertir-me en un dels maîtres d'aquest temple gastronòmic."
          />

          <ExperienceItem
            years="2020-Present"
            title="Fundador i Sommelier Independent"
            company="Temps per Vi"
            description="Creació d'un projecte per elevar el servei en hotels i restaurants mitjançant formacions especialitzades. Ofereixo tasts de vi, consultoria i experiències úniques a la Costa Brava."
          />

          <ExperienceItem
            years="2018-Present"
            title="Formador Especialitzat"
            company="Sector Hostaleria"
            description="Formador col·laborador en diverses escoles d'hostaleria i empreses del sector, compartint coneixements sobre servei d'excel·lència i el món del vi."
          />
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Formació i Beneficis per al Teu Equip</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Formacions per al Teu Equip</h4>
              <p className="text-gray-600 text-sm">Claus per oferir un servei impecable i fidelitzar clients</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Motivació d'Equip</h4>
              <p className="text-gray-600 text-sm">Estratègies per millorar la col·laboració i crear un ambient positiu</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                <Wine className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Introducció al Món del Vi</h4>
              <p className="text-gray-600 text-sm">Conèixer per poder vendre i comunicar de manera atractiva</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                <Store className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">FUNDAE Bonificable</h4>
              <p className="text-gray-600 text-sm">Formacions finançades total o parcialment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ years, title, company, description }: {
  years: string;
  title: string;
  company: string;
  description: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/4">
        <div className="text-lg font-bold text-[#8c1c3c]">{years}</div>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-gray-600">{company}</div>
      </div>
      <div className="md:w-3/4">
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}