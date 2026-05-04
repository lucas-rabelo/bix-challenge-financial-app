'use client';
import { useContext } from 'react';
import { AuthContext } from '@/presentation/contexts/auth';

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}