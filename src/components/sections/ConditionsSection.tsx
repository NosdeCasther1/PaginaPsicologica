import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { conditions } from '@/lib/conditions';

export default function ConditionsSection() {
  return (
    <section id="condiciones" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="premium-kicker">Motivos de consulta</p>
            <h2 className="premium-title mt-5 text-4xl sm:text-5xl">
              Podemos ayudarte a comprender lo que estás viviendo.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            Estos recursos ofrecen una primera orientación. No sustituyen una
            evaluación psicológica ni buscan que te autodiagnostiques.
          </p>
        </div>

        <div className="mt-16 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((condition) => (
            <Link
              key={condition.slug}
              href={`/recursos/${condition.slug}`}
              className="group flex min-h-64 flex-col border-b border-r border-slate-200 p-7 transition-colors hover:bg-sky-50/70"
            >
              <span className="text-2xl" aria-hidden="true">{condition.icon}</span>
              <h3 className="mt-7 font-serif text-2xl text-slate-900">
                {condition.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                {condition.shortDescription}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-teal-700">
                Saber más
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
