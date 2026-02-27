'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, BookOpen, Target, ShieldCheck, Zap, Layout, RefreshCw, Scale, Flag, GraduationCap, Lightbulb, Star, Bookmark, Brain, Users, Globe, Gavel } from 'lucide-react';
import Link from 'next/link';

interface Slide {
    title: string;
    subtitle?: string;
    content: string[];
    icon: React.ReactNode;
    color: string;
    category: string;
}

interface SlideCategory {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
    gradient: string;
    slides: Slide[];
}

const slideCategories: SlideCategory[] = [
    {
        id: 'maarif',
        name: 'Türkiye Yüzyılı Maarif Modeli',
        icon: <BookOpen className="w-6 h-6" />,
        color: 'text-blue-400',
        gradient: 'from-blue-600 to-indigo-600',
        slides: [
            {
                title: "Maarif Modeli Nedir?",
                subtitle: "Temel Kavramlar ve Vizyonu",
                content: [
                    "Milli ve manevi değerleri çağın yetkinlikleriyle birleştiren yeni eğitim modeli.",
                    "Nihai Hedef: 'Yetkin ve Erdemli İnsan' yetiştirmek.",
                    "Motto: 'Köklerden Geleceğe' — Geçmişin birikimi, geleceğin vizyonu.",
                    "⭐ Sınav İpucu: Model, değerlerin sadece bilinmesini değil, eyleme dönüşmesini şart koşar."
                ],
                icon: <BookOpen className="w-12 h-12" />,
                color: "from-blue-600 to-indigo-600",
                category: "maarif"
            },
            {
                title: "Erdem - Değer - Eylem",
                subtitle: "Modelin Kalbi: Bilgiden Karaktere Yolculuk",
                content: [
                    "ERDEM: İnsanın ulaşabileceği en üstün ahlaki durumdur.",
                    "DEĞER: Erdeme ulaşmak için kullanılan temel inanç ve araçlardır.",
                    "EYLEM: Değerin hayata geçirilmiş, davranışa dönüşmüş halidir.",
                    "⭐ Bu üç kavram birbiriyle bağlantılıdır: Değer → Eylem → Erdem."
                ],
                icon: <Target className="w-12 h-12" />,
                color: "from-purple-600 to-pink-600",
                category: "maarif"
            },
            {
                title: "Değerler Çatısı",
                subtitle: "Huzur - Sevgi - Adalet",
                content: [
                    "HUZUR (Benlik): Sabır, Öz Denetim, Güven, Tevazu.",
                    "SEVGİ (Öteki/Aile): Dostluk, Merhamet, Vatanseverlik, Saygı.",
                    "ADALET (Toplum): Dürüstlük, Sorumluluk, Özgürlük, Hakkaniyet.",
                    "⭐ Bu üç çatı: bireyin kendisi, çevresi ve toplumla uyumunu simgeler."
                ],
                icon: <ShieldCheck className="w-12 h-12" />,
                color: "from-emerald-600 to-teal-600",
                category: "maarif"
            },
            {
                title: "Beceriler Çerçevesi",
                subtitle: "3 Temel Beceri Grubu",
                content: [
                    "1️⃣ Kavramsal Beceriler: Fark etme → Odaklanma → Sorgulama → Analiz.",
                    "2️⃣ Sosyal-Duygusal Beceriler: Öz farkındalık, iletişim, azim, esneklik.",
                    "3️⃣ Alan Becerileri: Her dersin kendi doğasına özgü yetkinlikler.",
                    "⭐ Kavramsal becerilerde sıralama kritiktir: Fark etme her zaman ilk adımdır."
                ],
                icon: <Zap className="w-12 h-12" />,
                color: "from-orange-500 to-red-600",
                category: "maarif"
            },
            {
                title: "9 Temel Okuryazarlık",
                subtitle: "Sistemleri Okuyabilen Nesiller",
                content: [
                    "Bilgi, Dijital, Finansal, Görsel okuryazarlık.",
                    "Kültür, Vatandaşlık, Veri okuryazarlığı.",
                    "Sürdürülebilirlik ve Sanat okuryazarlığı.",
                    "⭐ Hedef: Öğrencinin hayatın her alanındaki veriyi anlamlandırması."
                ],
                icon: <Layout className="w-12 h-12" />,
                color: "from-cyan-500 to-blue-500",
                category: "maarif"
            },
            {
                title: "Farklılaştırma Yaklaşımı",
                subtitle: "Zenginleştirme vs Destekleme",
                content: [
                    "Zenginleştirme: Hızlı öğrenenler için içeriği değiştirmeden derinleştirme.",
                    "Destekleme: Öğrenme eksiği olanlar için ek süre ve materyal.",
                    "Kapsayıcılık: Her öğrenci kendi hızında ve potansiyelinde ilerler.",
                    "⭐ Bu iki yaklaşım birbirinin zıddı değil, tamamlayıcısıdır."
                ],
                icon: <RefreshCw className="w-12 h-12" />,
                color: "from-amber-500 to-orange-600",
                category: "maarif"
            },
        ]
    },
    {
        id: 'genel-kultur',
        name: 'Genel Kültür',
        icon: <Globe className="w-6 h-6" />,
        color: 'text-indigo-400',
        gradient: 'from-indigo-500 to-blue-600',
        slides: [
            {
                title: "İslamiyet Öncesi Türk Devletleri",
                subtitle: "Devlet Yönetimi Temel Kavramları",
                content: [
                    "Devlet; aile, oba, oymak ve boyların bir araya gelmesiyle oluşurdu.",
                    "İlk Türk devlet teşkilatı Mete Han tarafından kurulmuştur.",
                    "Hükümdar unvanları: Han, Şanyü, Kağan, Hakan, İdikut.",
                    "⭐ İkili Teşkilat: Ülke Doğu-Batı olarak ikiye ayrılır. Kutsal merkez Ötüken'dir."
                ],
                icon: <Star className="w-12 h-12" />,
                color: "from-indigo-500 to-blue-600",
                category: "genel-kultur"
            },
            {
                title: "Kut Anlayışı ve Veraset",
                subtitle: "Taht Kavgalarının Kökeni",
                content: [
                    "KUT: Hükümdarlık yetkisinin Gök Tanrı tarafından verildiği inancı.",
                    "Kut kan bağıyla nesilden nesile aktarılır.",
                    "Bu gelenek taht kavgalarına ve devletlerin kısa ömürlü olmasına neden olmuştur.",
                    "⭐ 'Ülke hanedanın ortak malıdır' anlayışı en büyük zayıflık olmuştur."
                ],
                icon: <Star className="w-12 h-12" />,
                color: "from-red-500 to-pink-600",
                category: "genel-kultur"
            },
            {
                title: "Ordu Teşkilatı",
                subtitle: "Mete Han ve Onlu Sistem",
                content: [
                    "Onlu Sistem: Mete Han kurdu — 10, 100, 1000, 10.000 (Tümen).",
                    "Ordu-millet anlayışı: Herkes askerdir, ücretli asker yoktur.",
                    "Ana silah: Ok ve yay. Temel strateji: Hilal (Turan) Taktiği.",
                    "⭐ Mete Han'ın tahta çıkış tarihi = Kara Kuvvetleri Kuruluş Günü."
                ],
                icon: <Target className="w-12 h-12" />,
                color: "from-orange-500 to-red-600",
                category: "genel-kultur"
            },
            {
                title: "Göktürk Yazıtları",
                subtitle: "Türk Dilinin İlk Belgeleri",
                content: [
                    "Tonyukuk Yazıtı (720-725): İlk Türk tarihçisi, anı türünün ilk temsilcisi.",
                    "Kül Tigin Yazıtı (732): Bilge Kağan kardeşi için diktirdi. Yolluğ Tigin yazdı.",
                    "Bilge Kağan Yazıtı (735): Oğlu Tenri Kağan tarafından dikildi.",
                    "⭐ Türk adının geçtiği İLK Türkçe metinlerdir. Söylev diliyle yazılmıştır."
                ],
                icon: <BookOpen className="w-12 h-12" />,
                color: "from-teal-500 to-emerald-600",
                category: "genel-kultur"
            },
            {
                title: "Talas Savaşı (751)",
                subtitle: "Türk İslam Tarihinin Başlangıcı",
                content: [
                    "Karlukların yardımıyla Abbasiler savaşı kazandı.",
                    "Batı Türkistan'a yönelik Çin tehlikesi ortadan kalktı.",
                    "Müslümanlar: kağıt, matbaa, pusula, barut öğrendi.",
                    "⭐ Türklerin İslamiyet'e girişini hızlandıran en önemli olay."
                ],
                icon: <Flag className="w-12 h-12" />,
                color: "from-amber-500 to-orange-600",
                category: "genel-kultur"
            },
            {
                title: "İlk Türk İslam Eserleri",
                subtitle: "Edebiyat ve Bilim",
                content: [
                    "Kutadgu Bilig: Yusuf Has Hacip — İlk siyasetname.",
                    "Divan-ı Lügat-it Türk: Kaşgarlı Mahmut — İlk Türkçe sözlük (1069).",
                    "Divan-ı Hikmet: Ahmet Yesevi — İlk tasavvuf eseri.",
                    "⭐ Hepsi Karahanlılar döneminde yazılmıştır!"
                ],
                icon: <BookOpen className="w-12 h-12" />,
                color: "from-purple-500 to-violet-600",
                category: "genel-kultur"
            },
            {
                title: "Osmanlı Devlet Yönetimi",
                subtitle: "Veraset Sistemi Değişimleri",
                content: [
                    "I. Murat: 'Ülke padişah ve oğullarına aittir' anlayışını getirdi.",
                    "Fatih: Kanunname-i Ali Osman — Kardeş katline izin.",
                    "I. Ahmet: Ekber-i Erşed sistemi — En yaşlı ve akıllı olan tahta geçer.",
                    "⭐ Kafes usulü = Şehzadelerin yönetim deneyimi kazanamaması."
                ],
                icon: <Scale className="w-12 h-12" />,
                color: "from-cyan-500 to-blue-500",
                category: "genel-kultur"
            },
            {
                title: "Divan-ı Hümayun",
                subtitle: "Osmanlı Yönetim Mekanizması",
                content: [
                    "Orhan Bey kurdu → Fatih'ten itibaren başkanlık Sadrazam'a geçti.",
                    "II. Mahmut kaldırdı → Yerine Nazırlıklar (Bakanlıklar) kuruldu.",
                    "Üyeler: Sadrazam, Kazasker, Defterdar, Nişancı, Şeyhülislam.",
                    "⭐ Divan her din ve mezhepten herkese açıktı — Danışma Meclisi niteliğinde."
                ],
                icon: <Users className="w-12 h-12" />,
                color: "from-emerald-500 to-teal-500",
                category: "genel-kultur"
            },
        ]
    },
    {
        id: 'mevzuat',
        name: 'Mevzuat',
        icon: <Gavel className="w-6 h-6" />,
        color: 'text-cyan-400',
        gradient: 'from-cyan-500 to-sky-600',
        slides: [
            {
                title: "Eğitim Hukuku Temelleri",
                subtitle: "Anayasal Eğitim Hakları",
                content: [
                    "TC Anayasası Madde 42: Eğitim ve öğretim hakkı. Kimse eğitim hakkından yoksun bırakılamaz.",
                    "Zorunlu eğitim 12 yıl: 4+4+4 sistemi.",
                    "İlköğretim kız ve erkek tüm vatandaşlar için zorunlu ve parasızdır.",
                    "⭐ Devlet maddi imkânlardan yoksun başarılı öğrencilere burs verir."
                ],
                icon: <Scale className="w-12 h-12" />,
                color: "from-cyan-500 to-sky-600",
                category: "mevzuat"
            },
            {
                title: "1739 Sayılı MEB Temel Kanunu",
                subtitle: "Eğitim Sistemi İlkeleri",
                content: [
                    "Genellik ve Eşitlik: Eğitimde hiçbir ayrım yapılmaz.",
                    "Laiklik: Din eğitimi kişinin özgür iradesine bırakılmıştır.",
                    "Karma Eğitim: Kız ve erkek öğrenciler birlikte eğitim görür.",
                    "⭐ 14 temel ilke: Genellik-eşitlik, laiklik, karma eğitim, süreklilik, Atatürk ilkeleri..."
                ],
                icon: <BookOpen className="w-12 h-12" />,
                color: "from-blue-500 to-indigo-600",
                category: "mevzuat"
            },
            {
                title: "Öğretmen Hakları ve Sorumlulukları",
                subtitle: "657 Sayılı DMK Kapsamında",
                content: [
                    "Devlet memuru olarak öğretmenler 657 sayılı kanuna tabidir.",
                    "Aylık (maaş), izin, yükselme, emeklilik hakları güvence altındadır.",
                    "Öğretmenler tarafsızlık ve devlete bağlılık ilkelerine uymalıdır.",
                    "⭐ Görevden uzaklaştırma en fazla 3 ay sürer, süre sonunda durumu incelenir."
                ],
                icon: <Users className="w-12 h-12" />,
                color: "from-purple-500 to-violet-600",
                category: "mevzuat"
            },
            {
                title: "Eğitim Yöneticisi Görevleri",
                subtitle: "Okul Müdürü ve Müdür Yardımcısı",
                content: [
                    "Müdür: Okulun eğitim-öğretim, yönetim ve topluma hizmet görevlerinin tümünden sorumlu.",
                    "Eğitim liderliği yapar, öğretim programlarının uygulanmasını denetler.",
                    "Müdür yardımcısı: Müdürün olmadığı zamanlarda vekil olarak görev yapar.",
                    "⭐ EKYS bu pozisyonlar için yapılan sınavdır! Yöneticilik yeterlikleri kritiktir."
                ],
                icon: <GraduationCap className="w-12 h-12" />,
                color: "from-amber-500 to-orange-600",
                category: "mevzuat"
            },
        ]
    },
    {
        id: 'egitim-bilimleri',
        name: 'Eğitim Bilimleri',
        icon: <GraduationCap className="w-6 h-6" />,
        color: 'text-amber-400',
        gradient: 'from-amber-500 to-orange-600',
        slides: [
            {
                title: "Öğrenme Kuramları",
                subtitle: "Davranışçı, Bilişsel, Yapılandırmacı",
                content: [
                    "Davranışçı: Pavlov (Klasik), Skinner (Edimsel) — Uyaran-tepki bağı.",
                    "Bilişsel: Piaget, Bruner, Ausubel — Zihinsel süreçler ve şemalar.",
                    "Yapılandırmacı: Vygotsky — Öğrenci bilgiyi kendisi yapılandırır.",
                    "⭐ Yapılandırmacılık güncel eğitim anlayışının temelidir."
                ],
                icon: <Brain className="w-12 h-12" />,
                color: "from-amber-500 to-orange-600",
                category: "egitim-bilimleri"
            },
            {
                title: "Piaget Bilişsel Gelişim",
                subtitle: "4 Dönem ve Özellikleri",
                content: [
                    "Duyusal-Motor (0-2): Nesne sürekliliği gelişir.",
                    "İşlem Öncesi (2-7): Benmerkezcilik, animizm, korunum yokluğu.",
                    "Somut İşlemler (7-11): Mantıksal düşünme, korunum kazanılır.",
                    "⭐ Soyut İşlemler (11+): Hipotetik-tümdengelim, soyut düşünme."
                ],
                icon: <Lightbulb className="w-12 h-12" />,
                color: "from-purple-500 to-violet-600",
                category: "egitim-bilimleri"
            },
            {
                title: "Bloom Taksonomisi",
                subtitle: "Bilişsel Alan Hedef Sınıflaması",
                content: [
                    "Hatırlama → Anlama → Uygulama → Analiz → Değerlendirme → Yaratma.",
                    "Basitten karmaşığa doğru hiyerarşik bir sıralama izler.",
                    "Her üst düzey, alt düzeyleri de kapsayan tümevarımsal bir yapıdadır.",
                    "⭐ Yenilenmiş taksonomi: Bilgi boyutu (olgusal, kavramsal, işlemsel, üstbilişsel)."
                ],
                icon: <Target className="w-12 h-12" />,
                color: "from-emerald-500 to-teal-600",
                category: "egitim-bilimleri"
            },
            {
                title: "Öğretim Yöntemleri",
                subtitle: "Aktif Öğrenme Stratejileri",
                content: [
                    "Tartışma: Fikir alışverişi, eleştirel düşünme geliştirir.",
                    "Problem Çözme: Gerçek yaşam sorunlarıyla baş etme becerisi.",
                    "Proje Tabanlı: Uzun süreli, disiplinler arası çalışma.",
                    "⭐ İşbirlikli Öğrenme: Heterojen gruplar, ortak hedef, bireysel sorumluluk."
                ],
                icon: <Users className="w-12 h-12" />,
                color: "from-blue-500 to-indigo-600",
                category: "egitim-bilimleri"
            },
        ]
    },
    {
        id: 'inkilap',
        name: 'İnkılap Tarihi',
        icon: <Flag className="w-6 h-6" />,
        color: 'text-red-400',
        gradient: 'from-red-500 to-rose-600',
        slides: [
            {
                title: "Kurtuluş Savaşı Hazırlık Dönemi",
                subtitle: "Kongreler ve Genelgeler",
                content: [
                    "Amasya Genelgesi (22 Haziran 1919): 'Milletin bağımsızlığını yine milletin azmi kurtaracaktır.'",
                    "Erzurum Kongresi: Bölgesel → Ulusal karakter kazandı. Misak-ı Milli'nin temeli atıldı.",
                    "Sivas Kongresi: Tüm cemiyetler birleştirildi. Milli birlik sağlandı.",
                    "⭐ Bu dönem TBMM'nin açılışına kadar sürer (23 Nisan 1920)."
                ],
                icon: <Flag className="w-12 h-12" />,
                color: "from-red-500 to-rose-600",
                category: "inkilap"
            },
            {
                title: "Atatürk İlkeleri",
                subtitle: "6 Temel İlke ve Bütünleyicileri",
                content: [
                    "Cumhuriyetçilik, Milliyetçilik, Halkçılık — Egemenlik milletindir.",
                    "Devletçilik, Laiklik, İnkılapçılık — Modernleşme temeli.",
                    "Bütünleyici İlkeler: Ulusal egemenlik, bağımsızlık, milli birlik, barış, akılcılık.",
                    "⭐ Laiklik: Din ve devlet işlerinin birbirinden ayrılması."
                ],
                icon: <Star className="w-12 h-12" />,
                color: "from-amber-500 to-orange-600",
                category: "inkilap"
            },
            {
                title: "İnkılap Hareketleri",
                subtitle: "Siyasi, Toplumsal, Hukuki, Eğitim",
                content: [
                    "Saltanatın Kaldırılması (1922), Cumhuriyetin İlanı (1923), Halifeliğin Kaldırılması (1924).",
                    "Tevhid-i Tedrisat (3 Mart 1924): Tüm eğitim kurumları MEB'e bağlandı.",
                    "Harf İnkılabı (1928): Latin alfabesine geçildi.",
                    "⭐ Medeni Kanun (1926): İsviçre'den alındı — Kadın hakları güvence altına alındı."
                ],
                icon: <Bookmark className="w-12 h-12" />,
                color: "from-blue-500 to-indigo-600",
                category: "inkilap"
            },
        ]
    },
];

