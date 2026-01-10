// Type definitions for Salud Mental website

export interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: string;
    featured?: boolean;
}

export interface Benefit {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Philosophy {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

export interface Resource {
    id: string;
    title: string;
    description: string;
    category: string;
    readTime: string;
    image: string;
    link: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    service: string;
    message: string;
}

export interface Stat {
    number: string;
    label: string;
}
