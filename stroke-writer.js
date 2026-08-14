/**
 * Dino Mandarin Adventure - Stroke Writer Module
 * Canvas Menulis Interaktif, Target Repetisi 3-6x, Panduan Langkah Guratan Resmi,
 * Hitungan Skor Benar/Salah + Audio Tepuk Tangan (Benar) & Suara Dino Roar (Salah)
 */

class DinoStrokeWriter {
  constructor() {
    this.writer = null;
    this.currentBookId = 1;
    this.currentUnitId = 1;
    this.currentChar = '你';
    this.currentCharIndex = 0;
    this.unitChars = [];
    
    // Repetition & Score Tracker (3 sampai 6 kali)
    this.targetReps = 3;
    this.currentReps = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.isCompleted = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.populateBookDropdown();
    this.bindEvents();

    const params = new URLSearchParams(window.location.search);
    const book = parseInt(params.get('book')) || 1;
    const unit = parseInt(params.get('unit')) || 1;
    const reps = parseInt(params.get('reps')) || 3;

    this.targetReps = Math.min(Math.max(reps, 3), 6);
    if (this.repsSelect) this.repsSelect.value = this.targetReps;

    this.loadBookUnit(book, unit);
  }

  cacheDom() {
    this.bookSelect = document.getElementById('stroke-book-select');
    this.unitSelect = document.getElementById('stroke-unit-select');
    this.repsSelect = document.getElementById('stroke-reps-target');
    this.eggTracker = document.getElementById('reps-egg-tracker');
    
    this.pinyinEl = document.getElementById('char-pinyin');
    this.meaningEl = document.getElementById('char-meaning');
    this.strokeCountBadge = document.getElementById('char-stroke-count');
    this.dinoTipEl = document.getElementById('char-dino-tip');
    
    this.correctCountEl = document.getElementById('stroke-correct-count');
    this.incorrectCountEl = document.getElementById('stroke-incorrect-count');
    
    this.btnAnimate = document.getElementById('btn-animate-stroke');
    this.btnPractice = document.getElementById('btn-practice-stroke');
    this.btnClear = document.getElementById('btn-clear-canvas');
    this.btnAudio = document.getElementById('btn-speak-current-char');
    
    this.btnPrev = document.getElementById('btn-prev-char');
    this.btnNext = document.getElementById('btn-next-char');
    this.customInput = document.getElementById('custom-char-input');
    this.btnSearch = document.getElementById('btn-search-char');
    this.chipsContainer = document.getElementById('stroke-char-chips');
    this.strokeStepsList = document.getElementById('stroke-steps-list');
    this.writerContainer = document.getElementById('character-target-div');
  }

  populateBookDropdown() {
    if (!this.bookSelect) return;
    if (window.DINO_DATA && window.DINO_DATA.books) {
      this.bookSelect.innerHTML = window.DINO_DATA.books.map(b => `
        <option value="${b.id}">${b.title}</option>
      `).join('');
    }
  }

