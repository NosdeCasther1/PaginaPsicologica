import React from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import { resources } from '@/lib/data';

export default function ResourcesSection() {
    return (
        <section id="recursos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                        Recursos
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Artículos sobre{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            salud mental
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Información valiosa para tu bienestar emocional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                        <Card key={resource.id} className="p-0 overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                                    {resource.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                                <p className="text-gray-600 mb-4">{resource.description}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">📖 {resource.readTime}</span>
                                    <a
                                        href={resource.link}
                                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                                    >
                                        Leer más →
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
