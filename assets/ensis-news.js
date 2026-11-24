/**
 * ENSIS Security - Sección de Noticias del Sector (Seguridad Física y Electrónica)
 * Tarjetas resumidas con imagen editorial + modal nativo <dialog> con información completa y fuente real.
 */
(function () {
  const NEWS_ITEMS = [
    {
      id: 'edge-ai',
      category: 'electronica',
      categoryLabel: 'Seguridad Electrónica',
      badgeClass: '',
      date: '2026',
      image: './images/news/news-edge-ai.jpg',
      imageAlt: 'Cámara de videovigilancia IP con inteligencia artificial Edge AI instalada en fachada corporativa',
      title: 'IA predictiva y Edge AI en videovigilancia inteligente',
      shortSummary:
        'Las cámaras analizan escenas en tiempo real y reducen hasta un 50% las falsas alarmas.',
      fullSummary:
        'La videovigilancia ha evolucionado de la grabación pasiva al análisis activo en el borde (Edge AI). Gracias a procesadores neuronales integrados directamente en las cámaras, los sistemas clasifican personas, vehículos y conductas anómalas al instante sin saturar la red ni depender únicamente de servidores externos.',
      keyPoints: [
        'Filtrado inteligente que descarta sombras, clima y animales antes de alertar.',
        'Detección temprana de merodeo, cruce de perímetros y comportamientos inusuales.',
        'Búsqueda rápida de eventos mediante lenguaje natural para equipos de monitoreo.'
      ],
      source: 'Segurilatam',
      url: 'https://www.segurilatam.com/'
    },
    {
      id: 'access-control',
      category: 'acceso',
      categoryLabel: 'Control de Acceso',
      badgeClass: '',
      date: '2026',
      image: './images/news/news-access-control.jpg',
      imageAlt: 'Control de acceso biométrico y credenciales móviles NFC en entrada corporativa',
      title: 'Control de acceso sin contacto: biometría y móvil NFC',
      shortSummary:
        'Las credenciales digitales y el reconocimiento facial reemplazan a las tarjetas físicas.',
      fullSummary:
        'Edificios corporativos, industrias y conjuntos residenciales están migrando rápidamente hacia sistemas de acceso sin contacto. El uso de credenciales cifradas en smartphones (NFC/Bluetooth) y lectores faciales multimodales agiliza el ingreso y eleva el nivel de trazabilidad.',
      keyPoints: [
        'Reconocimiento facial con prueba de vida (liveness) que evita suplantaciones.',
        'Gestión centralizada de permisos temporales para visitantes y contratistas.',
        'Integración nativa con videovigilancia (VMS) para verificar cada ingreso.'
      ],
      source: 'Ventas de Seguridad',
      url: 'https://www.ventasdeseguridad.com/'
    },
    {
      id: 'unified-platform',
      category: 'fisica',
      categoryLabel: 'Seguridad Física',
      badgeClass: 'news-badge--fisica',
      date: '2026',
      image: './images/news/news-unified-platform.jpg',
      imageAlt: 'Centro de control de seguridad con plataforma unificada de CCTV, accesos y alarmas',
      title: 'Plataformas unificadas: CCTV, alarmas y ciberseguridad',
      shortSummary:
        'Un solo panel centraliza vigilancia física, control de acceso y alertas críticas.',
      fullSummary:
        'La tendencia dominante en seguridad física corporativa es eliminar los sistemas aislados. Las plataformas unificadas combinan videovigilancia, intrusión, control de accesos y monitoreo de red en una sola interfaz para responder con rapidez frente a incidentes físicos y digitales.',
      keyPoints: [
        'Visibilidad completa de múltiples sedes desde un único centro de control.',
        'Protocolos automatizados que correlacionan alarmas con video en vivo.',
        'Alineación operativa entre seguridad física y áreas de tecnología (TI).'
      ],
      source: 'Seguritecnia',
      url: 'https://www.seguritecnia.es/'
    },
    {
      id: 'hybrid-guard',
      category: 'fisica',
      categoryLabel: 'Seguridad Física',
      badgeClass: 'news-badge--fisica',
      date: '2026',
      image: './images/news/news-hybrid-guard.jpg',
      imageAlt: 'Vigilante profesional revisando alertas de seguridad en tiempo real desde un dispositivo móvil',
      title: 'Vigilancia híbrida: talento humano potenciado con alertas',
      shortSummary:
        'Las alertas móviles en tiempo real fortalecen la capacidad de reacción del vigilante.',
      fullSummary:
        'Lejos de sustituir al personal de seguridad, la tecnología moderna actúa como un multiplicador de eficiencia. Los guardias reciben notificaciones verificadas directamente en sus dispositivos móviles, reduciendo la fatiga operativa y permitiendo rondas más estratégicas.',
      keyPoints: [
        'Respuesta más ágil al priorizar incidentes reales verificados por analítica.',
        'Registro digital de rondas, novedades y reportes en tiempo real.',
        'Mejor equilibrio entre cobertura presencial y respaldo electrónico 24/7.'
      ],
      source: 'Revista Seguridad 360',
      url: 'https://revistaseguridad360.com/'
    },
    {
      id: 'iot-cybersecurity',
      category: 'electronica',
      categoryLabel: 'Ciberseguridad IoT',
      badgeClass: '',
      date: '2025–2026',
      image: './images/news/news-iot-cybersecurity.jpg',
      imageAlt: 'Cámara IP domo y equipos de red empresarial protegidos con ciberseguridad IoT',
      title: 'Ciberseguridad en cámaras IP y sensores conectados',
      shortSummary:
        'Cifrado de extremo a extremo y autenticación MFA para blindar redes de seguridad.',
      fullSummary:
        'Cada cámara IP, panel de alarma o controlador de acceso conectado a la red amplía la superficie digital de una organización. Por ello, fabricantes e integradores priorizan estándares de ciberseguridad desde el diseño para impedir accesos no autorizados o manipulaciones de video.',
      keyPoints: [
        'Cifrado avanzado en tránsito y almacenamiento para proteger grabaciones.',
        'Actualizaciones continuas de firmware y segmentación de redes de seguridad.',
        'Autenticación multifactor (MFA) y principios Zero Trust en accesos remotos.'
      ],
      source: 'Axis Newsroom (ES)',
      url: 'https://newsroom.axis.com/es-es'
    },
    {
      id: 'cloud-analytics',
      category: 'electronica',
      categoryLabel: 'Analítica y Nube',
      badgeClass: '',
      date: '2025–2026',
      image: './images/news/news-cloud-analytics.jpg',
      imageAlt: 'Complejo empresarial y comercial en Latinoamérica con infraestructura de videovigilancia en la nube',
      title: 'Videovigilancia en la nube (VSaaS) e inteligencia operativa',
      shortSummary:
        'Arquitecturas híbridas en la nube optimizan costos y aportan datos clave al negocio.',
      fullSummary:
        'En Colombia y América Latina crece la adopción de modelos híbridos y Videovigilancia como Servicio (VSaaS). Además de proteger activos, los metadatos generados por las cámaras ayudan a medir aforos, flujos de clientes y eficiencia operativa en comercios e industrias.',
      keyPoints: [
        'Menor inversión en servidores locales y escalabilidad flexible por sede.',
        'Acceso remoto seguro desde celular o navegador con respaldo en la nube.',
        'Analítica de aforos y mapas de calor que respaldan decisiones gerenciales.'
      ],
      source: 'Tecnoseguro',
      url: 'https://www.tecnoseguro.com/'
    }
  ];

  function createNewsModal() {
    const dialog = document.createElement('dialog');
    dialog.id = 'news-detail-dialog';
    dialog.className = 'news-modal';
    dialog.setAttribute('closedby', 'any');
    dialog.setAttribute('aria-labelledby', 'news-modal-title');

    dialog.innerHTML = `
      <div class="news-modal-media">
        <img id="news-modal-img" src="" alt="" />
        <form method="dialog" class="news-modal-close-form">
          <button type="submit" class="news-modal-close-btn" aria-label="Cerrar noticia" autofocus>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </form>
      </div>
      <div class="news-modal-body">
        <div class="news-modal-meta">
          <span id="news-modal-badge" class="news-badge"></span>
          <time id="news-modal-date" class="news-date"></time>
        </div>
        <h1 id="news-modal-title" class="news-modal-title"></h1>
        <p id="news-modal-summary" class="news-modal-text"></p>
        <ul id="news-modal-points" class="news-modal-points"></ul>
        <div class="news-modal-actions">
          <a id="news-modal-source-link" class="news-modal-source-btn" href="#" target="_blank" rel="noopener noreferrer">
            <span id="news-modal-source-text">Ver fuente original</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <form method="dialog" style="margin:0;">
            <button type="submit" class="news-modal-secondary-btn">Cerrar</button>
          </form>
        </div>
      </div>
    `;

    // Reset returnValue on close per modern dialog guidance
    dialog.addEventListener('close', () => {
      dialog.returnValue = '';
    });

    // Fallback light-dismiss for browsers without native closedby support (e.g. Safari)
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e) => {
        const r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      let pressedOutside = false;
      dialog.addEventListener('pointerdown', (e) => {
        pressedOutside = outside(e);
      });
      dialog.addEventListener('pointerup', (e) => {
        if (pressedOutside && outside(e)) dialog.close();
      });
    }

    return dialog;
  }

  function openNewsModal(dialog, item) {
    const img = dialog.querySelector('#news-modal-img');
    const badge = dialog.querySelector('#news-modal-badge');
    const date = dialog.querySelector('#news-modal-date');
    const title = dialog.querySelector('#news-modal-title');
    const summary = dialog.querySelector('#news-modal-summary');
    const points = dialog.querySelector('#news-modal-points');
    const link = dialog.querySelector('#news-modal-source-link');
    const sourceText = dialog.querySelector('#news-modal-source-text');

    img.src = item.image;
    img.alt = item.imageAlt;
    badge.textContent = item.categoryLabel;
    badge.className = `news-badge ${item.badgeClass}`.trim();
    date.textContent = `${item.date} · Fuente: ${item.source}`;
    title.textContent = item.title;
    summary.textContent = item.fullSummary;
    points.innerHTML = item.keyPoints.map((pt) => `<li>${pt}</li>`).join('');
    link.href = item.url;
    sourceText.textContent = `Leer en ${item.source}`;

    dialog.showModal();
  }

  function createNewsSection() {
    const section = document.createElement('section');
    section.id = 'noticias';
    section.setAttribute('aria-labelledby', 'noticias-heading');
    section.className = 'py-20 lg:py-28';

    const cardsHtml = NEWS_ITEMS.map(
      (item) => `
      <article class="news-card" data-category="${item.category}">
        <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
        <header class="news-card-header">
          <span class="news-badge ${item.badgeClass}">${item.categoryLabel}</span>
          <time class="news-date">${item.date}</time>
        </header>
        <h3>
          <button type="button" class="card-trigger" data-news-id="${item.id}">
            ${item.title}
          </button>
        </h3>
        <p>${item.shortSummary}</p>
        <footer>
          <span class="news-source">
            <span class="news-source-dot" aria-hidden="true"></span>
            ${item.source}
          </span>
          <span class="news-cta" aria-hidden="true">
            Ver más
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </footer>
      </article>`
    ).join('');

    section.innerHTML = `
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-10">
          <span class="inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FFC107]">
            Actualidad del Sector
          </span>
          <h2 id="noticias-heading" class="mt-4 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white" style="font-family: 'Montserrat', sans-serif;">
            Novedades en <span class="text-[#FFC107]">Seguridad Física y Electrónica</span>
          </h2>
          <p class="mt-3 text-base text-slate-300">
            Haz clic en cualquier noticia para ver el resumen completo y su fuente oficial.
          </p>
        </div>

        <div class="news-filter-group mb-9" role="group" aria-label="Filtrar noticias por categoría">
          <button type="button" class="news-filter-btn" data-filter="all" aria-pressed="true">Todas</button>
          <button type="button" class="news-filter-btn" data-filter="electronica" aria-pressed="false">Seguridad Electrónica</button>
          <button type="button" class="news-filter-btn" data-filter="fisica" aria-pressed="false">Seguridad Física</button>
          <button type="button" class="news-filter-btn" data-filter="acceso" aria-pressed="false">Control de Acceso</button>
        </div>

        <div class="news-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    const dialog = createNewsModal();
    section.appendChild(dialog);

    // Open modal on card trigger click
    section.querySelectorAll('button.card-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-news-id');
        const item = NEWS_ITEMS.find((n) => n.id === id);
        if (item) openNewsModal(dialog, item);
      });
    });

    // Category filtering
    const buttons = section.querySelectorAll('.news-filter-btn');
    const cards = section.querySelectorAll('.news-card');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        cards.forEach((card) => {
          const match = filter === 'all' || card.getAttribute('data-category') === filter;
          card.hidden = !match;
        });
      });
    });

    return section;
  }

  function mountNewsSection() {
    if (document.getElementById('noticias')) return true;
    const ubicacion = document.getElementById('ubicacion');
    if (ubicacion && ubicacion.parentNode) {
      ubicacion.parentNode.insertBefore(createNewsSection(), ubicacion);
      return true;
    }
    return false;
  }

  function init() {
    if (mountNewsSection()) return;
    const observer = new MutationObserver(() => {
      if (mountNewsSection()) {
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
