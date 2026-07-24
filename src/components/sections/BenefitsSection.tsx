import { ShieldCheck, Sparkles, Video } from 'lucide-react';

const benefits = [
  {
    title: 'Confidencialidad',
    description: 'Un espacio privado y respetuoso para hablar con libertad.',
    icon: ShieldCheck,
  },
  {
    title: 'Modalidad flexible',
    description: 'Atención online y presencial exclusivamente en Huehuetenango.',
    icon: Video,
  },
  {
    title: 'Proceso personalizado',
    description: 'Objetivos y herramientas adaptados a lo que necesitas.',
    icon: Sparkles,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Tu bienestar emocional merece atención, tiempo y un espacio seguro.
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div key={title} className="border-t border-slate-700 pt-5">
                <Icon className="h-6 w-6 text-teal-300" aria-hidden="true" />
                <h3 className="mt-5 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
