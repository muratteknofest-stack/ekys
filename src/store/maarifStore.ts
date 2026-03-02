import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { allSubjects, getAllModuleIds } from '@/data/learning-modules';

export interface ModuleProgress {
    cardsRead: number[];
    quizScore: number | null;
    quizTotal: number;
    unlocked: boolean;
    completed: boolean;
}

interface MaarifState {
    moduleProgress: Record<string, ModuleProgress>;
    currentModule: string | null;

    markCardRead: (moduleId: string, cardIndex: number) => void;
    setQuizScore: (moduleId: string, score: number, total: number) => void;
    unlockModule: (moduleId: string) => void;
    setCurrentModule: (moduleId: string | null) => void;
    resetProgress: () => void;
    resetSubjectProgress: (subjectId: string) => void;
}

function buildInitialProgress(): Record<string, ModuleProgress> {
    const progress: Record<string, ModuleProgress> = {};
    allSubjects.forEach((subject) => {
        subject.modules.forEach((mod, idx) => {
            progress[mod.id] = {
                cardsRead: [],
                quizScore: null,
                quizTotal: 0,
                unlocked: idx === 0,
                completed: false,
            };
        });
    });
    return progress;
}

export const useMaarifStore = create<MaarifState>()(
    persist(
        (set) => ({
            moduleProgress: buildInitialProgress(),
            currentModule: null,

            markCardRead: (moduleId: string, cardIndex: number) => set((state: MaarifState) => {
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

            setQuizScore: (moduleId: string, score: number, total: number) => set((state: MaarifState) => {
                const mod = state.moduleProgress[moduleId];
                if (!mod) return state;
                const passed = score >= Math.ceil(total * 0.6);

                // Find which subject this module belongs to and what's next
                let nextModuleId: string | null = null;
                for (const subject of allSubjects) {
                    const idx = subject.modules.findIndex(m => m.id === moduleId);
                    if (idx !== -1 && idx < subject.modules.length - 1) {
                        nextModuleId = subject.modules[idx + 1].id;
                        break;
                    }
                }

                const newProgress = {
                    ...state.moduleProgress,
                    [moduleId]: { ...mod, quizScore: score, quizTotal: total, completed: passed },
                };

                if (passed && nextModuleId && newProgress[nextModuleId]) {
                    newProgress[nextModuleId] = { ...newProgress[nextModuleId], unlocked: true };
                }

                return { moduleProgress: newProgress };
            }),

            unlockModule: (moduleId: string) => set((state: MaarifState) => {
                const mod = state.moduleProgress[moduleId];
                if (!mod) return state;
                return {
                    moduleProgress: {
                        ...state.moduleProgress,
                        [moduleId]: { ...mod, unlocked: true },
                    },
                };
            }),

            setCurrentModule: (moduleId: string | null) => set({ currentModule: moduleId }),

            resetProgress: () => set({ moduleProgress: buildInitialProgress(), currentModule: null }),

            resetSubjectProgress: (subjectId: string) => set((state: MaarifState) => {
                const subject = allSubjects.find(s => s.id === subjectId);
                if (!subject) return state;
                const newProgress = { ...state.moduleProgress };
                subject.modules.forEach((mod, idx) => {
                    newProgress[mod.id] = {
                        cardsRead: [],
                        quizScore: null,
                        quizTotal: 0,
                        unlocked: idx === 0,
                        completed: false,
                    };
                });
                return { moduleProgress: newProgress };
            }),
        }),
        {
            name: 'ekys-maarif-progress',
            // Merge stored progress with any new modules
            merge: (persisted: any, current: any) => {
                const fresh = buildInitialProgress();
                return {
                    ...current,
                    ...(persisted || {}),
                    moduleProgress: { ...fresh, ...((persisted as any)?.moduleProgress || {}) },
                };
            },
        }
    )
);
