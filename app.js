/**
 * Dino Mandarin Adventure - Main App Controller
 * Navigasi Modul, Generator Link Guru, & Student Task Parser (tugas.html)
 */

function initDinoApp() {
  // 1. Inisialisasi Audio Engine
  if (typeof DinoAudioEngine !== 'undefined') {
    window.dinoAudio = new DinoAudioEngine();
  }

  // 2. Inisialisasi Seluruh Modul
  if (typeof DinoStrokeWriter !== 'undefined') {
    window.dinoWriter = new DinoStrokeWriter();
  }
  if (typeof DinoStoryReader !== 'undefined') {
    window.dinoStory = new DinoStoryReader();
  }
  if (typeof DinoMatchGame !== 'undefined') {
    window.dinoMatch = new DinoMatchGame();
  }
  if (typeof DinoQuiz !== 'undefined') {
    window.dinoQuiz = new DinoQuiz();
  }

  // 3. Bind Tab Navigasi
  bindNavigationTabs();

  // 4. Bind Audio Controls di Header
  bindAudioControls();

  // 5. Parse Parameter URL Siswa (tugas.html)
  parseStudentUrlParams();

  // 6. Bind Generator Link Guru
  bindTeacherGenerator();
}

function bindNavigationTabs() {
  const tabBtns = document.querySelectorAll('.nav-tab-btn');
  const sections = document.querySelectorAll('.app-module-section');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      switchTab(targetId);
    });
  });
}

function switchTab(targetModuleId) {
  const tabBtns = document.querySelectorAll('.nav-tab-btn');
  const sections = document.querySelectorAll('.app-module-section');

  tabBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-target') === targetModuleId);
  });

  sections.forEach(sec => {
    const isActive = sec.id === targetModuleId;
    sec.classList.toggle('active', isActive);
  });

  if (window.dinoAudio) window.dinoAudio.playPop();

  // Trigger modul spesifik jika baru dibuka
  if (targetModuleId === 'module-stroke' && window.dinoWriter) {
    window.dinoWriter.initWriter();
  } else if (targetModuleId === 'module-story' && window.dinoStory) {
    // refresh story jika perlu
  } else if (targetModuleId === 'module-match' && window.dinoMatch) {
    if (window.dinoMatch.cards.length === 0) window.dinoMatch.startNewGame();
  } else if (targetModuleId === 'module-quiz' && window.dinoQuiz) {
    if (window.dinoQuiz.questions.length === 0) window.dinoQuiz.startQuiz();
  }
}

function bindAudioControls() {
  const btnToggleSfx = document.getElementById('btn-toggle-sfx');
  const btnToggleVoice = document.getElementById('btn-toggle-voice');

  if (btnToggleSfx && window.dinoAudio) {
    btnToggleSfx.addEventListener('click', () => {
      const enabled = window.dinoAudio.toggleSfx();
      btnToggleSfx.classList.toggle('muted', !enabled);
      btnToggleSfx.innerHTML = enabled ? '🔊 Efek: ON' : '🔇 Efek: OFF';
    });
  }

  if (btnToggleVoice && window.dinoAudio) {
    btnToggleVoice.addEventListener('click', () => {
      const enabled = window.dinoAudio.toggleVoice();
      btnToggleVoice.classList.toggle('muted', !enabled);
      btnToggleVoice.innerHTML = enabled ? '🗣️ Suara: ON' : '🤐 Suara: OFF';
    });
  }
}

function parseStudentUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const mod = params.get('mod') || params.get('module');
  const taskTitle = params.get('task') || params.get('title');
  const book = parseInt(params.get('book')) || 1;
  const unit = parseInt(params.get('unit')) || 1;
  const reps = parseInt(params.get('reps')) || 3;

  const banner = document.getElementById('student-task-banner');
  const taskTitleEl = document.getElementById('student-task-title');
  const taskDescEl = document.getElementById('student-task-desc');

  if (taskTitle || mod) {
    if (banner) banner.style.display = 'block';
    if (taskTitleEl) taskTitleEl.textContent = taskTitle || 'Tugas Mandiri Siswa';
    
    let descText = `Buku Han Yu ${book} • Unit ${unit}`;
    if (mod === 'stroke') descText += ` • Target: ${reps}x Tulis Telur Menetas`;
    if (mod === 'story') descText += ` • Membaca Cerita & Teks Pelajaran`;
    if (mod === 'match') descText += ` • Game Mencocokkan Pasangan Kartu`;
    if (mod === 'quiz') descText += ` • Kuis Pilihan Berganda Ber-Audio`;
    if (taskDescEl) taskDescEl.textContent = descText;

    // Arahkan ke modul yang diminta dan load data sesuai unit
    if (mod === 'stroke') {
      switchTab('module-stroke');
      if (window.dinoWriter) {
        window.dinoWriter.targetReps = reps;
        window.dinoWriter.loadBookUnit(book, unit);
      }
    } else if (mod === 'story') {
      switchTab('module-story');
      if (window.dinoStory) {
        window.dinoStory.loadBookUnitStory(book, unit);
      }
    } else if (mod === 'match') {
      switchTab('module-match');
    } else if (mod === 'quiz') {
      switchTab('module-quiz');
    }
  }
}

