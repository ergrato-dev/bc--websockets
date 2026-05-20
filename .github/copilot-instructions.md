# 🤖 Instrucciones para GitHub Copilot

## 📋 Contexto del Bootcamp

Este es el **Bootcamp de WebSockets Zero to Hero** — un programa intensivo de 12 semanas
para llevar a estudiantes de cero a héroe en comunicación en tiempo real con WebSockets,
usando Python/FastAPI en el servidor y TypeScript en el cliente.

### 📊 Datos del Bootcamp

- **Duración**: 12 semanas (~3 meses)
- **Dedicación semanal**: 8 horas
- **Total de horas**: ~96 horas
- **Nivel de salida**: Desarrollador de aplicaciones en tiempo real (Junior-Mid)
- **Enfoque**: WebSocket Protocol (RFC 6455) + FastAPI + TypeScript + Redis
- **Stack servidor**: Python 3.12+, FastAPI 0.115+, websockets 14+, redis-py 5+
- **Stack cliente**: TypeScript 5.4+, Vite 5.4+, Browser WebSocket API nativa
- **Infra**: Docker 27+, Docker Compose 2.32+, nginx 1.26+, Redis 7.4+

---

## 🎯 Objetivos de Aprendizaje

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Comprender el protocolo WebSocket a nivel de wire (RFC 6455): handshake, frames, opcodes
- ✅ Usar la Browser WebSocket API nativa con TypeScript
- ✅ Construir servidores WebSocket con Python puro (asyncio + websockets)
- ✅ Construir endpoints WebSocket con FastAPI y gestionar conexiones
- ✅ Implementar patrones de mensajería: broadcast, unicast, rooms/canales, pub/sub
- ✅ Autenticar y autorizar conexiones WebSocket (JWT)
- ✅ Manejar estado, presencia y sincronización en tiempo real
- ✅ Implementar resiliencia: reconexión, heartbeats, backoff exponencial
- ✅ Escribir tests automatizados para endpoints WebSocket
- ✅ Aplicar buenas prácticas de seguridad (DoS, rate limiting, validación)
- ✅ Escalar horizontalmente con Redis como message broker
- ✅ Desplegar en producción con Docker, nginx y WSS (TLS)

---

## 🗓️ Estructura del Bootcamp

| Fase                        | Semanas | Horas | Foco                                              |
| --------------------------- | ------- | ----- | ------------------------------------------------- |
| Fundamentos del Tiempo Real | 1–3     | 24h   | Protocolos, RFC 6455, Browser API                 |
| Servidor y Patrones         | 4–6     | 24h   | Python / FastAPI, conexiones, mensajería          |
| Aplicaciones Reales         | 7–9     | 24h   | Auth, estado/presencia, resiliencia               |
| Calidad y Producción        | 10–12   | 24h   | Testing, seguridad, escalabilidad, proyecto final |

### Semanas

| #   | Tema                                                      | Fase         |
| --- | --------------------------------------------------------- | ------------ |
| 01  | El Problema del Tiempo Real: polling, SSE vs WebSockets   | Fundamentos  |
| 02  | WebSocket Protocol (RFC 6455): handshake, frames, opcodes | Fundamentos  |
| 03  | Browser WebSocket API con TypeScript                      | Fundamentos  |
| 04  | Servidor WebSocket con Python puro (asyncio + websockets) | Servidor     |
| 05  | WebSockets con FastAPI: endpoints y ConnectionManager     | Servidor     |
| 06  | Patrones de mensajería: broadcast, rooms, pub/sub         | Servidor     |
| 07  | Autenticación y autorización: JWT en WebSockets           | Aplicaciones |
| 08  | Estado y presencia: typing indicators, usuarios online    | Aplicaciones |
| 09  | Resiliencia: reconexión, heartbeats, backoff exponencial  | Aplicaciones |
| 10  | Testing y seguridad: pytest, rate limiting, DoS           | Calidad      |
| 11  | Escalabilidad: Redis pub/sub, múltiples instancias        | Calidad      |
| 12  | Proyecto Final: app completa en producción (WSS)          | Calidad      |

---

## 🗂️ Estructura de Carpetas

