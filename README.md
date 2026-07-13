# 🧩 GenerAcción · Juego digital

**Versión digital del juego de mesa intergeneracional GenerAcción de Macrosad**, diseñado para conectar generaciones a través de recuerdos, imaginación y momentos compartidos. El tablero reproduce la forma del símbolo de Macrosad: una gota superior y dos bucles inferiores en forma de infinito que convergen en el centro.

🎮 **Demo:** despliega el `index.html` en Vercel, GitHub Pages o cualquier hosting estático y juega desde el navegador.

---

## ✨ Funcionalidades

- **Tablero interactivo con la forma del símbolo de Macrosad**: tres caminos en forma de gota/pétalo (VIDA, CAMINO y MOMENTO) que nacen y mueren en la casilla central de salida. Las 10 casillas de cada camino se distribuyen automáticamente a lo largo del trazado curvo.
- **Ruleta animada** como único sistema de movimiento, con los 8 sectores del juego físico (avances de 1, 2 y 3 casillas más 4 casillas especiales con retos).
- **De 2 a 6 jugadores** con fichas de colores y nombres personalizables desde la pantalla inicial.
- **3 barajas de cartas digitales** (una por camino) con extracción aleatoria sin repetición: cuando se agota una baraja, se rebaraja automáticamente.
- **Cartas con el diseño de la edición física**: onda de color del camino, separador de corazón, pregunta principal y subtítulo.
- **Comodín de rebote (×2 por jugador)**: al responder una carta se puede gastar un comodín para que otra persona responda también la misma pregunta (con 2 jugadores pasa automáticamente al otro; con 3 o más se elige a quién). El panel muestra los comodines restantes de cada jugador.
- **Casillas especiales en cada camino**: ★ estrella (el jugador elige de qué baraja robar) y ♥ corazón (pregunta libre: el grupo pregunta lo que quiera).
- **Accesibilidad y ayuda**: lectura de las cartas en voz alta en español (botón 🔈 Escuchar), modo de texto grande (A+), efectos de sonido suaves activables/silenciables (🔊) y botón **❓ Reglas** para consultar las instrucciones en cualquier momento de la partida.
- **Identidad Macrosad**: logotipo oficial integrado en la cabecera, en la ventana de reglas y en la pantalla de victoria (incrustado en el propio archivo, sin dependencias externas).
- **Selección de camino táctil**: desde el centro se puede elegir camino tocando directamente la cinta del tablero o mediante botones.
- **Movimiento animado casilla a casilla** de las fichas, con agrupación visual cuando varias fichas coinciden en la misma casilla.
- **Panel de progreso por jugador**: indica el turno activo, las cartas respondidas y qué caminos ha completado cada jugador (tres puntos de color).
- **Registro de partida** con las últimas acciones (tiradas, retos, caminos completados).
- **Pantalla de victoria** al completar los tres caminos, con opción de jugar otra partida.
- **Responsive**: jugable en ordenador, tablet y móvil. Un solo archivo HTML sin dependencias de build (HTML + CSS + JavaScript vanilla, SVG para tablero y ruleta).

---

## 🎯 Cómo jugar

1. **Preparación**: en la pantalla inicial, elegid el número de jugadores (2 a 6) y escribid vuestros nombres. Ideal jugar en parejas mayor + joven.
2. **Salida**: todas las fichas empiezan en la casilla central **SALIDA**, donde confluyen los tres caminos.
3. **Turno**: el jugador activo pulsa **"Girar ruleta"**. La ruleta indica cuántas casillas avanzar y, en algunos sectores, un reto extra.
4. **Elegir camino**: si la ficha está en el centro, tras girar la ruleta hay que elegir por qué camino avanzar: **VIDA** (rosa), **CAMINO** (morado) o **MOMENTO** (turquesa). Se elige tocando la cinta del tablero o con los botones del panel; los caminos ya completados aparecen marcados con ✔ y el aviso indica cuáles faltan (repetirlos está permitido).
5. **Robar carta**: al caer en una casilla, aparece automáticamente una **carta del color de ese camino**. El jugador (¡o todo el grupo!) responde a la pregunta o realiza el reto en voz alta y pulsa **"¡Hecho!"**.
6. **Rebote (comodín ×2)**: cada jugador tiene 2 comodines de rebote por partida. Al responder una carta puede usar uno para que otra persona responda también la misma pregunta (con 2 jugadores pasa automáticamente al otro; con 3 o más, se elige pulsando su nombre en la carta).
7. **Retos de la ruleta** (¡avanzan 4 casillas!):
   - **♪ 4** → avanza 4 casillas y responde la carta **cantando**.
   - **📷 4** → avanza 4 casillas y el grupo hace una **pose de foto**.
   - **😜 4** → avanza 4 casillas y responde poniendo una **mueca divertida**.
   - **1 ↻** → avanza 1 casilla, responde la carta y **vuelve a girar** la ruleta.
