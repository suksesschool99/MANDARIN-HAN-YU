// =========================================================================
// DINOSAUR SOUND & SPEECH SYNTHESIS ENGINE
// Web Audio API Procedural FX + Web Speech Synthesis (Slow Chinese Mandarin)
// =========================================================================

class DinoAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.speechRate = 0.7; // Lambat dan ramah untuk anak SD
    this.chineseVoice = null;
    this.currentUtterance = null;
    
    // Inisialisasi suara TTS
    this.initVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => this.initVoices();
    }
  }

  // Memastikan AudioContext aktif (diaktifkan saat interaksi pengguna pertama)
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritaskan suara Mandarin Tiongkok (zh-CN, zh, cmn)
    this.chineseVoice = voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang.startsWith('zh')) || null;
  }

  // -----------------------------------------------------------------------
  // 1. CHINESE TEXT-TO-SPEECH (AUDIO PELAN & JELAS UNTUK ANAK SD)
  // -----------------------------------------------------------------------
  speakMandarin(text, options = {}) {
    if (this.isMuted) return;
    if (!('speechSynthesis' in window)) {
      console.warn("Speech Synthesis tidak didukung oleh browser ini.");
      return;
    }

    this.stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    if (this.chineseVoice) {
      utterance.voice = this.chineseVoice;
    }
    
    // Kecepatan lambat (default 0.7x) untuk anak SD
    utterance.rate = options.rate || this.speechRate;
    utterance.pitch = options.pitch || 1.1; // Sedikit lebih ceria untuk anak-anak

    if (options.onStart) utterance.onstart = options.onStart;
    if (options.onEnd) utterance.onend = options.onEnd;
    if (options.onBoundary) utterance.onboundary = options.onBoundary;
    if (options.onError) utterance.onerror = options.onError;

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  speakIndonesian(text, options = {}) {
    if (this.isMuted) return;
    if (!('speechSynthesis' in window)) return;

    this.stopSpeaking();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = options.rate || 0.9;
    if (options.onEnd) utterance.onend = options.onEnd;
    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  setSpeechRate(rate) {
    this.speechRate = Math.max(0.4, Math.min(1.2, rate));
  }

  // -----------------------------------------------------------------------
  // 2. SUARA TEPUK TANGAN MERIAH (APPLAUSE / CHEERING)
  // -----------------------------------------------------------------------
  playApplauseSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 2.4;

    // Buffer noise untuk tepuk tangan
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    // Node sumber noise
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter bandpass menyerupai rentang frekuensi tepukan tangan beramai-ramai
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, now);
    filter.Q.setValueAtTime(2.2, now);

    // Filter gain envelope dengan irama tepukan
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.linearRampToValueAtTime(0.4, now + 0.15);

    // Modulasi ritme tepukan tangan (tremolo LFO)
    for (let t = 0.1; t < duration - 0.4; t += 0.08 + Math.random() * 0.04) {
      gainNode.gain.setValueAtTime(0.35 + Math.random() * 0.15, now + t);
      gainNode.gain.linearRampToValueAtTime(0.1 + Math.random() * 0.08, now + t + 0.04);
    }
    gainNode.gain.linearRampToValueAtTime(0.001, now + duration);

    // Tambahan nada gembira (Victory Fanfare Chords)
    const notes = [523.25, 659.25, 783.99, 1046.50]; // Chord C Major
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      oscGain.gain.setValueAtTime(0, now);
      oscGain.gain.setValueAtTime(0.12, now + idx * 0.1);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.7);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.8);
    });

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + duration);
  }

  // -----------------------------------------------------------------------
  // 3. SUARA TERIAKAN DINOSAURUS MERAUNG (DINO ROAR)
  // -----------------------------------------------------------------------
  playDinoRoarSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 1.8;

    // 1. Osilator Low Growl (Sawtooth Sub-bass)
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(95, now);
    osc1.frequency.linearRampToValueAtTime(140, now + 0.35);
    osc1.frequency.exponentialRampToValueAtTime(45, now + duration);

    // 2. Osilator Rumble Screech
    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(160, now);
    osc2.frequency.linearRampToValueAtTime(220, now + 0.25);
    osc2.frequency.exponentialRampToValueAtTime(60, now + duration);

    // 3. Noise Roar Texture (Deru desah raungan purba)
    const bufferSize = ctx.sampleRate * duration;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(800, now);
    noiseFilter.frequency.linearRampToValueAtTime(2200, now + 0.3);
    noiseFilter.frequency.exponentialRampToValueAtTime(200, now + duration);

    // Resonant Main Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.linearRampToValueAtTime(1200, now + 0.4);
    filter.frequency.exponentialRampToValueAtTime(150, now + duration);
    filter.Q.setValueAtTime(4.5, now);

    // LFO untuk vibrato menggeram
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(18, now); // 18 Hz growl flutter
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(30, now);
    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);

    // Volume Envelope
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.01, now);
    masterGain.gain.linearRampToValueAtTime(0.45, now + 0.2);
    masterGain.gain.setValueAtTime(0.45, now + 0.8);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(filter);

    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    lfo.start(now);
    osc1.start(now);
    osc2.start(now);
    noiseSource.start(now);

    lfo.stop(now + duration);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
    noiseSource.stop(now + duration);
  }

  // -----------------------------------------------------------------------
  // 4. EFEK SUARA TAMBAHAN (CLICK, DINO EGG CRACK, FANFARE PIALA)
  // -----------------------------------------------------------------------
  playCorrectSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.setValueAtTime(880, now + 0.1); // A5

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  playEggCrackSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.15);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  playTrophyFanfare() {
    if (this.isMuted) return;
    this.playApplauseSound();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopSpeaking();
    }
    return this.isMuted;
  }
}

// Instance global
const dinoAudio = new DinoAudioEngine();
