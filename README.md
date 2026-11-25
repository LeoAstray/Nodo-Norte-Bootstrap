# Nodo Norte

Web de **Nodo Norte**, una comunidad tecnológica sin ánimo de lucro de A Coruña que organiza charlas, talleres y hackatones una vez al mes. Proyecto de Diseño de Interfaces Web (DIW): diseño y maquetación con Bootstrap 5.3 y organización con Scrum.

## Autores

- Leo (LeoAstray)
- Sofía Rodríguez (Sofia20092003)

## Objetivo de la web

Que la gente se apunte a los eventos, se haga socia (es gratis y da prioridad en las plazas; la aportación de 10 € es voluntaria) y se anime a proponer una charla. Va dirigida a alumnado de FP y universidad, perfiles junior y curiosos de 16 a 35 años.

## Scrum Master por sprint

| Sprint | Scrum Master |
| --- | --- |
| Sprint 1 | Leo |
| Sprint 2 | Sofía |

## Páginas

- `src/index.html`: portada con el próximo evento, Sobre nosotros, eventos (cards, calendario, ediciones anteriores y fichas de ponente) y la inscripción a eventos en un modal.
- `src/html/unete.html`: hacerse socio (cuota, alta y ventajas) y proponer una charla.

## Estructura de carpetas

```text
Nodo-Norte-Bootstrap/
├── README.md
├── src/
│   ├── index.html
│   ├── html/
│   │   └── unete.html
│   ├── css/
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── index.css
│   │   └── unete.css
│   ├── js/
│   │   └── validacion.js
│   └── img/
└── docs/
    ├── excels/            fichas de la práctica
    ├── estilos/           wireframes, moodboard, mockups y guía de estilos
    └── fuentes/           enunciado, historias de usuario y notas de la entrevista
```

## Tecnologías

- HTML5 semántico y CSS3 propio (separado por zonas y comentado).
- [Bootstrap 5.3](https://getbootstrap.com/) y [Bootstrap Icons](https://icons.getbootstrap.com/), desde el CDN oficial.
- JavaScript sin dependencias para la validación de formularios (`src/js/validacion.js`).
- Tipografías de Google Fonts: Audiowide (títulos), Inter (texto), IBM Plex Mono y Silkscreen (detalles).
- Git y GitHub.

## Tablero

[Nodo Norte Project](https://github.com/users/LeoAstray/projects/1), en GitHub Projects con las columnas Por hacer, En curso y Hecho.

## Documentación

- Fichas de la práctica: [docs/excels/Nodo-Norte-Bootstrap-Fichas.xlsx](docs/excels/Nodo-Norte-Bootstrap-Fichas.xlsx).
- [Requisitos y datos iniciales](docs/requisitos-y-datos-iniciales.md) y [briefing para la profesora](docs/briefing-inicial.md).
- Diseño: [wireframes](docs/estilos/wireframes), [moodboard](docs/estilos/moodboard) y [mockups](docs/estilos/mockups).
- Fuentes originales en [docs/fuentes](docs/fuentes).

## Nota sobre los formularios

Los formularios validan los datos y muestran un mensaje de confirmación, pero no envían ni guardan nada: la web es estática.
