'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockQuestions, Question } from '@/data/mock-questions';
import { Home as HomeIcon, RotateCcw, Phone, Users, Scissors, Trophy, XCircle, HelpCircle, ChevronLeft, Zap } from 'lucide-react';
import Link from 'next/link';

const MONEY_LADDER = [
    { amount: '500.000.000.000 ₺', value: 500_000_000_000, safe: true },
    { amount: '50.000.000.000 ₺', value: 50_000_000_000, safe: false },
    { amount: '1.000.000 ₺', value: 1_000_000, safe: false },
    { amount: '500.000 ₺', value: 500_000, safe: false },
    { amount: '250.000 ₺', value: 250_000, safe: false },
    { amount: '100.000 ₺', value: 100_000, safe: true },
    { amount: '50.000 ₺', value: 50_000, safe: false },
    { amount: '25.000 ₺', value: 25_000, safe: false },
    { amount: '10.000 ₺', value: 10_000, safe: false },
    { amount: '5.000 ₺', value: 5_000, safe: false },
    { amount: '2.000 ₺', value: 2_000, safe: true },
    { amount: '1.000 ₺', value: 1_000, safe: false },
    { amount: '500 ₺', value: 500, safe: false },
    { amount: '200 ₺', value: 200, safe: false },
    { amount: '100 ₺', value: 100, safe: false },
].reverse();

type GameState = 'idle' | 'playing' | 'won' | 'lost' | 'quit';

function getRandomQuestions(): Question[] {
    const shuffled = [...mockQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 15);
}

function getAudienceVotes(correctIndex: number, eliminatedOptions: number[]): number[] {
    const votes = [0, 0, 0, 0];
    const availableIndices = [0, 1, 2, 3].filter(i => !eliminatedOptions.includes(i));

    let remaining = 100;
    // Give correct answer 40-70% of votes
    const correctVotes = Math.floor(40 + Math.random() * 30);
    votes[correctIndex] = correctVotes;
    remaining -= correctVotes;

    // Distribute remaining among other available options
    const otherIndices = availableIndices.filter(i => i !== correctIndex);
    otherIndices.forEach((idx, i) => {
        if (i === otherIndices.length - 1) {
            votes[idx] = remaining;
        } else {
            const v = Math.floor(Math.random() * remaining);
            votes[idx] = v;
            remaining -= v;
        }
    });

    return votes;
}

