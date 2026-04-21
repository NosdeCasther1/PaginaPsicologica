'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { stats } from '@/lib/data';
import { ArrowRight, MessageCircle } from 'lucide-react';
import BookingModal from '../ui/BookingModal';


export default function HeroSection() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AQUI_VA_EL_ID_REAL";

    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-teal-50">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float-delayed" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm">
                            <span className="text-2xl">✨</span>
                            <span className="text-sm font-semibold text-blue-600">Terapia 100% Online</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Psicología profesional y humana,{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                sin barreras de distancia
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Accede a un espacio terapéutico seguro desde la comodidad de tu hogar. Ofrecemos un enfoque clínico basado en la empatía y la terapia breve centrada en soluciones para niños, adultos, parejas y ejecutivos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" onClick={() => setIsBookingOpen(true)}>
                                Reservar mi sesión online
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="lg"
                                onClick={() => {
                                    const message = encodeURIComponent('Hola, me gustaría agendar una cita de terapia online.');
                                    window.open(`https://wa.me/5021234567?text=${message}`, '_blank');
                                }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Consultar por WhatsApp
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-8 pt-8">
                            {stats.map((stat, index) => (
                                <React.Fragment key={stat.label}>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                                    </div>
                                    {index < stats.length - 1 && (
                                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero-image.jpg"
                                alt="Terapia online profesional"
                                width={600}
                                height={700}
                                className="w-full h-auto"
                                priority
                            />
                            <div className="absolute top-6 right-6 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg flex items-center gap-2 animate-float">
                                <span className="text-2xl">🌱</span>
                                <span className="text-sm font-semibold text-gray-800">Enfoque Humanista</span>
                            </div>
                            <div className="absolute bottom-6 left-6 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg flex items-center gap-2 animate-float-delayed">
                                <span className="text-2xl">💙</span>
                                <span className="text-sm font-semibold text-gray-800">Terapia Breve</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Calendar Modal */}
            <BookingModal 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
                calendarUrl={calendarUrl}
            />
        </section>
    );
}

