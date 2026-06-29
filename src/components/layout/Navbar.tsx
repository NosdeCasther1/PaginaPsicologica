'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';
const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/#nosotros', label: 'Nosotros' },
    { href: '/#servicios', label: 'Servicios' },
    { href: '/#recursos', label: 'Recursos' },
    { href: '/charlas', label: 'Charlas' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contacto', label: 'Contacto' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Manejo de enlaces con ancla (hashes)
        if (href.includes('#')) {
            const [path, hash] = href.split('#');
            
            // Si ya estamos en la página de destino (el path coincide con el pathname actual)
            if (pathname === path || (path === '/' && pathname === '/')) {
                const element = document.getElementById(hash);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                    setActiveSection(hash);
                }
            }
            // Si no estamos en la página, dejamos que Next.js maneje la navegación normal
        } else if (href === '/' && pathname === '/') {
            // Scroll al inicio si ya estamos en home
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
            setActiveSection('inicio');
        }
    };

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm shadow-sm'
                )}
                aria-label="Navegación principal"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/selah-mark.webp"
                                alt="Selah Psicología y Crecimiento Interior"
                                width={48}
                                height={48}
                                priority
                                className="h-11 w-11 rounded-full object-cover ring-1 ring-teal-100"
                            />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Selah
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => {
                                const isActive = (link.href === '/' && activeSection === 'inicio' && pathname === '/') || 
                                               (link.href.includes('#') && activeSection === link.href.split('#')[1] && pathname === '/') ||
                                               (pathname === link.href);
                                
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={cn(
                                            'text-sm font-medium transition-colors relative',
                                            isActive
                                                ? 'text-blue-600'
                                                : 'text-gray-600 hover:text-blue-600'
                                        )}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link href="/agendar">
                                <Button size="sm">
                                    Agendar Cita
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={cn('h-0.5 bg-gray-800 transition-all', isMobileMenuOpen && 'rotate-45 translate-y-2')} />
                                <span className={cn('h-0.5 bg-gray-800 transition-all', isMobileMenuOpen && 'opacity-0')} />
                                <span className={cn('h-0.5 bg-gray-800 transition-all', isMobileMenuOpen && '-rotate-45 -translate-y-2')} />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => {
                                    const isActive = (link.href === '/' && activeSection === 'inicio' && pathname === '/') || 
                                                   (link.href.includes('#') && activeSection === link.href.split('#')[1] && pathname === '/') ||
                                                   (pathname === link.href);

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className={cn(
                                                'text-base font-medium transition-colors',
                                                isActive
                                                    ? 'text-blue-600'
                                                    : 'text-gray-600'
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                                <Link href="/agendar" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button size="sm" className="w-full">
                                        Agendar Cita
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

        </>
    );
}

