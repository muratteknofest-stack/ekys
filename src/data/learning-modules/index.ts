import { MaarifModule } from '../maarif-modules';
import { maarifModules } from '../maarif-modules';
import { gkModules } from './gk-modules';
import { egitimModules } from './egitim-modules';
import { mevzuatModules } from './mevzuat-modules';
import { inkilapModules } from './inkilap-modules';

export interface Subject {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    gradient: string;
    color: string;
    emoji: string;
    modules: MaarifModule[];
}

export const allSubjects: Subject[] = [
    {
        id: 'maarif',
        title: 'Türkiye Yüzyılı Maarif Modeli',
        subtitle: '6 modül • 36 kart • 30 soru',
        icon: 'Sparkles',
        gradient: 'from-purple-500 to-pink-500',
        color: 'purple',
        emoji: '✨',
        modules: maarifModules,
    },
    {
        id: 'egitim',
        title: 'Eğitim Bilimleri',
        subtitle: '3 modül • 14 kart • 24 soru',
        icon: 'Brain',
        gradient: 'from-violet-500 to-purple-600',
        color: 'violet',
        emoji: '🧠',
        modules: egitimModules,
    },
    {
        id: 'gk',
        title: 'Genel Kültür',
        subtitle: '3 modül • 12 kart • 24 soru',
        icon: 'BookOpen',
        gradient: 'from-amber-500 to-yellow-600',
        color: 'amber',
        emoji: '📚',
        modules: gkModules,
    },
    {
        id: 'mevzuat',
        title: 'Mevzuat',
        subtitle: '3 modül • 11 kart • 24 soru',
        icon: 'GraduationCap',
        gradient: 'from-red-500 to-rose-600',
        color: 'red',
        emoji: '⚖️',
        modules: mevzuatModules,
    },
    {
        id: 'inkilap',
        title: 'İnkılap Tarihi',
        subtitle: '3 modül • 12 kart • 24 soru',
        icon: 'Compass',
        gradient: 'from-red-600 to-orange-600',
        color: 'red',
        emoji: '🏛️',
        modules: inkilapModules,
    },
];

// Utility to get all module IDs across all subjects
export function getAllModuleIds(): string[] {
    return allSubjects.flatMap(s => s.modules.map(m => m.id));
}
