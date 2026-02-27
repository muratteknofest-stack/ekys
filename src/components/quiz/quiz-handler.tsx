'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockQuestions, getDenemeQuestions } from '@/data/mock-questions';
import { pdfDenemeQuestions } from '@/data/pdf-deneme';
import { ekstraDenemeQuestions } from '@/data/ekstra-deneme-1';
import { ekstraDeneme2Questions } from '@/data/ekstra-deneme-2';
import { maarifDenemeQuestions } from '@/data/maarif-deneme';
import QuestionCard from './question-card';
import QuizTimer from './timer';
import { Trophy, RefreshCw, Home as HomeIcon } from 'lucide-react';
// @ts-ignore
import useSound from 'use-sound';
import Link from 'next/link';
import { useUserStore } from '@/store/userStore';
import { useAudioStore } from '@/store/audioStore';

export default function QuizHandler({ category = 'all', questionCount = 20 }: { category?: string, questionCount?: number }) {
    // Ses ve Global State Kancaları
    const { isMuted, setQuizActive } = useAudioStore();
    const [playClick] = useSound('/sounds/click.wav', { volume: 0.5 });
    const [playCorrect] = useSound('/sounds/correct.wav', { volume: 0.6 });
    const [playWrong] = useSound('/sounds/wrong.wav', { volume: 0.6 });
    const [playSuccess] = useSound('/sounds/success.wav', { volume: 0.5 });
    const [playFail] = useSound('/sounds/fail.wav', { volume: 0.5 });

    // Quiz Müziği Ref
    const quizAudioRef = useRef<HTMLAudioElement | null>(null);

    // Quiz Başlangıç/Bitiş ve Arkaplan Müziği Yönetimi
    useEffect(() => {
        // Quiz alanına girildiğini bildir (Global BGM susar)
        setQuizActive(true);

        if (!quizAudioRef.current) {
            quizAudioRef.current = new Audio('/sounds/The_Gilded_Cage.mp3');
            quizAudioRef.current.loop = true;
            quizAudioRef.current.volume = 0.2;
        }

        const audio = quizAudioRef.current;
        if (!isMuted) {
            audio.play().catch(e => console.log('Quiz BGM play blocked', e));
        }

        return () => {
            // Component silindiğinde (Quizden çıkıldığında) biter
            audio.pause();
            setQuizActive(false);
        };
    }, []); // Sadece ilk girişte çalışır

    // Kategoriye göre filtrele ve rastgele N adet soru seç
    const [questions] = useState(() => {
        if (category === 'maarif-deneme') {
            return maarifDenemeQuestions.slice(0, 12);
        }

        if (category === 'ekstra-deneme-2') {
            return ekstraDeneme2Questions.slice(0, 80);
        }

        if (category === 'ekstra-deneme-1') {
            return ekstraDenemeQuestions.slice(0, 80);
        }

        if (category === 'pdf-deneme') {
            return pdfDenemeQuestions.slice(0, 80);
        }

        if (category.startsWith('deneme-')) {
            const index = parseInt(category.split('-')[1], 10) || 1;
            return getDenemeQuestions(index);
        }

        const filtered = category === 'all'
            ? mockQuestions
            : mockQuestions.filter(q => q.category === category);
        const shuffled = [...filtered].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(questionCount, shuffled.length));
    });

    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isLocked, setIsLocked] = useState(false);

    // Global ses kapatma tuşuna anlık tepki için
    useEffect(() => {
        if (quizAudioRef.current) {
            if (isMuted) {
                quizAudioRef.current.pause();
            } else if (!isFinished) {
                quizAudioRef.current.play().catch(e => console.log(e));
            }
        }
    }, [isMuted, isFinished]);

    // Sınav Bitiş Efektleri
    useEffect(() => {
        if (isFinished && !isMuted) {
            const percentage = Math.round((score / questions.length) * 100);
            if (percentage >= 60) {
                playSuccess();
            } else {
                playFail();
            }
        }
    }, [isFinished, isMuted, score, questions.length, playSuccess, playFail]);

    if (questions.length === 0) {
        return <div className="text-center p-12 text-[var(--muted)]">Bu kategoriye ait soru bulunamadı. (Veritabanı güncelleniyor)</div>;
    }

    const currentQuestion = questions[currentStep];

    const handleOptionSelect = (optionIndex: number) => {
        if (isLocked) return;

        // Tıklama sesi
        playClick();

        setSelectedOption(optionIndex);
        setIsLocked(true);

        const isCorrect = optionIndex === currentQuestion.correctAnswer;

        // Doğru/Yanlış sesi çal
        if (isCorrect) {
            setScore(prev => prev + 1);
            playCorrect();
        } else {
            playWrong();
        }

        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                setCurrentStep(prev => prev + 1);
                setSelectedOption(null);
                setIsLocked(false);
            } else {
                // Skoru store'a kitle
                if (category.startsWith('deneme-')) {
                    const finalScore = score + (isCorrect ? 1 : 0);
                    useUserStore.getState().updateStats('Genel Deneme', finalScore, questions.length);
                } else if (category !== 'all') {
                    // Mevcut skor, henüz React state'ine geçmediği için, isCorrect ile hesaplayalım
                    const finalScore = score + (isCorrect ? 1 : 0);
                    useUserStore.getState().updateStats(category, finalScore, questions.length);
                }

                // Müzik Susar
                if (quizAudioRef.current) {
                    quizAudioRef.current.pause();
                }

                setIsFinished(true);
            }
        }, 1500);
    };

    const handleTimeUp = () => {
        if (isLocked) return;
        setIsLocked(true);
        setSelectedOption(-1); // Indicator for no answer

        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                setCurrentStep(prev => prev + 1);
                setSelectedOption(null);
                setIsLocked(false);
            } else {
                if (category.startsWith('deneme-')) {
                    useUserStore.getState().updateStats('Genel Deneme', score, questions.length);
                } else if (category !== 'all') {
                    useUserStore.getState().updateStats(category, score, questions.length);
                }

                // Müzik Susar
                if (quizAudioRef.current) {
                    quizAudioRef.current.pause();
                }

                setIsFinished(true);
            }
        }, 1500);
    };

    if (isFinished) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 glass-dark rounded-[3rem] max-w-lg mx-auto shadow-2xl"
            >
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy size={48} className="text-primary" />
                </div>
                <h2 className="text-4xl font-bold mb-2 text-gradient">Tebrikler!</h2>
                <p className="text-[var(--muted)] mb-8">Antrenmanı başarıyla tamamladın.</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl glass-dark">
                        <span className="block text-[var(--muted)] text-xs uppercase font-bold mb-1">Skor</span>
                        <span className="text-2xl font-bold text-[var(--fg)]">{score} / {questions.length}</span>
                    </div>
                    <div className="p-4 rounded-2xl glass-dark">
                        <span className="block text-[var(--muted)] text-xs uppercase font-bold mb-1">Başarı</span>
                        <span className="text-2xl font-bold text-[var(--fg)]">%{percentage}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/80 transition-all active:scale-95"
                    >
                        <RefreshCw size={20} /> Yeniden Başla
                    </button>
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl glass-dark text-[var(--fg)] font-bold hover:bg-[var(--border)] transition-all active:scale-95"
                    >
                        <HomeIcon size={20} /> Dashboard'a Dön
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto py-8">
            <div className="flex justify-between items-center mb-12 px-4">
                <div className="space-y-1">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">{currentQuestion.category}</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--fg)]">Soru {currentStep + 1} / {questions.length}</h2>
                </div>
                <QuizTimer
                    key={currentStep}
                    duration={30}
                    onTimeUp={handleTimeUp}
                    isActive={!isLocked}
                />
            </div>

            <AnimatePresence mode="wait">
                <QuestionCard
                    key={currentStep}
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    selectedOption={selectedOption}
                    correctAnswer={isLocked ? currentQuestion.correctAnswer : null}
                    onSelect={handleOptionSelect}
                    isDisabled={isLocked}
                />
            </AnimatePresence>

            <div className="mt-12 px-4">
                <div className="w-full h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </div>
    );
}
