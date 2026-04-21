import React from 'react';
import Image from 'next/image';
import { charlasData } from '@/lib/data';
import { Calendar, Info } from 'lucide-react';

export default function CharlasPage() {
    return (
        <div className="pt-20 min-h-screen bg-slate-50">
            {/* Header / Hero Section for Gallery */}
            <section className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Galería de <span className="text-blue-600">Charlas y Eventos</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Explora los momentos más destacados de nuestras participaciones en eventos de salud mental, 
                            conferencias y talleres comunitarios. Cada imagen representa nuestro compromiso con la 
                            difusión de herramientas para el bienestar psicológico.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {charlasData.map((charla) => (
                        <div 
                            key={charla.id} 
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={charla.imageUrl}
                                    alt={charla.titulo}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {charla.fecha}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {charla.titulo}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {charla.descripcion_corta}
                                </p>
                                
                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Info className="w-4 h-4" />
                                        <span className="text-xs uppercase tracking-wider font-medium">Evento Realizado</span>
                                    </div>
                                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-1">
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
