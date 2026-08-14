/**
 * Dino Mandarin Adventure - Multiple Choice Quiz Module (Han Yu 1 s/d Han Yu 15)
 * Kuis Pilihan Berganda Ber-Audio Mandarin Sesuai Unit Pembelajaran
 * Dielengkapi Audio Bacaan Soal, Tepuk Tangan & Piala Emas Juara 🏆
 */

class DinoQuiz {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.correctAnswersCount = 0;
    this.currentBookId = 1;
    this.currentUnitId = 'all';
    this.userAnswers = [];
    this.isAnswered = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.populateDropdowns();
    this.bindEvents();

    const params = new URLSearchParams(window.location.search);
    const mod = params.get('mod') || params.get('module');
    const book = parseInt(params.get('book')) || 1;
    const unit = params.get('unit') || 'all';

    this.currentBookId = book;
    this.currentUnitId = unit;

    if (this.bookSelect) this.bookSelect.value = this.currentBookId;
    this.updateUnitDropdown();
    if (this.unitSelect) this.unitSelect.value = this.currentUnitId;

    if (mod === 'quiz') {
      this.startQuiz();
    }
  }

  cacheDom() {
    this.wrapperEl = document.getElementById('quiz-wrapper-card');
    this.bookSelect = document.getElementById('quiz-book-select');
    this.unitSelect = document.getElementById('quiz-unit-select');
    this.btnRestart = document.getElementById('btn-restart-quiz');
    this.resultCard = document.getElementById('quiz-result-card');
    this.questionCard = document.getElementById('quiz-question-box');
  }

  populateDropdowns() {
    if (this.bookSelect && window.DINO_DATA && window.DINO_DATA.books) {
      this.bookSelect.innerHTML = window.DINO_DATA.books.map(b => `
        <option value="${b.id}">${b.title}</option>
      `).join('');
    }
    this.updateUnitDropdown();
  }

  updateUnitDropdown() {
    if (!this.unitSelect) return;
    const unitMap = (window.DINO_DATA && window.DINO_DATA.unitTitles && window.DINO_DATA.unitTitles[this.currentBookId]) || {};
    const unitKeys = Object.keys(unitMap);

    let html = '<option value="all">Semua Pelajaran (Kuis Lengkap)</option>';
    if (unitKeys.length > 0) {
      unitKeys.forEach(u => {
        const title = unitMap[u] || `Unit ${u}`;
        html += `<option value="${u}">Pelajaran ${u} (${title})</option>`;
      });
    }
    this.unitSelect.innerHTML = html;
  }

  bindEvents() {
    if (this.bookSelect) {
      this.bookSelect.addEventListener('change', (e) => {
        this.currentBookId = parseInt(e.target.value) || 1;
        this.currentUnitId = 'all';
        this.updateUnitDropdown();
        this.startQuiz();
      });
    }

    if (this.unitSelect) {
      this.unitSelect.addEventListener('change', (e) => {
        this.currentUnitId = e.target.value;
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

    // Filter by Book
    let filtered = pool.filter(q => q.book === this.currentBookId);
    if (filtered.length === 0) filtered = pool;

    // Filter by Unit
    if (this.currentUnitId !== 'all') {
      const uId = parseInt(this.currentUnitId);
      const unitFiltered = filtered.filter(q => q.unit === uId);
      if (unitFiltered.length > 0) {
        filtered = unitFiltered;
      }
    }

    this.questions = [...filtered].sort(() => Math.random() - 0.5);
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
            Soal ${this.currentIndex + 1} dari ${this.questions.length} (Buku ${q.book} • Pelajaran ${q.unit || 1})
          </span>
          <span class="quiz-badge-type">Pilihan Berganda</span>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px;">
          <h3 class="quiz-question-text">${q.question}</h3>
          <button class="dino-btn-audio-circle" id="btn-speak-question" title="Dengarkan Soal dalam Bahasa Mandarin">
            🔊
          </button>
        </div>

        ${q.hanzi ? `
          <div style="text-align: center; margin-bottom: 16px; background: #fafafa; padding: 14px; border-radius: var(--radius-md); border: 1.5px solid #eee;">
            <div style="font-size: 2.4rem; font-weight: 900; font-family: var(--font-chinese); color: var(--dino-green-deep);">${q.hanzi}</div>
            <div style="font-size: 1.1rem; color: #d84315; font-weight: 700; font-family: var(--font-pinyin);">${q.pinyin || ''}</div>
          </div>
        ` : ''}

        <div class="quiz-options-list">
          ${q.options.map((opt, i) => `
            <button class="quiz-opt-btn" data-index="${i}">
              <span class="quiz-opt-letter">${optLetters[i]}</span>
              <span class="quiz-opt-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback-box" class="quiz-feedback" style="display: none;"></div>

        <div style="margin-top: 20px; display: flex; justify-content: flex-end;">
          <button class="dino-btn-primary" id="btn-next-question" style="display: none;">
            Soal Selanjutnya ➡️
          </button>
        </div>
      </div>
    `;

    // Speak question audio
    const btnSpeak = this.questionCard.querySelector('#btn-speak-question');
    if (btnSpeak) {
      btnSpeak.addEventListener('click', () => {
        if (window.dinoAudio) {
          window.dinoAudio.speakMandarin(q.audioText || q.hanzi || q.question);
        }
      });
      // Auto speak first time gently
      if (window.dinoAudio && window.dinoAudio.voiceEnabled) {
        setTimeout(() => {
          window.dinoAudio.speakMandarin(q.audioText || q.hanzi || q.question);
        }, 300);
      }
    }

    // Option clicks
    const optBtns = this.questionCard.querySelectorAll('.quiz-opt-btn');
    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isAnswered) return;
        const optIdx = parseInt(btn.getAttribute('data-index'));
        this.handleAnswer(optIdx, btn, optBtns);
      });
    });
  }

  handleAnswer(chosenIdx, chosenBtn, allOptBtns) {
    this.isAnswered = true;
    const q = this.questions[this.currentIndex];
    const isCorrect = q.options[chosenIdx].isCorrect;

    const feedbackBox = this.questionCard.querySelector('#quiz-feedback-box');
    const btnNext = this.questionCard.querySelector('#btn-next-question');

    allOptBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (q.options[idx].isCorrect) {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      chosenBtn.classList.add('correct');
      this.score += Math.round(100 / this.questions.length);
      this.correctAnswersCount++;
      if (window.dinoAudio) window.dinoAudio.playApplause();

      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback correct';
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <strong>👏 Jawaban Kamu Benar Sekali!</strong><br>
          ${q.explanation || ''}
        `;
      }
    } else {
      chosenBtn.classList.add('incorrect');
      if (window.dinoAudio) window.dinoAudio.playDinoRoar();

      if (feedbackBox) {
        feedbackBox.className = 'quiz-feedback incorrect';
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <strong>🦖 Oops, Jawaban Kurang Tepat!</strong><br>
          ${q.explanation || ''}
        `;
      }
    }

    if (btnNext) {
      btnNext.style.display = 'inline-flex';
      btnNext.onclick = () => {
        this.currentIndex++;
        this.renderCurrentQuestion();
      };
    }
  }

  showFinalResult() {
    if (!this.resultCard || !this.questionCard) return;

    this.questionCard.style.display = 'none';
    this.resultCard.style.display = 'block';

    const finalScore = Math.min(100, Math.round((this.correctAnswersCount / this.questions.length) * 100));
    const scoreValEl = document.getElementById('quiz-final-score');
    const scoreMsgEl = document.getElementById('quiz-final-message');
    const btnCert = document.getElementById('btn-show-certificate');

    if (scoreValEl) scoreValEl.textContent = `${finalScore} / 100`;

    if (finalScore === 100) {
      if (window.dinoAudio) {
        window.dinoAudio.playFanfare();
        setTimeout(() => { if (window.dinoAudio) window.dinoAudio.playApplause(); }, 1200);
      }
      if (scoreMsgEl) {
        scoreMsgEl.innerHTML = `
          <span style="color: #2e7d32; font-weight: 800; font-size: 1.2rem;">
            🏆 LUAR BIASA SEMPURNA! SELURUH JAWABAN BENAR 100%!
          </span><br>
          Kamu mendapatkan Piala Emas Dinosaurus Juara Mandarin!
        `;
      }
      if (btnCert) btnCert.style.display = 'inline-flex';
    } else if (finalScore >= 70) {
      if (window.dinoAudio) window.dinoAudio.playApplause();
      if (scoreMsgEl) {
        scoreMsgEl.innerHTML = `
          <span style="color: #ef6c00; font-weight: 800;">
            🌟 Hebat! Kamu Menjawab ${this.correctAnswersCount} dari ${this.questions.length} Soal dengan Benar!
          </span><br>
          Ayo ulangi lagi untuk meraih nilai 100 dan Piala Emas!
        `;
      }
      if (btnCert) btnCert.style.display = 'none';
    } else {
      if (window.dinoAudio) window.dinoAudio.playDinoRoar();
      if (scoreMsgEl) {
        scoreMsgEl.innerHTML = `
          <span style="color: #c62828; font-weight: 800;">
            🦖 Terus Berlatih! Kamu Menjawab ${this.correctAnswersCount} dari ${this.questions.length} Soal.
          </span><br>
          Dengarkan audio Mandarin lagi dan coba kembali!
        `;
      }
      if (btnCert) btnCert.style.display = 'none';
    }

    if (btnCert) {
      btnCert.onclick = () => {
        this.openCertificateModal(finalScore);
      };
    }
  }

  openCertificateModal(score) {
    const modal = document.getElementById('quiz-cert-modal');
    if (!modal) return;

    modal.classList.add('show');
    modal.style.display = 'flex';

    const certDate = document.getElementById('cert-date-text');
    if (certDate) {
      const now = new Date();
      certDate.textContent = now.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    const btnCloseCert = document.getElementById('btn-close-cert-modal');
    if (btnCloseCert) {
      btnCloseCert.onclick = () => {
        modal.classList.remove('show');
        modal.style.display = 'none';
      };
    }

    const btnPrint = document.getElementById('btn-print-certificate');
    if (btnPrint) {
      btnPrint.onclick = () => {
        window.print();
      };
    }
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.DinoQuiz = DinoQuiz;
}
