"use client"

import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-[#8c1c3c]">{t.about.title}</h2>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">{t.about.subtitle}</h3>
            <p className="text-base sm:text-lg mb-4 leading-relaxed">
              {t.about.description}
            </p>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              {t.about.mission}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Formació</h3>
                <p>Maître-Sommelier certificat amb especialització en vins catalans i espanyols</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Experiència</h3>
                <p>Més de 10 anys al Celler de Can Roca (3 estrelles Michelin)</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-64 sm:h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460352033_836288632052180_7956335807192663494_n.jpg-DdOBIPLK0IoOU45bZCxny7VzEJ0xiH.jpeg"
              alt="Melcior Montero sommelier"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
