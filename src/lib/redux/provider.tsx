'use client';

import { PropsWithChildren, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

export function ReduxProvider({ children }: PropsWithChildren) {
    // Fix: provide initial value of undefined
    const storeRef = useRef<AppStore | undefined>(undefined);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    // Use non-null assertion since we know the store exists at this point
    return <Provider store={storeRef.current!}>{children}</Provider>;
}