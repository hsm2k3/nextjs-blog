// src/components/auth/LogoutButton.tsx
'use client';
import { useRouter } from 'next/navigation';
import SvgIcon from '@/components/images/SvgIcon';

interface LogoutButtonProps {
    className?: string;
}

const LogoutButton = ({ className }: LogoutButtonProps) => {
    const router = useRouter();

    const handleLogout = () => {
        // Remove auth data from localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');

        // Redirect to login page
        router.push('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className={className}
        >
            <div className="flex items-center gap-3">
                <SvgIcon name="logout" size={16} useSystemTheme={true} />
                <span>Logout</span>
            </div>
        </button>
    );
};

export default LogoutButton;