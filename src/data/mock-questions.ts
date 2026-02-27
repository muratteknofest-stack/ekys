import { gkQuestions } from './questions/gk';
import { mevzuatQuestions } from './questions/mevzuat';
import { egitimQuestions } from './questions/egitim';
import { inkilapQuestions } from './questions/inkilap';
import { turkiyeYuzyiliQuestions } from './questions/turkiye-yuzyili';

export interface Question {
    id: string;
    category: string;
    question: string;
    options: string[];
    correctAnswer: number;
}

export const mockQuestions: Question[] = [
    ...gkQuestions,
    ...mevzuatQuestions,
    ...egitimQuestions,
    ...inkilapQuestions,
    ...turkiyeYuzyiliQuestions,
    // --- Manuel Eklenen veya Gözden Kaçan Mevcut Sorular (Varsa) ---
    {
        id: 'gk-1-legacy',
        category: 'Genel Kültür',
        question: '2024 yılı itibarıyla Türkiye\'nin en büyük güneş enerjisi santrali (GES) hangi ilimizde bulunmaktadır?',
        options: ['Karaman', 'Konya', 'Antalya', 'Şanlıurfa'],
        correctAnswer: 1,
    },
    {
        id: 'gk-2',
        category: 'Genel Kültür',
        question: 'Türk edebiyatında "Mavi Sürgün" adlı eseriyle tanınan Halikarnas Balıkçısı\'nın gerçek ismi nedir?',
        options: ['Cevat Şakir Kabaağaçlı', 'Sait Faik Abasıyanık', 'Aziz Nesin', 'Ömer Seyfettin'],
        correctAnswer: 0,
    },
    {
        id: 'gk-3',
        category: 'Genel Kültür',
        question: 'UNESCO tarafından "Dünya Hafızası" kütüğüne kaydedilen "Dîvânu Lugâti\'t-Türk"ün yazarı kimdir?',
        options: ['Yusuf Has Hacib', 'Kaşgarlı Mahmud', 'Edip Ahmet Yükneki', 'Hoca Ahmed Yesevi'],
        correctAnswer: 1,
    },
    {
        id: 'gk-4',
        category: 'Genel Kültür',
        question: 'Türkiye\'nin ilk milli haberleşme uydusu olan ve 2024 yılında fırlatılan uydunun adı nedir?',
        options: ['Türksat 5A', 'Türksat 6A', 'İmece', 'Türksat 5B'],
        correctAnswer: 1,
    },
    {
        id: 'gk-5',
        category: 'Genel Kültür',
        question: '2024 Paris Olimpiyat Oyunları\'nda Türkiye\'nin ilk altın madalyasını kazandıran spor branşı hangisi olmuştur?',
        options: ['Okçuluk', 'Boks', 'Güreş', 'Jimnastik'],
        correctAnswer: 1,
    },

    // --- Mevzuat (%20) ---
    {
        id: 'mev-1',
        category: 'Mevzuat',
        question: '657 sayılı Devlet Memurları Kanunu\'na göre, memurlara verilen "Kademe İlerlemesinin Durdurulması" cezası en fazla kaç yıl olabilir?',
        options: ['1 yıl', '2 yıl', '3 yıl', '5 yıl'],
        correctAnswer: 2,
    },
    {
        id: 'mev-2',
        category: 'Mevzuat',
        question: '4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun\'a göre, ilçede görevli bir memur için soruşturma izni vermeye yetkili merci hangisidir?',
        options: ['Vali', 'Kaymakam', 'İlgili Bakan', 'Cumhuriyet Başsavcısı'],
        correctAnswer: 1,
    },
    {
        id: 'mev-3',
        category: 'Mevzuat',
        question: '1739 sayılı Milli Eğitim Temel Kanunu\'na göre, aşağıdakilerden hangisi Türk Milli Eğitiminin temel ilkelerinden biri değildir?',
        options: ['Genellik ve Eşitlik', 'Karma Eğitim', 'Laiklik', 'Merkeziyetçilik'],
        correctAnswer: 3,
    },
    {
        id: 'mev-4',
        category: 'Mevzuat',
        question: 'Anayasa\'mıza göre Türkiye Büyük Millet Meclisi seçimleri kaç yılda bir yapılır?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 2,
    },
    {
        id: 'mev-5',
        category: 'Mevzuat',
        question: '657 sayılı Kanun\'a göre, mazeret izni kapsamında baba olan memura kaç gün izin verilir?',
        options: ['3 gün', '5 gün', '7 gün', '10 gün'],
        correctAnswer: 3,
    },

    // --- Eğitim Bilimleri (%15) ---
    {
        id: 'ed-1',
        category: 'Eğitim Bilimleri',
        question: 'Öğrencinin öğrenmesi gereken bilgiyi kendisinin yapılandırdığı ve anlamlandırdığı yaklaşım hangisidir?',
        options: ['Davranışçılık', 'Yapılandırmacılık', 'Bilişsel Yaklaşım', 'Sunuş Yoluyla Öğretim'],
        correctAnswer: 1,
    },
    {
        id: 'ed-2',
        category: 'Eğitim Bilimleri',
        question: 'Bloom Taksonomisine göre "yeni bir ürün ortaya koyma" hangi basamakta yer alır?',
        options: ['Uygulama', 'Analiz', 'Değerlendirme', 'Sentez (Yaratma)'],
        correctAnswer: 3,
    },
    {
        id: 'ed-3',
        category: 'Eğitim Bilimleri',
        question: 'Aşağıdakilerden hangisi bir öğretmenin sahip olması gereken temel becerilerden "Sınıf Yönetimi"nin unsurlarından biri değildir?',
        options: ['Zaman yönetimi', 'Ödül ve ceza dengesi', 'Mekan düzenlemesi', 'Yalnızca akademik başarıya odaklanma'],
        correctAnswer: 3,
    },
    {
        id: 'ed-4',
        category: 'Eğitim Bilimleri',
        question: 'Gagne\'nin Öğrenme Koşulları modelinde en karmaşık öğrenme türü hangisidir?',
        options: ['Problem Çözme', 'Kural Öğrenme', 'Ayırt Etmeyi Öğrenme', 'Sözel Bilgi Edinme'],
        correctAnswer: 0,
    },

    // --- T.C. İnkılap Tarihi ve Atatürkçülük (%15) ---
    {
        id: 'ink-1',
        category: 'İnkılap Tarihi',
        question: 'Mustafa Kemal Atatürk\'ün "Ordular, ilk hedefiniz Akdeniz\'dir. İleri!" emrini verdiği savaş hangisidir?',
        options: ['I. İnönü Savaşı', 'Sakarya Meydan Muharebesi', 'Başkomutanlık Meydan Muharebesi', 'Çanakkale Savaşı'],
        correctAnswer: 2,
    },
    {
        id: 'ink-2',
        category: 'İnkılap Tarihi',
        question: 'Milli Mücadele Dönemi\'nde "Temsil Heyeti"nin Ankara\'ya gelerek burayı merkez yapmasının temel sebebi nedir?',
        options: ['Deniz kenarında olması', 'Lojistik ve ulaşım yollarının merkezinde olması', 'Nüfusunun fazla olması', 'İstanbul\'a çok uzak olması'],
        correctAnswer: 1,
    },
    {
        id: 'ink-3',
        category: 'İnkılap Tarihi',
        question: 'Cumhuriyetin ilanından sonra kurulan ilk muhalefet partisi hangisidir?',
        options: ['Serbest Cumhuriyet Fırkası', 'Terakkiperver Cumhuriyet Fırkası', 'Demokrat Parti', 'Milli Kalkınma Partisi'],
        correctAnswer: 1,
    },
    {
        id: 'ink-4',
        category: 'İnkılap Tarihi',
        question: 'Lozan Barış Antlaşması\'nda çözüme kavuşturulamayan ve daha sonra Milletler Cemiyeti\'ne taşınan mesele hangisidir?',
        options: ['Kapitülasyonlar', 'Musul Meselesi', 'Ege Adaları', 'Ermeni Meselesi'],
        correctAnswer: 1,
    },

    // --- Türkiye Yüzyılı Maarif Modeli (%30) ---
    {
        id: 'tm-1',
        category: 'Türkiye Yüzyılı',
        question: 'Türkiye Yüzyılı Maarif Modeli\'nin en temel amacı nedir?',
        options: ['Akademik başarıyı her şeyin önünde tutmak', 'Erdemli, beceri odaklı ve bilge nesiller yetiştirmek', 'Sınav sistemini tamamen kaldırmak', 'Teknolojik araç kullanımını zorunlu kılmak'],
        correctAnswer: 1,
    },
    {
        id: 'tm-2',
        category: 'Türkiye Yüzyılı',
        question: 'Yeni modelde "Öğrenci Profili" oluşturulurken hangi kavram ön plana çıkarılmıştır?',
        options: ['Yetkin ve Erdemli İnsan', 'Sadece Bilgili İnsan', 'Teknoloji Odaklı İnsan', 'Disiplinli İnsan'],
        correctAnswer: 0,
    },
    {
        id: 'tm-3',
        category: 'Türkiye Yüzyılı',
        question: 'Maarif Modeli\'nde müfredat tasarımı hangi yaklaşımla hazırlanmıştır?',
        options: ['Bilgi odaklı sarmal yapı', 'Beceri odaklı bütüncül (holistik) yapı', 'Yalnızca konu odaklı yapı', 'Öğretmen merkezli yapı'],
        correctAnswer: 1,
    },
    {
        id: 'tm-4',
        category: 'Türkiye Yüzyılı',
        question: 'Türkiye Yüzyılı Maarif Modeli\'nde "Eğilimler" başlığı altında hangisi yer almaz?',
        options: ['Kişisel Eğilimler', 'Sosyal Eğilimler', 'Entelektüel Eğilimler', 'Mali Eğilimler'],
        correctAnswer: 3,
    },
    {
        id: 'tm-5',
        category: 'Türkiye Yüzyılı',
        question: 'Yeni modelde "Değerler Eğitimi" müfredatın neresinde yer alır?',
        options: ['Ayrı bir ders olarak', 'Sadece rehberlik saatlerinde', 'Müfredatın tüm süreçlerine yedirilmiş şekilde', 'Sadece ilkokul düzeyinde'],
        correctAnswer: 2,
    },
    {
        id: 'tm-6',
        category: 'Türkiye Yüzyılı',
        question: 'Maarif Modeli\'ne göre "Okuryazarlık Becerileri" kapsamında hangisi yer almaz?',
        options: ['Bilgi Okuryazarlığı', 'Dijital Okuryazarlık', 'Finansal Okuryazarlık', 'Ezber Okuryazarlığı'],
        correctAnswer: 3,
    },
    {
        id: 'tm-7',
        category: 'Türkiye Yüzyılı',
        question: 'Yeni modelde "Bütüncül Gelişim" kavramı neyi kapsar?',
        options: ['Sadece akademik gelişimi', 'Zihinsel, sosyal, duygusal ve fiziksel gelişimi', 'Sadece fiziksel gelişimi', 'Sadece teknolojik becerileri'],
        correctAnswer: 1,
    },
    {
        id: 'tm-8',
        category: 'Türkiye Yüzyılı',
        question: 'Maarif Modeli\'nin felsefi temelinde yer alan "İnsan" tanımı hangisidir?',
        options: ['Sadece ekonomik bir aktör', 'Zihnini ve kalbini birleştiren bütüncül bir varlık', 'Sadece rasyonel bir varlık', 'Sadece biyolojik bir varlık'],
        correctAnswer: 1,
    },
    {
        id: 'tm-9',
        category: 'Türkiye Yüzyılı',
        question: 'Modelin uygulanmasında öğretmenlerden beklenen temel rol nedir?',
        options: ['Sadece bilgi aktarıcı', 'Rehber ve kolaylaştırıcı', 'Sert bir disiplin uygulayıcısı', 'Sadece sınav hazırlayıcı'],
        correctAnswer: 1,
    },
    {
        id: 'tm-10',
        category: 'Türkiye Yüzyılı',
        question: 'Yeni modelde "Sürdürülebilirlik" kavramı hangi bağlamda ele alınır?',
        options: ['Sadece çevre koruma', 'Eğitimde süreklilik ve gelecek odaklılık', 'Sadece ekonomik tasarruf', 'Sınav kağıtlarının tasarrufu'],
        correctAnswer: 1,
    },

    // --- Karma/Ek Detaylı Sorular ---
    {
        id: 'extra-1',
        category: 'Genel Kültür',
        question: 'Türk mimarisinin şaheserlerinden biri olan ve "Mimar Sinan"ın çıraklık eserim dediği cami hangisidir?',
        options: ['Süleymaniye Camii', 'Selimiye Camii', 'Şehzade Camii', 'Mihrimah Sultan Camii'],
        correctAnswer: 2,
    },
    {
        id: 'extra-2',
        category: 'Genel Kültür',
        question: 'Dünyanın en eski tapınak merkezi olarak bilinen Göbeklitepe, Şanlıurfa\'nın hangi bölgesinde yer almaktadır?',
        options: ['Harran', 'Örencik', 'Halfeti', 'Birecik'],
        correctAnswer: 1,
    },
    {
        id: 'extra-3',
        category: 'Mevzuat',
        question: '4982 sayılı Bilgi Edinme Hakkı Kanunu\'na göre, başvurulan kurum kaç iş günü içinde cevap vermelidir?',
        options: ['7', '15', '30', '45'],
        correctAnswer: 1,
    },
    {
        id: 'extra-4',
        category: 'İnkılap Tarihi',
        question: 'Harf Devrimi (Yeni Türk Harflerinin Kabulü) hangi tarihte gerçekleşmiştir?',
        options: ['1 Kasım 1928', '29 Ekim 1923', '3 Mart 1924', '17 Şubat 1926'],
        correctAnswer: 0,
    },
    {
        id: 'extra-5',
        category: 'Eğitim Bilimleri',
        question: 'Aşağıdakilerden hangisi çağdaş eğitim anlayışının özelliklerinden biri değildir?',
        options: ['Öğrenci merkezli olma', 'Yetenekleri geliştirme', 'Ezbere dayalı bilgi aktarımı', 'Bireysel farkları gözetme'],
        correctAnswer: 2,
    },
    {
        id: 'extra-6',
        category: 'Türkiye Yüzyılı',
        question: 'Maarif Modeli\'nde "Aritmetik Okuryazarlık" hangi beceriyi hedefler?',
        options: ['Sadece sayılarla işlem yapma', 'Matematiksel düşünme ve günlük hayatta kullanma', 'Karmaşık formül ezberleme', 'Sadece geometri çözme'],
        correctAnswer: 1,
    },
    {
        id: 'extra-7',
        category: 'Mevzuat',
        question: '222 sayılı İlköğretim ve Eğitim Kanunu\'na göre ilköğretim kurumları kaç yaşını bitiren çocukları kapsar?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 1,
    },
    {
        id: 'gk-6',
        category: 'Genel Kültür',
        question: 'Türkiye\'nin ilk yerli tasarım ve üretim alçak yörünge gözlem uydusu aşağıdakilerden hangisidir?',
        options: ['Göktürk-1', 'Göktürk-2', 'Rasat', 'Bilsat'],
        correctAnswer: 2,
    },
    {
        id: 'gk-7',
        category: 'Genel Kültür',
        question: '"Kürk Mantolu Madonna", "İçimizdeki Şeytan" ve "Sırça Köşk" gibi eserlerin sahibi ünlü yazarımız kimdir?',
        options: ['Yaşar Kemal', 'Sabahattin Ali', 'Orhan Kemal', 'Ahmet Hamdi Tanpınar'],
        correctAnswer: 1,
    },
    {
        id: 'gk-8',
        category: 'Genel Kültür',
        question: 'İstiklal Marşı\'mızın günümüzde kullanılan bestesini yapan müzisyenimiz aşağıdakilerden hangisidir?',
        options: ['Ali Rıfat Çağatay', 'Cemal Reşit Rey', 'Ahmet Adnan Saygun', 'Osman Zeki Üngör'],
        correctAnswer: 3,
    },
    {
        id: 'gk-9',
        category: 'Genel Kültür',
        question: '2024 yılında düzenlenen 68. Eurovision Şarkı Yarışması\'nda "The Code" adlı şarkısıyla birinci olan ülke hangisidir?',
        options: ['İsveç', 'İtalya', 'İsviçre', 'Hırvatistan'],
        correctAnswer: 2,
    },
    {
        id: 'gk-10',
        category: 'Genel Kültür',
        question: 'Türkiye\'nin sınırları içindeki en uzun nehri aşağıdakilerden hangisidir?',
        options: ['Fırat', 'Kızılırmak', 'Sakarya', 'Seyhan'],
        correctAnswer: 1,
    },

    {
        id: 'mev-6',
        category: 'Mevzuat',
        question: '657 sayılı Devlet Memurları Kanunu\'na göre, disiplin amirleri tarafından verilen Uyarma ve Kınama cezalarına karşı itiraz süresi kararın tebliğinden itibaren kaç gündür?',
        options: ['7', '10', '15', '30'],
        correctAnswer: 0,
    },
    {
        id: 'mev-7',
        category: 'Mevzuat',
        question: '4483 sayılı Kanun\'a göre, yetkili merciin soruşturma izni verilmesine veya verilmemesine ilişkin kararına karşı Cumhuriyet Başsavcılığı veya şikayetçi kaç gün içinde itiraz edebilir?',
        options: ['7', '10', '15', '30'],
        correctAnswer: 1,
    },
    {
        id: 'mev-8',
        category: 'Mevzuat',
        question: '1739 sayılı Milli Eğitim Temel Kanunu\'na göre, mecburî ilköğretim çağı hangi yaş grubundaki çocukları kapsar?',
        options: ['5-13', '6-13', '6-14', '7-14'],
        correctAnswer: 2,
    },
    {
        id: 'mev-9',
        category: 'Mevzuat',
        question: '1982 Anayasası\'na göre, bir kimse en fazla kaç defa Cumhurbaşkanı seçilebilir? (Meclisin erken seçim kararı alması istisnası hariç)',
        options: ['1', '2', '3', 'Sınır yoktur'],
        correctAnswer: 1,
    },
    {
        id: 'mev-10',
        category: 'Mevzuat',
        question: '5018 sayılı Kamu Malî Yönetimi ve Kontrol Kanunu\'na göre, aşağıdakilerden hangisi Merkezi Yönetim Bütçesi kapsamında yer almaz?',
        options: ['Genel Bütçe', 'Özel Bütçe', 'Düzenleyici ve Denetleyici Kurum Bütçeleri', 'Sosyal Güvenlik Kurumları Bütçeleri'],
        correctAnswer: 3,
    },

    {
        id: 'ed-5',
        category: 'Eğitim Bilimleri',
        question: 'Sınıf içindeki sosyal ilişkileri, öğrencilerin birbirlerine karşı tutumlarını ve gruplaşmaları belirlemek amacıyla kullanılan test dışı bireyi tanıma tekniği hangisidir?',
        options: ['Gözlem', 'Sosyometri', 'Vaka İncelemesi', 'Görüşme'],
        correctAnswer: 1,
    },
    {
        id: 'ed-6',
        category: 'Eğitim Bilimleri',
        question: 'Jean Piaget\'nin Bilişsel Gelişim Kuramı\'na göre, tümevarım ve tümdengelim gibi mantıksal çıkarsamaların yapılabildiği, mecazların anlaşıldığı dönem hangisidir?',
        options: ['Duyu-Motor Dönemi', 'İşlem Öncesi Dönem', 'Somut İşlemler Dönemi', 'Soyut İşlemler Dönemi'],
        correctAnswer: 3,
    },
    {
        id: 'ed-7',
        category: 'Eğitim Bilimleri',
        question: 'Bir ölçme aracının, ölçmek istediği özelliği başka özelliklerle karıştırmadan, amacına uygun ve tam olarak ölçme derecesine ne ad verilir?',
        options: ['Güvenirlik', 'Geçerlik', 'Kullanışlılık', 'Objektiflik'],
        correctAnswer: 1,
    },
    {
        id: 'ed-8',
        category: 'Eğitim Bilimleri',
        question: 'Sınıf yönetiminde; kuralların öğrencilerle birlikte belirlendiği, karşılıklı saygı ve iletişimin ön planda olduğu, öğretmenin rehber rolü üstlendiği liderlik tipi hangisidir?',
        options: ['Otoriter Liderlik', 'Serbest Bırakıcı (Laissez-faire) Liderlik', 'Demokratik Liderlik', 'Karizmatik Liderlik'],
        correctAnswer: 2,
    },

    {
        id: 'ink-5',
        category: 'İnkılap Tarihi',
        question: 'Mondros Ateşkes Antlaşması\'nın imzalanmasından sonra, İtilaf Devletlerinin Osmanlı İmparatorluğunu kendi aralarında paylaşmak için yaptıkları gizli antlaşmalardan biri olan ve Ortadoğu\'nun sınırlarını (İngiltere/Fransa) belirleyen antlaşma hangisidir?',
        options: ['İzmir', 'Musul', 'İskenderun', 'İstanbul'],
        correctAnswer: 1,
    },
    {
        id: 'ink-6',
        category: 'İnkılap Tarihi',
        question: '3 Mart 1924 tarihinde kabul edilen ve Türkiye\'deki tüm eğitim-öğretim kurumlarını Milli Eğitim Bakanlığı\'na bağlayan kanun aşağıdakilerden hangisidir?',
        options: ['Teşkilat-ı Esasiye Kanunu', 'Tevhid-i Tedrisat Kanunu', 'Maarif Teşkilatı Hakkında Kanun', 'Millet Mektepleri Talimatnamesi'],
        correctAnswer: 1,
    },
    {
        id: 'ink-7',
        category: 'İnkılap Tarihi',
        question: 'Mustafa Kemal Atatürk\'ün, düşman donanmasını İstanbul Boğazı\'nda gördüğünde yanındaki yaveri Cevat Abbas\'a söylediği o meşhur tarihi söz aşağıdakilerden hangisidir?',
        options: ['Ordular ilk hedefiniz Akdenizdir!', 'Geldikleri gibi giderler.', 'Hattı müdafaa yoktur, sathı müdafaa vardır.', 'Ben size savaşmayı değil ölmeyi emrediyorum.'],
        correctAnswer: 1,
    },
    {
        id: 'ink-8',
        category: 'İnkılap Tarihi',
        question: 'Türkiye Cumhuriyeti\'nin kuruluşunda, Şer\'iye ve Evkaf Vekaleti\'nin kaldırılarak yerine kurulan Diyanet İşleri Başkanlığı\'nın ilk başkanı kim atanmıştır?',
        options: ['Mehmet Akif Ersoy', 'Rıfat Börekçi', 'Şerafettin Yaltkaya', 'Ahmet Hamdi Akseki'],
        correctAnswer: 1,
    },

    {
        id: 'tm-11',
        category: 'Türkiye Yüzyılı',
        question: 'Türkiye Yüzyılı Maarif Modeli\'nin öncelikli hedeflerinden biri olan "Erdem-Değer-Eylem" çerçevesine göre, aşağıdakilerden hangisi öğrencilere kazandırılması hedeflenen ana kök değerlerden biri değildir?',
        options: ['Dürüstlük', 'Adalet', 'Rekabetçilik', 'Özdenetim'],
        correctAnswer: 2,
    },
    {
        id: 'tm-12',
        category: 'Türkiye Yüzyılı',
        question: 'Maarif Modeli\'nde yer alan "Eleştirel Düşünme" yetkinliği bağlamında, öğrenciden aşağıdakilerden hangisini yapması beklenmez?',
        options: ['Bilgiyi analiz edip sınıflandırması', 'Gördüğü her bilgiyi mutlak doğru kabul etmesi', 'Farklı bakış açılarını değerlendirmesi', 'Kanıtlara dayalı çıkarımlarda bulunması'],
        correctAnswer: 1,
    },
    {
        id: 'tm-13',
        category: 'Türkiye Yüzyılı',
        question: 'Eğitimde "Sarmal Yaklaşım" ile "Tematik Yaklaşım"ın sentezlendiği bu yeni modelde, konuların işleniş biçimi temel olarak nasıldır?',
        options: ['Her konu sadece bir kez işlenir ve tekrarlanmaz', 'Konular, önceki yıllarda öğrenilenlerin üzerine daha da derinleşilerek ve farklı temalarla ilişkilendirilerek işlenir', 'Sadece sınavda çıkacak başlıklar sırayla ezberletilir', 'Dersler birbirinden tamamen bağımsız olarak planlanır'],
        correctAnswer: 1,
    },
    {
        id: 'tm-14',
        category: 'Türkiye Yüzyılı',
        question: 'Türkiye Yüzyılı Maarif Modeli\'ne göre, eğitim sürecindeki "Dijital Okuryazarlık ve Güvenlik" yetkinliğinin en önemli amacı nedir?',
        options: ['Öğrencilerin teknolojik cihaz tamiri yapabilmesi', 'Öğrencilerin kodlama yarışmalarında birinci olması', 'Dijital dünyadaki bilgi kaynaklarını güvenli, etik ve eleştirel bir biçimde kullanabilmesi', 'Öğrencilerin sosyal medyada en fazla vakit geçirmesinin sağlanması'],
        correctAnswer: 2,
    },
    {
        id: 'tm-15',
        category: 'Türkiye Yüzyılı',
        question: 'Modelin "Bütüncül Gelişim" felsefesi dikkate alındığında, bir öğrencinin değerlendirilmesini en doğru şekilde yansıtan ifade hangisidir?',
        options: ['Sadece çoktan seçmeli akademik sınavlardaki puanı', 'Sosyal, psikolojik, ahlaki ve zihinsel gelişiminin süreç odaklı olarak izlenmesi', 'Öğrencinin fiziksel sportif başarısına göre not verilmesi', 'Öğrencinin ezber kapasitesinin periyodik olarak ölçülmesi'],
        correctAnswer: 1,
    },
    {
        id: 'tm-16',
        category: 'Türkiye Yüzyılı',
        question: 'Türkiye Yüzyılı Maarif Modeli\'nde okulların her öğrencinin ihtiyacına uygun esnek öğrenme ortamlarına dönüştürülmesini destekleyen yaklaşım hangisidir?',
        options: ['Kapsayıcılık İlkesi', 'Tek Tipleştirme', 'Ayrıştırıcı Eğitim', 'Katı Disiplin Anlayışı'],
        correctAnswer: 0,
    },
    {
        id: 'tm-17',
        category: 'Türkiye Yüzyılı',
        question: 'Yeni modelin kavramsal çerçevesini oluşturan ve insanın tek boyutlu bir varlık olmadığını, akıl ve kalbin birlikteliğini vurgulayan felsefi yaklaşımın neticesinde aşağıdakilerden hangisi benimsenmiştir?',
        options: ['Öğretmen merkezli, pasif dinleyici sistemi', 'Sadece teknik bilgi yığması', 'Karakter ve değer gelişimini akademik gelişim ile birlikte tutan çift kanatlılık esası', 'Sanat ve spor faaliyetlerinin müfredattan çıkartılması'],
        correctAnswer: 2,
    },
    // --- Yeni Eklenen Mevzuat Soruları ---
    {
        id: 'mev-11',
        category: 'Mevzuat',
        question: '657 sayılı Devlet Memurları Kanunu\'na göre, memura aylıktan kesme cezası verildiğinde brüt aylığından kesilecek oran hangi aralıktadır?',
        options: ['1/30 ile 1/8 arasında', '1/30 ile 1/15 arasında', '1/20 ile 1/10 arasında', '1/15 ile 1/8 arasında'],
        correctAnswer: 0,
    },
    {
        id: 'mev-12',
        category: 'Mevzuat',
        question: '4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun\'a göre, yetkili mercie yapılan ihbar ve şikayetlerde bulunulması gereken ön koşul aşağıdakilerden hangisi değildir?',
        options: ['Kişi veya olay belirtilmesi', 'İddiaların ciddi bulgu ve belgelere dayanması', 'Dilekçe sahibinin ad, soyad ve imzasının bulunması', 'Dilekçenin noter onaylı olması'],
        correctAnswer: 3,
    },
    {
        id: 'mev-13',
        category: 'Mevzuat',
        question: '1739 sayılı Milli Eğitim Temel Kanunu\'na göre, okullarda kız ve erkek karma eğitim yapılması esastır. Hangi ilkenin gereğidir?',
        options: ['Genellik ve Eşitlik', 'Karma Eğitim', 'Laiklik', 'Eğitim Hakkı'],
        correctAnswer: 1,
    },
    {
        id: 'mev-14',
        category: 'Mevzuat',
        question: '1982 Anayasası\'na göre, suçluluğu hükmen sabit oluncaya kadar kimse suçlu sayılamaz ilkesi hangisidir?',
        options: ['Masumiyet Karinesi', 'Kanunilik İlkesi', 'Kişisellik İlkesi', 'Tabii Hakim Güvencesi'],
        correctAnswer: 0,
    },
    {
        id: 'mev-15',
        category: 'Mevzuat',
        question: '222 sayılı İlköğretim ve Eğitim Kanunu\'na göre, muhtarlar okul müdürleriyle işbirliği yaparak mecburi öğrenim çağındaki çocukların künyelerini gösteren çizelgeyi kaç nüsha olarak hazırlarlar?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
    },
    {
        id: 'mev-16',
        category: 'Mevzuat',
        question: '5442 sayılı İl İdaresi Kanunu\'na göre, ildeki idare şube başkanlıkları arasında adliye, askeri kanallar hariç bütün yazışmalar amir olarak kimin imzası ile yapılır?',
        options: ['Vali', 'Vali Yardımcısı', 'İl Özel İdaresi Genel Sekreteri', 'İlgili Şube Müdürü'],
        correctAnswer: 0,
    },
    {
        id: 'mev-17',
        category: 'Mevzuat',
        question: '1 sayılı Cumhurbaşkanlığı Kararnamesine göre, Milli Eğitim Bakanlığı\'nın öğretmen ihtiyacını tespit etmek ve buna yönelik atama politikaları geliştirmek hangi hizmet biriminin görevidir?',
        options: ['Personel Genel Müdürlüğü', 'Öğretmen Yetiştirme ve Geliştirme Genel Müdürlüğü', 'Ortaöğretim Genel Müdürlüğü', 'Temel Eğitim Genel Müdürlüğü'],
        correctAnswer: 0,
    },
    {
        id: 'mev-18',
        category: 'Mevzuat',
        question: '657 sayılı Devlet Memurları Kanunu\'na göre, memurun kasıt, kusur veya ihmaliyle kamu zararına yol açması halinde disiplin cezası olarak ne verilir?',
        options: ['Uyarma', 'Kınama', 'Aylıktan Kesme', 'Kademe İlerlemesinin Durdurulması'],
        correctAnswer: 2,
    },
    {
        id: 'mev-19',
        category: 'Mevzuat',
        question: '4483 sayılı kanuna göre memur hakkında ceza soruşturması açılabilmesi için ön inceleme süresi (yetkili merciin izni) en fazla kaç gün uzatılabilir?',
        options: ['7 gün', '10 gün', '15 gün', '30 gün'],
        correctAnswer: 2,
    },
    {
        id: 'mev-20',
        category: 'Mevzuat',
        question: '1982 Anayasası\'na göre Türkiye Büyük Millet Meclisi (TBMM) bilgi edinme ve denetim yolları arasında aşağıdakilerden hangisi yer almaz?',
        options: ['Meclis araştırması', 'Yazılı soru', 'Gensoru', 'Genel görüşme'],
        correctAnswer: 2,
    },
    // --- 2. Aşama Eklenen Karma Sorular (20 Soru) ---
    // Genel Kültür
    {
        id: 'gk-11',
        category: 'Genel Kültür',
        question: 'Cumhuriyet döneminin ilk kağıt paraları (banknotları) hangi yıl basılmıştır?',
        options: ['1923', '1925', '1927', '1930'],
        correctAnswer: 2,
    },
    {
        id: 'gk-12',
        category: 'Genel Kültür',
        question: 'UNESCO Dünya Mirası Listesi\'nde yer alan ve "Hititlerin Başkenti" olarak bilinen Hattuşaş hangi ilimizin sınırları içerisindedir?',
        options: ['Çorum', 'Yozgat', 'Kastamonu', 'Amasya'],
        correctAnswer: 0,
    },
    {
        id: 'gk-13',
        category: 'Genel Kültür',
        question: 'Birleşmiş Milletler (BM) Genel Kurulu\'nun 1948 yılında kabul ettiği "İnsan Hakları Evrensel Bildirgesini" kaleme alan komisyonun başkanı kimdir?',
        options: ['Winston Churchill', 'Eleanor Roosevelt', 'Rene Cassin', 'John Peters Humphrey'],
        correctAnswer: 1,
    },
    {
        id: 'gk-14',
        category: 'Genel Kültür',
        question: 'Nobel Ödülleri aşağıdaki alanlardan hangisinde verilmez?',
        options: ['Fizik', 'Barış', 'Edebiyat', 'Matematik'],
        correctAnswer: 3,
    },
    // Eğitim Bilimleri
    {
        id: 'ed-9',
        category: 'Eğitim Bilimleri',
        question: 'Öğrencilerin bir konu hakkındaki ön bilgilerini harekete geçirmek ve dersin başında dikkatlerini çekmek amacıyla kullanılan öğretim stratejisi hangisidir?',
        options: ['Pekiştireç verme', 'Dönüt sağlama', 'Ön organize ediciler (gelişmiş örgütleyiciler) kullanma', 'İpucu sunma'],
        correctAnswer: 2,
    },
    {
        id: 'ed-10',
        category: 'Eğitim Bilimleri',
        question: 'Vygotsky\'nin bilişsel gelişim kuramında yer alan ve çocuğun tek başına yapamayacağı bir işi, bir yetişkinin veya daha yetkin bir akranın rehberliğinde yapabilme potansiyelini ifade eden kavram hangisidir?',
        options: ['Özümleme', 'Yakınsak Gelişim Alanı (ZPD)', 'Yapı İskelesi (Scaffolding)', 'Uyum Sağlama'],
        correctAnswer: 1,
    },
    {
        id: 'ed-11',
        category: 'Eğitim Bilimleri',
        question: 'Ölçme araçlarında bulunması gereken niteliklerden biri olan "kullanışlılık" neyi ifade eder?',
        options: ['Testin hatalardan arınıklık derecesini', 'Testin sadece ölçülmek istenen özelliği ölçmesini', 'Testin hazırlanması, uygulanması ve puanlanmasının kolay ve ekonomik olmasını', 'Testin madde ayırıcılığının yüksek olmasını'],
        correctAnswer: 2,
    },
    {
        id: 'ed-12',
        category: 'Eğitim Bilimleri',
        question: 'Rehberlik hizmetlerinin temel amacı aşağıdakilerden hangisidir?',
        options: ['Öğrencinin problemlerini onun adına çözmek', 'Öğrencinin sadece akademik başarısını artırmak', 'Öğrencinin kendini gerçekleştirmesine yardımcı olmak', 'Disiplinsiz öğrencileri cezalandırmak'],
        correctAnswer: 2,
    },
    // İnkılap Tarihi
    {
        id: 'ink-9',
        category: 'İnkılap Tarihi',
        question: 'Milli Mücadele Dönemi\'nde Doğu Cephesi komutanı olarak görev yapan ve Ermenileri yenilgiye uğratan komutanımız kimdir?',
        options: ['İsmet İnönü', 'Kazım Karabekir', 'Fevzi Çakmak', 'Ali Fuat Cebesoy'],
        correctAnswer: 1,
    },
    {
        id: 'ink-10',
        category: 'İnkılap Tarihi',
        question: '"Ya İstiklal Ya Ölüm!" parolası hangi kongrede/genelgede ortaya atılmıştır?',
        options: ['Amasya Genelgesi', 'Erzurum Kongresi', 'Sivas Kongresi', 'Havza Genelgesi'],
        correctAnswer: 2,
    },
    {
        id: 'ink-11',
        category: 'İnkılap Tarihi',
        question: 'Atatürk İlkelerinden "halkın kendi kendini idare etmesini" ve "egemenliğin kayıtsız şartsız millete ait olmasını" savunan ilke hangisidir?',
        options: ['Cumhuriyetçilik', 'Milliyetçilik', 'Laiklik', 'Devletçilik'],
        correctAnswer: 0,
    },
    {
        id: 'ink-12',
        category: 'İnkılap Tarihi',
        question: 'Mudanya Ateşkes Antlaşması ile savaş yapılmadan TBMM hükümetine bırakılan yerler neresidir?',
        options: ['Doğu Anadolu ve Karadeniz', 'Doğu Trakya, İstanbul ve Boğazlar', 'İzmir ve Ege Adaları', 'Musul ve Kerkük'],
        correctAnswer: 1,
    },
    // Türkiye Yüzyılı Maarif Modeli
    {
        id: 'tm-18',
        category: 'Türkiye Yüzyılı',
        question: 'Türkiye Yüzyılı Maarif Modeli\'ne göre eğitim-öğretim sürecinin en önemli unsuru olarak kim/ne merkeze alınmıştır?',
        options: ['Öğretmen ve Otorite', 'Bina ve Donanım', 'Öğrenci (İnsan)', 'Ders Kitapları ve Notlar'],
        correctAnswer: 2,
    },
    {
        id: 'tm-19',
        category: 'Türkiye Yüzyılı',
        question: 'Modelin temel felsefesine göre "Milli Şuur" kavramı hangi bağlamda işlenmektedir?',
        options: ['Sadece belirli milli bayramlarda kutlama yapmak', 'Kendi kültürüne yabancılaşmadan evrensel değerlerle bütünleşebilen şahsiyetler yetiştirmek', 'Tüm yabancı dillere ve kültürlere kapalı bir eğitim sistemi kurmak', 'Sadece tarih derslerinde ezberlemek'],
        correctAnswer: 1,
    },
    {
        id: 'tm-20',
        category: 'Türkiye Yüzyılı',
        question: 'Yeni Maarif Modeli\'nde "Ölçme ve Değerlendirme" yaklaşımının odağında aşağıdakilerden hangisi bulunur?',
        options: ['Öğrenciler arası rekabeti kızıştırmak', 'Tek tip ve sadece çoktan seçmeli sınavlardan oluşan bir sistem', 'Süreci ve gelişimi takip eden (biçimlendirici) değerlendirme', 'Sadece dönem sonu notlarını yükseltmek'],
        correctAnswer: 2,
    },
    {
        id: 'tm-21',
        category: 'Türkiye Yüzyılı',
        question: 'Türkiye Yüzyılı Maarif Modeli\'nin öncelikli hedeflerinden olan "Medeniyet Kurucusu" nesiller yetiştirmek fikri hangi beceriyle yoğun olarak ilişkilendirilmiştir?',
        options: ['Sadece ezber gücü', 'Girişimcilik, yenilikçilik ve üretkenlik', 'Mevcudu koruma ve değişime direnme', 'Sadece test çözme hızı'],
        correctAnswer: 1,
    },
    // Ekstra Mevzuat Soruları
    {
        id: 'mev-21',
        category: 'Mevzuat',
        question: '657 sayılı Devlet Memurları Kanunu\'na göre, yıllık izinde hastalanıp rapor alan memurun durumu ile ilgili hangisi doğrud?',
        options: ['Yıllık izni yanar', 'Hastalık izni yıllık izne dönüştürülür', 'Hastalık izni bitiminde yıllık izninin kalan kısmını kullanmaya devam eder', 'Rapor onaylanmaz'],
        correctAnswer: 2,
    },
    {
        id: 'mev-22',
        category: 'Mevzuat',
        question: '4982 Sayılı Bilgi Edinme Hakkı Kanununa göre, bilgi veya belgeye erişim için ödenecek ücret hangi esasa göre belirlenir?',
        options: ['Kurumun belirlediği keyfi tutara göre', 'Bilgi ve belgenin erişimine gerektirdiği maliyet tutarı kadar', 'Sabit damga vergisi oranında', 'Ücret talep edilemez, her zaman ücretsizdir'],
        correctAnswer: 1,
    },
    {
        id: 'mev-23',
        category: 'Mevzuat',
        question: '1982 Anayasası\'na göre kanunları yayımlamak kimin görevidir?',
        options: ['TBMM Başkanı', 'Cumhurbaşkanı', 'Anayasa Mahkemesi Başkanı', 'Adalet Bakanı'],
        correctAnswer: 1,
    },
    {
        id: 'mev-24',
        category: 'Mevzuat',
        question: '5442 Sayılı İl İdaresi Kanununa göre, il daimi encümenine kim başkanlık eder?',
        options: ['Vali', 'İl Özel İdaresi Genel Sekreteri', 'Belediye Başkanı', 'Defterdar'],
        correctAnswer: 0,
    },
    // ---- 100 SORULUK YENİ PAKET (BÖLÜM 1 - 50 Soru) ----

    // --- Genel Kültür (10 Soru) ---
    { id: 'gk-101', category: 'Genel Kültür', question: 'TÜBİTAK tarafından geliştirilen ve Türkiye\'nin uzaydaki ilk yüksek çözünürlüklü yer gözlem uydusu olan İMECE hangi yıl yörüngesine yerleştirilmiştir?', options: ['2021', '2022', '2023', '2024'], correctAnswer: 2 },
    { id: 'gk-102', category: 'Genel Kültür', question: 'Avrupa İnsan Hakları Mahkemesi (AİHM) hangi kuruma bağlı olarak faaliyet göstermektedir?', options: ['Avrupa Birliği', 'Birleşmiş Milletler', 'Avrupa Konseyi', 'NATO'], correctAnswer: 2 },
    { id: 'gk-103', category: 'Genel Kültür', question: 'Nobel Edebiyat Ödülü\'nü kazanan ilk Türk yazar kimdir?', options: ['Yaşar Kemal', 'Orhan Pamuk', 'Aziz Nesin', 'Elif Şafak'], correctAnswer: 1 },
    { id: 'gk-104', category: 'Genel Kültür', question: 'Mimar Sinan\'ın "ustalık eserim" olarak nitelendirdiği ve Edirne\'de bulunan tarihi cami hangisidir?', options: ['Süleymaniye Camii', 'Selimiye Camii', 'Şehzadebaşı Camii', 'Rüstem Paşa Camii'], correctAnswer: 1 },
    { id: 'gk-105', category: 'Genel Kültür', question: 'Türkiye\'nin ilk yerli otomobil markası TOGG, fabrikasını hangi ilimizde kurmuştur?', options: ['Kocaeli', 'Bursa', 'Sakarya', 'İstanbul'], correctAnswer: 1 },
    { id: 'gk-106', category: 'Genel Kültür', question: 'Kuzey Atlantik Antlaşması Örgütü\'ne (NATO) 2024 yılında resmen katılan son üye ülke hangisi olmuştur?', options: ['İsveç', 'Finlandiya', 'Ukrayna', 'Gürcistan'], correctAnswer: 0 },
    { id: 'gk-107', category: 'Genel Kültür', question: 'İstiklal Marşı şairimiz Mehmet Akif Ersoy\'un tüm şiirlerini topladığı eserinin adı nedir?', options: ['Safahat', 'Çile', 'Kendi Gök Kubbemiz', 'Büyük Doğu'], correctAnswer: 0 },
    { id: 'gk-108', category: 'Genel Kültür', question: 'Türkiye\'nin sınırları içinden doğup sınırları dışından denize dökülen nehirlerimizden hangisi Basra Körfezi\'ne akar?', options: ['Çoruh', 'Asi', 'Fırat', 'Meriç'], correctAnswer: 2 },
    { id: 'gk-109', category: 'Genel Kültür', question: 'Kanuni Sultan Süleyman döneminde Osmanlı donanmasının Akdeniz\'deki üstünlüğünü pekiştiren deniz savaşı hangisidir?', options: ['Preveze Deniz Muharebesi', 'Cerbe Deniz Savaşı', 'İnebahtı Deniz Savaşı', 'Çeşme Baskını'], correctAnswer: 0 },
    { id: 'gk-110', category: 'Genel Kültür', question: 'Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü\'nün (UNESCO) genel merkezi hangi şehirdedir?', options: ['New York', 'Londra', 'Paris', 'Cenevre'], correctAnswer: 2 },

    // --- Mevzuat (10 Soru) ---
    { id: 'mev-101', category: 'Mevzuat', question: '657 sayılı Kanuna göre, memurlara yıllık izinlerini kullanma onayı vermeye yetkili amir kimdir?', options: ['Atamaya yetkili amir', 'Disiplin Amiri', 'Mülki İdare Amiri', 'İzin vermeye yetkili kılındıkları amirler'], correctAnswer: 3 },
    { id: 'mev-102', category: 'Mevzuat', question: '1982 Anayasası\'na göre, kanun tasarı veya tekliflerini Meclise sunmaya yetkili organ hangisidir?', options: ['Cumhurbaşkanı', 'Bakanlar Kurulu', 'Milletvekilleri', 'Cumhurbaşkanı Yardımcıları'], correctAnswer: 2 },
    { id: 'mev-103', category: 'Mevzuat', question: '4483 sayılı Kanuna göre, Büyükşehir Belediye Başkanları hakkında soruşturma iznini vermeye yetkili merci kimdir?', options: ['İçişleri Bakanı', 'Vali', 'Cumhurbaşkanı', 'Cumhuriyet Başsavcısı'], correctAnswer: 0 },
    { id: 'mev-104', category: 'Mevzuat', question: '1739 sayılı Milli Eğitim Temel Kanunu\'na göre, eğitim kurumlarının dil, ırk, cinsiyet, engellilik ve din ayırımı gözetilmeksizin herkese açık olması hangi ilkeye dayanır?', options: ['Karma Eğitim', 'Genellik ve Eşitlik', 'Eğitim Hakkı', 'Fırsat İmkân Eşitliği'], correctAnswer: 1 },
    { id: 'mev-105', category: 'Mevzuat', question: '222 sayılı İlköğretim ve Kanunu\'na göre, mecburi ilköğretim çağı hangi yaş grubunu kapsar?', options: ['5-13', '6-13', '6-14', '7-14'], correctAnswer: 2 },
    { id: 'mev-106', category: 'Mevzuat', question: '657 sayılı Kanuna göre, aylıktan kesme cezası alan bir memur kaç yıl boyunca daire başkanı veya üstü görevlere atanamaz?', options: ['3 yıl', '5 yıl', '7 yıl', '10 yıl'], correctAnswer: 1 },
    { id: 'mev-107', category: 'Mevzuat', question: '5442 Sayılı İl İdaresi Kanununa göre illerin idaresi yetki genişliği ve hangi esasa dayanır?', options: ['Yerinden yönetim', 'Hukukun üstünlüğü', 'Ademi merkeziyet', 'Merkezden yönetim'], correctAnswer: 0 },
    { id: 'mev-108', category: 'Mevzuat', question: '4483 sayılı Kanuna göre soruşturma izni kararına itiraz süresi, kararın tebliğinden itibaren kaç gündür?', options: ['5', '7', '10', '15'], correctAnswer: 2 },
    { id: 'mev-109', category: 'Mevzuat', question: '5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu\'na göre bütçe kesin hesap kanun teklifini TBMM\'ye kim sunar?', options: ['Maliye Bakanı', 'Sayıştay Başkanı', 'Cumhurbaşkanı', 'Plan ve Bütçe Komisyonu Başkanı'], correctAnswer: 2 },
    { id: 'mev-110', category: 'Mevzuat', question: '1 sayılı Cumhurbaşkanlığı Kararnamesine göre MEB Teftiş Kurulu Başkanlığı kime doğrudan bağlıdır?', options: ['Cumhurbaşkanı', 'Bakan', 'Bakan Yardımcısı', 'Personel Genel Müdürlüğü'], correctAnswer: 1 },

    // --- Eğitim Bilimleri (10 Soru) ---
    { id: 'ed-101', category: 'Eğitim Bilimleri', question: 'Piaget\'nin Bilişsel Gelişim Kuramına göre "nesne sürekliliği" hangi dönemde kazanılır?', options: ['Duyu-Motor Dönemi', 'İşlem Öncesi Dönem', 'Somut İşlemler Dönemi', 'Soyut İşlemler Dönemi'], correctAnswer: 0 },
    { id: 'ed-102', category: 'Eğitim Bilimleri', question: 'Davranışçı kuramlardan Edimsel Koşullanma\'nın kurucusu ve "Skinner Kutusu" deneyini geliştiren bilim insanı kimdir?', options: ['Ivan Pavlov', 'John B. Watson', 'B.F. Skinner', 'Edward Thorndike'], correctAnswer: 2 },
    { id: 'ed-103', category: 'Eğitim Bilimleri', question: 'Bir öğretmenin öğrencilerine öğreteceği konuyla ilgili önceki derslerde öğrendiklerini hatırlatması, Gagne\'nin hangi öğretim durumuna denk gelir?', options: ['Dikkat çekme', 'Hedeften haberdar etme', 'Ön öğrenmeleri hatırlatma', 'Materyali sunma'], correctAnswer: 2 },
    { id: 'ed-104', category: 'Eğitim Bilimleri', question: 'Kohlberg\'in Ahlaki Gelişim Kuramında "Kanun ve Düzen" eğilimi hangi düzeye aittir?', options: ['Gelenek Öncesi', 'Geleneksel', 'Gelenek Sonrası', 'Evrensel'], correctAnswer: 1 },
    { id: 'ed-105', category: 'Eğitim Bilimleri', question: 'Ölçme araçlarının hatalardan -tesadüfi hatalar- arınık olma (kararlılık, tutarlılık, duyarlılık) derecesine ne ad verilir?', options: ['Geçerlik', 'Güvenirlik', 'Objektiflik', 'Kullanışlılık'], correctAnswer: 1 },
    { id: 'ed-106', category: 'Eğitim Bilimleri', question: 'Program Geliştirme sürecinin aşamaları arasında yer alan ve programın etkililiğine karar verilen boyut hangisidir?', options: ['Hedef', 'İçerik', 'Eğitim Durumları', 'Değerlendirme'], correctAnswer: 3 },
    { id: 'ed-107', category: 'Eğitim Bilimleri', question: 'Sınıf yönetiminde "Kounin" tarafından ortaya atılan, öğretmenin sınıftaki her şeyden haberdar olması ve bunu hissettirmesi durumuna ne denir?', options: ['Dalga Etkisi', 'Gözlerin Arkada Olması (Withitness)', 'Pürüzsüzlük', 'Aktivite Akışı'], correctAnswer: 1 },
    { id: 'ed-108', category: 'Eğitim Bilimleri', question: 'Erikson\'un Psikososyal Gelişim Teorisine göre, ergenlik (12-18 yaş) dönemindeki ana kriz/çatışma hangisidir?', options: ['Temel Güvene karşı Güvensizlik', 'Girişimciliğe karşı Suçluluk', 'Kimlik Kazanımına karşı Rol Karmaşası', 'Yakınlığa karşı Yalıtılmışlık'], correctAnswer: 2 },
    { id: 'ed-109', category: 'Eğitim Bilimleri', question: 'Bir sınavda çok zor veya çok kolay soruların bulunması en çok hangi özelliği düşürür?', options: ['Kapsam geçerliğini', 'Madde ayırt ediciliğini', 'Güvenirliği', 'Yordama geçerliğini'], correctAnswer: 1 },
    { id: 'ed-110', category: 'Eğitim Bilimleri', question: 'Öğrenci kişilik hizmetlerinden, bireyin kendini ve çevresindeki olanakları tanımasına yardımcı olan sistemli ve profesyonel hizmetlere ne ad verilir?', options: ['Özel Eğitim', 'Sosyal Yardım', 'Rehberlik', 'Sağlık Hizmetleri'], correctAnswer: 2 },

    // --- İnkılap Tarihi (10 Soru) ---
    { id: 'ink-101', category: 'İnkılap Tarihi', question: 'Mustafa Kemal Paşa\'nın I. Dünya Savaşı\'nda savaştığı cepheler sırasıyla hangileridir?', options: ['Çanakkale - Kafkas - Suriye/Filistin', 'Kafkas - Çanakkale - Suriye/Filistin', 'Suriye/Filistin - Çanakkale - Kafkas', 'Çanakkale - Suriye/Filistin - Kanal'], correctAnswer: 0 },
    { id: 'ink-102', category: 'İnkılap Tarihi', question: 'Misak-ı Milli nerede kabul edilmiştir?', options: ['Erzurum Kongresi', 'Sivas Kongresi', 'Son Osmanlı Mebusan Meclisi', 'I. TBMM'], correctAnswer: 2 },
    { id: 'ink-103', category: 'İnkılap Tarihi', question: 'TBMM tarafından saltanatın kaldırılması hangi tarihe denk gelir?', options: ['23 Nisan 1920', '1 Kasım 1922', '29 Ekim 1923', '3 Mart 1924'], correctAnswer: 1 },
    { id: 'ink-104', category: 'İnkılap Tarihi', question: 'Sevr Antlaşması\'nı imzalayan ve TBMM tarafından vatan haini ilan edilen heyetin adı nedir?', options: ['Temsil Heyeti', 'Saltanat Şurası', 'Vahdettin Heyeti', 'Damat Ferit Paşa Hükümeti Temsilcileri'], correctAnswer: 1 },
    { id: 'ink-105', category: 'İnkılap Tarihi', question: 'Atatürk\'ün naaşı Anıtkabir\'e taşınmadan önce nerede asıl istirahatgahına kadar bekletilmiştir?', options: ['Dolmabahçe Sarayı', 'Etnografya Müzesi', 'TBMM Bahçesi', 'Çankaya Köşkü'], correctAnswer: 1 },
    { id: 'ink-106', category: 'İnkılap Tarihi', question: '"Medeni Kanun"un İsviçre\'den örnek alınarak kabul edilmesi hangi ilkeyle doğrudan ilişkilidir?', options: ['Devletçilik', 'Milliyetçilik', 'Laiklik', 'Halkçılık'], correctAnswer: 2 },
    { id: 'ink-107', category: 'İnkılap Tarihi', question: 'Montrö Boğazlar Sözleşmesi hangi yıl imzalanarak Türkiye\'nin boğazlar üzerindeki kesin egemenliğini sağlamıştır?', options: ['1923', '1926', '1932', '1936'], correctAnswer: 3 },
    { id: 'ink-108', category: 'İnkılap Tarihi', question: 'Terakkiperver Cumhuriyet Fırkası\'nın kapatılmasına neden olan gelişme hangisidir?', options: ['Menemen Olayı', 'Şeyh Sait İsyanı', 'İzmir Suikastı Girişimi', 'Balkan Antantı'], correctAnswer: 1 },
    { id: 'ink-109', category: 'İnkılap Tarihi', question: 'Hatay, Türkiye Cumhuriyeti\'ne (Anavatan\'a) hangi yıl katılmıştır?', options: ['1936', '1937', '1938', '1939'], correctAnswer: 3 },
    { id: 'ink-110', category: 'İnkılap Tarihi', question: 'Balkan Antantı hangi devletler arasında imzalanmıştır?', options: ['Türkiye, Yunanistan, Yugoslavya, Romanya', 'Türkiye, İtalya, Yunanistan, Bulgaristan', 'Türkiye, İngiltere, Fransa, Yunanistan', 'Türkiye, İran, Irak, Afganistan'], correctAnswer: 0 },

    // --- Türkiye Yüzyılı Maarif Modeli (10 Soru) ---
    { id: 'tm-101', category: 'Türkiye Yüzyılı', question: 'Türkiye Yüzyılı Maarif Modeli\'nin odağındaki insan modelinin sıfatı aşağıdakilerden hangisidir?', options: ['Salt akademik donanımlı insan', 'Erdemli insan', 'Yalnızca yetkin insan', 'Yetkin ve Erdemli insan'], correctAnswer: 3 },
    { id: 'tm-102', category: 'Türkiye Yüzyılı', question: 'Maarif Modeli\'nde öğrencilerin ilgi alanları, farklı zeka türleri ve mizaçları hesaba katılarak hangi esnekleştirme modeli benimsenir?', options: ['Ayrıştırma', 'Farklılaştırma (Zenginleştirme, Destekleme)', 'Standardizasyon', 'Tek tip müfredat'], correctAnswer: 1 },
    { id: 'tm-103', category: 'Türkiye Yüzyılı', question: 'Yeni modele göre, okul dışı öğrenme ortamlarının (müze, bilim merkezi, doğa okulları vb.) öğrenme sürecine dâhil edilmesinin temel amacı nedir?', options: ['Ders saatinden tasarruf etmek', 'Öğretmenlerin yükünü azaltmak', 'Öğrenmeyi zenginleştirmek ve hayatla ilişkilendirmek', 'Binadaki fiziksel alan yetersizliği'], correctAnswer: 2 },
    { id: 'tm-104', category: 'Türkiye Yüzyılı', question: 'Modelin dayandığı Temel İlkeler çerçevesinde "kültürel mirası aktarmak ve aynı zamanda yeniliğe açık olmak" olarak nitelendirilebilecek anlayışın adı nedir?', options: ['Sadece geleneksellik', 'Radikal dönüşüm', 'Köklerden Geleceğe anlayışı', 'Statüko'], correctAnswer: 2 },
    { id: 'tm-105', category: 'Türkiye Yüzyılı', question: 'Maarif Modeli\'ne göre "Beceri" odaklı programın ana ekseni aşağıdakilerden hangisidir?', options: ['Bilgi yığınını depolama', 'Öğrencinin bildiğini eyleme ve üretime dönüştürmesi', 'Sistematik ezber tekrarı', 'Hızlı test çözme tekniği kazandırma'], correctAnswer: 1 },
    { id: 'tm-106', category: 'Türkiye Yüzyılı', question: 'Türkiye Yüzyılı Maarif Modeli\'nde yer alan değerlerin öğretiminde öğretmenin başlıca görevi nedir?', options: ['Değerleri tahtaya yazıp ezberletmek', 'Değerlere uygun davranışları model olmak', 'Değerler için ayrı bir sınav puanlaması yapmak', 'Değerler eğitimini sadece velilere devretmek'], correctAnswer: 1 },
    { id: 'tm-107', category: 'Türkiye Yüzyılı', question: 'Beceriler çerçevesinde öğrencilere "ÖzYönetim" becerisi kazandırılmasında hedeflenen en önemli çıktı nedir?', options: ['Öğrencinin kendi öğrenme sürecinin sorumluluğunu üstlenmesi', 'Öğretmenin emirlerini eksiksiz yerine getirmesi', 'Bütün zamanını sadece ders çalışarak geçirmesi', 'Okul kurallarını ezberlemesi'], correctAnswer: 0 },
    { id: 'tm-108', category: 'Türkiye Yüzyılı', question: 'Maarif Modeli, "sürdürülebilir kalkınma ve çevre okuryazarlığı" bilincini hangi vizyon çerçevesinde güçlendirir?', options: ['Akademik başarı puanı sağlama', 'Dünyayı salt tüketim nesnesi olarak görmeme, emanet bilinci', 'Gelecekte kârlı işler kurma', 'Sadece yeşil alan tasarlama'], correctAnswer: 1 },
    { id: 'tm-109', category: 'Türkiye Yüzyılı', question: 'Öğretici metinlerin incelenmesi sırasında öğrencilerin edineceği "Sosyal ve Duygusal Öğrenme" becerileri Modelde nasıl kurgulanmıştır?', options: ['Sadece rehberlik dersinde izole aktarılır', 'Ayrık bir ünite olarak ders kitaplarının sonunda yer alır', 'Müfredat kazanımlarıyla sarmal biçimde, örtük (disiplinler arası) olarak işlenir', 'Sadece projelerde uygulanır'], correctAnswer: 2 },
    { id: 'tm-110', category: 'Türkiye Yüzyılı', question: 'Yeni modelde ebeveyn (aile) rolü nasıl tanımlanmıştır?', options: ['Sadece maddi destek sağlayıcı', 'Disiplin uygulayıcı', 'Eğitim sürecinin doğal paydaşı ve iş birlikçisi', 'Okul sorunlarından tamamen bağımsız kişi'], correctAnswer: 2 },

    // ---- 100 SORULUK YENİ PAKET (BÖLÜM 2 - Kalan 50 Soru) ----

    // --- Genel Kültür (10 Soru) ---
    { id: 'gk-111', category: 'Genel Kültür', question: 'Dünyanın yedi harikasından biri olan ve günümüzde sadece kalıntıları bulunan Artemis Tapınağı hangi antik kentte inşa edilmiştir?', options: ['Efes', 'Truva', 'Bergama', 'Milet'], correctAnswer: 0 },
    { id: 'gk-112', category: 'Genel Kültür', question: '"Mabeyinci", "Sır Katibi" gibi unvanlarla da bilinen, Osmanlı\'da padişahın resmi yazışmalarını idare eden görevli kimdir?', options: ['Defterdar', 'Nişancı', 'Kazasker', 'Şeyhülislam'], correctAnswer: 1 },
    { id: 'gk-113', category: 'Genel Kültür', question: 'Güneş sistemindeki en büyük gezegen aşağıdakilerden hangisidir?', options: ['Mars', 'Venüs', 'Jüpiter', 'Satürn'], correctAnswer: 2 },
    { id: 'gk-114', category: 'Genel Kültür', question: 'Tarihte bilinen ilk yazılı antlaşma olan Kadeş Antlaşması, Mısırlılar ile hangi medeniyet arasında imzalanmıştır?', options: ['Sümerler', 'Hititler', 'Asurlar', 'Babiller'], correctAnswer: 1 },
    { id: 'gk-115', category: 'Genel Kültür', question: 'Türkiye\'nin en derin gölü aşağıdakilerden hangisidir?', options: ['Tuz Gölü', 'Van Gölü', 'Salda Gölü', 'Çıldır Gölü'], correctAnswer: 1 },
    { id: 'gk-116', category: 'Genel Kültür', question: 'Kutup yıldızı (Polaris) hangi takımyıldızının içinde yer alır?', options: ['Büyükayı', 'Küçükayı', 'Orion (Avcı)', 'Kraliçe (Cassiopeia)'], correctAnswer: 1 },
    { id: 'gk-117', category: 'Genel Kültür', question: '"Sanat içindir" anlayışından ziyade "Toplum için sanat" anlayışını benimseyen ve "Vatan Şairi" olarak ünlenen Tanzimat dönemi yazarımız kimdir?', options: ['Namık Kemal', 'Şinasi', 'Ziya Paşa', 'Tevfik Fikret'], correctAnswer: 0 },
    { id: 'gk-118', category: 'Genel Kültür', question: 'DNA\'nın çift sarmal yapısını keşfederek Nobel Ödülü kazanan bilim insanları hangileridir?', options: ['Albert Einstein ve Max Planck', 'James Watson ve Francis Crick', 'Marie Curie ve Pierre Curie', 'Isaac Newton ve Galileo Galilei'], correctAnswer: 1 },
    { id: 'gk-119', category: 'Genel Kültür', question: 'Picasso\'nun en ünlü eserlerinden biri olan ve İspanya İç Savaşı sırasındaki bir bombalamayı anlatan tablosunun adı nedir?', options: ['Yıldızlı Gece', 'Mona Lisa', 'Guernica', 'Çığlık'], correctAnswer: 2 },
    { id: 'gk-120', category: 'Genel Kültür', question: 'Günümüzde Türkiye sınırları içinde yer alan ve "Medeniyetlerin Beşiği" olarak anılan Mezopotamya\'nın iki önemli nehri hangileridir?', options: ['Kızılırmak ve Yeşilırmak', 'Fırat ve Dicle', 'Seyhan ve Ceyhan', 'Gediz ve Büyük Menderes'], correctAnswer: 1 },

    // --- Mevzuat (10 Soru) ---
    { id: 'mev-111', category: 'Mevzuat', question: '657 sayılı Kanuna göre, "Uyarma" cezası alan bir memur bu cezanın özlük dosyasından silinmesi için kaç yıl sonra atamaya yetkili amire başvurabilir?', options: ['3', '5', '7', '10'], correctAnswer: 1 },
    { id: 'mev-112', category: 'Mevzuat', question: '1982 Anayasası\'na göre, Olağanüstü Hal (OHAL) kararı verme yetkisi kime aittir?', options: ['Türkiye Büyük Millet Meclisi (TBMM)', 'Milli Güvenlik Kurulu (MGK)', 'Cumhurbaşkanı', 'İçişleri Bakanı'], correctAnswer: 2 },
    { id: 'mev-113', category: 'Mevzuat', question: '1739 sayılı Milli Eğitim Temel Kanunu\'na göre, ilköğretim görmek her Türk vatandaşı için zorunludur ve Devlet okullarında parasızdır. Bu durum hangi temel ilke ile ifade edilir?', options: ['Eğitim Hakkı', 'Yöneltme', 'Fırsat İmkân Eşitliği', 'Sürekli Eğitim'], correctAnswer: 0 },
    { id: 'mev-114', category: 'Mevzuat', question: '4483 sayılı Kanuna göre, Merkez ilçelerdeki memurlar hakkında soruşturma izni verme yetkisi kime aittir?', options: ['Kaymakam', 'Vali', 'İlgili Bakanlık', 'Belediye Başkanı'], correctAnswer: 1 },
    { id: 'mev-115', category: 'Mevzuat', question: '1 sayılı Cumhurbaşkanlığı Kararnamesine göre, yurt dışında yaşayan vatandaşların eğitim ve öğretim hizmetlerini planlamak ve koordine etmek hangi genel müdürlüğün görevidir?', options: ['Avrupa Birliği ve Dış İlişkiler Genel Müdürlüğü', 'Yükseköğretim ve Yurt Dışı Eğitim Genel Müdürlüğü', 'Hayat Boyu Öğrenme Genel Müdürlüğü', 'Özel Eğitim ve Rehberlik Hizmetleri Genel Müdürlüğü'], correctAnswer: 1 },
    { id: 'mev-116', category: 'Mevzuat', question: '5442 Sayılı İl İdaresi Kanununa göre, ilçenin genel idaresinden ve gidişinden sorumlu olan en yüksek mülki amir kimdir?', options: ['İlçe Jandarma Komutanı', 'Kaymakam', 'Belediye Başkanı', 'İlçe Emniyet Müdürü'], correctAnswer: 1 },
    { id: 'mev-117', category: 'Mevzuat', question: '222 sayılı İlköğretim ve Eğitim Kanunu\'na göre, mecburi ilköğretim çağında olup da yurt dışında bulunan çocukların öğrenim durumları kimler tarafından takip edilir?', options: ['Büyükelçilikler veya Konsolosluklar (Dış temsilcilikler)', 'Sadece Milli Eğitim Bakanlığı', 'İçişleri Bakanlığı', 'Yerel muhtarlıklar'], correctAnswer: 0 },
    { id: 'mev-118', category: 'Mevzuat', question: '657 sayılı Devlet Memurları Kanunu\'na göre "Devlet memurluğu" ile ilgili "Liyakat" ilkesi neyi ifade eder?', options: ['Memurların belirli sınıflara ayrılmasını', 'Memurluğa giriş ve ilerlemede yetenek ve başarının esas alınmasını', 'Memurların emeklilik haklarını güvence altına almayı', 'Memurların sendikaya üye olabilme hakkını'], correctAnswer: 1 },
    { id: 'mev-119', category: 'Mevzuat', question: '1982 Anayasası\'na göre, Anayasa Mahkemesi üyelerinin görev süresi kaç yıldır?', options: ['9', '10', '12', '15'], correctAnswer: 2 },
    { id: 'mev-120', category: 'Mevzuat', question: '4483 sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun kapsamında hazırlanan ön inceleme raporu kime sunulur?', options: ['Soruşturma izni vermeye yetkili mercie', 'Doğrudan Cumhuriyet Başsavcılığına', 'Bölge İdare Mahkemesine', 'Danıştaya'], correctAnswer: 0 },

    // --- Eğitim Bilimleri (10 Soru) ---
    { id: 'ed-111', category: 'Eğitim Bilimleri', question: 'Bireylerin sadece dışarıdan gözlenebilen ve ölçülebilen tepkilerinin (davranışlarının) incelenmesi gerektiğini savunan psikoloji ekolü hangisidir?', options: ['Psikanaliz', 'İnsancıl (Hümanistik)', 'Davranışçılık', 'Bilişsel Ekol'], correctAnswer: 2 },
    { id: 'ed-112', category: 'Eğitim Bilimleri', question: 'Pavlov\'un klasik koşullanma deneyinde, zilin başlangıçta köpek için hiçbir anlam ifade etmemesi nedeniyle zilin durumunu açıklayan kavram nedir?', options: ['Koşullu Uyarıcı', 'Koşulsuz Uyarıcı', 'Nötr Uyarıcı', 'Pekiştireç'], correctAnswer: 2 },
    { id: 'ed-113', category: 'Eğitim Bilimleri', question: 'Tam Öğrenme Modeli\'nin kurucusu kimdir ve bu modelin temel varsayımı nedir?', options: ['Skinner - Sık tekrarlarla herkes öğrenir', 'Bloom - İhtiyaç duyulan zaman ve ek yardımlar (koşullar) sağlanırsa hemen hemen herkes öğrenebilir', 'Gagne - Öğrenme aşamalar şeklinde gerçekleşir', 'Bruner - Öğrenciler bilgiyi kendileri keşfetmelidir'], correctAnswer: 1 },
    { id: 'ed-114', category: 'Eğitim Bilimleri', question: 'Bir testin, ölçmek istediği özelliği ölçüp ölçmediğini yani amacına hizmet etme derecesini belirten özellik hangisidir?', options: ['Güvenirlik', 'Objektiflik', 'Geçerlik', 'Kullanışlılık'], correctAnswer: 2 },
    { id: 'ed-115', category: 'Eğitim Bilimleri', question: 'Derse başlarken öğrencilere bir fıkra anlatmak, görsel bir materyal sunmak veya güncel bir olayı paylaşmak öğretim durumlarından hangisine örnektir?', options: ['Dikkat çekme', 'Gözden geçirme', 'Geçiş', 'Özetleme'], correctAnswer: 0 },
    { id: 'ed-116', category: 'Eğitim Bilimleri', question: 'Çoklu Zeka Kuramı\'nın yaratıcısı ve bireylerin tek bir zeka türüne sahip olmadığını savunan kuramcı kimdir?', options: ['Jean Piaget', 'Howard Gardner', 'Albert Bandura', 'Lev Vygotsky'], correctAnswer: 1 },
    { id: 'ed-117', category: 'Eğitim Bilimleri', question: 'Rehberlikte bireyin kendi kendini yönetebilmesi, karar verebilmesi ve gizil güçlerini geliştirebilmesi olarak tanımlanan nihai hedef nedir?', options: ['Kendini gerçekleştirme', 'Topluma uyum', 'Meslek seçimi', 'Akademik üstünlük'], correctAnswer: 0 },
    { id: 'ed-118', category: 'Eğitim Bilimleri', question: 'Sınıf yönetiminde istenmeyen davranış karşısında öğretmenin ilk başvurması gereken en az tepkisel yöntem hangisidir?', options: ['Ceza vermek', 'Rehberlik servisine göndermek', 'Sözlü uyarıda bulunmak', 'Görmezden gelmek'], correctAnswer: 3 },
    { id: 'ed-119', category: 'Eğitim Bilimleri', question: 'Buluş Yoluyla Öğretim (Bruner) ile ilgili hangisi söylenemez?', options: ['Öğrenci aktif, öğretmen rehberdir', 'Öğretmen ilke ve genellemeleri hazır olarak verir', 'Tümevarım yöntemi ağırlıklı kullanılır', 'Sezgisel düşünme desteklenir'], correctAnswer: 1 },
    { id: 'ed-120', category: 'Eğitim Bilimleri', question: 'Madde güçlük indeksi 0.10 olarak hesaplanan bir soru için ne söylenebilir?', options: ['Çok zordur', 'Orta güçlüktedir', 'Çok kolaydır', 'Ayırt ediciliği çok yüksektir'], correctAnswer: 0 },

    // --- İnkılap Tarihi (10 Soru) ---
    { id: 'ink-111', category: 'İnkılap Tarihi', question: 'I. Dünya Savaşı sonrasında, İtilaf Devletlerinin Osmanlı İmparatorluğunu kendi aralarında paylaşmak için yaptıkları gizli antlaşmalardan biri olan ve Ortadoğu\'nun sınırlarını (İngiltere/Fransa) belirleyen antlaşma hangisidir?', options: ['Londra Antlaşması', 'Sykes-Picot Antlaşması', 'Mac-Mahon Antlaşması', 'Brest-Litovsk Antlaşması'], correctAnswer: 1 },
    { id: 'ink-112', category: 'İnkılap Tarihi', question: 'Milli Mücadele Döneminde "Manda ve Himaye" fikrinin kesin ve son olarak reddedildiği yer neresidir?', options: ['Amasya Görüşmeleri', 'Erzurum Kongresi', 'Sivas Kongresi', 'Misak-ı Milli Kararları'], correctAnswer: 2 },
    { id: 'ink-113', category: 'İnkılap Tarihi', question: 'Düzenli ordunun Batı Cephesinde Yunanlılara karşı kazandığı ilk askeri zafer hangisidir?', options: ['I. İnönü Muharebesi', 'Sakarya Meydan Muharebesi', 'Başkomutanlık Meydan Muharebesi', 'İkinci İnönü Muharebesi'], correctAnswer: 0 },
    { id: 'ink-114', category: 'İnkılap Tarihi', question: 'Aşar (Öşür) vergisinin kaldırılması, Atatürk ilkelerinden dördüyle de dolaylı ilişkili olsa da en doğrudan hangi ilkeyle ilgilidir?', options: ['Laiklik', 'Halkçılık', 'Devletçilik', 'Cumhuriyetçilik'], correctAnswer: 1 },
    { id: 'ink-115', category: 'İnkılap Tarihi', question: 'Cumhuriyet döneminde eğitim ve öğretimde birliği sağlamak amacıyla 3 Mart 1924\'te çıkarılan yasa hangisidir?', options: ['Maarif Teşkilatı Kanunu', 'Tevhid-i Tedrisat Kanunu', 'Tekke ve Zaviyelerin Kapatılması', 'Yeni Türk Harflerinin Kabulü'], correctAnswer: 1 },
    { id: 'ink-116', category: 'İnkılap Tarihi', question: 'Mustafa Kemal Atatürk\'ün "Benim naçiz vücudum elbet bir gün toprak olacaktır..." sözünü söylediği tarihi olay hangisidir?', options: ['İzmir Suikastı Girişimi', 'Menemen Olayı', 'Şeyh Sait İsyanı', 'Cumhuriyetin İlanı'], correctAnswer: 0 },
    { id: 'ink-117', category: 'İnkılap Tarihi', question: 'Sadabat Paktı (1937) hangi ülkeler arasında imzalanmıştır?', options: ['Türkiye, İran, Irak, Afganistan', 'Türkiye, Suriye, Irak, Mısır', 'Türkiye, SSCB, İran, Afganistan', 'Türkiye, Yunanistan, Yugoslavya, Romanya'], correctAnswer: 0 },
    { id: 'ink-118', category: 'İnkılap Tarihi', question: 'Kadınlara milletvekili seçme ve seçilme hakkı hangi yıl tanınmıştır?', options: ['1930', '1933', '1934', '1935'], correctAnswer: 2 },
    { id: 'ink-119', category: 'İnkılap Tarihi', question: 'Çok partili hayata geçiş denemeleri kapsamında 1930 yılında Ali Fethi Okyar tarafından kurulan parti hangisidir?', options: ['Terakkiperver Cumhuriyet Fırkası', 'Demokrat Parti', 'Serbest Cumhuriyet Fırkası', 'Millet Partisi'], correctAnswer: 2 },
    { id: 'ink-120', category: 'İnkılap Tarihi', question: 'Gazi Mustafa Kemal\'e "Atatürk" soyadı hangi kanun veya kararla verilmiştir?', options: ['TBMM tarafından çıkarılan özel kanunla', 'Soyadı Kanununun kendisinde doğrudan yer alarak', 'Bakanlar Kurulu Kararı ile', 'Referandum sonucuyla'], correctAnswer: 0 },

    // --- Türkiye Yüzyılı Maarif Modeli (10 Soru) ---
    { id: 'tm-111', category: 'Türkiye Yüzyılı', question: 'Türkiye Yüzyılı Maarif Modeli felsefesi çerçevesinde eğitimde bilginin sadece ezberlenmesi değil, hayata geçirilmesi ve karakter inşasıyla birleşmesini ifade eden kavramsal karşılık aşağıdakilerden hangisidir?', options: ['Salt Rasyonalizm', 'Dışsal Motivasyon', 'Çift Kanatlılık (Akıl ve Kalp Bağlantısı)', 'Teknolojik Dönüşüm'], correctAnswer: 2 },
    { id: 'tm-112', category: 'Türkiye Yüzyılı', question: 'Model kapsamında geliştirilen "Bütüncül Gelişim" modelinde zihinsel gelişimin ayrılmaz bir parçası olarak hangi gelişim alanları da eşit ağırlıkta vurgulanmıştır?', options: ['Sadece akademik ve sportif gelişim', 'Sosyal, psikolojik ve ahlaki gelişim', 'Mekanik ve mesleki gelişim', 'Sadece yabancı dil gelişimi'], correctAnswer: 1 },
    { id: 'tm-113', category: 'Türkiye Yüzyılı', question: 'Yeni Maarif Modeli\'ne göre sarmal içerik yapısının avantajı nedir?', options: ['Her konu sadece tek bir yıla sıkıştırılır', 'Dersler yüzeysel geçilir', 'Kavramlar, öğrencinin yaş seviyesine ve hazırbulunuşluğuna göre derinleşerek tekrar ele alınır', 'Konular ezberlenecek tarih sırasına dizilir'], correctAnswer: 2 },
    { id: 'tm-114', category: 'Türkiye Yüzyılı', question: 'Modele göre, öğretimin amacı yalnız öğretmek değil, öğrencinin de bu süreçte aktif öğrenen konumunda olmasıdır. Bu yaklaşımı uygulamak isteyen bir öğretmenden ne tür bir tutum beklenmez?', options: ['Grup çalışmalarına teşvik etmesi', 'Öğrencilere rehberlik etmesi', 'Salt bilgi aktaran bir otorite figürü olması', 'Proje tabanlı etkinlikler yaptırması'], correctAnswer: 2 },
    { id: 'tm-115', category: 'Türkiye Yüzyılı', question: 'Türkiye Yüzyılı Maarif Modeli\'nde yer alan "Değerler Eğitimi" çerçevesinde, kök değerleri doğrudan sınıf ortamında, eylemlere dökerek yansıtma işlevine ne ad verilebilir?', options: ['Erdem - Değer - Eylem çerçevesinin hayat bulması', 'Müfredat dışı sosyal etkinliklerin geçiştirilmesi', 'Sadece rehberlik saatinde kitaptan okunması', 'Dersten düşük not alanlara uygulanması'], correctAnswer: 0 },
    { id: 'tm-116', category: 'Türkiye Yüzyılı', question: 'Modelin Okuryazarlık başlıkları arasında yer alan "Dijital Okuryazarlık", öğrenciye ne tür bir kazanım sağlamayı önceler?', options: ['Sürekli bilgisayar oyunu oynama becerisi', 'Bilgiyi dijital ortamlarda doğru yorumlama, güvenli kullanma ve üretme becerisi', 'Teknolojik aletleri tamir etme becerisi', 'Sosyal medya takipçi sayısını artırma stratejileri'], correctAnswer: 1 },
    { id: 'tm-117', category: 'Türkiye Yüzyılı', question: 'Modelde, okul binalarının mimari yapısından bahçelerine kadar öğrenme ortamlarının nasıl tasarlanması hedeflenir?', options: ['Katı ve asık suratlı disiplin mekânları olarak', 'Esnek, kapsayıcı, öğrenciyi harekete geçiren "yaşayan okullar" olarak', 'Sadece sınavlara girilen resmi salonlar olarak', 'Doğadan tamamen izole edilmiş kapalı kutular olarak'], correctAnswer: 1 },
    { id: 'tm-118', category: 'Türkiye Yüzyılı', question: 'Yeni modelde "Eleştirel Düşünme" yetkinliğini kazanan bir öğrenciden, karşılaştığı bilginin kaynağı ve doğruluğu (teyidi) konusunda nasıl bir tutum sergilemesi beklenir?', options: ['Sorgulamadan doğruluğunu kabul etmesi', 'Birden çok kaynaktan teyit edip kendi süzgecinden geçirmesi', 'Kaynağı sadece popüler olandan seçmesi', 'Asla hiçbir bilgiye güvenmemesi'], correctAnswer: 1 },
    { id: 'tm-119', category: 'Türkiye Yüzyılı', question: 'Türkiye Yüzyılı Maarif Modeli vizyon metninde Türk dilini ve kültürünü korumanın yanı sıra bir diğer önemli "medeniyet kurucusu" nitelik hangisidir?', options: ['Kültürel olarak asimile olmak', 'Sadece geçmişte yaşamak', 'Evrensele kapalı olmak', 'Geleceği inşa etme ve değer üretme iradesi'], correctAnswer: 3 },
    { id: 'tm-120', category: 'Türkiye Yüzyılı', question: 'Maarif Modeli\'nde öğretmenlerin sürekli kendilerini yenilemeleri ve geliştirmeleri ilkesi hangi kurumsal anlayışın bir parçasıdır?', options: ['Sıradanlık', 'Sürekli yenilenme (Hayat Boyu Öğrenme) / Mesleki gelişim', 'Tek tipleştirme', 'Hiyerarşik katılık'], correctAnswer: 1 }
];

