import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  HeartHandshake,
  Presentation,
  Sprout,
  User,
  Users,
} from 'lucide-react';
import { servicePages } from '@/lib/services';

const iconMap = {
  user: User,
  couple: HeartHandshake,
  child: Sprout,
  briefcase: BriefcaseBusiness,
  group: Presentation,
  senior: Users,
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-sky-50/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="premium-kicker">Servicios</p>
            <h2 className="premium-title mt-5 max-w-3xl text-4xl sm:text-5xl">
              Acompañamiento psicológico para cada etapa de tu vida.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            Atención psicológica online y presencial en Huehuetenango. Los
            talleres, conferencias y charlas se realizan presencialmente en
            Huehuetenango.
          </p>
        </div>

        <div className="mt-16 divide-y divide-slate-300 border-y border-slate-300">
          {servicePages.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group grid gap-5 py-8 transition-colors hover:bg-white/80 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:px-6"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-teal-300 text-teal-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-teal-700">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-slate-900 sm:text-3xl">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                    {service.summary}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 font-semibold text-teal-700">
                  Ver servicio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/servicios" className="premium-button-secondary">
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
