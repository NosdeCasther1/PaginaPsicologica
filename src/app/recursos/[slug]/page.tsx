import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, HelpCircle, Lightbulb } from 'lucide-react';
import { conditions, getConditionBySlug } from '@/lib/conditions';
import { siteConfig } from '@/lib/config';
import { defaultOpenGraphImage, defaultTwitterImage } from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) return {};

  return {
    title: condition.title,
    description: condition.shortDescription,
    keywords: condition.keywords,
    alternates: {
      canonical: `${siteConfig.baseUrl}/recursos/${condition.slug}`,
    },
    openGraph: {
      title: `${condition.title} | Salud Mental`,
      description: condition.shortDescription,
      url: `${siteConfig.baseUrl}/recursos/${condition.slug}`,
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${condition.title} | Salud Mental`,
      description: condition.shortDescription,
      images: [defaultTwitterImage],
    },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) notFound();

  const otherConditions = conditions.filter((c) => c.slug !== condition.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20">

      {/* Hero banner */}
      <div className={`bg-gradient-to-br ${condition.color} border-b border-gray-100`}>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/recursos"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            Todos los recursos
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl" aria-hidden="true">{condition.icon}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {condition.title}
            </h1>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {condition.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* Main content */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-[15px] space-y-4">
            {condition.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Two columns: symptoms + causes */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-5">
              <HelpCircle size={20} className="text-teal-500" />
              Síntomas frecuentes
            </h2>
            <ul className="space-y-3">
              {condition.symptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  {symptom}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-5">
              <Lightbulb size={20} className="text-amber-400" />
              Causas comunes
            </h2>
            <ul className="space-y-3">
              {condition.causes.map((cause) => (
                <li key={cause} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {cause}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* How therapy helps */}
        <section className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-teal-800 mb-4">
            ¿Cómo puede ayudar la terapia?
          </h2>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            {condition.howTherapyHelps}
          </p>
        </section>

        {/* When to seek help */}
        <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            ¿Cuándo buscar ayuda profesional?
          </h2>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            {condition.whenToSeekHelp}
          </p>
        </section>

        {/* Services badge */}
        {condition.relatedServices.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-semibold text-gray-500">Servicios relacionados:</span>
            {condition.relatedServices.map((service) => (
              <span
                key={service}
                className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-700 rounded-full shadow-sm"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg">
          <Calendar size={32} className="mx-auto mb-3 opacity-90" />
          <h2 className="text-2xl font-bold mb-2">¿Quieres empezar a trabajar esto?</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Agenda tu primera sesión de evaluación. Es un espacio sin compromisos donde
            conocemos tu situación y definimos el mejor plan para ti.
          </p>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-7 py-3.5 rounded-xl hover:bg-teal-50 transition-colors shadow-md"
          >
            Agendar mi primera sesión
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Related articles */}
        {otherConditions.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {otherConditions.map((other) => (
                <Link
                  key={other.slug}
                  href={`/recursos/${other.slug}`}
                  className={`group bg-gradient-to-br ${other.color} rounded-xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <span className="text-2xl mb-2 block" aria-hidden="true">{other.icon}</span>
                  <h3 className="font-bold text-gray-900 group-hover:text-teal-700 transition-colors text-sm mb-1">
                    {other.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{other.shortDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
