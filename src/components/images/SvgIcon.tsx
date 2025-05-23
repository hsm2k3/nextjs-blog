import { useEffect, useState } from 'react';
import Image from 'next/image';
import iconStyles from '@/app/styles/css/icon.module.css';

interface SvgIconProps {
    name: string;
    size?: number;
    className?: string;
    alt?: string;
    variant?: 'primary' | 'secondary' | 'accent' | null;
    useSystemTheme?: boolean;
}

export default function SvgIcon({
                                    name,
                                    size = 24,
                                    className = '',
                                    alt = '',
                                    variant = null,
                                    useSystemTheme = false
                                }: SvgIconProps) {
    const [themeVariant, setThemeVariant] = useState(variant);

    useEffect(() => {
        if (useSystemTheme) {
            // Check if system prefers dark mode
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

            const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
                setThemeVariant(e.matches ? 'primary' : 'secondary');
            };

            // Set initial theme
            updateTheme(darkModeQuery);

            // Listen for theme changes
            darkModeQuery.addEventListener('change', updateTheme);

            return () => darkModeQuery.removeEventListener('change', updateTheme);
        } else {
            setThemeVariant(variant);
        }
    }, [useSystemTheme, variant]);

    const variantClass = themeVariant ? iconStyles[themeVariant] : '';

    return (
        <Image
            src={`/icons/${name}.svg`}
            width={size}
            height={size}
            alt={alt || `${name} icon`}
            className={`${iconStyles.icon} ${variantClass} ${className}`}
        />
    );
}