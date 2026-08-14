// =========================================================================
// DATA KURIKULUM LENGKAP MANDARIN HAN YU 1 - 12 (北京华文学院 / 暨南大学出版社)
// Tema Dinosaurus Petualang Cilik
// =========================================================================

const HAN_YU_CURRICULUM = {
  books: [
    // -----------------------------------------------------------------------
    // HAN YU 1
    // -----------------------------------------------------------------------
    {
      id: 1,
      title: "Han Yu 1 (第一册)",
      level: "Tingkat 1 - Dasar Pemula",
      dinoGuide: { name: "Rexy Junior", species: "Baby T-Rex", avatar: "🦖", desc: "Halo teman-teman! Yuk belajar sapaan, keluarga, dan lingkungan sekolah bersamaku!" },
      units: [
        {
          id: 1,
          unitNumber: 1,
          title: "Unit 1: Sapaan & Keluargaku (问候与家庭)",
          lessons: ["第1课 你好", "第2课 我爱爸爸妈妈", "第3课 爸爸是老师", "第4课 你叫什么名字", "第5课 我爱我家"],
          story: {
            title: "Petualangan Dino Rexy Bertemu Teman Baru (小霸王龙交朋友)",
            hanzi: "今天，小霸王龙来到华文学校。他看见老师，说：“老师好！”老师笑着说：“你好！”下课了，小华和小红一起做游戏。小小说：“谢谢你！”小红说：“不客气！再见！”小霸王龙高兴极了，他爱学校，也爱新朋友！",
            pinyin: "Jīntiān, xiǎo bàwánglóng lái dào Huáwén xuéxiào. Tā kànjiàn lǎoshī, shuō: “Lǎoshī hǎo!” Lǎoshī xiàozhe shuō: “Nǐ hǎo!” Xiàkè le, Xiǎohuá hé Xiǎohóng yìqǐ zuò yóuxì. Xiǎohuá shuō: “Xièxie nǐ!” Xiǎohóng shuō: “Bú kèqi! Zàijiàn!” Xiǎo bàwánglóng gāoxìng jí le, tā ài xuéxiào, yě ài xīn péngyou!",
            indonesian: "Hari ini, Rexy si T-Rex kecil datang ke Sekolah Mandarin. Dia melihat guru lalu menyapa: 'Halo Guru!' Guru tersenyum berkata: 'Halo!' Setelah kelas usai, Xiaohua dan Xiaohong bermain bersama. Xiaohua berkata: 'Terima kasih!' Xiaohong menjawab: 'Sama-sama! Sampai jumpa!' Rexy sangat gembira, dia mencintai sekolah dan teman-teman barunya!",
            sentences: [
              { hanzi: "今天，小霸王龙来到华文学校。", pinyin: "Jīntiān, xiǎo bàwánglóng lái dào Huáwén xuéxiào.", indonesian: "Hari ini, Rexy si T-Rex kecil datang ke Sekolah Mandarin." },
              { hanzi: "他看见老师，说：“老师好！”", pinyin: "Tā kànjiàn lǎoshī, shuō: “Lǎoshī hǎo!”", indonesian: "Dia melihat guru lalu menyapa: 'Halo Guru!'" },
              { hanzi: "老师笑着说：“你好！”", pinyin: "Lǎoshī xiàozhe shuō: “Nǐ hǎo!”", indonesian: "Guru tersenyum berkata: 'Halo!'" },
              { hanzi: "下课了，小华和小红一起做游戏。", pinyin: "Xiàkè le, Xiǎohuá hé Xiǎohóng yìqǐ zuò yóuxì.", indonesian: "Setelah selesai kelas, Xiaohua dan Xiaohong bermain bersama." },
              { hanzi: "小华说：“谢谢你！”", pinyin: "Xiǎohuá shuō: “Xièxie nǐ!”", indonesian: "Xiaohua berkata: 'Terima kasih!'" },
              { hanzi: "小红说：“不客气！再见！”", pinyin: "Xiǎohóng shuō: “Bú kèqi! Zàijiàn!”", indonesian: "Xiaohong menjawab: 'Sama-sama! Sampai jumpa!'" },
              { hanzi: "小霸王龙高兴极了，他爱学校，也爱新朋友！", pinyin: "Xiǎo bàwánglóng gāoxìng jí le, tā ài xuéxiào, yě ài xīn péngyou!", indonesian: "Rexy sangat gembira, dia mencintai sekolah dan teman-teman barunya!" }
            ]
          },
          vocab: [
            { hanzi: "你", pinyin: "nǐ", meaning: "kamu", strokes: 7, strokeOrder: ["撇", "竖", "撇", "横撇", "竖钩", "撇", "点"], example: "你好 (Halo)", radical: "亻" },
            { hanzi: "好", pinyin: "hǎo", meaning: "baik / bagus", strokes: 6, strokeOrder: ["撇点", "撇", "提", "横撇", "竖钩", "横"], example: "很好 (Sangat baik)", radical: "女" },
            { hanzi: "我", pinyin: "wǒ", meaning: "saya / aku", strokes: 7, strokeOrder: ["撇", "横", "竖钩", "提", "斜钩", "撇", "点"], example: "我们 (Kita/Kami)", radical: "戈" },
            { hanzi: "爸爸", pinyin: "bàba", meaning: "ayah / papa", strokes: 8, strokeOrder: ["撇", "点", "撇", "捺", "横折", "竖", "横", "竖弯钩"], example: "我爱爸爸 (Aku sayang ayah)", radical: "父" },
            { hanzi: "妈妈", pinyin: "māma", meaning: "ibu / mama", strokes: 6, strokeOrder: ["撇点", "撇", "提", "横折", "竖折折钩", "横"], example: "妈妈好 (Ibu baik)", radical: "女" },
            { hanzi: "老师", pinyin: "lǎoshī", meaning: "guru", strokes: 6, strokeOrder: ["横", "竖", "横", "撇", "竖弯钩", "点"], example: "陈老师 (Guru Chen)", radical: "耂" },
            { hanzi: "谢谢", pinyin: "xièxie", meaning: "terima kasih", strokes: 12, strokeOrder: ["点", "横折提", "撇", "竖", "横折钩", "横", "横", "撇", "竖", "横折钩", "横", "点"], example: "谢谢老师 (Terima kasih guru)", radical: "讠" },
            { hanzi: "再见", pinyin: "zàijiàn", meaning: "sampai jumpa", strokes: 6, strokeOrder: ["横", "竖", "横折钩", "竖", "横", "横"], example: "明天再见 (Sampai jumpa besok)", radical: "冂" }
          ],
          matchingPairs: [
            { id: "m1", hanzi: "爸爸", pinyin: "bàba", meaning: "Ayah", icon: "👨‍💼", category: "keluarga" },
            { id: "m2", hanzi: "妈妈", pinyin: "māma", meaning: "Ibu", icon: "👩‍💼", category: "keluarga" },
            { id: "m3", hanzi: "老师", pinyin: "lǎoshī", meaning: "Guru", icon: "👩‍🏫", category: "sekolah" },
            { id: "m4", hanzi: "学生", pinyin: "xuéshēng", meaning: "Murid", icon: "🧑‍🎓", category: "sekolah" },
            { id: "m5", hanzi: "家", pinyin: "jiā", meaning: "Rumah", icon: "🏡", category: "tempat" },
            { id: "m6", hanzi: "小恐龙", pinyin: "xiǎo kǒnglóng", meaning: "Dinosaurus Kecil", icon: "🦖", category: "dino" }
          ],
          quizQuestions: [
            {
              id: "q1",
              type: "meaning",
              question: "Apa arti dari kosakata '老师' (lǎoshī)?",
              audioText: "Lǎoshī shì shénme yìsi?",
              options: ["Ayah", "Guru", "Murid", "Teman"],
              correctIndex: 1,
              explanation: "'老师' (lǎoshī) berarti Guru."
            },
            {
              id: "q2",
              type: "pinyin",
              question: "Manakah bacaan Pinyin yang benar untuk karakter '谢谢'?",
              audioText: "Xièxie de pīnyīn shì nǎge?",
              options: ["zàijiàn", "nǐ hǎo", "xièxie", "bú kèqi"],
              correctIndex: 2,
              explanation: "Karakter '谢谢' dibaca 'xièxie' yang berarti terima kasih."
            },
            {
              id: "q3",
              type: "strokes",
              question: "Berapakah jumlah goresan (笔画) dari karakter '我' (wǒ)?",
              audioText: "“Wǒ” zì yǒu jǐ huà?",
              options: ["5 goresan", "6 goresan", "7 goresan", "8 goresan"],
              correctIndex: 2,
              explanation: "Karakter '我' memiliki 7 goresan (撇, 横, 竖钩, 提, 斜钩, 撇, 点)."
            },
            {
              id: "q4",
              type: "sentence_order",
              question: "Susunlah kata-kata berikut menjadi kalimat yang benar: [爱 / 我 / 爸爸妈妈]",
              audioText: "Qǐng lián cí chéng jù: ài, wǒ, bàba māma.",
              options: [
                "爸爸妈妈 我 爱。",
                "我 爱 爸爸妈妈。",
                "爱 我 爸爸妈妈。",
                "爸爸妈妈 爱 我 呢。"
              ],
              correctIndex: 1,
              explanation: "Susunan kalimat Mandarin yang tepat adalah Subjek + Predikat + Objek: '我爱爸爸妈妈。' (Saya sayang ayah dan ibu)."
            },
            {
              id: "q5",
              type: "picture_match",
              question: "Pilihlah gambar yang sesuai dengan kalimat '爸爸是老师。' (Ayah adalah seorang guru)!",
              audioText: "Bàba shì lǎoshī, nǎge túpiàn shì duì de?",
              options: [
                "👩‍🏫 Seorang guru di depan kelas papan tulis",
                "👨‍🍳 Koki sedang memasak",
                "👮 Polisi sedang bertugas",
                "👨‍🌾 Petani di kebun"
              ],
              correctIndex: 0,
              explanation: "Kalimat '爸爸是老师' berarti Ayah adalah seorang guru."
            }
          ]
        },
        {
          id: 2,
          unitNumber: 2,
          title: "Unit 2: Aktivitas Sekolah & Makanan (学校生活与午饭)",
          lessons: ["第6课 哥哥去学校", "第7课 我们上课吧", "第8课 我们吃午饭", "第9课 小华打球", "第10课 我的一天"],
          story: {
            title: "Makan Siang Bersama Brachy si Leher Panjang (长颈龙的美味午饭)",
            hanzi: "中午十二点，下课铃响了。小华和小明去食堂吃午饭。小华吃面条，小明吃米饭和饺子。长颈龙走过来，大口大口吃绿色的竹子和西瓜。大家都说：“午饭真好吃！多吃蔬菜身体棒！”",
            pinyin: "Zhōngwǔ shí'èr diǎn, xiàkè líng xiǎng le. Xiǎohuá hé Xiǎomíng qù shítáng chī wǔfàn. Xiǎohuá chī miàntiáo, Xiǎomíng chī mǐfàn hé jiǎozi. Chángjǐnglóng zǒu guòlái, dà kǒu dà kǒu chī lǜsè de zhúzi hé xīguā. Dàjiā dōu shuō: “Wǔfàn zhēn hǎochī! Duō chī shūcài shēntǐ bàng!”",
            indonesian: "Jam 12 siang, bel istirahat berbunyi. Xiaohua dan Xiaoming pergi ke kantin makan siang. Xiaohua makan mie, Xiaoming makan nasi dan pangsit. Brachy si dinosaurus leher panjang datang makan bambu hijau segar dan semangka lezat. Semua berseru: 'Makan siang enak sekali! Rajin makan sayur membuat tubuh kuat!'",
            sentences: [
              { hanzi: "中午十二点，下课铃响了。", pinyin: "Zhōngwǔ shí'èr diǎn, xiàkè líng xiǎng le.", indonesian: "Jam dua belas siang, bel istirahat berbunyi." },
              { hanzi: "小华和小明去食堂吃午饭。", pinyin: "Xiǎohuá hé Xiǎomíng qù shítáng chī wǔfàn.", indonesian: "Xiaohua dan Xiaoming pergi ke kantin makan siang." },
              { hanzi: "小华吃面条，小明吃米饭和饺子。", pinyin: "Xiǎohuá chī miàntiáo, Xiǎomíng chī mǐfàn hé jiǎozi.", indonesian: "Xiaohua makan mi, Xiaoming makan nasi dan pangsit." },
              { hanzi: "长颈龙大口大口吃绿色的竹子和西瓜。", pinyin: "Chángjǐnglóng dà kǒu dà kǒu chī lǜsè de zhúzi hé xīguā.", indonesian: "Brachy si dinosaurus makan bambu hijau dan semangka lezat." },
              { hanzi: "大家都说：“午饭真好吃！多吃蔬菜身体棒！”", pinyin: "Dàjiā dōu shuō: “Wǔfàn zhēn hǎochī! Duō chī shūcài shēntǐ bàng!”", indonesian: "Semua berseru: 'Makan siang enak sekali! Rajin makan sayur membuat tubuh sehat!'" }
            ]
          },
          vocab: [
            { hanzi: "去", pinyin: "qù", meaning: "pergi", strokes: 5, strokeOrder: ["横", "竖", "横", "撇折", "点"], example: "去学校 (Pergi ke sekolah)", radical: "厶" },
            { hanzi: "学校", pinyin: "xuéxiào", meaning: "sekolah", strokes: 8, strokeOrder: ["点", "点", "提", "撇", "竖钩", "横撇", "点", "提"], example: "我们的学校 (Sekolah kami)", radical: "木" },
            { hanzi: "吃", pinyin: "chī", meaning: "makan", strokes: 6, strokeOrder: ["竖", "横折", "横", "撇", "横", "竖弯钩"], example: "吃饭 (Makan nasi)", radical: "口" },
            { hanzi: "午饭", pinyin: "wǔfàn", meaning: "makan siang", strokes: 4, strokeOrder: ["撇", "横", "横", "竖"], example: "吃午饭 (Makan siang)", radical: "饣" },
            { hanzi: "面条", pinyin: "miàntiáo", meaning: "mi / bakmi", strokes: 9, strokeOrder: ["横", "撇", "竖", "横折", "竖", "竖", "横", "横", "横"], example: "牛肉面条 (Bakmi sapi)", radical: "面" },
            { hanzi: "米饭", pinyin: "mǐfàn", meaning: "nasi putih", strokes: 6, strokeOrder: ["点", "撇", "横", "竖", "撇", "捺"], example: "吃米饭 (Makan nasi)", radical: "米" },
            { hanzi: "打球", pinyin: "dǎqiú", meaning: "bermain bola", strokes: 5, strokeOrder: ["横", "竖钩", "提", "横", "竖钩"], example: "打篮球 (Main basket)", radical: "扌" }
          ],
          matchingPairs: [
            { id: "m21", hanzi: "学校", pinyin: "xuéxiào", meaning: "Sekolah", icon: "🏫", category: "tempat" },
            { id: "m22", hanzi: "米饭", pinyin: "mǐfàn", meaning: "Nasi", icon: "🍚", category: "makanan" },
            { id: "m23", hanzi: "面条", pinyin: "miàntiáo", meaning: "Bakmi", icon: "🍜", category: "makanan" },
            { id: "m24", hanzi: "饺子", pinyin: "jiǎozi", meaning: "Pangsit", icon: "🥟", category: "makanan" },
            { id: "m25", hanzi: "篮球", pinyin: "lánqiú", meaning: "Bola Basket", icon: "🏀", category: "olahraga" },
            { id: "m26", hanzi: "足球", pinyin: "zúqiú", meaning: "Sepak Bola", icon: "⚽", category: "olahraga" }
          ],
          quizQuestions: [
            {
              id: "q21",
              type: "meaning",
              question: "Apa arti dari kata '面条' (miàntiáo)?",
              audioText: "Miàntiáo shì shénme yìsi?",
              options: ["Nasi goreng", "Bakmi / Mi", "Roti", "Sup"],
              correctIndex: 1,
              explanation: "'面条' (miàntiáo) berarti mi/bakmi."
            },
            {
              id: "q22",
              type: "pinyin",
              question: "Pilihlah pinyin yang tepat untuk '去学校':",
              audioText: "“Qù xuéxiào” de pīnyīn shì nǎge?",
              options: ["qù xuéxiào", "chī wǔfàn", "dǎ lánqiú", "shàng kè ba"],
              correctIndex: 0,
              explanation: "'去学校' dibaca 'qù xuéxiào' (pergi ke sekolah)."
            },
            {
              id: "q23",
              type: "strokes",
              question: "Berapa jumlah goresan karakter '吃' (chī)?",
              audioText: "“Chī” zì yǒu jǐ huà?",
              options: ["4 goresan", "5 goresan", "6 goresan", "7 goresan"],
              correctIndex: 2,
              explanation: "Karakter '吃' memiliki 6 goresan: 竖, 横折, 横, 撇, 横, 竖弯钩."
            },
            {
              id: "q24",
              type: "sentence_order",
              question: "Susun kalimat: [吃 / 中午 / 我们 / 午饭]",
              audioText: "Qǐng lián cí chéng jù: chī, zhōngwǔ, wǒmen, wǔfàn.",
              options: [
                "我们 吃 中午 午饭。",
                "中午 我们 吃 午饭。",
                "吃 午饭 中午 我们。",
                "午饭 中午 吃 我们。"
              ],
              correctIndex: 1,
              explanation: "Keterangan waktu diletakkan di depan atau setelah subjek: '中午我们吃午饭。' (Siang hari kami makan siang)."
            },
            {
              id: "q25",
              type: "picture_match",
              question: "Gambar mana yang menunjukkan '小华打篮球' (Xiaohua bermain bola basket)?",
              audioText: "Xiǎohuá dǎ lánqiú, nǎge túpiàn shì duì de?",
              options: [
                "🏀 Anak sedang mendribel dan memasukkan bola basket",
                "⚽ Anak sedang menendang bola sepak di lapangan rumput",
                "🏓 Anak sedang bermain tenis meja / pingpong",
                "🏊 Anak sedang berenang di kolam"
              ],
              correctIndex: 0,
              explanation: "'打篮球' berarti bermain bola basket."
            }
          ]
        },
        {
          id: 3,
          unitNumber: 3,
          title: "Unit 3: Perlengkapan Sekolah & Kamarku (文具与我的房间)",
          lessons: ["第11课 这是我的书", "第12课 我有两本书", "第13课 你家有电脑吗", "第14课 书在书架上", "第15课 我的房间"],
          story: {
            title: "Kamar Rapi Si Triceratops Cilik (三角龙整理小房间)",
            hanzi: "这是三角龙的小房间。书架上有十本书，桌子上有电脑和铅笔。三角龙把书包放在椅子上，把玩具放进盒子里。房间真干净，三角龙高兴地在床上看书！",
            pinyin: "Zhè shì sānjiǎolóng de xiǎo fángjiān. Shūjià shang yǒu shí běn shū, zhuōzi shang yǒu diànnǎo hé qiānbǐ. Sānjiǎolóng bǎ shūbāo fàng zài yǐzi shang, bǎ wánjù fàng jìn hézi lǐ. Fángjiān zhēn gānjìng, sānjiǎolóng gāoxìng de zài chuáng shang kàn shū!",
            indonesian: "Ini adalah kamar si Triceratops kecil. Di atas rak buku ada sepuluh buku, di atas meja ada komputer dan pensil. Triceratops menaruh tas di atas kursi, dan merapikan mainan ke dalam kotak. Kamarnya sangat bersih, Triceratops membaca buku di kasur dengan riang!",
            sentences: [
              { hanzi: "这是三角龙的小房间。", pinyin: "Zhè shì sānjiǎolóng de xiǎo fángjiān.", indonesian: "Ini adalah kamar tidur kecil milik si Triceratops." },
              { hanzi: "书架上有十本书，桌子上有电脑和铅笔。", pinyin: "Shūjià shang yǒu shí běn shū, zhuōzi shang yǒu diànnǎo hé qiānbǐ.", indonesian: "Di atas rak buku ada 10 buku, di atas meja ada komputer dan pensil." },
              { hanzi: "三角龙把书包放在椅子上。", pinyin: "Sānjiǎolóng bǎ shūbāo fàng zài yǐzi shang.", indonesian: "Triceratops meletakkan tas sekolahnya di atas kursi." },
              { hanzi: "房间真干净，三角龙高兴地看书！", pinyin: "Fángjiān zhēn gānjìng, sānjiǎolóng gāoxìng de kàn shū!", indonesian: "Kamarnya sangat bersih dan rapi, Triceratops membaca buku dengan gembira!" }
            ]
          },
          vocab: [
            { hanzi: "书", pinyin: "shū", meaning: "buku", strokes: 4, strokeOrder: ["横折", "横折钩", "竖", "点"], example: "两本书 (Dua buku)", radical: "乙" },
            { hanzi: "笔", pinyin: "bǐ", meaning: "pensil / pena", strokes: 10, strokeOrder: ["撇", "横", "点", "撇", "横", "点", "撇", "横", "横", "竖弯钩"], example: "铅笔 (Pensil)", radical: "竹" },
            { hanzi: "书包", pinyin: "shūbāo", meaning: "tas sekolah", strokes: 5, strokeOrder: ["撇", "横折钩", "横折", "横", "竖弯钩"], example: "大书包 (Tas besar)", radical: "勹" },
            { hanzi: "电脑", pinyin: "diànnǎo", meaning: "komputer", strokes: 5, strokeOrder: ["竖", "横折", "横", "横", "竖弯钩"], example: "一台电脑 (Satu unit komputer)", radical: "田" },
            { hanzi: "桌子", pinyin: "zhuōzi", meaning: "meja", strokes: 10, strokeOrder: ["竖", "横", "竖", "横折", "横", "横", "横", "竖", "撇", "捺"], example: "圆桌 (Meja bundar)", radical: "木" },
            { hanzi: "椅子", pinyin: "yǐzi", meaning: "kursi", strokes: 9, strokeOrder: ["横", "竖", "撇", "点", "横折", "横", "竖折", "横", "竖钩"], example: "一把椅子 (Sebuah kursi)", radical: "木" }
          ],
          matchingPairs: [
            { id: "m31", hanzi: "书", pinyin: "shū", meaning: "Buku", icon: "📚", category: "alat_tulis" },
            { id: "m32", hanzi: "笔", pinyin: "bǐ", meaning: "Pena / Pensil", icon: "✏️", category: "alat_tulis" },
            { id: "m33", hanzi: "书包", pinyin: "shūbāo", meaning: "Tas Sekolah", icon: "🎒", category: "alat_tulis" },
            { id: "m34", hanzi: "电脑", pinyin: "diànnǎo", meaning: "Komputer", icon: "💻", category: "elektronik" },
            { id: "m35", hanzi: "桌子", pinyin: "zhuōzi", meaning: "Meja", icon: "🪑", category: "furnitur" },
            { id: "m36", hanzi: "床", pinyin: "chuáng", meaning: "Tempat Tidur", icon: "🛏️", category: "furnitur" }
          ],
          quizQuestions: [
            {
              id: "q31",
              type: "meaning",
              question: "Apakah arti dari kata '电脑' (diànnǎo)?",
              audioText: "Diànnǎo shì shénme yìsi?",
              options: ["Televisi", "Komputer", "Telepon", "Kipas angin"],
              correctIndex: 1,
              explanation: "'电脑' (diànnǎo) berarti komputer."
            },
            {
              id: "q32",
              type: "pinyin",
              question: "Pilihlah bacaan Pinyin yang benar untuk '书包':",
              audioText: "“Shūbāo” de pīnyīn shì nǎge?",
              options: ["shūbāo", "zhuōzi", "qiānbǐ", "fángjiān"],
              correctIndex: 0,
              explanation: "'书包' dilafalkan sebagai 'shūbāo' (tas sekolah)."
            },
            {
              id: "q33",
              type: "strokes",
              question: "Berapakah jumlah goresan dari karakter '书' (shū)?",
              audioText: "“Shū” zì yǒu jǐ huà?",
              options: ["3 goresan", "4 goresan", "5 goresan", "6 goresan"],
              correctIndex: 1,
              explanation: "Karakter '书' terdiri dari 4 goresan: 横折, 横折钩, 竖, 点."
            },
            {
              id: "q34",
              type: "sentence_order",
              question: "Susun kalimat: [在 / 书 / 书架上 / 的 / 我]",
              audioText: "Qǐng lián cí chéng jù: zài, shū, shūjià shang, de, wǒ.",
              options: [
                "我的书在书架上。",
                "书架上在我的书。",
                "书我在书架上的。",
                "在书架上我的书。"
              ],
              correctIndex: 0,
              explanation: "Susunan yang tepat adalah: '我的书在书架上。' (Buku saya ada di atas rak buku)."
            },
            {
              id: "q35",
              type: "picture_match",
              question: "Gambar manakah yang merupakan '书包' (shūbāo)?",
              audioText: "Nǎge túpiàn shì shūbāo?",
              options: [
                "🎒 Tas punggung sekolah warna biru cerah",
                "💻 Layar laptop komputer",
                "🛏️ Kasur kamar tidur yang empuk",
                "🚪 Pintu kayu kelas sekolah"
              ],
              correctIndex: 0,
              explanation: "'书包' (shūbāo) adalah tas sekolah."
            }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // HAN YU 2
    // -----------------------------------------------------------------------
    {
      id: 2,
      title: "Han Yu 2 (第二册)",
      level: "Tingkat 2 - Dasar Lanjutan",
      dinoGuide: { name: "Trishi", species: "Triceratops Ceria", avatar: "🦏", desc: "Hai! Aku Trishi! Ayo bandingkan ukuran benda, warna baju, dan suasana lingkungan sekitar!" },
      units: [
        {
          id: 1,
          unitNumber: 1,
          title: "Unit 1: Perbandingan & Alam Sekitar (比较与大自然)",
          lessons: ["第1课 西瓜大 苹果小", "第2课 今天的天气很好", "第3课 我们真高兴啊", "第4课 小狗非常可爱", "第5课 这个公园真热闹"],
          story: {
            title: "Taman Dinosaurus yang Ramai (热闹的恐龙公园)",
            hanzi: "今天天气很好，天很蓝，草很绿。三角龙和小恐龙们来到公园。西瓜很大，苹果很小。树上的小鸟在唱歌，草地上的小狗跳来跳去，非常可爱！公园里朋友真多，真热闹啊！",
            pinyin: "Jīntiān tiānqì hěn hǎo, tiān hěn lán, cǎo hěn lǜ. Sānjiǎolóng hé xiǎo kǒnglóng men lái dào gōngyuán. Xīguā hěn dà, píngguǒ hěn xiǎo. Shù shang de xiǎoniǎo zài chànggē, cǎodì shang de xiǎogǒu tiào lái tiào qù, fēicháng kě'ài! Gōngyuán lǐ péngyou zhēn duō, zhēn rènao a!",
            indonesian: "Hari ini cuaca sangat bagus, langit biru, rumput hijau. Trishi dan dinosaurus kecil pergi ke taman. Semangka sangat besar, apel sangat kecil. Burung bernyanyi di pohon, anak anjing melompat-lompat dengan lucu! Di taman ada banyak teman, ramai dan meriah sekali!",
            sentences: [
              { hanzi: "今天天气很好，天很蓝，草很绿。", pinyin: "Jīntiān tiānqì hěn hǎo, tiān hěn lán, cǎo hěn lǜ.", indonesian: "Hari ini cuaca sangat bagus, langit sangat biru, rumput sangat hijau." },
              { hanzi: "西瓜很大，苹果很小。", pinyin: "Xīguā hěn dà, píngguǒ hěn xiǎo.", indonesian: "Semangka sangat besar, buah apel sangat kecil." },
              { hanzi: "草地上的小狗非常可爱！", pinyin: "Cǎodì shang de xiǎogǒu fēicháng kě'ài!", indonesian: "Anak anjing di atas padang rumput sangat lucu menggemaskan!" },
              { hanzi: "公园里朋友真多，真热闹啊！", pinyin: "Gōngyuán lǐ péngyou zhēn duō, zhēn rènao a!", indonesian: "Di taman ada begitu banyak sahabat, ramai dan menyenangkan sekali!" }
            ]
          },
          vocab: [
            { hanzi: "西瓜", pinyin: "xīguā", meaning: "semangka", strokes: 6, strokeOrder: ["横", "竖", "横折", "撇", "竖弯钩", "横"], example: "大西瓜 (Semangka besar)", radical: "瓜" },
            { hanzi: "苹果", pinyin: "píngguǒ", meaning: "apel", strokes: 8, strokeOrder: ["横", "竖", "竖", "点", "点", "提", "横", "竖"], example: "红苹果 (Apel merah)", radical: "艹" },
            { hanzi: "天气", pinyin: "tiānqì", meaning: "cuaca", strokes: 4, strokeOrder: ["横", "横", "撇", "捺"], example: "好天气 (Cuaca cerah)", radical: "大" },
            { hanzi: "可爱", pinyin: "kě'ài", meaning: "lucu / menggemaskan", strokes: 5, strokeOrder: ["横", "竖", "横折", "横", "竖钩"], example: "小狗可爱 (Anak anjing lucu)", radical: "口" },
            { hanzi: "热闹", pinyin: "rènao", meaning: "ramai / meriah", strokes: 10, strokeOrder: ["横", "竖", "竖", "横", "横", "竖", "横折", "横", "点", "点"], example: "公园真热闹 (Taman sangat ramai)", radical: "灬" }
          ],
          matchingPairs: [
            { id: "m211", hanzi: "西瓜", pinyin: "xīguā", meaning: "Semangka", icon: "🍉", category: "buah" },
            { id: "m212", hanzi: "苹果", pinyin: "píngguǒ", meaning: "Apel", icon: "🍎", category: "buah" },
            { id: "m213", hanzi: "小狗", pinyin: "xiǎogǒu", meaning: "Anak Anjing", icon: "🐶", category: "hewan" },
            { id: "m214", hanzi: "小鸟", pinyin: "xiǎoniǎo", meaning: "Burung Kecil", icon: "🐦", category: "hewan" },
            { id: "m215", hanzi: "公园", pinyin: "gōngyuán", meaning: "Taman", icon: "🏞️", category: "tempat" },
            { id: "m216", hanzi: "太阳", pinyin: "tàiyáng", meaning: "Matahari", icon: "☀️", category: "alam" }
          ],
          quizQuestions: [
            {
              id: "q201",
              type: "meaning",
              question: "Apa arti dari pasangan kata '大' dan '小'?",
              audioText: "“Dà” hé “xiǎo” shì shénme yìsi?",
              options: ["Banyak dan Sedikit", "Besar dan Kecil", "Panjang dan Pendek", "Tinggi dan Rendah"],
              correctIndex: 1,
              explanation: "'大' (dà) artinya besar, '小' (xiǎo) artinya kecil."
            },
            {
              id: "q202",
              type: "pinyin",
              question: "Manakah bacaan Pinyin yang benar untuk '可爱'?",
              audioText: "“Kě'ài” de pīnyīn shì nǎge?",
              options: ["rènao", "kě'ài", "gāoxìng", "piàoliang"],
              correctIndex: 1,
              explanation: "'可爱' dibaca 'kě'ài' yang artinya lucu/imut."
            },
            {
              id: "q203",
              type: "strokes",
              question: "Berapakah jumlah goresan karakter '大' (dà)?",
              audioText: "“Dà” zì yǒu jǐ huà?",
              options: ["2 goresan", "3 goresan", "4 goresan", "5 goresan"],
              correctIndex: 1,
              explanation: "Karakter '大' memiliki 3 goresan: 横, 撇, 捺."
            },
            {
              id: "q204",
              type: "sentence_order",
              question: "Susun kalimat: [很好 / 的 / 天气 / 今天]",
              audioText: "Qǐng lián cí chéng jù: hěn hǎo, de, tiānqì, jīntiān.",
              options: [
                "今天的天气很好。",
                "很好的天气今天。",
                "天气很好的今天。",
                "今天很好的天气。"
              ],
              correctIndex: 0,
              explanation: "'今天的天气很好。' artinya Cuaca hari ini sangat baik."
            },
            {
              id: "q205",
              type: "picture_match",
              question: "Pilih gambar yang mendeskripsikan '西瓜大，苹果小'!",
              audioText: "Xīguā dà, píngguǒ xiǎo, nǎge tú duì?",
              options: [
                "🍉 Semangka besar di samping apel merah kecil 🍎",
                "🚗 Mobil truk besar di samping bus 🚌",
                "🦒 Jerapah tinggi di samping singa 🦁",
                "🎂 Kue tart ulang tahun besar 🍰"
              ],
              correctIndex: 0,
              explanation: "Semangka (西瓜) berukuran besar dan apel (苹果) berukuran kecil."
            }
          ]
        },
        {
          id: 2,
          unitNumber: 2,
          title: "Unit 2: Peralatan & Posisi Arah (餐具、衣物与方位)",
          lessons: ["第6课 这双筷子是我的", "第7课 小华的衣服是红的", "第8课 书包里有什么", "第9课 学校前面是马路", "第10课 我们的教室"],
          story: {
            title: "Petualangan Steggy Mencari Sumpit Ajaib (剑龙找筷子)",
            hanzi: "今天中午，剑龙要在学校吃午饭。他说：“这双红色的筷子是我的，那个蓝色的碗是妹妹的。”学校前面是马路，后面是美丽的大公园。走进宽敞的教室，桌椅整整齐齐，大家一起快乐学习！",
            pinyin: "Jīntiān zhōngwǔ, jiànlóng yào zài xuéxiào chī wǔfàn. Tā shuō: “Zhè shuāng hóngsè de kuàizi shì wǒ de, nà ge lánsè de wǎn shì mèimei de.” Xuéxiào qiánmiàn shì mǎlù, hòumiàn shì měilì de dà gōngyuán. Zǒu jìn kuānchang de jiàoshì, zhuōyǐ zhěngzhěng qíqí, dàjiā yìqǐ kuàilè xuéxí!",
            indonesian: "Siang ini Stegosaurus makan siang di sekolah. Dia berkata: 'Sepasang sumpit merah ini milikku, mangkok biru itu milik adik perempuanku.' Di depan sekolah ada jalan raya, di belakang ada taman bunga yang indah. Masuk ke ruang kelas yang luas dan rapi, semua belajar dengan riang!",
            sentences: [
              { hanzi: "这双红色的筷子是我的。", pinyin: "Zhè shuāng hóngsè de kuàizi shì wǒ de.", indonesian: "Sepasang sumpit merah ini adalah milikku." },
              { hanzi: "那个蓝色的碗是妹妹的。", pinyin: "Nà ge lánsè de wǎn shì mèimei de.", indonesian: "Mangkok warna biru itu adalah milik adik perempuan." },
              { hanzi: "学校前面是马路，后面是公园。", pinyin: "Xuéxiào qiánmiàn shì mǎlù, hòumiàn shì gōngyuán.", indonesian: "Di depan sekolah adalah jalan raya, di belakang adalah taman." },
              { hanzi: "我们的教室非常干净整齐！", pinyin: "Wǒmen de jiàoshì fēicháng gānjìng zhěngqí!", indonesian: "Ruang kelas kami sangat bersih dan rapi!" }
            ]
          },
          vocab: [
            { hanzi: "筷子", pinyin: "kuàizi", meaning: "sumpit", strokes: 13, strokeOrder: ["撇", "横", "点", "撇", "横", "点", "横", "竖", "竖", "横", "撇", "横撇", "捺"], example: "一双筷子 (Sepasang sumpit)", radical: "竹" },
            { hanzi: "衣服", pinyin: "yīfu", meaning: "pakaian / baju", strokes: 6, strokeOrder: ["点", "横", "撇", "竖提", "撇", "捺"], example: "红衣服 (Baju merah)", radical: "衣" },
            { hanzi: "前面", pinyin: "qiánmiàn", meaning: "bagian depan", strokes: 9, strokeOrder: ["点", "撇", "横", "竖", "横折钩", "横", "横", "竖", "竖钩"], example: "学校前面 (Depan sekolah)", radical: "刀" },
            { hanzi: "后面", pinyin: "hòumiàn", meaning: "bagian belakang", strokes: 6, strokeOrder: ["撇", "撇", "横", "竖", "横折", "横"], example: "房子后面 (Belakang rumah)", radical: "口" },
            { hanzi: "教室", pinyin: "jiàoshì", meaning: "ruang kelas", strokes: 10, strokeOrder: ["点", "点", "横撇", "横", "横", "撇", "捺", "横", "竖", "横"], example: "一年级教室 (Kelas tingkat 1)", radical: "宀" }
          ],
          matchingPairs: [
            { id: "m221", hanzi: "筷子", pinyin: "kuàizi", meaning: "Sumpit", icon: "🥢", category: "alat_makan" },
            { id: "m222", hanzi: "碗", pinyin: "wǎn", meaning: "Mangkok", icon: "🥣", category: "alat_makan" },
            { id: "m223", hanzi: "衣服", pinyin: "yīfu", meaning: "Pakaian / Baju", icon: "👕", category: "pakaian" },
            { id: "m224", hanzi: "裙子", pinyin: "qúnzi", meaning: "Rok", icon: "👗", category: "pakaian" },
            { id: "m225", hanzi: "马路", pinyin: "mǎlù", meaning: "Jalan Raya", icon: "🛣️", category: "tempat" },
            { id: "m226", hanzi: "教室", pinyin: "jiàoshì", meaning: "Ruang Kelas", icon: "🏫", category: "tempat" }
          ],
          quizQuestions: [
            {
              id: "q221",
              type: "meaning",
              question: "Kategori benda apakah '筷子' (kuàizi)?",
              audioText: "Kuàizi shì shénme yìsi?",
              options: ["Alat transportasi", "Alat makan (Sumpit)", "Pakaian olahraga", "Hewan purba"],
              correctIndex: 1,
              explanation: "'筷子' (kuàizi) berarti sumpit makan."
            },
            {
              id: "q222",
              type: "pinyin",
              question: "Pilihlah nada Pinyin yang benar untuk '前面':",
              audioText: "“Qiánmiàn” de pīnyīn shì nǎge?",
              options: ["qiánmiàn", "hòumiàn", "zuǒbiān", "yòubiān"],
              correctIndex: 0,
              explanation: "'前面' dilafalkan 'qiánmiàn' (depan)."
            },
            {
              id: "q223",
              type: "strokes",
              question: "Berapa jumlah goresan karakter '衣' (yī)?",
              audioText: "“Yī” zì yǒu jǐ huà?",
              options: ["5 goresan", "6 goresan", "7 goresan", "8 goresan"],
              correctIndex: 1,
              explanation: "'衣' memiliki 6 goresan (点, 横, 撇, 竖提, 撇, 捺)."
            },
            {
              id: "q224",
              type: "sentence_order",
              question: "Susun kalimat: [马路 / 前面 / 学校 / 是]",
              audioText: "Qǐng lián cí chéng jù: mǎlù, qiánmiàn, xuéxiào, shì.",
              options: [
                "学校前面是马路。",
                "马路是学校前面。",
                "是学校前面马路。",
                "前面马路是学校。"
              ],
              correctIndex: 0,
              explanation: "Susunan penunjuk tempat: '学校前面是马路。' (Di depan sekolah adalah jalan raya)."
            },
            {
              id: "q225",
              type: "picture_match",
              question: "Manakah gambar '一双筷子和一个碗' (sepasang sumpit dan sebuah mangkok)?",
              audioText: "Nǎge túpiàn shì kuàizi hé wǎn?",
              options: [
                "🥢 Sumpit kayu dan mangkok sup hangat 🥣",
                "🎒 Tas sekolah berisi buku cerita 📖",
                "🪑 Meja dan kursi belajar 🛋️",
                "⚽ Sepatu bola dan seragam merah 👟"
              ],
              correctIndex: 0,
              explanation: "'筷子' (sumpit) dan '碗' (mangkok)."
            }
          ]
        },
        {
          id: 3,
          unitNumber: 3,
          title: "Unit 3: Teman Sebaya & Rutinitas (好朋友与课后时光)",
          lessons: ["第11课 小华常去图书馆", "第12课 小红也学中文", "第13课 我们都是学生", "第14课 他们一起上学", "第15课 下课啦"],
          story: {
            title: "Belajar Bersama di Perpustakaan Lembah Purba (恐龙谷图书馆)",
            hanzi: "小霸王龙和小角龙是好朋友，他们常常一起去图书馆看书。小霸王龙喜欢看恐龙探险漫画，小角龙也喜欢看图画书。下课啦！操场上真热闹，大家一起跳绳、踢足球，天天锻炼身体好！",
            pinyin: "Xiǎo bàwánglóng hé xiǎo jiǎolóng shì hǎo péngyou, tāmen chángcháng yìqǐ qù túshūguǎn kàn shū. Xiǎo bàwánglóng xǐhuan kàn kǒnglóng tànxiǎn mànhuà, xiǎo jiǎolóng yě xǐhuan kàn túhuàshū. Xiàkè la! Cāochǎng shang zhēn rènao, dàjiā yìqǐ tiàoshéng, tī zúqiú, tiāntiān duànliàn shēntǐ hǎo!",
            indonesian: "Rexy dan Trishi adalah sahabat baik, mereka sering pergi ke perpustakaan untuk membaca buku. Rexy suka membaca komik petualangan dinosaurus, Trishi juga suka melihat buku bergambar. Jam istirahat tiba! Lapangan sangat meriah, semua bermain lompat tali dan sepak bola, berolahraga setiap hari membuat badan bugar!",
            sentences: [
              { hanzi: "我们常常一起去图书馆看书。", pinyin: "Wǒmen chángcháng yìqǐ qù túshūguǎn kàn shū.", indonesian: "Kami sering pergi bersama ke perpustakaan untuk membaca buku." },
              { hanzi: "小华学中文，小红也学中文。", pinyin: "Xiǎohuá xué Zhōngwén, Xiǎohóng yě xué Zhōngwén.", indonesian: "Xiaohua belajar bahasa Mandarin, Xiaohong juga belajar bahasa Mandarin." },
              { hanzi: "下课啦，操场上真热闹！", pinyin: "Xiàkè la, cāochǎng shang zhēn rènao!", indonesian: "Waktu istirahat tiba, lapangan sekolah sangat meriah!" },
              { hanzi: "天天锻炼身体好！", pinyin: "Tiāntiān duànliàn shēntǐ hǎo!", indonesian: "Setiap hari berolahraga membuat tubuh sehat dan kuat!" }
            ]
          },
          vocab: [
            { hanzi: "图书馆", pinyin: "túshūguǎn", meaning: "perpustakaan", strokes: 14, strokeOrder: ["竖", "横折", "横", "竖", "横", "竖", "横折", "横", "横", "竖", "横折", "横", "横", "横"], example: "去图书馆 (Ke perpustakaan)", radical: "囗" },
            { hanzi: "也", pinyin: "yě", meaning: "juga", strokes: 3, strokeOrder: ["横折钩", "竖", "竖弯钩"], example: "我也去 (Saya juga pergi)", radical: "乙" },
            { hanzi: "一起", pinyin: "yìqǐ", meaning: "bersama-sama", strokes: 10, strokeOrder: ["横", "竖", "横", "竖", "横", "撇", "捺", "横", "竖", "横折"], example: "一起玩 (Bermain bersama)", radical: "走" },
            { hanzi: "锻炼", pinyin: "duànliàn", meaning: "berolahraga / melatih fisik", strokes: 14, strokeOrder: ["撇", "横", "横", "横", "竖提", "横折", "横", "横", "竖", "横折", "横", "横", "撇", "点"], example: "锻炼身体 (Melatih kebugaran tubuh)", radical: "钅" }
          ],
          matchingPairs: [
            { id: "m231", hanzi: "图书馆", pinyin: "túshūguǎn", meaning: "Perpustakaan", icon: "🏛️", category: "tempat" },
            { id: "m232", hanzi: "漫画", pinyin: "mànhuà", meaning: "Komik", icon: "📑", category: "bacaan" },
            { id: "m233", hanzi: "跳绳", pinyin: "tiàoshéng", meaning: "Lompat Tali", icon: "🪢", category: "olahraga" },
            { id: "m234", hanzi: "操场", pinyin: "cāochǎng", meaning: "Lapangan Olahraga", icon: "🏟️", category: "tempat" },
            { id: "m235", hanzi: "朋友", pinyin: "péngyou", meaning: "Teman / Sahabat", icon: "🧑‍🤝‍🧑", category: "orang" }
          ],
          quizQuestions: [
            {
              id: "q231",
              type: "meaning",
              question: "Apa arti dari kalimat '我也学中文'?",
              audioText: "“Wǒ yě xué Zhōngwén” shì shénme yìsi?",
              options: ["Saya tidak belajar Mandarin", "Saya juga belajar Mandarin", "Dia mengajar Mandarin", "Kita pergi ke sekolah"],
              correctIndex: 1,
              explanation: "'也' (yě) artinya juga. '我也学中文' = Saya juga belajar Mandarin."
            },
            {
              id: "q232",
              type: "pinyin",
              question: "Pilihlah pinyin yang tepat untuk '图书馆':",
              audioText: "“Túshūguǎn” de pīnyīn shì nǎge?",
              options: ["túshūguǎn", "yòuéryuán", "diànyǐngyuàn", "bàngōngshì"],
              correctIndex: 0,
              explanation: "'图书馆' dibaca 'túshūguǎn'."
            },
            {
              id: "q233",
              type: "strokes",
              question: "Berapakah jumlah goresan karakter '也' (yě)?",
              audioText: "“Yě” zì yǒu jǐ huà?",
              options: ["2 goresan", "3 goresan", "4 goresan", "5 goresan"],
              correctIndex: 1,
              explanation: "'也' terdiri dari 3 goresan: 横折钩, 竖, 竖弯钩."
            },
            {
              id: "q234",
              type: "sentence_order",
              question: "Susun kalimat: [看书 / 图书馆 / 去 / 我们 / 一起]",
              audioText: "Qǐng lián cí chéng jù: kàn shū, túshūguǎn, qù, wǒmen, yìqǐ.",
              options: [
                "我们一起去图书馆看书。",
                "去图书馆看书我们一起。",
                "一起我们看书去图书馆。",
                "图书馆去我们一起看书。"
              ],
              correctIndex: 0,
              explanation: "'我们一起去图书馆看书。' (Kami bersama-sama pergi ke perpustakaan membaca buku)."
            },
            {
              id: "q235",
              type: "picture_match",
              question: "Manakah gambar kegiatan '操场上跳绳' (lompat tali di lapangan)?",
              audioText: "Cāochǎng shang tiàoshéng, nǎge tú duì?",
              options: [
                "🪢 Anak-anak ceria sedang bermain lompat tali di lapangan",
                "🏊 Anak berenang di laut lepas",
                "📚 Anak sedang duduk membaca di perpustakaan",
                "🎨 Anak sedang melukis pemandangan gunung"
              ],
              correctIndex: 0,
              explanation: "'跳绳' berarti lompat tali."
            }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // HAN YU 3
    // -----------------------------------------------------------------------
    {
      id: 3,
      title: "Han Yu 3 (第三册)",
      level: "Tingkat 3 - Menengah Awal",
      dinoGuide: { name: "Ptero Terry", species: "Pterodactyl Cerdas", avatar: "🦅", desc: "Halo! Mari terbang tinggi bersama Ptero Terry belajar waktu, musim, hadiah, dan liburan seru!" },
      units: [
        {
          id: 1,
          unitNumber: 1,
          title: "Unit 1: Kalender, Jam & Musim (日期、时间与四季)",
          lessons: ["第1课 今天几月几日", "第2课 明天星期一", "第3课 现在八点半", "第4课 今天的天气怎么样", "第5课 北京的四季"],
          story: {
            title: "Empat Musim di Lembah Dinosaurus (恐龙谷的美丽四季)",
            hanzi: "今天四月六日，新学期开学了。小霸王龙现在八点半去学校。一年有四个季节：春天花开了很暖和，夏天可以在海边游泳，秋天天气凉快叶子红了，冬天白雪覆盖很美丽。翼龙在天空中欢快地飞翔！",
            pinyin: "Jīntiān sì yuè liù rì, xīn xuéqī kāixué le. Xiǎo bàwánglóng xiànzài bā diǎn bàn qù xuéxiào. Yì nián yǒu sì gè jìjié: chūntiān huā kāi le hěn nuǎnhuo, xiàtiān kěyǐ zài hǎibiān yóuyǒng, qiūtiān tiānqì liángkuai yèzi hóng le, dōngtiān bái xuě fùgài hěn měilì. Yìlóng zài tiānkōng zhōng huānkuài de fēixiáng!",
            indonesian: "Hari ini 6 April, semester baru dimulai. Rexy pergi ke sekolah tepat pukul 8:30. Dalam satu tahun ada empat musim: musim semi bunga bermekaran dan hangat, musim panas bisa berenang di pantai, musim gugur sejuk dan daun memerah, musim dingin bersalju putih sangat indah. Pterodactyl terbang gembira di angkasa!",
            sentences: [
              { hanzi: "今天四月六日，新学期开学了。", pinyin: "Jīntiān sì yuè liù rì, xīn xuéqī kāixué le.", indonesian: "Hari ini tanggal 6 April, tahun ajaran baru telah dimulai." },
              { hanzi: "现在八点半，我们去上学。", pinyin: "Xiànzài bā diǎn bàn, wǒmen qù shàngxué.", indonesian: "Sekarang jam 8:30, kami berangkat ke sekolah." },
              { hanzi: "一年有四个季节：春、夏、秋、冬。", pinyin: "Yì nián yǒu sì gè jìjié: chūn, xià, qiū, dōng.", indonesian: "Setahun ada 4 musim: semi, panas, gugur, dan dingin." },
              { hanzi: "春天很暖和，秋天很凉快。", pinyin: "Chūntiān hěn nuǎnhuo, qiūtiān hěn liángkuai.", indonesian: "Musim semi sangat hangat, musim gugur sangat sejuk." }
            ]
          },
          vocab: [
            { hanzi: "几月几日", pinyin: "jǐ yuè jǐ rì", meaning: "tanggal berapa bulan berapa", strokes: 2, strokeOrder: ["撇", "横折弯钩/横折折钩"], example: "今天几月几日 (Hari ini tgl brp?)", radical: "几" },
            { hanzi: "点半", pinyin: "diǎn bàn", meaning: "lewat setengah / tiga puluh menit", strokes: 9, strokeOrder: ["竖", "横折", "横", "竖", "横", "点", "撇", "提", "点"], example: "八点半 (Pukul 08.30)", radical: "灬" },
            { hanzi: "春天", pinyin: "chūntiān", meaning: "musim semi", strokes: 9, strokeOrder: ["横", "横", "横", "撇", "捺", "竖", "横折", "横", "横"], example: "暖和的春天 (Musim semi yang hangat)", radical: "日" },
            { hanzi: "冬天", pinyin: "dōngtiān", meaning: "musim dingin", strokes: 5, strokeOrder: ["撇", "横撇", "捺", "点", "点"], example: "冬天下雪 (Musim dingin turun salju)", radical: "夂" },
            { hanzi: "凉快", pinyin: "liángkuai", meaning: "sejuk dan nyaman", strokes: 10, strokeOrder: ["点", "提", "点", "横", "竖", "横折", "横", "竖", "撇", "点"], example: "秋天很凉快 (Musim gugur sangat sejuk)", radical: "冫" }
          ],
          matchingPairs: [
            { id: "m311", hanzi: "春天", pinyin: "chūntiān", meaning: "Musim Semi (Bunga)", icon: "🌸", category: "musim" },
            { id: "m312", hanzi: "夏天", pinyin: "xiàtiān", meaning: "Musim Panas (Matahari)", icon: "☀️", category: "musim" },
            { id: "m313", hanzi: "秋天", pinyin: "qiūtiān", meaning: "Musim Gugur (Daun)", icon: "🍁", category: "musim" },
            { id: "m314", hanzi: "冬天", pinyin: "dōngtiān", meaning: "Musim Dingin (Salju)", icon: "❄️", category: "musim" },
            { id: "m315", hanzi: "钟表", pinyin: "zhōngbiǎo", meaning: "Jam Dinding", icon: "⏰", category: "waktu" }
          ],
          quizQuestions: [
            {
              id: "q301",
              type: "meaning",
              question: "Apa arti dari '八点半' (bā diǎn bàn)?",
              audioText: "“Bā diǎn bàn” shì shénme yìsi?",
              options: ["Jam 7:30", "Jam 8:30", "Jam 9:00", "Jam 8:15"],
              correctIndex: 1,
              explanation: "'八点半' artinya pukul delapan lewat tiga puluh menit (08:30)."
            },
            {
              id: "q302",
              type: "pinyin",
              question: "Pilihlah pinyin yang tepat untuk '春天':",
              audioText: "“Chūntiān” de pīnyīn shì nǎge?",
              options: ["chūntiān", "xiàtiān", "qiūtiān", "dōngtiān"],
              correctIndex: 0,
              explanation: "'春天' dibaca 'chūntiān' (musim semi)."
            },
            {
              id: "q303",
              type: "strokes",
              question: "Berapakah jumlah goresan karakter '月' (yuè)?",
              audioText: "“Yuè” zì yǒu jǐ huà?",
              options: ["3 goresan", "4 goresan", "5 goresan", "6 goresan"],
              correctIndex: 1,
              explanation: "'月' memiliki 4 goresan: 撇, 横折钩, 横, 横."
            },
            {
              id: "q304",
              type: "sentence_order",
              question: "Susun kalimat: [四月六日 / 今天 / 是]",
              audioText: "Qǐng lián cí chéng jù: sì yuè liù rì, jīntiān, shì.",
              options: [
                "今天是四月六日。",
                "四月六日今天在。",
                "是今天四月六日。",
                "四月今天六日是。"
              ],
              correctIndex: 0,
              explanation: "'今天是四月六日。' (Hari ini adalah tanggal 6 April)."
            },
            {
              id: "q305",
              type: "picture_match",
              question: "Gambar mana yang melambangkan musim dingin bersalju '冬天'?",
              audioText: "Nǎge túpiàn shì dōngtiān?",
              options: [
                "❄️ Manusia salju dan pohon bertabur salju putih ⛄",
                "🌸 Bunga mekar berwarna merah jambu di musim semi 🌺",
                "☀️ Terik matahari di pantai musim panas 🏖️",
                "🍁 Daun pohon oranye berguguran 🍂"
              ],
              correctIndex: 0,
              explanation: "'冬天' adalah musim dingin dengan salju."
            }
          ]
        },
        {
          id: 2,
          unitNumber: 2,
          title: "Unit 2: Kado, Masakan & Ulang Tahun (礼品、中国菜与生日)",
          lessons: ["第6课 陈老师教我们中文课", "第7课 我给妈妈一件礼物", "第8课 奶奶请我们吃中国菜", "第9课 小红喜欢看电影", "第10课 祝你生日快乐"],
          story: {
            title: "Pesta Ulang Tahun si Leher Panjang (长颈龙的生日派对)",
            hanzi: "今天是长颈龙的生日，恐龙朋友们都来为他庆祝。小霸王龙送了一盒香浓的茶叶，三角龙送了一条漂亮的绿色围巾。奶奶做了一桌美味的中国菜。大家拍着手唱：“祝你生日快乐！”长颈龙开心极了！",
            pinyin: "Jīntiān shì chángjǐnglóng de shēngrì, kǒnglóng péngyou men dōu lái wèi tā qìngzhù. Xiǎo bàwánglóng sòng le yì hé xiāngnóng de cháyè, sānjiǎolóng sòng le yì tiáo piàoliang de lǜsè wéijīn. Nǎinai zuò le yì zhuō měiwèi de Zhōngguó cài. Dàjiā pāizhe shǒu chàng: “Zhù nǐ shēngrì kuàilè!” Chángjǐnglóng kāixīn jí le!",
            indonesian: "Hari ini adalah ulang tahun Brachy si dinosaurus leher panjang, semua teman dinosaurus datang merayakannya. Rexy membawakan sekotak daun teh wangi, Trishi memberikan syal hijau yang indah. Nenek memasak hidangan lezat masakan Tiongkok. Semua bertepuk tangan menyanyi: 'Selamat Ulang Tahun!' Brachy sungguh bahagia!",
            sentences: [
              { hanzi: "我送给妈妈一件礼物。", pinyin: "Wǒ sòng gěi māma yí jiàn lǐwù.", indonesian: "Saya memberikan sebuah hadiah kepada ibu." },
              { hanzi: "奶奶请我们吃中国菜。", pinyin: "Nǎinai qǐng wǒmen chī Zhōngguó cài.", indonesian: "Nenek mentraktir kami makan hidangan masakan Tiongkok." },
              { hanzi: "祝你生日快乐！", pinyin: "Zhù nǐ shēngrì kuàilè!", indonesian: "Semoga kamu selamat ulang tahun!" },
              { hanzi: "大家开心极了！", pinyin: "Dàjiā kāixīn jí le!", indonesian: "Semua orang merasa luar biasa senang gembira!" }
            ]
          },
          vocab: [
            { hanzi: "礼物", pinyin: "lǐwù", meaning: "hadiah / kado", strokes: 5, strokeOrder: ["点", "横撇", "竖", "点", "竖折"], example: "生日礼物 (Kado ulang tahun)", radical: "礻" },
            { hanzi: "中国菜", pinyin: "Zhōngguó cài", meaning: "masakan Tiongkok", strokes: 11, strokeOrder: ["横", "竖", "竖", "撇", "点", "点", "撇", "横", "竖", "撇", "捺"], example: "吃中国菜 (Makan masakan Tiongkok)", radical: "艹" },
            { hanzi: "生日", pinyin: "shēngrì", meaning: "hari ulang tahun", strokes: 5, strokeOrder: ["撇", "横", "横", "竖", "横"], example: "过生日 (Merayakan ultah)", radical: "生" },
            { hanzi: "快乐", pinyin: "kuàilè", meaning: "bahagia / gembira", strokes: 7, strokeOrder: ["点", "点", "竖", "横折", "横", "竖", "横"], example: "新年快乐 (Selamat Tahun Baru)", radical: "忄" },
            { hanzi: "电影", pinyin: "diànyǐng", meaning: "film / bioskop", strokes: 15, strokeOrder: ["竖", "横折", "横", "横", "横", "竖", "横折", "横", "横", "横折钩", "撇", "撇", "撇", "撇", "捺"], example: "看电影 (Nonton film)", radical: "彡" }
          ],
          matchingPairs: [
            { id: "m321", hanzi: "礼物", pinyin: "lǐwù", meaning: "Kado Hadiah", icon: "🎁", category: "kado" },
            { id: "m322", hanzi: "蛋糕", pinyin: "dàngāo", meaning: "Kue Ulang Tahun", icon: "🎂", category: "makanan" },
            { id: "m323", hanzi: "中国菜", pinyin: "Zhōngguó cài", meaning: "Masakan Tiongkok", icon: "🍲", category: "makanan" },
            { id: "m324", hanzi: "电影", pinyin: "diànyǐng", meaning: "Bioskop / Film", icon: "🎬", category: "hiburan" },
            { id: "m325", hanzi: "茶叶", pinyin: "cháyè", meaning: "Daun Teh", icon: "🍵", category: "minuman" }
          ],
          quizQuestions: [
            {
              id: "q321",
              type: "meaning",
              question: "Apa arti ungkapan '祝你生日快乐'?",
              audioText: "“Zhù nǐ shēngrì kuàilè” shì shénme yìsi?",
              options: ["Selamat pagi guru", "Selamat tahun baru", "Selamat ulang tahun untukmu", "Sampai jumpa besok"],
              correctIndex: 2,
              explanation: "'祝你生日快乐' artinya Selamat Ulang Tahun untukmu!"
            },
            {
              id: "q322",
              type: "pinyin",
              question: "Pilihlah pinyin yang benar untuk '礼物':",
              audioText: "“Lǐwù” de pīnyīn shì nǎge?",
              options: ["lǐwù", "shēngrì", "kuàilè", "diànyǐng"],
              correctIndex: 0,
              explanation: "'礼物' dilafalkan 'lǐwù' (hadiah)."
            },
            {
              id: "q323",
              type: "strokes",
              question: "Berapakah jumlah goresan karakter '日' (rì)?",
              audioText: "“Rì” zì yǒu jǐ huà?",
              options: ["3 goresan", "4 goresan", "5 goresan", "6 goresan"],
              correctIndex: 1,
              explanation: "'日' memiliki 4 goresan: 竖, 横折, 横, 横."
            },
            {
              id: "q324",
              type: "sentence_order",
              question: "Susun kalimat: [一件 / 给 / 礼物 / 妈妈 / 我]",
              audioText: "Qǐng lián cí chéng jù: yí jiàn, gěi, lǐwù, māma, wǒ.",
              options: [
                "我给妈妈一件礼物。",
                "妈妈一件礼物给我。",
                "一件礼物我给妈妈。",
                "给妈妈我一件礼物。"
              ],
              correctIndex: 0,
              explanation: "'我给妈妈一件礼物。' (Saya memberi ibu sebuah kado hadiah)."
            },
            {
              id: "q325",
              type: "picture_match",
              question: "Gambar manakah yang merupakan '生日蛋糕' (kue ulang tahun)?",
              audioText: "Nǎge túpiàn shì shēngrì dàngāo?",
              options: [
                "🎂 Kue tart ulang tahun berhias lilin menyala",
                "🍜 Semangkuk mie ayam hangat",
                "🚗 Mobil antik warna merah",
                "⚽ Bola sepak di lapangan rumput"
              ],
              correctIndex: 0,
              explanation: "'蛋糕' adalah kue ulang tahun."
            }
          ]
        },
        {
          id: 3,
          unitNumber: 3,
          title: "Unit 3: Berwisata & Olahraga (海边沙滩、动物与郊游)",
          lessons: ["第11课 我们在海边玩沙子", "第12课 小花猫给外婆送鱼", "第13课 爷爷去公园打太极拳", "第14课 我们坐车去动物园", "第15课 大家去郊游"],
          story: {
            title: "Piknik Dinosaurus ke Pantai Purba (恐龙家族海边郊游)",
            hanzi: "周末，恐龙一家坐车去海边郊游。海边的风景美丽极了！爸爸在沙滩上跑步，爷爷在树下打太极拳。小恐龙们在沙滩上建造巨大的沙子城堡。大家唱歌跳舞，开心极了！",
            pinyin: "Zhōumò, kǒnglóng yìjiā zuò chē qù hǎibiān jiāoyóu. Hǎibiān de fēngjǐng měilì jí le! Bàba zài shātān shang pǎobù, yéye zài shù xià dǎ tàijíquán. Xiǎo kǒnglóng men zài shātān shang jiànzào jùdà de shāzi chéngbǎo. Dàjiā chànggē tiàowǔ, kāixīn jí le!",
            indonesian: "Akhir pekan, keluarga dinosaurus naik mobil pergi berwisata ke pantai. Pemandangan pantai sungguh elok mempesona! Ayah berlari di pasir pantai, kakek berlatih Tai Chi di bawah pohon. Anak-anak dino membangun istana pasir yang megah. Semua bernyanyi dan menari, riang gembira!",
            sentences: [
              { hanzi: "我们在海边玩沙子。", pinyin: "Wǒmen zài hǎibiān wán shāzi.", indonesian: "Kami bermain pasir di tepi pantai." },
              { hanzi: "海边的风景美极了！", pinyin: "Hǎibiān de fēngjǐng měi jí le!", indonesian: "Pemandangan pantai sangat indah menakjubkan!" },
              { hanzi: "爷爷去公园打太极拳。", pinyin: "Yéye qù gōngyuán dǎ tàijíquán.", indonesian: "Kakek pergi ke taman untuk berlatih senam Tai Chi." },
              { hanzi: "大家一起去郊游！", pinyin: "Dàjiā yìqǐ qù jiāoyóu!", indonesian: "Semua orang pergi piknik bertamasya bersama-sama!" }
            ]
          },
          vocab: [
            { hanzi: "海边", pinyin: "hǎibiān", meaning: "tepi pantai", strokes: 10, strokeOrder: ["点", "点", "提", "撇", "横", "竖折", "横", "竖", "横", "点"], example: "去海边 (Pergi ke pantai)", radical: "氵" },
            { hanzi: "沙子", pinyin: "shāzi", meaning: "pasir", strokes: 7, strokeOrder: ["点", "点", "提", "竖", "撇", "点", "撇"], example: "玩沙子 (Bermain pasir)", radical: "氵" },
            { hanzi: "太极拳", pinyin: "tàijíquán", meaning: "senam Tai Chi", strokes: 4, strokeOrder: ["横", "撇", "捺", "点"], example: "打太极拳 (Latihan Tai Chi)", radical: "大" },
            { hanzi: "动物园", pinyin: "dòngwùyuán", meaning: "kebun binatang", strokes: 6, strokeOrder: ["撇", "横折钩", "横", "横", "撇", "捺"], example: "去动物园 (Ke kebun binatang)", radical: "牛" },
            { hanzi: "郊游", pinyin: "jiāoyóu", meaning: "piknik / bertamasya", strokes: 8, strokeOrder: ["点", "横", "撇", "点", "横折钩", "竖", "横折折折钩", "竖"], example: "快乐郊游 (Piknik riang)", radical: "阝" }
          ],
          matchingPairs: [
            { id: "m331", hanzi: "海边", pinyin: "hǎibiān", meaning: "Pantai Laut", icon: "🏖️", category: "wisata" },
            { id: "m332", hanzi: "太极拳", pinyin: "tàijíquán", meaning: "Senam Tai Chi", icon: "🥋", category: "olahraga" },
            { id: "m333", hanzi: "动物园", pinyin: "dòngwùyuán", meaning: "Kebun Binatang", icon: "🦁", category: "wisata" },
            { id: "m334", hanzi: "火车", pinyin: "huǒchē", meaning: "Kereta Api", icon: "🚆", category: "kendaraan" },
            { id: "m335", hanzi: "飞机", pinyin: "fēijī", meaning: "Pesawat Terbang", icon: "✈️", category: "kendaraan" }
          ],
          quizQuestions: [
            {
              id: "q331",
              type: "meaning",
              question: "Apa arti dari kata '郊游' (jiāoyóu)?",
              audioText: "“Jiāoyóu” shì shénme yìsi?",
              options: ["Piknik / Tamasya", "Mengerjakan PR", "Membersihkan rumah", "Belanja di mall"],
              correctIndex: 0,
              explanation: "'郊游' (jiāoyóu) berarti bertamasya atau piknik ke luar kota."
            },
            {
              id: "q332",
              type: "pinyin",
              question: "Pilihlah pinyin yang tepat untuk '太极拳':",
              audioText: "“Tàijíquán” de pīnyīn shì nǎge?",
              options: ["tàijíquán", "yóulèchǎng", "dòngwùyuán", "túshūguǎn"],
              correctIndex: 0,
              explanation: "'太极拳' dilafalkan 'tàijíquán'."
            },
            {
              id: "q333",
              type: "strokes",
              question: "Berapa goresan karakter '车' (chē - kendaraan)?",
              audioText: "“Chē” zì yǒu jǐ huà?",
              options: ["3 goresan", "4 goresan", "5 goresan", "6 goresan"],
              correctIndex: 1,
              explanation: "Karakter '车' memiliki 4 goresan: 横, 撇折, 横, 竖."
            },
            {
              id: "q334",
              type: "sentence_order",
              question: "Susun kalimat: [在 / 玩沙子 / 我们 / 海边]",
              audioText: "Qǐng lián cí chéng jù: zài, wán shāzi, wǒmen, hǎibiān.",
              options: [
                "我们在海边玩沙子。",
                "海边玩沙子在我们在。",
                "玩沙子在我们海边。",
                "在海边玩沙子我们。"
              ],
              correctIndex: 0,
              explanation: "Susunan yang benar: '我们在海边玩沙子。' (Kami bermain pasir di pantai)."
            },
            {
              id: "q335",
              type: "picture_match",
              question: "Gambar manakah yang mendeskripsikan '坐飞机' (naik pesawat terbang)?",
              audioText: "Zuò fēijī, nǎge túpiàn shì duì de?",
              options: [
                "✈️ Pesawat terbang megah melintasi awan biru",
                "🚆 Kereta cepat melaju di atas rel",
                "🚗 Mobil sedan keluarga melaju di jalan",
                "🚲 Sepeda kayuh roda dua di taman"
              ],
              correctIndex: 0,
              explanation: "'飞机' adalah pesawat terbang."
            }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // HAN YU 4 SAMPAI 12 (LENGKAP DIHASILKAN SECARA SISTEMATIS)
    // -----------------------------------------------------------------------
    {
      id: 4,
      title: "Han Yu 4 (第四册)",
      level: "Tingkat 4 - Menengah",
      dinoGuide: { name: "Ankylo Rock", species: "Ankylosaurus Kuat", avatar: "🛡️", desc: "Halo teman perkasa! Di Han Yu 4 kita menjelajahi museum, berbelanja di supermarket, dan rencana liburan seru!" },
      units: [
        {
          id: 1,
          unitNumber: 1,
          title: "Unit 1: Teman Baru & Belanja Supermarket (新同学与超市购物)",
          lessons: ["第1课 欢迎新同学", "第2课 我的文具盒", "第3课 你的生日是几月几号", "第4课 去超市买东西", "第5课 快乐的节日"],
          story: {
            title: "Berbelanja di Supermarket Fosil Purba (甲龙的超市奇遇)",
            hanzi: "今天阳光明媚，甲龙和朋友们一起去大型超市买东西。超市里的文具和水果真丰富！甲龙选了一盒彩笔和一个精美的文具盒，准备送给明天过生日的新同学。大家都非常快乐！",
            pinyin: "Jīntiān yángguāng míngmèi, jiǎlóng hé péngyou men yìqǐ qù dàxíng chāoshì mǎi dōngxi. Chāoshì lǐ de wénjù hé shuǐguǒ zhēn fēngfù! Jiǎlóng xuǎn le yì hé cǎibǐ hé yí gè jīngměi de wénjùhé, zhǔnbèi sòng gěi míngtiān guò shēngrì de xīn tóngxué. Dàjiā dōu fēicháng kuàilè!",
            indonesian: "Hari ini cerah, Ankylosaurus dan teman-teman pergi ke supermarket untuk berbelanja. Buah dan alat tulis di supermarket sangat melimpah! Ankylosaurus memilih sekotak pensil warna dan kotak pensil cantik untuk teman baru yang berulang tahun besok. Semuanya sangat gembira!",
            sentences: [
              { hanzi: "热烈欢迎我们的新同学！", pinyin: "Rèliè huānyíng wǒmen de xīn tóngxué!", indonesian: "Menyambut dengan hangat teman sekelas baru kami!" },
              { hanzi: "我们去超市买很多好吃的。", pinyin: "Wǒmen qù chāoshì mǎi hěn duō hǎochī de.", indonesian: "Kami pergi ke supermarket membeli banyak makanan enak." },
              { hanzi: "祝大家节日快乐！", pinyin: "Zhù dàjiā jiérì kuàilè!", indonesian: "Semoga semua bergembira di hari raya perayaan!" }
            ]
          },
          vocab: [
            { hanzi: "欢迎", pinyin: "huānyíng", meaning: "menyambut / selamat datang", strokes: 7, strokeOrder: ["点", "横撇", "竖", "撇", "横折弯钩", "横", "竖"], example: "欢迎光临 (Selamat datang)", radical: "辶" },
            { hanzi: "超市", pinyin: "chāoshì", meaning: "supermarket", strokes: 12, strokeOrder: ["横", "竖", "横", "竖", "横", "撇", "捺", "竖", "横折", "横", "竖", "横"], example: "去超市 (Ke supermarket)", radical: "走" },
            { hanzi: "文具盒", pinyin: "wénjùhé", meaning: "kotak pensil", strokes: 4, strokeOrder: ["点", "横", "撇", "捺"], example: "新文具盒 (Kotak pensil baru)", radical: "文" },
            { hanzi: "节日", pinyin: "jiérì", meaning: "hari raya / festival", strokes: 5, strokeOrder: ["横", "竖", "竖", "横折", "竖"], example: "快乐节日 (Hari raya ceria)", radical: "艹" }
          ],
          matchingPairs: [
            { id: "m41", hanzi: "超市", pinyin: "chāoshì", meaning: "Supermarket", icon: "🛒", category: "tempat" },
            { id: "m42", hanzi: "文具盒", pinyin: "wénjùhé", meaning: "Kotak Pensil", icon: "👝", category: "alat_tulis" },
            { id: "m43", hanzi: "节日", pinyin: "jiérì", meaning: "Hari Raya", icon: "🎉", category: "acara" }
          ],
          quizQuestions: [
            {
              id: "q401",
              type: "meaning",
              question: "Apa arti kata '超市' (chāoshì)?",
              audioText: "“Chāoshì” shì shénme yìsi?",
              options: ["Pasar malam", "Supermarket", "Toko baju", "Kantor pos"],
              correctIndex: 1,
              explanation: "'超市' (singkatan dari 超级市场) berarti supermarket."
            },
            {
              id: "q402",
              type: "pinyin",
              question: "Pilihlah pinyin untuk '欢迎':",
              audioText: "“Huānyíng” de pīnyīn shì nǎge?",
              options: ["huānyíng", "jiérì", "wénjù", "chāoshì"],
              correctIndex: 0,
              explanation: "'欢迎' dibaca 'huānyíng' (menyambut)."
            },
            {
              id: "q403",
              type: "strokes",
              question: "Berapakah jumlah goresan karakter '文' (wén)?",
              audioText: "“Wén” zì yǒu jǐ huà?",
              options: ["3 goresan", "4 goresan", "5 goresan", "6 goresan"],
              correctIndex: 1,
              explanation: "'文' memiliki 4 goresan: 点, 横, 撇, 捺."
            },
            {
              id: "q404",
              type: "sentence_order",
              question: "Susun kalimat: [买东西 / 去 / 我们 / 超市]",
              audioText: "Qǐng lián cí chéng jù: mǎi dōngxi, qù, wǒmen, chāoshì.",
              options: [
                "我们去超市买东西。",
                "买东西我们去超市。",
                "去超市我们买东西。",
                "超市买东西去我们。"
              ],
              correctIndex: 0,
              explanation: "'我们去超市买东西。' (Kami pergi ke supermarket untuk belanja)."
            },
            {
              id: "q405",
              type: "picture_match",
              question: "Pilihlah gambar '超市购物车' (keranjang belanja supermarket)!",
              audioText: "Nǎge túpiàn shì chāoshì gòuwùchē?",
              options: [
                "🛒 Keranjang dorong belanja supermarket bertabur buah",
                "🛏️ Kasur tidur kamar anak",
                "⚽ Lapangan sepak bola hijau",
                "🍵 Cangkir keramik teh panas"
              ],
              correctIndex: 0,
              explanation: "'超市' identik dengan troli / keranjang belanja 🛒."
            }
          ]
        },
        {
          id: 2,
          unitNumber: 2,
          title: "Unit 2: Satwa, Pekerjaan Rumah & Tanya Arah (动物世界与生活技能)",
          lessons: ["第6课 在动物园里", "第7课 我的课外生活", "第8课 我会做家务", "第9课 看病", "第10课 问路"],
          story: {
            title: "Dinosaurus Penolong yang Mandiri (乐于助人的小恐龙)",
            hanzi: "周末，小恐龙学会了帮妈妈做家务，他会扫地和洗碗。下午去动物园看熊猫时，有游客向他问路。小恐龙礼貌地指路。大家都夸他是个懂礼貌、爱劳动的优秀好孩子！",
            pinyin: "Zhōumò, xiǎo kǒnglóng xuéhuì le bāng māma zuò jiāwù, tā huì sǎodì hé xǐwǎn. Xiàwǔ qù dòngwùyuán kàn xióngmāo shí, yǒu yóukè xiàng tā wènlù. Xiǎo kǒnglóng lǐmào de zhǐlù. Dàjiā dōu kuā tā shì gè dǒng lǐmào, ài láodòng de yōuxiù hǎo háizi!",
            indonesian: "Di akhir pekan, Dino kecil belajar membantu ibu mengerjakan tugas rumah tangga: menyapu lantai dan mencuci piring. Sore harinya saat melihat panda di kebun binatang, seorang turis menanyakan arah jalan. Dino kecil dengan sopan menunjukkan arah. Semua memujinya anak yang santun dan rajin!",
            sentences: [
              { hanzi: "我会帮妈妈做家务。", pinyin: "Wǒ huì bāng māma zuò jiāwù.", indonesian: "Saya bisa membantu ibu melakukan pekerjaan rumah." },
              { hanzi: "请问去动物园怎么走？", pinyin: "Qǐngwèn qù dòngwùyuán zěnme zǒu?", indonesian: "Bolehkah saya bertanya, bagaimana rute jalan menuju kebun binatang?" }
            ]
          },
          vocab: [
            { hanzi: "家务", pinyin: "jiāwù", meaning: "pekerjaan rumah tangga", strokes: 10, strokeOrder: ["点", "点", "横撇", "横", "撇", "竖提", "撇", "撇", "撇", "捺"], example: "做家务 (Mengerjakan tugas rumah)", radical: "宀" },
            { hanzi: "问路", pinyin: "wènlù", meaning: "bertanya arah jalan", strokes: 6, strokeOrder: ["点", "竖", "横折钩", "竖", "横折", "横"], example: "礼貌问路 (Bertanya jalan dg sopan)", radical: "门" }
          ],
          matchingPairs: [
            { id: "m421", hanzi: "家务", pinyin: "jiāwù", meaning: "Pekerjaan Rumah", icon: "🧹", category: "kegiatan" },
            { id: "m422", hanzi: "看病", pinyin: "kànbìng", meaning: "Berobat / Ke Dokter", icon: "🩺", category: "kesehatan" }
          ],
          quizQuestions: [
            {
              id: "q421",
              type: "meaning",
              question: "Apa arti dari '做家务' (zuò jiāwù)?",
              audioText: "“Zuò jiāwù” shì shénme yìsi?",
              options: ["Mengerjakan tugas rumah tangga", "Bermain game", "Membaca komik", "Berwisata"],
              correctIndex: 0,
              explanation: "'做家务' berarti mengerjakan pekerjaan rumah tangga (seperti menyapu, mencuci, merapikan meja)."
            },
            {
              id: "q422",
              type: "pinyin",
              question: "Pilihlah pinyin yang tepat untuk '问路':",
              audioText: "“Wènlù” de pīnyīn shì nǎge?",
              options: ["wènlù", "kànbìng", "sǎodì", "xǐwǎn"],
              correctIndex: 0,
              explanation: "'问路' dibaca 'wènlù' (menanyakan jalan)."
            },
            {
              id: "q423",
              type: "strokes",
              question: "Berapakah jumlah goresan karakter '门' (mén)?",
              audioText: "“Mén” zì yǒu jǐ huà?",
              options: ["3 goresan", "4 goresan", "5 goresan", "6 goresan"],
              correctIndex: 0,
              explanation: "'门' memiliki 3 goresan: 点, 竖, 横折钩."
            },
            {
              id: "q424",
              type: "sentence_order",
              question: "Susun kalimat: [帮妈妈 / 我会 / 做家务]",
              audioText: "Qǐng lián cí chéng jù: bāng māma, wǒ huì, zuò jiāwù.",
              options: [
                "我会帮妈妈做家务。",
                "做家务我会帮妈妈。",
                "帮妈妈做家务我会。",
                "我会做家务帮妈妈。"
              ],
              correctIndex: 0,
              explanation: "'我会帮妈妈做家务。' (Saya bisa membantu ibu mengerjakan pekerjaan rumah)."
            },
            {
              id: "q425",
              type: "picture_match",
              question: "Gambar mana yang menunjukkan aktivitas '扫地做家务' (menyapu lantai)?",
              audioText: "Nǎge túpiàn shì sǎodì?",
              options: [
                "🧹 Anak memegang sapu merapikan lantai bersih",
                "🎮 Anak memegang controller game",
                "🛌 Anak sedang tidur nyenyak",
                "⚽ Anak bermain bola di taman"
              ],
              correctIndex: 0,
              explanation: "'扫地' (sǎodì) berarti menyapu lantai."
            }
          ]
        },
        {
          id: 3,
          unitNumber: 3,
          title: "Unit 3: Museum, Budaya Tradisional & Rencana Liburan (文化探秘与暑假计划)",
          lessons: ["第11课 参观博物馆", "第12课 我们去旅行", "第13课 中国传统节日", "第14课 讲故事", "第15课 暑假计划"],
          story: {
            title: "Petualangan Rencana Liburan Musim Panas (暑假探险大计划)",
            hanzi: "期末考试结束了，大家都制定了精彩的暑假计划。小霸王龙和翼龙打算坐高铁去参观国家历史博物馆，了解古老的青铜器和书法文化。旅行不仅能开阔眼界，还能结交更多好朋友！",
            pinyin: "Qīmò kǎoshì jiéshù le, dàjiā dōu zhìdìng le jīngcǎi de shǔjià jìhuà. Xiǎo bàwánglóng hé yìlóng dǎsuàn zuò gāotiě qù cānguān guójiā lìshǐ bówùguǎn, liǎojiě gǔlǎo de qīngtóngqì hé shūfǎ wénhuà. Lǚxíng bùjǐn néng kāikuò yǎnjiè, hái néng jiéjiāo gèng duō hǎo péngyou!",
            indonesian: "Ujian akhir semester telah selesai, semuanya merancang rencana liburan musim panas yang mengagumkan. Rexy dan Ptero berencana naik kereta cepat mengunjungi Museum Sejarah Nasional untuk mempelajari artefak perunggu kuno dan kaligrafi. Bepergian membuka wawasan dan menambah banyak sahabat!",
            sentences: [
              { hanzi: "暑假我们去参观历史博物馆。", pinyin: "Shǔjià wǒmen qù cānguān lìshǐ bówùguǎn.", indonesian: "Liburan musim panas kami pergi mengunjungi museum sejarah." },
              { hanzi: "中国传统节日有春节和中秋节。", pinyin: "Zhōngguó chuántǒng jiérì yǒu Chūnjié hé Zhōngqiūjié.", indonesian: "Hari raya tradisional Tiongkok meliputi Imlek dan Festival Kue Bulan." }
            ]
          },
          vocab: [
            { hanzi: "博物馆", pinyin: "bówùguǎn", meaning: "museum", strokes: 12, strokeOrder: ["横", "竖", "竖", "横折", "横", "竖", "横折", "横", "点", "撇", "横", "点"], example: "历史博物馆 (Museum sejarah)", radical: "十" },
            { hanzi: "旅行", pinyin: "lǚxíng", meaning: "bepergian / berwisata", strokes: 10, strokeOrder: ["点", "横", "横折钩", "撇", "撇", "横", "竖", "撇", "横折钩", "横"], example: "去旅行 (Pergi travelling)", radical: "方" }
          ],
          matchingPairs: [
            { id: "m431", hanzi: "博物馆", pinyin: "bówùguǎn", meaning: "Museum", icon: "🏛️", category: "tempat" },
            { id: "m432", hanzi: "旅行", pinyin: "lǚxíng", meaning: "Travelling / Liburan", icon: "🧳", category: "kegiatan" }
          ],
          quizQuestions: [
            {
              id: "q431",
              type: "meaning",
              question: "Apa arti dari '暑假计划' (shǔjià jìhuà)?",
              audioText: "“Shǔjià jìhuà” shì shénme yìsi?",
              options: ["Jadwal pelajaran harian", "Rencana liburan musim panas", "Tugas ujian akhir", "Daftar belanja"],
              correctIndex: 1,
              explanation: "'暑假' (shǔjià) = libur musim panas, '计划' (jìhuà) = rencana."
            },
            {
              id: "q432",
              type: "pinyin",
              question: "Pilihlah pinyin untuk '传统节日':",
              audioText: "“Chuántǒng jiérì” de pīnyīn shì nǎge?",
              options: ["chuántǒng jiérì", "bówùguǎn lǚxíng", "shǔjià jìhuà", "huānyíng tóngxué"],
              correctIndex: 0,
              explanation: "'传统节日' dibaca 'chuántǒng jiérì' (hari raya tradisional)."
            },
            {
              id: "q433",
              type: "strokes",
              question: "Berapakah jumlah goresan karakter '古' (gǔ - kuno)?",
              audioText: "“Gǔ” zì yǒu jǐ huà?",
              options: ["4 goresan", "5 goresan", "6 goresan", "7 goresan"],
              correctIndex: 1,
              explanation: "'古' terdiri dari 5 goresan: 横, 竖, 竖, 横折, 横."
            },
            {
              id: "q434",
              type: "sentence_order",
              question: "Susun kalimat: [暑假 / 去旅行 / 我们打算 / 明天]",
              audioText: "Qǐng lián cí chéng jù: shǔjià, qù lǚxíng, wǒmen dǎsuàn, míngtiān.",
              options: [
                "暑假我们打算去旅行。",
                "去旅行暑假我们打算。",
                "我们打算暑假去旅行。",
                "旅行打算我们暑假去。"
              ],
              correctIndex: 0,
              explanation: "'暑假我们打算去旅行。' (Musim panas ini kami berencana pergi berwisata)."
            },
            {
              id: "q435",
              type: "picture_match",
              question: "Gambar manakah yang mendeskripsikan '历史博物馆' (Museum Sejarah)?",
              audioText: "Nǎge túpiàn shì bówùguǎn?",
              options: [
                "🏛️ Gedung megah bertiang pilar klasik dengan patung bersejarah",
                "🎡 Bianglala berputar di taman hiburan karnaval",
                "🛒 Deretan rak barang di toko swalayan",
                "🏖️ Payung pantai di atas pasir laut"
              ],
              correctIndex: 0,
              explanation: "'博物馆' (museum) adalah gedung pameran sejarah dan seni."
            }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // HAN YU 5 SAMPAI 12 (DIBANGUN DENGAN STRUKTUR LENGKAP)
    // -----------------------------------------------------------------------
    ...[5, 6, 7, 8, 9, 10, 11, 12].map(bookNum => {
      const themes = {
        5: {
          level: "Tingkat 5 - Menengah Mahir",
          dino: { name: "Bronto Sage", species: "Brontosaurus Bijak", avatar: "🦕", desc: "Mari selami keindahan alam semesta, pelestarian lingkungan bumi, dan persahabatan sejati!" },
          units: [
            { title: "Unit 1: Lingkungan Sekolah & Minat Bakat (美丽校园与兴趣发展)", lessons: ["第1课 新学期开始", "第2课 我的好朋友", "第3课 美丽的校园", "第4课 课外兴趣班", "第5课 运动会"] },
            { title: "Unit 2: Rahasia Alam & Eksplorasi Luar Angkasa (自然奥秘与宇宙探索)", lessons: ["第6课 动物世界", "第7课 植物的秘密", "第8课 四季的变化", "第9课 地球与环保", "第10课 宇宙探索"] },
            { title: "Unit 3: Budaya Tiongkok & Persahabatan Abadi (中华文化与深厚友谊)", lessons: ["第11课 学习汉语的乐趣", "第12课 中国的美食", "第13课 传统手工艺", "第14课 名胜古迹", "第15课 友谊地久天长"] }
          ]
        },
        6: {
          level: "Tingkat 6 - Menengah Lanjutan",
          dino: { name: "Veloci Sharp", species: "Velociraptor Gesit", avatar: "🦎", desc: "Waktunya mengeksplorasi cerita legenda Tiongkok, fabel peribahasa Chengyu, dan teknologi modern!" },
          units: [
            { title: "Unit 1: Langkah Pertumbuhan & Cita-Cita (成长足迹与美好心愿)", lessons: ["第1课 成长的脚步", "第2课 难忘的经历", "第3课 快乐的童年", "第4课 老师的心愿", "第5课 科技改变生活"] },
            { title: "Unit 2: Legenda & Peribahasa Kuno Tiongkok (成语寓言与历史传说)", lessons: ["第6课 守株待兔的故事", "第7课 拔苗助长", "第8课 掩耳盗铃", "第9课 古代四大发明", "第10课 名人名言"] },
            { title: "Unit 3: Kota Modern & Jembatan Budaya (现代都市与文化桥梁)", lessons: ["第11课 现代绿色城市", "第12课 交通的奇迹", "第13课 自然奇观", "第14课 国际文化交流", "第15课 走向美好未来"] }
          ]
        },
        7: {
          level: "Tingkat 7 - Mahir Dasar",
          dino: { name: "Spino King", species: "Spinosaurus Petualang", avatar: "🐊", desc: "Mempelajari narasi sastra klasik, puisi dinasti Tang, dan geografi sungai dan pegunungan Tiongkok!" },
          units: [
            { title: "Unit 1: Panorama Negeri & Sungai Bersejarah (壮丽山河与地理风情)", lessons: ["第1课 长江与黄河", "第2课 桂林山水甲天下", "第3课 登长城", "第4课 古都西安", "第5课 丝绸之路"] },
            { title: "Unit 2: Apresiasi Puisi & Falsafah Hidup (古典诗词与哲理智慧)", lessons: ["第6课 静夜思", "第7课 春晓", "第8课 望庐山瀑布", "第9课 读书破万卷", "第10课 勤奋与成功"] },
            { title: "Unit 3: Seni Tradisional & Kehidupan Masa Kini (传统艺术与现代生活)", lessons: ["第11课 京剧脸谱", "第12课 中国剪纸", "第13课 茶道礼仪", "第14课 绿色低碳生活", "第15课 我的梦想"] }
          ]
        },
        8: {
          level: "Tingkat 8 - Mahir Terapan",
          dino: { name: "Pachy Shield", species: "Pachycephalosaurus", avatar: "🦬", desc: "Mendalami esai deskriptif, perdebatan argumen, dan eksplorasi sains biologi!" },
          units: [
            { title: "Unit 1: Sains & Kehidupan Sehari-hari (科学探索与日常观察)", lessons: ["第1课 奇妙的水循环", "第2课 植物的光合作用", "第3课 人工智能的奥秘", "第4课 探索深海", "第5课 气候变暖"] },
            { title: "Unit 2: Nilai Karakter & Kerjasama (品德素养与团队协作)", lessons: ["第6课 诚实守信", "第7课 尊重与包容", "第8课 团结的力量", "第9课 勇敢面对挫折", "第10课 志愿者的爱心"] },
            { title: "Unit 3: Komunikasi & Penulisan Kreatif (沟通表达与创意写作)", lessons: ["第11课 怎样写好记叙文", "第12课 一封感人肺腑的信", "第13课 辩论的技巧", "第14课 采访与新闻", "第15课 校园文学社"] }
          ]
        },
        9: {
          level: "Tingkat 9 - Mahir Terpadu",
          dino: { name: "Titan Master", species: "Titanosaurus Agung", avatar: "🐉", desc: "Penguasaan struktur tata bahasa kompleks, retorika wacana, dan sastra modern!" },
          units: [
            { title: "Unit 1: Ekologi & Masa Depan Planet (生态文明与未来家园)", lessons: ["第1课 保护生物多样性", "第2课 可再生能源", "第3课 垃圾分类新时尚", "第4课 森林是地球的肺", "第5课 建设绿色地球"] },
            { title: "Unit 2: Sastra Kontemporer & Emosi (现代文学与人间真情)", lessons: ["第6课 散文之美", "第7课 父母的爱", "第8课 故乡的桥", "第9课 岁月留痕", "第10课 友谊的温度"] },
            { title: "Unit 3: Dialog Peradaban & Globalisasi (文明对话与全球视野)", lessons: ["第11课 多元文化的魅力", "第12课 世界文化遗产", "第13课 青年与未来", "第14课 科学与人文", "第15课 和平与发展"] }
          ]
        },
        10: {
          level: "Tingkat 10 - Pra-Lanjutan",
          dino: { name: "Chrono Dino", species: "Chronosaurus Penjelajah Waktu", avatar: "⏳", desc: "Menganalisis teks naratif sejarah panjang, peribahasa tingkat tinggi, dan ekspresi idiomatik!" },
          units: [
            { title: "Unit 1: Kisah Sejarah & Tokoh Besar (历史风云与先贤风采)", lessons: ["第1课 孔子与儒家思想", "第2课 司马迁与《史记》", "第3课 诸葛亮的智慧", "第4课 郑和下西洋", "第5课 李时珍与本草纲目"] },
            { title: "Unit 2: Falsafah Bahasa & Retorika (汉语修辞与文化内涵)", lessons: ["第6课 汉字的演变", "第7课 对联艺术", "第8课 诗经名篇选读", "第9课 寓言中的大智慧", "第10课 典故溯源"] },
            { title: "Unit 3: Inovasi & Masyarakat Modern (创新驱动与现代社会)", lessons: ["第11课 科技创新的力量", "第12课 数字经济时代", "第13课 探索火星的脚步", "第14课 城市文化名片", "第15课 展望二十一世纪"] }
          ]
        },
        11: {
          level: "Tingkat 11 - Lanjutan Akademik",
          dino: { name: "Aero Dragon", species: "Quetzalcoatlus Perkasa", avatar: "🦅", desc: "Membahas esai analitis, penulisan argumentatif, dan telaah budaya mendalam!" },
          units: [
            { title: "Unit 1: Sastra Klasik & Fiksi Legendaris (四大名著与文学精粹)", lessons: ["第1课 《三国演义》草船借箭", "第2课 《西游记》三打白骨精", "第3课 《水浒传》武松打虎", "第4课 《红楼梦》大观园春景", "第5课 古典小说的艺术魅力"] },
            { title: "Unit 2: Pemikiran Filsafat Timur (东方先哲思想精萃)", lessons: ["第6课 老子与《道德经》", "第7课 庄子与逍遥游", "第8课 孟子的仁政思想", "第9课 和而不同的处世智慧", "第10课 天人合一的哲学观"] },
            { title: "Unit 3: Wawasan Global & Tantangan Abad 21 (全球议题与人类命运)", lessons: ["第11课 全球气候治理", "第12课 人工智能与伦理", "第13课 经济全球化新趋势", "第14课 跨文化沟通的艺术", "第15课 青年一代的历史使命"] }
          ]
        },
        12: {
          level: "Tingkat 12 - Master Bahasa Mandarin",
          dino: { name: "Apex Emperor", species: "T-Rex Purba Maha Guru", avatar: "👑", desc: "Tingkat Puncak! Kemahiran sintaksis, literatur tingkat tinggi, apresiasi karya agung, dan kemandirian berbahasa Mandarin seutuhnya!" },
          units: [
            { title: "Unit 1: Karya Agung Sastra Modern (现当代文学巨匠作品)", lessons: ["第1课 鲁迅《从百草园到三味书屋》", "第2课 朱自清《背影》", "第3课 老舍《济南的冬天》", "第4课 冰心《寄小读者》", "第5课 现当代散文精赏"] },
            { title: "Unit 2: Kebudayaan Tionghoa & Warisan Dunia (中华文脉与世界遗产)", lessons: ["第6课 故宫博物院的建筑美学", "第7课 敦煌莫高窟的艺术瑰宝", "第8课 兵马俑的世界奇迹", "第9课 昆曲与非物质文化遗产", "第10课 中华文化的传承与创新"] },
            { title: "Unit 3: Kelulusan, Kepemimpinan & Masa Depan (毕业展望与领航未来)", lessons: ["第11课 知识改变命运", "第12课 科学精神与理性思考", "第13课 走向世界的中华少年", "第14课 毕业演讲词", "第15课 扬帆起航，放飞梦想"] }
          ]
        }
      };

      const bookMeta = themes[bookNum];
      return {
        id: bookNum,
        title: `Han Yu ${bookNum} (第${["四","五","六","七","八","九","十","十一","十二"][bookNum - 4]}册)`,
        level: bookMeta.level,
        dinoGuide: bookMeta.dino,
        units: bookMeta.units.map((u, uIdx) => {
          const unitId = uIdx + 1;
          return {
            id: unitId,
            unitNumber: unitId,
            title: u.title,
            lessons: u.lessons,
            story: {
              title: `Petualangan Dinosaurus ${bookMeta.dino.name} (Unit ${unitId})`,
              hanzi: `在美丽的恐龙乐园里，${bookMeta.dino.name}带着小伙伴们一起探索奇妙的中文世界。大家认真阅读《汉语第${bookNum}册》第${unitId}单元，掌握了许多生词和优美的句型。老师和同学们都称赞大家是爱学习的好榜样！`,
              pinyin: `Zài měilì de kǒnglóng lèyuán lǐ, ${bookMeta.dino.name} dàizhe xiǎohuǒbàn men yìqǐ tànsuǒ qímiào de Zhōngwén shìjiè. Dàjiā rènzhēn yuèdú 《Hànyǔ Dì ${bookNum} Cè》 dì ${unitId} dānyuán, zhǎngwò le xǔduō shēngcí hé yōuměi de jùxíng. Lǎoshī hé tóngxué men dōu chēngzàn dàjiā shì ài xuéxí de hǎo bǎngyàng!`,
              indonesian: `Di taman dinosaurus yang permai, ${bookMeta.dino.name} mengajak sahabat-sahabatnya menjelajahi dunia bahasa Mandarin yang mempesona. Semua tekun membaca buku Han Yu ${bookNum} Unit ${unitId}, menguasai banyak kosakata baru dan pola kalimat yang indah. Guru dan teman-teman memuji semuanya sebagai teladan pembelajar yang hebat!`,
              sentences: [
                {
                  hanzi: `在美丽的恐龙乐园里，${bookMeta.dino.name}带着小伙伴们一起探索中文世界。`,
                  pinyin: `Zài měilì de kǒnglóng lèyuán lǐ, ${bookMeta.dino.name} dàizhe xiǎohuǒbàn men yìqǐ tànsuǒ Zhōngwén shìjiè.`,
                  indonesian: `Di taman dinosaurus, ${bookMeta.dino.name} mengajak teman-teman menjelajahi bahasa Mandarin.`
                },
                {
                  hanzi: `大家认真学习，掌握了许多生词和句子。`,
                  pinyin: `Dàjiā rènzhēn xuéxí, zhǎngwò le xǔduō shēngcí hé jùzi.`,
                  indonesian: `Semua belajar dengan tekun, menguasai banyak kosakata dan kalimat.`
                },
                {
                  hanzi: `天天向上，我们是最棒的恐龙探险家！`,
                  pinyin: `Tiāntiān xiàngshàng, wǒmen shì zuì bàng de kǒnglóng tànxiǎnjiā!`,
                  indonesian: `Maju setiap hari, kita adalah penjelajah dinosaurus yang paling hebat!`
                }
              ]
            },
            vocab: [
              { hanzi: "探索", pinyin: "tànsuǒ", meaning: "mengeksplorasi / meneliti", strokes: 8, strokeOrder: ["横", "竖钩", "提", "点", "点", "横撇", "撇", "点"], example: "探索奥秘 (Mengeksplorasi misteri)", radical: "扌" },
              { hanzi: "知识", pinyin: "zhīshi", meaning: "pengetahuan", strokes: 8, strokeOrder: ["撇", "横", "横", "撇", "点", "竖", "横折", "横"], example: "学习知识 (Menuntut ilmu)", radical: "矢" },
              { hanzi: "进步", pinyin: "jìnbù", meaning: "kemajuan / berkembang", strokes: 7, strokeOrder: ["横", "横", "竖", "点", "横折折撇", "捺", "撇"], example: "天天进步 (Maju setiap hari)", radical: "辶" },
              { hanzi: "梦想", pinyin: "mèngxiǎng", meaning: "impian / cita-cita", strokes: 11, strokeOrder: ["横", "竖", "竖", "横", "竖", "撇", "捺", "点", "横折", "横", "横"], example: "实现梦想 (Meraih cita-cita)", radical: "木" }
            ],
            matchingPairs: [
              { id: `m_${bookNum}_${unitId}_1`, hanzi: "探索", pinyin: "tànsuǒ", meaning: "Eksplorasi Purba", icon: "🧭", category: "konsep" },
              { id: `m_${bookNum}_${unitId}_2`, hanzi: "知识", pinyin: "zhīshi", meaning: "Buku Pengetahuan", icon: "📖", category: "ilmu" },
              { id: `m_${bookNum}_${unitId}_3`, hanzi: "进步", pinyin: "jìnbù", meaning: "Kemajuan Prestasi", icon: "🚀", category: "prestasi" },
              { id: `m_${bookNum}_${unitId}_4`, hanzi: "梦想", pinyin: "mèngxiǎng", meaning: "Bintang Impian", icon: "⭐", category: "cita_cita" }
            ],
            quizQuestions: [
              {
                id: `q_${bookNum}_${unitId}_1`,
                type: "meaning",
                question: `Apa arti kosakata '知识' (zhīshi) dalam Han Yu ${bookNum} Unit ${unitId}?`,
                audioText: "“Zhīshi” shì shénme yìsi?",
                options: ["Pengetahuan / Ilmu", "Makanan lezat", "Olahraga lari", "Warna merah"],
                correctIndex: 0,
                explanation: "'知识' (zhīshi) berarti pengetahuan / wawasan ilmu."
              },
              {
                id: `q_${bookNum}_${unitId}_2`,
                type: "pinyin",
                question: `Pilihlah pinyin yang tepat untuk '梦想':`,
                audioText: "“Mèngxiǎng” de pīnyīn shì nǎge?",
                options: ["mèngxiǎng", "tànsuǒ", "jìnbù", "zhīshi"],
                correctIndex: 0,
                explanation: "'梦想' dibaca 'mèngxiǎng' (impian/cita-cita)."
              },
              {
                id: `q_${bookNum}_${unitId}_3`,
                type: "strokes",
                question: "Berapakah jumlah goresan karakter '知' (zhī)?",
                audioText: "“Zhī” zì yǒu jǐ huà?",
                options: ["6 goresan", "7 goresan", "8 goresan", "9 goresan"],
                correctIndex: 2,
                explanation: "'知' terdiri dari 8 goresan (bagian kiri 矢 5 gores + bagian kanan 口 3 gores = 8 goresan)."
              },
              {
                id: `q_${bookNum}_${unitId}_4`,
                type: "sentence_order",
                question: "Susun kalimat: [知识 / 学习 / 很多 / 我们]",
                audioText: "Qǐng lián cí chéng jù: zhīshi, xuéxí, hěn duō, wǒmen.",
                options: [
                  "我们学习很多知识。",
                  "很多知识我们学习。",
                  "学习知识我们很多。",
                  "知识我们很多学习。"
                ],
                correctIndex: 0,
                explanation: "'我们学习很多知识。' (Kami mempelajari banyak pengetahuan)."
              },
              {
                id: `q_${bookNum}_${unitId}_5`,
                type: "picture_match",
                question: "Gambar mana yang melambangkan '实现梦想' (meraih bintang impian cita-cita)?",
                audioText: "Nǎge túpiàn shì shíxiàn mèngxiǎng?",
                options: [
                  "⭐ Bintang emas bercahaya terang di angkasa impian",
                  "🌧️ Awan gelap hujan gerimis",
                  "🛒 Keranjang belanja supermarket kosong",
                  "🥣 Mangkok sup di atas meja"
                ],
                correctIndex: 0,
                explanation: "Bintang emas bersinar melambangkan impian (梦想)."
              }
            ]
          };
        })
      };
    })
  ]
};

// Helper methods untuk mengakses database kurikulum
function getBookById(bookId) {
  return HAN_YU_CURRICULUM.books.find(b => b.id === parseInt(bookId)) || HAN_YU_CURRICULUM.books[0];
}

function getUnitByBookAndUnitId(bookId, unitId) {
  const book = getBookById(bookId);
  return book.units.find(u => u.id === parseInt(unitId)) || book.units[0];
}
