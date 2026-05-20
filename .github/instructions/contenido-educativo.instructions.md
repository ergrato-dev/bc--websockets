---
applyTo: "bootcamp/**/*.md"
---

# Convenciones de Contenido Educativo — Bootcamp WebSockets

## Idioma

- ✅ **Español** para toda la documentación, teoría, guías y READMEs
- ✅ **Inglés** para nombres de variables, funciones, clases y endpoints dentro de bloques de código
- ✅ Los términos técnicos en inglés se escriben **en cursiva** la primera vez con su traducción: _handshake_ (apretón de manos), _frame_ (trama)
- ❌ No mezclar idiomas en la misma oración fuera de términos técnicos establecidos

## Estructura de README.md de semana

Cada `bootcamp/week-XX-*/README.md` debe seguir este orden exacto:

```markdown
# Semana XX — Título del Tema

## 🎯 Objetivos de Aprendizaje

## 📚 Requisitos Previos

## 🗂️ Estructura de la Semana

## 📝 Contenidos

## ⏱️ Distribución del Tiempo (8 horas)

## 📌 Entregables

## 🔗 Navegación
```

- La sección `⏱️` debe desglosar: Teoría 2h / Prácticas 3h / Proyecto 3h
- La sección `🔗 Navegación` incluye enlace a semana anterior y siguiente
- Los objetivos usan verbos de acción medibles: _construir_, _implementar_, _demostrar_ — no verbos vagos como _entender_ o _conocer_

## Estructura de archivos de teoría

```markdown
# Título del Tema

## 🎯 Objetivos

## 📋 Contenido

### 1. El Problema

### 2. La Solución

### 3. Implementación

### 4. Errores Comunes

## 📚 Recursos Adicionales

## ✅ Checklist de Verificación
```

- Las subsecciones se numeran siempre (1., 2., 3.)
- El checklist de verificación usa `- [ ]` con afirmaciones verificables: `- [ ] Mi servidor acepta conexiones WebSocket en el puerto 8000`
- **No** se usa ASCII art para diagramas — solo referencias a SVGs

## Bloques de código

- Siempre especificar el lenguaje en el fence: ` ```python `, ` ```typescript `, ` ```bash `, ` ```yaml `
- Los bloques de código en teoría son **ejemplos completos y funcionales**
- Los bloques de código en prácticas son **fragmentos comentados para descomentar**
- Los bloques de código en proyectos son **starters con TODOs**

````markdown
<!-- ✅ CORRECTO en teoría — código funcional de referencia -->

```python
async def connect(self, client_id: str, ws: WebSocket) -> None:
    await ws.accept()
    self._connections[client_id] = ws
```
````

<!-- ✅ CORRECTO en práctica — código para descomentar -->

```python
# Descomenta las siguientes líneas:
# async def connect(self, client_id: str, ws: WebSocket) -> None:
#     await ws.accept()
#     self._connections[client_id] = ws
```

<!-- ✅ CORRECTO en proyecto — TODO claro -->

```python
async def connect(self, client_id: str, ws: WebSocket) -> None:
    # TODO: Aceptar la conexión WebSocket
    # TODO: Registrar ws en self._connections
    pass
```

````

## Diagramas (SVG)

- Referenciar con sintaxis: `![Descripción del diagrama](../0-assets/nombre-diagrama.svg)`
- Alternativa de placeholder mientras se crea el SVG:
  ```markdown
  <!-- TODO: SVG — nombre-diagrama.svg — descripción breve del diagrama -->
````

- Cada diagrama tiene texto alternativo descriptivo para accesibilidad
- Nombres de archivo en kebab-case: `ws-handshake-flow.svg`, `frame-structure.svg`

## Tablas

- Usar tablas para comparaciones, estructuras de carpetas resumidas, y glosarios
- Siempre incluir fila de encabezado con `|---|---|` correctamente formateado
- Máximo 4-5 columnas por tabla

## Advertencias y notas

Usar blockquotes con emojis para destacar información importante:

```markdown
> ⚠️ **Importante**: [advertencia de seguridad o error común]

> 💡 **Tip**: [consejo o atajo útil]

> 📖 **RFC 6455**: [referencia al estándar cuando sea relevante]

> 🔗 **Documentación**: [enlace a documentación oficial]
```

## Rúbricas de evaluación

El archivo `rubrica-evaluacion.md` usa esta estructura:

```markdown
# Rúbrica de Evaluación — Semana XX

## Criterios

### 🧠 Conocimiento (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
| -------- | ---------------- | ------------------- | ------------------- |

### 💪 Desempeño (40%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
| -------- | ---------------- | ------------------- | ------------------- |

### 📦 Producto (30%)

| Criterio | Excelente (100%) | Satisfactorio (70%) | Insuficiente (<70%) |
| -------- | ---------------- | ------------------- | ------------------- |

## Criterio de Aprobación

Mínimo **70%** en cada dimensión.
```

## Glosarios

El `5-glosario/README.md` sigue este formato:

```markdown
# Glosario — Semana XX: Título

| Término   | Definición                                                    | Ejemplo                          |
| --------- | ------------------------------------------------------------- | -------------------------------- |
| WebSocket | Protocolo de comunicación bidireccional full-duplex sobre TCP | `ws = new WebSocket("ws://...")` |
```

- Ordenados alfabéticamente
- Mínimo 8 términos por semana
- El ejemplo es opcional pero recomendado para términos técnicos

## Recursos adicionales (4-recursos/)

### webgrafia/README.md

```markdown
# Webgrafía — Semana XX

| Recurso                                                   | Tipo     | Descripción                                    | Nivel    |
| --------------------------------------------------------- | -------- | ---------------------------------------------- | -------- |
| [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455) | Estándar | Especificación oficial del protocolo WebSocket | Avanzado |
```

### videografia/README.md

```markdown
# Videografía — Semana XX

| Video | Canal | Duración | Descripción |
| ----- | ----- | -------- | ----------- |
```

## Navegación entre semanas

El pie de cada README de semana incluye:

```markdown
---

**[← Semana XX — Título anterior](../week-XX-slug/README.md)** | **[Semana XX — Título siguiente →](../week-XX-slug/README.md)**
```

La primera semana solo tiene enlace hacia adelante. La última solo hacia atrás.
