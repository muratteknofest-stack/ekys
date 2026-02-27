'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight, Brain, ArrowLeft, Sparkles, Star, Lightbulb, GraduationCap, Bookmark, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { studyNotes, StudySubject } from '@/data/ekys-notes';

// Category colors and icons
const CATEGORY_THEMES: Record<string, { gradient: string; border: string; accent: string; icon: typeof BookOpen; bg: string }> = {
    'genel-kultur': {
        gradient: 'from-blue-500 to-indigo-600',
        border: 'border-blue-500/30',
        accent: 'text-blue-400',
        icon: BookOpen,
        bg: 'bg-blue-500',
    },
    'ataturk-ilkeleri': {
        gradient: 'from-red-500 to-rose-600',
        border: 'border-red-500/30',
        accent: 'text-red-400',
        icon: Star,
        bg: 'bg-red-500',
    },
    'degerler-egitimi': {
        gradient: 'from-emerald-500 to-teal-600',
        border: 'border-emerald-500/30',
        accent: 'text-emerald-400',
        icon: Sparkles,
        bg: 'bg-emerald-500',
    },
    'etik': {
        gradient: 'from-purple-500 to-violet-600',
        border: 'border-purple-500/30',
        accent: 'text-purple-400',
        icon: Lightbulb,
        bg: 'bg-purple-500',
    },
    'egitim-bilimleri': {
        gradient: 'from-amber-500 to-orange-600',
        border: 'border-amber-500/30',
        accent: 'text-amber-400',
        icon: GraduationCap,
        bg: 'bg-amber-500',
    },
    'mevzuat': {
        gradient: 'from-cyan-500 to-sky-600',
        border: 'border-cyan-500/30',
        accent: 'text-cyan-400',
        icon: Bookmark,
        bg: 'bg-cyan-500',
    },
};

function getTheme(id: string) {
    return CATEGORY_THEMES[id] || {
        gradient: 'from-blue-500 to-indigo-600',
        border: 'border-blue-500/30',
        accent: 'text-blue-400',
        icon: BookOpen,
        bg: 'bg-blue-500',
    };
}

// Clean card text: remove excessive tabs and normalize whitespace
function cleanCardText(text: string): string {
    return text
        .replace(/\t+/g, ' ')
        .replace(/ {2,}/g, ' ')
        .replace(/- /g, '- ')
        .trim();
}

// Parse card text to highlight key terms (bold text between **)
function formatCardContent(text: string) {
    const cleaned = cleanCardText(text);

    // Split into sections by known keyword patterns
    const parts: { type: 'title' | 'bullet' | 'text' | 'highlight'; content: string }[] = [];

    // Check for bold markers or known patterns
    const lines = cleaned.split(/[.!?]/).filter(s => s.trim().length > 3);

    if (lines.length > 2) {
        // Multiple sentences - show as structured content
        const title = lines[0].trim();
        parts.push({ type: 'title', content: title });
        lines.slice(1).forEach(line => {
            const trimmed = line.trim();
            if (trimmed.length > 3) {
                parts.push({ type: 'bullet', content: trimmed });
            }
        });
    } else {
        parts.push({ type: 'text', content: cleaned });
    }

    return parts;
}

