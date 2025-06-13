import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">Testimonis</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          El que diuen els nostres clients sobre les nostres experiències
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="L'experiència amb en Melcior va ser extraordinària. El seu coneixement sobre els vins de la regió és impressionant i la manera com ho transmet és apassionant."
            author="Maria Puig"
            role="Directora de Restaurant"
          />

          <TestimonialCard
            quote="La formació que va rebre el nostre personal de sala ha millorat significativament el servei i les vendes de vi al nostre restaurant. Totalment recomanable."
            author="Joan Martí"
            role="Propietari de Restaurant"
          />

          <TestimonialCard
            quote="El tast privat que va organitzar en Melcior per al nostre aniversari va ser inoblidable. Una selecció de vins perfecta i explicacions clares i entretingudes."
            author="Laura Costa"
            role="Client Particular"
          />

          <TestimonialCard
            quote="Gràcies a l'assessorament d'en Melcior hem pogut millorar la nostra carta de vins i formar al nostre personal. Un professional excel·lent."
            author="Carles Riera"
            role="Gerent d'Hotel"
          />

          <TestimonialCard
            quote="La ruta enoturística personalitzada que ens va preparar va ser una experiència única. Coneix cada racó de la Costa Brava i els millors cellers."
            author="Elena Martínez"
            role="Client Particular"
          />

          <TestimonialCard
            quote="La passió i el coneixement d'en Melcior sobre els vins és contagiosa. Ha aconseguit que tot el nostre equip s'interessi més pel món del vi."
            author="Pere Casals"
            role="Director de Restaurant"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
      <Quote className="h-8 w-8 text-[#8c1c3c]/30 mb-4" />
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  )
}
