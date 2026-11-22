// app-Contador_solucion al ejercicio guiado  1.G4 
// Se carga con <script src="contador-clics.js" defer>: el HTML ya existe cuando se ejecuta. 

console.log("app.js cargado: la página está lista");
let contador = 0; 

// 1. Buscamos los elementos de la página que necesitamos.
const valor = document.getElementById("valor"); 
const botonSumar = document.getElementById("boton-sumar"); 
const botonRestar = document.getElementById("boton-restar"); 
const botonReiniciar = document.getElementById("boton-reiniciar"); 
const avisoLimite = document.getElementById("aviso-limite");
// Esta funcion se encarga de reflejar el dato en pantalla 
function actualizarPantalla() {   
  valor.textContent = String(contador);   
  console.log(`Contador: ${contador}`); 
} 
//Boton para sumar, este evento hace que pueda sumar 1 cada vez que se toca 
botonSumar.addEventListener("click", () => {   
  contador++;   
  avisoLimite.textContent = "";

  actualizarPantalla(); 
});   
//La misma logica aplica para este boton 
botonRestar.addEventListener("click", () => {   
    if (contador > 0) {     
      contador--;     avisoLimite.textContent = "";   
    } else {     
      avisoLimite.textContent = "El contador no puede ser negativo.";   
    }   actualizarPantalla(); 
});   
    botonReiniciar.addEventListener("click", () => {   
      contador = 0;   
      avisoLimite.textContent = "";   
      actualizarPantalla(); 
}); 