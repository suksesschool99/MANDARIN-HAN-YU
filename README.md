# 🦖 Dino Mandarin Adventure (Han Yu 1 s/d Han Yu 12)

Website interaktif pembelajaran Bahasa Mandarin bertema **Little Dinosaur** untuk kurikulum buku **PDF Han Yu 1 sampai Han Yu 12**.

![Dino Mandarin Preview](https://img.shields.io/badge/Mandarin-Han%20Yu%201--12-4CAF50?style=for-the-badge&logo=google-chrome&logoColor=white)
![Style](https://img.shields.io/badge/Theme-Little%20Dinosaur-FF9800?style=for-the-badge)
![Status](https://img.shields.io/badge/Deploy-Ready-2196F3?style=for-the-badge)

---

## 🌟 5 Modul Utama Pembelajaran

### 1. ✍️ Latihan Menulis Guratan Hanzi (3 - 6 Kali Repetisi)
- **Kurikulum Han Yu 1 s/d Han Yu 12**: Pilihan buku dan unit lengkap.
- **Target Repetisi 3 s/d 6 Kali**: Latihan menulis karakter berulang dengan indikator telur dinosaurus yang retak dan menetas saat target tercapai.
- **Audio Feedback Real-time**:
  - ✅ **Goresan Benar**: Suara tepuk tangan (*applause / clap*).
  - ❌ **Goresan Salah**: Suara raungan dinosaurus (*dino roar/growl*).
- **Display Lengkap**: Hanzi besar, Pinyin berharakat, Arti Bahasa Indonesia, total guratan, radikal, tombol suara pelafalan Mandarin (`zh-CN`), langkah urutan guratan resmi Kaishu, dan tips dino.

### 2. 📖 Baca Cerita Pelajaran (Audio Lamban & Ramah Anak SD)
- Teks bacaan/percakapan per-unit untuk **Han Yu 1 s/d Han Yu 12**.
- Pengaturan kecepatan suara lamban (0.5x, 0.62x, 0.75x, 1.0x) dengan suara pelafalan Mandarin resmi.
- Fitur penyorotan kalimat aktif (*active sentence highlight*) dan tombol audio per kalimat.

### 3. 🧩 Game Mencocokkan Kosakata Bergambar (Dino Match)
- Membuka pasangan kartu gambar/ilustrasi SVG dan kartu Hanzi + Pinyin.
- Pilihan tingkat kesulitan: 4 pasang, 6 pasang, dan 8 pasang kartu per-unit.
- Saat cocok: Pelafalan audio Mandarin otomatis dan efek suara tepuk tangan.

### 4. 📝 Kuis Pilihan Berganda Ber-Audio (KKM 70 & Hadiah Piala 🏆)
- Tombol audio bantuan bacaan soal (🔊) untuk setiap nomor soal.
- **5 Tipe Soal Lengkap**:
  1. *Mengartikan Kata / Kalimat*
  2. *Menjawab bacaan Pinyin yang benar*
  3. *Hitungan goresan & urutan guratan*
  4. *Menyusun kata menjadi kalimat yang benar*
  5. *Mencari jawaban gambar yang sesuai dengan kalimat yang ditanyakan*
- **Ketentuan KKM 70**:
  - 🏆 **Nilai $\ge$ 70**: Menampilkan **Piala Emas Juara 🏆** + suara tepuk tangan meriah dan konfeti kemenangan.
  - 🦖 **Nilai $<$ 70**: Mengeluarkan suara raungan dinosaurus dan rekomendasi mengulang materi.
- Rapor hasil evaluasi lengkap dengan pembahasan dan audio replay.

### 5. 📚 Buku Pelajaran Digital PDF (Han Yu 1 - 12)
- Penampil PDF terintegrasi langsung di web untuk membaca file asli `HAN YU 1.pdf` sampai `HAN YU 12.pdf`.
- Fitur: Layar penuh (*fullscreen*), buka di tab baru, dan unduh PDF.

---

## 📂 Struktur Berkas Proyek

```
📁 MANDARIN LATIHAN GOOGLE ANTIGRAVITE/
├── 📄 HAN YU 1.pdf s/d HAN YU 12.pdf # Berkas PDF materi pelajaran resmi
├── 📄 index.html                      # Halaman utama aplikasi web (5 Modul)
├── 📄 tugas.html                      # Portal tugas mandiri siswa
├── 📁 css/
│   ├── 📄 style.css                   # Desain dasar & token tema Little Dinosaur
│   └── 📄 components.css              # Komponen kanvas guratan, kartu 3D, kuis & modal
├── 📁 js/
│   ├── 📄 app.js                      # Controller utama & navigasi tab
│   ├── 📄 audio-synth.js              # Engine suara TTS Mandarin, tepuk tangan & dino roar
│   ├── 📄 data.js                     # Database lengkap kosakata, cerita & kuis Han Yu 1-12
│   ├── 📄 stroke-writer.js            # Engine HanziWriter & repetisi 3-6x telur dino
│   ├── 📄 story-reader.js             # Reader cerita ber-audio lamban per-unit
│   ├── 📄 match-game.js               # Game mencocokkan kosakata bergambar
│   ├── 📄 quiz.js                     # Kuis pilihan berganda 5 tipe, KKM 70 & piala
│   └── 📄 pdf-viewer.js               # Penampil buku digital PDF Han Yu 1-12
└── 📄 README.md                       # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

Cukup buka file `index.html` menggunakan browser apapun (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

---

© 2026 Dino Mandarin Adventure • Kurikulum Han Yu 1 - 12 • HanziWriter Engine • Web Audio Synthesizer