export default function SlideViewer() {
    const [selectedCategory, setSelectedCategory] = useState<SlideCategory | null>(null);
    const [current, setCurrent] = useState(0);

    const slides = selectedCategory?.slides || [];

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            }
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape' && selectedCategory) {
                setSelectedCategory(null);
                setCurrent(0);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [slides.length, selectedCategory]);

    // Category selection screen
    if (!selectedCategory) {
        return (
            <div className="min-h-screen theme-bg flex flex-col items-center justify-center p-4 sm:p-8 pb-24 relative overflow-hidden">
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 w-full max-w-5xl">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors glass-dark py-2 px-4 rounded-xl text-sm">
                            <Home className="w-4 h-4" /> Dashboard
                        </Link>
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-3xl sm:text-5xl font-black mb-4">
                            📚 Ders <span className="text-gradient">Sunuları</span>
                        </h1>
                        <p className="text-[var(--muted)] text-sm sm:text-lg">Tüm EKYS konularını profesyonel slaytlarla öğrenin.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {slideCategories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => { setSelectedCategory(cat); setCurrent(0); }}
                                className="glass-dark p-6 sm:p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all text-left group relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.gradient} opacity-10 rounded-full blur-[40px] group-hover:opacity-20 transition-opacity`} />
                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${cat.gradient} text-white text-xs font-bold mb-4`}>
                                    {cat.icon}
                                    <span>{cat.slides.length} Slayt</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">{cat.name}</h3>
                                <p className="text-[var(--muted)] text-sm">Konu özetleri ve kritik noktalar</p>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Slide viewer
    const slide = slides[current];

    return (
        <div className="min-h-screen theme-bg flex flex-col items-center justify-center p-4 pb-24 sm:pb-8 relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Header / Nav */}
            <div className="fixed top-0 left-0 right-0 p-3 sm:p-6 flex justify-between items-center z-50 backdrop-blur-md bg-[var(--card)]/80 border-b border-[var(--border)]">
                <button
                    onClick={() => { setSelectedCategory(null); setCurrent(0); }}
                    className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--fg)] transition-colors text-sm"
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Kategoriler</span>
                </button>
                <div className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${selectedCategory.gradient} text-white`}>
                    {selectedCategory.name} — {current + 1} / {slides.length}
                </div>
                <Link href="/" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
                    <Home className="w-5 h-5" />
                </Link>
            </div>

            {/* Slide Container */}
            <div className="relative w-full max-w-5xl mt-16 sm:mt-20">
                <div className="glass-dark backdrop-blur-xl border border-[var(--border)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-auto sm:aspect-video">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col p-6 sm:p-12 lg:p-16 min-h-[300px] sm:min-h-0 h-full"
                        >
                            {/* Top gradient bar */}
                            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${slide.color}`} />

                            {/* Slide Top Section */}
                            <div className="flex items-start gap-4 sm:gap-8 mb-6 sm:mb-8">
                                <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${slide.color} shadow-lg shadow-black/20 shrink-0`}>
                                    <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-white">
                                        {slide.icon}
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-[var(--fg)]">
                                        {slide.title}
                                    </h1>
                                    <p className={`text-sm sm:text-lg font-medium bg-gradient-to-r ${slide.color} text-transparent bg-clip-text`}>
                                        {slide.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 space-y-3 sm:space-y-5">
                                {slide.content.map((item, idx) => {
                                    const isHighlight = item.startsWith('⭐');
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + idx * 0.1 }}
                                            className={`flex items-start gap-3 sm:gap-4 ${isHighlight ? `glass-dark p-3 sm:p-4 rounded-xl border border-amber-500/20` : ''}`}
                                        >
                                            {!isHighlight && (
                                                <div className={`w-2 h-2 rounded-full mt-2.5 sm:mt-3 bg-gradient-to-r ${slide.color} shrink-0`} />
                                            )}
                                            <p className={`text-sm sm:text-lg lg:text-xl leading-relaxed font-medium ${isHighlight ? 'text-amber-300' : 'text-[var(--fg)]'}`}>
                                                {item}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons inside Slide */}
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-4">
                        <button
                            onClick={prevSlide}
                            className="p-2 sm:p-3 rounded-full glass-dark border border-[var(--border)] hover:bg-[var(--accent)]/10 transition-all group"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--muted)] group-hover:text-[var(--fg)]" />
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4">
                        <button
                            onClick={nextSlide}
                            className="p-2 sm:p-3 rounded-full glass-dark border border-[var(--border)] hover:bg-[var(--accent)]/10 transition-all group"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--muted)] group-hover:text-[var(--fg)]" />
                        </button>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full mt-4 sm:mt-6">
                    <div className="h-1.5 w-full bg-[var(--border)] rounded-full overflow-hidden">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${slide.color}`}
                            initial={false}
                            animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
                        />
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`rounded-full transition-all ${current === idx
                                    ? `w-6 h-2.5 bg-gradient-to-r ${slide.color}`
                                    : 'w-2.5 h-2.5 bg-[var(--border)] hover:bg-[var(--muted)]'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Keyboard Instruction */}
                <div className="hidden sm:flex justify-center gap-6 mt-6 text-[var(--muted)] text-xs">
                    <span className="flex items-center gap-1"><kbd className="px-2 py-1 glass-dark rounded text-[10px]">←</kbd> Önceki</span>
                    <span className="flex items-center gap-1"><kbd className="px-2 py-1 glass-dark rounded text-[10px]">→</kbd> Sonraki</span>
                    <span className="flex items-center gap-1"><kbd className="px-2 py-1 glass-dark rounded text-[10px]">ESC</kbd> Kategoriler</span>
                </div>
            </div>
        </div>
    );
}
