// =========================================================================
// INTERACTIVE HANZI STROKE WRITER & PRACTICE CANVAS
// Grid Tian Zi Ge / Mi Zi Ge, Stroke Order Animation, 3-6x Repetition Counter
// Sound Trigger: Applause on Completion, Dino Roar on Error
// =========================================================================

class DinoStrokeWriter {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    this.container = document.getElementById(containerId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    
    this.currentVocab = null;
    this.targetRepeats = 3; // Rentang 3-6 kali
    this.currentRepeat = 0;
    this.strokesDrawn = 0;
    this.isDrawing = false;
    this.drawnPoints = [];
    this.allStrokes = [];
    this.showOutline = true;
    this.demoAnimationTimer = null;
    
    if (this.canvas) {
      this.initEvents();
      this.resizeCanvas();
    }
  }

  setCanvas(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.initEvents();
      this.resizeCanvas();
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const size = Math.min(rect.width || 320, 340);
    this.canvas.width = size * window.devicePixelRatio;
    this.canvas.height = size * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.displayWidth = size;
    this.displayHeight = size;
    this.redraw();
  }

  initEvents() {
    if (!this.canvas) return;
    
    // Mouse events
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    this.canvas.addEventListener('mousemove', (e) => this.draw(e));
    window.addEventListener('mouseup', () => this.stopDrawing());

    // Touch events
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.startDrawing(touch);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.draw(touch);
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.stopDrawing();
    });
  }

  getCanvasPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  startDrawing(e) {
    this.isDrawing = true;
    this.drawnPoints = [];
    const pos = this.getCanvasPos(e);
    this.drawnPoints.push(pos);
    dinoAudio.getAudioContext(); // Wake up audio
  }

  draw(e) {
    if (!this.isDrawing) return;
    const pos = this.getCanvasPos(e);
    this.drawnPoints.push(pos);

    // Live stroke rendering on canvas
    this.ctx.save();
    this.ctx.lineWidth = 14;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.strokeStyle = '#2d6a4f';

    const pts = this.drawnPoints;
    if (pts.length > 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(pts[pts.length - 2].x, pts[pts.length - 2].y);
      this.ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  stopDrawing() {
    if (!this.isDrawing) return;
    this.isDrawing = false;
    if (this.drawnPoints.length > 3) {
      this.allStrokes.push([...this.drawnPoints]);
      this.strokesDrawn++;
      dinoAudio.playEggCrackSound();
    }
    this.drawnPoints = [];
  }

  loadVocab(vocabItem, targetRepeats = 3) {
    this.currentVocab = vocabItem;
    this.targetRepeats = Math.max(3, Math.min(6, targetRepeats));
    this.currentRepeat = 0;
    this.strokesDrawn = 0;
    this.allStrokes = [];
    this.stopDemoAnimation();
    this.renderUIInfo();
    this.redraw();
  }

  setTargetRepeats(num) {
    this.targetRepeats = Math.max(3, Math.min(6, num));
    this.renderUIInfo();
  }

  // Cek keberhasilan tulisan anak
  checkPractice(isSimulateError = false) {
    if (!this.currentVocab) return;

    if (isSimulateError || this.allStrokes.length === 0) {
      // SALAH / MELENCENG -> SUARA DINOSAURUS MERAUNG
      dinoAudio.playDinoRoarSound();
      this.triggerRoarAnimation();
      return;
    }

    // TULISAN BENAR / 1 REPETISI BERHASIL
    this.currentRepeat++;
    this.allStrokes = [];
    this.renderUIInfo();

    if (this.currentRepeat >= this.targetRepeats) {
      // SELESAI SEMUA TARGET 3-6 KALI -> SUARA TEPUK TANGAN MERIAH
      dinoAudio.playApplauseSound();
      this.triggerApplauseAnimation();
    } else {
      dinoAudio.playCorrectSound();
      this.redraw();
    }
  }

  clearCanvas() {
    this.allStrokes = [];
    this.drawnPoints = [];
    this.redraw();
  }

  redraw() {
    if (!this.ctx || !this.canvas) return;
    const w = this.displayWidth || 320;
    const h = this.displayHeight || 320;

    this.ctx.clearRect(0, 0, w, h);

    // 1. Gambar Grid Mi Zi Ge (米字格)
    this.drawMiZiGe(w, h);

    // 2. Gambar Karakter Pemandu (Outline Transparan)
    if (this.showOutline && this.currentVocab) {
      this.drawGuideCharacter(w, h);
    }

    // 3. Gambar Goresan yang Sudah Digambar Siswa
    this.drawStudentStrokes();
  }

  drawMiZiGe(w, h) {
    const ctx = this.ctx;
    ctx.save();
    
    // Background Grid
    ctx.fillStyle = '#fffdf7';
    ctx.fillRect(0, 0, w, h);

    // Border Kotak
    ctx.strokeStyle = '#e76f51';
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, w - 16, h - 16);

    // Garis Putus-putus Merah (Salib & Diagonal)
    ctx.strokeStyle = 'rgba(231, 111, 81, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 6]);

    // Garis Vertikal Tengah
    ctx.beginPath();
    ctx.moveTo(w / 2, 8);
    ctx.lineTo(w / 2, h - 8);
    ctx.stroke();

    // Garis Horizontal Tengah
    ctx.beginPath();
    ctx.moveTo(8, h / 2);
    ctx.lineTo(w - 8, h / 2);
    ctx.stroke();

    // Garis Diagonal 1
    ctx.beginPath();
    ctx.moveTo(8, 8);
    ctx.lineTo(w - 8, h - 8);
    ctx.stroke();

    // Garis Diagonal 2
    ctx.beginPath();
    ctx.moveTo(w - 8, 8);
    ctx.lineTo(8, h - 8);
    ctx.stroke();

    ctx.restore();
  }

  drawGuideCharacter(w, h) {
    const ctx = this.ctx;
    const char = this.currentVocab.hanzi[0] || "你";
    ctx.save();
    ctx.font = `bold ${w * 0.72}px "KaiTi", "STKaiti", "Microsoft YaHei", "Noto Sans SC", serif`;
    ctx.fillStyle = 'rgba(45, 106, 79, 0.18)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, w / 2, h / 2 + 10);
    ctx.restore();
  }

  drawStudentStrokes() {
    const ctx = this.ctx;
    ctx.save();
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1b4d3e';

    for (const stroke of this.allStrokes) {
      if (stroke.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }

  // Animasi Peragaan Guratan
  playDemoAnimation() {
    if (!this.currentVocab) return;
    this.stopDemoAnimation();
    this.allStrokes = [];
    this.redraw();

    const char = this.currentVocab.hanzi[0];
    dinoAudio.speakMandarin(char, { rate: 0.6 });

    let opacity = 0.1;
    let step = 0;
    this.demoAnimationTimer = setInterval(() => {
      opacity += 0.1;
      this.ctx.save();
      this.ctx.font = `bold ${(this.displayWidth || 320) * 0.72}px "KaiTi", "STKaiti", "Microsoft YaHei", serif`;
      this.ctx.fillStyle = `rgba(231, 111, 81, ${Math.min(0.85, opacity)})`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(char, this.displayWidth / 2, this.displayHeight / 2 + 10);
      this.ctx.restore();

      step++;
      if (step > 10) {
        clearInterval(this.demoAnimationTimer);
        setTimeout(() => this.redraw(), 1200);
      }
    }, 100);
  }

  stopDemoAnimation() {
    if (this.demoAnimationTimer) {
      clearInterval(this.demoAnimationTimer);
      this.demoAnimationTimer = null;
    }
  }

  renderUIInfo() {
    const vocabEl = document.getElementById('stroke-vocab-title');
    const pinyinEl = document.getElementById('stroke-vocab-pinyin');
    const meaningEl = document.getElementById('stroke-vocab-meaning');
    const strokeCountEl = document.getElementById('stroke-count-display');
    const repeatBadgeEl = document.getElementById('stroke-repeat-counter');
    const strokeListEl = document.getElementById('stroke-order-steps');

    if (!this.currentVocab) return;

    if (vocabEl) vocabEl.textContent = this.currentVocab.hanzi;
    if (pinyinEl) pinyinEl.textContent = this.currentVocab.pinyin;
    if (meaningEl) meaningEl.textContent = `Arti: ${this.currentVocab.meaning}`;
    if (strokeCountEl) strokeCountEl.textContent = `${this.currentVocab.strokes} Guratan (Radikal: ${this.currentVocab.radical || '-'})`;

    if (repeatBadgeEl) {
      let eggsHtml = '';
      for (let i = 0; i < this.targetRepeats; i++) {
        if (i < this.currentRepeat) {
          eggsHtml += '<span class="egg-badge done" title="Latihan selesai">🦖 Selesai</span> ';
        } else {
          eggsHtml += '<span class="egg-badge pending" title="Belum">🥚 Ke-' + (i + 1) + '</span> ';
        }
      }
      repeatBadgeEl.innerHTML = `Latihan: ${this.currentRepeat} / ${this.targetRepeats} Kali<div class="egg-progress">${eggsHtml}</div>`;
    }

    if (strokeListEl && this.currentVocab.strokeOrder) {
      strokeListEl.innerHTML = this.currentVocab.strokeOrder.map((s, idx) => 
        `<span class="stroke-step-pill"><span class="step-num">${idx + 1}</span> ${s}</span>`
      ).join('');
    }
  }

  triggerApplauseAnimation() {
    const banner = document.getElementById('stroke-feedback-banner');
    if (banner) {
      banner.className = 'feedback-banner applause show';
      banner.innerHTML = `
        <div class="feedback-content">
          <div class="feedback-icon">👏🎉🦖</div>
          <h3>Luar Biasa! Benar & Tuntas!</h3>
          <p>Kamu telah berhasil menulis <strong>${this.currentVocab.hanzi}</strong> sebanyak <strong>${this.targetRepeats} kali</strong> berturut-turut!</p>
          <button class="dino-btn primary" onclick="dinoStroke.nextCharacter()">Lanjut Karakter Berikutnya ➔</button>
        </div>
      `;
    }
  }

  triggerRoarAnimation() {
    const banner = document.getElementById('stroke-feedback-banner');
    if (banner) {
      banner.className = 'feedback-banner roar show';
      banner.innerHTML = `
        <div class="feedback-content">
          <div class="feedback-icon">🦖⚡🔊</div>
          <h3>ROAAAR! Dinosaurus Meraung!</h3>
          <p>Guratannya belum tepat atau masih kosong. Tenang, Rexy percaya kamu pasti bisa! Coba tulis lagi ya!</p>
          <button class="dino-btn secondary" onclick="dinoStroke.dismissBanner()">Coba Lagi ↺</button>
        </div>
      `;
    }
  }

  dismissBanner() {
    const banner = document.getElementById('stroke-feedback-banner');
    if (banner) {
      banner.className = 'feedback-banner hidden';
      this.redraw();
    }
  }
}
