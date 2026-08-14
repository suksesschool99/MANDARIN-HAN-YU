# Script penggabungan sempurna tanpa interpolasi PowerShell (Zero Corruption & 100% Standalone)

$dir = "c:\MANDARIN LATIHAN GOOGLE ANTIGRAVITE"
$utf8 = [System.Text.Encoding]::UTF8

$styleCss     = [System.IO.File]::ReadAllText("$dir\css\style.css", $utf8)
$compCss      = [System.IO.File]::ReadAllText("$dir\css\components.css", $utf8)
$hanziWriter  = [System.IO.File]::ReadAllText("$dir\js\hanzi-writer.min.js", $utf8)
$dataJs       = [System.IO.File]::ReadAllText("$dir\js\data.js", $utf8)
$audioSynth   = [System.IO.File]::ReadAllText("$dir\js\audio-synth.js", $utf8)
$strokeWriter = [System.IO.File]::ReadAllText("$dir\js\stroke-writer.js", $utf8)
$storyReader  = [System.IO.File]::ReadAllText("$dir\js\story-reader.js", $utf8)
$matchGame    = [System.IO.File]::ReadAllText("$dir\js\match-game.js", $utf8)
$quizJs       = [System.IO.File]::ReadAllText("$dir\js\quiz.js", $utf8)
$pdfViewer    = [System.IO.File]::ReadAllText("$dir\js\pdf-viewer.js", $utf8)
$appJs        = [System.IO.File]::ReadAllText("$dir\js\app.js", $utf8)
$muridJs      = [System.IO.File]::ReadAllText("$dir\js\murid.js", $utf8)

Write-Host "Data length: " $dataJs.Length

# BUILD INDEX.HTML BODY
$htmlHead = @'
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dino Mandarin Adventure - Han Yu 1 s/d Han Yu 12 (Lengkap Ber-Audio)</title>
  <meta name="description" content="Aplikasi interaktif belajar bahasa Mandarin anak SD bertema dinosaurus berdasarkan materi PDF Han Yu 1 sampai Han Yu 12. Latihan menulis guratan 3-6x, baca cerita audio pelan, cocokkan gambar, kuis ber-audio KKM 70 berhadiah piala emas.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700;800;900&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet">
  <style>
'@

$htmlMiddle = @'
  </style>
