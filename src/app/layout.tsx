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
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const BASE_URL = siteConfig.baseUrl;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Psicología online en Guatemala y presencial en Huehuetenango | Selah',
    template: '%s | Selah',
  },
  description:
    'Terapia psicológica online en toda Guatemala y presencial exclusivamente en Huehuetenango para adultos, parejas, niños, adolescentes y familias.',
  keywords: [
    'terapia psicológica online',
    'psicología online Guatemala',
    'psicólogo presencial Huehuetenango',
    'psicólogo Huehuetenango',
    'terapia de pareja online',
    'psicología infantil',
    'salud mental',
  ],
  authors: [{ name: 'Selah Psicología' }],
  creator: 'Selah Psicología',
  publisher: 'Selah Psicología',
  category: 'Salud mental',
  icons: {
    icon: '/images/selah-logo.png',
    apple: '/images/selah-logo.png',
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'wCH7B1O4qoP5mN3BlGOQD_nMjUoVmC5TyqoFMzQmIMo',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Psicología online en Guatemala y presencial en Huehuetenango | Selah',
    description:
      'Acompañamiento psicológico profesional, humano y confidencial para cada etapa de la vida.',
    url: BASE_URL,
    siteName: 'Selah Psicología',
    locale: 'es_GT',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Selah Psicología y Crecimiento Interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicología online en Guatemala y presencial en Huehuetenango | Selah',
    description:
      'Acompañamiento psicológico profesional, humano y confidencial.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'Selah Psicología',
    alternateName: 'Selah Psicología y Crecimiento Interior',
    url: BASE_URL,
    logo: `${BASE_URL}/images/selah-logo.png`,
    image: `${BASE_URL}/opengraph-image`,
    description: siteConfig.description,
    telephone: '+502 51455816',
    email: siteConfig.contact.email,
    areaServed: [
      {
        '@type': 'Country',
        name: 'Guatemala',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Huehuetenango',
      },
    ],
    serviceType: [
      'Terapia psicológica online',
      'Terapia psicológica presencial en Huehuetenango',
      'Talleres, conferencias y charlas presenciales en Huehuetenango',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Huehuetenango',
      addressRegion: 'Huehuetenango',
      addressCountry: 'GT',
    },
    sameAs: [siteConfig.links.facebook],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+502 51455816',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
      areaServed: 'GT',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Selah Psicología',
    inLanguage: 'es-GT',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };

  return (
    <html lang="es-GT" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <WhatsAppFloat />
        <ClientChatWidget />
      </body>
    </html>
  );
}
