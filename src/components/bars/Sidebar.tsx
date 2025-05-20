'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SvgIcon from "@/components/images/SvgIcon";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar as toggleSidebarAction } from '@/lib/redux/slices/uiSlice';
import { RootState } from '@/lib/redux/store'; // You'll need to adjust this import if your store path is different

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
    const dispatch = useDispatch();
    const isCollapsed = useSelector((state: RootState) => state.ui.sidebarCollapsed);

    // Mock user state - in a real app, this would come from auth context
    const [user, setUser] = useState<User>({
        isLoggedIn: false,
        role: 'guest'
    });

    const toggleSidebar = () => {
        dispatch(toggleSidebarAction());
    };

    // Get navigation items based on authentication status and role
    const getNavItems = (): NavItemData[] => {
        // Common items for all users
        const commonItems = [
            { iconName: 'home', label: 'Home', href: '/' },
            { iconName: 'prologue', label: 'Prologue', href: '/prologue' },
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
                className={`bg-[var(--bg-card)] shadow-lg transition-all duration-300 flex flex-col h-full ${
                    isCollapsed ? 'w-16' : 'w-64'
                }`}
            >
                {/* Header with toggle button */}
                <div className="p-4 flex items-center border-b border-[var(--bg-secondary)]">
                    {!isCollapsed && (
                        <span className="text-xl font-semibold text-[var(--text-primary)] mr-auto">Navigater</span>
                    )}
                    <button
                        onClick={toggleSidebar}
                        className={`p-2 rounded-md hover:bg-[var(--bg-secondary)] ${isCollapsed ? 'mx-auto' : ''}`}
                    >
                        <SvgIcon name="hamburger-menu" size={24} />
                    </button>
                </div>

                {/* User Status Banner */}
                {!isCollapsed && (
                    <div className="px-4 py-3 border-b border-[var(--bg-secondary)]">
                        {user.isLoggedIn ? (
                            <div className="text-sm">
                                <p className="text-[var(--text-secondary)]">
                                    <span className="font-semibold text-[var(--text-primary)]">{user.name || 'User'}</span>
                                </p>
                                <p className="text-[var(--text-secondary)] capitalize">{user.role}</p>
                            </div>
                        ) : (
                            <div className="text-sm">
                                <p className="text-[var(--text-secondary)]">
                                    Welcome, <span className="font-semibold text-[var(--text-primary)]">Guest</span>
                                </p>
                                <p className="text-[var(--text-secondary)]">Please login or register</p>
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