"use client"

import { Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#8c1c3c]">{t.testimonials.title}</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-600">
          {t.testimonials.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote={t.testimonials.client1.text}
            author={t.testimonials.client1.name}
            role={t.testimonials.client1.position}
          />

          <TestimonialCard
            quote={t.testimonials.client2.text}
            author={t.testimonials.client2.name}
            role={t.testimonials.client2.position}
          />

          <TestimonialCard
            quote={t.testimonials.client3.text}
            author={t.testimonials.client3.name}
            role={t.testimonials.client3.position}
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
      <Quote className="h-8 w-8 text-[#8c1c3c]/30 mb-4" />
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  )
}
