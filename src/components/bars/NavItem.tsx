'use client'
import Link from 'next/link';
import SvgIcon from "@/components/images/SvgIcon";

interface NavItemProps {
    iconName: string;
    label: string;
    isCollapsed: boolean;
    onClick: () => void;
    href?: string;
}

const NavItem = ({ iconName, label, isCollapsed, onClick, href }: NavItemProps) => {
    const content = (
        <>
            <SvgIcon name={iconName} size={20} className="text-gray-700" />
            {!isCollapsed && <span className="ml-3">{label}</span>}
        </>
    );

    return (
        <div className="flex items-center rounded-md hover:bg-gray-100 cursor-pointer">
            {href ? (
                <Link href={href} className="flex items-center p-2 w-full text-gray-700" onClick={onClick}>
                    {content}
                </Link>
            ) : (
                <div className="flex items-center p-2 w-full" onClick={onClick}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default NavItem;



// import SvgIcon from "@/components/images/SvgIcon";
//
// interface NavItemProps {
//     iconName: string;
//     label: string;
//     isCollapsed: boolean;
//     onClick: () => void;
// }
//
// export default function NavItem({ iconName, label, isCollapsed, onClick }: NavItemProps) {
//     return (
//         <div
//             className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-200"
//             onClick={onClick}
//         >
//             <SvgIcon name={iconName} size={20} className="text-gray-700" />
//             {!isCollapsed && (
//                 <span className="ml-3 text-gray-700">{label}</span>
//             )}
//         </div>
//     );
// }