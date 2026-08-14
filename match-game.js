/**
 * Dino Mandarin Adventure - Matching Game Module (Han Yu 1 s/d Han Yu 12)
 * Game Mencocokkan Kosakata dengan Ilustrasi Gambar Per-Unit
 */

class DinoMatchGame {
  constructor() {
    this.currentBookId = 1;
    this.currentUnitId = 1;
    this.pairCount = 6;
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.totalPairs = 0;
    this.moves = 0;
    this.isLocked = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.populateDropdowns();
    this.bindEvents();

    const params = new URLSearchParams(window.location.search);
    const book = parseInt(params.get('book')) || 1;
    const unit = parseInt(params.get('unit')) || 1;
    const pairs = parseInt(params.get('pairs')) || 6;

    this.currentBookId = book;
    this.currentUnitId = unit;
    this.pairCount = pairs;

    if (this.bookSelect) this.bookSelect.value = this.currentBookId;
    if (this.pairsSelect) this.pairsSelect.value = this.pairCount;

    this.startNewGame();
  }

  cacheDom() {
    this.boardEl = document.getElementById('match-board-grid');
    this.bookSelect = document.getElementById('match-book-select');
    this.unitSelect = document.getElementById('match-unit-select');
    this.pairsSelect = document.getElementById('match-pairs-count');
    this.btnRestart = document.getElementById('btn-restart-match');
    this.movesCounterEl = document.getElementById('match-moves-count');
    this.pairsLeftEl = document.getElementById('match-pairs-left');
    this.successModal = document.getElementById('match-success-modal');
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
    let html = '';
    if (unitKeys.length > 0) {
      unitKeys.forEach(u => {
        const title = unitMap[u] || `Unit ${u}`;
        html += `<option value="${u}">Pelajaran ${u} (${title})</option>`;
      });
    } else {
      for (let u = 1; u <= 12; u++) {
        html += `<option value="${u}">Pelajaran ${u}</option>`;
      }
    }
    this.unitSelect.innerHTML = html;
  }

  bindEvents() {
    if (this.bookSelect) {
      this.bookSelect.addEventListener('change', (e) => {
        this.currentBookId = parseInt(e.target.value) || 1;
        this.updateUnitDropdown();
        this.startNewGame();
      });
    }

    if (this.unitSelect) {
      this.unitSelect.addEventListener('change', (e) => {
        this.currentUnitId = parseInt(e.target.value) || 1;
        this.startNewGame();
      });
    }

    if (this.pairsSelect) {
      this.pairsSelect.addEventListener('change', (e) => {
        this.pairCount = parseInt(e.target.value) || 6;
        this.startNewGame();
      });
    }

    if (this.btnRestart) {
      this.btnRestart.addEventListener('click', () => {
        this.startNewGame();
      });
    }
  }

  startNewGame() {
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.isLocked = false;
    this.updateStats();

    // Fetch items from vocabList for current book & unit
    let pool = [];
    if (window.DINO_DATA && window.DINO_DATA.vocabList) {
      pool = window.DINO_DATA.vocabList.filter(v => v.book === this.currentBookId && v.unit === this.currentUnitId);
      if (pool.length < this.pairCount) {
        const bookPool = window.DINO_DATA.vocabList.filter(v => v.book === this.currentBookId);
        pool = [...pool, ...bookPool];
      }
      if (pool.length < this.pairCount) {
        pool = window.DINO_DATA.vocabList;
      }
    }

    // Deduplicate by hanzi
    const uniquePool = [];
    const seen = new Set();
    for (const item of pool) {
      if (!seen.has(item.hanzi)) {
        seen.add(item.hanzi);
        uniquePool.push(item);
      }
    }

    // Shuffle and pick
    const selectedItems = uniquePool.sort(() => Math.random() - 0.5).slice(0, this.pairCount);
    this.totalPairs = selectedItems.length;

    // Generate 2 cards per item: 1 Picture/Meaning card + 1 Hanzi/Pinyin card
    const cardDeck = [];
    selectedItems.forEach((item, idx) => {
      // Card 1: Picture & Meaning
      cardDeck.push({
        pairId: idx,
        type: 'picture',
        hanzi: item.hanzi,
        pinyin: item.pinyin,
        meaning: item.meaning,
        svg: item.svg || `<div style="font-size: 3rem;">🦕</div>`
      });

      // Card 2: Hanzi & Pinyin
      cardDeck.push({
        pairId: idx,
        type: 'text',
        hanzi: item.hanzi,
        pinyin: item.pinyin,
        meaning: item.meaning,
        svg: item.svg
      });
    });

    // Shuffle deck
    this.cards = cardDeck.sort(() => Math.random() - 0.5);
    this.renderBoard();
  }

