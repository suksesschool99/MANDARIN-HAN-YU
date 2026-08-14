// =========================================================================
// MAIN APP CONTROLLER & TEACHER / CURRICULUM EXPLORER
// Generator Link Halaman Murid Dinamis, Navigasi Kurikulum Han Yu 1 - 12
// =========================================================================

class DinoApp {
  constructor() {
    this.selectedBookId = 1;
    this.selectedUnitId = 1;
    this.strokeWriter = null;
    this.matchingGame = null;
    this.quizEngine = null;
  }

  init() {
    // Inisialisasi Sub-Engines pada Halaman Utama
    this.strokeWriter = new DinoStrokeWriter('portal-stroke-canvas', 'portal-stroke-container');
    this.matchingGame = new DinoMatchingGame('portal-matching-container');
    this.quizEngine = new DinoQuizEngine('portal-quiz-container');

    window.dinoStroke = this.strokeWriter;
    window.dinoMatchGame = this.matchingGame;
    window.dinoQuiz = this.quizEngine;

    this.renderBooksGrid();
    this.populateSelectDropdowns();
    this.loadSelectedCurriculum();
    this.updateGeneratedStudentLink();
  }

  renderBooksGrid() {
    const gridEl = document.getElementById('books-overview-grid');
    if (!gridEl) return;

    gridEl.innerHTML = HAN_YU_CURRICULUM.books.map(b => `
      <div class="book-card-item ${b.id === this.selectedBookId ? 'active' : ''}" onclick="dinoApp.selectBook(${b.id})">
        <div class="book-dino-avatar">${b.dinoGuide.avatar}</div>
        <div class="book-card-content">
          <div class="book-title-tag">${b.title}</div>
          <div class="book-level-desc">${b.level}</div>
          <div class="book-units-badge">3 Unit (${b.units.length * 5} Bab Materi)</div>
        </div>
      </div>
    `).join('');
  }

  populateSelectDropdowns() {
    const bookSelect = document.getElementById('global-book-select');
    const unitSelect = document.getElementById('global-unit-select');

    if (bookSelect) {
      bookSelect.innerHTML = HAN_YU_CURRICULUM.books.map(b => 
        `<option value="${b.id}" ${b.id === this.selectedBookId ? 'selected' : ''}>📘 ${b.title} - ${b.level}</option>`
      ).join('');

      bookSelect.onchange = (e) => {
        this.selectedBookId = parseInt(e.target.value);
        this.selectedUnitId = 1;
        this.populateUnitDropdown();
        this.loadSelectedCurriculum();
        this.renderBooksGrid();
        this.updateGeneratedStudentLink();
      };
    }

    this.populateUnitDropdown();
  }

  populateUnitDropdown() {
    const unitSelect = document.getElementById('global-unit-select');
    const book = getBookById(this.selectedBookId);

    if (unitSelect && book) {
      unitSelect.innerHTML = book.units.map(u => 
        `<option value="${u.id}" ${u.id === this.selectedUnitId ? 'selected' : ''}>🌿 ${u.title}</option>`
      ).join('');

      unitSelect.onchange = (e) => {
        this.selectedUnitId = parseInt(e.target.value);
        this.loadSelectedCurriculum();
        this.updateGeneratedStudentLink();
      };
    }
  }

  selectBook(bookId) {
    this.selectedBookId = parseInt(bookId);
    this.selectedUnitId = 1;
    this.populateSelectDropdowns();
    this.renderBooksGrid();
    this.loadSelectedCurriculum();
    this.updateGeneratedStudentLink();

    // Scroll ke dashboard kerja
    const dash = document.getElementById('curriculum-workspace');
    if (dash) dash.scrollIntoView({ behavior: 'smooth' });
  }

  loadSelectedCurriculum() {
    const book = getBookById(this.selectedBookId);
    const unit = getUnitByBookAndUnitId(this.selectedBookId, this.selectedUnitId);

    // Update Header Dashboard
    const titleEl = document.getElementById('curriculum-header-title');
    const descEl = document.getElementById('curriculum-header-desc');
    const lessonsListEl = document.getElementById('unit-lessons-list');

    if (titleEl) titleEl.textContent = `${book.title} ➔ ${unit.title}`;
    if (descEl) descEl.textContent = `Pemandu Dinosaurus: ${book.dinoGuide.name} ${book.dinoGuide.avatar} - ${book.dinoGuide.desc}`;

    if (lessonsListEl && unit.lessons) {
      lessonsListEl.innerHTML = unit.lessons.map(l => 
        `<span class="lesson-chip">📖 ${l}</span>`
      ).join('');
    }

    // 1. Cerita Unit Audio Lamban
    this.renderStorySection(unit.story);

    // 2. Latihan Guratan
    this.renderStrokeSection(unit.vocab);

    // 3. Game Gambar
    if (this.matchingGame) {
      this.matchingGame.loadUnit(unit);
    }

    // 4. Kuis Pilihan Ganda KKM 70
    if (this.quizEngine) {
      this.quizEngine.loadUnit(unit);
    }
  }

