'use client';

import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { services } from '@/lib/data';
import { User, Check } from 'lucide-react';

export default function ServicesSection() {
    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                        Servicios
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Terapia adaptada a{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            tus necesidades
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Todos nuestros servicios se realizan 100% online mediante videollamada segura.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.id} featured={service.featured} className="flex flex-col">
                            {service.featured && (
                                <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                                    Más Solicitado
                                </div>
                            )}

                            <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                                <User className="w-8 h-8 text-blue-600" />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                        <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant="primary"
                                size="sm"
                                className="w-full"
                                onClick={() => window.open('https://calendar.google.com', '_blank')}
                            >
                                Agendar Sesión
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
