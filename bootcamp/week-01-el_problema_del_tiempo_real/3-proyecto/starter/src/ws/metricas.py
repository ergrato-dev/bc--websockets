"""Módulo de lectura de métricas del sistema."""

import time

import psutil


def leer_metricas() -> dict[str, float]:
    """
    Lee métricas actuales del sistema operativo.

    Returns:
        Diccionario con cpu (%), memoria (%) y timestamp Unix.
    """
    # TODO: Usar psutil.cpu_percent() para obtener el porcentaje de CPU
    # TODO: Usar psutil.virtual_memory().percent para el porcentaje de RAM
    # TODO: Usar time.time() para el timestamp
    # TODO: Devolver un dict con las claves: "cpu", "memoria", "timestamp"
    pass
