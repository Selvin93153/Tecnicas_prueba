import { esMayorDeEdad } from "../domain/mayor-edad";

describe("esMayorDeEdad", () => {
  it("retorna false si la edad es menor a 18", () => {
    expect(esMayorDeEdad(17)).toBe(false);
  });

  it("retorna true si la edad es 18", () => {
    expect(esMayorDeEdad(18)).toBe(true);
  });

  it("retorna true si la edad es mayor a 18", () => {
    expect(esMayorDeEdad(25)).toBe(true);
  });

  it("lanza error si la edad es negativa", () => {
    expect(() => esMayorDeEdad(-5)).toThrow("Edad inválida");
  });

  it("lanza error si la edad no es número", () => {
    // @ts-expect-error
    expect(() => esMayorDeEdad("abc")).toThrow("Edad inválida");
  });

  it("lanza error si la edad es NaN", () => {
    expect(() => esMayorDeEdad(NaN)).toThrow("Edad inválida");
  });
});
