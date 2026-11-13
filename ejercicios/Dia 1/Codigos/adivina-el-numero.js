// Juego de Adivinacion de numeros / Respuesta al ejecicio #3 (1.G3)
// Se ejecuta en la terminal con: node adivina-el-numero.js 
import { createInterface } from "node:readline/promises"; 
import { stdin, stdout } from "node:process";

//Creamos el maximo de numero y los intenots maximos
const maximo = 100; 
const intentosMaximos = 7; 
// Fijamos el numero secreto para con la varable numero secreto, si no existe se creara un falsy y genera un numero al azar 
const secreto = Number(process.env.NUMERO_SECRETO) || Math.floor(Math.random() * maximo) + 1; 

const rl = createInterface({ input: stdin, output: stdout }); 
console.log(`Estoy pensando en un número entre 1 y ${maximo}. Tienes ${intentosMaximos} intentos.`); 

let intentos = 0; 
let acertado = false; // Los dejamos en 0 para usarlos mas adelante, el acierto es falso para el bucle 

while (intentos < intentosMaximos && !acertado) {
    const respuesta = await rl.question(` Intento ${intentos + 1} ¿Que numero es?  `);
    const numero = Number(respuesta); 
    if(respuesta.trim() == "" || Number.isNaN(numero)){
        console.log("Escribe un numero valido");
        continue; // No lo contara como un intento, por que el numero no se encuentra en el rango establecido 
    }
    intentos++; 
    if(numero === secreto ){ //Aqui gana 
        acertado = true; 
    } else if(numero < secreto){
        console.log("Muy bajo: Prueba con un numero  mayor"); // Funciona como una pista de tipo frio/caliente

    }else{
        console.log("Muy alto: pruba con un numero menor")
    }
}
if (acertado) {   
    console.log(`¡Correcto! Lo lograste en ${intentos} intento(s).`); 
} 
else {   
    console.log(`Se acabaron los intentos. El número era ${secreto}.`); 
} 
rl.close();

