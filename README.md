<p align="center">
  <img src="assets/bootcamp-header.svg" alt="Bootcamp WebSockets Zero to Hero" width="800">
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey.svg" alt="License CC BY-NC-SA 4.0"></a>
  <img src="https://img.shields.io/badge/semanas-12-0066CC.svg" alt="12 Semanas">
  <img src="https://img.shields.io/badge/horas-96-orange.svg" alt="96 Horas">
  <img src="https://img.shields.io/badge/WebSockets-RFC%206455-0066CC?logo=websocket&logoColor=white" alt="WebSockets">
  <img src="https://img.shields.io/badge/Python-3.12+-3776AB?logo=python&logoColor=white" alt="Python 3.12+">
  <img src="https://img.shields.io/badge/TypeScript-5.4+-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.4+">
  <img src="https://img.shields.io/badge/Redis-7.4-DC382D?logo=redis&logoColor=white" alt="Redis 7.4">
</p>

<p align="center">
  <a href="README_EN.md"><img src="https://img.shields.io/badge/🇺🇸_English-0969DA?style=for-the-badge&logoColor=white" alt="English Version"></a>
</p>

---

## 📋 Descripción

Bootcamp intensivo de **12 semanas (~3 meses)** enfocado en el dominio del **protocolo WebSocket** y el desarrollo de aplicaciones en tiempo real. Diseñado para llevar a estudiantes de cero a **desarrollador de aplicaciones en tiempo real (Junior-Mid)**, con énfasis en el protocolo RFC 6455, buenas prácticas de seguridad y proyectos del mundo real.

### 🎯 Objetivos

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Comprender el protocolo WebSocket a nivel de wire (RFC 6455): handshake, frames, opcodes
- ✅ Usar la Browser WebSocket API nativa con TypeScript
- ✅ Construir servidores WebSocket con Python puro (asyncio + websockets)
- ✅ Construir endpoints WebSocket con FastAPI y gestionar conexiones
- ✅ Implementar patrones de mensajería: broadcast, unicast, rooms/canales, pub/sub
- ✅ Autenticar y autorizar conexiones WebSocket con JWT
- ✅ Manejar estado, presencia y sincronización en tiempo real
- ✅ Implementar resiliencia: reconexión, heartbeats, backoff exponencial
- ✅ Escribir tests automatizados para endpoints WebSocket
- ✅ Aplicar buenas prácticas de seguridad (DoS, rate limiting, validación)
- ✅ Escalar horizontalmente con Redis como message broker
- ✅ Desplegar en producción con Docker, nginx y WSS (TLS)

### 🚀 ¿Por qué WebSockets?

> **WebSockets desde el protocolo hasta producción** — Sin abstracciones innecesarias, solo la tecnología real.

El tiempo real ya no es un lujo: chats, dashboards en vivo, notificaciones instantáneas, juegos multijugador y herramientas colaborativas dependen de WebSockets. Este bootcamp va desde los fundamentos del protocolo RFC 6455 hasta una aplicación completa en producción con escalado horizontal. Los estudiantes aprenden exactamente lo que usarán en el mundo profesional.

---

## 🗓️ Estructura del Bootcamp

| Fase | Semanas | Horas | Temas Principales |
| :--------------------: | :-----: | :---: | ------------------------------------------------------ |
| **Fundamentos del Tiempo Real** | 1–3 | 24h | Protocolos, RFC 6455, Browser WebSocket API |
| **Servidor y Patrones** | 4–6 | 24h | Python / FastAPI, gestión de conexiones, mensajería |
| **Aplicaciones Reales** | 7–9 | 24h | Auth JWT, estado/presencia, resiliencia |
| **Calidad y Producción** | 10–12 | 24h | Testing, seguridad, escalabilidad, proyecto final |

**Total: 12 semanas** | **96 horas** de formación intensiva

---

## 📚 Contenido por Semana

Cada semana incluye:

```
bootcamp/week-XX-tema_principal/
├── README.md                 # Descripción y objetivos
├── rubrica-evaluacion.md     # Criterios de evaluación
├── 0-assets/                 # Imágenes y diagramas SVG
├── 1-teoria/                 # Material teórico
├── 2-practicas/              # Ejercicios guiados (código comentado)
├── 3-proyecto/               # Proyecto semanal integrador
├── 4-recursos/               # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/               # Términos clave
```

### 📅 Plan Semana a Semana

