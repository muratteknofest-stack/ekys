import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticated: boolean;
    login: (password: string) => boolean;
    logout: () => void;
}

const VALID_PASSWORDS: string[] = [
    'ekys2026', 'mudur2026', 'yonetici01', 'yonetici02', 'yonetici03',
    'yonetici04', 'yonetici05', 'yonetici06', 'yonetici07', 'yonetici08',
    'yonetici09', 'yonetici10', 'sinav2026', 'basari01', 'basari02',
    'basari03', 'basari04', 'basari05', 'basari06', 'basari07',
    'hazirlik01', 'hazirlik02', 'hazirlik03', 'hazirlik04', 'hazirlik05',
    'hazirlik06', 'hazirlik07', 'hazirlik08', 'hazirlik09', 'hazirlik10',
    'ogretmen01', 'ogretmen02', 'ogretmen03', 'ogretmen04', 'ogretmen05',
    'ogretmen06', 'ogretmen07', 'ogretmen08', 'ogretmen09', 'ogretmen10',
    'meb2026a', 'meb2026b', 'meb2026c', 'meb2026d', 'meb2026e',
    'meb2026f', 'meb2026g', 'meb2026h', 'meb2026i', 'meb2026j',
    'egitim01', 'egitim02', 'egitim03', 'egitim04', 'egitim05',
    'egitim06', 'egitim07', 'egitim08', 'egitim09', 'egitim10',
    'okul2026a', 'okul2026b', 'okul2026c', 'okul2026d', 'okul2026e',
    'okul2026f', 'okul2026g', 'okul2026h', 'okul2026i', 'okul2026j',
    'lider01', 'lider02', 'lider03', 'lider04', 'lider05',
    'lider06', 'lider07', 'lider08', 'lider09', 'lider10',
    'aday2026a', 'aday2026b', 'aday2026c', 'aday2026d', 'aday2026e',
    'aday2026f', 'aday2026g', 'aday2026h', 'aday2026i', 'aday2026j',
    'hedef01', 'hedef02', 'hedef03', 'hedef04', 'hedef05',
    'hedef06', 'hedef07', 'hedef08', 'hedef09', 'hedef10',
];

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            login: (password: string) => {
                if (VALID_PASSWORDS.includes(password.trim().toLowerCase())) {
                    set({ isAuthenticated: true });
                    return true;
                }
                return false;
            },
            logout: () => set({ isAuthenticated: false }),
        }),
        { name: 'ekys-auth' }
    )
);
