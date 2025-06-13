export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#8c1c3c]">Sobre Melcior Montero</h2>
            <p className="text-lg mb-4">
              Sóc Melcior Montero, i estic al darrere de Temps per Vi, un projecte que neix amb l'objectiu
              d'elevar el servei en hotels i restaurants mitjançant formacions especialitzades per a equips
              de sala.
            </p>
            <p className="text-lg mb-4">
              La meva dedicació i passió em van portar a entrar en l'elit de la gastronomia. Vaig tenir el
              privilegi de treballar durant més de 10 anys a El Celler de Can Roca, al costat dels germans
              Roca. Allà vaig aprendre que l'hospitalitat és un art, el treball en equip és la clau de l'èxit i que
              els petits detalls marquen la diferència.
            </p>
            <p className="text-lg mb-4">
              A part d'això ofereixo tast de vins a domicili a nivell formatiu, per aprendre d'aquest apassionant
              món o simplement, gaudir i passar una bona estona amb família i amics.
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

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/460352033_836288632052180_7956335807192663494_n.jpg-DdOBIPLK0IoOU45bZCxny7VzEJ0xiH.jpeg"
              alt="Melcior Montero sommelier"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
