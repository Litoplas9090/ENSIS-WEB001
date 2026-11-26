/**
 * ENSIS SECURITY LTDA - Sección La Metodología ENSIS (4 Pilares + 5 Pasos)
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

    section.innerHTML = `
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-12">
          <h2 id="metodologia-heading" class="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white" style="font-family: 'Montserrat', sans-serif;">
            La Metodología <span class="text-[#FFC107]">ENSIS</span>
          </h2>
          <p class="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            <strong>Seguridad hoy, tranquilidad siempre.</strong> Un proceso preventivo, medible y en mejora continua para proteger personas, activos e información.
          </p>
        </div>

        <div class="brochure-pillars-grid mb-10">
          ${pillarsHtml}
        </div>

        <div class="brochure-steps-grid">
          ${stepsHtml}
        </div>
      </div>
    `;

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

  function mountTeamCarousel() {
    const baseImg = document.querySelector('#nosotros img[src*="team.jpg"], #quienes-somos img[src*="team.jpg"]');
    if (!baseImg || baseImg.dataset.carouselInit === '1') return Boolean(baseImg);
    baseImg.dataset.carouselInit = '1';

    const parent = baseImg.parentElement;
    if (!parent) return true;

    const slides = [
      {
        src: baseImg.getAttribute('src') || './images/team.jpg?v=3',
        alt: 'Vigilante profesional de ENSIS SECURITY LTDA con radio de comunicación',
        pos: 'center 20%'
      },
      {
        src: './images/team-2.jpg',
        alt: 'Personal de seguridad supervisando cámaras locales en puesto de control',
        pos: 'center center'
      },
      {
        src: './images/team-3.jpg',
        alt: 'Guarda de ENSIS SECURITY LTDA realizando control de acceso peatonal',
        pos: 'center 15%'
      },
      {
        src: './images/team-4.jpg',
        alt: 'Inspección vehicular y control en parqueadero por guarda de ENSIS SECURITY',
        pos: 'center 20%'
      },
      {
        src: './images/team-5.jpg',
        alt: 'Ronda preventiva en parqueadero por personal uniformado de ENSIS SECURITY',
        pos: 'center 22%'
      }
    ];

    // Wrap the base image in a fixed-ratio relative stage so all 5 photos crossfade with zero layout shift
    const stage = document.createElement('div');
    stage.className = 'team-carousel-stage';
    stage.setAttribute('aria-roledescription', 'carrusel');
    stage.setAttribute('aria-label', 'Galería de personal operativo de ENSIS SECURITY LTDA');

    baseImg.parentNode.insertBefore(stage, baseImg);
    baseImg.remove();

    const imgEls = slides.map((sl, idx) => {
      const img = document.createElement('img');
      img.src = sl.src;
      img.alt = sl.alt;
      img.className = 'team-carousel-img' + (idx === 0 ? ' is-active' : '');
      img.style.objectPosition = sl.pos;
      if (idx > 0) img.loading = 'eager';
      stage.appendChild(img);
      return img;
    });

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'team-carousel-dots';
    dotsWrap.setAttribute('role', 'tablist');
    dotsWrap.setAttribute('aria-label', 'Seleccionar fotografía del equipo');

    let current = 0;
    let timer = null;

    const dotBtns = slides.map((_, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'team-carousel-dot' + (idx === 0 ? ' is-active' : '');
      btn.setAttribute('aria-label', `Ver foto ${idx + 1} de ${slides.length}`);
      btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      btn.addEventListener('click', () => {
        goTo(idx);
        restartTimer();
      });
      dotsWrap.appendChild(btn);
      return btn;
    });
    stage.appendChild(dotsWrap);

    function goTo(index) {
      imgEls[current].classList.remove('is-active');
      dotBtns[current].classList.remove('is-active');
      dotBtns[current].setAttribute('aria-selected', 'false');
      current = (index + slides.length) % slides.length;
      imgEls[current].classList.add('is-active');
      dotBtns[current].classList.add('is-active');
      dotBtns[current].setAttribute('aria-selected', 'true');
    }

    function startTimer() {
      if (timer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      timer = setInterval(() => goTo(current + 1), 3000);
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function restartTimer() {
      stopTimer();
      startTimer();
    }

    stage.addEventListener('mouseenter', stopTimer);
    stage.addEventListener('mouseleave', startTimer);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopTimer();
      else startTimer();
    });

    startTimer();
    return true;
  }

  function init() {
    const ok1 = mountBrochureSection();
    const ok2 = mountTeamCarousel();
    if (ok1 && ok2) return;
    const observer = new MutationObserver(() => {
      const a = mountBrochureSection();
      const b = mountTeamCarousel();
      if (a && b) {
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
