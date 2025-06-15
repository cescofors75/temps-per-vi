import { LanguageSwitcher } from "@/components/language-switcher"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { FundaeSection } from "@/components/fundae-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <FundaeSection />
      <EventsSection />
      {/*<TestimonialsSection />
      <ContactSection />*/}
      <Footer />
    </main>
  )
}
