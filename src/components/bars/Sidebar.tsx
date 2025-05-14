'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SvgIcon from "@/components/images/SvgIcon";

// Define interfaces
interface NavItemData {
    iconName: string;
    label: string;
    href?: string;
}

interface User {
    id?: string;
    name?: string;
    role?: 'admin' | 'user' | 'guest';
    isLoggedIn: boolean;
}

// Dynamically import NavItem with no SSR
const NavItem = dynamic(() => import('./NavItem'), { ssr: false });

const Sidebar = () => {
    // Start collapsed by default
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    // Mock user state - in a real app, this would come from auth context
    const [user, setUser] = useState<User>({
        isLoggedIn: false,
        role: 'guest'
    });

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Get navigation items based on authentication status and role
    const getNavItems = (): NavItemData[] => {
        // Common items for all users
        const commonItems = [
            { iconName: 'home', label: 'Home', href: '/' },
            { iconName: 'blog', label: 'Blog', href: '/blog' },
            { iconName: 'help-circle', label: 'Help', href: '/help' },
        ];

        // Items for guests (not logged in)
        if (!user.isLoggedIn) {
            return [
                ...commonItems,
                { iconName: 'users', label: 'Login', href: '/login' },
                { iconName: 'file-text', label: 'Register', href: '/register' },
            ];
        }

        // Items for logged-in users
        const authItems = [
            ...commonItems,
            { iconName: 'users', label: 'Profile', href: '/profile' },
            { iconName: 'settings', label: 'Settings', href: '/settings' },
            { iconName: 'logout', label: 'Logout', href: '/logout' },
        ];

        // Add admin-specific items
        if (user.role === 'admin') {
            return [
                ...authItems,
                { iconName: 'users', label: 'Manage Users', href: '/admin/users' },
                { iconName: 'file-text', label: 'Analytics', href: '/admin/analytics' },
            ];
        }

        return authItems;
    };

    const navItems = getNavItems();

    return (
        <div className="h-screen">
            <div
                className={`bg-white shadow-lg transition-all duration-300 flex flex-col h-full ${
                    isCollapsed ? 'w-16' : 'w-64'
                }`}
            >
                {/* Header with toggle button */}
                <div className="p-4 flex items-center border-b border-gray-200">
                    {!isCollapsed && (
                        <span className="text-xl font-semibold text-gray-800 mr-auto">Navigater</span>
                    )}
                    <button
                        onClick={toggleSidebar}
                        className={`p-2 rounded-md hover:bg-gray-100 ${isCollapsed ? 'mx-auto' : ''}`}
                    >
                        <SvgIcon name="hamburger-menu" size={24} />
                    </button>
                </div>

                {/* User Status Banner */}
                {!isCollapsed && (
                    <div className="px-4 py-3 border-b border-gray-200">
                        {user.isLoggedIn ? (
                            <div className="text-sm">
                                <p className="font-semibold">{user.name || 'User'}</p>
                                <p className="text-gray-500 capitalize">{user.role}</p>
                            </div>
                        ) : (
                            <div className="text-sm">
                                <p className="font-semibold">Welcome, Guest</p>
                                <p className="text-gray-500">Please login or register</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation Items */}
                <div className="flex-1 p-3 space-y-2 overflow-y-auto">
                    {navItems.map((item, index) => (
                        <NavItem
                            key={index}
                            iconName={item.iconName}
                            label={item.label}
                            isCollapsed={isCollapsed}
                            onClick={() => console.log(`Navigating to ${item.label}`)}
                            href={item.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;