# Soluciones Pre-WebSocket: Polling, Long Polling y SSE

## 🎯 Objetivos

- Implementar short polling y long polling con FastAPI y comparar su comportamiento
- Explicar cómo funciona Server-Sent Events (SSE) y cuándo es la opción correcta
- Identificar el límite donde cada técnica deja de ser suficiente

## 📋 Contenido

### 1. Short Polling: la fuerza bruta

_Short polling_ es la técnica más simple: el cliente lanza requests periódicos sin
importar si hay datos nuevos. No requiere nada especial del servidor — es HTTP normal.

```python
# servidor: endpoint estándar, sin magia
from fastapi import FastAPI

app = FastAPI()

_mensajes: list[dict] = []  # en producción: base de datos

@app.get("/api/mensajes")
async def obtener_mensajes(desde_id: int = 0) -> dict:
    nuevos = [m for m in _mensajes if m["id"] > desde_id]
    return {"mensajes": nuevos, "total": len(nuevos)}
```

```typescript
// cliente: dispara requests cada N milisegundos
function iniciarShortPolling(intervaloMs: number = 1000): void {
  let ultimoId = 0;
  setInterval(async () => {
    const res = await fetch(`/api/mensajes?desde_id=${ultimoId}`);
    const { mensajes } = await res.json();
    if (mensajes.length > 0) {
      mostrarMensajes(mensajes);
      ultimoId = mensajes.at(-1).id;
    }
  }, intervaloMs);
}
```

**Cuándo usarlo**: prototipos internos, herramientas de admin con < 10 usuarios,
dashboards que se actualizan cada 30 segundos o más.

**Cuándo no**: cualquier caso con más de 50 usuarios activos o intervalo < 5 segundos.

### 2. Long Polling: la mejora inteligente

_Long polling_ invierte el patrón: el servidor **retiene la respuesta** hasta que hay
datos para enviar (o hasta un timeout). El cliente lanza el siguiente request
inmediatamente después de recibir la respuesta anterior.

```python
import asyncio
from fastapi import FastAPI

app = FastAPI()

_cola: asyncio.Queue[dict] = asyncio.Queue()

@app.get("/api/esperar-mensajes")
async def esperar_mensajes(timeout: float = 30.0) -> dict:
    # El servidor espera hasta que llegue un mensaje o se agote el tiempo
    try:
        mensaje = await asyncio.wait_for(_cola.get(), timeout=timeout)
        return {"mensaje": mensaje, "timeout": False}
    except asyncio.TimeoutError:
        return {"mensaje": None, "timeout": True}
```

```typescript
// cliente: re-lanza el request inmediatamente al recibir respuesta
async function longPollingLoop(): Promise<void> {
  while (true) {
    try {
      const res = await fetch("/api/esperar-mensajes?timeout=30");
      const { mensaje, timeout } = await res.json();
      if (!timeout && mensaje) {
        mostrarMensaje(mensaje);
      }
      // sin delay: el siguiente request sale inmediatamente
    } catch {
      await new Promise((r) => setTimeout(r, 2000)); // backoff en error de red
    }
  }
}
```

**Ventaja sobre short polling**: reduce los requests vacíos al mínimo.
**Problema**: cada usuario activo mantiene una conexión HTTP abierta en el servidor.
Con 10.000 usuarios: 10.000 conexiones en espera consumiendo threads o file descriptors.

### 3. Server-Sent Events (SSE): el stream unidireccional

_SSE_ es un estándar HTTP donde el servidor mantiene la conexión abierta y envía
eventos en formato texto plano cuando lo necesita. El cliente usa la API `EventSource`
del navegador — no requiere JavaScript especial.

![Flujo SSE: una conexión abierta, el servidor empuja cuando tiene datos](../../0-assets/02-comparacion-tecnicas.svg)

```python
import asyncio
import json
from fastapi import FastAPI
from fastapi.responses import StreamingResponse

app = FastAPI()

@app.get("/api/eventos")
async def stream_eventos() -> StreamingResponse:
    async def generar():
        contador = 0
        while True:
            # El servidor envía datos cuando los tiene — sin que el cliente pida
            datos = await obtener_metricas()
            payload = json.dumps({"contador": contador, "cpu": datos["cpu"]})
            yield f"data: {payload}\n\n"  # formato SSE: "data: ...\n\n"
            contador += 1
            await asyncio.sleep(1)

    return StreamingResponse(generar(), media_type="text/event-stream")
```

```typescript
// cliente: la API EventSource maneja la reconexión automáticamente
const fuente = new EventSource("/api/eventos");

fuente.onmessage = (event: MessageEvent) => {
  const datos = JSON.parse(event.data as string);
  actualizarDashboard(datos);
};

fuente.onerror = () => {
  // EventSource reconecta solo — no necesitas manejar esto manualmente
  console.warn("SSE desconectado, reconectando...");
};
```

**Ventajas de SSE**:
- Reconexión automática nativa en el navegador
- Soporte de eventos con nombre (`event: tipo_de_evento`)
- IDs para retomar desde donde se quedó tras reconexión
- Funciona sobre HTTP/2 (múltiples streams sobre una sola conexión TCP)

**Limitación crítica**: **unidireccional** — solo el servidor puede enviar.
Si el cliente necesita enviar datos al servidor, necesita un segundo canal (fetch/POST).

### 4. La frontera donde cada técnica falla

| Técnica | Latencia | Requests/usuario/hora | Bidireccional | Overhead por mensaje |
|---------|----------|----------------------|---------------|----------------------|
| Short polling (1 s) | ~1 s | 3.600 | No | Alto (headers completos) |
| Long polling | < 100 ms | ~60–120 | No | Alto (headers completos) |
| SSE | < 100 ms | 1 (conexión persistente) | No | Bajo (texto plano) |
| **WebSocket** | **< 10 ms** | **1 (conexión persistente)** | **Sí** | **Mínimo (2–14 bytes de frame)** |

SSE es la opción correcta cuando:
- Los datos solo fluyen del servidor al cliente (notificaciones, feeds, dashboards)
- Necesitas compatibilidad máxima con proxies corporativos (es HTTP normal)
- El cliente no necesita enviar datos frecuentemente

WebSocket es necesario cuando:
- La comunicación es bidireccional y frecuente (chat, juegos, colaboración en tiempo real)
- La latencia de cada mensaje importa (< 50 ms)
- El volumen de mensajes es alto y el overhead de HTTP sería significativo

## 📚 Recursos Adicionales

- [MDN — Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events): especificación y ejemplos del API `EventSource`
- [MDN — EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource): referencia completa del objeto en el navegador

## ✅ Checklist de Verificación

- [ ] Puedo explicar la diferencia entre short polling y long polling sin mirar estas notas
- [ ] Sé cuándo SSE es suficiente y no necesito WebSockets
- [ ] Entiendo por qué long polling escala peor que SSE a pesar de tener menos requests
- [ ] Identifico el formato `data: ...\n\n` como el protocolo SSE en texto plano
