# Práctica 01 — Comparando Técnicas de Tiempo Real

> **Formato**: descomenta el código paso a paso. No implementes nada desde cero.

## 🎯 Objetivo

Observar en vivo, con las DevTools del navegador, la diferencia de comportamiento
entre **short polling** y **WebSocket**. Mismos datos, dos transportes — verás
con tus propios ojos cuántos requests genera cada uno.

## 📋 Qué vas a construir

Un servidor FastAPI que expone:
- `GET /api/metricas` — endpoint de polling (devuelve métricas del servidor)
- `WebSocket /ws/metricas` — endpoint WebSocket (hace push de las mismas métricas)

Un cliente HTML que muestra ambos feeds en pantalla simultáneamente.

## ⏱️ Tiempo estimado: 3 horas

---

## Paso 1 — Levantar el entorno

```bash
cd starter/
docker compose up --build
```

Abre el navegador en `http://localhost:8000`.

> **Verifica**: ves la página con dos paneles vacíos (Polling | WebSocket).

---

## Paso 2 — Activar el endpoint de polling

Abre `starter/src/main.py` y descomenta el bloque marcado con `# PASO 2`.

```python
# Descomenta las siguientes líneas:
# @app.get("/api/metricas")
# async def obtener_metricas() -> dict:
#     return {
#         "cpu": psutil.cpu_percent(),
#         "memoria": psutil.virtual_memory().percent,
#         "timestamp": time.time(),
#     }
```

Recarga el servidor (`docker compose restart api`) y verifica en el Network tab:

> **Verifica**: ves requests a `/api/metricas` llegando cada segundo. Anota cuántos
> hay después de 30 segundos.

---

## Paso 3 — Activar el cliente de polling en el navegador

Abre `starter/static/app.js` y descomenta el bloque `# PASO 3`.

```javascript
// Descomenta las siguientes líneas:
// function iniciarPolling() {
//   setInterval(async () => {
//     const res = await fetch('/api/metricas');
//     const datos = await res.json();
//     actualizarPanel('polling', datos);
//   }, 1000);
// }
// iniciarPolling();
```

> **Verifica**: el panel izquierdo muestra métricas actualizándose. El Network tab
> muestra una cascada de requests. Cuenta los requests en 1 minuto.

---

## Paso 4 — Activar el endpoint WebSocket

Vuelve a `starter/src/main.py` y descomenta el bloque `# PASO 4`.

```python
# Descomenta las siguientes líneas:
# @app.websocket("/ws/metricas")
# async def ws_metricas(ws: WebSocket) -> None:
#     await ws.accept()
#     try:
#         while True:
#             metricas = {
#                 "cpu": psutil.cpu_percent(),
#                 "memoria": psutil.virtual_memory().percent,
#                 "timestamp": time.time(),
#             }
#             await ws.send_text(json.dumps(metricas))
#             await asyncio.sleep(1)
#     except WebSocketDisconnect:
#         pass
```

> **Verifica**: el endpoint `/ws/metricas` existe (pruébalo con `wscat` o similar).

---

## Paso 5 — Activar el cliente WebSocket en el navegador

Descomenta el bloque `# PASO 5` en `starter/static/app.js`.

```javascript
// Descomenta las siguientes líneas:
// function iniciarWebSocket() {
//   const ws = new WebSocket('ws://localhost:8000/ws/metricas');
//   ws.onmessage = (event) => {
//     const datos = JSON.parse(event.data);
//     actualizarPanel('websocket', datos);
//   };
//   ws.onerror = () => console.error('Error de WebSocket');
// }
// iniciarWebSocket();
```

> **Verifica**: el panel derecho muestra las mismas métricas. El Network tab muestra
> **una sola** entrada WebSocket (no cientos de requests como en el panel izquierdo).

---

## Paso 6 — Observar y comparar

Con ambos paneles activos, abre el Network tab (F12 → Network):

1. Filtra por `Fetch/XHR` — ¿cuántos requests de polling ves en 60 segundos?
2. Filtra por `WS` — ¿cuántas conexiones WebSocket ves?
3. Haz clic en una entrada WebSocket → pestaña **Messages** — ¿qué ves ahí?
4. Compara el tamaño de los headers en un request de polling vs los frames WS

> **Reflexión**: anota en tu glosario la diferencia que observaste entre ambas técnicas.

---

## ✅ Criterios de verificación

- [ ] Ambos paneles muestran métricas actualizándose en tiempo real
- [ ] El Network tab muestra la diferencia: muchos requests vs una conexión
- [ ] Puedes explicar con palabras propias por qué WebSocket es más eficiente aquí
- [ ] Sabes dónde ver los frames WebSocket en las DevTools — Semana 01: El Problema del Tiempo Real

## 🎯 Objetivo

<!-- Qué aprenderá el estudiante al completar este ejercicio -->

## 🛠️ Instrucciones

```bash
docker compose up
```

### Paso 1

<!-- El código ya está en starter/ — descomenta las líneas indicadas -->

### Paso 2

### Paso 3

## ✅ Verificación

<!-- Cómo sabe el estudiante que completó correctamente el ejercicio -->