function bindTeacherGenerator() {
  const btnOpenModal = document.getElementById('btn-open-teacher-modal');
  const modal = document.getElementById('teacher-generator-modal');
  const btnClose = document.getElementById('btn-close-teacher-modal');
  const btnGenerate = document.getElementById('btn-generate-link');
  const btnCopy = document.getElementById('btn-copy-link');
  const btnTestOpen = document.getElementById('btn-test-open-link');

  const modSelect = document.getElementById('gen-module-select');
  const bookSelect = document.getElementById('gen-book-select');
  const unitSelect = document.getElementById('gen-unit-select');
  const repsSelect = document.getElementById('gen-reps-select');
  const repsGroup = document.getElementById('gen-reps-group');
  const titleInput = document.getElementById('gen-task-title');
  const outputInput = document.getElementById('gen-output-url');

  if (btnOpenModal && modal) {
    btnOpenModal.addEventListener('click', () => {
      modal.classList.add('show');
      modal.style.display = 'flex';
      populateTeacherBooks();
      updateTeacherUnits();
    });
  }

  if (btnClose && modal) {
    btnClose.addEventListener('click', () => {
      modal.classList.remove('show');
      modal.style.display = 'none';
    });
  }

  if (modSelect) {
    modSelect.addEventListener('change', () => {
      const isStroke = modSelect.value === 'stroke';
      if (repsGroup) repsGroup.style.display = isStroke ? 'block' : 'none';
    });
  }

  if (bookSelect) {
    bookSelect.addEventListener('change', () => {
      updateTeacherUnits();
    });
  }

  if (btnGenerate && outputInput) {
    btnGenerate.addEventListener('click', () => {
      const mod = modSelect ? modSelect.value : 'stroke';
      const book = bookSelect ? bookSelect.value : '1';
      const unit = unitSelect ? unitSelect.value : '1';
      const reps = repsSelect ? repsSelect.value : '3';
      const title = titleInput && titleInput.value ? titleInput.value.trim() : `Tugas Han Yu ${book} Unit ${unit}`;

      // Buat URL yang mengarah langsung ke tugas.html
      const currentUrl = window.location.href.split('?')[0].replace('index.html', '').replace(/\/$/, '');
      const baseUrl = currentUrl.endsWith('.html') ? currentUrl.substring(0, currentUrl.lastIndexOf('/')) : currentUrl;
      
      const link = `${baseUrl}/tugas.html?mod=${mod}&book=${book}&unit=${unit}&reps=${reps}&task=${encodeURIComponent(title)}`;
      outputInput.value = link;

      const linkContainer = document.getElementById('generated-link-container');
      if (linkContainer) linkContainer.style.display = 'block';
    });
  }

  if (btnCopy && outputInput) {
    btnCopy.addEventListener('click', () => {
      outputInput.select();
      navigator.clipboard.writeText(outputInput.value).then(() => {
        btnCopy.textContent = '✅ Berhasil Disalin!';
        setTimeout(() => { btnCopy.textContent = '📋 Salin Link Tugas'; }, 2000);
      });
    });
  }

  if (btnTestOpen && outputInput) {
    btnTestOpen.addEventListener('click', () => {
      if (outputInput.value) {
        window.open(outputInput.value, '_blank');
      }
    });
  }
}

function populateTeacherBooks() {
  const select = document.getElementById('gen-book-select');
  if (!select) return;
  if (window.DINO_DATA && window.DINO_DATA.books) {
    select.innerHTML = window.DINO_DATA.books.map(b => `
      <option value="${b.id}">${b.title}</option>
    `).join('');
  }
}

function updateTeacherUnits() {
  const bookSelect = document.getElementById('gen-book-select');
  const unitSelect = document.getElementById('gen-unit-select');
  if (!bookSelect || !unitSelect) return;

  const bookId = parseInt(bookSelect.value) || 1;
  const unitMap = (window.DINO_DATA && window.DINO_DATA.unitTitles && window.DINO_DATA.unitTitles[bookId]) || {};

  let html = '';
  for (let u = 1; u <= 10; u++) {
    const title = unitMap[u] || `Unit ${u}`;
    html += `<option value="${u}">Unit ${u} (${title})</option>`;
  }
  unitSelect.innerHTML = html;
}

// Global initialization
window.addEventListener('DOMContentLoaded', initDinoApp);
