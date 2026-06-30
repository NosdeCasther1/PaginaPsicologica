import React from 'react';
import Link from 'next/link';

export type LegalSection = {
  title: string;
  body: string[];
  items?: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  description,
  updatedAt,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-10">
          <Link
            href="/"
            className="inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700 mb-6"
          >
            Volver al inicio
          </Link>
          <p className="text-sm font-semibold text-teal-700 mb-3">
            Ultima actualizacion: {updatedAt}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            {title}
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </header>

        <div className="space-y-6">
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-amber-950 mb-2">
              Nota legal importante
            </h2>
            <p className="text-sm leading-relaxed text-amber-900">
              Este documento es una base informativa para el sitio web de Selah.
              No sustituye asesoramiento legal individualizado. Las normas de
              privacidad, salud digital, consumo, impuestos y ejercicio
              profesional pueden variar por pais y cambiar con el tiempo.
            </p>
          </section>

          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-950 mb-4">
                {section.title}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items && (
                <ul className="mt-5 space-y-3 text-gray-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
