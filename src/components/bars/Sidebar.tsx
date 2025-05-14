'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SvgIcon from "@/components/images/SvgIcon";

// Define interface for navigation items
interface NavItemData {
    iconName: string;
    label: string;
}

// Dynamically import NavItem with no SSR
const NavItem = dynamic(() => import('./NavItem'), { ssr: false });

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    // Toggle sidebar state
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Navigation items - can be easily modified or extended
    const navItems: NavItemData[] = [
        { iconName: 'home', label: 'Dashboard' },
        { iconName: 'blog', label: 'Blog' },
        { iconName: 'users', label: 'Users' },
        { iconName: 'file-text', label: 'Analytics' },
        { iconName: 'settings', label: 'Settings' },
        { iconName: 'help-circle', label: 'Help' },
        { iconName: 'logout', label: 'Logout' },

    ];

    return (
        <div className="h-screen">
            {/* Sidebar */}
            <div
                className={`bg-white shadow-lg transition-all duration-300 flex flex-col h-full ${
                    isCollapsed ? 'w-16' : 'w-64'
                }`}

            >
                {/* Header/Toggle area */}
                <div className="p-4 flex items-center border-b border-gray-200">
                    {!isCollapsed && (
                        <span className="text-xl font-semibold text-gray-800 mr-auto">Navigater</span>
                    )}
                    <button
                        onClick={toggleSidebar}
                        className={`p-2 rounded-md hover:bg-gray-100 ${isCollapsed ? 'mx-auto' : ''}`}
                    >
                        {isCollapsed ? <SvgIcon name="hamburger-menu" size={24} /> : <SvgIcon name="hamburger-menu" size={24} />}
                    </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 p-3 space-y-2 overflow-y-auto">
                    {navItems.map((item, index) => (
                        <NavItem
                            key={index}
                            iconName={item.iconName}
                            label={item.label}
                            isCollapsed={isCollapsed}
                            onClick={() => console.log(`Navigating to ${item.label}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;