  // -----------------------------------------------------------------------
  // RENDER CERITA UNIT
  // -----------------------------------------------------------------------
  renderStorySection(storyData) {
    const titleEl = document.getElementById('portal-story-title');
    const hanziEl = document.getElementById('portal-story-hanzi');
    const pinyinEl = document.getElementById('portal-story-pinyin');
    const indoEl = document.getElementById('portal-story-indo');
    const sentListEl = document.getElementById('portal-sentences-list');

    if (!storyData) return;

    if (titleEl) titleEl.textContent = storyData.title;
    if (hanziEl) hanziEl.textContent = storyData.hanzi;
    if (pinyinEl) pinyinEl.textContent = storyData.pinyin;
    if (indoEl) indoEl.textContent = storyData.indonesian;

    if (sentListEl && storyData.sentences) {
      sentListEl.innerHTML = storyData.sentences.map((st, idx) => `
        <div class="story-sentence-item" id="portal-sent-${idx}" onclick="dinoApp.playSentenceAudio('${st.hanzi.replace(/'/g, "\\'")}', ${idx})">
          <div class="sentence-bubble-num">${idx + 1}</div>
          <div class="sentence-text-block">
            <div class="sent-pinyin">${st.pinyin}</div>
            <div class="sent-hanzi">${st.hanzi}</div>
            <div class="sent-indo">${st.indonesian}</div>
          </div>
          <button class="sent-play-btn" title="Putar Pelan">🔊</button>
        </div>
      `).join('');
    }
  }

  playStoryFull() {
    const unit = getUnitByBookAndUnitId(this.selectedBookId, this.selectedUnitId);
    if (!unit || !unit.story) return;
    dinoAudio.speakMandarin(unit.story.hanzi, { rate: 0.65 });
  }

  playSentenceAudio(hanziText, index) {
    document.querySelectorAll('.story-sentence-item').forEach(el => el.classList.remove('speaking'));
    const targetEl = document.getElementById(`portal-sent-${index}`);
    if (targetEl) targetEl.classList.add('speaking');

    dinoAudio.speakMandarin(hanziText, {
      rate: 0.65,
      onEnd: () => {
        if (targetEl) targetEl.classList.remove('speaking');
      }
    });
  }

  // -----------------------------------------------------------------------
  // RENDER GURATAN
  // -----------------------------------------------------------------------
  renderStrokeSection(vocabList) {
    const listEl = document.getElementById('portal-stroke-vocab-list');
    if (!listEl || !vocabList || vocabList.length === 0) return;

    listEl.innerHTML = vocabList.map((v, idx) => `
      <button class="vocab-nav-pill ${idx === 0 ? 'active' : ''}" onclick="dinoApp.selectStrokeVocab(${idx})">
        <span class="pill-hanzi">${v.hanzi}</span>
        <span class="pill-pinyin">${v.pinyin}</span>
      </button>
    `).join('');

    this.currentVocabList = vocabList;
    this.currentStrokeVocabIndex = 0;

    const repeatSel = document.getElementById('portal-stroke-repeat-select');
    const repeats = parseInt(repeatSel ? repeatSel.value : '3');
    if (this.strokeWriter) {
      this.strokeWriter.loadVocab(vocabList[0], repeats);
    }
  }

  selectStrokeVocab(idx) {
    if (!this.currentVocabList) return;
    this.currentStrokeVocabIndex = idx;
    
    document.querySelectorAll('#portal-stroke-vocab-list .vocab-nav-pill').forEach((btn, bIdx) => {
      btn.classList.toggle('active', bIdx === idx);
    });

    const repeatSel = document.getElementById('portal-stroke-repeat-select');
    const repeats = parseInt(repeatSel ? repeatSel.value : '3');
    if (this.strokeWriter) {
      this.strokeWriter.loadVocab(this.currentVocabList[idx], repeats);
    }
  }

  nextCharacter() {
    if (!this.currentVocabList) return;
    const nextIdx = (this.currentStrokeVocabIndex + 1) % this.currentVocabList.length;
    this.selectStrokeVocab(nextIdx);
  }

  // -----------------------------------------------------------------------
  // GENERATOR LINK HALAMAN MURID
  // -----------------------------------------------------------------------
  updateGeneratedStudentLink() {
    const linkInput = document.getElementById('generated-student-url-input');
    const openBtn = document.getElementById('btn-open-student-page');
    const qrText = document.getElementById('student-link-info-text');

    // Mendapatkan URL absolut dasar
    let baseUrl = window.location.href.split('?')[0];
    if (baseUrl.endsWith('index.html')) {
      baseUrl = baseUrl.replace('index.html', 'student.html');
    } else if (baseUrl.endsWith('/')) {
      baseUrl += 'student.html';
    } else {
      baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1) + 'student.html';
    }

    const fullUrl = `${baseUrl}?book=${this.selectedBookId}&unit=${this.selectedUnitId}`;

    if (linkInput) linkInput.value = fullUrl;
    if (openBtn) {
      openBtn.onclick = () => window.open(fullUrl, '_blank');
    }
    if (qrText) {
      const book = getBookById(this.selectedBookId);
      const unit = getUnitByBookAndUnitId(this.selectedBookId, this.selectedUnitId);
      qrText.innerHTML = `Tautan Siap Dibagikan untuk Murid: <strong>${book.title} - ${unit.title}</strong>`;
    }
  }

  copyStudentLink() {
    const linkInput = document.getElementById('generated-student-url-input');
    if (!linkInput) return;

    linkInput.select();
    navigator.clipboard.writeText(linkInput.value).then(() => {
      const copyBtn = document.getElementById('btn-copy-student-link');
      if (copyBtn) {
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✅ Berhasil Disalin!';
        setTimeout(() => copyBtn.innerHTML = origText, 2500);
      }
    }).catch(() => {
      alert("Tautan: " + linkInput.value);
    });
  }
}

// Global instance
const dinoApp = new DinoApp();
window.dinoApp = dinoApp;
