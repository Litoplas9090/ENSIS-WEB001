/**
 * ENSIS Security - Sección de Noticias del Sector (Seguridad Física y Electrónica)
 * Artículos reales, verificados (HTTP 200) y 100% en español de Security Fair Colombia (ESS+) y Tecnoseguro.
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
      imageAlt: 'Cámara de videovigilancia IP con inteligencia artificial instalada en fachada corporativa',
      title: 'Inteligencia de video e IA aplicada a la operación en LATAM',
      shortSummary:
        'Milestone XPerience Days LATAM 2026 presenta avances en analítica de video y plataformas abiertas.',
      fullSummary:
        'En el marco de XPerience Days LATAM 2026, Milestone Systems mostró cómo la inteligencia artificial y la gestión de video de plataforma abierta transforman las centrales de monitoreo en operaciones proactivas con alertas más precisas.',
      keyPoints: [
        'Analítica de video basada en IA integrada a la operación diaria.',
        'Plataformas abiertas que facilitan conectar cámaras y sensores de distintos fabricantes.',
        'Mayor agilidad en la verificación de eventos y toma de decisiones.'
      ],
      source: 'Tecnoseguro',
      url: 'https://www.tecnoseguro.com/noticias/cctv/milestone-xperience-days-ia-video'
    },
    {
      id: 'access-control',
      category: 'acceso',
      categoryLabel: 'Control de Acceso',
      badgeClass: '',
      date: '2026',
      image: './images/news/news-access-control.jpg',
      imageAlt: 'Control de acceso peatonal moderno con tecnología biométrica en entrada corporativa',
      title: 'Pasillos electrónicos Speed Gate para control de acceso peatonal',
      shortSummary:
        'CAME Özak integra velocidad, seguridad y eficiencia en accesos corporativos de alto tráfico.',
      fullSummary:
        'Los pasillos electrónicos Speed Gate PG 04 y HG 04 de CAME Özak integran sensores ópticos de precisión, diseño moderno y control ágil de flujo peatonal para reforzar la seguridad en edificios corporativos e institucionales.',
      keyPoints: [
        'Control de paso rápido y seguro que evita accesos no autorizados (tailgating).',
        'Integración directa con lectores biométricos, tarjetas o credenciales móviles.',
        'Alta eficiencia operativa para recepciones con gran volumen de visitantes.'
      ],
      source: 'Tecnoseguro',
      url: 'https://www.tecnoseguro.com/noticias/control-de-acceso/came-ozak-speed-gate'
    },
    {
      id: 'unified-platform',
      category: 'fisica',
      categoryLabel: 'Seguridad Física',
      badgeClass: 'news-badge--fisica',
      date: '2026',
      image: './images/news/news-unified-platform.jpg',
      imageAlt: 'Centro de control de seguridad con plataforma unificada de CCTV, accesos y alarmas',
      title: 'Plataforma abierta ODISEE para seguridad física en entornos críticos',
      shortSummary:
        'DORLET lanza en Latinoamérica un sistema unificado que centraliza accesos, intrusión y video.',
      fullSummary:
        'DORLET presentó en Latinoamérica ODISEE, una plataforma abierta diseñada para integrar y centralizar la gestión de la seguridad física en infraestructuras críticas, conectando control de accesos, videovigilancia y alarmas en un solo panel.',
      keyPoints: [
        'Gestión unificada de subsistemas de seguridad física desde una sola interfaz.',
        'Arquitectura abierta preparada para crecer según las necesidades de cada sede.',
        'Mayor trazabilidad y respuesta coordinada ante incidentes críticos.'
      ],
      source: 'Tecnoseguro',
      url: 'https://www.tecnoseguro.com/noticias/integracion/dorlet-odisee-seguridad-integracion'
    },
    {
      id: 'hybrid-guard',
      category: 'fisica',
      categoryLabel: 'Seguridad Física',
      badgeClass: 'news-badge--fisica',
      date: '2026',
      image: './images/news/news-hybrid-guard.jpg',
      imageAlt: 'Personal de seguridad en instalaciones modernas aplicando integración tecnológica',
      title: 'ESS+ 2026 en Colombia destaca la integración tecnológica global',
      shortSummary:
        'La Feria Internacional de Seguridad reunió en Bogotá soluciones integrales para proteger personas y activos.',
      fullSummary:
        'La Feria Internacional de Seguridad ESS+ cerró su edición 2026 en Corferias Bogotá bajo el concepto “Integración de Tecnologías Globales”, reuniendo a especialistas y empresas en torno a soluciones reales para la protección de personas, activos y operaciones.',
      keyPoints: [
        'Convergencia entre vigilancia física profesional y tecnología electrónica avanzada.',
        'Soluciones adaptadas a las necesidades operativas de empresas en Colombia.',
        'Enfoque en prevención, respuesta rápida y continuidad del negocio.'
      ],
      source: 'Security Fair Colombia',
      url: 'https://www.securityfaircolombia.com/es/noticia/7763/ess+_2026_cerro_una_edicion_marcada_por_la_integracion_tecnologica_y_las_oportunidades'
    },
    {
      id: 'iot-cybersecurity',
      category: 'electronica',
      categoryLabel: 'Seguridad Electrónica',
      badgeClass: '',
      date: '2026',
      image: './images/news/news-iot-cybersecurity.jpg',
      imageAlt: 'Infraestructura de cámaras IP y seguridad bancaria de última generación',
      title: 'Más de 5.400 cámaras con IA fortalecen al Banco Agrario en Colombia',
      shortSummary:
        'Un moderno Centro de Mando y Control eleva la videovigilancia bancaria a nivel nacional.',
      fullSummary:
        'El Banco Agrario de Colombia modernizó su seguridad electrónica mediante un Centro de Mando y Control equipado con más de 5.400 cámaras de última generación e inteligencia artificial, consolidando un referente de protección bancaria en el país.',
      keyPoints: [
        'Despliegue nacional de más de 5.400 cámaras conectadas a un centro de mando.',
        'Integración de analítica inteligente para detección oportuna de riesgos.',
        'Supervisión centralizada que eleva los estándares de seguridad institucional.'
      ],
      source: 'Security Fair Colombia',
      url: 'https://www.securityfaircolombia.com/es/noticia/7592/___bolide_technology_fortalece_la_seguridad_del_banco_agrario_de_colombia_con_soluciones_de_vanguardia'
    },
    {
      id: 'cloud-analytics',
      category: 'electronica',
      categoryLabel: 'Analítica y Nube',
      badgeClass: '',
      date: '2026',
      image: './images/news/news-cloud-analytics.jpg',
      imageAlt: 'Complejo industrial y empresarial con videovigilancia centralizada en la nube',
      title: 'Seguridad centralizada en parques industriales de alto tráfico',
      shortSummary:
        'Cómo gestionar extensos perímetros y múltiples sedes desde una sola plataforma inteligente.',
      fullSummary:
        'Los parques industriales requieren supervisar amplios perímetros, circulación constante de vehículos y múltiples empresas al mismo tiempo. El caso de FINSA con Verkada demuestra cómo centralizar la seguridad en la nube agiliza el control multisitio sin depender de sistemas aislados.',
      keyPoints: [
        'Supervisión centralizada de múltiples sedes y perímetros extensos.',
        'Control ágil del flujo vehicular y continuidad operativa ante incidentes.',
        'Administración remota más simple con tecnología en la nube.'
      ],
      source: 'Security Fair Colombia',
      url: 'https://www.securityfaircolombia.com/es/noticia/7691/finsa_centraliza_su_seguridad_con_verkada'
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
            <span id="news-modal-source-text">Leer noticia completa</span>
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

    dialog.addEventListener('close', () => {
      dialog.returnValue = '';
    });

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
    sourceText.textContent = `Leer artículo en ${item.source}`;

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
            Noticias reales en español de Security Fair Colombia (ESS+) y Tecnoseguro. Haz clic en cualquiera para ver el detalle.
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

    section.querySelectorAll('button.card-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-news-id');
        const item = NEWS_ITEMS.find((n) => n.id === id);
        if (item) openNewsModal(dialog, item);
      });
    });

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
