/**
 * Dino Mandarin Adventure - PDF Viewer Module (Han Yu 1 s/d Han Yu 12)
 * Menampilkan dan Membaca Berkas Asli PDF Han Yu 1 sampai Han Yu 12
 */

class DinoPdfViewer {
  constructor() {
    this.currentBookId = 1;
    this.init();
  }

  init() {
    this.cacheDom();
    this.populateBookDropdown();
    this.bindEvents();

    const params = new URLSearchParams(window.location.search);
    const book = parseInt(params.get('book')) || 1;
    this.loadPdf(book);
  }

  cacheDom() {
    this.bookSelect = document.getElementById('pdf-book-select');
    this.iframeEl = document.getElementById('pdf-embed-frame');
    this.titleEl = document.getElementById('pdf-book-title-display');
    this.descEl = document.getElementById('pdf-book-desc-display');
    this.btnFullscreen = document.getElementById('btn-pdf-fullscreen');
    this.btnOpenNewTab = document.getElementById('btn-pdf-newtab');
    this.btnDownload = document.getElementById('btn-pdf-download');
  }

  populateBookDropdown() {
    if (!this.bookSelect) return;
    if (window.DINO_DATA && window.DINO_DATA.books) {
      this.bookSelect.innerHTML = window.DINO_DATA.books.map(b => `
        <option value="${b.id}">${b.title}</option>
      `).join('');
    }
  }

  getPdfPath(bookData) {
    const filename = bookData.pdfFile || `HAN YU ${bookData.id || 1}.pdf`;
    const isInSubfolder = window.location.pathname.includes('dino-mandarin-github');
    return isInSubfolder ? `../${filename}` : filename;
  }

  bindEvents() {
    if (this.bookSelect) {
      this.bookSelect.addEventListener('change', (e) => {
        const bId = parseInt(e.target.value) || 1;
        this.loadPdf(bId);
      });
    }

    if (this.btnFullscreen && this.iframeEl) {
      this.btnFullscreen.addEventListener('click', () => {
        if (this.iframeEl.requestFullscreen) {
          this.iframeEl.requestFullscreen();
        } else if (this.iframeEl.webkitRequestFullscreen) {
          this.iframeEl.webkitRequestFullscreen();
        }
      });
    }

    if (this.btnOpenNewTab) {
      this.btnOpenNewTab.addEventListener('click', () => {
        const bookData = this.getCurrentBookData();
        if (bookData) {
          const pdfPath = this.getPdfPath(bookData);
          window.open(pdfPath, '_blank');
        }
      });
    }

    if (this.btnDownload) {
      this.btnDownload.addEventListener('click', () => {
        const bookData = this.getCurrentBookData();
        if (bookData) {
          const pdfPath = this.getPdfPath(bookData);
          const a = document.createElement('a');
          a.href = pdfPath;
          a.download = bookData.pdfFile || `HAN YU ${bookData.id}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      });
    }
  }

  getCurrentBookData() {
    if (window.DINO_DATA && window.DINO_DATA.books) {
      return window.DINO_DATA.books.find(b => b.id === this.currentBookId) || window.DINO_DATA.books[0];
    }
    return { id: 1, title: 'Han Yu 1', pdfFile: 'HAN YU 1.pdf' };
  }

  loadPdf(bookId) {
    this.currentBookId = parseInt(bookId) || 1;
    if (this.bookSelect) this.bookSelect.value = this.currentBookId;

    const bookData = this.getCurrentBookData();
    const pdfPath = this.getPdfPath(bookData);

    if (this.titleEl) this.titleEl.textContent = bookData.title;
    if (this.descEl) this.descEl.textContent = bookData.desc || 'Buku Resmi PDF Bahasa Mandarin';

    if (this.iframeEl) {
      this.iframeEl.src = `${pdfPath}#toolbar=1&navpanes=1&scrollbar=1`;
    }
  }
}

if (typeof window !== 'undefined') {
  window.DinoPdfViewer = DinoPdfViewer;
}
