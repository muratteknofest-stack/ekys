export interface InfoCard {
    title: string;
    content: string;
    highlight?: string; // key term to emphasize
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface MaarifModule {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string; // lucide icon name
    gradient: string;
    cards: InfoCard[];
    quiz: QuizQuestion[];
}

export const maarifModules: MaarifModule[] = [
    {
        id: 'modul-1',
        title: 'Temel Felsefe ve Vizyon',
        subtitle: 'Modelin temelleri',
        description: 'Türkiye Yüzyılı Maarif Modelinin ne olduğunu, temel felsefesini ve vizyonunu öğrenin.',
        icon: 'Compass',
        gradient: 'from-blue-500 to-indigo-600',
        cards: [
            {
                title: 'Maarif Modeli Nedir?',
                content: 'Türkiye Yüzyılı Maarif Modeli, MEB tarafından 2024\'te açıklanan yeni eğitim vizyonudur. "Maarif" kelimesi, eğitimden öte irfan, hikmet ve manevi derinlik taşır. Model, milli ve manevi değerleri çağın gerektirdiği yetkinliklerle birleştirmeyi hedefler.',
                highlight: 'Maarif = İrfan + Hikmet + Manevi Derinlik',
            },
            {
                title: '"Köklerden Geleceğe" Vizyonu',
                content: 'Modelin ana mottosu "Köklerden Geleceğe"dir. Bu slogan; geçmişin kültürel, manevi ve ahlaki kodlarını (kök değerleri) çağın bilimsel ve teknolojik yenilikleriyle sentezleyerek geleceğe taşımayı ifade eder. Ne sadece geçmişi tekrar, ne de sadece Batı taklidi.',
                highlight: 'Köklerden Geleceğe',
            },
            {
                title: 'Nihai Hedef: Yetkin ve Erdemli İnsan',
                content: 'Modelin nihai hedefi "Yetkin ve Erdemli İnsan" yetiştirmektir. "Yetkin" = Bilgi, beceri ve yeterlilikte donanımlı, çağın sorunlarını çözebilen. "Erdemli" = Ahlaki, milli ve manevi değerlere bağlı, dürüst, adaletli. İkisi birlikte olmalıdır.',
                highlight: 'Yetkin + Erdemli = Bütüncül İnsan',
            },
            {
                title: 'Çift Kanatlılık (Bütüncül Gelişim)',
                content: 'Model, "Çift Kanatlılık" veya "Akıl ve Kalp Bütünlüğü" anlayışını benimser. Sadece bilişsel (zihinsel) gelişim yetmez; fiziksel, duygusal, ahlaki ve sosyal gelişim de hedeflenir. Bir kanatla uçulmaz; hem akıl hem kalp gerekir.',
                highlight: 'Akıl (Bilişsel) + Kalp (Ahlaki/Duygusal) = Çift Kanat',
            },
            {
                title: 'Bilgiden Hikmete Geçiş',
                content: 'Model, bilginin ham veri (enformasyon) seviyesinde kalmasını reddeder. Bilginin ne işe yaradığını, insani katkısını sorgulayan "Hikmet" boyutuna geçişi hedefler. Bilgi + Ahlak + Şuur = Hikmet. Bilgi silah olmamalı, insanlığa hizmet etmelidir.',
                highlight: 'Enformasyon → Bilgi → Hikmet',
            },
            {
                title: 'Yerli ve Milli Pedagoji',
                content: 'Model, salt Batılı kavramları ithal etmek yerine kendi medeniyet terminolojisinden "Erdem", "Fıtrat", "Mana", "Kalp ve Akıl Bütünlüğü" kavramlarını merkeze alır. Böylece evrensel bilim standartlarıyla yerli/milli felsefeyi sentezler.',
                highlight: 'Yerli Felsefe + Evrensel Bilim = Özgün Vizyon',
            },
        ],
        quiz: [
            {
                question: 'Türkiye Yüzyılı Maarif Modeli\'nin nihai hedefi olan insan profili aşağıdakilerden hangisidir?',
                options: ['Akademik ve Başarılı İnsan', 'Yetkin ve Erdemli İnsan', 'Teknoloji Odaklı İnsan', 'Yarışmacı İnsan'],
                correctAnswer: 1,
            },
            {
                question: 'Modelin ana mottosu (sloganı) nedir?',
                options: ['Bilimden Geleceğe', 'Köklerden Geleceğe', 'Geçmişten Bugüne', 'Erdemli Toplum İçin'],
                correctAnswer: 1,
            },
            {
                question: '"Çift Kanatlılık" anlayışı neyi ifade eder?',
                options: ['İki dil öğrenmeyi', 'Hem spor hem bilimi', 'Akıl (bilişsel) ve kalp (ahlaki/duygusal) bütünlüğünü', 'İki diploma almayı'],
                correctAnswer: 2,
            },
            {
                question: '"Maarif" kelimesi "eğitim"den farklı olarak neyi barındırır?',
                options: ['Sadece teknik beceri', 'İrfan, hikmet ve manevi derinlik', 'Yabancı dil bilgisi', 'Sınav hazırlığı'],
                correctAnswer: 1,
            },
            {
                question: '"Bilgiden Hikmete Geçiş" ifadesinden kasıt nedir?',
                options: ['İnternetten bilgi indirmek', 'Bilgiyi ezberleme seviyesinde tutmak', 'Bilginin insani katkısının sorgulandığı bilgelik boyutuna geçiş', 'Yapay zekayı reddetme'],
                correctAnswer: 2,
            },
        ],
    },
    {
        id: 'modul-2',
        title: 'Erdem-Değer-Eylem Modeli',
        subtitle: 'Değerler sistemi',
        description: 'Modelin değerler felsefesini, kök değerleri, çatı kavramları ve eyleme dönüşümü kavrayın.',
        icon: 'Heart',
        gradient: 'from-rose-500 to-pink-600',
        cards: [
            {
                title: 'Erdem-Değer-Eylem Üçlüsü',
                content: 'Modelin en belirgin özelliklerinden biri Erdem-Değer-Eylem yapısıdır. ERDEM = Nihai ahlaki olgunluk hedefi. DEĞER = Erdeme ulaşmanın aracı (adalet, merhamet, dürüstlük vb.). EYLEM = Değerlerin somut yaşam pratiklerine, davranış ve üretime yansıması.',
                highlight: 'Erdem ← Değer ← Eylem',
            },
            {
                title: 'Üç Çatı Kavram: Huzur, Sevgi, Adalet',
                content: 'Modelin ana çatı kavramları 3 tanedir ve farklı alanlarla eşleştirilmiştir:\n• HUZUR → Benlik (kişinin iç dünyası)\n• SEVGİ → Öteki/Aile (yakın çevre ilişkileri)\n• ADALET → Toplum (toplumsal düzen)\nHer değer bu üç çatıdan birinin altında yer alır.',
                highlight: 'Huzur=Benlik | Sevgi=Öteki/Aile | Adalet=Toplum',
            },
            {
                title: 'Huzur (Benlik) Altındaki Değerler',
                content: 'Huzur çatısı altında kişinin kendi iç dünyasıyla ilgili değerler yer alır:\n• Sabır\n• Öz Denetim\n• Güven\n• Tevazu (Alçak Gönüllülük)\n• Şükür\nBu değerler kişinin kendisiyle barışık, dengeli ve huzurlu olmasını sağlar.',
                highlight: 'Sabır, Öz Denetim, Güven, Tevazu, Şükür',
            },
            {
                title: 'Sevgi (Öteki/Aile) Altındaki Değerler',
                content: 'Sevgi çatısı altında kişinin çevresiyle ilişkilerine dair değerler bulunur:\n• Vatanseverlik\n• Merhamet\n• Saygı\n• Yardımseverlik\n• Fedakârlık\nBu değerler empati, şefkat ve sosyal bağları güçlendirir.',
                highlight: 'Vatanseverlik, Merhamet, Saygı, Yardımseverlik',
            },
            {
                title: 'Adalet (Toplum) Altındaki Değerler',
                content: 'Adalet çatısı altında toplumsal düzeni sağlayan değerler yer alır:\n• Dürüstlük\n• Sorumluluk\n• Özgürlük\n• Hakkaniyet\n• Eşitlik\nBu değerler toplumsal hukuk, düzen ve güven ortamının temelidir.',
                highlight: 'Dürüstlük, Sorumluluk, Özgürlük, Hakkaniyet',
            },
            {
                title: 'Kök Değerlerin Öğretilme Biçimi',
                content: 'Kök değerler ayrı bir "Değerler Dersi" ile değil; tüm öğretim programına sarmal yapıda, derslerin doğasına uygun ve örtük (bütünleşik) olarak yedirilir. En güçlü strateji: Öğretmenin, yöneticilerin ve okul kültürünün bu değerleri yaşayan, uygulayan görünür aktörler olması (Örtük Program Gücü).',
                highlight: 'Örtük Program = Değerleri Yaşayarak Öğretmek',
            },
        ],
        quiz: [
            {
                question: 'Erdem-Değer-Eylem modelinde "Değer" kavramı neyin aracıdır?',
                options: ['Maddi zenginliğin', 'Sadece eylemin', 'Erdeme ulaşmanın', 'Kariyer başarısının'],
                correctAnswer: 2,
            },
            {
                question: 'Huzur, Sevgi ve Adalet çatı kavramları sırasıyla hangi alanlarla eşleştirilmiştir?',
                options: ['Benlik – Öteki/Aile – Toplum', 'Toplum – Benlik – Aile', 'Aile – Toplum – Benlik', 'Öteki – Aile – Toplum'],
                correctAnswer: 0,
            },
            {
                question: 'Aşağıdakilerden hangisi "Huzur (Benlik)" çatı kavramı altında yer ALMAZ?',
                options: ['Sabır', 'Öz Denetim', 'Vatanseverlik', 'Tevazu'],
                correctAnswer: 2,
            },
            {
                question: 'Kök değerler nasıl öğretilmelidir?',
                options: ['Ayrı bir Değerler Dersi ile', 'Notla değerlendirilen sınavlarla', 'Tüm programda sarmal ve örtük olarak yedirilerek', 'Rehberlik saatinde anlatarak'],
                correctAnswer: 2,
            },
            {
                question: 'Dürüstlük, Sorumluluk ve Özgürlük hangi çatı değer altındadır?',
                options: ['Huzur (Benlik)', 'Sevgi (Aile)', 'Adalet (Toplum)', 'Eylem'],
                correctAnswer: 2,
            },
        ],
    },
    {
        id: 'modul-3',
        title: 'Beceriler Çerçevesi',
        subtitle: 'Yetkinlik haritası',
        description: 'Kavramsal beceriler, sosyal-duygusal öğrenme, alan becerileri ve eğilimleri keşfedin.',
        icon: 'Brain',
        gradient: 'from-purple-500 to-violet-600',
        cards: [
            {
                title: 'Beceriler Çerçevesi Genel Bakış',
                content: 'Model, dört ana beceri grubunu içerir:\n1. Kavramsal Beceriler (Zihinsel altyapı)\n2. Sosyal-Duygusal Öğrenme (SDÖ) Becerileri\n3. Alan Becerileri (Derse özel yetkinlikler)\n4. Eğilimler (Karakter özellikleri)\nBu dört alan birlikte "Bütüncül Beceri Modeli"ni oluşturur.',
                highlight: 'Kavramsal + SDÖ + Alan + Eğilimler = Bütüncül Beceri',
            },
            {
                title: 'Kavramsal Beceriler (Basitten Karmaşığa)',
                content: 'Kavramsal beceriler şu sırayla aşamalandırılır:\n1. Fark Etme / Ayırt Etme\n2. Odaklanma / Derinleşme\n3. Sorgulama / İlişkilendirme\n4. Analiz / Sentez\nBu beceriler tüm alan becerilerinin ve somut öğrenmelerin temelini oluşturur.',
                highlight: 'Fark Etme → Odaklanma → Sorgulama → Analiz/Sentez',
            },
            {
                title: 'Sosyal-Duygusal Öğrenme (SDÖ)',
                content: 'SDÖ becerileri 5 ana alanı kapsar:\n• Öz-Farkındalık (Kendini tanıma)\n• Öz-Yönetim (Öz düzenleme, duygu kontrolü)\n• Sosyal Farkındalık (Empati)\n• İlişki Yönetimi (İletişim, iş birliği)\n• Sorumlu Karar Alma\nBu beceriler yaşam boyu ruhsal sağlık ve dayanıklılık için kritiktir.',
                highlight: 'Öz-Farkındalık → Öz-Yönetim → Sosyal Farkındalık → İlişki → Karar',
            },
            {
                title: 'Eğilimler (Karakter Özellikleri)',
                content: 'Eğilimler, uzun vadeli karakter özellikleridir:\n• Açık Fikirlilik\n• Araştırmacılık\n• Çalışkanlık\n• Merak\n• Sabır\n• Azim\n• Esneklik\nBunlar doğrudan not verilecek hedefler değil, eğitim sürecinde beslenecek karakteristiklerdir.',
                highlight: 'Merak, Azim, Sabır, Esneklik, Araştırmacılık',
            },
            {
                title: 'Üretkenlik ve Tasarım Becerileri',
                content: 'Model, öğrencinin sadece bilgi tüketen değil, bilgi üreten konumda olmasını bekler. Karşılaşılan bir probleme özgün fikirler bulması, tasarıma (prototipe) çevirip insanlığın faydasına sunması hedeflenir. İnovasyon, girişimcilik ve teknoloji tasarımı bu beceri alanının parçasıdır.',
                highlight: 'Tüketici Değil Üretici Nesil',
            },
            {
                title: 'Karmaşık Problem Çözme',
                content: 'Gerçek hayatın dinamikleri tek doğru cevaplı şıklarla işlemez. Ekonomi, çevre, tıp gibi alanlar çok değişkenli ve belirsizdir. Model, öğrencilerin disiplinlerarası, uyarlanabilir çözüm stratejileri üretebilmesini hedefler. Basit ezber problemlerinin ötesine geçmek esastır.',
                highlight: 'Çok Değişkenli + Disiplinlerarası + Uyarlanabilir Çözüm',
            },
        ],
        quiz: [
            {
                question: 'Kavramsal beceriler hangi sırayla aşamalandırılır?',
                options: [
                    'Analiz → Sorgulama → Fark Etme',
                    'Fark Etme/Ayırt Etme → Odaklanma/Derinleşme → Sorgulama/İlişkilendirme → Analiz/Sentez',
                    'Odaklanma → Analiz → Sentez → Fark Etme',
                    'Sorgulama → Odaklanma → İlişkilendirme → Sentez',
                ],
                correctAnswer: 1,
            },
            {
                question: 'Öz-farkındalık, öz-yönetim, empati ve sorumlu karar alma hangi beceri grubuna aittir?',
                options: ['Kavramsal Beceriler', 'Sosyal-Duygusal Öğrenme (SDÖ)', 'Alan Becerileri', 'Dijital Beceriler'],
                correctAnswer: 1,
            },
            {
                question: '"Açık fikirlilik, araştırmacılık, çalışkanlık, merak, sabır" gibi özellikler hangi kapsamda değerlendirilir?',
                options: ['Kavramsal Beceriler', 'Eğilimler (Karakter Özellikleri)', 'Fiziksel Beceriler', 'Müfredat Hedefleri'],
                correctAnswer: 1,
            },
            {
                question: 'Model öğrencilerin bilgi konusunda ne olmasını hedefler?',
                options: ['Pasif tüketici', 'Aktif üretici ve tasarımcı', 'Ezbere dayanan', 'Sadece dinleyen'],
                correctAnswer: 1,
            },
            {
                question: 'Karmaşık problem çözme becerisi neden basit ezber problemlerinden üstündür?',
                options: [
                    'Test çözme hızını artırdığı için',
                    'Kağıt üstünde kolay olduğu için',
                    'Gerçek hayat çok değişkenli olduğu için disiplinlerarası çözüm stratejileri gerektirir',
                    'Sadece zeki çocuklar yapabildiği için',
                ],
                correctAnswer: 2,
            },
        ],
    },
    {
        id: 'modul-4',
        title: 'Okuryazarlıklar',
        subtitle: '9 temel alan',
        description: '21. yüzyılda öğrencilerin sahip olması gereken 9 temel okuryazarlık alanını öğrenin.',
        icon: 'BookOpen',
        gradient: 'from-emerald-500 to-teal-600',
        cards: [
            {
                title: '9 Temel Okuryazarlık',
                content: 'Model, öğrencilerin 9 temel okuryazarlık alanına sahip olmasını hedefler:\n1. Okuma-Yazma Okuryazarlığı\n2. Matematik Okuryazarlığı\n3. Dijital Okuryazarlık\n4. Finansal Okuryazarlık\n5. Sürdürülebilirlik Okuryazarlığı\n6. Vatandaşlık Okuryazarlığı\n7. Kültürel Okuryazarlık\n8. Sağlık/Beden Okuryazarlığı\n9. Sanat Okuryazarlığı\nNot: Spor Okuryazarlığı bunlar arasında YER ALMAZ.',
                highlight: '9 Temel Okuryazarlık (Spor Okuryazarlığı yok!)',
            },
            {
                title: 'Dijital Okuryazarlık',
                content: 'Sadece cihaz kullanmak değil; bilgi kirliliğinin olduğu siber dünyada güvenli, etik ve eleştirel şekilde var olabilmektir. Alt başlıkları:\n• Medya Okuryazarlığı\n• Teknoloji Okuryazarlığı\n• Veri Okuryazarlığı\n• Bilişim Okuryazarlığı\nÖğrenci teknoloji tüketicisi değil, üreticisi olmalıdır.',
                highlight: 'Dijital Tüketici → Dijital Üretici',
            },
            {
                title: 'Finansal Okuryazarlık',
                content: 'Öğrenciden beklenen:\n• Tutumlu olmayı öğrenme\n• Bütçe yönetme\n• Tüketim algılarını (reklam, medya pazarlaması) sorgulama\n• Sürdürülebilir ve etik kazanım mantığını kavrama\n• Tasarruf, yardımlaşma ve adil birikim bilinci\nAmaç: Bilinçli, sorumlu ve etik finansal davranış.',
                highlight: 'Bütçe + Tasarruf + Etik Kazanç + Medya Sorgulaması',
            },
            {
                title: 'Sürdürülebilirlik Okuryazarlığı',
                content: 'Dünyanın bir emanet olduğu bilinci temelinde:\n• Ekosistemi izleme ve koruma\n• İklim krizlerini anlama\n• Ortak gelecek ve adil kaynak kullanımı\n• Çözüm üretme (sıfır atık, geri dönüşüm)\nÖğrenciler çevre bilincine sahip, kaynakları koruyan üretken bireyler olmalıdır.',
                highlight: 'Emanet Bilinciyle Çevre Koruma ve Çözüm Üretme',
            },
            {
                title: 'Bilgi Okuryazarlığı ve Doğrulama',
                content: 'Öğrencilerin eleştirel düşünme süreçlerinde:\n• Farklı bilgi kaynaklarını doğrulama (teyit)\n• Sahte veri ve haberleri (fake news) ayırt etme\n• Yazarın kaynağını, finansörlerini ve alternatif görüşlerini süzgeçten geçirme\nKörü körüne inanmak yerine analitik doğrulama tavrı benimsenmeli.',
                highlight: 'Doğrulama → Karşılaştırma → Eleştirel Değerlendirme',
            },
            {
                title: 'Kültürel Okuryazarlık',
                content: 'Öğrenciden beklenen:\n• Ülkesinin mitolojisini, masalını, sanatını ve yöresel değerlerini bilmek\n• Farklı evrensel kültürlerle hoşgörü ve estetik düzlemde köprü kurabilmek\n• Kendi kültürel kimliğini koruyarak küresel açıklığa sahip olmak\nKültürel okuryazarlık hem yerel hem evrensel boyutta işler.',
                highlight: 'Yerel Kültür + Evrensel Hoşgörü = Kültürel Köprü',
            },
        ],
        quiz: [
            {
                question: 'Aşağıdakilerden hangisi 9 temel okuryazarlık arasında YER ALMAZ?',
                options: ['Finansal Okuryazarlık', 'Sürdürülebilirlik Okuryazarlığı', 'Vatandaşlık Okuryazarlığı', 'Spor Okuryazarlığı'],
                correctAnswer: 3,
            },
            {
                question: 'Dijital Okuryazarlık hangi alt başlıkları kapsar?',
                options: [
                    'Sadece sosyal medya kullanımı',
                    'Medya, Teknoloji, Veri ve Bilişim Okuryazarlığı',
                    'Sadece kodlama',
                    'Sadece internet güvenliği',
                ],
                correctAnswer: 1,
            },
            {
                question: 'Finansal okuryazarlıkta öğrenciden ne beklenir?',
                options: [
                    'Tüm parayı harcaması',
                    'Tutumlu olma, bütçe yönetme ve tüketim algılarını sorgulama',
                    'Borsa oynaması',
                    'Sadece birikim yapması',
                ],
                correctAnswer: 1,
            },
            {
                question: 'Sürdürülebilirlik okuryazarlığında temel bakış açısı nedir?',
                options: [
                    'Tüketimi hızlandırma',
                    'Dünyanın bir emanet olduğu bilinciyle çevre koruma ve çözüm üretme',
                    'Tarımı terk etme',
                    'Sanayi yatırımı artırma',
                ],
                correctAnswer: 1,
            },
            {
                question: 'Bilgi okuryazarlığında "fake news" ile nasıl başa çıkılır?',
                options: [
                    'Körü körüne inanarak',
                    'Kaynakları doğrulama ve eleştirel değerlendirme yaparak',
                    'Tüm haberleri reddederek',
                    'Sadece tek kaynak okuyarak',
                ],
                correctAnswer: 1,
            },
        ],
    },
    {
        id: 'modul-5',
        title: 'Öğretim ve Değerlendirme',
        subtitle: 'Yeni yaklaşımlar',
        description: 'Öğretmenin yeni rolü, farklılaştırma, süreç odaklı değerlendirme ve yaşayan okul kavramlarını öğrenin.',
        icon: 'GraduationCap',
        gradient: 'from-amber-500 to-orange-600',
        cards: [
            {
                title: 'Öğretmenin Yeni Rolü: Rehber ve Kolaylaştırıcı',
                content: 'Öğretmen artık "otoriter aktarıcı" değil; öğrenme sürecinde öğrenciye yoldaşlık eden, onun kendi anlamını inşa etmesine olanak tanıyan deneyimli bir rehber ve kolaylaştırıcıdır. Orkestra şefi gibi sınıf iklimini uyuma dönüştüren bir "Öğrenme Yaşantı Tasarımcısı"dır.',
                highlight: 'Aktarıcı → Rehber / Kolaylaştırıcı / Tasarımcı',
            },
            {
                title: 'Öğretimin Farklılaştırılması',
                content: 'Aynı sınıftaki öğrencilerin bireysel farklılıklarına uygun eğitim:\n• ZENGİNLEŞTİRME: Hızlı öğrenen, potansiyeli yüksek öğrenciler için konuları derinleştirme (değiştirmeden derinleştirerek verme)\n• DESTEKLEME: Daha fazla zamana ihtiyaç duyan öğrencilere ek materyal ve süre (Tamamlayıcı Öğrenme)\nHerkese tek tip test vermek modele aykırıdır!',
                highlight: 'Zenginleştirme (Hızlı) ↔ Destekleme (İhtiyaç Duyan)',
            },
            {
                title: 'Süreç Odaklı Değerlendirme',
                content: 'Model, tek oturumluk çoktan seçmeli testleri reddeder. Onun yerine:\n• Formatif (süreç odaklı) değerlendirme\n• Portfolyo (gelişim dosyası)\n• Rubrik (dereceli puanlama anahtarı)\n• Öz ve akran değerlendirme\n• Gerçek yaşam bağlamlı sorular\nSadece sonuç değil, sürecin kendisi de değerlenir.',
                highlight: 'Portfolyo + Rubrik + Öz Değerlendirme = Formatif',
            },
            {
                title: 'Yaşayan Okullar (Okul İklimi)',
                content: 'Okul sadece fiziki bir bina değil; doğası, kültürü, çevresi ve atölyeleriyle ekolojik/sosyal bir iklimdir. İşbirlikli çalışma, proje tasarımı ve aktif fiziksel ortamlar kurgulanmalıdır. Sıfır atık projeleri, ata tohumu atölyeleri, geri dönüşüm çalışmaları bu vizyonun parçasıdır.',
                highlight: 'Okul = Yaşayan Ekosistem (Bina Değil İklim)',
            },
            {
                title: 'Bağlamsal ve Uygulamalı Öğrenme',
                content: 'Bilgi izole ve soyut ezberle değil; gerçek hayat senaryolarında anlamlandırılır. Okul dışı öğrenme etkinlikleri (müzeler, doğa yürüyüşleri, sanal geziler) müfredatın kilit parçasıdır. Öğrenci cevabı sadece "bulan" değil, problemin kendisini "fark eden/kuran" kişidir.',
                highlight: 'Sınıf İçi → Hayata Taşınan Anlamlı Öğrenme',
            },
            {
                title: 'Dönüştürücü Liderlik',
                content: 'Okul yöneticisi artık sadece evrak/disiplin amiri değil:\n• Öğretmeni, öğrenciyi ve veliyi kararlara ortak eden\n• Vizyon çizen ve kurumsal motivasyon yaratan\n• Katılımcı, dönüştürücü ve pedagojik lider\nMüfettiş de cezalandırıcı değil, öğretmene rehberlik eden (mentörlük yapan) destekleyici bir konumdadır.',
                highlight: 'Otoriter → Katılımcı, Dönüştürücü, Pedagojik Lider',
            },
        ],
        quiz: [
            {
                question: 'Maarif Modelinde öğretmen sınıfta hangi roldedir?',
                options: [
                    'Otoriter ve mutlak aktarıcı',
                    'Pasif izleyici',
                    'Rehber, kolaylaştırıcı ve öğrenme yaşantı tasarımcısı',
                    'Sadece evrak memuru',
                ],
                correctAnswer: 2,
            },
            {
                question: 'Öğrenme hızı yüksek öğrenciler için konuları derinleştirmeye ne denir?',
                options: ['Destekleme', 'Zenginleştirme', 'Hızlandırma', 'Modüler Öğrenme'],
                correctAnswer: 1,
            },
            {
                question: 'Aşağıdakilerden hangisi süreç odaklı değerlendirme aracıdır?',
                options: [
                    'Tek soruluk ezber kağıdı',
                    'Portfolyo ve Rubrik',
                    'Çoktan seçmeli tek sınav',
                    'Sıralama listesi',
                ],
                correctAnswer: 1,
            },
            {
                question: '"Yaşayan Okullar" kavramı neyi ifade eder?',
                options: [
                    'Canlı yayın yapan okullar',
                    'Doğası, kültürü ve atölyeleriyle ekolojik/sosyal bir iklim olan okul',
                    'Nöbetçi öğretmen sistemi',
                    'Akıllı tahta kullanan okullar',
                ],
                correctAnswer: 1,
            },
            {
                question: 'Okul yöneticisinin yeni vizyon modeli nedir?',
                options: [
                    'Otoriter disiplin amiri',
                    'Katılımcı, dönüştürücü ve pedagojik lider',
                    'Sadece evrak düzenleyici',
                    'Mali müdür',
                ],
                correctAnswer: 1,
            },
        ],
    },
    {
        id: 'modul-6',
        title: 'İleri Düzey ve Bütüncül Vizyon',
        subtitle: 'Sentez ve derinleşme',
        description: 'Disiplinlerarası öğrenme, kapsayıcılık, teknoloji hamlesisi ve modelin makro vizyonunu derinlemesine kavrayın.',
        icon: 'Rocket',
        gradient: 'from-cyan-500 to-blue-600',
        cards: [
            {
                title: 'Disiplinlerarası (Entegre) Öğrenme',
                content: 'Farklı branşlardan öğretmenler aynı konuyu ortaklaşa işleyebilir (örn: matematik + müzik = ritim ve fraktal). "Ortak Metinler" kullanılarak (çevre, kültürel eser vb.) zihinsel bütünleşik anlam haritası kurulur. Kopuk, parçalı disiplin anlayışı reddedilir.',
                highlight: 'Kopuk Konular → Bütünleşik Anlam Haritası',
            },
            {
                title: 'Kapsayıcılık (Inclusion)',
                content: 'Her öğrenci eşsizdir (biriciktir). Dezavantajlı, göçmen, köylerde yaşayan ya da engelli bireylerin özel koşulları avantaja çevrilir:\n• Pozitif ayrımcılık\n• Sosyal-psikolojik uyum stratejileri\n• Eşit katılım\nAyrıştırılmış tecrit okulları kurmak modele AYKIRIDIR.',
                highlight: 'Dışlama Değil → Pozitif Ayrımcılık + Eşit Katılım',
            },
            {
                title: 'Okul Öncesi Eğitimin Önemi',
                content: 'Okul öncesi eğitim, çocuğun erken yaştaki dil, duygu ve davranışsal şemalarının inşasında kritiktir. Fırsat eşitliğini sağlamak için dezavantajlı köyler dahil yaygınlaştırılmaktadır. Erken yakalama = Güçlü temel. Oyunla öğrenme vizyonu bu dönemin temelidir.',
                highlight: 'Erken Yakalama = Güçlü Temel (Fırsat Eşitliği)',
            },
            {
                title: 'Milli Teknoloji Hamlesi Bağlantısı',
                content: 'Eğitim sürecinde yerel üretim, tasarım ve sanayi projeleri ile okul atölyelerinin iş birliği yapması hedeflenir. TOGG, KAAN, İHA projeleri, teknoparklar ile ülkenin katma değeri yüksek teknoloji üretmesi ve zihinsel-nitelikli iş gücünü erken teşvik/keşif felsefesi.\nDeneyap Atölyeleri ve BİLSEM İnovasyon Odakları bu vizyonun somut uygulamalarıdır.',
                highlight: 'Deneyap + BİLSEM = Teknoloji Üretici Nesil',
            },
            {
                title: 'Yapay Zeka ve Kişiselleştirilmiş Öğrenme',
                content: 'Yapay zeka eğitimi tamamen makinelere devretmez; veri analiziyle (Öğrenme Analitiği) öğrencinin eksikliklerini ve profillerini saptayarak "Kişiselleştirilmiş Öğrenme"yi kolaylaştırır. Öğretmenin yerini almaz, onu güçlendirir. AI, farklılaştırma sürecinin en etkili araçlarından biridir.',
                highlight: 'AI = Öğretmeni Güçlendiren Araç (Yerine Geçen Değil)',
            },
            {
                title: 'Modelin Makro Vizyonu',
                content: 'Türkiye Yüzyılı Maarif Modeli\'nin asıl hedefi: Millî, manevi ve ahlaki kök değerlerini eksene alarak, bilişimden uzaya kadar çağa yön veren yetkinliklerle "Kendi Medeniyet ve Refah Tasavvurunu üreterek" hem kendine hem insanlığa adil bir yön çizen cesur/yenilikçi nesiller yaratmaktır. Ne salt Batı taklidi, ne geçmişte donmuş muhafazakarlık; özgün bir sentez.',
                highlight: 'Erdemli + Yetkin + Üretici + Küresel Liderlik',
            },
        ],
        quiz: [
            {
                question: '"Matematik ve müzik öğretmeninin aynı konuyu ortaklaşa işlemesi" ne tür bir yaklaşımdır?',
                options: ['Ayrıştırılmış Sınıf', 'İzole Disiplin', 'Disiplinlerarası (Entegre) Öğrenme', 'Karşılıklı Test'],
                correctAnswer: 2,
            },
            {
                question: 'Kapsayıcılık (Inclusion) anlayışına hangisi AYKIRIDIR?',
                options: [
                    'Dezavantajlı gruplara pozitif ayrımcılık',
                    'Bireysel farklılıklara saygı',
                    'Bilişsel yeteneği düşük olanları ayrı tecrit okullarına almak',
                    'Tüm çocukların yüksek yararını odaklamak',
                ],
                correctAnswer: 2,
            },
            {
                question: 'Yapay zeka Maarif Modelinde nasıl konumlanır?',
                options: [
                    'Eğitimi tamamen makinelere devretmek',
                    'Öğretmene hiç ihtiyaç bırakmamak',
                    'Kişiselleştirilmiş öğrenmeyi kolaylaştıran bir araç',
                    'Soru çalmaya yol açan tehlike',
                ],
                correctAnswer: 2,
            },
            {
                question: 'Deneyap Atölyeleri ve BİLSEM İnovasyon Odakları neyin somut uygulamasıdır?',
                options: ['Dil eğitimi', 'Spor eğitimi', 'Teknoloji üretici nesil yetiştirme vizyonu', 'Müzik eğitimi'],
                correctAnswer: 2,
            },
            {
                question: 'Modelin makro vizyonunda asıl hedef nedir?',
                options: [
                    'Salt Batı taklidi yapmak',
                    'Geçmişte donuk muhafazakarlık',
                    'Kök değerleri ile çağın yetkinliklerini sentezleyerek küresel liderliğe yön çizen nesiller yetiştirmek',
                    'Sadece akademik elitler yaratmak',
                ],
                correctAnswer: 2,
            },
        ],
    },
];