</head>
<body>

  <!-- 1. Header & Top Controls -->
  <header class="dino-header">
    <div class="header-container">
      <a href="index.html" class="logo-brand">
        <span class="brand-dino-avatar">🦖</span>
        <div class="brand-title-wrap">
          <span class="brand-main-title">DINO MANDARIN ADVENTURE</span>
          <span class="brand-sub-title">Kurikulum Lengkap PDF Han Yu 1 - 12 • Audio Lamban & Interaktif</span>
        </div>
      </a>

      <div class="header-action-controls">
        <button class="audio-toggle-btn" id="btn-toggle-sfx" title="Hidupkan/Matikan Efek Suara">🔊 Efek: ON</button>
        <button class="audio-toggle-btn" id="btn-toggle-voice" title="Hidupkan/Matikan Suara Mandarin">🗣️ Suara: ON</button>
        <button class="audio-toggle-btn teacher-btn" id="btn-open-teacher-modal">🔗 Buat Link Tugas</button>
      </div>
    </div>
  </header>

  <!-- 2. Student Task Banner -->
  <aside class="student-task-banner" id="student-task-banner" style="display: none; background: #fff8e1; border-bottom: 2px solid #ffe082; padding: 10px 20px;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="background: var(--dino-amber-main); color: white; font-weight: 800; font-size: 0.8rem; padding: 3px 10px; border-radius: var(--radius-pill);">🎒 TUGAS SISWA</span>
        <span id="student-task-title" style="font-weight: 800; color: #e65100; font-size: 0.95rem;">Latihan Mandiri Siswa</span>
        <span id="student-task-desc" style="color: #5d4037; font-size: 0.9rem;">Buku Han Yu 1 • Pelajaran 1</span>
      </div>
      <div><span style="font-size: 0.95rem; font-weight: 800; color: #e65100;">🦖 Semangat Belajar Juara!</span></div>
    </div>
  </aside>

  <!-- 3. Navigation Module Tabs -->
  <nav class="nav-tabs-bar" aria-label="Menu Utama Modul">
    <div class="tabs-container">
      <button class="nav-tab-btn active" data-target="module-stroke" id="tab-btn-stroke">
        <span>✍️</span> <span>1. Tulis Guratan (3-6x)</span>
      </button>
      <button class="nav-tab-btn" data-target="module-story" id="tab-btn-story">
        <span>📖</span> <span>2. Baca Cerita (Audio Pelan)</span>
      </button>
      <button class="nav-tab-btn" data-target="module-match" id="tab-btn-match">
        <span>🧩</span> <span>3. Cocokkan Gambar & Kata</span>
      </button>
      <button class="nav-tab-btn" data-target="module-quiz" id="tab-btn-quiz">
        <span>📝</span> <span>4. Kuis Soal Ber-Audio (KKM 70 & 🏆)</span>
      </button>
      <button class="nav-tab-btn" data-target="module-pdf" id="tab-btn-pdf">
        <span>📚</span> <span>5. Buku PDF Digital (Han Yu 1-12)</span>
      </button>
    </div>
  </nav>

  <!-- 4. Main Application Workspace -->
  <main class="main-content">

    <!-- MODUL 1: LATIHAN TULIS GURATAN (3-6x) -->
    <section class="app-module-section active" id="module-stroke">
      <div class="module-header-banner">
        <div class="module-title-icon">✍️</div>
        <div>
          <h2 class="module-heading">Latihan Menulis Guratan Hanzi (3 - 6 Kali Repetisi)</h2>
          <p class="module-desc">Tulis goresan karakter Hanzi di atas kanvas petak sembilan (米字格). Suara tepuk tangan jika benar, dan raungan dinosaurus jika salah!</p>
        </div>
      </div>

      <div class="curriculum-selector-bar">
        <div class="selector-group">
          <div class="filter-select-item">
            <label for="stroke-book-select" class="filter-label">📖 Buku:</label>
            <select id="stroke-book-select" class="dino-select-primary"></select>
          </div>

          <div class="filter-select-item">
            <label for="stroke-unit-select" class="filter-label">📑 Unit:</label>
            <select id="stroke-unit-select" class="dino-select-primary"></select>
          </div>

          <div class="filter-select-item">
            <label for="stroke-reps-target" class="filter-label">🎯 Target Repetisi:</label>
            <select id="stroke-reps-target" class="dino-select-primary">
              <option value="3" selected>3 Kali (Telur Menetas)</option>
              <option value="4">4 Kali</option>
              <option value="5">5 Kali</option>
              <option value="6">6 Kali (Master Dinosaurus)</option>
            </select>
          </div>
        </div>

        <div style="display: flex; gap: 8px;">
          <input type="text" id="custom-char-input" placeholder="Cari Hanzi..." maxlength="2" style="width: 110px; padding: 7px 10px; border-radius: var(--radius-md); border: 1.5px solid var(--dino-slate-border); font-family: var(--font-chinese); font-size: 1rem; text-align: center;">
          <button class="dino-btn-action" id="btn-search-char" style="padding: 6px 14px;">🔍 Cari</button>
        </div>
      </div>

      <!-- Main Stroke Grid -->
      <div class="stroke-module-grid">
        <div class="stroke-canvas-card">
          <div style="text-align: center; margin-bottom: 12px;">
            <div class="stroke-char-pinyin" id="char-pinyin">nǐ</div>
            <div class="stroke-char-meaning" id="char-meaning">Kamu</div>
            <span style="display: inline-block; background: var(--dino-green-mint); color: var(--dino-green-deep); padding: 3px 12px; border-radius: var(--radius-pill); font-size: 0.85rem; font-weight: 800; margin-top: 4px;" id="char-stroke-count">
              7 Guratan
            </span>
          </div>

          <div class="writer-box-wrap">
            <svg class="mizige-grid-lines" viewBox="0 0 260 260">
              <line x1="0" y1="0" x2="260" y2="260" stroke="#ffcc80" stroke-width="1.5" stroke-dasharray="6,6" />
              <line x1="260" y1="0" x2="0" y2="260" stroke="#ffcc80" stroke-width="1.5" stroke-dasharray="6,6" />
              <line x1="130" y1="0" x2="130" y2="260" stroke="#ffa726" stroke-width="1.5" stroke-dasharray="6,6" />
              <line x1="0" y1="130" x2="260" y2="130" stroke="#ffa726" stroke-width="1.5" stroke-dasharray="6,6" />
            </svg>
            <div id="character-target-div"></div>
          </div>

          <div class="reps-tracker-box">
            <div style="font-size: 0.9rem; font-weight: 800; color: #e65100; margin-bottom: 8px;">🦖 Indikator Menetas Telur Dinosaurus</div>
            <div class="egg-items-row" id="reps-egg-tracker"></div>
          </div>

          <div class="stroke-ctrl-buttons">
            <button class="dino-btn-action" id="btn-animate-stroke">▶️ Animasi Goresan</button>
            <button class="dino-btn-outline" id="btn-practice-stroke">✏️ Tulis Sendiri</button>
            <button class="dino-btn-outline" id="btn-clear-canvas">🧹 Hapus</button>
            <button class="dino-btn-audio-circle" id="btn-speak-current-char" title="Dengarkan Pelafalan Mandarin">🔊</button>
          </div>

          <div style="display: flex; gap: 14px; margin-top: 14px; font-size: 0.88rem; font-weight: 700;">
            <span style="color: var(--dino-green-main);">✅ Goresan Benar: <b id="stroke-correct-count">0</b></span>
            <span style="color: #e53935;">❌ Goresan Keliru: <b id="stroke-incorrect-count">0</b></span>
          </div>
        </div>

        <div class="stroke-guide-card">
          <div>
            <h3 class="guide-box-title">📑 Pilihan Kosakata Unit Ini</h3>
            <div class="stroke-char-chips-wrap" id="stroke-char-chips"></div>
          </div>

          <div>
            <h3 class="guide-box-title">👣 Langkah Urutan Guratan Kaishu Resmi</h3>
            <ul class="stroke-steps-list" id="stroke-steps-list"></ul>
          </div>

          <div style="background: var(--dino-green-mint); border-left: 4px solid var(--dino-green-main); padding: 12px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            <div style="font-weight: 800; font-size: 0.88rem; color: var(--dino-green-deep);">🦖 Tips Rexy Dino:</div>
            <p style="font-size: 0.85rem; color: #2e7d32; margin-top: 4px;" id="char-dino-tip">
              Tulis karakter dengan urutan dari atas ke bawah dan kiri ke kanan.
            </p>
          </div>

          <div style="display: flex; justify-content: space-between; margin-top: auto;">
            <button class="dino-btn-outline" id="btn-prev-char">◀ Karakter Sebelumnya</button>
            <button class="dino-btn-outline" id="btn-next-char">Karakter Berikutnya ▶</button>
          </div>
        </div>
      </div>
    </section>

    <!-- MODUL 2: BACA CERITA TEKS PELAJARAN (AUDIO LAMBAN) -->
    <section class="app-module-section" id="module-story">
      <div class="module-header-banner">
        <div class="module-title-icon">📖</div>
        <div>
          <h2 class="module-heading">Baca Cerita & Percakapan Per-Unit (Audio Lamban)</h2>
          <p class="module-desc">Dengarkan teks bacaan dengan tempo pelan dan jelas, dilengkapi penyorot kalimat dan Pinyin berharakat.</p>
        </div>
      </div>

      <div class="curriculum-selector-bar">
        <div class="selector-group">
          <div class="filter-select-item">
            <label for="story-book-select" class="filter-label">📖 Buku:</label>
            <select id="story-book-select" class="dino-select-primary"></select>
          </div>

          <div class="filter-select-item">
            <label for="story-unit-select" class="filter-label">📑 Unit:</label>
            <select id="story-unit-select" class="dino-select-primary"></select>
          </div>

          <div class="filter-select-item">
            <label for="story-speed-select" class="filter-label">🐢 Kecepatan Suara:</label>
            <select id="story-speed-select" class="dino-select-primary">
              <option value="0.5">0.5x (Sangat Lamban)</option>
              <option value="0.62" selected>0.62x (Standar Anak SD)</option>
              <option value="0.75">0.75x (Sedang)</option>
              <option value="1.0">1.0x (Normal)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="story-header-card">
        <div class="story-meta-left">
          <span class="story-mascot-badge" id="story-mascot-badge">🦖 Rexy Si T-Rex Cilik</span>
          <h3 class="story-title-hanzi" id="story-title-hanzi">第一课：你好 (Nǐ hǎo)</h3>
          <div class="story-title-pinyin" id="story-title-pinyin">Dì Yī Kè: Nǐ hǎo</div>
          <div class="story-title-meaning" id="story-title-meaning">Pelajaran 1: Halo / Apa Kabar</div>
          <p class="story-summary-text" id="story-summary-text"></p>
        </div>

        <div class="story-ctrl-actions">
          <button class="dino-btn-action" id="btn-play-all-story">▶️ Putar Seluruh Cerita</button>
          <button class="dino-btn-outline" id="btn-stop-story">⏹️ Berhenti</button>
        </div>
      </div>

      <div class="story-sentences-list" id="story-sentences-list"></div>
    </section>

    <!-- MODUL 3: GAME MENCOCOKKAN KOSAKATA DENGAN GAMBAR -->
    <section class="app-module-section" id="module-match">
      <div class="module-header-banner">
        <div class="module-title-box">
          <div class="module-title-icon">🧩</div>
          <div>
            <h2 class="module-heading">Game Mencocokkan Kosakata dengan Gambar Per-Unit</h2>
            <p class="module-desc">Buka kartu dan pasangkan antara gambar ilustrasi dengan kosakata Hanzi + Pinyin yang tepat!</p>
          </div>
        </div>
      </div>

      <div class="curriculum-selector-bar">
        <div class="selector-group">
          <div class="filter-select-item">
            <label for="match-book-select" class="filter-label">📖 Buku:</label>
            <select id="match-book-select" class="dino-select-primary"></select>
          </div>

          <div class="filter-select-item">
            <label for="match-unit-select" class="filter-label">📑 Unit:</label>
            <select id="match-unit-select" class="dino-select-primary"></select>
          </div>

          <div class="filter-select-item">
            <label for="match-pairs-count" class="filter-label">🃏 Jumlah Pasangan:</label>
            <select id="match-pairs-count" class="dino-select-primary">
              <option value="4">4 Pasang (Mudah)</option>
              <option value="6" selected>6 Pasang (Seru)</option>
              <option value="8">8 Pasang (Tantangan)</option>
            </select>
          </div>
        </div>

        <button class="dino-btn-action" id="btn-restart-match">🔄 Main Ulang</button>
      </div>

      <div class="match-stats-bar">
        <div class="stat-pill">Langkah: <span class="stat-val" id="match-moves-count">0</span></div>
        <div class="stat-pill">Terpasang: <span class="stat-val" id="match-pairs-left">0 / 6</span></div>
        <div style="font-size: 0.9rem; font-weight: 700; color: #e65100;">🦖 Dengarkan suara saat kartu cocok!</div>
      </div>

      <div id="match-board-grid" class="match-board-grid"></div>
    </section>

    <!-- MODUL 4: KUIS PILIHAN BERGANDA BER-AUDIO (KKM 70 & PIALA 🏆) -->
    <section class="app-module-section" id="module-quiz">
      <div class="module-header-banner">
        <div class="module-title-box">
          <div class="module-title-icon">📝</div>
          <div>
            <h2 class="module-heading">Soal Latihan Pilihan Berganda Ber-Audio (KKM 70)</h2>
            <p class="module-desc">5 Tipe Soal: Mengartikan, Pinyin, Hitung Guratan, Susun Kalimat, dan Gambar. Dapatkan Piala Emas 🏆 jika nilai &ge; 70!</p>
          </div>
        </div>
      </div>

      <div class="curriculum-selector-bar">
        <div class="selector-group">
          <div class="filter-select-item">
            <label for="quiz-book-select" class="filter-label">📖 Buku:</label>
            <select id="quiz-book-select" class="dino-select-primary"></select>
          </div>

          <div class="filter-select-item">
            <label for="quiz-unit-select" class="filter-label">📑 Unit:</label>
            <select id="quiz-unit-select" class="dino-select-primary"></select>
          </div>
        </div>

        <button class="dino-btn-action" id="btn-restart-quiz">🔄 Mulai Kuis Baru</button>
      </div>

      <div id="quiz-wrapper-card">
        <div id="quiz-question-box"></div>
        <div id="quiz-result-card" style="display: none;"></div>
      </div>
    </section>

    <!-- MODUL 5: BUKU PDF DIGITAL INTERAKTIF (HAN YU 1 - 12) -->
    <section class="app-module-section" id="module-pdf">
      <div class="module-header-banner">
        <div class="module-title-box">
          <div class="module-title-icon">📚</div>
          <div>
            <h2 class="module-heading">Buku Pelajaran Digital PDF Han Yu 1 sampai Han Yu 12</h2>
            <p class="module-desc">Buka dan baca langsung seluruh file buku asli PDF Han Yu 1 sampai Han Yu 12 di dalam website.</p>
          </div>
        </div>
      </div>

      <div class="curriculum-selector-bar">
        <div class="selector-group">
          <div class="filter-select-item">
            <label for="pdf-book-select" class="filter-label">📖 Pilih Buku PDF:</label>
            <select id="pdf-book-select" class="dino-select-primary"></select>
          </div>
        </div>

        <div class="pdf-action-buttons">
          <button class="dino-btn-action" id="btn-pdf-fullscreen">⛶ Layar Penuh</button>
          <button class="dino-btn-outline" id="btn-pdf-newtab">↗️ Buka di Tab Baru</button>
          <button class="dino-btn-outline" id="btn-pdf-download">📥 Unduh PDF</button>
        </div>
      </div>

      <div class="pdf-viewer-card">
        <div class="pdf-meta-bar">
          <div>
            <div class="pdf-book-title" id="pdf-book-title-display">Han Yu 1 (汉语 第一册)</div>
            <div class="pdf-book-desc" id="pdf-book-desc-display">15 Pelajaran Lengkap Kurikulum Resmi PDF Han Yu 1</div>
          </div>
          <div><span style="font-weight: 800; color: #e65100;">🦖 Buku Teks Asli</span></div>
        </div>

        <div class="pdf-embed-wrapper">
          <iframe id="pdf-embed-frame" class="pdf-embed-frame" title="PDF Viewer Han Yu"></iframe>
        </div>
      </div>
    </section>

  </main>

  <!-- Modals -->
  <div class="dino-modal-backdrop" id="stroke-success-modal">
    <div class="dino-modal-dialog">
      <div class="modal-mascot-avatar">🦖🎉</div>
      <h3 class="modal-dialog-title">Luar Biasa! Karakter Berhasil Dikuasai!</h3>
      <div class="modal-char-display">你</div>
      <p style="color: #555; margin-bottom: 20px;">Telur dinosaurus telah menetas sempurna! Kamu telah menulis karakter ini berulang kali dengan tepat!</p>
      <button class="dino-btn-action" onclick="document.getElementById('stroke-success-modal').classList.remove('active')">🌟 Lanjut Belajar!</button>
    </div>
  </div>

  <div class="dino-modal-backdrop" id="match-success-modal">
    <div class="dino-modal-dialog">
      <div class="modal-mascot-avatar">🏆🦕</div>
      <h3 class="modal-dialog-title">Hebat! Semua Pasangan Cocok!</h3>
      <p style="color: #555; margin: 14px 0 24px;">Daya ingatmu luar biasa seperti dinosaurus perkasa! Seluruh gambar dan kosakata berhasil dipasangkan.</p>
      <button class="dino-btn-action" onclick="document.getElementById('match-success-modal').classList.remove('active')">🎮 Main Lagi!</button>
    </div>
  </div>

  <!-- Teacher Assignment Link Generator Modal -->
  <div class="dino-modal-backdrop" id="teacher-task-modal">
    <div class="dino-modal-dialog" style="max-width: 560px; text-align: left;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--dino-green-deep);">🔗 Buat Link Tugas Siswa</h3>
        <button id="btn-close-task-modal" style="background: none; border: none; font-size: 1.4rem; cursor: pointer;">✕</button>
      </div>

      <p style="font-size: 0.9rem; color: #666; margin-bottom: 16px;">Pilih modul, buku, dan unit materi untuk membuat tautan tugas belajar langsung untuk siswa.</p>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
        <div>
          <label style="display: block; font-size: 0.88rem; font-weight: 700; margin-bottom: 4px;">Pilih Modul:</label>
          <select id="task-module-select" class="dino-select-primary" style="width: 100%;">
            <option value="stroke">✍️ Modul 1: Latihan Tulis Guratan (3-6x)</option>
            <option value="story">📖 Modul 2: Baca Cerita (Audio Pelan)</option>
            <option value="match">🧩 Modul 3: Cocokkan Gambar & Kata</option>
            <option value="quiz">📝 Modul 4: Kuis Soal Ber-Audio (KKM 70)</option>
            <option value="pdf">📚 Modul 5: Baca Buku PDF Digital</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 0.88rem; font-weight: 700; margin-bottom: 4px;">Pilih Buku:</label>
          <select id="task-book-select" class="dino-select-primary" style="width: 100%;"></select>
        </div>

        <div>
          <label style="display: block; font-size: 0.88rem; font-weight: 700; margin-bottom: 4px;">Pilih Unit / Pelajaran:</label>
          <select id="task-unit-select" class="dino-select-primary" style="width: 100%;"></select>
        </div>

        <div>
          <label style="display: block; font-size: 0.88rem; font-weight: 700; margin-bottom: 4px;">Target Repetisi Guratan:</label>
          <select id="task-reps-select" class="dino-select-primary" style="width: 100%;">
            <option value="3">3 Kali Repetisi (Standar)</option>
            <option value="4">4 Kali Repetisi</option>
            <option value="5">5 Kali Repetisi</option>
            <option value="6">6 Kali Repetisi (Juara Dino)</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 0.88rem; font-weight: 700; margin-bottom: 4px;">Nama Siswa (Opsional):</label>
          <input type="text" id="task-student-name-input" placeholder="Contoh: Budi / Ani..." style="width: 100%; padding: 8px 12px; border-radius: var(--radius-md); border: 2px solid var(--dino-slate-border); font-family: var(--font-main); font-size: 0.92rem;">
        </div>
      </div>

      <button class="dino-btn-action" id="btn-generate-task-link" style="width: 100%; margin-bottom: 14px;">✨ Generate Tautan Halaman Murid</button>

      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <input type="text" id="task-generated-url" readonly placeholder="Klik Generate Tautan..." style="flex: 1; min-width: 200px; padding: 10px 14px; border-radius: var(--radius-md); border: 2px solid var(--dino-slate-border); font-size: 0.88rem;">
        <button class="dino-btn-outline" id="btn-copy-task-link" style="white-space: nowrap;">📋 Salin Link</button>
        <button class="dino-btn-action" id="btn-test-task-link" style="white-space: nowrap; display: none;">🚀 Buka Halaman Murid</button>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="dino-footer">
    <p>🦖 <b>Dino Mandarin Adventure</b> • Kurikulum Lengkap PDF Han Yu 1 s/d Han Yu 12 • Pelafalan Audio Lamban Anak SD</p>
    <p style="margin-top: 6px; font-size: 0.82rem;">Dilengkapi HanziWriter Engine, Web Audio Synthesizer, TTS Mandarin, dan Standar Kelulusan KKM 70 Berhadiah Piala 🏆</p>
  </footer>

  <script>
