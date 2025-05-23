'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
}

const mockUserData: User = {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    // add other required user properties
};

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    // Check if user is logged in on mount (from localStorage, cookies, etc.)
    useEffect(() => {
        // For demo purposes - replace with actual auth check
        const hasToken = localStorage.getItem('authToken');
        setIsAuthenticated(!!hasToken);
    }, []);

    const login = async (email: string, password: string) => {
        // Demo implementation - replace with actual login logic
        localStorage.setItem('authToken', 'demo-token');
        setIsAuthenticated(true);
        setUser(mockUserData);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            user,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}