'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#nosotros', label: 'Enfoque' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/articulos', label: 'Artículos' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        isScrolled
          ? 'border-slate-200 bg-white/95 backdrop-blur-xl'
          : 'border-transparent bg-white/90 backdrop-blur-md',
      )}
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Selah, página de inicio">
          <Image
            src="/images/selah-mark.webp"
            alt=""
            width={48}
            height={48}
            priority
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-serif text-2xl text-slate-900">Selah</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const basePath = link.href.split('#')[0];
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : basePath !== '/' && pathname.startsWith(basePath);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-teal-700' : 'text-slate-600 hover:text-slate-950',
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link href="/agendar" className="premium-button min-h-11 px-5 py-2 text-sm">
            Agendar sesión
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-slate-800 lg:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-slate-100 py-3 font-medium text-slate-700"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agendar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="premium-button mt-5 w-full"
            >
              Agendar sesión
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
