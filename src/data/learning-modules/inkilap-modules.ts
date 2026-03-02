import { MaarifModule } from '../maarif-modules';

export const inkilapModules: MaarifModule[] = [
    {
        id: 'ink-modul-1',
        title: 'Kurtuluş Savaşı\'na Giden Yol',
        subtitle: 'Mondros\'tan kongreler\'e',
        description: 'I. Dünya Savaşı\'nın ardından işgaller, cemiyetler ve Mustafa Kemal\'in mücadele başlangıcını kavrayın.',
        icon: 'Compass',
        gradient: 'from-red-600 to-orange-600',
        cards: [
            {
                title: 'Mondros Ateşkes Antlaşması (30 Ekim 1918)',
                content: '📜 Osmanlı Devleti I. Dünya Savaşı\'nda yenilince Mondros Ateşkes Antlaşması\'nı imzaladı.\n\n⚠️ Kritik Madde (7. Madde):\n"İtilaf Devletleri güvenliklerini tehdit eden bir durum olursa, herhangi bir yeri işgal edebilir."\n→ Bu madde işgallerin hukuki dayanağı oldu!\n\n📌 Sonuçları:\n• Osmanlı ordusu terhis edildi (silahlar teslim)\n• Boğazlar İtilaf kontrolüne geçti\n• Haberleşme ve ulaşım denetim altına alındı\n• Tüm Osmanlı toprakları işgale açıldı\n\n🏴 İlk işgal edilen yer: İskenderun (İngilizler, 3 Kasım 1918)\n🏴 En önemli işgal: İzmir (Yunanlılar, 15 Mayıs 1919)',
                highlight: '7. Madde = İşgallerin yasal dayanağı | İzmir = 15 Mayıs 1919',
            },
            {
                title: 'Cemiyetler',
                content: '🇹🇷 Yararlı Cemiyetler (Milli Mücadeleyi Destekleyen):\n• Kilikyalılar Cemiyeti (Adana)\n• Trakya-Paşaeli Müdafaa-i Hukuk Cemiyeti\n• İzmir Müdafaa-i Hukuk Cemiyeti\n• Doğu Anadolu Müdafaa-i Hukuk Cemiyeti\n• Trabzon Muhafaza-i Hukuk-u Milliye Cemiyeti\n\n🚫 Zararlı Cemiyetler:\n• Wilson Prensipleri Cemiyeti (ABD mandası isteyen)\n• İngiliz Muhibleri Cemiyeti (İngiliz yanlısı)\n• Kürt Teali Cemiyeti (bağımsızlık isteyen)\n• Sulh ve Selamet-i Osmaniye Cemiyeti\n\n📌 Yararlı cemiyetler bölgeseldi → Sivas Kongresi\'nde birleştirildi',
                highlight: 'Yararlı = Bölgesel | Sivas\'ta BİRLEŞTİRİLDİ',
            },
            {
                title: 'Kongreler Dönemi',
                content: '📍 Havza Genelgesi (28 Mayıs 1919):\n• İşgallere karşı mitingler yapılması istendi\n\n📍 Amasya Genelgesi (22 Haziran 1919):\n• "Milletin istiklalini yine milletin azim ve kararı kurtaracaktır"\n• Milli egemenlik ilk kez dile getirildi\n• Sivas\'ta milli kongre toplanacağı duyuruldu\n📌 Kurtuluş Savaşı\'nın amaç, gerekçe ve yöntemi belirlendi!\n\n📍 Erzurum Kongresi (23 Temmuz - 7 Ağustos 1919):\n• Doğu illeri delegeleri → Bölgesel\n• Manda ve himaye reddedildi\n• Geçici hükümet kurulması kararlaştırıldı\n\n📍 Sivas Kongresi (4-11 Eylül 1919):\n• İlk ULUSAL kongre\n• Tüm cemiyetler birleştirildi → "Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti"',
                highlight: 'Amasya=Gerekçe | Erzurum=Bölgesel | Sivas=Ulusal',
            },
            {
                title: 'TBMM\'nin Açılışı',
                content: '🏛️ Son Osmanlı Mebusan Meclisi (12 Ocak 1920):\n• Misak-ı Milli kabul edildi (28 Ocak 1920)\n• İstanbul\'un işgali üzerine kapatıldı (16 Mart 1920)\n\n🏛️ I. TBMM\'nin Açılışı (23 Nisan 1920 - Ankara):\n• Mustafa Kemal başkan seçildi\n• "Egemenlik kayıtsız şartsız milletindir"\n\n📋 I. TBMM\'nin Özellikleri:\n• Güçler birliği ilkesi (yasama + yürütme tek elde)\n• Olağanüstü yetkili → Kurucu meclis\n• Hükümet sistemi: Meclis hükümeti\n• Milletvekilleri farklı görüşlerden (Müdafaa-i Hukuk, Tesanüd, İstiklal grubu vs.)\n\n📌 23 Nisan = Egemenlik ve Çocuk Bayramı',
                highlight: '23 Nisan 1920 = I. TBMM | Güçler Birliği İlkesi',
            },
        ],
        quiz: [
            { question: 'Mondros Ateşkes Antlaşması\'nın imza tarihi nedir?', options: ['30 Ekim 1918', '15 Mayıs 1919', '23 Nisan 1920', '29 Ekim 1923'], correctAnswer: 0 },
            { question: '"Milletin istiklalini yine milletin azim ve kararı kurtaracaktır" hangi belgede yer alır?', options: ['Havza Genelgesi', 'Amasya Genelgesi', 'Erzurum Kongresi', 'Misak-ı Milli'], correctAnswer: 1 },
            { question: 'Milli cemiyetlerin birleştirildiği kongre hangisidir?', options: ['Erzurum', 'Sivas', 'Balıkesir', 'Alaşehir'], correctAnswer: 1 },
            { question: 'I. TBMM hangi tarihte açılmıştır?', options: ['19 Mayıs 1919', '23 Nisan 1920', '29 Ekim 1923', '3 Mart 1924'], correctAnswer: 1 },
            { question: 'Misak-ı Milli hangi mecliste kabul edilmiştir?', options: ['I. TBMM', 'Son Osmanlı Mebusan Meclisi', 'II. TBMM', 'Sivas Kongresi'], correctAnswer: 1 },
            { question: 'I. TBMM\'nin en belirgin özelliği hangisidir?', options: ['Partili yaşam', 'Güçler ayrılığı', 'Güçler birliği ilkesi', 'Anayasaya bağlılık'], correctAnswer: 2 },
            { question: 'Wilson Prensipleri Cemiyeti ne istiyordu?', options: ['Bağımsızlık', 'ABD mandası', 'İngiliz himayesi', 'Monarşi'], correctAnswer: 1 },
            { question: 'İzmir\'i hangi devlet işgal etmiştir?', options: ['İngiltere', 'Fransa', 'İtalya', 'Yunanistan'], correctAnswer: 3 },
        ],
    },
    {
        id: 'ink-modul-2',
        title: 'Kurtuluş Savaşı Cepheleri',
        subtitle: 'Savaşlar ve antlaşmalar',
        description: 'Doğu, Güney ve Batı cephelerindeki savaşları ve kritik antlaşmaları öğrenin.',
        icon: 'Rocket',
        gradient: 'from-indigo-600 to-blue-700',
        cards: [
            {
                title: 'Doğu Cephesi',
                content: '⚔️ Ermenilerle Savaş:\n• Komutan: Kazım Karabekir\n• Sonuç: Türk zaferi\n\n📜 Gümrü Antlaşması (3 Aralık 1920):\n• Ermenistan ile imzalanan ilk antlaşma\n• TBMM\'nin uluslararası alanda ilk siyasi başarısı\n• Kars ve Sarıkamış Türkiye\'ye bırakıldı\n\n📜 Moskova Antlaşması (16 Mart 1921):\n• Sovyet Rusya ile imzalandı\n• Doğu sınırı büyük ölçüde kesinleşti\n• Batum Gürcistan\'a bırakıldı\n\n📜 Kars Antlaşması (13 Ekim 1921):\n• Gürcistan, Ermenistan, Azerbaycan ile\n• Doğu sınırı kesin olarak çizildi\n\n📌 Doğu Cephesi = İlk kapanan cephe',
                highlight: 'Gümrü = İlk antlaşma | Doğu = İlk kapanan cephe',
            },
            {
                title: 'Güney Cephesi ve Batı Cephesi Başlangıcı',
                content: '🏴 Güney Cephesi (Kuvâ-yi Milliye):\n• Fransa\'ya karşı halkın düzensiz direniş\n• Maraş, Urfa, Antep savunmaları\n• Gaziantep, Kahramanmaraş, Şanlıurfa unvanları bu savaşlardan\n\n📜 Fransa ile Ankara Antlaşması (20 Ekim 1921):\n• Güney cephesi kapandı\n• Hatay Fransa\'ya bırakıldı (1939\'da anavatana katıldı)\n\n⚔️ Batı Cephesi\'nin Temeli:\n• Yunan ilerleyişine karşı\n• Kuvâ-yi Milliye (düzensiz) → Düzenli orduya geçiş zorunluluğu\n• TBMM Düzenli Ordu kurma kararı aldı',
                highlight: 'Gazi, Kahraman, Şanlı unvanları = Güney Cephesi kahramanlıkları',
            },
            {
                title: 'Batı Cephesi Savaşları',
                content: '⚔️ I. İnönü Muharebesi (6-10 Ocak 1921):\n• Komutan: İsmet Paşa\n• Sonuç: Türk zaferi\n• Önemi: Londra Konferansı\'na davet, Afgan ve Sovyet antlaşmaları\n\n⚔️ II. İnönü Muharebesi (23 Mart - 1 Nisan 1921):\n• Yine İsmet Paşa liderliğinde zafer\n\n⚔️ Kütahya-Eskişehir Muharebeleri (Temmuz 1921):\n• Yunan ilerleyişi → Türk ordusu Sakarya\'nın doğusuna çekildi\n• M. Kemal Başkomutanlığı aldı (5 Ağustos 1921)\n\n⚔️ Sakarya Meydan Muharebesi (23 Ağustos - 13 Eylül 1921):\n• 22 gün 22 gece sürdü\n• M. Kemal: "Hattı müdafaa yoktur, sathı müdafaa vardır"\n• Sonuç: Kesin zafer → M. Kemal\'e "Gazi" ve "Mareşal" unvanı\n• Kars ve Ankara Antlaşmaları bu zafer sonrası',
                highlight: 'Sakarya = Gazi + Mareşal | "Sathı müdafaa" stratejisi',
            },
            {
                title: 'Büyük Taarruz ve Mudanya',
                content: '⚔️ Büyük Taarruz (26 Ağustos 1922):\n• Başkomutan M. Kemal doğrudan yönetti\n• Dumlupınar Başkomutanlık Meydan Muharebesi (30 Ağustos)\n• Yunan ordusu tamamen yenildi\n• 9 Eylül 1922: İzmir\'in kurtuluşu\n\n📌 30 Ağustos = Zafer Bayramı\n\n📜 Mudanya Ateşkes Antlaşması (11 Ekim 1922):\n• Doğu Trakya, İstanbul ve Boğazlar savaşsız alındı\n• İtilaf Devletleri Anadolu\'yu boşalttı\n• Türk temsilcisi: İsmet Paşa\n\n📌 Büyük Taarruz → Saltanatın kaldırılması (1 Kasım 1922)\n📌 Son Osmanlı padişahı Vahdettin İstanbul\'u terk etti (17 Kasım 1922)',
                highlight: '30 Ağustos = Zafer Bayramı | Mudanya = Savaşsız İstanbul',
            },
        ],
        quiz: [
            { question: 'TBMM\'nin uluslararası alandaki ilk siyasi başarısı olan antlaşma hangisidir?', options: ['Moskova', 'Gümrü', 'Kars', 'Mudanya'], correctAnswer: 1 },
            { question: 'Sakarya Meydan Muharebesi kaç gün sürmüştür?', options: ['7 gün', '15 gün', '22 gün', '30 gün'], correctAnswer: 2 },
            { question: 'İsmet Paşa hangi muharebelerin komutanıdır?', options: ['Sakarya', 'I. ve II. İnönü', 'Büyük Taarruz', 'Kütahya-Eskişehir'], correctAnswer: 1 },
            { question: 'M. Kemal\'e "Gazi" ve "Mareşal" unvanı hangi savaş sonrası verilmiştir?', options: ['I. İnönü', 'II. İnönü', 'Sakarya', 'Büyük Taarruz'], correctAnswer: 2 },
            { question: 'İzmir hangi tarihte kurtulmuştur?', options: ['30 Ağustos 1922', '9 Eylül 1922', '11 Ekim 1922', '29 Ekim 1923'], correctAnswer: 1 },
            { question: 'Güney Cephesi\'nde hangi devlete karşı savaşılmıştır?', options: ['İngiltere', 'Fransa', 'İtalya', 'Yunanistan'], correctAnswer: 1 },
            { question: 'Mudanya Ateşkesi ile savaşsız alınan yerler neresidir?', options: ['İzmir ve Ege', 'Doğu vilayetleri', 'Doğu Trakya, İstanbul ve Boğazlar', 'Güneydoğu Anadolu'], correctAnswer: 2 },
            { question: 'Atatürk döneminin son Başbakanı kimdir?', options: ['İsmet İnönü', 'Ali Fethi Okyar', 'Şükrü Saracoğlu', 'Celal Bayar'], correctAnswer: 3 },
        ],
    },
    {
        id: 'ink-modul-3',
        title: 'İnkılaplar ve Cumhuriyet',
        subtitle: 'Modernleşme ve devrimler',
        description: 'Cumhuriyetin ilanından Atatürk ilkelerine kadar tüm inkılapları öğrenin.',
        icon: 'GraduationCap',
        gradient: 'from-emerald-600 to-green-700',
        cards: [
            {
                title: 'Siyasi İnkılaplar',
                content: '🏛️ Saltanatın Kaldırılması (1 Kasım 1922)\n→ Siyasi egemenlik millete geçti\n\n🏛️ Cumhuriyetin İlanı (29 Ekim 1923)\n→ Devletin yönetim biçimi belirlendi\n→ İlk Cumhurbaşkanı: Mustafa Kemal\n→ İlk Başbakan: İsmet İnönü\n\n🏛️ Halifeliğin Kaldırılması (3 Mart 1924)\n→ Laikliğe geçişin en önemli adımı\n→ Aynı gün: Tevhid-i Tedrisat (eğitim birliği), Şer\'iye ve Evkaf Vekaleti kapatıldı\n\n👥 Çok Partili Hayat Denemeleri:\n• Terakkiperver Cumhuriyet Fırkası (1924)\n• Serbest Cumhuriyet Fırkası (1930 - Fethi Okyar)',
                highlight: '29 Ekim 1923 = Cumhuriyet | 3 Mart 1924 = Halifelik+Tedrisat',
            },
            {
                title: 'Toplumsal ve Hukuki İnkılaplar',
                content: '👔 Kılık Kıyafet (Şapka İnkılabı) - 1925:\n• İlk tanıtım: Kastamonu\n• Fes yasaklandı, şapka zorunlu\n\n📏 Ölçü ve Takvim:\n• Miladi Takvim (1926), Uluslararası saat (1926)\n• Metrik sistem (1931)\n• Hafta tatili Cuma → Pazar (1935)\n\n⚖️ Hukuk İnkılapları:\n• Medeni Kanun (1926): İsviçre\'den alınmıştır\n• Kadınlara seçme-seçilme hakkı:\n  - Belediye: 1930\n  - Muhtarlık: 1933\n  - Milletvekilliği: 1934\n\n🔤 Harf İnkılabı (1928):\n• Arap harfleri → Latin harfleri\n• M. Kemal "Başöğretmen" unvanı aldı',
                highlight: 'Medeni Kanun = İsviçre | Harf İnkılabı 1928 | Kastamonu = Şapka',
            },
            {
                title: 'Eğitim ve Ekonomi İnkılapları',
                content: '📚 Eğitim:\n• Tevhid-i Tedrisat (1924): Tüm okullar MEB\'e bağlandı\n• Millet Mektepleri (1928): Yeni harflerle okuma-yazma\n• Üniversite Reformu (1933): Darülfünun → İstanbul Üniversitesi\n• Türk Tarih Kurumu (1931) ve Türk Dil Kurumu (1932)\n\n💰 Ekonomi:\n• İzmir İktisat Kongresi (1923): "Misak-ı İktisadi"\n• 1. Beş Yıllık Kalkınma Planı (1934)\n• Devletçilik ilkesi: Özel sektörün yapamadığı işleri devlet yapar\n• KİT\'ler kuruldu (Sümerbank, Etibank vb.)\n\n📌 17 Şubat 1923: İzmir İktisat Kongresi\n📌 24 Kasım = Öğretmenler Günü (1928 - Başöğretmen unvanı)',
                highlight: 'Tevhid-i Tedrisat=Eğitim Birliği | 24 Kasım=Öğretmenler Günü',
            },
            {
                title: 'Atatürk İlkeleri',
                content: '6 Temel İlke (CHP 6 Ok = 1937 Anayasa\'ya girdi):\n\n1️⃣ CUMHURİYETÇİLİK: Halk egemenliği, demokratik yönetim\n2️⃣ MİLLİYETÇİLİK: Birleştirici, ırkçı olmayan, Atatürk milliyetçiliği\n3️⃣ HALKÇILIK: Eşitlik, sınıf ayrımı yok, halkın yararı\n4️⃣ DEVLETÇİLİK: Özel sektörün yapamadığını devlet yapar\n5️⃣ LAİKLİK: Din ve devlet işlerinin ayrılması, vicdan özgürlüğü\n6️⃣ İNKILAPÇILIK: Çağdaşlaşma, sürekli yenilenme\n\n📌 Bütünleyici İlkeler:\n• Bilimsellik, Akılcılık\n• Milli Egemenlik\n• Yurtta Sulh Cihanda Sulh\n• İnsan ve İnsanlık Sevgisi\n• Çağdaşlaşma',
                highlight: '6 Ok: Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık',
            },
        ],
        quiz: [
            { question: 'Cumhuriyetin ilan tarihi nedir?', options: ['1 Kasım 1922', '29 Ekim 1923', '3 Mart 1924', '23 Nisan 1920'], correctAnswer: 1 },
            { question: 'Medeni Kanun hangi ülkeden örnek alınarak hazırlanmıştır?', options: ['Fransa', 'İngiltere', 'İsviçre', 'Almanya'], correctAnswer: 2 },
            { question: 'Şapka İnkılabı (Kılık Kıyafet Kanunu) ilk nerede tanıtılmıştır?', options: ['Ankara', 'Kastamonu', 'Samsun', 'Bursa'], correctAnswer: 1 },
            { question: 'Tevhid-i Tedrisat Kanunu ne anlama gelir?', options: ['Harf değişikliği', 'Eğitim birliği', 'Kadın hakları', 'Takvim değişikliği'], correctAnswer: 1 },
            { question: 'CHP\'nin "Altı Ok"u Anayasa\'ya hangi yıl girmiştir?', options: ['1924', '1928', '1934', '1937'], correctAnswer: 3 },
            { question: 'Kadınlara milletvekili seçilme hakkı hangi yıl verilmiştir?', options: ['1930', '1933', '1934', '1935'], correctAnswer: 2 },
            { question: '"Devletçilik" ilkesi neyi ifade eder?', options: ['Tüm işleri devlet yapar', 'Özel sektör tamamen yasak', 'Yapamadığını devlet üstlenir', 'Devlet sadece askerlik işi yapar'], correctAnswer: 2 },
            { question: 'Türk Dil Kurumu hangi yıl kurulmuştur?', options: ['1928', '1931', '1932', '1934'], correctAnswer: 2 },
        ],
    },
];
