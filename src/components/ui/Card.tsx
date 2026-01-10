import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    featured?: boolean;
}

export default function Card({ children, className, hover = true, featured = false }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-2xl bg-white p-8 shadow-sm transition-all duration-300',
                hover && 'hover:shadow-lg hover:-translate-y-2',
                featured && 'border-2 border-blue-500 bg-gradient-to-br from-blue-50/50 to-teal-50/50',
                className
            )}
        >
            {children}
        </div>
    );
}