Cada semana sigue esta estructura estándar:

```
bootcamp/week-XX-tema_principal/
├── README.md                 # Descripción y objetivos de la semana
├── rubrica-evaluacion.md     # Criterios de evaluación detallados
├── 0-assets/                 # Imágenes, diagramas SVG
├── 1-teoria/                 # Material teórico (.md)
├── 2-practicas/              # Ejercicios guiados paso a paso
│   └── practica-XX-nombre/
│       ├── README.md         # Instrucciones del ejercicio
│       └── starter/          # Código inicial comentado
├── 3-proyecto/               # Proyecto semanal integrador
│   ├── README.md
│   ├── starter/              # Código con TODOs
│   └── solution/             # ⚠️ OCULTA — Solo instructores
├── 4-recursos/               # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/               # Términos clave de la semana
    └── README.md
```

### 📁 Carpetas Raíz

- **`assets/`**: Recursos visuales globales (logos, headers, banners)
- **`docs/`**: Documentación general del bootcamp
- **`scripts/`**: Scripts de automatización y utilidades
- **`bootcamp/`**: Contenido semanal del bootcamp

---

## 🎓 Componentes de Cada Semana

### 1. Teoría (`1-teoria/`)

- Archivos markdown con explicaciones conceptuales
- Diagramas SVG para visualizar flujos y protocolos
- Ejemplos de código comentados educativamente
- Referencias al RFC 6455 y documentación oficial

### 2. Prácticas (`2-practicas/`)

Ejercicios **guiados paso a paso**. El estudiante aprende **descomentando código**, NO implementando desde cero.

#### ✅ Formato correcto en ejercicios (código comentado para descomentar)

```python
# ============================================
# PASO 2: Enviar mensaje a todos los clientes
# ============================================
print("--- Paso 2: Broadcast ---")

# Un ConnectionManager mantiene el registro de conexiones activas
# Descomenta las siguientes líneas:
# async def broadcast(message: str):
#     for connection in active_connections:
#         await connection.send_text(message)
```

```typescript
// ============================================
// PASO 1: Conectar al servidor WebSocket
// ============================================

// El constructor WebSocket abre la conexión inmediatamente
// Descomenta las siguientes líneas:
// const ws = new WebSocket("ws://localhost:8000/ws");
// ws.onopen = () => console.log("Conectado");
```

#### ❌ Formato incorrecto en ejercicios (NO usar TODOs en ejercicios)

```python
# ❌ INCORRECTO — Este formato es para PROYECTOS, no ejercicios
async def broadcast(message: str):
    result = None  # TODO: Implementar
    return result
```

### 3. Proyecto (`3-proyecto/`)

El proyecto SÍ usa TODOs. El estudiante implementa desde cero usando lo aprendido.

```python
# ============================================
# FUNCIÓN: handle_room_message
# Envía un mensaje a todos los clientes de una sala
# ============================================

async def handle_room_message(room_id: str, message: str, sender_id: str) -> None:
    """
    Distribuye un mensaje a todos los clientes de la sala.

    Args:
        room_id: Identificador único de la sala
        message: Texto del mensaje a distribuir
        sender_id: ID del cliente que envía (para excluirlo si es necesario)
    """
    # TODO: Obtener las conexiones de la sala desde el ConnectionManager
    # TODO: Iterar sobre las conexiones y enviar el mensaje
    # TODO: Manejar la excepción WebSocketDisconnect si un cliente se desconectó
    pass
```

> 📁 La carpeta `solution/` está en `.gitignore` y NO se sube al repositorio público.

---

## 📝 Convenciones de Código

### Python — Estilo Moderno (3.12+)

```python
# ✅ BIEN — type hints siempre, union con |
async def get_connection(client_id: str) -> WebSocket | None:
    return active_connections.get(client_id)

# ✅ BIEN — dataclass o Pydantic para mensajes
from pydantic import BaseModel

class ChatMessage(BaseModel):
    room: str
    sender: str
    content: str
    timestamp: float

# ✅ BIEN — async context manager para cleanup
@asynccontextmanager
async def lifespan(app: FastAPI):
    await redis_client.ping()
    yield
    await redis_client.aclose()

# ❌ MAL — sin type hints
def get_connection(client_id):
    return active_connections.get(client_id)

# ❌ MAL — sync en código async
def send_message(ws, msg):
    ws.send(msg)  # bloqueante
```

