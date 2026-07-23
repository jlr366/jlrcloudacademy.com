// ===================================================================
// Config de recursos descargables. Para agregar uno nuevo:
//   1. Sube el archivo a la carpeta /archivos/ (dentro de cloud-academy)
//   2. Agrega un objeto aqui abajo con su info
//   3. Sube los cambios (git add / commit / push) — GitHub Pages lo
//      publica solo en unos minutos.
// Mientras la lista este vacia, la pagina muestra "aun no hay archivos".
// ===================================================================

const RECURSOS = [
  { titulo: 'Clase 2 — Sitio web estático en AWS S3', descripcion: 'Archivos de ejemplo (index.html, error.html) y la política de bucket para publicar un sitio estático en S3, con instrucciones paso a paso.', archivo: 'archivos/clase2-sitio-web-estatico-s3.zip', categoria: 'AWS', tipo: 'ZIP' },
  // Ejemplo (borra el // para activarlo una vez subas el archivo real):
  // { titulo: 'Guía rápida de AWS', descripcion: 'Resumen de los servicios más usados en el examen Cloud Practitioner.', archivo: 'archivos/guia-aws.pdf', categoria: 'AWS', tipo: 'PDF' },
];

const ICONOS_RECURSO = {
  PDF: 'fa-file-pdf',
  ZIP: 'fa-file-zipper',
  DOCX: 'fa-file-word',
  DOC: 'fa-file-word',
  PPTX: 'fa-file-powerpoint',
  PPT: 'fa-file-powerpoint',
  XLSX: 'fa-file-excel',
  XLS: 'fa-file-excel',
  IMG: 'fa-file-image',
  PNG: 'fa-file-image',
  JPG: 'fa-file-image'
};

function renderRecursos(containerId, recursos) {
  const el = document.getElementById(containerId);
  if (!el) return;

  if (!recursos || recursos.length === 0) {
    el.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-folder-open"></i>
        Todavía no hay archivos disponibles. Vuelve pronto.
      </div>`;
    return;
  }

  el.innerHTML = recursos.map(r => {
    const icono = ICONOS_RECURSO[(r.tipo || '').toUpperCase()] || 'fa-file';
    return `
      <div class="resource-card">
        <div class="card-icon"><i class="fa-solid ${icono}"></i></div>
        <div class="resource-body">
          <span class="badge badge-ok">${r.categoria || 'General'}</span>
          <h3>${r.titulo}</h3>
          <p>${r.descripcion || ''}</p>
        </div>
        <a class="btn btn-primary btn-block" href="${r.archivo}" download>
          <i class="fa-solid fa-download"></i> Descargar${r.tipo ? ' (' + r.tipo.toUpperCase() + ')' : ''}
        </a>
      </div>`;
  }).join('');
}
