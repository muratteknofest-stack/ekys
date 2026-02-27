'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface QuizTimerProps {
    duration: number;
    onTimeUp: () => void;
    isActive: boolean;
}

export default function QuizTimer({ duration, onTimeUp, isActive }: QuizTimerProps) {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (!isActive) return;

        if (timeLeft <= 0) {
            onTimeUp();
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, isActive, onTimeUp]);

    const percentage = (timeLeft / duration) * 100;
    const isWarning = timeLeft <= 5;

    return (
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
                <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    className="stroke-[var(--border)] fill-transparent"
                    strokeWidth="4"
                />
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    className={isWarning ? "stroke-rose-500 fill-transparent" : "stroke-primary fill-transparent"}
                    strokeWidth="4"
                    strokeDasharray="283"
                    animate={{ strokeDashoffset: 283 - (283 * percentage) / 100 }}
                    transition={{ duration: 1, ease: "linear" }}
                />
            </svg>
            <span className={`absolute text-base sm:text-lg md:text-xl font-bold ${isWarning ? 'text-rose-500 animate-pulse' : 'text-primary'}`}>
                {timeLeft}
            </span>
        </div>
    );
}
