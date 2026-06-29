import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { conditions } from '@/lib/conditions';
import { siteConfig } from '@/lib/config';
import { defaultOpenGraphImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Recursos y Condiciones',
  description:
    'Información sobre ansiedad, estrés, depresión, duelo, autoestima, problemas de pareja y salud mental infantil. Aprende a reconocer las señales y cuándo buscar ayuda psicológica.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/recursos`,
  },
  openGraph: {
    title: 'Recursos de Selah | Selah',
    description:
      'Información sobre ansiedad, estrés, depresión, duelo, autoestima, problemas de pareja y salud mental infantil.',
    url: `${siteConfig.baseUrl}/recursos`,
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recursos de Selah | Selah',
    description:
      'Información sobre ansiedad, estrés, depresión, duelo, autoestima, problemas de pareja y salud mental infantil.',
    images: [defaultTwitterImage],
  },
};

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Información y Recursos
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Condiciones que trata la psicología
          </h1>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Aprende a reconocer los síntomas, entender las causas y descubrir cómo la terapia
            puede ayudarte. La información es el primer paso hacia el bienestar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition) => (
            <Link
              key={condition.slug}
              href={`/recursos/${condition.slug}`}
              className={`group bg-gradient-to-br ${condition.color} rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{condition.icon}</span>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                  {condition.title}
                </h2>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {condition.shortDescription}
              </p>

              {/* Top symptoms preview */}
              <ul className="space-y-1 mt-1">
                {condition.symptoms.slice(0, 3).map((symptom) => (
                  <li key={symptom} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    {symptom}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1.5 text-teal-600 text-sm font-semibold mt-auto pt-2 border-t border-gray-200">
                <span>Leer más</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-10 text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            ¿Identifies alguna de estas situaciones en tu vida?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            El primer paso es siempre el más difícil. Agenda una sesión de evaluación
            y encontremos juntos el camino hacia tu bienestar.
          </p>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-md text-lg"
          >
            Agendar mi primera sesión
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
