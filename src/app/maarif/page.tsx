'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, ChevronRight, Lock, CheckCircle, BookOpen, Brain, Heart,
    GraduationCap, Rocket, Compass, RotateCcw, Trophy,
    Sparkles, Zap, Target, Star, TrendingUp, Award
} from 'lucide-react';
import Link from 'next/link';
import { allSubjects, Subject } from '@/data/learning-modules';
import { MaarifModule } from '@/data/maarif-modules';
import { useMaarifStore } from '@/store/maarifStore';

const ICON_MAP: Record<string, typeof Compass> = {
    Compass, Heart, Brain, BookOpen, GraduationCap, Rocket, Sparkles,
};

// ─── SUBJECT HUB ──────────────────────────────────────────────────
function SubjectHub({ onSelectSubject }: { onSelectSubject: (s: Subject) => void }) {
    const { moduleProgress } = useMaarifStore();

    const totalModules = allSubjects.reduce((a, s) => a + s.modules.length, 0);
    const totalCompleted = Object.values(moduleProgress).filter(m => m.completed).length;
    const totalCards = allSubjects.reduce((a, s) => a + s.modules.reduce((b, m) => b + m.cards.length, 0), 0);
    const totalQuestions = allSubjects.reduce((a, s) => a + s.modules.reduce((b, m) => b + m.quiz.length, 0), 0);

    return (
        <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-8">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl shadow-purple-500/20 mb-5">
                    <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2">
                    EKYS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Öğrenme Yolu</span>
                </h1>
                <p className="text-[var(--muted)] text-sm sm:text-base max-w-xl mx-auto">
                    5 ders, {totalModules} modül, {totalCards}+ bilgi kartı ve {totalQuestions}+ test sorusu ile adım adım öğren.
                </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                    { label: 'Ders', value: allSubjects.length, icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                    { label: 'Modül', value: `${totalCompleted}/${totalModules}`, icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                    { label: 'Kart', value: `${totalCards}+`, icon: Star, color: 'text-amber-400', bg: 'bg-amber-500/10' },
                    { label: 'Soru', value: `${totalQuestions}+`, icon: Zap, color: 'text-pink-400', bg: 'bg-pink-500/10' },
                ].map((stat) => (
                    <div key={stat.label} className="glass-dark p-4 rounded-2xl border border-[var(--border)] text-center">
                        <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-2`}>
                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        </div>
                        <div className="text-xl sm:text-2xl font-black">{stat.value}</div>
                        <div className="text-[10px] text-[var(--muted)] font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Subject Cards */}
            <div className="grid gap-4">
                {allSubjects.map((subject, idx) => {
                    const completedMods = subject.modules.filter(m => moduleProgress[m.id]?.completed).length;
                    const totalMods = subject.modules.length;
                    const progress = Math.round((completedMods / totalMods) * 100);
                    const totalSubCard = subject.modules.reduce((a, m) => a + m.cards.length, 0);
                    const totalSubQ = subject.modules.reduce((a, m) => a + m.quiz.length, 0);

                    return (
                        <motion.button
                            key={subject.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            onClick={() => onSelectSubject(subject)}
                            className="group relative glass-dark p-5 sm:p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/40 text-left transition-all w-full overflow-hidden"
                        >
                            {/* Background gradient accent */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${subject.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`} />

                            <div className="relative flex items-center gap-4 sm:gap-6">
                                {/* Emoji + Icon */}
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${subject.gradient} flex items-center justify-center shrink-0 shadow-lg text-3xl sm:text-4xl`}>
                                    {subject.emoji}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-base sm:text-lg truncate">{subject.title}</h3>
                                        {completedMods === totalMods && totalMods > 0 && (
                                            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">✅ TAM</span>
                                        )}
                                    </div>

                                    {/* Info chips */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-[var(--muted)] bg-[var(--border)]/50 px-2 py-1 rounded-full">
                                            📦 {totalMods} Modül
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-[var(--muted)] bg-[var(--border)]/50 px-2 py-1 rounded-full">
                                            🃏 {totalSubCard} Kart
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-[var(--muted)] bg-[var(--border)]/50 px-2 py-1 rounded-full">
                                            ❓ {totalSubQ} Soru
                                        </span>
                                    </div>

                                    {/* Progress */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-2 bg-[var(--border)] rounded-full overflow-hidden max-w-[200px]">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${subject.gradient} rounded-full`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                            />
                                        </div>
                                        <span className="text-xs font-bold text-[var(--muted)]">{completedMods}/{totalMods}</span>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <ChevronRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--fg)] group-hover:translate-x-1 transition-all shrink-0" />
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}

// ─── MODULE SELECTOR ──────────────────────────────────────────────
function ModuleSelector({ subject, onSelect, onBack }: { subject: Subject; onSelect: (mod: MaarifModule) => void; onBack: () => void }) {
    const { moduleProgress } = useMaarifStore();
    const completedCount = subject.modules.filter(m => moduleProgress[m.id]?.completed).length;
    const overallProgress = Math.round((completedCount / subject.modules.length) * 100);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Subject Header */}
            <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.gradient} shadow-xl mb-4 text-3xl`}>
                    {subject.emoji}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-2">{subject.title}</h2>
                <p className="text-[var(--muted)] text-sm">{subject.modules.length} modül ile adım adım kavrayın</p>
            </div>

            {/* Progress */}
            <div className="glass-dark p-4 rounded-2xl border border-[var(--border)] mb-6 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.gradient} bg-opacity-20 flex items-center justify-center shrink-0`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm">İlerleme</span>
                        <span className="text-sm font-bold">{completedCount}/{subject.modules.length}</span>
                    </div>
                    <div className="h-2.5 bg-[var(--border)] rounded-full overflow-hidden">
                        <motion.div className={`h-full bg-gradient-to-r ${subject.gradient} rounded-full`}
                            initial={{ width: 0 }} animate={{ width: `${overallProgress}%` }} transition={{ duration: 1 }} />
                    </div>
                </div>
            </div>

            {/* Modules */}
            <div className="grid gap-3">
                {subject.modules.map((mod, idx) => {
                    const progress = moduleProgress[mod.id];
                    const isLocked = !progress?.unlocked;
                    const isCompleted = progress?.completed;
                    const cardsRead = progress?.cardsRead.length || 0;
                    const totalCards = mod.cards.length;
                    const Icon = ICON_MAP[mod.icon] || BookOpen;

                    return (
                        <motion.button key={mod.id}
                            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}
                            onClick={() => !isLocked && onSelect(mod)}
                            disabled={isLocked}
                            className={`group relative flex items-center gap-4 p-4 sm:p-5 glass-dark rounded-2xl border text-left transition-all w-full ${isLocked ? 'border-[var(--border)] opacity-50 cursor-not-allowed'
                                    : isCompleted ? 'border-emerald-500/30 hover:border-emerald-500/60'
                                        : 'border-[var(--border)] hover:border-purple-500/50'
                                }`}
                        >
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center shrink-0 shadow-md ${isLocked ? 'grayscale' : ''}`}>
                                {isLocked ? <Lock className="w-6 h-6 text-white/60" /> : isCompleted ? <CheckCircle className="w-6 h-6 text-white" /> : <Icon className="w-6 h-6 text-white" />}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider">Modül {idx + 1}</span>
                                    {isCompleted && <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">✅</span>}
                                    {isLocked && <span className="bg-[var(--border)] text-[var(--muted)] text-[10px] font-bold px-2 py-0.5 rounded-full">🔒</span>}
                                </div>
                                <h3 className="font-bold text-sm sm:text-base mb-0.5 truncate">{mod.title}</h3>
                                <div className="flex items-center gap-3 text-[10px] sm:text-xs text-[var(--muted)]">
                                    <span>🃏 {totalCards} kart</span>
                                    <span>❓ {mod.quiz.length} soru</span>
                                    {!isLocked && !isCompleted && cardsRead > 0 && (
                                        <span className="text-purple-400">📖 {cardsRead}/{totalCards}</span>
                                    )}
                                </div>
                            </div>
                            {!isLocked && <ChevronRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--fg)] group-hover:translate-x-1 transition-all shrink-0" />}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}

// ─── CARD VIEWER ──────────────────────────────────────────────────
function CardViewer({ mod, onComplete }: { mod: MaarifModule; onComplete: () => void }) {
    const { moduleProgress, markCardRead } = useMaarifStore();
    const [currentCard, setCurrentCard] = useState(0);
    const [direction, setDirection] = useState(0);
    const progress = moduleProgress[mod.id];
    const totalCards = mod.cards.length;

    useEffect(() => { markCardRead(mod.id, currentCard); }, [currentCard, mod.id, markCardRead]);

    const next = useCallback(() => {
        if (currentCard < totalCards - 1) { setDirection(1); setCurrentCard(c => c + 1); }
        else onComplete();
    }, [currentCard, totalCards, onComplete]);

    const prev = useCallback(() => {
        if (currentCard > 0) { setDirection(-1); setCurrentCard(c => c - 1); }
    }, [currentCard]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [next, prev]);

    const card = mod.cards[currentCard];
    const isLastCard = currentCard === totalCards - 1;
    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-[var(--muted)]">🃏 Kart {currentCard + 1} / {totalCards}</span>
                    <span className="text-xs text-[var(--muted)]">{progress?.cardsRead.length || 0} okundu</span>
                </div>
                <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <motion.div className={`h-full bg-gradient-to-r ${mod.gradient} rounded-full`}
                        animate={{ width: `${((currentCard + 1) / totalCards) * 100}%` }} transition={{ duration: 0.3 }} />
                </div>
            </div>

            <div className="relative min-h-[340px] sm:min-h-[380px]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div key={currentCard} custom={direction} variants={variants}
                        initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}
                        className="absolute inset-0">
                        <div className="glass-dark p-6 sm:p-8 rounded-3xl border border-[var(--border)] h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${mod.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                                    {currentCard + 1}
                                </div>
                                <h3 className="font-bold text-lg sm:text-xl flex-1">{card.title}</h3>
                            </div>
                            {card.highlight && (
                                <div className={`mb-4 px-4 py-2.5 rounded-xl bg-gradient-to-r ${mod.gradient} bg-opacity-10 border border-white/10`}>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-300 shrink-0" />
                                        <span className="text-sm font-bold text-white/90">{card.highlight}</span>
                                    </div>
                                </div>
                            )}
                            <div className="flex-1 text-[var(--muted)] text-sm sm:text-[15px] leading-relaxed whitespace-pre-line overflow-y-auto">{card.content}</div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-6 gap-4">
                <button onClick={prev} disabled={currentCard === 0}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl glass-dark border border-[var(--border)] text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--accent)]/50 transition-all">
                    <ChevronLeft className="w-4 h-4" /> Önceki
                </button>
                <div className="flex gap-1.5">
                    {mod.cards.map((_, i) => (
                        <button key={i} onClick={() => { setDirection(i > currentCard ? 1 : -1); setCurrentCard(i); }}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentCard ? 'bg-[var(--accent)] scale-125' : progress?.cardsRead.includes(i) ? 'bg-[var(--accent)]/40' : 'bg-[var(--border)]'}`} />
                    ))}
                </div>
                <button onClick={next}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isLastCard ? `bg-gradient-to-r ${mod.gradient} text-white shadow-lg` : 'glass-dark border border-[var(--border)] hover:border-[var(--accent)]/50'
                        }`}>
                    {isLastCard ? '🎯 Teste Geç' : 'Sonraki'} <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

// ─── QUIZ COMPONENT ───────────────────────────────────────────────
function ModuleQuiz({ mod, onFinish }: { mod: MaarifModule; onFinish: (score: number) => void }) {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const question = mod.quiz[currentQ];
    const total = mod.quiz.length;
    const isAnswered = selected !== null;

    const handleSelect = (idx: number) => {
        if (isAnswered) return;
        setSelected(idx);
        if (idx === question.correctAnswer) setScore(s => s + 1);
    };

    const handleNext = () => {
        if (currentQ < total - 1) { setCurrentQ(c => c + 1); setSelected(null); }
        else setShowResult(true);
    };

    if (showResult) {
        const passed = score >= Math.ceil(total * 0.6);
        return (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="max-w-lg mx-auto text-center">
                <div className={`text-6xl mb-4`}>{passed ? '🏆' : '📚'}</div>
                <h2 className="text-2xl sm:text-3xl font-black mb-3">{passed ? 'Tebrikler! 🎉' : 'Tekrar Deneyin'}</h2>
                <p className="text-[var(--muted)] mb-6">
                    {passed ? `${total} sorudan ${score} doğru! Sonraki modül açıldı.` : `${total} sorudan ${score} doğru. En az ${Math.ceil(total * 0.6)} doğru gerekli.`}
                </p>
                <div className={`text-6xl font-black mb-4 ${passed ? 'text-emerald-400' : 'text-red-400'}`}>{score}/{total}</div>
                <div className="glass-dark p-4 rounded-2xl border border-[var(--border)] mb-6">
                    <div className="h-3 bg-[var(--border)] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${passed ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ width: `${(score / total) * 100}%` }} />
                    </div>
                    <p className="text-xs text-[var(--muted)] mt-2">Başarı: %{Math.round((score / total) * 100)} | Eşik: %60</p>
                </div>
                <button onClick={() => onFinish(score)}
                    className={`px-8 py-4 rounded-xl font-bold text-white shadow-lg ${passed ? `bg-gradient-to-r ${mod.gradient}` : 'bg-gradient-to-r from-red-500 to-rose-600'}`}>
                    {passed ? '✅ Devam Et' : '📖 Kartlara Dön'}
                </button>
            </motion.div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-[var(--muted)]">❓ Soru {currentQ + 1} / {total}</span>
                <span className="text-xs font-bold text-emerald-400">✅ {score} Doğru</span>
            </div>
            <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden mb-6">
                <div className={`h-full bg-gradient-to-r ${mod.gradient} rounded-full transition-all`} style={{ width: `${((currentQ + 1) / total) * 100}%` }} />
            </div>
            <AnimatePresence mode="wait">
                <motion.div key={currentQ} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.25 }}>
                    <div className="glass-dark p-5 sm:p-7 rounded-2xl border border-[var(--border)] mb-5">
                        <p className="font-medium text-base sm:text-lg leading-relaxed">{question.question}</p>
                    </div>
                    <div className="grid gap-2.5">
                        {question.options.map((opt, i) => {
                            let cls = 'glass-dark border border-[var(--border)] hover:border-[var(--accent)]/50';
                            if (isAnswered) {
                                if (i === question.correctAnswer) cls = 'bg-emerald-500/10 border border-emerald-500/50 text-emerald-300';
                                else if (selected === i) cls = 'bg-red-500/10 border border-red-500/50 text-red-300';
                                else cls = 'glass-dark border border-[var(--border)] opacity-50';
                            }
                            return (
                                <button key={i} onClick={() => handleSelect(i)} disabled={isAnswered}
                                    className={`flex items-center gap-3 p-3.5 rounded-xl text-left transition-all ${cls} ${!isAnswered ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'}`}>
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${isAnswered && i === question.correctAnswer ? 'bg-emerald-500 text-white' :
                                            isAnswered && selected === i ? 'bg-red-500 text-white' : 'bg-[var(--border)]'
                                        }`}>{String.fromCharCode(65 + i)}</div>
                                    <span className="text-sm">{opt}</span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </AnimatePresence>
            {isAnswered && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex justify-end">
                    <button onClick={handleNext}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${mod.gradient} shadow-lg`}>
                        {currentQ < total - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'} <ChevronRight className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </div>
    );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────
