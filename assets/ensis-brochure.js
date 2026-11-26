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
