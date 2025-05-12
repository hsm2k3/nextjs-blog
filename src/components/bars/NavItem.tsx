import SvgIcon from "@/components/images/SvgIcon";

interface NavItemProps {
    iconName: string;
    label: string;
    isCollapsed: boolean;
    onClick: () => void;
}

export default function NavItem({ iconName, label, isCollapsed, onClick }: NavItemProps) {
    return (
        <div
            className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-200"
            onClick={onClick}
        >
            <SvgIcon name={iconName} size={20} className="text-gray-700" />
            {!isCollapsed && (
                <span className="ml-3 text-gray-700">{label}</span>
            )}
        </div>
    );
}