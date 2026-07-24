import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { getServiceBySlug, servicePages } from '@/lib/services';
import { siteConfig } from '@/lib/config';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  const canonical = `${siteConfig.baseUrl}/servicios/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: canonical,
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.metaDescription,
      images: ['/opengraph-image'],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const canonical = `${siteConfig.baseUrl}/servicios/${service.slug}`;
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: service.title,
        description: service.metaDescription,
        url: canonical,
        provider: {
          '@id': `${siteConfig.baseUrl}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Guatemala',
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${siteConfig.baseUrl}/agendar`,
          serviceLocation: {
            '@type': 'VirtualLocation',
            url: `${siteConfig.baseUrl}/agendar`,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: siteConfig.baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Servicios',
            item: `${siteConfig.baseUrl}/servicios`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.shortTitle,
            item: canonical,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white pb-24 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50/70 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-teal-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Todos los servicios
          </Link>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="premium-kicker">{service.eyebrow}</p>
              <h1 className="premium-title mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                {service.summary}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/agendar" className="premium-button">
                  Agendar sesión
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contacto" className="premium-button-secondary">
                  Resolver una duda
                </Link>
              </div>
            </div>
            <div className="border-l-2 border-teal-500 pl-6">
              <ShieldCheck className="h-6 w-6 text-teal-600" />
              <p className="mt-4 font-serif text-2xl text-slate-900">
                Atención confidencial y 100% online
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                Puedes conectarte desde un espacio privado, sin traslados y con
                acompañamiento desde Guatemala.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="premium-kicker">El servicio</p>
          <h2 className="premium-title mt-4 text-3xl sm:text-4xl">
            Un proceso construido contigo.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{service.intro}</p>

          <div className="mt-14">
            <h2 className="font-serif text-3xl text-slate-900">
              ¿Cuándo puede ayudarte?
            </h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {service.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-t border-slate-200 pt-4 leading-7 text-slate-700"
                >
                  <Check className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="bg-slate-950 p-8 text-white lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
            Qué puedes esperar
          </p>
          <ul className="mt-8 space-y-6">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 leading-7 text-slate-200">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                {benefit}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="bg-sky-50/70 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="premium-kicker">Cómo trabajamos</p>
            <h2 className="premium-title mt-4 text-3xl sm:text-4xl">
              Un proceso claro, humano y flexible.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div key={step.title} className="border-t border-teal-300 pt-6">
                <span className="font-serif text-3xl text-teal-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="premium-kicker">Preguntas frecuentes</p>
        <h2 className="premium-title mt-4 text-3xl sm:text-4xl">
          Información antes de comenzar.
        </h2>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {service.faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="cursor-pointer list-none font-serif text-xl text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="bg-teal-600 px-8 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">
              Da el primer paso
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Podemos conversar sobre lo que necesitas.
            </h2>
          </div>
          <Link
            href="/agendar"
            className="mt-8 inline-flex items-center gap-2 bg-white px-6 py-3 font-semibold text-slate-900 transition-colors hover:bg-sky-50 lg:mt-0"
          >
            Agendar sesión
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
