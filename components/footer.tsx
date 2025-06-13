import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480280779_17869262043313976_971015795609725576_n.jpg-hYdSdeAMEMwFiP8SuJdRpmEap0Fqk6.jpeg"
                alt="Temps per Vi logo"
                width={150}
                height={75}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Serveis de sommelier professional a la Costa Brava. Experiències úniques al voltant del món del vi.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Serveis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Tasts de Vi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Formació de Personal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Esdeveniments Privats
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Assessorament a Cellers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Rutes Enoturístiques
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enllaços ràpids</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Inici
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  Sobre mi
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white">
                  Serveis
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white">
                  Esdeveniments
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contacte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacte</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Telèfon:</span>
                <span className="block">+34 612 345 678</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <span className="block">info@tempspervi.com</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Zona:</span>
                <span className="block">Costa Brava, Catalunya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Temps per Vi. Tots els drets reservats.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Política de privacitat
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Termes i condicions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
