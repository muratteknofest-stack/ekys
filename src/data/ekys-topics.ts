export interface Topic {
    id: string;
    title: string;
    description?: string;
}

export interface Category {
    id: string;
    title: string;
    description: string;
    weight: number; // Soru ağırlığı yüzdesi
    color: string;
    icon: string;
    topics: Topic[];
}

export const ekysCategories: Category[] = [
    {
        id: "genel-kultur",
        title: "Genel Kültür ve Genel Yetenek",
        description: "Türkçe, Matematik, Tarih, Coğrafya, Yurttaşlık ve Güncel Gelişmeler",
        weight: 20,
        color: "from-blue-500 to-cyan-500",
        icon: "Globe",
        topics: [
            { id: "gk-turkce", title: "Türkçe (Anlam Bilgisi, Dil Bilgisi)" },
            { id: "gk-matematik", title: "Matematik (Sayılar, Problemler, Geometri)" },
            { id: "gk-tarih", title: "Tarih (İslam Öncesi, Osmanlı, İnkılap Tarihi)" },
            { id: "gk-cografya", title: "Türkiye Coğrafyası" },
            { id: "gk-yurttaslik", title: "Temel Yurttaşlık Bilgisi" },
            { id: "gk-guncel", title: "Türkiye ve Dünya ile İlgili Genel, Kültürel ve Güncel Sosyoekonomik Konular" }
        ]
    },
    {
        id: "ataturk-ilkeleri",
        title: "Atatürk İlkeleri ve İnkılap Tarihi",
        description: "Osmanlı'nın Yıkılışından Cumhuriyetin İlanına Kadarki Süreç ve İlkeler",
        weight: 10,
        color: "from-red-500 to-rose-500",
        icon: "Flag",
        topics: [
            { id: "ai-kurulus", title: "XX. Yüzyıl Başlarında Osmanlı Devleti" },
            { id: "ai-kurtulus", title: "Milli Mücadele Dönemi (Hazırlık Dönemi ve Cepheler)" },
            { id: "ai-inkilaplar", title: "Siyasi, Sosyal ve Hukuki Alanda Yapılan İnkılaplar" },
            { id: "ai-ilkeler", title: "Atatürk İlkeleri (Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık)" },
            { id: "ai-dis-politika", title: "Atatürk Dönemi Türk Dış Politikası" }
        ]
    },
    {
        id: "degerler-egitimi",
        title: "Değerler Eğitimi",
        description: "Milli, Manevi ve Evrensel Değerlerin Eğitimi",
        weight: 10,
        color: "from-amber-500 to-orange-500",
        icon: "Heart",
        topics: [
            { id: "de-kavramlar", title: "Değer Kavramı ve Değerlerin Sınıflandırılması" },
            { id: "de-milli-manevi", title: "Milli ve Manevi Değerler" },
            { id: "de-evrensel", title: "Evrensel Değerler" },
            { id: "de-yaklasimlar", title: "Değerler Eğitimi Yaklaşımları" },
            { id: "de-uygulamalar", title: "Okullarda Değerler Eğitimi Uygulamaları" },
            { id: "de-turkiye-yuzyili", title: "Türkiye Yüzyılı Maarif Modeli'nde Değerler" }
        ]
    },
    {
        id: "etik",
        title: "Eğitim ve Öğretimde Etik",
        description: "Eğitim Ortamlarında Etik Davranışlar ve İlkeler",
        weight: 10,
        color: "from-emerald-500 to-teal-500",
        icon: "Scale",
        topics: [
            { id: "etik-kavramlar", title: "Ahlak ve Etik Kavramları" },
            { id: "etik-sistemler", title: "Etik Sistemleri ve Kuramları" },
            { id: "etik-meslek", title: "Meslek Etiği ve Öğretmenlik Meslek Etiği İlkeleri" },
            { id: "etik-okul", title: "Okul Yönetiminde Etik" },
            { id: "etik-ikilemler", title: "Eğitimde Etik İkilemler ve Çözüm Yolları" }
        ]
    },
    {
        id: "egitim-bilimleri",
        title: "Eğitim Bilimleri",
        description: "Öğretim Yöntemleri, Sınıf Yönetimi, Ölçme Değerlendirme ve Rehberlik",
        weight: 30,
        color: "from-purple-500 to-indigo-500",
        icon: "Brain",
        topics: [
            { id: "eb-yonetim", title: "Eğitim Yönetimi ve Denetimi" },
            { id: "eb-ilke", title: "Öğretim İlke ve Yöntemleri" },
            { id: "eb-sinif", title: "Sınıf Yönetimi" },
            { id: "eb-olcme", title: "Ölçme ve Değerlendirme" },
            { id: "eb-rehberlik", title: "Rehberlik ve Özel Eğitim Hizmetleri" },
            { id: "eb-program", title: "Program Geliştirme" },
            { id: "eb-ogrenme", title: "Öğrenme Psikolojisi" },
            { id: "eb-gelisim", title: "Gelişim Psikolojisi" }
        ]
    },
    {
        id: "mevzuat",
        title: "Mevzuat",
        description: "Eğitim Yöneticilerini İlgilendiren Temel Kanun ve Yönetmelikler",
        weight: 20,
        color: "from-slate-500 to-zinc-500",
        icon: "Book",
        topics: [
            { id: "mev-657", title: "657 Sayılı Devlet Memurları Kanunu" },
            { id: "mev-1739", title: "1739 Sayılı Milli Eğitim Temel Kanunu" },
            { id: "mev-222", title: "222 Sayılı İlköğretim ve Eğitim Kanunu" },
            { id: "mev-1", title: "1 Sayılı Cumhurbaşkanlığı Kararnamesi (MEB Teşkilatı)" },
            { id: "mev-5018", title: "5018 Sayılı Kamu Malî Yönetimi ve Kontrol Kanunu" },
            { id: "mev-4483", title: "4483 Sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun" },
            { id: "mev-4688", title: "4688 Sayılı Kamu Görevlileri Sendikaları ve Toplu Sözleşme Kanunu" },
            { id: "mev-5442", title: "5442 Sayılı İl İdaresi Kanunu" },
            { id: "mev-yonetmelik", title: "Okul Öncesi, İlköğretim ve Ortaöğretim Kurumları Yönetmelikleri" },
            { id: "mev-sosyal", title: "MEB Eğitim Kurumları Sosyal Etkinlikler Yönetmeliği" }
        ]
    }
];
