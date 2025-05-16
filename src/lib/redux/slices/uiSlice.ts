'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    sidebarCollapsed: boolean;
}

function getInitialSidebarState(): boolean {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved !== null ? JSON.parse(saved) : true;
}

const initialState: UiState = {
    sidebarCollapsed: getInitialSidebarState(),
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarCollapsed = !state.sidebarCollapsed;
            if (typeof window !== 'undefined') {
                localStorage.setItem('sidebarCollapsed', JSON.stringify(state.sidebarCollapsed));
            }
        },
        setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.sidebarCollapsed = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem('sidebarCollapsed', JSON.stringify(action.payload));
            }
        },
    },
});

export const { toggleSidebar, setSidebarCollapsed } = uiSlice.actions;
export default uiSlice.reducer;