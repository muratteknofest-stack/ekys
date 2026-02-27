'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useAudioStore } from '@/store/audioStore';

export function AudioToggle() {
    const { isMuted, toggleMute } = useAudioStore();

    return (
        <button
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-50 p-3 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md rounded-full text-slate-300 hover:text-white shadow-lg border border-slate-600 transition-all hover:scale-110 active:scale-95"
            title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
        >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
    );
}
