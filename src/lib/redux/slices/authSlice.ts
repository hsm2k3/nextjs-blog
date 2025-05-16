'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id?: string;
    name?: string;
    role?: 'admin' | 'user' | 'guest';
    isLoggedIn: boolean;
}

interface AuthState {
    user: User;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: {
        isLoggedIn: false,
        role: 'guest',
    },
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.loading = false;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = { isLoggedIn: false, role: 'guest' };
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;