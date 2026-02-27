'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const targetDate = new Date('2026-03-15T00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!timeLeft) return null;

    return (
        <div className="flex gap-4 md:gap-8 justify-center items-center py-6">
            <TimeUnit value={timeLeft.days} label="Gün" />
            <TimeUnit value={timeLeft.hours} label="Saat" />
            <TimeUnit value={timeLeft.minutes} label="Dakika" />
            <TimeUnit value={timeLeft.seconds} label="Saniye" />
        </div>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
        >
            <div className="w-16 h-16 md:w-24 md:h-24 glass flex items-center justify-center rounded-2xl shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl md:text-4xl font-bold text-gradient">{value.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-xs md:text-sm text-[var(--muted)] mt-2 font-medium uppercase tracking-wider">{label}</span>
        </motion.div>
    );
}
