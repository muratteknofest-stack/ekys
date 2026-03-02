import { MaarifModule } from '../maarif-modules';

export const egitimModules: MaarifModule[] = [
    {
        id: 'eg-modul-1',
        title: 'Öğrenme Psikolojisi',
        subtitle: 'Temel kuramlar',
        description: 'Davranışçı, bilişsel ve yapılandırmacı öğrenme kuramlarının temellerini kavrayın.',
        icon: 'Brain',
        gradient: 'from-violet-500 to-purple-600',
        cards: [
            {
                title: 'Davranışçı Öğrenme Kuramları',
                content: 'Davranışçılık, gözlenebilir davranışlara odaklanır. Öğrenme = Uyaran-Tepki bağı kurma.\n\n🔬 Klasik Koşullanma (Pavlov):\n• Koşulsuz uyaran → Koşulsuz tepki (doğal)\n• Koşullu uyaran + Koşulsuz uyaran → Koşullu tepki\n• Örnek: Zil sesi + Yemek → Salya\n\n🔬 Edimsel Koşullanma (Skinner):\n• Pekiştirme: Davranışı artırır (Olumlu/Olumsuz)\n• Ceza: Davranışı azaltır\n• Olumlu pekiştireç = Ödül ekleme\n• Olumsuz pekiştireç = Hoşa gitmeyen şeyi kaldırma\n\n📌 Anahtar: Pavlov=Klasik, Skinner=Edimsel, Watson=Davranışçılığın kurucusu',
                highlight: 'Pavlov=Klasik Koşullanma | Skinner=Edimsel Koşullanma',
            },
            {
                title: 'Bilişsel Öğrenme Kuramları',
                content: 'Bilişsel yaklaşım, zihinsel süreçlere odaklanır.\n\n🧠 Gestalt (Bütünlük İlkesi):\n• "Bütün, parçaların toplamından farklıdır"\n• İçgörüsel öğrenme (Köhler - Şempanze deneyi)\n\n🧠 Bilgi İşleme Kuramı:\nDuyusal Bellek → Kısa Süreli Bellek → Uzun Süreli Bellek\n• Kodlama, depolama, geri getirme süreçleri\n• Anlamlandırma ve örgütleme hatırlamayı güçlendirir\n\n🧠 Sosyal Öğrenme (Bandura):\n• Gözlem yoluyla öğrenme (Model alma)\n4 süreç: Dikkat → Hatırlama → Uygulama → Güdülenme\n• Öz-yeterlik kavramı: "Yapabilme inancı"',
                highlight: 'Bandura = Gözlemle Öğrenme + Öz-yeterlik',
            },
            {
                title: 'Yapılandırmacı Öğrenme',
                content: '🏗️ Yapılandırmacılık: Öğrenci bilgiyi kendi zihninde aktif olarak yapılandırır (inşa eder).\n\nÖğretmen = Rehber/Kolaylaştırıcı (bilgi aktarıcı DEĞİL)\n\n🏗️ Piaget (Bilişsel Yapılandırmacılık):\n• Şema, özümleme, uyumsama, dengeleme\n• Bilişsel gelişim dönemleri:\n  1. Duyusal-Motor (0-2)\n  2. İşlem Öncesi (2-7)\n  3. Somut İşlemler (7-11)\n  4. Soyut İşlemler (11+)\n\n🏗️ Vygotsky (Sosyal Yapılandırmacılık):\n• Yakınsal Gelişim Alanı (ZPD)\n• İskele kurma (scaffolding)\n• Sosyal etkileşim öğrenmenin temelidir',
                highlight: 'Piaget=Bireysel | Vygotsky=Sosyal Yapılandırmacılık',
            },
            {
                title: 'Güdülenme (Motivasyon)',
                content: '🎯 İçsel Güdülenme: Kişinin kendi merakı/ilgisi ile harekete geçmesi (daha kalıcı)\n🎯 Dışsal Güdülenme: Ödül, not, ceza gibi dış etkenlerle harekete geçme\n\n📊 Maslow İhtiyaçlar Hiyerarşisi:\n1. Fizyolojik (yeme, içme, uyku)\n2. Güvenlik\n3. Ait olma ve sevgi\n4. Saygınlık\n5. Kendini gerçekleştirme\n\n⚡ Atıf (Yükleme) Kuramı (Weiner):\n• Başarıyı içsel-dışsal, kalıcı-geçici faktörlere yükleme\n• "Çalıştığım için başardım" → İçsel + kontrol edilebilir = en sağlıklı atıf',
                highlight: 'Maslow: Fizyolojik → Güvenlik → Aidiyet → Saygı → Kendini Gerçekleştirme',
            },
            {
                title: 'Program Geliştirme Temelleri',
                content: '📋 Eğitim Programının 4 Temel Öğesi:\n1. Hedef: Ne öğretilmek isteniyor?\n2. İçerik: Hangi konular?\n3. Eğitim Durumları: Nasıl öğretilecek?\n4. Değerlendirme: Ne kadar öğrenildi?\n\n📋 Hedef Alanları (Bloom Taksonomisi):\n• Bilişsel: Bilgi → Kavrama → Uygulama → Analiz → Sentez → Değerlendirme\n• Duyuşsal: Alma → Tepkide bulunma → Değer verme → Örgütleme → Kişilik haline getirme\n• Psikomotor: Algılama → Kurulma → Kılavuzla yapma → Mekanikleşme → Beceri haline getirme\n\n📌 Tyler Modeli: Hedef odaklı (en yaygın)\n📌 Taba Modeli: Tabandan tavana (öğretmen merkezli)',
                highlight: 'Bloom: Bilgi→Kavrama→Uygulama→Analiz→Sentez→Değerlendirme',
            },
        ],
        quiz: [
            { question: 'Klasik koşullanma kuramının kurucusu kimdir?', options: ['Skinner', 'Watson', 'Pavlov', 'Thorndike'], correctAnswer: 2 },
            { question: 'Edimsel koşullanmada davranışı artıran uygulamaya ne denir?', options: ['Ceza', 'Sönme', 'Pekiştirme', 'Genelleme'], correctAnswer: 2 },
            { question: 'Bandura\'nın sosyal öğrenme kuramında temel mekanizma nedir?', options: ['Pekiştirme', 'Koşullanma', 'Gözlem yoluyla öğrenme', 'İçgörü'], correctAnswer: 2 },
            { question: 'Piaget\'nin bilişsel gelişim dönemlerinde "Soyut İşlemler" kaç yaşında başlar?', options: ['7', '9', '11', '13'], correctAnswer: 2 },
            { question: 'Vygotsky\'nin "Yakınsal Gelişim Alanı" (ZPD) ne demektir?', options: ['Ezber alanı', 'Çocuğun yardımla yapabildiği ile tek başına yapabildiği arasındaki fark', 'Sınıf ortamı', 'Oyun alanı'], correctAnswer: 1 },
            { question: 'Maslow\'un ihtiyaçlar hiyerarşisinin en üst basamağı hangisidir?', options: ['Güvenlik', 'Saygınlık', 'Kendini gerçekleştirme', 'Ait olma'], correctAnswer: 2 },
            { question: 'Bloom Taksonomisi\'nde bilişsel alanın en alt basamağı hangisidir?', options: ['Kavrama', 'Bilgi', 'Uygulama', 'Analiz'], correctAnswer: 1 },
            { question: 'Yapılandırmacı yaklaşımda öğretmenin rolü nedir?', options: ['Bilgi aktarıcı', 'Otoriter yönetici', 'Rehber ve kolaylaştırıcı', 'Sınav yapıcı'], correctAnswer: 2 },
        ],
    },
    {
        id: 'eg-modul-2',
        title: 'Öğretim Yöntem ve Teknikleri',
        subtitle: 'Nasıl öğretilir?',
        description: 'Sınıfta kullanılan temel yöntem, teknik ve stratejileri öğrenin.',
        icon: 'GraduationCap',
        gradient: 'from-cyan-500 to-blue-600',
        cards: [
            {
                title: 'Öğretim Stratejileri',
                content: '📚 Sunuş Yoluyla (Ausubel):\n• Öğretmen merkezli, anlamlı öğrenme\n• Ön örgütleyiciler kullanılır\n• Tümdengelim (genelden özele)\n\n📚 Buluş Yoluyla (Bruner):\n• Öğrenci merkezli, keşfettirme\n• Tümevarım (özelden genele)\n• Sezgisel düşünme teşvik edilir\n\n📚 Araştırma-İnceleme:\n• Problem çözme temelli\n• Bilimsel yöntem adımları izlenir\n• En fazla üst düzey düşünme becerisi geliştirir\n\n📌 Hatırlatma: Ausubel=Sunuş, Bruner=Buluş',
                highlight: 'Ausubel=Sunuş (Tümdengelim) | Bruner=Buluş (Tümevarım)',
            },
            {
                title: 'Öğretim Yöntemleri',
                content: '🎯 Anlatım (Düz Anlatım):\n• En eski ve yaygın, öğretmen merkezli\n• Avantaj: Kısa sürede çok bilgi aktarımı\n• Dezavantaj: Pasif öğrenme\n\n🎯 Tartışma:\n• Büyük/küçük grup, panel, sempozyum, forum\n• Eleştirel düşünme geliştirir\n\n🎯 Örnek Olay:\n• Gerçek hayattan problemler üzerinde çalışma\n• Analiz ve karar verme becerisi\n\n🎯 Problem Çözme:\n• Bilimsel süreç: Problemi tanıma → Veri toplama → Hipotez kurma → Test etme → Sonuç\n\n🎯 Gösterip Yaptırma:\n• Psikomotor becerilerde etkili (ör: deney)',
                highlight: 'Anlatım=Öğretmen merkezli | Tartışma=Eleştirel düşünme',
            },
            {
                title: 'Aktif Öğrenme Teknikleri',
                content: '🎲 Beyin Fırtınası: Yargılamadan fikir üretme, yaratıcılık\n🎲 Altı Şapka (De Bono): 6 farklı bakış açısıyla düşünme\n• Beyaz=Bilgi, Kırmızı=Duygu, Siyah=Eleştiri, Sarı=İyimserlik, Yeşil=Yaratıcılık, Mavi=Yönetim\n\n🎲 İstasyon Tekniği: Farklı etkinlik noktaları döngüsel geziş\n🎲 Kartopu: Bireysel → İkili → Dörtlü → Sınıf tartışması\n🎲 Akvaryum: İç çember tartışır, dış çember gözler\n🎲 Jigsaw (Birleştirme): Her öğrenci uzman olduğu konuyu gruba öğretir\n🎲 Kavram Haritası: Kavramlar arası ilişkilerin görselleştirilmesi',
                highlight: 'Jigsaw = Her öğrenci uzmanlaşır ve öğretir',
            },
            {
                title: 'Ölçme ve Değerlendirme',
                content: '📏 Ölçme Türleri:\n• Tanıma/Yerleştirmeye Yönelik (Diagnostik): Öğretim öncesi seviye belirleme\n• Biçimlendirmeye Yönelik (Formatif): Süreç içinde geri bildirim\n• Düzeye/Sonuca Yönelik (Summatif): Süreç sonunda not verme\n\n📏 Geçerlik: Testin ölçmek istediği şeyi ölçme derecesi\n📏 Güvenirlik: Testin tutarlı sonuç verme derecesi\n📏 Kullanışlılık: Maliyet, süre, uygulama kolaylığı\n\n📊 Alternatif Değerlendirme:\n• Portfolyo (gelişim dosyası)\n• Rubrik (dereceli puanlama anahtarı)\n• Performans değerlendirme\n• Öz değerlendirme & Akran değerlendirme',
                highlight: 'Diagnostik=Önce | Formatif=Süreçte | Summatif=Sonra',
            },
            {
                title: 'Sınıf Yönetimi',
                content: '🏫 Sınıf Yönetimi Modelleri:\n\n1️⃣ Tepkisel Model: Sorun ortaya çıkınca müdahale (Canter)\n2️⃣ Önlemsel Model: Sorunları önceden engelleme (Kounin)\n• Kounin\'in dalga etkisi: Bir öğrenciye verilen uyarı tüm sınıfı etkiler\n3️⃣ Gelişimsel Model: Öğrencinin gelişim düzeyine uygun yaklaşım\n4️⃣ Bütünsel Model: Tüm modellerin sentezi\n\n🔑 Etkili Sınıf Yönetimi İlkeleri:\n• Demokratik ortam\n• Tutarlı kurallar (öğrenciyle birlikte oluşturulur)\n• Pozitif pekiştirme öncelikli\n• Göz teması ve yakınlık kontrolü\n• "Ben" dili kullanma (suçlamadan ifade etme)',
                highlight: 'Kounin = Önlemsel Model + Dalga Etkisi',
            },
        ],
        quiz: [
            { question: 'Ausubel\'in sunuş yoluyla öğretim stratejisi hangi yöntemi kullanır?', options: ['Tümevarım', 'Tümdengelim', 'Analoji', 'Dedüksiyon'], correctAnswer: 1 },
            { question: 'Bruner\'ın buluş yoluyla öğretim stratejisinde yaklaşım nedir?', options: ['Genelden özele', 'Özelden genele (tümevarım)', 'Aktarımcı', 'Ezbere dayalı'], correctAnswer: 1 },
            { question: '"Altı Şapka Düşünme" tekniğinde yaratıcılığı temsil eden şapka hangisidir?', options: ['Beyaz', 'Kırmızı', 'Yeşil', 'Mavi'], correctAnswer: 2 },
            { question: 'Jigsaw (Birleştirme) tekniğinde her öğrenci ne yapar?', options: ['Sınav olur', 'Uzman olduğu konuyu gruba öğretir', 'Sessizce dinler', 'Bireysel çalışır'], correctAnswer: 1 },
            { question: 'Formatif değerlendirme ne zaman yapılır?', options: ['Öğretim öncesi', 'Öğretim süreci içinde', 'Dönem sonunda', 'Yıl sonunda'], correctAnswer: 1 },
            { question: 'Bir testin ölçmek istediği şeyi ölçme derecesine ne denir?', options: ['Güvenirlik', 'Geçerlik', 'Kullanışlılık', 'Ayırt edicilik'], correctAnswer: 1 },
            { question: 'Kounin\'in sınıf yönetimi anlayışında "dalga etkisi" ne demektir?', options: ['Öğrencilerin sıra değiştirmesi', 'Bir öğrenciye verilen uyarının tüm sınıfı etkilemesi', 'Dersin akışı', 'Grup çalışması'], correctAnswer: 1 },
            { question: 'Portfolyo (gelişim dosyası) hangi değerlendirme türüne örnektir?', options: ['Geleneksel', 'Alternatif/Süreç odaklı', 'Norma dayalı', 'Ölçüt dışı'], correctAnswer: 1 },
        ],
    },
    {
        id: 'eg-modul-3',
        title: 'Gelişim Psikolojisi',
        subtitle: 'Çocuk & ergen gelişimi',
        description: 'Bilişsel, psikososyal ve ahlaki gelişim kuramlarını kavrayın.',
        icon: 'Heart',
        gradient: 'from-pink-500 to-rose-600',
        cards: [
            {
                title: 'Piaget - Bilişsel Gelişim Dönemleri',
                content: '🧒 1. Duyusal-Motor (0-2 yaş):\n• Nesne sürekliliği kazanılır\n• Refleksler → amaçlı davranışlar\n\n👧 2. İşlem Öncesi (2-7 yaş):\n• Sembolik düşünme (dil gelişir)\n• Ben merkezci düşünce\n• Animizm (cansıza canlılık atfetme)\n• Korunum YOKTUR\n\n👦 3. Somut İşlemler (7-11 yaş):\n• Korunum kazanılır\n• Mantıksal düşünme (SOMUT nesnelerle)\n• Sınıflama, sıralama yapabilir\n\n🧑 4. Soyut İşlemler (11+ yaş):\n• Soyut ve hipotetik düşünme\n• Bilimsel düşünme başlar\n• Ergen ben merkezciliği',
                highlight: 'Korunum → Somut İşlemler (7 yaş) | Soyut düşünce → 11 yaş',
            },
            {
                title: 'Erikson - Psikososyal Gelişim',
                content: 'Erikson\'un 8 psikososyal kriz:\n\n1️⃣ Güven ↔ Güvensizlik (0-1.5 yaş)\n2️⃣ Özerklik ↔ Utanç/Kuşku (1.5-3)\n3️⃣ Girişkenlik ↔ Suçluluk (3-6)\n4️⃣ Çalışkanlık ↔ Aşağılık (6-12) ← İlkokul!\n5️⃣ Kimlik ↔ Rol Karmaşası (12-18) ← Ergenlik!\n6️⃣ Yakınlık ↔ Yalıtılmışlık (18-30)\n7️⃣ Üretkenlik ↔ Durgunluk (30-65)\n8️⃣ Benlik Bütünlüğü ↔ Umutsuzluk (65+)\n\n📌 Sınav için kritik: 4. ve 5. evreler (okul çağı + ergenlik)\n📌 Kimlik arayışı ergenliğin EN belirgin özelliğidir',
                highlight: 'Ergenlik Krizi = Kimlik ↔ Rol Karmaşası (12-18 yaş)',
            },
            {
                title: 'Kohlberg - Ahlak Gelişim Kuramı',
                content: '⚖️ 3 Düzey, 6 Evre:\n\nI. Gelenek Öncesi Düzey:\n• Evre 1: Ceza-İtaat (Kural=Cezadan kaçınma)\n• Evre 2: Saf Çıkarcı (Kural=Karşılıklı çıkar)\n\nII. Geleneksel Düzey:\n• Evre 3: İyi Çocuk (Başkalarının onayı)\n• Evre 4: Kanun ve Düzen (Toplumsal kurallar)\n\nIII. Gelenek Sonrası Düzey:\n• Evre 5: Toplumsal Sözleşme (Haklar, demokratik ilkeler)\n• Evre 6: Evrensel Ahlak İlkesi (Vicdan, adalet)\n\n📌 Herkes 6. evreye ulaşamaz. Çoğu yetişkin 3-4. evrededir.',
                highlight: 'Çoğu yetişkin = Geleneksel Düzey (3-4. evre)',
            },
            {
                title: 'Dil ve Ahlak Gelişimi Ek Bilgiler',
                content: '🗣️ Dil Gelişimi Dönemleri:\n• Agulama (0-2 ay): Ağlama ile iletişim\n• Babıldama (3-6 ay): Ba-ba, ma-ma\n• Tek kelime (12 ay): İlk sözcükler\n• Telegrafik konuşma (18-24 ay): "Su ver"\n• İlk gramer (2-5 yaş): Kurallı cümleler\n\n⚖️ Piaget\'nin Ahlak Dönemleri:\n• Ahlak öncesi (0-5): Ahlaki karar yok\n• Dışsal Kurallara Bağlı / Heterenom (5-10): Kurallar değiştirilemez\n• Özerk Ahlak (10+): Kurallar karşılıklı anlaşmayla değiştirilebilir\n\n📌 Piaget=2 evreli, Kohlberg=6 evreli ahlak gelişimi',
                highlight: 'Piaget: Heterenom (5-10) → Otonom (10+)',
            },
        ],
        quiz: [
            { question: 'Piaget\'e göre "nesne sürekliliği" hangi dönemde kazanılır?', options: ['İşlem Öncesi', 'Duyusal-Motor', 'Somut İşlemler', 'Soyut İşlemler'], correctAnswer: 1 },
            { question: 'Erikson\'a göre ergenlik döneminin temel krizi nedir?', options: ['Güven ↔ Güvensizlik', 'Çalışkanlık ↔ Aşağılık', 'Kimlik ↔ Rol Karmaşası', 'Yakınlık ↔ Yalıtılmışlık'], correctAnswer: 2 },
            { question: 'Kohlberg\'in ahlak gelişiminde "İyi Çocuk" evresi hangi düzeydedir?', options: ['Gelenek Öncesi', 'Geleneksel', 'Gelenek Sonrası', 'Evrensel'], correctAnswer: 1 },
            { question: 'Piaget\'e göre korunum kavramı hangi dönemde kazanılır?', options: ['İşlem Öncesi', 'Duyusal-Motor', 'Somut İşlemler', 'Soyut İşlemler'], correctAnswer: 2 },
            { question: '"Ben merkezci düşünce" Piaget\'in hangi döneminde belirgindir?', options: ['Duyusal-Motor', 'İşlem Öncesi', 'Somut İşlemler', 'Soyut İşlemler'], correctAnswer: 1 },
            { question: 'Telegrafik konuşma hangi yaş aralığında görülür?', options: ['0-6 ay', '6-12 ay', '18-24 ay', '3-5 yaş'], correctAnswer: 2 },
            { question: 'Erikson\'a göre ilkokul çağının psikososyal krizi hangisidir?', options: ['Girişkenlik ↔ Suçluluk', 'Çalışkanlık ↔ Aşağılık', 'Kimlik ↔ Rol Karmaşası', 'Özerklik ↔ Utanç'], correctAnswer: 1 },
            { question: 'Kohlberg\'e göre çoğu yetişkin hangi düzeydedir?', options: ['Gelenek Öncesi', 'Geleneksel', 'Gelenek Sonrası', 'Evrensel'], correctAnswer: 1 },
        ],
    },
];
