import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/articles';
import { siteConfig } from '@/lib/config';
import { defaultOpenGraphImage, defaultTwitterImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Artículos de Selah',
  description:
    'Artículos prácticos sobre ansiedad, estrés, burnout, pareja, duelo, autoestima y salud mental infantil escritos con enfoque psicológico y fuentes confiables.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/articulos`,
  },
  openGraph: {
    title: 'Artículos de Selah | Selah',
    description:
      'Información práctica y responsable sobre salud mental, terapia online y bienestar emocional.',
    url: `${siteConfig.baseUrl}/articulos`,
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artículos de Selah | Selah',
    description:
      'Información práctica y responsable sobre salud mental, terapia online y bienestar emocional.',
    images: [defaultTwitterImage],
  },
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Artículos
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Lecturas útiles sobre salud mental
          </h1>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Guías claras para entender lo que sientes, reconocer señales de alerta y saber
            cuándo buscar apoyo psicológico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articulos/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 rounded-full text-xs font-semibold text-blue-600">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString('es-GT', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {article.excerpt}
                </p>

                <div className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                  Leer artículo
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
