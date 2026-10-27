# Briefing de dudas para la profesora

Preparado el 27/10/2026. Estado: preguntas preparadas, respuestas pendientes.

## Objetivo y orden de la reunión

Aclarar el alcance y los criterios de aceptación antes de crear el repositorio y GitHub Projects, y después construir el Product Backlog. Las preguntas parten del enunciado, las dos fotos y `historias-de-usuario-nodo-norte.pdf`.

**Introducción para decir en clase:** «Ya hemos reunido los requisitos y las historias de Nodo Norte. Antes de estimar y repartir tareas, queremos confirmar qué debe funcionar realmente y qué contenido debemos preparar. Después crearemos el repositorio y el tablero y haremos el backlog con esas decisiones».

Si hay poco tiempo, empezar por Q01-Q08. Son las preguntas que más pueden cambiar el trabajo y las estimaciones. Las demás se pueden resolver a continuación. No se pide de nuevo lo que ya está claro: tres páginas para parejas, Bootstrap 5.3, dos sprints, Git y componentes mínimos.

## 1. Preguntas prioritarias

### Q01. Funcionamiento real de formularios y pagos

**¿Se espera una web estática con validación y confirmación visual, o deben enviarse y guardarse de verdad las inscripciones, propuestas y altas? ¿Transferencia y PayPal se explican visualmente o hay que integrar algún servicio?**

Motivo: HU-06 y HU-08 hablan de reservar y participar; las fotos mencionan pagos, pero el enunciado solo define maquetación y validación. La respuesta determina si basta el front-end y qué confirmación mostrar al enviar.

Respuesta / criterio acordado: _Pendiente_.

### Q02. Newsletter y discrepancia con los apuntes

**HU-09 pide dejar el correo en el footer, pero en una foto aparece «Newsletter» tachado. ¿Mantenemos HU-09 como parte del alcance? Si se mantiene, ¿debe aparecer en las tres páginas y basta con validar y confirmar el registro visualmente?**

Motivo: el documento de historias sí incluye esta necesidad; el tachado no se debe interpretar como una cancelación sin confirmación. El envío efectivo de la newsletter no está especificado.

Respuesta / criterio acordado: _Pendiente_.

### Q03. Plazas e inscripción

**¿El número de plazas se muestra como un dato fijo o debe cambiar al inscribirse? ¿Qué debe ver el usuario cuando el evento está completo, y hace falta lista de espera o impedir la inscripción?**

Motivo: HU-04 exige mostrar plazas y HU-06 reservar; hay que distinguir una representación de la interfaz de una gestión real de aforo.

Respuesta / criterio acordado: _Pendiente_.

### Q04. Cuota, ventajas y alta de socios

**¿Qué significa exactamente «cuota voluntaria de 10 € anuales»: se puede ser socio sin pagar, aportar otra cantidad o la cuota es fija al solicitar el alta? ¿Las plazas están garantizadas o solo prereservadas, y durante cuánto tiempo? ¿Además de explicar ventajas y cuota, debe existir un formulario de alta?**

Motivo: HU-07 pide información para decidir, mientras que las fotos añaden alta mediante formularios y expresiones distintas sobre las plazas. Estas condiciones afectan al contenido y a la interacción.

Respuesta / criterio acordado: _Pendiente_.

### Q05. Contenido y cantidad de ejemplos

**¿Nos proporcionas eventos, ponentes, fotografías y datos de contacto o podemos crear contenido de muestra coherente? ¿Cuántos eventos próximos, pasados y ponentes necesitas ver? En el ejemplo aparecen cuatro eventos reales: ¿es solo un ejemplo o quieres ese mínimo?**

Motivo: no hay un conjunto de datos concreto. El ejemplo de descomposición de HU-04 no fija por sí solo un mínimo general. El enunciado sí exige textos reales, sin lorem ipsum, e imágenes con licencia libre.

Respuesta / criterio acordado: _Pendiente_.

### Q06. Prioridades y entrega mínima

**¿Qué historias consideras imprescindibles para aceptar la web y cuáles podrían quedar sin sprint si no caben en las 5 y 6 horas orientativas? Si una historia se aplaza por capacidad, ¿cómo debemos reflejarlo en la entrega manteniendo los mínimos técnicos obligatorios?**

Motivo: la hoja permite dejar historias de menor prioridad sin sprint; el enunciado evalúa páginas y componentes completos. Necesitamos acordar las prioridades contigo, sin poner todo en Alta ni eliminar requisitos mínimos por nuestra cuenta.

Respuesta / criterio acordado: _Pendiente_.

### Q07. Datos de los formularios

**¿Qué campos y opciones deben llevar exactamente la inscripción, la propuesta de charla y, si corresponde, el alta de socio? ¿Qué tipos de propuesta se admiten y qué niveles usamos? ¿Qué campos son obligatorios?**

Motivo: en las fotos hay un paréntesis dudoso sobre el tipo de charla y falta definir el alta. Nombre, correo, evento, primera asistencia y nivel ya están anotados para inscripción; tema, nivel, tipo, duración y descripción para propuestas. Confirmar si el nivel de inscripción es de front-end o conocimientos tecnológicos generales.

Respuesta / criterio acordado: _Pendiente_.

### Q08. Fechas y disponibilidad

