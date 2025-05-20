'use client'
import Link from 'next/link';
import SvgIcon from "@/components/images/SvgIcon";

interface NavItemProps {
    iconName: string;
    label: string;
    isCollapsed: boolean;
    onClick: () => void;
    href?: string;
    isActive?: boolean;
}

const NavItem = ({
                     iconName,
                     label,
                     isCollapsed,
                     onClick,
                     href,
                     isActive = false
                 }: NavItemProps) => {
    const content = (
        <>
            <SvgIcon
                name={iconName}
                size={20}
                variant={isActive ? "accent" : "secondary"}
            />
            {!isCollapsed && (
                <span className={`ml-3 ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                    {label}
                </span>
            )}
        </>
    );

    return (
        <div className="flex items-center rounded-md hover:bg-[var(--bg-secondary)] cursor-pointer">
            {href ? (
                <Link
                    href={href}
                    className="flex items-center p-2 w-full"
                    onClick={onClick}
                >
                    {content}
                </Link>
            ) : (
                <div
                    className="flex items-center p-2 w-full"
                    onClick={onClick}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default NavItem;