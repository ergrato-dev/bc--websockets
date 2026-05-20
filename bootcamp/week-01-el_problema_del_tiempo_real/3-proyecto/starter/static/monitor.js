/*
  Monitor de Métricas — Cliente WebSocket
  Proyecto Semana 01

  Implementa los TODOs en orden. Cada bloque TODO describe exactamente
  qué debe hacer ese fragmento de código.
*/

// ─── Estado de la conexión ────────────────────────────────────────────────────

/** @type {WebSocket | null} */
let ws = null;

let intentosReconexion = 0;
const MAX_INTENTOS = 5;
const DELAY_BASE_MS = 1000;

// ─── Referencias a elementos del DOM ─────────────────────────────────────────

const elCpu       = document.getElementById("cpu");
const elMem       = document.getElementById("memoria");
const elTs        = document.getElementById("timestamp");
const elEstado    = document.getElementById("estado");
const elIntentos  = document.getElementById("intentos");

// ─── Funciones de UI ─────────────────────────────────────────────────────────

/**
 * Actualiza los valores mostrados en el monitor.
 * @param {{ cpu: number, memoria: number, timestamp: number }} datos
 */
function actualizarUI(datos) {
  // TODO: Actualizar el contenido de elCpu con el porcentaje de CPU (1 decimal)
  // TODO: Actualizar el contenido de elMem con el porcentaje de RAM (1 decimal)
  // TODO: Actualizar elTs con la hora local (new Date(datos.timestamp * 1000).toLocaleTimeString())
}

/**
 * Actualiza el indicador de estado de conexión.
 * @param {"conectado" | "desconectado" | "reconectando"} estado
 */
function actualizarEstado(estado) {
  // TODO: Actualizar el texto de elEstado según el valor recibido:
  //   "conectado"    → "● Conectado"  (color verde #2EA043)
  //   "desconectado" → "○ Desconectado" (color rojo #DA3633)
  //   "reconectando" → "◌ Reconectando..." (color amarillo #E3B341)
}

// ─── Lógica WebSocket ─────────────────────────────────────────────────────────

/**
 * Conecta al endpoint WebSocket del monitor.
 * Implementa reconexión automática con backoff exponencial.
 */
function conectar() {
  // TODO: Crear una nueva instancia de WebSocket apuntando a:
  //   ws://localhost:8000/ws/monitor
  // y asignarla a la variable ws

  // TODO: Manejar ws.onopen:
  //   - Actualizar el estado a "conectado"
  //   - Reiniciar intentosReconexion a 0
  //   - Actualizar elIntentos con el valor 0

  // TODO: Manejar ws.onmessage:
  //   - Parsear event.data como JSON
  //   - Llamar a actualizarUI() con los datos parseados

  // TODO: Manejar ws.onclose:
  //   - Actualizar el estado a "desconectado"
  //   - Si intentosReconexion < MAX_INTENTOS, programar reconexión:
  //     · incrementar intentosReconexion
  //     · actualizar elIntentos con el nuevo valor
  //     · calcular el delay: DELAY_BASE_MS * 2^(intentosReconexion - 1)
  //     · actualizar el estado a "reconectando"
  //     · llamar a conectar() después del delay con setTimeout

  // TODO: Manejar ws.onerror:
  //   - Imprimir el error en consola con console.error
}

// ─── Inicio ───────────────────────────────────────────────────────────────────

// TODO: Llamar a conectar() para iniciar la conexión al cargar la página
