// app.js · Plantilla inicial del taller de JavaScript.
// Este archivo se carga con <script src="app.js" defer> al final del <head> de index.html.

console.log("app.js cargado: la página está lista");

// 1. Buscamos los elementos de la página que necesitamos.
const botonProbar = document.getElementById("boton-probar");
const mensaje = document.getElementById("mensaje");

// 2. Guardamos un dato que cambia con el tiempo.
let veces = 0;

// 3. Cuando alguien pulsa el botón, ejecutamos esta función.
botonProbar.addEventListener("click", () => {
  veces = veces + 1;
  console.log(`Botón pulsado ${veces} vez(es)`);
  mensaje.textContent = `JavaScript funciona: has pulsado el botón ${veces} vez(es).`;
});
