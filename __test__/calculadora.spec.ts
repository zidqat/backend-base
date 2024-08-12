import { describe, test, expect } from "@jest/globals";
import { suma } from "../src/calculadora.js";

describe("Calculadora", () => {

    test("sumar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(suma(a, b)).toBe(300);

        a = 10;
        b = "a";
        expect(suma(a, b)).toBeNaN();

        console.log("prueba de indefinidos")
        a = undefined;
        b = 1;
        expect(() => { suma(a, b) }).toThrow("No se puede sumar indefinidos");

    });

});