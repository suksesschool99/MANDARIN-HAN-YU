/**
 * Dino Mandarin Adventure - Multiple Choice Quiz Module (Han Yu 1 s/d Han Yu 15)
 * Kuis Pilihan Berganda Ber-Audio Mandarin + Piala Emas & Tepuk Tangan Meriah
 */

class DinoQuiz {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.correctAnswersCount = 0;
    this.filterType = 'all';
    this.userAnswers = [];
    this.isAnswered = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.bindEvents();

    const params = new URLSearchParams(window.location.search);
    const mod = params.get('mod') || params.get('module');
    const book = params.get('book') || 'all';

    if (book !== 'all') {
      this.filterType = `book-${book}`;
    }

    if (mod === 'quiz') {
      this.startQuiz();
    }
  }

  cacheDom() {
    this.wrapperEl = document.getElementById('quiz-wrapper-card');
    this.filterSelect = document.getElementById('quiz-filter-select');
    this.btnRestart = document.getElementById('btn-restart-quiz');
    this.resultCard = document.getElementById('quiz-result-card');
    this.questionCard = document.getElementById('quiz-question-box');
  }

  bindEvents() {
    if (this.filterSelect) {
      this.filterSelect.addEventListener('change', (e) => {
        this.filterType = e.target.value;
        this.startQuiz();
      });
    }

    if (this.btnRestart) {
      this.btnRestart.addEventListener('click', () => {
        this.startQuiz();
      });
    }
  }

  startQuiz() {
    this.currentIndex = 0;
    this.score = 0;
    this.correctAnswersCount = 0;
    this.userAnswers = [];
    this.isAnswered = false;

    if (this.resultCard) this.resultCard.style.display = 'none';
    if (this.questionCard) this.questionCard.style.display = 'block';

    if (!window.DINO_DATA || !window.DINO_DATA.strokeCountQuestions) return;

    let pool = window.DINO_DATA.strokeCountQuestions;

    if (this.filterType.startsWith('book-')) {
      const bId = parseInt(this.filterType.replace('book-', ''));
      const filtered = pool.filter(q => q.book === bId);
      if (filtered.length > 0) pool = filtered;
    }

    this.questions = [...pool].sort(() => Math.random() - 0.5);
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    if (!this.questionCard || this.questions.length === 0) return;

    if (this.currentIndex >= this.questions.length) {
      this.showFinalResult();
      return;
    }

    const q = this.questions[this.currentIndex];
    this.isAnswered = false;

    const optLetters = ['A', 'B', 'C', 'D'];

    this.questionCard.innerHTML = `
      <div class="quiz-question-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-weight: 800; color: var(--dino-green-deep); font-size: 0.95rem;">
            Soal ${this.currentIndex + 1} dari ${this.questions.length}
          </span>
          <span style="font-weight: 700; color: var(--dino-amber-deep); background: var(--dino-amber-soft); padding: 4px 12px; border-radius: var(--radius-pill);">
            Buku Han Yu ${q.book || 1}
          </span>
        </div>

        <div class="quiz-audio-prompt-row">
          <button class="dino-btn-audio-pill" id="btn-play-quiz-audio" title="Dengarkan Soal Hanzi">
            🔊 Dengarkan Soal Hanzi
          </button>
        </div>

        <div class="quiz-question-text">${q.question}</div>

        ${q.hanzi ? `
          <div class="quiz-char-large-display">${q.hanzi}</div>
          <div style="text-align: center; font-size: 1.1rem; color: var(--dino-blue); font-weight: 700; margin-bottom: 14px;">
            ${q.pinyin || ''}
          </div>
        ` : ''}

        <div class="quiz-options-grid">
          ${q.options.map((opt, i) => `
            <button class="quiz-option-btn" data-index="${i}">
              <span class="opt-badge">${optLetters[i]}</span>
              <span class="opt-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Bind Audio Button
    const btnAudio = this.questionCard.querySelector('#btn-play-quiz-audio');
    if (btnAudio) {
      btnAudio.addEventListener('click', () => {
        const textToRead = q.audioText || q.hanzi || q.question;
        if (window.dinoAudio) window.dinoAudio.speakMandarinSlow(textToRead);
      });
    }

    // Bind Option Clicks
    const optBtns = this.questionCard.querySelectorAll('.quiz-option-btn');
    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isAnswered) return;
        const idx = parseInt(btn.getAttribute('data-index'));
        this.handleSelectOption(idx, optBtns);
      });
    });
  }

  handleSelectOption(selectedIndex, optBtns) {
    this.isAnswered = true;
    const q = this.questions[this.currentIndex];
    const selectedOpt = q.options[selectedIndex];
    const isCorrect = selectedOpt.isCorrect;

    optBtns.forEach((btn, i) => {
      if (q.options[i].isCorrect) {
        btn.classList.add('correct');
      } else if (i === selectedIndex) {
        btn.classList.add('incorrect');
      }
    });

    if (isCorrect) {
      this.score += Math.round(100 / this.questions.length);
      this.correctAnswersCount++;
      if (window.dinoAudio) {
        window.dinoAudio.playApplause();
      }
    } else {
      if (window.dinoAudio) {
        window.dinoAudio.playDinoRoar();
      }
    }

    // Lanjut ke soal berikutnya setelah jeda 1.2 detik
    setTimeout(() => {
      this.currentIndex++;
      this.renderCurrentQuestion();
    }, 1300);
  }

  showFinalResult() {
    if (this.questionCard) this.questionCard.style.display = 'none';
    if (!this.resultCard) return;

    this.resultCard.style.display = 'block';

    const isPerfect = this.correctAnswersCount === this.questions.length;
    const finalScoreValue = isPerfect ? 100 : Math.min(100, Math.round((this.correctAnswersCount / this.questions.length) * 100));

    // Perayaan Khusus jika 100% Benar: Fanfare + Tepuk Tangan Meriah + Piala Emas
    if (isPerfect) {
      if (window.dinoAudio) {
        window.dinoAudio.playFanfare();
      }
    } else if (finalScoreValue >= 70) {
      if (window.dinoAudio) {
        window.dinoAudio.playApplause();
      }
    }

    const scoreHighlight = document.getElementById('quiz-final-score');
    if (scoreHighlight) {
      scoreHighlight.textContent = `${finalScoreValue} / 100`;
    }

    const detailText = document.getElementById('quiz-final-detail');
    if (detailText) {
      if (isPerfect) {
        detailText.innerHTML = `🏆 <strong>Sempurna!</strong> Kamu berhasil menjawab SEMUA ${this.questions.length} soal dengan benar! Kamu berhak mendapatkan Piala Dinosaurus Emas!`;
      } else {
        detailText.textContent = `Bagus! Kamu berhasil menjawab ${this.correctAnswersCount} dari ${this.questions.length} soal dengan benar. Teruslah berlatih!`;
      }
    }
  }
}

// Global window exposure
if (typeof window !== 'undefined') {
  window.DinoQuiz = DinoQuiz;
}