export default function MilyarGame() {
    const [gameState, setGameState] = useState<GameState>('idle');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isLocked, setIsLocked] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);

    // Jokers
    const [fiftyUsed, setFiftyUsed] = useState(false);
    const [audienceUsed, setAudienceUsed] = useState(false);
    const [phoneUsed, setPhoneUsed] = useState(false);
    const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
    const [audienceVotes, setAudienceVotes] = useState<number[] | null>(null);
    const [phoneHint, setPhoneHint] = useState<string | null>(null);

    // Earned money
    const [earnedMoney, setEarnedMoney] = useState('0 ₺');

    const startGame = useCallback(() => {
        const qs = getRandomQuestions();
        setQuestions(qs);
        setCurrentLevel(0);
        setSelectedOption(null);
        setIsLocked(false);
        setIsRevealed(false);
        setFiftyUsed(false);
        setAudienceUsed(false);
        setPhoneUsed(false);
        setEliminatedOptions([]);
        setAudienceVotes(null);
        setPhoneHint(null);
        setEarnedMoney('0 ₺');
        setGameState('playing');
    }, []);

    const currentQuestion = questions[currentLevel];

    const getGuaranteedMoney = useCallback(() => {
        // Find last safe level achieved
        for (let i = currentLevel - 1; i >= 0; i--) {
            if (MONEY_LADDER[i].safe) {
                return MONEY_LADDER[i].amount;
            }
        }
        return '0 ₺';
    }, [currentLevel]);

    const handleAnswer = (optionIndex: number) => {
        if (isLocked || eliminatedOptions.includes(optionIndex)) return;

        setSelectedOption(optionIndex);
        setIsLocked(true);

        setTimeout(() => {
            setIsRevealed(true);
            const isCorrect = optionIndex === currentQuestion.correctAnswer;

            if (isCorrect) {
                const wonAmount = MONEY_LADDER[currentLevel].amount;
                setEarnedMoney(wonAmount);

                setTimeout(() => {
                    if (currentLevel === 14) {
                        setGameState('won');
                    } else {
                        setCurrentLevel(prev => prev + 1);
                        setSelectedOption(null);
                        setIsLocked(false);
                        setIsRevealed(false);
                        setEliminatedOptions([]);
                        setAudienceVotes(null);
                        setPhoneHint(null);
                    }
                }, 2000);
            } else {
                setTimeout(() => {
                    setEarnedMoney(getGuaranteedMoney());
                    setGameState('lost');
                }, 2500);
            }
        }, 1500);
    };

    const useFiftyFifty = () => {
        if (fiftyUsed || isLocked) return;
        setFiftyUsed(true);

        const wrongOptions = [0, 1, 2, 3].filter(i => i !== currentQuestion.correctAnswer);
        // Remove 2 random wrong options
        const shuffledWrong = wrongOptions.sort(() => Math.random() - 0.5);
        setEliminatedOptions([shuffledWrong[0], shuffledWrong[1]]);
    };

    const useAudience = () => {
        if (audienceUsed || isLocked) return;
        setAudienceUsed(true);
        const votes = getAudienceVotes(currentQuestion.correctAnswer, eliminatedOptions);
        setAudienceVotes(votes);
    };

    const usePhone = () => {
        if (phoneUsed || isLocked) return;
        setPhoneUsed(true);

        const correctLetter = String.fromCharCode(65 + currentQuestion.correctAnswer);
        const confidence = Math.random();

        if (confidence > 0.3) {
            setPhoneHint(`Bence cevap ${correctLetter} şıkkı. Oldukça eminim!`);
        } else {
            const wrongOption = [0, 1, 2, 3].filter(i => i !== currentQuestion.correctAnswer)[Math.floor(Math.random() * 3)];
            const wrongLetter = String.fromCharCode(65 + wrongOption);
            setPhoneHint(`Tam emin değilim ama ${wrongLetter} olabilir... ya da ${correctLetter}?`);
        }
    };

    const handleQuit = () => {
        setGameState('quit');
    };

    // --- IDLE SCREEN ---
    if (gameState === 'idle') {
        return (
            <div className="min-h-screen theme-bg flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="z-10 text-center max-w-lg w-full"
                >
                    <div className="glass-dark p-8 sm:p-12 rounded-[2.5rem] shadow-2xl">
                        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.3)]">
                            <Zap className="w-12 h-12 text-white" />
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-black mb-3">
                            Kim <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">500 Milyar</span> İster?
                        </h1>
                        <p className="text-[var(--muted)] mb-2 text-sm sm:text-base">
                            15 soruyu doğru cevapla ve 500 Milyar ₺ kazan!
                        </p>
                        <p className="text-[var(--muted)] mb-8 text-xs">
                            3 Joker: %50:50 • Seyirci • Telefon
                        </p>

                        <button
                            onClick={startGame}
                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all active:scale-95 shadow-[0_0_30px_rgba(251,191,36,0.3)] mb-4"
                        >
                            Oyunu Başlat
                        </button>

                        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors text-sm">
                            <ChevronLeft className="w-4 h-4" /> Ana Sayfaya Dön
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    // --- END SCREENS ---
    if (gameState === 'won' || gameState === 'lost' || gameState === 'quit') {
        const isWin = gameState === 'won';
        const title = isWin ? '🎉 TEBRİKLER! 🎉' : gameState === 'quit' ? 'Oyundan Ayrıldınız' : 'Üzgünüz, Yanlış Cevap!';
        const subtitle = isWin
            ? '500 Milyar ₺ Kazandınız!'
            : `Kazancınız: ${earnedMoney}`;

        return (
            <div className="min-h-screen theme-bg flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px] animate-pulse-slow" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="z-10 text-center max-w-lg w-full"
                >
                    <div className="glass-dark p-8 sm:p-12 rounded-[2.5rem] shadow-2xl">
                        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isWin ? 'bg-amber-500/20' : 'bg-red-500/20'}`}>
                            {isWin ? <Trophy className="w-12 h-12 text-amber-400" /> : <XCircle className="w-12 h-12 text-red-400" />}
                        </div>

                        <h2 className="text-3xl font-black mb-2">{title}</h2>
                        <p className="text-xl font-bold text-amber-400 mb-2">{subtitle}</p>
                        <p className="text-[var(--muted)] mb-8 text-sm">
                            {currentLevel + (gameState === 'won' ? 0 : 0)} / 15 soru tamamlandı
                        </p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={startGame}
                                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold hover:from-amber-600 hover:to-orange-600 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                <RotateCcw className="w-5 h-5" /> Tekrar Oyna
                            </button>
                            <Link
                                href="/"
                                className="w-full py-4 rounded-2xl glass-dark text-[var(--fg)] font-bold hover:bg-[var(--border)] transition-all flex items-center justify-center gap-2"
                            >
                                <HomeIcon className="w-5 h-5" /> Ana Sayfaya Dön
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (!currentQuestion) return null;

    // --- GAME SCREEN ---
    return (
        <div className="min-h-screen theme-bg pb-24 md:pb-8 relative overflow-hidden">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-4 sm:mb-8">
                    <button
                        onClick={handleQuit}
                        className="flex items-center gap-2 text-[var(--muted)] hover:text-amber-400 transition-colors glass-dark py-2 px-3 sm:px-4 rounded-xl text-sm"
                    >
                        <ChevronLeft className="w-4 h-4" /> Çekil ({earnedMoney} al)
                    </button>

                    <div className="text-amber-400 font-bold text-sm sm:text-base glass-dark px-3 sm:px-4 py-2 rounded-xl border border-amber-500/20">
                        Soru {currentLevel + 1}/15
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* Left: Money Ladder (desktop) / Bottom (mobile) */}
                    <div className="order-2 lg:order-1 lg:col-span-1">
                        <div className="glass-dark rounded-2xl p-3 sm:p-4 border border-amber-500/10">
                            <h3 className="text-amber-400 font-bold text-xs sm:text-sm mb-3 text-center uppercase tracking-wider">Para Merdiveni</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-1 gap-1">
                                {MONEY_LADDER.map((level, idx) => {
                                    const isCurrentLevel = idx === currentLevel;
                                    const isPassed = idx < currentLevel;

                                    return (
                                        <div
                                            key={idx}
                                            className={`py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-[10px] sm:text-xs font-bold text-center transition-all ${isCurrentLevel
                                                    ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(251,191,36,0.4)] scale-105'
                                                    : isPassed
                                                        ? 'bg-emerald-500/20 text-emerald-400'
                                                        : level.safe
                                                            ? 'glass-dark text-amber-300 border border-amber-500/20'
                                                            : 'glass-dark text-[var(--muted)]'
                                                }`}
                                        >
                                            {level.amount}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right: Question */}
                    <div className="order-1 lg:order-2 lg:col-span-3">
                        {/* Jokers */}
                        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            <button
                                onClick={useFiftyFifty}
                                disabled={fiftyUsed || isLocked}
                                className={`flex items-center gap-1 sm:gap-2 py-2 px-3 sm:px-4 rounded-xl transition-all text-xs sm:text-sm font-bold ${fiftyUsed ? 'glass-dark text-[var(--muted)] opacity-40 line-through' : 'glass-dark border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 active:scale-95'
                                    }`}
                            >
                                <Scissors className="w-4 h-4" /> 50:50
                            </button>
                            <button
                                onClick={useAudience}
                                disabled={audienceUsed || isLocked}
                                className={`flex items-center gap-1 sm:gap-2 py-2 px-3 sm:px-4 rounded-xl transition-all text-xs sm:text-sm font-bold ${audienceUsed ? 'glass-dark text-[var(--muted)] opacity-40 line-through' : 'glass-dark border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 active:scale-95'
                                    }`}
                            >
                                <Users className="w-4 h-4" /> Seyirci
                            </button>
                            <button
                                onClick={usePhone}
                                disabled={phoneUsed || isLocked}
                                className={`flex items-center gap-1 sm:gap-2 py-2 px-3 sm:px-4 rounded-xl transition-all text-xs sm:text-sm font-bold ${phoneUsed ? 'glass-dark text-[var(--muted)] opacity-40 line-through' : 'glass-dark border border-green-500/30 text-green-400 hover:bg-green-500/10 active:scale-95'
                                    }`}
                            >
                                <Phone className="w-4 h-4" /> Telefon
                            </button>
                        </div>

                        {/* Audience Result */}
                        {audienceVotes && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-dark rounded-2xl p-4 mb-4 border border-blue-500/20"
                            >
                                <p className="text-blue-400 text-xs font-bold mb-2 text-center">📊 Seyirci Sonuçları</p>
                                <div className="flex items-end justify-center gap-3 sm:gap-6 h-20">
                                    {audienceVotes.map((vote, idx) => (
                                        <div key={idx} className={`flex flex-col items-center gap-1 ${eliminatedOptions.includes(idx) ? 'opacity-20' : ''}`}>
                                            <span className="text-[10px] font-bold text-[var(--fg)]">%{vote}</span>
                                            <div className="w-8 sm:w-10 bg-blue-500/20 rounded-t-md overflow-hidden" style={{ height: `${Math.max(vote, 2)}%` }}>
                                                <div className="w-full h-full bg-blue-500 rounded-t-md" />
                                            </div>
                                            <span className="text-[10px] font-bold text-[var(--muted)]">{String.fromCharCode(65 + idx)}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Phone Hint */}
                        {phoneHint && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-dark rounded-2xl p-4 mb-4 border border-green-500/20"
                            >
                                <p className="text-green-400 text-xs font-bold mb-1">📞 Arkadaş Cevabı:</p>
                                <p className="text-[var(--fg)] text-sm italic">&quot;{phoneHint}&quot;</p>
                            </motion.div>
                        )}

                        {/* Question Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentLevel}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="glass-dark rounded-[2rem] p-6 sm:p-8 border border-amber-500/10 shadow-2xl"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[10px] sm:text-xs text-amber-400 font-bold bg-amber-500/10 px-2 py-1 rounded-full uppercase">{currentQuestion.category}</span>
                                    <span className="text-[10px] sm:text-xs text-[var(--muted)]">• {MONEY_LADDER[currentLevel].amount} sorusu</span>
                                </div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 leading-relaxed">
                                    {currentQuestion.question}
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {currentQuestion.options.map((option, idx) => {
                                        const isEliminated = eliminatedOptions.includes(idx);
                                        const isSelected = selectedOption === idx;
                                        const isCorrect = isRevealed && idx === currentQuestion.correctAnswer;
                                        const isWrong = isRevealed && isSelected && idx !== currentQuestion.correctAnswer;

                                        if (isEliminated) {
                                            return (
                                                <div key={idx} className="p-4 sm:p-5 rounded-2xl glass-dark opacity-20 border border-[var(--border)]">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-[var(--border)] text-[var(--muted)]">
                                                            {String.fromCharCode(65 + idx)}
                                                        </div>
                                                        <span className="flex-1 text-[var(--muted)] line-through text-sm sm:text-base">{option}</span>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                disabled={isLocked}
                                                onClick={() => handleAnswer(idx)}
                                                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border font-medium relative overflow-hidden ${isCorrect
                                                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                                                        : isWrong
                                                            ? 'bg-red-500/20 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                                                            : isSelected && !isRevealed
                                                                ? 'bg-amber-500/20 border-amber-500/50 text-amber-400 animate-pulse'
                                                                : 'glass-dark border-[var(--border)] text-[var(--fg)] hover:border-amber-500/40 hover:bg-amber-500/5 active:scale-[0.98]'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-colors ${isCorrect ? 'bg-emerald-500 text-white border-emerald-500' :
                                                            isWrong ? 'bg-red-500 text-white border-red-500' :
                                                                isSelected ? 'bg-amber-500 text-black border-amber-500' :
                                                                    'border-[var(--border)] text-[var(--muted)]'
                                                        }`}>
                                                        {String.fromCharCode(65 + idx)}
                                                    </div>
                                                    <span className="flex-1 text-sm sm:text-base">{option}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
