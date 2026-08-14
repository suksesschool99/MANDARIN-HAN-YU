/**
 * Dino Mandarin Adventure - Stroke Writer Module
 * Modul Latihan Menulis Guratan Hanzi Per-Unit Han Yu 1 - 12
 * Repetisi 3-5 Kali dengan Visual Telur Dino Menetas, Pinyin, & Arti Bahasa Indonesia
 */

class DinoStrokeWriter {
  constructor() {
    this.writer = null;
    this.currentChar = '一';
    this.currentData = null;
    this.currentBookId = 1;
    this.currentUnitId = 1;
    this.unitVocabList = [];
    this.currentCharIndex = 0;

    // Mode & Repetition Tracker
    this.strokeMode = 'quiz'; // 'quiz' or 'animate'
    this.gridType = 'mizige';
    this.animationSpeed = 1.0;
    this.showOutline = true;

    // Target Repetition (3 to 5 times)
    this.targetReps = 3; // default 3x (options: 3, 4, 5)
    this.currentRepCount = 0;
    this.isCharCompleted = false;

    this.init();
  }

  init() {
    this.cacheDom();
    this.populateBookAndUnitSelects();
    this.bindEvents();

    // Baca parameter URL tugas secara langsung & instan saat halaman dibuka
    const params = new URLSearchParams(window.location.search);
    const mod = params.get('mod') || params.get('module');
    const book = parseInt(params.get('book')) || 1;
    const unit = parseInt(params.get('unit')) || 1;
    const reps = parseInt(params.get('reps')) || 3;

    if (mod === 'stroke' || params.has('book') || params.has('unit')) {
      this.targetReps = reps;
      if (this.repsSelector) this.repsSelector.value = reps;
      this.loadBookUnit(book, unit);
    } else {
      this.loadBookUnit(1, 1);
    }
  }

  cacheDom() {
    this.targetContainer = document.getElementById('stroke-target');
    this.charPinyinEl = document.getElementById('char-pinyin');
    this.charMeaningEl = document.getElementById('char-meaning');
    this.charStrokesEl = document.getElementById('char-strokes-count');
    this.charBookUnitBadge = document.getElementById('char-book-unit-badge');
    this.charTipEl = document.getElementById('char-dino-tip');
    
    // Selectors
    this.bookSelector = document.getElementById('stroke-book-select');
    this.unitSelector = document.getElementById('stroke-unit-select');
    this.repsSelector = document.getElementById('stroke-reps-target');
    this.repsTrackerContainer = document.getElementById('reps-egg-tracker');
    this.repsCountText = document.getElementById('reps-count-text');

    // Controls
    this.btnPrevChar = document.getElementById('btn-prev-char');
    this.btnNextChar = document.getElementById('btn-next-char');
    this.customCharInput = document.getElementById('custom-char-input');
    this.btnSearchChar = document.getElementById('btn-search-char');
    this.btnAnimate = document.getElementById('btn-animate-stroke');
    this.btnQuiz = document.getElementById('btn-practice-stroke');
    this.btnHint = document.getElementById('btn-stroke-hint');
    this.btnReset = document.getElementById('btn-stroke-reset');
    this.btnAudioChar = document.getElementById('btn-char-audio');
    this.chipsContainer = document.getElementById('stroke-char-chips');
    this.strokeStatusBadge = document.getElementById('stroke-status-badge');
    this.speedSelector = document.getElementById('stroke-speed-select');
    this.gridSelector = document.getElementById('stroke-grid-select');

    // Completion modal/alert
    this.repSuccessBox = document.getElementById('rep-success-banner');
  }

  populateBookAndUnitSelects() {
    if (!this.bookSelector) return;
    
    // Populate Books (Han Yu 1 - 12)
    if (window.DINO_DATA && window.DINO_DATA.books && window.DINO_DATA.books.length > 0) {
      this.bookSelector.innerHTML = window.DINO_DATA.books.map(b => `
        <option value="${b.id}">${b.title}</option>
      `).join('');
    }

    this.updateUnitSelect(1);
  }

