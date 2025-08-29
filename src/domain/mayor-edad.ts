export function esMayorDeEdad(edad: number): boolean {
  if (typeof edad !== "number" || isNaN(edad)) {
    throw new Error("Edad inválida: no es un número");
  }
  if (edad < 0) {
    throw new Error("Edad inválida: no puede ser negativa");
  }
  return edad >= 18;
}
