/**
 * Dino Mandarin Adventure - Audio Synthesis Engine
 * Web Audio API SFX Synth + Web Speech Mandarin TTS
 * Features:
 * - Tepuk Tangan Meriah (Applause / Cheering) & Tepukan Tunggal (Single Clap)
 * - Suara Raungan Dinosaurus (Dino Roar / Growl) yang menggelegar
 * - Perayaan Tepuk Tangan Meriah + Fanfare Juara Piala 🏆
 * - Pelafalan Mandarin Kecepatan Lambat (0.5x - 0.75x) untuk Anak SD
 */

class DinoAudioEngine {
  constructor() {
    this.sfxEnabled = true;
    this.voiceEnabled = true;
    this.audioCtx = null;
    this.mandarinVoice = null;
    this.voiceRate = 0.62; // Kecepatan lambat ramah anak SD

    this.initAudioContext();
    this.initVoices();
  }

  initAudioContext() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
    }
  }

  ensureAudioContext() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  initVoices() {
    if (!('speechSynthesis' in window)) return;

    const findVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Prioritaskan suara Mandarin resmi zh-CN
      this.mandarinVoice = voices.find(v => 
        v.lang === 'zh-CN' || 
        v.lang === 'cmn-Hans-CN' || 
        v.lang === 'zh_CN' || 
        v.lang === 'zh-TW' || 
        v.lang.startsWith('zh')
      ) || null;
    };

    findVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = findVoice;
    }
  }

  toggleSfx() {
    this.sfxEnabled = !this.sfxEnabled;
    return this.sfxEnabled;
  }

  toggleVoice() {
    this.voiceEnabled = !this.voiceEnabled;
    return this.voiceEnabled;
  }

  // =========================================================================
  // 1. WEB AUDIO API SYNTHESIZER SFX
  // =========================================================================

  /**
   * Suara Tepuk Tangan Meriah (Applause / Crowd Clapping)
   * Disintesis dengan puluhan noise burst berlapis filter bandpass
   */
  playApplause() {
    if (!this.sfxEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const duration = 2.2;

    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    // 24 Tepukan tangan acak dalam rentang 2 detik
    const clapsCount = 24;
    for (let i = 0; i < clapsCount; i++) {
      const clapTime = now + (i * 0.08) + (Math.random() * 0.04);
      
      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 900 + Math.random() * 900;
      filter.Q.value = 2.8;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, clapTime);
      gain.gain.linearRampToValueAtTime(0.35 + Math.random() * 0.2, clapTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.09);

      noiseNode.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noiseNode.start(clapTime);
      noiseNode.stop(clapTime + 0.1);
    }

    // Nada Kemenangan Ceria (C5 - E5 - G5 - C6)
    this.playTone(523.25, 'triangle', 0.18, now, 0.2); // C5
    this.playTone(659.25, 'triangle', 0.18, now + 0.15, 0.25); // E5
    this.playTone(783.99, 'triangle', 0.25, now + 0.3, 0.3); // G5
    this.playTone(1046.50, 'triangle', 0.5, now + 0.45, 0.35); // C6
  }

  /**
   * Suara Satu Tepukan (Single Clap) saat menyelesaikan goresan dengan tepat
   */
  playClapSingle() {
    if (!this.sfxEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const bufferSize = Math.floor(ctx.sampleRate * 0.1);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1100;
    filter.Q.value = 3.0;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.09);

    // Ting nada kecil
    this.playTone(880, 'sine', 0.1, now, 0.15);
  }

  /**
   * Suara Raungan Dinosaurus (Dino Roar / Growl)
   * Disintesis dengan osilator sawtooth frekuensi rendah + modulation FM + rumble noise
   */
  playDinoRoar() {
    if (!this.sfxEnabled || !this.audioCtx) return;
    this.ensureAudioContext();

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const duration = 0.9;

    // Osilator 1: Raungan Utama Sawtooth
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(140, now); // Mulai dari nada garang
    osc1.frequency.linearRampToValueAtTime(180, now + 0.15); // Naik sedikit meraung
    osc1.frequency.exponentialRampToValueAtTime(40, now + duration); // Turun bergetar

    // Osilator 2: Modulasi Geraman Kasar (FM Growl)
    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(90, now);
    osc2.frequency.linearRampToValueAtTime(120, now + 0.2);
    osc2.frequency.exponentialRampToValueAtTime(35, now + duration);

    // Filter Lowpass untuk kesan berat prasejarah
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, now);
    filter.frequency.linearRampToValueAtTime(850, now + 0.2);
    filter.frequency.linearRampToValueAtTime(180, now + duration);

    // Distortion / Overdrive Shaper
    const waveShaper = ctx.createWaveShaper();
    waveShaper.curve = this.makeDistortionCurve(18);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.5, now + 0.08); // Serangan cepat
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration); // Menghilang perlahan

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(waveShaper);
    waveShaper.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);

    // Lapisan Rumble Noise (Gemuruh bumi purba)
    this.playSubRumble(now, duration);
  }

  playSubRumble(startTime, duration) {
    const ctx = this.audioCtx;
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, startTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(startTime);
    noise.stop(startTime + duration);
  }

  makeDistortionCurve(amount) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  playTone(freq, type, duration, startTime, vol = 0.2) {
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, startTime || ctx.currentTime);

    gain.gain.setValueAtTime(vol, startTime || ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, (startTime || ctx.currentTime) + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime || ctx.currentTime);
    osc.stop((startTime || ctx.currentTime) + duration);
  }

  playMatchSuccess() {
    if (!this.sfxEnabled || !this.audioCtx) return;
    this.ensureAudioContext();
    const now = this.audioCtx.currentTime;
    this.playTone(587.33, 'triangle', 0.15, now, 0.2); // D5
    this.playTone(880.00, 'triangle', 0.25, now + 0.12, 0.25); // A5
  }

  playMatchFail() {
    this.playDinoRoar();
  }

  playCardFlip() {
    if (!this.sfxEnabled || !this.audioCtx) return;
    this.ensureAudioContext();
    const now = this.audioCtx.currentTime;
    this.playTone(330, 'sine', 0.06, now, 0.15);
  }

  // =========================================================================
  // 2. WEB SPEECH API MANDARIN TTS (LAMBAN & JELAS)
  // =========================================================================

  /**
   * Melafalkan Teks Mandarin dengan Kecepatan Lambat yang Nyaman untuk Anak
   */
  speakMandarinSlow(text, customRate = null, onEndCallback = null) {
    if (!this.voiceEnabled || !('speechSynthesis' in window)) {
      if (onEndCallback) onEndCallback();
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Hentikan suara sebelumnya

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = customRate !== null ? customRate : this.voiceRate; // ~0.62x lambat
      utterance.pitch = 1.05; // Sedikit ceria dan jelas

      if (this.mandarinVoice) {
        utterance.voice = this.mandarinVoice;
      }

      if (onEndCallback) {
        utterance.onend = () => onEndCallback();
        utterance.onerror = () => onEndCallback();
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('SpeechSynthesis error:', e);
      if (onEndCallback) onEndCallback();
    }
  }

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

// Global Singleton
if (typeof window !== 'undefined') {
  window.dinoAudio = new DinoAudioEngine();
}
