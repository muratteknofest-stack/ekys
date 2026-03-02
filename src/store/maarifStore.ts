import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ModuleProgress {
    cardsRead: number[];      // indices of read cards
    quizScore: number | null; // null = not attempted
    quizTotal: number;
    unlocked: boolean;
    completed: boolean;
}

interface MaarifState {
    moduleProgress: Record<string, ModuleProgress>;
    currentModule: string | null;

    // Actions
    markCardRead: (moduleId: string, cardIndex: number) => void;
    setQuizScore: (moduleId: string, score: number, total: number) => void;
    unlockModule: (moduleId: string) => void;
    setCurrentModule: (moduleId: string | null) => void;
    resetProgress: () => void;
}

const MODULE_IDS = ['modul-1', 'modul-2', 'modul-3', 'modul-4', 'modul-5', 'modul-6'];

const initialProgress = (): Record<string, ModuleProgress> => {
    const progress: Record<string, ModuleProgress> = {};
    MODULE_IDS.forEach((id, idx) => {
        progress[id] = {
            cardsRead: [],
            quizScore: null,
            quizTotal: 0,
            unlocked: idx === 0, // first module always unlocked
            completed: false,
        };
    });
    return progress;
};

export const useMaarifStore = create<MaarifState>()(
    persist(
        (set, get) => ({
            moduleProgress: initialProgress(),
            currentModule: null,

            markCardRead: (moduleId, cardIndex) => set((state) => {
                const mod = state.moduleProgress[moduleId];
                if (!mod) return state;
                const newCardsRead = mod.cardsRead.includes(cardIndex)
                    ? mod.cardsRead
                    : [...mod.cardsRead, cardIndex];
                return {
                    moduleProgress: {
                        ...state.moduleProgress,
                        [moduleId]: { ...mod, cardsRead: newCardsRead },
                    },
                };
            }),

            setQuizScore: (moduleId, score, total) => set((state) => {
                const mod = state.moduleProgress[moduleId];
                if (!mod) return state;
                const passed = score >= Math.ceil(total * 0.6); // 60% to pass
                const moduleIdx = MODULE_IDS.indexOf(moduleId);
                const nextModuleId = MODULE_IDS[moduleIdx + 1];

                const newProgress = {
                    ...state.moduleProgress,
                    [moduleId]: {
                        ...mod,
                        quizScore: score,
                        quizTotal: total,
                        completed: passed,
                    },
                };

                // Unlock next module if passed
                if (passed && nextModuleId && newProgress[nextModuleId]) {
                    newProgress[nextModuleId] = {
                        ...newProgress[nextModuleId],
                        unlocked: true,
                    };
                }

                return { moduleProgress: newProgress };
            }),

            unlockModule: (moduleId) => set((state) => {
                const mod = state.moduleProgress[moduleId];
                if (!mod) return state;
                return {
                    moduleProgress: {
                        ...state.moduleProgress,
                        [moduleId]: { ...mod, unlocked: true },
                    },
                };
            }),

            setCurrentModule: (moduleId) => set({ currentModule: moduleId }),

            resetProgress: () => set({ moduleProgress: initialProgress(), currentModule: null }),
        }),
        { name: 'ekys-maarif-progress' }
    )
);
