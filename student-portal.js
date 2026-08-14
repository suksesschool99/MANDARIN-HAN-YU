// =========================================================================
// STUDENT CLASSROOM LOGIC (HALAMAN MURID BERTEMA DINOSAURUS)
// Menerima parameter Buku & Unit dari URL, menyajikan petualangan belajar 4 Quest
// =========================================================================

class DinoStudentPortal {
  constructor() {
    this.currentBookId = 1;
    this.currentUnitId = 1;
    this.currentTab = 'story'; // 'story' | 'stroke' | 'matching' | 'quiz'
    this.currentVocabIndex = 0;
    this.strokeWriter = null;
    this.matchingGame = null;
    this.quizEngine = null;
  }

  init() {
    // 1. Baca URL Parameters (misal: ?book=2&unit=1)
    const params = new URLSearchParams(window.location.search);
    const bookParam = parseInt(params.get('book'));
    const unitParam = parseInt(params.get('unit'));

    if (bookParam && bookParam >= 1 && bookParam <= 12) {
      this.currentBookId = bookParam;
    }
    if (unitParam && unitParam >= 1 && unitParam <= 3) {
      this.currentUnitId = unitParam;
    }

    // 2. Inisialisasi Sub-Engines
    this.strokeWriter = new DinoStrokeWriter('student-stroke-canvas', 'student-stroke-container');
    this.matchingGame = new DinoMatchingGame('student-matching-container');
    this.quizEngine = new DinoQuizEngine('student-quiz-container');

    // Make global references for inline HTML handlers
    window.dinoStroke = this.strokeWriter;
    window.dinoMatchGame = this.matchingGame;
    window.dinoQuiz = this.quizEngine;

    // 3. Render Komponen Tampilan
    this.renderHeaderInfo();
    this.renderBookUnitSelectors();
    this.loadCurrentContent();
  }

  getCurrentBook() {
    return getBookById(this.currentBookId);
  }

  getCurrentUnit() {
    return getUnitByBookAndUnitId(this.currentBookId, this.currentUnitId);
  }

  renderHeaderInfo() {
    const book = this.getCurrentBook();
    const unit = this.getCurrentUnit();

    const titleEl = document.getElementById('student-page-title');
    const badgeEl = document.getElementById('student-book-badge');
    const avatarEl = document.getElementById('dino-guide-avatar');
    const guideNameEl = document.getElementById('dino-guide-name');
    const guideMsgEl = document.getElementById('dino-guide-speech');

    if (titleEl) titleEl.textContent = `${book.title} - ${unit.title}`;
    if (badgeEl) badgeEl.textContent = `${book.level}`;
    if (avatarEl) avatarEl.textContent = book.dinoGuide.avatar;
    if (guideNameEl) guideNameEl.textContent = `${book.dinoGuide.name} (${book.dinoGuide.species})`;
    if (guideMsgEl) guideMsgEl.textContent = `Hai Petualang Cilik! Selamat datang di ${unit.title}. Selesaikan 4 misi belajarmu hari ini untuk mengoleksi Piala Dinosaurus!`;
  }

  renderBookUnitSelectors() {
    const bookSel = document.getElementById('student-book-select');
    const unitSel = document.getElementById('student-unit-select');

    if (bookSel) {
      bookSel.innerHTML = HAN_YU_CURRICULUM.books.map(b => 
        `<option value="${b.id}" ${b.id === this.currentBookId ? 'selected' : ''}>📘 ${b.title}</option>`
      ).join('');
      
      bookSel.onchange = (e) => {
        this.currentBookId = parseInt(e.target.value);
        this.currentUnitId = 1;
        this.currentVocabIndex = 0;
        this.updateUrlParams();
        this.renderHeaderInfo();
        this.renderBookUnitSelectors();
        this.loadCurrentContent();
      };
    }

    const currentBook = this.getCurrentBook();
    if (unitSel && currentBook) {
      unitSel.innerHTML = currentBook.units.map(u => 
        `<option value="${u.id}" ${u.id === this.currentUnitId ? 'selected' : ''}>🌿 ${u.title}</option>`
      ).join('');

      unitSel.onchange = (e) => {
        this.currentUnitId = parseInt(e.target.value);
        this.currentVocabIndex = 0;
        this.updateUrlParams();
        this.renderHeaderInfo();
        this.loadCurrentContent();
      };
    }
  }

  updateUrlParams() {
    const url = new URL(window.location);
    url.searchParams.set('book', this.currentBookId);
    url.searchParams.set('unit', this.currentUnitId);
    window.history.replaceState({}, '', url);
  }

  switchTab(tabKey) {
    this.currentTab = tabKey;
    document.querySelectorAll('.quest-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabKey);
    });

