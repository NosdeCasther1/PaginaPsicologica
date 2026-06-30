import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import { articles } from '@/lib/articles';

export default function ResourcesSection() {
    const featuredArticles = articles.slice(0, 3);

    return (
        <section id="recursos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                        Recursos
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Artículos sobre{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            salud mental
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Información práctica, responsable y basada en fuentes confiables para tu bienestar emocional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredArticles.map((article) => (
                        <Card key={article.slug} className="p-0 overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                                    {article.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">📖 {article.readTime}</span>
                                    <Link
                                        href={`/articulos/${article.slug}`}
                                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                                        aria-label={`Leer artículo: ${article.title}`}
                                    >
                                        Leer más →
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/articulos"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-blue-100 text-blue-600 font-semibold hover:bg-blue-50 transition-colors shadow-sm"
                    >
                        Ver todos los artículos
                    </Link>
                </div>
            </div>
        </section>
    );
}
