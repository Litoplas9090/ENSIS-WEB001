/**
 * ENSIS Security - Cumplimiento Legal y Privacidad para Colombia
 * Ley 1581 de 2012 (Habeas Data), Decreto 1377 de 2013 (Decreto 1074 de 2015),
 * Ley 1480 de 2011 (Estatuto del Consumidor), Ley 527 de 1999 y Decreto Ley 356 de 1994 (SuperVigilancia).
 */
(function () {
  const CONSENT_KEY = 'ensis_cookie_consent_v1';

  const LEGAL_DOCS = {
    datos: {
      badge: 'Ley 1581 de 2012 · Colombia',
      title: 'Política de Tratamiento de Datos Personales',
      updated: 'Actualizada: 2026 · República de Colombia',
      html: `
        <h4>1. Responsable del Tratamiento</h4>
        <p><strong>ENSIS Security</strong>, con domicilio principal en Cra. 61 #74-177, Nte. Centro Histórico, Barranquilla, Atlántico, Colombia; teléfono/WhatsApp <strong>+57 310 292 7152</strong> y correo electrónico <strong>comercial@ensissecurity.com</strong>, actúa como responsable del tratamiento de los datos personales recolectados a través de este sitio web y sus canales oficiales.</p>

        <h4>2. Marco Normativo Aplicable</h4>
        <p>Esta política se rige por el artículo 15 de la Constitución Política de Colombia, la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto 1377 de 2013</strong> (compilado en el Decreto Único Reglamentario 1074 de 2015) y las directrices de la <strong>Superintendencia de Industria y Comercio (SIC)</strong>.</p>

        <h4>3. Finalidades del Tratamiento</h4>
        <ul>
          <li>Atender solicitudes de diagnóstico gratuito, cotizaciones y asesoría comercial en seguridad física y electrónica.</li>
          <li>Contactar al titular por teléfono, WhatsApp o correo electrónico exclusivamente respecto a los servicios solicitados.</li>
          <li>Gestionar Peticiones, Quejas, Reclamos y Sugerencias (PQRS).</li>
          <li>Cumplir obligaciones contractuales, contables, fiscales y regulatorias exigidas por la ley colombiana.</li>
        </ul>

        <h4>4. Datos Sensibles y Videovigilancia</h4>
        <p>En caso de requerirse datos sensibles o biométricos en la ejecución de servicios contratados (control de acceso biométrico o circuitos cerrados de televisión), su suministro es facultativo y se regirá por autorización expresa y por la Guía para la Protección de Datos Personales en Sistemas de Videovigilancia de la SIC.</p>

        <h4>5. Derechos del Titular (Art. 8, Ley 1581 de 2012)</h4>
        <ul>
          <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a ENSIS Security.</li>
          <li><strong>Solicitar prueba</strong> de la autorización otorgada para el tratamiento.</li>
          <li><strong>Ser informado</strong> sobre el uso que se le ha dado a sus datos personales.</li>
          <li><strong>Revocar la autorización y/o solicitar la supresión</strong> del dato cuando no se respeten los principios y garantías legales.</li>
          <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.</li>
        </ul>

        <h4>6. Procedimiento y Plazos Legales de Atención</h4>
        <p>Para ejercer sus derechos, escriba a <strong>comercial@ensissecurity.com</strong> o comuníquese al <strong>310 292 7152</strong> indicando su nombre completo, documento de identidad, descripción de la solicitud y datos de contacto:</p>
        <ul>
          <li><strong>Consultas (Art. 14):</strong> serán atendidas en un término máximo de <strong>diez (10) días hábiles</strong> contados desde la fecha de recibo.</li>
          <li><strong>Reclamos (Art. 15):</strong> serán atendidos en un término máximo de <strong>quince (15) días hábiles</strong> contados a partir del día siguiente a su recibo.</li>
        </ul>
      `
    },
    privacidad: {
      badge: 'Decreto 1377 de 2013 · Art. 14',
      title: 'Aviso de Privacidad',
      updated: 'Actualizado: 2026 · República de Colombia',
      html: `
        <p><strong>ENSIS Security</strong> (Cra. 61 #74-177, Barranquilla, Atlántico · Tel. 310 292 7152 · comercial@ensissecurity.com) informa a los visitantes y usuarios de este sitio web que los datos personales suministrados voluntariamente a través de nuestros canales de contacto (WhatsApp, teléfono, correo electrónico o formularios) serán tratados de manera confidencial y segura.</p>
        <h4>Finalidad principal</h4>
        <p>Responder solicitudes de información, agendar diagnósticos gratuitos de riesgo, elaborar propuestas comerciales de seguridad física y electrónica y atender PQRS.</p>
        <h4>Carácter facultativo</h4>
        <p>El titular no está obligado a autorizar el tratamiento de datos sensibles ni de menores de edad. La navegación informativa en este sitio no exige registro previo.</p>
        <h4>Ejercicio de derechos</h4>
        <p>Usted puede conocer, actualizar, rectificar o suprimir sus datos en cualquier momento escribiendo a <strong>comercial@ensissecurity.com</strong>. La política completa está disponible de forma permanente en la sección <em>Política de Tratamiento de Datos Personales</em> de este portal.</p>
      `
    },
    terminos: {
      badge: 'Ley 527/1999 · Ley 1480/2011',
      title: 'Términos y Condiciones de Uso y Aviso Legal',
      updated: 'Actualizados: 2026 · República de Colombia',
      html: `
        <h4>1. Objeto y Carácter Informativo</h4>
        <p>El presente sitio web tiene carácter informativo y comercial sobre los servicios de seguridad física y electrónica ofrecidos por <strong>ENSIS Security</strong> en Barranquilla y el territorio colombiano. La información publicada no constituye una oferta mercantil vinculante; todo servicio, alcance, tarifa y garantía se formaliza exclusivamente mediante cotización aprobada y contrato escrito conforme a la normativa vigente (incluido el Decreto Ley 356 de 1994 cuando aplique a servicios de vigilancia y seguridad privada).</p>

        <h4>2. Propiedad Intelectual y Marcas de Terceros</h4>
        <p>Los textos, diseño, estructura, logotipo y signos distintivos de <strong>ENSIS Security</strong> están protegidos por la normativa de derechos de autor y propiedad industrial (Ley 23 de 1982 y Decisión Andina 351/486). Los logotipos y nombres comerciales de fabricantes aliados mostrados en el sitio (como Hikvision, Dahua, Ajax, ZKTeco, Suprema, Ubiquiti, DSC y Witek) son marcas registradas pertenecientes a sus respectivos propietarios y se exhiben únicamente con fines informativos sobre compatibilidad tecnológica.</p>

        <h4>3. Enlaces a Noticias y Sitios de Terceros</h4>
        <p>La sección de Noticias enlaza a publicaciones externas especializadas del sector (como ALAS, Security Fair Colombia y Tecnoseguro) con atribución de su fuente original. ENSIS Security no controla ni asume responsabilidad por la disponibilidad, exactitud, políticas de privacidad o contenidos publicados en sitios web de terceros.</p>

        <h4>4. Uso Permitido y Limitación de Responsabilidad</h4>
        <p>El usuario se compromete a hacer un uso lícito del sitio y abstenerse de realizar intentos de intrusión, raspado automatizado abusivo o suplantación. ENSIS Security implementa medidas técnicas razonables de seguridad, sin garantizar disponibilidad ininterrumpida ante fallas de terceros o fuerza mayor.</p>

        <h4>5. Legislación Aplicable y Jurisdicción</h4>
        <p>Estos términos se rigen por las leyes de la <strong>República de Colombia</strong>. Cualquier controversia se resolverá ante las autoridades competentes de Colombia.</p>
      `
    },
    cookies: {
      badge: 'Transparencia Digital',
      title: 'Política de Cookies y Almacenamiento Local',
      updated: 'Actualizada: 2026 · República de Colombia',
      html: `
        <h4>1. ¿Qué son las cookies?</h4>
        <p>Las cookies y tecnologías de almacenamiento local (como <code>localStorage</code>) son pequeños archivos que el navegador guarda en su dispositivo para recordar preferencias básicas de navegación y garantizar el correcto funcionamiento del sitio.</p>

        <h4>2. Tipos de almacenamiento utilizados en este sitio</h4>
        <ul>
          <li><strong>Técnicas y esenciales:</strong> necesarias para recordar su elección en el aviso de cookies y asegurar la correcta visualización en computador, tablet y celular.</li>
          <li><strong>Sin venta de datos:</strong> este sitio web <strong>no comercializa datos personales</strong> ni instala rastreadores publicitarios invasivos de terceros sin su autorización previa.</li>
        </ul>

        <h4>3. Gestión y revocación de preferencias</h4>
        <p>Usted puede aceptar o limitar a solo esenciales en cualquier momento mediante el enlace <em>Preferencias de cookies</em> ubicado en el pie de página, o eliminarlas directamente desde la configuración de privacidad de su navegador (Chrome, Safari, Edge, Firefox o Brave).</p>
      `
    },
    pqrs: {
      badge: 'Estatuto del Consumidor · SIC',
      title: 'PQRS y Organismos de Control (Colombia)',
      updated: 'Actualizado: 2026 · República de Colombia',
      html: `
        <h4>Canales Oficiales de Atención y PQRS</h4>
        <p>En cumplimiento de la Ley 1480 de 2011 (Estatuto del Consumidor) y la Ley 1581 de 2012, ponemos a su disposición nuestros canales oficiales para radicar Peticiones, Quejas, Reclamos, Sugerencias o solicitudes de protección de datos:</p>
        <ul>
          <li><strong>Correo electrónico:</strong> comercial@ensissecurity.com</li>
          <li><strong>Teléfono y WhatsApp:</strong> +57 310 292 7152</li>
          <li><strong>Dirección física:</strong> Cra. 61 #74-177, Nte. Centro Histórico, Barranquilla, Atlántico, Colombia.</li>
        </ul>

        <h4>Autoridades de Inspección, Vigilancia y Control</h4>
        <p>Si considera que sus derechos como consumidor o titular de datos personales no han sido atendidos adecuadamente, puede acudir ante las autoridades competentes en Colombia:</p>
        <ul>
          <li><strong>Superintendencia de Industria y Comercio (SIC):</strong> <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer" style="color:#FFC107;text-decoration:underline;">www.sic.gov.co</a> (Protección al Consumidor y Protección de Datos Personales).</li>
          <li><strong>Superintendencia de Vigilancia y Seguridad Privada (SuperVigilancia):</strong> <a href="https://www.supervigilancia.gov.co" target="_blank" rel="noopener noreferrer" style="color:#FFC107;text-decoration:underline;">www.supervigilancia.gov.co</a>.</li>
        </ul>
      `
    }
  };

  let legalDialog = null;

  function ensureLegalDialog() {
    if (legalDialog) return legalDialog;
    const dialog = document.createElement('dialog');
    dialog.id = 'ensis-legal-dialog';
    dialog.className = 'legal-modal';
    dialog.setAttribute('closedby', 'any');
    dialog.setAttribute('aria-labelledby', 'legal-modal-title');

    dialog.innerHTML = `
      <div class="legal-modal-header">
        <div>
          <span id="legal-modal-badge" class="news-badge"></span>
          <h1 id="legal-modal-title" class="legal-modal-title"></h1>
          <p id="legal-modal-updated" class="legal-modal-updated"></p>
        </div>
        <form method="dialog" style="margin:0;">
          <button type="submit" class="legal-modal-close" aria-label="Cerrar documento legal" autofocus>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </form>
      </div>
      <div id="legal-modal-content" class="legal-modal-content"></div>
      <div class="legal-modal-footer">
        <span class="legal-modal-note">Cumplimiento normativo · República de Colombia</span>
        <form method="dialog" style="margin:0;">
          <button type="submit" class="news-modal-secondary-btn">Entendido</button>
        </form>
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

    document.body.appendChild(dialog);
    legalDialog = dialog;
    return dialog;
  }

  function openLegalDoc(key) {
    const doc = LEGAL_DOCS[key];
    if (!doc) return;
    const dialog = ensureLegalDialog();
    dialog.querySelector('#legal-modal-badge').textContent = doc.badge;
    dialog.querySelector('#legal-modal-title').textContent = doc.title;
    dialog.querySelector('#legal-modal-updated').textContent = doc.updated;
    dialog.querySelector('#legal-modal-content').innerHTML = doc.html;
    dialog.querySelector('#legal-modal-content').scrollTop = 0;
    dialog.showModal();
  }

  function showCookieBanner(force) {
    try {
      if (!force && localStorage.getItem(CONSENT_KEY)) return;
    } catch (_) {}

    let banner = document.getElementById('ensis-cookie-banner');
    if (banner) {
      banner.hidden = false;
      return;
    }

    banner = document.createElement('aside');
    banner.id = 'ensis-cookie-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('aria-label', 'Aviso de cookies y privacidad');
    banner.innerHTML = `
      <div class="cookie-banner-inner">
        <p class="cookie-banner-text">
          Usamos cookies técnicas esenciales para mejorar tu experiencia en este sitio y tratamos tus datos conforme a la
          <strong>Ley 1581 de 2012 (Colombia)</strong>.
          <button type="button" class="legal-inline-link" data-legal-open="cookies">Política de Cookies</button> ·
          <button type="button" class="legal-inline-link" data-legal-open="datos">Tratamiento de Datos</button>
        </p>
        <div class="cookie-banner-actions">
          <button type="button" class="cookie-btn-secondary" data-cookie-choice="essential">Solo esenciales</button>
          <button type="button" class="cookie-btn-primary" data-cookie-choice="all">Aceptar</button>
        </div>
      </div>
    `;

    banner.querySelectorAll('[data-legal-open]').forEach((btn) => {
      btn.addEventListener('click', () => openLegalDoc(btn.getAttribute('data-legal-open')));
    });

    banner.querySelectorAll('[data-cookie-choice]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const choice = btn.getAttribute('data-cookie-choice');
        try {
          localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, date: new Date().toISOString() }));
        } catch (_) {}
        banner.hidden = true;
      });
    });

    document.body.appendChild(banner);
  }

  function injectLegalFooterAndContactNotice() {
    // 1. Add Habeas Data privacy notice inside #contacto (right below CTA buttons)
    const contacto = document.getElementById('contacto');
    if (contacto && !document.getElementById('ensis-contact-habeas')) {
      const btnRow = contacto.querySelector('a[href*="wa.me"]')?.parentElement;
      if (btnRow && btnRow.parentElement) {
        const notice = document.createElement('p');
        notice.id = 'ensis-contact-habeas';
        notice.className = 'contact-habeas-notice';
        notice.innerHTML = `
          Al comunicarte con ENSIS Security autorizas el tratamiento de tus datos personales conforme a la
          <strong>Ley 1581 de 2012</strong>. Consulta nuestra
          <button type="button" class="legal-inline-link" data-legal-open="datos">Política de Tratamiento de Datos</button>
          y <button type="button" class="legal-inline-link" data-legal-open="privacidad">Aviso de Privacidad</button>.
        `;
        notice.querySelectorAll('[data-legal-open]').forEach((b) => {
          b.addEventListener('click', () => openLegalDoc(b.getAttribute('data-legal-open')));
        });
        btnRow.parentElement.appendChild(notice);
      }
    }

    // 2. Add Colombian Legal Bar inside the page's main <footer> (never an <article> card footer)
    const siteFooters = Array.from(document.querySelectorAll('footer')).filter((el) => !el.closest('article'));
    const footer = siteFooters[siteFooters.length - 1];
    if (footer && !document.getElementById('ensis-legal-bar')) {
      const container = footer.firstElementChild || footer;
      const bar = document.createElement('div');
      bar.id = 'ensis-legal-bar';
      bar.className = 'footer-legal-bar';
      bar.setAttribute('aria-label', 'Enlaces legales y privacidad');
      bar.innerHTML = `
        <div class="footer-legal-links">
          <button type="button" class="footer-legal-btn" data-legal-open="datos">Política de Datos (Ley 1581)</button>
          <button type="button" class="footer-legal-btn" data-legal-open="privacidad">Aviso de Privacidad</button>
          <button type="button" class="footer-legal-btn" data-legal-open="terminos">Términos y Condiciones</button>
          <button type="button" class="footer-legal-btn" data-legal-open="cookies">Política de Cookies</button>
          <button type="button" class="footer-legal-btn" data-legal-open="pqrs">PQRS · SIC / SuperVigilancia</button>
          <button type="button" class="footer-legal-btn" data-reopen-cookies="true">Preferencias de cookies</button>
        </div>
        <p class="footer-legal-disclaimer">
          Sitio regulado bajo la legislación de la República de Colombia (Ley 1581 de 2012, Decreto 1377 de 2013 y Ley 1480 de 2011).
        </p>
      `;

      bar.querySelectorAll('[data-legal-open]').forEach((b) => {
        b.addEventListener('click', () => openLegalDoc(b.getAttribute('data-legal-open')));
      });
      bar.querySelector('[data-reopen-cookies]')?.addEventListener('click', () => showCookieBanner(true));

      container.appendChild(bar);
      return true;
    }
    return Boolean(document.getElementById('ensis-legal-bar'));
  }

  // Expose helper globally for any inline button triggers
  window.EnsisLegal = { open: openLegalDoc, showCookies: () => showCookieBanner(true) };

  function init() {
    showCookieBanner(false);
    if (injectLegalFooterAndContactNotice()) return;
    const observer = new MutationObserver(() => {
      if (injectLegalFooterAndContactNotice()) {
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
