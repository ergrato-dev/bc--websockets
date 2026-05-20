---
applyTo: "bootcamp/**/*.py"
---

# Convenciones de Código Python — Bootcamp WebSockets

## Python moderno (3.12+)

- Usar siempre **type hints** en funciones y métodos
- Usar `|` para tipos union — nunca `Union[]` ni `Optional[]`
- Usar genéricos nativos: `list[str]`, `dict[str, int]` — nunca `List[]`, `Dict[]`
- Usar `async/await` para **toda** operación de red o I/O
- Usar Pydantic v2 (`model_validate_json`, `model_dump`) para mensajes WS

```python
# ✅ CORRECTO
async def get_room_clients(room_id: str) -> list[str]:
    return list(self._rooms.get(room_id, set()))

# ❌ INCORRECTO — type hints obsoletos
from typing import List, Optional
def get_room_clients(room_id: str) -> List[str]:
    ...
```

## Patrones WebSocket obligatorios

### ConnectionManager

- Siempre usar `ConnectionManager` como abstracción de conexiones
- Copiar listas antes de iterar para evitar `RuntimeError` durante desconexiones
- Manejar excepciones de red silenciosamente al enviar mensajes

```python
async def broadcast_to_room(self, room_id: str, message: str) -> None:
    for client_id in list(self._rooms[room_id]):   # ← copiar con list()
        if ws := self._connections.get(client_id):
            try:
                await ws.send_text(message)
            except Exception:
                await self.disconnect(client_id)   # ← limpiar si falló
```

### Autenticación — NUNCA después de `accept()`

```python
# ✅ CORRECTO — autenticar ANTES de accept()
@router.websocket("/ws/{room_id}")
async def ws_endpoint(ws: WebSocket, room_id: str, token: str = Query(...)):
    payload = verify_token(token)
    if not payload:
        raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)
    await ws.accept()   # ← solo si el token es válido

# ❌ INCORRECTO — accept() antes de verificar
@router.websocket("/ws/{room_id}")
async def ws_endpoint(ws: WebSocket, token: str = Query(...)):
    await ws.accept()
    payload = verify_token(token)
    if not payload:
        await ws.close()  # demasiado tarde: la conexión ya fue aceptada
```

### Validación de mensajes — SIEMPRE con Pydantic

```python
# ✅ CORRECTO — validar antes de procesar
from pydantic import BaseModel, Field, ValidationError
from typing import Literal

class IncomingMessage(BaseModel):
    type: Literal["message", "join", "leave", "ping"]
    content: str = Field(default="", max_length=2000)
    room: str = Field(default="", max_length=100)

while True:
    raw = await ws.receive_text()
    try:
        msg = IncomingMessage.model_validate_json(raw)
    except ValidationError:
        await ws.send_text('{"error":"invalid_message_format"}')
        continue
    # procesar msg tipado...

# ❌ INCORRECTO — procesar JSON sin validar
while True:
    data = json.loads(await ws.receive_text())  # data es dict sin tipar
    if data["type"] == "message":               # puede lanzar KeyError
        ...
```

### Ciclo de vida del endpoint

```python
@router.websocket("/ws/{room_id}")
async def ws_endpoint(ws: WebSocket, room_id: str, token: str = Query(...)) -> None:
    # 1. Autenticar
    payload = verify_token(token)
    if not payload:
        raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)

    client_id = payload["sub"]

    # 2. Aceptar y registrar
    await manager.connect(client_id, room_id, ws)
    try:
        # 3. Bucle de mensajes
        while True:
            raw = await ws.receive_text()
            try:
                msg = IncomingMessage.model_validate_json(raw)
            except ValidationError:
                await ws.send_text('{"error":"invalid_message"}')
                continue
            await handle_message(msg, client_id, room_id)

    except WebSocketDisconnect:
        # 4. Limpiar siempre en finally o en el except de disconnect
        await manager.disconnect(client_id)
```

## Seguridad

- ✅ Limitar `max_length` en todos los campos de mensaje
- ✅ Validar `room_id` contra caracteres no permitidos (solo alfanumérico + guiones)
- ✅ No exponer trazas de error al cliente
- ✅ Implementar rate limiting por `client_id`
- ❌ NUNCA hacer `eval()` ni `exec()` con contenido de mensajes
- ❌ NUNCA exponer `client_id` internos en mensajes de broadcast

## Tests

```python
# Patrón estándar para tests WebSocket con pytest-asyncio + httpx_ws
import pytest
from httpx import AsyncClient, ASGITransport
from httpx_ws import aconnect_ws

@pytest.mark.asyncio
async def test_ws_chat(valid_token: str) -> None:
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        async with aconnect_ws(f"/ws/general?token={valid_token}", client) as ws:
            await ws.send_text('{"type":"message","content":"hola","room":"general"}')
            response = await ws.receive_text()
            data = json.loads(response)
            assert data["type"] == "message"
```

## Gestión de paquetes

- ✅ Usar `uv` dentro de Docker — nunca `pip` directamente
- ✅ Versiones exactas en `pyproject.toml` — nunca rangos `>=` o `~=`
- ✅ Ejecutar con `uv run fastapi run src/main.py`
