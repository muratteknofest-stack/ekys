'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export function PasswordGate({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, login } = useAuthStore();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // SSR guard
    const [hydrated, setHydrated] = useState(false);
    if (!hydrated) {
        if (typeof window !== 'undefined') {
            setHydrated(true);
        }
        return null;
    }

    if (isAuthenticated) {
        return <>{children}</>;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(false);

        setTimeout(() => {
            const success = login(password);
            if (!success) {
                setError(true);
                setPassword('');
            }
            setIsLoading(false);
        }, 600);
    };

    return (
        <div className="min-h-screen theme-bg flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[150px]" />
                <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Logo & Title */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/20 mb-6"
                    >
                        <ShieldCheck className="w-10 h-10 text-white" />
                    </motion.div>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
                        MEB <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">EKYS 2026</span>
                    </h1>
                    <p className="text-[var(--muted)] text-sm">Sınav Hazırlık Platformu&apos;na giriş yapın</p>
                </div>

                {/* Login Card */}
                <div className="glass-dark p-8 rounded-3xl border border-[var(--border)]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Password field */}
                        <div>
                            <label className="block text-sm font-medium text-[var(--muted)] mb-2">
                                <Lock className="w-4 h-4 inline mr-1.5" />
                                Şifre
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setError(false); }}
                                    placeholder="Şifrenizi girin..."
                                    autoFocus
                                    className="w-full px-4 py-3.5 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Error message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                                >
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    Hatalı şifre! Lütfen tekrar deneyin.
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={!password || isLoading}
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-base hover:from-blue-600 hover:to-indigo-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Giriş yapılıyor...
                                </span>
                            ) : (
                                'Giriş Yap'
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center text-[var(--muted)] text-xs mt-6">
                    © 2026 EKYS Hazırlık Platformu
                </p>
            </motion.div>
        </div>
    );
}
