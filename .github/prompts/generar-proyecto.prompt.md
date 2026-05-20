---
mode: agent
description: Genera el proyecto semanal integrador con TODOs para el bootcamp de WebSockets
---

# Generar Proyecto Semanal

Genera el proyecto integrador de `3-proyecto/` para una semana del bootcamp.

## Parámetros a confirmar

- **Semana**: número (ej. 06)
- **Título del proyecto**: (ej. "Chat con Salas — Sistema de Rooms")
- **Descripción**: qué construirá el estudiante (1-2 oraciones)
- **Tecnologías a usar**: (ej. FastAPI + WebSockets + ConnectionManager + Redis)
- **Funcionalidades requeridas**: lista de 4-6 features

## Estructura a generar

```
3-proyecto/
├── README.md          ← especificación completa del proyecto
└── starter/
    ├── src/           ← código Python con TODOs
    ├── client/        ← código TypeScript con TODOs (si aplica)
    ├── docker-compose.yml
    └── README.md      ← instrucciones de arranque
```

> ⚠️ La carpeta `solution/` NO se genera aquí (está en `.gitignore`).

## Reglas del README.md del proyecto

### Estructura obligatoria

````markdown
# Proyecto Semana XX: {Título}

## 🎯 Objetivo

[Descripción clara en 2-3 oraciones de qué construye y para qué sirve]

## 📋 Requisitos Funcionales

| #   | Funcionalidad | Descripción | Puntos |
| --- | ------------- | ----------- | ------ |
| 1   | [Feature]     | [Qué hace]  | 20     |

...

## 🏗️ Arquitectura

[Descripción breve de la arquitectura. Referenciar SVG si existe]

<!-- SVG: architecture-diagram.svg -->

## 📁 Estructura del Proyecto

[Árbol de carpetas del starter]

## 🚀 Instrucciones de Arranque

```bash
docker compose up --build
```
````

## 📌 Entregables

- [ ] [Criterio 1 verificable]
- [ ] [Criterio 2 verificable]
      ...

## 📊 Criterios de Evaluación

[Tabla con dimensiones Conocimiento/Desempeño/Producto y criterios específicos]

````

## Reglas del starter

### CRÍTICO: Usar TODOs (no código comentado)

El proyecto usa el patrón de **TODOs para implementar**, no código comentado.

```python
# ============================================
# CLASE: ConnectionManager
# Gestiona todas las conexiones WebSocket activas
# ============================================

from fastapi import WebSocket
from collections import defaultdict

class ConnectionManager:
    def __init__(self) -> None:
        # client_id -> WebSocket
        self._connections: dict[str, WebSocket] = {}
        # room_id -> set of client_ids
        self._rooms: dict[str, set[str]] = defaultdict(set)

    async def connect(self, client_id: str, room_id: str, ws: WebSocket) -> None:
        """
        Registra una nueva conexión y la asocia a una sala.

        Args:
            client_id: Identificador único del cliente (ej. user ID del JWT)
            room_id: Sala a la que se une el cliente
            ws: Objeto WebSocket de FastAPI
        """
        # TODO: Aceptar la conexión WebSocket
        # TODO: Almacenar ws en self._connections con client_id como clave
        # TODO: Añadir client_id al set de self._rooms[room_id]
        pass

    async def disconnect(self, client_id: str) -> None:
        """Elimina la conexión y la remueve de todas las salas."""
        # TODO: Eliminar client_id de self._connections (usar pop con default)
        # TODO: Eliminar client_id de todos los sets en self._rooms
        pass

    async def broadcast_to_room(self, room_id: str, message: str, exclude: str | None = None) -> None:
        """
        Envía un mensaje a todos los clientes de una sala.

        Args:
            room_id: Sala destino
            message: Mensaje JSON serializado
            exclude: client_id a excluir del broadcast (ej. el emisor)
        """
        # TODO: Iterar sobre self._rooms[room_id]
        # IMPORTANTE: Copiar la lista antes de iterar (list(...)) para evitar
        #             RuntimeError si un cliente se desconecta durante el envío
        # TODO: Para cada client_id (excepto exclude), obtener ws y enviar message
        # TODO: Si ws.send_text() lanza excepción, llamar self.disconnect(client_id)
        pass
````

### Reglas de los TODOs

- ✅ Cada TODO debe tener una pista de implementación (qué usar, no cómo)
- ✅ Incluir comentarios que expliquen el "porqué" (ej. copiar lista antes de iterar)
- ✅ Los banners `# ===...===` identifican cada función/clase
- ✅ Los `pass` al final indican que la función necesita implementación
- ✅ Los imports ya están en el starter (el estudiante no debe buscarlos)
- ✅ El `docker-compose.yml` ya está configurado y funcional
- ❌ NO dejar TODOs ambiguos como `# TODO: Implementar`
- ❌ NO implementar la lógica, solo los scaffolds y hints

### Ejemplo de starter TypeScript con TODOs

```typescript
// ============================================
// CLASE: WebSocketClient
// Gestiona la conexión WebSocket con reconexión automática
// ============================================

interface ServerMessage {
  type: "message" | "presence" | "error" | "pong";
  room?: string;
  sender?: string;
  content?: string;
  users?: string[];
}

class WebSocketClient {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 5;

  constructor(private readonly url: string) {}

  connect(): void {
    // TODO: Crear nueva instancia de WebSocket con this.url
    // TODO: Asignar handlers: onopen, onmessage, onerror, onclose
    // PISTA: usa addEventListener para mejor gestión de múltiples handlers
  }

  private handleMessage(event: MessageEvent): void {
    // TODO: Parsear event.data como JSON tipado (ServerMessage)
    // TODO: Usar un switch sobre message.type para despachar cada tipo
    // PISTA: usa try/catch para manejar JSON malformado sin romper la app
  }

  disconnect(): void {
    // TODO: Cerrar la conexión con código 1000 (cierre normal)
    // TODO: Limpiar referencias para evitar memory leaks
  }
}
```

## Escala de complejidad por fase

| Fase         | Semana | Proyecto                       | Stack                             |
| ------------ | ------ | ------------------------------ | --------------------------------- |
| Fundamentos  | 01     | Demo de polling vs WebSocket   | HTML + Python puro                |
| Fundamentos  | 02     | Analizador de frames WS        | Python + tcpdump                  |
| Fundamentos  | 03     | Chat mínimo 1:1                | TS + Python                       |
| Servidor     | 04     | Echo server con stats          | websockets + asyncio              |
| Servidor     | 05     | Chat multiusuario              | FastAPI + ConnectionManager       |
| Servidor     | 06     | Chat con salas y presencia     | FastAPI + rooms + pub/sub         |
| Aplicaciones | 07     | Chat autenticado con JWT       | FastAPI + JWT + rooms             |
| Aplicaciones | 08     | Dashboard de presencia         | FastAPI + typing + online users   |
| Aplicaciones | 09     | Chat resiliente                | Reconexión + heartbeat + queue    |
| Calidad      | 10     | Suite de tests + hardening     | pytest + rate limiting            |
| Calidad      | 11     | Chat escalable multi-instancia | Redis pub/sub + Docker Compose    |
| Calidad      | 12     | App completa en producción     | Docker + nginx + WSS + monitoring |
