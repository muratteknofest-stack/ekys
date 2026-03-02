'use client';

import { useState, useEffect } from 'react';
import { Target, Trophy, ChevronRight, AlertTriangle, BookOpen, Brain, LogOut, ArrowRight, ShieldAlert, Gamepad2, Sparkles } from 'lucide-react';
import CountdownTimer from '@/components/dashboard/countdown-timer';
import { useUserStore, CategoryStats } from '@/store/userStore';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const { name, isLoggedIn, stats, login, logout } = useUserStore();
  const [inputName, setInputName] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputName.trim().length > 2) {
      login(inputName.trim());
    }
  };

  if (!mounted) return null;

  // --- LOGIN EKRANI ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen theme-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full max-w-md glass-dark p-10 rounded-3xl shadow-2xl"
        >
          <div className="text-center mb-10">
            <div className="bg-primary/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/30">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-black mb-2 tracking-tight text-gradient">MEB EKYS 2026</h1>
            <p className="text-[var(--muted)]">Öğrenci Paneline Giriş Yap</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--muted)] mb-2">Adınız Soyadınız</label>
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Örn: Ahmet Yılmaz"
                className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--fg)] focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder-[var(--muted)]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold py-4 rounded-xl transition-all active:scale-95 flex justify-center items-center gap-2 group shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Kariyerine Başla
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // --- İSTATİSTİK ANALİZ ---
  let totalSolved = 0;
  let totalCorrect = 0;
  const warnings: { category: string; rate: number; message: string }[] = [];

  Object.entries(stats).forEach(([catName, data]) => {
    totalSolved += data.totalQuestions;
    totalCorrect += data.correctAnswers;

    if (data.totalQuestions >= 10) {
      const rate = (data.correctAnswers / data.totalQuestions) * 100;
      if (rate < 50) {
        warnings.push({
          category: catName,
          rate,
          message: `${catName} konularında başarı oranınız %${Math.round(rate)}. Sınavda kritik olan bu bölümü mutlaka tekrar etmelisiniz!`
        });
      }
    }
  });

  const generalSuccessRate = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;

  // --- DASHBOARD ---
  return (
    <div className="min-h-screen theme-bg selection:bg-primary/30 pb-24">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tight">
              Hoş Geldin, <span className="text-gradient">{name}</span> 👋
            </h1>
            <p className="text-[var(--muted)] text-base sm:text-lg">
              Performans analiziniz ve çalışma önerileriniz hazır.
            </p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-[var(--muted)] hover:text-red-400 transition-colors glass-dark py-2 px-4 rounded-lg self-start md:self-auto"
          >
            <LogOut className="w-4 h-4" /> Çıkış Yap
          </button>
        </header>

        {/* Aksiyon Kartları */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <CountdownTimer />
          </div>

          <Link href="/maarif" className="group sm:col-span-1">
            <div className="glass-dark p-6 sm:p-8 rounded-[2rem] h-full border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 overflow-hidden relative flex flex-col justify-center bg-gradient-to-br from-purple-500/10 to-transparent">
              <div className="absolute top-2 right-2 flex">
                <span className="bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase animate-pulse">YENİ</span>
              </div>
              <div className="absolute top-0 right-0 p-6 sm:p-8 text-purple-500/20 group-hover:text-purple-500 transition-colors">
                <Sparkles size={48} className="sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Maarif Modeli</h3>
              <p className="text-[var(--muted)] text-sm sm:text-lg mb-4 sm:mb-6">
                Modeli en baştan adım adım kavra! Kartlar, testler ve sunumlar.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-purple-400 font-bold group-hover:translate-x-2 transition-transform bg-purple-500/10 py-2 sm:py-3 px-4 sm:px-6 rounded-full w-max border border-purple-500/20 text-sm sm:text-base">
                Öğrenmeye Başla <ArrowRight size={18} />
              </div>
            </div>
          </Link>

          <Link href="/ogren" className="group sm:col-span-1">
            <div className="glass-dark p-6 sm:p-8 rounded-[2rem] h-full border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden relative flex flex-col justify-center bg-gradient-to-br from-emerald-500/10 to-transparent">
              <div className="absolute top-0 right-0 p-6 sm:p-8 text-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                <BookOpen size={48} className="sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Eğlenceli Öğrenme</h3>
              <p className="text-[var(--muted)] text-sm sm:text-lg mb-4 sm:mb-6">
                EKYS konularını 1400+ bilgi kartı ile sıkılmadan öğren.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-emerald-500 font-bold group-hover:translate-x-2 transition-transform bg-emerald-500/10 py-2 sm:py-3 px-4 sm:px-6 rounded-full w-max border border-emerald-500/20 text-sm sm:text-base">
                Öğrenmeye Başla <ArrowRight size={18} />
              </div>
            </div>
          </Link>

          <Link href="/antrenman" className="group sm:col-span-1">
            <div className="glass-dark p-6 sm:p-8 rounded-[2rem] h-full border border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden relative flex flex-col justify-center bg-gradient-to-br from-primary/10 to-transparent">
              <div className="absolute top-0 right-0 p-6 sm:p-8 text-primary/20 group-hover:text-primary transition-colors">
                <Target size={48} className="sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Antrenmana Başla</h3>
              <p className="text-[var(--muted)] text-sm sm:text-lg mb-4 sm:mb-6">
                5 farklı kategoriden oluşan +500 soruluk havuza hemen dal.
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform bg-primary/10 py-2 sm:py-3 px-4 sm:px-6 rounded-full w-max border border-primary/20 text-sm sm:text-base">
                Teste Gir <ChevronRight size={18} />
              </div>
            </div>
          </Link>

          <Link href="/oyun" className="group sm:col-span-1">
            <div className="glass-dark p-6 sm:p-8 rounded-[2rem] h-full border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 overflow-hidden relative flex flex-col justify-center bg-gradient-to-br from-amber-500/10 to-transparent">
              <div className="absolute top-0 right-0 p-6 sm:p-8 text-amber-500/20 group-hover:text-amber-500 transition-colors">
                <Gamepad2 size={48} className="sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Kim 500 Milyar İster?</h3>
              <p className="text-[var(--muted)] text-sm sm:text-lg mb-4 sm:mb-6">
                Bilgi yarışmasıyla eğlenerek öğren, ödül merdivenini tırman!
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-amber-500 font-bold group-hover:translate-x-2 transition-transform bg-amber-500/10 py-2 sm:py-3 px-4 sm:px-6 rounded-full w-max border border-amber-500/20 text-sm sm:text-base">
                Oyna <Gamepad2 size={18} />
              </div>
            </div>
          </Link>
        </section>

        {/* DENEME SINAVLARI */}
        <section className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <BookOpen className="text-secondary" /> Tam Kapsamlı Deneme Sınavları
            </h2>
            <span className="text-[var(--muted)] text-xs sm:text-sm hidden sm:block">Gerçek Sınav Formatı (24-16-16-12-12 Dağılım • 80 Soru)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {Array.from({ length: 10 }).map((_, idx) => (
              <Link href={`/quiz?category=deneme-${idx + 1}&questionCount=80`} key={idx}>
                <div className="glass-dark border border-[var(--border)] p-4 sm:p-6 rounded-2xl hover:border-secondary/50 hover:bg-secondary/5 transition-all text-center group cursor-pointer h-full flex flex-col justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Brain className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-secondary transition-colors">Deneme {idx + 1}</h3>
                  <p className="text-xs text-[var(--muted)]">80 Soru • 150 Dk</p>
                </div>
              </Link>
            ))}
            <Link href={`/quiz?category=ekstra-deneme-1&questionCount=80`}>
              <div className="glass-dark border border-primary/30 p-4 sm:p-6 rounded-2xl hover:border-primary/60 hover:bg-primary/5 transition-all text-center group cursor-pointer h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-2 right-2 flex">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">YENİ</span>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">Ekstra Deneme 1</h3>
                <p className="text-xs text-[var(--muted)]">Cevaplı • 80 Soru</p>
              </div>
            </Link>
            <Link href={`/quiz?category=ekstra-deneme-2&questionCount=80`}>
              <div className="glass-dark border border-secondary/30 p-4 sm:p-6 rounded-2xl hover:border-secondary/60 hover:bg-secondary/5 transition-all text-center group cursor-pointer h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-2 right-2 flex">
                  <span className="bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">YENİ</span>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-secondary transition-colors">Ekstra Deneme 2</h3>
                <p className="text-xs text-[var(--muted)]">Cevaplı • 80 Soru</p>
              </div>
            </Link>
            <Link href={`/quiz?category=maarif-deneme&questionCount=12`}>
              <div className="glass-dark border border-purple-500/30 p-4 sm:p-6 rounded-2xl hover:border-purple-500/60 hover:bg-purple-500/5 transition-all text-center group cursor-pointer h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-2 right-2 flex">
                  <span className="bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">ÖZEL</span>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Brain className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-purple-500 transition-colors">Maarif Modeli Özel</h3>
                <p className="text-xs text-[var(--muted)]">12 Soru • Kavramsal</p>
              </div>
            </Link>
          </div>
        </section>

        {/* UYARILAR */}
        {warnings.length > 0 && (
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldAlert className="text-red-500" /> Analiz ve Uyarılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warnings.map((warn, i) => (
                <div key={i} className="glass-dark border border-red-500/30 bg-red-500/5 p-4 sm:p-6 rounded-2xl flex items-start gap-4 flex-col sm:flex-row">
                  <div className="bg-red-500/20 p-3 rounded-full shrink-0">
                    <AlertTriangle className="text-red-500 w-6 h-6" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-red-400 font-bold mb-1">Dikkat: {warn.category} Zayıf</h4>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">{warn.message}</p>
                    <div className="mt-4 bg-[var(--border)] rounded-full h-2 w-full overflow-hidden">
                      <div className="bg-red-500 h-full" style={{ width: `${warn.rate}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Kategori Başarı */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-2">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
              <Trophy className="text-secondary" /> Kategori Başarı Durumunuz
            </h2>
            <div className="text-sm px-4 py-2 rounded-full glass-dark font-bold">
              Genel Ortalama: <span className={generalSuccessRate > 60 ? 'text-secondary' : 'text-primary'}>%{generalSuccessRate}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
            {Object.entries(stats).map(([cat, info]) => {
              const bgPercent = info.totalQuestions > 0 ? Math.round((info.correctAnswers / info.totalQuestions) * 100) : 0;
              const hasData = info.totalQuestions > 0;
              const barColor = !hasData ? 'bg-[var(--muted)]' : bgPercent >= 70 ? 'bg-secondary' : bgPercent >= 50 ? 'bg-yellow-500' : 'bg-red-500';

              return (
                <div key={cat} className="glass-dark p-4 sm:p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h4 className="font-bold text-xs sm:text-sm text-[var(--fg)] line-clamp-1 truncate" title={cat}>{cat}</h4>
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--muted)] shrink-0" />
                  </div>

                  <div className="flex items-end gap-1 sm:gap-2 mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-4xl font-black">{bgPercent}</span>
                    <span className="text-[var(--muted)] font-medium mb-0.5 sm:mb-1 text-sm">%</span>
                  </div>

                  <div className="h-1.5 sm:h-2 w-full bg-[var(--border)] rounded-full overflow-hidden mb-3 sm:mb-4">
                    <div className={`h-full ${barColor} transition-all duration-1000`} style={{ width: `${bgPercent}%` }} />
                  </div>

                  <div className="text-[10px] sm:text-xs text-[var(--muted)] flex justify-between glass-dark p-1.5 sm:p-2 rounded-lg">
                    <span>{info.correctAnswers} D / {info.wrongAnswers} Y</span>
                    <span>T: {info.totalQuestions}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
