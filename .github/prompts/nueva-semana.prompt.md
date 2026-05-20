---
mode: agent
description: Crea el scaffold completo de una nueva semana del bootcamp de WebSockets
---

# Crear Nueva Semana del Bootcamp

Crea la estructura completa de carpetas y archivos para la semana indicada del Bootcamp WebSockets Zero to Hero.

## Parámetros

Antes de crear, confirma:

- **Número de semana**: (ej. 03)
- **Slug del tema**: (ej. `browser_websocket_api`)
- **Título legible**: (ej. "Browser WebSocket API con TypeScript")
- **Fase**: Fundamentos / Servidor / Aplicaciones / Calidad

## Estructura a crear

```
bootcamp/week-{XX}-{slug}/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   └── .gitkeep
├── 1-teoria/
│   └── README.md
├── 2-practicas/
│   └── practica-01-{slug-practica}/
│       ├── README.md
│       └── starter/
│           └── .gitkeep
├── 3-proyecto/
│   ├── README.md
│   └── starter/
│       └── .gitkeep
├── 4-recursos/
│   ├── ebooks-free/
│   │   └── .gitkeep
│   ├── videografia/
│   │   └── README.md
│   └── webgrafia/
│       └── README.md
└── 5-glosario/
    └── README.md
```

## Reglas de Contenido

### README.md de la semana

Debe incluir estas secciones en orden:

1. Header con número y título
2. `## 🎯 Objetivos de Aprendizaje` — 4-6 bullets con verbos de acción
3. `## 📚 Requisitos Previos` — semanas anteriores relevantes
4. `## 🗂️ Estructura de la Semana` — tabla con carpetas y descripción
5. `## 📝 Contenidos` — tabla con teoría, prácticas y proyecto
6. `## ⏱️ Distribución del Tiempo (8 horas)` — Teoría 2h / Prácticas 3h / Proyecto 3h
7. `## 📌 Entregables` — qué debe entregar el estudiante
8. `## 🔗 Navegación` — enlace a semana anterior y siguiente

### rubrica-evaluacion.md

Incluir tabla de evaluación con tres dimensiones:

- Conocimiento 🧠 (30%) — preguntas conceptuales con criterios
- Desempeño 💪 (40%) — criterios de la práctica funcional
- Producto 📦 (30%) — criterios del proyecto entregable

Mínimo aprobatorio: 70% por dimensión.

### 1-teoria/README.md

Estructura estándar de archivo de teoría:

1. `## 🎯 Objetivos`
2. `## 📋 Contenido` con subsecciones numeradas
3. `## 📚 Recursos Adicionales`
4. `## ✅ Checklist de Verificación`

### 2-practicas/practica-01-\*/README.md

- Descripción del ejercicio
- Pasos numerados con bloques de código explicativos
- El código en `starter/` debe estar **comentado para descomentar** — NO usar TODOs
- Verificación al final de cada paso

### 3-proyecto/README.md

- Descripción del proyecto integrador
- Requisitos funcionales
- Código `starter/` con **TODOs claros** (no código comentado)
- Criterios de evaluación específicos del proyecto

### 5-glosario/README.md

- Tabla de términos clave de la semana ordenados alfabéticamente
- Columnas: Término | Definición | Ejemplo de código (opcional)
- Mínimo 8 términos relevantes al tema de la semana

## Orden Estricto de Creación

Respetar este orden sin excepciones:

1. **`README.md`** — objetivos, estructura, 8h, entregables, navegación ← →
2. **`rubrica-evaluacion.md`** — criterios 🧠/💪/📦, mínimo 70% por dimensión
3. **`1-teoria/`** — redactar el contenido teórico completo primero
4. **`0-assets/` (SVGs)** — crear **solo tras terminar la teoría**, para saber qué diagramas son realmente necesarios. Renderizar cada SVG en el archivo de teoría donde aporte comprensión: `![descripción](../../0-assets/nombre.svg)`. La cantidad la determinan los temas, no una cuota fija.
5. **`2-practicas/`** — ejercicios con código comentado para descomentar
6. **`3-proyecto/`** — starter con TODOs guiados
7. **`4-recursos/`** — ebooks, videografía, webgrafía
8. **`5-glosario/README.md`** — mínimo 8 términos, orden alfabético

## Restricciones

- Idioma: español para documentación, inglés para código
- SVGs: creados después de la teoría, embedded en los archivos `.md` donde correspondan
- Cantidad de SVGs: determinada por el contenido, nunca por una cuota
- Versiones en package.json: exactas, sin `^` ni `~`
- La carpeta `solution/` en `3-proyecto/` NO se crea (está en `.gitignore`)
- Todo código Python: type hints obligatorios, async/await
- Todo código TypeScript: tipado explícito, sin `any`
