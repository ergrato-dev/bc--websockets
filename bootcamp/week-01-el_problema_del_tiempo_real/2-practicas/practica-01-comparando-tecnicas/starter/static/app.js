/*
  Cliente — Práctica 01: Comparando Técnicas de Tiempo Real

  Descomenta los bloques indicados paso a paso siguiendo el README.md.
*/

// ─── Helpers de UI ────────────────────────────────────────────────────────────

function actualizarPanel(tipo, datos) {
  const panel = document.getElementById(`panel-${tipo}`);
  const timestamp = new Date(datos.timestamp * 1000).toLocaleTimeString();
  panel.innerHTML = `
    <div class="metrica">CPU: <strong>${datos.cpu.toFixed(1)}%</strong></div>
    <div class="metrica">RAM: <strong>${datos.memoria.toFixed(1)}%</strong></div>
    <div class="ts">Actualizado: ${timestamp}</div>
  `;
}

function marcarActivo(tipo) {
  document.getElementById(`badge-${tipo}`).classList.add("activo");
}

// ─── Contadores para mostrar diferencia de requests ──────────────────────────

let contadorPolling = 0;
let contadorWs = 0;

function incrementarContador(tipo) {
  if (tipo === "polling") {
    contadorPolling++;
    document.getElementById("contador-polling").textContent = contadorPolling;
  } else {
    contadorWs++;
    document.getElementById("contador-ws").textContent = contadorWs;
  }
}


// ============================================
// PASO 3: Cliente de polling
// Dispara un request al servidor cada segundo
// Descomenta las siguientes líneas:
// ============================================
// function iniciarPolling() {
//   marcarActivo("polling");
//   setInterval(async () => {
//     // Cada iteración = 1 request HTTP completo (con todos sus headers)
//     const res = await fetch("/api/metricas");
//     const datos = await res.json();
//     actualizarPanel("polling", datos);
//     incrementarContador("polling");
//     // Abre el Network tab → Fetch/XHR → cuenta cuántos requests se acumulan
//   }, 1000);
// }
// iniciarPolling();


// ============================================
// PASO 5: Cliente WebSocket
// Una sola conexión — el servidor envía cuando tiene datos
// Descomenta las siguientes líneas:
// ============================================
// function iniciarWebSocket() {
//   marcarActivo("websocket");
//   const ws = new WebSocket("ws://localhost:8000/ws/metricas");
//
//   ws.onopen = () => {
//     // La conexión está abierta — no necesitas hacer nada más
//     // Mira el Network tab → WS → hay UNA sola entrada, no cientos
//     console.log("WebSocket conectado");
//   };
//
//   ws.onmessage = (event) => {
//     // El servidor envió datos — los mostramos en el panel
//     // Haz clic en la entrada WS en DevTools → pestaña Messages
//     const datos = JSON.parse(event.data);
//     actualizarPanel("websocket", datos);
//     incrementarContador("ws");
//   };
//
//   ws.onerror = () => {
//     console.error("Error de WebSocket — ¿está el servidor corriendo?");
//   };
// }
// iniciarWebSocket();
