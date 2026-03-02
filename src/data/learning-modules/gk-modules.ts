import { MaarifModule } from '../maarif-modules';

export const gkModules: MaarifModule[] = [
    {
        id: 'gk-modul-1',
        title: 'İslamiyet Öncesi Türk Tarihi',
        subtitle: 'Göçler, devletler & kültür',
        description: 'Orta Asya\'dan dünyaya yayılan Türklerin ilk devletleri, göçleri ve kültürel yapılarını öğrenin.',
        icon: 'Compass',
        gradient: 'from-amber-500 to-yellow-600',
        cards: [
            {
                title: 'Türk Göçlerinin Nedenleri ve Sonuçları',
                content: 'Türk göçlerinin başlıca nedenleri: iklim değişiklikleri, nüfus artışı, salgın hastalıklar, otlak yetersizliği ve Çin baskısıdır.\n\nSonuçları:\n• Yeni devletler kuruldu\n• Kültürel etkileşim gerçekleşti\n• Kavimler Göçü yaşandı → İlk Çağ bitti, Orta Çağ başladı\n• Orta Asya\'da nüfus azaldı\n• Bazı Türk devletleri millî benliklerini kaybetti',
                highlight: 'Kavimler Göçü = İlk Çağ → Orta Çağ',
            },
            {
                title: 'Devlet Yönetimi ve İkili Teşkilat',
                content: 'İslamiyet öncesi ilk Türk devlet teşkilatı Mete Han tarafından kurulmuştur.\n\nTemel yapı: Aile → Oba → Oymak → Boy → Devlet\n\nHükümdar unvanları: Han, Kağan, Şanyü, İdikut\nİkili Teşkilat: Ülke doğu-batı olarak ikiye bölünüp yönetilir. Kutsal merkez Ötüken\'dedir.\n\nKut Anlayışı: Yönetme yetkisinin Gök Tanrı tarafından han soyuna verildiğine inanılırdı. Bu yetki kan bağıyla aktarılırdı → taht kavgalarına yol açtı.',
                highlight: 'Kut = Tanrısal yönetme hakkı (Kan bağı ile aktarılır)',
            },
            {
                title: 'Ordu Teşkilatı ve Onlu Sistem',
                content: 'Mete Han tarafından kurulan "Onlu Sistem":\n• 10 kişi → Takım (Onbaşı)\n• 100 kişi → Bölük (Yüzbaşı)\n• 1000 kişi → Tabur (Binbaşı)\n• 10000 kişi → Tümen (Tümen başı)\n\nÖzellikler:\n• Ordu-millet geleneği (ücretli askerlik YOK)\n• Atlı birliklerden oluşur, ok-yay kullanılırdı\n• Savaş taktiği: Hilal (Turan/Sahte Ricat/Kurt Kapanı)\n• Türk ordu teşkilatı Çin, Moğol ve Bizans ordularını etkilemiştir',
                highlight: 'Mete Han → Onlu Sistem → Ordu-Millet Geleneği',
            },
            {
                title: 'Dini İnanışlar',
                content: 'En yaygın inanç: Gök Tanrı dini (Tek tanrı inancı)\n\nDiğer inanışlar:\n• Şamanizm: Din adamlarına "Kam" denir\n• Doğalar Kültü: Dağ, su, ağaçlara kutsiyet\n• Atalar Kültü: Ölmüşlerin ruhu izler\n• Totemizm: Ongunluk\n\nUygurlarda Manihaizm, Hazarlarda Musevilik, Avrupa Türklerinde Hristiyanlık yayılmıştır.\n\n📌 Balbal = Mezar taşı heykelleri\n📌 Kurgan = Türk mezarları\n📌 Yuğ = Cenaze töreni',
                highlight: 'Gök Tanrı (Tek tanrı) | Kam = Şaman din adamı',
            },
            {
                title: 'Yazılı Kültür ve Orhun Yazıtları',
                content: 'Türk edebiyatının ilk yazılı eserleri: Göktürk (Orhun) Yazıtları\n\n📜 Tonyukuk Yazıtı (720-725): İlk Türk tarihçisi, anı türünün ilk örneği\n📜 Kül Tigin Yazıtı (732): Bilge Kağan tarafından kardeşi için diktirdi\n📜 Bilge Kağan Yazıtı (735): Oğlu Tenri Kağan tarafından dikildi\n\nHepsini Yolluğ Tigin yazmıştır.\n\n🔤 Kullanılan alfabeler: 38 harfli Göktürk, 18 harfli Uygur\n\nSözlü edebiyat: Sav (atasözü), Sagu (ağıt), Koşuk (şiir)',
                highlight: 'Orhun Yazıtları = İlk Türkçe metin | Yolluğ Tigin yazdı',
            },
        ],
        quiz: [
            { question: 'Türk devlet teşkilatının kurucusu kimdir?', options: ['Attila', 'Mete Han', 'Bilge Kağan', 'Bumin Kağan'], correctAnswer: 1 },
            { question: 'Kavimler Göçü hangi çağ geçişine neden olmuştur?', options: ['Taş Çağı → Tunç Çağı', 'İlk Çağ → Orta Çağ', 'Orta Çağ → Yeni Çağ', 'Yeni Çağ → Yakın Çağ'], correctAnswer: 1 },
            { question: '"Kut" anlayışı neyi ifade eder?', options: ['Askeri güç', 'Tanrısal yönetme hakkı', 'Ticaret yetkisi', 'Hukuk kuralları'], correctAnswer: 1 },
            { question: 'Onlu Sistem\'de 10.000 kişilik birliğe ne ad verilir?', options: ['Tabur', 'Bölük', 'Tümen', 'Alay'], correctAnswer: 2 },
            { question: 'Şamanizm din adamlarına ne ad verilir?', options: ['Şad', 'Kam', 'Yabgu', 'Tudun'], correctAnswer: 1 },
            { question: 'Göktürk Yazıtlarını kim yazmıştır?', options: ['Bilge Kağan', 'Tonyukuk', 'Yolluğ Tigin', 'Kül Tigin'], correctAnswer: 2 },
            { question: 'İkili Teşkilat\'ın kutsal merkezi neresidir?', options: ['Karakurum', 'Ötüken', 'Balasagun', 'Semerkant'], correctAnswer: 1 },
            { question: 'Mani dinini benimseyen ve yerleşik hayata geçen Türk devleti hangisidir?', options: ['Hunlar', 'Göktürkler', 'Uygurlar', 'Hazarlar'], correctAnswer: 2 },
        ],
    },
    {
        id: 'gk-modul-2',
        title: 'Türk-İslam Devletleri',
        subtitle: 'İslamiyet sonrası yapılanma',
        description: 'Türklerin İslamiyeti kabulü, Talas Savaşı, devlet ve ordu teşkilatını kavrayın.',
        icon: 'BookOpen',
        gradient: 'from-emerald-500 to-teal-600',
        cards: [
            {
                title: 'Türklerin İslamiyeti Kabulü',
                content: 'Türk-Arap ilişkileri Hz. Ömer döneminde İran\'ın fethi ile başlamıştır.\n\n🔑 Kolaylaştıran etkenler:\n• Abbasilerin hoşgörü politikası\n• Gök Tanrı = Tek tanrı benzerliği\n• Ahlak kuralları benzerliği\n• Cennet/cehennem ve kurban kesme ortaklığı\n• Cihan hakimiyeti ↔ Cihat benzerliği\n\n⚔️ TALAS SAVAŞI (751):\n• Karlukların yardımıyla Abbasiler kazandı\n• Çin tehdidi ortadan kalktı\n• Türk-İslam tarihinin başlangıcı\n• Kağıt, matbaa, pusula Müslümanlara geçti',
                highlight: 'Talas 751 = Türk-İslam tarihinin başlangıcı',
            },
            {
                title: 'Devlet Yönetimi ve Hükümdarlık',
                content: 'Hükümdarlık Alametleri:\n👑 Hutbe okutma, para (sikke) bastırma\n👑 Halifeden menşur alma\n👑 Tuğ, sancak, otağ, taht bulunması\n👑 Nevbet (mehter) çalınması\n👑 Kılıç kuşanma töreni\n\nUnvanlar:\n• Karahanlılarda: Han, Hakan\n• Gaznelilerde: Sultan, Padişah\n• Selçuklularda: Sultan-ül Alem\n\nDivan-ı Ali (Büyük Divan) = Hükümet görevi\nKarahanlılarda başkan: Yuğruş\nSelçuklularda başkan: Vezir',
                highlight: 'Hutbe + Sikke + Menşur = Hükümdarlık sembolleri',
            },
            {
                title: 'Saray ve Eyalet Teşkilatı',
                content: 'Saray görevlileri:\n🏛️ Vezir: Saray teşkilatı başkanı\n🏛️ Hacibü\'l-Hüccab: Birimler arası koordinatör\n🏛️ Serhenk: Tören düzencisi\n🏛️ Emir-i Ahur: Atların bakımı\n🏛️ Çaşnigir: Yiyecekler\n🏛️ Candar: Saray koruma\n\nEyalet Teşkilatı:\n📍 En büyük birim: Eyalet (Melik/Şehzade yönetir)\n📍 Amid: Sivil yönetici\n📍 Şıhne: Askeri yönetici\n📍 Ulak: Posta teşkilatı\n📍 Subaşı: Şehir güvenliği\n📍 Pervaneci: Arazi işleri',
                highlight: 'Vezir = Saray başkanı | Melik = Eyalet başkanı',
            },
            {
                title: 'Ordu Yapılanması',
                content: 'Büyük Selçuklu Ordusu 5 bölümden oluşurdu:\n\n1️⃣ Gulaman-ı Saray: Esir/köle çocuklardan yetiştirilen askerler (Memluk/Kul sistemi)\n2️⃣ Hassa Ordusu: Her an savaşa hazır, Türk boylarından toplanan süvari birlik\n3️⃣ Eyalet Askerleri (İkta): En kalabalık bölüm! İkta sahiplerince yetiştirilen atlı askerler\n4️⃣ Türkmenler: Sınırlarda yaşayan göçebe Türklerden savaş zamanı toplanan kuvvetler\n5️⃣ Yardımcı Kuvvetler: Bağlı beylik ve devletlerden alınan askerler\n\n📌 İkta Sistemi ilk kez Nizamülmülk tarafından uygulanmış, Osmanlılarda "Dirlik" olarak devam etmiştir.',
                highlight: 'İkta Sistemi → Nizamülmülk → Osmanlı Dirlik Sistemi',
            },
            {
                title: 'Sosyal ve Ekonomik Hayat',
                content: 'Toplumsal yapı:\n• Sınıf ayrımı YOK (hoşgörülü politika)\n• Gayrimüslimler de üst düzey memurluk yapabilirdi\n• İslamiyet ile yerleşik hayata geçiş hızlandı\n\nEkonomi:\n💰 Karahanlılar: Tarım, ticaret, hayvancılık\n💰 Gazneliler: İpek ve Baharat yollarını kontrol\n💰 Selçuklular: Geniş sınırlar → çoklu kültür etkileşimi\n\nFütüvvet (Ahilik): Müslüman esnafın dini ve ekonomik teşkilatı\n\n📐 İlim adamları: Harezmi, Biruni, Farabi, İbn-i Sina, Gazali\n📐 Nizamiye Medreseleri: Dünyanın ilk üniversitelerinden',
                highlight: 'Ahilik = Esnaf teşkilatı | Nizamiye = İlk üniversite',
            },
        ],
        quiz: [
            { question: 'Talas Savaşı hangi yılda gerçekleşmiştir?', options: ['632', '711', '751', '1071'], correctAnswer: 2 },
            { question: 'Türklerin İslamiyeti kabulünde hangi halifelik dönemi etkili olmuştur?', options: ['Emeviler', 'Abbasiler', 'Endülüs Emevileri', 'Fatımiler'], correctAnswer: 1 },
            { question: 'Askeri İkta Sistemi ilk kez kim tarafından uygulanmıştır?', options: ['Alparslan', 'Melikşah', 'Nizamülmülk', 'Tuğrul Bey'], correctAnswer: 2 },
            { question: 'Büyük Selçuklu ordusunun EN kalabalık bölümü hangisidir?', options: ['Gulaman-ı Saray', 'Hassa Ordusu', 'Eyalet Askerleri (İkta)', 'Türkmenler'], correctAnswer: 2 },
            { question: 'Karahanlılarda divan başkanına ne ad verilirdi?', options: ['Vezir', 'Yuğruş', 'Hacib', 'Atabey'], correctAnswer: 1 },
            { question: 'Müslüman esnafların kurduğu dini ve ekonomik teşkilata ne ad verilir?', options: ['Lonca', 'Fütüvvet (Ahilik)', 'Narh', 'Gedik'], correctAnswer: 1 },
            { question: 'Nizamiye Medreseleri hangi devlet döneminde kurulmuştur?', options: ['Karahanlılar', 'Gazneliler', 'Büyük Selçuklu', 'Harzemşahlar'], correctAnswer: 2 },
            { question: '"Kut → Sultan" dönüşümü hangi devletle başlamıştır?', options: ['Karahanlılar', 'Gazneliler', 'Selçuklular', 'Osmanlılar'], correctAnswer: 1 },
        ],
    },
    {
        id: 'gk-modul-3',
        title: 'Coğrafya ve Bilim',
        subtitle: 'Dünya bilgisi',
        description: 'Türkiye ve dünya coğrafyası, bilim tarihi ve önemli buluşları keşfedin.',
        icon: 'Brain',
        gradient: 'from-blue-500 to-indigo-600',
        cards: [
            {
                title: 'Türkiye\'nin Coğrafi Özellikleri',
                content: 'Türkiye\'nin önemli coğrafi bilgileri:\n\n🌊 Boğazlar: İstanbul Boğazı (antik adı: Bosphorus), Çanakkale Boğazı (Hellespontos)\n🏔️ En yüksek nokta: Ağrı Dağı (5.137 m)\n🌊 En büyük göl: Van Gölü\n🏞️ En uzun nehir: Kızılırmak\n\n🌍 UNESCO Dünya Mirası:\n• Göbeklitepe (Şanlıurfa): Bilinen en eski tapınak\n• Kapadokya, Pamukkale, Efes, Troya\n\n🚀 İlk Türk astronot: Alper Gezeravcı\n🌱 TEMA Vakfı: Erozyonla mücadele\n🌸 EXPO 2026: İzmir\'de Uluslararası Botanik Fuarı',
                highlight: 'Göbeklitepe = Dünyanın bilinen en eski tapınağı',
            },
            {
                title: 'Büyük Bilim İnsanları',
                content: '🔬 Türk-İslam bilim adamları:\n• Harezmi: Cebirin babası\n• Biruni: Coğrafya ve astronomi\n• Farabi: Muallim-i Sani (İkinci öğretmen)\n• İbn-i Sina: Tıp kanunu yazarı\n• Gazali: İslam düşüncesinde dönüm noktası\n\n🔬 Dünya bilim insanları:\n• Louis Pasteur: Kuduz aşısı\n• Leonardo da Vinci: Mona Lisa, çok yönlü deha\n• Dmitri Mendeleyev: Periyodik tablo\n• Rene Descartes: "Düşünüyorum öyleyse varım"\n• Aziz Sancar: Nobel ödüllü Türk bilim insanı (DNA onarımı)',
                highlight: 'Farabi = Muallim-i Sani | Aziz Sancar = Nobel Ödülü',
            },
            {
                title: 'Dünya Coğrafyası ve Genel Bilgi',
                content: '🌍 Önemli bilgiler:\n• Güneş sisteminin en yakın yıldız sistemi: Alpha Centauri\n• Dünyanın en uzun otoyol tüneli: Laerdal (Norveç)\n• Nobel Barış Ödülü: Oslo\'da verilir\n• Ozon tabakasını incelten gaz: CFC (Kloroflorokarbon)\n• Dünyanın en küçük kuşu: Sinekkuşu\n• İnsanlığın ilk destanı: Gılgamış\n\n🇹🇷 Türk kültürü:\n• Mevlana\'nın Mesnevi\'si: Farsça yazılmıştır\n• 2026 Türk Dünyası Kültür Başkenti: Semerkant\n• Pusulayı, kağıdı ve matbaayı dünyaya kazandıran: Çin medeniyeti',
                highlight: 'Nobel Barış = Oslo | Gılgamış = İlk destan',
            },
            {
                title: 'Anayasa ve Temel Haklar',
                content: '📜 1982 Anayasası önemli bilgiler:\n• TBMM üye tamsayısı: 600 milletvekili\n• TBMM her yıl 1 Ekim\'de toplanır\n• İlk halk oylaması (referandum): 1961\n• Kanunların anayasaya uygunluk denetimi: Anayasa Mahkemesi\n\n🌐 Uluslararası:\n• Avrupa İnsan Hakları Sözleşmesi (AİHS): 1950\n• İnsan Hakları Evrensel Beyannamesi: 1948\n\n🏛️ Cumhuriyet tarihi:\n• Cumhuriyet ilan tarihi: 29 Ekim 1923\n• İstanbul Boğazı antik adı: Bosphorus',
                highlight: 'TBMM = 600 Üye | AİHS = 1950',
            },
        ],
        quiz: [
            { question: 'Göbeklitepe hangi ilimizdedir?', options: ['Gaziantep', 'Şanlıurfa', 'Mardin', 'Diyarbakır'], correctAnswer: 1 },
            { question: 'Kuduz aşısını bulan bilim insanı kimdir?', options: ['Alexander Fleming', 'Louis Pasteur', 'Edward Jenner', 'Robert Koch'], correctAnswer: 1 },
            { question: '"Düşünüyorum öyleyse varım" sözü kime aittir?', options: ['Sokrates', 'Platon', 'Rene Descartes', 'Immanuel Kant'], correctAnswer: 2 },
            { question: 'Nobel Barış Ödülü hangi şehirde verilir?', options: ['Stockholm', 'Oslo', 'Cenevre', 'Helsinki'], correctAnswer: 1 },
            { question: 'Mevlana\'nın Mesnevi\'si hangi dilde yazılmıştır?', options: ['Arapça', 'Farsça', 'Türkçe', 'Kürtçe'], correctAnswer: 1 },
            { question: 'EXPO 2026 Uluslararası Botanik Fuarı hangi şehirde düzenlenecektir?', options: ['İzmir', 'Antalya', 'Hatay', 'Gaziantep'], correctAnswer: 0 },
            { question: '1982 Anayasası\'na göre TBMM üye tamsayısı kaçtır?', options: ['450', '550', '600', '650'], correctAnswer: 2 },
            { question: 'Farabi\'ye verilen unvan nedir?', options: ['Muallim-i Evvel', 'Muallim-i Sani', 'Tıp Kanunu', 'Cebirin Babası'], correctAnswer: 1 },
        ],
    },
];
