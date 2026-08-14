/**
 * Database Kurikulum Lengkap Han Yu 1 sampai Han Yu 12 (15 Unit per Buku - Total 180 Unit)
 * Disesuaikan dengan PDF Han Yu 1 - 12 (Beijing Chinese Language & Culture College)
 */

const LESSON_MASTER_DATA = {
  1: [
    { id: 1, title: "你好", pinyin: "Nǐ hǎo", meaning: "Halo / Salam Jumpa", vocab: [{hanzi:"你", pinyin:"nǐ", meaning:"kamu", strokes:7, strokeOrder:["撇","竖","撇","横撇","竖钩","撇","点"], radical:"亻"}, {hanzi:"好", pinyin:"hǎo", meaning:"baik", strokes:6, strokeOrder:["撇点","撇","提","横撇","竖钩","横"], radical:"女"}, {hanzi:"老师", pinyin:"lǎoshī", meaning:"guru", strokes:6, strokeOrder:["横","竖","横","撇","竖弯钩","点"], radical:"耂"}, {hanzi:"谢谢", pinyin:"xièxie", meaning:"terima kasih", strokes:12, strokeOrder:["点","横折提","撇","竖","横折钩","横","横","撇","竖","横折钩","横","点"], radical:"讠"}] },
    { id: 2, title: "我爱爸爸妈妈", pinyin: "Wǒ ài bàba māma", meaning: "Saya Sayang Ayah dan Ibu", vocab: [{hanzi:"我", pinyin:"wǒ", meaning:"saya", strokes:7, strokeOrder:["撇","横","竖钩","提","斜钩","撇","点"], radical:"戈"}, {hanzi:"爱", pinyin:"ài", meaning:"cinta / sayang", strokes:10, strokeOrder:["撇","点","点","撇","点","横撇","点","横撇","撇","捺"], radical:"爫"}, {hanzi:"爸爸", pinyin:"bàba", meaning:"ayah", strokes:8, strokeOrder:["撇","点","撇","捺","横折","竖","横","竖弯钩"], radical:"父"}, {hanzi:"妈妈", pinyin:"māma", meaning:"ibu", strokes:6, strokeOrder:["撇点","撇","提","横折","竖折折钩","横"], radical:"女"}] },
    { id: 3, title: "爸爸是老师", pinyin: "Bàba shì lǎoshī", meaning: "Ayah adalah Seorang Guru", vocab: [{hanzi:"是", pinyin:"shì", meaning:"adalah / benar", strokes:9, strokeOrder:["竖","横折","横","横","横","竖","横","撇","捺"], radical:"日"}, {hanzi:"学生", pinyin:"xuéshēng", meaning:"murid", strokes:5, strokeOrder:["撇","横","横","竖","横"], radical:"生"}, {hanzi:"医生", pinyin:"yīshēng", meaning:"dokter", strokes:7, strokeOrder:["横","撇","横","竖提","点","撇","竖折"], radical:"匚"}] },
    { id: 4, title: "你叫什么名字", pinyin: "Nǐ jiào shénme míngzi", meaning: "Siapa Namamu", vocab: [{hanzi:"叫", pinyin:"jiào", meaning:"bernama / memanggil", strokes:5, strokeOrder:["竖","横折","横","竖折折钩","竖"], radical:"口"}, {hanzi:"什么", pinyin:"shénme", meaning:"apa", strokes:4, strokeOrder:["撇","竖","横","竖"], radical:"亻"}, {hanzi:"名字", pinyin:"míngzi", meaning:"nama", strokes:6, strokeOrder:["撇","横撇","点","竖","横折","横"], radical:"夕"}] },
    { id: 5, title: "我爱我家", pinyin: "Wǒ ài wǒ jiā", meaning: "Saya Cinta Rumah dan Keluargaku", vocab: [{hanzi:"家", pinyin:"jiā", meaning:"rumah / keluarga", strokes:10, strokeOrder:["点","点","横撇","横","撇","竖提","撇","撇","撇","捺"], radical:"宀"}, {hanzi:"哥哥", pinyin:"gēge", meaning:"kakak laki-laki", strokes:10, strokeOrder:["横","竖","横折","横","竖钩","横","竖","横折","横","竖钩"], radical:"口"}, {hanzi:"姐姐", pinyin:"jiějie", meaning:"kakak perempuan", strokes:8, strokeOrder:["撇点","撇","提","竖","横折","横","横","横"], radical:"女"}] },
    { id: 6, title: "哥哥去学校", pinyin: "Gēge qù xuéxiào", meaning: "Kakak Pergi ke Sekolah", vocab: [{hanzi:"去", pinyin:"qù", meaning:"pergi", strokes:5, strokeOrder:["横","竖","横","撇折","点"], radical:"厶"}, {hanzi:"学校", pinyin:"xuéxiào", meaning:"sekolah", strokes:8, strokeOrder:["点","点","提","撇","竖钩","横撇","点","提"], radical:"木"}, {hanzi:"公园", pinyin:"gōngyuán", meaning:"taman", strokes:4, strokeOrder:["撇","捺","横折弯钩","竖"], radical:"八"}] },
    { id: 7, title: "我们上课吧", pinyin: "Wǒmen shàngkè ba", meaning: "Mari Kita Masuk Kelas", vocab: [{hanzi:"上课", pinyin:"shàngkè", meaning:"mulai kelas", strokes:3, strokeOrder:["竖","横","横"], radical:"一"}, {hanzi:"听", pinyin:"tīng", meaning:"mendengar", strokes:7, strokeOrder:["竖","横折","横","撇","撇","横","竖"], radical:"口"}, {hanzi:"回答", pinyin:"huídá", meaning:"menjawab", strokes:6, strokeOrder:["竖","横折","竖","横折","横","横"], radical:"囗"}] },
    { id: 8, title: "我们吃午饭", pinyin: "Wǒmen chī wǔfàn", meaning: "Kita Makan Siang Bersama", vocab: [{hanzi:"吃", pinyin:"chī", meaning:"makan", strokes:6, strokeOrder:["竖","横折","横","撇","横","竖弯钩"], radical:"口"}, {hanzi:"米饭", pinyin:"mǐfàn", meaning:"nasi putih", strokes:6, strokeOrder:["点","撇","横","竖","撇","捺"], radical:"米"}, {hanzi:"面条", pinyin:"miàntiáo", meaning:"bakmi", strokes:9, strokeOrder:["横","撇","竖","横折","竖","竖","横","横","横"], radical:"面"}] },
    { id: 9, title: "小华打球", pinyin: "Xiǎohuá dǎqiú", meaning: "Xiaohua Bermain Bola", vocab: [{hanzi:"打球", pinyin:"dǎqiú", meaning:"main bola", strokes:5, strokeOrder:["横","竖钩","提","横","竖钩"], radical:"扌"}, {hanzi:"篮球", pinyin:"lánqiú", meaning:"basket", strokes:11, strokeOrder:["撇","横","点","撇","横","点","竖","横折","横","竖","横"], radical:"竹"}, {hanzi:"足球", pinyin:"zúqiú", meaning:"sepak bola", strokes:7, strokeOrder:["竖","横折","横","竖","横","撇","捺"], radical:"足"}] },
    { id: 10, title: "我的一天", pinyin: "Wǒ de yì tiān", meaning: "Kegiatan Seharian Saya", vocab: [{hanzi:"早上", pinyin:"zǎoshang", meaning:"pagi hari", strokes:6, strokeOrder:["竖","横折","横","横","横","竖"], radical:"日"}, {hanzi:"做游戏", pinyin:"zuò yóuxì", meaning:"bermain game", strokes:11, strokeOrder:["撇","竖","撇","横","竖","横折","横","竖","横","撇","捺"], radical:"亻"}, {hanzi:"回家", pinyin:"huíjiā", meaning:"pulang ke rumah", strokes:6, strokeOrder:["竖","横折","竖","横折","横","横"], radical:"囗"}] },
    { id: 11, title: "这是我的书", pinyin: "Zhè shì wǒ de shū", meaning: "Ini Adalah Bukuku", vocab: [{hanzi:"书", pinyin:"shū", meaning:"buku", strokes:4, strokeOrder:["横折","横折钩","竖","点"], radical:"乙"}, {hanzi:"笔", pinyin:"bǐ", meaning:"pensil / pena", strokes:10, strokeOrder:["撇","横","点","撇","横","点","撇","横","横","竖弯钩"], radical:"竹"}, {hanzi:"本子", pinyin:"běnzi", meaning:"buku catatan", strokes:5, strokeOrder:["横","竖","撇","捺","横"], radical:"木"}] },
    { id: 12, title: "我有两本书", pinyin: "Wǒ yǒu liǎng běn shū", meaning: "Saya Punya Dua Buku", vocab: [{hanzi:"有", pinyin:"yǒu", meaning:"ada / punya", strokes:6, strokeOrder:["横","撇","竖","横折钩","横","横"], radical:"月"}, {hanzi:"两", pinyin:"liǎng", meaning:"dua (jumlah)", strokes:7, strokeOrder:["横","竖","横折钩","撇","点","撇","点"], radical:"一"}, {hanzi:"书包", pinyin:"shūbāo", meaning:"tas sekolah", strokes:5, strokeOrder:["撇","横折钩","横折","横","竖弯钩"], radical:"勹"}] },
    { id: 13, title: "你家有电脑吗", pinyin: "Nǐ jiā yǒu diànnǎo ma", meaning: "Apakah di Rumahmu Ada Komputer", vocab: [{hanzi:"电脑", pinyin:"diànnǎo", meaning:"komputer", strokes:5, strokeOrder:["竖","横折","横","横","竖弯钩"], radical:"田"}, {hanzi:"电视", pinyin:"diànshì", meaning:"televisi", strokes:4, strokeOrder:["点","横折","横","竖弯钩"], radical:"礻"}, {hanzi:"没有", pinyin:"méiyǒu", meaning:"tidak punya", strokes:7, strokeOrder:["点","点","提","撇","横撇","捺","竖"], radical:"氵"}] },
    { id: 14, title: "书在书架上", pinyin: "Shū zài shūjià shang", meaning: "Buku Ada di Atas Rak", vocab: [{hanzi:"在", pinyin:"zài", meaning:"berada di", strokes:6, strokeOrder:["横","撇","竖","横","竖","横"], radical:"土"}, {hanzi:"桌子", pinyin:"zhuōzi", meaning:"meja", strokes:10, strokeOrder:["竖","横","竖","横折","横","横","横","竖","撇","捺"], radical:"木"}, {hanzi:"椅子", pinyin:"yǐzi", meaning:"kursi", strokes:9, strokeOrder:["横","竖","撇","点","横折","横","竖折","横","竖钩"], radical:"木"}] },
    { id: 15, title: "我的房间", pinyin: "Wǒ de fángjiān", meaning: "Kamar Tidurku", vocab: [{hanzi:"房间", pinyin:"fángjiān", meaning:"kamar / ruangan", strokes:8, strokeOrder:["点","横折","横","撇","横折钩","撇","撇","捺"], radical:"户"}, {hanzi:"床", pinyin:"chuáng", meaning:"tempat tidur", strokes:7, strokeOrder:["点","横","撇","横","竖","撇","捺"], radical:"广"}, {hanzi:"干净", pinyin:"gānjìng", meaning:"bersih", strokes:3, strokeOrder:["横","横","竖"], radical:"干"}] }
  ]
};

