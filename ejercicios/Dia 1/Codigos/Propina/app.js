// app.js · Plantilla inicial del taller de JavaScript.
// Este archivo se carga con <script src="app.js" defer> al final del <head> de index.html.

console.log("app.js cargado: la página está lista");

// Formateador de pesos 

const formateadorCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
});
// 1. Buscamos los elementos de la página que necesitamos.
const campoCuenta = document.getElementById("cuenta");
const selectPorcentaje = document.querySelector("select[name='porcentaje']");
const botonCalcular = document.querySelector("button[type='submit']");
const errorCuenta = document.querySelector("[role='alert']");
const resultado = document.querySelector("p[role='status']");

// 2. Creamos la funcion que nos permite calcular la propina 
function calcularPropina(cuenta, porcentaje) {
  return (cuenta * porcentaje) / 100;
}

// 3. Cuando alguien pulsa el botón, ejecutamos esta función.
botonCalcular.addEventListener("click", (evento) => {
  evento.preventDefault();  
  const valorTexto = campoCuenta.value;
  const cuenta = Number(valorTexto);
  const porcentaje = Number(selectPorcentaje.value);

// Validación de datos vacíos, NaN o menores/iguales a 0
  if (valorTexto.trim() === "" || Number.isNaN(cuenta) || cuenta <= 0) {
    errorCuenta.textContent = "Escribe un valor de cuenta mayor que cero.";
    resultado.textContent = "";
    return;
  }
  // Si los datos son válidos, limpiamos el mensaje de error
  errorCuenta.textContent = "";
  // Cálculos
  const propina = calcularPropina(cuenta, porcentaje);
  const total = cuenta + propina;
  // Mostrar el resultado 
  resultado.textContent = `Propina: ${formateadorCOP.format(propina)} · Total a pagar: ${formateadorCOP.format(total)}`;

  // Escribir en la consola los valores
  console.log("Cuenta:", cuenta, "| Porcentaje:", porcentaje, "| Propina:", propina, "| Total:", total);
  })