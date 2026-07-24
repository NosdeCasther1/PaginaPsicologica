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
      <div className="mx-auto grid min-h-[760px] max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex items-center px-6 py-16 sm:py-20 lg:py-24 lg:pr-16">
          <div className="max-w-2xl">
            <p className="premium-kicker">Psicología online y presencial en Huehuetenango</p>
            <h1 className="premium-title mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Claridad, equilibrio y bienestar emocional.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Acompañamiento psicológico profesional para adultos, parejas,
              niños, adolescentes y familias. Atención online desde Guatemala y
              presencial exclusivamente en Huehuetenango.
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
                Atención online · Presencial en Huehuetenango · Sesiones privadas
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] bg-sky-50 lg:min-h-full">
          <Image
            src="/images/hero-psychologist-premium.webp"
            alt="Psicóloga en un espacio profesional de atención en Huehuetenango"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-7 pb-7 pt-24 text-white lg:px-10 lg:pb-10">
            <p className="font-serif text-2xl">Un espacio seguro para comprenderte.</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
              Atención online y presencial con un enfoque práctico, respetuoso y
              centrado en tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