'@

$htmlTail = @'
  </script>
</body>
</html>
'@

# Concatenate cleanly using .NET String Concat (100% Raw, No Variable Expansion!)
$indexContent = [string]::Concat(
    $htmlHead,
    $styleCss, "`n", $compCss,
    $htmlMiddle,
    "/* HANZI-WRITER */`n", $hanziWriter, "`n",
    "/* DATA */`n", $dataJs, "`n",
    "/* AUDIO */`n", $audioSynth, "`n",
    "/* STROKE */`n", $strokeWriter, "`n",
    "/* STORY */`n", $storyReader, "`n",
    "/* MATCH */`n", $matchGame, "`n",
    "/* QUIZ */`n", $quizJs, "`n",
    "/* PDF */`n", $pdfViewer, "`n",
    "/* APP */`n", $appJs,
    $htmlTail
)

# BUILD MURID.HTML
$muridHead = @'
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lembar Tugas Murid - Dino Mandarin Adventure (Han Yu 1-12)</title>
  <meta name="description" content="Halaman pengerjaan tugas mandiri siswa Dino Mandarin Adventure berdasarkan Buku PDF Han Yu 1 sampai 12.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700;800;900&family=Noto+Sans+SC:wght@400;500;700;900&display=swap" rel="stylesheet">
  <style>
