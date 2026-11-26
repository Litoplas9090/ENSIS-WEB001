/**
 * ENSIS SECURITY LTDA - Sección Metodología ENSIS & Brochure Corporativo 2026
 * Datos oficiales extraídos del Brochure Corporativo 2026 de ENSIS SECURITY LTDA.
 */
(function () {
  const PILLARS = [
    {
      title: 'Prevención',
      desc: 'Anticipamos riesgos para evitar incidentes.'
    },
    {
      title: 'Supervisión',
      desc: 'Seguimiento operativo constante con tecnología de apoyo.'
    },
    {
      title: 'Control',
      desc: 'Procesos y protocolos para una operación segura.'
    },
    {
      title: 'Respuesta',
      desc: 'Acción inmediata y efectiva ante cualquier evento.'
    }
  ];

  const STEPS = [
    {
      num: '01',
      title: 'Diagnóstico integral del riesgo',
      desc: 'Levantamos información, identificamos amenazas, vulnerabilidades y condiciones críticas del entorno.'
    },
    {
      num: '02',
      title: 'Diseño de la solución',
      desc: 'Definimos el esquema operativo, el soporte tecnológico y los protocolos de acuerdo con la necesidad del cliente.'
    },
    {
      num: '03',
      title: 'Implementación profesional',
      desc: 'Ponemos en marcha el servicio con personal capacitado, estándares claros e inducción operativa.'
    },
    {
      num: '04',
      title: 'Supervisión y control',
      desc: 'Verificamos el cumplimiento mediante supervisión operativa, indicadores y seguimiento permanente.'
    },
    {
      num: '05',
      title: 'Mejora continua',
      desc: 'Analizamos resultados, corregimos desviaciones y optimizamos el sistema de protección.'
    }
  ];

  const CAPABILITIES = [
    'Guardia armada para activos críticos',
    'Guardia sin arma preventiva y de recepción',
    'Puestos de control de visitantes y proveedores',
    'Rondas programadas y supervisión operativa',
    'Alertas directas al celular y visualización remota',
    'Evidencia digital, trazabilidad y reportes'
  ];

  const GALLERY = [
    {
      id: 'fisica',
      label: 'Seguridad Física Profesional',
      caption: 'Guardia armada, guardia sin arma, puestos de control, rondas y análisis de riesgos.',
      image: './images/brochure/seguridad-fisica-2026.jpg',
      alt: 'Brochure ENSIS SECURITY LTDA 2026 - Seguridad Física Profesional'
    },
    {
      id: 'metodologia',
      label: 'La Metodología ENSIS',
      caption: 'Proceso preventivo, medible y en mejora continua en 5 fases estructuradas.',
      image: './images/brochure/metodologia-ensis-2026.jpg',
      alt: 'Brochure ENSIS SECURITY LTDA 2026 - Metodología ENSIS en 5 pasos'
    },
    {
      id: 'sectores',
      label: 'Equipo y Sectores 2026',
      caption: 'Industrias, hospitales, centros comerciales, educación, condominios, banca, construcción y logística.',
      image: './images/brochure/sectores-equipo-2026.jpg',
      alt: 'Brochure ENSIS SECURITY LTDA 2026 - Equipo operativo y sectores atendidos'
    }
  ];

  function createLightbox() {
    const dialog = document.createElement('dialog');
    dialog.id = 'ensis-brochure-lightbox';
    dialog.className = 'brochure-lightbox';
    dialog.setAttribute('closedby', 'any');
    dialog.setAttribute('aria-labelledby', 'brochure-lightbox-title');

    dialog.innerHTML = `
      <div class="brochure-lightbox-head">
        <h1 id="brochure-lightbox-title" class="brochure-lightbox-title"></h1>
        <form method="dialog" style="margin:0;">
          <button type="submit" class="legal-modal-close" aria-label="Cerrar vista ampliada" autofocus>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </form>
      </div>
      <div class="brochure-lightbox-body">
        <img id="brochure-lightbox-img" src="" alt="" />
        <p id="brochure-lightbox-caption" class="brochure-lightbox-caption"></p>
      </div>
    `;

    dialog.addEventListener('close', () => {
      dialog.returnValue = '';
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e) => {
        const r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      let pressedOutside = false;
      dialog.addEventListener('pointerdown', (e) => { pressedOutside = outside(e); });
      dialog.addEventListener('pointerup', (e) => { if (pressedOutside && outside(e)) dialog.close(); });
    }

    return dialog;
  }

  function createBrochureSection() {
    const section = document.createElement('section');
    section.id = 'metodologia';
    section.setAttribute('aria-labelledby', 'metodologia-heading');
    section.className = 'py-20 lg:py-28';

    const pillarsHtml = PILLARS.map(
      (p) => `
      <div class="brochure-pillar">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>`
    ).join('');

    const stepsHtml = STEPS.map(
      (st) => `
      <article class="brochure-step">
        <span class="brochure-step-num">${st.num}</span>
        <h3>${st.title}</h3>
        <p>${st.desc}</p>
      </article>`
    ).join('');

    const capsHtml = CAPABILITIES.map((c) => `<li>${c}</li>`).join('');

    const galleryHtml = GALLERY.map(
      (g) => `
      <article class="brochure-slide-card">
        <img src="${g.image}" alt="${g.alt}" loading="lazy" />
        <div class="brochure-slide-info">
          <h3>
            <button type="button" class="brochure-trigger" data-slide-id="${g.id}">
              ${g.label}
            </button>
          </h3>
          <p>${g.caption}</p>
        </div>
      </article>`
    ).join('');

    const waUrl =
      'https://wa.me/573102927152?text=' +
      encodeURIComponent(
        'Hola ENSIS SECURITY LTDA, quiero solicitar un diagnóstico estratégico de seguridad para mi organización.'
      );

    section.innerHTML = `
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-12">
          <span class="inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FFC107]">
            Brochure Corporativo 2026 · ENSIS SECURITY LTDA
          </span>
          <h2 id="metodologia-heading" class="mt-4 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white" style="font-family: 'Montserrat', sans-serif;">
            La Metodología <span class="text-[#FFC107]">ENSIS</span>
          </h2>
          <p class="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            <strong>Seguridad hoy, tranquilidad siempre.</strong> Un proceso preventivo, medible y en mejora continua para proteger personas, activos e información.
          </p>
        </div>

        <div class="brochure-pillars-grid mb-10">
          ${pillarsHtml}
        </div>

        <div class="brochure-steps-grid mb-12">
          ${stepsHtml}
        </div>

        <div class="brochure-ops-bar mb-12">
          <div class="brochure-ops-caps">
            <h3>Capacidades Operativas 2026</h3>
            <ul>${capsHtml}</ul>
          </div>
          <div class="brochure-ops-lead">
            <span class="brochure-ops-tag">Coordinación de Operaciones</span>
            <p class="brochure-ops-name">Rafael Enrique Hoyos Bermejo</p>
            <p class="brochure-ops-sub">ENSIS SECURITY LTDA · Confianza operativa para proteger lo que más importa.</p>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="news-modal-source-btn">
              Solicitar diagnóstico estratégico
            </a>
          </div>
        </div>

        <div class="mb-6 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#FFC107]">Presentación Oficial 2026</span>
            <h3 class="mt-1 text-xl sm:text-2xl font-bold text-white" style="font-family: 'Montserrat', sans-serif;">
              Conoce nuestro modelo en detalle
            </h3>
          </div>
          <span class="text-xs text-slate-400">Haz clic en cualquier lámina para ampliarla</span>
        </div>

        <div class="brochure-gallery-grid">
          ${galleryHtml}
        </div>
      </div>
    `;

    const lightbox = createLightbox();
    section.appendChild(lightbox);

    section.querySelectorAll('button.brochure-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = GALLERY.find((g) => g.id === btn.getAttribute('data-slide-id'));
        if (!item) return;
        lightbox.querySelector('#brochure-lightbox-title').textContent = item.label;
        const img = lightbox.querySelector('#brochure-lightbox-img');
        img.src = item.image;
        img.alt = item.alt;
        lightbox.querySelector('#brochure-lightbox-caption').textContent = item.caption;
        lightbox.showModal();
      });
    });

    return section;
  }

  function mountBrochureSection() {
    if (document.getElementById('metodologia')) return true;
    const anchor = document.getElementById('sectores') || document.getElementById('noticias');
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(createBrochureSection(), anchor);
      return true;
    }
    return false;
  }

  function init() {
    if (mountBrochureSection()) return;
    const observer = new MutationObserver(() => {
      if (mountBrochureSection()) {
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
