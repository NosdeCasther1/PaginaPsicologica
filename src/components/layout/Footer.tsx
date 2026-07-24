import Image from 'next/image';
import Link from 'next/link';
import { contactInfo } from '@/lib/data';
import { servicePages } from '@/lib/services';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/selah-mark.webp"
                alt=""
                width={52}
                height={52}
                className="h-12 w-12 rounded-full"
              />
              <span className="font-serif text-3xl">Selah</span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-slate-300">
              Atención psicológica online en toda Guatemala y presencial
              únicamente en Huehuetenango.
            </p>
            <a
              href={contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-teal-300 hover:text-white"
            >
              Facebook · Selah Psicología GT
            </a>
          </div>

          <nav aria-label="Navegación secundaria">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">
              Navegación
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li><Link href="/#nosotros" className="hover:text-white">Enfoque</Link></li>
              <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link href="/recursos" className="hover:text-white">Recursos</Link></li>
              <li><Link href="/articulos" className="hover:text-white">Artículos</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">
              Servicios
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {servicePages.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/servicios/${service.slug}`} className="hover:text-white">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-300">
              Contacto
            </h2>
            <address className="mt-6 space-y-3 not-italic text-sm leading-6 text-slate-300">
              <p>{contactInfo.location}</p>
              <p>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a href={siteConfig.links.whatsapp} className="hover:text-white">
                  WhatsApp {contactInfo.phone}
                </a>
              </p>
            </address>
            <Link href="/agendar" className="premium-button mt-7">
              Agendar sesión
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Selah. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white">Términos</Link>
            <Link href="/confidencialidad" className="hover:text-white">Confidencialidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
