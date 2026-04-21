import { Service, Benefit, Philosophy, FAQ, Resource, Stat, Charla } from '@/types';

// Hero Stats
export const stats: Stat[] = [
    { number: '500+', label: 'Pacientes Atendidos' },
    { number: '15+', label: 'Años de Experiencia' },
    { number: '100%', label: 'Online' },
];

// Benefits Section
export const benefits: Benefit[] = [
    {
        id: 'brief-therapy',
        title: 'Terapia Breve y Efectiva',
        description: 'Valoramos tu tiempo. Nuestro enfoque se centra en soluciones prácticas y herramientas concretas para mejorar tu bienestar en menos sesiones.',
        icon: 'clock',
    },
    {
        id: 'online-attention',
        title: 'Atención 100% Online',
        description: 'La misma calidad clínica y calidez humana de una consulta presencial, pero adaptada a tu agenda y sin tiempos de traslado.',
        icon: 'video',
    },
    {
        id: 'integral-approach',
        title: 'Enfoque Integral',
        description: 'Desde el manejo del estrés ejecutivo hasta el desarrollo emocional infantil. Adaptamos la metodología a cada etapa de la vida.',
        icon: 'users',
    },
];

// Philosophy Cards (About Section)
export const philosophyCards: Philosophy[] = [
    {
        id: 'non-judgmental',
        title: 'Te escuchamos sin juzgar',
        description: 'Creemos incondicionalmente en la capacidad de cada persona para superar sus adversidades. Nuestro enfoque centrado en el ser humano reconoce tu singularidad y respeta tu proceso individual.',
        icon: 'heart',
    },
    {
        id: 'present-future',
        title: 'Nos enfocamos en el presente y futuro',
        description: 'Aunque honramos tu historia, nuestras sesiones buscan brindarte herramientas prácticas para resolver los conflictos que te afectan hoy y construir el futuro que deseas.',
        icon: 'target',
    },
    {
        id: 'academic-rigor',
        title: 'Rigor Académico',
        description: 'Todo nuestro equipo cuenta con formación especializada y actualización constante para ofrecerte un acompañamiento ético y basado en evidencia.',
        icon: 'award',
    },
];

// Services
export const services: Service[] = [
    {
        id: 'individual-therapy',
        title: 'Terapia Individual (Adultos)',
        description: 'Espacio personal para gestionar ansiedad, depresión o crisis vitales con un enfoque práctico y compasivo.',
        features: [
            'Sesiones de 50 minutos',
            'Horarios flexibles',
            'Enfoque personalizado',
        ],
        icon: 'user',
    },
    {
        id: 'couples-therapy',
        title: 'Terapia de Pareja',
        description: 'Herramientas de comunicación y resolución de conflictos para reconstruir el vínculo y la confianza.',
        features: [
            'Comunicación efectiva',
            'Resolución de conflictos',
            'Reconstrucción de vínculos',
        ],
        icon: 'users-couple',
        featured: true,
    },
    {
        id: 'child-teen-therapy',
        title: 'Psicología Infantil y Adolescente',
        description: 'Acompañamiento especializado para navegar los retos del desarrollo, las emociones y el ámbito escolar.',
        features: [
            'Métodos lúdicos y creativos',
            'Orientación a padres',
            'Ambiente seguro y empático',
        ],
        icon: 'child',
    },
    {
        id: 'executive-stress',
        title: 'Manejo de Estrés para Ejecutivos',
        description: 'Sesiones enfocadas en el alto rendimiento, prevención del burnout y equilibrio vida-trabajo.',
        features: [
            'Estrategias de afrontamiento',
            'Gestión del tiempo',
            'Prevención de burnout',
        ],
        icon: 'briefcase',
    },
    {
        id: 'workshops',
        title: 'Talleres y Grupos',
        description: 'Sesiones grupales sobre mindfulness, manejo de ansiedad, habilidades sociales y más. Aprende en comunidad.',
        features: [
            'Temáticas variadas',
            'Grupos reducidos',
            'Interacción enriquecedora',
        ],
        icon: 'group',
    },
    {
        id: 'seniors',
        title: 'Adultos Mayores',
        description: 'Apoyo emocional enfocado en la calidad de vida, los cambios vitales y la gestión del duelo.',
        features: [
            'Atención especializada',
            'Ritmo adaptado',
            'Soporte emocional',
        ],
        icon: 'senior',
    },
];

