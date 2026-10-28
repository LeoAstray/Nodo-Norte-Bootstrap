# Briefing de dudas para la profesora

Preparado el 27/10/2026. Estado: nueve preguntas seleccionadas; respuestas todavía sin consolidar en requisitos.

## Objetivo y orden de la reunión

El repositorio ya está creado. Aclarar el alcance y los criterios de aceptación antes de preparar GitHub Projects y construir el Product Backlog. Las preguntas parten del enunciado, las dos fotos y [historias-de-usuario-nodo-norte.pdf](fuentes/pdf/historias-de-usuario-nodo-norte.pdf).

Las preguntas Q01-Q09 son la selección vigente para esta conversación. Las demás dudas se resolverán cuando sean necesarias; no forman parte de este briefing. Las respuestas anotadas se conservan y se revisarán conjuntamente más adelante, sin trasladarlas todavía a requisitos.

## Preguntas

### Q01. Funcionamiento real de formularios y pagos

**¿Se espera una web estática con validación y confirmación visual, o deben enviarse y guardarse de verdad las inscripciones, propuestas y altas? ¿Transferencia y PayPal se explican visualmente o hay que integrar algún servicio?**

Respuesta / criterio acordado: _No, solo debe mostrarse visualmente, no hace falta hacer back-end_.

### Q02. Newsletter y discrepancia con los apuntes

**HU-09 pide dejar el correo en el footer, pero en una foto aparece «Newsletter» tachado. ¿Mantenemos HU-09 como parte del alcance? Si se mantiene, ¿debe aparecer en las tres páginas y basta con validar y confirmar el registro visualmente?**

Respuesta / criterio acordado: _Si, se mantiene, la idea es que la newsletter tenga un popup para apuntarse pero que tambien aparezca en el footer siempre para poder ir ahí a apuntarse._.

### Q03. Plazas e inscripción

**¿El número de plazas se muestra como un dato fijo o debe cambiar al inscribirse? ¿Qué debe ver el usuario cuando el evento está completo, y hace falta lista de espera o impedir la inscripción?**

Respuesta / criterio acordado: _Debe cambiar al inscribirse. Debería ver el botón en otro color y ver en el boton: "Aforo Completo" o algo del estilo._.

### Q04. Cuota, ventajas y alta de socios

**¿Qué significa exactamente «cuota voluntaria de 10 € anuales»: se puede ser socio sin pagar, aportar otra cantidad o la cuota es fija al solicitar el alta? ¿Las plazas están garantizadas o solo prereservadas, y durante cuánto tiempo? ¿Además de explicar ventajas y cuota, debe existir un formulario de alta?**

Respuesta / criterio acordado: _La cuota es voluntaria, no hace falta darla pero puedes participar y proporcionarla para ayudar. Las plazas están garantizadas para cada socio, pero si llega el día donde se liberan dejan de estarlo. Hasta 2 días antes del evento. Si, debe existir._.

### Q05. Contenido y cantidad de ejemplos

**¿Nos proporcionas eventos, ponentes, fotografías y datos de contacto o podemos crear contenido de muestra coherente? ¿Cuántos eventos próximos, pasados y ponentes necesitas ver? En el ejemplo aparecen cuatro eventos reales: ¿es solo un ejemplo o quieres ese mínimo?**

Respuesta / criterio acordado: _Los eventos los desarrollaremos nosotros mismos. No hay un número de eventos, vamos a proponer unos 4 en principio._.

### Q06. Datos de los formularios

**¿Qué campos y opciones deben llevar exactamente la inscripción, la propuesta de charla y el alta de socio? ¿Qué tipos de propuesta se admiten y qué niveles usamos? ¿Qué campos son obligatorios?**

Respuesta / criterio acordado: _Inscripción serían Nombre, Apellidos, Mail, Fecha de nacimiento e Intereses si no estás registrado como socio, si lo estuvieras sería solo darle a un botón de inscribirse. La propuesta de charla y el alta de socio tendrán los mismos campos añadiendo el DNI._.

### Q07. Marca, logotipo y referencia visual

**¿La marca se escribe «Nodo Norte» o «NodoNorte»? ¿Hay logotipo o podemos diseñar uno? ¿Cuál es la referencia web anotada como «Lareira» y puedes dar su enlace?**

Respuesta / criterio acordado: _Nodo Norte. Hay que diseñar el logotipo. El enlace de lareira es "https://lareiraconf.es/"_.

## Cierre de la conversación y registro de decisiones

Después de la conversación: trasladar respuestas a [requisitos-y-datos-iniciales.md](requisitos-y-datos-iniciales.md), ajustar [roadmap.md](roadmap.md), revisar accesos del repositorio existente y crear el Project y, a continuación, preparar el backlog con la ficha 3. Este briefing está preparado para que lo preguntéis en clase; no se ha enviado a la profesora.

Ubicación de esta documentación: `docs/`, desde la raíz del repositorio. Los enlaces de este documento son relativos a su carpeta; las rutas de entrega como `docs/fichas-practica.pdf` se expresan desde la raíz. Índice: [README del proyecto](../README.md).