'@

$muridMiddle = @'
.student-hero-banner {
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #43a047 100%);
  color: white;
  border-radius: var(--radius-xl);
  padding: 24px 28px;
  margin-bottom: 20px;
  box-shadow: var(--shadow-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.student-id-box {
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  border-radius: var(--radius-md);
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.student-id-input {
  background: white;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-family: var(--font-main);
  font-weight: 700;
  font-size: 0.95rem;
  color: #1b5e20;
  outline: none;
  width: 180px;
}
.student-pills-row {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  margin-bottom: 20px;
  padding-bottom: 4px;
}
.student-mod-pill {
  background: white;
  border: 2px solid var(--dino-slate-border);
  border-radius: var(--radius-pill);
  padding: 8px 16px;
  font-size: 0.88rem;
  font-weight: 700;
  color: #546e7a;
  cursor: pointer;
  white-space: nowrap;
}
.student-mod-pill.active {
  background: var(--dino-amber-main);
  color: #3e2723;
  border-color: #ffd54f;
}
.student-report-share-box {
  background: #f1f8e9;
  border: 2px solid #aed581;
  border-radius: var(--radius-lg);
  padding: 20px;
  text-align: center;
  margin: 20px 0;
}
  </style>
</head>
<body>

  <!-- Header -->
  <header class="dino-header">
    <div class="header-container">
      <a href="murid.html" class="logo-brand">
        <span class="brand-dino-avatar">🎒</span>
        <div class="brand-title-wrap">
          <span class="brand-main-title">LEMBAR TUGAS MURID</span>
          <span class="brand-sub-title">Dino Mandarin Adventure • Kurikulum Han Yu 1 - 12</span>
        </div>
      </a>

      <div class="header-action-controls">
        <button class="audio-toggle-btn" id="btn-toggle-sfx" title="Efek Suara">🔊 Efek: ON</button>
        <button class="audio-toggle-btn" id="btn-toggle-voice" title="Suara Mandarin">🗣️ Suara: ON</button>
        <a href="index.html" class="audio-toggle-btn teacher-btn" style="text-decoration: none;">🏠 Menu Lengkap</a>
      </div>
    </div>
  </header>

  <!-- Main Student Container -->
  <main class="main-content" style="margin-top: 20px;">

    <!-- Student Hero Card -->
    <div class="student-hero-banner">
      <div>
        <span class="task-badge-pill" id="task-hero-badge" style="background: #ffb300; color: #3e2723; margin-bottom: 6px; display: inline-block;">
          🎒 Tugas Terpilih
        </span>
        <h1 style="font-size: 1.65rem; font-weight: 900; margin: 4px 0;" id="task-hero-title">
          Buku Han Yu 1 • Pelajaran 1
        </h1>
        <p style="font-size: 0.95rem; color: #e8f5e9;" id="task-hero-subtitle">
          你好 (Nǐ hǎo) — Latihan Mandiri Siswa
        </p>
      </div>

      <!-- Form Identitas Siswa -->
      <div class="student-id-box">
        <span style="font-size: 0.9rem; font-weight: 800;">👤 Nama Siswa:</span>
        <input type="text" class="student-id-input" id="student-name-input" placeholder="Tulis Namamu..." maxlength="30">
      </div>
    </div>

    <!-- Quick Switcher Pills for this assigned Unit -->
    <div class="student-pills-row">
      <button class="student-mod-pill" data-mod="stroke">✍️ 1. Tulis Guratan</button>
      <button class="student-mod-pill" data-mod="story">📖 2. Cerita Pelajaran</button>
      <button class="student-mod-pill" data-mod="match">🧩 3. Cocokkan Gambar</button>
      <button class="student-mod-pill" data-mod="quiz">📝 4. Kuis Soal Ber-Audio (KKM 70)</button>
      <button class="student-mod-pill" data-mod="pdf">📚 5. Baca Buku PDF</button>
    </div>

    <!-- Dynamic Workspace Container rendered by murid.js -->
    <div id="student-module-workspace"></div>

  </main>

  <!-- Success Modals -->
  <div class="dino-modal-backdrop" id="stroke-success-modal">
    <div class="dino-modal-dialog">
      <div style="font-size: 3.5rem;">🦖🎉</div>
      <h3 style="font-size: 1.45rem; font-weight: 900; color: var(--dino-green-deep); margin-top: 10px;">Hebat Sekali! Telur Menetas!</h3>
      <div style="font-family: var(--font-chinese); font-size: 4rem; font-weight: 900; color: var(--dino-amber-deep); margin: 10px 0;" class="modal-char-display">你</div>
      <p style="color: #555; margin-bottom: 20px;">Target latihan menulis karakter ini telah selesai dengan sempurna!</p>
      <button class="dino-btn-action" onclick="document.getElementById('stroke-success-modal').classList.remove('active')">🌟 Lanjut Belajar!</button>
    </div>
  </div>

  <div class="dino-modal-backdrop" id="match-success-modal">
    <div class="dino-modal-dialog">
      <div style="font-size: 3.5rem;">🏆🦕</div>
      <h3 style="font-size: 1.45rem; font-weight: 900; color: var(--dino-green-deep); margin-top: 10px;">Luar Biasa! Semua Kartu Cocok!</h3>
      <p style="color: #555; margin: 14px 0 24px;">Kamu berhasil menyelesaikan tantangan game mencocokkan gambar dan kosakata!</p>
      <button class="dino-btn-action" onclick="document.getElementById('match-success-modal').classList.remove('active')">🎮 Main Lagi!</button>
    </div>
  </div>

  <footer class="dino-footer">
    <p>🦖 <b>Dino Mandarin Adventure</b> • Halaman Belajar Mandiri Murid • Kurikulum Han Yu 1 - 12</p>
    <p style="margin-top: 4px; font-size: 0.82rem;">Dilengkapi Evaluasi KKM 70, Hadiah Piala Emas 🏆 & Pelafalan Mandarin Audio Lamban</p>
  </footer>

  <script>
'@

$muridContent = [string]::Concat(
    $muridHead,
    $styleCss, "`n", $compCss,
    $muridMiddle,
    "/* HANZI-WRITER */`n", $hanziWriter, "`n",
    "/* DATA */`n", $dataJs, "`n",
    "/* AUDIO */`n", $audioSynth, "`n",
    "/* STROKE */`n", $strokeWriter, "`n",
    "/* STORY */`n", $storyReader, "`n",
    "/* MATCH */`n", $matchGame, "`n",
    "/* QUIZ */`n", $quizJs, "`n",
    "/* PDF */`n", $pdfViewer, "`n",
    "/* MURID */`n", $muridJs,
    $htmlTail
)

# Write to root and subfolder
[System.IO.File]::WriteAllText("$dir\index.html", $indexContent, $utf8)
[System.IO.File]::WriteAllText("$dir\murid.html", $muridContent, $utf8)
[System.IO.File]::WriteAllText("$dir\dino-mandarin-github\index.html", $indexContent, $utf8)
[System.IO.File]::WriteAllText("$dir\dino-mandarin-github\murid.html", $muridContent, $utf8)

Write-Host "BERHASIL! Ukuran index.html: " $indexContent.Length " bytes | Ukuran murid.html: " $muridContent.Length " bytes"
