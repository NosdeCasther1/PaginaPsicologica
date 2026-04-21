import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:shadow-lg hover:-translate-y-1',
            secondary: 'bg-white text-gray-800 border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:-translate-y-1',
            outline: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
                suppressHydrationWarning
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
