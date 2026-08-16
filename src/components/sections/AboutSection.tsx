import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const principles = [
  'Escucha respetuosa y sin juicios',
  'Objetivos terapéuticos claros',
  'Herramientas aplicables a la vida cotidiana',
  'Seguimiento adaptado a cada proceso',
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div className="relative min-h-[480px] overflow-hidden bg-sky-50 lg:min-h-[620px]">
          <Image
            src="/images/hero-image.jpg"
            alt="Mujer en sesión de terapia psicológica online desde la comodidad de su hogar"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>

        <div className="lg:pl-10">
          <p className="premium-kicker">El enfoque de Selah</p>
          <h2 className="premium-title mt-5 text-4xl sm:text-5xl">
            Psicología profesional con calidez humana.
          </h2>
          <p className="mt-7 text-lg leading-8 text-slate-600">
            En Selah entendemos la terapia como un proceso colaborativo. No se
            trata solo de hablar sobre lo que duele, sino de comprenderlo,
            reconocer tus recursos y construir cambios que tengan sentido para ti.
          </p>
          <p className="mt-5 leading-7 text-slate-600">
            Trabajamos desde una mirada humana y orientada a soluciones, cuidando
            la privacidad, el ritmo y la singularidad de cada persona.
          </p>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle} className="flex gap-3 border-t border-slate-200 pt-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                <span className="text-sm font-medium leading-6 text-slate-700">
                  {principle}
                </span>
              </li>
            ))}
          </ul>

          <Link href="/servicios" className="mt-10 inline-flex items-center gap-2 font-bold text-teal-700">
            Conocer nuestros servicios
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
