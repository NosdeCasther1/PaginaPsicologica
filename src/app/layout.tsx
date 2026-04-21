import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ChatWidget from '@/components/chat/ChatWidget';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Salud Mental | Terapia Online Profesional',
        template: '%s | Salud Mental',
    },
    description: 'Psicología y terapia online en Huehuetenango, Guatemala. Atención profesional para niños, adolescentes, parejas y adultos. Mejora tu bienestar mental hoy.',
    keywords: ['psicología', 'terapia online', 'Huehuetenango', 'salud mental', 'psicólogo Guatemala', 'terapia de pareja', 'terapia infantil'],
    authors: [{ name: 'Salud Mental' }],
    creator: 'Salud Mental',
    publisher: 'Salud Mental',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Salud Mental | Terapia Online Profesional',
        description: 'Atención psicológica profesional y cálida en Huehuetenango y modalidad online. Tu bienestar es nuestra prioridad.',
        url: 'https://saludmental.com.gt', // Ajustar a la URL real si se conoce
        siteName: 'Salud Mental',
        locale: 'es_GT',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Salud Mental | Terapia Online Profesional',
        description: 'Psicología y terapia online en Huehuetenango, Guatemala.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        'name': 'Salud Mental',
        'alternateName': 'Clínica de Psicología Salud Mental',
        'url': 'https://saludmental.com.gt',
        'logo': 'https://saludmental.com.gt/logo.png',
        'image': 'https://saludmental.com.gt/clinic-image.jpg',
        'description': 'Clínica de psicología especializada en terapia online y presencial en Huehuetenango.',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Huehuetenango',
            'addressLocality': 'Huehuetenango',
            'addressRegion': 'Huehuetenango',
            'addressCountry': 'GT',
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 15.3147,
            'longitude': -91.4762,
        },
        'telephone': '+502 1234 5678',
        'openingHoursSpecification': [
            {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday'
                ],
                'opens': '08:00',
                'closes': '18:00'
            }
        ],
        'sameAs': [
            'https://www.facebook.com/saludmental',
            'https://www.instagram.com/saludmental'
        ]
    };

    return (
        <html lang="es" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.className} suppressHydrationWarning>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <WhatsAppFloat />
                <ChatWidget />
            </body>
        </html>
    );
}
