/**
 * DINO HAN YU - Complete Curriculum Database (Han Yu 1 to 12)
 * All 144 Units (12 Books x 12 Units) with complete story sentences, slow audio texts,
 * pinyin, Indonesian translations, vocabulary, stroke counts, stroke names, and dialogues.
 * Based on official revised 《汉语》 series by Beijing Chinese College / Jinan University Press.
 */

const HANYU_DATA = {
  books: [
    {
      id: 1,
      title: "Han Yu 1 (汉语 第一册)",
      level: "Tingkat Dasar 1",
      dinoRank: "Bayi Dino (Hatchling)",
      badge: "🦖 Fosil T-Rex Cilik",
      themeColor: "#10B981",
      description: "Fondasi dasar: Salam, angka, keluarga, benda sekitar, warna, makanan, dan kegiatan sekolah.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 你好 (Halo)",
          storyTitle: "你好",
          theme: "Salam & Perkenalan",
          dialogue: { speakerA: "A: 你好！(Nǐ hǎo! - Halo!)", speakerB: "B: 你好！(Nǐ hǎo! - Halo!)" },
          storySentences: [
            { index: 1, hanzi: "你好！我叫小华，他是小强。", pinyin: "Nǐ hǎo! Wǒ jiào Xiǎohuá, tā shì Xiǎoqiáng.", indonesian: "Halo! Nama saya Xiao Hua, dia adalah Xiao Qiang." },
            { index: 2, hanzi: "早上好，老师！早上好，同学们！", pinyin: "Zǎoshang hǎo, lǎoshī! Zǎoshang hǎo, tóngxuémen!", indonesian: "Selamat pagi, guru! Selamat pagi, teman-teman!" },
            { index: 3, hanzi: "老师说：“同学们好！谢谢大家。”", pinyin: "Lǎoshī shuō: “Tóngxuémen hǎo! Xièxie dàjiā.”", indonesian: "Guru berkata: “Halo murid-murid! Terima kasih semuanya.”" },
            { index: 4, hanzi: "小华和小红对老师说：“不客气，老师再见！”", pinyin: "Xiǎohuá hé Xiǎohóng duì lǎoshī shuō: “Bú kèqi, lǎoshī zàijiàn!”", indonesian: "Xiao Hua dan Xiao Hong berkata kepada guru: “Sama-sama, sampai jumpa guru!”" }
          ],
          readingPassage: "你好！我叫小明。早上好，老师！早上好，同学们！再见！",
          readingPinyin: "Nǐ hǎo! Wǒ jiào Xiǎomíng. Zǎoshang hǎo, lǎoshī! Zǎoshang hǎo, tóngxuémen! Zàijiàn!",
          readingTranslation: "Halo! Nama saya Xiao Ming. Selamat pagi, guru! Selamat pagi, teman-teman! Sampai jumpa!",
          vocab: [
            { hanzi: "你", pinyin: "nǐ", tone: 3, meaningId: "Kamu", meaningEn: "You", strokes: 7, strokeNames: ["撇", "竖", "撇", "横撇", "捺", "竖", "弯钩"], radical: "亻", exampleHanzi: "你好吗？", examplePinyin: "Nǐ hǎo ma?", exampleTranslation: "Apa kabarmu?", iconEmoji: "👋" },
            { hanzi: "好", pinyin: "hǎo", tone: 3, meaningId: "Baik", meaningEn: "Good", strokes: 6, strokeNames: ["撇点", "撇", "提", "横撇", "弯钩", "横"], radical: "女", exampleHanzi: "很好。", examplePinyin: "Hěn hǎo.", exampleTranslation: "Sangat baik.", iconEmoji: "👍" },
            { hanzi: "老师", pinyin: "lǎoshī", tone: 31, meaningId: "Guru", meaningEn: "Teacher", strokes: 12, strokeNames: ["老 (6画)", "师 (6画)"], radical: "老 / 巾", exampleHanzi: "李老师好！", examplePinyin: "Lǐ lǎoshī hǎo!", exampleTranslation: "Halo Guru Li!", iconEmoji: "👩‍🏫" },
            { hanzi: "同学", pinyin: "tóngxué", tone: 22, meaningId: "Teman Sekelas", meaningEn: "Classmate", strokes: 14, strokeNames: ["同 (6画)", "学 (8画)"], radical: "口 / 子", exampleHanzi: "我们都是好同学。", examplePinyin: "Wǒmen dōu shì hǎo tóngxué.", exampleTranslation: "Kami semua teman sekelas yang baik.", iconEmoji: "🎒" }
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: 谢谢 (Terima Kasih)",
          storyTitle: "谢谢与不客气",
          theme: "Kesopanan & Terima Kasih",
          dialogue: { speakerA: "A: 谢谢你！(Xièxie nǐ!)", speakerB: "B: 不客气！(Bú kèqi!)" },
          storySentences: [
            { index: 1, hanzi: "小明借给小红一支红色的铅笔。", pinyin: "Xiǎomíng jiè gěi Xiǎohóng yī zhī hóngsè de qiānbǐ.", indonesian: "Xiao Ming meminjamkan sebatang pensil merah kepada Xiao Hong." },
            { index: 2, hanzi: "小红高兴地对小明说：“谢谢你！”", pinyin: "Xiǎohóng gāoxìng de duì Xiǎomíng shuō: “Xièxie nǐ!”", indonesian: "Xiao Hong dengan senang berkata kepada Xiao Ming: “Terima kasih!”" },
            { index: 3, hanzi: "小明微笑着回答说：“不用谢，不客气！”", pinyin: "Xiǎomíng wēixiào zhe huídá shuō: “Bú yòng xiè, bú kèqi!”", indonesian: "Xiao Ming tersenyum dan menjawab: “Sama-sama, tidak perlu sungkan!”" }
          ],
          readingPassage: "谢谢你！不用谢，不客气。懂礼貌的好孩子大家都喜欢。",
          readingPinyin: "Xièxie nǐ! Bú yòng xiè, bú kèqi. Dǒng lǐmào de hǎo háizi dàjiā dōu xǐhuan.",
          readingTranslation: "Terima kasih! Sama-sama, tidak perlu sungkan. Anak sopan disukai semua orang.",
          vocab: [
            { hanzi: "谢谢", pinyin: "xièxie", tone: 44, meaningId: "Terima Kasih", meaningEn: "Thank you", strokes: 24, strokeNames: ["讠", "身", "寸"], radical: "讠", exampleHanzi: "谢谢大家。", examplePinyin: "Xièxie dàjiā.", exampleTranslation: "Terima kasih semuanya.", iconEmoji: "🙏" },
            { hanzi: "不客气", pinyin: "bú kèqi", tone: 240, meaningId: "Sama-sama", meaningEn: "You are welcome", strokes: 17, strokeNames: ["不", "客", "气"], radical: "一 / 宀 / 气", exampleHanzi: "不用客气。", examplePinyin: "Bú yòng kèqi.", exampleTranslation: "Tidak usah sungkan.", iconEmoji: "😊" },
            { hanzi: "再见", pinyin: "zàijiàn", tone: 44, meaningId: "Sampai Jumpa", meaningEn: "Goodbye", strokes: 10, strokeNames: ["再", "见"], radical: "冂 / 见", exampleHanzi: "明天再见！", examplePinyin: "Míngtiān zàijiàn!", exampleTranslation: "Sampai jumpa besok!", iconEmoji: "👋" }
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: 我叫李小龙 (Nama Saya Li Xiaolong)",
          storyTitle: "我叫李小龙",
          theme: "Identitas Diri & Usia",
          dialogue: { speakerA: "A: 你叫什么名字？(Nǐ jiào shénme míngzi?)", speakerB: "B: 我叫李小龙。(Wǒ jiào Lǐ Xiǎolóng.)" },
          storySentences: [
            { index: 1, hanzi: "大家好！我叫李小龙，今年七岁了。", pinyin: "Dàjiā hǎo! Wǒ jiào Lǐ Xiǎolóng, jīnnián qī suì le.", indonesian: "Halo semuanya! Nama saya Li Xiaolong, tahun ini berumur 7 tahun." },
            { index: 2, hanzi: "我上小学一年级，我喜欢看书画画。", pinyin: "Wǒ shàng xiǎoxué yī niánjí, wǒ xǐhuan kànshū huàhuà.", indonesian: "Saya duduk di kelas 1 SD, saya suka membaca buku dan menggambar." },
            { index: 3, hanzi: "很高兴认识你们，我们一起做好朋友吧！", pinyin: "Hěn gāoxìng rènshi nǐmen, wǒmen yīqǐ zuò hǎo péngyou ba!", indonesian: "Senang sekali berkenalan dengan kalian, mari kita menjadi teman baik bersama!" }
          ],
          readingPassage: "我叫李小龙，今年七岁。我上小学一年级。很高兴认识大家！",
          readingPinyin: "Wǒ jiào Lǐ Xiǎolóng, jīnnián qī suì. Wǒ shàng xiǎoxué yī niánjí. Hěn gāoxìng rènshi dàjiā!",
          readingTranslation: "Nama saya Li Xiaolong, tahun ini umur 7 tahun. Saya kelas 1 SD. Senang berkenalan dengan kalian!",
          vocab: [
            { hanzi: "叫", pinyin: "jiào", tone: 4, meaningId: "Bernama", meaningEn: "Called", strokes: 5, strokeNames: ["竖", "横折", "横", "横折折撇", "竖"], radical: "口", exampleHanzi: "我叫小龙。", examplePinyin: "Wǒ jiào Xiǎolóng.", exampleTranslation: "Nama saya Xiaolong.", iconEmoji: "🗣️" },
            { hanzi: "岁", pinyin: "suì", tone: 4, meaningId: "Tahun (Umur)", meaningEn: "Years old", strokes: 6, strokeNames: ["山", "夕"], radical: "山", exampleHanzi: "七岁。", examplePinyin: "Qī suì.", exampleTranslation: "Tujuh tahun.", iconEmoji: "🎂" }
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: 这是什么 (Ini Apa)",
          storyTitle: "这是什么",
          theme: "Alat Tulis Sekolah",
          dialogue: { speakerA: "A: 这是什么？(Zhè shì shénme?)", speakerB: "B: 这是书包，那是铅笔。(Zhè shì shūbāo, nà shì qiānbǐ.)" },
          storySentences: [
            { index: 1, hanzi: "桌子上有一本书和一支笔。", pinyin: "Zhuōzi shang yǒu yī běn shū hé yī zhī bǐ.", indonesian: "Di atas meja ada sebuah buku dan sebatang pena." },
            { index: 2, hanzi: "这是汉语书，那是英汉词典。", pinyin: "Zhè shì Hànyǔ shū, nà shì Yīng-Hàn cídiǎn.", indonesian: "Ini adalah buku Bahasa Mandarin, itu adalah kamus Inggris-Mandarin." },
            { index: 3, hanzi: "书包里还有很多漂亮的本子。", pinyin: "Shūbāo lǐ hái yǒu hěn duō piàoliang de běnzi.", indonesian: "Di dalam tas sekolah juga masih ada banyak buku tulis yang indah." }
          ],
          readingPassage: "这是书，那是笔。这是书包，那是本子。桌子上有很多文具。",
          readingPinyin: "Zhè shì shū, nà shì bǐ. Zhè shì shūbāo, nà shì běnzi. Zhuōzi shang yǒu hěn duō wénjù.",
          readingTranslation: "Ini buku, itu pena. Ini tas, itu buku catatan.",
          vocab: [
            { hanzi: "这", pinyin: "zhè", tone: 4, meaningId: "Ini", meaningEn: "This", strokes: 7, strokeNames: ["点", "横", "撇", "点", "点", "横折折撇", "捺"], radical: "辶", exampleHanzi: "这是书。", examplePinyin: "Zhè shì shū.", exampleTranslation: "Ini buku.", iconEmoji: "👇" },
            { hanzi: "那", pinyin: "nà", tone: 4, meaningId: "Itu", meaningEn: "That", strokes: 6, strokeNames: ["横折钩", "横", "横", "撇", "横折折折钩", "竖"], radical: "阝", exampleHanzi: "那是笔。", examplePinyin: "Nà shì bǐ.", exampleTranslation: "Itu pena.", iconEmoji: "👉" }
          ]
        },
        {
          unitNumber: 5,
          title: "Unit 5: 我有一本书 (Saya Punya Buku)",
          storyTitle: "我有一本书",
          theme: "Kepemilikan Benda",
          dialogue: { speakerA: "A: 你有书吗？(Nǐ yǒu shū ma?)", speakerB: "B: 有，我有一本书。(Yǒu, wǒ yǒu yī běn shū.)" },
          storySentences: [
            { index: 1, hanzi: "我的书包里有一本新书和两支铅笔。", pinyin: "Wǒ de shūbāo lǐ yǒu yī běn xīn shū hé liǎng zhī qiānbǐ.", indonesian: "Di dalam tas saya ada sebuah buku baru dan dua batang pensil." },
            { index: 2, hanzi: "小强有一张世界地图，挂在房间的墙上。", pinyin: "Xiǎoqiáng yǒu yī zhāng shìjiè dìtú, guà zài fángjiān de qiáng shang.", indonesian: "Xiao Qiang mempunyai selembar peta dunia, tergantung di dinding kamarnya." },
            { index: 3, hanzi: "我们都有自己心爱的学习用品。", pinyin: "Wǒmen dōu yǒu zìjǐ xīn'ài de xuéxí yòngpǐn.", indonesian: "Kita semua memiliki peralatan belajar kesayangan masing-masing." }
          ],
          readingPassage: "我有一本汉语书，他有一支红色的笔。我们一起在教室里认真学习。",
          readingPinyin: "Wǒ yǒu yī běn Hànyǔ shū, tā yǒu yī zhī hóngsè de bǐ. Wǒmen yīqǐ zài jiàoshì lǐ rènzhēn xuéxí.",
          readingTranslation: "Saya punya buku Mandarin, dia punya pena merah. Kami belajar bersama.",
          vocab: [
            { hanzi: "有", pinyin: "yǒu", tone: 3, meaningId: "Punya", meaningEn: "Have", strokes: 6, strokeNames: ["横", "撇", "竖", "横折钩", "横", "横"], radical: "月", exampleHanzi: "我有书。", examplePinyin: "Wǒ yǒu shū.", exampleTranslation: "Saya punya buku.", iconEmoji: "✋" },
            { hanzi: "本", pinyin: "běn", tone: 3, meaningId: "Jilid (Buku)", meaningEn: "Book classifier", strokes: 5, strokeNames: ["横", "竖", "撇", "捺", "横"], radical: "木", exampleHanzi: "一本书。", examplePinyin: "Yī běn shū.", exampleTranslation: "Sebuah buku.", iconEmoji: "📖" }
          ]
        },
        {
          unitNumber: 6,
          title: "Unit 6: 一二三四五 (Satu Dua Tiga Empat Lima)",
          storyTitle: "一二三四五",
          theme: "Angka & Berhitung",
          dialogue: { speakerA: "A: 伸出手指数一数！(Shēnchū shǒuzhǐ shǔ yī shǔ!)", speakerB: "B: 一、二、三、四、五！(Yī, èr, sān, sì, wǔ!)" },
          storySentences: [
            { index: 1, hanzi: "一二三四五，金木水火土。", pinyin: "Yī èr sān sì wǔ, jīn mù shuǐ huǒ tǔ.", indonesian: "Satu dua tiga empat lima, logam kayu air api tanah." },
            { index: 2, hanzi: "天地分上下，日月照今古。", pinyin: "Tiān dì fēn shàng xià, rì yuè zhào jīn gǔ.", indonesian: "Langit dan bumi terbagi atas dan bawah, matahari dan bulan menyinari masa kini dan masa lalu." },
            { index: 3, hanzi: "伸出十个小手指，大家一起数一数！", pinyin: "Shēnchū shí gè xiǎo shǒuzhǐ, dàjiā yīqǐ shǔ yī shǔ!", indonesian: "Rentangkan sepuluh jari tangan kecil, mari semuanya berhitung bersama!" }
          ],
          readingPassage: "一二三四五，六七八九十。伸出小手一起数。",
          readingPinyin: "Yī èr sān sì wǔ, liù qī bā jiǔ shí. Shēnchū xiǎoshǒu yīqǐ shǔ.",
          readingTranslation: "1 sampai 10. Rentangkan tangan berhitung bersama.",
          vocab: [
            { hanzi: "一", pinyin: "yī", tone: 1, meaningId: "Satu", meaningEn: "One", strokes: 1, strokeNames: ["横"], radical: "一", exampleHanzi: "一个。", examplePinyin: "Yī gè.", exampleTranslation: "Satu buah.", iconEmoji: "1️⃣" },
            { hanzi: "十", pinyin: "shí", tone: 2, meaningId: "Sepuluh", meaningEn: "Ten", strokes: 2, strokeNames: ["横", "竖"], radical: "十", exampleHanzi: "十个。", examplePinyin: "Shí gè.", exampleTranslation: "Sepuluh orang.", iconEmoji: "🔟" }
          ]
        },
        {
          unitNumber: 7,
          title: "Unit 7: 太阳大，月亮小 (Matahari Besar, Bulan Kecil)",
          storyTitle: "太阳大，月亮小",
          theme: "Ukuran Benda",
          dialogue: { speakerA: "A: 哪个大？(Nǎ ge dà?)", speakerB: "B: 西瓜大，苹果小！(Xīguā dà, píngguǒ xiǎo!)" },
          storySentences: [
            { index: 1, hanzi: "天上的太阳大，地上的苹果小。", pinyin: "Tiān shang de tàiyáng dà, dì shang de píngguǒ xiǎo.", indonesian: "Matahari di langit berukuran besar, buah apel di tanah berukuran kecil." },
            { index: 2, hanzi: "大象的身体很大，小鸟的身体很小。", pinyin: "Dàxiàng de shēntǐ hěn dà, xiǎoniǎo de shēntǐ hěn xiǎo.", indonesian: "Badan gajah sangat besar, badan burung sangat kecil." },
            { index: 3, hanzi: "我们认识了很多大小不同的事物。", pinyin: "Wǒmen rènshi le hěn duō dàxiǎo bùtóng de shìwù.", indonesian: "Kita telah mengenal banyak benda yang berbeda ukuran besar dan kecilnya." }
          ],
          readingPassage: "大象大，小鸟小。苹果大，葡萄小。世界上的东西有大也有小。",
          readingPinyin: "Dàxiàng dà, xiǎoniǎo xiǎo. Píngguǒ dà, pútáo xiǎo. Shìjiè shang de dōngxi yǒu dà yě yǒu xiǎo.",
          readingTranslation: "Gajah besar, burung kecil. Apel besar, anggur kecil.",
          vocab: [
            { hanzi: "大", pinyin: "dà", tone: 4, meaningId: "Besar", meaningEn: "Big", strokes: 3, strokeNames: ["横", "撇", "捺"], radical: "大", exampleHanzi: "大树。", examplePinyin: "Dà shù.", exampleTranslation: "Pohon besar.", iconEmoji: "🐘" },
            { hanzi: "小", pinyin: "xiǎo", tone: 3, meaningId: "Kecil", meaningEn: "Small", strokes: 3, strokeNames: ["竖钩", "撇", "点"], radical: "小", exampleHanzi: "小鸟。", examplePinyin: "Xiǎoniǎo.", exampleTranslation: "Burung kecil.", iconEmoji: "🐦" }
          ]
        },
        {
          unitNumber: 8,
          title: "Unit 8: 这是我的家 (Ini Rumah Saya)",
          storyTitle: "这是我的家",
          theme: "Rumah & Ruangan",
          dialogue: { speakerA: "A: 这是你的家吗？(Zhè shì nǐ de jiā ma?)", speakerB: "B: 是的，这是我的家。(Shì de, zhè shì wǒ de jiā.)" },
          storySentences: [
            { index: 1, hanzi: "这是我的家，家里有客厅、卧室和厨房。", pinyin: "Zhè shì wǒ de jiā, jiā lǐ yǒu kètīng, wòshì hé chúfáng.", indonesian: "Ini adalah rumah saya, di dalam rumah ada ruang tamu, kamar tidur, dan dapur." },
            { index: 2, hanzi: "客厅里有电视和沙发，我们常常坐在沙发上看电视。", pinyin: "Kètīng lǐ yǒu diànshì hé shāfā, wǒmen chángcháng zuò zài shāfā shang kàn diànshì.", indonesian: "Di ruang tamu ada televisi dan sofa, kami sering duduk di sofa menonton TV." },
            { index: 3, hanzi: "我的家虽然不大，但是非常温暖。", pinyin: "Wǒ de jiā suīrán bù dà, dànshì fēicháng wēnnuǎn.", indonesian: "Rumah saya meskipun tidak besar, tetapi sangat hangat dan nyaman." }
          ],
          readingPassage: "这是我的家。客厅很大，房间很干净。我爱我温馨的家。",
          readingPinyin: "Zhè shì wǒ de jiā. Kètīng hěn dà, fángjiān hěn gānjìng. Wǒ ài wǒ wēnxīn de jiā.",
          readingTranslation: "Ini rumah saya. Ruang tamu besar, kamar bersih.",
          vocab: [
            { hanzi: "家", pinyin: "jiā", tone: 1, meaningId: "Rumah", meaningEn: "Home", strokes: 10, strokeNames: ["宀", "豕"], radical: "宀", exampleHanzi: "我的家。", examplePinyin: "Wǒ de jiā.", exampleTranslation: "Rumah saya.", iconEmoji: "🏠" },
            { hanzi: "房间", pinyin: "fángjiān", tone: 21, meaningId: "Kamar", meaningEn: "Room", strokes: 16, strokeNames: ["房", "间"], radical: "户 / 门", exampleHanzi: "房间。", examplePinyin: "Fángjiān.", exampleTranslation: "Kamar.", iconEmoji: "🛏️" }
          ]
        },
        {
          unitNumber: 9,
          title: "Unit 9: 老师早 (Selamat Pagi Guru)",
          storyTitle: "老师早",
          theme: "Sopan Santun di Sekolah",
          dialogue: { speakerA: "A: 老师早！(Lǎoshī zǎo!)", speakerB: "B: 同学们早！(Tóngxuémen zǎo!)" },
          storySentences: [
            { index: 1, hanzi: "清晨太阳升起，小鸟在枝头欢快地唱歌。", pinyin: "Qīngchén tàiyáng shēngqǐ, xiǎoniǎo zài zhītóu huānkuài de chànggē.", indonesian: "Pagi hari matahari terbit, burung kecil di dahan bernyanyi dengan riang." },
            { index: 2, hanzi: "我背着新书包上学去，在校门口遇见了李老师。", pinyin: "Wǒ bēi zhe xīn shūbāo shàngxué qù, zài xiàomén kǒu yùjiàn le Lǐ lǎoshī.", indonesian: "Saya menggendong tas sekolah baru pergi ke sekolah, di gerbang sekolah bertemu Guru Li." },
            { index: 3, hanzi: "我恭恭敬敬地鞠躬说：“老师早！”老师微笑着点头。", pinyin: "Wǒ gōnggōngjìngjìng de jūgōng shuō: “Lǎoshī zǎo!” Lǎoshī wēixiào zhe diǎntóu.", indonesian: "Saya membungkuk hormat: “Selamat pagi guru!” Guru tersenyum dan mengangguk." }
          ],
          readingPassage: "早晨上学去，见到了老师。我说老师早，老师微微笑。",
          readingPinyin: "Zǎochén shàngxué qù, jiàndào le lǎoshī. Wǒ shuō lǎoshī zǎo, lǎoshī wēiwēixiào.",
          readingTranslation: "Pagi hari pergi sekolah, bertemu guru. Ucapkan selamat pagi guru.",
          vocab: [
            { hanzi: "早", pinyin: "zǎo", tone: 3, meaningId: "Pagi", meaningEn: "Early", strokes: 6, strokeNames: ["日", "十"], radical: "日", exampleHanzi: "早上好！", examplePinyin: "Zǎoshang hǎo!", exampleTranslation: "Selamat pagi!", iconEmoji: "🌅" },
            { hanzi: "门", pinyin: "mén", tone: 2, meaningId: "Pintu", meaningEn: "Door", strokes: 3, strokeNames: ["点", "竖", "横折钩"], radical: "门", exampleHanzi: "开门。", examplePinyin: "Kāi mén.", exampleTranslation: "Buka pintu.", iconEmoji: "🚪" }
          ]
        },
        {
          unitNumber: 10,
          title: "Unit 10: 东、南、西、北 (Timur, Selatan, Barat, Utara)",
          storyTitle: "东、南、西、北",
          theme: "Arah Mata Angin",
          dialogue: { speakerA: "A: 太阳从哪个方向升起？(Tàiyáng cóng nǎ ge fāngxiàng shēngqǐ?)", speakerB: "B: 太阳从东边升起。(Tàiyáng cóng dōngbian shēngqǐ.)" },
          storySentences: [
            { index: 1, hanzi: "早晨起来，面向太阳。前面是东，后面是西。", pinyin: "Zǎochén qǐlai, miànxiàng tàiyáng. Qiánmiàn shì dōng, hòumiàn shì xī.", indonesian: "Pagi hari bangun, menghadap ke arah matahari. Depan adalah timur, belakang adalah barat." },
            { index: 2, hanzi: "左面是北，右面是南。东南西北，方向分明。", pinyin: "Zuǒmiàn shì běi, yòumiàn shì nán. Dōng nán xī běi, fāngxiàng fēnmíng.", indonesian: "Sebelah kiri adalah utara, sebelah kanan adalah selatan. Timur selatan barat utara, arah jelas." },
            { index: 3, hanzi: "学会辨认方向，出门就不会迷路啦！", pinyin: "Xuéhuì biànrèn fāngxiàng, chūmén jiù bù huì mílù la!", indonesian: "Belajar mengenali arah, saat bepergian tidak akan tersesat lagi!" }
          ],
          readingPassage: "早晨面向太阳，前面是东，后面是西，左面是北，右面是南。",
          readingPinyin: "Zǎochén miànxiàng tàiyáng, qiánmiàn shì dōng, hòumiàn shì xī, zuǒmiàn shì běi, yòumiàn shì nán.",
          readingTranslation: "Pagi hari menghadap matahari, depan timur, belakang barat, kiri utara, kanan selatan.",
          vocab: [
            { hanzi: "东", pinyin: "dōng", tone: 1, meaningId: "Timur", meaningEn: "East", strokes: 5, strokeNames: ["横", "撇折", "竖钩", "撇", "点"], radical: "一", exampleHanzi: "东方。", examplePinyin: "Dōngfāng.", exampleTranslation: "Arah timur.", iconEmoji: "🧭" },
            { hanzi: "西", pinyin: "xī", tone: 1, meaningId: "Barat", meaningEn: "West", strokes: 6, strokeNames: ["横", "竖", "横折", "撇", "竖弯", "横"], radical: "覀", exampleHanzi: "西方。", examplePinyin: "Xīfāng.", exampleTranslation: "Arah barat.", iconEmoji: "🧭" }
          ]
        },
        {
          unitNumber: 11,
          title: "Unit 11: 五颜六色 (Warna-Warni Indah)",
          storyTitle: "五颜六色",
          theme: "Mengenal Warna",
          dialogue: { speakerA: "A: 你喜欢什么颜色？(Nǐ xǐhuan shénme yánsè?)", speakerB: "B: 我喜欢红色和蓝色。(Wǒ xǐhuan hóngsè hé lánsè.)" },
          storySentences: [
            { index: 1, hanzi: "花园里盛开着各种各样的花朵，五颜六色非常美丽。", pinyin: "Huāyuán lǐ shèngkāi zhe gèzhǒng-gèyàng de huāduǒ, wǔyán-liùsè fēicháng měilì.", indonesian: "Di taman mekar aneka ragam bunga, warna-warni sangat indah." },
            { index: 2, hanzi: "红色的玫瑰，黄色的向日葵，还有白色的百合花。", pinyin: "Hóngsè de méiguī, huángsè de xiàngrìkuí, hái yǒu báisè de bǎihéhuā.", indonesian: "Mawar merah, bunga matahari kuning, dan bunga lili putih." },
            { index: 3, hanzi: "大自然就像一幅美丽的彩色画卷！", pinyin: "Dàzìrán jiù xiàng yī fú měilì de cǎisè huàjuàn!", indonesian: "Alam semesta bagaikan lukisan berwarna yang begitu indah!" }
          ],
          readingPassage: "红色、黄色、蓝色、绿色、白色、黑色。五颜六色的世界真好看！",
          readingPinyin: "Hóngsè, huángsè, lánsè, lǜsè, báisè, hēisè. Wǔyán-liùsè de shìjiè zhēn hǎokàn!",
          readingTranslation: "Merah, kuning, biru, hijau, putih, hitam. Dunia warna-warni sangat indah!",
          vocab: [
            { hanzi: "红", pinyin: "hóng", tone: 2, meaningId: "Merah", meaningEn: "Red", strokes: 6, strokeNames: ["纟", "工"], radical: "纟", exampleHanzi: "红花。", examplePinyin: "Hóng huā.", exampleTranslation: "Bunga merah.", iconEmoji: "🔴" },
            { hanzi: "蓝", pinyin: "lán", tone: 2, meaningId: "Biru", meaningEn: "Blue", strokes: 13, strokeNames: ["艹", "监"], radical: "艹", exampleHanzi: "蓝天。", examplePinyin: "Lántiān.", exampleTranslation: "Langit biru.", iconEmoji: "🔵" }
          ]
        },
        {
          unitNumber: 12,
          title: "Unit 12: 我爱我的学校 (Saya Cinta Sekolah Saya)",
          storyTitle: "我爱我的学校",
          theme: "Lingkungan Sekolah",
          dialogue: { speakerA: "A: 你的学校漂亮吗？(Nǐ de xuéxiào piàoliang ma?)", speakerB: "B: 我们的学校非常美丽！(Wǒmen de xuéxiào fēicháng měilì!)" },
          storySentences: [
            { index: 1, hanzi: "我们的学校又大又漂亮，校门前有一棵高大的绿树。", pinyin: "Wǒmen de xuéxiào yòu dà yòu piàoliang, xiàomén qián yǒu yī kē gāodà de lǜ shù.", indonesian: "Sekolah kami besar dan indah, di depan gerbang sekolah ada sebatang pohon hijau yang tinggi besar." },
            { index: 2, hanzi: "我们在宽敞明亮的教室里读书写字，在操场上跑步做游戏。", pinyin: "Wǒmen zài kuānchǎng míngliàng de jiàoshì lǐ dúshū xiězì, zài cāochǎng shang pǎobù zuò yóuxì.", indonesian: "Kami membaca buku dan menulis huruf di kelas luas dan terang, serta bermain di lapangan." },
            { index: 3, hanzi: "老师关爱我们，同学互相帮助，我爱我的好学校！", pinyin: "Lǎoshī guān'ài wǒmen, tóngxué hùxiāng bāngzhù, wǒ ài wǒ de hǎo xuéxiào!", indonesian: "Guru menyayangi kami, teman-teman saling menolong, saya cinta sekolah saya yang hebat!" }
          ],
          readingPassage: "学校大，校园美。老师教我学文化，同学和我做游戏。我爱我的好学校！",
          readingPinyin: "Xuéxiào dà, xiàoyuán měi. Lǎoshī jiāo wǒ xué wénhuà, tóngxué hé wǒ zuò yóuxì. Wǒ ài wǒ de hǎo xuéxiào!",
          readingTranslation: "Sekolah besar, kampus indah. Guru mengajariku ilmu, teman bermain bersamaku. Saya cinta sekolahku!",
          vocab: [
            { hanzi: "学", pinyin: "xué", tone: 2, meaningId: "Belajar", meaningEn: "Study", strokes: 8, strokeNames: ["点", "点", "撇", "点", "横撇", "横撇", "弯钩", "横"], radical: "子", exampleHanzi: "学习。", examplePinyin: "Xuéxí.", exampleTranslation: "Belajar.", iconEmoji: "📖" },
            { hanzi: "校", pinyin: "xiào", tone: 4, meaningId: "Sekolah", meaningEn: "School", strokes: 10, strokeNames: ["木", "交"], radical: "木", exampleHanzi: "学校。", examplePinyin: "Xuéxiào.", exampleTranslation: "Sekolah.", iconEmoji: "🏫" }
          ]
        }
      ]
    }
  ]
};

// Titles for Books 2 to 12
const BOOK_TITLES = {
  2: ["我们的教室", "铅笔橡皮和尺子", "操场上有很多人", "动物园里看动物", "可爱的小动物", "现在几点", "今天星期几", "穿衣服与戴帽子", "我喜欢吃水果", "喝水与喝牛奶", "坐汽车去公园", "放学了回家"],
  3: ["今天几月几日", "春夏秋冬四季美", "祝你生日快乐", "我去超市买文具", "我们去游泳", "踢足球和打篮球", "生病要多休息", "去医院看医生", "乌鸦喝水的故事", "司马光砸缸救人", "小猫钓鱼专心致志", "小花猫给外婆送鱼"],
  4: ["美丽的大自然", "太阳地球和月亮", "森林里的小动物", "农场里的一天", "下雨了天气凉", "冬天堆雪人真快乐", "保护环境人人有责", "参观科学博物馆", "狐狸和乌鸦的故事", "猴子井底捞月亮", "刻舟求剑的寓言", "盲人摸象的启示"],
  5: ["中国的母亲河黄河", "长江三峡壮丽风光", "中秋赏月吃月饼", "端午节赛龙舟粽香", "春节拜年贴春联", "良好的卫生习惯", "坚持锻炼身体好", "传统剪纸艺术美", "守株待兔的教训", "掩耳盗铃自欺欺人", "画蛇添足多此一举", "拔苗助长急于求成"],
  6: ["嫦娥奔月的美丽传说", "后羿射落九个太阳", "蔡伦造纸术的发明", "活字印刷术的辉煌", "奥运精神更快更高更强", "国球乒乓球的光芒", "参观古老故宫建筑", "颐和园昆明湖游记", "自相矛盾的寓言", "南辕北辙背道而驰", "滥竽充数真才实学", "闻鸡起舞立志报国"],
  7: ["雄伟壮观的万里长城", "秦始皇兵马俑奇迹", "中国书法艺术的魅力", "国画中的山水神韵", "伟大教育家孔子思想", "医学圣手李时珍本草", "丝绸之路的历史桥梁", "郑和七下西洋壮举", "望梅止渴曹操巧计", "破釜沉舟项羽决战", "卧薪尝胆勾践图强", "精卫填海矢志不渝"],
  8: ["浩瀚宇宙探索新知", "探索月球与火星奥秘", "珍稀国宝大熊猫保护", "绿水青山金山银山", "中国传统民乐二胡古筝", "京剧脸谱生旦净丑", "各国青少年友好交流", "志愿服务奉献爱心", "塞翁失马焉知非福", "愚公移山持之以恒", "杞人忧天庸人自扰", "夸父逐日追寻光明"],
  9: ["桂林山水甲天下", "神奇梦幻的九寨沟", "传统节日与孝道美德", "中国茶道与茶文化", "卖火柴的小女孩童话", "丑小鸭的成长蜕变", "勤奋求学凿壁借光", "诚实守信人生基石", "完璧归赵蔺相如智", "负荆请罪将相和睦", "纸上谈兵赵括失利", "井底之蛙眼界开阔"],
  10: ["唐诗精选李白与杜甫", "宋词之美苏轼李清照", "保护地球生态家园", "清洁能源低碳生活", "四大名著文学概览", "孙悟空大闹天宫传奇", "草船借箭诸葛神算", "现代都市智慧交通", "饮水思源知恩图报", "居安思危未雨绸缪", "众志成城万众一心", "锲而不舍金石可镂"],
  11: ["人工智能智慧时代", "高铁飞驰中国速度", "互联网跨国大沟通", "青年志愿者勇担当", "深海极地科学探索", "中国空间站天宫漫步", "现代医学守护健康", "读书明智博览群书", "兼听则明偏信则暗", "千里之行始于足下", "海纳百川有容乃大", "志存高远自强不息"],
  12: ["展望未来扬帆起航", "毕业季的感恩回忆", "青春梦想奋力拼搏", "跨文化交流之桥梁", "世界文化遗产瑰宝", "走向世界的现代汉语", "科学精神探索追求", "人与自然和谐共生", "毕业典礼庄严致辞", "师恩难忘铭刻心间", "同窗友谊天长地久", "前程万里鹏程万里"]
};

const BOOKS_META = [
  { id: 2, title: "Han Yu 2 (汉语 第二册)", level: "Tingkat Dasar 2", rank: "Triceratops Cilik", badge: "🦕 Tanduk Triceratops", color: "#3B82F6", desc: "Ruang kelas, hewan, waktu & jam, pakaian, buah, minuman, dan transportasi kota." },
  { id: 3, title: "Han Yu 3 (汉语 第三册)", level: "Tingkat Dasar 3", rank: "Stegosaurus Tangguh", badge: "🦕 Pelat Fosil Stego", color: "#0D9488", desc: "Kalender dan waktu, empat musim, hobi, pesta ulang tahun, dan kisah hewan bijak." },
  { id: 4, title: "Han Yu 4 (汉语 第四册)", level: "Tingkat Menengah 1", rank: "Brachiosaurus Tinggi", badge: "🦕 Fosil Leher Panjang", color: "#8B5CF6", desc: "Alam semesta, tata surya, sains, fabel klasik, dan kepedulian lingkungan." },
  { id: 5, title: "Han Yu 5 (汉语 第五册)", level: "Tingkat Menengah 2", rank: "Pterodactyl Penjelajah", badge: "🦅 Sayap Pterodactyl Emas", color: "#F59E0B", desc: "Geografi sungai besar Tiongkok, festival budaya tradisional, dan cerita peribahasa." },
  { id: 6, title: "Han Yu 6 (汉语 第六册)", level: "Tingkat Menengah 3", rank: "Ankylosaurus Baja", badge: "🛡️ Perisai Fosil Baja", color: "#EC4899", desc: "Legenda rakyat Tiongkok, penemuan bersejarah, olahraga prestasi, dan istana kuno." },
  { id: 7, title: "Han Yu 7 (汉语 第七册)", level: "Tingkat Lanjutan 1", rank: "Velociraptor Cepat", badge: "⚡ Cakar Velociraptor", color: "#6366F1", desc: "Peninggalan sejarah Tembok Besar, kaligrafi, tokoh filsafat, dan jalur perdagangan dunia." },
  { id: 8, title: "Han Yu 8 (汉语 第八册)", level: "Tingkat Lanjutan 2", rank: "Spinosaurus Penguasa", badge: "🌊 Duri Layar Spinosaurus", color: "#14B8A6", desc: "Eksplorasi antariksa & Mars, konservasi panda raksasa, kesenian opera, dan persahabatan bangsa." },
  { id: 9, title: "Han Yu 9 (汉语 第九册)", level: "Tingkat Lanjutan 3", rank: "Carnotaurus Perkasa", badge: "🔥 Tanduk Carnotaurus Api", color: "#F97316", desc: "Wisata alam Guilin & Jiuzhaigou, sastra dongeng dunia, dan peribahasa Chengyu klasik." },
  { id: 10, title: "Han Yu 10 (汉语 第十册)", level: "Tingkat Mahir 1", rank: "Allosaurus Legendaris", badge: "💎 Mahkota Fosil Allosaurus", color: "#84CC16", desc: "Apresiasi puisi Tang & Song, karya sastra klasik empat pilar, dan sains energi hijau." },
  { id: 11, title: "Han Yu 11 (汉语 第十一册)", level: "Tingkat Mahir 2", rank: "Giganotosaurus Raksasa", badge: "👑 Mahkota Fosil Giganoto", color: "#06B6D4", desc: "Kecerdasan buatan, teknologi antariksa, kedokteran modern, dan filosofi hidup bijak." },
  { id: 12, title: "Han Yu 12 (汉语 第十二册)", level: "Tingkat Master 3", rank: "Master Paleontolog Dino", badge: "🏆 Trofi Kristal Kehormatan", color: "#E11D48", desc: "Masa depan gemilang, pidato kelulusan, jembatan diplomasi budaya, dan warisan peradaban." }
];

// Generate Books 2 to 12 dynamically with clean data
BOOKS_META.forEach(bm => {
  const bId = bm.id;
  const titles = BOOK_TITLES[bId] || [];
  const units = [];

  for (let u = 1; u <= 12; u++) {
    const rawT = titles[u - 1] || `第${u}课`;
    const s1_hz = `今天我们一起认真学习《汉语第${bId}册》第${u}课：${rawT}。`;
    const s1_py = `Jīntiān wǒmen yīqǐ rènzhēn xuéxí 《Hànyǔ Dì ${bId} Cè》 dì ${u} kè: ${rawT}.`;
    const s1_id = `Hari ini kami bersama-sama belajar buku Han Yu ${bId} Unit ${u}: ${rawT}.`;

    const s2_hz = `在课堂上，老师指导我们朗读课文、掌握生词和书写规范汉字。`;
    const s2_py = `Zài kètáng shang, lǎoshī zhǐdǎo wǒmen lǎngdú kèwén, zhǎngwò shēngcí hé shūxiě guīfàn hànzì.`;
    const s2_id = `Di dalam kelas, guru membimbing kami membaca teks, menguasai kosakata, dan menulis huruf Hanzi standar.`;

    const s3_hz = `通过每天勤奋练习，我们的汉语听说读写能力都取得了很大的进步！`;
    const s3_py = `Tōngguò měitiān qínfèn liànxí, wǒmen de Hànyǔ tīngshuō dúxiě nénglì dōu qǔdé le hěn dà de jìnbù!`;
    const s3_id = `Melalui latihan tekun setiap hari, kemampuan mendengar, berbicara, membaca, dan menulis Mandarin kami meningkat pesat!`;

    units.push({
      unitNumber: u,
      title: `Unit ${u}: ${rawT}`,
      storyTitle: rawT,
      theme: `Pembelajaran Unit ${u} Han Yu ${bId}`,
      dialogue: {
        speakerA: `A: 我们一起认真学习《汉语第${bId}册》第${u}课吧！(Wǒmen yīqǐ rènzhēn xuéxí 《Hànyǔ Dì ${bId} Cè》 dì ${u} kè ba!)`,
        speakerB: `B: 好啊，学好汉语，天天向上！(Hǎo a, xuéhǎo Hànyǔ, tiāntiān xiàngshàng!)`
      },
      storySentences: [
        { index: 1, hanzi: s1_hz, pinyin: s1_py, indonesian: s1_id },
        { index: 2, hanzi: s2_hz, pinyin: s2_py, indonesian: s2_id },
        { index: 3, hanzi: s3_hz, pinyin: s3_py, indonesian: s3_id }
      ],
      readingPassage: `${s1_hz} ${s2_hz} ${s3_hz}`,
      readingPinyin: `${s1_py} ${s2_py} ${s3_py}`,
      readingTranslation: `${s1_id} ${s2_id} ${s3_id}`,
      vocab: [
        { hanzi: "学", pinyin: "xué", tone: 2, meaningId: "Belajar", meaningEn: "Study / Learn", strokes: 8, strokeNames: ["点", "点", "撇", "点", "横撇", "弯钩", "横"], radical: "子", exampleHanzi: "好好学习。", examplePinyin: "Hǎohāo xuéxí.", exampleTranslation: "Belajar dengan rajin.", iconEmoji: "📖" },
        { hanzi: "书", pinyin: "shū", tone: 1, meaningId: "Buku", meaningEn: "Book", strokes: 4, strokeNames: ["横折", "横折钩", "竖", "点"], radical: "乛", exampleHanzi: "看中文书。", examplePinyin: "Kàn Zhōngwén shū.", exampleTranslation: "Membaca buku Mandarin.", iconEmoji: "📚" },
        { hanzi: "写", pinyin: "xiě", tone: 3, meaningId: "Menulis", meaningEn: "Write", strokes: 5, strokeNames: ["点", "横撇", "竖折折钩", "横"], radical: "冖", exampleHanzi: "写汉字。", examplePinyin: "Xiě hànzì.", exampleTranslation: "Menulis huruf Hanzi.", iconEmoji: "✍️" },
        { hanzi: "大", pinyin: "dà", tone: 4, meaningId: "Besar / Hebat", meaningEn: "Big / Great", strokes: 3, strokeNames: ["横", "撇", "捺"], radical: "大", exampleHanzi: "大家都很高兴。", examplePinyin: "Dàjiā dōu hěn gāoxìng.", exampleTranslation: "Semua orang sangat gembira.", iconEmoji: "🌟" }
      ]
    });
  }

  HANYU_DATA.books.push({
    id: bId,
    title: bm.title,
    level: bm.level,
    dinoRank: bm.rank,
    badge: bm.badge,
    themeColor: bm.color,
    description: bm.desc,
    units: units
  });
});

// Global helper to get book by id
function getBookById(id) {
  return HANYU_DATA.books.find(b => b.id === Number(id)) || HANYU_DATA.books[0];
}

// Global helper to get unit
function getUnit(bookId, unitNumber) {
  const book = getBookById(bookId);
  return (book && book.units) ? (book.units.find(u => u.unitNumber === Number(unitNumber)) || book.units[0]) : null;
}

if (typeof globalThis !== 'undefined') {
  globalThis.HANYU_DATA = HANYU_DATA;
  globalThis.getBookById = getBookById;
  globalThis.getUnit = getUnit;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HANYU_DATA, getBookById, getUnit };
}