### TypeScript — Cliente WebSocket

```typescript
// ✅ BIEN — tipado explícito para mensajes
interface ServerMessage {
  type: "chat" | "presence" | "error";
  payload: unknown;
}

// ✅ BIEN — clase con gestión de ciclo de vida
class WebSocketClient {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;

  connect(url: string): void {
    this.ws = new WebSocket(url);
    this.ws.addEventListener("message", this.handleMessage.bind(this));
  }

  private handleMessage(event: MessageEvent): void {
    const data: ServerMessage = JSON.parse(event.data as string);
    // ...
  }
}

// ❌ MAL — any implícito
ws.onmessage = (e) => {
  const data = JSON.parse(e.data); // data es any
};
```

### Nomenclatura

- **Variables y funciones**: `snake_case` (Python) / `camelCase` (TypeScript)
- **Constantes globales**: `UPPER_SNAKE_CASE`
- **Clases**: `PascalCase`
- **Archivos Python**: `snake_case.py`
- **Archivos TypeScript**: `kebab-case.ts`
- **Endpoints WS**: `/ws/{room_id}`, `/ws/chat`, etc.
- **Idioma**: Inglés para código, español para documentación

### Estructura de Proyecto Servidor (FastAPI + WebSockets)

```
src/
├── main.py                  # Punto de entrada, lifespan
├── config.py                # Configuración (env vars)
├── ws/
│   ├── __init__.py
│   ├── router.py            # Endpoints WebSocket
│   ├── manager.py           # ConnectionManager
│   └── handlers.py          # Lógica de mensajes
├── auth/
│   ├── __init__.py
│   └── jwt.py               # Verificación JWT para WS
├── pubsub/
│   ├── __init__.py
│   └── redis.py             # Redis pub/sub adapter
├── models/
│   ├── __init__.py
│   └── messages.py          # Pydantic schemas para mensajes
└── utils/
    ├── __init__.py
    └── security.py          # Rate limiting, validación
```

---

## 🔌 Patrones WebSocket Clave

### ConnectionManager (FastAPI)

```python
from fastapi import WebSocket
from collections import defaultdict

class ConnectionManager:
    def __init__(self) -> None:
        # client_id -> WebSocket
        self._connections: dict[str, WebSocket] = {}
        # room_id -> set of client_ids
        self._rooms: dict[str, set[str]] = defaultdict(set)

    async def connect(self, client_id: str, ws: WebSocket) -> None:
        await ws.accept()
        self._connections[client_id] = ws

    async def disconnect(self, client_id: str) -> None:
        self._connections.pop(client_id, None)
        for room in self._rooms.values():
            room.discard(client_id)

    async def broadcast_to_room(self, room_id: str, message: str) -> None:
        for client_id in list(self._rooms[room_id]):
            if ws := self._connections.get(client_id):
                try:
                    await ws.send_text(message)
                except Exception:
                    await self.disconnect(client_id)
```

### Autenticación JWT en Handshake

```python
from fastapi import WebSocket, WebSocketException, status, Query
from app.auth.jwt import verify_token

@router.websocket("/ws/chat")
async def ws_chat(
    ws: WebSocket,
    token: str = Query(...),           # JWT en query param durante handshake
) -> None:
    payload = verify_token(token)
    if payload is None:
        raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)
    await manager.connect(payload["sub"], ws)
    # ...
```

### Heartbeat / Ping-Pong

```python
import asyncio

async def heartbeat(ws: WebSocket, interval: float = 30.0) -> None:
    """Envía ping periódico; cierra si no hay respuesta."""
    while True:
        await asyncio.sleep(interval)
        try:
            await ws.send_text('{"type":"ping"}')
        except Exception:
            break
```

---

## 🧪 Testing

El bootcamp enseña testing con **pytest** y **pytest-asyncio**.

