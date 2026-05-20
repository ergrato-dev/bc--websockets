# El Problema de HTTP para Aplicaciones en Tiempo Real

## 🎯 Objetivos

- Describir el modelo request-response de HTTP y su limitación fundamental
- Cuantificar el overhead que genera cada petición HTTP
- Identificar los casos de uso que necesitan comunicación iniciada desde el servidor
- Entender por qué las soluciones basadas en HTTP son parches, no soluciones estructurales

## 📋 Contenido

### 1. ¿Qué significa "tiempo real"?

"Tiempo real" en aplicaciones web no significa velocidad de la luz. Significa que los
cambios llegan al usuario **en el momento en que ocurren**, sin que el usuario tenga que
pedir activamente la actualización.

Casos donde el tiempo real es crítico:

- **Chat**: el mensaje de un compañero aparece en menos de un segundo
- **Dashboards financieros**: el precio de una acción cambia antes de que termines de leer
- **Juegos multijugador**: la posición del otro jugador refleja su movimiento actual
- **Documentos colaborativos**: el cursor de tu compañero se mueve en pantalla
- **Alertas de sistema**: la notificación de CPU alta llega antes de que el servidor caiga

Todos comparten la misma necesidad: **el servidor necesita hablar con el cliente sin
esperar a que el cliente pregunte primero**.

### 2. La asimetría fundamental de HTTP

HTTP fue diseñado en 1991 para transferir documentos entre máquinas. Su modelo es
sencillo y eficiente para ese caso — y problemático para el tiempo real:

```
Cliente  →  "GET /mensajes"          [request]
Servidor →  "200 OK { mensajes: [] }" [response]
             [conexión cerrada o en espera]
```

![Modelo request-response: el cliente siempre inicia la conversación](../../0-assets/01-http-request-response.svg)

La regla es simple pero tiene consecuencias enormes: **el servidor no puede hablar
primero**. Si llega un nuevo mensaje, una alerta o un cambio de estado, el servidor
no tiene forma nativa de avisarle al cliente — solo puede responder cuando el cliente
pregunta.

Esta asimetría existe en HTTP/1.1 y se mantiene en HTTP/2. Aunque HTTP/2 permite
multiplexar múltiples streams sobre una sola conexión TCP, el servidor sigue sin poder
enviar datos que el cliente no solicitó (salvo con _server push_, que fue deprecado en
Chrome en 2022 por su complejidad y bajo uso real).

### 3. El overhead invisible de cada petición

Cada request HTTP no es solo el payload útil. Lleva consigo headers que el desarrollador
raramente ve pero el servidor siempre procesa:

```http
GET /api/mensajes HTTP/1.1
Host: api.ejemplo.com
User-Agent: Mozilla/5.0 (Linux; x86_64) AppleWebKit/537.36
Accept: application/json
Accept-Encoding: gzip, deflate, br
Accept-Language: es-ES,es;q=0.9
Cookie: session_id=a1b2c3d4; preferencias=dark
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Esos headers suman entre **400 y 1200 bytes** por petición, antes de enviar un solo
byte de datos útiles. Para una app que necesita actualizarse cada segundo con un
payload de 40 bytes, el overhead puede ser **15–30× más grande que los datos reales**.

### 4. El costo real a escala

Considera una aplicación de chat con 5.000 usuarios activos haciendo polling cada segundo:

```
5.000 usuarios × 1 request/seg × 600 bytes de headers = 3 MB/seg de overhead puro
```

Solo para preguntar "¿hay mensajes nuevos?". La mayoría de esas respuestas serán
`{ "mensajes": [] }` — trabajo real del servidor para responder "no hay nada".

Del lado del navegador el costo también es visible:

- Cada request ocupa un slot en el pool de conexiones HTTP del navegador
- El parser de HTTP procesa headers completos aunque la respuesta esté vacía
- El _garbage collector_ del motor JavaScript limpia los objetos de response vacíos

Abre el Network tab del navegador en cualquier app con polling activo. Verás una
cascada de requests idénticos con latencias variables, tiempos de espera y respuestas
mayoritariamente vacías.

### 5. Código que parece razonable pero no escala

```python
# ❌ Polling ingenuo — funciona para un prototipo, falla en producción
import time
import httpx

def escuchar_mensajes(user_id: str) -> None:
    ultimo_id = 0
    while True:
        response = httpx.get(
            f"https://api.ejemplo.com/mensajes",
            params={"desde": ultimo_id}
        )
        datos = response.json()
        if datos["mensajes"]:
            for msg in datos["mensajes"]:
                print(f"[{msg['autor']}]: {msg['texto']}")
                ultimo_id = msg["id"]
        time.sleep(1)  # ← 1 request/seg por usuario
                       # Con 10.000 usuarios: 10.000 requests/seg al servidor
```

```typescript
// ❌ Lo mismo desde el navegador — el Network tab lo delata
function iniciarPolling(userId: string): void {
  let ultimoId = 0;
  setInterval(async () => {
    const res = await fetch(`/api/mensajes?desde=${ultimoId}`);
    const datos = await res.json();
    if (datos.mensajes.length > 0) {
      renderizarMensajes(datos.mensajes);
      ultimoId = datos.mensajes.at(-1).id;
    }
    // Si no hay mensajes: request + response + parseo + GC = desperdicio completo
  }, 1000);
}
```

### 6. Lo que realmente necesitamos

La solución ideal invierte la asimetría: en lugar de que el cliente pregunte
continuamente, el servidor **avisa cuando tiene algo**. Eso requiere una conexión
que permanezca abierta y donde cualquiera de los dos extremos pueda enviar datos.

En el siguiente archivo (`02-soluciones-previas.md`) veremos tres técnicas que
intentan resolver esto dentro del modelo HTTP — con distintos grados de éxito y
distintos costos.

## 📚 Recursos Adicionales

- [HTTP/1.1 — RFC 7230](https://datatracker.ietf.org/doc/html/rfc7230): la especificación que define el modelo request-response
- [MDN — HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview): introducción visual al protocolo con ejemplos

## ✅ Checklist de Verificación

- [ ] Puedo explicar la asimetría HTTP con una analogía propia (no de este documento)
- [ ] Sé estimar el overhead en bytes de un request HTTP típico de mi aplicación
- [ ] Identifico al menos 3 casos de uso en mi entorno que necesitan comunicación server-initiated
- [ ] Entiendo por qué polling a 10.000 usuarios simultáneos es un problema estructural,
      no un problema de optimización de código
