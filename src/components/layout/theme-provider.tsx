'use client';

import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/themeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useThemeStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.remove('dark', 'light');
            document.documentElement.classList.add(theme);
        }
    }, [theme, mounted]);

    return <>{children}</>;
}
