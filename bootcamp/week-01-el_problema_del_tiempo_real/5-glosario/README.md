# Glosario — Semana 01: El Problema del Tiempo Real

Términos clave ordenados alfabéticamente.

---

## A

**Asimetría HTTP**
Propiedad del protocolo HTTP en la que solo el cliente puede iniciar una comunicación.
El servidor no puede enviar datos espontáneamente; siempre responde a una solicitud previa.

---

## C

**Conexión persistente**
Conexión de red que se mantiene abierta entre dos partes durante toda la sesión,
en lugar de cerrarse después de cada intercambio de datos. WebSocket es el ejemplo
principal en aplicaciones web.

---

## F

**Frame WebSocket**
Unidad mínima de datos en el protocolo WebSocket (RFC 6455). Tiene una cabecera de
2 a 14 bytes (opcode, longitud, máscara) y un payload. Mucho más ligero que los
headers HTTP, que pueden superar 800 bytes.

**Full-duplex**
Modo de comunicación en el que ambos extremos pueden enviar y recibir datos
simultáneamente en el mismo canal. WebSocket es full-duplex. HTTP clásico es
half-duplex (un turno a la vez).

---

## H

**Handshake HTTP Upgrade**
Proceso de negociación inicial de WebSocket: el cliente envía un request HTTP con el
header `Upgrade: websocket` y el servidor responde con `101 Switching Protocols`.
A partir de ese momento, el canal es WebSocket, no HTTP.

**HTTP Overhead**
Coste en bytes de los headers HTTP enviados en cada request. En polling, cada request
incluye ~800–2000 bytes de headers aunque el payload útil sea de unos pocos bytes.

---

## L

**Long Polling**
Técnica de simulación de tiempo real en la que el cliente envía un request y el servidor
lo mantiene abierto hasta que tiene datos para devolver. Reduce requests, pero mantiene
el overhead de HTTP y complica la gestión del estado del servidor.

---

## P

**Polling** (también: *short polling*)
Técnica en la que el cliente interroga al servidor a intervalos regulares para comprobar
si hay datos nuevos. Simple de implementar pero ineficiente: genera muchos requests
aunque no haya novedades.

---

## R

**Request-Response**
Modelo de comunicación de HTTP: el cliente envía un request y el servidor devuelve
una respuesta. La comunicación termina ahí; el servidor no puede retomar el contacto
por iniciativa propia.

---

## S

**Server-Sent Events (SSE)**
Tecnología web que permite al servidor enviar datos al cliente de forma unidireccional
a través de una conexión HTTP persistente. Más simple que WebSocket pero solo
funciona de servidor a cliente; el cliente no puede enviar mensajes por el mismo canal.

---

## T

**Tiempo real** (en aplicaciones web)
Capacidad de un sistema para procesar y mostrar información con una latencia lo
suficientemente baja como para que el usuario la perciba como inmediata (generalmente
< 100 ms). No implica tiempo de respuesta cero, sino que el retraso es imperceptible.

---

## W

**WebSocket**
Protocolo de comunicación bidireccional y persistente definido en el RFC 6455.
Se inicia con un HTTP Upgrade y luego opera sobre TCP con frames propios.
Permite full-duplex: servidor y cliente pueden enviarse datos en cualquier momento.


---

## Referencias

<!-- Links a documentación oficial para cada término -->