  updateUnitSelect(bookId) {
    if (!this.unitSelector) return;
    if (!window.DINO_DATA || !window.DINO_DATA.vocabList) {
      this.unitSelector.innerHTML = `<option value="1">Unit 1</option>`;
      return;
    }

    const bId = parseInt(bookId) || 1;
    const vocabInBook = window.DINO_DATA.vocabList.filter(v => v.book === bId);
    let units = [...new Set(vocabInBook.map(v => v.unit))].sort((a, b) => a - b);

    if (units.length === 0) {
      units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    const unitTitlesMap = (window.DINO_DATA.unitTitles && window.DINO_DATA.unitTitles[bId]) || {};

    this.unitSelector.innerHTML = units.map(u => {
      const theme = unitTitlesMap[u] || `Pelajaran ${u}`;
      const count = vocabInBook.filter(v => v.unit === u).length;
      const countText = count > 0 ? ` (${count} Kata)` : '';
      return `<option value="${u}">Unit ${u} (${theme}${countText})</option>`;
    }).join('');
  }

  loadBookUnit(bookId, unitId) {
    this.currentBookId = parseInt(bookId) || 1;
    this.currentUnitId = parseInt(unitId) || 1;

    if (!window.DINO_DATA || !window.DINO_DATA.vocabList) return;

    // Pastikan pilihan dropdown buku & unit sinkron 100%
    this.updateUnitSelect(this.currentBookId);
    if (this.bookSelector) {
      this.bookSelector.value = this.currentBookId;
    }
    if (this.unitSelector) {
      this.unitSelector.value = this.currentUnitId;
    }

    // Ambil daftar kosakata untuk buku & unit ini
    let list = window.DINO_DATA.vocabList.filter(v => v.book === this.currentBookId && v.unit === this.currentUnitId);
    if (list.length === 0) {
      // Fallback jika unit kosong, ambil semua kosakata dari buku tersebut
      list = window.DINO_DATA.vocabList.filter(v => v.book === this.currentBookId);
    }
    if (list.length === 0) {
      list = [window.DINO_DATA.vocabList[0]];
    }

    this.unitVocabList = list;
    this.currentCharIndex = 0;
    this.renderCategoryChips();
    this.selectCharacterByIndex(0);
  }

  renderCategoryChips() {
    if (!this.chipsContainer) return;
    
    this.chipsContainer.innerHTML = this.unitVocabList.map((item, index) => {
      const activeClass = index === this.currentCharIndex ? 'active' : '';
      return `
        <button class="dino-chip ${activeClass}" data-index="${index}" data-char="${item.char}" title="${item.pinyin} - ${item.meaning}">
          <span class="chip-hanzi">${item.char}</span>
          <span class="chip-pinyin">${item.pinyin}</span>
          <span class="chip-meaning-sub">${item.meaning}</span>
        </button>
      `;
    }).join('');
  }

  selectCharacterByIndex(index) {
    if (index < 0 || index >= this.unitVocabList.length) return;
    this.currentCharIndex = index;
    const item = this.unitVocabList[index];
    
    // Reset counter repetisi setiap berganti karakter
    this.currentRepCount = 0;
    this.isCharCompleted = false;
    this.updateRepetitionUI();

    if (this.repSuccessBox) this.repSuccessBox.style.display = 'none';

    // Update active chip
    if (this.chipsContainer) {
      this.chipsContainer.querySelectorAll('.dino-chip').forEach((c, idx) => {
        c.classList.toggle('active', idx === index);
      });
    }

    this.loadCharacterData(item);
  }

  loadCharacterData(item) {
    if (!item) return;
    this.currentChar = item.char;
    this.currentData = item;

    // Tampilkan data lengkap di samping kanvas
    if (this.charPinyinEl) this.charPinyinEl.textContent = item.pinyin;
    if (this.charMeaningEl) this.charMeaningEl.textContent = item.meaning;
    if (this.charStrokesEl) this.charStrokesEl.textContent = `${item.strokes} Guratan`;
    if (this.charBookUnitBadge) {
      this.charBookUnitBadge.textContent = `Han Yu ${item.book} • Unit ${item.unit}`;
    }
    if (this.charTipEl) {
      this.charTipEl.textContent = `🦖 Tips Brachy: ${item.tip || 'Latihlah guratan ini dengan teliti!'}`;
    }

    this.reloadWriter();
    this.renderStrokeSteps(item);
    if (window.dinoAudio) window.dinoAudio.speakMandarin(this.currentChar);
  }

  renderStrokeSteps(item) {
    const stepsBox = document.getElementById('char-stroke-steps-box');
    if (!stepsBox) return;

    // Stroke steps standard dictionary for commonly used characters
    const strokeDictionary = {
      '一': ['1. 横 (héng) - Garis mendatar dari kiri ke kanan'],
      '二': ['1. 横 (héng pendek) - Garis mendatar atas', '2. 横 (héng panjang) - Garis mendatar bawah'],
      '三': ['1. 横 (héng pendek) - Garis atas', '2. 横 (héng sedang) - Garis tengah', '3. 横 (héng panjang) - Garis bawah'],
      '四': ['1. 竖 (shù) - Tegak kiri', '2. 横折 (héngzhé) - Sudut kanan', '3. 撇 (piě) - Sapuan dalam', '4. 竖弯 (shùwān) - Lengkung dalam', '5. 横 (héng) - Tutup bawah'],
      '五': ['1. 横 (héng) - Garis atas', '2. 竖 (shù) - Tegak tengah', '3. 横折 (héngzhé) - Garis siku', '4. 横 (héng) - Garis bawah'],
      '六': ['1. 点 (diǎn) - Titik atas', '2. 横 (héng) - Garis mendatar', '3. 撇 (piě) - Sapuan kiri', '4. 点 (diǎn) - Titik kanan'],
      '七': ['1. 横 (héng) - Garis miring naik', '2. 竖弯钩 (shùwāngōu) - Tegak lengkung kait'],
      '八': ['1. 撇 (piě) - Sapuan miring kiri', '2. 捺 (nà) - Sapuan miring kanan'],
      '九': ['1. 撇 (piě) - Sapuan kiri', '2. 横折弯钩 (héngzhéwāngōu) - Garis tekuk kait kanan'],
      '十': ['1. 横 (héng) - Garis mendatar', '2. 竖 (shù) - Garis tegak lurus menembus'],
      '人': ['1. 撇 (piě) - Sapuan miring kiri', '2. 捺 (nà) - Sapuan miring kanan'],
      '口': ['1. 竖 (shù) - Garis tegak kiri', '2. 横折 (héngzhé) - Garis siku atas-kanan', '3. 横 (héng) - Garis penutup dasar'],
      '日': ['1. 竖 (shù)', '2. 横折 (héngzhé)', '3. 横 (héng tengah)', '4. 横 (héng bawah)'],
      '月': ['1. 撇 (piě)', '2. 横折钩 (héngzhégōu)', '3. 横 (héng atas)', '4. 横 (héng bawah)'],
      '山': ['1. 竖 (shù tengah)', '2. 竖折 (shùzhé)', '3. 竖 (shù kanan)'],
      '水': ['1. 竖钩 (shùgōu tengah)', '2. 横撇 (héngpiě kiri)', '3. 撇 (piě kanan)', '4. 捺 (nà kanan)'],
      '木': ['1. 横 (héng)', '2. 竖 (shù)', '3. 撇 (piě)', '4. 捺 (nà)'],
      '你': ['1. 撇 (piě 亻)', '2. 竖 (shù 亻)', '3. 撇 (piě)', '4. 横撇 (héngpiě)', '5. 竖钩 (shùgōu)', '6. 点 (diǎn)', '7. 点 (diǎn)'],
      '我': ['1. 撇 (piě)', '2. 横 (héng)', '3. 竖钩 (shùgōu)', '4. 提 (tí)', '5. 斜钩 (xiégōu)', '6. 撇 (piě)', '7. 点 (diǎn)'],
      '大': ['1. 横 (héng)', '2. 撇 (piě)', '3. 捺 (nà)'],
      '小': ['1. 竖钩 (shùgōu)', '2. 撇 (piě kiri)', '3. 点 (diǎn kanan)'],
      '天': ['1. 横 (héng pendek)', '2. 横 (héng panjang)', '3. 撇 (piě)', '4. 捺 (nà)'],
      '早': ['1. 竖', '2. 横折', '3. 横', '4. 横', '5. 横 (十)', '6. 竖 (十)'],
      '师': ['1. 竖撇', '2. 竖', '3. 横折钩', '4. 横', '5. 竖', '6. 竖'],
      '岁': ['1. 竖 (山)', '2. 竖折 (山)', '3. 竖 (山)', '4. 撇 (夕)', '5. 横撇 (夕)', '6. 点 (夕)'],
      '龙': ['1. 横 (héng)', '2. 撇 (piě)', '3. 竖弯钩 (shùwāngōu)', '4. 点 (diǎn)', '5. 点 (diǎn)'],
      '蛋': ['1. 横撇', '2. 捺', '3. 竖', '4. 横折', '5. 横', '6. 竖', '7. 横', '8. 竖', '9. 横折', '10. 横', '11. 点']
    };

    const steps = strokeDictionary[item.char] || [
      `1. Perhatikan garis guratan awal karakter ${item.char}`,
      `2. Ikuti garis bantu guratan sesuai urutan standar (${item.strokes} Guratan)`,
      `3. Mulai dari atas ke bawah, kiri ke kanan`
    ];

    stepsBox.innerHTML = `
      <div class="stroke-steps-title">
        <span>✍️ Urutan Guratan Standar:</span>
        <button class="btn-demo-anim" id="btn-animate-demo-steps" title="Putar Animasi Panduan">▶️ Putar Animasi</button>
      </div>
      <div class="stroke-steps-list">
        ${steps.map((st, i) => `
          <div class="stroke-step-pill" data-stroke-index="${i}">
            <span class="step-badge">${i + 1}</span>
            <span class="step-name">${st}</span>
          </div>
        `).join('')}
      </div>
    `;

    const btnDemo = document.getElementById('btn-animate-demo-steps');
    if (btnDemo) {
      btnDemo.addEventListener('click', () => {
        this.strokeMode = 'animate';
        this.updateModeButtons();
        this.animateStrokes();
      });
    }

    const stepPills = stepsBox.querySelectorAll('.stroke-step-pill');
    stepPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const sIdx = parseInt(pill.getAttribute('data-stroke-index'));
        if (this.writer && typeof this.writer.animateStroke === 'function') {
          this.writer.animateStroke(sIdx);
          if (window.dinoAudio) window.dinoAudio.playSfx('pop');
        }
      });
    });
  }

  bindEvents() {
    // Ganti Buku
    if (this.bookSelector) {
      this.bookSelector.addEventListener('change', (e) => {
        const bookId = parseInt(e.target.value);
        this.updateUnitSelect(bookId);
        const unitId = this.unitSelector ? parseInt(this.unitSelector.value) : 1;
        this.loadBookUnit(bookId, unitId);
      });
    }

    // Ganti Unit
    if (this.unitSelector) {
      this.unitSelector.addEventListener('change', (e) => {
        const unitId = parseInt(e.target.value);
        const bookId = this.bookSelector ? parseInt(this.bookSelector.value) : 1;
        this.loadBookUnit(bookId, unitId);
      });
    }

    // Ganti Target Repetisi (3, 4, 5 kali)
    if (this.repsSelector) {
      this.repsSelector.addEventListener('change', (e) => {
        this.targetReps = parseInt(e.target.value);
        this.currentRepCount = 0;
        this.isCharCompleted = false;
        this.updateRepetitionUI();
      });
    }

    // Navigasi Karakter Sebelumnya & Berikutnya
    if (this.btnPrevChar) {
      this.btnPrevChar.addEventListener('click', () => {
        if (this.currentCharIndex > 0) {
          this.selectCharacterByIndex(this.currentCharIndex - 1);
        } else {
          this.selectCharacterByIndex(this.unitVocabList.length - 1);
        }
      });
    }

    if (this.btnNextChar) {
      this.btnNextChar.addEventListener('click', () => {
        if (this.currentCharIndex < this.unitVocabList.length - 1) {
          this.selectCharacterByIndex(this.currentCharIndex + 1);
        } else {
          this.selectCharacterByIndex(0);
        }
      });
    }

    // Klik Chip Karakter
    if (this.chipsContainer) {
      this.chipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.dino-chip');
        if (chip) {
          const idx = parseInt(chip.getAttribute('data-index'));
          this.selectCharacterByIndex(idx);
        }
      });
    }

    // Pencarian Bebas Hanzi
    if (this.btnSearchChar && this.customCharInput) {
      const handleSearch = () => {
        const val = this.customCharInput.value.trim();
        if (val) {
          const firstChar = Array.from(val)[0];
          // Cari di dataset jika ada
          const found = window.DINO_DATA && window.DINO_DATA.vocabList ? window.DINO_DATA.vocabList.find(v => v.char === firstChar) : null;
          if (found) {
            this.currentRepCount = 0;
            this.isCharCompleted = false;
            this.loadCharacterData(found);
          } else {
            this.currentRepCount = 0;
            this.isCharCompleted = false;
            this.loadCharacterData({
              char: firstChar,
              pinyin: '-',
              meaning: 'Karakter Kustom',
              book: 1,
              unit: 1,
              strokes: '?',
              tip: 'Ikuti garis bantu guratan karakter ini!'
            });
          }
          this.customCharInput.value = '';
        }
      };

      this.btnSearchChar.addEventListener('click', handleSearch);
      this.customCharInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
      });
    }

    // Tombol Animasi
    if (this.btnAnimate) {
      this.btnAnimate.addEventListener('click', () => {
        this.strokeMode = 'animate';
        this.updateModeButtons();
        this.animateStrokes();
      });
    }

    // Tombol Latihan Mandiri (Quiz)
    if (this.btnQuiz) {
      this.btnQuiz.addEventListener('click', () => {
        this.strokeMode = 'quiz';
        this.updateModeButtons();
        this.startQuiz();
      });
    }

    // Petunjuk Guratan (Hint)
    if (this.btnHint) {
      this.btnHint.addEventListener('click', () => {
        if (this.writer) {
          if (this.strokeMode === 'quiz') {
            this.writer.showHint();
            window.dinoAudio.playSfx('pop');
          } else {
            this.writer.animateCharacter();
          }
        }
      });
    }

    // Tombol Reset
    if (this.btnReset) {
      this.btnReset.addEventListener('click', () => {
        if (this.strokeMode === 'quiz') {
          this.startQuiz();
        } else {
          this.animateStrokes();
        }
      });
    }

    // Tombol Audio Suara Mandarin
    if (this.btnAudioChar) {
      this.btnAudioChar.addEventListener('click', () => {
        window.dinoAudio.speakMandarin(this.currentChar);
        this.btnAudioChar.classList.add('pulse');
        setTimeout(() => this.btnAudioChar.classList.remove('pulse'), 600);
      });
    }

    // Kecepatan
    if (this.speedSelector) {
      this.speedSelector.addEventListener('change', (e) => {
        this.animationSpeed = parseFloat(e.target.value);
        this.reloadWriter();
      });
    }

    // Tipe Grid
    if (this.gridSelector) {
      this.gridSelector.addEventListener('change', (e) => {
        this.gridType = e.target.value;
        this.updateGridDisplay();
      });
    }
  }

  updateModeButtons() {
    if (this.btnAnimate && this.btnQuiz) {
      if (this.strokeMode === 'animate') {
        this.btnAnimate.classList.add('primary-btn');
        this.btnAnimate.classList.remove('secondary-btn');
        this.btnQuiz.classList.remove('primary-btn');
        this.btnQuiz.classList.add('secondary-btn');
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = '🎬 Mode Animasi: Perhatikan urutan guratan!';
          this.strokeStatusBadge.className = 'status-badge status-animating';
        }
      } else {
        this.btnQuiz.classList.add('primary-btn');
        this.btnQuiz.classList.remove('secondary-btn');
        this.btnAnimate.classList.remove('primary-btn');
        this.btnAnimate.classList.add('secondary-btn');
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = `✍️ Mode Latihan: Tulis guratan (${this.currentRepCount}/${this.targetReps}x)!`;
          this.strokeStatusBadge.className = 'status-badge status-ready';
        }
      }
    }
  }

  updateGridDisplay() {
    if (!this.targetContainer) return;
    this.targetContainer.classList.remove('grid-mizige', 'grid-tianzige', 'grid-plain');
    this.targetContainer.classList.add(`grid-${this.gridType}`);
  }

  updateRepetitionUI() {
    if (this.repsCountText) {
      this.repsCountText.textContent = `${this.currentRepCount} / ${this.targetReps} Kali`;
    }

    if (this.repsTrackerContainer) {
      let eggsHtml = '';
      for (let i = 1; i <= this.targetReps; i++) {
        if (i <= this.currentRepCount) {
          eggsHtml += `<span class="egg-item hatched" title="Latihan ke-${i} Selesai!">🦖</span>`;
        } else if (i === this.currentRepCount + 1) {
          eggsHtml += `<span class="egg-item active-cracking" title="Sedang menulis ke-${i}">🥚✨</span>`;
        } else {
          eggsHtml += `<span class="egg-item unhatched" title="Target latihan ke-${i}">🥚</span>`;
        }
      }
      this.repsTrackerContainer.innerHTML = eggsHtml;
    }

    if (this.strokeStatusBadge && this.strokeMode === 'quiz') {
      if (this.currentRepCount >= this.targetReps) {
        this.strokeStatusBadge.innerHTML = `🎉 Hebat! Target Latihan ${this.targetReps}x Selesai! Telur Telah Menetas!`;
        this.strokeStatusBadge.className = 'status-badge status-success';
      } else {
        this.strokeStatusBadge.innerHTML = `✍️ Tulis guratan di kotak (Latihan ${this.currentRepCount + 1} dari ${this.targetReps}x)`;
        this.strokeStatusBadge.className = 'status-badge status-ready';
      }
    }
  }

  handleRepetitionComplete() {
    this.currentRepCount++;
    this.updateRepetitionUI();

    if (this.currentRepCount >= this.targetReps) {
      // Selesai target repetisi (3-5 kali)!
      this.isCharCompleted = true;
      if (!this.completedCharsSet) this.completedCharsSet = new Set();
      this.completedCharsSet.add(this.currentChar);

      window.dinoAudio.playSfx('hatch');
      window.dinoAudio.playSfx('fanfare');

      // Cek jika semua karakter dalam unit telah selesai (Mode Tugas Murid)
      if (this.completedCharsSet.size >= this.unitList.length && this.unitList.length > 0) {
        setTimeout(() => {
          const certModal = document.getElementById('student-certificate-modal');
          const certTitle = document.getElementById('cert-task-title');
          const certDate = document.getElementById('cert-date-txt');
          if (certModal) {
            certModal.classList.add('show');
            certModal.style.display = 'flex';
            if (certTitle) {
              const taskBannerTitle = document.getElementById('task-banner-title');
              certTitle.textContent = (taskBannerTitle ? taskBannerTitle.textContent : '') || `Han Yu ${this.currentBook} Unit ${this.currentUnit} - Selesai!`;
            }
            if (certDate) {
              const now = new Date();
              certDate.textContent = `Tanggal Pengerjaan: ${now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
            }
            if (window.dinoAudio) {
              window.dinoAudio.playSfx('victory');
            }
          }
        }, 1200);
      }

      if (this.repSuccessBox) {
        this.repSuccessBox.innerHTML = `
          <div class="rep-success-content">
            <span class="rep-success-icon">🦖🎉</span>
            <div>
              <h4 class="rep-success-title">Target ${this.targetReps}x Menulis Selesai!</h4>
              <p class="rep-success-desc">Telur dinosaurus untuk karakter <strong>"${this.currentChar}" (${this.currentData ? this.currentData.pinyin : ''} - ${this.currentData ? this.currentData.meaning : ''})</strong> telah menetas!</p>
            </div>
            <button class="dino-btn primary-btn btn-sm" id="btn-next-char-rep">Karakter Berikutnya ➔</button>
          </div>
        `;
        this.repSuccessBox.style.display = 'block';

        const btnNext = document.getElementById('btn-next-char-rep');
        if (btnNext) {
          btnNext.addEventListener('click', () => {
            if (this.btnNextChar) this.btnNextChar.click();
          });
        }
      }

      // Beri animasi perayaan
      if (this.targetContainer) {
        this.targetContainer.classList.add('celebration-glow');
        setTimeout(() => this.targetContainer.classList.remove('celebration-glow'), 1500);
      }
    } else {
      // Masih ada repetisi berikutnya
      window.dinoAudio.playSfx('correct');
      if (this.strokeStatusBadge) {
        this.strokeStatusBadge.innerHTML = `✨ Bagus sekali! Ayo tulis lagi (${this.currentRepCount + 1}/${this.targetReps}x)!`;
        this.strokeStatusBadge.className = 'status-badge status-success';
      }
      // Mulai kuis ronde berikutnya setelah jeda singkat
      setTimeout(() => {
        if (this.strokeMode === 'quiz' && !this.isCharCompleted) {
          this.startQuiz();
        }
      }, 900);
    }
  }

  reloadWriter() {
    if (!this.targetContainer) return;
    if (typeof HanziWriter === 'undefined') {
      this.targetContainer.innerHTML = `
        <div class="fallback-char-wrap">
          <div class="fallback-char-big">${this.currentChar}</div>
          <div class="fallback-char-note">Pratinjau Font Standar</div>
        </div>
      `;
      return;
    }

    this.targetContainer.innerHTML = '';
    this.updateGridDisplay();

    const size = Math.min(window.innerWidth > 600 ? 280 : 220, 300);

    try {
      this.writer = HanziWriter.create(this.targetContainer, this.currentChar, {
        width: size,
        height: size,
        padding: 20,
        strokeAnimationSpeed: this.animationSpeed,
        delayBetweenStrokes: 150 / this.animationSpeed,
        strokeColor: '#2E7D32', // Forest Green Dino
        radicalColor: '#E65100', // Lava Orange
        outlineColor: '#CFD8DC',
        drawingColor: '#1B5E20',
        drawingWidth: 16,
        showOutline: this.showOutline,
        showCharacter: false,
        strokeFadeDuration: 400,
        highlightColor: '#FFB300',
        onLoadCharDataError: () => {
          this.renderInteractiveCanvasFallback(size);
        }
      });

      if (this.strokeMode === 'quiz') {
        this.startQuiz();
      } else {
        this.animateStrokes();
      }
    } catch (err) {
      console.warn('HanziWriter init warning:', err);
      this.renderInteractiveCanvasFallback(size);
    }
  }

  renderInteractiveCanvasFallback(size) {
    if (!this.targetContainer) return;
    this.targetContainer.innerHTML = `
      <div style="position: relative; width: ${size}px; height: ${size}px; margin: 0 auto; user-select: none;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size: ${size * 0.65}px; color: #cfd8dc; font-family: 'Noto Sans SC', sans-serif; pointer-events: none;">
          ${this.currentChar}
        </div>
        <canvas id="fallback-draw-canvas" width="${size}" height="${size}" style="position: absolute; top:0; left:0; width:100%; height:100%; cursor: crosshair; touch-action: none;"></canvas>
      </div>
    `;

    const canvas = document.getElementById('fallback-draw-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let strokePoints = 0;

    const startDraw = (e) => {
      isDrawing = true;
      strokePoints = 0;
      ctx.beginPath();
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
      ctx.moveTo(x, y);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      strokePoints++;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#1B5E20';
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const stopDraw = () => {
      if (!isDrawing) return;
      isDrawing = false;
      if (strokePoints > 8) {
        this.handleRepetitionComplete();
        setTimeout(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 600);
      }
    };

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw);
    canvas.addEventListener('touchmove', draw);
    window.addEventListener('touchend', stopDraw);
  }

  startQuiz() {
    if (!this.writer) return;
    this.strokeMode = 'quiz';
    this.updateModeButtons();

    this.writer.quiz({
      onMistake: (strokeData) => {
        window.dinoAudio.playSfx('wrong');
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = `⚠️ Oops! Guratan ke-${strokeData.strokeNum + 1} belum tepat. Coba lagi!`;
          this.strokeStatusBadge.className = 'status-badge status-mistake';
        }
      },
      onCorrectStroke: (strokeData) => {
        window.dinoAudio.playSfx('stroke');
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = `👍 Guratan ke-${strokeData.strokeNum + 1} tepat! Lanjutkan!`;
          this.strokeStatusBadge.className = 'status-badge status-ready';
        }
      },
      onComplete: () => {
        this.handleRepetitionComplete();
      }
    });
  }

  animateStrokes() {
    if (!this.writer) return;
    this.strokeMode = 'animate';
    this.updateModeButtons();
    this.writer.cancelQuiz();
    this.writer.animateCharacter({
      onComplete: () => {
        if (this.strokeStatusBadge) {
          this.strokeStatusBadge.innerHTML = '✅ Animasi selesai! Tekan "Latihan Tulis" untuk mencoba.';
          this.strokeStatusBadge.className = 'status-badge status-success';
        }
      }
    });
  }
}

// Inisialisasi saat window dimuat
window.DinoStrokeWriter = DinoStrokeWriter;
