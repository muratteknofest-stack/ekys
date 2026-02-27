'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
    question: string;
    options: string[];
    onSelect: (index: number) => void;
    selectedOption: number | null;
    correctAnswer: number | null;
    isDisabled: boolean;
}

export default function QuestionCard({
    question,
    options,
    onSelect,
    selectedOption,
    correctAnswer,
    isDisabled,
}: QuestionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl mx-auto"
        >
            <div className="glass-dark p-6 sm:p-8 rounded-[2rem] shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 leading-relaxed text-[var(--fg)]">
                    {question}
                </h3>

                <div className="space-y-3 sm:space-y-4">
                    {options.map((option, index) => {
                        const isSelected = selectedOption === index;
                        const isCorrect = correctAnswer === index;
                        const isWrong = isSelected && !isCorrect && correctAnswer !== null;

                        return (
                            <button
                                key={index}
                                disabled={isDisabled}
                                onClick={() => onSelect(index)}
                                className={cn(
                                    "w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border font-medium group relative overflow-hidden",
                                    !isDisabled && "hover:bg-[var(--accent)]/5 hover:border-primary/50",
                                    isSelected && !isCorrect && isWrong && "bg-rose-500/10 border-rose-500/50 text-rose-400",
                                    isCorrect && correctAnswer !== null && "bg-emerald-500/10 border-emerald-500/50 text-emerald-400",
                                    isSelected && correctAnswer === null && "bg-primary/10 border-primary/50 text-primary",
                                    !isSelected && (correctAnswer === null || !isCorrect) && "glass-dark border-[var(--border)] text-[var(--fg)]"
                                )}
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className={cn(
                                        "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border transition-colors",
                                        isSelected ? "bg-current text-[var(--bg)] border-transparent" : "border-[var(--border)] text-[var(--muted)]"
                                    )}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    <span className="flex-1 text-sm sm:text-base">{option}</span>
                                </div>

                                {!isDisabled && (
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
