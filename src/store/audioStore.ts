import { create } from 'zustand';

interface AudioState {
    isMuted: boolean;
    isQuizActive: boolean;
    toggleMute: () => void;
    setQuizActive: (active: boolean) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
    isMuted: false,
    isQuizActive: false,
    toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
    setQuizActive: (active) => set(() => ({ isQuizActive: active })),
}));
