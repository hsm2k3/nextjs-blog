import { configureStore } from '@reduxjs/toolkit';
import uiReducer, { toggleSidebar, setSidebarCollapsed } from '../uiSlice';

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: jest.fn((key: string) => store[key] || null),
        setItem: jest.fn((key: string, value: string) => {
            store[key] = value;
        }),
        clear: jest.fn(() => {
            store = {};
        }),
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('UI Slice', () => {
    beforeEach(() => {
        localStorageMock.clear();
        jest.clearAllMocks();
    });

    test('should return initial state', () => {
        expect(uiReducer(undefined, { type: '' })).toEqual({
            sidebarCollapsed: true,
        });
    });

    test('should toggle sidebar state', () => {
        const initialState = { sidebarCollapsed: true };
        const newState = uiReducer(initialState, toggleSidebar());
        expect(newState.sidebarCollapsed).toBe(false);
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
            'sidebarCollapsed',
            'false'
        );
    });

    test('should set sidebar collapsed state', () => {
        const initialState = { sidebarCollapsed: true };
        const newState = uiReducer(initialState, setSidebarCollapsed(false));
        expect(newState.sidebarCollapsed).toBe(false);
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
            'sidebarCollapsed',
            'false'
        );
    });

    test('should initialize from localStorage if available', () => {
        // Setup localStorage with a value
        localStorageMock.getItem.mockReturnValueOnce('false');

        // Force re-import to test initialization
        jest.isolateModules(() => {
            const { default: freshUiReducer } = require('../uiSlice');
            const initialState = freshUiReducer(undefined, { type: '' });
            expect(initialState.sidebarCollapsed).toBe(false);
        });
    });

    test('should work correctly with Redux store', () => {
        const store = configureStore({
            reducer: {
                ui: uiReducer
            }
        });

        // Initial state should be true (collapsed)
        expect(store.getState().ui.sidebarCollapsed).toBe(true);

        // Dispatch toggle action
        store.dispatch(toggleSidebar());
        expect(store.getState().ui.sidebarCollapsed).toBe(false);
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
            'sidebarCollapsed',
            'false'
        );

        // Dispatch set action
        store.dispatch(setSidebarCollapsed(true));
        expect(store.getState().ui.sidebarCollapsed).toBe(true);
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
            'sidebarCollapsed',
            'true'
        );
    });
});