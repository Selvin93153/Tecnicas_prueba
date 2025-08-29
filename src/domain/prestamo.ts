import { Persona } from "./types";

export function puedeAprobarPrestamo(persona: Persona): boolean {
  // 🚫 Si es menor de 18 → no aprueba
  if (persona.edad < 18) {
    return false;
  }

  switch (persona.ocupacion) {
    case "estudiante":
      return false;
    case "empleado":
      return true;
    case "retirado":
      return !persona.tieneDeudas;
    default:
      throw new Error("Ocupación inválida");
  }
}