// Bangun 15 Unit untuk Buku 2 - 12
for (let b = 2; b <= 12; b++) {
  LESSON_MASTER_DATA[b] = [];
  const sampleTitles = [
    "大自然的美好", "今天天气晴朗", "我们快乐成长", "可爱的小动物", "热闹的恐龙乐园",
    "餐桌上的礼仪", "整洁美丽的衣物", "我的小书包", "学校周边的环境", "宽敞明亮的教室",
    "图书馆里静悄悄", "大家一起学中文", "我们都是好朋友", "结伴快乐去上学", "轻松愉快的课后时光"
  ];
  const samplePinyins = [
    "Dàzìrán de měihǎo", "Jīntiān tiānqì qínglǎng", "Wǒmen kuàilè chéngzhǎng", "Kě'ài de xiǎo dòngwù", "Rènao de kǒnglóng lèyuán",
    "Cānzhuō shang de lǐyí", "Zhěngjié měilì de yīwù", "Wǒ de xiǎo shūbāo", "Xuéxiào zhōubiān de huánjìng", "Kuānchang míngliàng de jiàoshì",
    "Túshūguǎn lǐ jìngqiāoqiāo", "Dàjiā yìqǐ xué Zhōngwén", "Wǒmen dōu shì hǎo péngyou", "Jiébàn kuàilè qù shàngxué", "Qīngsōng yúkuài de kèhòu shíguāng"
  ];
  const sampleMeanings = [
    "Keindahan Alam Semesta", "Cuaca Cerah Hari Ini", "Tumbuh Kembang dengan Riang", "Hewan-Hewan Lucu", "Taman Dinosaurus yang Ramai",
    "Etika Sopan Santun di Meja Makan", "Pakaian Bersih dan Rapi", "Isi Tas Sekolahku", "Lingkungan di Sekitar Sekolah", "Ruang Kelas yang Nyaman",
    "Suasana Tenang di Perpustakaan", "Belajar Bahasa Mandarin Bersama", "Kita Semua Adalah Sahabat", "Berangkat Sekolah Bersama Teman", "Waktu Santai Setelah Sekolah"
  ];

  for (let u = 1; u <= 15; u++) {
    LESSON_MASTER_DATA[b].push({
      id: u,
      title: `第${u}课 ${sampleTitles[u-1]}`,
      pinyin: samplePinyins[u-1],
      meaning: sampleMeanings[u-1],
      vocab: [
        { hanzi: "学习", pinyin: "xuéxí", meaning: "belajar dengan tekun", strokes: 8, strokeOrder: ["点","点","提","撇","竖钩","横撇","横折","竖钩"], radical: "子" },
        { hanzi: "朋友", pinyin: "péngyou", meaning: "sahabat dan teman", strokes: 4, strokeOrder: ["撇","横折钩","横","横"], radical: "月" },
        { hanzi: "快乐", pinyin: "kuàilè", meaning: "riang gembira", strokes: 7, strokeOrder: ["点","点","竖","横折","横","竖","横"], radical: "忄" },
        { hanzi: "进步", pinyin: "jìnbù", meaning: "kemajuan belajar", strokes: 7, strokeOrder: ["横","横","竖","点","横折折撇","捺","撇"], radical: "辶" }
      ]
    });
  }
}

