/**
 * Dino Mandarin Adventure - Multiple Choice Quiz Module (Han Yu 1 s/d Han Yu 12)
 * Kuis Pilihan Berganda Ber-Audio Mandarin Sesuai Unit Pembelajaran
 * Fitur:
 * - 5 Tipe Soal: Mengartikan, Pinyin, Hitungan Goresan, Susun Kalimat, Cari Gambar
 * - Tombol Bantuan Audio Bacaan Soal (🔊) di setiap soal
 * - Batas Kriteria Ketuntasan Minimal (KKM 70)
 * - Nilai >= 70 / 100%: Hadiah Piala Emas Juara 🏆 + Suara Tepuk Tangan Meriah
 * - Nilai < 70%: Suara Raungan Dinosaurus yang meraung + Rekomendasi Belajar
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
    this.kkm = 70;

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

    this.startQuiz();
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
    if (filtered.length === 0) {
      filtered = pool; // Fallback jika buku baru
    }

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
    const typeNames = {
      'meaning-match': 'Mengartikan Kata / Kalimat',
      'pinyin-match': 'Pilihan Bacaan Pinyin',
      'stroke-count': 'Hitungan Goresan Hanzi',
      'word-order': 'Menyusun Kalimat',
      'picture-match': 'Pilihan Gambar Ilustrasi'
    };

    const typeBadge = typeNames[q.type] || 'Pilihan Berganda';

    // Highlight character / visual header
    let visualHeader = '';
    if (q.hanzi) {
      visualHeader = `
        <div class="quiz-char-spotlight">
          <div class="spotlight-hanzi">${q.hanzi}</div>
          ${q.pinyin ? `<div class="spotlight-pinyin">${q.pinyin}</div>` : ''}
        </div>
      `;
    }

    // Options HTML (Check if picture-match or standard text)
    const isPictureType = q.type === 'picture-match';
    const optionsHtml = q.options.map((opt, idx) => {
      const iconHtml = opt.icon ? `<span class="opt-icon-preview">${opt.icon}</span>` : '';
      return `
        <button class="quiz-opt-btn ${isPictureType ? 'opt-btn-picture' : ''}" data-index="${idx}">
          <span class="opt-letter-badge">${optLetters[idx]}</span>
          <div class="opt-text-wrap">
            ${iconHtml}
            <span class="opt-label-text">${opt.text}</span>
          </div>
        </button>
      `;
    }).join('');

    this.questionCard.innerHTML = `
      <div class="quiz-question-card">
        <div class="quiz-card-top-bar">
          <span class="quiz-progress-text">
            Soal ${this.currentIndex + 1} dari ${this.questions.length} (Buku ${q.book} • Pelajaran ${q.unit || 1})
          </span>
          <span class="quiz-badge-type">${typeBadge}</span>
        </div>

        <div class="quiz-question-body">
          <div class="question-header-row">
            <h3 class="quiz-question-title">${q.question}</h3>
            <button class="dino-btn-audio-circle btn-speak-question" title="Dengarkan Suara Bacaan Soal (Mandarin Lambat)">
              🔊
            </button>
          </div>

          ${visualHeader}

          <div class="quiz-options-grid ${isPictureType ? 'grid-picture-options' : ''}">
            ${optionsHtml}
          </div>

          <div class="quiz-explanation-box" id="quiz-explanation-box" style="display: none;"></div>

          <div class="quiz-card-footer" style="display: none;" id="quiz-next-footer">
            <button class="dino-btn-action btn-animate" id="btn-next-question">
              Soal Berikutnya ➔
            </button>
          </div>
        </div>
      </div>
    `;

    // Bind Audio Button for Question
    const btnSpeak = this.questionCard.querySelector('.btn-speak-question');
    if (btnSpeak) {
      btnSpeak.addEventListener('click', () => {
        const textToSpeak = q.audioText || q.hanzi || q.question;
        if (window.dinoAudio) window.dinoAudio.speakMandarinSlow(textToSpeak);
      });
    }

    // Bind Options Clicks
    const optButtons = this.questionCard.querySelectorAll('.quiz-opt-btn');
    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        this.handleSelectAnswer(idx, optButtons);
      });
    });

    // Otomatis bunyikan audio pertanyaan jika baru pertama kali terbuka
    if (q.audioText && window.dinoAudio && window.dinoAudio.voiceEnabled) {
      setTimeout(() => {
        window.dinoAudio.speakMandarinSlow(q.audioText);
      }, 300);
    }
  }

  handleSelectAnswer(selectedIndex, allButtons) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const q = this.questions[this.currentIndex];
    const selectedOpt = q.options[selectedIndex];
    const isCorrect = !!selectedOpt.isCorrect;

    this.userAnswers.push({
      question: q,
      selectedIndex,
      isCorrect
    });

    // Disable all buttons
    allButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (q.options[idx].isCorrect) {
        btn.classList.add('opt-correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('opt-wrong');
      }
    });

    // Feedback Suara Spesifik
    if (isCorrect) {
      this.correctAnswersCount++;
      if (window.dinoAudio) {
        window.dinoAudio.playClapSingle(); // Suara Tepuk Tangan Benar
      }
    } else {
      if (window.dinoAudio) {
        window.dinoAudio.playDinoRoar(); // Suara Raungan Dinosaurus saat Salah
      }
    }

    // Render Explanation
    const explBox = document.getElementById('quiz-explanation-box');
    if (explBox) {
      explBox.style.display = 'block';
      explBox.className = `quiz-explanation-box ${isCorrect ? 'expl-correct' : 'expl-wrong'}`;
      explBox.innerHTML = `
        <div class="expl-header">
          <span>${isCorrect ? '✅ Jawaban Benar!' : '❌ Jawaban Kurang Tepat'}</span>
        </div>
        <div class="expl-body">${q.explanation || ''}</div>
      `;
    }

    // Show Next Button
    const nextFooter = document.getElementById('quiz-next-footer');
    if (nextFooter) {
      nextFooter.style.display = 'flex';
      const btnNext = document.getElementById('btn-next-question');
      if (btnNext) {
        btnNext.focus();
        btnNext.onclick = () => {
          this.currentIndex++;
          this.renderCurrentQuestion();
        };
      }
    }
  }

  showFinalResult() {
    if (this.questionCard) this.questionCard.style.display = 'none';
    if (!this.resultCard) return;

    this.resultCard.style.display = 'block';

    const total = this.questions.length;
    const finalScore = total > 0 ? Math.round((this.correctAnswersCount / total) * 100) : 0;
    const isPassed = finalScore >= this.kkm;
    const isPerfect = finalScore === 100;

    // Feedback Audio Akhir Berdasarkan KKM 70
    if (isPassed) {
      // Tepuk tangan meriah & fanfare piala
      if (window.dinoAudio) window.dinoAudio.playApplause();
    } else {
      // Suara Dino Meraung Gagal KKM
      if (window.dinoAudio) window.dinoAudio.playDinoRoar();
    }

    let mascotReaction = '';
    let trophyBanner = '';

    if (isPassed) {
      trophyBanner = `
        <div class="trophy-celebration-box">
          <div class="trophy-icon-gold">🏆</div>
          <h2 class="trophy-title">${isPerfect ? 'SEMPURNA 100! PIALA EMAS DINOSAURUS' : 'SELAMAT! ANDA LULUS KKM (70)'}</h2>
          <p class="trophy-subtitle">Hebat sekali! Kamu berhasil menguasai materi Bahasa Mandarin dengan gemilang!</p>
        </div>
      `;
      mascotReaction = '🦖 Rexy Bangga: "Luar biasa! Kamu adalah Juara Penjelajah Dinosaurus!"';
    } else {
      trophyBanner = `
        <div class="retry-warning-box">
          <div class="dino-roar-icon">🦖</div>
          <h2 class="retry-title">BELUM MENCAPAI KKM 70</h2>
          <p class="retry-subtitle">Nilaimu adalah ${finalScore}. Batas nilai minimal KKM adalah 70. Jangan berkecil hati, ayo dengarkan cerita dan coba lagi!</p>
        </div>
      `;
      mascotReaction = '🦖 Rexy Penyemangat: "Roaaarrr! Jangan menyerah, ayo kita latihan sekali lagi!"';
    }

    this.resultCard.innerHTML = `
      ${trophyBanner}

      <div class="result-score-overview-grid">
        <div class="score-stat-card">
          <span class="score-card-label">Nilai Akhir</span>
          <span class="score-card-value ${isPassed ? 'score-pass' : 'score-fail'}">${finalScore}</span>
        </div>
        <div class="score-stat-card">
          <span class="score-card-label">Standar KKM</span>
          <span class="score-card-value">70</span>
        </div>
        <div class="score-stat-card">
          <span class="score-card-label">Jawaban Benar</span>
          <span class="score-card-value">${this.correctAnswersCount} / ${total}</span>
        </div>
        <div class="score-stat-card">
          <span class="score-card-label">Status</span>
          <span class="score-card-value ${isPassed ? 'score-pass' : 'score-fail'}">${isPassed ? 'LULUS 🌟' : 'MENGULANG 🔄'}</span>
        </div>
      </div>

      <div class="result-mascot-speech">
        ${mascotReaction}
      </div>

      <div class="result-actions-row">
        <button class="dino-btn-action btn-animate" id="btn-retake-quiz">
          🔄 Ulangi Kuis
        </button>
        <button class="dino-btn-outline" id="btn-back-to-story">
          📖 Baca Cerita Unit Ini
        </button>
      </div>

      <!-- Pembahasan Lengkap Review -->
      <div class="result-review-section">
        <h3 class="review-section-title">📋 Pembahasan & Evaluasi Soal</h3>
        <div class="review-questions-list">
          ${this.userAnswers.map((ans, idx) => `
            <div class="review-item-card ${ans.isCorrect ? 'item-correct' : 'item-wrong'}">
              <div class="review-item-header">
                <span class="review-num">${idx + 1}. ${ans.isCorrect ? '✅ Benar' : '❌ Salah'}</span>
                <button class="dino-btn-audio-circle btn-audio-review" data-text="${ans.question.audioText || ans.question.hanzi || ans.question.question}">
                  🔊
                </button>
              </div>
              <p class="review-question-text">${ans.question.question}</p>
              ${ans.question.hanzi ? `<div class="review-hanzi-badge">${ans.question.hanzi} (${ans.question.pinyin || ''})</div>` : ''}
              <div class="review-expl-text">${ans.question.explanation}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Bind Retake button
    const btnRetake = document.getElementById('btn-retake-quiz');
    if (btnRetake) {
      btnRetake.addEventListener('click', () => {
        this.startQuiz();
      });
    }

    // Bind Back to story
    const btnStory = document.getElementById('btn-back-to-story');
    if (btnStory) {
      btnStory.addEventListener('click', () => {
        const tabStory = document.getElementById('tab-btn-story');
        if (tabStory) tabStory.click();
      });
    }

    // Bind Audio buttons in review
    const reviewAudios = this.resultCard.querySelectorAll('.btn-audio-review');
    reviewAudios.forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-text');
        if (text && window.dinoAudio) window.dinoAudio.speakMandarinSlow(text);
      });
    });
  }
}

if (typeof window !== 'undefined') {
  window.DinoQuiz = DinoQuiz;
}