**¿Cuáles son las fechas exactas de inicio y cierre de cada sprint, de las dos Reviews y de entrega en Moodle? ¿Las horas orientativas siguen siendo la capacidad prevista?**

Motivo: las fuentes dan sesiones y horas aproximadas, sin fechas. Es necesario fijar el calendario antes de comprometer trabajo.

Respuesta / criterio acordado: _Pendiente_.

## 2. Contenido y diseño: resolver después de lo prioritario

| ID | Pregunta para la profesora | Decisión que permite tomar |
| --- | --- | --- |
| Q09 | ¿Las fotos de ediciones anteriores bastan para HU-03 o quieres también resúmenes y diapositivas? ¿La mención de blog se resuelve con una sección/enlaces dentro de las páginas previstas o implica algo más? | Alcance del archivo de eventos, sin asumir nuevas páginas. |
| Q10 | Para HU-05, ¿qué datos debe mostrar la ficha de ponente: nombre, foto, biografía, tema y enlaces? ¿Te sirve abrirla en un modal sin salir de Eventos? | Contenido comprobable y posible uso del modal obligatorio; la historia no impone el componente. |
| Q11 | ¿Comic Sans es obligatoria o una referencia de tono? ¿Podemos elegir otra para títulos? ¿La exclusión del gris afecta también a fondos y bordes neutros o se refiere a la estética corporativa general? | Tipografías y paleta antes de elaborar la guía. |
| Q12 | ¿La marca se escribe «Nodo Norte» o «NodoNorte»? ¿Hay logotipo o podemos diseñar uno? ¿Cuál es la referencia web anotada como «Lareira» y puedes dar su enlace? | Identidad y referentes sin depender de una lectura dudosa. |
| Q13 | ¿Cuáles son los nombres y direcciones exactos de «Uni», «Singular» y el lugar que leemos como «Wekco»? ¿Basta dirección escrita o quieres también mapa/enlace de ubicación? | Datos de lugar y forma de mostrarlos. |
| Q14 | ¿Qué correo y enlaces de Instagram, Mastodon y Bluesky debemos mostrar? Si todavía no existen, ¿prefieres enlaces de muestra identificados o que dejemos esos destinos pendientes? | Contacto y footer sin atribuir cuentas inventadas a la comunidad. |
| Q15 | Si somos el trío, ¿qué historia y datos del equipo deben aparecer en HU-10? | Contenido de Sobre nosotros. Solo aplica al trío. |

Respuesta Q09: _Pendiente_.

Respuesta Q10: _Pendiente_.

Respuesta Q11: _Pendiente_.

Respuesta Q12: _Pendiente_.

Respuesta Q13: _Pendiente_.

Respuesta Q14: _Pendiente_.

Respuesta Q15: _No aplica si somos pareja; pendiente si somos trío_.

## 3. Organización académica y entrega

| ID | Pregunta | Motivo |
| --- | --- | --- |
| Q16 | ¿El repositorio puede ser privado con acceso para ti? ¿Qué cuenta de GitHub añadimos si la invitación por el correo indicado no permite localizarte? ¿Necesitas acceso adicional al Project? | Preparar correctamente el acceso al repositorio y al tablero. El correo indicado en el enunciado es monicaprofeciclos@gmail.com. |
| Q17 | ¿Hay que rellenar las fichas del PDF original y exportarlas juntas como `docs/fichas-practica.pdf`, o aceptas un documento equivalente con los mismos campos? ¿Dónde prefieres el moodboard dentro de `docs/`? | Respetar formato y estructura sin asumir que los Markdown sustituyen las fichas. |
| Q18 | El enunciado dice «Se usa IA para realizarla» como causa de suspenso. ¿Cómo aplica a transcribir material, ordenar requisitos o preparar preguntas? | Aclarar el alcance de la condición académica, que no detalla tareas auxiliares. |

Respuesta Q16: _Pendiente_.

Respuesta Q17: _Pendiente_.

Respuesta Q18: _Pendiente_.

## 4. Cierre de la conversación y registro de decisiones

Al terminar, resumir con la profesora: funcionamiento real o simulado, estado de HU-09, datos que aporta cada parte, alcance de socios/plazas, prioridades y fechas. No considerar aprobada una propuesta solo porque figure como pregunta en este documento.

| Decisión | Respuesta confirmada | Historias/documentos afectados | Fecha |
| --- | --- | --- | --- |
| Funcionamiento de formularios y pagos | Pendiente | HU-06, HU-08 y alta de socios | Pendiente |
| Newsletter | Pendiente | HU-09 y footer | Pendiente |
| Plazas y ventajas de socios | Pendiente | HU-04, HU-06, HU-07 | Pendiente |
| Contenido y cantidades | Pendiente | HU-02, HU-03, HU-04, HU-05, HU-10 | Pendiente |
| Prioridades y capacidad | Pendiente | Futuro Product Backlog | Pendiente |
| Calendario | Pendiente | Roadmap y fichas de sprint | Pendiente |

Después de la conversación: trasladar respuestas a `requisitos-y-datos-iniciales.md`, ajustar `roadmap.md`, crear repositorio y Project y, a continuación, preparar el backlog con la ficha 3. Este briefing está preparado para que lo preguntéis en clase; no se ha enviado a la profesora.
