'use client';

import { useSearchParams } from 'next/navigation';
import QuizHandler from '@/components/quiz/quiz-handler';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function QuizContent() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || 'all';
    const questionCount = parseInt(searchParams.get('questionCount') || '20', 10);

    return (
        <QuizHandler category={category} questionCount={questionCount} />
    );
}

export default function QuizPage() {
    return (
        <div className="min-h-screen theme-bg selection:bg-primary/30 pb-24 md:pb-8">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-20 px-4 sm:px-6 py-4 sm:py-6 border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors group text-sm sm:text-base">
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <div className="text-xs sm:text-sm font-bold tracking-widest text-primary uppercase">
                        Sınav Modu
                    </div>
                    <div className="w-24 sm:w-32" />
                </div>
            </nav>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <Suspense fallback={<div className="text-center p-12 text-[var(--muted)] animate-pulse text-xl">Deneme Yükleniyor...</div>}>
                    <QuizContent />
                </Suspense>
            </main>
        </div>
    );
}
