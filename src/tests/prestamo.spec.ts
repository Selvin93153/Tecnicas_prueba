import { puedeAprobarPrestamo } from "../domain/prestamo";
import { Persona } from "../domain/types";

describe("puedeAprobarPrestamo", () => {
  it("estudiante sin deudas → no aprueba", () => {
    const persona: Persona = { edad: 20, ocupacion: "estudiante", tieneDeudas: false };
    expect(puedeAprobarPrestamo(persona)).toBe(false);
  });

  it("estudiante con deudas → no aprueba", () => {
    const persona: Persona = { edad: 22, ocupacion: "estudiante", tieneDeudas: true };
    expect(puedeAprobarPrestamo(persona)).toBe(false);
  });

  it("empleado con deudas → aprueba", () => {
    const persona: Persona = { edad: 30, ocupacion: "empleado", tieneDeudas: true };
    expect(puedeAprobarPrestamo(persona)).toBe(true);
  });

  it("empleado sin deudas → aprueba", () => {
    const persona: Persona = { edad: 25, ocupacion: "empleado", tieneDeudas: false };
    expect(puedeAprobarPrestamo(persona)).toBe(true);
  });

  it("retirado sin deudas → aprueba", () => {
    const persona: Persona = { edad: 65, ocupacion: "retirado", tieneDeudas: false };
    expect(puedeAprobarPrestamo(persona)).toBe(true);
  });

  it("retirado con deudas → no aprueba", () => {
    const persona: Persona = { edad: 70, ocupacion: "retirado", tieneDeudas: true };
    expect(puedeAprobarPrestamo(persona)).toBe(false);
  });

  it("persona muy joven (menor de 18) → no aprueba", () => {
    const persona: Persona = { edad: 16, ocupacion: "empleado", tieneDeudas: false };
    expect(puedeAprobarPrestamo(persona)).toBe(false);
  });

  // 🚀 Test extra para cubrir el default (ocupación inválida)
  it("ocupación inválida → lanza error", () => {
    const persona: Persona = { edad: 40, ocupacion: "desconocido" as any, tieneDeudas: false };
    expect(() => puedeAprobarPrestamo(persona)).toThrow("Ocupación inválida");
  });
});
