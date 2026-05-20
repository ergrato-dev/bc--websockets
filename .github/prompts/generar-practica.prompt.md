---
mode: agent
description: Genera un ejercicio guiado (práctica) para una semana del bootcamp de WebSockets
---

# Generar Práctica Guiada

Genera un ejercicio guiado paso a paso para `2-practicas/` del bootcamp.

## Parámetros a confirmar

- **Número de práctica**: (ej. 01, 02)
- **Nombre slug**: (ej. `primer-servidor-ws`)
- **Título legible**: (ej. "Tu primer servidor WebSocket con Python")
- **Semana**: número (ej. 04)
- **Duración estimada**: (ej. 45 min)
- **Pasos**: cuántos pasos tiene el ejercicio (recomendado: 3-5)

## Estructura a generar

```
2-practicas/practica-{NN}-{slug}/
├── README.md      ← instrucciones completas con código explicativo
└── starter/
    ├── main.py    ← código comentado para descomentar (servidor)
    └── client.ts  ← código comentado para descomentar (cliente, si aplica)
```

## Reglas del archivo README.md

### Encabezado

```markdown
# Práctica {NN}: {Título}

**⏱️ Duración estimada**: {X} minutos
**🎯 Objetivo**: [una oración clara de qué construirá el estudiante]
**📋 Prerrequisitos**: [semana o concepto previo necesario]
```

### Estructura de pasos

Cada paso debe:

1. Tener un número y título claro: `## Paso N: Acción concreta`
2. Explicar el **concepto** antes de mostrar el código
3. Mostrar el bloque de código completo como referencia
4. Indicar exactamente qué descomentar en el `starter/`
5. Incluir un comando de verificación al final

````markdown
## Paso 1: Título del paso

[Explicación del concepto en 2-4 oraciones. Por qué existe esto, qué resuelve.]

```python
# Código de referencia completo y funcional
async def ejemplo():
    ...
```
````

**Abre `starter/main.py`** y descomenta la sección `PASO 1`.

### Verificación

Ejecuta:

```bash
docker compose up --build
```

Deberías ver en la consola: `[mensaje esperado]`

````

### Sección final obligatoria
```markdown
## ✅ Resumen

En esta práctica aprendiste a:
- [bullet por cada paso completado]

## 🔗 Siguiente paso

Continúa con [Práctica NN+1 / Semana XX].
````

## Reglas del archivo `starter/`

### CRÍTICO: Código comentado, NO TODOs

El starter usa el patrón de **descomentar para aprender**, no de implementar desde cero.

```python
# ============================================
# PASO 1: Inicializar el servidor WebSocket
# ============================================
print("--- Paso 1: Servidor WebSocket ---")

# Un servidor WebSocket escucha conexiones entrantes en un puerto.
# La función handler se invoca por cada cliente que se conecta.
# Descomenta las siguientes líneas:
# async def handler(websocket):
#     print(f"Cliente conectado: {websocket.remote_address}")
#     await websocket.send("Hola desde el servidor")
#     await websocket.wait_closed()
```

### Reglas del starter

- ✅ Cada sección empieza con un banner de comentario `# ===...===`
- ✅ Incluir `print("--- Paso N: Título ---")` ya descomentado como guía visual
- ✅ El código comentado debe ser funcional si se descomenta en orden
- ✅ Incluir imports necesarios ya descomentados al inicio
- ✅ Código Python: type hints, async/await, Pydantic para mensajes
- ✅ Código TypeScript: tipos explícitos, eventos del ciclo de vida
- ❌ NO usar `TODO:` en el starter de prácticas
- ❌ NO dejar código incompleto que requiera implementación

### Ejemplo de starter TypeScript

```typescript
// ============================================
// PASO 1: Conectar al servidor WebSocket
// ============================================

// La API WebSocket nativa del navegador abre la conexión inmediatamente
// al llamar al constructor. No requiere ningún método .connect() separado.
// Descomenta las siguientes líneas:
// const ws = new WebSocket("ws://localhost:8765");
//
// ws.addEventListener("open", () => {
//   console.log("✅ Conexión establecida");
// });
```

## Niveles de dificultad por fase

| Fase                   | Prácticas      | Características                       |
| ---------------------- | -------------- | ------------------------------------- |
| Fundamentos (sem 1-3)  | 1-2 por semana | Un archivo, código mínimo, sin auth   |
| Servidor (sem 4-6)     | 2 por semana   | Servidor + cliente, ConnectionManager |
| Aplicaciones (sem 7-9) | 2 por semana   | Auth, Redis, estado compartido        |
| Calidad (sem 10-12)    | 1-2 por semana | Tests, seguridad, Docker completo     |