| # | Tema | Conceptos Clave | Fase |
|:---:|------|----------------|:----:|
| [01](bootcamp/week-01-el_problema_del_tiempo_real) | El Problema del Tiempo Real | Polling, long-polling, SSE vs WebSockets, latencia, overhead HTTP | Fundamentos |
| [02](bootcamp/week-02-websocket_protocol_rfc6455) | WebSocket Protocol (RFC 6455) | Handshake HTTP Upgrade, frames, opcodes, masking, control frames | Fundamentos |
| [03](bootcamp/week-03-browser_websocket_api) | Browser WebSocket API | `WebSocket` nativo, `readyState`, eventos, envío binario/texto, TypeScript | Fundamentos |
| [04](bootcamp/week-04-servidor_python_puro) | Servidor Python Puro | `websockets` + `asyncio`, handlers, concurrencia, ciclo de vida | Servidor |
| [05](bootcamp/week-05-fastapi_websockets) | WebSockets con FastAPI | Endpoints WS, `ConnectionManager`, `WebSocketDisconnect`, Pydantic | Servidor |
| [06](bootcamp/week-06-patrones_mensajeria) | Patrones de Mensajería | Broadcast, unicast, rooms/canales, pub/sub in-memory, serialización | Servidor |
| [07](bootcamp/week-07-autenticacion_jwt) | Autenticación y Autorización | JWT en handshake, verificar antes de `accept()`, scopes por canal | Aplicaciones |
| [08](bootcamp/week-08-estado_y_presencia) | Estado y Presencia | Typing indicators, usuarios online, sincronización, diff de estado | Aplicaciones |
| [09](bootcamp/week-09-resiliencia_reconexion) | Resiliencia y Reconexión | Backoff exponencial, heartbeat/ping-pong, offline queue, timeouts | Aplicaciones |
| [10](bootcamp/week-10-testing_y_seguridad) | Testing y Seguridad | pytest-asyncio, httpx_ws, mocks, DoS, rate limiting, Origin validation | Calidad |
| [11](bootcamp/week-11-escalabilidad_redis) | Escalabilidad con Redis | Redis pub/sub, múltiples instancias, sticky sessions, load balancing | Calidad |
| [12](bootcamp/week-12-proyecto_final_produccion) | Proyecto Final en Producción | Docker multi-stage, nginx WSS, TLS, monitoreo, app completa | Calidad |

### 🔑 Componentes Clave

- 📖 **Teoría**: Conceptos fundamentales con diagramas SVG y referencias al RFC 6455
- 💻 **Práctica**: Ejercicios guiados descomentando código paso a paso
- 🏗️ **Proyecto**: Implementación propia con TODOs guiados
- 🎓 **Recursos**: Glosarios, webgrafía, videografía y ebooks gratuitos

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Python | **3.12+** | Lenguaje del servidor |
| FastAPI | **0.115+** | Framework WebSocket server |
| websockets | **14+** | Librería WebSocket Python pura |
| Pydantic | **2.11+** | Validación de mensajes |
| redis-py | **5.2+** | Cliente Redis async (pub/sub) |
| pytest + pytest-asyncio | **8+ / 0.24+** | Testing de endpoints WS |
| httpx-ws | **0.6+** | Cliente WS para tests |
| TypeScript | **5.4+** | Lenguaje del cliente |
| Vite | **5.4+** | Bundler del cliente |
| Redis | **7.4+** | Message broker (escalabilidad) |
| Docker | **27+** | Containerización |
| Docker Compose | **2.32+** | Orquestación local |
| nginx | **1.26+** | Proxy inverso + TLS (WSS) |
| uv | **0.11+** | Gestión de paquetes Python |
| pnpm | **9.12+** | Gestión de paquetes Node.js |

