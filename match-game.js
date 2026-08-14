/**
 * Dino Mandarin Adventure - Match Game Module (Han Yu 1 s/d Han Yu 15)
 * Permainan Kartu Mencocokkan Kata Hanzi & Gambar Berwarna
 */

class DinoMatchGame {
  constructor() {
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.totalPairs = 4;
    this.score = 0;
    this.moves = 0;
    this.selectedBook = 'all';
    this.isLocked = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.bindEvents();

    const params = new URLSearchParams(window.location.search);
    const mod = params.get('mod') || params.get('module');
    const book = params.get('book') || 'all';
    const pairs = parseInt(params.get('pairs')) || 4;

    this.selectedBook = book;
    this.totalPairs = pairs;

    if (mod === 'match') {
      this.startNewGame();
    }
  }

  cacheDom() {
    this.boardEl = document.getElementById('match-board');
    this.scoreEl = document.getElementById('match-score');
    this.movesEl = document.getElementById('match-moves');
    this.bookSelect = document.getElementById('match-book-select');
    this.btnRestart = document.getElementById('btn-match-restart');
    this.diffBtns = document.querySelectorAll('.diff-btn');
    this.winModal = document.getElementById('match-win-modal');
  }

  bindEvents() {
    if (this.bookSelect) {
      this.bookSelect.addEventListener('change', (e) => {
        this.selectedBook = e.target.value;
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
    if (this.selectedBook !== 'all') {
      const bId = parseInt(this.selectedBook);
      const filtered = pool.filter(item => item.book === bId);
      if (filtered.length >= this.totalPairs) pool = filtered;
    }

    // Acak pool dan ambil sebanyak totalPairs
    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
    const chosenItems = shuffledPool.slice(0, this.totalPairs);

    // Gandakan menjadi 2 kartu: Kartu Gambar & Kartu Teks Hanzi
    const deck = [];
    chosenItems.forEach(item => {
      deck.push({
        id: `${item.id}-img`,
        pairId: item.id,
        type: 'image',
        item: item
      });
      deck.push({
        id: `${item.id}-txt`,
        pairId: item.id,
        type: 'text',
        item: item
      });
    });

    // Acak posisi kartu di papan
    this.cards = deck.sort(() => Math.random() - 0.5);
    this.renderBoard();
  }

  renderBoard() {
    if (!this.boardEl) return;
    this.boardEl.className = `match-board-grid grid-pairs-${this.totalPairs}`;
    
    this.boardEl.innerHTML = this.cards.map((c, idx) => `
      <div class="dino-card" data-index="${idx}" id="card-${idx}">
        <div class="dino-card-inner">
          <div class="dino-card-front">
            <span class="card-pattern-icon">🦖</span>
          </div>
          <div class="dino-card-back">
            ${c.type === 'image' ? `
              <div class="card-svg-wrap">${c.item.svg}</div>
              <div style="font-size: 0.82rem; font-weight: 700; color: #555; margin-top: 4px;">${c.item.meaning}</div>
            ` : `
              <div class="card-text-content">
                <div class="card-hanzi">${c.item.hanzi}</div>
                <div class="card-pinyin">${c.item.pinyin}</div>
              </div>
            `}
          </div>
        </div>
      </div>
    `).join('');

    const cardEls = this.boardEl.querySelectorAll('.dino-card');
    cardEls.forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'));
        this.flipCard(idx);
      });
    });
  }

  flipCard(index) {
    if (this.isLocked) return;
    const card = this.cards[index];
    const cardEl = document.getElementById(`card-${index}`);

    if (!cardEl || cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

    // Flip card
    cardEl.classList.add('flipped');
    this.flippedCards.push({ index, card, el: cardEl });

    if (window.dinoAudio) window.dinoAudio.playPop();

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
      // COCOK!
      setTimeout(() => {
        c1.el.classList.add('matched');
        c2.el.classList.add('matched');
        this.matchedPairs++;
        this.score += 100;
        this.updateStats();

        // Audio: Tepuk tangan + lafalkan kata
        if (window.dinoAudio) {
          window.dinoAudio.playApplause();
          window.dinoAudio.speakMandarinSlow(c1.card.item.hanzi);
        }

        this.flippedCards = [];
        this.isLocked = false;

        if (this.matchedPairs >= this.totalPairs) {
          this.handleWin();
        }
      }, 500);
    } else {
      // TIDAK COCOK
      setTimeout(() => {
        c1.el.classList.remove('flipped');
        c2.el.classList.remove('flipped');

        if (window.dinoAudio) {
          window.dinoAudio.playDinoRoar();
        }

        this.flippedCards = [];
        this.isLocked = false;
      }, 1000);
    }
  }

  updateStats() {
    if (this.scoreEl) this.scoreEl.textContent = this.score;
    if (this.movesEl) this.movesEl.textContent = this.moves;
  }

  handleWin() {
    if (window.dinoAudio) {
      window.dinoAudio.playFanfare();
    }

    const modal = document.getElementById('match-win-modal');
    if (modal) {
      const finalScore = document.getElementById('win-final-score');
      const finalMoves = document.getElementById('win-final-moves');
      if (finalScore) finalScore.textContent = this.score;
      if (finalMoves) finalMoves.textContent = this.moves;

      modal.classList.add('show');
      modal.style.display = 'flex';
    }
  }
}

// Global window exposure
if (typeof window !== 'undefined') {
  window.DinoMatchGame = DinoMatchGame;
}
