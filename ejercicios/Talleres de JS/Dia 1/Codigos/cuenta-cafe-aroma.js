
// Reto #2: Crear una cuenta de productos
// Ejecutar con node cuenta-cafe-aroma.js

// Declaracion de variables
const cantidadBrownies = 3;
const precioBrownie = 5000;

const cantidadLatte = 1;
const precioLatte = 2300;

const cantidadGalleta = 3;
const precioGalleta = 2000;

// Funcion para calcular el subtotal
function calcularSubtotal(precioA, cantidadA, precioB, cantidadB, precioC, cantidadC) {
    return (precioA * cantidadA) +
           (precioB * cantidadB) +
           (precioC * cantidadC);
}

// Dia de la semana
const dia = "martes";

// Determina el descuento del dia
function obtenerDescuento(dia) {
    switch (dia) {
        case "martes":
            return 0.15;

        case "domingo":
            return 0.05;

        default:
            return 0;
    }
}

// Calculos de la cuenta
const subtotal = calcularSubtotal(
    precioBrownie, cantidadBrownies,
    precioLatte, cantidadLatte,
    precioGalleta, cantidadGalleta
);

const porcentajeDescuento = obtenerDescuento(dia);

const descuento = subtotal * porcentajeDescuento;

const baseGravable = subtotal - descuento;

// Calculo del IVA (19%)
const iva = baseGravable * 0.19;

// Calculo de la propina (10%)
const propina = baseGravable * 0.10;

// Total a pagar
const total = baseGravable + iva + propina;

// Formato de moneda colombiana
const formatoPesos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
});

// Funcion para imprimir una linea de la cuenta
function imprimirLinea(nombre, cantidad, valor) {
    console.log(
        nombre.padEnd(23) +
        String(cantidad).padStart(5) +
        formatoPesos.format(valor).padStart(12)
    );
}

// Encabezado de la cuenta
console.log("=".repeat(40));
console.log("           CUENTA CAFETERIA");
console.log("=".repeat(40));

console.log(
    "Producto".padEnd(23) +
    "Cant.".padStart(5) +
    "Valor".padStart(12)
);

console.log("-".repeat(40));

// Productos
imprimirLinea("Brownie", cantidadBrownies, precioBrownie * cantidadBrownies);
imprimirLinea("Latte", cantidadLatte, precioLatte * cantidadLatte);
imprimirLinea("Galleta", cantidadGalleta, precioGalleta * cantidadGalleta);

console.log("-".repeat(40));

// Resumen de la cuenta
imprimirLinea("Subtotal", "", subtotal);
imprimirLinea("Descuento", "", -descuento);
imprimirLinea("Base gravable", "", baseGravable);
imprimirLinea("IVA (19%)", "", iva);
imprimirLinea("Propina (10%)", "", propina);

console.log("-".repeat(40));

imprimirLinea("TOTAL A PAGAR", "", total);

console.log("=".repeat(40));
console.log("           ¡GRACIAS POR SU COMPRA!");
console.log("=".repeat(40));
