/**
 * Dino Mandarin Adventure - Student Workspace Controller (Halaman Murid)
 * Menampilkan Materi Pelajaran Otomatis Sesuai Tautan yang Di-generate Guru
 */

class DinoMuridController {
  constructor() {
    this.mod = 'stroke';
    this.bookId = 1;
    this.unitId = 1;
    this.targetReps = 3;
    this.studentName = '';

    this.init();
  }

  init() {
    this.parseUrlParams();
    this.loadSavedStudentName();
    this.updateTaskBanner();
    this.initAudioControls();
    this.renderActiveModule();
    this.bindStudentEvents();
  }

  parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    this.mod = params.get('mod') || params.get('module') || 'stroke';
    this.bookId = parseInt(params.get('book')) || 1;
    this.unitId = parseInt(params.get('unit')) || 1;
    this.targetReps = Math.min(Math.max(parseInt(params.get('reps')) || 3, 3), 6);
    this.studentName = params.get('student') || '';
  }

  loadSavedStudentName() {
    if (!this.studentName) {
      this.studentName = localStorage.getItem('dino_student_name') || '';
    }
    const inputEl = document.getElementById('student-name-input');
    if (inputEl && this.studentName) {
      inputEl.value = this.studentName;
    }
  }

  updateTaskBanner() {
    const bookTitle = (window.DINO_DATA && window.DINO_DATA.books && window.DINO_DATA.books.find(b => b.id === this.bookId)?.title) || `Han Yu ${this.bookId}`;
    const unitTitle = (window.DINO_DATA && window.DINO_DATA.unitTitles && window.DINO_DATA.unitTitles[this.bookId] && window.DINO_DATA.unitTitles[this.bookId][this.unitId]) || `Unit ${this.unitId}`;

    const modNames = {
      'stroke': '✍️ Menulis Guratan Hanzi',
      'story': '📖 Membaca Cerita (Audio Pelan)',
      'match': '🧩 Mencocokkan Gambar & Kata',
      'quiz': '📝 Kuis Pilihan Berganda (KKM 70)',
      'pdf': '📚 Membaca Buku PDF Digital'
    };

    const taskTitleEl = document.getElementById('task-hero-title');
    const taskSubEl = document.getElementById('task-hero-subtitle');
    const taskBadgeEl = document.getElementById('task-hero-badge');

    if (taskTitleEl) {
      taskTitleEl.textContent = `${bookTitle} • Pelajaran ${this.unitId}`;
    }

    if (taskSubEl) {
      taskSubEl.textContent = `${unitTitle} — Modul: ${modNames[this.mod] || 'Latihan Mandiri'}`;
    }

    if (taskBadgeEl) {
      taskBadgeEl.textContent = modNames[this.mod] || 'Tugas Siswa';
    }
  }

  initAudioControls() {
    const btnSfx = document.getElementById('btn-toggle-sfx');
    const btnVoice = document.getElementById('btn-toggle-voice');

    if (btnSfx) {
      btnSfx.addEventListener('click', () => {
        if (window.dinoAudio) {
          const state = window.dinoAudio.toggleSfx();
          btnSfx.innerHTML = state ? '🔊 Efek: ON' : '🔇 Efek: OFF';
          btnSfx.classList.toggle('off', !state);
        }
      });
    }

    if (btnVoice) {
      btnVoice.addEventListener('click', () => {
        if (window.dinoAudio) {
          const state = window.dinoAudio.toggleVoice();
          btnVoice.innerHTML = state ? '🗣️ Suara: ON' : '🤐 Suara: OFF';
          btnVoice.classList.toggle('off', !state);
        }
      });
    }
  }

  bindStudentEvents() {
    const inputEl = document.getElementById('student-name-input');
    if (inputEl) {
      inputEl.addEventListener('input', (e) => {
        this.studentName = e.target.value.trim();
        localStorage.setItem('dino_student_name', this.studentName);
      });
    }

    // Quick module pills in header
    const modPills = document.querySelectorAll('.student-mod-pill');
    modPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const targetMod = pill.getAttribute('data-mod');
        const url = new URL(window.location.href);
        url.searchParams.set('mod', targetMod);
        window.location.href = url.toString();
      });
    });
  }

  renderActiveModule() {
    const container = document.getElementById('student-module-workspace');
    if (!container) return;

    // Highlight active pill
    document.querySelectorAll('.student-mod-pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-mod') === this.mod);
    });

    if (this.mod === 'stroke') {
      this.renderStrokeModule(container);
    } else if (this.mod === 'story') {
      this.renderStoryModule(container);
    } else if (this.mod === 'match') {
      this.renderMatchModule(container);
    } else if (this.mod === 'quiz') {
      this.renderQuizModule(container);
    } else if (this.mod === 'pdf') {
      this.renderPdfModule(container);
    } else {
      this.renderStrokeModule(container);
    }
  }

  // 1. Modul Menulis Guratan (3-6x)
  renderStrokeModule(container) {
    container.innerHTML = `
      <div class="stroke-canvas-card" style="margin-bottom: 20px;">
        <div class="stroke-char-header">
          <div class="stroke-char-pinyin" id="char-pinyin">-</div>
          <div class="stroke-char-meaning" id="char-meaning">Memuat...</div>
          <span id="char-stroke-count" style="display: inline-block; background: var(--dino-green-mint); color: var(--dino-green-deep); padding: 3px 12px; border-radius: var(--radius-pill); font-size: 0.85rem; font-weight: 800; margin-top: 4px;"></span>
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
          <div class="tracker-title">🦖 Target Latihan Repetisi: ${this.targetReps} Kali (Telur Menetas)</div>
          <div class="egg-items-row" id="reps-egg-tracker"></div>
        </div>

        <div class="stroke-ctrl-buttons">
          <button class="dino-btn-action" id="btn-animate-stroke">▶️ Contoh Guratan</button>
          <button class="dino-btn-outline" id="btn-practice-stroke">✏️ Tulis Mandiri</button>
          <button class="dino-btn-outline" id="btn-clear-canvas">🧹 Hapus</button>
          <button class="dino-btn-audio-circle" id="btn-speak-current-char" title="Dengarkan Suara">🔊</button>
        </div>

        <div style="display: flex; gap: 16px; margin-top: 14px; font-weight: 700; font-size: 0.9rem;">
          <span style="color: var(--dino-green-main);">✅ Goresan Benar: <b id="stroke-correct-count">0</b></span>
          <span style="color: #e53935;">❌ Goresan Salah: <b id="stroke-incorrect-count">0</b></span>
        </div>
      </div>

      <div class="stroke-guide-card">
        <h3 class="guide-box-title">📑 Kosakata Pelajaran Ini</h3>
        <div class="stroke-char-chips-wrap" id="stroke-char-chips"></div>

        <h3 class="guide-box-title" style="margin-top: 14px;">👣 Urutan Guratan Standar Kaishu</h3>
        <ul class="stroke-steps-list" id="stroke-steps-list"></ul>

        <div style="background: var(--dino-green-mint); border-left: 4px solid var(--dino-green-main); padding: 12px 16px; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-top: 10px;">
          <div style="font-weight: 800; font-size: 0.88rem; color: var(--dino-green-deep);">🦖 Pesan Dinosaurus:</div>
          <p style="font-size: 0.85rem; color: #2e7d32; margin-top: 4px;" id="char-dino-tip">
            Tulis dengan urutan goresan yang runtut dan rapi ya!
          </p>
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 14px;">
          <button class="dino-btn-outline" id="btn-prev-char">◀ Sebelumnya</button>
          <button class="dino-btn-outline" id="btn-next-char">Berikutnya ▶</button>
        </div>
      </div>
    `;

    // Initialize Stroke Writer for this book & unit
    if (typeof DinoStrokeWriter !== 'undefined') {
      window.studentStrokeWriter = new DinoStrokeWriter();
      window.studentStrokeWriter.targetReps = this.targetReps;
      window.studentStrokeWriter.loadBookUnit(this.bookId, this.unitId);
    }
  }

  // 2. Modul Cerita Pelajaran Audio Lamban
  renderStoryModule(container) {
    container.innerHTML = `
      <div class="story-header-card">
        <div class="story-meta-left">
          <span class="story-mascot-badge" id="story-mascot-badge">🦖 Rexy Si T-Rex Cilik</span>
          <h3 class="story-title-hanzi" id="story-title-hanzi">Memuat Cerita...</h3>
          <div class="story-title-pinyin" id="story-title-pinyin"></div>
          <div class="story-title-meaning" id="story-title-meaning"></div>
          <p class="story-summary-text" id="story-summary-text"></p>
        </div>

        <div class="story-ctrl-actions">
          <div style="display: flex; align-items: center; gap: 8px;">
            <label style="font-size: 0.85rem; font-weight: 700;">🐢 Tempo:</label>
            <select id="story-speed-select" class="dino-select-primary" style="padding: 6px 10px;">
              <option value="0.5">0.5x (Sangat Lambat)</option>
              <option value="0.62" selected>0.62x (Standar SD)</option>
              <option value="0.75">0.75x (Sedang)</option>
              <option value="1.0">1.0x (Normal)</option>
            </select>
          </div>
          <button class="dino-btn-action" id="btn-play-all-story">▶️ Putar Cerita</button>
          <button class="dino-btn-outline" id="btn-stop-story">⏹️ Berhenti</button>
        </div>
      </div>

      <div class="story-sentences-list" id="story-sentences-list"></div>
    `;

    if (typeof DinoStoryReader !== 'undefined') {
      window.studentStoryReader = new DinoStoryReader();
      window.studentStoryReader.loadBookUnitStory(this.bookId, this.unitId);
    }
  }

  // 3. Modul Game Mencocokkan
  renderMatchModule(container) {
    container.innerHTML = `
      <div class="match-stats-bar">
        <div class="stat-pill">Langkah: <span class="stat-val" id="match-moves-count">0</span></div>
        <div class="stat-pill">Terpasang: <span class="stat-val" id="match-pairs-left">0 / 6</span></div>
        <button class="dino-btn-action" id="btn-restart-match" style="padding: 6px 16px;">🔄 Mulai Ulang</button>
      </div>

      <div id="match-board-grid" class="match-board-grid"></div>
    `;

    if (typeof DinoMatchGame !== 'undefined') {
      window.studentMatchGame = new DinoMatchGame();
      window.studentMatchGame.currentBookId = this.bookId;
      window.studentMatchGame.currentUnitId = this.unitId;
      window.studentMatchGame.startNewGame();
    }
  }

  // 4. Modul Kuis Pilihan Berganda (KKM 70 & WhatsApp Share)
  renderQuizModule(container) {
    container.innerHTML = `
      <div id="quiz-wrapper-card">
        <div id="quiz-question-box"></div>
        <div id="quiz-result-card" style="display: none;"></div>
      </div>
    `;

    if (typeof DinoQuiz !== 'undefined') {
      window.studentQuiz = new DinoQuiz();
      window.studentQuiz.currentBookId = this.bookId;
      window.studentQuiz.currentUnitId = this.unitId;
      window.studentQuiz.startQuiz();

      // Override showFinalResult to include WhatsApp Student Reporting
      const originalShowResult = window.studentQuiz.showFinalResult.bind(window.studentQuiz);
      window.studentQuiz.showFinalResult = () => {
        originalShowResult();
        this.enhanceQuizResultWithShare();
      };
    }
  }

  enhanceQuizResultWithShare() {
    const resultCard = document.getElementById('quiz-result-card');
    if (!resultCard || !window.studentQuiz) return;

    const finalScore = Math.round((window.studentQuiz.correctAnswersCount / window.studentQuiz.questions.length) * 100);
    const isPassed = finalScore >= 70;
    const studentName = this.studentName || 'Siswa Juara';

    const shareBox = document.createElement('div');
    shareBox.className = 'student-report-share-box';
    shareBox.innerHTML = `
      <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--dino-green-deep); margin-bottom: 8px;">
        📤 Kirim Laporan Nilai Tugas ke Guru
      </h3>
      <p style="font-size: 0.9rem; color: #555; margin-bottom: 14px;">
        Buktikan hasil belajarmu kepada guru dengan mengirimkan ringkasan nilai resmi ini.
      </p>

      <div style="background: white; border: 2px solid var(--dino-slate-border); border-radius: var(--radius-md); padding: 14px; font-family: monospace; font-size: 0.88rem; text-align: left; margin-bottom: 14px; white-space: pre-wrap;" id="report-text-preview">
📝 LAPORAN HASIL BELAJAR MANDARIN
👤 Nama Siswa: ${studentName}
📖 Materi: Buku Han Yu ${this.bookId} • Pelajaran ${this.unitId}
🎯 Target KKM: 70
📊 Nilai Akhir: ${finalScore}
🏆 Status: ${isPassed ? 'LULUS (TUNTAS) 🌟' : 'PERLU MENGULANG 🔄'}
🦖 Dino Mandarin Adventure Platform</div>

      <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
        <button class="dino-btn-action" id="btn-share-whatsapp" style="background: #25d366; box-shadow: 0 4px 0 #128c7e;">
          💬 Kirim via WhatsApp
        </button>
        <button class="dino-btn-outline" id="btn-copy-report">
          📋 Salin Teks Laporan
        </button>
      </div>
    `;

    resultCard.insertBefore(shareBox, resultCard.querySelector('.result-review-section'));

    // Bind WhatsApp Share
    const btnWa = shareBox.querySelector('#btn-share-whatsapp');
    if (btnWa) {
      btnWa.addEventListener('click', () => {
        const text = document.getElementById('report-text-preview').textContent;
        const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        window.open(waUrl, '_blank');
      });
    }

    // Bind Copy Report
    const btnCopy = shareBox.querySelector('#btn-copy-report');
    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        const text = document.getElementById('report-text-preview').textContent;
        navigator.clipboard.writeText(text).then(() => {
          btnCopy.textContent = '✅ Berhasil Disalin!';
          setTimeout(() => {
            btnCopy.textContent = '📋 Salin Teks Laporan';
          }, 2000);
        });
      });
    }
  }

  // 5. Modul PDF
  renderPdfModule(container) {
    const bookData = (window.DINO_DATA && window.DINO_DATA.books && window.DINO_DATA.books.find(b => b.id === this.bookId)) || { title: `Han Yu ${this.bookId}`, pdfFile: `HAN YU ${this.bookId}.pdf` };
    const pdfFilename = bookData.pdfFile || `HAN YU ${this.bookId}.pdf`;
    const pdfPath = `./${encodeURIComponent(pdfFilename).replace(/%2F/g, '/')}`;

    container.innerHTML = `
      <div class="pdf-viewer-card">
        <div class="pdf-meta-bar">
          <div>
            <div class="pdf-book-title">${bookData.title}</div>
            <div class="pdf-book-desc">Buku Pelajaran Resmi PDF Han Yu ${this.bookId}</div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="dino-btn-action" onclick="window.open('${pdfPath}', '_blank')">↗️ Buka Penuh</button>
          </div>
        </div>
        <div class="pdf-embed-wrapper" style="width: 100%; height: 750px; border: 2px solid var(--dino-slate-border); border-radius: var(--radius-md); overflow: hidden;">
          <iframe src="${pdfPath}#toolbar=1" class="pdf-embed-frame" style="width: 100%; height: 100%; border: none;" title="PDF Viewer"></iframe>
        </div>
      </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.dinoMurid = new DinoMuridController();
});