export default function OgrenPage() {
    const [selectedSubject, setSelectedSubject] = useState<StudySubject | null>(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = useCallback(() => {
        if (selectedSubject && currentCardIndex < selectedSubject.cards.length - 1) {
            setCurrentCardIndex((prev) => prev + 1);
            setIsFlipped(false);
        }
    }, [selectedSubject, currentCardIndex]);

    const handlePrev = useCallback(() => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex((prev) => prev - 1);
            setIsFlipped(false);
        }
    }, [currentCardIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev]);

    const selectSubject = (subject: StudySubject) => {
        setSelectedSubject(subject);
        setCurrentCardIndex(0);
        setIsFlipped(false);
    };

    const theme = selectedSubject ? getTheme(selectedSubject.id) : null;
    const IconComponent = theme?.icon || BookOpen;
    const progress = selectedSubject
        ? ((currentCardIndex + 1) / selectedSubject.cards.length) * 100
        : 0;

    return (
        <div className="min-h-screen theme-bg selection:bg-primary/30 pb-24 md:pb-20 relative overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <main className="relative z-10 max-w-5xl mx-auto p-4 sm:p-6 md:p-12 space-y-6 sm:space-y-8">
                {/* Header */}
                <header className="flex items-center justify-between gap-2">
                    <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors glass-dark py-2 px-3 sm:px-4 rounded-xl text-sm">
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="hidden sm:inline">Ana Ekrana Dön</span>
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-3 glass-dark px-3 sm:px-6 py-2 rounded-full">
                        <Brain className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                        <span className="font-bold text-sm sm:text-lg"><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Süper</span> Çalışma</span>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {!selectedSubject ? (
                        /* ===== SUBJECT LIST ===== */
                        <motion.div
                            key="subject-list"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-8 sm:mb-12">
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">
                                    Eğlenceli <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Öğrenme</span>
                                </h1>
                                <p className="text-base sm:text-xl text-[var(--muted)]">
                                    Sıkıcı testleri unut, konuları akıllı bilgi kartlarıyla eğlenerek öğren!
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                                {studyNotes.map((subject) => {
                                    const t = getTheme(subject.id);
                                    const SubjectIcon = t.icon;
                                    return (
                                        <motion.div
                                            key={subject.id}
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => selectSubject(subject)}
                                            className={`glass-dark p-4 sm:p-8 rounded-2xl sm:rounded-3xl ${t.border} hover:border-opacity-60 cursor-pointer group flex flex-col items-center text-center transition-all bg-gradient-to-br from-[var(--glass-bg)] to-transparent overflow-hidden relative`}
                                        >
                                            <div className={`absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 ${t.bg}/20 rounded-full blur-[40px] group-hover:opacity-60 transition-opacity opacity-30`} />
                                            <div className={`w-12 h-12 sm:w-20 sm:h-20 ${t.bg}/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform border ${t.border}`}>
                                                <SubjectIcon className={`w-6 h-6 sm:w-10 sm:h-10 ${t.accent}`} />
                                            </div>
                                            <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2">{subject.title}</h3>
                                            <p className={`${t.accent} text-xs sm:text-sm font-medium`}>{subject.cards.length} Bilgi Kartı</p>

                                            {/* Mini progress bar */}
                                            <div className="w-full h-1 mt-3 sm:mt-4 bg-[var(--border)] rounded-full overflow-hidden">
                                                <div className={`h-full bg-gradient-to-r ${t.gradient} rounded-full`} style={{ width: '0%' }} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ) : (
                        /* ===== FLASHCARD MODE ===== */
                        <motion.div
                            key="study-mode"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh]"
                        >
                            {/* Top bar */}
                            <div className="w-full flex justify-between items-center mb-4 sm:mb-6">
                                <button
                                    onClick={() => setSelectedSubject(null)}
                                    className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors flex items-center gap-2 text-sm"
                                >
                                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Konulara Dön
                                </button>
                                <button
                                    onClick={() => { setCurrentCardIndex(0); setIsFlipped(false); }}
                                    className={`${theme?.accent} hover:opacity-80 flex items-center gap-1 text-xs sm:text-sm glass-dark py-1.5 px-3 rounded-full`}
                                >
                                    <RotateCcw className="w-3 h-3" /> Başa Dön
                                </button>
                            </div>

                            {/* Category badge */}
                            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${theme?.gradient} text-white text-xs sm:text-sm font-bold mb-4 shadow-lg`}>
                                <IconComponent className="w-4 h-4" />
                                {selectedSubject.title}
                            </div>

                            {/* Progress */}
                            <div className="w-full max-w-3xl mb-4 sm:mb-6">
                                <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-2">
                                    <span>İlerleme</span>
                                    <span className="font-bold">{currentCardIndex + 1} / {selectedSubject.cards.length}</span>
                                </div>
                                <div className="h-2 w-full bg-[var(--border)] rounded-full overflow-hidden">
                                    <motion.div
                                        className={`h-full bg-gradient-to-r ${theme?.gradient} rounded-full`}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>

                            {/* FLASHCARD */}
                            <div className="w-full max-w-3xl relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentCardIndex}
                                        initial={{ opacity: 0, x: 50, rotateY: 10 }}
                                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                        exit={{ opacity: 0, x: -50, rotateY: -10 }}
                                        transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                                        className={`glass-dark p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[3rem] ${theme?.border} shadow-[0_0_50px_rgba(16,185,129,0.05)] min-h-[250px] sm:min-h-[350px] flex flex-col relative overflow-hidden`}
                                    >
                                        {/* Decorative top bar */}
                                        <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${theme?.gradient}`} />

                                        {/* Card number badge */}
                                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                                            <span className={`${theme?.accent} text-xs font-bold glass-dark px-2 py-1 rounded-full`}>
                                                #{currentCardIndex + 1}
                                            </span>
                                        </div>

                                        {/* Category icon watermark */}
                                        <div className="absolute bottom-4 right-4 opacity-5">
                                            <IconComponent className="w-20 h-20 sm:w-32 sm:h-32" />
                                        </div>

                                        {/* Card Content */}
                                        <div className="flex-1 flex flex-col justify-center relative z-10">
                                            {(() => {
                                                const parts = formatCardContent(selectedSubject.cards[currentCardIndex]);
                                                return (
                                                    <div className="space-y-4">
                                                        {parts.map((part, idx) => {
                                                            if (part.type === 'title') {
                                                                return (
                                                                    <h3
                                                                        key={idx}
                                                                        className={`text-lg sm:text-xl md:text-2xl font-bold ${theme?.accent} leading-relaxed`}
                                                                    >
                                                                        {part.content}
                                                                    </h3>
                                                                );
                                                            }
                                                            if (part.type === 'bullet') {
                                                                return (
                                                                    <div key={idx} className="flex items-start gap-3">
                                                                        <div className={`w-2 h-2 rounded-full mt-2.5 shrink-0 bg-gradient-to-r ${theme?.gradient}`} />
                                                                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[var(--fg)] font-medium">
                                                                            {part.content}
                                                                        </p>
                                                                    </div>
                                                                );
                                                            }
                                                            return (
                                                                <p
                                                                    key={idx}
                                                                    className="text-base sm:text-xl md:text-2xl leading-relaxed text-[var(--fg)] font-medium text-center"
                                                                >
                                                                    {part.content}
                                                                </p>
                                                            );
                                                        })}
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation buttons */}
                                <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
                                    <button
                                        onClick={handlePrev}
                                        disabled={currentCardIndex === 0}
                                        className={`p-3 sm:p-4 rounded-full glass-dark ${theme?.border} hover:bg-[var(--accent)]/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-[var(--fg)] group`}
                                    >
                                        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform" />
                                    </button>

                                    {/* Card dots indicator (show only nearby cards) */}
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: Math.min(7, selectedSubject.cards.length) }).map((_, idx) => {
                                            const start = Math.max(0, Math.min(currentCardIndex - 3, selectedSubject.cards.length - 7));
                                            const actualIdx = start + idx;
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`rounded-full transition-all ${actualIdx === currentCardIndex
                                                            ? `w-6 h-2 bg-gradient-to-r ${theme?.gradient}`
                                                            : 'w-2 h-2 bg-[var(--border)]'
                                                        }`}
                                                />
                                            );
                                        })}
                                        {selectedSubject.cards.length > 7 && (
                                            <span className="text-[10px] text-[var(--muted)] ml-1">+{selectedSubject.cards.length - 7}</span>
                                        )}
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        disabled={currentCardIndex === selectedSubject.cards.length - 1}
                                        className={`p-3 sm:p-4 rounded-full glass-dark ${theme?.border} bg-gradient-to-r ${currentCardIndex < selectedSubject.cards.length - 1
                                                ? `${theme?.gradient}/10`
                                                : ''
                                            } hover:opacity-80 transition-all disabled:opacity-30 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(16,185,129,0.1)]`}
                                    >
                                        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Keyboard hint */}
                                <div className="hidden sm:flex justify-center gap-4 mt-4 text-[var(--muted)] text-xs">
                                    <span className="flex items-center gap-1"><kbd className="px-2 py-0.5 glass-dark rounded text-[10px]">←</kbd> Önceki</span>
                                    <span className="flex items-center gap-1"><kbd className="px-2 py-0.5 glass-dark rounded text-[10px]">→</kbd> Sonraki</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