type Phase = 'hub' | 'modules' | 'cards' | 'quiz';

export default function MaarifPage() {
    const { setQuizScore } = useMaarifStore();
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [selectedModule, setSelectedModule] = useState<MaarifModule | null>(null);
    const [phase, setPhase] = useState<Phase>('hub');
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const handleSubjectSelect = (s: Subject) => { setSelectedSubject(s); setPhase('modules'); };
    const handleModuleSelect = (mod: MaarifModule) => { setSelectedModule(mod); setPhase('cards'); };
    const handleCardsComplete = () => setPhase('quiz');
    const handleQuizFinish = (score: number) => {
        if (selectedModule) {
            setQuizScore(selectedModule.id, score, selectedModule.quiz.length);
            const passed = score >= Math.ceil(selectedModule.quiz.length * 0.6);
            if (!passed) setPhase('cards');
            else { setSelectedModule(null); setPhase('modules'); }
        }
    };

    const handleBack = () => {
        if (phase === 'quiz') setPhase('cards');
        else if (phase === 'cards') { setSelectedModule(null); setPhase('modules'); }
        else if (phase === 'modules') { setSelectedSubject(null); setPhase('hub'); }
    };

    const navLabel = phase === 'quiz' ? 'Kartlara Dön' : phase === 'cards' ? 'Modüller' : phase === 'modules' ? 'Dersler' : 'Dashboard';
    const headerTitle = phase === 'hub' ? 'EKYS Öğrenme Yolu' :
        phase === 'modules' ? selectedSubject?.title :
            selectedModule?.title;

    return (
        <div className="min-h-screen theme-bg selection:bg-primary/30 pb-24 md:pb-8">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-20 px-4 sm:px-6 py-4 sm:py-5 border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {phase !== 'hub' ? (
                        <button onClick={handleBack} className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors group text-sm">
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">{navLabel}</span>
                        </button>
                    ) : (
                        <Link href="/" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors group text-sm">
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Dashboard</span>
                        </Link>
                    )}
                    <div className="text-xs sm:text-sm font-bold tracking-widest text-purple-400 uppercase truncate max-w-[200px]">{headerTitle}</div>
                    <div className="w-20" />
                </div>
            </nav>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
                <AnimatePresence mode="wait">
                    {phase === 'hub' && <motion.div key="hub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><SubjectHub onSelectSubject={handleSubjectSelect} /></motion.div>}
                    {phase === 'modules' && selectedSubject && <motion.div key="mods" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ModuleSelector subject={selectedSubject} onSelect={handleModuleSelect} onBack={handleBack} /></motion.div>}
                    {phase === 'cards' && selectedModule && <motion.div key="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><CardViewer mod={selectedModule} onComplete={handleCardsComplete} /></motion.div>}
                    {phase === 'quiz' && selectedModule && <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ModuleQuiz mod={selectedModule} onFinish={handleQuizFinish} /></motion.div>}
                </AnimatePresence>
            </main>
        </div>
    );
}