```python
# tests/test_ws_chat.py
import pytest
from httpx import AsyncClient, ASGITransport
from httpx_ws import aconnect_ws
from src.main import app

@pytest.mark.asyncio
async def test_ws_connect_and_receive():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as client:
        async with aconnect_ws("/ws/chat?token=valid_token", client) as ws:
            await ws.send_text('{"type":"message","content":"hola"}')
            response = await ws.receive_text()
            data = json.loads(response)
            assert data["type"] == "message"

@pytest.mark.asyncio
async def test_ws_rejects_invalid_token():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as client:
        with pytest.raises(Exception):
            async with aconnect_ws("/ws/chat?token=invalid", client):
                pass
```

---

## 🔐 Seguridad WebSocket

### Obligatorio en todo código

- ✅ Validar **origen** del handshake (`Origin` header) en producción
- ✅ Autenticar **antes** de aceptar la conexión (`ws.accept()`)
- ✅ Validar y sanitizar **todos** los mensajes entrantes con Pydantic
- ✅ Limitar tamaño máximo de mensaje (evitar memory exhaustion)
- ✅ Implementar rate limiting por conexión
- ✅ Cerrar conexiones inactivas (timeout + heartbeat)
- ✅ Usar `wss://` (TLS) en producción — nunca `ws://` en prod
- ✅ Usar **versiones exactas** en todas las dependencias — ver sección [Pinning de Dependencias](#-regla-de-oro-pinning-de-dependencias)
- ✅ Ejecutar `pnpm audit` / `pip-audit` antes de cada commit
- ❌ NUNCA aceptar `ws.accept()` sin verificar autenticación primero
- ❌ NUNCA hacer `json.loads()` sin validar con Pydantic después
- ❌ NUNCA instalar dependencias con comodines (`*`, `>=`, `^`, `~`)

```python
# ✅ CORRECTO — validar mensaje antes de procesar
from pydantic import BaseModel, ValidationError

class IncomingMessage(BaseModel):
    type: Literal["message", "join", "leave"]
    content: str = Field(max_length=2000)

@router.websocket("/ws/{room_id}")
async def ws_endpoint(ws: WebSocket, room_id: str, token: str = Query(...)):
    payload = verify_token(token)
    if not payload:
        raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)

    await ws.accept()
    try:
        while True:
            raw = await ws.receive_text()
            try:
                msg = IncomingMessage.model_validate_json(raw)
            except ValidationError:
                await ws.send_text('{"error":"invalid_message"}')
                continue
            # procesar msg...
    except WebSocketDisconnect:
        pass
```

---

## 🌐 Idioma y Nomenclatura

### Código

- ✅ **Inglés** para variables, funciones, clases, comentarios técnicos
- ✅ Usar términos estándar: `connection`, `broadcast`, `room`, `channel`, `client_id`

### Documentación

- ✅ **Español** para READMEs, teoría, guías de aprendizaje
- ✅ Comentarios educativos en español cuando expliquen conceptos

```python
# ✅ CORRECTO — código inglés, explicación española
async def broadcast_to_room(room_id: str, message: str) -> None:
    # Las listas de conexiones se copian antes de iterar
    # para evitar RuntimeError si un cliente se desconecta durante el envío
    for client_id in list(self._rooms[room_id]):
        ...
```

---

## 🛠️ Entorno de Desarrollo

### Docker (obligatorio — NO instalar Python ni Node localmente)

```yaml
# docker-compose.yml típico del bootcamp
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis

  redis:
    image: redis:7.4-alpine
    ports:
      - "6379:6379"

  client:
    build: ./client
    ports:
      - "5173:5173"
    volumes:
      - ./client:/app
      - /app/node_modules
```

### Python — gestión de paquetes con `uv`

uv se instala copiando el binario desde su imagen oficial — **sin `pip`**.

```dockerfile
FROM python:3.12-slim

# Copiar uv desde la imagen oficial (versión pinada, sin pip)
COPY --from=ghcr.io/astral-sh/uv:0.11.15 /uv /uvx /bin/

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy

WORKDIR /app
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-dev
COPY . .
EXPOSE 8000
CMD ["uv", "run", "fastapi", "run", "src/main.py", "--host", "0.0.0.0", "--port", "8000"]
```

> ⚠️ **NUNCA** usar `pip install uv` — instalar uv con pip anula sus ventajas de reproducibilidad.
> Actualizar la versión de uv: cambiar `0.11.15` por la nueva versión y auditar.

### TypeScript/Vite — gestión de paquetes con `pnpm`

```dockerfile
FROM node:22-alpine AS builder
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
```

> ⛔ **NUNCA `npm`** — ni `npm install`, ni `npm run`, ni `npx`. Tampoco `yarn`.
> ✅ **SIEMPRE `pnpm`** para todo: instalar, ejecutar scripts, auditar y consultar versiones.
> ⚠️ **Versiones exactas** en `package.json` — nunca `^` ni `~`.

```bash
# ✅ CORRECTO
pnpm install
pnpm add vite@6.2.6
pnpm run dev
pnpm exec tsc
pnpm dlx create-vite@6.2.6

# ❌ INCORRECTO — NUNCA
npm install
npm run dev
npx create-vite
yarn add vite
```

### 📦 Regla de Oro: Pinning de Dependencias

> 🔒 Esta regla aplica a **todos** los archivos de dependencias del bootcamp sin excepción: `pyproject.toml`, `uv.lock`, `package.json`, `pnpm-lock.yaml`.

#### ⛔ PROHIBIDO — rangos y comodines

```toml
# ❌ NUNCA — pyproject.toml con rangos
[project]
dependencies = [
    "fastapi>=0.115.0",      # permite instalar cualquier versión futura
    "websockets~=14.0",      # permite patches no auditados
    "redis>=5.0,<6.0",       # rango amplio sin control
    "pydantic",              # sin versión: peligroso
]
```

```json
// ❌ NUNCA — package.json con rangos
{
  "dependencies": {
    "typescript": "^5.4.0",
    "vite": "~6.2.0",
    "ws": ">=8.0.0",
    "socket.io-client": "*"
  }
}
```

#### ✅ OBLIGATORIO — versiones exactas siempre

```toml
# ✅ SIEMPRE — pyproject.toml con versiones exactas
[project]
dependencies = [
    "fastapi==0.115.12",
    "websockets==14.2",
    "redis==5.2.1",
    "pydantic==2.11.4",
]
```

```json
// ✅ SIEMPRE — package.json con versiones exactas
{
  "dependencies": {
    "typescript": "5.8.2",
    "vite": "6.2.6"
  }
}
```

#### Por qué es obligatorio

| Riesgo                  | Detalle                                                                     |
| ----------------------- | --------------------------------------------------------------------------- |
| CVEs no controlados     | `^4.0.0` puede instalar `4.9.9` con vulnerabilidades conocidas              |
| Builds no reproducibles | Dos `uv sync` / `pnpm install` en fechas distintas dan resultados distintos |
| Supply-chain attacks    | Una actualización automática puede inyectar código malicioso                |
| Auditorías imposibles   | No se puede fijar qué versión exacta corre en producción                    |

#### Auditoría de CVEs — obligatoria antes de cada commit

```bash
# Python — auditar con pip-audit (ejecutar dentro del contenedor)
docker compose exec api uv run pip-audit

# Node.js — auditar con pnpm
pnpm audit --audit-level moderate

# Si se encuentran vulnerabilidades: actualizar SOLO la versión afectada
# a la versión mínima que resuelve el CVE, con versión exacta
uv add fastapi==0.115.13          # ← actualización controlada
pnpm add typescript@5.8.3         # ← actualización controlada
```

#### Comandos para consultar la última versión estable

```bash
# Python
uv run pip index versions fastapi | head -1

# Node.js
pnpm info typescript version      # ← SIEMPRE pnpm, nunca npm
pnpm info vite version
```

#### Herramientas configuradas

- **Python/uv**: versiones exactas en `pyproject.toml`, lockfile `uv.lock` versionado
- **Node.js/pnpm**: `save-exact=true` en `.npmrc` del proyecto, lockfile `pnpm-lock.yaml` versionado
- **CI**: `uv sync --frozen` y `pnpm install --frozen-lockfile` — fallan si el lockfile no coincide

---

## 📖 Documentación

### README.md de Semana (estructura obligatoria)

```markdown
# Semana XX — Título del Tema

## 🎯 Objetivos de Aprendizaje

## 📚 Requisitos Previos

## 🗂️ Estructura de la Semana

## 📝 Contenidos

## ⏱️ Distribución del Tiempo (8 horas)

- Teoría: 2 horas
- Prácticas: 3 horas
- Proyecto: 3 horas

## 📌 Entregables

## 🔗 Navegación
```

### Archivos de Teoría

```markdown
# Título del Tema

## 🎯 Objetivos

## 📋 Contenido

### 1. Introducción

### 2. Conceptos Clave

### 3. Ejemplos Prácticos

### 4. Laboratorio

## 📚 Recursos Adicionales

## ✅ Checklist de Verificación
```

---

## 🎨 Recursos Visuales

- ✅ **SVG** para todos los diagramas (flujos WS, arquitecturas, frames)
- ❌ **NO usar ASCII art** para diagramas
- 🌙 **Tema dark** en todos los assets
- ❌ **Sin degradés** — colores sólidos únicamente
- ✅ Paleta basada en **WebSocket blue** (`#0066CC`) y **Redis red** (`#DC382D`)
- ✅ Fuentes **sans-serif**: Inter, Roboto, System UI — nunca serif

### SVGs obligatorios por tipo de semana

- Semanas de protocolo: diagrama de handshake, diagrama de frame
- Semanas de patrones: diagrama de flujo de mensajes (broadcast/rooms)
- Semanas de arquitectura: diagrama de capas / componentes
- Semana de escalabilidad: diagrama Redis pub/sub con múltiples instancias

---

## 📊 Evaluación

Cada semana incluye **tres tipos de evidencias**:

1. **Conocimiento 🧠** (30%): Evaluaciones teóricas, cuestionarios
2. **Desempeño 💪** (40%): Ejercicios prácticos en clase
3. **Producto 📦** (30%): Proyecto entregable funcional

- Mínimo **70%** en cada tipo de evidencia
- Código funcional con conexión WebSocket demostrable

---

## 🚀 Metodología

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2 horas
- **Prácticas**: 3 horas
- **Proyecto**: 3 horas

### Estrategias Didácticas

- **Aprendizaje Basado en Proyectos (ABP)**
- **Práctica Deliberada**: ejercicios incrementales
- **Live Coding**: sesiones en vivo con WebSockets en acción
- **Code Review**: revisión de código entre pares

---

## 🤖 Instrucciones para Copilot

### Límites de Respuesta

1. **Nunca generar respuestas que superen los límites de tokens**
   - ✅ Dividir contenido extenso en múltiples entregas
   - ✅ Crear por secciones: teoría → prácticas → proyecto
   - ✅ Esperar confirmación antes de continuar

### Generación de Código

1. **Python moderno (3.12+)**
   - Type hints obligatorios con `|` (no `Union[]`)
   - Genéricos nativos: `list[str]`, `dict[str, int]`
   - `asyncio` y `async/await` para todo código I/O
   - Pydantic v2 para validación de mensajes

2. **TypeScript estricto**
   - `"strict": true` en `tsconfig.json`
   - Tipos explícitos para todos los mensajes WebSocket
   - Evitar `any` — usar tipos discriminados para mensajes

3. **Patrones WebSocket**
   - Usar siempre `ConnectionManager` como abstracción de gestión de conexiones
   - Siempre manejar `WebSocketDisconnect` y excepciones de red
   - Siempre validar mensajes entrantes con Pydantic antes de procesar
   - Autenticar en el handshake, no después de `accept()`

4. **Dependencias — Regla absoluta**
   - ❌ NUNCA usar `npm`, `npx` ni `yarn` — ni en comandos, ni en Dockerfiles, ni en scripts
   - ❌ NUNCA escribir `pnpm add <paquete>` sin `@X.Y.Z` al final
   - ❌ NUNCA generar `pyproject.toml` con rangos (`>=`, `~=`, `^`, `*`)
   - ❌ NUNCA generar `package.json` con rangos (`^`, `~`, `>=`, `*`, `latest`)
   - ✅ SIEMPRE `pnpm` para instalar, ejecutar scripts, auditar y consultar versiones
   - ✅ SIEMPRE usar versión exacta: consultar la última estable antes de escribirla
   - ✅ SIEMPRE ejecutar auditoría CVE tras instalar o actualizar:
     ```bash
     pnpm audit --audit-level moderate          # Node.js
     docker compose exec api uv run pip-audit   # Python
     ```

5. **Código educativo**
   - Comentar los "porqué", no solo los "qué"
   - Incluir referencias al RFC 6455 cuando se expliquen frames/opcodes
   - Señalar errores comunes y cómo evitarlos

### Creación de Contenido

1. Progresión: simple → complejo
2. Ejemplos del mundo real (chat, notificaciones, dashboards en tiempo real)
3. Enfoque moderno — sin mencionar técnicas obsoletas (polling incluido solo como contraste)
4. Siempre incluir el caso de fallo/error, no solo el happy path

---

## 📚 Referencias Oficiales

- **RFC 6455 (WebSocket Protocol)**: https://datatracker.ietf.org/doc/html/rfc6455
- **FastAPI WebSockets**: https://fastapi.tiangolo.com/advanced/websockets/
- **websockets (Python)**: https://websockets.readthedocs.io/
- **MDN WebSocket API**: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
- **Redis pub/sub**: https://redis.io/docs/manual/pubsub/
- **Python asyncio**: https://docs.python.org/3/library/asyncio.html
- **pytest-asyncio**: https://pytest-asyncio.readthedocs.io/

---

## 📋 Orden Estricto de Creación de Contenido

Cada semana se crea **en este orden exacto**, sin saltarse pasos:

| #   | Artefacto                    | Notas clave                                                                                                                                                                                                                                                                                                                    |
| --- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `README.md` de la semana     | Objetivos, requisitos previos, estructura, distribución 8h, entregables, navegación                                                                                                                                                                                                                                            |
| 2   | `rubrica-evaluacion.md`      | Criterios 🧠 30% / 💪 40% / 📦 30% — mínimo 70% cada uno                                                                                                                                                                                                                                                                       |
| 3   | `1-teoria/` (archivos `.md`) | Explicar conceptos antes de crear los diagramas                                                                                                                                                                                                                                                                                |
| 4   | `0-assets/` (diagramas SVG)  | Se crean **después** de redactar la teoría, para saber exactamente qué diagramas son necesarios. La **cantidad de SVGs depende de los temas**, no de ningún número fijo ni del repo de referencia. Cada SVG se **renderiza en el archivo de teoría** donde aporta comprensión, con `![descripción](../../0-assets/nombre.svg)` |
| 5   | `2-practicas/`               | Código comentado para descomentar — NO TODOs                                                                                                                                                                                                                                                                                   |
| 6   | `3-proyecto/`                | Código con TODOs — NO código comentado                                                                                                                                                                                                                                                                                         |
| 7   | `4-recursos/`                | ebooks, videografía, webgrafía                                                                                                                                                                                                                                                                                                 |
| 8   | `5-glosario/README.md`       | Mínimo 8 términos, ordenados alfabéticamente                                                                                                                                                                                                                                                                                   |

> ⚠️ **El paso 4 es crítico**: los SVGs son consecuencia del contenido teórico, no un requisito fijo.
> No crear SVGs por cubrir una cuota — crear solo los que añadan comprensión real.

## ✅ Checklist para Nuevas Semanas

- [ ] 1. `README.md` con objetivos, distribución 8h y navegación ← →
- [ ] 2. `rubrica-evaluacion.md` con los tres tipos de evidencia
- [ ] 3. Archivos de teoría en `1-teoria/` redactados
- [ ] 4. SVGs en `0-assets/` creados (solo los necesarios) y referenciados en teoría
- [ ] 5. Ejercicios guiados en `2-practicas/` (formato descomentar)
- [ ] 6. Proyecto integrador en `3-proyecto/` (formato TODOs)
- [ ] 7. Recursos en `4-recursos/`
- [ ] 8. Glosario en `5-glosario/README.md`
- [ ] Verificar coherencia con semanas anteriores
- [ ] Probar que todo el código de ejemplos funciona

---

_Última actualización: Mayo 2026_
_Versión: 1.0_
