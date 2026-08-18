/**
 * DINO HAN YU - Curriculum Database (Han Yu 1 to 12)
 * Comprehensive vocabulary, pinyin, Indonesian translations, stroke breakdowns,
 * example sentences, reading texts, and image matching items for all 12 levels.
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
          storyTitle: "你好 (Halo)",
          theme: "Salam & Perkenalan",
          dialogue: {
            speakerA: "A: 你好！(Nǐ hǎo! - Halo!)",
            speakerB: "B: 你好！(Nǐ hǎo! - Halo!)",
            speakerA2: "A: 老师好！(Lǎoshī hǎo! - Halo Guru!)",
            speakerB2: "B: 同学们好！(Tóngxuémen hǎo! - Halo anak-anak murid!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "你好！我叫小华，他是小强。",
              pinyin: "Nǐ hǎo! Wǒ jiào Xiǎohuá, tā shì Xiǎoqiáng.",
              indonesian: "Halo! Nama saya Xiao Hua, dia adalah Xiao Qiang."
            },
            {
              index: 2,
              hanzi: "早上好，老师！早上好，同学们！",
              pinyin: "Zǎoshang hǎo, lǎoshī! Zǎoshang hǎo, tóngxuémen!",
              indonesian: "Selamat pagi, guru! Selamat pagi, teman-teman!"
            },
            {
              index: 3,
              hanzi: "老师说：“同学们好！谢谢大家。”",
              pinyin: "Lǎoshī shuō: “Tóngxuémen hǎo! Xièxie dàjiā.”",
              indonesian: "Guru berkata: “Halo murid-murid! Terima kasih semuanya.”"
            },
            {
              index: 4,
              hanzi: "小华和小红对老师说：“不客气，老师再见！”",
              pinyin: "Xiǎohuá hé Xiǎohóng duì lǎoshī shuō: “Bú kèqi, lǎoshī zàijiàn!”",
              indonesian: "Xiao Hua dan Xiao Hong berkata kepada guru: “Sama-sama, sampai jumpa guru!”"
            }
          ],
          readingPassage: "你好！我叫小明。早上好，老师！早上好，同学们！再见！",
          readingPinyin: "Nǐ hǎo! Wǒ jiào Xiǎomíng. Zǎoshang hǎo, lǎoshī! Zǎoshang hǎo, tóngxuémen! Zàijiàn!",
          readingTranslation: "Halo! Nama saya Xiao Ming. Selamat pagi, guru! Selamat pagi, teman-teman! Sampai jumpa!",
          vocab: [
            {
              hanzi: "你",
              pinyin: "nǐ",
              tone: 3,
              meaningId: "Kamu / Anda",
              meaningEn: "You",
              strokes: 7,
              strokeNames: ["撇 (Piě)", "竖 (Shù)", "撇 (Piě)", "横撇 (Héngpiě)", "捺 (Nà)", "竖 (Shù)", "弯钩 (Wāngōu)"],
              radical: "亻(人 / Rén)",
              exampleHanzi: "你好吗？",
              examplePinyin: "Nǐ hǎo ma?",
              exampleTranslation: "Apa kabarmu?",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "👋"
            },
            {
              hanzi: "好",
              pinyin: "hǎo",
              tone: 3,
              meaningId: "Baik / Bagus",
              meaningEn: "Good / Fine",
              strokes: 6,
              strokeNames: ["撇点 (Piědiǎn)", "撇 (Piě)", "提 (Tí)", "横撇 (Héngpiě)", "弯钩 (Wāngōu)", "横 (Héng)"],
              radical: "女 (Nǚ)",
              exampleHanzi: "今天天气很好。",
              examplePinyin: "Jīntiān tiānqì hěn hǎo.",
              exampleTranslation: "Hari ini cuaca sangat bagus.",
              image: "assets/textbook/book_1/img_2.jpg",
              iconEmoji: "👍"
            },
            {
              hanzi: "老师",
              pinyin: "lǎoshī",
              tone: 31,
              meaningId: "Guru",
              meaningEn: "Teacher",
              strokes: 12,
              strokeNames: ["老 (6画): 横, 竖, 横, 撇, 撇, 竖弯钩", "师 (6画): 竖, 撇, 竖, 横折钩, 竖"],
              radical: "老 / 巾",
              exampleHanzi: "李老师好！",
              examplePinyin: "Lǐ lǎoshī hǎo!",
              exampleTranslation: "Halo Guru Li!",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "👩‍🏫"
            },
            {
              hanzi: "同学",
              pinyin: "tóngxué",
              tone: 22,
              meaningId: "Teman Sekelas / Murid",
              meaningEn: "Classmate",
              strokes: 14,
              strokeNames: ["同 (6画): 竖, 横折钩, 横, 竖, 横折, 横", "学 (8画): 点, 点, 撇, 点, 横撇, 横撇, 弯钩, 横"],
              radical: "冂 / 子",
              exampleHanzi: "我们是好同学。",
              examplePinyin: "Wǒmen shì hǎo tóngxué.",
              exampleTranslation: "Kami adalah teman sekelas yang baik.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "🎒"
            },
            {
              hanzi: "谢谢",
              pinyin: "xièxie",
              tone: 40,
              meaningId: "Terima kasih",
              meaningEn: "Thank you",
              strokes: 24,
              strokeNames: ["谢 (12画): 点, 横折提, 撇, 横, 竖, 横折, 横, 横, 竖, 撇, 横折钩, 竖"],
              radical: "讠(言)",
              exampleHanzi: "谢谢老师的帮助！",
              examplePinyin: "Xièxie lǎoshī de bāngzhù!",
              exampleTranslation: "Terima kasih atas bantuan guru!",
              image: "assets/textbook/book_1/img_3.jpg",
              iconEmoji: "🙏"
            },
            {
              hanzi: "再见",
              pinyin: "zàijiàn",
              tone: 44,
              meaningId: "Sampai jumpa / Selamat tinggal",
              meaningEn: "Goodbye",
              strokes: 10,
              strokeNames: ["再 (6画): 横, 竖, 横折钩, 竖, 横, 横", "见 (4画): 竖, 横折, 撇, 竖弯钩"],
              radical: "冂 / 见",
              exampleHanzi: "明天再见！",
              examplePinyin: "Míngtiān zàijiàn!",
              exampleTranslation: "Sampai jumpa besok!",
              image: "assets/textbook/book_1/img_3.jpg",
              iconEmoji: "🙋‍♂️"
            }
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: 我爱爸爸妈妈 (Aku Sayang Ayah Ibu)",
          storyTitle: "我爱爸爸妈妈",
          theme: "Keluarga Inti",
          dialogue: {
            speakerA: "A: 这是你爸爸吗？(Zhè shì nǐ bàba ma? - Apakah ini ayahmu?)",
            speakerB: "B: 是，这是我爸爸。(Shì, zhè shì wǒ bàba. - Ya, ini ayahku.)",
            speakerA2: "A: 你爱他们吗？(Nǐ ài tāmen ma? - Apakah kamu sayang mereka?)",
            speakerB2: "B: 我爱爸爸和妈妈。(Wǒ ài bàba hé māma. - Aku sayang ayah dan ibu.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "我们一起认真学习《汉语第1册》第2课：我爱爸爸妈妈。",
              pinyin: "Wǒmen yīqǐ rènzhēn xuéxí 《Hànyǔ Dì 1 Cè》 dì 2 kè: Wǒ ài bàba māma.",
              indonesian: "Kami belajar bersama buku Han Yu 1 Unit 2: 我爱爸爸妈妈."
            },
            {
              index: 2,
              hanzi: "老师夸奖我们是最棒的中文小学员！",
              pinyin: "Lǎoshī kuājiǎng wǒmen shì zuì bàng de Zhōngwén xiǎo xuéyuán!",
              indonesian: "Guru memuji kami sebagai pembelajar Mandarin cilik yang paling bersemangat!"
            },
            {
              index: 3,
              hanzi: "我是王小华，他是我的爸爸，她是我的妈妈。",
              pinyin: "Wǒ shì Wáng Xiǎohuá, tā shì wǒ de bàba, tā shì wǒ de māma.",
              indonesian: "Saya adalah Wang Xiao Hua, dia adalah ayah saya, dia adalah ibu saya."
            },
            {
              index: 4,
              hanzi: "爸爸爱我，妈妈也爱我。我爱爸爸妈妈，我们一家人真幸福！",
              pinyin: "Bàba ài wǒ, māma yě ài wǒ. Wǒ ài bàba māma, wǒmen yì jiā rén zhēn xìngfú!",
              indonesian: "Ayah sayang saya, ibu juga sayang saya. Saya sayang ayah ibu, sekeluarga kami sangat bahagia!"
            }
          ],
          readingPassage: "我是王小华，他是我爸爸，她是我妈妈，我爱爸爸妈妈。",
          readingPinyin: "Wǒ shì Wáng Xiǎohuá, tā shì wǒ bàba, tā shì wǒ māma, wǒ ài bàba māma.",
          readingTranslation: "Saya adalah Wang Xiao Hua, dia adalah ayahku, dia adalah ibuku, saya sayang ayah dan ibu.",
          vocab: [
            {
              hanzi: "我",
              pinyin: "wǒ",
              tone: 3,
              meaningId: "Saya / Aku",
              meaningEn: "I / Me",
              strokes: 7,
              strokeNames: ["撇 (Piě)", "横 (Héng)", "竖钩 (Shùgōu)", "提 (Tí)", "斜钩 (Xiégōu)", "撇 (Piě)", "点 (Diǎn)"],
              radical: "戈 (Gē)",
              exampleHanzi: "我是小学生。",
              examplePinyin: "Wǒ shì xiǎoxuéshēng.",
              exampleTranslation: "Saya adalah murid SD.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "🧒"
            },
            {
              hanzi: "爱",
              pinyin: "ài",
              tone: 4,
              meaningId: "Cinta / Sayang",
              meaningEn: "Love",
              strokes: 10,
              strokeNames: ["撇 (Piě)", "点 (Diǎn)", "点 (Diǎn)", "撇 (Piě)", "点 (Diǎn)", "横撇 (Héngpiě)", "横折 (Héngzhé)", "横 (Héng)", "撇 (Piě)", "捺 (Nà)"],
              radical: "爫 (爪)",
              exampleHanzi: "我爱妈妈。",
              examplePinyin: "Wǒ ài māma.",
              exampleTranslation: "Aku sayang ibu.",
              image: "assets/textbook/book_1/img_4.jpg",
              iconEmoji: "❤️"
            },
            {
              hanzi: "爸爸",
              pinyin: "bàba",
              tone: 40,
              meaningId: "Ayah / Papa",
              meaningEn: "Father",
              strokes: 8,
              strokeNames: ["撇 (Piě)", "点 (Diǎn)", "撇 (Piě)", "捺 (Nà)", "横折 (Héngzhé)", "竖 (Shù)", "横 (Héng)", "竖弯钩 (Shùwāngōu)"],
              radical: "父 (Fù)",
              exampleHanzi: "爸爸喜欢看书。",
              examplePinyin: "Bàba xǐhuan kànshū.",
              exampleTranslation: "Ayah suka membaca buku.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "👨"
            },
            {
              hanzi: "妈妈",
              pinyin: "māma",
              tone: 10,
              meaningId: "Ibu / Mama",
              meaningEn: "Mother",
              strokes: 6,
              strokeNames: ["撇点 (Piědiǎn)", "撇 (Piě)", "提 (Tí)", "横折 (Héngzhé)", "竖折折钩 (Shùzhézhégōu)", "横 (Héng)"],
              radical: "女 (Nǚ)",
              exampleHanzi: "妈妈做饭很好吃。",
              examplePinyin: "Māma zuòfàn hěn hǎochī.",
              exampleTranslation: "Ibu memasak sangat enak.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "👩"
            },
            {
              hanzi: "是",
              pinyin: "shì",
              tone: 4,
              meaningId: "Adalah / Ialah / Ya",
              meaningEn: "Is / Am / Are",
              strokes: 9,
              strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "横 (Héng)", "竖 (Shù)", "横折 (Héngzhé)", "撇 (Piě)", "捺 (Nà)"],
              radical: "日 (Rì)",
              exampleHanzi: "他是我的好朋友。",
              examplePinyin: "Tā shì wǒ de hǎo péngyou.",
              exampleTranslation: "Dia adalah sahabat baik saya.",
              image: "assets/textbook/book_1/img_4.jpg",
              iconEmoji: "✨"
            },
            {
              hanzi: "他",
              pinyin: "tā",
              tone: 1,
              meaningId: "Dia (Laki-laki)",
              meaningEn: "He / Him",
              strokes: 5,
              strokeNames: ["撇 (Piě)", "竖 (Shù)", "横折钩 (Héngzhégōu)", "竖 (Shù)", "竖弯钩 (Shùwāngōu)"],
              radical: "亻(Rén)",
              exampleHanzi: "他是医生。",
              examplePinyin: "Tā shì yīshēng.",
              exampleTranslation: "Dia adalah dokter.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "👦"
            }
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: 爸爸是老师 (Ayah adalah Guru)",
          storyTitle: "爸爸是老师",
          theme: "Profesi & Anggota Keluarga",
          dialogue: {
            speakerA: "A: 你爸爸是老师吗？(Nǐ bàba shì lǎoshī ma? - Ayahmu apakah seorang guru?)",
            speakerB: "B: 是，爸爸是老师。(Shì, bàba shì lǎoshī. - Ya, ayah adalah seorang guru.)",
            speakerA2: "A: 你妈妈呢？(Nǐ māma ne? - Bagaimana dengan ibumu?)",
            speakerB2: "B: 妈妈是医生。(Māma shì yīshēng. - Ibu adalah seorang dokter.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "爸爸是老师，妈妈是医生，我是学生。",
              pinyin: "Bàba shì lǎoshī, māma shì yīshēng, wǒ shì xuésheng.",
              indonesian: "Ayah adalah guru, ibu adalah dokter, saya adalah murid."
            },
            {
              index: 2,
              hanzi: "叔叔是警察，每天保护大家的安全。",
              pinyin: "Shūshu shì jǐngchá, měitiān bǎohù dàjiā de ānquán.",
              indonesian: "Paman adalah polisi, setiap hari melindungi keselamatan kita."
            },
            {
              index: 3,
              hanzi: "弟弟、妹妹是学生吗？他们不是学生，他们还小。",
              pinyin: "Dìdi, mèimei shì xuésheng ma? Tāmen bú shì xuésheng, tāmen hái xiǎo.",
              indonesian: "Apakah adik laki-laki dan adik perempuan murid? Mereka bukan murid, mereka masih kecil."
            }
          ],
          readingPassage: "爸爸是老师，妈妈是医生，我是学生。弟弟、妹妹是学生吗？他们不是学生。",
          readingPinyin: "Bàba shì lǎoshī, māma shì yīshēng, wǒ shì xuésheng. Dìdi, mèimei shì xuésheng ma? Tāmen bú shì xuésheng.",
          readingTranslation: "Ayah adalah guru, ibu adalah dokter, saya adalah murid. Apakah adik laki-laki dan adik perempuan adalah murid? Mereka bukan murid.",
          vocab: [
            {
              hanzi: "学生",
              pinyin: "xuésheng",
              tone: 20,
              meaningId: "Murid / Siswa",
              meaningEn: "Student",
              strokes: 13,
              strokeNames: ["学 (8画)", "生 (5画): 撇, 横, 横, 竖, 横"],
              radical: "子 / 生",
              exampleHanzi: "我们都是好学生。",
              examplePinyin: "Wǒmen dōu shì hǎo xuésheng.",
              exampleTranslation: "Kita semua adalah murid yang baik.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "👨‍🎓"
            },
            {
              hanzi: "医生",
              pinyin: "yīshēng",
              tone: 11,
              meaningId: "Dokter",
              meaningEn: "Doctor",
              strokes: 12,
              strokeNames: ["医 (7画): 横, 撇, 横, 横, 撇, 点, 竖折", "生 (5画)"],
              radical: "匚 / 生",
              exampleHanzi: "妈妈在医院当医生。",
              examplePinyin: "Māma zài yīyuàn dāng yīshēng.",
              exampleTranslation: "Ibu bekerja sebagai dokter di rumah sakit.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "🩺"
            },
            {
              hanzi: "弟弟",
              pinyin: "dìdi",
              tone: 40,
              meaningId: "Adik Laki-laki",
              meaningEn: "Younger brother",
              strokes: 7,
              strokeNames: ["点 (Diǎn)", "撇 (Piě)", "横折 (Héngzhé)", "横 (Héng)", "竖折折钩 (Shùzhézhégōu)", "竖 (Shù)", "撇 (Piě)"],
              radical: "弓 (Gōng)",
              exampleHanzi: "弟弟今年五岁了。",
              examplePinyin: "Dìdi jīnnián wǔ suì le.",
              exampleTranslation: "Adik laki-laki tahun ini berumur 5 tahun.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "👦"
            },
            {
              hanzi: "妹妹",
              pinyin: "mèimei",
              tone: 40,
              meaningId: "Adik Perempuan",
              meaningEn: "Younger sister",
              strokes: 8,
              strokeNames: ["妹: 女 (3画), 未 (5画: 一, 横, 竖, 撇, 捺)"],
              radical: "女 (Nǚ)",
              exampleHanzi: "妹妹喜欢洋娃娃。",
              examplePinyin: "Mèimei xǐhuan yángwáwa.",
              exampleTranslation: "Adik perempuan suka boneka.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "👧"
            },
            {
              hanzi: "不",
              pinyin: "bù",
              tone: 4,
              meaningId: "Tidak / Bukan",
              meaningEn: "No / Not",
              strokes: 4,
              strokeNames: ["横 (Héng)", "撇 (Piě)", "竖 (Shù)", "点 (Diǎn)"],
              radical: "一 (Yī)",
              exampleHanzi: "我不是小鸟。",
              examplePinyin: "Wǒ bú shì xiǎoniǎo.",
              exampleTranslation: "Saya bukan burung kecil.",
              image: "assets/textbook/book_1/img_2.jpg",
              iconEmoji: "❌"
            }
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: 你叫什么名字 (Siapa Namamu?)",
          storyTitle: "你叫什么名字",
          theme: "Identitas & Nama",
          dialogue: {
            speakerA: "A: 你叫什么名字？(Nǐ jiào shénme míngzi? - Siapa namamu?)",
            speakerB: "B: 我叫王小华。(Wǒ jiào Wáng Xiǎohuá. - Nama saya Wang Xiao Hua.)",
            speakerA2: "A: 你姓什么？(Nǐ xìng shénme? - Apa nama margamu?)",
            speakerB2: "B: 我姓王。(Wǒ xìng Wáng. - Marga saya Wang.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "我姓王，叫王小华。我的名字很好听。",
              pinyin: "Wǒ xìng Wáng, jiào Wáng Xiǎohuá. Wǒ de míngzi hěn hǎotīng.",
              indonesian: "Marga saya Wang, dipanggil Wang Xiao Hua. Nama saya sangat bagus didengar."
            },
            {
              index: 2,
              hanzi: "我的弟弟叫王小明，我的妹妹叫王小丽。",
              pinyin: "Wǒ de dìdi jiào Wáng Xiǎomíng, wǒ de mèimei jiào Wáng Xiǎolì.",
              indonesian: "Adik laki-laki saya bernama Wang Xiao Ming, adik perempuan saya bernama Wang Xiao Li."
            },
            {
              index: 3,
              hanzi: "我的哥哥叫王小伟，姐姐叫王小玲。",
              pinyin: "Wǒ de gēge jiào Wáng Xiǎowěi, jiějie jiào Wáng Xiǎolíng.",
              indonesian: "Kakak laki-laki saya bernama Wang Xiao Wei, kakak perempuan bernama Wang Xiao Ling."
            }
          ],
          readingPassage: "我姓王，叫王小华。我弟弟叫王小明，我妹妹叫王小丽。",
          readingPinyin: "Wǒ xìng Wáng, jiào Wáng Xiǎohuá. Wǒ dìdi jiào Wáng Xiǎomíng, wǒ mèimei jiào Wáng Xiǎolì.",
          readingTranslation: "Marga saya Wang, bernama Wang Xiao Hua. Adik laki-laki saya bernama Wang Xiao Ming, adik perempuan saya bernama Wang Xiao Li.",
          vocab: [
            {
              hanzi: "叫",
              pinyin: "jiào",
              tone: 4,
              meaningId: "Bernama / Dipanggil",
              meaningEn: "Called / Name",
              strokes: 5,
              strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "撇折 (Piězhé)", "竖 (Shù)"],
              radical: "口 (Kǒu)",
              exampleHanzi: "你叫什么？",
              examplePinyin: "Nǐ jiào shénme?",
              exampleTranslation: "Siapa namamu?",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "🗣️"
            },
            {
              hanzi: "什么",
              pinyin: "shénme",
              tone: 20,
              meaningId: "Apa",
              meaningEn: "What",
              strokes: 7,
              strokeNames: ["什 (4画): 撇, 竖, 横, 竖", "么 (3画): 撇, 撇折, 点"],
              radical: "亻/ 丿",
              exampleHanzi: "这是什么书？",
              examplePinyin: "Zhè shì shénme shū?",
              exampleTranslation: "Ini buku apa?",
              image: "assets/textbook/book_1/img_6.jpg",
              iconEmoji: "❓"
            },
            {
              hanzi: "名字",
              pinyin: "míngzi",
              tone: 20,
              meaningId: "Nama",
              meaningEn: "Name",
              strokes: 12,
              strokeNames: ["名 (6画): 撇, 横撇, 点, 竖, 横折, 横", "字 (6画): 点, 点, 横撇, 横撇, 弯钩, 横"],
              radical: "口 / 子",
              exampleHanzi: "请写下你的名字。",
              examplePinyin: "Qǐng xiě xià nǐ de míngzi.",
              exampleTranslation: "Silakan tuliskan namamu.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "🏷️"
            },
            {
              hanzi: "哥哥",
              pinyin: "gēge",
              tone: 10,
              meaningId: "Kakak Laki-laki",
              meaningEn: "Older brother",
              strokes: 10,
              strokeNames: ["哥: 横, 竖, 横折, 横, 竖钩, 横, 竖, 横折, 横, 竖钩"],
              radical: "口 (Kǒu)",
              exampleHanzi: "哥哥踢足球很厉害。",
              examplePinyin: "Gēge tī zúqiú hěn lìhai.",
              exampleTranslation: "Kakak laki-laki sangat jago bermain sepak bola.",
              image: "assets/textbook/book_1/img_7.jpg",
              iconEmoji: "👦"
            },
            {
              hanzi: "姐姐",
              pinyin: "jiějie",
              tone: 30,
              meaningId: "Kakak Perempuan",
              meaningEn: "Older sister",
              strokes: 8,
              strokeNames: ["姐: 女 (3画), 且 (5画: 竖, 横折, 横, 横, 横)"],
              radical: "女 (Nǚ)",
              exampleHanzi: "姐姐在画画。",
              examplePinyin: "Jiějie zài huàhuà.",
              exampleTranslation: "Kakak perempuan sedang menggambar.",
              image: "assets/textbook/book_1/img_4.jpg",
              iconEmoji: "👧"
            }
          ]
        },
        {
          unitNumber: 5,
          title: "Unit 5: 我爱我家 (Aku Sayang Rumahku)",
          storyTitle: "我爱我家",
          theme: "Keluarga & Rasa Syukur",
          dialogue: {
            speakerA: "A: 这是你家吗？(Zhè shì nǐ jiā ma? - Apakah ini rumahmu?)",
            speakerB: "B: 是，这是我家。(Shì, zhè shì wǒ jiā. - Ya, ini rumahku.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "这是我家，房子又大又漂亮。",
              pinyin: "Zhè shì wǒ jiā, fángzi yòu dà yòu piàoliang.",
              indonesian: "Ini adalah rumahku, rumahnya besar dan indah."
            },
            {
              index: 2,
              hanzi: "我爱爸爸，我爱妈妈，我爱我家！",
              pinyin: "Wǒ ài bàba, wǒ ài māma, wǒ ài wǒ jiā!",
              indonesian: "Saya sayang ayah, saya sayang ibu, saya sayang rumah dan keluarga saya!"
            },
            {
              index: 3,
              hanzi: "万事开头难，我们一起努力学汉语！",
              pinyin: "Wàn shì kāi tóu nán, wǒmen yìqǐ nǔlì xué Hànyǔ!",
              indonesian: "Segala hal awalnya sulit, mari bersama giat belajar bahasa Mandarin!"
            }
          ],
          readingPassage: "这是我家，我爱爸爸，我爱妈妈，我爱我家。",
          readingPinyin: "Zhè shì wǒ jiā, wǒ ài bàba, wǒ ài māma, wǒ ài wǒ jiā.",
          readingTranslation: "Ini rumahku, aku sayang ayah, aku sayang ibu, aku sayang keluargaku.",
          vocab: [
            {
              hanzi: "家",
              pinyin: "jiā",
              tone: 1,
              meaningId: "Rumah / Keluarga",
              meaningEn: "Home / Family",
              strokes: 10,
              strokeNames: ["点", "点", "横撇", "横", "撇", "弯钩", "撇", "撇", "撇", "捺"],
              radical: "宀 (Mián)",
              exampleHanzi: "我家有五口人。",
              examplePinyin: "Wǒ jiā yǒu wǔ kǒu rén.",
              exampleTranslation: "Keluargaku ada 5 orang.",
              image: "assets/textbook/book_1/img_5.jpg",
              iconEmoji: "🏡"
            },
            {
              hanzi: "这",
              pinyin: "zhè",
              tone: 4,
              meaningId: "Ini",
              meaningEn: "This",
              strokes: 7,
              strokeNames: ["点 (Diǎn)", "横 (Héng)", "撇 (Piě)", "捺 (Nà)", "点 (Diǎn)", "横折折撇 (Héngzhézhépiě)", "捺 (Nà)"],
              radical: "辶 (Chuò)",
              exampleHanzi: "这是我的书包。",
              examplePinyin: "Zhè shì wǒ de shūbāo.",
              exampleTranslation: "Ini adalah tas sekolahku.",
              image: "assets/textbook/book_1/img_6.jpg",
              iconEmoji: "👉"
            },
            {
              hanzi: "对不起",
              pinyin: "duìbuqǐ",
              tone: 403,
              meaningId: "Maaf / Mohon Maaf",
              meaningEn: "Sorry",
              strokes: 18,
              strokeNames: ["对 (5画)", "不 (4画)", "起 (10画)"],
              radical: "寸 / 走",
              exampleHanzi: "对不起，我迟到了。",
              examplePinyin: "Duìbuqǐ, wǒ chídào le.",
              exampleTranslation: "Maaf, saya terlambat.",
              image: "assets/textbook/book_1/img_3.jpg",
              iconEmoji: "🙇"
            },
            {
              hanzi: "没关系",
              pinyin: "méi guānxi",
              tone: 210,
              meaningId: "Tidak apa-apa / Tak mengapa",
              meaningEn: "It doesn't matter / No problem",
              strokes: 20,
              strokeNames: ["没 (7画)", "关 (6画)", "系 (7画)"],
              radical: "氵/ 丷",
              exampleHanzi: "没关系，下次注意就好。",
              examplePinyin: "Méi guānxi, xià cì zhùyì jiù hǎo.",
              exampleTranslation: "Tidak apa-apa, lain kali cukup berhati-hati.",
              image: "assets/textbook/book_1/img_2.jpg",
              iconEmoji: "🤝"
            }
          ]
        },
        {
          unitNumber: 6,
          title: "Unit 6: 哥哥去学校 (Kakak Pergi ke Sekolah)",
          storyTitle: "哥哥去学校",
          theme: "Lokasi & Perjalanan",
          dialogue: {
            speakerA: "A: 小华去哪儿？(Xiǎohuá qù nǎr? - Xiao Hua pergi ke mana?)",
            speakerB: "B: 小华去学校。(Xiǎohuá qù xuéxiào. - Xiao Hua pergi ke sekolah.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "妈妈是医生，早上她去医院上班。",
              pinyin: "Māma shì yīshēng, zǎoshang tā qù yīyuàn shàngbān.",
              indonesian: "Ibu adalah dokter, pagi hari beliau pergi ke rumah sakit untuk bekerja."
            },
            {
              index: 2,
              hanzi: "我去幼儿园，和小朋友一起做游戏。",
              pinyin: "Wǒ qù yòu'éryuán, hé xiǎopéngyou yìqǐ zuò yóuxì.",
              indonesian: "Saya pergi ke taman kanak-kanak, bermain game bersama teman-teman kecil."
            },
            {
              index: 3,
              hanzi: "哥哥去哪儿？他是学生，他去学校上课。",
              pinyin: "Gēge qù nǎr? Tā shì xuésheng, tā qù xuéxiào shàngkè.",
              indonesian: "Kakak laki-laki pergi ke mana? Dia adalah murid, dia pergi ke sekolah untuk belajar di kelas."
            }
          ],
          readingPassage: "妈妈是医生，早上她去医院。我去幼儿园。哥哥去哪儿？他是学生，他去学校。",
          readingPinyin: "Māma shì yīshēng, zǎoshang tā qù yīyuàn. Wǒ qù yòu'éryuán. Gēge qù nǎr? Tā shì xuésheng, tā qù xuéxiào.",
          readingTranslation: "Ibu adalah dokter, pagi hari beliau ke rumah sakit. Saya pergi ke TK. Kakak pergi ke mana? Dia adalah murid, dia pergi ke sekolah.",
          vocab: [
            {
              hanzi: "去",
              pinyin: "qù",
              tone: 4,
              meaningId: "Pergi",
              meaningEn: "Go",
              strokes: 5,
              strokeNames: ["横 (Héng)", "竖 (Shù)", "横 (Héng)", "撇折 (Piězhé)", "点 (Diǎn)"],
              radical: "厶 (Sī)",
              exampleHanzi: "我去学校。",
              examplePinyin: "Wǒ qù xuéxiào.",
              exampleTranslation: "Saya pergi ke sekolah.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "🚶"
            },
            {
              hanzi: "学校",
              pinyin: "xuéxiào",
              tone: 24,
              meaningId: "Sekolah",
              meaningEn: "School",
              strokes: 18,
              strokeNames: ["学 (8画)", "校 (10画: 横, 竖, 撇, 点, 点, 横, 撇, 点, 撇, 捺)"],
              radical: "子 / 木",
              exampleHanzi: "我们的学校很大。",
              examplePinyin: "Wǒmen de xuéxiào hěn dà.",
              exampleTranslation: "Sekolah kita sangat besar.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "🏫"
            },
            {
              hanzi: "哪儿",
              pinyin: "nǎr",
              tone: 3,
              meaningId: "Mana / Di mana",
              meaningEn: "Where",
              strokes: 11,
              strokeNames: ["哪 (9画)", "儿 (2画: 撇, 竖弯钩)"],
              radical: "口 / 儿",
              exampleHanzi: "你去哪儿？",
              examplePinyin: "Nǐ qù nǎr?",
              exampleTranslation: "Kamu mau pergi ke mana?",
              image: "assets/textbook/book_1/img_2.jpg",
              iconEmoji: "📍"
            },
            {
              hanzi: "公园",
              pinyin: "gōngyuán",
              tone: 12,
              meaningId: "Taman",
              meaningEn: "Park",
              strokes: 11,
              strokeNames: ["公 (4画): 撇, 捺, 撇折, 点", "园 (7画): 竖, 横折, 横, 横, 竖, 横, 横"],
              radical: "八 / 囗",
              exampleHanzi: "爷爷在公园散步。",
              examplePinyin: "Yéye zài gōngyuán sànbù.",
              exampleTranslation: "Kakek sedang berjalan-jalan di taman.",
              image: "assets/textbook/book_1/img_3.jpg",
              iconEmoji: "🌳"
            }
          ]
        },
        {
          unitNumber: 7,
          title: "Unit 7: 我们上课吧 (Mari Kita Mulai Belajar)",
          storyTitle: "我们上课吧",
          theme: "Kegiatan Kelas",
          dialogue: {
            speakerA: "A: 我们上课。(Wǒmen shàngkè. - Kita mulai kelas.)",
            speakerB: "B: 老师讲课，同学们听课。(Lǎoshī jiǎngkè, tóngxuémen tīngkè. - Guru menerangkan pelajaran, murid-murid menyimak.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "上课了，我们快进教室吧！",
              pinyin: "Shàngkè le, wǒmen kuài jìn jiàoshì ba!",
              indonesian: "Pelajaran dimulai, mari kita segera masuk ke dalam ruang kelas!"
            },
            {
              index: 2,
              hanzi: "老师认真讲课，我们专心听课。",
              pinyin: "Lǎoshī rènzhēn jiǎngkè, wǒmen zhuānxīn tīngkè.",
              indonesian: "Guru dengan sungguh-sungguh menjelaskan materi, kami fokus mendengarkan pelajaran."
            },
            {
              index: 3,
              hanzi: "老师提问，我们举手回答问题。",
              pinyin: "Lǎoshī tíwèn, wǒmen jǔshǒu huídá wèntí.",
              indonesian: "Guru bertanya, kami mengangkat tangan untuk menjawab pertanyaan."
            }
          ],
          readingPassage: "上课了，我们进教室吧！老师讲，我们听。老师问，我们回答。",
          readingPinyin: "Shàngkè le, wǒmen jìn jiàoshì ba! Lǎoshī jiǎng, wǒmen tīng. Lǎoshī wèn, wǒmen huídá.",
          readingTranslation: "Sudah masuk kelas, mari kita masuk ruang kelas! Guru menerangkan, kita mendengar. Guru bertanya, kita menjawab.",
          vocab: [
            {
              hanzi: "上课",
              pinyin: "shàngkè",
              tone: 44,
              meaningId: "Masuk Kelas / Mulai Belajar",
              meaningEn: "Attend class / Class starts",
              strokes: 13,
              strokeNames: ["上 (3画: 竖, 横, 横)", "课 (10画: 点, 横折提, 竖, 横折, 横, 横, 横, 竖, 撇, 捺)"],
              radical: "一 / 讠",
              exampleHanzi: "八点准时上课。",
              examplePinyin: "Bā diǎn zhǔnshí shàngkè.",
              exampleTranslation: "Pukul delapan tepat kelas dimulai.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "🔔"
            },
            {
              hanzi: "讲课",
              pinyin: "jiǎngkè",
              tone: 34,
              meaningId: "Mengajar / Memberikan Kuliah",
              meaningEn: "Teach a lesson",
              strokes: 16,
              strokeNames: ["讲 (6画): 讠, 4画", "课 (10画)"],
              radical: "讠(Yán)",
              exampleHanzi: "老师讲课很生动。",
              examplePinyin: "Lǎoshī jiǎngkè hěn shēngdòng.",
              exampleTranslation: "Guru mengajar dengan sangat hidup dan menarik.",
              image: "assets/textbook/book_1/img_1.jpg",
              iconEmoji: "👩‍🏫"
            },
            {
              hanzi: "回答",
              pinyin: "huídá",
              tone: 22,
              meaningId: "Menjawab",
              meaningEn: "Answer / Reply",
              strokes: 18,
              strokeNames: ["回 (6画): 竖, 横折, 竖, 横折, 横, 横", "答 (12画): 竹, 合"],
              radical: "囗 / 竹",
              exampleHanzi: "我来回答这个问题。",
              examplePinyin: "Wǒ lái huídá zhè ge wèntí.",
              exampleTranslation: "Biar saya yang menjawab pertanyaan ini.",
              image: "assets/textbook/book_1/img_2.jpg",
              iconEmoji: "🙋‍♀️"
            }
          ]
        },
        {
          unitNumber: 8,
          title: "Unit 8: 我们吃午饭 (Kami Makan Siang)",
          storyTitle: "我们吃午饭",
          theme: "Makanan Sehari-hari",
          dialogue: {
            speakerA: "A: 早上爸爸吃什么？(Zǎoshang bàba chī shénme? - Pagi hari ayah makan apa?)",
            speakerB: "B: 早上爸爸吃面条。(Zǎoshang bàba chī miàntiáo. - Pagi hari ayah makan mie.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "中午十二点到了，我们一起吃午饭。",
              pinyin: "Zhōngwǔ shí'èr diǎn dào le, wǒmen yìqǐ chī wǔfàn.",
              indonesian: "Pukul 12 siang telah tiba, kami makan siang bersama-sama."
            },
            {
              index: 2,
              hanzi: "我喜欢吃热气腾腾的面条，小红和小强吃香喷喷的米饭。",
              pinyin: "Wǒ xǐhuan chī rèqì téngténg de miàntiáo, Xiǎohóng hé Xiǎoqiáng chī xiāngpēnpēn de mǐfàn.",
              indonesian: "Saya suka makan mi hangat, Xiao Hong dan Xiao Qiang makan nasi putih yang harum."
            },
            {
              index: 3,
              hanzi: "老师吃美味的饺子，大家吃得真香啊！",
              pinyin: "Lǎoshī chī měiwèi de jiǎozi, dàjiā chī de zhēn xiāng a!",
              indonesian: "Guru makan pangsit yang lezat, semua makan dengan lahap dan nikmat!"
            }
          ],
          readingPassage: "中午，我们吃午饭。我吃面条，小红和小强吃米饭，老师吃饺子。",
          readingPinyin: "Zhōngwǔ, wǒmen chī wǔfàn. Wǒ chī miàntiáo, Xiǎohóng hé Xiǎoqiáng chī mǐfàn, lǎoshī chī jiǎozi.",
          readingTranslation: "Siang hari, kami makan siang. Saya makan mi, Xiao Hong dan Xiao Qiang makan nasi, guru makan pangsit.",
          vocab: [
            {
              hanzi: "吃",
              pinyin: "chī",
              tone: 1,
              meaningId: "Makan",
              meaningEn: "Eat",
              strokes: 6,
              strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "撇 (Piě)", "横 (Héng)", "竖弯钩 (Shùwāngōu)"],
              radical: "口 (Kǒu)",
              exampleHanzi: "快来吃饭吧！",
              examplePinyin: "Kuài lái chīfàn ba!",
              exampleTranslation: "Ayo cepat makan!",
              image: "assets/textbook/book_1/img_12.jpg",
              iconEmoji: "🍜"
            },
            {
              hanzi: "面条",
              pinyin: "miàntiáo",
              tone: 42,
              meaningId: "Mi",
              meaningEn: "Noodles",
              strokes: 16,
              strokeNames: ["面 (9画)", "条 (7画: 撇, 横撇, 捺, 点, 竖钩, 撇, 点)"],
              radical: "面 / 木",
              exampleHanzi: "我爱吃牛肉面条。",
              examplePinyin: "Wǒ ài chī niúròu miàntiáo.",
              exampleTranslation: "Saya suka makan mi daging sapi.",
              image: "assets/textbook/book_1/img_12.jpg",
              iconEmoji: "🍲"
            },
            {
              hanzi: "米饭",
              pinyin: "mǐfàn",
              tone: 34,
              meaningId: "Nasi Putih",
              meaningEn: "Cooked rice",
              strokes: 13,
              strokeNames: ["米 (6画: 点, 撇, 横, 竖, 撇, 捺)", "饭 (7画: 饣, 反)"],
              radical: "米 / 饣",
              exampleHanzi: "一碗香喷喷的米饭。",
              examplePinyin: "Yī wǎn xiāngpēnpēn de mǐfàn.",
              exampleTranslation: "Semangkuk nasi putih yang harum.",
              image: "assets/textbook/book_1/img_12.jpg",
              iconEmoji: "🍚"
            },
            {
              hanzi: "饺子",
              pinyin: "jiǎozi",
              tone: 30,
              meaningId: "Pangsit / Jiaozi",
              meaningEn: "Dumpling",
              strokes: 12,
              strokeNames: ["饺 (9画: 饣, 交)", "子 (3画: 横撇, 弯钩, 横)"],
              radical: "饣/ 子",
              exampleHanzi: "过年一起包饺子。",
              examplePinyin: "Guònián yìqǐ bāo jiǎozi.",
              exampleTranslation: "Merayakan tahun baru bersama membuat pangsit.",
              image: "assets/textbook/book_1/img_12.jpg",
              iconEmoji: "🥟"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Han Yu 2 (汉语 第二册)",
      level: "Tingkat Dasar 2",
      dinoRank: "Triceratops Penjelajah",
      badge: "🌿 Fosil Daun Purba",
      themeColor: "#059669",
      description: "Perbandingan ukuran, cuaca hari ini, tamasya ke taman, hewan peliharaan, dan suasana kelas.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 西瓜大 苹果小 (Semangka Besar Apel Kecil)",
          storyTitle: "西瓜大 苹果小",
          theme: "Perbandingan Ukuran & Kuantitas",
          dialogue: {
            speakerA: "A: 西瓜大还是苹果大？(Xīguā dà háishi píngguǒ dà? - Semangka besar atau apel yang besar?)",
            speakerB: "B: 西瓜大，苹果小。(Xīguā dà, píngguǒ xiǎo. - Semangka besar, apel kecil.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "晚上我们吃水果，桌子上的苹果多，梨少。",
              pinyin: "Wǎnshang wǒmen chī shuǐguǒ, zhuōzi shang de píngguǒ duō, lí shǎo.",
              indonesian: "Malam hari kami makan buah-buahan, di atas meja apelnya banyak, pirnya sedikit."
            },
            {
              index: 2,
              hanzi: "哥哥吃香甜的水梨，我和妹妹吃红苹果。",
              pinyin: "Gēge chī xiāngtián de shuǐlí, wǒ hé mèimei chī hóng píngguǒ.",
              indonesian: "Kakak laki-laki makan buah pir manis, saya dan adik perempuan makan apel merah."
            },
            {
              index: 3,
              hanzi: "我的苹果大，妹妹的苹果小，我们都吃得很开心。",
              pinyin: "Wǒ de píngguǒ dà, mèimei de píngguǒ xiǎo, wǒmen dōu chī de hěn kāixīn.",
              indonesian: "Apel saya besar, apel adik perempuan kecil, kami semua makan dengan sangat gembira."
            }
          ],
          readingPassage: "晚上我们吃水果，苹果多，梨少。哥哥吃梨，我和妹妹吃苹果。我的苹果大，妹妹的苹果小。",
          readingPinyin: "Wǎnshang wǒmen chī shuǐguǒ, píngguǒ duō, lí shǎo. Gēge chī lí, wǒ hé mèimei chī píngguǒ. Wǒ de píngguǒ dà, mèimei de píngguǒ xiǎo.",
          readingTranslation: "Malam hari kami makan buah, apel banyak, pir sedikit. Kakak makan pir, saya dan adik makan apel. Apelku besar, apel adik kecil.",
          vocab: [
            {
              hanzi: "西瓜",
              pinyin: "xīguā",
              tone: 11,
              meaningId: "Semangka",
              meaningEn: "Watermelon",
              strokes: 11,
              strokeNames: ["西 (6画): 横, 竖, 横折, 撇, 竖弯, 横", "瓜 (5画): 撇, 撇, 竖提, 点, 捺"],
              radical: "西 / 瓜",
              exampleHanzi: "夏天吃西瓜很解渴。",
              examplePinyin: "Xiàtiān chī xīguā hěn jiěkě.",
              exampleTranslation: "Musim panas makan semangka sangat menghilangkan dahaga.",
              image: "assets/textbook/book_2/img_1.jpg",
              iconEmoji: "🍉"
            },
            {
              hanzi: "苹果",
              pinyin: "píngguǒ",
              tone: 23,
              meaningId: "Apel",
              meaningEn: "Apple",
              strokes: 16,
              strokeNames: ["苹 (8画): 艹, 5画", "果 (8画): 日, 木"],
              radical: "艹 / 木",
              exampleHanzi: "红苹果真甜。",
              examplePinyin: "Hóng píngguǒ zhēn tián.",
              exampleTranslation: "Apel merah sungguh manis.",
              image: "assets/textbook/book_2/img_1.jpg",
              iconEmoji: "🍎"
            },
            {
              hanzi: "多",
              pinyin: "duō",
              tone: 1,
              meaningId: "Banyak",
              meaningEn: "Many / Much",
              strokes: 6,
              strokeNames: ["撇 (Piě)", "横撇 (Héngpiě)", "点 (Diǎn)", "撇 (Piě)", "横撇 (Héngpiě)", "点 (Diǎn)"],
              radical: "夕 (Xī)",
              exampleHanzi: "这里的学生很多。",
              examplePinyin: "Zhèlǐ de xuésheng hěn duō.",
              exampleTranslation: "Murid di sini sangat banyak.",
              image: "assets/textbook/book_2/img_1.jpg",
              iconEmoji: "➕"
            },
            {
              hanzi: "少",
              pinyin: "shǎo",
              tone: 3,
              meaningId: "Sedikit",
              meaningEn: "Few / Little",
              strokes: 4,
              strokeNames: ["竖 (Shù)", "撇 (Piě)", "点 (Diǎn)", "撇 (Piě)"],
              radical: "小 (Xiǎo)",
              exampleHanzi: "今天的作业很少。",
              examplePinyin: "Jīntiān de zuòyè hěn shǎo.",
              exampleTranslation: "PR hari ini sangat sedikit.",
              image: "assets/textbook/book_2/img_1.jpg",
              iconEmoji: "➖"
            }
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: 今天的天气很好 (Cuaca Hari Ini Sangat Bagus)",
          storyTitle: "今天的天气很好",
          theme: "Cuaca & Lingkungan",
          dialogue: {
            speakerA: "A: 今天的天气怎么样？(Jīntiān de tiānqì zěnmeyàng? - Bagaimana cuaca hari ini?)",
            speakerB: "B: 今天的天气很好，天很蓝。(Jīntiān de tiānqì hěn hǎo, tiān hěn lán. - Cuaca hari ini sangat bagus, langit sangat biru.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "今天的天气很好，天空很蓝，白云很白。",
              pinyin: "Jīntiān de tiānqì hěn hǎo, tiānkōng hěn lán, bái yún hěn bái.",
              indonesian: "Cuaca hari ini sangat cerah, langit sangat biru, awan putih sangat bersih."
            },
            {
              index: 2,
              hanzi: "早上我们迎着阳光去学校，学校大门又大又宽。",
              pinyin: "Zǎoshang wǒmen yíngzhe yángguāng qù xuéxiào, xuéxiào dàmén yòu dà yòu kuān.",
              indonesian: "Pagi hari kami menyongsong sinar matahari pergi ke sekolah, gerbang sekolah besar dan lebar."
            },
            {
              index: 3,
              hanzi: "我们的教室很新、很漂亮，老师和同学们都在微笑。",
              pinyin: "Wǒmen de jiàoshì hěn xīn, hěn piàoliang, lǎoshī hé tóngxuémen dōu zài wēixiào.",
              indonesian: "Ruang kelas kami sangat baru dan indah, guru serta teman-teman semua tersenyum."
            }
          ],
          readingPassage: "今天的天气很好，天很蓝，云很白。早上我们去学校，学校很大。我们的教室很新、很漂亮。",
          readingPinyin: "Jīntiān de tiānqì hěn hǎo, tiān hěn lán, yún hěn bái. Zǎoshang wǒmen qù xuéxiào, xuéxiào hěn dà. Wǒmen de jiàoshì hěn xīn, hěn piàoliang.",
          readingTranslation: "Cuaca hari ini sangat bagus, langit sangat biru, awan sangat putih. Pagi hari kami ke sekolah, sekolah sangat besar. Ruang kelas kami baru dan indah.",
          vocab: [
            {
              hanzi: "今天",
              pinyin: "jīntiān",
              tone: 11,
              meaningId: "Hari Ini",
              meaningEn: "Today",
              strokes: 8,
              strokeNames: ["今 (4画): 撇, 捺, 点, 横折提", "天 (4画): 横, 横, 撇, 捺"],
              radical: "人 / 大",
              exampleHanzi: "今天我们学中文。",
              examplePinyin: "Jīntiān wǒmen xué zhōngwén.",
              exampleTranslation: "Hari ini kita belajar bahasa Mandarin.",
              image: "assets/textbook/book_2/img_2.jpg",
              iconEmoji: "📅"
            },
            {
              hanzi: "天气",
              pinyin: "tiānqì",
              tone: 14,
              meaningId: "Cuaca",
              meaningEn: "Weather",
              strokes: 8,
              strokeNames: ["天 (4画)", "气 (4画: 撇, 横, 横, 横折弯钩)"],
              radical: "大 / 气",
              exampleHanzi: "明天的天气晴朗。",
              examplePinyin: "Míngtiān de tiānqì qínglǎng.",
              exampleTranslation: "Cuaca besok cerah.",
              image: "assets/textbook/book_2/img_2.jpg",
              iconEmoji: "🌤️"
            },
            {
              hanzi: "漂亮",
              pinyin: "piàoliang",
              tone: 40,
              meaningId: "Cantik / Indah",
              meaningEn: "Beautiful / Pretty",
              strokes: 23,
              strokeNames: ["漂 (14画: 氵, 票)", "亮 (9画: 亠, 口, 冖, 几)"],
              radical: "氵/ 亠",
              exampleHanzi: "公园里的花很漂亮。",
              examplePinyin: "Gōngyuán lǐ de huā hěn piàoliang.",
              exampleTranslation: "Bunga di taman sangat cantik.",
              image: "assets/textbook/book_2/img_2.jpg",
              iconEmoji: "🌸"
            },
            {
              hanzi: "高兴",
              pinyin: "gāoxìng",
              tone: 14,
              meaningId: "Senang / Gembira",
              meaningEn: "Happy / Glad",
              strokes: 16,
              strokeNames: ["高 (10画: 点, 横, 竖, 横折, 横, 竖, 横折钩, 横)", "兴 (6画: 点, 点, 撇, 横, 撇, 点)"],
              radical: "高 / 八",
              exampleHanzi: "今天我很高兴！",
              examplePinyin: "Jīntiān wǒ hěn gāoxìng!",
              exampleTranslation: "Hari ini saya sangat gembira!",
              image: "assets/textbook/book_2/img_2.jpg",
              iconEmoji: "😄"
            }
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: 小狗非常可爱 (Anjing Kecil Sangat Lucu)",
          storyTitle: "小狗非常可爱",
          theme: "Hewan Peliharaan",
          dialogue: {
            speakerA: "A: 你家有小动物吗？(Nǐ jiā yǒu xiǎo dòngwù ma? - Apakah di rumahmu ada hewan kecil?)",
            speakerB: "B: 我家有一只小狗和一只小猫。(Wǒ jiā yǒu yī zhī xiǎogǒu hé yī zhī xiǎomāo. - Rumahku ada seekor anjing dan seekor kucing.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "我家有一只小狗、一只小猫和两只小鸟。",
              pinyin: "Wǒ jiā yǒu yī zhī xiǎogǒu, yī zhī xiǎomāo hé liǎng zhī xiǎoniǎo.",
              indonesian: "Di rumah saya ada seekor anjing kecil, seekor kucing kecil, dan dua ekor burung kecil."
            },
            {
              index: 2,
              hanzi: "小狗非常可爱，小猫非常聪明，小鸟羽毛非常好看。",
              pinyin: "Xiǎogǒu fēicháng kě'ài, xiǎomāo fēicháng cōngmíng, xiǎoniǎo yǔmáo fēicháng hǎokàn.",
              indonesian: "Anjing kecil sangat menggemaskan, kucing kecil sangat pintar, bulu burung kecil sangat indah."
            },
            {
              index: 3,
              hanzi: "放学回家后，我非常喜欢和它们一起在院子里玩耍。",
              pinyin: "Fàngxué huíjiā hòu, wǒ fēicháng xǐhuan hé tāmen yìqǐ zài yuànzi lǐ wánshuǎ.",
              indonesian: "Setelah pulang sekolah, saya sangat suka bermain bersama mereka di halaman rumah."
            }
          ],
          readingPassage: "我家有一只小狗、一只小猫和两只小鸟。小狗非常可爱，小猫非常聪明，小鸟非常好看。我非常喜欢它们。",
          readingPinyin: "Wǒ jiā yǒu yī zhī xiǎogǒu, yī zhī xiǎomāo hé liǎng zhī xiǎoniǎo. Xiǎogǒu fēicháng kě'ài, xiǎomāo fēicháng cōngmíng, xiǎoniǎo fēicháng hǎokàn. Wǒ fēicháng xǐhuan tāmen.",
          readingTranslation: "Di rumahku ada seekor anjing kecil, seekor kucing kecil, dan dua ekor burung kecil. Anjing kecil sangat lucu, kucing sangat pintar, burung sangat indah. Saya sangat suka mereka.",
          vocab: [
            {
              hanzi: "狗",
              pinyin: "gǒu",
              tone: 3,
              meaningId: "Anjing",
              meaningEn: "Dog",
              strokes: 8,
              strokeNames: ["撇 (Piě)", "弯钩 (Wāngōu)", "撇 (Piě)", "撇 (Piě)", "横折钩 (Héngzhégōu)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)"],
              radical: "犭(Quǎn)",
              exampleHanzi: "我家的小狗会摇尾巴。",
              examplePinyin: "Wǒ jiā de xiǎogǒu huì yáo wěiba.",
              exampleTranslation: "Anjing kecil di rumahku bisa menggoyangkan ekornya.",
              image: "assets/textbook/book_2/img_4.jpg",
              iconEmoji: "🐶"
            },
            {
              hanzi: "猫",
              pinyin: "māo",
              tone: 1,
              meaningId: "Kucing",
              meaningEn: "Cat",
              strokes: 11,
              strokeNames: ["犭(3画)", "苗 (8画: 艹, 田)"],
              radical: "犭(Quǎn)",
              exampleHanzi: "小猫爱吃鱼。",
              examplePinyin: "Xiǎomāo ài chī yú.",
              exampleTranslation: "Kucing kecil suka makan ikan.",
              image: "assets/textbook/book_2/img_4.jpg",
              iconEmoji: "🐱"
            },
            {
              hanzi: "鸟",
              pinyin: "niǎo",
              tone: 3,
              meaningId: "Burung",
              meaningEn: "Bird",
              strokes: 5,
              strokeNames: ["撇 (Piě)", "横折钩 (Héngzhégōu)", "点 (Diǎn)", "竖折折钩 (Shùzhézhégōu)", "横 (Héng)"],
              radical: "鸟 (Niǎo)",
              exampleHanzi: "树上有一只小鸟。",
              examplePinyin: "Shù shang yǒu yī zhī xiǎoniǎo.",
              exampleTranslation: "Di atas pohon ada seekor burung kecil.",
              image: "assets/textbook/book_2/img_4.jpg",
              iconEmoji: "🐦"
            },
            {
              hanzi: "聪明",
              pinyin: "cōngmíng",
              tone: 12,
              meaningId: "Pintar / Cerdas",
              meaningEn: "Clever / Smart",
              strokes: 20,
              strokeNames: ["聪 (12画: 耳, 总)", "明 (8画: 日, 月)"],
              radical: "耳 / 日",
              exampleHanzi: "他是一个聪明的孩子。",
              examplePinyin: "Tā shì yí gè cōngmíng de háizi.",
              exampleTranslation: "Dia adalah anak yang pintar.",
              image: "assets/textbook/book_2/img_4.jpg",
              iconEmoji: "💡"
            }
          ]
        },
        {
          unitNumber: 10,
          title: "Unit 10: 我们的教室 (Ruang Kelas Kami)",
          storyTitle: "我们的教室",
          theme: "Perlengkapan Kelas & Belajar",
          dialogue: {
            speakerA: "A: 教室里有什么？(Jiàoshì lǐ yǒu shénme? - Di dalam kelas ada apa?)",
            speakerB: "B: 教室里有桌子、椅子和黑板。(Jiàoshì lǐ yǒu zhuōzi, yǐzi hé hēibǎn. - Di dalam kelas ada meja, kursi, dan papan tulis.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "我是一年级二班的学生，这是我们明亮的教室。",
              pinyin: "Wǒ shì yī niánjí èr bān de xuésheng, zhè shì wǒmen míngliàng de jiàoshì.",
              indonesian: "Saya adalah murid kelas 1-B, ini adalah ruang kelas kami yang terang benderang."
            },
            {
              index: 2,
              hanzi: "教室里有十六张桌子、十六把椅子和一个整齐的书架。",
              pinyin: "Jiàoshì lǐ yǒu shíliù zhāng zhuōzi, shíliù bǎ yǐzi hé yí gè zhěngqí de shūjià.",
              indonesian: "Di dalam kelas ada 16 meja, 16 kursi, dan sebuah rak buku yang rapi."
            },
            {
              index: 3,
              hanzi: "教室前面是黑板，后面的墙上挂着一张中国地图，我们的教室真干净！",
              pinyin: "Jiàoshì qiánmiàn shì hēibǎn, hòumiàn de qiáng shang guàzhe yī zhāng Zhōngguó dìtú, wǒmen de jiàoshì zhēn gānjìng!",
              indonesian: "Depan kelas adalah papan tulis, di dinding belakang tergantung sebuah peta Tiongkok, kelas kami sungguh bersih!"
            }
          ],
          readingPassage: "我是一年级二班的学生。这是我们的教室。教室里有十六张桌子、十六把椅子和一个书架。教室前面是黑板，教室后面的墙上是一张中国地图。我们的教室很干净。",
          readingPinyin: "Wǒ shì yī niánjí èr bān de xuésheng. Zhè shì wǒmen de jiàoshì. Jiàoshì lǐ yǒu shíliù zhāng zhuōzi, shíliù bǎ yǐzi hé yí gè shūjià. Jiàoshì qiánmiàn shì hēibǎn, jiàoshì hòumiàn de qiáng shang shì yī zhāng Zhōngguó dìtú. Wǒmen de jiàoshì hěn gānjìng.",
          readingTranslation: "Saya murid kelas 1-B. Ini adalah ruang kelas kami. Di kelas ada 16 meja, 16 kursi dan 1 rak buku. Di depan ada papan tulis, di dinding belakang ada peta Tiongkok. Kelas kami sangat bersih.",
          vocab: [
            {
              hanzi: "教室",
              pinyin: "jiàoshì",
              tone: 44,
              meaningId: "Ruang Kelas",
              meaningEn: "Classroom",
              strokes: 19,
              strokeNames: ["教 (10画)", "室 (9画: 宀, 至)"],
              radical: "攵 / 宀",
              exampleHanzi: "我们在教室里读书。",
              examplePinyin: "Wǒmen zài jiàoshì lǐ dúshū.",
              exampleTranslation: "Kami membaca buku di dalam kelas.",
              image: "assets/textbook/book_2/img_10.jpg",
              iconEmoji: "🏫"
            },
            {
              hanzi: "黑板",
              pinyin: "hēibǎn",
              tone: 13,
              meaningId: "Papan Tulis Hitam",
              meaningEn: "Blackboard",
              strokes: 20,
              strokeNames: ["黑 (12画)", "板 (8画: 木, 反)"],
              radical: "黑 / 木",
              exampleHanzi: "老师在黑板上写生词。",
              examplePinyin: "Lǎoshī zài hēibǎn shang xiě shēngcí.",
              exampleTranslation: "Guru menulis kosakata baru di papan tulis.",
              image: "assets/textbook/book_2/img_10.jpg",
              iconEmoji: "📋"
            },
            {
              hanzi: "干净",
              pinyin: "gānjìng",
              tone: 14,
              meaningId: "Bersih",
              meaningEn: "Clean",
              strokes: 14,
              strokeNames: ["干 (3画: 横, 横, 竖)", "净 (11画: 冫, 争)"],
              radical: "干 / 冫",
              exampleHanzi: "把手洗干净。",
              examplePinyin: "Bǎ shǒu xǐ gānjìng.",
              exampleTranslation: "Cucilah tangan sampai bersih.",
              image: "assets/textbook/book_2/img_10.jpg",
              iconEmoji: "✨"
            },
            {
              hanzi: "地图",
              pinyin: "dìtú",
              tone: 42,
              meaningId: "Peta",
              meaningEn: "Map",
              strokes: 14,
              strokeNames: ["地 (6画: 土, 也)", "图 (8画: 囗, 冬)"],
              radical: "土 / 囗",
              exampleHanzi: "墙上有一张世界地图。",
              examplePinyin: "Qiáng shang yǒu yī zhāng shìjiè dìtú.",
              exampleTranslation: "Di dinding ada selembar peta dunia.",
              image: "assets/textbook/book_2/img_10.jpg",
              iconEmoji: "🗺️"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Han Yu 3 (汉语 第三册)",
      level: "Tingkat Dasar 3",
      dinoRank: "Stegosaurus Tangguh",
      badge: "🦕 Pelat Fosil Stego",
      themeColor: "#0D9488",
      description: "Kalender dan waktu, empat musim, hobi, pesta ulang tahun, dan kisah hewan bijak.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 今天几月几日 (Hari Ini Tanggal Berapa?)",
          storyTitle: "今天几月几日",
          theme: "Tanggal, Bulan & Hari Libur",
          dialogue: {
            speakerA: "A: 今天几月几日？(Jīntiān jǐ yuè jǐ rì? - Hari ini tanggal berapa bulan berapa?)",
            speakerB: "B: 今天一月一日，今天是元旦。(Jīntiān yī yuè yī rì, jīntiān shì Yuándàn. - Hari ini 1 Januari, hari ini adalah Tahun Baru Masehi.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "今天四月六日，假期结束了，学校开学了。",
              pinyin: "Jīntiān sì yuè liù rì, jiàqī jiéshù le, xuéxiào kāixué le.",
              indonesian: "Hari ini tanggal 6 April, liburan telah usai, sekolah mulai masuk kembali."
            },
            {
              index: 2,
              hanzi: "去年我上小学一年级，今年我上二年级了，弟弟也上学了。",
              pinyin: "Qùnián wǒ shàng xiǎoxué yī niánjí, jīnnián wǒ shàng èr niánjí le, dìdi yě shàngxué le.",
              indonesian: "Tahun lalu saya duduk di kelas 1 SD, tahun ini saya sudah naik ke kelas 2, adik laki-laki juga mulai masuk sekolah."
            },
            {
              index: 3,
              hanzi: "新学期，我们发了很多漂亮的新书，我和弟弟都非常高兴！",
              pinyin: "Xīn xuéqī, wǒmen fā le hěn duō piàoliang de xīn shū, wǒ hé dìdi dōu fēicháng gāoxìng!",
              indonesian: "Di semester baru, kami dibagikan banyak buku baru yang bagus, saya dan adik sungguh sangat senang!"
            }
          ],
          readingPassage: "今天四月六日，假期结束了，学校开学了。去年，我上小学一年级。今年，我上二年级了，弟弟也上学了。新学期，我们发了很多新书，我和弟弟都很高兴。",
          readingPinyin: "Jīntiān sì yuè liù rì, jiàqī jiéshù le, xuéxiào kāixué le. Qùnián, wǒ shàng xiǎoxué yī niánjí. Jīnnián, wǒ shàng èr niánjí le, dìdi yě shàngxué le. Xīn xuéqī, wǒmen fā le hěn duō xīn shū, wǒ hé dìdi dōu hěn gāoxìng.",
          readingTranslation: "Hari ini 6 April, liburan usai, sekolah mulai masuk. Tahun lalu saya kelas 1 SD. Tahun ini saya kelas 2, adik juga mulai sekolah. Semester baru kami mendapat banyak buku baru, saya dan adik sangat senang.",
          vocab: [
            {
              hanzi: "月",
              pinyin: "yuè",
              tone: 4,
              meaningId: "Bulan",
              meaningEn: "Month / Moon",
              strokes: 4,
              strokeNames: ["撇 (Piě)", "横折钩 (Héngzhégōu)", "横 (Héng)", "横 (Héng)"],
              radical: "月 (Yuè)",
              exampleHanzi: "一年有十二个月。",
              examplePinyin: "Yī nián yǒu shí'èr gè yuè.",
              exampleTranslation: "Satu tahun ada 12 bulan.",
              image: "assets/textbook/book_3/img_1.jpg",
              iconEmoji: "🌙"
            },
            {
              hanzi: "日",
              pinyin: "rì",
              tone: 4,
              meaningId: "Hari / Tanggal / Matahari",
              meaningEn: "Day / Sun",
              strokes: 4,
              strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)"],
              radical: "日 (Rì)",
              exampleHanzi: "今天是几日？",
              examplePinyin: "Jīntiān shì jǐ rì?",
              exampleTranslation: "Hari ini tanggal berapa?",
              image: "assets/textbook/book_3/img_1.jpg",
              iconEmoji: "☀️"
            },
            {
              hanzi: "开学",
              pinyin: "kāixué",
              tone: 12,
              meaningId: "Mulai Masuk Sekolah",
              meaningEn: "School starts",
              strokes: 12,
              strokeNames: ["开 (4画: 横, 横, 撇, 竖)", "学 (8画)"],
              radical: "廾 / 子",
              exampleHanzi: "明天学校就开学了。",
              examplePinyin: "Míngtiān xuéxiào jiù kāixué le.",
              exampleTranslation: "Besok sekolah sudah mulai masuk.",
              image: "assets/textbook/book_3/img_1.jpg",
              iconEmoji: "🎒"
            },
            {
              hanzi: "假期",
              pinyin: "jiàqī",
              tone: 41,
              meaningId: "Liburan",
              meaningEn: "Holiday / Vacation",
              strokes: 23,
              strokeNames: ["假 (11画: 亻, 叚)", "期 (12画: 其, 月)"],
              radical: "亻/ 月",
              exampleHanzi: "祝你假期快乐！",
              examplePinyin: "Zhù nǐ jiàqī kuàilè!",
              exampleTranslation: "Selamat berlibur!",
              image: "assets/textbook/book_3/img_1.jpg",
              iconEmoji: "🏖️"
            }
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: 今天的天气怎么样 (Bagaimana Cuaca Hari Ini?)",
          storyTitle: "今天的天气怎么样",
          theme: "Empat Musim & Sensasi Suhu",
          dialogue: {
            speakerA: "A: 今天的天气怎么样？(Jīntiān de tiānqì zěnmeyàng? - Bagaimana cuaca hari ini?)",
            speakerB: "B: 今天的天气不冷也不热，很舒服。(Jīntiān de tiānqì bù lěng yě bú rè, hěn shūfu. - Cuaca hari ini tidak dingin tidak panas, sangat nyaman.)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "中国一年有四个季节：春天、夏天、秋天和冬天。",
              pinyin: "Zhōngguó yī nián yǒu sì gè jìjié: chūntiān, xiàtiān, qiūtiān hé dōngtiān.",
              indonesian: "Di Tiongkok setahun ada empat musim: musim semi, musim panas, musim gugur, dan musim dingin."
            },
            {
              index: 2,
              hanzi: "春天很暖和，百花盛开；夏天很热，绿树成荫。",
              pinyin: "Chūntiān hěn nuǎnhuo, bǎi huā shèngkāi; xiàtiān hěn rè, lǜ shù chéng yīn.",
              indonesian: "Musim semi sangat hangat dan aneka bunga bermekaran; musim panas sangat terik dan pepohonan rindang."
            },
            {
              index: 3,
              hanzi: "秋天很凉快，落叶纷飞；冬天很冷，雪花飘飘。",
              pinyin: "Qiūtiān hěn liángkuai, luòyè fēnfēi; dōngtiān hěn lěng, xuěhuā piāopiāo.",
              indonesian: "Musim gugur sejuk nyaman dengan daun berguguran; musim dingin sangat dingin dengan kepingan salju berterbangan."
            },
            {
              index: 4,
              hanzi: "现在是春天，天气很好，不冷也不热！",
              pinyin: "Xiànzài shì chūntiān, tiānqì hěn hǎo, bù lěng yě bú rè!",
              indonesian: "Sekarang adalah musim semi, cuacanya sangat bagus, tidak terlalu dingin maupun terlalu panas!"
            }
          ],
          readingPassage: "中国一年有四个季节：春天、夏天、秋天和冬天。春天很暖和，夏天很热，秋天很凉快，冬天很冷。现在是春天，天气很好，不冷也不热。",
          readingPinyin: "Zhōngguó yī nián yǒu sì gè jìjié: chūntiān, xiàtiān, qiūtiān hé dōngtiān. Chūntiān hěn nuǎnhuo, xiàtiān hěn rè, qiūtiān hěn liángkuai, dōngtiān hěn lěng. Xiànzài shì chūntiān, tiānqì hěn hǎo, bù lěng yě bú rè.",
          readingTranslation: "Tiongkok setahun ada 4 musim: semi, panas, gugur, dan dingin. Musim semi hangat, musim panas panas, musim gugur sejuk, musim dingin dingin. Sekarang musim semi, cuaca bagus tidak dingin tidak panas.",
          vocab: [
            {
              hanzi: "春天",
              pinyin: "chūntiān",
              tone: 11,
              meaningId: "Musim Semi",
              meaningEn: "Spring",
              strokes: 13,
              strokeNames: ["春 (9画: 横, 横, 横, 撇, 捺, 日)", "天 (4画)"],
              radical: "日 (Rì)",
              exampleHanzi: "春天花儿开得很美。",
              examplePinyin: "Chūntiān huār kāi de hěn měi.",
              exampleTranslation: "Di musim semi bunga bermekaran dengan indah.",
              image: "assets/textbook/book_3/img_2.jpg",
              iconEmoji: "🌸"
            },
            {
              hanzi: "夏天",
              pinyin: "xiàtiān",
              tone: 41,
              meaningId: "Musim Panas",
              meaningEn: "Summer",
              strokes: 14,
              strokeNames: ["夏 (10画: 横, 撇, 竖, 横折, 横, 横, 横, 撇, 横撇, 捺)", "天 (4画)"],
              radical: "夂 (Zhǐ)",
              exampleHanzi: "夏天可以去海边游泳。",
              examplePinyin: "Xiàtiān kěyǐ qù hǎibiān yóuyǒng.",
              exampleTranslation: "Musim panas bisa pergi berenang ke pantai.",
              image: "assets/textbook/book_3/img_2.jpg",
              iconEmoji: "☀️"
            },
            {
              hanzi: "暖和",
              pinyin: "nuǎnhuo",
              tone: 30,
              meaningId: "Hangat / Nyaman",
              meaningEn: "Warm",
              strokes: 21,
              strokeNames: ["暖 (13画: 日, 爰)", "和 (8画: 禾, 口)"],
              radical: "日 / 禾",
              exampleHanzi: "春天的阳光很暖和。",
              examplePinyin: "Chūntiān de yángguāng hěn nuǎnhuo.",
              exampleTranslation: "Sinar matahari musim semi sangat hangat.",
              image: "assets/textbook/book_3/img_2.jpg",
              iconEmoji: "🌤️"
            },
            {
              hanzi: "凉快",
              pinyin: "liángkuai",
              tone: 20,
              meaningId: "Sejuk / Adem",
              meaningEn: "Cool and pleasant",
              strokes: 17,
              strokeNames: ["凉 (10画: 冫, 京)", "快 (7画: 忄, 夬)"],
              radical: "冫/ 忄",
              exampleHanzi: "秋天的微风很凉快。",
              examplePinyin: "Qiūtiān de wēifēng hěn liángkuai.",
              exampleTranslation: "Angin sepoi-sepoi musim gugur sangat sejuk.",
              image: "assets/textbook/book_3/img_2.jpg",
              iconEmoji: "🍂"
            }
          ]
        },
        {
          unitNumber: 12,
          title: "Unit 12: 小花猫给外婆送鱼 (Kucing Belang Mengantar Ikan)",
          storyTitle: "小花猫给外婆送鱼",
          theme: "Kemandirian & Keberanian",
          dialogue: {
            speakerA: "A: 你敢自己去外婆家吗？(Nǐ gǎn zìjǐ qù wàipó jiā ma? - Beranikah kamu pergi sendiri ke rumah nenek?)",
            speakerB: "B: 我敢去，我已经长大了！(Wǒ gǎn qù, wǒ yǐjīng zhǎngdà le! - Aku berani, aku sudah besar!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "猫妈妈让小花猫去外婆家，给外婆送两条新鲜的鱼。",
              pinyin: "Māo māma ràng xiǎohuāmāo qù wàipó jiā, gěi wàipó sòng liǎng tiáo xīnxian de yú.",
              indonesian: "Ibu kucing menyuruh anak kucing belang pergi ke rumah nenek, mengantarkan dua ekor ikan segar."
            },
            {
              index: 2,
              hanzi: "小花猫说：“妈妈，我不敢自己去，你跟我一起去吧。”",
              pinyin: "Xiǎohuāmāo shuō: “Māma, wǒ bù gǎn zìjǐ qù, nǐ gēn wǒ yìqǐ qù ba.”",
              indonesian: "Anak kucing belang berkata: “Ibu, aku tidak berani pergi sendiri, pergilah bersamaku.”"
            },
            {
              index: 3,
              hanzi: "妈妈说：“你是个勇敢的孩子，你已经长大了，自己去吧。”",
              pinyin: "Māma shuō: “Nǐ shì ge yǒnggǎn de háizi, nǐ yǐjīng zhǎngdà le, zìjǐ qù ba.”",
              indonesian: "Ibu berkata: “Kamu adalah anak pemberani, kamu sudah bertumbuh besar, pergilah sendiri.”"
            },
            {
              index: 4,
              hanzi: "小花猫点点头说：“好吧。妈妈，再见！”",
              pinyin: "Xiǎohuāmāo diǎndiǎn tóu shuō: “Hǎo ba. Māma, zàijiàn!”",
              indonesian: "Anak kucing belang mengangguk dan berkata: “Baiklah. Ibu, sampai jumpa!”"
            }
          ],
          readingPassage: "猫妈妈让小花猫去外婆家，给外婆送两条鱼。小花猫说：“妈妈，我不敢自己去，你跟我一起去吧。”妈妈说：“你是个勇敢的孩子，你已经长大了，自己去吧。妈妈在家洗衣服。”小花猫说：“好吧。妈妈，再见！”",
          readingPinyin: "Māo māma ràng xiǎohuāmāo qù wàipó jiā, gěi wàipó sòng liǎng tiáo yú. Xiǎohuāmāo shuō: “Māma, wǒ bù gǎn zìjǐ qù, nǐ gēn wǒ yìqǐ qù ba.” Māma shuō: “Nǐ shì ge yǒnggǎn de háizi, nǐ yǐjīng zhǎngdà le, zìjǐ qù ba. Māma zài jiā xǐ yīfu.” Xiǎohuāmāo shuō: “Hǎo ba. Māma, zàijiàn!”",
          readingTranslation: "Ibu kucing menyuruh kucing belang ke rumah nenek mengantar 2 ikan. Kucing berkata: 'Ibu, aku tak berani sendiri, ayo pergi bersamaku.' Ibu berkata: 'Kamu anak pemberani dan sudah besar, pergilah sendiri.' Kucing berkata: 'Baiklah, ibu sampai jumpa!'",
          vocab: [
            {
              hanzi: "外婆",
              pinyin: "wàipó",
              tone: 42,
              meaningId: "Nenek (dari pihak ibu)",
              meaningEn: "Maternal grandmother",
              strokes: 16,
              strokeNames: ["外 (5画: 夂, 卜)", "婆 (11画: 水, 皮, 女)"],
              radical: "夕 / 女",
              exampleHanzi: "外婆非常疼爱我。",
              examplePinyin: "Wàipó fēicháng téng'ài wǒ.",
              exampleTranslation: "Nenek sangat menyayangi saya.",
              image: "assets/textbook/book_3/img_3.jpg",
              iconEmoji: "👵"
            },
            {
              hanzi: "勇敢",
              pinyin: "yǒnggǎn",
              tone: 33,
              meaningId: "Berani / Gagah Perkasa",
              meaningEn: "Brave / Courageous",
              strokes: 23,
              strokeNames: ["勇 (9画: 甬, 力)", "敢 (12画: 爫, 厂, 攵)"],
              radical: "力 / 攵",
              exampleHanzi: "做个勇敢的好少年。",
              examplePinyin: "Zuò ge yǒnggǎn de hǎo shàonián.",
              exampleTranslation: "Jadilah pemuda cilik yang pemberani.",
              image: "assets/textbook/book_3/img_3.jpg",
              iconEmoji: "🦁"
            },
            {
              hanzi: "自己",
              pinyin: "zìjǐ",
              tone: 43,
              meaningId: "Diri Sendiri / Mandiri",
              meaningEn: "Self / Oneself",
              strokes: 9,
              strokeNames: ["自 (6画: 撇, 竖, 横折, 横, 横, 横)", "己 (3画: 横折, 横, 竖弯钩)"],
              radical: "自 / 己",
              exampleHanzi: "自己的事情自己做。",
              examplePinyin: "Zìjǐ de shìqing zìjǐ zuò.",
              exampleTranslation: "Urusan diri sendiri dikerjakan secara mandiri.",
              image: "assets/textbook/book_3/img_3.jpg",
              iconEmoji: "🙋"
            },
            {
              hanzi: "鱼",
              pinyin: "yú",
              tone: 2,
              meaningId: "Ikan",
              meaningEn: "Fish",
              strokes: 8,
              strokeNames: ["撇 (Piě)", "横撇 (Héngpiě)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "横 (Héng)"],
              radical: "鱼 (Yú)",
              exampleHanzi: "河里游着许多鱼。",
              examplePinyin: "Hé lǐ yóuzhe xǔduō yú.",
              exampleTranslation: "Di sungai berenang banyak ikan.",
              image: "assets/textbook/book_3/img_3.jpg",
              iconEmoji: "🐟"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Han Yu 4 (汉语 第四册)",
      level: "Tingkat Menengah 1",
      dinoRank: "Brachiosaurus Cerdas",
      badge: "🌿 Fosil Jejak Raksasa",
      themeColor: "#2563EB",
      description: "Cerita fabel burung berkicau, mendaki gunung, etika menonton TV, kesehatan gigi, dan kecerdikan ayam jago.",
      units: [
        {
          unitNumber: 4,
          title: "Unit 4: 为什么不试试 (Mengapa Tidak Mencoba?)",
          storyTitle: "为什么不试试 (Zheng Ren Mai Lu)",
          theme: "Kearifan Klasik & Keberanian Mencoba",
          dialogue: {
            speakerA: "A: 你买到合脚的鞋了吗？(Nǐ mǎidào héjiǎo de xié le ma? - Sudahkah kamu membeli sepatu yang pas?)",
            speakerB: "B: 我忘了带量好的绳子！(Wǒ wàng le dài liáng hǎo de shéngzi! - Aku lupa bawa tali pengukur!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "有一个人去鞋店买鞋。出门以前，他用绳子量了脚，在绳上做了记号。",
              pinyin: "Yǒu yí gè rén qù xiédiàn mǎi xié. Chūmén yǐqián, tā yòng shéngzi liáng le jiǎo, zài shéng shang zuò le jìhao.",
              indonesian: "Ada seseorang pergi ke toko sepatu untuk membeli sepatu. Sebelum keluar rumah, ia mengukur kakinya dengan tali dan menandainya."
            },
            {
              index: 2,
              hanzi: "到鞋店以后，他摸摸口袋说：“哎呀，我忘了拿绳子！”",
              pinyin: "Dào xiédiàn yǐhòu, tā mōmō kǒudai shuō: “Āiyā, wǒ wàng le ná shéngzi!”",
              indonesian: "Setibanya di toko, ia meraba sakunya lalu berseru: “Aduh, saya lupa bawa talinya!”"
            },
            {
              index: 3,
              hanzi: "等他取了绳子再回鞋店，鞋店已经关门了。",
              pinyin: "Děng tā qǔ le shéngzi zài huí xiédiàn, xiédiàn yǐjīng guānmén le.",
              indonesian: "Saat ia mengambil tali dan kembali ke toko, toko sepatu sudah tutup."
            },
            {
              index: 4,
              hanzi: "妻子很生气地说：“你为什么不自己用脚试一试鞋呢？”",
              pinyin: "Qīzi hěn shēngqì de shuō: “Nǐ wèishénme bù zìjǐ yòng jiǎo shì yí shì xié ne?”",
              indonesian: "Istrinya dengan kesal berkata: “Mengapa kamu tidak langsung mencoba sepatunya dengan kakimu sendiri?”"
            }
          ],
          readingPassage: "有一个人去鞋店买鞋。出门以前，他用绳子量了一下自己的脚，在绳子上做了一个记号。到鞋店以后，他摸摸自己的口袋，说：“哎呀，我忘了拿绳子！”等他取了绳子再回鞋店，鞋店已经关门了。回家后，他告诉妻子这件事情。妻子很生气，说：“你为什么不自己试试鞋呢？”",
          readingPinyin: "Yǒu yí gè rén qù xiédiàn mǎi xié. Chūmén yǐqián, tā yòng shéngzi liáng le yíxià zìjǐ de jiǎo, zài shéngzi shang zuò le yí gè jìhao. Dào xiédiàn yǐhòu, tā mōmō zìjǐ de kǒudai, shuō: “Āiyā, wǒ wàng le ná shéngzi!” Děng tā qǔ le shéngzi zài huí xiédiàn, xiédiàn yǐjīng guānmén le. Huíjiā hòu, tā gàosu qīzi zhè jiàn shìqing. Qīzi hěn shēngqì, shuō: “Nǐ wèishénme bù zìjǐ shìshi xié ne?”",
          readingTranslation: "Seseorang ingin beli sepatu, mengukur kakinya dengan tali. Sampai di toko lupa bawa tali. Pulang ambil tali, toko sudah tutup. Istrinya mengomel: Mengapa tidak langsung mencoba dengan kakimu sendiri?",
          vocab: [
            {
              hanzi: "试",
              pinyin: "shì",
              tone: 4,
              meaningId: "Mencoba / Menguji",
              meaningEn: "Try / Test",
              strokes: 8,
              strokeNames: ["讠(2画)", "式 (6画: 横, 竖, 横, 横折钩, 斜钩, 点)"],
              radical: "讠(Yán)",
              exampleHanzi: "请试穿这件新衣服。",
              examplePinyin: "Qǐng shìchuān zhè jiàn xīn yīfu.",
              exampleTranslation: "Silakan mencoba baju baru ini.",
              image: "assets/textbook/book_4/img_4.jpg",
              iconEmoji: "👟"
            },
            {
              hanzi: "绳子",
              pinyin: "shéngzi",
              tone: 20,
              meaningId: "Tali",
              meaningEn: "Rope / String",
              strokes: 14,
              strokeNames: ["绳 (11画: 纟, 黾)", "子 (3画)"],
              radical: "纟(Mì)",
              exampleHanzi: "用绳子系紧包裹。",
              examplePinyin: "Yòng shéngzi jì jǐn bāoguǒ.",
              exampleTranslation: "Ikat paket dengan kencang menggunakan tali.",
              image: "assets/textbook/book_4/img_4.jpg",
              iconEmoji: "🪢"
            },
            {
              hanzi: "忘记",
              pinyin: "wàngjì",
              tone: 44,
              meaningId: "Lupa",
              meaningEn: "Forget",
              strokes: 12,
              strokeNames: ["忘 (7画: 亡, 心)", "记 (5画: 讠, 己)"],
              radical: "心 / 讠",
              exampleHanzi: "别忘记带钥匙。",
              examplePinyin: "Bié wàngjì dài yàoshi.",
              exampleTranslation: "Jangan lupa bawa kunci.",
              image: "assets/textbook/book_4/img_4.jpg",
              iconEmoji: "🧠"
            },
            {
              hanzi: "生词",
              pinyin: "shēngcí",
              tone: 12,
              meaningId: "Kosakata Baru",
              meaningEn: "New words",
              strokes: 10,
              strokeNames: ["生 (5画)", "词 (5画: 讠, 司)"],
              radical: "生 / 讠",
              exampleHanzi: "今天我们要记十个生词。",
              examplePinyin: "Jīntiān wǒmen yào jì shí gè shēngcí.",
              exampleTranslation: "Hari ini kita harus menghafal sepuluh kosakata baru.",
              image: "assets/textbook/book_4/img_1.jpg",
              iconEmoji: "📝"
            }
          ]
        },
        {
          unitNumber: 15,
          title: "Unit 15: 聪明的公鸡 (Ayam Jago yang Cerdik)",
          storyTitle: "聪明的公鸡",
          theme: "Kecerdikan & Keberanian",
          dialogue: {
            speakerA: "A: 公鸡怕不怕大灰狼？(Gōngjī pà bu pà dàhuīláng? - Apakah ayam jago takut pada serigala abu-abu?)",
            speakerB: "B: 公鸡一点儿也不怕，因为它很聪明！(Gōngjī yìdiǎnr yě bú pà, yīnwèi tā hěn cōngmíng! - Ayam jago tidak takut sama sekali karena ia sangat cerdik!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "公鸡正在路上昂首散步，迎面遇见了一只饿狼。",
              pinyin: "Gōngjī zhèngzài lù shang ángshǒu sànbù, yíngmiàn yùjiàn le yī zhī è láng.",
              indonesian: "Ayam jago sedang berjalan santai di jalan, lalu berpapasan dengan seekor serigala lapar."
            },
            {
              index: 2,
              hanzi: "狼心里暗想：“我正想美美吃一只肥鸡呢！”",
              pinyin: "Láng xīnlǐ ànxiǎng: “Wǒ zhèng xiǎng měiměi chī yī zhī féi jī ne!”",
              indonesian: "Serigala membatin: “Aku memang sedang ingin menyantap seekor ayam gemuk yang lezat!”"
            },
            {
              index: 3,
              hanzi: "公鸡机智地说：“后面还有一只大猎狗，我正在等它一起走呢。”",
              pinyin: "Gōngjī jīzhì de shuō: “Hòumiàn hái yǒu yī zhī dà liègǒu, wǒ zhèngzài děng tā yìqǐ zǒu ne.”",
              indonesian: "Ayam jago dengan cerdik berkata: “Di belakang ada seekor anjing pemburu besar, aku sedang menunggunya jalan bersama.”"
            },
            {
              index: 4,
              hanzi: "狼听了公鸡的话，吓得慌忙逃跑了！",
              pinyin: "Láng tīng le gōngjī de huà, xià de huāngmáng táopǎo le!",
              indonesian: "Mendengar perkataan ayam jago, serigala ketakutan dan bergegas lari tunggang langgang!"
            }
          ],
          readingPassage: "公鸡正在路上走，遇见了一只狼。狼看见公鸡，很高兴，他想：“我正想吃一只鸡呢。”狼问：“好朋友，你去哪儿？”公鸡说：“我去看朋友。”狼说：“我陪你去吧。”公鸡想：糟糕，他要吃我，我不能上他的当！公鸡对狼说：“对不起，后面还有一只狗，我正等他呢。”狼听了公鸡的话，急忙跑了。",
          readingPinyin: "Gōngjī zhèngzài lù shang zǒu, yùjiàn le yī zhī láng. Láng kànjiàn gōngjī, hěn gāoxìng, tā xiǎng: “Wǒ zhèng xiǎng chī yī zhī jī ne.” Láng wèn: “Hǎo péngyou, nǐ qù nǎr?” Gōngjī shuō: “Wǒ qù kàn péngyou.” Láng shuō: “Wǒ péi nǐ qù ba.” Gōngjī xiǎng: Zāogāo, tā yào chī wǒ, wǒ bù néng shàng tā de dàng! Gōngjī duì láng shuō: “Duìbuqǐ, hòumiàn hái yǒu yī zhī gǒu, wǒ zhèng děng tā ne.” Láng tīng le gōngjī de huà, jímáng pǎo le.",
          readingTranslation: "Ayam jago bertemu serigala di jalan. Serigala ingin memakannya dan berpura-pura menemani. Ayam jago pintar berkata: 'Di belakang ada seekor anjing yang sedang kutunggu.' Serigala ketakutan dan langsung kabur.",
          vocab: [
            {
              hanzi: "公鸡",
              pinyin: "gōngjī",
              tone: 11,
              meaningId: "Ayam Jago",
              meaningEn: "Rooster",
              strokes: 11,
              strokeNames: ["公 (4画)", "鸡 (7画: 又, 鸟)"],
              radical: "八 / 鸟",
              exampleHanzi: "大公鸡天亮就打鸣。",
              examplePinyin: "Dà gōngjī tiānliàng jiù dǎmíng.",
              exampleTranslation: "Ayam jago berkokok saat fajar menyingsing.",
              image: "assets/textbook/book_4/img_15.jpg",
              iconEmoji: "🐓"
            },
            {
              hanzi: "遇见",
              pinyin: "yùjiàn",
              tone: 44,
              meaningId: "Bertemu / Berpapasan",
              meaningEn: "Meet / Encounter",
              strokes: 14,
              strokeNames: ["遇 (10画: 辶, 禺)", "见 (4画)"],
              radical: "辶 / 见",
              exampleHanzi: "在路上遇见了老朋友。",
              examplePinyin: "Zài lù shang yùjiàn le lǎo péngyou.",
              exampleTranslation: "Di jalan berpapasan dengan teman lama.",
              image: "assets/textbook/book_4/img_15.jpg",
              iconEmoji: "🤝"
            },
            {
              hanzi: "狼",
              pinyin: "láng",
              tone: 2,
              meaningId: "Serigala",
              meaningEn: "Wolf",
              strokes: 10,
              strokeNames: ["犭(3画)", "良 (7画: 点, 横折, 横, 横, 竖提, 撇, 捺)"],
              radical: "犭(Quǎn)",
              exampleHanzi: "狼是凶猛的肉食动物。",
              examplePinyin: "Láng shì xiōngměng de ròushí dòngwù.",
              exampleTranslation: "Serigala adalah binatang karnivora yang buas.",
              image: "assets/textbook/book_4/img_15.jpg",
              iconEmoji: "🐺"
            },
            {
              hanzi: "糟糕",
              pinyin: "zāogāo",
              tone: 11,
              meaningId: "Gawat / Celaka",
              meaningEn: "Terrible / Bad luck",
              strokes: 28,
              strokeNames: ["糟 (14画: 米, 曹)", "糕 (14画: 米, 羔)"],
              radical: "米 (Mǐ)",
              exampleHanzi: "糟糕，下大雨了！",
              examplePinyin: "Zāogāo, xià dà yǔ le!",
              exampleTranslation: "Gawat, hujan lebat turun!",
              image: "assets/textbook/book_4/img_15.jpg",
              iconEmoji: "😱"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Han Yu 5 (汉语 第五册)",
      level: "Tingkat Menengah 2",
      dinoRank: "Pterodactyl Penjelajah",
      badge: "🦅 Sayap Fosil Ptero",
      themeColor: "#7C3AED",
      description: "Semester baru, kebaikan ibu, dialog meja dan kursi, panda Tiongkok, fabel Sima Guang, dan cerita pelangi.",
      units: [
        {
          unitNumber: 8,
          title: "Unit 8: 可爱的大熊猫 (Panda Raksasa yang Lucu)",
          storyTitle: "可爱的大熊猫",
          theme: "Satwa Langka & Pelestarian Alam",
          dialogue: {
            speakerA: "A: 大熊猫最喜欢吃什么？(Dàxióngmāo zuì xǐhuan chī shénme? - Panda paling suka makan apa?)",
            speakerB: "B: 大熊猫最爱吃新鲜的嫩竹子！(Dàxióngmāo zuì ài chī xīnxian de nèn zhúzi! - Panda paling suka makan bambu muda yang segar!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "星期天，小华在家里看电视，看到了一只可爱的大熊猫。",
              pinyin: "Xīngqītiān, Xiǎohuá zài jiā lǐ kàn diànshì, kàndào le yī zhī kě'ài de dàxióngmāo.",
              indonesian: "Pada hari Minggu, Xiao Hua menonton televisi di rumah dan melihat seekor panda raksasa yang lucu."
            },
            {
              index: 2,
              hanzi: "它的头和身子都是白色的，四肢和肩膀是黑色的。",
              pinyin: "Tā de tóu hé shēnzi dōu shì báisè de, sìzhī hé jiānbǎng shì hēisè de.",
              indonesian: "Kepala dan badannya berwarna putih, sedangkan keempat kaki dan pundaknya berwarna hitam."
            },
            {
              index: 3,
              hanzi: "大熊猫最爱吃竹子，是中国的国宝，我们要好好保护它们！",
              pinyin: "Dàxióngmāo zuì ài chī zhúzi, shì Zhōngguó de guóbǎo, wǒmen yào hǎohāo bǎohù tāmen!",
              indonesian: "Panda raksasa paling suka makan bambu, merupakan pusaka nasional Tiongkok, kita harus melindungi mereka dengan baik!"
            }
          ],
          readingPassage: "星期天，小华在家里看电视。刚打开电视，他就看到了一个可爱的动物。它的头和身子都是白的，四肢和肩膀是黑的。头上两只黑黑的耳朵，一双大眼睛。大熊猫爱吃竹子。大熊猫很少，我们要好好保护它们！",
          readingPinyin: "Xīngqītiān, Xiǎohuá zài jiā lǐ kàn diànshì. Gāng dǎkāi diànshì, tā jiù kàndào le yí gè kě'ài de dòngwù. Tā de tóu hé shēnzi dōu shì bái de, sìzhī hé jiānbǎng shì hēi de. Tóu shang liǎng zhī hēihēi de ěrduo, yì shuāng dà yǎnjing. Dàxióngmāo ài chī zhúzi. Dàxióngmāo hěn shǎo, wǒmen yào hǎohāo bǎohù tāmen!",
          readingTranslation: "Hari Minggu, Xiao Hua menonton TV dan melihat panda lucu. Kepala dan badannya putih, kaki dan pundaknya hitam. Panda suka makan bambu. Jumlah panda sangat langka, kita harus melindunginya dengan baik!",
          vocab: [
            {
              hanzi: "熊猫",
              pinyin: "xióngmāo",
              tone: 21,
              meaningId: "Panda",
              meaningEn: "Panda",
              strokes: 25,
              strokeNames: ["熊 (14画: 能, 灬)", "猫 (11画: 犭, 苗)"],
              radical: "灬 / 犭",
              exampleHanzi: "大熊猫吃竹子的样子真可爱。",
              examplePinyin: "Dàxióngmāo chī zhúzi de yàngzi zhēn kě'ài.",
              exampleTranslation: "Gaya panda raksasa makan bambu sungguh menggemaskan.",
              image: "assets/textbook/book_5/img_8.jpg",
              iconEmoji: "🐼"
            },
            {
              hanzi: "保护",
              pinyin: "bǎohù",
              tone: 34,
              meaningId: "Melindungi / Menjaga",
              meaningEn: "Protect / Safeguard",
              strokes: 16,
              strokeNames: ["保 (9画: 亻, 呆)", "护 (7画: 扌, 户)"],
              radical: "亻/ 扌",
              exampleHanzi: "保护地球，人人有责。",
              examplePinyin: "Bǎohù dìqiú, rénrén yǒu zé.",
              exampleTranslation: "Melindungi bumi adalah tanggung jawab setiap orang.",
              image: "assets/textbook/book_5/img_8.jpg",
              iconEmoji: "🛡️"
            },
            {
              hanzi: "世界",
              pinyin: "shìjiè",
              tone: 44,
              meaningId: "Dunia",
              meaningEn: "World",
              strokes: 14,
              strokeNames: ["世 (5画: 横, 竖, 竖, 横, 竖折)", "界 (9画: 田, 介)"],
              radical: "一 / 田",
              exampleHanzi: "环游世界是我的梦想。",
              examplePinyin: "Huányóu shìjiè shì wǒ de mèngxiǎng.",
              exampleTranslation: "Keliling dunia adalah impian saya.",
              image: "assets/textbook/book_5/img_8.jpg",
              iconEmoji: "🌍"
            }
          ]
        },
        {
          unitNumber: 10,
          title: "Unit 10: 司马光砸缸 (Sima Guang Memecahkan Tempayan)",
          storyTitle: "司马光砸缸",
          theme: "Kearifan Klasik & Keberanian",
          dialogue: {
            speakerA: "A: 小孩掉进水缸里了，怎么办？(Xiǎohái diàojìn shuǐgāng lǐ le, zěnmebàn? - Anak kecil terjatuh ke tempayan air, bagaimana ini?)",
            speakerB: "B: 司马光用大石头砸破了水缸！(Sīmǎ Guāng yòng dà shítou zá pò le shuǐgāng! - Sima Guang memakai batu besar memecahkan tempayan air!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "从前，有个孩子叫司马光，他和三四个小朋友在花园里玩耍。",
              pinyin: "Cóngqián, yǒu ge háizi jiào Sīmǎ Guāng, tā hé sān sì gè xiǎopéngyou zài huāyuán lǐ wánshuǎ.",
              indonesian: "Zaman dahulu, ada seorang anak bernama Sima Guang, ia dan tiga-empat temannya bermain di taman."
            },
            {
              index: 2,
              hanzi: "假山下有一个装满了水的大水缸，一个小孩不小心掉进去了！",
              pinyin: "Jiǎshān xià yǒu yí gè zhuāngmǎn le shuǐ de dà shuǐgāng, yí gè xiǎohái bù xiǎoxīn diàojìnqu le!",
              indonesian: "Di bawah bukit buatan ada tempayan besar penuh air, seorang anak tak sengaja tercebur ke dalamnya!"
            },
            {
              index: 3,
              hanzi: "别的小朋友都慌张地哭了，司马光不害怕，拿起大石头砸破水缸救出了同伴。",
              pinyin: "Bié de xiǎopéngyou dōu huāngzhāng de kū le, Sīmǎ Guāng bú hàipà, náqǐ dà shítou zá pò shuǐgāng jiùchū le tóngbàn.",
              indonesian: "Anak-anak lain panik dan menangis, Sima Guang tidak takut, ia mengambil batu besar memecahkan tempayan dan menyelamatkan temannya."
            }
          ],
          readingPassage: "从前，有个孩子叫司马光。一天，他和几个小朋友在花园里玩。假山下有个大水缸，装满了水。忽然，一个小孩掉进水缸里了。小朋友们有的哭，有的喊。司马光不害怕，他找到一块大石头，砸破了水缸。缸里的水流走了，掉进缸里的小朋友得救了。",
          readingPinyin: "Cóngqián, yǒu ge háizi jiào Sīmǎ Guāng. Yì tiān, tā hé jǐ gè xiǎopéngyou zài huāyuán lǐ wán. Jiǎshān xià yǒu ge dà shuǐgāng, zhuāngmǎn le shuǐ. Hūrán, yí gè xiǎohái diàojìn shuǐgāng lǐ le. Xiǎopéngyou men yǒu de kū, yǒu de hǎn. Sīmǎ Guāng bú hàipà, tā zhǎodào yí kuài dà shítou, zá pò le shuǐgāng. Gāng lǐ de shuǐ liú zǒu le, diàojìn gāng lǐ de xiǎopéngyou déjiù le.",
          readingTranslation: "Dahulu ada anak bernama Sima Guang. Saat bermain di taman, temannya jatuh ke tempayan air besar. Teman lain menangis ketakutan, tetapi Sima Guang mengambil batu besar dan memecahkan tempayan sehingga temannya terselamatkan.",
          vocab: [
            {
              hanzi: "砸",
              pinyin: "zá",
              tone: 2,
              meaningId: "Menghantam / Memecahkan",
              meaningEn: "Smash / Break",
              strokes: 13,
              strokeNames: ["石 (5画: 横, 撇, 竖, 横折, 横)", "帀 (5画)"],
              radical: "石 (Shí)",
              exampleHanzi: "用石头砸破水缸。",
              examplePinyin: "Yòng shítou zá pò shuǐgāng.",
              exampleTranslation: "Menggunakan batu memecahkan tempayan air.",
              image: "assets/textbook/book_5/img_10.jpg",
              iconEmoji: "🔨"
            },
            {
              hanzi: "石头",
              pinyin: "shítou",
              tone: 20,
              meaningId: "Batu",
              meaningEn: "Stone / Rock",
              strokes: 10,
              strokeNames: ["石 (5画)", "头 (5画: 点, 点, 横, 撇, 点)"],
              radical: "石 / 大",
              exampleHanzi: "山路上有很多石头。",
              examplePinyin: "Shānlù shang yǒu hěn duō shítou.",
              exampleTranslation: "Di jalan pegunungan ada banyak batu.",
              image: "assets/textbook/book_5/img_10.jpg",
              iconEmoji: "🪨"
            },
            {
              hanzi: "救",
              pinyin: "jiù",
              tone: 4,
              meaningId: "Menyelamatkan / Menolong",
              meaningEn: "Save / Rescue",
              strokes: 11,
              strokeNames: ["求 (7画: 横, 竖钩, 点, 提, 撇, 点, 点)", "攵 (4画: 撇, 横, 撇, 捺)"],
              radical: "攵 (Pū)",
              exampleHanzi: "消防员救出了被困的人。",
              examplePinyin: "Xiāofángyuán jiùchū le bèikùn de rén.",
              exampleTranslation: "Petugas damkar menyelamatkan orang yang terjebak.",
              image: "assets/textbook/book_5/img_10.jpg",
              iconEmoji: "🚑"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Han Yu 6 (汉语 第六册)",
      level: "Tingkat Menengah 3",
      dinoRank: "Ankylosaurus Baja",
      badge: "🛡️ Perisai Fosil Purba",
      themeColor: "#DB2777",
      description: "Kisah klasik Kecebong mencari Ibu, lumba-lumba pintar, peribahasa Ke Zhou Qiu Jian, dan Burung Han Hao.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 小蝌蚪找妈妈 (Kecebong Mencari Ibunya)",
          storyTitle: "小蝌蚪找妈妈",
          theme: "Metamorfosis & Kehangatan Kasih Sayang",
          dialogue: {
            speakerA: "A: 小蝌蚪的妈妈是谁？(Xiǎokēdǒu de māma shì shéi? - Siapakah ibu kecebong?)",
            speakerB: "B: 小蝌蚪的妈妈是绿衣裳的青蛙！(Xiǎokēdǒu de māma shì lǜ yīshang de qīngwā! - Ibu kecebong adalah katak berbaju hijau!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "春天来了，池塘里有一群大脑袋、长尾巴的小蝌蚪游来游去。",
              pinyin: "Chūntiān lái le, chítáng lǐ yǒu yì qún dà nǎodai, cháng wěiba de xiǎokēdǒu yóulái-yóuqù.",
              indonesian: "Musim semi tiba, di kolam ada sekelompok kecebong berkepala besar dan berekor panjang berenang kian kemari."
            },
            {
              index: 2,
              hanzi: "它们问大鱼：“您是我们的妈妈吗？”大鱼说：“你们的妈妈有四条腿。”",
              pinyin: "Tāmen wèn dàyú: “Nín shì wǒmen de māma ma?” Dàyú shuō: “Nǐmen de māma yǒu sì tiáo tuǐ.”",
              indonesian: "Mereka bertanya pada ikan besar: “Apakah Anda ibu kami?” Ikan besar menjawab: “Ibu kalian punya empat kaki.”"
            },
            {
              index: 3,
              hanzi: "后来小蝌蚪长出了四条腿，尾巴变短了，终于找到了荷叶上的青蛙妈妈！",
              pinyin: "Hòulái xiǎokēdǒu zhǎngchū le sì tiáo tuǐ, wěiba biàn duǎn le, zhōngyú zhǎodào le héyè shang de qīngwā māma!",
              indonesian: "Kemudian kecebong menumbuhkan empat kaki, ekornya memendek, dan akhirnya menemukan ibu katak di atas daun teratai!"
            }
          ],
          readingPassage: "池塘里有一群小蝌蚪，大脑袋，黑身子，甩着长长的尾巴。它们在找妈妈。看见鲤鱼阿姨，问：“妈妈在哪里？”看见乌龟，叫妈妈。最后，它们在荷叶上找到了披着绿衣服的青蛙妈妈！",
          readingPinyin: "Chítáng lǐ yǒu yì qún xiǎokēdǒu, dà nǎodai, hēi shēnzi, shuǎizhe chángcháng de wěiba. Tāmen zài zhǎo māma. Kànjiàn lǐyú āyí, wèn: “Māma zài nǎlǐ?” Kànjiàn wūguī, jiào māma. Zuìhòu, tāmen zài héyè shang zhǎodào le pīzhe lǜ yīfu de qīngwā māma!",
          readingTranslation: "Di kolam ada sekelompok kecebong mencari ibunya. Bertanya pada ikan mas dan kura-kura, akhirnya mereka menemukan ibu katak berbaju hijau di atas daun teratai!",
          vocab: [
            {
              hanzi: "青蛙",
              pinyin: "qīngwā",
              tone: 11,
              meaningId: "Katak / Kodok Hijau",
              meaningEn: "Frog",
              strokes: 20,
              strokeNames: ["青 (8画: 丰, 月)", "蛙 (12画: 虫, 圭)"],
              radical: "青 / 虫",
              exampleHanzi: "青蛙是庄稼的守护神。",
              examplePinyin: "Qīngwā shì zhuāngjia de shǒuhùshén.",
              exampleTranslation: "Katak adalah penjaga tanaman petani.",
              image: "assets/textbook/book_6/img_1.jpg",
              iconEmoji: "🐸"
            },
            {
              hanzi: "池塘",
              pinyin: "chítáng",
              tone: 22,
              meaningId: "Kolam Air",
              meaningEn: "Pond",
              strokes: 19,
              strokeNames: ["池 (6画: 氵, 也)", "塘 (13画: 土, 唐)"],
              radical: "氵/ 土",
              exampleHanzi: "池塘里开满了荷花。",
              examplePinyin: "Chítáng lǐ kāimǎn le héhuā.",
              exampleTranslation: "Di kolam bermekaran bunga teratai.",
              image: "assets/textbook/book_6/img_1.jpg",
              iconEmoji: "🌊"
            },
            {
              hanzi: "尾巴",
              pinyin: "wěiba",
              tone: 30,
              meaningId: "Ekor",
              meaningEn: "Tail",
              strokes: 11,
              strokeNames: ["尾 (7画: 尸, 毛)", "巴 (4画: 横折, 竖, 横, 竖弯钩)"],
              radical: "尸 / 巳",
              exampleHanzi: "小兔子的尾巴很短。",
              examplePinyin: "Xiǎotùzi de wěiba hěn duǎn.",
              exampleTranslation: "Ekor kelinci kecil sangat pendek.",
              image: "assets/textbook/book_6/img_1.jpg",
              iconEmoji: "🐒"
            }
          ]
        },
        {
          unitNumber: 12,
          title: "Unit 12: 刻舟求剑 (Mengukir Perahu Mencari Pedang)",
          storyTitle: "刻舟求剑",
          theme: "Peribahasa Klasik: Menyesuaikan Diri dengan Perubahan",
          dialogue: {
            speakerA: "A: 宝剑掉进江里了，刻记号有用吗？(Bǎojiàn diàojìn jiāng lǐ le, kè jìhao yǒu yòng ma? - Pedang jatuh ke sungai, apakah mengukir tanda ada gunanya?)",
            speakerB: "B: 船一直往前走，刻记号是找不到剑的！(Chuán yìzhí wǎng qián zǒu, kè jìhao shì zhǎobudào jiàn de! - Perahu terus melaju, mengukir tanda takkan menemukan pedang!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "从前，楚国有一个人坐船过江，不小心宝剑掉进了江水里。",
              pinyin: "Cóngqián, Chǔguó yǒu yí gè rén zuò chuán guò jiāng, bù xiǎoxīn bǎojiàn diàojìn le jiāngshuǐ lǐ.",
              indonesian: "Zaman dahulu, seseorang dari negeri Chu menaiki perahu menyeberang sungai, tak sengaja pedangnya jatuh ke dalam sungai."
            },
            {
              index: 2,
              hanzi: "他不慌不忙地拿出小刀，在船舷上刻了一个深深的记号。",
              pinyin: "Tā bùhuāng-bùmáng de náchū xiǎodāo, zài chuánxián shang kè le yí gè shēnshēn de jìhao.",
              indonesian: "Dengan tenang dan tanpa panik, ia mengeluarkan pisau kecil lalu mengukir tanda yang dalam di lambung perahu."
            },
            {
              index: 3,
              hanzi: "等船靠岸后，他顺着记号跳下水捞剑，却什么也没捞到。",
              pinyin: "Děng chuán kào'àn hòu, tā shùnzhe jìhao tiàoxià shuǐ lāo jiàn, què shénme yě méi lāodào.",
              indonesian: "Saat perahu merapat ke dermaga, ia melompat ke air mencari pedang sesuai tanda ukiran, namun tidak menemukan apa-apa."
            }
          ],
          readingPassage: "从前，一个人坐船过江。剑掉进水里了，他不慌不忙地在船边上刻了一个记号。船靠岸后，他从刻记号的地方跳下去捞剑。船已经走了，这样是找不到剑的。",
          readingPinyin: "Cóngqián, yí gè rén zuò chuán guò jiāng. Jiàn diàojìn shuǐ lǐ le, tā bùhuāng-bùmáng de zài chuánbiān shang kè le yí gè jìhao. Chuán kào'àn hòu, tā cóng kè jìhao de dìfang tiàoxiàqu lāo jiàn. Chuán yǐjīng zǒu le, zhèyàng shì zhǎobudào jiàn de.",
          readingTranslation: "Seseorang menyeberang sungai lalu pedangnya jatuh. Ia mengukir lambung perahu sebagai tanda. Saat sampai di seberang ia melompat mencari pedang, tentu tidak ditemukan karena perahu sudah berpindah.",
          vocab: [
            {
              hanzi: "船",
              pinyin: "chuán",
              tone: 2,
              meaningId: "Perahu / Kapal",
              meaningEn: "Boat / Ship",
              strokes: 11,
              strokeNames: ["舟 (6画)", "几 (2画)", "口 (3画)"],
              radical: "舟 (Zhōu)",
              exampleHanzi: "大船在江面上航行。",
              examplePinyin: "Dà chuán zài jiāngmiàn shang hángxíng.",
              exampleTranslation: "Kapal besar berlayar di atas permukaan sungai.",
              image: "assets/textbook/book_6/img_12.jpg",
              iconEmoji: "⛵"
            },
            {
              hanzi: "剑",
              pinyin: "jiàn",
              tone: 4,
              meaningId: "Pedang",
              meaningEn: "Sword",
              strokes: 9,
              strokeNames: ["佥 (7画: 人, 一, 口, 从)", "刂(2画: 竖, 竖钩)"],
              radical: "刂(Dāo)",
              exampleHanzi: "这是一把锋利的宝剑。",
              examplePinyin: "Zhè shì yì bǎ fēnglì de bǎojiàn.",
              exampleTranslation: "Ini adalah sebilah pedang pusaka yang tajam.",
              image: "assets/textbook/book_6/img_12.jpg",
              iconEmoji: "⚔️"
            },
            {
              hanzi: "着急",
              pinyin: "zháojí",
              tone: 22,
              meaningId: "Cemas / Terburu-buru",
              meaningEn: "Anxious / In a hurry",
              strokes: 18,
              strokeNames: ["着 (12画: 羊, 目)", "急 (9画: ⺈, 彐, 心)"],
              radical: "目 / 心",
              exampleHanzi: "别着急，慢慢想办法。",
              examplePinyin: "Bié zháojí, mànmàn xiǎng bànfǎ.",
              exampleTranslation: "Jangan cemas, pikirkan solusinya perlahan-lahan.",
              image: "assets/textbook/book_6/img_12.jpg",
              iconEmoji: "😰"
            }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Han Yu 7 (汉语 第七册)",
      level: "Tingkat Lanjutan 1",
      dinoRank: "Allosaurus Pemburu",
      badge: "🔍 Kaca Pembesar Paleontolog",
      themeColor: "#EA580C",
      description: "Buku pelajaran baru, dongeng si asam & si manis, kunjungan museum fosil dinosaurus, dan legenda Ba Miao Zhu Zhang.",
      units: [
        {
          unitNumber: 6,
          title: "Unit 6: 我和爸爸去博物馆 (Aku dan Ayah ke Museum)",
          storyTitle: "我和爸爸去博物馆",
          theme: "Museum Fosil & Paleontologi",
          dialogue: {
            speakerA: "A: 恐龙是怎样生活的？(Kǒnglóng shì zěnyàng shēnghuó de? - Bagaimanakah kehidupan dinosaurus?)",
            speakerB: "B: 恐龙生活在史前地球，庞大而神奇！(Kǒnglóng shēnghuó zài shǐqián dìqiú, pángdà ér shénqí! - Dinosaurus hidup di bumi prasejarah, besar dan luar biasa!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "我对史前恐龙特别感兴趣。星期天，我和爸爸一起去博物馆看恐龙化石。",
              pinyin: "Wǒ duì shǐqián kǒnglóng tèbié gǎn xìngqù. Xīngqītiān, wǒ hé bàba yìqǐ qù bówùguǎn kàn kǒnglóng huàshí.",
              indonesian: "Saya sangat tertarik pada dinosaurus prasejarah. Hari Minggu, saya dan ayah pergi ke museum melihat fosil dinosaurus."
            },
            {
              index: 2,
              hanzi: "走进宏伟的展厅，我们看到了各种各样高大壮观的恐龙骨架化石。",
              pinyin: "Zǒujìn hóngwěi de zhǎntīng, wǒmen kàndào le gèzhǒng-gèyàng gāodà zhuàngguān de kǒnglóng gǔjià huàshí.",
              indonesian: "Memasuki ruang pameran yang megah, kami melihat berbagai macam kerangka fosil dinosaurus yang tinggi besar dan mengagumkan."
            },
            {
              index: 3,
              hanzi: "讲解员告诉我们，最大的恐龙有几十米长、几十吨重，真是地球生命的奇迹！",
              pinyin: "Jiǎngjiěyuán gàosu wǒmen, zuì dà de kǒnglóng yǒu jǐ shí mǐ cháng, jǐ shí dūn zhòng, zhēn shì dìqiú shēngmìng de qíjì!",
              indonesian: "Pemandu museum memberi tahu kami bahwa dinosaurus terbesar panjangnya puluhan meter dan berbobot puluhan ton, sungguh keajaiban bumi!"
            }
          ],
          readingPassage: "我对恐龙特别感兴趣。星期天，我和爸爸去博物馆看恐龙化石展览。最大的恐龙化石长二十米，高十几米。恐龙早在几千万年前就灭绝了。科学家们至今还在不断探索生命的奥秘。",
          readingPinyin: "Wǒ duì kǒnglóng tèbié gǎn xìngqù. Xīngqītiān, wǒ hé bàba qù bówùguǎn kàn kǒnglóng huàshí zhǎnlǎn. Zuì dà de kǒnglóng huàshí cháng èrshí mǐ, gāo shí jǐ mǐ. Kǒnglóng zǎo zài jǐ qiān wàn nián qián jiù mièjué le. Kēxuéjiā men zhìjīn hái zài búduàn tànsuǒ shēngmìng de àomì.",
          readingTranslation: "Saya sangat tertarik dengan dinosaurus. Hari Minggu, saya dan ayah ke museum melihat pameran fosil dinosaurus. Dinosaurus terbesar panjangnya 20m. Para ilmuwan hingga kini masih meneliti misteri kehidupan purba.",
          vocab: [
            {
              hanzi: "博物馆",
              pinyin: "bówùguǎn",
              tone: 243,
              meaningId: "Museum",
              meaningEn: "Museum",
              strokes: 28,
              strokeNames: ["博 (12画)", "物 (8画)", "馆 (14画)"],
              radical: "十 / 牛 / 饣",
              exampleHanzi: "我们参观了历史博物馆。",
              examplePinyin: "Wǒmen cānguān le lìshǐ bówùguǎn.",
              exampleTranslation: "Kami mengunjungi museum sejarah.",
              image: "assets/textbook/book_7/img_6.jpg",
              iconEmoji: "🏛️"
            },
            {
              hanzi: "化石",
              pinyin: "huàshí",
              tone: 42,
              meaningId: "Fosil",
              meaningEn: "Fossil",
              strokes: 9,
              strokeNames: ["化 (4画: 撇, 竖, 撇, 竖弯钩)", "石 (5画)"],
              radical: "亻/ 石",
              exampleHanzi: "恐龙化石在地层中保存完好。",
              examplePinyin: "Kǒnglóng huàshí zài dìcéng zhōng bǎocún wánhǎo.",
              exampleTranslation: "Fosil dinosaurus terawetkan dengan baik di dalam lapisan tanah.",
              image: "assets/dino/egg.jpg",
              iconEmoji: "🦴"
            },
            {
              hanzi: "探索",
              pinyin: "tànsuǒ",
              tone: 43,
              meaningId: "Menjelajahi / Meneliti",
              meaningEn: "Explore / Probe",
              strokes: 20,
              strokeNames: ["探 (11画: 扌, 罙)", "索 (10画: 十, 冖, 糸)"],
              radical: "扌/ 糸",
              exampleHanzi: "勇敢探索未知的科学世界。",
              examplePinyin: "Yǒnggǎn tànsuǒ wèizhī de kēxué shìjiè.",
              exampleTranslation: "Berani menjelajahi dunia sains yang belum diketahui.",
              image: "assets/textbook/book_7/img_6.jpg",
              iconEmoji: "🔭"
            }
          ]
        },
        {
          unitNumber: 10,
          title: "Unit 10: 拔苗助长 (Menarik Bibit Membantu Tumbuh)",
          storyTitle: "拔苗助长",
          theme: "Peribahasa Klasik: Jangan Terburu Nafsu",
          dialogue: {
            speakerA: "A: 禾苗为什么枯死了？(Hémiáo wèishénme kūsǐ le? - Mengapa bibit padi itu mati layu?)",
            speakerB: "B: 因为农夫把禾苗拔高，违背了自然规律！(Yīnwèi nóngfū bǎ hémiáo bá gāo, wéibèi le zìrán guīlǜ! - Karena petani menarik bibit ke atas, melanggar hukum alam!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "古时候，有个农夫嫌田里的禾苗长得太慢，心里十分着急。",
              pinyin: "Gǔ shíhou, yǒu ge nóngfū xián tián lǐ de hémiáo zhǎng de tài màn, xīnlǐ shífēn zháojí.",
              indonesian: "Zaman dahulu, seorang petani merasa bibit padinya tumbuh terlalu lambat dan hatinya sangat cemas."
            },
            {
              index: 2,
              hanzi: "有一天，他跑到田里，把禾苗一棵一棵往上拔高了一点儿。",
              pinyin: "Yǒu yì tiān, tā pǎodào tián lǐ, bǎ hémiáo yì kē yì kē wǎng shàng bá gāo le yìdiǎnr.",
              indonesian: "Suatu hari, ia berlari ke sawah dan menarik setiap helai bibit padi ke atas sedikit demi sedikit."
            },
            {
              index: 3,
              hanzi: "第二天他和儿子去田里一看，所有的禾苗全都被晒枯死掉了。",
              pinyin: "Dì'èr tiān tā hé érzi qù tián lǐ yí kàn, suǒyǒu de hémiáo quán dōu bèi shài kūsǐ diào le.",
              indonesian: "Keesokan harinya ia dan putranya melihat ke sawah, semua bibit padi ternyata sudah layu dan mati terbakar terik."
            }
          ],
          readingPassage: "从前有个农夫，觉得田里的禾苗长得太慢。他来到田里，把禾苗一棵一棵拔高了一点。他累得满头大汗，回家高兴地说：“禾苗长高了！”第二天，禾苗都死了。学习也要脚踏实地，不能急于求成。",
          readingPinyin: "Cóngqián yǒu ge nóngfū, juéde tián lǐ de hémiáo zhǎng de tài màn. Tā láidào tián lǐ, bǎ hémiáo yì kē yì kē bá gāo le yìdiǎn. Tā lèi de mǎntóu dàhàn, huíjiā gāoxìng de shuō: “Hémiáo zhǎng gāo le!” Dì'èr tiān, hémiáo dōu sǐ le. Xuéxí yě yào jiǎotàshídì, bù néng jíyúqiúchéng.",
          readingTranslation: "Dahulu seorang petani merasa tanamannya lambat tumbuh, lalu ia menarik bibit padi ke atas. Keesokan harinya semua tanaman mati. Belajar juga harus berproses dan tidak boleh tergesa-gesa.",
          vocab: [
            {
              hanzi: "拔苗助长",
              pinyin: "bá miáo zhù zhǎng",
              tone: 2243,
              meaningId: "Menarik bibit agar cepat tumbuh (merusak karena ingin serba instan)",
              meaningEn: "Pulling up seedlings to help them grow (ruin things by impatience)",
              strokes: 31,
              strokeNames: ["拔 (8画)", "苗 (8画)", "助 (7画)", "长 (8画)"],
              radical: "扌/ 艹 / 力 / 长",
              exampleHanzi: "教育孩子不能拔苗助长。",
              examplePinyin: "Jiàoyù háizi bù néng bá miáo zhù zhǎng.",
              exampleTranslation: "Mendidik anak tidak boleh tergesa-gesa dan memaksakan kehendak.",
              image: "assets/textbook/book_7/img_10.jpg",
              iconEmoji: "🌱"
            },
            {
              hanzi: "急性格",
              pinyin: "jí xìnggé",
              tone: 242,
              meaningId: "Sifat Tidak Sabaran",
              meaningEn: "Impatient temper",
              strokes: 21,
              strokeNames: ["急 (9画)", "性 (8画)", "格 (10画)"],
              radical: "心 / 忄/ 木",
              exampleHanzi: "做事要有耐心，不要急躁。",
              examplePinyin: "Zuòshì yào yǒu nàixīn, bú yào jízào.",
              exampleTranslation: "Mengerjakan sesuatu harus sabar, jangan mudah emosi.",
              image: "assets/textbook/book_7/img_10.jpg",
              iconEmoji: "⏳"
            }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Han Yu 8 (汉语 第八册)",
      level: "Tingkat Lanjutan 2",
      dinoRank: "Carnotaurus Cepat",
      badge: "👑 Mahkota Fosil Raja",
      themeColor: "#CA8A04",
      description: "Misteri bulan dan bintang, anak pencatat bintang Zhang Heng, fabel anak kuda menyeberang sungai, dan perlindungan bumi.",
      units: [
        {
          unitNumber: 2,
          title: "Unit 2: 数星星的孩子 (Anak yang Menghitung Bintang)",
          storyTitle: "数星星的孩子 (Zhang Heng)",
          theme: "Ilmu Astronomi & Ketekunan",
          dialogue: {
            speakerA: "A: 天上的星星能数得清吗？(Tiān shang de xīngxing néng shǔ de qīng ma? - Apakah bintang di langit bisa dihitung?)",
            speakerB: "B: 只要仔细观察，就能看清北斗七星与北极星！(Zhǐyào zǐxì guānchá, jiù néng kànqīng Běidǒu Qīxīng yǔ Běijíxīng! - Asal kita amati dengan teliti, kita bisa melihat Bintang Biduk dan Bintang Kutub!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "晚上，一个小男孩坐在院子里，仰着头认真数天上的星星。",
              pinyin: "Wǎnshang, yí gè xiǎo nánhái zuò zài yuànzi lǐ, yǎngzhe tóu rènzhēn shǔ tiān shang de xīngxing.",
              indonesian: "Di malam hari, seorang anak laki-laki duduk di halaman sambil menengadah tekun menghitung bintang di langit."
            },
            {
              index: 2,
              hanzi: "爷爷走过来说：“你看，北边那七颗星连起来像一把勺子，叫北斗七星。”",
              pinyin: "Yéye zǒuguòlai shuō: “Nǐ kàn, běibiān nà qī kē xīng lián qǐlái xiàng yì bǎ sháozi, jiào Běidǒu Qīxīng.”",
              indonesian: "Kakek datang dan berkata: “Lihatlah, tujuh bintang di utara bersambung membentuk sendok, namanya Bintang Biduk.”"
            },
            {
              index: 3,
              hanzi: "这个坚持夜夜观星的孩子叫张衡，长大后成为了伟大的天文学家。",
              pinyin: "Zhè ge jiānchí yèyè guānxīng de háizi jiào Zhāng Héng, zhǎngdà hòu chéngwéi le wěidà de tiānwénxuéjiā.",
              indonesian: "Anak yang tekun mengamati bintang setiap malam ini bernama Zhang Heng, saat dewasa ia menjadi astronom yang agung."
            }
          ],
          readingPassage: "晚上，一个孩子坐在院子里数星星。一颗，两颗，一直数到几百颗。爷爷告诉他北斗七星总是绕着北极星转。这个孩子叫张衡，长大后刻苦钻研天文，成了著名的天文学家。",
          readingPinyin: "Wǎnshang, yí gè háizi zuò zài yuànzi lǐ shǔ xīngxing. Yì kē, liǎng kē, yìzhí shǔ dào jǐ bǎi kē. Yéye gàosu tā Běidǒu Qīxīng zǒngshì ràozhe Běijíxīng zhuàn. Zhè ge háizi jiào Zhāng Héng, zhǎngdà hòu kèkǔ zuānyán tiānwén, chéng le zhùmíng de tiānwénxuéjiā.",
          readingTranslation: "Malam hari seorang anak menghitung ratusan bintang. Kakeknya mengajarinya bahwa Bintang Biduk berputar mengelilingi Polaris. Anak itu bernama Zhang Heng yang kelak menjadi astronom termasyhur.",
          vocab: [
            {
              hanzi: "星星",
              pinyin: "xīngxing",
              tone: 10,
              meaningId: "Bintang",
              meaningEn: "Star",
              strokes: 18,
              strokeNames: ["星 (9画: 日, 生)"],
              radical: "日 (Rì)",
              exampleHanzi: "夜空中有无数闪烁的星星。",
              examplePinyin: "Yèkōng zhōng yǒu wúshù shǎnshuò de xīngxing.",
              exampleTranslation: "Di langit malam ada bintang berkerlap-kerlip yang tak terhitung jumlahnya.",
              image: "assets/textbook/book_8/img_2.jpg",
              iconEmoji: "⭐"
            },
            {
              hanzi: "天文",
              pinyin: "tiānwén",
              tone: 12,
              meaningId: "Astronomi",
              meaningEn: "Astronomy",
              strokes: 8,
              strokeNames: ["天 (4画)", "文 (4画: 点, 横, 撇, 捺)"],
              radical: "大 / 文",
              exampleHanzi: "他对天文学很感兴趣。",
              examplePinyin: "Tā duì tiānwénxué hěn gǎn xìngqù.",
              exampleTranslation: "Dia sangat berminat pada ilmu astronomi.",
              image: "assets/textbook/book_8/img_2.jpg",
              iconEmoji: "🔭"
            },
            {
              hanzi: "著名",
              pinyin: "zhùmíng",
              tone: 42,
              meaningId: "Terkenal / Termasyhur",
              meaningEn: "Famous / Well-known",
              strokes: 14,
              strokeNames: ["著 (8画: 艹, 者)", "名 (6画)"],
              radical: "艹 / 口",
              exampleHanzi: "他是世界著名科学家。",
              examplePinyin: "Tā shì shìjiè zhùmíng kēxuéjiā.",
              exampleTranslation: "Dia adalah ilmuwan termasyhur di dunia.",
              image: "assets/textbook/book_8/img_2.jpg",
              iconEmoji: "🏆"
            }
          ]
        },
        {
          unitNumber: 5,
          title: "Unit 5: 小马过河 (Anak Kuda Menyeberang Sungai)",
          storyTitle: "小马过河",
          theme: "Berpikir Mandiri & Membuktikan Sendiri",
          dialogue: {
            speakerA: "A: 河水到底深不深？(Héshuǐ dàodǐ shēn bu shēn? - Sungai itu sebenarnya dalam atau dangkal?)",
            speakerB: "B: 只有自己亲自试一试才知道！(Zhǐyào zìjǐ qīnzì shì yí shì cái zhīdào! - Hanya dengan mencoba sendiri baru kita tahu kebenarannya!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "小马帮妈妈送粮食，来到一条流水哗哗的小河边。",
              pinyin: "Xiǎomǎ bāng māma sòng liángshi, láidào yì tiáo liúshuǐ huāhuā de xiǎohé biān.",
              indonesian: "Anak kuda membantu ibunya mengantar gandum, tiba di tepi sungai kecil yang bergemericik deras."
            },
            {
              index: 2,
              hanzi: "老牛伯伯说：“水很浅，刚没过小腿。”小松鼠大喊：“水深极了，会淹死的！”",
              pinyin: "Lǎoniú bóbo shuō: “Shuǐ hěn qiǎn, gāng mòguò xiǎotuǐ.” Xiǎosōngshǔ dàhǎn: “Shuǐ shēn jí le, huì yānsǐ de!”",
              indonesian: "Paman sapi tua berkata: “Airnya dangkal, hanya sampai betis.” Tupai kecil berteriak: “Airnya sangat dalam, bisa tenggelam!”"
            },
            {
              index: 3,
              hanzi: "妈妈告诉小马：“光听别人说不行，要亲自试一试。”小马小心地下水，顺利过了河！",
              pinyin: "Māma gàosu xiǎomǎ: “Guāng tīng biérén shuō bùxíng, yào qīnzì shì yí shì.” Xiǎomǎ xiǎoxīn de xiàshuǐ, shùnlì guò le hé!",
              indonesian: "Ibu menasihati anak kuda: “Hanya mendengar kata orang tidak cukup, harus coba sendiri.” Anak kuda berhati-hati masuk ke air dan berhasil menyeberang!"
            }
          ],
          readingPassage: "小马要过河。老牛说水很浅，松鼠说水很深会淹死。小马回家问妈妈，妈妈说光听别人说是行不通的。小马自己下水试了试，水既不像老牛说的那么浅，也不像松鼠说的那么深。小马顺利过了河。",
          readingPinyin: "Xiǎomǎ yào guò hé. Lǎoniú shuō shuǐ hěn qiǎn, sōngshǔ shuō shuǐ hěn shēn huì yānsǐ. Xiǎomǎ huíjiā wèn māma, māma shuō guāng tīng biérén shuō shì xíngbutōng de. Xiǎomǎ zìjǐ xiàshuǐ shì le shi, shuǐ jì bú xiàng lǎoniú shuō de nàme qiǎn, yě bú xiàng sōngshǔ shuō de nàme shēn. Xiǎomǎ shùnlì guò le hé.",
          readingTranslation: "Anak kuda mau menyeberang sungai. Sapi bilang dangkal, tupai bilang dalam. Ibu menyuruh mencoba sendiri. Ternyata airnya tidak sedalam kata tupai dan tidak sedangkal kata sapi. Anak kuda berhasil menyeberang!",
          vocab: [
            {
              hanzi: "马",
              pinyin: "mǎ",
              tone: 3,
              meaningId: "Kuda",
              meaningEn: "Horse",
              strokes: 3,
              strokeNames: ["横折 (Héngzhé)", "竖折折钩 (Shùzhézhégōu)", "横 (Héng)"],
              radical: "马 (Mǎ)",
              exampleHanzi: "骏马在草原上奔跑。",
              examplePinyin: "Jùnmǎ zài cǎoyuán shang bēnpǎo.",
              exampleTranslation: "Kuda gagah berlari kencang di padang rumput.",
              image: "assets/textbook/book_8/img_5.jpg",
              iconEmoji: "🐎"
            },
            {
              hanzi: "河",
              pinyin: "hé",
              tone: 2,
              meaningId: "Sungai",
              meaningEn: "River",
              strokes: 8,
              strokeNames: ["氵(3画)", "可 (5画: 横, 竖, 横折, 横, 竖钩)"],
              radical: "氵(Shuǐ)",
              exampleHanzi: "河水清澈透明。",
              examplePinyin: "Héshuǐ qīngchè tòumíng.",
              exampleTranslation: "Air sungai jernih transparan.",
              image: "assets/textbook/book_8/img_5.jpg",
              iconEmoji: "🏞️"
            },
            {
              hanzi: "亲自",
              pinyin: "qīnzì",
              tone: 14,
              meaningId: "Secara Langsung / Sendiri",
              meaningEn: "Personally / In person",
              strokes: 15,
              strokeNames: ["亲 (9画)", "自 (6画)"],
              radical: "立 / 自",
              exampleHanzi: "我们要亲自实践体验。",
              examplePinyin: "Wǒmen yào qīnzì shíjiàn tǐyàn.",
              exampleTranslation: "Kita harus mempraktikkan dan merasakannya sendiri secara langsung.",
              image: "assets/textbook/book_8/img_5.jpg",
              iconEmoji: "👟"
            }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Han Yu 9 (汉语 第九册)",
      level: "Tingkat Mahir 1",
      dinoRank: "Spinosaurus Samudra",
      badge: "🌊 Taring Spinosaurus",
      themeColor: "#0284C7",
      description: "Benih bertunas, fabel orang buta meraba gajah, 12 Shio Tionghoa, Cao Chong menimbang gajah, dan penjelajahan antariksa.",
      units: [
        {
          unitNumber: 3,
          title: "Unit 3: 盲人摸象 (Orang Buta Meraba Gajah)",
          storyTitle: "盲人摸象",
          theme: "Cara Pandang Menyeluruh (Holistik)",
          dialogue: {
            speakerA: "A: 大象长得像什么？(Dàxiàng zhǎng de xiàng shénme? - Gajah menyerupai apa bentuknya?)",
            speakerB: "B: 摸到哪里就以为是什么，要看全面才对！(Mōdào nǎlǐ jiù yǐwéi shì shénme, yào kàn quánmiàn cái duì! - Jangan hanya meraba sebagian lalu menyimpulkan, harus melihat secara utuh!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "四个盲人一起摸大象，想要知道大象到底长什么模样。",
              pinyin: "Sì gè mángrén yìqǐ mō dàxiàng, xiǎngyào zhīdào dàxiàng dàodǐ zhǎng shénme múyàng.",
              indonesian: "Empat orang buta bersama meraba seekor gajah untuk mengetahui seperti apa bentuk gajah yang sebenarnya."
            },
            {
              index: 2,
              hanzi: "摸到腿的说像柱子，摸到耳朵的说像大扇子，摸到身子的说像一堵墙，摸到尾巴的说像绳子。",
              pinyin: "Mōdào tuǐ de shuō xiàng zhùzi, mōdào ěrduo de shuō xiàng dà shànzi, mōdào shēnzi de shuō xiàng yì dǔ qiáng, mōdào wěiba de shuō xiàng shéngzi.",
              indonesian: "Yang meraba kaki bilang seperti pilar, yang meraba telinga bilang seperti kipas besar, yang meraba badan bilang seperti dinding, yang meraba ekor bilang seperti tali."
            },
            {
              index: 3,
              hanzi: "大象的主人笑着说：“你们摸到的都只是大象的一部分，不是完整的大象呀！”",
              pinyin: "Dàxiàng de zhǔrén xiàozhe shuō: “Nǐmen mōdào de dōu zhǐshì dàxiàng de yí bùfen, bú shì wánzhěng de dàxiàng ya!”",
              indonesian: "Pemilik gajah tersenyum dan berkata: “Yang kalian raba itu hanyalah sebagian kecil dari gajah, bukan gajah secara utuh!”"
            }
          ],
          readingPassage: "从前有四个盲人摸大象。摸到腿的说像柱子，摸到身子的说像墙，摸到耳朵的说像大扇子，摸到尾巴的说像绳子。他们各持己见，争吵不休。主人告诉他们：看事物要全面，不能只看一部分。",
          readingPinyin: "Cóngqián yǒu sì gè mángrén mō dàxiàng. Mōdào tuǐ de shuō xiàng zhùzi, mōdào shēnzi de shuō xiàng qiáng, mōdào ěrduo de shuō xiàng dà shànzi, mōdào wěiba de shuō xiàng shéngzi. Tāmen gèchíjǐjiàn, zhēngchǎo bùxiū. Zhǔrén gàosu tāmen: Kàn shìwù yào quánmiàn, bù néng zhǐ kàn yí bùfen.",
          readingTranslation: "Empat orang buta meraba gajah. Yang meraba kaki mengira pilar, badan mengira dinding, telinga mengira kipas, ekor mengira tali. Mereka berdebat. Pelajarannya: kita harus melihat persoalan secara utuh dan komprehensif.",
          vocab: [
            {
              hanzi: "大象",
              pinyin: "dàxiàng",
              tone: 44,
              meaningId: "Gajah",
              meaningEn: "Elephant",
              strokes: 14,
              strokeNames: ["大 (3画)", "象 (11画: ⺈, 口, 豕)"],
              radical: "大 / 豕",
              exampleHanzi: "大象是陆地上最大的哺乳动物。",
              examplePinyin: "Dàxiàng shì lùdì shang zuì dà de bǔrǔ dòngwù.",
              exampleTranslation: "Gajah adalah mamalia terbesar di daratan.",
              image: "assets/textbook/book_9/img_3.jpg",
              iconEmoji: "🐘"
            },
            {
              hanzi: "柱子",
              pinyin: "zhùzi",
              tone: 40,
              meaningId: "Pilar / Tiang Penyangga",
              meaningEn: "Pillar / Column",
              strokes: 12,
              strokeNames: ["柱 (9画: 木, 主)", "子 (3画)"],
              radical: "木 / 子",
              exampleHanzi: "大殿前立着红色的石柱子。",
              examplePinyin: "Dàdiàn qián lìzhe hóngsè de shí zhùzi.",
              exampleTranslation: "Di depan aula istana berdiri pilar-pilar batu berwarna merah.",
              image: "assets/textbook/book_9/img_3.jpg",
              iconEmoji: "🏛️"
            },
            {
              hanzi: "完整",
              pinyin: "wánzhěng",
              tone: 23,
              meaningId: "Lengkap / Utuh",
              meaningEn: "Complete / Intact",
              strokes: 19,
              strokeNames: ["完 (7画: 宀, 元)", "整 (12画: 束, 攵, 正)"],
              radical: "宀 / 攴",
              exampleHanzi: "请完整地回答问题。",
              examplePinyin: "Qǐng wánzhěng de huídá wèntí.",
              exampleTranslation: "Tolong jawab pertanyaannya secara lengkap.",
              image: "assets/textbook/book_9/img_3.jpg",
              iconEmoji: "🧩"
            }
          ]
        },
        {
          unitNumber: 6,
          title: "Unit 6: 曹冲称象 (Cao Chong Menimbang Gajah)",
          storyTitle: "曹冲称象",
          theme: "Kreativitas & Hukum Archimedes Kuno",
          dialogue: {
            speakerA: "A: 大象那么重，怎样才能称出来？(Dàxiàng nàme zhòng, zěnyàng cáinéng chēng chūlái? - Gajah seberat itu, bagaimana cara menimbangnya?)",
            speakerB: "B: 曹冲用船装石头代替大象称重量！(Cáo Chōng yòng chuán zhuāng shítou dàitì dàxiàng chēng zhòngliàng! - Cao Chong memakai kapal diisi batu pengganti gajah untuk menimbang beratnya!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "孙权送给曹操一头大象，官员们都造不出足够大的秤来称重量。",
              pinyin: "Sūn Quán sòng gěi Cáo Cāo yì tóu dàxiàng, guānyuán men dōu zàobuchū zúgòu dà de chèng lái chēng zhòngliàng.",
              indonesian: "Sun Quan menghadiahkan seekor gajah kepada Cao Cao, para pejabat tak mampu membuat timbangan yang cukup besar."
            },
            {
              index: 2,
              hanzi: "七岁的曹冲想出了好办法：把大象牵到大船上，画出吃水线做记号。",
              pinyin: "Qī suì de Cáo Chōng xiǎngchū le hǎo bànfǎ: bǎ dàxiàng qiāndào dàchuán shang, huàchū chīshuǐxiàn zuò jìhao.",
              indonesian: "Cao Chong yang baru berusia 7 tahun menemukan ide cemerlang: menaikkan gajah ke perahu lalu menandai batas air."
            },
            {
              index: 3,
              hanzi: "牵出大象后往船里装石头到记号处，再称石头的重量，就准确得到了大象的重量！",
              pinyin: "Qiānchū dàxiàng hòu wǎng chuán lǐ zhuāng shítou dào jìhao chù, zài chēng shítou de zhòngliàng, jiù zhǔnquè dédào le dàxiàng de zhòngliàng!",
              indonesian: "Setelah gajah diturunkan, ia mengisi perahu dengan batu hingga batas garis, lalu menimbang batu-batu itu dan berhasil mendapatkan bobot gajah secara tepat!"
            }
          ],
          readingPassage: "古时候，有人送给曹操一头大象。大象有五千斤重，没人能称出重量。曹操七岁的儿子曹冲说：把大象赶到船上画下水线，再装石头到水线处，称出石头的重量就是大象的重量！大家纷纷称赞曹冲真聪明。",
          readingPinyin: "Gǔ shíhou, yǒu rén sòng gěi Cáo Cāo yì tóu dàxiàng. Dàxiàng yǒu wǔqiān jīn zhòng, méi rén néng chēng chū zhòngliàng. Cáo Cāo qī suì de érzi Cáo Chōng shuō: Bǎ dàxiàng gǎndào chuán shang huà xiàshuǐxiàn, zài zhuāng shítou dào shuǐxiàn chù, chēng chū shítou de zhòngliàng jiù shì dàxiàng de zhòngliàng! Dàjiā fēnfēn chēngzàn Cáo Chōng zhēn cōngmíng.",
          readingTranslation: "Dahulu ada yang memberi gajah kepada Cao Cao seberat 5.000 kati. Cao Chong putra berusia 7 tahun mengusulkan: naikkan gajah ke perahu buat garis air, lalu gantikan dengan batu dan timbang batunya. Semua orang kagum!",
          vocab: [
            {
              hanzi: "称",
              pinyin: "chēng",
              tone: 1,
              meaningId: "Menimbang",
              meaningEn: "Weigh",
              strokes: 10,
              strokeNames: ["禾 (5画)", "尔 (5画: 撇, 横撇, 竖钩, 撇, 点)"],
              radical: "禾 (Hé)",
              exampleHanzi: "称一称这些苹果有多重。",
              examplePinyin: "Chēng yì chēng zhèxiē píngguǒ yǒu duō zhòng.",
              exampleTranslation: "Timbanglah seberapa berat apel-apel ini.",
              image: "assets/textbook/book_9/img_6.jpg",
              iconEmoji: "⚖️"
            },
            {
              hanzi: "重量",
              pinyin: "zhòngliàng",
              tone: 44,
              meaningId: "Berat / Bobot",
              meaningEn: "Weight",
              strokes: 21,
              strokeNames: ["重 (9画)", "量 (12画: 日, 一, 里)"],
              radical: "里 / 日",
              exampleHanzi: "计算物品的总重量。",
              examplePinyin: "Jìsuàn wùpǐn de zǒng zhòngliàng.",
              exampleTranslation: "Menghitung total bobot barang-barang.",
              image: "assets/textbook/book_9/img_6.jpg",
              iconEmoji: "🏋️"
            },
            {
              hanzi: "办法",
              pinyin: "bànfǎ",
              tone: 43,
              meaningId: "Cara / Solusi / Metode",
              meaningEn: "Method / Way",
              strokes: 12,
              strokeNames: ["办 (4画: 横折钩, 撇, 点, 点)", "法 (8画: 氵, 去)"],
              radical: "力 / 氵",
              exampleHanzi: "这是一个解决问题的好办法。",
              examplePinyin: "Zhè shì yí gè jiějué wèntí de hǎo bànfǎ.",
              exampleTranslation: "Ini adalah cara yang bagus untuk menyelesaikan masalah.",
              image: "assets/textbook/book_9/img_6.jpg",
              iconEmoji: "💡"
            }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Han Yu 10 (汉语 第十册)",
      level: "Tingkat Mahir 2",
      dinoRank: "Giganotosaurus Master",
      badge: "🌋 Permata Lahar Purba",
      themeColor: "#9333EA",
      description: "Asal usul peribahasa Chengyu, satelit alami Bulan, memanah Ji Chang, kesetiaan anjing Huang Gou, dan legenda cuka.",
      units: [
        {
          unitNumber: 2,
          title: "Unit 2: 亡羊补牢·守株待兔 (Chengyu Fabel Klasik)",
          storyTitle: "成语故事：亡羊补牢 与 守株待兔",
          theme: "Kearifan Chengyu Tradisional",
          dialogue: {
            speakerA: "A: 什么是“亡羊补牢”？(Shénme shì “wáng yáng bǔ láo”? - Apa arti Wang Yang Bu Lao?)",
            speakerB: "B: 丢了羊及时修补羊圈，还为时不晚！(Diū le yáng jíshí xiūbǔ yángjuàn, hái wéishí bù wǎn! - Kehilangan domba lalu segera membetulkan kandang, belum terlambat!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "牧民发现丢了一只羊，邻居劝他赶紧修补羊圈上的窟窿。",
              pinyin: "Mùmín fāxiàn diū le yì zhī yáng, línjū quàn tā gǎnjǐn xiūbǔ yángjuàn shang de kūlong.",
              indonesian: "Peternak mendapati seekor dombanya hilang, tetangga menasihatinya agar segera memperbaiki lubang kandang."
            },
            {
              index: 2,
              hanzi: "第二天他又丢了羊，这才后悔，赶快把羊圈修得结结实实，从此再没丢过羊。",
              pinyin: "Dì'èr tiān tā yòu diū le yáng, zhè cái hòuhuǐ, gǎnkuài bǎ yángjuàn xiū de jiējiē-shīshī de, cóngcǐ zài méi diū guo yáng.",
              indonesian: "Keesokan harinya ia kehilangan domba lagi, barulah ia menyesal dan cepat-cepat memperbaiki kandang hingga kokoh, dan sejak itu dombanya tak pernah hilang lagi."
            },
            {
              index: 3,
              hanzi: "农夫阿福坐在树桩旁等待撞死的兔子，结果田地荒废一无所获，这就是“守株待兔”的教训。",
              pinyin: "Nóngfū Ā Fú zuò zài shùzhuāng páng děngdài zhuàngsǐ de tùzi, jiéguǒ tiándì huāngfèi yì wú suǒ huò, zhè jiù shì “shǒu zhū dài tù” de jiàoxun.",
              indonesian: "Petani A Fu duduk di samping tunggul kayu menunggu kelinci yang menabrak diri, akibatnya sawahnya terbengkalai tanpa hasil, itulah pelajaran Shou Zhu Dai Tu."
            }
          ],
          readingPassage: "从前有个牧民丢了一只羊。邻居劝他修羊圈，他不听。第二天又丢了一只羊，他很后悔，赶快把羊圈修好，从此羊再没丢过。亡羊补牢，未为晚也。",
          readingPinyin: "Cóngqián yǒu ge mùmín diū le yì zhī yáng. Línjū quàn tā xiū yángjuàn, tā bù tīng. Dì'èr tiān yòu diū le yì zhī yáng, tā hěn hòuhuǐ, gǎnkuài bǎ yángjuàn xiū hǎo, cóngcǐ yáng zài méi diū guo. Wáng yáng bǔ láo, wèi wéi wǎn yě.",
          readingTranslation: "Peternak kehilangan domba karena kandang bocor. Setelah kehilangan lagi, ia menyesal dan segera menambal kandang. Memperbaiki kesalahan setelah terjadi tidak pernah ada kata terlambat.",
          vocab: [
            {
              hanzi: "亡羊补牢",
              pinyin: "wáng yáng bǔ láo",
              tone: 2232,
              meaningId: "Memperbaiki kandang setelah domba hilang (Belum terlambat memperbaiki kesalahan)",
              meaningEn: "Better late than never to mend mistakes",
              strokes: 28,
              strokeNames: ["亡 (3画)", "羊 (6画)", "补 (7画: 衤, 卜)", "牢 (7画: 宀, 牛)"],
              radical: "亠 / 羊 / 衤/ 宀",
              exampleHanzi: "知错就改，亡羊补牢犹未晚。",
              examplePinyin: "Zhī cuò jiù gǎi, wáng yáng bǔ láo yóu wèi wǎn.",
              exampleTranslation: "Mengakui kesalahan dan memperbaikinya tidak pernah ada kata terlambat.",
              image: "assets/textbook/book_10/img_2.jpg",
              iconEmoji: "🐑"
            },
            {
              hanzi: "后悔",
              pinyin: "hòuhuǐ",
              tone: 43,
              meaningId: "Menyesal",
              meaningEn: "Regret",
              strokes: 15,
              strokeNames: ["后 (6画: 撇, 横, 竖, 横折, 横)", "悔 (9画: 忄, 每)"],
              radical: "口 / 忄",
              exampleHanzi: "做决定前要想清楚，不要事后后悔。",
              examplePinyin: "Zuò juédìng qián yào xiǎng qīngchu, bú yào shìhòu hòuhuǐ.",
              exampleTranslation: "Pikirkan dengan matang sebelum memutuskan, jangan menyesal di kemudian hari.",
              image: "assets/textbook/book_10/img_2.jpg",
              iconEmoji: "😔"
            },
            {
              hanzi: "教训",
              pinyin: "jiàoxun",
              tone: 40,
              meaningId: "Pelajaran Berharga / Nasihat",
              meaningEn: "Lesson / Moral",
              strokes: 14,
              strokeNames: ["教 (10画)", "训 (4画: 讠, 川)"],
              radical: "攵 / 讠",
              exampleHanzi: "吸取过去的经验教训。",
              examplePinyin: "Xīqǔ guòqù de jīngyàn jiàoxun.",
              exampleTranslation: "Memetik pengalaman dan pelajaran dari masa lalu.",
              image: "assets/textbook/book_10/img_2.jpg",
              iconEmoji: "📜"
            }
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: 地球的伙伴——月亮 (Sahabat Bumi: Bulan)",
          storyTitle: "地球的伙伴——月亮",
          theme: "Sains Antariksa & Astronomi",
          dialogue: {
            speakerA: "A: 月亮离地球有多远？(Yuèliang lí dìqiú yǒu duō yuǎn? - Berapa jarak bulan dari bumi?)",
            speakerB: "B: 平均距离约三十八万四千四百多公里！(Píngjūn jùlí yuē sānshíbā wàn sìqiān sìbǎi duō gōnglǐ! - Jarak rata-rata sekitar 384.400 km!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "一年四季，月亮不停地绕着地球转动，它是地球唯一的天然卫星。",
              pinyin: "Yī nián sìjì, yuèliang bùtíng de ràozhe dìqiú zhuàndòng, tā shì dìqiú wéiyī de tiānrán wèixīng.",
              indonesian: "Sepanjang empat musim, bulan berputar tanpa henti mengelilingi bumi sebagai satelit alami satu-satunya."
            },
            {
              index: 2,
              hanzi: "月亮本身不发光，我们看到的明亮月光是它反射的太阳光。",
              pinyin: "Yuèliang běnshēn bù fāguāng, wǒmen kàndào de míngliàng yuèguāng shì tā fǎnshè de tàiyángguāng.",
              indonesian: "Bulan sendiri tidak memancarkan cahaya, cahaya bulan terang yang kita lihat adalah pantulan sinar matahari."
            },
            {
              index: 3,
              hanzi: "人类乘坐宇宙飞船登上月球，让人类探索宇宙的梦想一步步变成了现实！",
              pinyin: "Rénlèi chéngzuò yǔzhòu fēichuán dēngshàng yuèqiú, ràng rénlèi tànsuǒ yǔzhòu de mèngxiǎng yíbù-yíbù biànchéng le xiànshí!",
              indonesian: "Umat manusia menaiki pesawat antariksa mendarat di bulan, mengubah impian penjelajahan alam semesta menjadi kenyataan!"
            }
          ],
          readingPassage: "月亮是地球最亲密的伙伴。月亮平均距离地球三十八万公里。月亮本身不发光，反射太阳光。宇航员乘坐宇宙飞船登上了月球，展开了人类探索宇宙的新篇章。",
          readingPinyin: "Yuèliang shì dìqiú zuì qīnmì de huǒbàn. Yuèliang píngjūn jùlí dìqiú sānshíbā wàn gōnglǐ. Yuèliang běnshēn bù fāguāng, fǎnshè tàiyángguāng. Yǔhángyuán chéngzuò yǔzhòu fēichuán dēngshàng le yuèqiú, zhǎnkāi le rénlèi tànsuǒ yǔzhòu de xīn piānzhāng.",
          readingTranslation: "Bulan adalah sahabat terdekat bumi dengan jarak 380.000 km. Bulan memantulkan cahaya matahari. Astronot telah mendarat di bulan dan membuka lembaran baru penjelajahan antariksa.",
          vocab: [
            {
              hanzi: "卫星",
              pinyin: "wèixīng",
              tone: 41,
              meaningId: "Satelit",
              meaningEn: "Satellite",
              strokes: 17,
              strokeNames: ["卫 (3画: 横折钩, 竖, 横)", "星 (9画: 日, 生)"],
              radical: "卩 / 日",
              exampleHanzi: "月球是地球的天然卫星。",
              examplePinyin: "Yuèqiú shì dìqiú de tiānrán wèixīng.",
              exampleTranslation: "Bulan adalah satelit alami bumi.",
              image: "assets/textbook/book_10/img_3.jpg",
              iconEmoji: "🛰️"
            },
            {
              hanzi: "反射",
              pinyin: "fǎnshè",
              tone: 34,
              meaningId: "Memantulkan (Cahaya)",
              meaningEn: "Reflect",
              strokes: 14,
              strokeNames: ["反 (4画: 撇, 撇, 横撇, 捺)", "射 (10画: 身, 寸)"],
              radical: "又 / 身",
              exampleHanzi: "月亮反射太阳的光芒。",
              examplePinyin: "Yuèliang fǎnshè tàiyáng de guāngmáng.",
              exampleTranslation: "Bulan memantulkan sinar matahari.",
              image: "assets/textbook/book_10/img_3.jpg",
              iconEmoji: "✨"
            },
            {
              hanzi: "宇宙",
              pinyin: "yǔzhòu",
              tone: 34,
              meaningId: "Alam Semesta / Antariksa",
              meaningEn: "Universe / Cosmos",
              strokes: 14,
              strokeNames: ["宇 (6画: 宀, 于)", "宙 (8画: 宀, 由)"],
              radical: "宀 (Mián)",
              exampleHanzi: "浩瀚的宇宙充满未知奥秘。",
              examplePinyin: "Hàohàn de yǔzhòu chōngmǎn wèizhī àomì.",
              exampleTranslation: "Alam semesta yang luas menyimpan sejuta misteri.",
              image: "assets/textbook/book_10/img_3.jpg",
              iconEmoji: "🌌"
            }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "Han Yu 11 (汉语 第十一册)",
      level: "Tingkat Ahli 1",
      dinoRank: "Tyrannosaurus Rex Raja Purba",
      badge: "🌟 Bintang Galaksi Purba",
      themeColor: "#4F46E5",
      description: "Kasih burung walet, strategi perang Tian Ji Sai Ma, gerhana bulan, kisah Tuan Cha Bu Duo, dan padang rumput Mongolia.",
      units: [
        {
          unitNumber: 3,
          title: "Unit 3: 田忌赛马 (Strategi Pacuan Kuda Tian Ji)",
          storyTitle: "田忌赛马",
          theme: "Taktik Strategis & Kecerdikan Berpikir",
          dialogue: {
            speakerA: "A: 田忌是怎样反败为胜的？(Tián Jì shì zěnyàng fǎnbàiwéishèng de? - Bagaimana cara Tian Ji membalikkan kekalahan menjadi kemenangan?)",
            speakerB: "B: 孙膑调换了马的出场顺序，以二比一赢得了比赛！(Sūn Bìn diàohuàn le mǎ de chūchǎng shùnxù, yǐ èr bǐ yī yíngdé le bǐsài! - Sun Bin menukar urutan tanding kuda sehingga menang 2-1!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "齐国大将田忌和齐王赛马，每次比赛三个等级的马都输给了齐王。",
              pinyin: "Qíguó dàjiàng Tián Jì hé Qíwáng sàimǎ, měicì bǐsài sān gè děngjí de mǎ dōu shū gěi le Qíwáng.",
              indonesian: "Jenderal besar negeri Qi, Tian Ji, berlomba kuda dengan Raja Qi, setiap kali kuda tiga tingkatannya kalah dari Raja Qi."
            },
            {
              index: 2,
              hanzi: "军事家孙膑给田忌出谋划策：用下等马对齐王的上等马，输了第一场。",
              pinyin: "Jūnshìjiā Sūn Bìn gěi Tián Jì chūmóu-huàcè: yòng xiàděng mǎ duì Qíwáng de shàngděng mǎ, shū le dì-yī chǎng.",
              indonesian: "Ahli militer Sun Bin memberi taktik: gunakan kuda kelas bawah melawan kuda kelas atas Raja Qi, kalah di babak pertama."
            },
            {
              index: 3,
              hanzi: "接着用上等马胜齐王的中等马，用中等马胜齐王的下等马，最终以二比一赢得了胜利！",
              pinyin: "Jiēzhe yòng shàngděng mǎ shèng Qíwáng de zhōngděng mǎ, yòng zhōngděng mǎ shèng Qíwáng de xiàděng mǎ, zuìzhōng yǐ èr bǐ yī yíngdé le shènglì!",
              indonesian: "Selanjutnya gunakan kuda kelas atas mengalahkan kuda kelas menengah Raja Qi, dan kuda kelas menengah mengalahkan kuda kelas bawah Raja Qi, akhirnya menang 2-1!"
            }
          ],
          readingPassage: "两千多年前，齐国大将田忌酷爱赛马。孙膑献策调换出场顺序：下等马对上等马（输），上等马对中等马（赢），中等马对下等马（赢）。巧妙的策略让田忌反败为胜。",
          readingPinyin: "Liǎngqiān duō nián qián, Qíguó dàjiàng Tián Jì kù'ài sàimǎ. Sūn Bìn xiàncè diàohuàn chūchǎng shùnxù: xiàděng mǎ duì shàngděng mǎ (shū), shàngděng mǎ duì zhōngděng mǎ (yíng), zhōngděng mǎ duì xiàděng mǎ (yíng). Qiǎomiào de cèlüè ràng Tián Jì fǎnbàiwéishèng.",
          readingTranslation: "2000 tahun lalu, Tian Ji sering kalah pacuan kuda dari Raja Qi. Sun Bin menyarankan ubah urutan tanding sehingga kuda Tian Ji menang 2 dari 3 pertandingan. Strategi cerdik membalikkan kekalahan.",
          vocab: [
            {
              hanzi: "策略",
              pinyin: "cèlüè",
              tone: 44,
              meaningId: "Strategi / Taktik",
              meaningEn: "Strategy / Tactics",
              strokes: 23,
              strokeNames: ["策 (12画: 竹, 朿)", "略 (11画: 田, 各)"],
              radical: "竹 / 田",
              exampleHanzi: "运用正确的比赛策略。",
              examplePinyin: "Yùnyòng zhèngquè de bǐsài cèlüè.",
              exampleTranslation: "Menerapkan strategi pertandingan yang tepat.",
              image: "assets/textbook/book_11/img_3.jpg",
              iconEmoji: "🎯"
            },
            {
              hanzi: "胜利",
              pinyin: "shènglì",
              tone: 44,
              meaningId: "Kemenangan",
              meaningEn: "Victory / Triumph",
              strokes: 16,
              strokeNames: ["胜 (9画: 月, 券)", "利 (7画: 禾, 刂)"],
              radical: "月 / 刂",
              exampleHanzi: "坚持到底就是胜利！",
              examplePinyin: "Jiānchí dàodǐ jiù shì shènglì!",
              exampleTranslation: "Bertahan hingga akhir adalah kemenangan!",
              image: "assets/textbook/book_11/img_3.jpg",
              iconEmoji: "🏆"
            },
            {
              hanzi: "顺序",
              pinyin: "shùnxù",
              tone: 44,
              meaningId: "Urutan / Susunan",
              meaningEn: "Order / Sequence",
              strokes: 20,
              strokeNames: ["顺 (9画: 川, 页)", "序 (11画: 广, 予)"],
              radical: "页 / 广",
              exampleHanzi: "按照先后顺序排队。",
              examplePinyin: "Ànzhào xiānhòu shùnxù páiduì.",
              exampleTranslation: "Antre sesuai urutan kedatangan.",
              image: "assets/textbook/book_11/img_3.jpg",
              iconEmoji: "🔢"
            }
          ]
        },
        {
          unitNumber: 6,
          title: "Unit 6: 差不多先生的故事 (Kisah Tuan Cha Bu Duo)",
          storyTitle: "差不多先生传 (Karya Hu Shi)",
          theme: "Sikap Teliti vs Asal Jadi",
          dialogue: {
            speakerA: "A: 为什么叫他“差不多先生”？(Wèishénme jiào tā “Chàbuduō Xiānsheng”? - Mengapa ia dipanggil Tuan Cha Bu Duo?)",
            speakerB: "B: 因为他凡事都说“差不多”，马虎了一辈子！(Yīnwèi tā fánshì dōu shuō “chàbuduō”, mǎhu le yíbèizi! - Karena ia selalu menganggap 'kurang lebih sama saja', hidupnya ceroboh sepanjang masa!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "差不多先生常说：“凡事只要差不多就好了，何必那么认真呢？”",
              pinyin: "Chàbuduō Xiānsheng cháng shuō: “Fánshì zhǐyào chàbuduō jiù hǎo le, hébì nàme rènzhēn ne?”",
              indonesian: "Tuan Cha Bu Duo selalu berkata: “Segala hal asalkan kurang lebih mirip ya sudah cukup, mengapa harus begitu teliti?”"
            },
            {
              index: 2,
              hanzi: "他把买白糖买成红糖，把陕西说成山西，甚至火车晚点两分钟也觉得差不多。",
              pinyin: "Tā bǎ mǎi bái táng mǎi chéng hóng táng, bǎ Shǎnxī shuō chéng Shānxī, shènzhì huǒchē wǎndiǎn liǎng fēnzhōng yě juéde chàbuduō.",
              indonesian: "Ia disuruh beli gula putih malah beli gula merah, menyebut Shaanxi sebagai Shanxi, bahkan kereta terlambat 2 menit pun dianggapnya mirip."
            },
            {
              index: 3,
              hanzi: "生病时他请来给牛治病的兽医，最后送了命，警示我们做事一定要严谨认真！",
              pinyin: "Shēngbìng shí tā qǐnglái gěi niú zhìbìng de shòuyī, zuìhòu sòng le mìng, jǐngshì wǒmen zuòshì yídìng yào yánjǐn rènzhēn!",
              indonesian: "Saat sakit ia memanggil dokter hewan yang biasa mengobati sapi hingga akhirnya tewas, mengingatkan kita agar selalu cermat dan teliti!"
            }
          ],
          readingPassage: "差不多先生是全中国最出名的人。他常说：“做事情差不多就好，何必那么认真？”买盐买成白糖说差不多；陕西山西分不清说差不多；最后生病请兽医治病死了还说活人死人差不多。这个故事讽刺了马虎不认真的坏毛病。",
          readingPinyin: "Chàbuduō Xiānsheng shì quán Zhōngguó zuì chūmíng de rén. Tā cháng shuō: “Zuò shìqing chàbuduō jiù hǎo, hébì nàme rènzhēn?” Mǎi yán mǎi chéng bái táng shuō chàbuduō; Shǎnxī Shānxī fēnbuqīng shuō chàbuduō; zuìhòu shēngbìng qǐng shòuyī zhìbìng sǐ le hái shuō huórén sǐrén chàbuduō. Zhè ge gùshi fěngcì le mǎhu bú rènzhēn de huài máobìng.",
          readingTranslation: "Tuan Cha Bu Duo menganggap semua hal 'kurang lebih sama'. Membeli gula putih keliru gula merah, salah provinsi, hingga salah dokter. Cerita ini menyindir sifat ceroboh dan tidak teliti.",
          vocab: [
            {
              hanzi: "差不多",
              pinyin: "chàbuduō",
              tone: 401,
              meaningId: "Kurang Lebih / Mirip / Hampir Sama",
              meaningEn: "Almost / About the same",
              strokes: 19,
              strokeNames: ["差 (9画: 羊, 工)", "不 (4画)", "多 (6画)"],
              radical: "工 / 一 / 夕",
              exampleHanzi: "两个人的身高差不多。",
              examplePinyin: "Liǎng gè rén de shēngāo chàbuduō.",
              exampleTranslation: "Tinggi badan kedua orang itu hampir sama.",
              image: "assets/textbook/book_11/img_6.jpg",
              iconEmoji: "🤷"
            },
            {
              hanzi: "严谨",
              pinyin: "yánjǐn",
              tone: 23,
              meaningId: "Cermat / Teliti / Disiplin",
              meaningEn: "Rigorous / Precise",
              strokes: 21,
              strokeNames: ["严 (7画: 一, 丷, 厂, 彡)", "谨 (14画: 讠, 堇)"],
              radical: "一 / 讠",
              exampleHanzi: "科学研究需要严谨的态度。",
              examplePinyin: "Kēxué yánjiū xūyào yánjǐn de tàidu.",
              exampleTranslation: "Penelitian ilmiah membutuhkan sikap yang cermat dan teliti.",
              image: "assets/textbook/book_11/img_6.jpg",
              iconEmoji: "🔬"
            }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "Han Yu 12 (汉语 第十二册)",
      level: "Tingkat Ahli 2 (Tingkat Tertinggi)",
      dinoRank: "Grand Master Paleontologi Jurassic",
      badge: "🏆 Trofi Emas Sang Juara",
      themeColor: "#BE123C",
      description: "Diplomasi Yan Zi, kebijaksanaan Bao Gong, asal-usul karakter Hanzi, lorong Hutong Beijing, dan kelulusan 12 seri.",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 晏子出使楚国 (Diplomasi Yan Zi di Negeri Chu)",
          storyTitle: "晏子使楚",
          theme: "Kebijaksanaan Diplomasi & Harga Diri Bangsa",
          dialogue: {
            speakerA: "A: 楚王为什么让晏子钻狗洞？(Chǔwáng wèishénme ràng Yànzǐ zuān gǒudòng? - Mengapa Raja Chu menyuruh Yan Zi masuk lewat lubang anjing?)",
            speakerB: "B: 晏子机智回应：出使狗国才钻狗洞，令楚王不得不开大门！(Yànzǐ jīzhì huíyìng: chūshǐ gǒuguó cái zuān gǒudòng, lìng Chǔwáng bùdébù kāi dàmén! - Yan Zi menjawab dengan cerdik: Hanya utusan ke negeri anjing yang masuk lubang anjing, membuat Raja Chu terpaksa membuka gerbang utama!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "齐国的晏子出使楚国，楚王见他身材矮小，企图在城门旁开小狗洞侮辱他。",
              pinyin: "Qíguó de Yànzǐ chūshǐ Chǔguó, Chǔwáng jiàn tā shēncái ǎixiǎo, qǐtú zài chéngmén páng kāi xiǎo gǒudòng wǔrǔ tā.",
              indonesian: "Yan Zi dari negeri Qi diutus ke negeri Chu. Melihat tubuhnya pendek, Raja Chu berniat menghinanya dengan menyuruhnya masuk lewat lubang anjing."
            },
            {
              index: 2,
              hanzi: "晏子面不改色地说：“访问狗国才走狗门，今天我访问楚国，不该走这个门。”楚王只好大开城门迎客。",
              pinyin: "Yànzǐ miànbùgǎisè de shuō: “Fǎngwèn gǒuguó cái zǒu gǒumén, jīntiān wǒ fǎngwèn Chǔguó, bù gāi zǒu zhè ge mén.” Chǔwáng zhǐhǎo dàkāi chéngmén yíngkè.",
              indonesian: "Yan Zi tanpa gentar berkata: “Hanya utusan ke negeri anjing yang lewat pintu anjing, hari ini saya mengunjungi negeri Chu, tidak pantas lewat pintu ini.” Raja Chu terpaksa membuka gerbang besar."
            },
            {
              index: 3,
              hanzi: "晏子凭借非凡的才智与雄辩口才，维护了国家的尊严，赢得了后世无比的崇敬。",
              pinyin: "Yànzǐ píngjiè fēifán de cáizhì yǔ xióngbiàn kǒucái, wéihù le guójiā de zūnyán, yíngdé le hòushì wúbǐ de chóngjìng.",
              indonesian: "Dengan kecerdasan luar biasa dan kepiawaian bertutur kata, Yan Zi menjaga martabat bangsanya dan meraih penghormatan abadi."
            }
          ],
          readingPassage: "齐国晏子出使楚国。楚王想侮辱他身材矮小，叫他从小门进。晏子说：“出使狗国才钻狗洞。我出使楚国，不该走狗门。”楚王只好打开大门。席间楚王又挑衅齐国人做贼，晏子以“橘生淮南则为橘，生于淮北则为枳”巧妙反击。楚王从此不敢不尊重晏子。",
          readingPinyin: "Qíguó Yànzǐ chūshǐ Chǔguó. Chǔwáng xiǎng wǔrǔ tā shēncái ǎixiǎo, jiào tā cóng xiǎomén jìn. Yànzǐ shuō: “Chūshǐ gǒuguó cái zuān gǒudòng. Wǒ chūshǐ Chǔguó, bù gāi zǒu gǒumén.” Chǔwáng zhǐhǎo dǎkāi dàmén. Xíjiān Chǔwáng yòu tiǎoxìn Qíguórén zuò zéi, Yànzǐ yǐ “jú shēng Huáinán zé wéi jú, shēng yú Huáiběi zé wéi zhǐ” qiǎomiào fǎnjī. Chǔwáng cóngcǐ bù gǎn bù zūnzhòng Yànzǐ.",
          readingTranslation: "Yan Zi diutus ke negeri Chu. Raja Chu mencoba merendahkannya karena bertubuh pendek, namun Yan Zi membalas dengan kecerdasan diplomatik tingkat tinggi. Raja Chu akhirnya menaruh hormat mendalam kepada Yan Zi.",
          vocab: [
            {
              hanzi: "尊严",
              pinyin: "zūnyán",
              tone: 12,
              meaningId: "Martabat / Harga Diri",
              meaningEn: "Dignity / Honor",
              strokes: 19,
              strokeNames: ["尊 (12画: 酋, 寸)", "严 (7画)"],
              radical: "寸 / 一",
              exampleHanzi: "坚决捍卫国家和个人的尊严。",
              examplePinyin: "Jiānjué hànwèi guójiā hé gèrén de zūnyán.",
              exampleTranslation: "Tegas mempertahankan martabat bangsa dan pribadi.",
              image: "assets/textbook/book_12/img_1.jpg",
              iconEmoji: "👑"
            },
            {
              hanzi: "智慧",
              pinyin: "zhìhuì",
              tone: 44,
              meaningId: "Kebijaksanaan / Hikmah",
              meaningEn: "Wisdom / Intellect",
              strokes: 27,
              strokeNames: ["智 (12画: 知, 日)", "慧 (15画: 彗, 心)"],
              radical: "日 / 心",
              exampleHanzi: "古代先贤留下了无尽的智慧。",
              examplePinyin: "Gǔdài xiānxián liúxià le wújìn de zhìhuì.",
              exampleTranslation: "Para leluhur kuno mewariskan kebijaksanaan yang tak terhingga.",
              image: "assets/textbook/book_12/img_1.jpg",
              iconEmoji: "💡"
            },
            {
              hanzi: "出使",
              pinyin: "chūshǐ",
              tone: 13,
              meaningId: "Menjadi Duta / Diutus ke Luar Negeri",
              meaningEn: "Serve as diplomatic envoy",
              strokes: 13,
              strokeNames: ["出 (5画: 屮, 凵)", "使 (8画: 亻, 吏)"],
              radical: "凵 / 亻",
              exampleHanzi: "晏子出使楚国展现了大国风范。",
              examplePinyin: "Yànzǐ chūshǐ Chǔguó zhǎnxiàn le dàguó fēngfàn.",
              exampleTranslation: "Yan Zi menjadi duta ke negeri Chu menampilkan wibawa bangsa besar.",
              image: "assets/textbook/book_12/img_1.jpg",
              iconEmoji: "📜"
            }
          ]
        },
        {
          unitNumber: 7,
          title: "Unit 7: 历史悠久的汉字 (Sejarah Karakter Hanzi yang Abadi)",
          storyTitle: "历史悠久的汉字",
          theme: "Evolusi Bahasa & Kebudayaan Hanzi",
          dialogue: {
            speakerA: "A: 汉字有多少年的历史？(Hànzì yǒu duōshǎo nián de lìshǐ? - Berapa tahun sejarah karakter Hanzi?)",
            speakerB: "B: 汉字有五千多年的悠久历史，是世界上唯一沿用至今的古老表意文字！(Hànzì yǒu wǔqiān duō nián de yōujiǔ lìshǐ, shì shìjiè shang wéiyī yányòng zhìjīn de gǔlǎo biǎoyì wénzì! - Hanzi berusia lebih dari 5.000 tahun dan menjadi satu-satunya aksara logografis kuno yang terus hidup dipakai hingga kini!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "汉字是世界上历史最悠久的文字之一，承载了中华五千年的灿烂文明。",
              pinyin: "Hànzì shì shìjiè shang lìshǐ zuì yōujiǔ de wénzì zhī yī, chéngzài le Zhōnghuá wǔqiān nián de cànlàn wénmíng.",
              indonesian: "Aksara Hanzi adalah salah satu sistem tulisan tertua di dunia yang mengemban 5.000 tahun peradaban Tiongkok yang gilang gemilang."
            },
            {
              index: 2,
              hanzi: "从三千年前甲骨文的象形演变，到篆书、隶书、楷书，汉字如同一幅流淌的艺术长卷。",
              pinyin: "Cóng sānqiān nián qián jiǎgǔwén de xiàngxíng yǎnbiàn, dào zhuànshū, lìshū, kǎishū, Hànzì rútóng yì fú liútǎng de yìshù chángjuàn.",
              indonesian: "Dari evolusi piktografik Jiaguwen 3.000 tahun lalu hingga aksara Zhuan, Li, dan Kai, Hanzi bagaikan lukisan seni gulung yang mengalir indah."
            },
            {
              index: 3,
              hanzi: "如今全球有十几亿人在使用和学习汉字，汉字搭建起连接世界与未来的宏伟桥梁！",
              pinyin: "Rújīn quánqiú yǒu shí jǐ yì rén zài shǐyòng hé xuéxí Hànzì, Hànzì dājiàn qǐ liánjiē shìjiè yǔ wèilái de hóngwěi qiáoliáng!",
              indonesian: "Kini lebih dari 1 miliar manusia di seluruh dunia memakai dan mempelajari Hanzi, membangun jembatan agung yang menghubungkan dunia dan masa depan!"
            }
          ],
          readingPassage: "汉字是世界上历史最悠久的文字之一。三千多年前商代的甲骨文，已经是非常成熟的文字。几千年来，中国人用汉字书写了大量的不朽著作。汉字也深刻影响了日本、朝鲜、越南等国的文字。如今全世界有十几亿人使用汉字，它是世界上使用人数最多的文字。",
          readingPinyin: "Hànzì shì shìjiè shang lìshǐ zuì yōujiǔ de wénzì zhī yī. Sānqiān duō nián qián Shāngdài de jiǎgǔwén, yǐjīng shì fēicháng chéngshú de wénzì. Jǐ qiān nián lái, Zhōngguórén yòng Hànzì shūxiě le dàliàng de bùxiǔ zhùzuò. Hànzì yě shēnkè yǐngxiǎng le Rìběn, Cháoxiǎn, Yuènán děng guó de wénzì. Rújīn quán shìjiè yǒu shí jǐ yì rén shǐyòng Hànzì, tā shì shìjiè shang shǐyòng rénshù zuì duō de wénzì.",
          readingTranslation: "Karakter Hanzi adalah salah satu aksara tertua di dunia. Jiaguwen dari dinasti Shang 3.000 tahun lalu sudah menjadi aksara matang. Ribuan tahun bangsa Tionghoa menulis mahakarya abadi dengan Hanzi, dan kini digunakan oleh lebih dari 1 miliar orang di seluruh dunia.",
          vocab: [
            {
              hanzi: "汉字",
              pinyin: "Hànzì",
              tone: 44,
              meaningId: "Karakter Hanzi / Aksara Mandarin",
              meaningEn: "Chinese characters",
              strokes: 11,
              strokeNames: ["汉 (5画: 氵, 又)", "字 (6画: 宀, 子)"],
              radical: "氵/ 宀",
              exampleHanzi: "学习汉字让我了解中华文化。",
              examplePinyin: "Xuéxí Hànzì ràng wǒ liǎojiě Zhōnghuá wénhuà.",
              exampleTranslation: "Belajar Hanzi membuat saya memahami kebudayaan Tionghoa.",
              image: "assets/textbook/book_12/img_7.jpg",
              iconEmoji: "🀄"
            },
            {
              hanzi: "悠久",
              pinyin: "yōujiǔ",
              tone: 13,
              meaningId: "Kuno / Panjang Bersejarah",
              meaningEn: "Long (history) / Age-old",
              strokes: 14,
              strokeNames: ["悠 (11画: 攵, 心)", "久 (3画: 撇, 横撇, 捺)"],
              radical: "心 / 丿",
              exampleHanzi: "拥有悠久历史的国家。",
              examplePinyin: "Yōngyǒu yōujiǔ lìshǐ de guójiā.",
              exampleTranslation: "Negara yang memiliki sejarah panjang yang mengakar.",
              image: "assets/textbook/book_12/img_7.jpg",
              iconEmoji: "📜"
            },
            {
              hanzi: "文明",
              pinyin: "wénmíng",
              tone: 22,
              meaningId: "Peradaban / Budaya Luhur",
              meaningEn: "Civilization / Culture",
              strokes: 12,
              strokeNames: ["文 (4画)", "明 (8画: 日, 月)"],
              radical: "文 / 日",
              exampleHanzi: "中华文明源远流长。",
              examplePinyin: "Zhōnghuá wénmíng yuányuǎn-liúcháng.",
              exampleTranslation: "Peradaban Tionghoa bermula dari masa lampau dan terus mengalir jernih.",
              image: "assets/textbook/book_12/img_7.jpg",
              iconEmoji: "🏛️"
            }
          ]
        },
        {
          unitNumber: 15,
          title: "Unit 15: 毕业情思 (Refleksi dan Harapan Kelulusan)",
          storyTitle: "毕业情思",
          theme: "Kelulusan, Prestasi & Masa Depan Cerah",
          dialogue: {
            speakerA: "A: 祝贺你完成了十二册汉语学习！(Zhùhè nǐ wánchéng le shí'èr cè Hànyǔ xuéxí! - Selamat kamu telah menuntaskan pembelajaran 12 buku Han Yu!)",
            speakerB: "B: 掌握汉语让我看懂了更广阔的世界！(Zhǎngwò Hànyǔ ràng wǒ kàndǒng le gèng guǎngkuò de shìjiè! - Menguasai bahasa Mandarin membuatku memahami dunia yang jauh lebih luas!)"
          },
          storySentences: [
            {
              index: 1,
              hanzi: "学校是我们成长的摇篮，老师们用辛勤的汗水，培育我们健康茁壮地成长。",
              pinyin: "Xuéxiào shì wǒmen chéngzhǎng de yáolán, lǎoshī men yòng xīnqín de hànshuǐ, péiyù wǒmen jiànkāng zhuózhuàng de chéngzhǎng.",
              indonesian: "Sekolah adalah buaian pertumbuhan kita, para guru dengan peluh kerja keras membimbing kita tumbuh sehat dan tangguh."
            },
            {
              index: 2,
              hanzi: "我们完成了《汉语》1到12册的全部学习，不仅掌握了语言，更收获了珍贵的友谊与智慧！",
              pinyin: "Wǒmen wánchéng le 《Hànyǔ》 yī dào shí'èr cè de quánbù xuéxí, bùjǐn zhǎngwò le yǔyán, gèng shōuhuò le zhēnguì de yǒuyì yǔ zhìhuì!",
              indonesian: "Kami telah menuntaskan seluruh pelajaran buku Han Yu 1 sampai 12, tak hanya menguasai bahasa, tetapi juga memetik persahabatan dan kebijaksanaan berharga!"
            },
            {
              index: 3,
              hanzi: "学无止境，勇往直前！让我们乘风破浪，共创美好的未来！",
              pinyin: "Xué wú zhǐjìng, yǒngwǎng zhíqián! Ràng wǒmen chéngfēng-pòlàng, gòngchuàng měihǎo de wèilái!",
              indonesian: "Belajar tiada batas, melangkahlah maju dengan berani! Mari kita terjang ombak dan bentangkan layar bersama demi masa depan yang gilang gemilang!"
            }
          ],
          readingPassage: "学校是我们成长的摇篮。老师教我们做人，教我们学习文化知识。一堂堂课，照亮了我们前进的道路。同学们互相帮助，结下了深厚的情谊。学无止境，勇往直前！十二册汉语不仅让我们掌握了一门语言，更搭建起探索世界的桥梁！",
          readingPinyin: "Xuéxiào shì wǒmen chéngzhǎng de yáolán. Lǎoshī jiāo wǒmen zuòrén, jiāo wǒmen xuéxí wénhuà zhīshi. Yì tángtáng kè, zhàoliàng le wǒmen qiánjìn de dàolù. Tóngxuémen hùxiāng bāngzhù, jiéxià le shēnhòu de qíngyì. Xué wú zhǐjìng, yǒngwǎng zhíqián! Shí'èr cè Hànyǔ bùjǐn ràng wǒmen zhǎngwò le yī mén yǔyán, gèng dājiàn qǐ tànsuǒ shìjiè de qiáoliáng!",
          readingTranslation: "Sekolah adalah buaian pertumbuhan kita. Guru membimbing budi pekerti dan ilmu pengetahuan. Dua belas jilid Han Yu membekali kita dengan kemampuan bahasa sekaligus jembatan untuk menjelajahi dunia!",
          vocab: [
            {
              hanzi: "情谊",
              pinyin: "qíngyì",
              tone: 24,
              meaningId: "Persahabatan Erat / Kasih Sayang",
              meaningEn: "Deep friendship / Affection",
              strokes: 23,
              strokeNames: ["情 (11画: 忄, 青)", "谊 (12画: 讠, 宜)"],
              radical: "忄/ 讠",
              exampleHanzi: "珍惜同窗之间的深厚情谊。",
              examplePinyin: "Zhēnxī tóngchuāng zhījiān de shēnhòu qíngyì.",
              exampleTranslation: "Hargailah persahabatan yang mendalam di antara teman seperjuangan.",
              image: "assets/textbook/book_12/img_15.jpg",
              iconEmoji: "🤝"
            },
            {
              hanzi: "未来",
              pinyin: "wèilái",
              tone: 42,
              meaningId: "Masa Depan",
              meaningEn: "Future",
              strokes: 12,
              strokeNames: ["未 (5画: 一, 横, 竖, 撇, 捺)", "来 (7画: 横, 点, 撇, 横, 竖, 撇, 捺)"],
              radical: "木 / 木",
              exampleHanzi: "勇敢创造美好的未来！",
              examplePinyin: "Yǒnggǎn chuàngzào měihǎo de wèilái!",
              exampleTranslation: "Ciptakanlah masa depan yang gilang-gemilang dengan berani!",
              image: "assets/textbook/book_12/img_15.jpg",
              iconEmoji: "🚀"
            },
            {
              hanzi: "前途",
              pinyin: "qiántú",
              tone: 22,
              meaningId: "Prospek / Masa Depan Cerah",
              meaningEn: "Future prospects",
              strokes: 19,
              strokeNames: ["前 (9画: 䒑, 月, 刂)", "途 (10画: 辶, 余)"],
              radical: "刂/ 辶",
              exampleHanzi: "祝你前途无量，鹏程万里！",
              examplePinyin: "Zhù nǐ qiántú wúliàng, péngchéng wànlǐ!",
              exampleTranslation: "Semoga masa depanmu cemerlang tanpa batas dan sukses menggapai cita-cita!",
              image: "assets/textbook/book_12/img_15.jpg",
              iconEmoji: "🌟"
            }
          ]
        }
      ]
    }
  ]
};

// Global helper to get book by id
function getBookById(id) {
  return HANYU_DATA.books.find(b => b.id === Number(id)) || HANYU_DATA.books[0];
}

// Global helper to get unit
function getUnit(bookId, unitNumber) {
  const book = getBookById(bookId);
  return book.units.find(u => u.unitNumber === Number(unitNumber)) || book.units[0];
}

if (typeof globalThis !== 'undefined') {
  globalThis.HANYU_DATA = HANYU_DATA;
  globalThis.getBookById = getBookById;
  globalThis.getUnit = getUnit;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HANYU_DATA, getBookById, getUnit };
}
