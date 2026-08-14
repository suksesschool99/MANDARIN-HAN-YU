/**
 * Dino Mandarin Adventure - Main App Controller
 * Navigasi Tab 5 Modul, Sinkronisasi Buku & Unit, Pengaturan Audio Global
 */

class DinoApp {
  constructor() {
    this.strokeWriter = null;
    this.storyReader = null;
    this.matchGame = null;
    this.quiz = null;
    this.pdfViewer = null;

    this.init();
  }

  init() {
    this.initAudioControls();
    this.initNavigationTabs();
    this.initModules();
    this.initTeacherTaskModal();
    this.checkStudentTaskUrl();
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

  initNavigationTabs() {
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    const sections = document.querySelectorAll('.app-module-section');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');

        tabBtns.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
        }

        // Hentikan suara bacaan jika berpindah tab
        if (window.dinoAudio) {
          window.dinoAudio.stopSpeaking();
        }

        // Sinkronisasi data saat tab aktif
        if (targetId === 'module-pdf' && this.pdfViewer) {
          this.pdfViewer.loadPdf(this.pdfViewer.currentBookId);
        }
      });
    });

    // Check URL parameters for default active tab
    const params = new URLSearchParams(window.location.search);
    const mod = params.get('mod') || params.get('module');
    if (mod) {
      const tabMap = {
        'pdf': 'tab-btn-pdf',
        'stroke': 'tab-btn-stroke',
        'story': 'tab-btn-story',
        'match': 'tab-btn-match',
        'quiz': 'tab-btn-quiz'
      };
      const btnId = tabMap[mod];
      if (btnId) {
        const targetBtn = document.getElementById(btnId);
        if (targetBtn) targetBtn.click();
      }
    }
  }

  initModules() {
    if (typeof DinoStrokeWriter !== 'undefined') {
      this.strokeWriter = new DinoStrokeWriter();
    }
    if (typeof DinoStoryReader !== 'undefined') {
      this.storyReader = new DinoStoryReader();
    }
    if (typeof DinoMatchGame !== 'undefined') {
      this.matchGame = new DinoMatchGame();
    }
    if (typeof DinoQuiz !== 'undefined') {
      this.quiz = new DinoQuiz();
    }
    if (typeof DinoPdfViewer !== 'undefined') {
      this.pdfViewer = new DinoPdfViewer();
    }
  }

  initTeacherTaskModal() {
    const btnOpenModal = document.getElementById('btn-open-teacher-modal');
    const modal = document.getElementById('teacher-task-modal');
    const btnCloseModal = document.getElementById('btn-close-task-modal');
    const btnGenerateLink = document.getElementById('btn-generate-task-link');
    const generatedInput = document.getElementById('task-generated-url');
    const btnCopyLink = document.getElementById('btn-copy-task-link');

    if (btnOpenModal && modal) {
      btnOpenModal.addEventListener('click', () => {
        modal.classList.add('active');
        this.populateModalDropdowns();
      });
    }

    if (btnCloseModal && modal) {
      btnCloseModal.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (btnGenerateLink) {
      btnGenerateLink.addEventListener('click', () => {
        const mod = document.getElementById('task-module-select').value;
        const book = document.getElementById('task-book-select').value;
        const unit = document.getElementById('task-unit-select').value;
        const reps = document.getElementById('task-reps-select').value;

        const baseUrl = window.location.origin + window.location.pathname.replace('tugas.html', 'index.html');
        const finalUrl = `${baseUrl}?mod=${mod}&book=${book}&unit=${unit}&reps=${reps}`;

        if (generatedInput) {
          generatedInput.value = finalUrl;
        }
      });
    }

    if (btnCopyLink && generatedInput) {
      btnCopyLink.addEventListener('click', () => {
        generatedInput.select();
        document.execCommand('copy');
        btnCopyLink.textContent = '✅ Berhasil Disalin!';
        setTimeout(() => {
          btnCopyLink.textContent = '📋 Salin Link';
        }, 2000);
      });
    }
  }

  populateModalDropdowns() {
    const bookSel = document.getElementById('task-book-select');
    const unitSel = document.getElementById('task-unit-select');
    if (!bookSel || !window.DINO_DATA) return;

    bookSel.innerHTML = window.DINO_DATA.books.map(b => `
      <option value="${b.id}">${b.title}</option>
    `).join('');

    const updateUnits = () => {
      const bId = parseInt(bookSel.value) || 1;
      const unitMap = (window.DINO_DATA.unitTitles && window.DINO_DATA.unitTitles[bId]) || {};
      const keys = Object.keys(unitMap);
      let html = '';
      if (keys.length > 0) {
        keys.forEach(k => {
          html += `<option value="${k}">Pelajaran ${k} (${unitMap[k]})</option>`;
        });
      } else {
        for (let u = 1; u <= 12; u++) {
          html += `<option value="${u}">Pelajaran ${u}</option>`;
        }
      }
      if (unitSel) unitSel.innerHTML = html;
    };

    bookSel.addEventListener('change', updateUnits);
    updateUnits();
  }

  checkStudentTaskUrl() {
    const params = new URLSearchParams(window.location.search);
    const book = params.get('book');
    const unit = params.get('unit');
    const mod = params.get('mod');

    if (book && unit) {
      const banner = document.getElementById('student-task-banner');
      const descEl = document.getElementById('student-task-desc');
      if (banner) {
        banner.style.display = 'block';
        if (descEl) {
          descEl.textContent = `Buku Han Yu ${book} • Pelajaran ${unit} • Modul: ${mod || 'Latihan'}`;
        }
      }
    }
  }
}

// Inisialisasi Otomatis saat DOM Siap
document.addEventListener('DOMContentLoaded', () => {
  window.dinoApp = new DinoApp();
});
