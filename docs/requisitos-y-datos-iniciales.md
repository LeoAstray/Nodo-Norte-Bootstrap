# Nodo Norte: requisitos y datos iniciales

Fecha de recopilación: 27/10/2026.

Este documento reúne el enunciado, las historias de usuario del cliente y los datos de las dos fotografías. Incluye una versión organizada, la transcripción de las fotos y el texto completo de los dos PDF (13 y 3 páginas). No sustituye las fichas que hay que rellenar y entregar.

Documentos de trabajo relacionados: [briefing para la profesora](briefing-inicial.md) y [roadmap](roadmap.md). El repositorio y el [Project](https://github.com/users/LeoAstray/projects/1) ya están creados; la tarea de la [ficha 2](https://github.com/LeoAstray/Nodo-Norte-Bootstrap/issues/1) está registrada y el backlog se elaborará después.

## 1. Fuentes y criterio de lectura

| Fuente | Archivo | Contenido |
| --- | --- | --- |
| PDF | [practica-scrum-bootstrap-alumnado.pdf](fuentes/pdf/practica-scrum-bootstrap-alumnado.pdf) | Enunciado, requisitos, organización, evaluación y fichas; 13 páginas. |
| HU | [historias-de-usuario-nodo-norte.pdf](fuentes/pdf/historias-de-usuario-nodo-norte.pdf) | Diez historias identificadas, explicación y preparación del backlog; 3 páginas. HU-10 solo corresponde al trío. |
| F1 | [WhatsApp Image 2026-10-27 at 09.32.06.jpeg](fuentes/fotos/entrevista-01.jpeg) | Identidad, formularios, socios y contacto. |
| F2 | [WhatsApp Image 2026-10-27 at 09.32.06 (1).jpeg](fuentes/fotos/entrevista-02.jpeg) | Eventos, valores, pagos, tipografía y lugares. |

Los requisitos académicos proceden del PDF; las historias, del documento HU; las preferencias de la entrevista, de las fotos. Las recomendaciones se identifican como tales. Las lecturas dudosas se marcan y los tachados no se consideran decisiones vigentes. No se inventan eventos, datos de contacto, miembros, fechas ni historias de usuario.

## 2. Contexto y datos iniciales de la comunidad

Fuentes: PDF, página 1; F1 y F2.

| Dato | Información disponible |
| --- | --- |
| Nombre | Nodo Norte; en F1 aparece «NodoNorte». Confirmar la grafía definitiva. |
| Naturaleza | Comunidad tecnológica local sin ánimo de lucro, de estudiantes y profesionales. |
| Actividad | Charlas, talleres y hackatones; una reunión mensual. |
| Objetivos de la web | Conseguir inscripciones a eventos, nuevas personas socias y propuestas de charlas. |
| Público | Alumnado de FP y universidad, perfiles junior y curiosos de 16 a 35 años. |
| Valores | Cercanía, comunidad, aprendizaje compartido y software libre. |
| Zona y frecuencia | Solo Coruña; primer martes de cada mes, según F2. |
| Lugares anotados | «Uni», «Singular» y «Wekco»; confirmar denominaciones y direcciones, especialmente la lectura del último. |
| Incentivo | Networking después de las charlas. |
| Nivel | Se mencionan charlas de iniciación, «nivel 1», y niveles inicial, medio y avanzado en la información de eventos. |
| Exclusión explícita | No tienda online. |

La práctica se hace en aproximadamente semana y media y dos sprints. Hay cinco parejas y un trío. Cada pareja entrega tres páginas. El trío añade **Sobre nosotros**, con historia y equipo de la comunidad; su tercer miembro no es Scrum Master en ningún sprint y dirige ambas Reviews.

Objetivos docentes: aplicar Scrum; priorizar y estimar historias; diseñar antes de maquetar; construir una web responsive y accesible con Bootstrap 5.3; y trabajar en equipo con Git, con commits de todos los miembros.

## 3. Páginas y contenido

Fuentes: PDF, páginas 1 y 3; HU, páginas 1-2; F1 y F2.

| Página | Contenido |
| --- | --- |
| Inicio: `index.html` | Presentación de la comunidad y acceso al resto. Portada minimalista que llame la atención. HU-02 exige destacar el próximo evento para poder apuntarse sin buscarlo. La fila de ejemplo de la ficha 2 no sustituye esa historia. |
| Eventos: `eventos.html` | Próximos eventos con fecha, nivel y plazas (HU-04), fotos de ediciones anteriores (HU-03) y ficha de ponente sin salir de la página (HU-05). Debe aparecer la ubicación. Los apuntes mencionan fotos, diapositivas y blog; su distribución está por concretar. |
| Únete: `unete.html` | Inscribirse a eventos, hacerse socio y proponer charlas, mediante formularios. |
| Sobre nosotros: solo el trío | Historia y equipo. El PDF no indica un nombre de archivo para esta cuarta página. |

Cada evento debe indicar: **título, fecha y hora, lugar, ponente, nivel, plazas y descripción corta**. Los niveles anotados son inicial, medio y avanzado; el último aparece abreviado en la foto.

No hay eventos concretos, ponentes, fechas, horarios, aforos ni direcciones facilitados en estos archivos. La mención de blog no se convierte por sí sola en una cuarta página obligatoria para las parejas.

### Historias de usuario entregadas por el cliente

Fuente: HU, páginas 1-2. Se conservan los identificadores y el texto completo. **HU-01 a HU-09 corresponden a todos los equipos; HU-10 solo al trío.** Este inventario todavía no es el backlog: no asigna prioridades, horas, sprints ni responsables.

| ID | Requisito | Historia literal del cliente |
| --- | --- | --- |
| HU-01 | Menú en el móvil | Como visitante, quiero un menú que funcione en el móvil, para moverme entre las páginas. |
| HU-02 | Próximo evento en portada | Como visitante, quiero ver el próximo evento destacado en la portada, para apuntarme sin buscarlo. |
| HU-03 | Ediciones anteriores | Como visitante, quiero ver fotos de eventos pasados, para hacerme una idea de cómo son. |
| HU-04 | Calendario de eventos | Como visitante, quiero ver los próximos eventos con fecha, nivel y plazas, para elegir a cuál ir. |
| HU-05 | Ficha de ponente | Como visitante, quiero ver quién da una charla sin salir de la página, para decidir si me interesa. |
| HU-06 | Inscripción | Como visitante, quiero apuntarme a un evento con un formulario, para reservar plaza. |
| HU-07 | Hazte socio | Como socio potencial, quiero saber qué incluye la cuota, para decidir si me apunto. |
| HU-08 | Proponer charla | Como ponente, quiero proponer una charla con un formulario, para participar. |
| HU-09 | Newsletter | Como visitante, quiero dejar mi correo en el footer, para recibir los eventos del mes. |
| HU-10 | Sobre nosotros (solo el trío) | Como visitante, quiero conocer la historia y el equipo de la comunidad, para saber quién está detrás. |

Consecuencias para los requisitos:

- HU-02 convierte el próximo evento destacado en una necesidad expresa del cliente; no queda solo como ejemplo de la ficha 2.
- HU-03 exige fotografías de eventos pasados, además de la información de próximos eventos de HU-04.
- HU-05 exige consultar al ponente sin salir de la página. Un modal es una posible solución, todavía no una decisión aprobada.
- HU-07 exige explicar qué incluye la cuota. Las fotos añaden la petición de formularios: confirmar el alcance del alta de socio.
- **HU-09 incorpora la newsletter al inventario de requisitos y sitúa la captación de correo en el footer.** Una palabra tachada en F2 no demuestra su cancelación. Preguntar a la profesora por la discrepancia y por el comportamiento esperado; no se presupone envío real de correos.
- HU-10 amplía el alcance solo si el equipo es el trío.

## 4. Identidad visual y contacto

Fuentes: F1 y F2; son preferencias recogidas en los apuntes.

- Estética moderna y limpia, minimalista, con una portada que llame la atención.
- Nada de gris ni azul marino; «nada que parezca una web corporativa».
- Referencias: WordPress, un nombre que parece «Lareira» y cosas retro. El segundo nombre es dudoso y no hay URLs.
- Tipografía anotada: **Comic Sans**. Para títulos, «un poco más estética», sin familia concreta.
- Redes: Instagram, Mastodon y Bluesky.
- Contacto por correo; no teléfono.
- No se facilitan cuentas, enlaces ni correo de la comunidad. El correo de la profesora es académico y no se debe presentar como contacto público de Nodo Norte.

No hay paleta con códigos, logotipo, tamaños ni fuente de títulos aprobados. Las decisiones visuales deben cumplir el contraste AA del enunciado.

## 5. Formularios, socios y pagos

Fuentes: F1 y F2; mínimo técnico en PDF, página 3.

### Inscripción a eventos

Datos anotados: nombre, correo, evento al que apuntarse, si es la primera vez y nivel de conocimientos.

### Propuesta de charla

Datos anotados: tema, nivel, tipo, duración y descripción.

### Newsletter (HU-09)

La persona visitante debe poder dejar su correo en el footer para recibir los eventos del mes. Es una historia explícita del documento HU. Confirmar si basta validación/confirmación visual, su presencia en todas las páginas y si el tachado de F2 pretendía modificarla. No se da por exigida una integración de correo.

### Hacerse socio

- Alta mediante formulario, con campos pendientes de concretar.
- Cuota «voluntaria de **10 € anuales**»; confirmar cómo se aplica esa voluntariedad.
- Plazas aseguradas en talleres; otra nota habla de plazas prereservadas y aviso antes que al resto. Confirmar garantía frente a prerreserva.

### Pagos y alcance funcional

F2 dice: «Métodos: transferencia, datos personales, correo electrónico, paypal». Se identifican transferencia y PayPal como métodos mencionados; la relación de «datos personales» y «correo electrónico» con el alta o pago no se explica. No hay IBAN ni cuenta de PayPal.

El PDF exige maquetación y validación Bootstrap. **Los documentos no especifican servidor, base de datos, envío real de correos, almacenamiento de inscripciones, gestión real de aforo ni integración de pagos.** Hay que concretar ese alcance; no se da por exigido por la sola mención de los métodos.

El mínimo técnico es al menos un formulario con **4 campos de 3 tipos distintos**, `label` y validación Bootstrap. Además, la página Únete debe representar las tres acciones solicitadas por el cliente; su distribución en formularios está por decidir.

## 6. Diseño y requisitos técnicos

Fuente: PDF, páginas 2-3.

### Diseño del Sprint 1

- Wireframes de las tres páginas en papel, Penpot o similar; el ejemplo de la ficha 3 los contempla en móvil y escritorio.
- Moodboard en Canva, Figma o Penpot, con capturas de webs, colores, tipografías, fotos e iconos. Sirve para acordar el estilo antes de la guía.
- Guía de estilos PDF o PNG: colores con códigos y usos; tipografías con familia, tamaños y usos; botones; formularios; iconos; imágenes.
- Textos reales, sin lorem ipsum; imágenes coherentes con licencia libre. El PDF cita Unsplash y Pexels.
- Aprobación del diseño en la Review del Sprint 1 antes de la maquetación completa. El calendario incluye una plantilla base con navbar y footer durante Sprint 1.

### Maquetación

| Requisito | Mínimo exigido |
| --- | --- |
| Bootstrap | 5.3 desde el CDN oficial, para posicionamiento y componentes. |
| CSS propio | Solo lo que Bootstrap no cubre, en archivo separado y comentado. |
| HTML semántico | `header`, `nav`, `main`, `section`, `footer`; un `h1` por página; `alt` en todas las imágenes. |
| Rejilla | `container`, `row` y columnas con al menos dos breakpoints; ejemplo `col-12 col-md-6 col-lg-4`. |
| Navbar | Horizontal en escritorio, desplegable en móvil y página actual marcada. |
| Cards | Para eventos, ponentes o actividades. |
| Carousel o acordeón | Al menos uno de los dos. |
| Modal | Al menos uno, con contenido útil. |
| Formulario | 4 campos como mínimo, de 3 tipos distintos, `label` y validación Bootstrap. |
| Tabla | Calendario o cuotas, con al menos dos clases Bootstrap, como `table-striped` y `table-hover`. |
| Iconos | Bootstrap Icons con uso coherente. |
| Footer | Al menos dos columnas con información útil. |
| Comentarios | Explicación breve de cada bloque HTML y cada regla de CSS propio. |

### Definition of Done

Una tarea pasa a **Hecho** solo cuando cumple todo:

1. HTML validado en W3C sin errores.
2. Buena visualización a **360, 768 y 1280 px**, sin scroll horizontal.
3. Contraste AA; acceso mediante Tab y Mayús+Tab a enlaces, botones y campos en orden lógico; activación con Intro o Espacio; Esc cierra el modal; foco siempre visible.
4. Sigue la guía de estilos.
5. Está subida a `main` con commit descriptivo.

## 7. Organización Scrum y fichas

Fuente: PDF, páginas 1-3 y anexo de páginas 5-13.

- Profesora **Mónica Pérez Sueiro**: cliente y Product Owner; responde entrevista, acuerda prioridades y acepta o rechaza trabajo en cada Review.
- Todos los miembros son Developers: diseñan, maquetan, prueban y suben código.
- Un Scrum Master en Sprint 1 y otro en Sprint 2: modera Daily, controla tiempos, actualiza tablero y rellena seguimiento.
- **Daily de 5 minutos** al comenzar cada sesión, delante del tablero: progreso al Sprint Goal, trabajo de hoy y bloqueos.
- Registro en fichas y en **GitHub Projects: Por hacer / En curso / Hecho**.

| Artefacto | Registro | Momento |
| --- | --- | --- |
| Necesidades del cliente | Ficha 1 | Arranque. |
| Páginas | Ficha 2 | Arranque. |
| Product Backlog y Product Goal | Ficha 3 | Arranque; revisión en Planning y Review. |
| Sprint Backlog y Sprint Goal | Ficha 4 y tablero | Cada Planning. |
| Incremento | Rama `main` | Cada Review. |
| Seguimiento y retrospectiva | Ficha 5 | Cierre de cada sprint. |

Una copia de las fichas por equipo, en `docs/`. Las filas amarillas son ejemplos: borrarlas o sustituirlas. Los campos completos y ejemplos están transcritos en el anexo de este documento.

Las historias usan el formato **Como [tipo de usuario], quiero [algo], para [beneficio]**. La lista entregada ya está disponible en el documento HU y se recoge íntegramente en la sección 3. HU-04 aparece también como ejemplo en el enunciado. Crear una fila por historia y por tarea técnica/de diseño, con recursos, prioridad, sprint, horas y estado. Capacidad orientativa: **5 horas de equipo en Sprint 1 y 6 en Sprint 2**; priorizar si se supera.

La hoja HU concreta además:

- Conservar en la descripción la historia completa tal como la entrega el cliente; no cambiarla sin preguntarle.
- Una historia expresa una necesidad, es comprobable en pantalla, cabe en un sprint y describe el qué, no el componente técnico.
- Prioridad Alta, Media o Baja; horas de equipo incluidas las pruebas; sprint 1 o 2; estado inicial Por hacer.
- Añadir tareas propias T1, T2... para wireframes, moodboard, guía, repositorio/README y validación final.
- Ordenar la lista empezando por prioridad Alta del Sprint 1 y sumar horas. Las historias de menor prioridad que no quepan pueden quedar sin sprint asignado; no significa borrar los mínimos académicos obligatorios. Acordar esa relación con la Product Owner.
- En cada Planning, descomponer las historias elegidas en tareas de una sesión o menos, para una persona o la pareja, en ficha 4 y tablero.
- La historia está hecha cuando cumple su necesidad y toda la Definition of Done. «Casi» no es Hecho.
- Los cuatro eventos, las personas Ana/Luis, los componentes, la hora estimada y la prioridad del ejemplo de HU-04 son ejemplos de planificación, no datos o asignaciones ya aprobados para nuestro equipo.

Si el cliente pide cambios en Review 1, redactarlos como nuevas historias, añadirlos al backlog y decidir en Planning 2 si entran.

### Calendario aproximado

| Fase | Duración | Trabajo |
| --- | --- | --- |
| Arranque | 1 sesión | Presentación; entrevista colectiva de 25 min, dos preguntas por turno de cada equipo, preparadas con cuestionario y 5W1H; todos apuntan; fichas 1 y 2. |
| Backlog y Planning 1 | Media sesión | Ficha 3 con prioridades, sprints, horas y tareas de diseño; Product Goal; Sprint Goal, ficha 4 y tablero; crear repositorio e invitar a profesora. |
| Sprint 1 | 3 sesiones | Daily; wireframes, moodboard, guía y plantilla base con navbar/footer en las tres páginas. |
| Review 1, retrospectiva y Planning 2 | 1 sesión | Review en la mesa de 4 minutos por equipo; aceptación/cambios; ficha 5 mientras se espera; cambiar Scrum Master y planificar Sprint 2. |
| Sprint 2 | 3 sesiones | Daily; páginas, formularios y componentes; última sesión para validación, responsive, accesibilidad y README. |
| Review 2 y retrospectiva | 1 sesión | Presentación de 10 minutos por equipo con lo disponible en `main`; ficha 5 final. |

Goals orientativos: diseño aprobado y plantilla base en Sprint 1; web completa, validada y lista para entregar en Sprint 2. Cada equipo escribe los suyos. No hay fechas de calendario ni fecha de entrega concretas en las fuentes.

## 8. GitHub, estructura y entrega

Fuente: PDF, páginas 1-4.

**Sí: se exige un único repositorio compartido por equipo en GitHub**, creado al planificar Sprint 1, e invitar a la profesora: **monicaprofeciclos@gmail.com**. Debe haber commits de todos los miembros, al menos uno por tarea del tablero, con mensajes descriptivos. Las Reviews muestran lo que haya en `main`.

Se exige GitHub Projects con las tres columnas indicadas. El PDF no especifica repositorio público/privado, estrategia de ramas, pull requests obligatorias ni publicación con GitHub Pages.

### Estructura indicada

```text
nombre-comunidad/
├── index.html
├── eventos.html
├── unete.html
├── css/
│   └── estilos.css
├── js/
│   └── validacion.js
├── img/
├── docs/
│   ├── fichas-practica.pdf
│   ├── guia-estilos.pdf
│   └── wireframes/
└── README.md
```

### Organización actual de la documentación

La documentación de trabajo está en `docs/`: [requisitos](requisitos-y-datos-iniciales.md), [briefing](briefing-inicial.md) y [roadmap](roadmap.md). Los PDF originales están en `docs/fuentes/pdf/` y las fotos de la entrevista en `docs/fuentes/fotos/`, con nombres `entrevista-01.jpeg` y `entrevista-02.jpeg`. La tabla de fuentes enlaza a cada archivo y conserva sus nombres originales para identificarlo.

Las rutas de estructura y entrega se expresan desde la raíz del repositorio; los enlaces Markdown son relativos a cada documento. Los árboles y textos transcritos del enunciado conservan las rutas originales exigidas. Los documentos finales como `docs/fichas-practica.pdf` y `docs/guia-estilos.pdf` se incorporarán cuando se elaboren; los PDF fuente no los sustituyen. Índice del repositorio: [README](../README.md).

Páginas e imágenes con nombres según contenido, sin espacios ni tildes. `nodo-norte` sería un nombre sugerido para carpeta/repositorio, no una imposición del PDF.

El apartado de diseño permite guía PDF o PNG, pero el árbol muestra PDF: usar PDF permite ajustarse también al árbol. El moodboard es obligatorio aunque no tenga ruta propia en el árbol.

README mínimo: **autores, objetivo, Scrum Master de cada sprint, estructura, tecnologías y enlace al tablero**.

Entrega: cuenta el **último commit válido anterior al plazo**. Un miembro sube a Moodle la carpeta comprimida con esta estructura y pone el enlace al repositorio en los comentarios. Esta recopilación no sustituye las fichas y demás entregables.

## 9. Evaluación

Fuente: PDF, página 4.

| Criterio | Peso | Qué se valora |
| --- | --- | --- |
| Proceso Scrum | 15 % | Fichas, backlog con prioridades/horas, tablero, Goals, Dailies y retrospectivas. |
| Diseño | 20 % | Wireframes, moodboard y guía completos y aplicados. |
| Funcionalidad | 25 % | Páginas y componentes funcionando, responsive y accesibles. |
| Código y Git | 30 % | HTML validado/semántico, CSS justificado/comentado, README y commits de todos. |
| Review final y defensa | 10 % | Presentación de 10 minutos y respuestas. |

Nota individual, que puede variar por commits, desempeño como Scrum Master y defensa. La profesora puede pedir defensa individual o examen práctico adecuado al nivel.

Suspenso inmediato si:

1. No se entrega en tiempo y forma.
2. No se sigue la estructura.
3. El HTML no está validado o el CSS está mal enlazado.
4. No se usa Bootstrap para posicionamiento y componentes.
5. No se usan elementos estructurales HTML.
6. No se usa Git correctamente; quien no tenga commits suspende.
7. **«Se usa IA para realizarla».** Es una condición literal del enunciado; las fuentes no explican excepciones ni delimitan su aplicación a tareas auxiliares como transcripción y organización.

## 10. Dudas seleccionadas y cuestiones para más adelante

### Selección vigente del briefing

El equipo ha reducido el [briefing inicial](briefing-inicial.md) a estas siete preguntas. Esta selección delimita qué se quiere preguntar ahora, sin eliminar los requisitos del enunciado ni dar por resueltas otras cuestiones. Las respuestas anotadas no se incorporan todavía a este documento.

| Pregunta | Tema que se quiere aclarar |
| --- | --- |
| Q01 | Funcionamiento real o simulado de formularios y pagos. |
| Q02 | Newsletter: alcance y presencia del registro. |
| Q03 | Plazas, inscripción y comportamiento con aforo completo. |
| Q04 | Cuota voluntaria, ventajas, reserva de plazas y alta de socios. |
| Q05 | Material aportado por el cliente y cantidad de ejemplos. |
| Q06 | Campos, opciones y obligatoriedad en los formularios. |
| Q07 | Grafía de la marca, logotipo y referencia visual. |

### Cuestiones que se resolverán según se necesiten

- Equipo, pareja/trío, responsables, Scrum Masters y fechas de sprints, Reviews y entrega al organizar el trabajo.
- Datos de la ficha de ponente cuando se diseñe esa sección.
- Prioridades, estimaciones y criterios de aceptación al elaborar el backlog y planificar cada sprint.
- Paleta, fuente de títulos y otros detalles visuales al preparar el diseño.
- Nombres y direcciones de los lugares, correo, redes y datos concretos de pago al preparar el contenido correspondiente.
- Distribución de fotos, diapositivas y blog dentro de las páginas previstas cuando se diseñen esas secciones.
- Accesos, formatos de documentación y cualquier aclaración académica cuando afecten a una tarea o a la entrega.

Estas cuestiones no amplían el briefing ni se consideran todas condiciones previas para crear el Project o preparar el backlog. Se mantienen como aspectos por concretar cuando afecten al trabajo.

## 11. Orden acordado y próximos pasos

El repositorio GitHub ya está creado. El orden pendiente es **briefing y respuestas -> completar ficha 2 y revisar accesos del Project ya configurado -> Product Backlog -> planificación y ejecución de los sprints**. El calendario original del enunciado, conservado en la sección 7, agrupa backlog y creación del repositorio en el Planning 1; aquí se prepara antes la infraestructura para trabajar después sobre ella.

1. Usar las siete preguntas seleccionadas en [briefing-inicial.md](briefing-inicial.md). Revisar conjuntamente las respuestas más adelante e incorporar entonces las decisiones a requisitos y fichas 1 y 2; el resto de dudas se resolverá cuando se necesite.
2. Revisar los accesos del repositorio GitHub ya creado, invitar a compañeros y profesora y completar la estructura y el README inicial. Cada miembro usa su identidad de Git; los demás clonan el mismo repositorio.
3. Mantener el [Project ya configurado](https://github.com/users/LeoAstray/projects/1/views/2) con Por hacer / En curso / Hecho y comprobar acceso del equipo. Completar la [tarea de la ficha 2](https://github.com/LeoAstray/Nodo-Norte-Bootstrap/issues/1) antes de elaborar el backlog.
4. Preparar la ficha 3: copiar historias con sus IDs, añadir tareas técnicas/de diseño, acordar Product Goal y prioridades, estimar incluidas pruebas y comprobar capacidad. Esta tarea queda para después de las fases anteriores.
5. Planificar Sprint 1: Scrum Master, Sprint Goal y tareas de una sesión o menos en ficha 4/tablero, con responsables.
6. Sprint 1: Daily, wireframes, moodboard, guía y plantilla base. Review de 4 minutos, retrospectiva y registro de cambios.
7. Rotar Scrum Master y planificar Sprint 2; ejecutar páginas, formularios y componentes con commits de todos.
8. Verificar necesidades de las historias y Definition of Done; completar README y documentación en `docs/`; tener el incremento en `main`.
9. Review final de 10 minutos, retrospectiva y ZIP en Moodle con enlace al repositorio antes del plazo.

El [roadmap detallado](roadmap.md) recoge dependencias, resultados y condiciones de cierre. No hay fechas comprometidas ni un backlog ya elaborado.

Git guarda el historial; GitHub aloja el repositorio compartido; GitHub Projects es el tablero. En esta práctica se exigen los tres. Publicar la web en un alojamiento no figura como requisito.

## 12. Transcripción de las fotografías

Se mantiene el orden del contenido, normalizando ortografía y puntuación para facilitar la lectura. Las dudas y tachados se indican entre corchetes.

### F1: fotografía 1 de la entrevista

Archivo: [entrevista-01.jpeg](fuentes/fotos/entrevista-01.jpeg). Nombre original: «WhatsApp Image 2026-10-27 at 09.32.06.jpeg».

Título: **Preguntas**.

- Nada de gris y azul marino (nada que parezca una web corporativa). Que sea moderna y limpia.
- Formulario (nombre, correo), apuntarse al evento y si es su primera vez. Nivel que tienen de front.
- Formulario (tema, nivel, tipo [paréntesis que parece «charla, nivel», seguido de texto tachado], duración, descripción) para proponer una charla.
- Socios: plazas aseguradas en los talleres; cuota voluntaria de 10 € anuales.
- Todo con formularios.
- Redes: [texto tachado]; Instagram; «Mastodont» [otra palabra tachada delante]; «Blusky»; correo. No teléfono.
- «NodoNorte» -> nombre.
- Minimalista pero que la portada llame la atención. Ej.: WordPress, «Lareira» [lectura dudosa], cosas retro.
- Plazas prereservadas y aviso [pequeño fragmento tachado] antes que todos los demás.

### F2: fotografía 2 de la entrevista

Archivo: [entrevista-02.jpeg](fuentes/fotos/entrevista-02.jpeg). Nombre original: «WhatsApp Image 2026-10-27 at 09.32.06 (1).jpeg».

- Ubicación de los eventos aparece.
- Fotos, diapositivas y blog.
- ¿Incentivos? Sí, networking después de las charlas.
- Métodos: transferencia, datos personales, correo electrónico, PayPal.
- Valores: cercanía, comunidad, aprendizaje compartido, software libre.
- En cada evento: título; fecha y hora; lugar; ponente; nivel (inicial, «media», «ava» [abreviado]); plazas; descripción corta.
- Charlas de iniciación (nivel 1).
- [Palabra tachada que parece «Newsletter»; no se considera requisito vigente.] Tipografía: Comic Sans. Título: [fragmento tachado] un poco más estética.
- No tienda online.
- Eventos en solo Coruña, primer martes de cada mes.
- Tres sitios: Uni, Singular y «Wekco» [lectura pendiente de confirmar].

## 13. Transcripción completa del PDF

Texto extraído de las 13 páginas del original. Se conservan enunciados, ejemplos, campos y pies de página. Las tablas y saltos de línea aparecen como texto plano en cada bloque; las celdas vacías y su maquetación se consultan en el PDF. Las secciones anteriores ofrecen la versión organizada.

### Página 1

```text
Práctica DIW: Scrum y Bootstrap por parejas
Presentación
Por parejas, en semana y media y dos sprints, diseñaréis y maquetaréis con Bootstrap la web de una 
comunidad tecnológica, trabajando con Scrum. Cada equipo entrevista al cliente, construye su Product 
Backlog y entrega una web de tres páginas al final del segundo sprint.
Equipos: cinco parejas y un trío. El trío añade una cuarta página, Sobre nosotros, con la historia y el 
equipo de la comunidad. Su tercer miembro, que no es Scrum Master en ningún sprint, dirige las dos 
Reviews.
Objetivos:
• Aplicar Scrum en un proyecto real: roles, artefactos y eventos.
• Priorizar y estimar las historias de usuario de un cliente y planificarlas por sprints.
• Diseñar antes de maquetar: wireframes y guía de estilos.
• Maquetar una web responsive y accesible con la rejilla y los componentes de Bootstrap 5.3.
• Trabajar en equipo con Git, con commits de todos los miembros.
Temática: la web de una comunidad tecnológica
Todos los equipos hacen la web de una comunidad tecnológica local que organiza charlas, talleres y 
hackatones. La profesora hace de cliente, como junta directiva de la comunidad: lo que no esté aquí 
hay que preguntárselo en la entrevista.
Aspecto Lo que se sabe del cliente
Quién es Una comunidad sin ánimo de lucro de estudiantes y profesionales de la zona 
que se reúne una vez al mes.
Qué quiere Que la gente se apunte a los eventos, se haga socia y se anime a dar una 
charla.
Público Alumnado de FP y universidad, perfiles junior y curiosos de 16 a 35 años.
Páginas Inicio, Eventos (próximos eventos, ponentes y ediciones anteriores) y Únete 
(inscripción, hacerse socio y proponer una charla).
Roles, artefactos y fichas
La profesora es el cliente y la Product Owner; vosotros sois los Developers y os turnáis el papel de 
Scrum Master, uno en cada sprint.
Rol Quién Qué hace en esta práctica
Product Owner y 
cliente
La profesora Responde la entrevista, decide prioridades con 
vosotros y acepta o rechaza el trabajo en cada 
Review.
Scrum Master Un miembro en el 
Sprint 1 y otro en el 
Sprint 2
Modera la Daily, controla los tiempos, mantiene el 
tablero al día y rellena el seguimiento del sprint.
Developers Todos los miembros Diseñan, maquetan, prueban y suben el código.
Todo se registra en las fichas del anexo de este documento y en un tablero de GitHub Projects con tres 
columnas: Por hacer, En curso y Hecho.
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 1
```

### Página 2

```text
Artefacto Dónde se registra Cuándo
Necesidades del cliente Ficha 1: Información del cliente Arranque
Páginas de la web Ficha 2: Requisitos mínimos – 
Páginas
Arranque
Product Backlog y Product 
Goal
Ficha 3: Product Backlog Arranque; se revisa en cada 
Planning y Review
Sprint Backlog y Sprint 
Goal
Ficha 4: Tareas y tablero Cada Sprint Planning
Incremento Rama main del repositorio Cada Review
Seguimiento y 
retrospectiva
Ficha 5: Seguimiento y 
Retrospectiva de Sprint
Al cerrar cada sprint
Definition of Done. Una tarea solo pasa a Hecho si cumple todo esto:
• El HTML pasa el validador del W3C sin errores.
• Se ve bien a 360 px, 768 px y 1280 px, sin scroll horizontal.
• Los textos cumplen contraste AA y todo se puede usar con teclado: con Tab y Mayús+Tab se 
llega a todos los enlaces, botones y campos en un orden lógico; Intro o Espacio los activa; Esc 
cierra el modal; y siempre se ve qué elemento tiene el foco.
• Sigue la guía de estilos.
• Está subido a main con un commit descriptivo.
Calendario de sprints y reuniones
Cada sesión de trabajo empieza con una Daily de 5 minutos delante del tablero: cómo vais hacia el 
Sprint Goal, qué haréis hoy y qué os bloquea.
Fase Duración 
aproximada
Qué hacéis
Arranque 1 sesión Presentación de la práctica. Entrevista colectiva con el 
cliente (25 min): cada equipo hace dos preguntas por turno, 
preparadas con el cuestionario inicial y el 5W1H, y todos 
apuntan las respuestas. Rellenáis las fichas 1 y 2.
Product Backlog y 
Sprint 1 Planning
½ sesión Con las historias de usuario creáis el Product Backlog en la 
ficha 3: prioridad, sprint y horas de cada una, más las tareas 
de diseño. Escribís el Product Goal. Planning: Sprint Goal y 
tareas en la ficha y en el tablero. Creáis el repositorio e 
invitáis a la profesora.
Sprint 1 3 sesiones Daily. Wireframes de las tres páginas, moodboard, guía de 
estilos y plantilla base con Bootstrap: navbar y footer en las 
tres páginas.
Sprint 1 Review, 
Retrospectiva y 
Sprint 2 Planning
1 sesión Review en vuestra mesa con la Product Owner, 4 minutos 
por equipo: enseñáis diseño y plantilla base, y ella acepta o 
pide cambios. Mientras esperáis, retrospectiva en la ficha 5. 
Después cambia el Scrum Master y planificáis el Sprint 2.
Sprint 2 3 sesiones Daily. Las tres páginas, el formulario y los componentes. En 
la última: validación, responsive, accesibilidad y README.
Sprint 2 Review y 
Retrospectiva final
1 sesión Presentación de la web al cliente, 10 minutos por equipo, 
con lo que haya en main. Retrospectiva final en la ficha 5.
Sprint Goal orientativo: en el Sprint 1, diseño aprobado por el cliente y plantilla base en Bootstrap; en el 
Sprint 2, web completa, validada y lista para entregar. Cada equipo escribe el suyo.
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 2
```

### Página 3

```text
En la Review del Sprint 1 el cliente puede pedir un cambio, como pasa en los proyectos reales. Se 
añade al Product Backlog y se decide en el Sprint 2 Planning si entra.
Historias de usuario y Product Backlog. Una historia de usuario describe una necesidad desde el 
punto de vista de quien usa la web, con el formato Como [tipo de usuario], quiero [algo], para 
[beneficio]. El cliente os entregará las historias en clase, y con ellas se crea el Product Backlog: la lista 
ordenada de todo lo que hay que hacer. Cada historia es una fila de la ficha 3, a la que añadís 
recursos, prioridad, sprint, horas y estado; las tareas de diseño y técnicas (wireframes, guía de estilos, 
repositorio…) se añaden como filas propias. Si en la Review el cliente pide un cambio, ese lo escribís 
vosotros como una historia nueva con el mismo formato.
Requisitos de diseño y de Bootstrap
La web tiene tres páginas: Inicio, Eventos y Únete. Antes de maquetar, el cliente tiene que aprobar el 
diseño en la Review del Sprint 1.
Diseño (Sprint 1)
• Wireframes de las tres páginas en papel o en Penpot o similar.
• Moodboard en Canva, Figma o Penpot: un panel de inspiración con capturas de webs que os 
gusten, posibles colores, tipografías, fotos e iconos. Sirve para acordar el estilo con el cliente 
antes de hacer la guía de estilos.
• Guía de estilos en PDF o PNG con: colores (código y uso), tipografías (familia, tamaños y uso), 
botones, formularios, iconos e imágenes.
• Textos reales, nada de lorem ipsum, e imágenes coherentes con licencia libre (Unsplash, 
Pexels).
Maquetación (Sprints 1 y 2)
Bootstrap 5.3 se carga desde el CDN oficial y se usa para el posicionamiento y los componentes. El 
CSS propio solo cubre lo que Bootstrap no tiene, va en un archivo aparte y está comentado.
Requisito Mínimo exigido
HTML semántico header, nav, main, section y footer; un h1 por página; alt en todas las 
imágenes.
Rejilla responsive container, row y columnas con al menos dos breakpoints, por ejemplo 
col-12 col-md-6 col-lg-4.
Navbar Horizontal en escritorio y desplegable en móvil, con el enlace de la página 
actual marcado.
Cards Para los eventos, los ponentes o las actividades de la comunidad.
Carousel o acordeón Al menos uno de los dos.
Modal Al menos uno, con contenido útil para el usuario.
Formulario Al menos 4 campos de 3 tipos distintos, con label y validación de Bootstrap.
Tabla Calendario de eventos o cuotas de socio, con al menos dos clases de 
Bootstrap, como table-striped y table-hover.
Iconos Bootstrap Icons, con un uso coherente.
Footer Al menos dos columnas con información útil de la comunidad.
Comentarios Cada bloque del HTML y cada regla de CSS propio, con una explicación 
breve.
Git, estructura y entrega
Cada equipo trabaja en un único repositorio compartido, creado al planificar el Sprint 1, al que hay que 
invitar a la profesora (monicaprofeciclos@gmail.com). El historial tiene que mostrar commits de todos 
los miembros, al menos uno por tarea del tablero y con mensajes descriptivos.
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 3
```

### Página 4

```text
El README.md incluye como mínimo: autores, objetivo de la web, quién fue Scrum Master en cada 
sprint, estructura de carpetas, tecnologías usadas y enlace al tablero.
Estructura del proyecto:
nombre-comunidad/
├── index.html
├── eventos.html
├── unete.html
├── css/
│   └── estilos.css
├── js/
│   └── validacion.js
├── img/
├── docs/
│   ├── fichas-practica.pdf
│   ├── guia-estilos.pdf
│   └── wireframes/
└── README.md
Las páginas y las imágenes se nombran según su contenido, sin espacios ni tildes.
Entrega: último commit válido antes de la fecha de entrega. Un miembro sube a Moodle la carpeta 
comprimida con esta estructura y pone el enlace al repositorio en los comentarios.
Evaluación
La práctica se evalúa con esta rúbrica, y la nota es individual: puede variar entre los miembros según 
sus commits, su trabajo como Scrum Master y la defensa.
Criterio Qué se valora Peso
Proceso Scrum Fichas completas, Product Backlog con prioridades y horas, 
tablero al día, Sprint Goals, Dailies y retrospectivas
15 %
Diseño Wireframes, moodboard y guía de estilos completos, y aplicados 
en la web
20 %
Funcionalidad Todas las páginas y todos los requisitos de Bootstrap 
funcionando, responsive y accesibles
25 %
Código y Git HTML validado y semántico, CSS propio justificado y 
comentado, README completo y commits de todos
30 %
Review final y 
defensa
Presentación al cliente (10 minutos por equipo) y respuestas a 
las preguntas
10 %
La práctica está suspensa de forma inmediata si:
• No se entrega en tiempo y forma.
• No sigue la estructura de carpetas dada.
• El HTML no está validado o el CSS no está bien enlazado.
• No usa Bootstrap para el posicionamiento y los componentes.
• No usa los elementos estructurales de HTML.
• No usa Git correctamente. Si un miembro no tiene commits, la práctica está suspensa para ese 
miembro.
• Se usa IA para realizarla.
La profesora puede pedir en cualquier momento que cada estudiante defienda la práctica de forma 
individual, o hacer un examen práctico adecuado a su nivel.
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 4
```

### Página 5

```text
Anexo: fichas de la práctica
Rellenad una copia por equipo y guardadla en docs/ del repositorio. Las filas en amarillo son ejemplos para arrancar: borradlas o sustituidlas por las 
vuestras.
Ficha 1. Requisitos mínimos – Información del cliente
Equipo: ______    Miembros: __________________________________________________________
Requisito / necesidad Descripción del cliente Prioridad Observaciones
Público objetivo Gente de 16 a 35 años: alumnado de FP y universidad, 
perfiles junior y curiosos
Alta Tono cercano; pensar primero en el móvil
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 5
```

### Página 6

```text
Ficha 2. Requisitos mínimos – Páginas de la web
Equipo: ______    Miembros: __________________________________________________________
Página Descripción Objetivo Elementos principales Responsable
Inicio Página principal con el próximo 
evento y acceso al resto del sitio
Que el visitante entienda qué es la 
comunidad y se apunte
Navbar, hero con el próximo evento, 
botón de inscripción, footer
Nombre del 
alumno
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 6
```

### Página 7

```text
Ficha 3. Product Backlog
Equipo: ______    Miembros: __________________________________________________________
Product Goal: ______________________________________________________________________________________
N.º Requisito Descripción Recursos Prioridad Sprint Horas 
estimad
as
Estado
T1 Wireframes Inicio, Eventos y Únete, en móvil y en 
escritorio
Papel o Penpot Alta 1 1,5 Por hacer
HU-04 Calendario de 
eventos
Como visitante, quiero ver los próximos 
eventos con fecha, nivel y plazas, para 
elegir a cuál ir.
Bootstrap: tabla y 
cards
Alta 2 1 Por hacer
Una fila por cada historia de usuario que os entregue el cliente (HU-01, HU-02…) y por cada tarea de diseño o técnica (T1, T2…). Las filas en amarillo son 
ejemplos. Pista: en clase hay tiempo para unas 5 horas de equipo en el Sprint 1 y unas 6 en el Sprint 2; si el backlog suma más, la prioridad decide qué se 
queda fuera.
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 7
```

### Página 8

```text
Ficha 4. Tareas del Sprint 1
Equipo: ______    Miembros: __________________________________________________________
Sprint Goal: ______________________________________________________________________________________
Fecha Título de la tarea Descripción Alumno/s responsables
Sesión 2 Repositorio Crear el repositorio, invitar a la profesora y subir el README inicial Nombre del alumno
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 8
```

### Página 9

```text
Ficha 4. Tareas del Sprint 2
Equipo: ______    Miembros: __________________________________________________________
Sprint Goal: ______________________________________________________________________________________
Fecha Título de la tarea Descripción Alumno/s responsables
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 9
```

### Página 10

```text
Ficha 5. Seguimiento y Retrospectiva del Sprint 1
Equipo: ______    Miembros: __________________________________________________________
1. Datos generales del sprint
Campo Información
Sprint n.º 1
Fecha de inicio
Fecha de finalización
Objetivo del sprint (Sprint Goal)
Scrum Master
2. Resumen de tareas
Tarea Descripción Estado final Observaciones
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 10
```

### Página 11

```text
3. Evaluación del sprint
Aspecto Valoración / comentario
Lo que salió bien
Lo que se puede mejorar
Problemas encontrados
Acciones de mejora
4. Plan para el siguiente sprint
Objetivo Tareas previstas Responsables Prioridad
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 11
```

### Página 12

```text
Ficha 5. Seguimiento y Retrospectiva del Sprint 2
Equipo: ______    Miembros: __________________________________________________________
1. Datos generales del sprint
Campo Información
Sprint n.º 2
Fecha de inicio
Fecha de finalización
Objetivo del sprint (Sprint Goal)
Scrum Master
2. Resumen de tareas
Tarea Descripción Estado final Observaciones
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 12
```

### Página 13

```text
3. Evaluación del sprint
Aspecto Valoración / comentario
Lo que salió bien
Lo que se puede mejorar
Problemas encontrados
Acciones de mejora
4. Si el proyecto siguiera: próximos pasos
Objetivo Tareas previstas Responsables Prioridad
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 13
```

## 14. Transcripción completa del PDF de historias de usuario

Fuente: [historias-de-usuario-nodo-norte.pdf](fuentes/pdf/historias-de-usuario-nodo-norte.pdf), 3 páginas. Se conserva el texto completo con sus ejemplos. Las tablas se presentan como texto plano; las prioridades y tareas del ejemplo no son decisiones del equipo.

### Historias: página 1

```text
Historias de usuario de Nodo Norte
Práctica DIW: Scrum y Bootstrap. Esta hoja se entrega en la sesión del Product Backlog: con ella 
rellenáis la ficha 3.
Qué es una historia de usuario
Una historia de usuario es una frase corta que cuenta algo que necesita una persona que usa la 
web. No habla de código ni de componentes: habla de lo que quiere conseguir el usuario. Siempre 
tiene tres partes:
Parte Pregunta que responde En el ejemplo
Como… ¿Quién lo necesita? Como visitante,
quiero… ¿Qué quiere hacer? quiero ver los próximos eventos con fecha, nivel y 
plazas,
para… ¿Para qué le sirve? para elegir a cuál ir.
Lo importante es el para qué: explica por qué merece la pena hacerlo y ayuda a decidir la prioridad.
Una historia bien escrita:
• Recoge una sola necesidad. Si lleva un «y» en el quiero, seguramente son dos historias.
• Se puede comprobar en la pantalla: alguien puede probarla y decir «sí, ya lo hace».
• Cabe en un sprint. Si no, hay que partirla en historias más pequeñas.
• No dice cómo se hace. «Quiero una tabla con table-striped» es una tarea, no una historia.
Historia o tarea. La historia es el qué desde el punto de vista del usuario; las tareas son el cómo 
desde el punto de vista del equipo. Una historia suele necesitar varias tareas, y algunas tareas 
(wireframes, guía de estilos, crear el repositorio) no salen de ninguna historia, pero también hay que 
hacerlas.
Las historias del cliente
Estas son las historias que os entrega el cliente. Son iguales para todos los equipos; la HU-10 es solo 
para el equipo de 3.
N.º Requisito Historia de usuario
HU-01 Menú en el móvil Como visitante, quiero un menú que funcione en el móvil, para 
moverme entre las páginas.
HU-02 Próximo evento en 
portada
Como visitante, quiero ver el próximo evento destacado en la 
portada, para apuntarme sin buscarlo.
HU-03 Ediciones anteriores Como visitante, quiero ver fotos de eventos pasados, para 
hacerme una idea de cómo son.
HU-04 Calendario de eventos Como visitante, quiero ver los próximos eventos con fecha, 
nivel y plazas, para elegir a cuál ir.
HU-05 Ficha de ponente Como visitante, quiero ver quién da una charla sin salir de la 
página, para decidir si me interesa.
HU-06 Inscripción Como visitante, quiero apuntarme a un evento con un 
formulario, para reservar plaza.
HU-07 Hazte socio Como socio potencial, quiero saber qué incluye la cuota, para 
decidir si me apunto.
HU-08 Proponer charla Como ponente, quiero proponer una charla con un formulario, 
para participar.
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 1
```

### Historias: página 2

```text
N.º Requisito Historia de usuario
HU-09 Newsletter Como visitante, quiero dejar mi correo en el footer, para recibir 
los eventos del mes.
HU-10 Sobre nosotros (solo el 
trío)
Como visitante, quiero conocer la historia y el equipo de la 
comunidad, para saber quién está detrás.
Cómo pasar una historia al Product Backlog
El Product Backlog (ficha 3) es la lista ordenada de todo lo que hay que hacer en el proyecto. Cada 
historia ocupa una fila. Así se rellena cada columna, con la HU-04 como ejemplo:
Columna de la 
ficha 3
Qué se pone Ejemplo con la HU-04
N.º El código de la historia, para poder 
nombrarla en el tablero y en los 
commits
HU-04
Requisito Un nombre corto Calendario de eventos
Descripción La historia completa, tal como la da el 
cliente
Como visitante, quiero ver los 
próximos eventos con fecha, nivel y 
plazas, para elegir a cuál ir.
Recursos Qué vais a usar para hacerla: 
componentes de Bootstrap, 
herramientas, imágenes
Bootstrap: tabla y cards
Prioridad Alta, Media o Baja. Preguntaos: sin 
esto, ¿la web cumple su objetivo?
Alta: sin calendario nadie sabe a qué 
apuntarse
Sprint 1 o 2, según la prioridad y lo que haga 
falta antes
2: necesita la plantilla base del Sprint 
1
Horas estimadas Cuántas horas de equipo creéis que 
lleva, incluidas las pruebas
1
Estado Por hacer, En curso o Hecho. Al 
empezar, todo está Por hacer
Por hacer
Después añadid como filas propias las tareas de diseño y técnicas que no salen de ninguna historia, 
numeradas T1, T2…: wireframes, moodboard, guía de estilos, repositorio y README, revisión final con 
el validador.
Por último, ordenad la lista: arriba lo de prioridad Alta del Sprint 1. Sumad las horas de cada sprint: en 
clase hay tiempo para unas 5 horas de equipo en el Sprint 1 y unas 6 en el Sprint 2. Si os pasáis, las 
historias de prioridad más baja se quedan sin sprint asignado; no pasa nada, es parte del proceso.
De la historia a las tareas del sprint
En cada Sprint Planning, las historias elegidas se parten en tareas pequeñas en la ficha 4 y en el 
tablero. Cada tarea la hace una persona (o la pareja) en una sesión o menos. Ejemplo con la HU-04:
Tarea Descripción Responsable
Datos de los eventos Escribir 4 eventos reales con fecha, hora, lugar, ponente, 
nivel y plazas
Ana
Tabla del calendario Maquetar la tabla con table-striped y table-hover dentro de 
un table-responsive
Luis
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 2
```

### Historias: página 3

```text
Tarea Descripción Responsable
Cards de eventos Una card por evento con su nivel y un botón para 
apuntarse
Ana
Comprobar Probar a 360, 768 y 1280 px, con teclado y en el validador Luis
¿Cuándo está hecha la historia? Cuando se cumple lo que dice la historia (en el ejemplo, la tabla 
muestra fecha, nivel y plazas y permite elegir evento) y además cumple la Definition of Done del 
enunciado. Si falta algo, no está Hecha, aunque «casi».
Errores frecuentes
• Poner todas las historias en prioridad Alta: si todo es urgente, nada lo es.
• Estimar sin mirar el tiempo que hay: sumad las horas antes de cerrar cada sprint.
• Olvidar las tareas que no son historias, como los wireframes o el README.
• Escribir como historia algo que es una tarea: «Maquetar la navbar» es una tarea de la HU-01.
• Cambiar la historia del cliente sin preguntarle: si no está clara, se pregunta a la Product Owner.
Mónica Pérez Sueiro · monicaprofeciclos@gmail.com · 3
```