  bindEvents() {
    if (this.bookSelect) {
      this.bookSelect.addEventListener('change', (e) => {
        this.loadBookUnit(parseInt(e.target.value) || 1, 1);
      });
    }

    if (this.unitSelect) {
      this.unitSelect.addEventListener('change', (e) => {
        this.loadUnit(parseInt(e.target.value) || 1);
      });
    }

    if (this.repsSelect) {
      this.repsSelect.addEventListener('change', (e) => {
        this.targetReps = parseInt(e.target.value) || 3;
        this.currentReps = 0;
        this.renderEggTracker();
      });
    }

    if (this.btnAnimate) {
      this.btnAnimate.addEventListener('click', () => this.animateStroke());
    }

    if (this.btnPractice) {
      this.btnPractice.addEventListener('click', () => this.startQuizMode());
    }

    if (this.btnClear) {
      this.btnClear.addEventListener('click', () => this.clearCanvas());
    }

    if (this.btnAudio) {
      this.btnAudio.addEventListener('click', () => {
        if (window.dinoAudio) window.dinoAudio.speakMandarinSlow(this.currentChar);
      });
    }

    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', () => this.navigateChar(-1));
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => this.navigateChar(1));
    }

    if (this.btnSearch && this.customInput) {
      this.btnSearch.addEventListener('click', () => {
        const val = this.customInput.value.trim();
        if (val) this.setCustomCharacter(val[0]);
      });
      this.customInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const val = this.customInput.value.trim();
          if (val) this.setCustomCharacter(val[0]);
        }
      });
    }
  }

  loadBookUnit(bookId, unitId) {
    this.currentBookId = parseInt(bookId) || 1;
    this.currentUnitId = parseInt(unitId) || 1;

    if (this.bookSelect) this.bookSelect.value = this.currentBookId;

    // Update unit dropdown titles
    if (this.unitSelect) {
      const unitMap = (window.DINO_DATA && window.DINO_DATA.unitTitles && window.DINO_DATA.unitTitles[this.currentBookId]) || {};
      const unitKeys = Object.keys(unitMap);
      let html = '';
      if (unitKeys.length > 0) {
        unitKeys.forEach(u => {
          const title = unitMap[u] || `Unit ${u}`;
          html += `<option value="${u}" ${parseInt(u) === this.currentUnitId ? 'selected' : ''}>Pelajaran ${u} (${title})</option>`;
        });
      } else {
        for (let u = 1; u <= 10; u++) {
          html += `<option value="${u}" ${u === this.currentUnitId ? 'selected' : ''}>Pelajaran ${u}</option>`;
        }
      }
      this.unitSelect.innerHTML = html;
      this.unitSelect.value = this.currentUnitId;
    }

    this.loadUnit(this.currentUnitId);
  }

  loadUnit(unitId) {
    this.currentUnitId = parseInt(unitId) || 1;

    // Filter characters for this book & unit
    let chars = [];
    if (window.DINO_DATA && window.DINO_DATA.vocabList) {
      chars = window.DINO_DATA.vocabList.filter(v => v.book === this.currentBookId && v.unit === this.currentUnitId);
      if (chars.length === 0) {
        chars = window.DINO_DATA.vocabList.filter(v => v.book === this.currentBookId);
      }
    }

    if (chars.length === 0) {
      // Fallback
      chars = [
        { hanzi: '你', pinyin: 'nǐ', meaning: 'Kamu', strokes: 7, strokeSteps: ['1. 撇', '2. 竖', '3. 撇', '4. 横撇', '5. 竖钩', '6. 撇', '7. 点'], tip: 'Radikal orang (亻) di kiri.' },
        { hanzi: '好', pinyin: 'hǎo', meaning: 'Baik / Bagus', strokes: 6, strokeSteps: ['1. 撇点', '2. 撇', '3. 提', '4. 横撇', '5. 弯钩', '6. 横'], tip: 'Radikal wanita (女) + anak (子).' }
      ];
    }

    this.unitChars = chars;
    this.currentCharIndex = 0;
    this.renderCharChips();
    this.selectCharacter(0);
  }

  renderCharChips() {
    if (!this.chipsContainer) return;
    this.chipsContainer.innerHTML = this.unitChars.map((item, idx) => `
      <button class="stroke-char-chip ${idx === this.currentCharIndex ? 'active' : ''}" data-index="${idx}">
        <span class="chip-hanzi">${item.hanzi}</span>
        <span class="chip-pinyin">${item.pinyin}</span>
      </button>
    `).join('');

    const chips = this.chipsContainer.querySelectorAll('.stroke-char-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const idx = parseInt(chip.getAttribute('data-index'));
        this.selectCharacter(idx);
      });
    });
  }

  selectCharacter(index) {
    if (!this.unitChars[index]) return;
    this.currentCharIndex = index;
    const item = this.unitChars[index];
    this.currentChar = item.hanzi[0]; // Ambil karakter pertama jika frasa

    // Update Chips UI
    if (this.chipsContainer) {
      const allChips = this.chipsContainer.querySelectorAll('.stroke-char-chip');
      allChips.forEach((c, idx) => {
        c.classList.toggle('active', idx === index);
      });
    }

    // Update Metadata
    if (this.pinyinEl) this.pinyinEl.textContent = item.pinyin;
    if (this.meaningEl) this.meaningEl.textContent = item.meaning;
    if (this.strokeCountBadge) this.strokeCountBadge.textContent = `${item.strokes || 1} Guratan`;
    if (this.dinoTipEl) this.dinoTipEl.textContent = item.tip || 'Tulis setiap goresan dengan mantap dan runtut!';

    // Render Stroke Steps
    this.renderStrokeSteps(item.strokeSteps || []);

    // Reset Repetition State
    this.currentReps = 0;
    this.isCompleted = false;
    this.renderEggTracker();

    // Render Canvas HanziWriter
    this.initHanziWriter(this.currentChar);
  }

  renderStrokeSteps(steps) {
    if (!this.strokeStepsList) return;
    if (!steps || steps.length === 0) {
      this.strokeStepsList.innerHTML = '<li class="step-item">Urutan guratan standar Kaishu</li>';
      return;
    }
    this.strokeStepsList.innerHTML = steps.map((s, idx) => `
      <li class="step-item"><span class="step-num">${idx + 1}</span> ${s}</li>
    `).join('');
  }

  initHanziWriter(char) {
    const targetDiv = document.getElementById('character-target-div');
    if (!targetDiv) return;
    targetDiv.innerHTML = '';

    if (typeof HanziWriter === 'undefined') {
      targetDiv.innerHTML = `<div style="font-size: 8rem; font-family: var(--font-chinese); color: var(--dino-green-deep); text-align: center; line-height: 250px;">${char}</div>`;
      return;
    }

    try {
      this.writer = HanziWriter.create('character-target-div', char, {
        width: 260,
        height: 260,
        padding: 15,
        showOutline: true,
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 250,
        strokeColor: '#1b5e20',
        outlineColor: '#c8e6c9',
        drawingColor: '#e65100',
        drawingWidth: 16,
        showHintAfterMisses: 2,
        highlightColor: '#ff9800'
      });

      // Otomatis mulai mode latihan interaktif
      this.startQuizMode();
    } catch (e) {
      console.warn('HanziWriter init error:', e);
      targetDiv.innerHTML = `<div style="font-size: 8rem; font-family: var(--font-chinese); color: var(--dino-green-deep); text-align: center; line-height: 250px;">${char}</div>`;
    }
  }

  animateStroke() {
    if (this.writer) {
      if (window.dinoAudio) window.dinoAudio.speakMandarinSlow(this.currentChar);
      this.writer.animateCharacter({
        onComplete: () => {
          this.startQuizMode();
        }
      });
    }
  }

  clearCanvas() {
    if (this.writer) {
      this.writer.quiz();
    }
  }

  startQuizMode() {
    if (!this.writer) return;

    this.writer.quiz({
      onCorrectStroke: (data) => {
        this.correctCount++;
        if (this.correctCountEl) this.correctCountEl.textContent = this.correctCount;
        
        // Suara Tepuk Tangan Single Clap pada setiap goresan benar
        if (window.dinoAudio) window.dinoAudio.playClapSingle();
      },
      onMistake: (strokeData) => {
        this.incorrectCount++;
        if (this.incorrectCountEl) this.incorrectCountEl.textContent = this.incorrectCount;
        
        // Suara Raungan Dinosaurus saat salah goresan
        if (window.dinoAudio) window.dinoAudio.playDinoRoar();
      },
      onComplete: (summary) => {
        this.currentReps++;
        this.renderEggTracker();

        if (this.currentReps >= this.targetReps) {
          // Sukses Penuh Menyelesaikan Target Repetisi (3-6x)
          this.isCompleted = true;
          if (window.dinoAudio) {
            window.dinoAudio.playApplause(); // Suara Tepuk Tangan Meriah & Fanfare
          }
          this.showCelebrationModal();
        } else {
          // Masih perlu repetisi berikutnya
          if (window.dinoAudio) {
            window.dinoAudio.playApplause();
          }
          setTimeout(() => {
            if (this.writer) this.writer.quiz();
          }, 800);
        }
      }
    });
  }

  renderEggTracker() {
    if (!this.eggTracker) return;
    let html = '';
    for (let i = 1; i <= this.targetReps; i++) {
      if (i < this.currentReps) {
        html += `<div class="egg-item hatched" title="Selesai Latihan ke-${i}">🦖<span>Lolos ${i}x</span></div>`;
      } else if (i === this.currentReps) {
        html += `<div class="egg-item cracking" title="Latihan ke-${i} Selesai!">🐣<span>Retak ${i}x</span></div>`;
      } else {
        html += `<div class="egg-item intact" title="Target Latihan ke-${i}">🥚<span>Target ${i}x</span></div>`;
      }
    }
    this.eggTracker.innerHTML = html;
  }

  showCelebrationModal() {
    const modal = document.getElementById('stroke-success-modal');
    if (modal) {
      const charEl = modal.querySelector('.modal-char-display');
      if (charEl) charEl.textContent = this.currentChar;
      modal.classList.add('active');
    }
  }

  navigateChar(direction) {
    const newIdx = this.currentCharIndex + direction;
    if (newIdx >= 0 && newIdx < this.unitChars.length) {
      this.selectCharacter(newIdx);
    }
  }

  setCustomCharacter(char) {
    if (!char) return;
    this.currentChar = char;
    if (this.pinyinEl) this.pinyinEl.textContent = '-';
    if (this.meaningEl) this.meaningEl.textContent = 'Karakter Pilihan';
    if (this.strokeCountBadge) this.strokeCountBadge.textContent = 'Kustom';
    if (this.dinoTipEl) this.dinoTipEl.textContent = `Latihan menulis karakter kustom: ${char}`;
    this.renderStrokeSteps([]);
    this.currentReps = 0;
    this.renderEggTracker();
    this.initHanziWriter(char);
  }
}

// Inisialisasi Singleton
if (typeof window !== 'undefined') {
  window.DinoStrokeWriter = DinoStrokeWriter;
}