// Resources/Blog Articles
export const resources: Resource[] = [
    {
        id: 'anxiety-techniques',
        title: '5 Técnicas Efectivas para Manejar la Ansiedad',
        description: 'Descubre estrategias prácticas y basadas en evidencia para reducir la ansiedad en tu día a día.',
        category: 'Ansiedad',
        readTime: '5 min lectura',
        image: '/images/article-1.jpg',
        link: '#',
    },
    {
        id: 'couple-communication',
        title: 'Comunicación Asertiva en la Pareja',
        description: 'Aprende a expresar tus necesidades y escuchar activamente para fortalecer tu relación.',
        category: 'Relaciones',
        readTime: '7 min lectura',
        image: '/images/article-2.jpg',
        link: '#',
    },
    {
        id: 'child-mental-health',
        title: 'Señales de Alerta en la Salud Mental Infantil',
        description: 'Guía para padres: cómo identificar cuándo tu hijo necesita apoyo profesional.',
        category: 'Familia',
        readTime: '6 min lectura',
        image: '/images/article-3.jpg',
        link: '#',
    },
];

// FAQs
export const faqs: FAQ[] = [
    {
        id: 'how-online-therapy-works',
        question: '¿Cómo funciona la terapia online?',
        answer: 'La terapia online funciona igual que la presencial, pero desde la comodidad de tu hogar. Utilizamos plataformas seguras de videollamada (Zoom, Google Meet) donde tendrás sesiones privadas y confidenciales con tu terapeuta. Solo necesitas una conexión a internet estable, un dispositivo con cámara y micrófono, y un espacio tranquilo.',
    },
    {
        id: 'session-duration-cost',
        question: '¿Cuánto dura una sesión y cuál es su costo?',
        answer: 'Cada sesión tiene una duración de 50 minutos. Los costos varían según el tipo de terapia. Para conocer nuestras tarifas actualizadas y opciones de pago, te invitamos a contactarnos directamente por WhatsApp o agendar una consulta inicial sin costo.',
    },
    {
        id: 'payment-methods',
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos transferencias bancarias, pagos con tarjeta de crédito/débito, y plataformas digitales como PayPal. El pago se realiza antes o al inicio de cada sesión para confirmar tu cita.',
    },
    {
        id: 'number-of-sessions',
        question: '¿Cuántas sesiones necesitaré?',
        answer: 'Trabajamos con terapia breve orientada a soluciones, lo que significa que nos enfocamos en resultados concretos. El número de sesiones varía según cada persona y situación. Algunos pacientes ven mejoras en 6-8 sesiones, mientras que otros procesos pueden requerir más tiempo. Evaluaremos tu progreso juntos de manera continua.',
    },
    {
        id: 'online-effectiveness',
        question: '¿La terapia online es tan efectiva como la presencial?',
        answer: 'Sí. Múltiples estudios científicos demuestran que la terapia online es igual de efectiva que la presencial para la mayoría de las condiciones. Además, ofrece ventajas como mayor flexibilidad, eliminación de tiempos de traslado, y la comodidad de estar en tu propio espacio seguro.',
    },
    {
        id: 'how-to-schedule',
        question: '¿Cómo agendo mi primera cita?',
        answer: 'Es muy sencillo. Puedes hacer clic en el botón "Reservar mi sesión online" que te llevará a nuestro calendario de Google donde podrás elegir el día y hora que mejor te convenga. También puedes contactarnos por WhatsApp para recibir asistencia personalizada en el proceso de agendamiento.',
    },
    {
        id: 'confidentiality',
        question: '¿Mis datos y conversaciones son confidenciales?',
        answer: 'Absolutamente. Cumplimos con todos los estándares éticos y legales de confidencialidad profesional. Utilizamos plataformas seguras con encriptación de datos, y toda la información compartida en sesión está protegida por el secreto profesional.',
    },
];

// Contact Information
export const contactInfo = {
    email: 'contacto@saludmental.com',
    phone: '+502 1234 5678',
    whatsapp: '+5021234567',
    location: 'Ciudad de Huehuetenango, Guatemala',
    socialMedia: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
    },
};

export const charlasData: Charla[] = [
    {
        id: '1',
        titulo: 'Manejo del Estrés en Tiempos de Cambio',
        fecha: '15 de Mayo, 2024',
        descripcion_corta: 'Una charla enfocada en herramientas prácticas para gestionar la incertidumbre y el estrés laboral.',
        imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '2',
        titulo: 'Crianza Positiva y Límites',
        fecha: '22 de Junio, 2024',
        descripcion_corta: 'Espacio para padres sobre cómo establecer límites desde el amor y la comprensión.',
        imageUrl: 'https://images.unsplash.com/photo-1536604498063-5873d01dfb2d?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '3',
        titulo: 'Mindfulness para la Vida Diaria',
        fecha: '10 de Julio, 2024',
        descripcion_corta: 'Taller teórico-práctico sobre la atención plena y su impacto en la salud mental.',
        imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    },
];
