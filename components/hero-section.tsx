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
    <section className="relative min-h-screen flex items-center">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468268764_923962722604938_5881729319542442687_n.jpg-3U2PsCOgoftA0UAMzCdDm612byzIJN.jpeg"
        alt="Costa Brava wine tasting experience"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-col items-start max-w-3xl py-8 sm:py-16">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/melcior-3.jpg-p5Qms7OmzCuiwEpB5IG6SdcKPF471f.jpeg"
            alt="Melcior Montero - Sommelier"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white mb-6 object-cover"
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{t.hero.name}</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-6">{t.hero.title}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 py-3 bg-[#8c1c3c] hover:bg-[#6d1530] text-white rounded-lg font-medium transition-colors w-full sm:w-auto"
            >
              {t.hero.contact}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-6 py-3 border-2 border-white text-white hover:bg-white/20 rounded-lg font-medium transition-colors w-full sm:w-auto"
            >
              {t.hero.services}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-8 sm:mt-12">
            <div className="flex items-center gap-2">
              <Wine className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-base">{t.hero.wineTasting}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-base">{t.hero.training}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-base">{t.hero.events}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
