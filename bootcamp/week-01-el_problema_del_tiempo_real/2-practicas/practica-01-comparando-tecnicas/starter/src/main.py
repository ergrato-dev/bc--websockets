"""
Servidor FastAPI — Práctica 01: Comparando Técnicas de Tiempo Real

Este archivo tiene el código comentado. Descoméntalo paso a paso siguiendo
el README.md de la práctica. No modifiques nada que no esté indicado.
"""

import asyncio
import json
import time

import psutil
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="Comparando Técnicas — Semana 01")

# Servir el cliente HTML
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def index() -> HTMLResponse:
    with open("static/index.html") as f:
        return HTMLResponse(content=f.read())


# ============================================
# PASO 2: Endpoint de polling
# El cliente va a pedir estas métricas cada segundo
# Descomenta las siguientes líneas:
# ============================================
# @app.get("/api/metricas")
# async def obtener_metricas() -> dict:
#     # psutil lee métricas reales del sistema operativo
#     return {
#         "cpu": psutil.cpu_percent(),
#         "memoria": psutil.virtual_memory().percent,
#         "timestamp": time.time(),
#     }


# ============================================
# PASO 4: Endpoint WebSocket
# El servidor envía métricas cada segundo SIN que el cliente pida
# Descomenta las siguientes líneas:
# ============================================
# @app.websocket("/ws/metricas")
# async def ws_metricas(ws: WebSocket) -> None:
#     await ws.accept()  # completa el HTTP Upgrade — conexión WebSocket abierta
#     try:
#         while True:
#             metricas = {
#                 "cpu": psutil.cpu_percent(),
#                 "memoria": psutil.virtual_memory().percent,
#                 "timestamp": time.time(),
#             }
#             # send_text envía al cliente SIN que el cliente haya pedido nada
#             await ws.send_text(json.dumps(metricas))
#             await asyncio.sleep(1)
#     except WebSocketDisconnect:
#         # El cliente cerró la conexión — terminamos el bucle limpiamente
#         pass
