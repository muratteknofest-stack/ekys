'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Layout, BookOpen, Target, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

interface Slide {
    title: string;
    subtitle?: string;
    content: string[];
    icon: React.ReactNode;
    color: string;
}

const slides: Slide[] = [
    {
        title: "Türkiye Yüzyılı Maarif Modeli",
        subtitle: "Ders Tekrarı ve Kritik Özet (2026 EKYS)",
        content: [
            "Milli ve manevi değerleri çağın yetkinlikleriyle birleştiren yeni eğitim modeli.",
            "Nihai Hedef: 'Yetkin ve Erdemli İnsan' yetiştirmek.",
            "Motto: 'Köklerden Geleceğe' (Geçmişin birikimi, geleceğin vizyonu)."
        ],
        icon: <BookOpen className="w-12 h-12" />,
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "Modelin Kalbi: Erdem - Değer - Eylem",
        subtitle: "Bilgiden Karaktere Yolculuk",
        content: [
            "ERDEM: İnsanın ulaşabileceği en üstün ahlaki durumdur.",
            "DEĞER: Erdeme ulaşmak için kullanılan temel inanç ve araçlardır.",
            "EYLEM: Değerin hayata geçirilmiş, davranışa dönüşmüş halidir.",
            "Sınav İpucu: Model, değerlerin sadece bilinmesini değil, eyleme dönüşmesini şart koşar."
        ],
        icon: <Target className="w-12 h-12" />,
        color: "from-purple-600 to-pink-600"
    },
    {
        title: "Ana Çatı Kavramları (Değerler)",
        subtitle: "Huzur - Sevgi - Adalet",
        content: [
            "HUZUR (Benlik): Sabır, Öz Denetim, Güven, Tevazu.",
            "SEVGI (Öteki/Aile): Dostluk, Merhamet, Vatanseverlik, Saygı.",
            "ADALET (Toplum): Dürüstlük, Sorumluluk, Özgürlük, Hakkaniyet.",
            "Bu üç çatı, bireyin kendisiyle, çevresiyle ve toplumla uyumunu simgeler."
        ],
        icon: <ShieldCheck className="w-12 h-12" />,
        color: "from-emerald-600 to-teal-600"
    },
    {
        title: "Beceriler Çerçevesi",
        subtitle: "3 Temel Beceri Grubu",
        content: [
            "1. Kavramsal Beceriler: Fark etme -> Odaklanma -> Sorgulama -> Analiz (Sıralama kritiktir).",
            "2. Sosyal-Duygusal Beceriler: Öz farkındalık, iletişim, azim ve esneklik.",
            "3. Alan Becerileri: Her dersin kendi doğasına özgü yetkinlikler (Tarihsel empati vb.)."
        ],
        icon: <Zap className="w-12 h-12" />,
        color: "from-orange-500 to-red-600"
    },
    {
        title: "9 Temel Okuryazarlık Türü",
        subtitle: "Sistemleri Okuyabilen Nesiller",
        content: [
            "Bilgi, Dijital, Finansal, Görsel okuryazarlık.",
            "Kültür, Vatandaşlık, Veri okuryazarlığı.",
            "Sürdürülebilirlik ve Sanat okuryazarlığı.",
            "Hedef: Öğrencinin hayatın her alanındaki veriyi anlamlandırması."
        ],
        icon: <Layout className="w-12 h-12" />,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Programda Farklılaştırma",
        subtitle: "Zenginleştirme vs Destekleme",
        content: [
            "Zenginleştirme (Derinleştirme): Hızlı öğrenenler için içeriği değiştirmeden derinleştirme.",
            "Destekleme (Tamamlayıcı): Öğrenme eksiği olanlar için ek süre ve materyal sunma.",
            "Kapsayıcılık: Her öğrencinin kendi hızında ve potansiyelinde ilerlemesi."
        ],
        icon: <RefreshCw className="w-12 h-12" />,
        color: "from-amber-500 to-orange-600"
    }
];

import { RefreshCw } from 'lucide-react';

export default function SlideViewer() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-[#050510] text-white flex flex-col items-center justify-center p-4">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Header / Nav */}
            <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 backdrop-blur-md bg-black/20">
                <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Home className="w-5 h-5" />
                    <span>Dashboard</span>
                </Link>
                <div className="text-sm font-medium text-gray-400">
                    Slayt {current + 1} / {slides.length}
                </div>
                <div className="w-24" /> {/* Spacer */}
            </div>

            {/* Slide Container */}
            <div className="relative w-full max-w-5xl aspect-video bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 flex flex-col p-12 lg:p-20"
                    >
                        {/* Slide Top Section */}
                        <div className="flex items-start gap-8 mb-8">
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${slides[current].color} shadow-lg shadow-black/20`}>
                                {slides[current].icon}
                            </div>
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    {slides[current].title}
                                </h1>
                                <p className="text-xl text-blue-400 font-medium">
                                    {slides[current].subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 space-y-6">
                            {slides[current].content.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className={`w-2 h-2 rounded-full mt-3 bg-gradient-to-r ${slides[current].color}`} />
                                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons inside Slide */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all group"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
                    </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all group"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
                    </button>
                </div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full max-w-5xl mt-8">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full bg-gradient-to-r ${slides[current].color}`}
                        initial={false}
                        animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
                    />
                </div>

                {/* Thumbnails / Indicators */}
                <div className="flex justify-center gap-3 mt-6">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${current === idx
                                    ? `scale-125 bg-white`
                                    : 'bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Instruction Footer */}
            <div className="mt-12 text-gray-500 text-sm flex gap-6">
                <span className="flex items-center gap-1"><kbd className="px-2 py-1 bg-white/5 rounded">←</kbd> Önceki</span>
                <span className="flex items-center gap-1"><kbd className="px-2 py-1 bg-white/5 rounded">→</kbd> Sonraki</span>
                <span className="flex items-center gap-1">Boşluk tuşu ile ilerle</span>
            </div>
        </div>
    );
}

