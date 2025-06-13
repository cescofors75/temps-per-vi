export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">Experiència</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Una trajectòria professional dedicada a l&apos;excel·lència en el món del vi
        </p>

        <div className="space-y-12">
          <ExperienceItem
            years="2010-2020"
            title="Sommelier"
            company="Celler de Can Roca"
            description="Responsable de la selecció de vins i maridatges en un dels millors restaurants del món amb 3 estrelles Michelin."
          />

          <ExperienceItem
            years="2020-Present"
            title="Sommelier Independent"
            company="Temps per Vi"
            description="Fundador de Temps per Vi, oferint serveis de sommelier, consultoria i formació a la Costa Brava."
          />

          <ExperienceItem
            years="2018-Present"
            title="Formador"
            company="Escoles d'Hostaleria"
            description="Professor col·laborador en diverses escoles d'hostaleria, compartint coneixements sobre el món del vi."
          />
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Reconeixements i Certificacions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold mb-2">Millor Sommelier de Catalunya 2018</h4>
              <p className="text-gray-600">Associació Catalana de Sommeliers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold mb-2">Certificació WSET Nivell 4</h4>
              <p className="text-gray-600">Wine & Spirit Education Trust</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold mb-2">Membre de la Unió d'Associacions de Sommeliers d'Espanya</h4>
              <p className="text-gray-600">UAES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({
  years,
  title,
  company,
  description,
}: { years: string; title: string; company: string; description: string }) {
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
  )
}
