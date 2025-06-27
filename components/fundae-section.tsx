"use client"

import { CheckCircle, Users, GraduationCap, Building, Euro, FileText } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function FundaeSection() {
  const { t } = useLanguage();

  return (
    <section id="fundae" className="py-20 bg-gradient-to-br from-[#8c1c3c]/5 to-[#8c1c3c]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#8c1c3c]">{t.fundae.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.fundae.subtitle}
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
            <CheckCircle className="w-5 h-5 mr-2" />
            {t.fundae.badge}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">{t.fundae.benefits.title}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8c1c3c] rounded-full flex items-center justify-center flex-shrink-0">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{t.fundae.benefits.cost.title}</h4>
                  <p className="text-gray-600">{t.fundae.benefits.cost.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8c1c3c] rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{t.fundae.benefits.process.title}</h4>
                  <p className="text-gray-600">{t.fundae.benefits.process.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8c1c3c] rounded-full flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{t.fundae.benefits.business.title}</h4>
                  <p className="text-gray-600">{t.fundae.benefits.business.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">{t.fundae.courses.title}</h3>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#8c1c3c] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{t.fundae.courses.teamTraining.title}</h4>
                {/*  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{t.fundae.courses.teamTraining.hours}</span>*/}
                </div>
                <p className="text-gray-600 text-sm">{t.fundae.courses.teamTraining.description}</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#8c1c3c] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{t.fundae.courses.wineKnowledge.title}</h4>
                {/*  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{t.fundae.courses.wineKnowledge.hours}</span>*/}
                </div>
                <p className="text-gray-600 text-sm">{t.fundae.courses.wineKnowledge.description}</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#8c1c3c] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{t.fundae.courses.customerService.title}</h4>
                {/*  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{t.fundae.courses.customerService.hours}</span>*/}
                </div>
                <p className="text-gray-600 text-sm">{t.fundae.courses.customerService.description}</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-[#8c1c3c] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{t.fundae.courses.leadership.title}</h4>
                 {/* <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{t.fundae.courses.leadership.hours}</span>*/}
                </div>
                <p className="text-gray-600 text-sm">{t.fundae.courses.leadership.description}</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#8c1c3c]/5 rounded-lg">
              <p className="text-sm text-center font-medium">
                {t.fundae.courses.note}
              </p>
            </div>
          </div>
        </div>

       {/*} <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">{t.fundae.howItWorks.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold mb-2">{t.fundae.howItWorks.step1.title}</h4>
              <p className="text-gray-600 text-sm">{t.fundae.howItWorks.step1.description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold mb-2">{t.fundae.howItWorks.step2.title}</h4>
              <p className="text-gray-600 text-sm">{t.fundae.howItWorks.step2.description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold mb-2">{t.fundae.howItWorks.step3.title}</h4>
              <p className="text-gray-600 text-sm">{t.fundae.howItWorks.step3.description}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8c1c3c] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold mb-2">{t.fundae.howItWorks.step4.title}</h4>
              <p className="text-gray-600 text-sm">{t.fundae.howItWorks.step4.description}</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#contact" className="inline-flex items-center px-8 py-3 bg-[#8c1c3c] hover:bg-[#6d1530] text-white rounded-lg font-medium transition-colors">
              <GraduationCap className="mr-2 h-5 w-5" />
              {t.fundae.cta}
            </a>
          </div>
        </div>*/}
      </div>
    </section>
  );
}

