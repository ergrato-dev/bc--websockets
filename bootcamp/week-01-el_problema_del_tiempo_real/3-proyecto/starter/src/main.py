"""
Punto de entrada del monitor de métricas.

Configura FastAPI, el lifespan y monta el router WebSocket.
"""

from contextlib import asynccontextmanager
from collections.abc import AsyncGenerator

from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from src.ws.router import router as ws_router


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    # TODO: Imprimir un mensaje de inicio indicando que el servidor está listo
    yield
    # TODO: Imprimir un mensaje de cierre cuando el servidor se apague


app = FastAPI(
    title="Monitor de Métricas — Semana 01",
    lifespan=lifespan,
)

# TODO: Incluir ws_router en la aplicación con el prefijo "/ws"

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def index() -> HTMLResponse:
    # TODO: Leer y devolver el contenido de "static/index.html"
    pass
