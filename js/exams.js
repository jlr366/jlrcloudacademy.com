// ===================================================================
// Config de examenes por proveedor. Los de AWS son los reales del
// usuario jlraws en evaluacion-digital.com (acceso libre activado:
// no requieren cuenta previa, solo el nombre de quien lo responde).
// Para Azure/GCP el "url" queda vacio hasta activarlos igual.
// ===================================================================

const EXAMENES_AWS = [
  { titulo: 'Conceptos Cloud Básicos', descripcion: 'Fundamentos de computación en la nube aplicados a AWS (S3, EC2 y más).', url: 'https://evaluacion-digital.com/examen.html?id=1AtR6t86o7ZvtSQ7aoNI' },
  { titulo: 'Tipos y beneficios de la computación en la nube', descripcion: 'Modelos de servicio, ventajas y conceptos generales de la nube.', url: 'https://evaluacion-digital.com/examen.html?id=2TgbDauBKaCZJd32bBHd' },
  { titulo: 'AWS Cloud Practitioner I', descripcion: 'Certificación — repaso de nivel fundamentos.', url: 'https://evaluacion-digital.com/examen.html?id=IuuuCrxIwgsPOnnVf6Bq' },
  { titulo: 'AWS Cloud Practitioner II', descripcion: 'Certificación — repaso de nivel intermedio.', url: 'https://evaluacion-digital.com/examen.html?id=V2nbMVkeMlvoP5NoSBQs' },
  { titulo: 'Seguridad en la Nube', descripcion: 'Buenas prácticas de seguridad y responsabilidad compartida en AWS.', url: 'https://evaluacion-digital.com/examen.html?id=NbM5OdFubrdgQFoikqnN' },
  { titulo: 'Facturación, Precio y Soporte', descripcion: 'Modelos de costos, facturación y planes de soporte en AWS.', url: 'https://evaluacion-digital.com/examen.html?id=pOP0qV8zExl2nA3o33Ol' }
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
