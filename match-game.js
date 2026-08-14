/**
 * Dino Mandarin Adventure - Match Game Module (Han Yu 1 s/d Han Yu 15)
 * Permainan Kartu Mencocokkan Kata Hanzi & Gambar Berwarna Per-Unit Pelajaran
 */

class DinoMatchGame {
  constructor() {
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.totalPairs = 4;
    this.score = 0;
    this.moves = 0;
    this.currentBookId = 1;
    this.currentUnitId = 'all';
    this.isLocked = false;

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
    const pairs = parseInt(params.get('pairs')) || 4;

    this.currentBookId = book;
    this.currentUnitId = unit;
    this.totalPairs = pairs;

    if (this.bookSelect) this.bookSelect.value = this.currentBookId;
    this.updateUnitDropdown();
    if (this.unitSelect) this.unitSelect.value = this.currentUnitId;

    if (mod === 'match') {
      this.startNewGame();
    }
  }

  cacheDom() {
    this.boardEl = document.getElementById('match-board');
    this.scoreEl = document.getElementById('match-score');
    this.movesEl = document.getElementById('match-moves');
    this.bookSelect = document.getElementById('match-book-select');
    this.unitSelect = document.getElementById('match-unit-select');
    this.btnRestart = document.getElementById('btn-match-restart');
    this.diffBtns = document.querySelectorAll('.diff-btn');
    this.winModal = document.getElementById('match-win-modal');
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

    let html = '<option value="all">Semua Pelajaran (Acak)</option>';
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
        this.startNewGame();
      });
    }

    if (this.unitSelect) {
      this.unitSelect.addEventListener('change', (e) => {
        this.currentUnitId = e.target.value;
        this.startNewGame();
      });
    }

    if (this.btnRestart) {
      this.btnRestart.addEventListener('click', () => {
        this.startNewGame();
      });
    }

    if (this.diffBtns) {
      this.diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.diffBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.totalPairs = parseInt(btn.getAttribute('data-pairs')) || 4;
          this.startNewGame();
        });
      });
    }
  }

  startNewGame() {
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.score = 0;
    this.isLocked = false;
    this.updateStats();

    if (!window.DINO_DATA || !window.DINO_DATA.matchVocabItems) return;

    let pool = window.DINO_DATA.matchVocabItems;
    
    // Filter by book
    let filtered = pool.filter(item => item.book === this.currentBookId);
    if (filtered.length === 0) filtered = pool;

    // Filter by unit if not 'all'
    if (this.currentUnitId !== 'all') {
      const uId = parseInt(this.currentUnitId);
      const unitFiltered = filtered.filter(item => item.unit === uId);
      if (unitFiltered.length >= 2) {
        filtered = unitFiltered;
      }
    }

    // Tentukan jumlah pasang yang dimainkan
    const availablePairs = Math.min(this.totalPairs, filtered.length);
    const chosenItems = [...filtered].sort(() => Math.random() - 0.5).slice(0, availablePairs);

    // Gandakan menjadi 2 kartu: Gambar & Teks Hanzi
    const deck = [];
    chosenItems.forEach(item => {
      deck.push({
        id: `${item.id}-img`,
        pairId: item.id,
        type: 'image',
        hanzi: item.hanzi,
        pinyin: item.pinyin,
        meaning: item.meaning,
        svg: item.svg,
        isFlipped: false,
        isMatched: false
      });
      deck.push({
        id: `${item.id}-txt`,
        pairId: item.id,
        type: 'text',
        hanzi: item.hanzi,
        pinyin: item.pinyin,
        meaning: item.meaning,
        svg: item.svg,
        isFlipped: false,
        isMatched: false
      });
    });

    this.cards = deck.sort(() => Math.random() - 0.5);
    this.actualTotalPairs = chosenItems.length;
    this.renderBoard();
  }

  renderBoard() {
    if (!this.boardEl) return;

    this.boardEl.className = `match-board-grid grid-pairs-${this.totalPairs}`;
    this.boardEl.innerHTML = this.cards.map((card, idx) => `
      <div class="match-card-item" data-index="${idx}">
        <div class="match-card-inner">
          <div class="match-card-face match-card-front">
            <div class="dino-egg-back-icon">🦖</div>
            <span style="font-size: 0.75rem; font-weight: 800; color: #558b2f;">Buka</span>
          </div>
          <div class="match-card-face match-card-back ${card.type}">
            ${card.type === 'image' ? `
              <div class="card-img-wrap">${card.svg}</div>
              <div class="card-meaning-text">${card.meaning}</div>
            ` : `
              <div class="card-hanzi-text">${card.hanzi}</div>
              <div class="card-pinyin-text">${card.pinyin}</div>
              <div class="card-meaning-text">${card.meaning}</div>
            `}
          </div>
        </div>
      </div>
    `).join('');

    const cardDoms = this.boardEl.querySelectorAll('.match-card-item');
    cardDoms.forEach(dom => {
      dom.addEventListener('click', () => {
        const idx = parseInt(dom.getAttribute('data-index'));
        this.flipCard(idx, dom);
      });
    });
  }

  flipCard(idx, domEl) {
    if (this.isLocked) return;
    const card = this.cards[idx];
    if (card.isFlipped || card.isMatched) return;

    card.isFlipped = true;
    domEl.classList.add('flipped');
    this.flippedCards.push({ card, domEl });

    if (window.dinoAudio) {
      window.dinoAudio.playEggCrack();
      if (card.type === 'text' || card.type === 'image') {
        window.dinoAudio.speakMandarin(card.hanzi);
      }
    }

    if (this.flippedCards.length === 2) {
      this.moves++;
      this.updateStats();
      this.checkMatch();
    }
  }

  checkMatch() {
    this.isLocked = true;
    const [c1, c2] = this.flippedCards;

    if (c1.card.pairId === c2.card.pairId) {
      // Cocok!
      setTimeout(() => {
        c1.card.isMatched = true;
        c2.card.isMatched = true;
        c1.domEl.classList.add('matched');
        c2.domEl.classList.add('matched');

        this.matchedPairs++;
        this.score += 25;
        this.updateStats();

        if (window.dinoAudio) window.dinoAudio.playApplause();

        this.flippedCards = [];
        this.isLocked = false;

        if (this.matchedPairs >= this.actualTotalPairs) {
          setTimeout(() => {
            this.handleGameWon();
          }, 600);
        }
      }, 500);
    } else {
      // Tidak Cocok
      setTimeout(() => {
        if (window.dinoAudio) window.dinoAudio.playDinoRoar();

        c1.domEl.classList.add('shake-wrong');
        c2.domEl.classList.add('shake-wrong');

        setTimeout(() => {
          c1.card.isFlipped = false;
          c2.card.isFlipped = false;
          c1.domEl.classList.remove('flipped', 'shake-wrong');
          c2.domEl.classList.remove('flipped', 'shake-wrong');

          this.flippedCards = [];
          this.isLocked = false;
        }, 600);
      }, 700);
    }
  }

  updateStats() {
    if (this.scoreEl) this.scoreEl.textContent = this.score;
    if (this.movesEl) this.movesEl.textContent = this.moves;
  }

  handleGameWon() {
    if (window.dinoAudio) window.dinoAudio.playFanfare();

    if (this.winModal) {
      this.winModal.classList.add('show');
      this.winModal.style.display = 'flex';
      const scoreEl = document.getElementById('win-score-display');
      const movesEl = document.getElementById('win-moves-display');
      if (scoreEl) scoreEl.textContent = this.score;
      if (movesEl) movesEl.textContent = this.moves;

      const btnPlayAgain = document.getElementById('btn-play-again-match');
      if (btnPlayAgain) {
        btnPlayAgain.onclick = () => {
          this.winModal.classList.remove('show');
          this.winModal.style.display = 'none';
          this.startNewGame();
        };
      }
    } else {
      alert(`🎉 Selamat! Kamu berhasil mencocokkan semua kartu!\nSkor: ${this.score} • Langkah: ${this.moves}`);
    }
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.DinoMatchGame = DinoMatchGame;
}
