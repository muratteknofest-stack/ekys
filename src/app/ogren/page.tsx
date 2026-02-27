'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight, Brain, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { studyNotes, StudySubject } from '@/data/ekys-notes';

export default function OgrenPage() {
    const [selectedSubject, setSelectedSubject] = useState<StudySubject | null>(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNext = () => {
        if (selectedSubject && currentCardIndex < selectedSubject.cards.length - 1) {
            setCurrentCardIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex((prev) => prev - 1);
        }
    };

    const selectSubject = (subject: StudySubject) => {
        setSelectedSubject(subject);
        setCurrentCardIndex(0);
    };

    return (
        <div className="min-h-screen theme-bg selection:bg-primary/30 pb-24 md:pb-20 p-4 sm:p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <main className="relative z-10 max-w-5xl mx-auto space-y-6 sm:space-y-8">
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
                        <motion.div
                            key="subject-list"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-8 sm:mb-12">
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight">Eğlenceli <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Öğrenme</span></h1>
                                <p className="text-base sm:text-xl text-[var(--muted)]">Sıkıcı testleri unut, konuları akıllı bilgi kartlarıyla eğlenerek öğren!</p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                                {studyNotes.map((subject) => (
                                    <motion.div
                                        key={subject.id}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => selectSubject(subject)}
                                        className="glass-dark p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--border)] hover:border-emerald-500/50 cursor-pointer group flex flex-col items-center text-center transition-all bg-gradient-to-br from-[var(--glass-bg)] to-transparent overflow-hidden relative"
                                    >
                                        <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-emerald-500/20 rounded-full blur-[40px] group-hover:bg-emerald-500/40 transition-colors" />
                                        <div className="w-12 h-12 sm:w-20 sm:h-20 bg-emerald-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20">
                                            <BookOpen className="w-6 h-6 sm:w-10 sm:h-10 text-emerald-400" />
                                        </div>
                                        <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2">{subject.title}</h3>
                                        <p className="text-[var(--muted)] text-xs sm:text-sm font-medium">{subject.cards.length} Bilgi Kartı</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="study-mode"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh]"
                        >
                            <div className="w-full flex justify-between items-center mb-6 sm:mb-8">
                                <button
                                    onClick={() => setSelectedSubject(null)}
                                    className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors flex items-center gap-2 text-sm"
                                >
                                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Konulara Dön
                                </button>
                                <div className="text-emerald-400 font-bold bg-emerald-500/10 px-3 sm:px-4 py-1.5 rounded-full border border-emerald-500/20 text-sm">
                                    {currentCardIndex + 1} / {selectedSubject.cards.length}
                                </div>
                            </div>

                            <h2 className="text-xl sm:text-3xl font-black mb-6 sm:mb-8 text-center text-gradient">{selectedSubject.title}</h2>

                            <div className="w-full max-w-3xl relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentCardIndex}
                                        initial={{ opacity: 0, x: 50, rotateY: 10 }}
                                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                        exit={{ opacity: 0, x: -50, rotateY: -10 }}
                                        transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                                        className="glass-dark p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[3rem] border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] min-h-[200px] sm:min-h-[300px] flex items-center justify-center text-center relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                                        <p className="text-base sm:text-xl md:text-2xl leading-relaxed text-[var(--fg)] font-medium">
                                            {selectedSubject.cards[currentCardIndex]}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
                                    <button
                                        onClick={handlePrev}
                                        disabled={currentCardIndex === 0}
                                        className="p-3 sm:p-4 rounded-full glass-dark border border-[var(--border)] hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-[var(--fg)] hover:text-emerald-400 group"
                                    >
                                        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={currentCardIndex === selectedSubject.cards.length - 1}
                                        className="p-3 sm:p-4 rounded-full glass-dark border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-emerald-400 group shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                    >
                                        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
