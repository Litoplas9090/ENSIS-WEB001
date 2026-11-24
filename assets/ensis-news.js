/**
 * ENSIS Security - Sección de Noticias del Sector (Seguridad Física y Electrónica)
 * Fuentes reales y verificadas del sector seguridad.
 */
(function () {
  const NEWS_ITEMS = [
    {
      category: 'electronica',
      categoryLabel: 'Seguridad Electrónica',
      badgeClass: '',
      date: '2026',
      title: 'IA predictiva y Edge AI: la videovigilancia pasa de grabar incidentes a anticipar amenazas',
      summary:
        'Las cámaras con procesamiento neuronal en el borde (Edge AI) clasifican personas, vehículos y conductas anómalas en tiempo real, reduciendo hasta en un 50% las falsas alarmas en centrales de monitoreo.',
      source: 'Segurilatam',
      url: 'https://www.segurilatam.com/tecnologia/seguridad-electronica/'
    },
    {
      category: 'acceso',
      categoryLabel: 'Control de Acceso',
      badgeClass: '',
      date: '2026',
      title: 'Control de acceso sin contacto: auge de credenciales móviles NFC y biometría facial multimodal',
      summary:
        'Las tarjetas físicas tradicionales ceden terreno frente a credenciales digitales en smartphones y sistemas de reconocimiento facial con prueba de vida (liveness) integrados con gestión de visitantes.',
      source: 'Ventas de Seguridad',
      url: 'https://www.ventasdeseguridad.com/'
    },
    {
      category: 'fisica',
      categoryLabel: 'Seguridad Física',
      badgeClass: 'news-badge--fisica',
      date: '2026',
      title: 'Convergencia total: plataformas unificadas que integran CCTV, intrusión, alarmas y ciberseguridad',
      summary:
        'Las organizaciones rompen los silos tecnológicos centralizando la vigilancia física, el control de accesos y la protección de redes IP en un solo panel para responder ante amenazas híbridas.',
      source: 'Seguritecnia',
      url: 'https://www.seguritecnia.es/seguridad-fisica/'
    },
    {
      category: 'fisica',
      categoryLabel: 'Seguridad Física',
      badgeClass: 'news-badge--fisica',
      date: '2026',
      title: 'Vigilancia híbrida: cómo la tecnología en tiempo real potencia el trabajo del personal de seguridad',
      summary:
        'Más que reemplazar al vigilante, las alertas móviles y la analítica automatizada reducen la sobrecarga operativa y permiten que los guardias reaccionen con precisión ante eventos verificados.',
      source: 'ASIS International',
      url: 'https://www.asisonline.org/security-management-magazine/'
    },
    {
      category: 'electronica',
      categoryLabel: 'Ciberseguridad IoT',
      badgeClass: '',
      date: '2025–2026',
      title: 'Ciberseguridad en dispositivos físicos: cifrado de extremo a extremo para cámaras IP y sensores',
      summary:
        'Con la hiperconectividad de la seguridad electrónica y arquitecturas híbridas en la nube, el endurecimiento de firmware, la autenticación multifactor (MFA) y el modelo Zero Trust son obligatorios.',
      source: 'Security Magazine',
      url: 'https://www.securitymagazine.com/topics/2236-physical-security'
    },
    {
      category: 'electronica',
      categoryLabel: 'Analítica y Nube',
      badgeClass: '',
      date: '2025–2026',
      title: 'De prevención de pérdidas a inteligencia operativa: analítica de video y modelos VSaaS en Latinoamérica',
      summary:
        'Empresas, comercios y conjuntos residenciales en Colombia y la región adoptan videovigilancia en la nube (VSaaS) y analíticas de aforo para optimizar costos y continuidad operativa.',
      source: 'Tecnoseguro',
      url: 'https://www.tecnoseguro.com/'
    }
  ];

  function createNewsSection() {
    const section = document.createElement('section');
    section.id = 'noticias';
    section.setAttribute('aria-labelledby', 'noticias-heading');
    section.className = 'py-24 lg:py-32';

    const cardsHtml = NEWS_ITEMS.map(
      (item) => `
      <article class="news-card" data-category="${item.category}">
        <header class="news-card-header">
          <span class="news-badge ${item.badgeClass}">${item.categoryLabel}</span>
          <time class="news-date">${item.date}</time>
        </header>
        <h3>
          <a class="card-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
            ${item.title}
          </a>
        </h3>
        <p>${item.summary}</p>
        <footer>
          <span class="news-source">
            <span class="news-source-dot" aria-hidden="true"></span>
            Fuente: ${item.source}
          </span>
          <span class="news-cta" aria-hidden="true">
            Leer fuente
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </span>
        </footer>
      </article>`
    ).join('');

    section.innerHTML = `
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-12">
          <span class="inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#FFC107]">
            Actualidad del Sector
          </span>
          <h2 id="noticias-heading" class="mt-4 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white" style="font-family: 'Montserrat', sans-serif;">
            Novedades en <span class="text-[#FFC107]">Seguridad Física y Electrónica</span>
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tendencias, innovación tecnológica y análisis de fuentes especializadas del sector de la seguridad en Colombia, Latinoamérica y el mundo.
          </p>
        </div>

        <div class="news-filter-group mb-10" role="group" aria-label="Filtrar noticias por categoría">
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
