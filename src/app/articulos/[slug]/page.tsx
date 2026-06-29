import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { articles, getArticleBySlug } from '@/lib/articles';
import { siteConfig } from '@/lib/config';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: `${siteConfig.baseUrl}/articulos/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Salud Mental`,
      description: article.excerpt,
      url: `${siteConfig.baseUrl}/articulos/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20">
      <article>
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <Link
              href="/articulos"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
            >
              <ArrowLeft size={15} />
              Todos los artículos
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-semibold">
                {article.category}
              </span>
              <span className="text-gray-400">{article.readTime}</span>
              <time dateTime={article.publishedAt} className="text-gray-400">
                {new Date(article.publishedAt).toLocaleDateString('es-GT', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-3xl">
              {article.excerpt}
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-lg mb-10">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
            <div className="space-y-8">
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-lg">{article.intro}</p>
              </section>

              <section className="bg-blue-50 rounded-2xl p-7 border border-blue-100">
                <h2 className="flex items-center gap-2 text-xl font-bold text-blue-900 mb-4">
                  <BookOpen size={20} />
                  Ideas clave
                </h2>
                <ul className="space-y-3">
                  {article.keyTakeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </section>

              {article.sections.map((section) => (
                <section
                  key={section.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Fuentes consultadas</h2>
                <ul className="space-y-3">
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline underline-offset-4 text-sm"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg">
                <Calendar size={32} className="mx-auto mb-3 opacity-90" />
                <h2 className="text-2xl font-bold mb-2">¿Quieres hablarlo con un profesional?</h2>
                <p className="text-white/80 mb-6 max-w-md mx-auto">
                  Agenda una sesión de evaluación y revisemos tu situación con calma,
                  confidencialidad y acompañamiento profesional.
                </p>
                <Link
                  href="/agendar"
                  className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-7 py-3.5 rounded-xl hover:bg-teal-50 transition-colors shadow-md"
                >
                  Agendar cita
                  <ArrowRight size={16} />
                </Link>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-gray-900 mb-3">Nota importante</h2>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Este artículo es informativo y no reemplaza una evaluación psicológica.
                  Si estás en crisis o en riesgo de hacerte daño, busca ayuda de emergencia.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-gray-900 mb-4">Más artículos</h2>
                <div className="space-y-3">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/articulos/${related.slug}`}
                      className="block group"
                    >
                      <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                        {related.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{related.category}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
