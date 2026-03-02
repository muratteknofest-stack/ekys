'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft, ChevronRight, Lock, CheckCircle, BookOpen, Brain, Heart,
    GraduationCap, Rocket, Compass, ArrowRight, RotateCcw, Trophy,
    Sparkles, Star, ArrowLeft, Zap, Target
} from 'lucide-react';
import Link from 'next/link';
import { maarifModules, MaarifModule } from '@/data/maarif-modules';
import { useMaarifStore } from '@/store/maarifStore';

const ICON_MAP: Record<string, typeof Compass> = {
    Compass, Heart, Brain, BookOpen, GraduationCap, Rocket,
};

// ─── MODULE SELECTOR ──────────────────────────────────────────────
function ModuleSelector({ onSelect }: { onSelect: (mod: MaarifModule) => void }) {
    const { moduleProgress } = useMaarifStore();

    const completedCount = Object.values(moduleProgress).filter(m => m.completed).length;
    const totalModules = maarifModules.length;
    const overallProgress = Math.round((completedCount / totalModules) * 100);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl shadow-purple-500/20 mb-6"
                >
                    <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
                    Maarif Modeli <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Öğrenme Yolu</span>
                </h1>
                <p className="text-[var(--muted)] text-sm sm:text-base max-w-xl mx-auto">
                    Türkiye Yüzyılı Maarif Modelini en baştan, adım adım kavrayın. Her modülde bilgi kartları ve test bulunur.
                </p>
            </div>

            {/* Overall Progress */}
            <div className="glass-dark p-4 rounded-2xl border border-[var(--border)] mb-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center shrink-0">
                    <Trophy className="w-7 h-7 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm">Genel İlerlemeniz</span>
                        <span className="text-sm font-bold text-purple-400">{completedCount}/{totalModules} Modül</span>
                    </div>
                    <div className="h-2.5 bg-[var(--border)] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${overallProgress}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        />
                    </div>
                </div>
            </div>

            {/* Module Grid */}
            <div className="grid gap-4">
                {maarifModules.map((mod, idx) => {
                    const progress = moduleProgress[mod.id];
                    const isLocked = !progress?.unlocked;
                    const isCompleted = progress?.completed;
                    const cardsRead = progress?.cardsRead.length || 0;
                    const totalCards = mod.cards.length;
                    const cardProgress = Math.round((cardsRead / totalCards) * 100);
                    const Icon = ICON_MAP[mod.icon] || BookOpen;

                    return (
                        <motion.button
                            key={mod.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            onClick={() => !isLocked && onSelect(mod)}
                            disabled={isLocked}
                            className={`group relative flex items-center gap-4 sm:gap-6 p-4 sm:p-6 glass-dark rounded-2xl border text-left transition-all w-full ${isLocked
                                    ? 'border-[var(--border)] opacity-50 cursor-not-allowed'
                                    : isCompleted
                                        ? 'border-emerald-500/30 hover:border-emerald-500/60'
                                        : 'border-[var(--border)] hover:border-purple-500/50'
                                }`}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center shrink-0 shadow-lg ${isLocked ? 'grayscale' : ''
                                }`}>
                                {isLocked ? (
                                    <Lock className="w-7 h-7 text-white/60" />
                                ) : isCompleted ? (
                                    <CheckCircle className="w-7 h-7 text-white" />
                                ) : (
                                    <Icon className="w-7 h-7 text-white" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider">Modül {idx + 1}</span>
                                    {isCompleted && (
                                        <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">TAMAMLANDI</span>
                                    )}
                                    {isLocked && (
                                        <span className="bg-[var(--border)] text-[var(--muted)] text-[10px] font-bold px-2 py-0.5 rounded-full">KİLİTLİ</span>
                                    )}
                                </div>
                                <h3 className="font-bold text-base sm:text-lg mb-1 truncate">{mod.title}</h3>
                                <p className="text-[var(--muted)] text-xs sm:text-sm line-clamp-1">{mod.description}</p>
                                {!isLocked && !isCompleted && cardsRead > 0 && (
                                    <div className="mt-2 flex items-center gap-2">
                                        <div className="h-1.5 flex-1 bg-[var(--border)] rounded-full overflow-hidden max-w-[120px]">
                                            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${cardProgress}%` }} />
                                        </div>
                                        <span className="text-[10px] text-[var(--muted)]">{cardsRead}/{totalCards} kart</span>
                                    </div>
                                )}
                            </div>

                            {/* Arrow */}
                            {!isLocked && (
                                <ChevronRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--fg)] group-hover:translate-x-1 transition-all shrink-0" />
                            )}
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

    useEffect(() => {
        markCardRead(mod.id, currentCard);
    }, [currentCard, mod.id, markCardRead]);

    const next = useCallback(() => {
        if (currentCard < totalCards - 1) {
            setDirection(1);
            setCurrentCard(c => c + 1);
        } else {
            onComplete();
        }
    }, [currentCard, totalCards, onComplete]);

    const prev = useCallback(() => {
        if (currentCard > 0) {
            setDirection(-1);
            setCurrentCard(c => c - 1);
        }
    }, [currentCard]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [next, prev]);

    const card = mod.cards[currentCard];
    const isLastCard = currentCard === totalCards - 1;
    const isRead = progress?.cardsRead.includes(currentCard);

    const variants = {
        enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-[var(--muted)]">
                        Kart {currentCard + 1} / {totalCards}
                    </span>
                    <span className="text-xs text-[var(--muted)]">
                        {progress?.cardsRead.length || 0} okundu
                    </span>
                </div>
                <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full bg-gradient-to-r ${mod.gradient} rounded-full`}
                        animate={{ width: `${((currentCard + 1) / totalCards) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Card */}
            <div className="relative min-h-[360px] sm:min-h-[400px]">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentCard}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className={`glass-dark p-6 sm:p-8 rounded-3xl border border-[var(--border)] h-full flex flex-col`}>
                            {/* Card Number Badge */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${mod.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                                    {currentCard + 1}
                                </div>
                                <h3 className="font-bold text-lg sm:text-xl flex-1">{card.title}</h3>
                            </div>

                            {/* Highlight */}
                            {card.highlight && (
                                <div className={`mb-4 px-4 py-2.5 rounded-xl bg-gradient-to-r ${mod.gradient} bg-opacity-10 border border-white/10`}>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-300 shrink-0" />
                                        <span className="text-sm font-bold text-white/90">{card.highlight}</span>
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            <div className="flex-1 text-[var(--muted)] text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                {card.content}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 gap-4">
                <button
                    onClick={prev}
                    disabled={currentCard === 0}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl glass-dark border border-[var(--border)] text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--accent)]/50 transition-all"
                >
                    <ChevronLeft className="w-4 h-4" /> Önceki
                </button>

                <div className="flex gap-1.5">
                    {mod.cards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > currentCard ? 1 : -1); setCurrentCard(i); }}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentCard ? 'bg-[var(--accent)] scale-125' :
                                    progress?.cardsRead.includes(i) ? 'bg-[var(--accent)]/40' : 'bg-[var(--border)]'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${isLastCard
                            ? `bg-gradient-to-r ${mod.gradient} text-white shadow-lg hover:shadow-xl`
                            : 'glass-dark border border-[var(--border)] hover:border-[var(--accent)]/50'
                        }`}
                >
                    {isLastCard ? 'Teste Geç' : 'Sonraki'} <ChevronRight className="w-4 h-4" />
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
    const [answers, setAnswers] = useState<(number | null)[]>(new Array(mod.quiz.length).fill(null));

    const question = mod.quiz[currentQ];
    const total = mod.quiz.length;
    const isAnswered = selected !== null;
    const isCorrect = selected === question.correctAnswer;

    const handleSelect = (idx: number) => {
        if (isAnswered) return;
        setSelected(idx);
        const newAnswers = [...answers];
        newAnswers[currentQ] = idx;
        setAnswers(newAnswers);
        if (idx === question.correctAnswer) {
            setScore(s => s + 1);
        }
    };

    const handleNext = () => {
        if (currentQ < total - 1) {
            setCurrentQ(c => c + 1);
            setSelected(null);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        const passed = score >= Math.ceil(total * 0.6);
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-lg mx-auto text-center"
            >
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 ${passed ? 'bg-emerald-500/20' : 'bg-red-500/20'
                    }`}>
                    {passed ? (
                        <Trophy className="w-12 h-12 text-emerald-400" />
                    ) : (
                        <RotateCcw className="w-12 h-12 text-red-400" />
                    )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black mb-3">
                    {passed ? 'Tebrikler! 🎉' : 'Tekrar Deneyin'}
                </h2>
                <p className="text-[var(--muted)] mb-6">
                    {passed
                        ? `${total} sorudan ${score} tanesini doğru cevapladınız. Bir sonraki modül açıldı!`
                        : `${total} sorudan ${score} tanesini doğru cevapladınız. Geçmek için en az ${Math.ceil(total * 0.6)} doğru gerekli.`
                    }
                </p>

                <div className={`text-6xl font-black mb-6 ${passed ? 'text-emerald-400' : 'text-red-400'}`}>
                    {score}/{total}
                </div>

                <div className="glass-dark p-4 rounded-2xl border border-[var(--border)] mb-8">
                    <div className="h-3 bg-[var(--border)] rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full ${passed ? 'bg-emerald-500' : 'bg-red-500'}`}
                            style={{ width: `${(score / total) * 100}%` }}
                        />
                    </div>
                    <p className="text-xs text-[var(--muted)] mt-2">
                        Başarı: %{Math.round((score / total) * 100)} | Geçme Eşiği: %60
                    </p>
                </div>

                <button
                    onClick={() => onFinish(score)}
                    className={`px-8 py-4 rounded-xl font-bold text-white shadow-lg transition-all ${passed
                            ? `bg-gradient-to-r ${mod.gradient} hover:shadow-xl`
                            : 'bg-gradient-to-r from-red-500 to-rose-600 hover:shadow-xl'
                        }`}
                >
                    {passed ? 'Devam Et' : 'Kartlara Dön ve Tekrar Dene'}
                </button>
            </motion.div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-[var(--muted)]">Soru {currentQ + 1} / {total}</span>
                <span className="text-xs font-bold text-emerald-400">{score} Doğru</span>
            </div>
            <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden mb-8">
                <div
                    className={`h-full bg-gradient-to-r ${mod.gradient} rounded-full transition-all`}
                    style={{ width: `${((currentQ + 1) / total) * 100}%` }}
                />
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQ}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className="glass-dark p-6 sm:p-8 rounded-3xl border border-[var(--border)] mb-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${mod.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                                {currentQ + 1}
                            </div>
                            <Target className="w-4 h-4 text-[var(--muted)]" />
                        </div>
                        <p className="font-medium text-base sm:text-lg leading-relaxed">{question.question}</p>
                    </div>

                    {/* Options */}
                    <div className="grid gap-3">
                        {question.options.map((opt, i) => {
                            const isSelected = selected === i;
                            const isOptionCorrect = i === question.correctAnswer;
                            let optClass = 'glass-dark border border-[var(--border)] hover:border-[var(--accent)]/50';

                            if (isAnswered) {
                                if (isOptionCorrect) {
                                    optClass = 'bg-emerald-500/10 border border-emerald-500/50 text-emerald-300';
                                } else if (isSelected && !isOptionCorrect) {
                                    optClass = 'bg-red-500/10 border border-red-500/50 text-red-300';
                                } else {
                                    optClass = 'glass-dark border border-[var(--border)] opacity-50';
                                }
                            }

                            return (
                                <button
                                    key={i}
                                    onClick={() => handleSelect(i)}
                                    disabled={isAnswered}
                                    className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all ${optClass} ${!isAnswered ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${isAnswered && isOptionCorrect
                                            ? 'bg-emerald-500 text-white'
                                            : isAnswered && isSelected && !isOptionCorrect
                                                ? 'bg-red-500 text-white'
                                                : 'bg-[var(--border)]'
                                        }`}>
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                    <span className="text-sm sm:text-base">{opt}</span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            {isAnswered && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 flex justify-end"
                >
                    <button
                        onClick={handleNext}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${mod.gradient} shadow-lg hover:shadow-xl transition-all`}
                    >
                        {currentQ < total - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </div>
    );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────
type Phase = 'select' | 'cards' | 'quiz';

export default function MaarifPage() {
    const { setQuizScore, resetProgress } = useMaarifStore();
    const [selectedModule, setSelectedModule] = useState<MaarifModule | null>(null);
    const [phase, setPhase] = useState<Phase>('select');
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const handleModuleSelect = (mod: MaarifModule) => {
        setSelectedModule(mod);
        setPhase('cards');
    };

    const handleCardsComplete = () => {
        setPhase('quiz');
    };

    const handleQuizFinish = (score: number) => {
        if (selectedModule) {
            setQuizScore(selectedModule.id, score, selectedModule.quiz.length);
            const passed = score >= Math.ceil(selectedModule.quiz.length * 0.6);
            if (!passed) {
                // Go back to cards if failed
                setPhase('cards');
            } else {
                setSelectedModule(null);
                setPhase('select');
            }
        }
    };

    const handleBack = () => {
        if (phase === 'quiz') {
            setPhase('cards');
        } else {
            setSelectedModule(null);
            setPhase('select');
        }
    };

    return (
        <div className="min-h-screen theme-bg selection:bg-primary/30 pb-24 md:pb-8">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[120px]" />
            </div>

            {/* Nav */}
            <nav className="relative z-20 px-4 sm:px-6 py-4 sm:py-6 border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {phase !== 'select' ? (
                        <button onClick={handleBack} className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors group text-sm sm:text-base">
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">{phase === 'quiz' ? 'Kartlara Dön' : 'Modül Seçimi'}</span>
                        </button>
                    ) : (
                        <Link href="/" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors group text-sm sm:text-base">
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Dashboard</span>
                        </Link>
                    )}
                    <div className="text-xs sm:text-sm font-bold tracking-widest text-purple-400 uppercase">
                        {phase === 'select' ? 'Maarif Öğrenme Yolu' : selectedModule?.title}
                    </div>
                    <div className="w-24 sm:w-48" />
                </div>
            </nav>

            {/* Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <AnimatePresence mode="wait">
                    {phase === 'select' && (
                        <motion.div key="select" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <ModuleSelector onSelect={handleModuleSelect} />
                        </motion.div>
                    )}
                    {phase === 'cards' && selectedModule && (
                        <motion.div key="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <CardViewer mod={selectedModule} onComplete={handleCardsComplete} />
                        </motion.div>
                    )}
                    {phase === 'quiz' && selectedModule && (
                        <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <ModuleQuiz mod={selectedModule} onFinish={handleQuizFinish} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
