'use client';

import React, { useActionState, useEffect, useRef } from 'react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { contactInfo } from '@/lib/data';
import { sendContactEmail, ContactState } from '@/app/actions/contact';

const initialState: ContactState = {};

export default function ContactSection() {
    const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success && formRef.current) {
            formRef.current.reset();
        }
    }, [state.success]);

    return (
        <section id="contacto" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            ¿Listo para dar el{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                primer paso?
                            </span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Estamos aquí para acompañarte en tu proceso de bienestar. Contáctanos y comencemos juntos.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email</h4>
                                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Teléfono / WhatsApp</h4>
                                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                        {contactInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Ubicación Administrativa</h4>
                                    <p className="text-gray-600">{contactInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a href={contactInfo.socialMedia.facebook} className="w-11 h-11 rounded-xl bg-white hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href={contactInfo.socialMedia.instagram} className="w-11 h-11 rounded-xl bg-white hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href={contactInfo.socialMedia.linkedin} className="w-11 h-11 rounded-xl bg-white hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-md">
                        <form ref={formRef} action={formAction} className="space-y-6">
                            <Input
                                label="Nombre completo"
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                required
                            />

                            <Input
                                label="Correo electrónico"
                                type="email"
                                name="email"
                                placeholder="tu@email.com"
                                required
                            />

                            <Input
                                label="Teléfono"
                                type="tel"
                                name="phone"
                                placeholder="+502 1234 5678"
                            />

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Servicio de interés
                                </label>
                                <select
                                    name="service"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                                    suppressHydrationWarning
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="individual">Terapia Individual</option>
                                    <option value="pareja">Terapia de Pareja</option>
                                    <option value="infantil">Terapia Infantil/Adolescente</option>
                                    <option value="ejecutivo">Manejo de Estrés Ejecutivo</option>
                                    <option value="talleres">Talleres y Grupos</option>
                                    <option value="adultos">Terapia para Adultos Mayores</option>
                                </select>
                            </div>

                            <Textarea
                                label="Mensaje"
                                name="message"
                                rows={4}
                                placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                                required
                            />

                            {state.error && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                                    {state.error}
                                </div>
                            )}

                            {state.success && (
                                <div className="p-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium border border-green-100">
                                    {state.success}
                                </div>
                            )}

                            <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                                {isPending ? (
                                    <>
                                        Enviando...
                                        <svg className="animate-spin h-5 w-5 ml-2" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensaje
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 bg-white rounded-2xl p-12 shadow-md text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{contactInfo.location}</p>
                    <p className="text-sm text-gray-500 mt-1">Ubicación administrativa - Sesiones 100% online</p>
                </div>
            </div>
        </section>
    );
}
