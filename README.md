# GenerAcción · web del juego

Web estática (HTML, CSS y JavaScript, sin compilación). Se publica tal cual en GitHub Pages, Vercel o la web de Macrosad.

- `index.html`: la página
- `app.js`: juego, libro, álbum, condiciones, autorizaciones y área profesional
- `cartas.js`: las 90 cartas
- `img/`: imágenes
- `fonts/` y `lib/`: tipografías y librerías alojadas en la propia web (no se cargan de Google ni de CDN externos, así no se cede la IP de las personas visitantes a terceros)

**Importante:** descomprimir el ZIP antes de abrir `index.html`; abierto desde dentro del ZIP no carga las imágenes ni el juego.

## Direcciones útiles

- Dirección pública: `https://macrosad.com/generaccion/` (entrada «GenerAcción» bajo Proyectos Intergeneracionales)
- Guía para profesionales (destino del código QR de la tarjeta): `https://macrosad.com/generaccion/#profesionales`
- Jugar: `#jugar` · Álbum: `#album` · Historia: `#historia` · Instrucciones: `#reglas`

## Datos guardados en el dispositivo

- La partida en curso se guarda en `localStorage` (`ga-partida-v1`) y se recupera al volver.
- La aceptación de condiciones se guarda en `localStorage` (`ga-condiciones-v1`).
- El álbum (textos y fotos) se guarda en IndexedDB del navegador. No sale del dispositivo salvo que se envíe una foto al álbum compartido.
- En ventanas privadas o de incógnito el navegador lo borra al cerrar.

## Álbum compartido (para el equipo de Sistemas de Macrosad)

Sin servicio, la pestaña "Álbum compartido" muestra un aviso y las fotos se quedan en el álbum propio. Para activarlo, definir antes de `app.js`:

```html
<script>window.GENERACCION_API="https://api.macrosad.com/generaccion";</script>
```

El servicio debe ofrecer:

### `GET {API}/album`

Devuelve solo las fotos ya revisadas y publicadas, sin datos personales:

```json
[{"codigo":"GA-20261105-AB12","url":"https://.../GA-20261105-AB12.jpg","pie":"Texto","tipo":"centro","publicada":1767225600000}]
```

`tipo`: `casa`, `centro`, `servicio` u `otro`. `publicada`: fecha en milisegundos.

### `POST {API}/solicitudes` (multipart/form-data)

| Campo | Contenido |
|---|---|
| `foto` | JPEG de la foto |
| `consentimiento` | PDF con las autorizaciones firmadas |
| `datos` | JSON: `codigo`, `pie`, `tipo`, `lugar`, `album`, `personas[]` (`nombre`, `representante`, `a1`, `a2`), `sinPersonas`, `aptaAlbum`, `aptaComunicacion`, `version`, `creado`, `estado:"pendiente"` |

Responder 2xx si se ha guardado. Al recibir cada solicitud, enviar un aviso a **generaccion@macrosad.com** con el código de la foto y el PDF de autorizaciones adjunto o enlazado; desde ese buzón se revisa y se publica. Solo se envían fotos en las que todas las personas reconocibles han dado la Autorización 1 (álbum compartido). `aptaComunicacion` indica si además todas dieron la Autorización 2 (web, redes, campañas y comunicación institucional).

### Requisitos según el informe del DPD (28/10/2026)

- Responsable: OGARA S.C.A. Contacto DPD: dpd@macrosad.com.
- Revisión manual por Macrosad antes de publicar (comprobar autorizaciones y personas que aparecen).
- Conservación de autorizaciones y fotos: 24 meses, salvo retirada antes.
- Retirada a petición: la persona escribe a dpd@macrosad.com con el código de la foto.
- Guardar foto y PDF en almacenamiento privado; servir públicamente solo las publicadas.

## Cómo montarla en macrosad.com

Subir el contenido de la carpeta `generaccion-web` tal cual a `/generaccion/` del servidor y crear en el menú Proyectos Intergeneracionales un enlace «GenerAcción» a `https://macrosad.com/generaccion/`. No incrustarla en una página de WordPress (iframe): da problemas con las descargas, la firma en pantalla y el guardado de la partida.

## Publicar en Vercel

Importar el repositorio, Framework Preset = Other, sin comando de build.
