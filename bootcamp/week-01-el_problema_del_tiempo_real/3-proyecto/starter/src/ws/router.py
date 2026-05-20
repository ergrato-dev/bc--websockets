"""Endpoint WebSocket para el monitor de métricas."""

import asyncio
import json

from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from pydantic import BaseModel

from src.ws.metricas import leer_metricas

router = APIRouter()


class MetricasMessage(BaseModel):
    """Esquema de validación para el mensaje de métricas."""

    cpu: float
    memoria: float
    timestamp: float


@router.websocket("/monitor")
async def ws_monitor(ws: WebSocket) -> None:
    """
    Endpoint WebSocket que envía métricas del servidor cada segundo.

    El cliente se conecta una vez y recibe datos de forma continua
    sin necesidad de hacer requests adicionales.
    """
    # TODO: Aceptar la conexión WebSocket con ws.accept()

    try:
        while True:
            # TODO: Llamar a leer_metricas() para obtener los datos actuales

            # TODO: Validar los datos con MetricasMessage (model_validate)
            # Tip: MetricasMessage.model_validate(datos_crudos)

            # TODO: Serializar el mensaje validado a JSON con model_dump_json()
            # y enviarlo al cliente con ws.send_text()

            # TODO: Esperar 1 segundo antes de la siguiente lectura (asyncio.sleep)
            pass

    except WebSocketDisconnect:
        # TODO: Registrar (print) que el cliente se desconectó limpiamente
        pass
