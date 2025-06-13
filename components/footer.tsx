"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-[#8c1c3c] mb-2">Temps per Vi</h3>
              <p className="text-sm text-gray-400">Melcior Montero</p>
            </div>
            <p className="text-gray-400 mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Serveis Principals</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Tasts de Vi a Domicili
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Formació d'Equips de Sala
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Esdeveniments Privats
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Assessorament Professional
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Subscripció Mensual
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  {t.navigation.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  {t.navigation.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  {t.navigation.services}
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white">
                  {t.navigation.events}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  {t.navigation.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacte</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Telèfon:</span>
                <span className="block">607 625 760</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <span className="block">info@tempspervi.com</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Web:</span>
                <span className="block">www.tempspervi.com</span>
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
            &copy; {new Date().getFullYear()} Temps per Vi - Melcior Montero. {t.footer.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Política de privacitat
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Termes i condicions
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              FUNDAE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
