# Proyecto — Semana 01: Monitor de Métricas en Vivo

## 🎯 Descripción

Construye un **monitor de métricas del servidor** que actualice la información en
tiempo real usando WebSocket. El cliente muestra CPU, RAM y carga del sistema
actualizándose cada segundo, con un indicador visual del estado de la conexión.

El proyecto integra lo aprendido en la semana: entiende el problema del polling,
elige WebSocket como transporte, y construye una solución funcional completa.

## 📋 Requisitos Funcionales

- [ ] El servidor expone un endpoint WebSocket en `/ws/monitor`
- [ ] El servidor envía métricas cada segundo: CPU (%), RAM (%), timestamp
- [ ] El cliente muestra las métricas en tiempo real con actualización visual
- [ ] El cliente muestra el estado de la conexión: `Conectado` / `Desconectado`
- [ ] El cliente intenta reconectarse automáticamente si se pierde la conexión
- [ ] Al cerrar el navegador, el servidor maneja `WebSocketDisconnect` limpiamente

## 📦 Requisitos No Funcionales

- [ ] El servidor usa FastAPI con tipo de retorno explícito en todas las funciones
- [ ] Los mensajes se validan con un modelo Pydantic antes de enviar
- [ ] Toda la lógica de la conexión WebSocket está en un módulo separado (`ws/`)
- [ ] El proyecto corre con `docker compose up --build`

## 🗂️ Estructura del starter

```
starter/
├── src/
│   ├── main.py          ← punto de entrada FastAPI
│   └── ws/
│       ├── __init__.py
│       ├── router.py    ← endpoint /ws/monitor
│       └── metricas.py  ← lógica de lectura de métricas
├── static/
│   ├── index.html       ← UI del monitor
│   └── monitor.js       ← cliente WebSocket
├── pyproject.toml
├── Dockerfile
└── docker-compose.yml
```

## ⏱️ Distribución sugerida (3 horas)

| Tiempo | Actividad |
|--------|-----------|
| 30 min | Leer el starter, entender los TODOs, planear la implementación |
| 60 min | Implementar el servidor (router + metricas) |
| 60 min | Implementar el cliente (monitor.js + UI) |
| 30 min | Pruebas, depuración, verificación de criterios |

## ✅ Entregables

1. **Captura del Network tab** mostrando la conexión WebSocket activa
2. **Captura de pantalla** del monitor funcionando en el navegador
3. **Respuesta escrita** (máx. 3 oraciones): ¿por qué elegiste WebSocket sobre polling
   para este proyecto?
4. **Código funcional** con `docker compose up --build` ejecutándose sin errores

## 🔗 Referencia

- [FastAPI WebSockets](https://fastapi.tiangolo.com/advanced/websockets/)
- [MDN WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [psutil docs](https://psutil.readthedocs.io/)

## 🚀 Cómo Empezar

```bash
cd starter/
docker compose up
```

## 📌 TODOs

<!-- Los TODOs están marcados en el código de starter/ — implementa cada uno -->

## ✅ Criterios de Aceptación

<!-- El proyecto se considera completado cuando... -->

## 📤 Entrega

<!-- Instrucciones de entrega -->
