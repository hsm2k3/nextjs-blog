'use client';
import { useState } from 'react';
import SvgIcon from "@/components/images/SvgIcon";
import NavItem from './NavItem';

// Define interface for navigation items
interface NavItemData {
    iconName: string;
    label: string;
}

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    // Toggle sidebar state
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Navigation items - can be easily modified or extended
    const navItems: NavItemData[] = [
        { iconName: 'home', label: 'Dashboard' },
        { iconName: 'users', label: 'Patients' },
        { iconName: 'file-text', label: 'Reports' },
        { iconName: 'settings', label: 'Settings' },
        { iconName: 'help-circle', label: 'Help' },
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`bg-white shadow-lg transition-all duration-300 flex flex-col ${
                    isCollapsed ? 'w-16' : 'w-64'
                }`}
            >
                {/* Header/Toggle area */}
                <div className="p-4 flex items-center border-b border-gray-200">
                    {!isCollapsed && (
                        <span className="text-xl font-semibold text-gray-800 mr-auto">RadMenu</span>
                    )}
                    <button
                        onClick={toggleSidebar}
                        className={`p-2 rounded-md hover:bg-gray-100 ${isCollapsed ? 'mx-auto' : ''}`}
                    >
                        {isCollapsed ? <SvgIcon name="menu" size={24} /> : <SvgIcon name="x" size={24} />}
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

            {/* Main content area - placeholder */}
            <div className="flex-1 p-6 bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
                <p className="text-gray-600">
                    This is the main content area. The sidebar can be toggled using the button.
                </p>
            </div>
        </div>
    );
};

export default Sidebar;