  renderBoard() {
    if (!this.boardEl) return;
    this.boardEl.innerHTML = '';
    this.boardEl.className = `match-board-grid grid-pairs-${this.totalPairs}`;

    this.cards.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'dino-card';
      cardEl.setAttribute('data-index', index);

      let frontContent = '';
      let backContent = '';

      if (card.type === 'picture') {
        backContent = `
          <div class="card-svg-wrap">${card.svg}</div>
          <div class="card-meaning-label">${card.meaning}</div>
        `;
      } else {
        backContent = `
          <div class="card-hanzi-text">${card.hanzi}</div>
          <div class="card-pinyin-label">${card.pinyin}</div>
        `;
      }

      cardEl.innerHTML = `
        <div class="dino-card-inner">
          <div class="dino-card-front">
            <span class="card-pattern-icon">🦖</span>
          </div>
          <div class="dino-card-back">
            ${backContent}
          </div>
        </div>
      `;

      cardEl.addEventListener('click', () => this.handleCardClick(index, cardEl));
      this.boardEl.appendChild(cardEl);
    });

    this.updateStats();
  }

  handleCardClick(index, cardEl) {
    if (this.isLocked) return;
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

    if (window.dinoAudio) window.dinoAudio.playCardFlip();
    cardEl.classList.add('flipped');
    this.flippedCards.push({ index, cardEl, data: this.cards[index] });

    if (this.flippedCards.length === 2) {
      this.moves++;
      this.updateStats();
      this.checkMatch();
    }
  }

  checkMatch() {
    this.isLocked = true;
    const [c1, c2] = this.flippedCards;

    if (c1.data.pairId === c2.data.pairId && c1.index !== c2.index) {
      // Cocok!
      setTimeout(() => {
        c1.cardEl.classList.add('matched');
        c2.cardEl.classList.add('matched');

        if (window.dinoAudio) {
          window.dinoAudio.playMatchSuccess();
          window.dinoAudio.speakMandarinSlow(c1.data.hanzi);
        }

        this.matchedPairs++;
        this.flippedCards = [];
        this.isLocked = false;
        this.updateStats();

        if (this.matchedPairs === this.totalPairs) {
          this.handleGameComplete();
        }
      }, 500);
    } else {
      // Tidak Cocok
      setTimeout(() => {
        if (window.dinoAudio) {
          window.dinoAudio.playDinoRoar();
        }
        c1.cardEl.classList.remove('flipped');
        c2.cardEl.classList.remove('flipped');
        this.flippedCards = [];
        this.isLocked = false;
      }, 1000);
    }
  }

  updateStats() {
    if (this.movesCounterEl) this.movesCounterEl.textContent = this.moves;
    if (this.pairsLeftEl) this.pairsLeftEl.textContent = `${this.matchedPairs} / ${this.totalPairs}`;
  }

  handleGameComplete() {
    if (window.dinoAudio) {
      window.dinoAudio.playApplause();
    }
    if (this.successModal) {
      this.successModal.classList.add('active');
    }
  }
}

if (typeof window !== 'undefined') {
  window.DinoMatchGame = DinoMatchGame;
}
