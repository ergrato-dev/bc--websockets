# Rúbrica de Evaluación — Semana 01: El Problema del Tiempo Real

## Distribución de Evidencias

| Tipo | Porcentaje | Mínimo para aprobar |
|------|-----------|---------------------|
| Conocimiento 🧠 | 30% | 70% |
| Desempeño 💪 | 40% | 70% |
| Producto 📦 | 30% | 70% |

---

## Conocimiento 🧠 (30%)

### Cuestionario conceptual

| Criterio | Insuficiente (0–59%) | Suficiente (60–79%) | Bueno (80–89%) | Excelente (90–100%) |
|----------|---------------------|---------------------|----------------|---------------------|
| **Limitaciones de HTTP** | No identifica por qué HTTP no sirve para tiempo real | Menciona la limitación sin explicar el porqué | Explica el modelo request-response y su impacto | Articula el problema con ejemplos concretos y métricas |
| **Diferencias polling / SSE / WS** | Confunde las tres técnicas | Distingue al menos dos técnicas con errores menores | Compara las tres correctamente en latencia y overhead | Justifica con datos cuándo usar cada una |
| **Casos de uso** | No relaciona la técnica con el caso de uso | Asocia algún caso de uso a la técnica correcta | Identifica los casos de uso de cada técnica | Propone casos de uso no mencionados en clase con justificación |

---

## Desempeño 💪 (40%)

### Práctica 01 — Comparando técnicas

| Criterio | Insuficiente | Suficiente | Bueno | Excelente |
|----------|-------------|-----------|-------|-----------|
| **Progresión de pasos** | Completa menos del 50% de los pasos | Completa el 50–74% | Completa el 75–89% | Completa el 100% sin errores |
| **Código descomentado** | El código no ejecuta | Ejecuta con errores de runtime | Ejecuta con advertencias menores | Ejecuta sin errores ni advertencias |
| **Observación en DevTools** | No abre las DevTools | Abre el Network tab pero no identifica la diferencia | Identifica la diferencia de requests | Explica qué columnas del Network tab evidencian el overhead |
| **Comprensión activa** | Descomenta sin leer | Lee el código pero no explica qué hace | Explica el flujo general | Identifica el porqué de cada línea clave |

---

## Producto 📦 (30%)

### Proyecto — Monitor de métricas en vivo

| Criterio | Insuficiente | Suficiente | Bueno | Excelente |
|----------|-------------|-----------|-------|-----------|
| **Transporte polling** | El endpoint de polling no responde | Responde pero con errores de CORS o formato | Funciona correctamente y actualiza la UI | Funciona e incluye manejo de errores de red |
| **Transporte WebSocket** | No establece conexión WebSocket | La conexión se establece pero cae | Conexión estable durante toda la demo | Conexión estable con reconexión automática básica |
| **Comparación medible** | No presenta evidencia de comparación | Captura de pantalla sin análisis | Captura con descripción de la diferencia | Captura + análisis cuantitativo (nº requests, tamaño, latencia) |
| **Código limpio** | Sin estructura, sin tipos | Estructura básica, tipos parciales | Bien organizado, tipos en todos los parámetros | Sigue todas las convenciones del bootcamp |
| **TODOs completados** | Menos del 50% completados | 50–74% completados | 75–89% completados | 100% completados con código funcional |

---

## Cálculo de la Nota Final

```
Nota final = (Conocimiento × 0.30) + (Desempeño × 0.40) + (Producto × 0.30)
```

> ⚠️ Si cualquiera de los tres tipos de evidencia queda por debajo del **70%**,
> la semana se considera **no aprobada** independientemente de la nota final calculada.

---

## Checklist del Evaluador

- [ ] El estudiante puede explicar oralmente por qué HTTP no es suficiente para tiempo real
- [ ] La práctica 01 ejecuta sin errores en `docker compose up`
- [ ] El monitor muestra datos en vivo con ambos transportes simultáneamente
- [ ] El Network tab muestra claramente la diferencia de requests entre polling y WebSocket
- [ ] El glosario contiene mínimo 8 términos correctamente definidos

## Calificación Final

```
Nota = (Conocimiento × 0.30) + (Desempeño × 0.40) + (Producto × 0.30)
Mínimo aprobatorio: 70 en cada tipo de evidencia
```
