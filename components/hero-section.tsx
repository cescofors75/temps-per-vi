"use client"

import React from "react";
import { Wine, GraduationCap, CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

// Hero Section actualizado
export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468268764_923962722604938_5881729319542442687_n.jpg-3U2PsCOgoftA0UAMzCdDm612byzIJN.jpeg"
        alt="Costa Brava wine tasting experience"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      <div className="container relative z-10 mx-auto px-4 text-white">
        <div className="flex flex-col items-start max-w-2xl">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/melcior-3.jpg-p5Qms7OmzCuiwEpB5IG6SdcKPF471f.jpeg"
            alt="Melcior Montero - Sommelier"
            className="w-30 h-30 rounded-full border-4 border-white mb-6 object-cover"
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.name}</h1>
          <h2 className="text-xl md:text-2xl font-light mb-6">{t.hero.title}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 py-3 bg-[#8c1c3c] hover:bg-[#6d1530] text-white rounded-lg font-medium transition-colors"
            >
              {t.hero.contact}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-6 py-3 border-2 border-white text-white hover:bg-white/20 rounded-lg font-medium transition-colors"
            >
              {t.hero.services}
            </button>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <Wine className="h-6 w-6" />
              <span>{t.hero.wineTasting}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span>{t.hero.training}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-6 w-6" />
              <span>{t.hero.events}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
