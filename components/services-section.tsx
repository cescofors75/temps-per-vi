"use client"

import { Wine, Users, GraduationCap, Store, FileText } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">{t.services.title}</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          {t.services.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Wine />}
            title={t.services.consulting.title}
            description={t.services.consulting.description}
          />

          <ServiceCard
            icon={<GraduationCap />}
            title={t.services.training.title}
            description={t.services.training.description}
          />

          <ServiceCard
            icon={<Users />}
            title={t.services.events.title}
            description={t.services.events.description}
          />

          <ServiceCard
            icon={<Store />}
            title={t.services.management.title}
            description={t.services.management.description}
          />

        </div>

        {/* Botón para el dossier completo */}
        <div className="mt-12 text-center">
          <a 
            href="/Tempspervi.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8c1c3c] hover:bg-[#6d1530] text-white rounded-lg font-medium transition-colors"
          >
            <FileText className="h-5 w-5" />
            {t.services.downloadDossier}
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-[#8c1c3c]/10 rounded-full flex items-center justify-center mb-4 text-[#8c1c3c]">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}