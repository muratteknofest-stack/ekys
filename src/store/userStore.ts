import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CategoryStats {
    totalQuestions: number;
    correctAnswers: number;
    wrongAnswers: number;
    quizzesCompleted: number;
}

interface UserState {
    name: string | null;
    isLoggedIn: boolean;
    stats: Record<string, CategoryStats>; // Kategori adına göre istatistikler

    // Actions
    login: (name: string) => void;
    logout: () => void;
    updateStats: (category: string, correct: number, total: number) => void;
    clearStats: () => void;
}

const initialStats = (): Record<string, CategoryStats> => ({
    'Genel Kültür': { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, quizzesCompleted: 0 },
    'Mevzuat': { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, quizzesCompleted: 0 },
    'Eğitim Bilimleri': { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, quizzesCompleted: 0 },
    'İnkılap Tarihi': { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, quizzesCompleted: 0 },
    'Türkiye Yüzyılı': { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, quizzesCompleted: 0 },
});

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            name: null,
            isLoggedIn: false,
            stats: initialStats(),

            login: (name) => set({ name, isLoggedIn: true }),

            logout: () => set({ name: null, isLoggedIn: false, stats: initialStats() }),

            updateStats: (category, correct, total) => set((state) => {
                const currentCat = state.stats[category] || { totalQuestions: 0, correctAnswers: 0, wrongAnswers: 0, quizzesCompleted: 0 };
                const wrong = total - correct;

                return {
                    stats: {
                        ...state.stats,
                        [category]: {
                            totalQuestions: currentCat.totalQuestions + total,
                            correctAnswers: currentCat.correctAnswers + correct,
                            wrongAnswers: currentCat.wrongAnswers + wrong,
                            quizzesCompleted: currentCat.quizzesCompleted + 1
                        }
                    }
                };
            }),

            clearStats: () => set({ stats: initialStats() })
        }),
        {
            name: 'ekys-user-storage', // LocalStorage'da tutulacak isim
        }
    )
);
