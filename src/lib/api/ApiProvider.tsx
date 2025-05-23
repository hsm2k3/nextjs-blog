import {createContext, useContext, ReactNode, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useUser} from '@/lib/redux/hooks/useUser';

// Define constants
export const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] as const;
export const STORAGE_STRATEGIES = ['redux', 'local', 'both', 'none'] as const;

// Derive types from constants
export type HttpMethod = typeof HTTP_METHODS[number];
export type StorageStrategy = typeof STORAGE_STRATEGIES[number];

// // Define storage strategy options
// export type StorageStrategy = 'redux' | 'local' | 'both' | 'none';
// export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiRequestOptions {
    endpoint: string;
    method?: HttpMethod;
    body?: any;
    params?: Record<string, string>;
    headers?: Record<string, string>;
    storageStrategy?: StorageStrategy;
    storageKey?: string;
    reduxAction?: (data: any) => { type: string; payload: any };
    requiresAuth?: boolean;
}

interface ApiContextState {
    loading: boolean;
    apiError: Error | null;  // Renamed from 'error' to 'apiError'
    makeRequest: <T>(options: ApiRequestOptions) => Promise<T | null>;
}

const ApiContext = createContext<ApiContextState | undefined>(undefined);

interface ApiProviderProps {
    children: ReactNode;
    baseUrl?: string;
    defaultStorageStrategy?: StorageStrategy;
}

export const ApiProvider = ({
                                children,
                                baseUrl = '/api',
                                defaultStorageStrategy = 'redux',
                            }: ApiProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState<Error | null>(null);
    const dispatch = useDispatch();
    const user = useUser();

    const makeRequest = async <T, >(options: ApiRequestOptions): Promise<T | null> => {
        const {
            endpoint,
            method = 'POST', // Default to POST for security
            body,
            params,
            headers = {},
            storageStrategy = defaultStorageStrategy,
            storageKey,
            reduxAction,
            requiresAuth = false,
        } = options;

        try {
            setLoading(true);
            setError(null);

            // Build URL with query parameters
            let url = `${baseUrl}${endpoint}`;
            if (params) {
                const queryParams = new URLSearchParams();
                Object.entries(params).forEach(([key, value]) => {
                    queryParams.append(key, value);
                });
                url += `?${queryParams.toString()}`;
            }

            // Set headers including auth if needed
            const requestHeaders: Record<string, string> = {
                'Content-Type': 'application/json',
                ...headers,
            };

            if (requiresAuth && user?.token) {
                requestHeaders['Authorization'] = `Bearer ${user.token}`;
            }

            const response = await fetch(url, {
                method,
                headers: requestHeaders,
                body: body ? JSON.stringify(body) : undefined,
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            // Store data based on storage strategy
            if (['redux', 'both'].includes(storageStrategy)) {
                if (reduxAction) {
                    const action = reduxAction(data);
                    dispatch(action);
                } else if (storageKey) {
                    const action = {
                        type: `API_${storageKey.toUpperCase()}_SUCCESS`,
                        payload: data,
                    };
                    dispatch(action);
        }
            }

            if (['local', 'both'].includes(storageStrategy) && storageKey) {
                localStorage.setItem(storageKey, JSON.stringify(data));
            }

            return data as T;
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Unknown error occurred');
            setApiError(error); // Change from setError to setApiError
            console.error('API request failed:', error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return (
        <ApiContext.Provider value={{
            loading,
            error: apiError,
            makeRequest}}>
            {children}
        </ApiContext.Provider>
    );
};

// Custom hook to use the API
export const useApi = () => {
    const context = useContext(ApiContext);

    if (context === undefined) {
        throw new Error('useApi must be used within an ApiProvider');
    }

    return context;
};