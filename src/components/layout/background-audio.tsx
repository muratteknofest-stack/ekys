'use client';

import { useEffect, useRef } from 'react';
import { useAudioStore } from '@/store/audioStore';

export function BackgroundAudio() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const isMuted = useAudioStore((state) => state.isMuted);
    const isQuizActive = useAudioStore((state) => state.isQuizActive);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/sounds/bgm.mp3');
            audioRef.current.loop = true;
            audioRef.current.volume = 0.15; // Arka plan müziği kısık sesle çalmalı
        }

        const audio = audioRef.current;

        // Tarayıcı otomatik çalma politikalarını aşmak ve duruma göre çalmak için
        if (isMuted || isQuizActive) {
            audio.pause();
        } else {
            // "Kullanıcı etkileşimi" hatası almamak adına ufak bir catch
            audio.play().catch(e => console.log('BGM Play blocked by browser:', e));
        }

        return () => {
            // Unmount olduğunda (ki layouta konunca çok olmaz ama iyi pratiktir)
            audio.pause();
        };
    }, [isMuted, isQuizActive]);

    return null; // Görünür bir UI render etmez
}
