import Image from 'next/image';
import iconStyles from '@/app/styles/css/icon.module.css';

interface SvgIconProps {
    name: string;
    size?: number;
    className?: string;
    alt?: string;
}

export default function SvgIcon({ name, size = 64, className = '', alt = '' }: SvgIconProps) {
    return (
        <Image
            src={`/icons/${name}.svg`}
            width={size}
            height={size}
            alt={alt || `${name} icon`}
            className={`${iconStyles.icon} ${iconStyles[name]} ${className}`}
        />
    );
}