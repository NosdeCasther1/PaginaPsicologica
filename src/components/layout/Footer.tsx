import React from 'react';
import Link from 'next/link';
import { contactInfo } from '@/lib/data';
import { siteConfig } from '@/lib/config';

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
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">Selah</span>
            </div>
            <p className="text-gray-300 text-sm">
              Tu bienestar mental, estes donde estes.
            </p>
            <address className="mt-5 not-italic text-sm text-gray-300 space-y-2">
              <p>{contactInfo.location}</p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.links.whatsapp}
                  className="hover:text-white transition-colors"
                >
                  WhatsApp {contactInfo.phone}
                </a>
              </p>
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegacion secundaria">
            <h2 className="font-semibold mb-4">Navegacion</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/#inicio" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/#nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/#servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/#recursos" className="hover:text-white transition-colors">Recursos</Link></li>
              <li><Link href="/charlas" className="hover:text-white transition-colors">Charlas</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Servicios">
            <h2 className="font-semibold mb-4">Servicios</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#servicios" className="hover:text-white transition-colors">Terapia Individual</Link></li>
              <li><Link href="/#servicios" className="hover:text-white transition-colors">Terapia de Pareja</Link></li>
              <li><Link href="/#servicios" className="hover:text-white transition-colors">Terapia Infantil</Link></li>
              <li><Link href="/#servicios" className="hover:text-white transition-colors">Talleres</Link></li>
              <li><Link href="/agendar" className="font-semibold text-teal-300 hover:text-white transition-colors">Agendar cita</Link></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Informacion legal">
            <h2 className="font-semibold mb-4">Legal</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacidad" className="hover:text-white transition-colors">Politica de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-white transition-colors">Terminos y Condiciones</Link></li>
              <li><Link href="/confidencialidad" className="hover:text-white transition-colors">Aviso de Confidencialidad</Link></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Selah. Todos los derechos reservados.</p>
          <p className="mt-2 text-gray-300">Servicios de psicologia profesional 100% en linea.</p>
        </div>
      </div>
    </footer>
  );
}
