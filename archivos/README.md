# Carpeta de archivos descargables

Sube aquí los archivos que quieras ofrecer para descarga en la página
[recursos.html](../recursos.html).

## Cómo agregar un archivo nuevo

1. Copia el archivo (PDF, ZIP, DOCX, etc.) dentro de esta carpeta `archivos/`.
2. Abre `js/resources.js` y agrega una línea al arreglo `RECURSOS`, por ejemplo:

```js
{ titulo: 'Guía rápida de AWS', descripcion: 'Resumen de los servicios más usados.', archivo: 'archivos/guia-aws.pdf', categoria: 'AWS', tipo: 'PDF' },
```

3. Sube los cambios a GitHub (`git add`, `git commit`, `git push`). El sitio se
   actualiza solo en unos minutos.

Campos disponibles por recurso:
- `titulo` — nombre visible del archivo
- `descripcion` — texto corto de apoyo
- `archivo` — ruta relativa dentro de `archivos/`
- `categoria` — etiqueta que se muestra en la tarjeta (ej. "AWS", "Azure", "General")
- `tipo` — extensión del archivo en mayúsculas (PDF, ZIP, DOCX, PPTX, XLSX...), define el ícono
