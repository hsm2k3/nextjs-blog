'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import SvgIcon from "@/components/images/SvgIcon";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar as toggleSidebarAction } from '@/lib/redux/slices/uiSlice';
import { RootState } from '@/lib/redux/store';

// Define interfaces
interface NavItemData {
    iconName: string;
    label: string;
    href?: string;
    onClick?: () => void;
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
    const pathname = usePathname();
    const router = useRouter();
    const dispatch = useDispatch();
    const isCollapsed = useSelector((state: RootState) => state.ui.sidebarCollapsed);

    // Initialize user state
    const [user, setUser] = useState<User>({
        isLoggedIn: false,
        role: 'guest'
    });

    // Check authentication on component mount
    useEffect(() => {
        const checkAuth = () => {
            const authToken = localStorage.getItem('authToken');
            const userJson = localStorage.getItem('user');

            if (authToken && userJson) {
                try {
                    const userData = JSON.parse(userJson);
                    setUser({
                        id: userData.id,
                        name: userData.name,
                        role: userData.role || 'user',
                        isLoggedIn: true
                    });
                } catch (e) {
                    // If JSON parsing fails, clear invalid data
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('user');
                    setUser({
                        isLoggedIn: false,
                        role: 'guest'
                    });
                }
            }
        };

        checkAuth();

        // Re-check auth when window gains focus (in case of logout in another tab)
        const handleFocus = () => checkAuth();
        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser({
            isLoggedIn: false,
            role: 'guest'
        });
        router.push('/login');
    };

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
                { iconName: 'file-text', label: 'Register', href: '/register' },
                { iconName: 'users', label: 'Login', href: '/login' },
            ];
        }

        // Items for logged-in users
        const authItems = [
            ...commonItems,
            { iconName: 'users', label: 'Profile', href: '/profile' },
            { iconName: 'settings', label: 'Settings', href: '/settings' },
            { iconName: 'logout', label: 'Logout', onClick: handleLogout },
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
                        <SvgIcon name="hamburger-menu" size={24} useSystemTheme={true} />
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
                            onClick={item.onClick || (() => console.log(`Navigating to ${item.label}`))}
                            href={item.href}
                            isActive={item.href === pathname}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;