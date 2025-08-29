
# Proyecto QA con TypeScript y Jest

## 📌 Objetivo
Este proyecto implementa dos funciones en **Node.js con TypeScript** y pruebas unitarias con **Jest**, cumpliendo con los requisitos del enunciado:

1. **esMayorDeEdad** → Determina si una persona es mayor de edad.  
2. **puedeAprobarPrestamo** → Decide si se aprueba un préstamo según reglas de negocio.  
3. **Cobertura de pruebas** al **100%** (líneas, ramas, funciones y sentencias).  
4. **Documentación**  


## 📂 Estructura del proyecto



qa-proyecto/
├── src/
│   ├── domain/
│   │   ├── mayor-edad.ts
│   │   ├── prestamo.ts
│   │   └── types.ts
│   └── tests/
│       ├── mayor-edad.spec.ts
│       └── prestamo.spec.ts
├── docs/
│   ├── equivalencias-mayor-edad.md
│   └── decision-table-prestamo.md
├── jest.config.ts
├── tsconfig.json
├── package.json
└── README.md


## ⚙️ Instalación y ejecución

1. Instalar dependencias:
  
   npm install

3. Ejecutar los tests:

   npm test

4. Ejecutar los tests con reporte de cobertura:

   npm run test:cov

## 🧪 Funciones implementadas

### `esMayorDeEdad(edad: number): boolean`

* Retorna **true** si `edad >= 18`.
* Retorna **false** si `0 <= edad < 18`.
* Si la entrada es inválida (negativa, NaN, null, undefined, no numérico) → lanza error.

### `puedeAprobarPrestamo(persona: Persona): boolean`

* **Estudiante** → ❌ No aprueba.
* **Empleado** → ✅ Aprueba (aunque tenga deudas).
* **Retirado** → ✅ Aprueba solo si **no tiene deudas**.

---

## 📑 Documentación de pruebas

En la carpeta `/docs` encontrarás:

* [`equivalencias-mayor-edad.md`](./docs/equivalencias-mayor-edad.md) → Clases de equivalencia y fronteras para `esMayorDeEdad`.
* [`decision-table-prestamo.md`](./docs/decision-table-prestamo.md) → Tabla de decisiones para `puedeAprobarPrestamo`.


## ✅ Cobertura de pruebas

Al ejecutar:

npm run test:cov

Se debe obtener **100% de cobertura** en todas las métricas (statements, branches, functions y lines).

