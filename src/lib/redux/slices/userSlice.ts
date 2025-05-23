import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserType = {
    id: string;
    name: string;
    email: string;
    role: 'guest' | 'user' | 'admin';
    avatar?: string;
    isLoggedIn: boolean;
    token?: string;
};

const guestUser: UserType = {
    id: 'guest',
    name: 'Guest',
    email: '',
    role: 'guest',
    isLoggedIn: false
};

// Check localStorage for existing user data
const getInitialState = (): UserType => {
    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                return JSON.parse(storedUser);
            } catch (error) {
                console.error('Failed to parse stored user data');
            }
        }
    }
    return guestUser;
};

const userSlice = createSlice({
    name: 'user',
    initialState: getInitialState(),
    reducers: {
        login: (state, action: PayloadAction<Omit<UserType, 'isLoggedIn'>>) => {
            const newUser = { ...action.payload, isLoggedIn: true };
            localStorage.setItem('user', JSON.stringify(newUser));
            return newUser;
        },
        logout: () => {
            localStorage.removeItem('user');
            return guestUser;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;