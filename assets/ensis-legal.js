/**
 * ENSIS SECURITY LIMITADA (NIT 900.644.610-1)
 * Cumplimiento Legal, Licencia SuperVigilancia y Privacidad para Colombia
 * - Decreto Ley 356 de 1994, Decreto 2355 de 2006 y Decreto 2106 de 2019 (Art. 84 / Art. 115A)
 * - Resolución SuperVigilancia No. 20204100068867 del 14/10/2020 (vigente hasta el 15/05/2028)
 * - Ley 1581 de 2012 (Habeas Data), Decreto 1377 de 2013 (Decreto 1074 de 2015)
 * - Ley 1480 de 2011 (Estatuto del Consumidor) y Ley 527 de 1999
 */
(function () {
  const CONSENT_KEY = 'ensis_cookie_consent_v1';

  const LEGAL_DOCS = {
    licencia: {
      badge: 'Vigilado SuperVigilancia · Mindefensa',
      title: 'Licencia de Funcionamiento — Resolución No. 20204100068867',
      updated: 'Vigente hasta el 15 de mayo de 2028 · República de Colombia',
      html: `
        <p><strong>ENSIS SECURITY LIMITADA</strong>, identificada con <strong>NIT 900.644.610-1</strong>, es una empresa de vigilancia y seguridad privada debidamente autorizada y vigilada por la <strong>Superintendencia de Vigilancia y Seguridad Privada (SuperVigilancia)</strong>, entidad adscrita al Ministerio de Defensa Nacional de la República de Colombia.</p>

        <h4>Resumen Oficial de la Licencia de Funcionamiento</h4>
        <div class="legal-spec-grid">
          <div class="legal-spec-row"><span>Razón Social</span><strong>ENSIS SECURITY LIMITADA</strong></div>
          <div class="legal-spec-row"><span>NIT</span><strong>900.644.610-1</strong></div>
          <div class="legal-spec-row"><span>Entidad Reguladora</span><strong>Superintendencia de Vigilancia y Seguridad Privada (SuperVigilancia)</strong></div>
          <div class="legal-spec-row"><span>Resolución de Prórroga</span><strong>Resolución No. 20204100068867 del 14 de octubre de 2020</strong></div>
          <div class="legal-spec-row"><span>Vigencia Autorizada</span><strong>Hasta el 15 de mayo de 2028 (prórroga por 10 años)</strong></div>
          <div class="legal-spec-row"><span>Domicilio Principal</span><strong>Barranquilla – Atlántico, Colombia</strong></div>
        </div>

        <h4>Modalidades y Medios Autorizados</h4>
        <p>De conformidad con los <strong>artículos 5 y 14 del Decreto Ley 356 de 1994</strong>, ENSIS SECURITY LIMITADA cuenta con autorización oficial vigente para prestar servicios en las siguientes modalidades y medios:</p>
        <ul>
          <li><strong>Vigilancia fija:</strong> protección permanente en puestos fijos para instalaciones corporativas, residenciales, comerciales, industriales e institucionales.</li>
          <li><strong>Vigilancia móvil:</strong> patrullaje preventivo y supervisión operativa en movimiento.</li>
          <li><strong>Escolta:</strong> protección especializada a <strong>personas, vehículos y mercancías</strong>.</li>
          <li><strong>Medios autorizados:</strong> operación <strong>con armas de fuego</strong> y <strong>sin armas de fuego</strong>.</li>
        </ul>

        <h4>Fundamento Legal y Antecedentes Administrativos</h4>
        <ul>
          <li><strong>Prórroga vigente (Resolución No. 20204100068867 del 14 de octubre de 2020):</strong> proferida por el Superintendente de Vigilancia y Seguridad Privada (notificada el 11 de noviembre de 2020), mediante la cual se prorrogó la licencia de funcionamiento hasta el <strong>15 de mayo de 2028</strong>.</li>
          <li><strong>Marco normativo:</strong> Decreto Ley 356 de 1994, Decreto 2355 de 2006 y <strong>artículo 84 del Decreto 2106 de 2019</strong> (que adicionó el artículo 115A al Decreto Ley 356 de 1994, prorrogando las licencias vigentes por un término de diez (10) años desde la firmeza del acto administrativo).</li>
          <li><strong>Antecedente de renovación:</strong> Resolución No. 20181300036347 del 10 de mayo de 2018 (en firme desde el <strong>15 de mayo de 2018</strong>), la cual repuso parcialmente la Resolución No. 20174100083747 del 23 de octubre de 2017.</li>
        </ul>

        <h4>Verificación Pública</h4>
        <p>La legalidad y estado vigente de nuestra licencia puede consultarse ante la Superintendencia de Vigilancia y Seguridad Privada en <a href="https://www.supervigilancia.gov.co" target="_blank" rel="noopener noreferrer" style="color:#FFC107;text-decoration:underline;">www.supervigilancia.gov.co</a>.</p>
      `
    },
    datos: {
      badge: 'Ley 1581 de 2012 · Colombia',
      title: 'Política de Tratamiento de Datos Personales',
      updated: 'Actualizada: 2026 · ENSIS SECURITY LIMITADA · NIT 900.644.610-1',
      html: `
        <h4>1. Responsable del Tratamiento</h4>
        <p><strong>ENSIS SECURITY LIMITADA (ENSIS SECURITY LTDA.)</strong>, identificada con <strong>NIT 900.644.610-1</strong>, empresa de vigilancia y seguridad privada vigilada por la Superintendencia de Vigilancia y Seguridad Privada (Resolución No. 20204100068867, vigente hasta el 15 de mayo de 2028), con domicilio principal en Barranquilla, Atlántico, Colombia (sede Cra. 61 #74-177, Nte. Centro Histórico); teléfono/WhatsApp <strong>+57 310 292 7152</strong> y correo electrónico <strong>comercial@ensissecurity.com</strong>, actúa como responsable del tratamiento de los datos personales recolectados a través de este sitio web y sus canales oficiales.</p>

        <h4>2. Marco Normativo Aplicable</h4>
        <p>Esta política se rige por el artículo 15 de la Constitución Política de Colombia, la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto 1377 de 2013</strong> (compilado en el Decreto Único Reglamentario 1074 de 2015), el <strong>Decreto Ley 356 de 1994</strong> en lo aplicable a servicios de vigilancia y seguridad privada, y las directrices de la <strong>Superintendencia de Industria y Comercio (SIC)</strong>.</p>

        <h4>3. Finalidades del Tratamiento</h4>
        <ul>
          <li>Atender solicitudes de diagnóstico gratuito, cotizaciones y asesoría comercial en vigilancia fija, vigilancia móvil, escolta y seguridad electrónica.</li>
          <li>Contactar al titular por teléfono, WhatsApp o correo electrónico exclusivamente respecto a los servicios solicitados.</li>
          <li>Gestionar Peticiones, Quejas, Reclamos y Sugerencias (PQRS).</li>
          <li>Cumplir obligaciones contractuales, contables, fiscales y regulatorias exigidas por la ley colombiana, incluidas las disposiciones de la Superintendencia de Vigilancia y Seguridad Privada (SuperVigilancia).</li>
        </ul>

        <h4>4. Datos Sensibles y Videovigilancia</h4>
        <p>En caso de requerirse datos sensibles o biométricos en la ejecución de servicios contratados (control de acceso biométrico o circuitos cerrados de televisión), su suministro es facultativo y se regirá por autorización expresa y por la Guía para la Protección de Datos Personales en Sistemas de Videovigilancia de la SIC.</p>

        <h4>5. Derechos del Titular (Art. 8, Ley 1581 de 2012)</h4>
        <ul>
          <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a ENSIS SECURITY LIMITADA (NIT 900.644.610-1).</li>
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
      updated: 'Actualizado: 2026 · ENSIS SECURITY LIMITADA · NIT 900.644.610-1',
      html: `
        <p><strong>ENSIS SECURITY LIMITADA (ENSIS SECURITY LTDA.)</strong>, identificada con <strong>NIT 900.644.610-1</strong> (Cra. 61 #74-177, Barranquilla, Atlántico · Tel. 310 292 7152 · comercial@ensissecurity.com), empresa de vigilancia y seguridad privada vigilada por la SuperVigilancia (Resolución No. 20204100068867), informa a los visitantes y usuarios de este sitio web que los datos personales suministrados voluntariamente a través de nuestros canales de contacto (WhatsApp, teléfono, correo electrónico o formularios) serán tratados de manera confidencial y segura.</p>
        <h4>Finalidad principal</h4>
        <p>Responder solicitudes de información, agendar diagnósticos gratuitos de riesgo, elaborar propuestas comerciales de vigilancia fija, vigilancia móvil, escolta y seguridad electrónica, y atender PQRS.</p>
        <h4>Carácter facultativo</h4>
        <p>El titular no está obligado a autorizar el tratamiento de datos sensibles ni de menores de edad. La navegación informativa en este sitio no exige registro previo.</p>
        <h4>Ejercicio de derechos</h4>
        <p>Usted puede conocer, actualizar, rectificar o suprimir sus datos en cualquier momento escribiendo a <strong>comercial@ensissecurity.com</strong>. La política completa está disponible de forma permanente en la sección <em>Política de Tratamiento de Datos Personales</em> de este portal.</p>
      `
    },
    terminos: {
      badge: 'Ley 527/1999 · Ley 1480/2011 · Decreto Ley 356/1994',
      title: 'Términos y Condiciones de Uso y Aviso Legal',
      updated: 'Actualizados: 2026 · ENSIS SECURITY LIMITADA · NIT 900.644.610-1',
      html: `
        <h4>1. Identificación Legal y Licencia de Funcionamiento</h4>
        <p>Este sitio web es operado por <strong>ENSIS SECURITY LIMITADA (ENSIS SECURITY LTDA.)</strong>, identificada con <strong>NIT 900.644.610-1</strong>, con domicilio principal en la ciudad de <strong>Barranquilla – Atlántico, Colombia</strong> (sede Cra. 61 #74-177, Nte. Centro Histórico). La compañía cuenta con licencia de funcionamiento vigente prorrogada por la <strong>Superintendencia de Vigilancia y Seguridad Privada (SuperVigilancia)</strong> mediante <strong>Resolución No. 20204100068867 del 14 de octubre de 2020</strong> (prórroga de la Resolución No. 20181300036347 del 10 de mayo de 2018, conforme al artículo 84 del Decreto 2106 de 2019 y artículo 115A del Decreto Ley 356 de 1994), vigente <strong>hasta el 15 de mayo de 2028</strong>, para operar en las modalidades de <strong>vigilancia fija, vigilancia móvil y escolta a personas, vehículos y mercancías, con armas de fuego y sin armas de fuego</strong> (artículos 5 y 14 del Decreto Ley 356 de 1994).</p>

        <h4>2. Objeto y Carácter Informativo</h4>
        <p>El presente sitio web tiene carácter informativo y comercial sobre los servicios de vigilancia, escolta y seguridad electrónica ofrecidos por <strong>ENSIS SECURITY LIMITADA</strong>. La información publicada no constituye una oferta mercantil vinculante; todo servicio, modalidad, alcance, tarifa y garantía se formaliza exclusivamente mediante cotización aprobada y contrato escrito conforme al Estatuto de Vigilancia y Seguridad Privada (Decreto Ley 356 de 1994) y demás normativa colombiana vigente.</p>

        <h4>3. Propiedad Intelectual y Marcas de Terceros</h4>
        <p>Los textos, diseño, estructura, logotipo y signos distintivos de <strong>ENSIS Security</strong> están protegidos por la normativa de derechos de autor y propiedad industrial (Ley 23 de 1982 y Decisión Andina 351/486). Los logotipos y nombres comerciales de fabricantes aliados mostrados en el sitio (como Hikvision, Dahua, Ajax, ZKTeco, Suprema, Ubiquiti, DSC y Witek) son marcas registradas pertenecientes a sus respectivos propietarios y se exhiben únicamente con fines informativos sobre compatibilidad tecnológica.</p>

        <h4>4. Enlaces a Noticias y Sitios de Terceros</h4>
        <p>La sección de Noticias enlaza a publicaciones externas especializadas del sector (como ALAS, Security Fair Colombia y Tecnoseguro) con atribución de su fuente original. ENSIS SECURITY LIMITADA no controla ni asume responsabilidad por la disponibilidad, exactitud, políticas de privacidad o contenidos publicados en sitios web de terceros.</p>

        <h4>5. Uso Permitido y Limitación de Responsabilidad</h4>
        <p>El usuario se compromete a hacer un uso lícito del sitio y abstenerse de realizar intentos de intrusión, raspado automatizado abusivo o suplantación. ENSIS SECURITY LIMITADA implementa medidas técnicas razonables de seguridad, sin garantizar disponibilidad ininterrumpida ante fallas de terceros o fuerza mayor.</p>

        <h4>6. Legislación Aplicable y Jurisdicción</h4>
        <p>Estos términos se rigen por las leyes de la <strong>República de Colombia</strong>. Cualquier controversia se resolverá ante las autoridades competentes de Colombia.</p>
      `
    },
    cookies: {
      badge: 'Transparencia Digital',
      title: 'Política de Cookies y Almacenamiento Local',
      updated: 'Actualizada: 2026 · ENSIS SECURITY LIMITADA · NIT 900.644.610-1',
      html: `
        <h4>1. Responsable y ¿qué son las cookies?</h4>
        <p>Este sitio web, operado por <strong>ENSIS SECURITY LIMITADA (NIT 900.644.610-1)</strong>, utiliza cookies y tecnologías de almacenamiento local (como <code>localStorage</code>), que son pequeños archivos guardados en su navegador para recordar preferencias básicas de navegación y garantizar el correcto funcionamiento del portal.</p>

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
      badge: 'Estatuto del Consumidor · SIC · SuperVigilancia',
      title: 'PQRS y Organismos de Control (Colombia)',
      updated: 'Actualizado: 2026 · ENSIS SECURITY LIMITADA · NIT 900.644.610-1',
      html: `
        <h4>Canales Oficiales de Atención y PQRS</h4>
        <p>En cumplimiento de la Ley 1480 de 2011 (Estatuto del Consumidor), la Ley 1581 de 2012 y las disposiciones de la SuperVigilancia, <strong>ENSIS SECURITY LIMITADA (NIT 900.644.610-1)</strong> pone a su disposición sus canales oficiales para radicar Peticiones, Quejas, Reclamos, Sugerencias o solicitudes de protección de datos:</p>
        <ul>
          <li><strong>Razón social y NIT:</strong> ENSIS SECURITY LIMITADA · NIT 900.644.610-1</li>
          <li><strong>Correo electrónico:</strong> comercial@ensissecurity.com</li>
          <li><strong>Teléfono y WhatsApp:</strong> +57 310 292 7152</li>
          <li><strong>Dirección física:</strong> Cra. 61 #74-177, Nte. Centro Histórico, Barranquilla, Atlántico, Colombia.</li>
        </ul>

        <h4>Autoridades de Inspección, Vigilancia y Control</h4>
        <p>ENSIS SECURITY LIMITADA opera bajo licencia de funcionamiento prorrogada por la SuperVigilancia mediante <strong>Resolución No. 20204100068867 del 14 de octubre de 2020</strong> (vigente hasta el <strong>15 de mayo de 2028</strong>). Si considera que sus derechos como consumidor, usuario o titular de datos personales no han sido atendidos adecuadamente, puede acudir ante las autoridades competentes en Colombia:</p>
        <ul>
          <li><strong>Superintendencia de Vigilancia y Seguridad Privada (SuperVigilancia):</strong> <a href="https://www.supervigilancia.gov.co" target="_blank" rel="noopener noreferrer" style="color:#FFC107;text-decoration:underline;">www.supervigilancia.gov.co</a> (Inspección, vigilancia y control de servicios de vigilancia y seguridad privada).</li>
          <li><strong>Superintendencia de Industria y Comercio (SIC):</strong> <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer" style="color:#FFC107;text-decoration:underline;">www.sic.gov.co</a> (Protección al Consumidor y Protección de Datos Personales).</li>
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
        <span class="legal-modal-note">ENSIS SECURITY LIMITADA · NIT 900.644.610-1 · Vigilado SuperVigilancia</span>
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

  function mountSuperVigilanciaSection() {
    if (document.getElementById('respaldo-legal')) return true;
    const anchor = document.getElementById('servicios');
    if (!anchor || !anchor.parentNode) return false;

    const section = document.createElement('section');
    section.id = 'respaldo-legal';
    section.className = 'sv-section';
    section.setAttribute('aria-labelledby', 'sv-heading');
    section.innerHTML = `
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="sv-shell">
          <div class="sv-header">
            <div class="sv-title-group">
              <div class="sv-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>Vigilado SuperVigilancia · Ministerio de Defensa Nacional</span>
              </div>
              <h2 id="sv-heading" class="sv-heading">
                Respaldo Legal y Licencia <span class="text-[#FFC107]">Vigente</span>
              </h2>
              <p class="sv-subtitle">
                <strong>ENSIS SECURITY LIMITADA</strong> (<strong>NIT 900.644.610-1</strong>) opera legalmente autorizada por la
                <strong>Superintendencia de Vigilancia y Seguridad Privada</strong> con domicilio principal en
                <strong>Barranquilla – Atlántico</strong>.
              </p>
            </div>
            <div class="sv-status-pill" aria-label="Licencia de funcionamiento vigente hasta el 15 de mayo de 2028">
              <span class="sv-status-dot" aria-hidden="true"></span>
              <div>
                <span class="sv-status-label">Licencia Activa</span>
                <strong class="sv-status-date">Hasta el 15 de mayo de 2028</strong>
              </div>
            </div>
          </div>

          <div class="sv-grid">
            <article class="sv-card">
              <span class="sv-card-eyebrow">Resolución Vigente</span>
              <h3>No. 20204100068867</h3>
              <p>Expedida el <strong>14 de octubre de 2020</strong>. Prórroga oficial por 10 años según el Art. 84 del Decreto 2106 de 2019 (Art. 115A Decreto Ley 356 de 1994).</p>
            </article>

            <article class="sv-card">
              <span class="sv-card-eyebrow">Modalidades Autorizadas</span>
              <h3>Vigilancia Fija, Móvil y Escolta</h3>
              <p>Autorizados para prestar <strong>vigilancia fija</strong>, <strong>vigilancia móvil</strong> y <strong>escolta a personas, vehículos y mercancías</strong>.</p>
            </article>

            <article class="sv-card">
              <span class="sv-card-eyebrow">Medios Autorizados</span>
              <h3>Con y Sin Armas de Fuego</h3>
              <p>Operación certificada con <strong>armas de fuego</strong> y <strong>sin armas de fuego</strong>, conforme a los artículos 5 y 14 del Decreto Ley 356 de 1994.</p>
            </article>

            <article class="sv-card">
              <span class="sv-card-eyebrow">Identificación Tributaria</span>
              <h3>NIT 900.644.610-1</h3>
              <p><strong>ENSIS SECURITY LIMITADA</strong> · Antecedente Res. No. 20181300036347 del 10/05/2018 (en firme desde el 15/05/2018) · Barranquilla – Atlántico.</p>
            </article>
          </div>

          <div class="sv-footer-bar">
            <p class="sv-legal-meta">
              Cumplimiento integral del Estatuto de Vigilancia y Seguridad Privada (Decreto Ley 356 de 1994, Decreto 2355 de 2006 y Decreto 2106 de 2019).
            </p>
            <div class="sv-actions">
              <button type="button" class="sv-btn-primary" data-legal-open="licencia">
                Ver detalle oficial de la Resolución
              </button>
              <a href="https://www.supervigilancia.gov.co" target="_blank" rel="noopener noreferrer" class="sv-btn-link">
                SuperVigilancia.gov.co
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    section.querySelectorAll('[data-legal-open]').forEach((btn) => {
      btn.addEventListener('click', () => openLegalDoc(btn.getAttribute('data-legal-open')));
    });

    anchor.parentNode.insertBefore(section, anchor);
    return true;
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
          Al comunicarte con <strong>ENSIS SECURITY LIMITADA (NIT 900.644.610-1)</strong> autorizas el tratamiento de tus datos personales conforme a la
          <strong>Ley 1581 de 2012</strong>. Consulta nuestra
          <button type="button" class="legal-inline-link" data-legal-open="datos">Política de Tratamiento de Datos</button>,
          <button type="button" class="legal-inline-link" data-legal-open="privacidad">Aviso de Privacidad</button> y
          <button type="button" class="legal-inline-link" data-legal-open="licencia">Licencia SuperVigilancia</button>.
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
      bar.setAttribute('aria-label', 'Enlaces legales, licencia SuperVigilancia y privacidad');
      bar.innerHTML = `
        <div class="footer-legal-links">
          <button type="button" class="footer-legal-btn footer-legal-btn--highlight" data-legal-open="licencia">Licencia SuperVigilancia (Res. 20204100068867)</button>
          <button type="button" class="footer-legal-btn" data-legal-open="datos">Política de Datos (Ley 1581)</button>
          <button type="button" class="footer-legal-btn" data-legal-open="privacidad">Aviso de Privacidad</button>
          <button type="button" class="footer-legal-btn" data-legal-open="terminos">Términos y Condiciones</button>
          <button type="button" class="footer-legal-btn" data-legal-open="cookies">Política de Cookies</button>
          <button type="button" class="footer-legal-btn" data-legal-open="pqrs">PQRS · SIC / SuperVigilancia</button>
          <button type="button" class="footer-legal-btn" data-reopen-cookies="true">Preferencias de cookies</button>
        </div>
        <p class="footer-legal-disclaimer">
          ENSIS SECURITY LIMITADA · NIT 900.644.610-1 · Vigilado por la Superintendencia de Vigilancia y Seguridad Privada · Licencia de Funcionamiento prorrogada mediante Resolución No. 20204100068867 del 14/10/2020, vigente hasta el 15 de mayo de 2028 (Decreto Ley 356 de 1994 y Decreto 2106 de 2019) · Cumplimiento Ley 1581 de 2012, Decreto 1377 de 2013 y Ley 1480 de 2011.
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
    const okSv = mountSuperVigilanciaSection();
    const okLegal = injectLegalFooterAndContactNotice();
    if (okSv && okLegal) return;
    const observer = new MutationObserver(() => {
      const a = mountSuperVigilanciaSection();
      const b = injectLegalFooterAndContactNotice();
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
