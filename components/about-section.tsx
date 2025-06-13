import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#8c1c3c]">Sobre Melcior Montero</h2>
            <p className="text-lg mb-4">
              Sommelier amb més de 10 anys d&apos;experiència al prestigiós restaurant Celler de Can Roca, ofereixo els
              meus serveis professionals a la Costa Brava i rodalies.
            </p>
            <p className="text-lg mb-4">
              La meva passió pel vi i el coneixement profund de les varietats locals i internacionals em permeten crear
              experiències úniques i personalitzades per a cada client.
            </p>
            <p className="text-lg mb-4">
              Especialitzat en maridatges, selecció de vins per a esdeveniments i formació de personal de sala per a
              restaurants i hotels.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Formació</h3>
                <p>Sommelier certificat amb especialització en vins catalans i espanyols</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Experiència</h3>
                <p>Més de 10 anys al Celler de Can Roca (3 estrelles Michelin)</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460352033_836288632052180_7956335807192663494_n.jpg-DdOBIPLK0IoOU45bZCxny7VzEJ0xiH.jpeg"
              alt="Melcior Montero sommelier"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