    document.querySelectorAll('.quest-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `quest-panel-${tabKey}`);
    });

    // Resize canvas jika masuk ke tab stroke
    if (tabKey === 'stroke') {
      setTimeout(() => {
        if (this.strokeWriter) this.strokeWriter.resizeCanvas();
      }, 100);
    }
  }

  loadCurrentContent() {
    const unit = this.getCurrentUnit();

    // 1. Render Cerita Unit (Audio Lamban)
    this.renderStorySection(unit.story);

    // 2. Load Latihan Guratan
    this.renderVocabSelectorForStrokes(unit.vocab);

    // 3. Load Game Mencocokkan Gambar
    if (this.matchingGame) {
      this.matchingGame.loadUnit(unit);
    }

    // 4. Load Kuis Soal Latihan
    if (this.quizEngine) {
      this.quizEngine.loadUnit(unit);
    }
  }

  // -----------------------------------------------------------------------
  // RENDER CERITA AUDIO LAMBAN
  // -----------------------------------------------------------------------
  renderStorySection(storyData) {
    const titleEl = document.getElementById('story-display-title');
    const fullHanziEl = document.getElementById('story-full-hanzi');
    const fullPinyinEl = document.getElementById('story-full-pinyin');
    const fullIndoEl = document.getElementById('story-full-indo');
    const sentenceListEl = document.getElementById('story-sentences-container');

    if (!storyData) return;

    if (titleEl) titleEl.textContent = storyData.title;
    if (fullHanziEl) fullHanziEl.textContent = storyData.hanzi;
    if (fullPinyinEl) fullPinyinEl.textContent = storyData.pinyin;
    if (fullIndoEl) fullIndoEl.textContent = storyData.indonesian;

    if (sentenceListEl && storyData.sentences) {
      sentenceListEl.innerHTML = storyData.sentences.map((st, idx) => `
        <div class="story-sentence-item" id="sent-${idx}" onclick="studentPortal.playSentenceAudio('${st.hanzi.replace(/'/g, "\\'")}', ${idx})">
          <div class="sentence-bubble-num">${idx + 1}</div>
          <div class="sentence-text-block">
            <div class="sent-pinyin">${st.pinyin}</div>
            <div class="sent-hanzi">${st.hanzi}</div>
            <div class="sent-indo">${st.indonesian}</div>
          </div>
          <button class="sent-play-btn" title="Dengarkan kalimat ini pelan-pelan">🔊</button>
        </div>
      `).join('');
    }
  }

  playStoryFull() {
    const unit = this.getCurrentUnit();
    if (!unit || !unit.story) return;
    dinoAudio.speakMandarin(unit.story.hanzi, { rate: 0.65 });
  }

  playSentenceAudio(hanziText, index) {
    document.querySelectorAll('.story-sentence-item').forEach(el => el.classList.remove('speaking'));
    const targetEl = document.getElementById(`sent-${index}`);
    if (targetEl) targetEl.classList.add('speaking');

    dinoAudio.speakMandarin(hanziText, {
      rate: 0.65,
      onEnd: () => {
        if (targetEl) targetEl.classList.remove('speaking');
      }
    });
  }

  stopStoryAudio() {
    dinoAudio.stopSpeaking();
    document.querySelectorAll('.story-sentence-item').forEach(el => el.classList.remove('speaking'));
  }

  // -----------------------------------------------------------------------
  // RENDER LATIHAN GURATAN
  // -----------------------------------------------------------------------
  renderVocabSelectorForStrokes(vocabList) {
    const selectorContainer = document.getElementById('stroke-vocab-list-nav');
    if (!selectorContainer || !vocabList || vocabList.length === 0) return;

    selectorContainer.innerHTML = vocabList.map((v, idx) => `
      <button class="vocab-nav-pill ${idx === this.currentVocabIndex ? 'active' : ''}" onclick="studentPortal.selectVocabForStroke(${idx})">
        <span class="pill-hanzi">${v.hanzi}</span>
        <span class="pill-pinyin">${v.pinyin}</span>
      </button>
    `).join('');

    const activeVocab = vocabList[this.currentVocabIndex] || vocabList[0];
    const targetRepeats = parseInt(document.getElementById('stroke-repeat-select')?.value || '3');
    
    if (this.strokeWriter) {
      this.strokeWriter.loadVocab(activeVocab, targetRepeats);
    }
  }

  selectVocabForStroke(index) {
    const unit = this.getCurrentUnit();
    if (!unit || !unit.vocab) return;
    this.currentVocabIndex = index;
    this.renderVocabSelectorForStrokes(unit.vocab);
  }

  nextStrokeCharacter() {
    const unit = this.getCurrentUnit();
    if (!unit || !unit.vocab) return;
    this.currentVocabIndex = (this.currentVocabIndex + 1) % unit.vocab.length;
    this.renderVocabSelectorForStrokes(unit.vocab);
  }
}

// Global instance
const studentPortal = new DinoStudentPortal();
window.studentPortal = studentPortal;