**Entorno de desarrollo**: Docker + Docker Compose (❌ NO instalar Python ni Node localmente)

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Docker** y **Docker Compose** instalados ([Bootcamp Docker](https://github.com/ergrato-dev/bc-docker))
- **Git** para control de versiones
- **VS Code** (recomendado) con extensiones incluidas
- Navegador moderno con soporte WebSocket (Chrome, Firefox, Edge)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/ergrato-dev/bc-websockets.git
cd bc-websockets
```

### 2. Instalar Extensiones de VS Code

```bash
# Abrir en VS Code
code .

# Las extensiones recomendadas aparecerán automáticamente
# O ejecutar: Ctrl+Shift+P → "Extensions: Show Recommended Extensions"
```

### 3. Navegar a la Semana Actual

```bash
cd bootcamp/week-01-el_problema_del_tiempo_real
```

### 4. Seguir las Instrucciones

Cada semana contiene un `README.md` con instrucciones detalladas, incluyendo cómo levantar el entorno Docker y qué ejercicios completar.

---

## 📊 Metodología de Aprendizaje

### Estrategias Didácticas

- 🎯 **Aprendizaje Basado en Proyectos (ABP)**: Proyectos semanales integradores
- 🧩 **Práctica Deliberada**: Ejercicios incrementales con código comentado
- 🔌 **Live Coding**: Sesiones en vivo con WebSockets en acción
- 👥 **Code Review**: Revisión de código entre pares
- 🐛 **Debug Real**: Análisis de frames y tráfico WebSocket con DevTools

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2 horas
- **Prácticas**: 3 horas
- **Proyecto**: 3 horas

### Evaluación

Cada semana incluye tres tipos de evidencias:

1. **Conocimiento 🧠** (30%): Cuestionarios y evaluaciones teóricas
2. **Desempeño 💪** (40%): Ejercicios prácticos guiados
3. **Producto 📦** (30%): Proyecto entregable funcional con conexión WebSocket demostrable

**Criterio de aprobación**: Mínimo **70%** en cada tipo de evidencia

---

## 📞 Soporte

- 💬 **Discussions**: [GitHub Discussions](https://github.com/ergrato-dev/bc-websockets/discussions)
- 🐛 **Issues**: [GitHub Issues](https://github.com/ergrato-dev/bc-websockets/issues)

---

## ⚠️ Exención de Responsabilidad

Este repositorio es un recurso **educativo** creado con fines de aprendizaje. Al utilizarlo, aceptas los siguientes términos:

- **Solo fines educativos**: El contenido, los ejemplos de código y los proyectos están diseñados exclusivamente para la enseñanza y el aprendizaje. No constituyen asesoramiento profesional, legal ni de seguridad.
- **Sin garantías**: El material se proporciona **"tal cual"**, sin garantías de ningún tipo, expresas o implícitas, incluyendo idoneidad para un propósito particular o ausencia de errores.
- **Código en producción**: Los ejemplos de código son ilustrativos. Antes de usarlos en entornos productivos, debes realizar revisiones de seguridad, rendimiento y adaptación a tu contexto específico.
- **Versiones de software**: Las versiones de librerías y herramientas mencionadas pueden quedar desactualizadas. Siempre consulta la documentación oficial más reciente.
- **Limitación de responsabilidad**: Los autores y contribuidores no se responsabilizan por pérdidas de datos, daños directos o indirectos, interrupciones de servicio ni cualquier otro perjuicio derivado del uso de este material.
- **Responsabilidad del estudiante**: Cada estudiante es responsable de sus propias implementaciones, entornos de desarrollo y decisiones técnicas.

---

## 📄 Licencia

Este proyecto está bajo la licencia **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)** (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International).

**Puedes:** compartir y adaptar el material, incluso crear forks educativos.<br>
**No puedes:** usar este material con fines comerciales.<br>
**Debes:** dar crédito apropiado y distribuir las adaptaciones bajo la misma licencia.

Ver el archivo [LICENSE](LICENSE) para el texto completo.

---

## 🏆 Agradecimientos

- [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455) — La especificación oficial del protocolo WebSocket
- [FastAPI](https://fastapi.tiangolo.com/) — Por el soporte WebSocket de primera clase
- [websockets](https://websockets.readthedocs.io/) — La librería Python WebSocket más completa
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) — Por la documentación de la Browser API
- [Redis](https://redis.io/) — Por el pub/sub que hace posible el escalado
- Comunidad Python y TypeScript — Por los recursos y ejemplos
- Todos los contribuidores

---

## 📚 Documentación Adicional

- [🤖 Instrucciones de Copilot](.github/copilot-instructions.md)
- [🤝 Guía de Contribución](CONTRIBUTING.md)
- [📜 Código de Conducta](CODE_OF_CONDUCT.md)
- [🔒 Política de Seguridad](SECURITY.md)
- [📖 Documentación general](docs/)

---

<p align="center">
  <strong>🎓 Bootcamp WebSockets — Zero to Hero</strong><br>
  <em>De cero a desarrollador de aplicaciones en tiempo real en 3 meses</em>
</p>

<p align="center">
  <a href="bootcamp/week-01-el_problema_del_tiempo_real">Comenzar Semana 1</a> •
  <a href="docs">Ver Documentación</a> •
  <a href="https://github.com/ergrato-dev/bc-websockets/issues">Reportar Issue</a>
</p>

<p align="center">
  Hecho con ❤️ para la comunidad de desarrolladores
</p>
