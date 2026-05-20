# Semana 01 — El Problema del Tiempo Real

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana serás capaz de:

- Identificar los límites del modelo HTTP request-response para aplicaciones en tiempo real
- Comparar short polling, long polling y SSE en términos de latencia, overhead y consumo de recursos
- Explicar por qué WebSockets resuelven la comunicación bidireccional persistente donde HTTP falla
- Demostrar con código la diferencia observable entre polling y WebSocket usando las DevTools del navegador
- Elegir la técnica adecuada (polling / SSE / WebSocket) según los requisitos de cada caso de uso

## 📚 Requisitos Previos

- HTTP básico: qué es una petición, una respuesta, métodos GET y POST, códigos de estado
- Python básico: funciones, bucles, manejo de excepciones, ejecución de scripts
- JavaScript/TypeScript básico: callbacks, promesas, `async/await`
- Terminal: navegación de directorios, ejecución de comandos, variables de entorno
- Docker instalado y funcionando (`docker --version`)

## 🗂️ Estructura de la Semana

```
week-01-el_problema_del_tiempo_real/
├── 0-assets/                          # Diagramas SVG
├── 1-teoria/
│   ├── 01-el-problema-http.md         # Por qué HTTP no es suficiente
│   ├── 02-soluciones-previas.md       # Polling, long-polling y SSE
│   └── 03-websockets-introduccion.md  # La solución: WebSockets
├── 2-practicas/
│   └── practica-01-comparando-tecnicas/
├── 3-proyecto/
│   └── proyecto-01-monitor-en-vivo/
├── 4-recursos/
├── 5-glosario/
├── README.md
└── rubrica-evaluacion.md
```

## 📝 Contenidos

### Teoría

1. **El problema de HTTP** — el modelo request-response impone una asimetría fundamental:
   solo el cliente puede iniciar la comunicación. Veremos por qué eso genera latencia,
   overhead y complejidad innecesaria al construir apps en tiempo real.

2. **Soluciones pre-WebSocket** — short polling, long polling y Server-Sent Events (SSE):
   cómo funciona cada uno, cuánto cuesta en recursos, cuándo todavía tiene sentido usarlos
   y dónde rompen bajo carga real.

3. **Introducción a WebSockets** — el protocolo que rompe la asimetría: una sola conexión TCP
   persistente, full-duplex, con overhead mínimo por mensaje. Primera vista al _handshake_
   y a los casos de uso donde WebSockets ganan sin discusión.

### Prácticas

- **Práctica 01 — Comparando técnicas**: observar en vivo en el Network tab del navegador
  el overhead de polling (cientos de requests) frente a WebSocket (una sola conexión).
  El código ya está escrito; el estudiante lo descomenta paso a paso.

### Proyecto

**Monitor de métricas en vivo** — la misma interfaz web, dos transportes distintos:
un endpoint que envía datos del servidor vía polling y otro vía WebSocket. El estudiante
mide, compara y saca conclusiones con datos reales.

## ⏱️ Distribución del Tiempo (8 horas)

- **Teoría**: 2 horas
- **Prácticas**: 3 horas
- **Proyecto**: 3 horas

## 📌 Entregables

- [ ] Práctica 01 completada: código descomentado ejecutándose sin errores
- [ ] Proyecto: monitor funcionando con ambos transportes (polling + WebSocket)
- [ ] Captura del Network tab mostrando la diferencia de requests entre técnicas
- [ ] Glosario de la semana completado (mínimo 8 términos)

## 🔗 Navegación

← Inicio del bootcamp &nbsp;&nbsp;&nbsp; [Semana 02: WebSocket Protocol (RFC 6455) →](../week-02-websocket_protocol_rfc6455/README.md)
