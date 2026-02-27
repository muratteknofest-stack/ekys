'use client';

import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-16 z-50 p-2.5 rounded-full bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] transition-all shadow-lg backdrop-blur-md"
            aria-label="Tema değiştir"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="w-5 h-5 text-amber-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="w-5 h-5 text-indigo-500" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
