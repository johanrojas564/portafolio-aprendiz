// ejercicio-1.6-codigo-con-errores.js
// Cuenta de una mesa de Café Aroma. Este programa tiene ERRORES a propósito.
// Tu tarea: ejecutarlo con  node ejercicio-1.6-codigo-con-errores.js,  leer cada mensaje,
// encontrar el error, corregirlo y volver a ejecutar. Repite hasta obtener esta salida:
//
//   === Café Aroma: cuenta de la mesa 4 ===
//   Ubicación: terraza
//   Productos pedidos:
//   - Capuchino
//   - Croissant
//   Total de unidades: 3
//   Subtotal: $24500
//   Impoconsumo (8 %): $1960
//   Cortesía: incluye una galleta
//   Propina sugerida (10 %): $2450
//   Total a pagar: $28910
//   Total por persona: $14455
//   Gracias por visitarnos, vuelve pronto

// Datos del pedido (llegan como texto, como si vinieran de un formulario)
const mesa = "4";
const personas = 2;
const cantidadCapuchino = "2";
const cantidadCroissant = "1";
const precioCapuchino = 9500;
const precioCroissant = 5500;
const tasaImpoconsumo = 0.08;
const tasaPropina = 0.1;

function calcularSubtotal(precioA, cantidadA, precioB, cantidadB) {// Todo se anida en la funcion por que falta un corchete 
  return precioA * cantidadA + precioB * cantidadB;
}
function calcularImpuesto(valor) {
  return valor * tasaImpoconsumo; // No hay un return, las demas variables quedan invalidas
}

console.log("=== Café Aroma: cuenta de la mesa " + mesa + " ==="); //Se imprimra todo por culpa de que falta el parentesis

if (mesa == 4) { //Como esta comparando literalmente el valor de un string con un numero el if no funciona
  console.log("Ubicación: terraza");
} else {
  console.log("Ubicación: salón");  
}//Las comillas estan mal puestas, el console log imprimira todo

const productos = ["Capuchino", "Croissant"];
console.log("Productos pedidos:");
for (let i = 0; i < productos.length; i++) { // Hay un "error por uno" por el <=, que ejecuta mas elementos de lo que habian 
  console.log("- " + productos[i]);
}

const unidades = Number(cantidadCapuchino) + Number(cantidadCroissant) ; // Si trata de sumar las cadenas sale 21 en lugar de 3  
console.log("Total de unidades:", unidades);

const subtotal = calcularSubtotal(precioCapuchino, cantidadCapuchino, precioCroissant, cantidadCroissant);
console.log("Subtotal: $" + subtotal);//Como las variables tienen un ligero error de consistencia el calculo no se hace 

const impoconsumo = calcularImpuesto(subtotal);
console.log(`Impoconsumo (8 %): $${impoconsumo}`);


if (subtotal >= 20000) {
  var cortesia = "incluye una galleta";
}
console.log("Cortesía:", cortesia);//Como cotesia es un let dentro de un if 


const propina = subtotal * tasaPropina;
console.log(`Propina sugerida (10 %): $${propina}`);

let totalAPagar = subtotal + impoconsumo + propina;
if (totalAPagar === 0) { // La asignacion del igual esta haciendo que total siempre sea cero 
  console.log("La cuenta está en cero");
}
console.log(`Total a pagar: $${totalAPagar}`);

const totalPorPersona = (subtotal + impoconsumo + propina) / personas; // La operacion no esta bien organizada, la division se ejecuta primero antes que la suma 
console.log(`Total por persona: $${totalPorPersona}`);

let mensajeFinal = "Gracias por visitarnos"; // Como la variable es un const, genera un error al tratar de modificarla
mensajeFinal = mensajeFinal + ", vuelve pronto";
console.log(mensajeFinal);
