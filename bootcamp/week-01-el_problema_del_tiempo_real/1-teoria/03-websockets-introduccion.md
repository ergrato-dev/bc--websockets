# Introducción a WebSockets: La Conexión Persistente y Bidireccional

## 🎯 Objetivos

- Describir qué es WebSocket y qué problema resuelve que HTTP no puede
- Distinguir la diferencia entre half-duplex y full-duplex en comunicación de red
- Escribir el primer cliente y servidor WebSocket funcional
- Reconocer los casos de uso donde WebSocket es la elección correcta — y donde no lo es

## 📋 Contenido

### 1. El cambio de modelo: de petición-respuesta a conversación

Las soluciones anteriores (polling, long polling, SSE) trabajan _dentro_ del modelo
HTTP: el cliente siempre inicia, el servidor siempre responde. WebSocket rompe ese
modelo completamente.

Una conexión WebSocket es como una llamada telefónica:
- Se establece una sola vez (_handshake_)
- Cualquiera de los dos puede hablar en cualquier momento
- La línea permanece abierta hasta que alguien la cierra

![Conexión WebSocket: full-duplex, persistente, cualquiera puede enviar primero](../../0-assets/03-websocket-conexion-persistente.svg)

WebSocket es un protocolo estándar definido en el **RFC 6455** (2011). No es HTTP,
pero nace de él: el _handshake_ inicial usa HTTP/1.1 y luego la conexión se "actualiza"
(_upgrade_) al protocolo WebSocket. A partir de ese momento, HTTP queda fuera.

### 2. Full-duplex vs half-duplex

- **Half-duplex**: solo un lado puede transmitir a la vez (como un walkie-talkie).
  HTTP es half-duplex: el servidor espera a que el cliente termine su request para
  responder.

- **Full-duplex**: ambos lados pueden transmitir simultáneamente (como una llamada de voz).
  WebSocket es full-duplex: el servidor puede enviar una alerta mientras el cliente
  está enviando un mensaje — sin que ninguno tenga que esperar al otro.

Esto no es solo una mejora de latencia. Es un cambio de paradigma que habilita
patrones imposibles con HTTP: el servidor puede _push_ datos sin que el cliente pregunte.

### 3. Primer servidor WebSocket con FastAPI

```python
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

@app.websocket("/ws")
async def endpoint_websocket(ws: WebSocket) -> None:
    await ws.accept()  # completa el handshake — la conexión está abierta
    try:
        while True:
            # recibir mensaje del cliente
            texto = await ws.receive_text()
            print(f"Recibido: {texto}")

            # responder — servidor habla sin que el cliente vuelva a pedir
            await ws.send_text(f"Echo: {texto}")
    except WebSocketDisconnect:
        print("Cliente desconectado")
```

Lo que ocurre línea a línea:
1. `ws.accept()` completa el _HTTP Upgrade_ — a partir de aquí es WebSocket puro
2. El bucle `while True` mantiene la conexión activa indefinidamente
3. `receive_text()` es una corutina: espera sin bloquear hasta que llega un mensaje
4. `send_text()` envía al cliente de inmediato — sin necesidad de que el cliente haya pedido
5. `WebSocketDisconnect` se lanza cuando el cliente cierra la conexión limpiamente

### 4. Primer cliente WebSocket en TypeScript

```typescript
// La Browser WebSocket API es parte del estándar web — sin librerías externas
const ws = new WebSocket("ws://localhost:8000/ws");

ws.onopen = (): void => {
  console.log("Conexión establecida");
  ws.send("Hola servidor"); // el cliente habla primero
};

ws.onmessage = (event: MessageEvent): void => {
  const respuesta = event.data as string;
  console.log("Servidor dice:", respuesta);
};

ws.onclose = (event: CloseEvent): void => {
  console.log(`Conexión cerrada — código: ${event.code}, razón: ${event.reason}`);
};

ws.onerror = (): void => {
  console.error("Error de WebSocket");
};
```

Cuatro eventos cubren todo el ciclo de vida de la conexión:
- `onopen`: la conexión se estableció, ya puedes enviar
- `onmessage`: llegó un mensaje del servidor
- `onclose`: la conexión se cerró (puede ser normal o por error)
- `onerror`: ocurrió un error de red (siempre seguido de `onclose`)

### 5. La eficiencia de los frames WebSocket

Una vez establecida la conexión, los mensajes viajan como _frames_ binarios.
Un frame WebSocket tiene entre **2 y 14 bytes de overhead** — comparado con los
400–1200 bytes de headers HTTP.

Para un mensaje de texto de 30 bytes:
- Con HTTP: 30 bytes útiles + ~600 bytes de headers = **630 bytes totales**
- Con WebSocket: 30 bytes útiles + 2 bytes de frame = **32 bytes totales**

En una aplicación de chat con 100 mensajes por segundo, esa diferencia significa
~58 KB/seg menos de tráfico — solo en overhead. La semana 02 profundiza en la
estructura exacta de los frames.

### 6. Cuándo usar WebSocket — y cuándo no

**WebSocket es la elección correcta cuando:**
- La comunicación es bidireccional y frecuente (chat, juegos, colaboración)
- La latencia por mensaje importa (< 50 ms)
- El servidor necesita _push_ datos al cliente sin que el cliente los solicite
- El volumen de mensajes es alto y el overhead de HTTP importa

**SSE es suficiente (y más simple) cuando:**
- Los datos solo fluyen del servidor al cliente
- El cliente envía datos raramente (puede usar fetch para eso)
- Necesitas compatibilidad total con proxies HTTP corporativos

**Polling es aceptable cuando:**
- Los datos cambian lentamente (cada 30 segundos o más)
- El número de usuarios activos es pequeño (< 50)
- La infraestructura no soporta conexiones persistentes

### 7. Errores comunes al empezar con WebSockets

```python
# ❌ Aceptar la conexión sin validar nada
@app.websocket("/ws")
async def endpoint_inseguro(ws: WebSocket) -> None:
    await ws.accept()  # ← cualquiera puede conectarse, sin autenticación
    # En producción siempre verificar el token ANTES de accept()
```

```python
# ✅ El patrón correcto — autenticar en el handshake, antes de aceptar
from fastapi import WebSocket, WebSocketException, Query, status

@app.websocket("/ws")
async def endpoint_seguro(
    ws: WebSocket,
    token: str = Query(...),
) -> None:
    usuario = verificar_token(token)
    if usuario is None:
        raise WebSocketException(code=status.WS_1008_POLICY_VIOLATION)
    await ws.accept()  # ← solo acepta conexiones autenticadas
```

La semana 07 cubre autenticación JWT en WebSockets en profundidad.

## 📚 Recursos Adicionales

- [RFC 6455 — The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455): el estándar completo, legible y bien explicado
- [MDN — WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket): referencia del objeto WebSocket en el navegador
- [FastAPI — WebSockets](https://fastapi.tiangolo.com/advanced/websockets/): guía oficial de FastAPI para endpoints WebSocket

## ✅ Checklist de Verificación

- [ ] Puedo explicar qué ocurre durante el _handshake_ WebSocket en términos generales
- [ ] Entiendo la diferencia entre half-duplex y full-duplex con un ejemplo concreto
- [ ] Tengo un servidor WebSocket corriendo localmente que responde a mensajes del cliente
- [ ] Sé cuándo elegir SSE en lugar de WebSocket y puedo justificarlo
- [ ] Identifico el error de seguridad de aceptar conexiones sin validar el token primero
