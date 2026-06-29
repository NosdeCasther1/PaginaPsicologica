import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { conditions } from '@/lib/conditions';

export default function ConditionsSection() {
  return (
    <section className="py-24 bg-white" id="condiciones">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            ¿En qué podemos ayudarte?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Condiciones que tratamos
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            La psicología aborda una amplia variedad de dificultades emocionales y conductuales
            sin necesidad de medicación. Haz clic en cualquier condición para conocer más.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {conditions.map((condition) => (
            <Link
              key={condition.slug}
              href={`/recursos/${condition.slug}`}
              className={`group relative bg-gradient-to-br ${condition.color} rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3`}
            >
              {/* Icon */}
              <span className="text-3xl" aria-hidden="true">
                {condition.icon}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                {condition.title}
              </h3>

              {/* Short description */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
                {condition.shortDescription}
              </p>

              {/* CTA row */}
              <div className="flex items-center gap-1 text-teal-600 text-sm font-semibold mt-auto pt-2">
                <span>Saber más</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}

          {/* "Agendar" CTA card */}
          <Link
            href="/agendar"
            className="group relative bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-3xl" aria-hidden="true">📅</span>
            <h3 className="text-lg font-bold text-white">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-sm text-white/80 leading-relaxed flex-1">
              Agenda una sesión de evaluación y juntos encontramos el mejor camino para ti.
            </p>
            <div className="flex items-center gap-1 text-white text-sm font-semibold mt-auto pt-2">
              <span>Agendar cita</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
