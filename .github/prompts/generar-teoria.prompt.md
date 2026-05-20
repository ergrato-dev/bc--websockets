---
mode: agent
description: Genera el material teórico completo para un tema de WebSockets
---

# Generar Teoría de WebSockets

Genera el archivo de teoría (`1-teoria/`) para el tema indicado del bootcamp.

## Parámetros a confirmar

- **Tema**: (ej. "WebSocket Handshake y RFC 6455")
- **Semana**: número (ej. 02)
- **Fase**: Fundamentos / Servidor / Aplicaciones / Calidad
- **Conceptos clave**: lista de 4-6 conceptos que debe cubrir

## Estructura del archivo de teoría

El archivo resultante debe seguir esta estructura exacta:

```markdown
# [Título del Tema]

## 🎯 Objetivos

Al finalizar esta sección serás capaz de:

- [verbo de acción + concepto medible]
  ...

## 📋 Contenido

### 1. [Sección Introductoria]

### 2. [Conceptos Clave]

### 3. [Implementación Práctica]

### 4. [Errores Comunes y Cómo Evitarlos]

## 📚 Recursos Adicionales

## ✅ Checklist de Verificación
```

## Reglas de Contenido

### Rigor técnico

- Citar el RFC 6455 cuando se expliquen frames, handshake u opcodes
- Incluir referencias a la MDN WebSocket API para conceptos del cliente
- Incluir referencias a FastAPI docs para conceptos del servidor
- No simplificar en exceso: el estudiante debe entender el "porqué"

### Ejemplos de código

Todos los ejemplos de Python deben:

- Usar Python 3.12+ con type hints obligatorios
- Usar `async/await` para cualquier operación I/O
- Usar Pydantic v2 para validación de mensajes
- Manejar siempre `WebSocketDisconnect`

Todos los ejemplos de TypeScript deben:

- Tener tipos explícitos (sin `any`)
- Usar la Browser WebSocket API nativa
- Incluir gestión del ciclo de vida (open, message, error, close)

### Diagramas

- Indicar con comentario `<!-- SVG: nombre-del-diagrama.svg -->` dónde irá cada diagrama
- Tipos de diagramas a incluir según el tema:
  - Protocolo/handshake → diagrama de secuencia del handshake
  - Frames → estructura de un frame WebSocket
  - Patrones → flujo de mensajes broadcast/rooms
  - Arquitectura → capas del sistema

### Progresión didáctica

- Empezar con el "problema" que resuelve el concepto
- Explicar el "cómo funciona" con analogías simples
- Mostrar el código mínimo funcional
- Mostrar la versión completa con manejo de errores
- Cerrar con errores comunes

### Idioma

- Documentación en español
- Código y nombres de variables en inglés
- Términos técnicos en inglés con traducción entre paréntesis la primera vez

## Temas por semana (referencia)

| Semana | Tema principal              | Conceptos a cubrir                                                                         |
| ------ | --------------------------- | ------------------------------------------------------------------------------------------ |
| 01     | El Problema del Tiempo Real | polling, long-polling, SSE, WebSockets, latencia, overhead HTTP                            |
| 02     | RFC 6455                    | handshake HTTP Upgrade, frames, opcodes (0x0-0xA), masking, control frames                 |
| 03     | Browser WebSocket API       | WebSocket constructor, readyState, eventos, binaryType, envío binario                      |
| 04     | Python websockets           | asyncio, serve(), connect(), ConnectionClosedError, handlers                               |
| 05     | FastAPI WebSockets          | WebSocket endpoint, ws.accept(), ws.receive_text(), WebSocketDisconnect, ConnectionManager |
| 06     | Patrones mensajería         | broadcast, unicast, rooms, pub/sub in-memory, serialización JSON                           |
| 07     | Auth JWT                    | JWT en query param, verificación antes de accept(), scopes, token refresh WS               |
| 08     | Estado y presencia          | typing indicators, usuarios online, diff de estado, eventos de presencia                   |
| 09     | Resiliencia                 | backoff exponencial, heartbeat/ping-pong, reconnect strategy, offline queue                |
| 10     | Testing y seguridad         | pytest-asyncio, httpx_ws, mocks, DoS vectors, rate limiting, Origin validation             |
| 11     | Escalabilidad               | Redis pub/sub, múltiples instancias, sticky sessions, consistent hashing                   |
| 12     | Producción                  | Docker multi-stage, nginx proxy_pass WSS, TLS termination, monitoreo                       |
