'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Target, Gamepad2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
    { href: '/', label: 'Ana Sayfa', icon: Home },
    { href: '/maarif', label: 'Maarif', icon: Sparkles },
    { href: '/ogren', label: 'Öğren', icon: BookOpen },
    { href: '/antrenman', label: 'Antrenman', icon: Target },
    { href: '/oyun', label: 'Oyun', icon: Gamepad2 },
];

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className="bg-[var(--card)]/95 backdrop-blur-xl border-t border-[var(--border)] px-2 pb-[env(safe-area-inset-bottom)]">
                <div className="flex items-center justify-around h-16">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative flex flex-col items-center justify-center gap-1 w-16 h-full"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute -top-0.5 w-8 h-1 rounded-full bg-[var(--accent)]"
                                        transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                                    />
                                )}
                                <Icon
                                    className={`w-5 h-5 transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}`}
                                />
                                <span
                                    className={`text-[10px] font-medium transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)]'}`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