export const getDenemeQuestions = (denemeIndex: number): Question[] => {
    const gkPool = mockQuestions.filter(q => q.category === 'Genel Kültür');
    const inkPool = mockQuestions.filter(q => q.category === 'İnkılap Tarihi');
    const tmPool = mockQuestions.filter(q => q.category === 'Türkiye Yüzyılı');
    const edPool = mockQuestions.filter(q => q.category === 'Eğitim Bilimleri');
    const mevPool = mockQuestions.filter(q => q.category === 'Mevzuat');

    // Deterministic random func for consistent mocks per test 
    const seed = denemeIndex * 12345;
    let s = seed;
    const random = () => {
        const x = Math.sin(s++) * 10000;
        return x - Math.floor(x);
    };

    const pick = (pool: Question[], count: number) => {
        const shuffled = [...pool].sort(() => random() - 0.5);
        return shuffled.slice(0, count);
    };

    // Distribution: 
    // Türkiye Yüzyılı Maarif Modeli: 24
    // Genel Kültür: 16
    // Mevzuat: 16
    // T.C. İnkılap Tarihi ve Atatürkçülük: 12
    // Eğitim Bilimleri: 12
    // Toplam: 80

    const tm = pick(tmPool, Math.min(24, tmPool.length));
    const gk = pick(gkPool, Math.min(16, gkPool.length));
    const mev = pick(mevPool, Math.min(16, mevPool.length));
    const ink = pick(inkPool, Math.min(12, inkPool.length));
    const ed = pick(edPool, Math.min(12, edPool.length));

    // Kategorileri karıştırmadan peş peşe ekliyoruz (Bölüm bölüm gelmesi için)
    return [...tm, ...gk, ...mev, ...ink, ...ed];
};
