// ===================================================================
// Config de examenes por proveedor. El "url" queda vacio a proposito:
// pegalo desde el boton "URL" de cada examen en el panel admin de
// evaluacion-digital.com. Mientras este vacio, la tarjeta se muestra
// como "Proximamente" en vez de un enlace roto.
// ===================================================================

const EXAMENES_AWS = [
  { titulo: 'Conceptos Cloud Básicos', descripcion: 'Fundamentos de computación en la nube aplicados a AWS.', url: '' },
  { titulo: 'Facturación, Precio y Soporte', descripcion: 'Modelos de costos, facturación y planes de soporte en AWS.', url: '' },
  { titulo: 'AWS Cloud Practitioner II', descripcion: 'Repaso de certificación, nivel intermedio.', url: '' },
  { titulo: 'Seguridad en la Nube', descripcion: 'Buenas prácticas de seguridad y responsabilidad compartida en AWS.', url: '' }
];

const EXAMENES_AZURE = [
  { titulo: 'Servicio de almacenamiento de Azure', descripcion: 'Storage Accounts, Blobs, Files y opciones de almacenamiento.', url: '' },
  { titulo: 'AZ-400: DevOps Engineer', descripcion: 'Prácticas de DevOps e integración continua en Azure.', url: '' }
];

const EXAMENES_GCP = [];

function renderExamCards(containerId, examenes) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!examenes || examenes.length === 0) {
    el.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-clock"></i>
        Muy pronto habrá exámenes disponibles para este proveedor.
      </div>`;
    return;
  }

  el.innerHTML = examenes.map(ex => {
    const tieneUrl = ex.url && ex.url.trim();
    const boton = tieneUrl
      ? `<a class="btn btn-primary btn-sm btn-block" href="${ex.url}" target="_blank" rel="noopener">Realizar examen <i class="fa-solid fa-arrow-right"></i></a>`
      : `<span class="btn btn-disabled btn-sm btn-block" title="Próximamente disponible">🔧 Próximamente</span>`;
    return `
      <div class="exam-card">
        <h3>${ex.titulo}</h3>
        <p>${ex.descripcion}</p>
        ${boton}
      </div>`;
  }).join('');
}
