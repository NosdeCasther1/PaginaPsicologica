import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicePages } from '@/lib/services';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Servicios de terapia psicológica online',
  description:
    'Conoce los servicios de terapia psicológica online de Selah para adultos, parejas, niños, adolescentes, ejecutivos, grupos y adultos mayores.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/servicios`,
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-32">
      <section className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="premium-kicker">Servicios</p>
          <h1 className="premium-title mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Acompañamiento psicológico para cada etapa de la vida.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Atención 100% online desde Guatemala, con un proceso confidencial,
            humano y adaptado a las necesidades de cada persona.
          </p>
        </div>

        <div className="mt-16 divide-y divide-slate-200 border-y border-slate-200">
          {servicePages.map((service, index) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="group grid gap-6 py-9 transition-colors hover:bg-sky-50/50 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:px-6"
            >
              <span className="font-serif text-2xl text-teal-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-serif text-2xl text-slate-900 sm:text-3xl">
                  {service.shortTitle}
                </h2>
                <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                  {service.summary}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-semibold text-teal-700">
                Conocer servicio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
