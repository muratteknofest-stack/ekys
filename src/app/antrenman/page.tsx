'use client';

import { useState } from 'react';
import QuizHandler from '@/components/quiz/quiz-handler';
import { ChevronLeft, BookOpen, Gavel, Users, Flag, Star, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CATEGORIES = [
    { id: 'all', name: 'Karma Deneme (Tümü)', icon: RefreshCw, color: 'text-[var(--fg)]', bg: 'bg-[var(--fg)]/10' },
    { id: 'Genel Kültür', name: 'Genel Kültür Testi', icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'Mevzuat', name: 'Mevzuat Testi', icon: Gavel, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { id: 'Eğitim Bilimleri', name: 'Eğitim Bilimleri Testi', icon: Users, color: 'text-green-400', bg: 'bg-green-400/10' },
    { id: 'İnkılap Tarihi', name: 'İnkılap Tarihi Testi', icon: Flag, color: 'text-red-400', bg: 'bg-red-400/10' },
    { id: 'Türkiye Yüzyılı', name: 'Türkiye Yüzyılı Testi', icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
];

export default function AntrenmanPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <div className="min-h-screen theme-bg selection:bg-primary/30 pb-24 md:pb-8">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-20 px-4 sm:px-6 py-4 sm:py-6 border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {selectedCategory ? (
                        <button onClick={() => setSelectedCategory(null)} className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors group text-sm sm:text-base">
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Kategori Seçimi</span>
                        </button>
                    ) : (
                        <Link href="/" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors group text-sm sm:text-base">
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Dashboard</span>
                        </Link>
                    )}
                    <div className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase">
                        {selectedCategory ? `${selectedCategory}` : 'Bölüm Seçimi'}
                    </div>
                    <div className="w-24 sm:w-48" />
                </div>
            </nav>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {!selectedCategory ? (
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8 sm:mb-12">
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Test Bölümünüzü Seçin</h1>
                            <p className="text-[var(--muted)] text-sm sm:text-base">Çözmek istediğiniz kategoriye ait 20 soruluk rastgele bir antrenman oluşturulacaktır.</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {CATEGORIES.map((cat, idx) => {
                                const Icon = cat.icon;
                                return (
                                    <motion.button
                                        key={cat.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className="group relative flex flex-col items-center justify-center p-6 sm:p-8 glass rounded-[2rem] border border-[var(--border)] hover:border-primary/50 transition-all"
                                    >
                                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${cat.bg}`}>
                                            <Icon size={28} className={`sm:w-8 sm:h-8 ${cat.color}`} />
                                        </div>
                                        <h3 className="font-bold text-sm sm:text-lg text-[var(--fg)] group-hover:text-primary transition-colors text-center">{cat.name}</h3>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <QuizHandler category={selectedCategory} questionCount={20} />
                )}
            </main>
        </div>
    );
}
