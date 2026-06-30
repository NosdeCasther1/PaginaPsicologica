import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import ClientChatWidget from '@/components/chat/ClientChatWidget';
import { siteConfig } from '@/lib/config';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
});

const BASE_URL = siteConfig.baseUrl;

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: 'Selah | Terapia Online Profesional',
        template: '%s | Selah',
    },
    description: 'Psicología y terapia online en Huehuetenango, Guatemala. Atención profesional para niños, adolescentes, parejas y adultos. Mejora tu bienestar mental hoy.',
    keywords: ['psicología', 'terapia online', 'Huehuetenango', 'salud mental', 'psicólogo Guatemala', 'terapia de pareja', 'terapia infantil'],
    authors: [{ name: 'Selah' }],
    creator: 'Selah',
    publisher: 'Selah',
    icons: {
        icon: '/images/selah-logo.png',
        apple: '/images/selah-logo.png',
    },
    alternates: {
        canonical: BASE_URL,
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Selah | Terapia Online Profesional',
        description: 'Atención psicológica profesional y cálida en Huehuetenango y modalidad online. Tu bienestar es nuestra prioridad.',
        url: BASE_URL,
        siteName: 'Selah',
        locale: 'es_GT',
        type: 'website',
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'Selah — Terapia Online Profesional',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Selah | Terapia Online Profesional',
        description: 'Psicología y terapia online en Huehuetenango, Guatemala.',
        images: ['/opengraph-image'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        },
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
        'name': 'Selah',
        'alternateName': 'Clínica de Psicología Selah',
        'url': BASE_URL,
        'logo': `${BASE_URL}/images/selah-logo.png`,
        'image': `${BASE_URL}/opengraph-image`,
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
        'telephone': '+502 51455816',
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
                <main id="main-content" aria-label="Contenido principal">{children}</main>
                <Footer />
                <WhatsAppFloat />
                <ClientChatWidget />
            </body>
        </html>
    );
}
