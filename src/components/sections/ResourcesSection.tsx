import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/articles';

export default function ResourcesSection() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section id="recursos" className="bg-sky-50/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="premium-kicker">Recursos para tu bienestar</p>
            <h2 className="premium-title mt-5 max-w-3xl text-4xl sm:text-5xl">
              Información para comprenderte y tomar decisiones con más claridad.
            </h2>
          </div>
          <Link
            href="/articulos"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-teal-700"
          >
            Ver todos los artículos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-9 lg:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <article key={article.slug} className={index === 0 ? 'lg:col-span-1' : ''}>
              <Link href={`/articulos/${article.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                  {article.category} · {article.readTime}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                  {article.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
                  Leer artículo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
