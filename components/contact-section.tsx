"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    // Show success message
    alert("Missatge enviat correctament. Ens posarem en contacte amb tu aviat.")
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">Contacte</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Posa&apos;t en contacte amb nosaltres per a més informació o per reservar una experiència
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Envia&apos;ns un missatge</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nom complet
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Correu electrònic
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telèfon
                </label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Servei d&apos;interès
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servei" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tasting">Tasts de vi</SelectItem>
                    <SelectItem value="training">Formació de personal</SelectItem>
                    <SelectItem value="events">Esdeveniments privats</SelectItem>
                    <SelectItem value="consulting">Assessorament a cellers</SelectItem>
                    <SelectItem value="tours">Rutes enoturístiques</SelectItem>
                    <SelectItem value="pairing">Maridatges</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Missatge
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#8c1c3c] hover:bg-[#6d1530]">
                <Send className="mr-2 h-4 w-4" />
                Enviar missatge
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Informació de contacte</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-4 text-[#8c1c3c] mt-1" />
                <div>
                  <h4 className="font-bold">Telèfon</h4>
                  <p className="text-gray-600">+34 612 345 678</p>
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
                  <h4 className="font-bold">Zona d&apos;influència</h4>
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
          </div>
        </div>
      </div>
    </section>
  )
}
