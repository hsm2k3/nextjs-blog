import Image from 'next/image';
import iconStyles from '@/app/styles/css/icon.module.css';

interface SvgIconProps {
    name: string;
    size?: number;
    className?: string;
    alt?: string;
    variant?: 'primary' | 'secondary' | 'accent' | null;
}

export default function SvgIcon({
                                    name,
                                    size = 24,
                                    className = '',
                                    alt = '',
                                    variant = null
                                }: SvgIconProps) {
    const variantClass = variant ? iconStyles[variant] : '';

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