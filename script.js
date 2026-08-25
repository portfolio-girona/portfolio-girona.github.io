// ====================
// PORTFOLIO GIRONA · INTERACCIONES
// ====================
(function(){
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  // ---- PESTAÑAS CV ----
  $$('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      $$('.tab-content').forEach(c => c.classList.remove('active-tab'));
      $$('.tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById(tab)?.classList.add('active-tab');
      btn.classList.add('active');
    });
  });

  // ---- MODALES ----
  const rectorModal = $('#rectorModal');
  const cvModal = $('#cvModal');
  const pdfModal = $('#pdfModal');
  const pdfIframe = $('#pdfIframe');
  const pdfModalTitle = $('#pdfModalTitle');
  const pdfDownloadLink = $('#pdfDownloadLink');
  let currentPdfTitleKey = '';

  $('#openRectorModalBtn')?.addEventListener('click', () => openModal(rectorModal));
  $('#closeModalBtn')?.addEventListener('click', () => closeModal(rectorModal));
  $('#openCvModalBtn')?.addEventListener('click', () => openModal(cvModal));
  $('#closeCvModalBtn')?.addEventListener('click', () => closeModal(cvModal));
  $('#closePdfModalBtn')?.addEventListener('click', closePdfModal);
  $('#closePdfModalBtn2')?.addEventListener('click', closePdfModal);

  function openModal(modal){
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal){
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      $$('.modal-overlay').forEach(m => m.classList.remove('active'));
      document.body.style.overflow = '';
      if (e.target === pdfModal) {
        setTimeout(() => { if (pdfIframe) pdfIframe.src = ''; }, 300);
      }
    }
  });

  function verPDF(rutaPDF, titulo) {
    if (!pdfModal || !pdfIframe || !pdfDownloadLink) return;
    currentPdfTitleKey = titulo;
    if (pdfModalTitle) {
      pdfModalTitle.innerHTML = `<i class="fas fa-file-pdf"></i> ${window.t ? window.t(titulo) : titulo}`;
    }
    pdfIframe.src = rutaPDF;
    pdfDownloadLink.href = rutaPDF;
    openModal(pdfModal);
  }

  function verPDFSpread(rutaPDF, titulo) { verPDF(rutaPDF, titulo); }

  function closePdfModal() {
    closeModal(pdfModal);
    setTimeout(() => { if (pdfIframe) pdfIframe.src = ''; }, 300);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $$('.modal-overlay.active').forEach(closeModal);
      if (pdfModal?.classList.contains('active')) closePdfModal();
    }
  });

  // ---- COPIAR CONTACTO ----
  function showToast() {
    const toast = $('#copyToast');
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast();
  }

  $$('.contact-item-modern[data-contacto]').forEach(item => {
    const copyBtn = $('.contact-copy-modern', item);
    if (!copyBtn) return;

    copyBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const textoACopiar = item.getAttribute('data-contacto');
      if (!textoACopiar) return;

      const originalHTML = copyBtn.innerHTML;
      const setDone = () => {
        showToast();
        copyBtn.innerHTML = `<i class="fas fa-check"></i><span>${window.t ? window.t('Copiado!') : 'Copiado!'}</span>`;
        setTimeout(() => { copyBtn.innerHTML = originalHTML; }, 1500);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textoACopiar).then(setDone).catch(() => {
          fallbackCopy(textoACopiar);
          setDone();
        });
      } else {
        fallbackCopy(textoACopiar);
        setDone();
      }
    });
  });

  // ---- BOTÓN FLOTANTE - SECCIÓN ACTIVA ----
  const floatingItems = $$('.floating-item');
  const sections = $$('section[id]');

  function highlightActiveSection() {
    const scrollPosition = window.scrollY + 150;
    let activeSection = null;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection = section.getAttribute('id');
      }
    });

    floatingItems.forEach(item => item.classList.remove('active'));
    if (activeSection) {
      document.querySelector(`.floating-item[href="#${activeSection}"]`)?.classList.add('active');
    }
  }

  window.addEventListener('scroll', highlightActiveSection, { passive:true });
  highlightActiveSection();

  floatingItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ---- REVEAL ON SCROLL ----
  const revealTargets = $$('.reveal, .about-card, .section-header, .award-card, .cv-item, .skills-category, .project-panel, .cert-row, .contact-item-modern, .contact-footer');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // ---- PARALLAX HERO SUTIL ----
  const heroBg = $('.hero-bg');
  const heroCard = $('.hero-card');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (heroBg && y < window.innerHeight) {
      heroBg.style.transform = `scale(1.04) translateY(${y * 0.05}px)`;
    }
    if (heroCard && y < window.innerHeight) {
      heroCard.style.transform = `translateY(${Math.min(y * 0.03, 16)}px)`;
    }
  }, { passive:true });

  // ---- ACTUALIZAR TITULO DEL PDF AL CAMBIAR IDIOMA ----
  window.addEventListener('portfolioLanguageChanged', () => {
    if (currentPdfTitleKey && pdfModalTitle) {
      pdfModalTitle.innerHTML = `<i class="fas fa-file-pdf"></i> ${window.t ? window.t(currentPdfTitleKey) : currentPdfTitleKey}`;
    }
  });

  // ---- ACCESOS DIRECTOS PDFs ----
  $('#verPdfNotaBtn')?.addEventListener('click', () => window.open('pdfs/nota_rectorado.pdf', '_blank'));
  $('#verPdfCvBtn')?.addEventListener('click', () => window.open('pdfs/cv_completo.pdf', '_blank'));

  window.verPDF = verPDF;
  window.verPDFSpread = verPDFSpread;

  // ---- REGLA DE ESCALA: PROGRESO DE SCROLL ----
  const rulerFill = $('#scrollRulerFill');
  function updateScrollRuler() {
    if (!rulerFill) return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    rulerFill.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateScrollRuler, { passive: true });
  window.addEventListener('resize', updateScrollRuler);
  updateScrollRuler();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- ESCUADRAS DE REGISTRO + BARRIDO TIPO PLANO ----
  // Se inyectan por JS para no repetir el mismo par de <span> a mano
  // en cada una de las tarjetas del portfolio, premios, certificados, etc.
  const blueprintTargets = $$('.project-panel, .award-card, .cert-row, .skills-category, .contact-item-modern, .hero-card, .avatar-frame, .architect-pill');
  blueprintTargets.forEach(el => {
    if (!el.querySelector('.corner-ticks')) {
      const ticks = document.createElement('span');
      ticks.className = 'corner-ticks';
      ticks.setAttribute('aria-hidden', 'true');
      el.appendChild(ticks);
    }
    if (!el.querySelector('.blueprint-sweep')) {
      const sweep = document.createElement('span');
      sweep.className = 'blueprint-sweep';
      sweep.setAttribute('aria-hidden', 'true');
      el.appendChild(sweep);
    }
  });

  // ---- TILT SUAVE TIPO LÁMINA TÉCNICA ----
  if (!prefersReducedMotion) {
    const tiltTargets = $$('.project-panel, .hero-card, .avatar-frame');
    tiltTargets.forEach(el => {
      el.setAttribute('data-tilt', '');
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-8px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
})();
