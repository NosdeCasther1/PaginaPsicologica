import React from 'react';
import Link from 'next/link';
import { contactInfo } from '@/lib/data';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">Salud Mental</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Tu bienestar mental, estés donde estés.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold mb-4">Navegación</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
                            <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                            <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#servicios" className="hover:text-white transition-colors">Terapia Individual</a></li>
                            <li><a href="#servicios" className="hover:text-white transition-colors">Terapia de Pareja</a></li>
                            <li><a href="#servicios" className="hover:text-white transition-colors">Terapia Infantil</a></li>
                            <li><a href="#servicios" className="hover:text-white transition-colors">Talleres</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Aviso de Confidencialidad</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} Salud Mental. Todos los derechos reservados.</p>
                    <p className="mt-2">Servicios de psicología profesional 100% en línea.</p>
                </div>
            </div>
        </footer>
    );
}