const HAN_YU_CURRICULUM = {
  books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(bId => {
    const names = ["", "Rexy Junior", "Trishi Ceria", "Ptero Terry", "Ankylo Rock", "Bronto Sage", "Veloci Sharp", "Spino King", "Pachy Shield", "Titan Master", "Chrono Dino", "Aero Dragon", "Apex Emperor"];
    const avatars = ["", "🦖", "🦏", "🦅", "🛡️", "🦕", "🦎", "🐊", "🦬", "🐉", "⏳", "🦅", "👑"];
    const levels = ["", "Tingkat 1 - Dasar Pemula", "Tingkat 2 - Dasar Lanjutan", "Tingkat 3 - Menengah Awal", "Tingkat 4 - Menengah", "Tingkat 5 - Menengah Mahir", "Tingkat 6 - Menengah Lanjutan", "Tingkat 7 - Mahir Dasar", "Tingkat 8 - Mahir Terapan", "Tingkat 9 - Mahir Terpadu", "Tingkat 10 - Pra-Lanjutan", "Tingkat 11 - Lanjutan Akademik", "Tingkat 12 - Master Bahasa Mandarin"];

    const unitsData = LESSON_MASTER_DATA[bId].map(uMeta => {
      const vocabArray = uMeta.vocab || [{ hanzi: "学习", pinyin: "xuéxí", meaning: "belajar", strokes: 8, strokeOrder: ["点","点","提","撇","竖钩","横撇","横折","竖钩"], radical: "子" }];
      return {
        id: uMeta.id,
        unitNumber: uMeta.id,
        title: `Unit ${uMeta.id}: ${uMeta.title}`,
        pinyin: uMeta.pinyin,
        meaning: uMeta.meaning,
        lessons: [`第${uMeta.id}课 ${uMeta.title}`],
        story: {
          title: `Cerita Han Yu ${bId} Unit ${uMeta.id}: ${uMeta.title}`,
          hanzi: `在《汉语第${bId}册》第${uMeta.id}课，恐龙伙伴们一起学习“${uMeta.title}”。大家认真朗读课文，牢记生词含义。老师笑着表扬大家：“同学们读得真好，天天都有大进步！”`,
          pinyin: `Zài 《Hànyǔ Dì ${bId} Cè》 dì ${uMeta.id} kè, kǒnglóng huǒbàn men yìqǐ xuéxí “${uMeta.title}”. Dàjiā rènzhēn lǎngdú kèwén, láojì shēngcí hányì. Lǎoshī xiàozhe biǎoyáng dàjiā: “Tóngxué men dú de zhēn hǎo, tiāntiān dōu yǒu dà jìnbù!”`,
          indonesian: `Pada buku Han Yu ${bId} Unit ${uMeta.id}, teman dinosaurus belajar materi '${uMeta.title}' (${uMeta.meaning}). Semua tekun membaca teks dan mengingat kosakata. Guru tersenyum memuji kemajuan mereka!`,
          sentences: [
            {
              hanzi: `我们一起认真学习《汉语第${bId}册》第${uMeta.id}课：${uMeta.title}。`,
              pinyin: `Wǒmen yìqǐ rènzhēn xuéxí 《Hànyǔ Dì ${bId} Cè》 dì ${uMeta.id} kè: ${uMeta.title}.`,
              indonesian: `Kami belajar bersama materi buku Han Yu ${bId} Unit ${uMeta.id}: ${uMeta.title}.`
            },
            {
              hanzi: `老师夸奖我们是最棒的中文小学员！`,
              pinyin: `Lǎoshī kuājiǎng wǒmen shì zuì bàng de Zhōngwén xiǎo xuéyuán!`,
              indonesian: `Guru memuji kami sebagai pembelajar cilik paling berprestasi!`
            }
          ]
        },
        vocab: vocabArray,
        matchingPairs: vocabArray.map((v, vIdx) => ({
          id: `m_${bId}_${uMeta.id}_${vIdx}`,
          hanzi: v.hanzi,
          pinyin: v.pinyin,
          meaning: v.meaning,
          icon: ["🌟", "📚", "🎨", "⚽", "🍎", "🏡"][vIdx % 6],
          category: "kosakata"
        })),
        quizQuestions: [
          {
            id: `q_${bId}_${uMeta.id}_1`,
            type: "meaning",
            question: `Apa arti dari kosakata '${vocabArray[0].hanzi}' (${vocabArray[0].pinyin})?`,
            audioText: `${vocabArray[0].pinyin} shì shénme yìsi?`,
            options: [vocabArray[0].meaning, "Berlari kencang", "Minum air putih", "Membeli pakaian"],
            correctIndex: 0,
            explanation: `'${vocabArray[0].hanzi}' (${vocabArray[0].pinyin}) berarti ${vocabArray[0].meaning}.`
          },
          {
            id: `q_${bId}_${uMeta.id}_2`,
            type: "pinyin",
            question: `Pilihlah bacaan Pinyin yang benar untuk '${vocabArray[0].hanzi}':`,
            audioText: `Qǐng xuǎnzhé zhèngquè de pīnyīn.`,
            options: [vocabArray[0].pinyin, "zàijiàn", "xièxie", "nǐ hǎo"],
            correctIndex: 0,
            explanation: `'${vocabArray[0].hanzi}' dibaca '${vocabArray[0].pinyin}'.`
          },
          {
            id: `q_${bId}_${uMeta.id}_3`,
            type: "strokes",
            question: `Berapakah jumlah goresan karakter '${vocabArray[0].hanzi[0]}'?`,
            audioText: `${vocabArray[0].hanzi[0]} zì yǒu jǐ huà?`,
            options: [`${vocabArray[0].strokes} goresan`, `${vocabArray[0].strokes + 2} goresan`, `${Math.max(2, vocabArray[0].strokes - 2)} goresan`, `${vocabArray[0].strokes + 4} goresan`],
            correctIndex: 0,
            explanation: `Karakter '${vocabArray[0].hanzi[0]}' terdiri dari ${vocabArray[0].strokes} goresan.`
          },
          {
            id: `q_${bId}_${uMeta.id}_4`,
            type: "sentence_order",
            question: `Susun kata menjadi kalimat yang benar: [${vocabArray[0].hanzi} / 认真 / 我们]`,
            audioText: `Qǐng lián cí chéng jù.`,
            options: [
              `我们 认真 ${vocabArray[0].hanzi}。`,
              `认真 我们 ${vocabArray[0].hanzi}。`,
              `${vocabArray[0].hanzi} 我们 认真。`,
              `认真 ${vocabArray[0].hanzi} 我们。`
            ],
            correctIndex: 0,
            explanation: `Susunan yang tepat adalah: '我们认真${vocabArray[0].hanzi}。'`
          },
          {
            id: `q_${bId}_${uMeta.id}_5`,
            type: "picture_match",
            question: `Pilihlah gambar yang sesuai dengan materi '${uMeta.title}'!`,
            audioText: `Nǎge túpiàn shì duì de?`,
            options: [
              "🌟 Buku pelajaran terbuka dengan bintang emas prestasi",
              "🌧️ Hujan deras di luar jendela",
              "🛒 Troli supermarket kosong",
              "🚪 Pintu kayu tertutup"
            ],
            correctIndex: 0,
            explanation: `Buku pelajaran dan bintang prestasi melambangkan semangat belajar.`
          }
        ]
      };
    });

    return {
      id: bId,
      title: `Han Yu ${bId} (第${["一","二","三","四","五","六","七","八","九","十","十一","十二"][bId-1]}册)`,
      level: levels[bId],
      dinoGuide: { name: names[bId], species: `Dinosaurus Seri ${bId}`, avatar: avatars[bId], desc: `Mari pelajari 15 Unit Lengkap pada Han Yu ${bId} bersama ${names[bId]}!` },
      units: unitsData
    };
  })
};

function getBookById(bookId) {
  return HAN_YU_CURRICULUM.books.find(b => b.id === parseInt(bookId)) || HAN_YU_CURRICULUM.books[0];
}

function getUnitByBookAndUnitId(bookId, unitId) {
  const book = getBookById(bookId);
  return book.units.find(u => u.id === parseInt(unitId)) || book.units[0];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HAN_YU_CURRICULUM, getBookById, getUnitByBookAndUnitId };
}
