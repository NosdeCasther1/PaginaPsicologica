import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    'Hola, me gustaría recibir información sobre la atención psicológica.',
  );

  return (
    <section id="inicio" className="overflow-hidden border-b border-slate-200 bg-white pt-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src="/images/hero-psychologist-premium.webp"
            alt="Psicóloga en un espacio profesional de atención en Huehuetenango"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="58vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-[24%] to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_top,rgb(255,255,255)_0%,rgba(255,255,255,0.94)_11%,rgba(255,255,255,0.78)_26%,rgba(255,255,255,0.5)_46%,rgba(255,255,255,0.22)_69%,rgba(255,255,255,0)_100%)]"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 flex min-h-[760px] items-center px-6 py-16 sm:py-20 lg:w-[58%] lg:py-24 lg:pr-12">
          <div className="max-w-2xl">
            <p className="premium-kicker">
              Terapia online en toda Guatemala · Presencial en Huehuetenango
            </p>
            <h1 className="premium-title mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Claridad, equilibrio y bienestar emocional.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Acompañamiento psicológico profesional para adultos, parejas,
              niños, adolescentes y familias. Atención online disponible en toda
              Guatemala y atención presencial únicamente en Huehuetenango.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/agendar" className="premium-button">
                Agendar una sesión
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={`${siteConfig.links.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button-secondary"
              >
                Consultar por WhatsApp
              </a>
            </div>

            <div className="mt-10 flex items-start gap-3 border-t border-slate-200 pt-6">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
              <p className="text-sm leading-6 text-slate-600">
                Terapia online en toda Guatemala · Presencial solo en
                Huehuetenango · Sesiones privadas
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden bg-sky-50 lg:hidden">
          <Image
            src="/images/hero-psychologist-premium.webp"
            alt="Psicóloga en un espacio profesional de atención en Huehuetenango"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.74)_16%,rgba(2,6,23,0.5)_37%,rgba(2,6,23,0.27)_58%,rgba(2,6,23,0.1)_79%,rgba(2,6,23,0)_100%)] px-6 pb-7 pt-36 text-white">
            <p className="font-serif text-2xl">Un espacio seguro para comprenderte.</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
              Terapia online en toda Guatemala y presencial exclusivamente en
              Huehuetenango.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
