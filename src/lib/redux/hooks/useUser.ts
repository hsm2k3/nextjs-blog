'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import type { UserType } from '@/lib/redux/slices/userSlice';

export const useUser = (): UserType => {
    return useAppSelector((state) => state.user);
};