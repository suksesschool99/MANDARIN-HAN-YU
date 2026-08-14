/**
 * Dino Mandarin Adventure - Data Module (Han Yu 1 s/d Han Yu 15)
 * Database Kosakata, Pengaturan Bacaan Cerita Per-Unit (15 Buku x 10 Unit),
 * Gambar Kartu, & Soal Kuis Pilihan Berganda
 */

const DINO_DATA = {
  // 1. Metadata Buku Han Yu 1 s/d Han Yu 15
  books: [
    { id: 1, title: 'Han Yu 1 (汉语 第一册)', desc: 'Angka, Alam Dasar, Anggota Tubuh, Sapaan, Keluarga & Arah' },
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

  // 2. Metadata Judul Unit Buku Han Yu 1 s/d Han Yu 15 (10 Unit Lengkap per Buku)
  unitTitles: {
    1: { 1: 'Angka 1-10', 2: 'Alam & Tubuh Dasar', 3: 'Sapaan & Kata Ganti', 4: 'Keluarga', 5: 'Ukuran & Satuan', 6: 'Arah & Posisi', 7: 'Cuaca & Benda Alam', 8: 'Benda Kelas & Rumah', 9: 'Makanan & Minuman', 10: 'Gerakan & Aktivitas' },
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

  // 3. Dataset Kosakata Lengkap Per Buku & Unit
  vocabList: [
    // Han Yu 1
    { id: 1, hanzi: '一', pinyin: 'yī', meaning: 'Satu', strokes: 1, book: 1, unit: 1, strokeSteps: ['1. 横 (héng)'], tip: 'Satu garis mendatar dari kiri ke kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">1</text></svg>' },
    { id: 2, hanzi: '二', pinyin: 'èr', meaning: 'Dua', strokes: 2, book: 1, unit: 1, strokeSteps: ['1. 横 (pendek)', '2. 横 (panjang)'], tip: 'Dua garis mendatar, atas pendek, bawah panjang.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">2</text></svg>' },
    { id: 3, hanzi: '三', pinyin: 'sān', meaning: 'Tiga', strokes: 3, book: 1, unit: 1, strokeSteps: ['1. 横 (pendek)', '2. 横 (sedang)', '3. 横 (panjang)'], tip: 'Tiga garis mendatar, garis tengah terpendek.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">3</text></svg>' },
    { id: 4, hanzi: '四', pinyin: 'sì', meaning: 'Empat', strokes: 5, book: 1, unit: 1, strokeSteps: ['1. 竖', '2. 横折', '3. 撇', '4. 竖弯', '5. 横'], tip: 'Kotak dengan dua goresan di dalam, tutup bawah terakhir.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">4</text></svg>' },
    { id: 5, hanzi: '五', pinyin: 'wǔ', meaning: 'Lima', strokes: 4, book: 1, unit: 1, strokeSteps: ['1. 横', '2. 竖', '3. 横折', '4. 横'], tip: 'Tulis garis atas, garis tegak kiri, lalu sudut dan tutup bawah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">5</text></svg>' },
    { id: 6, hanzi: '六', pinyin: 'liù', meaning: 'Enam', strokes: 4, book: 1, unit: 1, strokeSteps: ['1. 点', '2. 横', '3. 撇', '4. 点'], tip: 'Titik di atas, garis mendatar, disusul dua kaki.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">6</text></svg>' },
    { id: 7, hanzi: '七', pinyin: 'qī', meaning: 'Tujuh', strokes: 2, book: 1, unit: 1, strokeSteps: ['1. 横', '2. 竖弯钩'], tip: 'Garis mendatar agak miring disilang kait melengkung.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">7</text></svg>' },
    { id: 8, hanzi: '八', pinyin: 'bā', meaning: 'Delapan', strokes: 2, book: 1, unit: 1, strokeSteps: ['1. 撇', '2. 捺'], tip: 'Dua sapuan saling membuka (kiri pendek, kanan panjang).', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">8</text></svg>' },
    { id: 9, hanzi: '九', pinyin: 'jiǔ', meaning: 'Sembilan', strokes: 2, book: 1, unit: 1, strokeSteps: ['1. 撇', '2. 横折弯钩'], tip: 'Sapuan miring kiri dulu, lalu sudut kait melengkung.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">9</text></svg>' },
    { id: 10, hanzi: '十', pinyin: 'shí', meaning: 'Sepuluh', strokes: 2, book: 1, unit: 1, strokeSteps: ['1. 横', '2. 竖'], tip: 'Tanda silang tambah: mendatar dulu baru tegak lurus.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="42" fill="#E8F5E9"/><text x="50" y="66" font-size="52" font-weight="900" fill="#2E7D32" text-anchor="middle">10</text></svg>' },
    
    // Alam & Tubuh (Han Yu 1 Unit 2)
    { id: 11, hanzi: '山', pinyin: 'shān', meaning: 'Gunung', strokes: 3, book: 1, unit: 2, strokeSteps: ['1. 竖', '2. 竖折', '3. 竖'], tip: 'Puncak tengah tinggi diapit dua puncak samping.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><polygon points="10,80 35,30 60,80" fill="#8D6E63"/><polygon points="40,80 65,20 90,80" fill="#6D4C41"/><polygon points="25,80 50,40 75,80" fill="#A1887F"/></svg>' },
    { id: 12, hanzi: '水', pinyin: 'shuǐ', meaning: 'Air', strokes: 4, book: 1, unit: 2, strokeSteps: ['1. 竖钩', '2. 横撇', '3. 撇', '4. 捺'], tip: 'Garis tegak berujung kait di tengah, lalu sapuan kiri dan kanan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M20,60 Q50,30 80,60 T100,60" fill="none" stroke="#29B6F6" stroke-width="8" stroke-linecap="round"/><path d="M10,75 Q40,45 70,75 T90,75" fill="none" stroke="#0288D1" stroke-width="6" stroke-linecap="round"/></svg>' },
    { id: 13, hanzi: '日', pinyin: 'rì', meaning: 'Matahari', strokes: 4, book: 1, unit: 2, strokeSteps: ['1. 竖', '2. 横折', '3. 横', '4. 横'], tip: 'Bentuk kotak matahari dengan garis mendatar di dalamnya.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="28" fill="#FFA000"/><path d="M50,12 L50,2 M50,88 L50,98 M12,50 L2,50 M88,50 L98,50" stroke="#FF8F00" stroke-width="6" stroke-linecap="round"/></svg>' },
    { id: 14, hanzi: '月', pinyin: 'yuè', meaning: 'Bulan', strokes: 4, book: 1, unit: 2, strokeSteps: ['1. 竖撇', '2. 横折钩', '3. 横', '4. 横'], tip: 'Bentuk bulan sabit yang anggun dengan dua garis di dalam.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M65,20 A32,32 0 1,0 65,80 A24,24 0 0,1 65,20 Z" fill="#FDD835"/></svg>' },
    { id: 15, hanzi: '木', pinyin: 'mù', meaning: 'Pohon/Kayu', strokes: 4, book: 1, unit: 2, strokeSteps: ['1. 横', '2. 竖', '3. 撇', '4. 捺'], tip: 'Batang pohon tegak dengan cabang dan akar melebar.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><rect x="44" y="55" width="12" height="35" fill="#795548"/><circle cx="50" cy="40" r="28" fill="#43A047"/></svg>' },
    { id: 16, hanzi: '火', pinyin: 'huǒ', meaning: 'Api', strokes: 4, book: 1, unit: 2, strokeSteps: ['1. 点', '2. 撇', '3. 撇', '4. 捺'], tip: 'Titik kiri, sapuan kanan, lalu dua kaki api membara.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M50,15 C55,35 75,45 70,70 C65,85 40,88 35,75 C30,65 40,55 35,45 C45,40 45,25 50,15 Z" fill="#E53935"/></svg>' },

    // Han Yu 2 (Dinosaurus & Sekolah)
    { id: 17, hanzi: '龙', pinyin: 'lóng', meaning: 'Dinosaurus/Naga', strokes: 5, book: 2, unit: 6, strokeSteps: ['1. 撇', '2. 横', '3. 竖折斜钩', '4. 撇', '5. 点'], tip: 'Karakter naga dan dinosaurus dengan ekor yang gagah.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M25,65 C20,50 35,30 55,30 C75,30 85,45 80,65 C75,78 60,82 45,80 Z" fill="#4CAF50"/></svg>' },
    { id: 18, hanzi: '蛋', pinyin: 'dàn', meaning: 'Telur', strokes: 11, book: 2, unit: 6, strokeSteps: ['1. 横折', '2. 横', '3. 竖', '4. 横', '5. 捺', '6. 竖', '7. 横折', '8. 横', '9. 竖', '10. 提', '11. 点'], tip: 'Telur dino yang siap menetas menjadi bayi dino.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><ellipse cx="50" cy="55" rx="30" ry="38" fill="#FFF9C4" stroke="#FBC02D" stroke-width="4"/><circle cx="42" cy="45" r="5" fill="#81C784"/></svg>' },
    { id: 19, hanzi: '学', pinyin: 'xué', meaning: 'Belajar', strokes: 8, book: 2, unit: 1, strokeSteps: ['1. 点', '2. 点', '3. 撇', '4. 点', '5. 横撇', '6. 横折', '7. 弯钩', '8. 横'], tip: 'Tiga titik mahkota di atas anak yang rajin belajar.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><rect x="25" y="30" width="50" height="42" rx="4" fill="#1E88E5"/><polygon points="25,30 50,48 75,30" fill="#1565C0"/><line x1="25" y1="72" x2="75" y2="72" stroke="#0D47A1" stroke-width="4"/></svg>' },
    { id: 20, hanzi: '书', pinyin: 'shū', meaning: 'Buku', strokes: 4, book: 2, unit: 1, strokeSteps: ['1. 横折', '2. 横折钩', '3. 竖', '4. 点'], tip: 'Buku pelajaran Mandarin yang sarat ilmu pengetahuan.', svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M20,25 C35,20 50,30 50,80 C35,75 20,78 20,78 Z" fill="#43A047"/><path d="M80,25 C65,20 50,30 50,80 C65,75 80,78 80,78 Z" fill="#66BB6A"/><line x1="50" y1="30" x2="50" y2="80" stroke="#2E7D32" stroke-width="3"/></svg>' }
  ],

  // 4. Pengaturan Bacaan Cerita & Teks Per-Unit (15 Buku x 10 Unit = 150 Unit Pembelajaran)
  unitStories: {
    1: {
      1: {
        title: '数字歌 (Berhitung 1-10)',
        pinyin: 'Shùzì Gē',
        meaning: 'Lagu Berhitung Angka 1 sampai 10 (Han Yu 1 Unit 1)',
        dinoMascot: '🦖 Rexy Si T-Rex Cilik',
        summary: 'Rexy belajar berhitung angka satu sampai sepuluh dengan gembira dan mudah.',
        sentences: [
          { hanzi: '一二三四五，上山看老虎。', pinyin: 'Yī èr sān sì wǔ, shàng shān kàn lǎohǔ.', meaning: 'Satu dua tiga empat lima, naik ke gunung melihat harimau.' },
          { hanzi: '六七八九十，数数真容易。', pinyin: 'Liù qī bā jiǔ shí, shǔshù zhēn róngyì.', meaning: 'Enam tujuh delapan sembilan sepuluh, berhitung sungguh mudah.' },
          { hanzi: '大家一起数，一二三四五六七八九十！', pinyin: 'Dàjiā yīqǐ shǔ, yī èr sān sì wǔ liù qī bā jiǔ shí!', meaning: 'Mari berhitung bersama: satu dua tiga empat lima enam tujuh delapan sembilan sepuluh!' }
        ]
      },
      2: {
        title: '美丽的大自然 (Alam Semesta)',
        pinyin: 'Měilì de Dà Zìrán',
        meaning: 'Keindahan Matahari, Bulan, Gunung & Air (Han Yu 1 Unit 2)',
        dinoMascot: '🦕 Brachy Si Leher Panjang',
        summary: 'Melihat matahari dan bulan di langit, serta gunung dan air jernih di bumi.',
        sentences: [
          { hanzi: '天上有太阳和月亮，照亮大地。', pinyin: 'Tiān shang yǒu tàiyáng hé yuèliang, zhàoliàng dàdì.', meaning: 'Di langit ada matahari dan bulan, menyinari daratan bumi.' },
          { hanzi: '地上有高山和清水，风景真优美。', pinyin: 'Dì shang yǒu gāoshān hé qīngshuǐ, fēngjǐng zhēn yōuměi.', meaning: 'Di bumi ada gunung tinggi dan air jernih, pemandangan sungguh indah.' },
          { hanzi: '山上有绿树，田里有红火。大自然真奇妙！', pinyin: 'Shān shang yǒu lǜshù, tián lǐ yǒu hónghuǒ. Dà zìrán zhēn qímiào!', meaning: 'Di gunung ada pohon hijau, di ladang ada api merah. Alam semesta sungguh menakjubkan!' }
        ]
      },
      3: {
        title: '你好与好朋友 (Sapaan)',
        pinyin: 'Nǐ Hǎo yǔ Hǎo Péngyou',
        meaning: 'Sapaan Ramah dan Persahabatan (Han Yu 1 Unit 3)',
        dinoMascot: '🦤 Ptera Si Pterodactyl',
        summary: 'Menyapa guru dan teman-teman sekolah dengan santun dan ramah.',
        sentences: [
          { hanzi: '你好！见到你很高兴。', pinyin: 'Nǐ hǎo! Jiàn dào nǐ hěn gāoxìng.', meaning: 'Halo! Senang sekali bertemu denganmu.' },
          { hanzi: '我是小学生，你是我的好朋友。', pinyin: 'Wǒ shì xiǎoxuéshēng, nǐ shì wǒ de hǎo péngyou.', meaning: 'Saya murid SD, kamu adalah sahabat baik saya.' },
          { hanzi: '谢谢你！不客气，我们一起快乐学习。', pinyin: 'Xièxie nǐ! Bù kèqi, wǒmen yīqǐ kuàilè xuéxí.', meaning: 'Terima kasih! Sama-sama, mari belajar dengan gembira bersama.' }
        ]
      },
      4: {
        title: '我爱我的家 (Keluarga)',
        pinyin: 'Wǒ Ài Wǒ de Jiā',
        meaning: 'Kasih Sayang dalam Keluarga (Han Yu 1 Unit 4)',
        dinoMascot: '🦖 Stego Si Punggung Perisai',
        summary: 'Keluarga bahagia bersama ayah dan ibu yang penuh kasih sayang.',
        sentences: [
          { hanzi: '我家有爸爸、妈妈和我。', pinyin: 'Wǒ jiā yǒu bàba, māma hé wǒ.', meaning: 'Di rumahku ada ayah, ibu, dan saya.' },
          { hanzi: '爸爸爱我，妈妈爱我，我也爱爸爸妈妈。', pinyin: 'Bàba ài wǒ, māma ài wǒ, wǒ yě ài bàba māma.', meaning: 'Ayah sayang saya, ibu sayang saya, saya juga sayang ayah dan ibu.' },
          { hanzi: '我们是幸福快乐的一家人。', pinyin: 'Wǒmen shì xìngfú kuàilè de yī jiā rén.', meaning: 'Kami adalah satu keluarga yang bahagia dan rukun.' }
        ]
      },
      5: {
        title: '比一比大小 (Ukuran)',
        pinyin: 'Bǐ Yī Bǐ Dà Xiǎo',
        meaning: 'Perbandingan Ukuran Besar & Kecil (Han Yu 1 Unit 5)',
        dinoMascot: '🦕 Tricera Si Tanduk Tiga',
        summary: 'Membedakan ukuran benda besar, kecil, panjang, dan pendek di sekitar kita.',
        sentences: [
          { hanzi: '大象大，小鸟小。', pinyin: 'Dàxiàng dà, xiǎoniǎo xiǎo.', meaning: 'Gajah besar, burung kecil.' },
          { hanzi: '西瓜大，苹果小，多吃水果身体好。', pinyin: 'Xīguā dà, píngguǒ xiǎo, duō chī shuǐguǒ shēntǐ hǎo.', meaning: 'Semangka besar, apel kecil, banyak makan buah badan sehat.' },
          { hanzi: '长长的树枝，短短的铅笔。', pinyin: 'Chángcháng de shùzhī, duǎnduǎn de qiānbǐ.', meaning: 'Ranting pohon yang panjang, pensil yang pendek.' }
        ]
      },
      6: {
        title: '方向歌 (Arah & Posisi)',
        pinyin: 'Fāngxiàng Gē',
        meaning: 'Mengenal Arah Depan, Belakang, Kiri & Kanan (Han Yu 1 Unit 6)',
        dinoMascot: '🌟 Dino Juara Emas',
        summary: 'Mengetahui posisi depan, belakang, kiri, kanan, atas, dan bawah.',
        sentences: [
          { hanzi: '前面是学校，后面是大山。', pinyin: 'Qiánmian shì xuéxiào, hòumian shì dàshān.', meaning: 'Di depan adalah sekolah, di belakang adalah gunung besar.' },
          { hanzi: '左边有一棵大树，右边有一条小河。', pinyin: 'Zuǒbian yǒu yī kē dàshù, yòubian yǒu yī tiáo xiǎohé.', meaning: 'Di sebelah kiri ada sebatang pohon rindang, di sebelah kanan ada sungai kecil.' },
          { hanzi: '抬起头是蓝天，低下头是绿草。', pinyin: 'Tái qǐ tóu shì lántiān, dī xià tóu shì lǜcǎo.', meaning: 'Angkat kepala ada langit biru, tundukkan kepala ada rumput hijau.' }
        ]
      },
      7: {
        title: '晴朗的天空 (Cuaca)',
        pinyin: 'Qínglǎng de Tiānkōng',
        meaning: 'Cuaca Cerah dan Awan Putih (Han Yu 1 Unit 7)',
        dinoMascot: '🦖 Rexy Si T-Rex Cilik',
        summary: 'Mengamati perubahan cuaca cerah, berawan, hingga hujan pelangi.',
        sentences: [
          { hanzi: '今天天气晴朗，微风轻轻吹。', pinyin: 'Jīntiān tiānqì qínglǎng, wēifēng qīngqīng chuī.', meaning: 'Hari ini cuaca cerah, angin sepoi-sepoi bertiup lembut.' },
          { hanzi: '蓝蓝的天上飘着朵朵白云。', pinyin: 'Lánlán de tiān shang piāo zhe duǒduǒ báiyún.', meaning: 'Di langit biru berarak gumpalan awan putih.' },
          { hanzi: '下雨过后，天上出现了美丽的彩虹！', pinyin: 'Xià yǔ guòhòu, tiān shang chūxiàn le měilì de cǎihóng!', meaning: 'Setelah hujan reda, di langit muncul pelangi yang indah!' }
        ]
      },
      8: {
        title: '我们的教室 (Ruang Kelas)',
        pinyin: 'Wǒmen de Jiàoshì',
        meaning: 'Aktivitas Belajar di Ruang Kelas (Han Yu 1 Unit 8)',
        dinoMascot: '🦕 Brachy Si Leher Panjang',
        summary: 'Suasana kelas yang rapi dengan buku, meja, kursi, dan belajar bersama.',
        sentences: [
          { hanzi: '教室里明亮又整洁。', pinyin: 'Jiàoshì lǐ míngliàng yòu zhěngjié.', meaning: 'Ruang kelas terang dan rapi.' },
          { hanzi: '桌子上有课本、练习本和笔袋。', pinyin: 'Zhuōzi shang yǒu kèběn, liànxíběn hé bǐdài.', meaning: 'Di atas meja ada buku pelajaran, buku tulis, dan kotak pensil.' },
          { hanzi: '老师教我们认字，同学们认真听讲。', pinyin: 'Lǎoshī jiāo wǒmen rèn zì, tóngxuémen rènzhēn tīngjiǎng.', meaning: 'Guru mengajari kami mengenal huruf, teman-teman menyimak dengan sungguh-sungguh.' }
        ]
      },
      9: {
        title: '美味的食物 (Makanan & Minuman)',
        pinyin: 'Měiwèi de Shíwù',
        meaning: 'Makanan Lezat & Minuman Sehat (Han Yu 1 Unit 9)',
        dinoMascot: '🦤 Ptera Si Pterodactyl',
        summary: 'Sarapan susu dan roti, makan siang nasi dan sayuran yang bergizi.',
        sentences: [
          { hanzi: '早上喝牛奶，吃热热的包子。', pinyin: 'Zǎoshang hē niúnǎi, chī rèrè de bāozi.', meaning: 'Pagi hari minum susu, makan bakpao hangat.' },
          { hanzi: '中午吃香喷喷的米饭和新鲜蔬菜。', pinyin: 'Zhōngwǔ chī xiāngpēnpēn de mǐfàn hé xīnxiān shūcài.', meaning: 'Siang hari makan nasi harum dan sayuran segar.' },
          { hanzi: '不挑食，多喝水，身体棒棒的！', pinyin: 'Bù tiāoshí, duō hē shuǐ, shēntǐ bàngbàng de!', meaning: 'Tidak pilih-pilih makanan, banyak minum air, tubuh jadi sehat kuat!' }
        ]
      },
      10: {
        title: '快乐做运动 (Gerakan & Olahraga)',
        pinyin: 'Kuàilè Zuò Yùndòng',
        meaning: 'Berolahraga dan Senam Ceria (Han Yu 1 Unit 10)',
        dinoMascot: '🦖 Stego Si Punggung Perisai',
        summary: 'Berolahraga lari dan melompat di lapangan agar badan sehat bugar.',
        sentences: [
          { hanzi: '拍拍小手，跺跺小脚，大家一起来做操。', pinyin: 'Pāipāi xiǎoshǒu, duòduò xiǎojiǎo, dàjiā yīqǐ lái zuò cāo.', meaning: 'Tepuk tangan kecil, hentakkan kaki kecil, mari senam bersama.' },
          { hanzi: '操场上跑一跑，跳一跳，笑声真欢畅。', pinyin: 'Cāochǎng shang pǎo yī pǎo, tiào yī tiào, xiàoshēng zhēn huānchàng.', meaning: 'Berlari dan melompat di lapangan, suara tawa sungguh riang gembira.' },
          { hanzi: '天天坚持锻炼，健康又聪明！', pinyin: 'Tiāntiān jiānchí duànliàn, jiànkāng yòu cōngmíng!', meaning: 'Setiap hari rajin berolahraga, sehat dan cerdas!' }
        ]
      }
    }
  },

  // 5. Fungsi Pintar Mengambil Bacaan Cerita Berdasarkan Buku & Unit (Han Yu 1 - 15)
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
      summary: `Materi bacaan kurikulum Han Yu Buku ${b} Unit ${u} dengan topik ${unitTitle} dan latihan pelafalan intonasi lamban.`,
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

  // 6. Dataset Kartu Game Mencocokkan (Match Game)
  matchVocabItems: [
    { id: 'm1', hanzi: '山', pinyin: 'shān', meaning: 'Gunung', book: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><polygon points="10,80 35,30 60,80" fill="#8D6E63"/><polygon points="40,80 65,20 90,80" fill="#6D4C41"/><polygon points="25,80 50,40 75,80" fill="#A1887F"/></svg>' },
    { id: 'm2', hanzi: '水', pinyin: 'shuǐ', meaning: 'Air', book: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M20,60 Q50,30 80,60 T100,60" fill="none" stroke="#29B6F6" stroke-width="8" stroke-linecap="round"/><path d="M10,75 Q40,45 70,75 T90,75" fill="none" stroke="#0288D1" stroke-width="6" stroke-linecap="round"/></svg>' },
    { id: 'm3', hanzi: '日', pinyin: 'rì', meaning: 'Matahari', book: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><circle cx="50" cy="50" r="28" fill="#FFA000"/><path d="M50,12 L50,2 M50,88 L50,98 M12,50 L2,50 M88,50 L98,50" stroke="#FF8F00" stroke-width="6" stroke-linecap="round"/></svg>' },
    { id: 'm4', hanzi: '月', pinyin: 'yuè', meaning: 'Bulan', book: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M65,20 A32,32 0 1,0 65,80 A24,24 0 0,1 65,20 Z" fill="#FDD835"/></svg>' },
    { id: 'm5', hanzi: '木', pinyin: 'mù', meaning: 'Pohon', book: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><rect x="44" y="55" width="12" height="35" fill="#795548"/><circle cx="50" cy="40" r="28" fill="#43A047"/></svg>' },
    { id: 'm6', hanzi: '火', pinyin: 'huǒ', meaning: 'Api', book: 1, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M50,15 C55,35 75,45 70,70 C65,85 40,88 35,75 C30,65 40,55 35,45 C45,40 45,25 50,15 Z" fill="#E53935"/></svg>' },
    { id: 'm7', hanzi: '龙', pinyin: 'lóng', meaning: 'Dinosaurus', book: 2, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><path d="M25,65 C20,50 35,30 55,30 C75,30 85,45 80,65 C75,78 60,82 45,80 Z" fill="#4CAF50"/></svg>' },
    { id: 'm8', hanzi: '蛋', pinyin: 'dàn', meaning: 'Telur Dino', book: 2, svg: '<svg viewBox="0 0 100 100" class="dino-svg"><ellipse cx="50" cy="55" rx="30" ry="38" fill="#FFF9C4" stroke="#FBC02D" stroke-width="4"/><circle cx="42" cy="45" r="5" fill="#81C784"/></svg>' }
  ],

  // 7. Dataset Soal Kuis Pilihan Berganda
  strokeCountQuestions: [
    {
      id: 1,
      book: 1,
      type: 'count-stroke',
      question: 'Berapakah jumlah guratan dari karakter Hanzi "一" (yī - satu)?',
      audioText: '一。请问这个汉字有几画？',
      hanzi: '一',
      pinyin: 'yī',
      options: [
        { text: '1 Guratan', isCorrect: true },
        { text: '2 Guratan', isCorrect: false },
        { text: '3 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 一 (yī) hanya terdiri dari 1 guratan mendatar (横 - héng).'
    },
    {
      id: 2,
      book: 1,
      type: 'count-stroke',
      question: 'Berapakah jumlah guratan dari karakter Hanzi "三" (sān - tiga)?',
      audioText: '三。请问这个汉字有几画？',
      hanzi: '三',
      pinyin: 'sān',
      options: [
        { text: '3 Guratan', isCorrect: true },
        { text: '2 Guratan', isCorrect: false },
        { text: '4 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 三 (sān) terdiri dari 3 guratan mendatar (横).'
    },
    {
      id: 3,
      book: 1,
      type: 'count-stroke',
      question: 'Berapakah jumlah guratan dari karakter Hanzi "水" (shuǐ - air)?',
      audioText: '水。请问这个汉字有几画？',
      hanzi: '水',
      pinyin: 'shuǐ',
      options: [
        { text: '4 Guratan', isCorrect: true },
        { text: '3 Guratan', isCorrect: false },
        { text: '5 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 水 (shuǐ) memiliki 4 guratan: 竖钩 (1), 横撇 (2), 撇 (3), 捺 (4).'
    },
    {
      id: 4,
      book: 2,
      type: 'count-stroke',
      question: 'Berapakah jumlah guratan dari karakter Hanzi "龙" (lóng - dinosaurus/naga)?',
      audioText: '龙。请问这个汉字有几画？',
      hanzi: '龙',
      pinyin: 'lóng',
      options: [
        { text: '5 Guratan', isCorrect: true },
        { text: '4 Guratan', isCorrect: false },
        { text: '6 Guratan', isCorrect: false },
        { text: '7 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 龙 (lóng) terdiri dari 5 guratan: 撇, 横, 竖折斜钩, 撇, 点.'
    },
    {
      id: 5,
      book: 2,
      type: 'count-stroke',
      question: 'Berapakah jumlah guratan dari karakter Hanzi "蛋" (dàn - telur dino)?',
      audioText: '蛋。请问这个汉字有几画？',
      hanzi: '蛋',
      pinyin: 'dàn',
      options: [
        { text: '11 Guratan', isCorrect: true },
        { text: '10 Guratan', isCorrect: false },
        { text: '12 Guratan', isCorrect: false },
        { text: '9 Guratan', isCorrect: false }
      ],
      explanation: 'Karakter 蛋 (dàn) memiliki 11 guratan: radikal 疋 (5) + radikal 虫 (6) = 11 guratan.'
    },
    {
      id: 6,
      book: 1,
      type: 'meaning-match',
      question: 'Apakah arti dari karakter Hanzi "山" (shān)?',
      audioText: '山。请问这个汉字是什么意思？',
      hanzi: '山',
      pinyin: 'shān',
      options: [
        { text: 'Gunung', isCorrect: true },
        { text: 'Air / Sungai', isCorrect: false },
        { text: 'Matahari', isCorrect: false },
        { text: 'Pohon', isCorrect: false }
      ],
      explanation: '山 (shān) melambangkan bentuk 3 puncak gunung yang menjulang tinggi.'
    }
  ]
};

// Aliases
DINO_DATA.strokeQuizQuestions = DINO_DATA.strokeCountQuestions;

if (typeof window !== 'undefined') {
  window.DINO_DATA = DINO_DATA;
}
