# Clases de Equivalencia — Función `esMayorDeEdad`

La función `esMayorDeEdad(edad: number): boolean` determina si una persona es mayor de edad.

## Clases de equivalencia válidas e inválidas

| Clase                         | Entrada de ejemplo | Resultado esperado |
|-------------------------------|--------------------|--------------------|
| Edad negativa (inválida)      | -5                 | Error              |
| Edad = 0                      | 0                  | false              |
| 0 < Edad < 18                 | 10                 | false              |
| Edad = 17 (frontera)          | 17                 | false              |
| Edad = 18 (frontera)          | 18                 | true               |
| Edad > 18                     | 25                 | true               |
| Entrada no numérica (inválida)| `"abc"`            | Error              |
| Edad = NaN (inválida)         | NaN                | Error              |
| Edad = null/undefined         | null / undefined   | Error              |

## Observaciones
- Se consideran **clases válidas** aquellas en las que la entrada es un número entero mayor o igual a 0.  
- Se consideran **clases inválidas** aquellas donde la entrada no es un número válido (negativo, NaN, null, undefined, string, etc.).  
- Los valores de limites probados son: **17 y 18**.  
