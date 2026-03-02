import { MaarifModule } from '../maarif-modules';

export const mevzuatModules: MaarifModule[] = [
    {
        id: 'mev-modul-1',
        title: 'Anayasa Hukuku',
        subtitle: 'Temel haklar & devlet yapısı',
        description: '1982 Anayasası\'nın temel ilkeleri, hak ve özgürlükler ile devlet organlarını öğrenin.',
        icon: 'BookOpen',
        gradient: 'from-red-500 to-rose-600',
        cards: [
            {
                title: 'Anayasanın Temel İlkeleri',
                content: '📜 1982 Anayasası\'nın değiştirilemez maddeleri (İlk 3 Madde):\n\n🏛️ Madde 1: Türkiye Devleti bir Cumhuriyettir.\n🏛️ Madde 2: Cumhuriyetin nitelikleri → Atatürk milliyetçiliğine bağlı, demokratik, laik, sosyal hukuk devleti, insan haklarına saygılı\n🏛️ Madde 3: Devletin bütünlüğü, dili, bayrağı, başkenti\n\n📌 Bu maddeler değiştirilemez, değiştirilmesi teklif dahi edilemez!\n\n🗳️ Devletin temel amaç ve görevleri (Madde 5): Bağımsızlığı korumak, hukuku uygulamak, refah sağlamak, insan haklarının önündeki engelleri kaldırmak.',
                highlight: 'İlk 3 Madde = DEĞİŞTİRİLEMEZ (Teklif bile edilemez!)',
            },
            {
                title: 'TBMM ve Yasama',
                content: '🏛️ TBMM Bilgileri:\n• Üye tamsayısı: 600 milletvekili\n• Seçim dönemi: 5 yıl\n• Her yıl 1 Ekim\'de olağan toplanır\n• Toplantı yeter sayısı: Üye tamsayısının 1/3\'ü (200)\n• Karar yeter sayısı: Toplantıya katılanların salt çoğunluğu (en az 1/4+1 = 151)\n\n📋 TBMM\'nin görevleri:\n• Kanun koymak, değiştirmek, kaldırmak\n• Bütçe kanununu kabul etmek\n• Savaş ilanına karar vermek\n• Milletlerarası antlaşmaları onaylamak\n• Genel ve özel af ilanı (3/5 çoğunluk)\n\n📌 Kanun teklifi yetkisi: Milletvekillerine aittir',
                highlight: 'TBMM = 600 üye | 5 yıl | 1 Ekim',
            },
            {
                title: 'Cumhurbaşkanı ve Yürütme',
                content: '👤 Cumhurbaşkanı:\n• Doğrudan halk tarafından seçilir\n• Görev süresi: 5 yıl (en fazla 2 dönem)\n• Devlet başkanı + Hükümet başkanı (Başkanlık sistemi)\n\n📋 Yetkileri:\n• Kanunları yayımlar veya geri gönderir (15 gün)\n• Kararname çıkarır (temel haklar hariç)\n• Üst düzey görevlileri atar\n• Genelkurmay Başkanını atar\n• YÖK üyelerini seçer\n• Anayasa Mahkemesi\'ne üye seçer\n\n⚖️ Olağanüstü Hal:\n• Cumhurbaşkanı ilan eder (en fazla 6 ay)\n• TBMM onayı gerekir\n• OHAL kararnameleri çıkarabilir',
                highlight: 'CB = 5 yıl, 2 dönem, Halk seçer',
            },
            {
                title: 'Yargı Organları',
                content: '⚖️ Yüksek Yargı Organları:\n\n1️⃣ Anayasa Mahkemesi: Kanunların anayasaya uygunluğunu denetler\n• 15 üye, 12 yıl görev süresi\n• Cumhurbaşkanı ve yardımcılarını yargılar (Yüce Divan)\n\n2️⃣ Yargıtay: Adli yargının temyiz mercii\n3️⃣ Danıştay: İdari yargının temyiz mercii + Hükümete danışmanlık\n4️⃣ Sayıştay: Kamu harcamalarını denetler (TBMM adına)\n5️⃣ Uyuşmazlık Mahkemesi: Adli-İdari yargı arasındaki görev uyuşmazlıkları\n\n🗳️ Yüksek Seçim Kurulu (YSK):\n• 7 asıl, 4 yedek üye\n• Seçimlerin yönetimi ve denetimi\n• Kararları kesindir, itiraz edilemez',
                highlight: 'AYM=Anayasa denetimi | Sayıştay=Harcama denetimi',
            },
        ],
        quiz: [
            { question: 'Anayasanın ilk 3 maddesi için hangisi doğrudur?', options: ['Nitelikli çoğunlukla değiştirilebilir', 'Referandumla değiştirilebilir', 'Değiştirilmesi teklif dahi edilemez', 'Sadece CB değiştirebilir'], correctAnswer: 2 },
            { question: 'TBMM her yıl hangi tarihte olağan olarak toplanır?', options: ['1 Eylül', '1 Ekim', '1 Kasım', '23 Nisan'], correctAnswer: 1 },
            { question: 'TBMM üye tamsayısı kaçtır?', options: ['450', '550', '600', '650'], correctAnswer: 2 },
            { question: 'Kanunların anayasaya uygunluğunu denetleyen mahkeme hangisidir?', options: ['Yargıtay', 'Danıştay', 'Anayasa Mahkemesi', 'Sayıştay'], correctAnswer: 2 },
            { question: 'Cumhurbaşkanı en fazla kaç dönem seçilebilir?', options: ['1', '2', '3', 'Sınırsız'], correctAnswer: 1 },
            { question: 'Kamu harcamalarını TBMM adına denetleyen kurum hangisidir?', options: ['Danıştay', 'Sayıştay', 'Anayasa Mahkemesi', 'Yargıtay'], correctAnswer: 1 },
            { question: 'YSK kaç asıl üyeden oluşur?', options: ['5', '7', '9', '11'], correctAnswer: 1 },
            { question: 'Cumhurbaşkanı kanunları kaç gün içinde yayımlar veya geri gönderir?', options: ['7', '10', '15', '30'], correctAnswer: 2 },
        ],
    },
    {
        id: 'mev-modul-2',
        title: '657 Sayılı DMK',
        subtitle: 'Devlet memurları kanunu',
        description: 'Devlet memurlarının hakları, yükümlülükleri ve disiplin hükümlerini kavrayın.',
        icon: 'GraduationCap',
        gradient: 'from-orange-500 to-amber-600',
        cards: [
            {
                title: 'Temel İlkeler ve Memur Türleri',
                content: '📋 657 DMK Temel İlkeleri:\n• Sınıflandırma: Memurluk bir sınıfa ayrılır (10 hizmet sınıfı)\n• Kariyer: Yükselme ve ilerleme imkanı\n• Liyakat: Göreve en uygun kişinin seçilmesi\n\n👨\u200D💼 Memur Türleri:\n1️⃣ Kadrolu Memurlar: Asıl memurlar\n2️⃣ Sözleşmeli Personel: Belli süreyle\n3️⃣ Geçici Personel: Mevsimlik, geçici işler\n4️⃣ İşçiler: İş Kanunu\'na tabi\n\n📌 10 Hizmet Sınıfı:\nGIH, TH, SH, EÖH, DH, AH, ETH, MİT, YH, JH\n\n📌 EÖH (Eğitim ve Öğretim Hizmetleri): Öğretmenler bu sınıftadır!',
                highlight: 'Sınıflandırma + Kariyer + Liyakat = 3 Temel İlke',
            },
            {
                title: 'İzin Hakları',
                content: '🏖️ Yıllık İzin:\n• 1-10 yıl hizmet: 20 gün\n• 10+ yıl hizmet: 30 gün\n\n🤒 Sağlık İzni:\n• Hastalık raporu ile (süre hastalığa göre değişir)\n\n👶 Analık İzni (Doğum):\n• Tekil: Toplam 16 hafta (8 hafta öncesi + 8 hafta sonrası)\n• Çoğul: 18 hafta\n• Doğuma 3 hafta kala çalışabilir (kalan süre sonraya eklenir)\n\n👨 Babalık İzni: 10 gün\n\n😢 Ölüm İzni: Eş, çocuk, anne-baba vefatında 7 gün\n💍 Evlenme İzni: 7 gün\n\n📌 Mazeret izinleri ücretlidir!',
                highlight: 'Analık=16 hafta | Babalık=10 gün | Evlenme/Ölüm=7 gün',
            },
            {
                title: 'Disiplin Cezaları',
                content: '⚠️ Disiplin Cezaları (Hafiften ağıra):\n\n1️⃣ UYARMA: Dikkatli olması gerektiği yazıyla bildirilir\n2️⃣ KINAMA: Kusurlu olduğunun yazıyla bildirilmesi\n3️⃣ AYLIKTAN KESME: Brüt aylığın 1/30 - 1/8\'i kesilir\n4️⃣ KADEME İLERLEMESİNİN DURDURULMASI: 1-3 yıl ilerlemez\n5️⃣ DEVLET MEMURLUĞUNDAN ÇIKARMA: Bir daha atanamamak üzere\n\n📋 İtiraz süreleri:\n• Uyarma ve kınama: 7 gün içinde disiplin kuruluna\n• Diğerleri: İdari yargıya\n• Devlet memurluğundan çıkarma: Yüksek disiplin kurulu karar verir\n\n📌 Kademe ilerlemesi durdurma → Öğretmenlik yapamayabilir!',
                highlight: 'Uyarma/Kınama itiraz=7 gün | Çıkarma=Yüksek Disiplin',
            },
            {
                title: 'Ödev ve Sorumluluklar',
                content: '📌 Devlet Memurlarının Ödevleri:\n\n✅ Sadakat: Anayasa ve kanunlara bağlılık\n✅ Tarafsızlık: Siyasi görüş ayrımı gözetemez\n✅ Devlete zarar verecek eylemde bulunamaz\n✅ Amir\'e itaat: Emirleri yerine getirir\n\n⚠️ Amir emri Anayasa/kanuna aykırıysa:\n1. Emri yerine getirmez\n2. Aykırılığı amire bildirir\n3. Amir yazılı olarak ısrar ederse → yapar AMA sorumluluk amire aittir\n4. Suç teşkil eden emir → hiçbir şekilde yerine getirmez!\n\n🚫 Yasaklar:\n• Toplu eylem ve hareketler yasak\n• Ticaret yapamaz (istisnalar hariç)\n• Hediye kabul edemez\n• Siyasi partiye üye olamaz',
                highlight: 'Suç olan emir → KESİNLİKLE uygulanmaz!',
            },
        ],
        quiz: [
            { question: '657 DMK\'nın temel ilkeleri nelerdir?', options: ['Eşitlik, Adalet, Liyakat', 'Sınıflandırma, Kariyer, Liyakat', 'Verimlilik, Kariyer, Tarafsızlık', 'Liyakat, Tarafsızlık, Eşitlik'], correctAnswer: 1 },
            { question: 'Uyarma ve kınama cezalarına itiraz süresi kaç gündür?', options: ['3', '7', '10', '15'], correctAnswer: 1 },
            { question: 'Doğum öncesi ve sonrası toplam analık izni (tekil) ne kadardır?', options: ['12 Hafta', '16 Hafta', '24 Hafta', '32 Hafta'], correctAnswer: 1 },
            { question: 'Erkek memura verilen babalık izni kaç gündür?', options: ['3', '5', '10', '15'], correctAnswer: 2 },
            { question: '1-10 yıl hizmet süresine sahip memur kaç gün yıllık izin alır?', options: ['15', '20', '25', '30'], correctAnswer: 1 },
            { question: 'Amir\'in yazılı ısrarıyla uygulanan kanuna aykırı emrin sorumluluğu kime aittir?', options: ['Memura', 'Amire', 'İkisine de', 'Hiç kimseye'], correctAnswer: 1 },
            { question: 'Disiplin cezalarından "kademe ilerlemesinin durdurulması" kaçıncı sıradadır?', options: ['2.', '3.', '4.', '5.'], correctAnswer: 2 },
            { question: 'Devlet memurluğundan çıkarma cezasını kim verir?', options: ['Amir', 'Disiplin kurulu', 'Yüksek disiplin kurulu', 'TBMM'], correctAnswer: 2 },
        ],
    },
    {
        id: 'mev-modul-3',
        title: 'Eğitim Mevzuatı',
        subtitle: 'Okul yönetimi & MEB',
        description: 'MEB teşkilat yapısı, 5580 sayılı Özel Öğretim Kurumları Kanunu ve il eğitim yönetimini kavrayın.',
        icon: 'Compass',
        gradient: 'from-teal-500 to-cyan-600',
        cards: [
            {
                title: 'MEB Teşkilat Yapısı',
                content: '🏛️ MEB Merkez Teşkilatı:\n• Bakan: En üst yönetici\n• Müsteşar (Bakan Yardımcıları): Bakan\'a yardımcı\n• Talim ve Terbiye Kurulu: Müfredat ve ders programları\n• Genel Müdürlükler: Temel Eğitim, Ortaöğretim, Mesleki Eğitim vb.\n\n🏫 Taşra Teşkilatı:\n• İl Milli Eğitim Müdürlüğü (Valilik bünyesinde)\n• İlçe Milli Eğitim Müdürlüğü (Kaymakamlık bünyesinde)\n• Okullar ve Kurumlar\n\n📌 5442 Sayılı İl İdaresi Kanunu:\n• İl idare kuruluna Vali başkanlık eder\n• İlçe idare kuruluna Kaymakam başkanlık eder',
                highlight: 'Talim Terbiye = Müfredat | Vali = İl İdare Kurulu Başkanı',
            },
            {
                title: 'İl ve İlçe Eğitim Yönetimi',
                content: '📍 İl Milli Eğitim Müdürü:\n• Valinin eğitim danışmanıdır\n• İldeki tüm eğitim öğretim işlerini yürütür\n• Bakanlık politikalarını uygular\n\n📍 İlçe Milli Eğitim Müdürü:\n• Kaymakama bağlıdır\n• İlçedeki eğitim faaliyetlerini koordine eder\n\n📍 Okul Müdürü:\n• Okulun en üst yöneticisidir\n• Eğitim-öğretim liderliği yapar\n• Öğretmen, personel ve öğrenci yönetimi\n• Veli-okul-toplum ilişkilerini yürütür\n\n📌 Müfettişler:\n• Rehberlik ve denetim görevi yapar\n• MEB bünyesinde çalışır',
                highlight: 'Okul Müdürü = Eğitim Öğretim Lideri',
            },
            {
                title: 'Öğretmen Hakları ve Görevleri',
                content: '👨\u200D🏫 Öğretmenin Görevleri:\n• Eğitim-öğretim faaliyetlerini yürütme\n• Ders programlarına uygun ders işleme\n• Öğrenci gelişimini izleme ve değerlendirme\n• Nöbet tutma\n• Zümre toplantılarına katılma\n• İl içi/dışı görevlendirmelere katılma\n\n👨\u200D🏫 Öğretmenin Hakları:\n📌 Branşı dışında ders verilemez (zorunlu haller hariç)\n📌 Hizmet içi eğitim hakkı\n📌 Sendika üyeliği hakkı\n📌 İl içi/dışı tayin hakkı\n📌 Özür grubu tayini (eş durumu, sağlık, öğrenim)\n\n⚠️ Öğretmenlerin siyasi parti üyeliği YASAKTIR',
                highlight: 'Branş dışı ders → Zorunlu hal hariç YASAK',
            },
        ],
        quiz: [
            { question: '5442 Sayılı Kanun gereği il idare kuruluna kim başkanlık eder?', options: ['Vali Yardımcısı', 'Vali', 'İl Emniyet Müdürü', 'İl MEM Müdürü'], correctAnswer: 1 },
            { question: 'MEB\'de müfredat ve ders programlarından sorumlu birim hangisidir?', options: ['Genel Müdürlük', 'Talim ve Terbiye Kurulu', 'Hukuk Müşavirliği', 'Teftiş Kurulu'], correctAnswer: 1 },
            { question: 'İl Milli Eğitim Müdürü kime bağlıdır?', options: ['Bakanlık', 'Vali', 'Kaymakam', 'TBMM'], correctAnswer: 1 },
            { question: 'Öğretmenler hangi hallerde branş dışı ders verebilir?', options: ['Her zaman', 'İstediğinde', 'Zorunlu hallerde', 'Hiçbir zaman'], correctAnswer: 2 },
            { question: '4982 sayılı Bilgi Edinme Hakkı Kanunu\'ndaki Değerlendirme Kurulu kaç üyeden oluşur?', options: ['5', '7', '9', '11'], correctAnswer: 2 },
            { question: '4483 sayılı Kanun\'a göre ön inceleme süresi kaç gündür?', options: ['15', '30', '45', '60'], correctAnswer: 1 },
            { question: 'Okulun en üst yöneticisi kimdir?', options: ['İlçe MEM Müdürü', 'Okul Müdürü', 'Müdür Yardımcısı', 'Rehber Öğretmen'], correctAnswer: 1 },
            { question: 'Devlet memuru olan öğretmenler siyasi parti üyesi olabilir mi?', options: ['Evet', 'Hayır, yasaktır', 'Sadece yerel partilere', 'İzinle olabilir'], correctAnswer: 1 },
        ],
    },
];
