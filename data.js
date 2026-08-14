/**
 * Dino Mandarin Adventure - Full Curriculum Data (Han Yu 1 s/d 15)
 * Diadaptasi Penuh Sesuai Buku Pelajaran PDF Resmi Han Yu 1 (15 Pelajaran Lengkap)
 */

const DINO_DATA = {
  // 1. Metadata Buku Han Yu 1 s/d 15
  books: [
    { id: 1, title: 'Han Yu 1 (汉语 第一册)', desc: '15 Pelajaran Lengkap Sesuai Buku Resmi PDF Han Yu 1' },
    { id: 2, title: 'Han Yu 2 (汉语 第二册)', desc: 'Waktu, Pakaian, Warna, Hewan, Buah-buahan & Sekolah' },
    { id: 3, title: 'Han Yu 3 (汉语 第三册)', desc: 'Ruang Kelas, Kegiatan Harian, Lokasi, Kebun Binatang & Belanja' },
    { id: 4, title: 'Han Yu 4 (汉语 第四册)', desc: 'Olahraga, Cuaca, 4 Musim, Transportasi, Supermarket & Liburan' },
    { id: 5, title: 'Han Yu 5 (汉语 第五册)', desc: 'Hobi, Memasak, Komunikasi, Museum, Lingkungan & Festival' },
    { id: 6, title: 'Han Yu 6 (汉语 第六册)', desc: 'Teknologi, Tempat Bersejarah, Antariksa, Fabel & Cita-cita' },
    { id: 7, title: 'Han Yu 7 (汉语 第七册)', desc: 'Cerita Idiom (成语), Asal Usul Hanzi & Budaya Kuliner' },
    { id: 8, title: 'Han Yu 8 (汉语 第八册)', desc: 'Geografi Tiongkok, Tokoh Bersejarah & 4 Penemuan Besar' },
    { id: 9, title: 'Han Yu 9 (汉语 第九册)', desc: 'Seni Tradisional (Kaligrafi, Opera) & Karya Sastra Klasik' },
    { id: 10, title: 'Han Yu 10 (汉语 第十册)', desc: 'Ekonomi, Jalur Sutra, Komunikasi Antarbudaya & Ekologi' },
    { id: 11, title: 'Han Yu 11 (汉语 第十一册)', desc: 'Filsafat Timur, Sejarah & Inovasi Teknologi Masa Depan' },
    { id: 12, title: 'Han Yu 12 (汉语 第十二册)', desc: 'Aplikasi Bahasa Lanjutan, Pidato, Penulisan Esai & Wawasan Global' },
    { id: 13, title: 'Han Yu 13 (汉语 第十三册)', desc: 'Diplomasi Budaya, Sastra Modern & Dialog Internasional' },
    { id: 14, title: 'Han Yu 14 (汉语 第十四册)', desc: 'Sains Eksplorasi, Keberagaman Hayati & Ekosistem Bumi' },
    { id: 15, title: 'Han Yu 15 (汉语 第十五册)', desc: 'Kepemimpinan Masa Depan, Harmoni Global & Wawasan Peradaban' }
  ],

  // 2. Metadata 15 Pelajaran Han Yu 1 (Sesuai Daftar Isi PDF)
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
    2: { 1: 'Waktu & Sekolah', 2: 'Identitas Diri & Sapaan', 3: 'Usia & Kelas', 4: 'Anggota Tubuh', 5: 'Pakaian & Warna', 6: 'Hewan & Dinosaurus', 7: 'Buah & Sayuran', 8: 'Hari & Tempat', 9: 'Aktivitas Sehari-hari', 10: 'Transportasi & Liburan' },
    3: { 1: 'Teman & Kelas', 2: 'Alat Tulis & Ruangan', 3: 'Jam & Waktu', 4: 'Rumah & Kamar Tidur', 5: 'Kebun Binatang', 6: 'Profesi & Pekerjaan', 7: 'Belanja & Uang', 8: 'Cuaca & Suhu', 9: 'Hobi & Musik', 10: 'Restoran & Menu Makanan' },
    4: { 1: 'Olahraga & Permainan Bola', 2: 'Transportasi Kota', 3: 'Empat Musim', 4: 'Supermarket & Belanja', 5: 'Kesehatan & Rumah Sakit', 6: 'Pesta Ulang Tahun & Hadiah', 7: 'Wisata & Liburan', 8: 'Lingkungan Alam & Hutan', 9: 'Surat & Komunikasi', 10: 'Hewan Peliharaan' },
    5: { 1: 'Kesenian & Bakat', 2: 'Alat Elektronik & Media', 3: 'Penghijauan & Pelestarian Alam', 4: 'Festival Tradisional', 5: 'Cerita Dongeng & Fabel', 6: 'Memasak & Dapur', 7: 'Museum & Peninggalan Sejarah', 8: 'Sahabat Pena & Surat', 9: 'Tata Krama & Kesantunan', 10: 'Rencana Masa Depan & Cita-cita' },
    6: { 1: 'Teknologi & Internet', 2: 'Tembok Besar & Kota Kuno', 3: 'Festival Perahu Naga', 4: 'Eksplorasi Antariksa & Roket', 5: 'Fabel Kuno & Hikmah', 6: 'Kerajinan Tangan & Seni Kertas', 7: 'Kesehatan & Kebersihan', 8: 'Ekspedisi & Geografi', 9: 'Profesi Masa Kini', 10: 'Perjuangan & Kesuksesan' },
    7: { 1: 'Cerita Idiom Chengyu (成语)', 2: 'Asal Usul Karakter Hanzi', 3: 'Kisah Sahabat Sejati', 4: 'Tradisi Minum Teh (茶文化)', 5: 'Festival Musim Semi & Lampion', 6: 'Puisi Kuno Dinasti Tang', 7: 'Seni Musik Tradisional', 8: 'Kearifan Arsitektur Tiongkok', 9: 'Kisah Pahlawan Kuno', 10: 'Budi Pekerti & Sopan Santun' },
    8: { 1: 'Sungai Yangtze & Sungai Kuning', 2: 'Empat Penemuan Besar (四大发明)', 3: 'Peta Geografi Tiongkok', 4: 'Prajurit Terakota Xi\'an', 5: 'Keajaiban Sutra & Porselen', 6: 'Festival Kue Bulan & Legenda Chang\'e', 7: 'Pengobatan Tradisional Herbal', 8: 'Kisah Penjelajah Cheng Ho', 9: 'Ekologi Pegunungan Himalaya', 10: 'Pelestarian Satwa Panda' },
    9: { 1: 'Seni Kaligrafi & Goresan Kuas', 2: 'Seni Lukis Tinta Air (国画)', 3: 'Opera Beijing & Topeng Wajah', 4: 'Sastra Kisah Tiga Kerajaan (三国)', 5: 'Perjalanan ke Barat (西游记)', 6: 'Gaya Hidup Ramah Lingkungan', 7: 'Arsitektur Kota Air Suzhou', 8: 'Peribahasa Kebijaksanaan Hidup', 9: 'Apresiasi Puisi Dinasti Song', 10: 'Harmoni Manusia & Alam' },
    10: { 1: 'Jalur Sutra Darat & Maritim', 2: 'Ekonomi Digital & Transaksi Modern', 3: 'Transportasi Kereta Cepat (高铁)', 4: 'Energi Bersih Terbarukan', 5: 'Kerja Sama Internasional', 6: 'Urbanisasi & Kota Pintar (Smart City)', 7: 'Dialog Peradaban Dunia', 8: 'Pelestarian Warisan UNESCO', 9: 'Inovasi Pertanian Modern', 10: 'Membangun Masa Depan Berkelanjutan' },
    11: { 1: 'Filsafat Konfusianisme (儒家思想)', 2: 'Filsafat Taoisme & Keseimbangan Alam', 3: 'Kecerdasan Buatan (AI) & Robotika', 4: 'Eksplorasi Laut Dalam & Kapal Selam', 5: 'Bioteknologi & Kesehatan Masa Depan', 6: 'Pemberdayaan Masyarakat Desa', 7: 'Etika Digital & Dunia Siber', 8: 'Transformasi Energi Hijau', 9: 'Pendidikan Karakter & Moralitas', 10: 'Masyarakat Harmonis Global' },
    12: { 1: 'Keterampilan Berpidato & Retorika', 2: 'Penulisan Esai & Berpikir Kritis', 3: 'Diplomasi Budaya & Pemuda Dunia', 4: 'Inovasi Sains & Perjalanan Antariksa', 5: 'Apresiasi Novel Klasik Tiongkok', 6: 'Kepemimpinan & Kerja Sama Tim', 7: 'Kewirausahaan Kreatif Masa Kini', 8: 'Resolusi Konflik & Perdamaian Dunia', 9: 'Transformasi Kota Berkelanjutan', 10: 'Refleksi Diri & Visi Generasi Muda' },
    13: { 1: 'Bahasa & Jembatan Persahabatan', 2: 'Sastra Kontemporer & Novel Modern', 3: 'Keberagaman Bahasa & Dialek', 4: 'Forum Pemuda Lintas Negara', 5: 'Media Digital & Jurnalistik', 6: 'Diplomasi Seni & Pameran Budaya', 7: 'Etika Lingkungan Global', 8: 'Kearifan Lokal di Era Modern', 9: 'Psikologi Komunikasi Efektif', 10: 'Inspirasi Tokoh Dunia' },
    14: { 1: 'Keanekaragaman Hayati Hutan Tropis', 2: 'Konservasi Samudera & Terumbu Karang', 3: 'Teknologi Penjelajahan Mars', 4: 'Revolusi Nanoteknologi', 5: 'Arsitektur Ramah Lingkungan', 6: 'Ketahanan Pangan Global', 7: 'Klimatologi & Perubahan Cuaca', 8: 'Studi Peradaban Kuno Dunia', 9: 'Karya Dokumenter Sains', 10: 'Inovasi Penemuan Ramah Bumi' },
    15: { 1: 'Visi Peradaban Dunia 2050', 2: 'Kepemimpinan Berkelanjutan', 3: 'Harmoni Multikulturalisme Global', 4: 'Revolusi Sains Quantum', 5: 'Etika Masa Depan Umat Manusia', 6: 'Kolaborasi Antariksa Internasional', 7: 'Kesejahteraan Holistik & Humaniora', 8: 'Warisan Pemikiran Filsuf Dunia', 9: 'Pidato Kelulusan & Komitmen Sosial', 10: 'Mahakarya Generasi Emas Masa Depan' }
  },

  // 3. Modul 1: Latihan Tulisan Guratan (Setiap Unit 1-15 Han Yu 1)
  vocabList: [
    // Unit 1: 你好
    { id: 101, hanzi: '你', pinyin: 'nǐ', meaning: 'Kamu', strokes: 7, book: 1, unit: 1, strokeSteps: ['1. 撇', '2. 竖', '3. 撇', '4. 横撇', '5. 竖钩', '6. 撇', '7. 点'], tip: 'Radikal orang di kiri (亻) + huruf 尔.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">你</text></svg>' },
    { id: 102, hanzi: '好', pinyin: 'hǎo', meaning: 'Baik / Bagus', strokes: 6, book: 1, unit: 1, strokeSteps: ['1. 撇点', '2. 撇', '3. 提', '4. 横撇', '5. 弯钩', '6. 横'], tip: 'Radikal perempuan (女) di kiri + radikal anak (子) di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">好</text></svg>' },
    { id: 103, hanzi: '一', pinyin: 'yī', meaning: 'Satu / 横 (héng)', strokes: 1, book: 1, unit: 1, strokeSteps: ['1. 横 (héng)'], tip: 'Goresan dasar mendatar dari kiri ke kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">一</text></svg>' },
    { id: 104, hanzi: '上', pinyin: 'shàng', meaning: 'Atas / Naik', strokes: 3, book: 1, unit: 1, strokeSteps: ['1. 竖', '2. 横 (pendek)', '3. 横 (panjang)'], tip: 'Garis tegak lurus, garis pendek samping, lalu alas panjang.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">上</text></svg>' },
    { id: 105, hanzi: '下', pinyin: 'xià', meaning: 'Bawah / Turun', strokes: 3, book: 1, unit: 1, strokeSteps: ['1. 横', '2. 竖', '3. 点'], tip: 'Garis atap mendatar, garis tegak, lalu titik ke bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">下</text></svg>' },

    // Unit 2: 我爱爸爸妈妈
    { id: 201, hanzi: '我', pinyin: 'wǒ', meaning: 'Saya / Aku', strokes: 7, book: 1, unit: 2, strokeSteps: ['1. 撇', '2. 横', '3. 竖钩', '4. 提', '5. 斜钩', '6. 撇', '7. 点'], tip: 'Sapuan atas, garis mendatar, lalu tegak berkait dan kait miring.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">我</text></svg>' },
    { id: 202, hanzi: '爱', pinyin: 'ài', meaning: 'Cinta / Sayang', strokes: 10, book: 1, unit: 2, strokeSteps: ['1. 撇', '2. 点', '3. 点', '4. 撇', '5. 点', '6. 横撇', '7. 点', '8. 横撇', '9. 撇', '10. 捺'], tip: 'Mahkota cakar atas, penutup tengah, dan sapuan kaki bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">爱</text></svg>' },
    { id: 203, hanzi: '爸', pinyin: 'bà', meaning: 'Ayah / Papa', strokes: 8, book: 1, unit: 2, strokeSteps: ['1. 撇', '2. 点', '3. 撇', '4. 捺', '5. 横折', '6. 横', '7. 竖弯钩', '8. 竖'], tip: 'Radikal ayah (父) di atas + huruf 巴 di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">爸</text></svg>' },
    { id: 204, hanzi: '他', pinyin: 'tā', meaning: 'Dia (Laki-laki)', strokes: 5, book: 1, unit: 2, strokeSteps: ['1. 撇', '2. 竖', '3. 横折钩', '4. 竖', '5. 竖弯钩'], tip: 'Radikal orang (亻) di kiri + huruf 也 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">他</text></svg>' },

    // Unit 3: 爸爸是老师
    { id: 301, hanzi: '是', pinyin: 'shì', meaning: 'Adalah / Benar', strokes: 9, book: 1, unit: 3, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 横', '5. 横', '6. 竖', '7. 横', '8. 撇', '9. 捺'], tip: 'Matahari (日) di atas + bentuk 正 di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">是</text></svg>' },
    { id: 302, hanzi: '不', pinyin: 'bù', meaning: 'Tidak / Bukan', strokes: 4, book: 1, unit: 3, strokeSteps: ['1. 横', '2. 撇', '3. 竖', '4. 点'], tip: 'Garis mendatar atas, sapuan miring kiri, tegak lurus, dan titik kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">不</text></svg>' },
    { id: 303, hanzi: '学', pinyin: 'xué', meaning: 'Belajar / Murid', strokes: 8, book: 1, unit: 3, strokeSteps: ['1. 点', '2. 点', '3. 撇', '4. 点', '5. 横撇', '6. 横折', '7. 弯钩', '8. 横'], tip: 'Tiga titik mahkota atas + topi atap + huruf 子 di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">学</text></svg>' },
    { id: 304, hanzi: '弟', pinyin: 'dì', meaning: 'Adik Laki-laki', strokes: 7, book: 1, unit: 3, strokeSteps: ['1. 点', '2. 撇', '3. 横折', '4. 横', '5. 竖折折钩', '6. 竖', '7. 撇'], tip: 'Dua titik tanduk atas disusul lilitan dan tiang tegak lurus.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">弟</text></svg>' },

    // Unit 4: 你叫什么名字
    { id: 401, hanzi: '小', pinyin: 'xiǎo', meaning: 'Kecil', strokes: 3, book: 1, unit: 4, strokeSteps: ['1. 竖钩', '2. 撇', '3. 点'], tip: 'Garis tegak berkait di tengah dulu, lalu titik kiri dan titik kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">小</text></svg>' },
    { id: 402, hanzi: '字', pinyin: 'zì', meaning: 'Huruf / Karakter', strokes: 6, book: 1, unit: 4, strokeSteps: ['1. 点', '2. 点', '3. 横撇', '4. 横撇', '5. 弯钩', '6. 横'], tip: 'Radikal atap rumah (宀) di atas + anak (子) di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">字</text></svg>' },

    // Unit 5: 我爱我家
    { id: 501, hanzi: '家', pinyin: 'jiā', meaning: 'Rumah / Keluarga', strokes: 10, book: 1, unit: 5, strokeSteps: ['1. 点', '2. 点', '3. 横撇', '4. 横', '5. 撇', '6. 弯钩', '7. 撇', '8. 撇', '9. 撇', '10. 捺'], tip: 'Atap rumah (宀) yang menaungi keluarga.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">家</text></svg>' },
    { id: 502, hanzi: '这', pinyin: 'zhè', meaning: 'Ini', strokes: 7, book: 1, unit: 5, strokeSteps: ['1. 点', '2. 横', '3. 撇', '4. 点', '5. 点', '6. 横折折撇', '7. 捺'], tip: 'Huruf 文 di dalam + radikal berjalan (辶) di luar.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">这</text></svg>' },

    // Unit 6: 哥哥去学校
    { id: 601, hanzi: '去', pinyin: 'qù', meaning: 'Pergi', strokes: 5, book: 1, unit: 6, strokeSteps: ['1. 横', '2. 竖', '3. 横', '4. 撇折', '5. 点'], tip: 'Bentuk tanah (土) di atas + sudut 厶 di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">去</text></svg>' },
    { id: 602, hanzi: '教', pinyin: 'jiāo', meaning: 'Mengajar', strokes: 11, book: 1, unit: 6, strokeSteps: ['1. 横', '2. 竖', '3. 横', '4. 撇', '5. 竖弯钩', '6. 横', '7. 提', '8. 撇', '9. 横', '10. 撇', '11. 捺'], tip: 'Mengajari anak ilmu pengetahuan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">教</text></svg>' },

    // Unit 7: 我们上课吧
    { id: 701, hanzi: '讲', pinyin: 'jiǎng', meaning: 'Berbicara / Menerangkan', strokes: 6, book: 1, unit: 7, strokeSteps: ['1. 点', '2. 横折提', '3. 横', '4. 横', '5. 竖', '6. 竖'], tip: 'Radikal bahasa (讠) di kiri + huruf 井 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">讲</text></svg>' },
    { id: 702, hanzi: '课', pinyin: 'kè', meaning: 'Pelajaran / Kelas', strokes: 10, book: 1, unit: 7, strokeSteps: ['1. 点', '2. 横折提', '3. 竖', '4. 横折', '5. 横', '6. 横', '7. 横', '8. 竖', '9. 撇', '10. 捺'], tip: 'Radikal bahasa (讠) + huruf 果.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">课</text></svg>' },

    // Unit 8: 我们吃午饭
    { id: 801, hanzi: '饭', pinyin: 'fàn', meaning: 'Nasi / Makanan', strokes: 7, book: 1, unit: 8, strokeSteps: ['1. 撇', '2. 横撇', '3. 竖提', '4. 撇', '5. 撇', '6. 横撇', '7. 捺'], tip: 'Radikal makanan (饣) di kiri + huruf 反 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">饭</text></svg>' },
    { id: 802, hanzi: '吃', pinyin: 'chī', meaning: 'Makan', strokes: 6, book: 1, unit: 8, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 撇', '5. 横', '6. 竖弯钩'], tip: 'Radikal mulut (口) di kiri + huruf 乞 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">吃</text></svg>' },

    // Unit 9: 小华打球
    { id: 901, hanzi: '打', pinyin: 'dǎ', meaning: 'Memukul / Bermain', strokes: 5, book: 1, unit: 9, strokeSteps: ['1. 横', '2. 竖钩', '3. 提', '4. 横', '5. 竖钩'], tip: 'Radikal tangan (扌) di kiri + huruf 丁 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">打</text></svg>' },
    { id: 902, hanzi: '球', pinyin: 'qiú', meaning: 'Bola', strokes: 11, book: 1, unit: 9, strokeSteps: ['1. 横', '2. 横', '3. 竖', '4. 提', '5. 横', '6. 竖钩', '7. 点', '8. 提', '9. 撇', '10. 点', '11. 点'], tip: 'Radikal giok (王) di kiri + 求 di kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">球</text></svg>' },

    // Unit 10: 我的一天
    { id: 1001, hanzi: '天', pinyin: 'tiān', meaning: 'Hari / Langit', strokes: 4, book: 1, unit: 10, strokeSteps: ['1. 横', '2. 横', '3. 撇', '4. 捺'], tip: 'Dua garis mendatar di atas kepala orang besar.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">天</text></svg>' },
    { id: 1002, hanzi: '六', pinyin: 'liù', meaning: 'Enam', strokes: 4, book: 1, unit: 10, strokeSteps: ['1. 点', '2. 横', '3. 撇', '4. 点'], tip: 'Titik atas, garis mendatar, lalu dua kaki penyangga.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">六</text></svg>' },
    { id: 1003, hanzi: '七', pinyin: 'qī', meaning: 'Tujuh', strokes: 2, book: 1, unit: 10, strokeSteps: ['1. 横', '2. 竖弯钩'], tip: 'Garis mendatar disilang kait melengkung.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">七</text></svg>' },
    { id: 1004, hanzi: '八', pinyin: 'bā', meaning: 'Delapan', strokes: 2, book: 1, unit: 10, strokeSteps: ['1. 撇', '2. 捺'], tip: 'Dua sapuan saling membuka melebar.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">八</text></svg>' },
    { id: 1005, hanzi: '九', pinyin: 'jiǔ', meaning: 'Sembilan', strokes: 2, book: 1, unit: 10, strokeSteps: ['1. 撇', '2. 横折弯钩'], tip: 'Sapuan miring kiri dulu, lalu sudut kait melengkung.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">九</text></svg>' },
    { id: 1006, hanzi: '十', pinyin: 'shí', meaning: 'Sepuluh', strokes: 2, book: 1, unit: 10, strokeSteps: ['1. 横', '2. 竖'], tip: 'Tanda silang tambah: mendatar dulu baru tegak.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">十</text></svg>' },

    // Unit 11: 这是我的书
    { id: 1101, hanzi: '书', pinyin: 'shū', meaning: 'Buku', strokes: 4, book: 1, unit: 11, strokeSteps: ['1. 横折', '2. 横折钩', '3. 竖', '4. 点'], tip: 'Buku bacaan dan ilmu pengetahuan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">书</text></svg>' },
    { id: 1102, hanzi: '笔', pinyin: 'bǐ', meaning: 'Pena / Pensil', strokes: 10, book: 1, unit: 11, strokeSteps: ['1. 撇', '2. 横', '3. 点', '4. 撇', '5. 横', '6. 点', '7. 撇', '8. 横', '9. 横', '10. 竖弯钩'], tip: 'Radikal bambu (⺮) di atas + bulu (毛) di bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">笔</text></svg>' },

    // Unit 12: 我有两本书
    { id: 1201, hanzi: '有', pinyin: 'yǒu', meaning: 'Punya / Ada', strokes: 6, book: 1, unit: 12, strokeSteps: ['1. 横', '2. 撇', '3. 竖', '4. 横折钩', '5. 横', '6. 横'], tip: 'Tangan memegang bulan (月).', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">有</text></svg>' },
    { id: 1202, hanzi: '两', pinyin: 'liǎng', meaning: 'Dua (Jumlah/Satuan)', strokes: 7, book: 1, unit: 12, strokeSteps: ['1. 横', '2. 竖', '3. 横折钩', '4. 撇', '5. 点', '6. 撇', '7. 点'], tip: 'Digunakan saat menghitung jumlah dua benda.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">两</text></svg>' },

    // Unit 13: 你家有电脑吗
    { id: 1301, hanzi: '电', pinyin: 'diàn', meaning: 'Listrik / Elektronik', strokes: 5, book: 1, unit: 13, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 横', '5. 竖弯钩'], tip: 'Bentuk kotak petir dengan ekor melengkung.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">电</text></svg>' },
    { id: 1302, hanzi: '风', pinyin: 'fēng', meaning: 'Angin', strokes: 4, book: 1, unit: 13, strokeSteps: ['1. 撇', '2. 横折弯钩', '3. 撇', '4. 点'], tip: 'Angin sepoi-sepoi yang bertiup segar.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">风</text></svg>' },

    // Unit 14: 书在书架上
    { id: 1401, hanzi: '在', pinyin: 'zài', meaning: 'Di / Berada di', strokes: 6, book: 1, unit: 14, strokeSteps: ['1. 横', '2. 撇', '3. 竖', '4. 横', '5. 竖', '6. 横'], tip: 'Menunjukkan posisi atau lokasi suatu benda.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">在</text></svg>' },
    { id: 1402, hanzi: '心', pinyin: 'xīn', meaning: 'Hati / Pikiran', strokes: 4, book: 1, unit: 14, strokeSteps: ['1. 点', '2. 卧钩', '3. 点', '4. 点'], tip: 'Tiga titik di sekitar lengkungan hati (卧钩).', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">心</text></svg>' },

    // Unit 15: 我的房间
    { id: 1501, hanzi: '手', pinyin: 'shǒu', meaning: 'Tangan', strokes: 4, book: 1, unit: 15, strokeSteps: ['1. 撇', '2. 横', '3. 横', '4. 竖钩'], tip: 'Sapuan atas, dua garis mendatar, lalu tegak berkait.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">手</text></svg>' },
    { id: 1502, hanzi: '门', pinyin: 'mén', meaning: 'Pintu', strokes: 3, book: 1, unit: 15, strokeSteps: ['1. 点', '2. 竖', '3. 横折钩'], tip: 'Bentuk kusen pintu ruangan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">门</text></svg>' }
  ],

  // 4. Modul 2: Teks Bacaan Cerita 15 Pelajaran Han Yu 1 (Sesuai PDF Asli)
  unitStories: {
    1: {
      1: {
        title: '第一课：你好',
        pinyin: 'Dì Yī Kè: Nǐ Hǎo',
        meaning: 'Pelajaran 1: Halo (Han Yu 1 Halaman 1-2)',
        dinoMascot: '🦖 Rexy Menyapa Sekolah',
        summary: 'Percakapan ramah saat bertemu guru dan teman di gerbang sekolah (读课文: 小华、小红、小强与老师).',
        sentences: [
          { hanzi: '小华：你好！', pinyin: 'Xiǎohuá: Nǐ hǎo!', meaning: 'Xiaohua: Halo!' },
          { hanzi: '小红：你好！', pinyin: 'Xiǎohóng: Nǐ hǎo!', meaning: 'Xiaohong: Halo!' },
          { hanzi: '小强、小红：老师好！', pinyin: 'Xiǎoqiáng, Xiǎohóng: Lǎoshī hǎo!', meaning: 'Xiaoqiang, Xiaohong: Halo Guru!' },
          { hanzi: '老师：同学们好！', pinyin: 'Lǎoshī: Tóngxuémen hǎo!', meaning: 'Guru: Halo anak-anak!' },
          { hanzi: '小红：谢谢！', pinyin: 'Xiǎohóng: Xièxie!', meaning: 'Xiaohong: Terima kasih!' },
          { hanzi: '老师：不客气！', pinyin: 'Lǎoshī: Bú kèqi!', meaning: 'Guru: Sama-sama!' },
          { hanzi: '小华、小红：老师，再见！', pinyin: 'Xiǎohuá, Xiǎohóng: Lǎoshī, zàijiàn!', meaning: 'Xiaohua, Xiaohong: Guru, sampai jumpa!' },
          { hanzi: '老师：再见！', pinyin: 'Lǎoshī: Zàijiàn!', meaning: 'Guru: Sampai jumpa!' }
        ]
      },
      2: {
        title: '第二课：我爱爸爸妈妈',
        pinyin: 'Dì Èr Kè: Wǒ Ài Bàba Māma',
        meaning: 'Pelajaran 2: Aku Sayang Ayah Ibu (Han Yu 1 Halaman 5-6)',
        dinoMascot: '🦕 Brachy Bersama Keluarga',
        summary: 'Perkenalan diri Wang Xiaohua dan ungkapan kasih sayang kepada ayah dan ibu tercinta.',
        sentences: [
          { hanzi: '我是王小华。', pinyin: 'Wǒ shì Wáng Xiǎohuá.', meaning: 'Saya adalah Wang Xiaohua.' },
          { hanzi: '他是我爸爸。', pinyin: 'Tā shì wǒ bàba.', meaning: 'Dia adalah ayah saya.' },
          { hanzi: '她是我妈妈。', pinyin: 'Tā shì wǒ māma.', meaning: 'Dia adalah ibu saya.' },
          { hanzi: '我爱妈妈，妈妈爱我。', pinyin: 'Wǒ ài māma, māma ài wǒ.', meaning: 'Saya sayang ibu, ibu sayang saya.' },
          { hanzi: '我爱爸爸妈妈。', pinyin: 'Wǒ ài bàba māma.', meaning: 'Saya sayang ayah dan ibu.' }
        ]
      },
      3: {
        title: '第三课：爸爸是老师',
        pinyin: 'Dì Sān Kè: Bàba Shì Lǎoshī',
        meaning: 'Pelajaran 3: Ayah adalah Guru (Han Yu 1 Halaman 9-10)',
        dinoMascot: '🦤 Ptera Mengenal Profesi',
        summary: 'Mengenal berbagai macam profesi anggota keluarga: guru, dokter, polisi, dan siswa.',
        sentences: [
          { hanzi: '爸爸是老师，妈妈是医生，我是学生。', pinyin: 'Bàba shì lǎoshī, māma shì yīshēng, wǒ shì xuésheng.', meaning: 'Ayah adalah guru, ibu adalah dokter, saya adalah murid.' },
          { hanzi: '叔叔是警察。', pinyin: 'Shūshu shì jǐngchá.', meaning: 'Paman adalah polisi.' },
          { hanzi: '弟弟、妹妹是学生吗？', pinyin: 'Dìdi, mèimei shì xuésheng ma?', meaning: 'Apakah adik laki-laki dan adik perempuan adalah murid?' },
          { hanzi: '他们不是学生。', pinyin: 'Tāmen bú shì xuésheng.', meaning: 'Mereka bukan murid.' }
        ]
      },
      4: {
        title: '第四课：你叫什么名字',
        pinyin: 'Dì Sì Kè: Nǐ Jiào Shénme Míngzi',
        meaning: 'Pelajaran 4: Siapa Namamu (Han Yu 1 Halaman 13-14)',
        dinoMascot: '🦖 Stego Berkenalan',
        summary: 'Belajar menanyakan nama dan marga teman sekelas serta memperkenalkan saudara kandung.',
        sentences: [
          { hanzi: '你姓什么？我姓王。', pinyin: 'Nǐ xìng shénme? Wǒ xìng Wáng.', meaning: 'Apa margamu? Margaku Wang.' },
          { hanzi: '你叫什么名字？我叫王小明。', pinyin: 'Nǐ jiào shénme míngzi? Wǒ jiào Wáng Xiǎomíng.', meaning: 'Siapa namamu? Namaku Wang Xiaoming.' },
          { hanzi: '我姓王，叫王小华。', pinyin: 'Wǒ xìng Wáng, jiào Wáng Xiǎohuá.', meaning: 'Margaku Wang, namaku Wang Xiaohua.' },
          { hanzi: '我弟弟叫王小明，我妹妹叫王小丽。', pinyin: 'Wǒ dìdi jiào Wáng Xiǎomíng, wǒ mèimei jiào Wáng Xiǎolì.', meaning: 'Adik laki-lakiku bernama Wang Xiaoming, adik perempuanku bernama Wang Xiaoli.' }
        ]
      },
      5: {
        title: '第五课：我爱我家',
        pinyin: 'Dì Wǔ Kè: Wǒ Ài Wǒ Jiā',
        meaning: 'Pelajaran 5: Aku Sayang Rumahku (Han Yu 1 Halaman 17-19)',
        dinoMascot: '🦕 Tricera di Rumah Hangat',
        summary: 'Suasana rumah yang penuh cinta dan percakapan ramah saling memaafkan (万事开头难).',
        sentences: [
          { hanzi: '这是我家。', pinyin: 'Zhè shì wǒ jiā.', meaning: 'Ini adalah rumah / keluargaku.' },
          { hanzi: '我爱爸爸，我爱妈妈，我爱我家。', pinyin: 'Wǒ ài bàba, wǒ ài māma, wǒ ài wǒ jiā.', meaning: 'Saya sayang ayah, saya sayang ibu, saya sayang rumah / keluargaku.' },
          { hanzi: '万事开头难。', pinyin: 'Wàn shì kāi tóu nán.', meaning: 'Segala hal terasa sulit di awal permulaan (Peribahasa Tiongkok).' }
        ]
      },
      6: {
        title: '第六课：哥哥去学校',
        pinyin: 'Dì Liù Kè: Gēge Qù Xuéxiào',
        meaning: 'Pelajaran 6: Kakak Pergi ke Sekolah (Han Yu 1 Halaman 21-22)',
        dinoMascot: '🌟 Dino Berangkat Sekolah',
        summary: 'Ibu pergi ke rumah sakit, aku ke taman kanak-kanak, kakak pergi ke sekolah, dan kakek ke taman.',
        sentences: [
          { hanzi: '妈妈是医生，早上她去医院。', pinyin: 'Māma shì yīshēng, zǎoshang tā qù yīyuàn.', meaning: 'Ibu adalah dokter, pagi hari beliau pergi ke rumah sakit.' },
          { hanzi: '我去幼儿园。', pinyin: 'Wǒ qù yòu\'éryuán.', meaning: 'Saya pergi ke taman kanak-kanak.' },
          { hanzi: '哥哥去哪儿？他是学生，他去学校。', pinyin: 'Gēge qù nǎr? Tā shì xuésheng, tā qù xuéxiào.', meaning: 'Kakak pergi ke mana? Dia adalah murid, dia pergi ke sekolah.' },
          { hanzi: '爷爷去公园。', pinyin: 'Yéye qù gōngyuán.', meaning: 'Kakek pergi ke taman.' }
        ]
      },
      7: {
        title: '第七课：我们上课吧',
        pinyin: 'Dì Qī Kè: Wǒmen Shàngkè Ba',
        meaning: 'Pelajaran 7: Mari Kita Belajar di Kelas (Han Yu 1 Halaman 25-26)',
        dinoMascot: '🦖 Rexy Murid Pintar',
        summary: 'Kegiatan belajar mengajar di kelas: guru menjelaskan pelajaran dan murid menjawab pertanyaan.',
        sentences: [
          { hanzi: '上课了，我们进教室吧！', pinyin: 'Shàngkè le, wǒmen jìn jiàoshì ba!', meaning: 'Waktunya pelajaran dimulai, mari kita masuk ke dalam ruang kelas!' },
          { hanzi: '老师讲课，我们听课。', pinyin: 'Lǎoshī jiǎngkè, wǒmen tīngkè.', meaning: 'Guru menerangkan pelajaran, kita menyimak pelajaran.' },
          { hanzi: '老师问，我们回答。', pinyin: 'Lǎoshī wèn, wǒmen huídá.', meaning: 'Guru bertanya, kita menjawab pertanyaan.' }
        ]
      },
      8: {
        title: '第八课：我们吃午饭',
        pinyin: 'Dì Bā Kè: Wǒmen Chī Wǔfàn',
        meaning: 'Pelajaran 8: Kami Makan Siang (Han Yu 1 Halaman 29-30)',
        dinoMascot: '🦕 Brachy Makan Siang Bersama',
        summary: 'Menikmati menu makan siang yang lezat bersama guru dan teman: mie, nasi, dan pangsit jiaozi.',
        sentences: [
          { hanzi: '中午，我们吃午饭。', pinyin: 'Zhōngwǔ, wǒmen chī wǔfàn.', meaning: 'Siang hari, kami makan siang bersama.' },
          { hanzi: '我吃面条。', pinyin: 'Wǒ chī miàntiáo.', meaning: 'Saya makan mie.' },
          { hanzi: '小红和小强吃米饭。', pinyin: 'Xiǎohóng hé Xiǎoqiáng chī mǐfàn.', meaning: 'Xiaohong dan Xiaoqiang makan nasi.' },
          { hanzi: '老师吃饺子。', pinyin: 'Lǎoshī chī jiǎozi.', meaning: 'Guru makan pangsit jiaozi.' }
        ]
      },
      9: {
        title: '第九课：小华打球',
        pinyin: 'Dì Jiǔ Kè: Xiǎohuá Dǎ Qiú',
        meaning: 'Pelajaran 9: Xiaohua Bermain Bola (Han Yu 1 Halaman 33-34)',
        dinoMascot: '🦤 Ptera Juara Olahraga',
        summary: 'Aktivitas olahraga yang seru saat jam istirahat: main basket, sepak bola, tenis meja, dan lompat tali.',
        sentences: [
          { hanzi: '下课了，同学们打篮球、踢足球。', pinyin: 'Xiàkè le, tóngxuémen dǎ lánqiú, tī zúqiú.', meaning: 'Jam istirahat tiba, teman-teman bermain basket dan sepak bola.' },
          { hanzi: '我和小强打乒乓球。', pinyin: 'Wǒ hé Xiǎoqiáng dǎ pīngpāngqiú.', meaning: 'Saya dan Xiaoqiang bermain tenis meja.' },
          { hanzi: '小红不打球，她跳绳。', pinyin: 'Xiǎohóng bù dǎ qiú, tā tiàoshéng.', meaning: 'Xiaohong tidak bermain bola, dia bermain lompat tali.' }
        ]
      },
      10: {
        title: '第十课：我的一天',
        pinyin: 'Dì Shí Kè: Wǒ de Yī Tiān',
        meaning: 'Pelajaran 10: Keseharianku (Han Yu 1 Halaman 37-39)',
        dinoMascot: '🦖 Stego Menghargai Waktu',
        summary: 'Rutinitas sehari-hari mulai dari sekolah pagi, bermain saat istirahat, hingga mengerjakan PR (一寸光阴一寸金).',
        sentences: [
          { hanzi: '早上我去学校。', pinyin: 'Zǎoshang wǒ qù xuéxiào.', meaning: 'Pagi hari saya pergi ke sekolah.' },
          { hanzi: '上课了，老师讲课，我们听课。', pinyin: 'Shàngkè le, lǎoshī jiǎngkè, wǒmen tīngkè.', meaning: 'Saat belajar, guru mengajar, kita mendengarkan dengan baik.' },
          { hanzi: '下课了，我和同学们做游戏。', pinyin: 'Xiàkè le, wǒ hé tóngxuémen zuò yóuxì.', meaning: 'Jam istirahat, saya dan teman-teman bermain permainan.' },
          { hanzi: '放学了，我回家做作业。', pinyin: 'Fàngxué le, wǒ huí jiā zuò zuòyè.', meaning: 'Pulang sekolah, saya pulang ke rumah mengerjakan PR.' },
          { hanzi: '一寸光阴一寸金，寸金难买寸光阴。', pinyin: 'Yí cùn guāngyīn yí cùn jīn, cùn jīn nán mǎi cùn guāngyīn.', meaning: 'Waktu amat berharga laksana emas, emas sebanyak apapun tak dapat membeli waktu.' }
        ]
      },
      11: {
        title: '第十一课：这是我的书',
        pinyin: 'Dì Shíyī Kè: Zhè Shì Wǒ de Shū',
        meaning: 'Pelajaran 11: Ini Adalah Bukuku (Han Yu 1 Halaman 41-42)',
        dinoMascot: '🦕 Tricera Merawat Buku',
        summary: 'Mengenal kepemilikan alat-alat sekolah di atas meja bersama teman sebangku.',
        sentences: [
          { hanzi: '这是我的书，那是我同桌的书。', pinyin: 'Zhè shì wǒ de shū, nà shì wǒ tóngzhuō de shū.', meaning: 'Ini adalah bukuku, itu adalah buku teman sebangkuku.' },
          { hanzi: '这是小强的书包。', pinyin: 'Zhè shì Xiǎoqiáng de shūbāo.', meaning: 'Ini adalah tas sekolah Xiaoqiang.' },
          { hanzi: '那是谁的书包？那是小华的书包。', pinyin: 'Nà shì shéi de shūbāo? Nà shì Xiǎohuá de shūbāo.', meaning: 'Itu tas sekolah siapa? Itu tas sekolah Xiaohua.' }
        ]
      },
      12: {
        title: '第十二课：我有两本书',
        pinyin: 'Dì Shí\'èr Kè: Wǒ Yǒu Liǎng Běn Shū',
        meaning: 'Pelajaran 12: Aku Punya Dua Buku (Han Yu 1 Halaman 45-46)',
        dinoMascot: '🌟 Dino Berhitung Barang',
        summary: 'Belajar kata satuan (量词: 本, 支, 个) untuk menghitung isi tas sekolah.',
        sentences: [
          { hanzi: '这是我的书包。', pinyin: 'Zhè shì wǒ de shūbāo.', meaning: 'Ini adalah tas sekolahku.' },
          { hanzi: '我有两本书、四支笔和五个本子。', pinyin: 'Wǒ yǒu liǎng běn shū, sì zhī bǐ hé wǔ gè běnzi.', meaning: 'Saya punya dua buku, empat batang pena, dan lima buku tulis.' },
          { hanzi: '你有几本书？', pinyin: 'Nǐ yǒu jǐ běn shū?', meaning: 'Kamu punya berapa buku?' }
        ]
      },
      13: {
        title: '第十三课：你家有电脑吗',
        pinyin: 'Dì Shísān Kè: Nǐ Jiā Yǒu Diànnǎo Ma',
        meaning: 'Pelajaran 13: Apakah di Rumahmu Ada Komputer (Han Yu 1 Halaman 49-50)',
        dinoMascot: '🦖 Rexy Belajar Komputer',
        summary: 'Menanyakan keberadaan peralatan modern seperti komputer, sepeda, dan foto keluarga.',
        sentences: [
          { hanzi: '我家有两台电脑。', pinyin: 'Wǒ jiā yǒu liǎng tái diànnǎo.', meaning: 'Di rumahku ada dua unit komputer.' },
          { hanzi: '爸爸有一台，哥哥有一台。', pinyin: 'Bàba yǒu yī tái, gēge yǒu yī tái.', meaning: 'Ayah punya satu unit, kakak laki-laki punya satu unit.' },
          { hanzi: '我没有电脑。你家有电脑吗？', pinyin: 'Wǒ méiyǒu diànnǎo. Nǐ jiā yǒu diànnǎo ma?', meaning: 'Saya tidak punya komputer. Apakah di rumahmu ada komputer?' }
        ]
      },
      14: {
        title: '第十四课：书在书架上',
        pinyin: 'Dì Shísì Kè: Shū Zài Shūjià Shang',
        meaning: 'Pelajaran 14: Buku Ada di Rak Buku (Han Yu 1 Halaman 53-54)',
        dinoMascot: '🦕 Brachy di Perpustakaan',
        summary: 'Menunjukkan posisi dan lokasi perpustakaan sekolah serta letak buku di rak.',
        sentences: [
          { hanzi: '我们学校有一个图书馆。', pinyin: 'Wǒmen xuéxiào yǒu yī gè túshūguǎn.', meaning: 'Sekolah kita memiliki sebuah perpustakaan.' },
          { hanzi: '图书馆在教室的右边。', pinyin: 'Túshūguǎn zài jiàoshì de yòubian.', meaning: 'Perpustakaan berada di sebelah kanan ruang kelas.' },
          { hanzi: '图书馆的书在哪儿？书在书架上。', pinyin: 'Túshūguǎn de shū zài nǎr? Shū zài shūjià shang.', meaning: 'Buku-buku perpustakaan ada di mana? Buku ada di atas rak buku.' }
        ]
      },
      15: {
        title: '第十五课：我的房间',
        pinyin: 'Dì Shíwǔ Kè: Wǒ de Fángjiān',
        meaning: 'Pelajaran 15: Kamarku (Han Yu 1 Halaman 57-59)',
        dinoMascot: '🦖 Stego Kamar Rapi',
        summary: 'Menjelaskan perabot di dalam kamar tidur yang rapi dan nyaman (一心不可二用).',
        sentences: [
          { hanzi: '这是我的房间。', pinyin: 'Zhè shì wǒ de fángjiān.', meaning: 'Ini adalah kamarku.' },
          { hanzi: '这儿有一张床、一个书架、一个衣柜、两张桌子和两把椅子。', pinyin: 'Zhèr yǒu yī zhāng chuáng, yī gè shūjià, yī gè yīguì, liǎng zhāng zhuōzi hé liǎng bǎ yǐzi.', meaning: 'Di sini ada sebuah tempat tidur, sebuah rak buku, sebuah lemari pakaian, dua buah meja, dan dua buah kursi.' },
          { hanzi: '我的电脑在桌子上边，足球在圆桌下边。', pinyin: 'Wǒ de diànnǎo zài zhuōzi shàngbian, zúqiú zài yuánzhuō xiàbian.', meaning: 'Komputeku ada di atas meja, bola sepak ada di bawah meja bundar.' },
          { hanzi: '一心不可二用。', pinyin: 'Yì xīn bù kě èr yòng.', meaning: 'Harus bersungguh-sungguh dan fokus pada satu tujuan (Peribahasa Tiongkok).' }
        ]
      }
    }
  },

  // 5. Fungsi Pintar Mengambil Bacaan Cerita
  getUnitStory: function(bookId, unitId) {
    const b = parseInt(bookId) || 1;
    const u = parseInt(unitId) || 1;

    if (this.unitStories && this.unitStories[b] && this.unitStories[b][u]) {
      return this.unitStories[b][u];
    }

    const unitTitle = (this.unitTitles[b] && this.unitTitles[b][u]) || `Pelajaran Unit ${u}`;
    const mascotList = ['🦖 Rexy Si T-Rex Cilik', '🦕 Brachy Si Leher Panjang', '🦤 Ptera Si Pterodactyl', '🦖 Stego Si Perisai', '🦕 Tricera Si Tanduk Tiga', '🌟 Dino Juara Emas'];
    const mascot = mascotList[(b + u) % mascotList.length];

    return {
      book: b,
      unit: u,
      title: `${unitTitle}`,
      pinyin: `Hànyǔ Dì ${b} Cè • Dì ${u} Kè`,
      meaning: `Teks Bacaan Han Yu ${b} Unit ${u} (${unitTitle})`,
      dinoMascot: mascot,
      summary: `Materi bacaan kurikulum Han Yu Buku ${b} Unit ${u} dengan topik ${unitTitle}.`,
      sentences: [
        {
          hanzi: `欢迎学习汉语第${b}册第${u}课：${unitTitle}。`,
          pinyin: `Huānyíng xuéxí Hànyǔ dì ${b} cè dì ${u} kè: ${unitTitle}.`,
          meaning: `Selamat belajar buku Han Yu ${b} unit ${u}: ${unitTitle}.`
        },
        {
          hanzi: `我们要认真听发音，大声朗读课文，掌握重点生词。`,
          pinyin: `Wǒmen yào rènzhēn tīng fāyīn, dà shēng lǎngdú kèwén, zhǎngwò zhòngdiǎn shēngcí.`,
          meaning: `Kita harus menyimak pelafalan dengan seksama, membaca teks dengan lantang, dan menguasai kosakata penting.`
        },
        {
          hanzi: `持之以恒地练习，学好中文，快乐成长！`,
          pinyin: `Chí zhī yǐ héng de liànxí, xué hǎo Zhōngwén, kuàilè chéngzhǎng!`,
          meaning: `Berlatih dengan tekun tanpa henti, menguasai bahasa Mandarin, dan tumbuh dengan gembira!`
        }
      ]
    };
  },

  // 6. Modul 3: Kartu Mencocokkan Kata & Gambar Sesuai Unit Han Yu 1
  matchVocabItems: [
    // Unit 1
    { id: 'm1_1', hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'Halo', book: 1, unit: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">你好</text></svg>' },
    { id: 'm1_2', hanzi: '老师', pinyin: 'lǎoshī', meaning: 'Guru', book: 1, unit: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">老师</text></svg>' },
    { id: 'm1_3', hanzi: '谢谢', pinyin: 'xièxie', meaning: 'Terima Kasih', book: 1, unit: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">谢谢</text></svg>' },
    { id: 'm1_4', hanzi: '再见', pinyin: 'zàijiàn', meaning: 'Sampai Jumpa', book: 1, unit: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">再见</text></svg>' },

    // Unit 2
    { id: 'm2_1', hanzi: '爸爸', pinyin: 'bàba', meaning: 'Ayah', book: 1, unit: 2, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">爸爸</text></svg>' },
    { id: 'm2_2', hanzi: '妈妈', pinyin: 'māma', meaning: 'Ibu', book: 1, unit: 2, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">妈妈</text></svg>' },
    { id: 'm2_3', hanzi: '爱', pinyin: 'ài', meaning: 'Cinta / Sayang', book: 1, unit: 2, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFEBEE"/><text x="50" y="66" font-size="44" font-weight="900" fill="#C62828" text-anchor="middle">❤️</text></svg>' },
    { id: 'm2_4', hanzi: '我', pinyin: 'wǒ', meaning: 'Saya', book: 1, unit: 2, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="44" font-weight="900" fill="#2E7D32" text-anchor="middle">我</text></svg>' },

    // Unit 3
    { id: 'm3_1', hanzi: '医生', pinyin: 'yīshēng', meaning: 'Dokter', book: 1, unit: 3, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E0F7FA"/><text x="50" y="66" font-size="34" font-weight="900" fill="#00838F" text-anchor="middle">🩺</text></svg>' },
    { id: 'm3_2', hanzi: '警察', pinyin: 'jǐngchá', meaning: 'Polisi', book: 1, unit: 3, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8EAF6"/><text x="50" y="66" font-size="34" font-weight="900" fill="#283593" text-anchor="middle">👮</text></svg>' },
    { id: 'm3_3', hanzi: '学生', pinyin: 'xuésheng', meaning: 'Murid', book: 1, unit: 3, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF3E0"/><text x="50" y="66" font-size="34" font-weight="900" fill="#E65100" text-anchor="middle">🎒</text></svg>' },
    { id: 'm3_4', hanzi: '弟弟', pinyin: 'dìdi', meaning: 'Adik Laki-laki', book: 1, unit: 3, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">弟弟</text></svg>' },

    // Unit 6
    { id: 'm6_1', hanzi: '学校', pinyin: 'xuéxiào', meaning: 'Sekolah', book: 1, unit: 6, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF8E1"/><text x="50" y="66" font-size="34" font-weight="900" fill="#F57F17" text-anchor="middle">🏫</text></svg>' },
    { id: 'm6_2', hanzi: '医院', pinyin: 'yīyuàn', meaning: 'Rumah Sakit', book: 1, unit: 6, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFEBEE"/><text x="50" y="66" font-size="34" font-weight="900" fill="#C62828" text-anchor="middle">🏥</text></svg>' },
    { id: 'm6_3', hanzi: '公园', pinyin: 'gōngyuán', meaning: 'Taman', book: 1, unit: 6, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">🌳</text></svg>' },
    { id: 'm6_4', hanzi: '教室', pinyin: 'jiàoshì', meaning: 'Ruang Kelas', book: 1, unit: 6, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#EDE7F6"/><text x="50" y="66" font-size="34" font-weight="900" fill="#4527A0" text-anchor="middle">教室</text></svg>' },

    // Unit 8
    { id: 'm8_1', hanzi: '面条', pinyin: 'miàntiáo', meaning: 'Mie', book: 1, unit: 8, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF3E0"/><text x="50" y="66" font-size="34" font-weight="900" fill="#E65100" text-anchor="middle">🍜</text></svg>' },
    { id: 'm8_2', hanzi: '米饭', pinyin: 'mǐfàn', meaning: 'Nasi', book: 1, unit: 8, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#ECEFF1"/><text x="50" y="66" font-size="34" font-weight="900" fill="#37474F" text-anchor="middle">🍚</text></svg>' },
    { id: 'm8_3', hanzi: '饺子', pinyin: 'jiǎozi', meaning: 'Pangsit Jiaozi', book: 1, unit: 8, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFFDE7"/><text x="50" y="66" font-size="34" font-weight="900" fill="#F57F17" text-anchor="middle">🥟</text></svg>' },
    { id: 'm8_4', hanzi: '包子', pinyin: 'bāozi', meaning: 'Bakpao', book: 1, unit: 8, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF9C4"/><text x="50" y="66" font-size="34" font-weight="900" fill="#FBC02D" text-anchor="middle">🥟</text></svg>' },

    // Unit 9
    { id: 'm9_1', hanzi: '篮球', pinyin: 'lánqiú', meaning: 'Basket', book: 1, unit: 9, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF3E0"/><text x="50" y="66" font-size="34" font-weight="900" fill="#E65100" text-anchor="middle">🏀</text></svg>' },
    { id: 'm9_2', hanzi: '足球', pinyin: 'zúqiú', meaning: 'Sepak Bola', book: 1, unit: 9, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#ECEFF1"/><text x="50" y="66" font-size="34" font-weight="900" fill="#263238" text-anchor="middle">⚽</text></svg>' },
    { id: 'm9_3', hanzi: '乒乓球', pinyin: 'pīngpāngqiú', meaning: 'Tenis Meja', book: 1, unit: 9, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFEBEE"/><text x="50" y="66" font-size="34" font-weight="900" fill="#C62828" text-anchor="middle">🏓</text></svg>' },
    { id: 'm9_4', hanzi: '跳绳', pinyin: 'tiàoshéng', meaning: 'Lompat Tali', book: 1, unit: 9, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">跳绳</text></svg>' },

    // Unit 11 & 12
    { id: 'm11_1', hanzi: '书包', pinyin: 'shūbāo', meaning: 'Tas Sekolah', book: 1, unit: 11, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E3F2FD"/><text x="50" y="66" font-size="34" font-weight="900" fill="#1565C0" text-anchor="middle">🎒</text></svg>' },
    { id: 'm11_2', hanzi: '笔', pinyin: 'bǐ', meaning: 'Pena / Pensil', book: 1, unit: 11, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF3E0"/><text x="50" y="66" font-size="34" font-weight="900" fill="#EF6C00" text-anchor="middle">✏️</text></svg>' },
    { id: 'm11_3', hanzi: '尺子', pinyin: 'chǐzi', meaning: 'Penggaris', book: 1, unit: 11, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFFDE7"/><text x="50" y="66" font-size="34" font-weight="900" fill="#F57F17" text-anchor="middle">📐</text></svg>' },
    { id: 'm11_4', hanzi: '本子', pinyin: 'běnzi', meaning: 'Buku Tulis', book: 1, unit: 11, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#2E7D32" text-anchor="middle">📓</text></svg>' },

    // Unit 13, 14 & 15
    { id: 'm13_1', hanzi: '电脑', pinyin: 'diànnǎo', meaning: 'Komputer', book: 1, unit: 13, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E0F2F1"/><text x="50" y="66" font-size="34" font-weight="900" fill="#00695C" text-anchor="middle">💻</text></svg>' },
    { id: 'm14_1', hanzi: '图书馆', pinyin: 'túshūguǎn', meaning: 'Perpustakaan', book: 1, unit: 14, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#F3E5F5"/><text x="50" y="66" font-size="34" font-weight="900" fill="#6A1B9A" text-anchor="middle">📚</text></svg>' },
    { id: 'm15_1', hanzi: '床', pinyin: 'chuáng', meaning: 'Tempat Tidur', book: 1, unit: 15, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#FFF8E1"/><text x="50" y="66" font-size="34" font-weight="900" fill="#FF8F00" text-anchor="middle">🛏️</text></svg>' },
    { id: 'm15_2', hanzi: '桌子', pinyin: 'zhuōzi', meaning: 'Meja', book: 1, unit: 15, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#EFEBE9"/><text x="50" y="66" font-size="34" font-weight="900" fill="#4E342E" text-anchor="middle">🪑</text></svg>' }
  ],

  // 7. Modul 4: Soal Latihan Kuis Pilihan Berganda (Setiap Unit 1-15 Han Yu 1)
  strokeCountQuestions: [
    // Unit 1
    {
      id: 101,
      book: 1,
      unit: 1,
      type: 'meaning-match',
      question: 'Apakah arti dari sapaan "你好" (Nǐ hǎo) di Pelajaran 1?',
      audioText: '你好。请问这句话是什么意思？',
      hanzi: '你好',
      pinyin: 'nǐ hǎo',
      options: [
        { text: 'Halo / Apa Kabar', isCorrect: true },
        { text: 'Terima Kasih', isCorrect: false },
        { text: 'Sampai Jumpa', isCorrect: false },
        { text: 'Sama-sama', isCorrect: false }
      ],
      explanation: '你好 (nǐ hǎo) adalah sapaan ramah dalam bahasa Mandarin yang berarti "Halo".'
    },
    {
      id: 102,
      book: 1,
      unit: 1,
      type: 'count-stroke',
      question: 'Berapakah jumlah guratan dari karakter dasar "一" (yī)?',
      audioText: '一。请问这个汉字有几画？',
      hanzi: '一',
      pinyin: 'yī',
      options: [
        { text: '1 Guratan (横)', isCorrect: true },
        { text: '2 Guratan', isCorrect: false },
        { text: '3 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 一 (yī) hanya terdiri dari 1 goresan mendatar (横 - héng).'
    },

    // Unit 2
    {
      id: 201,
      book: 1,
      unit: 2,
      type: 'meaning-match',
      question: 'Di Pelajaran 2, apakah arti dari kalimat "我爱爸爸妈妈"?',
      audioText: '我爱爸爸妈妈。请问这句话是什么意思？',
      hanzi: '我爱爸爸妈妈',
      pinyin: 'wǒ ài bàba māma',
      options: [
        { text: 'Saya sayang ayah dan ibu', isCorrect: true },
        { text: 'Ayah dan ibu saya adalah guru', isCorrect: false },
        { text: 'Saya pergi ke sekolah', isCorrect: false },
        { text: 'Nama saya Wang Xiaohua', isCorrect: false }
      ],
      explanation: '我 (saya) + 爱 (sayang/cinta) + 爸爸妈妈 (ayah dan ibu).'
    },
    {
      id: 202,
      book: 1,
      unit: 2,
      type: 'count-stroke',
      question: 'Berapakah jumlah guratan karakter "我" (wǒ - saya)?',
      audioText: '我。请问这个汉字一共有几画？',
      hanzi: '我',
      pinyin: 'wǒ',
      options: [
        { text: '7 Guratan', isCorrect: true },
        { text: '6 Guratan', isCorrect: false },
        { text: '8 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false }
      ],
      explanation: '我 (wǒ) terdiri dari 7 guratan: 撇, 横, 竖钩, 提, 斜钩, 撇, 点.'
    },

    // Unit 3
    {
      id: 301,
      book: 1,
      unit: 3,
      type: 'meaning-match',
      question: 'Di Pelajaran 3 "爸爸是老师", apakah profesi dari 妈妈 (ibu)?',
      audioText: '爸爸是老师，妈妈是医生。请问妈妈的职业是什么？',
      hanzi: '医生',
      pinyin: 'yīshēng',
      options: [
        { text: 'Dokter', isCorrect: true },
        { text: 'Guru', isCorrect: false },
        { text: 'Polisi', isCorrect: false },
        { text: 'Siswa', isCorrect: false }
      ],
      explanation: 'Di teks Pelajaran 3: 妈妈是医生 (Ibu adalah dokter).'
    },
    {
      id: 302,
      book: 1,
      unit: 3,
      type: 'meaning-match',
      question: 'Apakah profesi dari 叔叔 (paman) di Pelajaran 3?',
      audioText: '叔叔是警察。请问叔叔的职业是什么？',
      hanzi: '警察',
      pinyin: 'jǐngchá',
      options: [
        { text: 'Polisi', isCorrect: true },
        { text: 'Dokter', isCorrect: false },
        { text: 'Guru', isCorrect: false },
        { text: 'Supir', isCorrect: false }
      ],
      explanation: 'Di buku Han Yu 1 hal 9: 叔叔是警察 (Paman adalah polisi).'
    },

    // Unit 4
    {
      id: 401,
      book: 1,
      unit: 4,
      type: 'meaning-match',
      question: 'Apakah arti dari pertanyaan "你叫什么名字"?',
      audioText: '你叫什么名字？请问这句话是什么意思？',
      hanzi: '名字',
      pinyin: 'míngzi',
      options: [
        { text: 'Siapa namamu?', isCorrect: true },
        { text: 'Berapa umurmu?', isCorrect: false },
        { text: 'Di mana rumahmu?', isCorrect: false },
        { text: 'Kamu pergi ke mana?', isCorrect: false }
      ],
      explanation: '你 (kamu) + 叫 (bernama/dipanggil) + 什么 (apa) + 名字 (nama).'
    },

    // Unit 5
    {
      id: 501,
      book: 1,
      unit: 5,
      type: 'meaning-match',
      question: 'Ketika seseorang mengucapkan "对不起" (maaf), kita menjawab dengan:',
      audioText: '对不起。我们应该怎么回答？',
      hanzi: '没关系',
      pinyin: 'méi guānxi',
      options: [
        { text: '没关系 (Tidak apa-apa)', isCorrect: true },
        { text: '不客气 (Sama-sama)', isCorrect: false },
        { text: '谢谢 (Terima kasih)', isCorrect: false },
        { text: '再见 (Sampai jumpa)', isCorrect: false }
      ],
      explanation: '对不起 (Maaf) dijawab dengan 没关系 (Tidak apa-apa / Sama-sama tidak masalah).'
    },

    // Unit 6
    {
      id: 601,
      book: 1,
      unit: 6,
      type: 'meaning-match',
      question: 'Di Pelajaran 6 "哥哥去学校", ke manakah 爷爷 (kakek) pergi?',
      audioText: '爷爷去公园。请问爷爷去哪儿？',
      hanzi: '公园',
      pinyin: 'gōngyuán',
      options: [
        { text: 'Taman (公园)', isCorrect: true },
        { text: 'Sekolah (学校)', isCorrect: false },
        { text: 'Rumah Sakit (医院)', isCorrect: false },
        { text: 'Taman Kanak-kanak (幼儿园)', isCorrect: false }
      ],
      explanation: 'Teks hal 21: 爷爷去公园 (Kakek pergi ke taman).'
    },

    // Unit 7
    {
      id: 701,
      book: 1,
      unit: 7,
      type: 'meaning-match',
      question: 'Ketika pelajaran dimulai, apakah yang dikatakan di Pelajaran 7?',
      audioText: '上课了，我们进教室吧！请问是什么意思？',
      hanzi: '上课',
      pinyin: 'shàng kè',
      options: [
        { text: 'Pelajaran dimulai, mari masuk kelas!', isCorrect: true },
        { text: 'Pelajaran selesai, mari bermain!', isCorrect: false },
        { text: 'Waktunya makan siang bersama!', isCorrect: false },
        { text: 'Mari kita pergi ke lapangan!', isCorrect: false }
      ],
      explanation: '上课了 (Pelajaran dimulai) + 我们进教室吧 (Mari kita masuk ke dalam kelas).'
    },

    // Unit 8
    {
      id: 801,
      book: 1,
      unit: 8,
      type: 'meaning-match',
      question: 'Di Pelajaran 8 "我们吃午饭", apakah makanan yang dimakan oleh 老师 (guru)?',
      audioText: '老师吃饺子。请问老师吃什么？',
      hanzi: '饺子',
      pinyin: 'jiǎozi',
      options: [
        { text: 'Pangsit Jiaozi (饺子)', isCorrect: true },
        { text: 'Mie (面条)', isCorrect: false },
        { text: 'Nasi (米饭)', isCorrect: false },
        { text: 'Roti (面包)', isCorrect: false }
      ],
      explanation: 'Teks hal 30: 我吃面条，小红和小强吃米饭，老师吃饺子。'
    },

    // Unit 9
    {
      id: 901,
      book: 1,
      unit: 9,
      type: 'meaning-match',
      question: 'Di Pelajaran 9 "小华打球", aktivitas apakah yang dimainkan oleh 小红 (Xiaohong)?',
      audioText: '小红不打球，她跳绳。请问小红做什么运动？',
      hanzi: '跳绳',
      pinyin: 'tiàoshéng',
      options: [
        { text: 'Lompat Tali (跳绳)', isCorrect: true },
        { text: 'Basket (篮球)', isCorrect: false },
        { text: 'Sepak Bola (足球)', isCorrect: false },
        { text: 'Tenis Meja (乒乓球)', isCorrect: false }
      ],
      explanation: 'Teks hal 34: 小红不打球，她跳绳 (Xiaohong tidak main bola, dia bermain lompat tali).'
    },

    // Unit 10
    {
      id: 1001,
      book: 1,
      unit: 10,
      type: 'meaning-match',
      question: 'Apakah peribahasa terkenal tentang menghargai waktu di Pelajaran 10?',
      audioText: '一寸光阴一寸金，寸金难买寸光阴。',
      hanzi: '一寸光阴一寸金',
      pinyin: 'yí cùn guāngyīn yí cùn jīn',
      options: [
        { text: 'Waktu laksana emas yang tak ternilai harganya', isCorrect: true },
        { text: 'Belajar dengan tekun setiap hari', isCorrect: false },
        { text: 'Mengerjakan PR bersama teman', isCorrect: false },
        { text: 'Bermain setelah pulang sekolah', isCorrect: false }
      ],
      explanation: '一寸光阴一寸金，寸金难买寸光阴 bermakna satu inci waktu bernilai satu inci emas, jangan sia-siakan waktu.'
    },

    // Unit 11
    {
      id: 1101,
      book: 1,
      unit: 11,
      type: 'meaning-match',
      question: 'Apakah arti dari benda "书包" (shūbāo) di Pelajaran 11?',
      audioText: '这是小强的书包。请问书包是什么？',
      hanzi: '书包',
      pinyin: 'shūbāo',
      options: [
        { text: 'Tas Sekolah', isCorrect: true },
        { text: 'Buku Tulis', isCorrect: false },
        { text: 'Kotak Pensil', isCorrect: false },
        { text: 'Penggaris', isCorrect: false }
      ],
      explanation: '书 (buku) + 包 (tas/bungkus) = Tas Sekolah.'
    },

    // Unit 12
    {
      id: 1201,
      book: 1,
      unit: 12,
      type: 'meaning-match',
      question: 'Di Pelajaran 12, berapakah isi buku dan pena yang ada di dalam tas Xiaohua?',
      audioText: '我有两本书、四支笔和五个本子。',
      hanzi: '两本书',
      pinyin: 'liǎng běn shū',
      options: [
        { text: '2 Buku dan 4 Pena', isCorrect: true },
        { text: '3 Buku dan 5 Pena', isCorrect: false },
        { text: '1 Buku dan 2 Pena', isCorrect: false },
        { text: '5 Buku dan 4 Pena', isCorrect: false }
      ],
      explanation: 'Teks hal 46: 我有两本书、四支笔和五个本子。'
    },

    // Unit 13
    {
      id: 1301,
      book: 1,
      unit: 13,
      type: 'meaning-match',
      question: 'Apakah kata satuan (量词) yang tepat untuk komputer "电脑"?',
      audioText: '我家有两台电脑。请问电脑的量词是什么？',
      hanzi: '台',
      pinyin: 'tái',
      options: [
        { text: '台 (tái)', isCorrect: true },
        { text: '本 (běn)', isCorrect: false },
        { text: '支 (zhī)', isCorrect: false },
        { text: '张 (zhāng)', isCorrect: false }
      ],
      explanation: 'Untuk alat elektronik dan mesin seperti komputer digunakan kata satuan 台 (tái).'
    },

    // Unit 14
    {
      id: 1401,
      book: 1,
      unit: 14,
      type: 'meaning-match',
      question: 'Di Pelajaran 14, di manakah letak buku-buku perpustakaan berada?',
      audioText: '图书馆的书在哪儿？书在书架上。',
      hanzi: '书架上',
      pinyin: 'shūjià shang',
      options: [
        { text: 'Di atas rak buku (书架上)', isCorrect: true },
        { text: 'Di dalam tas sekolah (书包里)', isCorrect: false },
        { text: 'Di bawah meja (桌子下)', isCorrect: false },
        { text: 'Di atas kursi (椅子上)', isCorrect: false }
      ],
      explanation: 'Teks hal 54: 图书馆的书在哪儿？书在书架上。'
    },

    // Unit 15
    {
      id: 1501,
      book: 1,
      unit: 15,
      type: 'meaning-match',
      question: 'Di Pelajaran 15 "我的房间", di manakah letak 足球 (bola sepak)?',
      audioText: '足球在圆桌下边。请问足球在哪儿？',
      hanzi: '圆桌下边',
      pinyin: 'yuánzhuō xiàbian',
      options: [
        { text: 'Di bawah meja bundar (圆桌下边)', isCorrect: true },
        { text: 'Di atas tempat tidur (床上边)', isCorrect: false },
        { text: 'Di dalam lemari (衣柜里)', isCorrect: false },
        { text: 'Di atas meja (桌子上边)', isCorrect: false }
      ],
      explanation: 'Teks hal 57: 我的电脑在桌子上边，足球在圆桌下边。'
    }
  ]
};

// Aliases
DINO_DATA.strokeQuizQuestions = DINO_DATA.strokeCountQuestions;

if (typeof window !== 'undefined') {
  window.DINO_DATA = DINO_DATA;
}