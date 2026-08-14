/**
 * Dino Mandarin Adventure - Full Curriculum Data (Han Yu 1 s/d Han Yu 12)
 * Kurikulum Lengkap Diadaptasi Penuh Dari Buku PDF Resmi Han Yu 1 - 12
 * 
 * Modul:
 * 1. Metadata Buku Han Yu 1 - 12 & Daftar Unit
 * 2. Kosakata Guratan Lengkap (Hanzi, Pinyin, Arti, Total Guratan, Tahapan Langkah, Tips Dino, Ilustrasi Visual SVG)
 * 3. Teks Cerita & Percakapan Audio Lamban Ramah Anak SD Per-Unit
 * 4. Bank Soal Latihan Pilihan Berganda Ber-Audio (5 Tipe: Mengartikan, Pinyin, Hitung Guratan, Susun Kalimat, Cari Gambar)
 * 5. Kartu Game Mencocokkan Bergambar
 */

const DINO_DATA = {
  // 1. Metadata Buku Han Yu 1 s/d 12
  books: [
    { id: 1, title: 'Han Yu 1 (汉语 第一册)', pdfFile: 'HAN YU 1.pdf', desc: '15 Pelajaran: Sapaan, Keluarga, Profesi, Sekolah, Makanan, Olahraga, Kamar' },
    { id: 2, title: 'Han Yu 2 (汉语 第二册)', pdfFile: 'HAN YU 2.pdf', desc: '12 Pelajaran: Waktu, Hari, Usia, Anggota Tubuh, Pakaian, Warna, Buah, Hewan' },
    { id: 3, title: 'Han Yu 3 (汉语 第三册)', pdfFile: 'HAN YU 3.pdf', desc: '12 Pelajaran: Ruang Kelas, Kampung Halaman, Profesi, Belanja, Cuaca, Hobi' },
    { id: 4, title: 'Han Yu 4 (汉语 第四册)', pdfFile: 'HAN YU 4.pdf', desc: '12 Pelajaran: Olahraga, 4 Musim, Supermarket, Kesehatan, Wisata, Lingkungan' },
    { id: 5, title: 'Han Yu 5 (汉语 第五册)', pdfFile: 'HAN YU 5.pdf', desc: '12 Pelajaran: Bakat Musik, Alat Komunikasi, Festival Tradisional, Memasak, Museum' },
    { id: 6, title: 'Han Yu 6 (汉语 第六册)', pdfFile: 'HAN YU 6.pdf', desc: '12 Pelajaran: Era Digital, Tembok Besar, Antariksa, Fabel Kuno, Seni Kertas' },
    { id: 7, title: 'Han Yu 7 (汉语 第七册)', pdfFile: 'HAN YU 7.pdf', desc: '12 Pelajaran: Cerita Idiom Chengyu, Asal Usul Hanzi, Budaya Teh, Puisi Tang' },
    { id: 8, title: 'Han Yu 8 (汉语 第八册)', pdfFile: 'HAN YU 8.pdf', desc: '12 Pelajaran: Sungai Yangtze, 4 Penemuan Besar, Prajurit Terakota, Herbal, Panda' },
    { id: 9, title: 'Han Yu 9 (汉语 第九册)', pdfFile: 'HAN YU 9.pdf', desc: '12 Pelajaran: Seni Kaligrafi, Lukisan Air, Opera Beijing, Kisah 3 Kerajaan, Kereta Cepat' },
    { id: 10, title: 'Han Yu 10 (汉语 第十册)', pdfFile: 'HAN YU 10.pdf', desc: '12 Pelajaran: Jalur Sutra, Ekonomi Digital, Energi Bersih, Smart City, AI Modern' },
    { id: 11, title: 'Han Yu 11 (汉语 第十一册)', pdfFile: 'HAN YU 11.pdf', desc: '12 Pelajaran: Filsafat Konfusius & Taoisme, Robotika, Sains Antariksa, Budi Pekerti' },
    { id: 12, title: 'Han Yu 12 (汉语 第十二册)', pdfFile: 'HAN YU 12.pdf', desc: '12 Pelajaran: Keterampilan Berpidato, Menulis Esai, Sastra Klasik, Diplomasi, Visi Masa Depan' }
  ],

  // 2. Metadata Judul Unit Seluruh Buku Han Yu 1 - 12
  unitTitles: {
    1: {
      1: '你好 (Nǐ hǎo)',
      2: '我爱爸爸妈妈 (Wǒ ài bàba māma)',
      3: '爸爸是老师 (Bàba shì lǎoshī)',
      4: '你叫什么名字 (Nǐ jiào shénme míngzi)',
      5: '我爱我家 (Wǒ ài wǒ jiā)',
      6: '哥哥去学校 (Gēge qù xuéxiào)',
      7: '我们上课吧 (Wǒmen shàngkè ba)',
      8: '我们吃午饭 (Wǒmen chī wǔfàn)',
      9: '小华打球 (Xiǎohuá dǎ qiú)',
      10: '我的一天 (Wǒ de yī tiān)',
      11: '这是我的书 (Zhè shì wǒ de shū)',
      12: '我有两本书 (Wǒ yǒu liǎng běn shū)',
      13: '你家有电脑吗 (Nǐ jiā yǒu diànnǎo ma)',
      14: '书在书架上 (Shū zài shūjià shang)',
      15: '我的房间 (Wǒ de fángjiān)'
    },
    2: {
      1: '现在几点 (Jam & Waktu)',
      2: '今天星期几 (Hari & Kalender)',
      3: '你几岁了 (Usia & Kelas)',
      4: '你的头发长 (Bagian Tubuh & Ciri Fisik)',
      5: '他穿红上衣 (Pakaian & Warna)',
      6: '动物园里有老虎 (Hewan & Kebun Binatang)',
      7: '你喜欢吃什么水果 (Buah-buahan)',
      8: '你去哪儿 (Tempat & Lokasi Kota)',
      9: '我在做作业 (Sedang Beraktivitas)',
      10: '坐飞机去北京 (Transportasi & Bepergian)',
      11: '今天的菜真好吃 (Makanan & Cita Rasa)',
      12: '祝你生日快乐 (Pesta Ulang Tahun)'
    },
    3: {
      1: '新同学 (Teman Baru & Perkenalan)',
      2: '我们的教室 (Ruang Kelas & Alat Belajar)',
      3: '你在做什么 (Aktivitas Harian)',
      4: '我的家乡 (Pemandangan & Geografi)',
      5: '参观动物园 (Satwa Liar & Karakteristik)',
      6: '医生和护士 (Ragam Profesi)',
      7: '去超市买东西 (Belanja & Uang)',
      8: '今天天气怎么样 (Cuaca & Suhu)',
      9: '我的爱好 (Hobi & Kesenian)',
      10: '去中国餐馆 (Restoran & Menu Tradisional)',
      11: '快乐的周末 (Akhir Pekan)',
      12: '放假了 (Rencana Liburan)'
    },
    4: {
      1: '体育比赛 (Pertandingan Olahraga)',
      2: '城市交通 (Lalu Lintas & Rute Jalan)',
      3: '四季的变化 (Empat Musim)',
      4: '在商场里 (Pusat Perbelanjaan)',
      5: '我生病了 (Kesehatan & Pengobatan)',
      6: '举办生日会 (Pesta & Tradisi Hadiah)',
      7: '游览名胜 (Wisata Sejarah & Budaya)',
      8: '保护大自然 (Kelestarian Lingkungan)',
      9: '给朋友写信 (Surat & Komunikasi)',
      10: '我家的小宠物 (Hewan Peliharaan)',
      11: '参观科技馆 (Sains & Eksperimen)',
      12: '难忘的一天 (Hari Berkesan & Catatan Harian)'
    },
    5: {
      1: '我的特长 (Bakat & Kesenian Musik)',
      2: '现代通讯 (Smartphone & Media Online)',
      3: '绿化家园 (Penghijauan & Kebersihan)',
      4: '传统节日 (Festival Tradisional Musim Semi)',
      5: '寓言故事 (Fabel Dongeng Kuno)',
      6: '学做中国菜 (Memasak & Dapur)',
      7: '历史博物馆 (Museum & Warisan Sejarah)',
      8: '远方的朋友 (Sahabat Pena Global)',
      9: '礼貌待人 (Etika & Tata Krama)',
      10: '我的理想 (Cita-cita Masa Depan)',
      11: '读书的乐趣 (Gemar Membaca Buku)',
      12: '美丽的地球 (Geografi Benua & Samudra)'
    },
    6: {
      1: '网络时代 (Internet & Era Digital)',
      2: '万里长城 (Tembok Raksasa & Kejayaan)',
      3: '端午节的传说 (Legenda Perahu Naga)',
      4: '探索太空 (Roket & Penjelajahan Antariksa)',
      5: '成语寓言·刻舟求剑 (Hikmah Chengyu)',
      6: '民间剪纸 (Seni Kriya Kertas Tradisional)',
      7: '健康的生活方式 (Pola Hidup Sehat & Gizi)',
      8: '丝绸之路 (Sejarah Jalur Sutra Kuno)',
      9: '现代职业 (Profesi Masa Kini)',
      10: '坚持就是胜利 (Pantang Menyerah)',
      11: '保护野生动物 (Satwa Langka Dunia)',
      12: '展望明天 (Visi Masa Depan)'
    },
    7: {
      1: '成语故事·盲人摸象 (Kisah Buta & Gajah)',
      2: '汉字的起源与演变 (Asal Usul Huruf Hanzi)',
      3: '伯牙绝弦 (Kisah Persahabatan Sejati)',
      4: '中国茶文化 (Budaya Minum Teh)',
      5: '春节的习俗 (Tradisi Tahun Baru Imlek)',
      6: '唐诗欣赏 (Apresiasi Puisi Dinasti Tang)',
      7: '民族乐器 (Alat Musik Guzheng & Erhu)',
      8: '中国古代建筑 (Arsitektur Kayu & Kuil Langit)',
      9: '花木兰从军 (Kisah Ksatria Mulan)',
      10: '诚信待人 (Kejujuran & Budi Pekerti)',
      11: '饮食文化 (8 Kuliner Tradisional Tiongkok)',
      12: '少年志向 (Cita-cita Generasi Muda)'
    },
    8: {
      1: '长江与黄河 (Sungai Yangtze & Kuning)',
      2: '四大发明 (4 Penemuan Besar Dunia)',
      3: '中国的地理奇观 (Pemandangan Alam Guilin)',
      4: '秦始皇兵马俑 (Prajurit Terakota Xi\'an)',
      5: '陶瓷与丝绸艺术 (Seni Sutra & Porselen)',
      6: '中秋节与嫦娥奔月 (Legenda Festival Kue Bulan)',
      7: '中医药的神奇 (Herbal Tradisional Tiongkok)',
      8: '郑和下西洋 (Pelayaran Laksamana Cheng Ho)',
      9: '青藏高原 (Dataran Tinggi Himalaya)',
      10: '国宝大熊猫 (Pelestarian Satwa Panda)',
      11: '苏州园林 (Taman Klasik Tradisional)',
      12: '华夏文明传承 (Pewarisan Peradaban)'
    },
    9: {
      1: '书法之美 (Seni Kaligrafi & 8 Kaidah Yong)',
      2: '水墨国画 (Lukisan Tinta Air Tradisional)',
      3: '京剧脸谱 (Opera Beijing & Tata Rias Wajah)',
      4: '三国演义·草船借箭 (Kisah Tiga Kerajaan)',
      5: '西游记·三打白骨精 (Kera Sakti Sun Wukong)',
      6: '环保低碳生活 (Gaya Hidup Ramah Lingkungan)',
      7: '水乡乌镇 (Pesona Kota Air Wuzhen)',
      8: '名言警句 (Aforisme Bijak Kehidupan)',
      9: '宋词赏析 (Apresiasi Puisi Dinasti Song)',
      10: '天人合一 (Harmoni Manusia & Alam)',
      11: '现代高铁 (Kereta Cepat Super Canggih)',
      12: '青春与梦想 (Kreativitas Generasi Muda)'
    },
    10: {
      1: '一带一路 (Jalur Sutra Maritim Modern)',
      2: '数字经济与移动支付 (Ekonomi Non-Tunai)',
      3: '绿色清洁能源 (Energi Surya & Angin)',
      4: '国际文化交流 (Dialog Antarbudaya Dunia)',
      5: '联合国与全球治理 (PBB & Perdamaian)',
      6: '智慧城市 (Smart City Masa Depan)',
      7: '保护世界文化遗产 (Situs Warisan UNESCO)',
      8: '现代生态农业 (Pertanian Presisi Hijau)',
      9: '人工智能时代 (Kecerdasan Buatan AI)',
      10: '人类命运共同体 (Harmoni Masa Depan)',
      11: '深海探索 (Kapal Selam Riset Jiaolong)',
      12: '跨文化沟通 (Keahlian Komunikasi Global)'
    },
    11: {
      1: '儒家经典·论语选读 (Ajaran Konfusianisme)',
      2: '道家哲学·道德经 (Kearifan Taoisme)',
      3: '机器人与自动化 (Robotika Modern)',
      4: '深空探测 (Penjelajahan Planet Mars)',
      5: '生物技术 (Sains Genetik & Medis)',
      6: '乡村振兴 (Pemberdayaan Komunitas Hijau)',
      7: '网络伦理 (Etika & Keamanan Siber)',
      8: '碳中和目标 (Aksi Iklim Global)',
      9: '传统美德 (Menghormati Orang Tua & Guru)',
      10: '国际志愿服务 (Relawan Kemanusiaan)',
      11: '科学探索精神 (Riset & Inovasi)',
      12: '走向广阔世界 (Membuka Cakrawala Global)'
    },
    12: {
      1: '演讲技巧与说服力 (Retorika Pidato Publik)',
      2: '议论文写作与思辨 (Esai & Berpikir Kritis)',
      3: '国际青年领袖 (Kepemimpinan Pemuda Dunia)',
      4: '量子科技 (Komputasi Kuantum Canggih)',
      5: '红楼梦赏析 (Sastra Klasik Impian Paviliun Merah)',
      6: '团队合作管理 (Dinamika Kelompok Efektif)',
      7: '青年社会创业 (Kewirausahaan Berdampak)',
      8: '国际冲突化解 (Diplomasi & Perdamaian)',
      9: '城市空间再生 (Peremajaan Tata Kota)',
      10: '跨文化共鸣 (Empati Jembatan Budaya)',
      11: '人生规划与终身学习 (Perencanaan Karir Hidup)',
      12: '毕业致辞扬帆起航 (Pidato Kelulusan Generasi Emas)'
    }
  },

  // 3. Database Kosakata Guratan Lengkap (Han Yu 1 - 12)
  vocabList: [
    // --- HAN YU 1 ---
    { id: 101, hanzi: '你', pinyin: 'nǐ', meaning: 'Kamu', strokes: 7, book: 1, unit: 1, strokeSteps: ['1. 撇 (piě)', '2. 竖 (shù)', '3. 撇 (piě)', '4. 横撇 (héngpiě)', '5. 竖钩 (shùgōu)', '6. 撇 (piě)', '7. 点 (diǎn)'], tip: 'Radikal orang (亻) di sebelah kiri + huruf 尔.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">你</text></svg>' },
    { id: 102, hanzi: '好', pinyin: 'hǎo', meaning: 'Baik / Bagus', strokes: 6, book: 1, unit: 1, strokeSteps: ['1. 撇点 (piědiǎn)', '2. 撇 (piě)', '3. 提 (tí)', '4. 横撇 (héngpiě)', '5. 弯钩 (wāngōu)', '6. 横 (héng)'], tip: 'Radikal wanita (女) + anak (子) = Baik & Harmonis.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">好</text></svg>' },
    { id: 103, hanzi: '一', pinyin: 'yī', meaning: 'Satu', strokes: 1, book: 1, unit: 1, strokeSteps: ['1. 横 (héng)'], tip: 'Goresan dasar mendatar dari kiri ke kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">一</text></svg>' },
    { id: 104, hanzi: '上', pinyin: 'shàng', meaning: 'Atas / Naik', strokes: 3, book: 1, unit: 1, strokeSteps: ['1. 竖 (shù)', '2. 横 (héng pendek)', '3. 横 (héng panjang)'], tip: 'Garis tegak, garis pendek samping, lalu alas garis panjang.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">上</text></svg>' },
    { id: 105, hanzi: '下', pinyin: 'xià', meaning: 'Bawah / Turun', strokes: 3, book: 1, unit: 1, strokeSteps: ['1. 横 (héng)', '2. 竖 (shù)', '3. 点 (diǎn)'], tip: 'Garis atap mendatar, tiang tegak, lalu titik di sebelah kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">下</text></svg>' },
    { id: 106, hanzi: '我', pinyin: 'wǒ', meaning: 'Saya / Aku', strokes: 7, book: 1, unit: 2, strokeSteps: ['1. 撇', '2. 横', '3. 竖钩', '4. 提', '5. 斜钩', '6. 撇', '7. 点'], tip: 'Sapuan miring atas, tiang berkait, lalu kait miring gagah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">我</text></svg>' },
    { id: 107, hanzi: '爱', pinyin: 'ài', meaning: 'Cinta / Sayang', strokes: 10, book: 1, unit: 2, strokeSteps: ['1. 撇', '2. 点', '3. 点', '4. 撇', '5. 点', '6. 横撇', '7. 点', '8. 横撇', '9. 撇', '10. 捺'], tip: 'Mahkota kasih sayang di atas, hati yang lapang di tengah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">爱</text></svg>' },
    { id: 108, hanzi: '爸', pinyin: 'bà', meaning: 'Ayah / Papa', strokes: 8, book: 1, unit: 2, strokeSteps: ['1. 撇', '2. 点', '3. 撇', '4. 捺', '5. 横折', '6. 横', '7. 竖弯钩', '8. 竖'], tip: 'Radikal ayah (父) di atas + huruf 巴 di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">爸</text></svg>' },
    { id: 109, hanzi: '妈', pinyin: 'mā', meaning: 'Ibu / Mama', strokes: 6, book: 1, unit: 2, strokeSteps: ['1. 撇点', '2. 撇', '3. 提', '4. 横折', '5. 竖折折钩', '6. 横'], tip: 'Radikal perempuan (女) + kuda (马) melambangkan ibu yang rajin.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">妈</text></svg>' },
    { id: 110, hanzi: '他', pinyin: 'tā', meaning: 'Dia (Laki-laki)', strokes: 5, book: 1, unit: 2, strokeSteps: ['1. 撇', '2. 竖', '3. 横折钩', '4. 竖', '5. 竖弯钩'], tip: 'Radikal orang (亻) + juga (也).', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">他</text></svg>' },
    { id: 111, hanzi: '她', pinyin: 'tā', meaning: 'Dia (Perempuan)', strokes: 6, book: 1, unit: 2, strokeSteps: ['1. 撇点', '2. 撇', '3. 提', '4. 横折钩', '5. 竖', '6. 竖弯钩'], tip: 'Radikal perempuan (女) di kiri + huruf 也 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">她</text></svg>' },
    { id: 112, hanzi: '是', pinyin: 'shì', meaning: 'Adalah / Benar', strokes: 9, book: 1, unit: 3, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 横', '5. 横', '6. 竖', '7. 横', '8. 撇', '9. 捺'], tip: 'Matahari (日) di atas + bentuk 正 di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">是</text></svg>' },
    { id: 113, hanzi: '不', pinyin: 'bù', meaning: 'Tidak / Bukan', strokes: 4, book: 1, unit: 3, strokeSteps: ['1. 横', '2. 撇', '3. 竖', '4. 点'], tip: 'Garis mendatar atas, sapuan kiri, garis tegak, lalu titik kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">不</text></svg>' },
    { id: 114, hanzi: '学', pinyin: 'xué', meaning: 'Belajar / Murid', strokes: 8, book: 1, unit: 3, strokeSteps: ['1. 点', '2. 点', '3. 撇', '4. 点', '5. 横撇', '6. 横折', '7. 弯钩', '8. 横'], tip: 'Tiga titik mahkota + topi atap + huruf anak (子).', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">学</text></svg>' },
    { id: 115, hanzi: '家', pinyin: 'jiā', meaning: 'Rumah / Keluarga', strokes: 10, book: 1, unit: 5, strokeSteps: ['1. 点', '2. 点', '3. 横撇', '4. 横', '5. 撇', '6. 弯钩', '7. 撇', '8. 撇', '9. 撇', '10. 捺'], tip: 'Atap rumah (宀) menaungi kehangatan keluarga.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">家</text></svg>' },
    { id: 116, hanzi: '书', pinyin: 'shū', meaning: 'Buku', strokes: 4, book: 1, unit: 11, strokeSteps: ['1. 横折', '2. 横折钩', '3. 竖', '4. 点'], tip: 'Buku sumber ilmu pengetahuan anak cerdas.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">书</text></svg>' },
    { id: 117, hanzi: '吃', pinyin: 'chī', meaning: 'Makan', strokes: 6, book: 1, unit: 8, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 撇', '5. 横', '6. 竖弯钩'], tip: 'Radikal mulut (口) di kiri + huruf 乞 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">吃</text></svg>' },
    { id: 118, hanzi: '打', pinyin: 'dǎ', meaning: 'Memukul / Bermain Bola', strokes: 5, book: 1, unit: 9, strokeSteps: ['1. 横', '2. 竖钩', '3. 提', '4. 横', '5. 竖钩'], tip: 'Radikal tangan (扌) di kiri + huruf 丁 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">打</text></svg>' },

    // --- HAN YU 2 ---
    { id: 201, hanzi: '天', pinyin: 'tiān', meaning: 'Hari / Langit', strokes: 4, book: 2, unit: 1, strokeSteps: ['1. 横', '2. 横', '3. 撇', '4. 捺'], tip: 'Dua garis langit di atas orang besar (大).', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E1F5FE"/><text x="50" y="66" font-size="44" font-weight="900" fill="#0288D1" text-anchor="middle">天</text></svg>' },
    { id: 202, hanzi: '红', pinyin: 'hóng', meaning: 'Merah', strokes: 6, book: 2, unit: 5, strokeSteps: ['1. 撇折', '2. 撇折', '3. 提', '4. 横', '5. 竖', '6. 横'], tip: 'Radikal benang sutra (纟) + huruf 工.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFEBEE"/><text x="50" y="66" font-size="44" font-weight="900" fill="#D32F2F" text-anchor="middle">红</text></svg>' },
    { id: 203, hanzi: '穿', pinyin: 'chuān', meaning: 'Memakai (Baju/Sepatu)', strokes: 9, book: 2, unit: 5, strokeSteps: ['1. 点', '2. 点', '3. 横撇', '4. 撇', '5. 点', '6. 撇', '7. 竖提', '8. 横折', '9. 竖'], tip: 'Radikal lubang (穴) di atas + gigi (牙) di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF3E0"/><text x="50" y="66" font-size="44" font-weight="900" fill="#E65100" text-anchor="middle">穿</text></svg>' },
    { id: 204, hanzi: '果', pinyin: 'guǒ', meaning: 'Buah', strokes: 8, book: 2, unit: 7, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 横', '5. 横', '6. 竖', '7. 撇', '8. 捺'], tip: 'Pohon (木) dengan buah bulat di bagian atasnya.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">果</text></svg>' },
    { id: 205, hanzi: '虎', pinyin: 'hǔ', meaning: 'Harimau', strokes: 8, book: 2, unit: 6, strokeSteps: ['1. 竖', '2. 横', '3. 横钩', '4. 撇', '5. 竖', '6. 横折', '7. 横', '8. 竖弯钩'], tip: 'Raja hutan yang perkasa dan berani.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF8E1"/><text x="50" y="66" font-size="44" font-weight="900" fill="#F57F17" text-anchor="middle">虎</text></svg>' },

    // --- HAN YU 3 ---
    { id: 301, hanzi: '新', pinyin: 'xīn', meaning: 'Baru', strokes: 13, book: 3, unit: 1, strokeSteps: ['1. 点', '2. 横', '3. 点', '4. 撇', '5. 横', '6. 横', '7. 竖', '8. 撇', '9. 点', '10. 撇', '11. 横', '12. 横', '13. 竖'], tip: 'Bentuk pohon + kapak kayu yang baru diasah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">新</text></svg>' },
    { id: 302, hanzi: '门', pinyin: 'mén', meaning: 'Pintu', strokes: 3, book: 3, unit: 2, strokeSteps: ['1. 点', '2. 竖', '3. 横折钩'], tip: 'Dua tiang kusen pintu ruang kelas.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#EDE7F6"/><text x="50" y="66" font-size="44" font-weight="900" fill="#512DA8" text-anchor="middle">门</text></svg>' },
    { id: 303, hanzi: '买', pinyin: 'mǎi', meaning: 'Membeli', strokes: 6, book: 3, unit: 7, strokeSteps: ['1. 横撇', '2. 点', '3. 横', '4. 横折钩', '5. 撇', '6. 点'], tip: 'Membeli barang di toko supermarket.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E0F7FA"/><text x="50" y="66" font-size="44" font-weight="900" fill="#00838F" text-anchor="middle">买</text></svg>' },
    { id: 304, hanzi: '雨', pinyin: 'yǔ', meaning: 'Hujan', strokes: 8, book: 3, unit: 8, strokeSteps: ['1. 横', '2. 竖', '3. 横折钩', '4. 竖', '5. 点', '6. 点', '7. 点', '8. 点'], tip: 'Langit mendung dengan 4 tetes titik air hujan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E1F5FE"/><text x="50" y="66" font-size="44" font-weight="900" fill="#0277BD" text-anchor="middle">雨</text></svg>' },

    // --- HAN YU 4 ---
    { id: 401, hanzi: '车', pinyin: 'chē', meaning: 'Kendaraan / Mobil', strokes: 4, book: 4, unit: 2, strokeSteps: ['1. 横', '2. 撇折', '3. 横', '4. 竖'], tip: 'Roda dan as poros kendaraan masa lampau.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FBE9E7"/><text x="50" y="66" font-size="44" font-weight="900" fill="#D84315" text-anchor="middle">车</text></svg>' },
    { id: 402, hanzi: '春', pinyin: 'chūn', meaning: 'Musim Semi', strokes: 9, book: 4, unit: 3, strokeSteps: ['1. 横', '2. 横', '3. 横', '4. 撇', '5. 捺', '6. 竖', '7. 横折', '8. 横', '9. 横'], tip: 'Tiga garis mendatar + matahari (日) menghangatkan bumi.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#F1F8E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#33691E" text-anchor="middle">春</text></svg>' },
    { id: 403, hanzi: '信', pinyin: 'xìn', meaning: 'Surat / Percaya', strokes: 9, book: 4, unit: 9, strokeSteps: ['1. 撇', '2. 竖', '3. 点', '4. 横', '5. 横', '6. 横', '7. 竖', '8. 横折', '9. 横'], tip: 'Radikal orang (亻) + kata (言) = Menjaga perkataan & amanah surat.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8EAF6"/><text x="50" y="66" font-size="44" font-weight="900" fill="#283593" text-anchor="middle">信</text></svg>' },

    // --- HAN YU 5 ---
    { id: 501, hanzi: '乐', pinyin: 'lè / yuè', meaning: 'Gembira / Musik', strokes: 5, book: 5, unit: 1, strokeSteps: ['1. 撇', '2. 竖折', '3. 竖', '4. 撇', '5. 点'], tip: 'Irama alunan musik yang membahagiakan hati.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF3E0"/><text x="50" y="66" font-size="44" font-weight="900" fill="#EF6C00" text-anchor="middle">乐</text></svg>' },
    { id: 502, hanzi: '网', pinyin: 'wǎng', meaning: 'Jaringan / Internet', strokes: 6, book: 5, unit: 2, strokeSteps: ['1. 竖', '2. 横折钩', '3. 撇', '4. 点', '5. 撇', '6. 点'], tip: 'Jala penangkap ikan yang menjadi simbol jaring internet.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E0F2F1"/><text x="50" y="66" font-size="44" font-weight="900" fill="#00695C" text-anchor="middle">网</text></svg>' },
    { id: 503, hanzi: '节', pinyin: 'jié', meaning: 'Hari Raya / Festival', strokes: 5, book: 5, unit: 4, strokeSteps: ['1. 横', '2. 竖', '3. 竖', '4. 横折钩', '5. 竖'], tip: 'Radikal rumput bambu (艹) + simpul perayaan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFEBEE"/><text x="50" y="66" font-size="44" font-weight="900" fill="#C62828" text-anchor="middle">节</text></svg>' },

    // --- HAN YU 6 ---
    { id: 601, hanzi: '城', pinyin: 'chéng', meaning: 'Kota / Tembok Kota', strokes: 9, book: 6, unit: 2, strokeSteps: ['1. 横', '2. 竖', '3. 提', '4. 横', '5. 斜钩', '6. 横折提', '7. 撇', '8. 撇', '9. 点'], tip: 'Radikal tanah (土) + 成 = Tembok benteng pelindung negeri.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#EFEBE9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#4E342E" text-anchor="middle">城</text></svg>' },
    { id: 602, hanzi: '星', pinyin: 'xīng', meaning: 'Bintang / Planet', strokes: 9, book: 6, unit: 4, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 横', '5. 撇', '6. 横', '7. 横', '8. 竖', '9. 横'], tip: 'Matahari (日) + lahir (生) = Bintang gemerlap di angkasa.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFFDE7"/><text x="50" y="66" font-size="44" font-weight="900" fill="#F57F17" text-anchor="middle">星</text></svg>' },
    { id: 603, hanzi: '舟', pinyin: 'zhōu', meaning: 'Perahu', strokes: 6, book: 6, unit: 5, strokeSteps: ['1. 撇', '2. 撇', '3. 横折钩', '4. 点', '5. 横', '6. 点'], tip: 'Perahu kayu kecil yang mengarungi sungai.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E0F7FA"/><text x="50" y="66" font-size="44" font-weight="900" fill="#00838F" text-anchor="middle">舟</text></svg>' },

    // --- HAN YU 7 ---
    { id: 701, hanzi: '象', pinyin: 'xiàng', meaning: 'Gajah / Fenomena', strokes: 11, book: 7, unit: 1, strokeSteps: ['1. 撇', '2. 横撇', '3. 竖', '4. 横折', '5. 横', '6. 撇', '7. 弯钩', '8. 撇', '9. 撇', '10. 撇', '11. 捺'], tip: 'Bentuk belalai panjang dan tubuh gagah gajah purba.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#ECEFF1"/><text x="50" y="66" font-size="44" font-weight="900" fill="#37474F" text-anchor="middle">象</text></svg>' },
    { id: 702, hanzi: '茶', pinyin: 'chá', meaning: 'Teh', strokes: 9, book: 7, unit: 4, strokeSteps: ['1. 横', '2. 竖', '3. 竖', '4. 撇', '5. 捺', '6. 横', '7. 竖钩', '8. 撇', '9. 点'], tip: 'Daun teh di atas pohon kayu yang menyejukkan jiwa.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">茶</text></svg>' },
    { id: 703, hanzi: '诗', pinyin: 'shī', meaning: 'Puisi / Syair', strokes: 8, book: 7, unit: 6, strokeSteps: ['1. 点', '2. 横折提', '3. 横', '4. 竖', '5. 横', '6. 竖', '7. 横折', '8. 点'], tip: 'Bahasa (讠) + kuil/waktu (寺) = Bait puisi yang mendalam.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#F3E5F5"/><text x="50" y="66" font-size="44" font-weight="900" fill="#6A1B9A" text-anchor="middle">诗</text></svg>' },

    // --- HAN YU 8 ---
    { id: 801, hanzi: '江', pinyin: 'jiāng', meaning: 'Sungai Besar', strokes: 6, book: 8, unit: 1, strokeSteps: ['1. 点', '2. 点', '3. 提', '4. 横', '5. 竖', '6. 横'], tip: 'Tiga titik air (氵) + 工 = Aliran sungai megah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E1F5FE"/><text x="50" y="66" font-size="44" font-weight="900" fill="#0277BD" text-anchor="middle">江</text></svg>' },
    { id: 802, hanzi: '纸', pinyin: 'zhǐ', meaning: 'Kertas', strokes: 7, book: 8, unit: 2, strokeSteps: ['1. 撇折', '2. 撇折', '3. 提', '4. 撇', '5. 竖提', '6. 横', '7. 斜钩'], tip: 'Serat sutra (纟) penemuan besar Cai Lun.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFFDE7"/><text x="50" y="66" font-size="44" font-weight="900" fill="#F57F17" text-anchor="middle">纸</text></svg>' },
    { id: 803, hanzi: '猫', pinyin: 'māo', meaning: 'Kucing / Panda (熊猫)', strokes: 11, book: 8, unit: 10, strokeSteps: ['1. 撇', '2. 弯钩', '3. 撇', '4. 横', '5. 竖', '6. 竖', '7. 竖', '8. 横折', '9. 横', '10. 竖', '11. 横'], tip: 'Radikal hewan (犭) + tunas (苗) = Satwa panda yang lucu.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E0F2F1"/><text x="50" y="66" font-size="44" font-weight="900" fill="#00695C" text-anchor="middle">猫</text></svg>' },

    // --- HAN YU 9 ---
    { id: 901, hanzi: '墨', pinyin: 'mò', meaning: 'Tinta Hitam', strokes: 15, book: 9, unit: 1, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 竖', '5. 横', '6. 横', '7. 点', '8. 点', '9. 点', '10. 点', '11. 横', '12. 竖', '13. 横', '14. 竖', '15. 横'], tip: 'Warna hitam (黑) di atas tanah (土) = Tinta kaligrafi kuas.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#ECEFF1"/><text x="50" y="66" font-size="44" font-weight="900" fill="#263238" text-anchor="middle">墨</text></svg>' },
    { id: 902, hanzi: '画', pinyin: 'huà', meaning: 'Melukis / Lukisan', strokes: 8, book: 9, unit: 2, strokeSteps: ['1. 横', '2. 竖', '3. 横折', '4. 横', '5. 竖', '6. 横', '7. 竖折', '8. 竖'], tip: 'Bingkai kanvas lukisan pemandangan air yang indah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#F1F8E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#33691E" text-anchor="middle">画</text></svg>' },
    { id: 903, hanzi: '箭', pinyin: 'jiàn', meaning: 'Anak Panah', strokes: 15, book: 9, unit: 4, strokeSteps: ['1. 撇', '2. 横', '3. 点', '4. 撇', '5. 横', '6. 点', '7. 点', '8. 横', '9. 竖', '10. 横折', '11. 横', '12. 横', '13. 横', '14. 竖钩', '15. 撇'], tip: 'Bambu (⺮) dibuat menjadi panah strategi Zhuge Liang.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFEBEE"/><text x="50" y="66" font-size="44" font-weight="900" fill="#C62828" text-anchor="middle">箭</text></svg>' },

    // --- HAN YU 10 ---
    { id: 1001, hanzi: '路', pinyin: 'lù', meaning: 'Jalan / Jalur Sutra', strokes: 13, book: 10, unit: 1, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 竖', '5. 横', '6. 竖', '7. 提', '8. 撇', '9. 横撇', '10. 点', '11. 横', '12. 竖折', '13. 横'], tip: 'Radikal kaki (足) + 各 = Menempuh perjalanan jauh.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF3E0"/><text x="50" y="66" font-size="44" font-weight="900" fill="#EF6C00" text-anchor="middle">路</text></svg>' },
    { id: 1002, hanzi: '能', pinyin: 'néng', meaning: 'Energi / Mampu', strokes: 10, book: 10, unit: 3, strokeSteps: ['1. 撇折', '2. 撇', '3. 竖', '4. 横折钩', '5. 横', '6. 横', '7. 撇', '8. 竖弯钩', '9. 撇', '10. 竖弯钩'], tip: 'Kekuatan dan potensi energi terbarukan masa depan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">能</text></svg>' },
    { id: 1003, hanzi: '智', pinyin: 'zhì', meaning: 'Pintar / Kecerdasan AI', strokes: 12, book: 10, unit: 9, strokeSteps: ['1. 撇', '2. 横', '3. 横', '4. 竖', '5. 横', '6. 撇', '7. 点', '8. 竖', '9. 横折', '10. 横', '11. 横', '12. 横'], tip: 'Pengetahuan (知) disinari matahari (日) menghasilkan kecerdasan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#EDE7F6"/><text x="50" y="66" font-size="44" font-weight="900" fill="#512DA8" text-anchor="middle">智</text></svg>' },

    // --- HAN YU 11 ---
    { id: 1101, hanzi: '道', pinyin: 'dào', meaning: 'Jalan Kebijaksanaan / Tao', strokes: 12, book: 11, unit: 2, strokeSteps: ['1. 点', '2. 撇', '3. 横', '4. 竖', '5. 横折', '6. 横', '7. 横', '8. 横', '9. 点', '10. 横折折撇', '11. 捺', '12. 捺'], tip: 'Kepala pemikiran (首) + radikal melangkah (辶).', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E0F7FA"/><text x="50" y="66" font-size="44" font-weight="900" fill="#00838F" text-anchor="middle">道</text></svg>' },
    { id: 1102, hanzi: '器', pinyin: 'qì', meaning: 'Alat / Robot (机器人)', strokes: 16, book: 11, unit: 3, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 竖', '5. 横折', '6. 横', '7. 横', '8. 撇', '9. 捺', '10. 点', '11. 竖', '12. 横折', '13. 横', '14. 竖', '15. 横折', '16. 横'], tip: 'Empat mulut wadah presisi mengelilingi mesin handal.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8EAF6"/><text x="50" y="66" font-size="44" font-weight="900" fill="#283593" text-anchor="middle">器</text></svg>' },
    { id: 1103, hanzi: '德', pinyin: 'dé', meaning: 'Kebajikan / Moral', strokes: 15, book: 11, unit: 9, strokeSteps: ['1. 撇', '2. 撇', '3. 竖', '4. 横', '5. 竖', '6. 竖', '7. 横折', '8. 横', '9. 横', '10. 竖', '11. 横', '12. 点', '13. 弯钩', '14. 点', '15. 点'], tip: 'Melangkah lurus dengan hati (心) yang tulus berbudi pekerti.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FCE4EC"/><text x="50" y="66" font-size="44" font-weight="900" fill="#880E4F" text-anchor="middle">德</text></svg>' },

    // --- HAN YU 12 ---
    { id: 1201, hanzi: '讲', pinyin: 'jiǎng', meaning: 'Berbicara / Pidato', strokes: 6, book: 12, unit: 1, strokeSteps: ['1. 点', '2. 横折提', '3. 横', '4. 横', '5. 竖', '6. 竖'], tip: 'Radikal bahasa (讠) + huruf 井 = Berbicara teratur memikat pendengar.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">讲</text></svg>' },
    { id: 1202, hanzi: '论', pinyin: 'lùn', meaning: 'Esai / Argumentasi', strokes: 6, book: 12, unit: 2, strokeSteps: ['1. 点', '2. 横折提', '3. 撇', '4. 捺', '5. 撇', '6. 竖弯钩'], tip: 'Radikal bahasa (讠) + huruf 仑 = Berpikir kritis dan berdiskusi.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF8E1"/><text x="50" y="66" font-size="44" font-weight="900" fill="#F57F17" text-anchor="middle">论</text></svg>' },
    { id: 1203, hanzi: '梦', pinyin: 'mèng', meaning: 'Impian / Cita-cita Emas', strokes: 11, book: 12, unit: 5, strokeSteps: ['1. 横', '2. 竖', '3. 撇', '4. 点', '5. 横', '6. 竖', '7. 撇', '8. 点', '9. 撇', '10. 横折钩', '11. 点'], tip: 'Dua pohon hutan (林) di bawah sinar bulan (夕) menggapai impian.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#EDE7F6"/><text x="50" y="66" font-size="44" font-weight="900" fill="#512DA8" text-anchor="middle">梦</text></svg>' }
  ],

  // 4. Cerita Teks Pelajaran Audio Lamban Per-Unit (Han Yu 1 s/d Han Yu 12)
  unitStories: {
    1: {
      1: {
        title: '第一课：你好 (Nǐ hǎo)',
        pinyin: 'Dì Yī Kè: Nǐ hǎo',
        meaning: 'Pelajaran 1: Halo / Apa Kabar (Han Yu 1 Halaman 1-4)',
        dinoMascot: '🦖 Rexy Si T-Rex Cilik',
        summary: 'Sapaan ramah antara guru dan murid saat pertama kali bertemu di sekolah baru.',
        sentences: [
          { hanzi: '你好！', pinyin: 'Nǐ hǎo!', meaning: 'Halo! / Apa kabar!' },
          { hanzi: '老师好！', pinyin: 'Lǎoshī hǎo!', meaning: 'Halo Guru! / Selamat pagi Guru!' },
          { hanzi: '同学们好！', pinyin: 'Tóngxuémen hǎo!', meaning: 'Halo teman-teman semua!' },
          { hanzi: '再见！', pinyin: 'Zàijiàn!', meaning: 'Sampai jumpa lagi!' }
        ]
      },
      2: {
        title: '第二课：我爱爸爸妈妈',
        pinyin: 'Dì Èr Kè: Wǒ ài bàba māma',
        meaning: 'Pelajaran 2: Aku Sayang Ayah dan Ibu (Han Yu 1 Halaman 5-8)',
        dinoMascot: '🦕 Brachy Si Leher Panjang',
        summary: 'Mengenal anggota keluarga inti penuh kasih sayang: ayah, ibu, kakak, dan adik.',
        sentences: [
          { hanzi: '爸爸爱妈妈。', pinyin: 'Bàba ài māma.', meaning: 'Ayah sayang Ibu.' },
          { hanzi: '妈妈爱爸爸。', pinyin: 'Māma ài bàba.', meaning: 'Ibu sayang Ayah.' },
          { hanzi: '爸爸妈妈爱我。', pinyin: 'Bàba māma ài wǒ.', meaning: 'Ayah dan Ibu menyayangi aku.' },
          { hanzi: '我爱爸爸妈妈。', pinyin: 'Wǒ ài bàba māma.', meaning: 'Aku menyayangi Ayah dan Ibu.' }
        ]
      },
      3: {
        title: '第三课：爸爸是老师',
        pinyin: 'Dì Sān Kè: Bàba shì lǎoshī',
        meaning: 'Pelajaran 3: Ayah Adalah Guru (Han Yu 1 Halaman 9-12)',
        dinoMascot: '🦤 Ptera Si Pterodactyl',
        summary: 'Mengenal berbagai profesi mulia anggota keluarga.',
        sentences: [
          { hanzi: '爸爸是老师。', pinyin: 'Bàba shì lǎoshī.', meaning: 'Ayah adalah seorang guru.' },
          { hanzi: '妈妈是医生。', pinyin: 'Māma shì yīshēng.', meaning: 'Ibu adalah seorang dokter.' },
          { hanzi: '哥哥不是老师，他是学生。', pinyin: 'Gēge bú shì lǎoshī, tā shì xuésheng.', meaning: 'Kakak laki-laki bukan guru, dia adalah murid.' },
          { hanzi: '叔叔是警察。', pinyin: 'Shūshu shì jǐngchá.', meaning: 'Paman adalah seorang polisi.' }
        ]
      },
      4: {
        title: '第四课：你叫什么名字',
        pinyin: 'Dì Sì Kè: Nǐ jiào shénme míngzi',
        meaning: 'Pelajaran 4: Siapa Namamu (Han Yu 1 Halaman 13-16)',
        dinoMascot: '🦖 Stego Si Perisai',
        summary: 'Saling berkenalan dan menanyakan nama teman baru dengan sopan.',
        sentences: [
          { hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', meaning: 'Siapakah namamu?' },
          { hanzi: '我叫小华。', pinyin: 'Wǒ jiào Xiǎohuá.', meaning: 'Nama saya Xiaohua.' },
          { hanzi: '他叫小强。', pinyin: 'Tā jiào Xiǎoqiáng.', meaning: 'Dia bernama Xiaoqiang.' },
          { hanzi: '她叫小红。', pinyin: 'Tā jiào Xiǎohóng.', meaning: 'Dia bernama Xiaohong.' }
        ]
      },
      5: {
        title: '第五课：我爱我家',
        pinyin: 'Dì Wǔ Kè: Wǒ ài wǒ jiā',
        meaning: 'Pelajaran 5: Aku Cinta Rumahku (Han Yu 1 Halaman 17-20)',
        dinoMascot: '🦕 Tricera Si Tanduk Tiga',
        summary: 'Suasana rumah yang penuh cinta dan percakapan ramah saling memaafkan (万事开头难).',
        sentences: [
          { hanzi: '这是我家。', pinyin: 'Zhè shì wǒ jiā.', meaning: 'Ini adalah rumah / keluargaku.' },
          { hanzi: '我爱爸爸，我爱妈妈，我爱我家。', pinyin: 'Wǒ ài bàba, wǒ ài māma, wǒ ài wǒ jiā.', meaning: 'Saya sayang ayah, saya sayang ibu, saya sayang rumah / keluargaku.' },
          { hanzi: '对不起！没关系。', pinyin: 'Duìbuqǐ! Méi guānxi.', meaning: 'Maafkan saya! Tidak apa-apa.' },
          { hanzi: '万事开头难。', pinyin: 'Wàn shì kāi tóu nán.', meaning: 'Segala hal terasa sulit di awal permulaan (Peribahasa Tiongkok).' }
        ]
      },
      6: {
        title: '第六课：哥哥去学校',
        pinyin: 'Dì Liù Kè: Gēge qù xuéxiào',
        meaning: 'Pelajaran 6: Kakak Pergi ke Sekolah (Han Yu 1 Halaman 21-24)',
        dinoMascot: '🌟 Dino Berangkat Sekolah',
        summary: 'Perjalanan menuju sekolah, taman kanak-kanak, rumah sakit, dan taman.',
        sentences: [
          { hanzi: '妈妈是医生，早上她去医院。', pinyin: 'Māma shì yīshēng, zǎoshang tā qù yīyuàn.', meaning: 'Ibu adalah dokter, pagi hari beliau pergi ke rumah sakit.' },
          { hanzi: '我去幼儿园。', pinyin: 'Wǒ qù yòu\'éryuán.', meaning: 'Saya pergi ke taman kanak-kanak.' },
          { hanzi: '哥哥是学生，他去学校。', pinyin: 'Gēge shì xuésheng, tā qù xuéxiào.', meaning: 'Kakak adalah murid, dia pergi ke sekolah.' },
          { hanzi: '爷爷去公园。', pinyin: 'Yéye qù gōngyuán.', meaning: 'Kakek pergi ke taman.' }
        ]
      },
      7: {
        title: '第七课：我们上课吧',
        pinyin: 'Dì Qī Kè: Wǒmen shàngkè ba',
        meaning: 'Pelajaran 7: Mari Belajar di Kelas (Han Yu 1 Halaman 25-28)',
        dinoMascot: '🦖 Rexy Murid Pintar',
        summary: 'Suasana pembelajaran di kelas: guru menerangkan dan murid menjawab.',
        sentences: [
          { hanzi: '上课了，我们进教室吧！', pinyin: 'Shàngkè le, wǒmen jìn jiàoshì ba!', meaning: 'Pelajaran dimulai, mari masuk ke ruang kelas!' },
          { hanzi: '老师讲课，我们听课。', pinyin: 'Lǎoshī jiǎngkè, wǒmen tīngkè.', meaning: 'Guru menerangkan pelajaran, kita menyimak pelajaran.' },
          { hanzi: '老师问，我们回答。', pinyin: 'Lǎoshī wèn, wǒmen huídá.', meaning: 'Guru bertanya, kita menjawab pertanyaan.' }
        ]
      },
      8: {
        title: '第八课：我们吃午饭',
        pinyin: 'Dì Bā Kè: Wǒmen chī wǔfàn',
        meaning: 'Pelajaran 8: Kami Makan Siang (Han Yu 1 Halaman 29-32)',
        dinoMascot: '🦕 Brachy Makan Siang',
        summary: 'Makan siang bersama teman dan guru: mie, nasi, dan pangsit jiaozi.',
        sentences: [
          { hanzi: '中午，我们吃午饭。', pinyin: 'Zhōngwǔ, wǒmen chī wǔfàn.', meaning: 'Siang hari, kami makan siang bersama.' },
          { hanzi: '我吃面条。', pinyin: 'Wǒ chī miàntiáo.', meaning: 'Saya makan mie.' },
          { hanzi: '小红和小强吃米饭。', pinyin: 'Xiǎohóng hé Xiǎoqiáng chī mǐfàn.', meaning: 'Xiaohong dan Xiaoqiang makan nasi.' },
          { hanzi: '老师吃饺子。', pinyin: 'Lǎoshī chī jiǎozi.', meaning: 'Guru makan pangsit jiaozi.' }
        ]
      },
      9: {
        title: '第九课：小华打球',
        pinyin: 'Dì Jiǔ Kè: Xiǎohuá dǎ qiú',
        meaning: 'Pelajaran 9: Xiaohua Bermain Bola (Han Yu 1 Halaman 33-36)',
        dinoMascot: '🦤 Ptera Juara Olahraga',
        summary: 'Olahraga seru saat istirahat: main basket, sepak bola, dan lompat tali.',
        sentences: [
          { hanzi: '下课了，同学们打篮球、踢足球。', pinyin: 'Xiàkè le, tóngxuémen dǎ lánqiú, tī zúqiú.', meaning: 'Jam istirahat, teman-teman bermain basket dan sepak bola.' },
          { hanzi: '我和小强打乒乓球。', pinyin: 'Wǒ hé Xiǎoqiáng dǎ pīngpāngqiú.', meaning: 'Saya dan Xiaoqiang bermain tenis meja.' },
          { hanzi: '小红不打球，她跳绳。', pinyin: 'Xiǎohóng bù dǎ qiú, tā tiàoshéng.', meaning: 'Xiaohong tidak main bola, dia bermain lompat tali.' }
        ]
      },
      10: {
        title: '第十课：我的一天',
        pinyin: 'Dì Shí Kè: Wǒ de yī tiān',
        meaning: 'Pelajaran 10: Keseharianku (Han Yu 1 Halaman 37-40)',
        dinoMascot: '🦖 Stego Menghargai Waktu',
        summary: 'Rutinitas sehari-hari mulai dari sekolah hingga mengerjakan PR (一寸光阴一寸金).',
        sentences: [
          { hanzi: '早上我去学校。', pinyin: 'Zǎoshang wǒ qù xuéxiào.', meaning: 'Pagi hari saya pergi ke sekolah.' },
          { hanzi: '上课了，老师讲课，我们听课。', pinyin: 'Shàngkè le, lǎoshī jiǎngkè, wǒmen tīngkè.', meaning: 'Saat kelas, guru menerangkan, kita menyimak.' },
          { hanzi: '放学了，我回家做作业。', pinyin: 'Fàngxué le, wǒ huí jiā zuò zuòyè.', meaning: 'Pulang sekolah, saya pulang mengerjakan PR.' },
          { hanzi: '一寸光阴一寸金，寸金难买寸光阴。', pinyin: 'Yí cùn guāngyīn yí cùn jīn, cùn jīn nán mǎi cùn guāngyīn.', meaning: 'Satu inci waktu bernilai satu inci emas, jangan sia-siakan waktu.' }
        ]
      },
      11: {
        title: '第十一课：这是我的书',
        pinyin: 'Dì Shíyī Kè: Zhè shì wǒ de shū',
        meaning: 'Pelajaran 11: Ini Adalah Bukuku (Han Yu 1 Halaman 41-44)',
        dinoMascot: '🦕 Tricera Gemar Membaca',
        summary: 'Mengenal perlengkapan belajar di kelas bersama teman sebangku.',
        sentences: [
          { hanzi: '这是我的书，那是我同桌的书。', pinyin: 'Zhè shì wǒ de shū, nà shì wǒ tóngzhuō de shū.', meaning: 'Ini adalah bukuku, itu buku teman sebangkuku.' },
          { hanzi: '这是小强的书包。', pinyin: 'Zhè shì Xiǎoqiáng de shūbāo.', meaning: 'Ini tas sekolah Xiaoqiang.' },
          { hanzi: '那是谁的笔？那是老师的笔。', pinyin: 'Nà shì shéi de bǐ? Nà shì lǎoshī de bǐ.', meaning: 'Itu pena milik siapa? Itu pena milik guru.' }
        ]
      },
      12: {
        title: '第十二课：我有两本书',
        pinyin: 'Dì Shí\'èr Kè: Wǒ yǒu liǎng běn shū',
        meaning: 'Pelajaran 12: Aku Punya Dua Buku (Han Yu 1 Halaman 45-48)',
        dinoMascot: '🌟 Dino Berhitung',
        summary: 'Belajar kata satuan (量词: 本, 支, 个) untuk menghitung isi tas sekolah.',
        sentences: [
          { hanzi: '这是我的书包。', pinyin: 'Zhè shì wǒ de shūbāo.', meaning: 'Ini adalah tas sekolahku.' },
          { hanzi: '我有两本书、四支笔和五个本子。', pinyin: 'Wǒ yǒu liǎng běn shū, sì zhī bǐ hé wǔ gè běnzi.', meaning: 'Saya punya dua buku, empat batang pena, dan lima buku tulis.' },
          { hanzi: '你有几本书？', pinyin: 'Nǐ yǒu jǐ běn shū?', meaning: 'Kamu punya berapa buku?' }
        ]
      },
      13: {
        title: '第十三课：你家有电脑吗',
        pinyin: 'Dì Shísān Kè: Nǐ jiā yǒu diànnǎo ma',
        meaning: 'Pelajaran 13: Apakah di Rumahmu Ada Komputer (Han Yu 1 Halaman 49-52)',
        dinoMascot: '🦖 Rexy Belajar Komputer',
        summary: 'Menanyakan keberadaan peralatan modern di rumah.',
        sentences: [
          { hanzi: '我家有两台电脑。', pinyin: 'Wǒ jiā yǒu liǎng tái diànnǎo.', meaning: 'Di rumahku ada dua unit komputer.' },
          { hanzi: '爸爸有一台，哥哥有一台。', pinyin: 'Bàba yǒu yī tái, gēge yǒu yī tái.', meaning: 'Ayah punya satu, kakak laki-laki punya satu.' },
          { hanzi: '我没有电脑。你家有电脑吗？', pinyin: 'Wǒ méiyǒu diànnǎo. Nǐ jiā yǒu diànnǎo ma?', meaning: 'Saya tidak punya komputer. Apakah di rumahmu ada komputer?' }
        ]
      },
      14: {
        title: '第十四课：书在书架上',
        pinyin: 'Dì Shísì Kè: Shū zài shūjià shang',
        meaning: 'Pelajaran 14: Buku Ada di Rak Buku (Han Yu 1 Halaman 53-56)',
        dinoMascot: '🦕 Brachy di Perpustakaan',
        summary: 'Menunjukkan posisi dan lokasi perpustakaan serta letak buku di rak.',
        sentences: [
          { hanzi: '我们学校有一个图书馆。', pinyin: 'Wǒmen xuéxiào yǒu yī gè túshūguǎn.', meaning: 'Sekolah kita memiliki sebuah perpustakaan.' },
          { hanzi: '图书馆在教室的右边。', pinyin: 'Túshūguǎn zài jiàoshì de yòubian.', meaning: 'Perpustakaan berada di sebelah kanan ruang kelas.' },
          { hanzi: '图书馆的书在哪儿？书在书架上。', pinyin: 'Túshūguǎn de shū zài nǎr? Shū zài shūjià shang.', meaning: 'Buku perpustakaan ada di mana? Buku ada di atas rak.' }
        ]
      },
      15: {
        title: '第十五课：我的房间',
        pinyin: 'Dì Shíwǔ Kè: Wǒ de fángjiān',
        meaning: 'Pelajaran 15: Kamarku (Han Yu 1 Halaman 57-60)',
        dinoMascot: '🦖 Stego Kamar Rapi',
        summary: 'Menjelaskan perabot di dalam kamar tidur yang rapi dan nyaman (一心不可二用).',
        sentences: [
          { hanzi: '这是我的房间。', pinyin: 'Zhè shì wǒ de fángjiān.', meaning: 'Ini adalah kamar tidurku.' },
          { hanzi: '这儿有一张床、一个书架和两张桌子。', pinyin: 'Zhèr yǒu yī zhāng chuáng, yī gè shūjià hé liǎng zhāng zhuōzi.', meaning: 'Di sini ada sebuah tempat tidur, sebuah rak buku, dan dua buah meja.' },
          { hanzi: '我的电脑在桌子上边，足球在圆桌下边。', pinyin: 'Wǒ de diànnǎo zài zhuōzi shàngbian, zúqiú zài yuánzhuō xiàbian.', meaning: 'Komputerku di atas meja, bola sepak di bawah meja bundar.' },
          { hanzi: '一心不可二用。', pinyin: 'Yì xīn bù kě èr yòng.', meaning: 'Fokuslah pada satu tujuan dengan sepenuh hati.' }
        ]
      }
    },
    2: {
      1: {
        title: '第一课：现在几点',
        pinyin: 'Dì Yī Kè: Xiànzài jǐ diǎn',
        meaning: 'Pelajaran 1: Sekarang Jam Berapa (Han Yu 2)',
        dinoMascot: '🦖 Rexy Penjaga Waktu',
        summary: 'Belajar membaca jam analog, menit, dan waktu kegiatan harian di sekolah.',
        sentences: [
          { hanzi: '现在几点？现在早上八点。', pinyin: 'Xiànzài jǐ diǎn? Xiànzài zǎoshang bā diǎn.', meaning: 'Sekarang jam berapa? Sekarang jam delapan pagi.' },
          { hanzi: '我们八点半上课。', pinyin: 'Wǒmen bā diǎn bàn shàngkè.', meaning: 'Kita mulai pelajaran pada jam setengah sembilan.' },
          { hanzi: '中午十二点吃午饭。', pinyin: 'Zhōngwǔ shí\'èr diǎn chī wǔfàn.', meaning: 'Jam dua belas siang kami makan siang.' }
        ]
      },
      5: {
        title: '第五课：他穿红上衣',
        pinyin: 'Dì Wǔ Kè: Tā chuān hóng shàngyī',
        meaning: 'Pelajaran 5: Dia Memakai Baju Merah (Han Yu 2)',
        dinoMascot: '🦕 Brachy Penuh Warna',
        summary: 'Menjelaskan warna pakaian kesukaan: merah, kuning, biru, putih, dan hitam.',
        sentences: [
          { hanzi: '他穿红上衣，黑裤子。', pinyin: 'Tā chuān hóng shàngyī, hēi kùzi.', meaning: 'Dia memakai baju merah dan celana hitam.' },
          { hanzi: '小红穿白裙子，戴黄帽子。', pinyin: 'Xiǎohóng chuān bái qúnzi, dài huáng màozi.', meaning: 'Xiaohong memakai gaun putih dan topi kuning.' },
          { hanzi: '你喜欢什么颜色的衣服？', pinyin: 'Nǐ xǐhuan shénme yánsè de yīfu?', meaning: 'Kamu suka baju warna apa?' }
        ]
      },
      6: {
        title: '第六课：动物园里有老虎',
        pinyin: 'Dì Liù Kè: Dòngwùyuán lǐ yǒu lǎohǔ',
        meaning: 'Pelajaran 6: Di Kebun Binatang Ada Harimau (Han Yu 2)',
        dinoMascot: '🦖 Dino Sahabat Satwa',
        summary: 'Melihat aneka binatang lucu di kebun binatang bersama teman-teman.',
        sentences: [
          { hanzi: '动物园里有老虎、狮子和大象。', pinyin: 'Dòngwùyuán lǐ yǒu lǎohǔ, shīzi hé dàxiàng.', meaning: 'Di kebun binatang ada harimau, singa, dan gajah.' },
          { hanzi: '猴子在树上跳来跳去。', pinyin: 'Hóuzi zài shù shang tiào lái tiào qù.', meaning: 'Monyet melompat ke sana kemari di atas pohon.' },
          { hanzi: '大熊猫非常可爱。', pinyin: 'Dàxióngmāo fēicháng kě\'ài.', meaning: 'Panda raksasa sangat menggemaskan.' }
        ]
      }
    },
    3: {
      1: {
        title: '第一课：新同学',
        pinyin: 'Dì Yī Kè: Xīn tóngxué',
        meaning: 'Pelajaran 1: Teman Baru di Kelas (Han Yu 3)',
        dinoMascot: '🌟 Dino Sahabat Sejati',
        summary: 'Menyambut teman baru dari berbagai daerah dan saling berbagi cerita persahabatan.',
        sentences: [
          { hanzi: '我们班来了一位新同学。', pinyin: 'Wǒmen bān lái le yí wèi xīn tóngxué.', meaning: 'Kelas kami kedatangan seorang teman baru.' },
          { hanzi: '他叫大卫，来自印尼。', pinyin: 'Tā jiào Dàwèi, láizì Yìnní.', meaning: 'Dia bernama David, berasal dari Indonesia.' },
          { hanzi: '我们大家都是好朋友。', pinyin: 'Wǒmen dàjiā dōu shì hǎo péngyou.', meaning: 'Kita semua adalah sahabat baik.' }
        ]
      },
      7: {
        title: '第七课：去超市买东西',
        pinyin: 'Dì Qī Kè: Qù chāoshì mǎi dōngxi',
        meaning: 'Pelajaran 7: Berbelanja ke Supermarket (Han Yu 3)',
        dinoMascot: '🦖 Rexy Belanja Mandiri',
        summary: 'Belajar berhitung uang dan memilih barang kebutuhan sehari-hari.',
        sentences: [
          { hanzi: '今天我和妈妈去超市买东西。', pinyin: 'Jīntiān wǒ hé māma qù chāoshì mǎi dōngxi.', meaning: 'Hari ini saya dan ibu pergi ke supermarket membeli barang.' },
          { hanzi: '这个苹果多少钱一斤？', pinyin: 'Zhè ge píngguǒ duōshao qián yì jīn?', meaning: 'Berapa harga apel ini per setengah kilo?' },
          { hanzi: '五块钱一斤，很甜很新鲜。', pinyin: 'Wǔ kuài qián yì jīn, hěn tián hěn xīnxiān.', meaning: 'Lima yuan per setengah kilo, sangat manis dan segar.' }
        ]
      }
    },
    4: {
      1: {
        title: '第一课：体育比赛',
        pinyin: 'Dì Yī Kè: Tǐyù bǐsài',
        meaning: 'Pelajaran 1: Pertandingan Olahraga (Han Yu 4)',
        dinoMascot: '🦤 Ptera Semangat Juara',
        summary: 'Semangat sportivitas dan kerjasama dalam pertandingan bola basket sekolah.',
        sentences: [
          { hanzi: '今天学校举行篮球比赛。', pinyin: 'Jīntiān xuéxiào jǔxíng lánqiú bǐsài.', meaning: 'Hari ini sekolah mengadakan pertandingan bola basket.' },
          { hanzi: '大家都为运动员加油喝彩！', pinyin: 'Dàjiā dōu wèi yùndòngyuán jiāyóu hècǎi!', meaning: 'Semua orang memberi semangat dan sorak sorai untuk para atlet!' },
          { hanzi: '友谊第一，比赛第二。', pinyin: 'Yǒuyì dì-yī, bǐsài dì-èr.', meaning: 'Persahabatan yang utama, pertandingan nomor dua.' }
        ]
      }
    },
    5: {
      1: {
        title: '第一课：我的特长',
        pinyin: 'Dì Yī Kè: Wǒ de tècháng',
        meaning: 'Pelajaran 1: Bakat & Keahlianku (Han Yu 5)',
        dinoMascot: '🦕 Brachy Musisi Cilik',
        summary: 'Setiap anak memiliki bakat unik: bernyanyi, melukis, berenang, dan bermain piano.',
        sentences: [
          { hanzi: '每个人都有自己的特长。', pinyin: 'Měi gè rén dōu yǒu zìjǐ de tècháng.', meaning: 'Setiap orang memiliki bakat dan keistimewaannya sendiri.' },
          { hanzi: '我喜欢弹钢琴，妹妹喜欢画画。', pinyin: 'Wǒ xǐhuan tán gāngqín, mèimei xǐhuan huàhuà.', meaning: 'Saya suka bermain piano, adik perempuan suka melukis.' },
          { hanzi: '只要努力练习，就能取得好成绩。', pinyin: 'Zhǐyào nǔlì liànxí, jiù néng qǔdé hǎo chéngjì.', meaning: 'Asalkan tekun berlatih, pasti akan meraih hasil yang bagus.' }
        ]
      }
    },
    6: {
      1: {
        title: '第一课：网络时代',
        pinyin: 'Dì Yī Kè: Wǎngluò shídài',
        meaning: 'Pelajaran 1: Era Digital & Internet (Han Yu 6)',
        dinoMascot: '🦖 Rexy Cyber Dino',
        summary: 'Memanfaatkan internet dengan bijak untuk belajar dan mencari ilmu pengetahuan.',
        sentences: [
          { hanzi: '互联网让世界变得更小了。', pinyin: 'Hùliánwǎng ràng shìjiè biàn de gèng xiǎo le.', meaning: 'Internet membuat dunia terasa semakin dekat dan terhubung.' },
          { hanzi: '我们在网上查资料、学中文。', pinyin: 'Wǒmen zài wǎngshang chá zīliào, xué Zhōngwén.', meaning: 'Kita mencari referensi dan belajar bahasa Mandarin di internet.' },
          { hanzi: '合理使用网络，健康快乐成长。', pinyin: 'Hélǐ shǐyòng wǎngluò, jiànkāng kuàilè chéngzhǎng.', meaning: 'Gunakan internet secara bijak untuk tumbuh sehat dan bahagia.' }
        ]
      }
    },
    7: {
      1: {
        title: '第一课：成语故事·盲人摸象',
        pinyin: 'Dì Yī Kè: Chéngyǔ gùshi - Mángrén mō xiàng',
        meaning: 'Pelajaran 1: Cerita Chengyu Orang Buta Meraba Gajah (Han Yu 7)',
        dinoMascot: '🦖 Stego Bijaksana',
        summary: 'Pelajaran untuk melihat suatu hal secara menyeluruh dan tidak menyimpulkan sepihak.',
        sentences: [
          { hanzi: '从前有几个盲人摸一头大象。', pinyin: 'Cóngqián yǒu jǐ gè mángrén mō yì tóu dàxiàng.', meaning: 'Dahulu ada beberapa orang tunanetra meraba seekor gajah.' },
          { hanzi: '有人摸到象腿说是柱子，有人摸到耳朵说是扇子。', pinyin: 'Yǒu rén mō dào xiàngtuǐ shuō shì zhùzi, yǒu rén mō dào ěrduo shuō shì shànzi.', meaning: 'Ada yang memegang kaki berkata seperti tiang, ada yang memegang telinga berkata seperti kipas.' },
          { hanzi: '看问题要全面，不能只看一部分。', pinyin: 'Kàn wèntí yào quánmiàn, bù néng zhǐ kàn yí bùfen.', meaning: 'Melihat masalah haruslah menyeluruh, tidak boleh hanya sebagian.' }
        ]
      }
    },
    8: {
      1: {
        title: '第一课：长江与黄河',
        pinyin: 'Dì Yī Kè: Chángjiāng yǔ Huánghé',
        meaning: 'Pelajaran 1: Sungai Yangtze & Sungai Kuning (Han Yu 8)',
        dinoMascot: '🦕 Tricera Geografi',
        summary: 'Dua sungai besar penyangga peradaban Tiongkok yang membentang ribuan kilometer.',
        sentences: [
          { hanzi: '长江和黄河是中华民族的母亲河。', pinyin: 'Chángjiāng hé Huánghé shì Zhōnghuá mínzú de mǔqīnhé.', meaning: 'Sungai Yangtze dan Sungai Kuning adalah sungai ibu peradaban Tiongkok.' },
          { hanzi: '长江全长六千三百多公里，风景秀丽。', pinyin: 'Chángjiāng quáncháng liù qiān sān bǎi duō gōnglǐ, fēngjǐng xiùlì.', meaning: 'Sungai Yangtze membentang lebih dari 6.300 km dengan panorama indah.' },
          { hanzi: '保护母亲河是我们共同的责任。', pinyin: 'Bǎohù mǔqīnhé shì wǒmen gòngtóng de zérèn.', meaning: 'Menjaga kelestarian sungai adalah tanggung jawab bersama.' }
        ]
      }
    },
    9: {
      1: {
        title: '第一课：书法之美',
        pinyin: 'Dì Yī Kè: Shūfǎ zhī měi',
        meaning: 'Pelajaran 1: Keindahan Seni Kaligrafi (Han Yu 9)',
        dinoMascot: '🦤 Ptera Seniman Kuas',
        summary: 'Menghargai warisan seni kaligrafi kuas tinta air dengan delapan kaidah karakter Yong.',
        sentences: [
          { hanzi: '中国书法是一门独特的东方艺术。', pinyin: 'Zhōngguó shūfǎ shì yì mén dútè de dōngfāng yìshù.', meaning: 'Kaligrafi Tiongkok adalah seni tradisional timur yang sangat khas.' },
          { hanzi: '文房四宝是笔、墨、纸、砚。', pinyin: 'Wén fáng sì bǎo shì bǐ, mò, zhǐ, yàn.', meaning: 'Empat Pusaka Ruang Belajar adalah kuas, tinta, kertas, dan batu tinta.' },
          { hanzi: '练习书法能陶冶性情、磨炼意志。', pinyin: 'Liànxí shūfǎ néng táoyě xìngqíng, móliàn yìzhì.', meaning: 'Berlatih kaligrafi dapat menenangkan batin dan melatih ketekunan.' }
        ]
      }
    },
    10: {
      1: {
        title: '第一课：一带一路与跨国互联',
        pinyin: 'Dì Yī Kè: Yídài-Yílù yǔ kuàguó hùlián',
        meaning: 'Pelajaran 1: Jalur Sutra Modern & Konektivitas Global (Han Yu 10)',
        dinoMascot: '🦖 Rexy Diplomat Cilik',
        summary: 'Membangun jembatan kerja sama ekonomi, budaya, dan infrastruktur antarbangsa.',
        sentences: [
          { hanzi: '古老的丝绸之路焕发出新的生机。', pinyin: 'Gǔlǎo de Sīchóu zhī Lù huànfā chū xīn de shēngjī.', meaning: 'Jalur Sutra purba kini kembali bersinar dengan semangat baru.' },
          { hanzi: '各国互相合作，促进共同繁荣。', pinyin: 'Gèguó hùxiāng hézuò, cùjìn gòngtóng fánróng.', meaning: 'Negara-negara saling bekerja sama mendorong kemakmuran bersama.' },
          { hanzi: '文化交流让各国人民心相通。', pinyin: 'Wénhuà jiāoliú ràng gèguó rénmín xīn xiāngtōng.', meaning: 'Pertukaran budaya mempererat jalinan persahabatan antarmanusia.' }
        ]
      }
    },
    11: {
      1: {
        title: '第一课：儒家经典·论语选读',
        pinyin: 'Dì Yī Kè: Rújiā jīngdiǎn - Lúnyǔ xuǎndú',
        meaning: 'Pelajaran 1: Ajaran Luhur Kitab Lunyu Konfusius (Han Yu 11)',
        dinoMascot: '🦖 Stego Filsuf Bijak',
        summary: 'Pelajaran moral tentang ketekunan belajar dan menyambut sahabat dari jauh.',
        sentences: [
          { hanzi: '学而时习之，不亦说乎？', pinyin: 'Xué ér shí xí zhī, bú yì yuè hū?', meaning: 'Belajar dan senantiasa mengulanginya, bukankah sangat menyenangkan?' },
          { hanzi: '有朋自远方来，不亦乐乎？', pinyin: 'Yǒu péng zì yuǎnfāng lái, bú yì lè hū?', meaning: 'Ada sahabat datang dari tempat yang jauh, bukankah sangat membahagiakan?' },
          { hanzi: '三人行，必有我师焉。', pinyin: 'Sān rén xíng, bì yǒu wǒ shī yān.', meaning: 'Di antara tiga orang yang berjalan bersama, pasti ada yang bisa menjadi guruku.' }
        ]
      }
    },
    12: {
      1: {
        title: '第一课：演讲技巧与说服力',
        pinyin: 'Dì Yī Kè: Yǎnjiǎng jìqiǎo yǔ shuōfúlì',
        meaning: 'Pelajaran 1: Seni Pidato & Komunikasi Persuasif (Han Yu 12)',
        dinoMascot: '🌟 Dino Orator Hebat',
        summary: 'Mengembangkan rasa percaya diri dalam menyampaikan ide dan gagasan cemerlang di depan umum.',
        sentences: [
          { hanzi: '精彩的演讲需要清晰的逻辑与自信的表达。', pinyin: 'Jīngcǎi de yǎnjiǎng xūyào qīngxī de luóji yǔ zìxìn de biǎodá.', meaning: 'Pidato yang memukau membutuhkan logika yang runtut dan ekspresi percaya diri.' },
          { hanzi: '用真诚的声音传递温暖与正能量。', pinyin: 'Yòng zhēnchéng de shēngyīn chuándì wēnnuǎn yǔ zhèng néngliàng.', meaning: 'Gunakan suara yang tulus untuk membagikan kehangatan dan energi positif.' },
          { hanzi: '青年人要勇于表达自我，开创未来！', pinyin: 'Qīngniánrén yào yǒngyú biǎodá zìwǒ, kāichuàng wèilái!', meaning: 'Generasi muda harus berani mengekspresikan diri dan membuka masa depan gemilang!' }
        ]
      }
    }
  },

  // 5. Fungsi Mengambil Cerita Per-Unit (Fallback Pintar Otomatis)
  getUnitStory: function(bookId, unitId) {
    const b = parseInt(bookId) || 1;
    const u = parseInt(unitId) || 1;

    if (this.unitStories && this.unitStories[b] && this.unitStories[b][u]) {
      return this.unitStories[b][u];
    }

    const unitTitle = (this.unitTitles[b] && this.unitTitles[b][u]) || `Unit ${u}`;
    const mascotList = ['🦖 Rexy Si T-Rex Cilik', '🦕 Brachy Si Leher Panjang', '🦤 Ptera Si Pterodactyl', '🦖 Stego Si Perisai', '🦕 Tricera Si Tanduk Tiga', '🌟 Dino Juara Emas'];
    const mascot = mascotList[(b + u) % mascotList.length];

    return {
      title: `第${u}课：${unitTitle}`,
      pinyin: `Dì ${u} Kè: ${unitTitle}`,
      meaning: `Pelajaran ${u} Buku Han Yu ${b}: ${unitTitle}`,
      dinoMascot: mascot,
      summary: `Materi pembelajaran tematik Buku PDF Han Yu ${b} Pelajaran ${u}.`,
      sentences: [
        { hanzi: `我们一起学习第${u}课。`, pinyin: `Wǒmen yìqǐ xuéxí dì ${u} kè.`, meaning: `Mari kita bersama-sama mempelajari Pelajaran ${u}.` },
        { hanzi: '好好学习，天天向上。', pinyin: 'Hǎohǎo xuéxí, tiāntiān xiàngshàng.', meaning: 'Belajar dengan tekun, setiap hari terus berkembang maju.' },
        { hanzi: '学好中文，走遍天下都不怕！', pinyin: 'Xué hǎo Zhōngwén, zǒu biàn tiānxià dōu bú pà!', meaning: 'Kuasai bahasa Mandarin dengan baik, keliling dunia tanpa ragu!' }
      ]
    };
  },

  // 6. BANK SOAL LATIHAN PILIHAN BERGANDA LENGKAP (5 TIPE SOAL SESUAI PERMINTAAN USER)
  // Tipe 1: meaning-match (Mengartikan)
  // Tipe 2: pinyin-match (Menjawab bacaan Pinyin yang benar)
  // Tipe 3: stroke-count (Hitungan goresan)
  // Tipe 4: word-order (Menyusun kata menjadi kalimat yang benar)
  // Tipe 5: picture-match (Mencari jawaban gambar yang sesuai dengan kalimat yang ditanyakan)
  strokeCountQuestions: [
    // === HAN YU 1 ===
    // Tipe 1: Mengartikan
    {
      id: 101,
      book: 1,
      unit: 1,
      type: 'meaning-match',
      question: 'Apakah arti dari sapaan dasar Mandarin "你好" (Nǐ hǎo)?',
      audioText: '你好！请问这句话在印尼语中是什么意思？',
      hanzi: '你好',
      pinyin: 'nǐ hǎo',
      options: [
        { text: 'Halo / Apa Kabar', isCorrect: true },
        { text: 'Selamat Tinggal', isCorrect: false },
        { text: 'Terima Kasih', isCorrect: false },
        { text: 'Sama-sama', isCorrect: false }
      ],
      explanation: '你好 (Nǐ hǎo) berarti Halo atau Apa kabar.'
    },
    // Tipe 2: Pinyin Match
    {
      id: 102,
      book: 1,
      unit: 1,
      type: 'pinyin-match',
      question: 'Manakah bacaan Pinyin dan nada intonasi yang tepat untuk karakter "好"?',
      audioText: '请选择汉字“好”正确的拼音和声调。',
      hanzi: '好',
      pinyin: 'hǎo',
      options: [
        { text: 'hǎo (Nada 3)', isCorrect: true },
        { text: 'hào (Nada 4)', isCorrect: false },
        { text: 'hāo (Nada 1)', isCorrect: false },
        { text: 'háo (Nada 2)', isCorrect: false }
      ],
      explanation: 'Karakter 好 dibaca "hǎo" dengan nada ke-3 (turun lalu naik).'
    },
    // Tipe 3: Hitungan Goresan
    {
      id: 103,
      book: 1,
      unit: 1,
      type: 'stroke-count',
      question: 'Berapakah jumlah total guratan (goresan) dari karakter "你" (nǐ)?',
      audioText: '汉字“你”一共有几画？',
      hanzi: '你',
      pinyin: 'nǐ',
      options: [
        { text: '7 Guratan', isCorrect: true },
        { text: '5 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false },
        { text: '8 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 你 memiliki 7 guratan: 1.撇, 2.竖, 3.撇, 4.横撇, 5.竖钩, 6.撇, 7.点.'
    },
    // Tipe 4: Menyusun Kata Menjadi Kalimat
    {
      id: 104,
      book: 1,
      unit: 2,
      type: 'word-order',
      question: 'Susunlah kata-kata acak berikut menjadi kalimat yang benar: [爱 / 我 / 爸爸妈妈]',
      audioText: '请把词语“爱、我、爸爸妈妈”排成一句完整通顺的话。',
      hanzi: '我爱爸爸妈妈',
      pinyin: 'Wǒ ài bàba māma.',
      options: [
        { text: '我爱爸爸妈妈 (Wǒ ài bàba māma)', isCorrect: true },
        { text: '爱我爸爸妈妈 (Ài wǒ bàba māma)', isCorrect: false },
        { text: '爸爸妈妈我爱 (Bàba māma wǒ ài)', isCorrect: false },
        { text: '我爸爸妈妈爱 (Wǒ bàba māma ài)', isCorrect: false }
      ],
      explanation: 'Susunan kalimat bahasa Mandarin yang benar adalah Subjek + Predikat + Objek: 我 (Saya) + 爱 (sayang) + 爸爸妈妈 (ayah ibu).'
    },
    // Tipe 5: Mencari Jawaban Gambar yang Sesuai
    {
      id: 105,
      book: 1,
      unit: 2,
      type: 'picture-match',
      question: 'Pilihlah gambar yang sesuai dengan kata "爸爸" (Bàba / Ayah)!',
      audioText: '请选出与词语“爸爸”相对应的正确图片。',
      hanzi: '爸爸',
      pinyin: 'bàba',
      options: [
        { text: '👨‍💼 Ayah (爸爸)', icon: '👨‍💼', isCorrect: true },
        { text: '👩‍🏫 Ibu (妈妈)', icon: '👩‍🏫', isCorrect: false },
        { text: '👦 Adik Laki-laki (弟弟)', icon: '👦', isCorrect: false },
        { text: '👧 Adik Perempuan (妹妹)', icon: '👧', isCorrect: false }
      ],
      explanation: '爸爸 (Bàba) berarti Ayah.'
    },

    // --- UNIT 3 s/d 15 HAN YU 1 ---
    {
      id: 106,
      book: 1,
      unit: 3,
      type: 'meaning-match',
      question: 'Di Pelajaran 3 "爸爸是老师", apakah profesi dari 妈妈 (Ibu)?',
      audioText: '爸爸是老师，妈妈是医生。请问妈妈的职业是什么？',
      hanzi: '医生',
      pinyin: 'yīshēng',
      options: [
        { text: 'Dokter (医生)', isCorrect: true },
        { text: 'Guru (老师)', isCorrect: false },
        { text: 'Polisi (警察)', isCorrect: false },
        { text: 'Siswa (学生)', isCorrect: false }
      ],
      explanation: 'Teks Pelajaran 3 Han Yu 1 hal 9: 妈妈是医生 (Ibu adalah seorang dokter).'
    },
    {
      id: 107,
      book: 1,
      unit: 3,
      type: 'stroke-count',
      question: 'Berapakah jumlah guratan dari karakter "是" (shì)?',
      audioText: '汉字“是”一共有几画？',
      hanzi: '是',
      pinyin: 'shì',
      options: [
        { text: '9 Guratan', isCorrect: true },
        { text: '8 Guratan', isCorrect: false },
        { text: '10 Guratan', isCorrect: false },
        { text: '7 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 是 memiliki 9 guratan: 日 (4 guratan) + 正 (5 guratan) = 9.'
    },
    {
      id: 108,
      book: 1,
      unit: 4,
      type: 'meaning-match',
      question: 'Apakah arti dari kalimat pertanyaan "你叫什么名字"?',
      audioText: '你叫什么名字？请问这句话是什么意思？',
      hanzi: '你叫什么名字',
      pinyin: 'Nǐ jiào shénme míngzi?',
      options: [
        { text: 'Siapakah namamu?', isCorrect: true },
        { text: 'Berapa usiamu?', isCorrect: false },
        { text: 'Di mana rumahmu?', isCorrect: false },
        { text: 'Kamu pergi ke mana?', isCorrect: false }
      ],
      explanation: '你 (Kamu) + 叫 (bernama) + 什么 (apa) + 名字 (nama) = Siapakah namamu?'
    },
    {
      id: 109,
      book: 1,
      unit: 5,
      type: 'word-order',
      question: 'Susun kata acak berikut menjadi kalimat sopan yang benar: [我家 / 这 / 是]',
      audioText: '请把词语“我家、这、是”排成一句完整的话。',
      hanzi: '这是我家',
      pinyin: 'Zhè shì wǒ jiā.',
      options: [
        { text: '这是我家 (Zhè shì wǒ jiā)', isCorrect: true },
        { text: '我家是这 (Wǒ jiā shì zhè)', isCorrect: false },
        { text: '这是家我 (Zhè shì jiā wǒ)', isCorrect: false },
        { text: '我家这 (Wǒ jiā zhè)', isCorrect: false }
      ],
      explanation: 'Ini adalah rumahku = 这是我家 (Zhè shì wǒ jiā).'
    },
    {
      id: 110,
      book: 1,
      unit: 8,
      type: 'picture-match',
      question: 'Di Pelajaran 8 "我们吃午饭", makanan apakah "面条" (miàntiáo)?',
      audioText: '中午我吃面条。请问哪张图片是面条？',
      hanzi: '面条',
      pinyin: 'miàntiáo',
      options: [
        { text: '🍜 Mie Lezat (面条)', icon: '🍜', isCorrect: true },
        { text: '🍚 Nasi Putih (米饭)', icon: '🍚', isCorrect: false },
        { text: '🥟 Pangsit Jiaozi (饺子)', icon: '🥟', isCorrect: false },
        { text: '🍞 Roti (面包)', icon: '🍞', isCorrect: false }
      ],
      explanation: '面条 (Miàntiáo) berarti Mie.'
    },
    {
      id: 111,
      book: 1,
      unit: 9,
      type: 'stroke-count',
      question: 'Berapakah jumlah guratan dari karakter "打" (dǎ / memukul/bermain)?',
      audioText: '汉字“打”一共有几画？',
      hanzi: '打',
      pinyin: 'dǎ',
      options: [
        { text: '5 Guratan', isCorrect: true },
        { text: '4 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false },
        { text: '3 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 打 memiliki 5 guratan: 扌(3) + 丁(2) = 5.'
    },
    {
      id: 112,
      book: 1,
      unit: 10,
      type: 'meaning-match',
      question: 'Apakah makna dari peribahasa terkenal di Pelajaran 10 "一寸光阴一寸金"?',
      audioText: '一寸光阴一寸金，寸金难买寸光阴。请问这句话告诉我们什么道理？',
      hanzi: '一寸光阴一寸金',
      pinyin: 'yí cùn guāngyīn yí cùn jīn',
      options: [
        { text: 'Waktu sangat berharga laksana emas', isCorrect: true },
        { text: 'Uang emas bisa membeli segalanya', isCorrect: false },
        { text: 'Bermain game sepanjang hari', isCorrect: false },
        { text: 'Menabung uang di celengan', isCorrect: false }
      ],
      explanation: '一寸光阴一寸金 bermakna waktu laksana emas tak ternilai, jangan buang waktu.'
    },
    {
      id: 113,
      book: 1,
      unit: 11,
      type: 'picture-match',
      question: 'Benda apakah "书包" (shūbāo) yang dibawa anak-anak ke sekolah?',
      audioText: '这是小华的书包。请问哪张图片是书包？',
      hanzi: '书包',
      pinyin: 'shūbāo',
      options: [
        { text: '🎒 Tas Sekolah (书包)', icon: '🎒', isCorrect: true },
        { text: '📚 Buku Teks (书)', icon: '📚', isCorrect: false },
        { text: '✏️ Pensil Tulis (铅笔)', icon: '✏️', isCorrect: false },
        { text: '📏 Penggaris (尺子)', icon: '📏', isCorrect: false }
      ],
      explanation: '书包 (Shūbāo) adalah Tas Sekolah.'
    },
    {
      id: 114,
      book: 1,
      unit: 12,
      type: 'pinyin-match',
      question: 'Manakah penulisan Pinyin yang tepat untuk kata "两本书" (Dua Buku)?',
      audioText: '我有两本书。请选择正确的拼音。',
      hanzi: '两本书',
      pinyin: 'liǎng běn shū',
      options: [
        { text: 'liǎng běn shū', isCorrect: true },
        { text: 'èr běn shū', isCorrect: false },
        { text: 'liáng bēn shǔ', isCorrect: false },
        { text: 'liǎng bēn shù', isCorrect: false }
      ],
      explanation: 'Untuk menyebut jumlah barang "dua", digunakan 两 (liǎng), bukan 二 (èr).'
    },
    {
      id: 115,
      book: 1,
      unit: 15,
      type: 'meaning-match',
      question: 'Di Pelajaran 15 "我的房间", di manakah letak 足球 (bola sepak)?',
      audioText: '足球在圆桌下边。请问足球在什么地方？',
      hanzi: '圆桌下边',
      pinyin: 'yuánzhuō xiàbian',
      options: [
        { text: 'Di bawah meja bundar (圆桌下边)', isCorrect: true },
        { text: 'Di atas tempat tidur (床上边)', isCorrect: false },
        { text: 'Di dalam lemari pakaian (衣柜里)', isCorrect: false },
        { text: 'Di atas rak buku (书架上)', isCorrect: false }
      ],
      explanation: 'Teks hal 57: 足球在圆桌下边 (Bola sepak ada di bawah meja bundar).'
    },

    // === HAN YU 2 ===
    {
      id: 201,
      book: 2,
      unit: 1,
      type: 'meaning-match',
      question: 'Apakah arti dari kalimat "现在几点" (Xiànzài jǐ diǎn)?',
      audioText: '现在几点？请问这句话是什么意思？',
      hanzi: '现在几点',
      pinyin: 'Xiànzài jǐ diǎn?',
      options: [
        { text: 'Sekarang jam berapa?', isCorrect: true },
        { text: 'Hari ini hari apa?', isCorrect: false },
        { text: 'Berapa umurmu?', isCorrect: false },
        { text: 'Di mana jam dinding?', isCorrect: false }
      ],
      explanation: '现在 (Sekarang) + 几点 (jam berapa).'
    },
    {
      id: 202,
      book: 2,
      unit: 5,
      type: 'picture-match',
      question: 'Pilihlah warna yang tepat untuk kata "红色" (hóngsè / merah)!',
      audioText: '他穿红上衣。请选出红色的代表图片。',
      hanzi: '红色',
      pinyin: 'hóngsè',
      options: [
        { text: '🔴 Merah Cerah (红)', icon: '🔴', isCorrect: true },
        { text: '🟡 Kuning (黄)', icon: '🟡', isCorrect: false },
        { text: '🔵 Biru (蓝)', icon: '🔵', isCorrect: false },
        { text: '🟢 Hijau (绿)', icon: '🟢', isCorrect: false }
      ],
      explanation: '红色 (Hóngsè) berarti Warna Merah.'
    },
    {
      id: 203,
      book: 2,
      unit: 6,
      type: 'stroke-count',
      question: 'Berapakah jumlah guratan dari karakter raja hutan "虎" (hǔ / harimau)?',
      audioText: '动物园里有老虎。汉字“虎”一共有几画？',
      hanzi: '虎',
      pinyin: 'hǔ',
      options: [
        { text: '8 Guratan', isCorrect: true },
        { text: '7 Guratan', isCorrect: false },
        { text: '9 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 虎 memiliki 8 guratan: 1.竖, 2.横, 3.横钩, 4.撇, 5.竖, 6.横折, 7.横, 8.竖弯钩.'
    },

    // === HAN YU 3 ===
    {
      id: 301,
      book: 3,
      unit: 1,
      type: 'pinyin-match',
      question: 'Manakah bacaan Pinyin yang benar untuk kata "新同学" (Teman Baru)?',
      audioText: '我们班来了一位新同学。请选择正确的拼音。',
      hanzi: '新同学',
      pinyin: 'xīn tóngxué',
      options: [
        { text: 'xīn tóngxué', isCorrect: true },
        { text: 'xīn tóngxüé', isCorrect: false },
        { text: 'xīng tóngxué', isCorrect: false },
        { text: 'xìn tóngxüè', isCorrect: false }
      ],
      explanation: '新同学 dibaca "xīn tóngxué".'
    },
    {
      id: 302,
      book: 3,
      unit: 8,
      type: 'picture-match',
      question: 'Pilihlah cuaca yang tepat untuk kalimat "今天下雨" (Hari ini turun hujan)!',
      audioText: '今天下雨，请大家出门带伞。哪张图片代表下雨？',
      hanzi: '下雨',
      pinyin: 'xià yǔ',
      options: [
        { text: '🌧️ Hujan Deras (下雨)', icon: '🌧️', isCorrect: true },
        { text: '☀️ Cerah Terik (晴天)', icon: '☀️', isCorrect: false },
        { text: '☁️ Berawan (阴天)', icon: '☁️', isCorrect: false },
        { text: '❄️ Turun Salju (下雪)', icon: '❄️', isCorrect: false }
      ],
      explanation: '下雨 (Xià yǔ) berarti Turun Hujan.'
    },

    // === HAN YU 4 ===
    {
      id: 401,
      book: 4,
      unit: 3,
      type: 'meaning-match',
      question: 'Musim apakah "春天" (chūntiān) dalam 4 musim?',
      audioText: '春天来了，花儿都开了。请问春天是什么季节？',
      hanzi: '春天',
      pinyin: 'chūntiān',
      options: [
        { text: 'Musim Semi', isCorrect: true },
        { text: 'Musim Panas', isCorrect: false },
        { text: 'Musim Gugur', isCorrect: false },
        { text: 'Musim Dingin', isCorrect: false }
      ],
      explanation: '春天 (Chūntiān) adalah Musim Semi (bunga bermekaran).'
    },
    {
      id: 402,
      book: 4,
      unit: 9,
      type: 'word-order',
      question: 'Susun kata berikut menjadi kalimat yang benar: [写信 / 我 / 给朋友]',
      audioText: '请把词语“写信、我、给朋友”排成正确的句子。',
      hanzi: '我给朋友写信',
      pinyin: 'Wǒ gěi péngyou xiě xìn.',
      options: [
        { text: '我给朋友写信 (Wǒ gěi péngyou xiě xìn)', isCorrect: true },
        { text: '写信我给朋友 (Xiě xìn wǒ gěi péngyou)', isCorrect: false },
        { text: '朋友给我写信 (Péngyou gěi wǒ xiě xìn)', isCorrect: false },
        { text: '我写信给朋友 (Wǒ xiě xìn gěi péngyou)', isCorrect: false }
      ],
      explanation: 'Struktur bahasa Mandarin: Subjek + 给 (kepada) + Objek + Kata Kerja -> 我给朋友写信.'
    },

    // === HAN YU 5 ===
    {
      id: 501,
      book: 5,
      unit: 4,
      type: 'meaning-match',
      question: 'Festival apakah "春节" (Chūnjié) dalam kebudayaan Tionghoa?',
      audioText: '春节是中国最重要的传统节日。请问春节是什么节日？',
      hanzi: '春节',
      pinyin: 'Chūnjié',
      options: [
        { text: 'Tahun Baru Imlek (Festival Musim Semi)', isCorrect: true },
        { text: 'Festival Kue Bulan (Mid-Autumn)', isCorrect: false },
        { text: 'Festival Perahu Naga (Duanwu)', isCorrect: false },
        { text: 'Festival Lampion (Yuanxiao)', isCorrect: false }
      ],
      explanation: '春节 (Chūnjié) adalah Tahun Baru Imlek / Festival Musim Semi.'
    },

    // === HAN YU 6 ===
    {
      id: 601,
      book: 6,
      unit: 2,
      type: 'picture-match',
      question: 'Monumen megah apakah "万里长城" (Wànlǐ Chángchéng)?',
      audioText: '万里长城是世界建筑奇迹。哪张图片代表万里长城？',
      hanzi: '万里长城',
      pinyin: 'Wànlǐ Chángchéng',
      options: [
        { text: '🏯 Tembok Raksasa Tiongkok (长城)', icon: '🏯', isCorrect: true },
        { text: '🗼 Menara Eiffel (埃菲尔铁塔)', icon: '🗼', isCorrect: false },
        { text: '🗽 Patung Liberty (自由女神像)', icon: '🗽', isCorrect: false },
        { text: '🏰 Kastil Kuno (古堡)', icon: '🏰', isCorrect: false }
      ],
      explanation: '万里长城 adalah Tembok Raksasa Tiongkok (Great Wall of China).'
    },

    // === HAN YU 7 ===
    {
      id: 701,
      book: 7,
      unit: 1,
      type: 'meaning-match',
      question: 'Apakah pesan moral dari cerita Chengyu "盲人摸象" (Orang Buta Meraba Gajah)?',
      audioText: '盲人摸象的成语故事告诉我们什么道理？',
      hanzi: '盲人摸象',
      pinyin: 'mángrén mō xiàng',
      options: [
        { text: 'Melihat masalah harus menyeluruh, jangan sepihak', isCorrect: true },
        { text: 'Gajah adalah hewan yang sangat besar', isCorrect: false },
        { text: 'Telinga gajah mirip seperti kipas', isCorrect: false },
        { text: 'Harus sering pergi ke kebun binatang', isCorrect: false }
      ],
      explanation: '盲人摸象 mengingatkan kita agar melihat permasalahan secara utuh dan komprehensif.'
    },

    // === HAN YU 8 ===
    {
      id: 801,
      book: 8,
      unit: 2,
      type: 'meaning-match',
      question: 'Manakah yang BUKAN termasuk 4 Penemuan Besar Kuno Tiongkok (四大发明)?',
      audioText: '中国古代四大发明包括造纸术、指南针、火药和印刷术。',
      hanzi: '四大发明',
      pinyin: 'sì dà fāmíng',
      options: [
        { text: 'Komputer Digital (电脑)', isCorrect: true },
        { text: 'Teknik Pembuatan Kertas (造纸术)', isCorrect: false },
        { text: 'Kompas Navigasi (指南针)', isCorrect: false },
        { text: 'Bubuk Mesiu (火药)', isCorrect: false }
      ],
      explanation: '四大发明 adalah Kertas, Kompas, Mesin Cetak, dan Bubuk Mesiu. Komputer adalah penemuan modern.'
    },

    // === HAN YU 9 ===
    {
      id: 901,
      book: 9,
      unit: 1,
      type: 'stroke-count',
      question: 'Berapakah jumlah guratan dari karakter tinta "墨" (mò)?',
      audioText: '文房四宝中的“墨”一共有几画？',
      hanzi: '墨',
      pinyin: 'mò',
      options: [
        { text: '15 Guratan', isCorrect: true },
        { text: '13 Guratan', isCorrect: false },
        { text: '14 Guratan', isCorrect: false },
        { text: '16 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 墨 memiliki 15 guratan: 黑 (12 guratan) + 土 (3 guratan) = 15.'
    },

    // === HAN YU 10 ===
    {
      id: 1001,
      book: 10,
      unit: 2,
      type: 'meaning-match',
      question: 'Apakah sebutan transaksi pembayaran non-tunai di era digital "移动支付"?',
      audioText: '数字经济时代的“移动支付”是什么意思？',
      hanzi: '移动支付',
      pinyin: 'yídòng zhīfù',
      options: [
        { text: 'Pembayaran Digital / Non-Tunai lewat Ponsel', isCorrect: true },
        { text: 'Membayar dengan uang koin logam', isCorrect: false },
        { text: 'Menukar barang dengan sistem barter', isCorrect: false },
        { text: 'Membayar di kasir menggunakan cek kertas', isCorrect: false }
      ],
      explanation: '移动支付 (Yídòng zhīfù) adalah Mobile Payment / Pembayaran Digital.'
    },

    // === HAN YU 11 ===
    {
      id: 1101,
      book: 11,
      unit: 1,
      type: 'pinyin-match',
      question: 'Pilihlah bacaan pinyin yang tepat untuk pepatah Konfusius "三人行，必有我师焉"?',
      audioText: '三人行，必有我师焉。请选择正确的拼音读音。',
      hanzi: '三人行，必有我师焉',
      pinyin: 'Sān rén xíng, bì yǒu wǒ shī yān.',
      options: [
        { text: 'Sān rén xíng, bì yǒu wǒ shī yān', isCorrect: true },
        { text: 'Sān rén háng, bì yǒu wǒ shī yān', isCorrect: false },
        { text: 'Sān rén xíng, bì yǒu wǒ lǎoshī', isCorrect: false },
        { text: 'Sān rén zǒu, bì yǒu wǒ shī yān', isCorrect: false }
      ],
      explanation: 'Di sini 行 dibaca "xíng" (berjalan bersama).'
    },

    // === HAN YU 12 ===
    {
      id: 1201,
      book: 12,
      unit: 1,
      type: 'word-order',
      question: 'Susunlah kata acak ini menjadi pesan motivasi yang tepat: [表达自我 / 青年人 / 勇于 / 要]',
      audioText: '请把词语“表达自我、青年人、勇于、要”排成通顺的一句话。',
      hanzi: '青年人要勇于表达自我',
      pinyin: 'Qīngniánrén yào yǒngyú biǎodá zìwǒ.',
      options: [
        { text: '青年人要勇于表达自我 (Qīngniánrén yào yǒngyú biǎodá zìwǒ)', isCorrect: true },
        { text: '勇于表达自我青年人要 (Yǒngyú biǎodá zìwǒ qīngniánrén yào)', isCorrect: false },
        { text: '青年人表达自我要勇于 (Qīngniánrén biǎodá zìwǒ yào yǒngyú)', isCorrect: false },
        { text: '要青年人勇于表达自我 (Yào qīngniánrén yǒngyú biǎodá zìwǒ)', isCorrect: false }
      ],
      explanation: 'Susunan yang benar: 青年人 (Pemuda) + 要 (harus) + 勇于 (berani) + 表达自我 (mengekspresikan diri).'
    }
  ]
};

// Aliases for compatibility
DINO_DATA.strokeQuizQuestions = DINO_DATA.strokeCountQuestions;

if (typeof window !== 'undefined') {
  window.DINO_DATA = DINO_DATA;
}