"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Contact Section actualizado
export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    
    alert("Missatge enviat correctament. Ens posarem en contacte amb tu aviat.");
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-center text-[#8c1c3c]">{t.contact.title}</h2>
        <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-gray-600">
          {t.contact.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Envia'ns un missatge</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1c3c]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1c3c]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telèfon
                </label>
                <input
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1c3c]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Servei d'interès
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1c3c]"
                >
                  <option value="">Selecciona un servei</option>
                  <option value="tasting">Tasts de vi a domicili</option>
                  <option value="training">Formació d'equips de sala (FUNDAE)</option>
                  <option value="events">Esdeveniments privats</option>
                  <option value="consulting">Assessorament professional</option>
                  <option value="subscription">Subscripció mensual</option>
                  <option value="pairing">Maridatges especials</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1c3c]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="w-full px-6 py-3 bg-[#8c1c3c] hover:bg-[#6d1530] text-white rounded-lg font-medium">
                <Send className="mr-2 h-4 w-4 inline" />
                {t.contact.send}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Informació de contacte</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-4 text-[#8c1c3c] mt-1" />
                <div>
                  <h4 className="font-bold">Telèfon</h4>
                  <p className="text-gray-600">607 625 760</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-4 text-[#8c1c3c] mt-1" />
                <div>
                  <h4 className="font-bold">Correu electrònic</h4>
                  <p className="text-gray-600">info@tempspervi.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-4 text-[#8c1c3c] mt-1" />
                <div>
                  <h4 className="font-bold">Zona d'influència</h4>
                  <p className="text-gray-600">Costa Brava i rodalies</p>
                  <p className="text-gray-600">Girona, Catalunya</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Horari</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Dilluns - Divendres</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dissabte</span>
                  <span>10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Diumenge</span>
                  <span>Tancat</span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-lg">
              <h4 className="font-bold mb-4">Informació Important</h4>
              <p className="text-sm text-gray-600 mb-2">
                <strong>FUNDAE Bonificable:</strong> Les nostres formacions poden ser bonificades total o parcialment a través de FUNDAE.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Personalització:</strong> Cada experiència s'adapta completament a les teves necessitats i preferències.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
