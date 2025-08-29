# Tabla de Decisiones — Función `puedeAprobarPrestamo`

La función `puedeAprobarPrestamo(persona: Persona): boolean` determina si se aprueba un préstamo según las reglas:

1. Si la persona es **estudiante** → **NO aprueba**, aunque no tenga deudas.  
2. Si la persona es **empleado** → **SÍ aprueba**, aunque tenga deudas.  
3. Si la persona es **retirado sin deudas** → **SÍ aprueba**.  
4. Si la persona es **retirado con deudas** → **NO aprueba**.  
5. Persona menor de 18 años → **NO aprueba** (regla añadida como restricción lógica).

---

## Tabla de Decisión

| Edad         | Ocupación   | Tiene deudas | Resultado esperado |
|--------------|-------------|--------------|--------------------|
| 16 (<18)     | empleado    | No           | NO                 |
| 20           | estudiante  | No           | NO                 |
| 22           | estudiante  | Sí           | NO                 |
| 30           | empleado    | No           | SÍ                 |
| 40           | empleado    | Sí           | SÍ                 |
| 65           | retirado    | No           | SÍ                 |
| 70           | retirado    | Sí           | NO                 |

---

## Observaciones
- La edad mínima de 18 años se considera una condición obligatoria para poder aprobar.  
- Se incluyeron pruebas representativas de todas las combinaciones posibles.  
