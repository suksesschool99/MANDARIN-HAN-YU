/**
 * Dino Mandarin Adventure - Story Reader Module (Han Yu 1 s/d Han Yu 15)
 * Membaca Teks Pelajaran & Cerita Per-Unit dengan Pengaturan Kecepatan Lamban & Intonasi Akurat
 */

class DinoStoryReader {
  constructor() {
    this.currentBookId = 1;
    this.currentUnitId = 1;
    this.currentSpeed = 0.62;
    this.currentStory = null;
    this.isPlayingAll = false;
    this.activeSentenceIndex = -1;

    this.init();
  }

  init() {
    this.cacheDom();
    this.populateBookDropdown();
    this.bindEvents();

    const params = new URLSearchParams(window.location.search);
    const mod = params.get('mod') || params.get('module');
    const book = parseInt(params.get('book')) || 1;
    const unit = parseInt(params.get('unit')) || 1;

    this.loadBookUnitStory(book, unit);
  }

  cacheDom() {
    this.bookSelect = document.getElementById('story-book-select');
    this.unitSelect = document.getElementById('story-unit-select');
    this.speedSelect = document.getElementById('story-speed-select');
    this.storyTitleEl = document.getElementById('story-title-hanzi');
    this.storyPinyinEl = document.getElementById('story-title-pinyin');
    this.storyMeaningEl = document.getElementById('story-title-meaning');
    this.storyMascotEl = document.getElementById('story-mascot-badge');
    this.storySummaryEl = document.getElementById('story-summary-text');
    this.sentencesContainer = document.getElementById('story-sentences-list');
    this.btnPlayAllStory = document.getElementById('btn-play-all-story');
    this.btnStopStory = document.getElementById('btn-stop-story');
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
        this.loadBookUnitStory(parseInt(e.target.value) || 1, 1);
      });
    }

    if (this.unitSelect) {
      this.unitSelect.addEventListener('change', (e) => {
        this.loadBookUnitStory(this.currentBookId, parseInt(e.target.value) || 1);
      });
    }

    if (this.speedSelect) {
      this.speedSelect.addEventListener('change', (e) => {
        this.currentSpeed = parseFloat(e.target.value) || 0.62;
        if (window.dinoAudio) {
          window.dinoAudio.voiceRate = this.currentSpeed;
        }
      });
    }

    if (this.btnPlayAllStory) {
      this.btnPlayAllStory.addEventListener('click', () => {
        this.playFullStory();
      });
    }

    if (this.btnStopStory) {
      this.btnStopStory.addEventListener('click', () => {
        this.stopStory();
      });
    }
  }

  loadBookUnitStory(bookId, unitId) {
    this.stopStory();
    this.currentBookId = parseInt(bookId) || 1;
    this.currentUnitId = parseInt(unitId) || 1;

    if (this.bookSelect) this.bookSelect.value = this.currentBookId;

    // Update dropdown unit
    if (this.unitSelect) {
      const unitMap = (window.DINO_DATA && window.DINO_DATA.unitTitles && window.DINO_DATA.unitTitles[this.currentBookId]) || {};
      let html = '';
      for (let u = 1; u <= 10; u++) {
        const title = unitMap[u] || `Unit ${u}`;
        html += `<option value="${u}" ${u === this.currentUnitId ? 'selected' : ''}>Unit ${u} (${title})</option>`;
      }
      this.unitSelect.innerHTML = html;
      this.unitSelect.value = this.currentUnitId;
    }

    if (!window.DINO_DATA || !window.DINO_DATA.getUnitStory) return;

    const story = window.DINO_DATA.getUnitStory(this.currentBookId, this.currentUnitId);
    this.currentStory = story;

    if (this.storyTitleEl) this.storyTitleEl.textContent = story.title;
    if (this.storyPinyinEl) this.storyPinyinEl.textContent = story.pinyin;
    if (this.storyMeaningEl) this.storyMeaningEl.textContent = story.meaning;
    if (this.storyMascotEl) this.storyMascotEl.textContent = story.dinoMascot || '🦖 Rexy Dino';
    if (this.storySummaryEl) this.storySummaryEl.textContent = story.summary || '';

    this.renderSentences();
  }

  renderSentences() {
    if (!this.sentencesContainer || !this.currentStory) return;

    this.sentencesContainer.innerHTML = this.currentStory.sentences.map((s, idx) => `
      <div class="story-sentence-card" id="story-sentence-${idx}">
        <div class="sentence-number-badge">${idx + 1}</div>
        <div class="sentence-content">
          <div class="sentence-hanzi">${s.hanzi}</div>
          <div class="sentence-pinyin">${s.pinyin}</div>
          <div class="sentence-meaning">${s.meaning}</div>
        </div>
        <button class="dino-btn-audio-circle btn-listen-sentence" data-index="${idx}" title="Dengarkan Kalimat Ini (Tempo Lambat)">
          🔊
        </button>
      </div>
    `).join('');

    const listenBtns = this.sentencesContainer.querySelectorAll('.btn-listen-sentence');
    listenBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        this.playSentence(idx);
      });
    });
  }

  playSentence(index) {
    if (!this.currentStory || !this.currentStory.sentences[index]) return;
    const s = this.currentStory.sentences[index];

    this.highlightSentence(index);

    if (window.dinoAudio) {
      window.dinoAudio.speakMandarin(s.hanzi, () => {
        if (!this.isPlayingAll) {
          this.unhighlightAll();
        }
      }, this.currentSpeed);
    }
  }

  playFullStory() {
    if (!this.currentStory || this.currentStory.sentences.length === 0) return;
    this.isPlayingAll = true;
    this.activeSentenceIndex = 0;

    if (this.btnPlayAllStory) this.btnPlayAllStory.style.display = 'none';
    if (this.btnStopStory) this.btnStopStory.style.display = 'inline-flex';

    this.playNextSentenceInSequence();
  }

  playNextSentenceInSequence() {
    if (!this.isPlayingAll || !this.currentStory) return;

    if (this.activeSentenceIndex >= this.currentStory.sentences.length) {
      this.stopStory();
      if (window.dinoAudio) {
        window.dinoAudio.playApplause();
      }
      return;
    }

    const idx = this.activeSentenceIndex;
    const s = this.currentStory.sentences[idx];
    this.highlightSentence(idx);

    if (window.dinoAudio) {
      window.dinoAudio.speakMandarin(s.hanzi, () => {
        if (this.isPlayingAll) {
          this.activeSentenceIndex++;
          setTimeout(() => {
            this.playNextSentenceInSequence();
          }, 800);
        }
      }, this.currentSpeed);
    }
  }

  stopStory() {
    this.isPlayingAll = false;
    this.activeSentenceIndex = -1;
    this.unhighlightAll();

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    if (this.btnPlayAllStory) this.btnPlayAllStory.style.display = 'inline-flex';
    if (this.btnStopStory) this.btnStopStory.style.display = 'none';
  }

  highlightSentence(index) {
    this.unhighlightAll();
    const card = document.getElementById(`story-sentence-${index}`);
    if (card) {
      card.classList.add('playing-active');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  unhighlightAll() {
    if (!this.sentencesContainer) return;
    const cards = this.sentencesContainer.querySelectorAll('.story-sentence-card');
    cards.forEach(c => c.classList.remove('playing-active'));
  }
}

// Global window exposure
if (typeof window !== 'undefined') {
  window.DinoStoryReader = DinoStoryReader;
}
