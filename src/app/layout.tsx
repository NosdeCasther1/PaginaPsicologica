import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Salud Mental - Terapia Online Profesional | Psicología Humanista',
    description: 'Terapia psicológica 100% online. Atención profesional y cálida para niños, adolescentes, parejas, adultos mayores y ejecutivos. Tu bienestar mental, estés donde estés.',
    keywords: ['terapia online', 'psicología', 'salud mental', 'Guatemala', 'terapia breve', 'humanista'],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <WhatsAppFloat />
            </body>
        </html>
    );
}