8. **Casillas especiales**: cada camino tiene una casilla **★ estrella** (elige de qué baraja robar la carta, del color que quieras) y una **♥ corazón** (pregunta libre: cualquier persona del grupo te hace la pregunta que quiera).
9. **Completar un camino**: al llegar al final de un camino (dar la vuelta completa a la gota), la ficha regresa al centro y ese camino queda **completado** (se marca en el panel de progreso).
10. **Victoria**: gana quien complete **los tres caminos**… aunque en GenerAcción ganan todas las personas que comparten recuerdos. 💜

> **Nota de reglas de la versión digital**: no es necesario caer exacto en el centro; al llegar o superar la última casilla del camino, la ficha vuelve al centro y el camino se da por completado. Se puede volver a recorrer un camino ya completado (y seguir robando cartas).

---

## 🃏 Contenido de las cartas

La versión digital incluye las **90 cartas oficiales del juego (30 por baraja)**, las mismas de la edición física. Los textos se pueden editar fácilmente (ver [Personalización](#%EF%B8%8F-personalización)).

### 💗 Baraja VIDA (rosa) — recuerdos y memoria

| # | Pregunta | Subtítulo |
|---|----------|-----------|
| 1 | ¿Qué fotografía pondrías en la portada de tu vida? | Cuéntanos por qué la recuerdas. |
| 2 | ¿A qué jugabas de pequeño/a? | Enséñanos cómo se jugaba. |
| 3 | ¿Qué canción te emociona? | Tararéala si te atreves. |
| 4 | ¿Quién te enseñó algo importante? | ¿Qué te enseñó? |
| 5 | ¿Qué olor te lleva a tu infancia? | Describe ese lugar o momento. |
| 6 | Cuenta tu primer día de escuela o trabajo | ¿Cómo te sentías? |
| 7 | ¿Cuál fue un viaje inolvidable? | ¿Con quién fuiste? |
| 8 | Cuenta una tradición de tu familia | ¿Todavía se celebra? |
| 9 | Habla de un amigo o amiga de la infancia | ¿Qué hacíais juntos? |
| 10 | ¿Cuál es el mejor consejo que te han dado? | ¿Quién te lo dio? |
| 11 | ¿Cómo era tu casa de pequeño/a? | Describe tu rincón favorito. |
| 12 | ¿Qué invento te sorprendió más en tu vida? | ¿Cómo cambió tu día a día? |
| 13 | ¿Cuál era tu juego favorito? | ¿Con quién jugabas? |
| 14 | ¿Qué comida preparaba alguien de tu familia que nunca olvidarás? | ¿Qué la hacía especial? |
| 15 | ¿Qué celebración recuerdas con más cariño? | ¿Qué ocurría ese día? |
| 16 | ¿Cuál fue tu juguete favorito? | Descríbelo al grupo. |
| 17 | ¿Qué olor nunca debería desaparecer? | ¿Qué recuerdos te trae? |
| 18 | ¿Qué lugar te hace sentir como en casa? | Explícanos por qué. |
| 19 | ¿Cuál ha sido uno de los días más divertidos de tu vida? | ¿Qué ocurrió? |
| 20 | ¿Qué oficio admirabas cuando eras pequeño/a? | ¿Por qué? |
| 21 | ¿Qué fotografía te gustaría volver a ver? | ¿Quién aparece en ella? |
| 22 | ¿Qué persona te hacía reír mucho? | ¿Qué hacía para conseguirlo? |
| 23 | ¿Qué aprendiste de tus abuelos o de una persona mayor? | Compártelo con el grupo. |
| 24 | ¿Qué objeto antiguo conservas o recuerdas con cariño? | ¿Qué historia tiene? |
| 25 | ¿Cuál era tu rincón favorito para jugar o descansar? | Descríbelo. |
| 26 | ¿Qué palabra te recuerda a tu infancia? | Cuéntanos por qué. |
| 27 | ¿Qué tradición no debería perderse nunca? | Explícanos su significado. |
| 28 | ¿Qué habilidad aprendiste con esfuerzo? | ¿Quién te ayudó? |
| 29 | ¿Cuál ha sido uno de los mayores orgullos de tu vida? | Compártelo si te apetece. |
| 30 | ¿Qué recuerdo te hace sonreír siempre? | Cuéntanos esa historia. |

### 💜 Baraja CAMINO (morado) — imaginación y futuro

| # | Pregunta | Subtítulo |
|---|----------|-----------|
| 1 | Inventad una nueva profesión | Seguro que hay algo que tú tienes en mente. |
| 2 | ¿Cómo será la escuela dentro de 50 años? | Imaginadlo entre todos. |
| 3 | Inventad un aparato que ayude a las personas | ¿Cómo funciona? Ponedle nombre. |
| 4 | ¿Qué sueño te queda por cumplir? | ¿Qué necesitas para lograrlo? |
| 5 | Si pudieras aprender algo nuevo, ¿qué sería? | ¿Quién te lo podría enseñar? |
| 6 | Diseñad unas vacaciones juntos | ¿A dónde iríais? ¿Qué haríais? |
| 7 | ¿Qué le dirías a tu yo del futuro? | Una frase para recordar. |
| 8 | Inventad una fiesta nueva para el calendario | ¿Cómo se celebra? |
| 9 | Si tuvieras un superpoder para ayudar, ¿cuál sería? | ¿A quién ayudarías primero? |
| 10 | ¿Cómo mejoraríais vuestro barrio o pueblo? | Proponed una idea juntos. |
| 11 | Si pudierais mejorar una residencia, ¿qué añadiríais? | ¿Qué tiene de especial? |
| 12 | ¿Qué oficio de antes os gustaría recuperar? | ¿Por qué era importante? |
| 13 | Inventad un nuevo deporte. | ¿Cómo se juega? |
| 14 | Si pudierais construir un parque ideal, ¿cómo sería? | ¿Qué tendría? |
| 15 | Inventad un animal fantástico. | ¿Qué nombre tiene? |
| 16 | ¿Cómo sería un día perfecto para todos? | Construidlo entre el grupo. |
| 17 | Inventad un medio de transporte del futuro. | ¿Cómo funciona? |
| 18 | Si pudierais cambiar una norma del mundo, ¿cuál sería? | ¿Qué mejoraría? |
| 19 | Diseñad una máquina que haga sonreír a la gente. | ¿Qué hace exactamente? |
| 20 | ¿Qué invento os gustaría dejar a las próximas generaciones? | ¿Por qué? |
| 21 | Inventad un cuento entre todos. | Cada persona añade una frase. |
| 22 | ¿Cómo sería una ciudad pensada para todas las edades? | Dad tres ideas. |
| 23 | Si abrierais un museo, ¿qué habría dentro? | Ponedle nombre. |
| 24 | Inventad un nuevo sabor de helado. | ¿Cómo sabe? |
| 25 | ¿Qué tres cosas meteríais en una cápsula del tiempo? | Explicad vuestra elección. |
| 26 | ¿Cómo sería un colegio donde también aprendieran los mayores? | Imaginadlo juntos. |
| 27 | Inventad una mascota para vuestro equipo. | ¿Cómo se llama? |
| 28 | ¿Qué tradición nueva crearíais para unir generaciones? | Explicad cómo sería. |
| 29 | Si pudierais viajar a cualquier época, ¿cuál elegiríais? | ¿Qué os gustaría descubrir? |
| 30 | Inventad un lema para vuestro grupo. | Que todos puedan repetirlo. |

### 💚 Baraja MOMENTO (turquesa) — presente y conexión

| # | Pregunta | Subtítulo |
|---|----------|-----------|
| 1 | Describe un momento feliz que recuerdes. | Cuéntanos qué pasó, con quién estabas y por qué fue especial para ti. |
| 2 | ¿Qué te ha hecho reír hoy? | Compártelo con el grupo. |
| 3 | Mirad alrededor y decid algo bonito | Algo que veáis ahora mismo. |
| 4 | Haceos un cumplido | Uno para cada persona del grupo. |
| 5 | ¿Qué habéis aprendido hoy? | Aunque sea algo pequeñito. |
| 6 | Proponed un plan juntos para esta semana | ¡Y comprometeos a hacerlo! |
| 7 | ¿Qué canción define tu momento actual? | Ponedle banda sonora al día. |
| 8 | ¿Qué agradeces hoy? | Tres cosas, grandes o pequeñas. |
| 9 | Describe cómo te sientes ahora mismo | Con una palabra o un gesto. |
| 10 | Inventad un saludo secreto de equipo | Practicadlo hasta que salga perfecto. |
| 11 | ¿Qué es lo mejor de jugar juntos? | Decidlo mirándoos a los ojos. |
| 12 | Contad un chiste o una anécdota divertida | ¡A ver quién ríe primero! |
| 13 | ¿Qué persona te ha alegrado el día alguna vez? | Cuéntanos cómo lo hizo. |
| 14 | Descubrid tres cosas que tengáis todos en común. | Intentad encontrar tres cosas. |
| 15 | ¿Qué pequeño gesto hace feliz a otra persona? | Compártelo. |
| 16 | Sonreíd durante diez segundos sin hablar. | ¿Quién aguanta más? |
| 17 | ¿Qué palabra describe mejor este grupo? | Explicad vuestra elección. |
| 18 | Mirad a la persona de vuestra derecha y decidle algo positivo. | Con sinceridad. |
| 19 | ¿Qué actividad os gustaría repetir otro día? | Poned fecha si podéis. |
| 20 | ¿Qué os gustaría aprender unos de otros? | Comentad vuestras ideas. |
| 21 | Contad algo curioso sobre vosotros que casi nadie sepa. | Puede ser divertido. |
| 22 | Elegid un emoji que represente vuestro día. | Explicad por qué. |
| 23 | ¿Qué os hace sentir acompañados? | Compartid vuestra respuesta. |
| 24 | Haced una pose de equipo. | ¡Si podéis, haced una foto! |
| 25 | ¿Qué palabra os gustaría escuchar más a menudo? | Explicad por qué. |
| 26 | ¿Qué momento del día disfrutáis más? | Comparad respuestas. |
| 27 | Inventad un aplauso especial para el grupo. | Todos deben hacerlo. |
| 28 | ¿Qué habéis descubierto hoy de otra persona? | Compartidlo. |
| 29 | Sin hablar, decid quién necesita hoy un abrazo. | Abrazar es uno de los mejores regalos. |
| 30 | Terminad esta frase: "Hoy me voy con..." | Compartid una palabra o una emoción. |


---

## 🎡 La ruleta

8 sectores, igual que en el juego físico:

| Sector | Efecto |
|--------|--------|
| **4** ♪ (rosa) | Avanza 4 casillas y responde la carta cantando |
| **1** ↻ (morado) | Avanza 1 casilla, responde y vuelve a girar |
| **2** (turquesa) | Avanza 2 casillas |
| **3** (turquesa) | Avanza 3 casillas |
| **4** 📷 (morado) | Avanza 4 casillas y haced una pose de foto de grupo |
| **4** 😜 (turquesa) | Avanza 4 casillas y responde con una mueca divertida |
| **2** (morado) | Avanza 2 casillas |
| **3** (rosa) | Avanza 3 casillas |

---

## 🚀 Despliegue

El juego es un único archivo estático, sin build ni dependencias de servidor.

**GitHub Pages**
1. Sube `index.html` a la raíz del repositorio.
2. En *Settings → Pages*, selecciona la rama `main` y guarda.

**Vercel**
1. Conecta el repositorio en [vercel.com](https://vercel.com) (*Add New → Project*).
2. Framework Preset: **Other**, sin build command. Pulsa **Deploy**.
3. Cada `git push` redespliega automáticamente.

También funciona abriendo `index.html` directamente en el navegador, sin conexión (salvo las fuentes de Google Fonts, que tienen fallback al sistema).

---

## 🛠️ Personalización

Todo se edita directamente en `index.html`:

- **Cartas** → constante `DECKS` (tres arrays con pares `["Pregunta", "Subtítulo"]`). Añade o sustituye entradas para llegar a las 30 cartas por baraja de la edición física.
- **Ruleta** → constante `WHEEL` (etiqueta, casillas a avanzar, color y reto extra de cada sector).
- **Colores corporativos** → variables CSS en `:root` y constante `LOOPS`.
- **Forma del tablero** → parámetros `tip` (punta), `ang` (orientación), `len` (longitud) y `w` (anchura) de cada gota en `LOOPS`. Las casillas se recolocan solas sobre el nuevo trazado.
- **Número de casillas por camino** → constante `CELLS`.
- **Fichas de jugador** → constante `TOKEN_COLORS`.

---

## 📁 Estructura del proyecto

```
├── index.html    # Juego completo: HTML + CSS + JS + SVG
└── README.md     # Este archivo
```

**Tecnologías**: HTML5, CSS3, JavaScript vanilla y SVG. Sin frameworks ni dependencias. Tipografías: Baloo 2 y Nunito (Google Fonts).

---

## 🗺️ Hoja de ruta (ideas futuras)

- [ ] Calcar el trazado exacto del símbolo desde el archivo vectorial oficial de Macrosad.
- [ ] Modo multijugador online a distancia (salas con código).
- [ ] Guardado de partida en curso.

---

## 💜 Créditos

Juego original **GenerAcción** © [Macrosad](https://www.macrosad.com) — *Conectamos generaciones*.
Versión digital desarrollada como adaptación del juego de mesa físico (tablero-puzle, ruleta, 90 cartas y 6 fichas).
