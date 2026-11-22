// Juego de Adivinacion de numeros / Respuesta al ejecicio #3 (1.G3)
// Se ejecuta en la terminal con: node adivina-el-numero.js 
import { createInterface } from "node:readline/promises"; 
import { stdin, stdout } from "node:process";
const rl = createInterface({ input: stdin, output: stdout }); 
// Selección del nivel de dificultad
console.log("Selecciona el nivel de dificultad:");
console.log("1. Fácil (1 al 10, 5 intentos)");
console.log("2. Medio (1 al 50, 7 intentos)");
console.log("3. Difícil (1 al 100, 7 intentos)");

const nivel = await rl.question("Elige un nivel (1, 2 o 3): ");

//Creamos el maximo de numero y los intenots maximos
let maximo = 100; 
let intentosMaximos = 7; 

// Asignamos los valores segun el nivel que haya el usuario
switch(nivel){
    case "1":
        maximo = 10; 
        intentosMaximos = 5; 
        break; 
    case "2":
        maximo = 50; 
        intentosMaximos = 7; 
        break;
    case "3":
        maximo = 100; 
        intentosMaximos = 7; 
        break; 
    default:
        console.log("Nivel no válido.");
        rl.close();
        process.exit(1);
}
//Funcion para ejecutar para dar pistas 
function darPista(distancia){
    if(distancia <= 3 ){
        return "!Caliente¡";
    } else if(distancia <= 10) {
        return "!Tibio¡";
    }else{
        return "!Frio¡";
    }
}
//Funcion para ejecutar la partida
async function jugarPartida(maximo,intentosMaximos) {
  let intentos = 0; 
let acertado = false; // Los dejamos en 0 para usarlos mas adelante, el acierto es falso para el bucle 

// Fijamos el numero secreto para con la varable numero secreto, si no existe se creara un falsy y genera un numero al azar 
const secreto = Number(process.env.NUMERO_SECRETO) || Math.floor(Math.random() * maximo) + 1; 

while (intentos < intentosMaximos && !acertado) {
    const respuesta = await rl.question(` Intento ${intentos + 1} ¿Que numero es?  `);
    const numero = Number(respuesta); 
    if(respuesta.trim() == "" || Number.isNaN(numero)){
        console.log("Escribe un numero valido");
        continue; // No lo contara como un intento, por que el numero no se encuentra en el rango establecido 
    }
    intentos++; 
    console.log(`Estoy pensando en un número entre 1 y ${maximo}. Tienes ${intentosMaximos} intentos.`); 
    if(numero === secreto ){ //Aqui gana 
        acertado = true; 
    
    } else{
        const distancia = Math.abs(numero - secreto);
        console.log(darPista(distancia)); 
     
        if(numero < secreto){
        console.log("Muy bajo: Prueba con un numero  mayor"); // Funciona como una pista de tipo frio/caliente

    }else{
        console.log("Muy alto: pruba con un numero menor")
    }
    }
}
if (acertado) {   
    console.log(`¡Correcto! Lo lograste en ${intentos} intento(s).`); 
    return true; 
} 
else {   
    console.log(`Se acabaron los intentos. El número era ${secreto}.`); 
    return false; 
}   
}
//Repetiremos la partida cuantas veces el jugador quiera 
let partidasJugadas = 0;//Contadores de cuantas partidas lleva 
let partidasGanadas = 0;
let repetir; 
do{
    const resultado = await jugarPartida(maximo, intentosMaximos);

    partidasJugadas++ 
    console.log("Resultado de la partida:", resultado);

    if(resultado === true ){
        partidasGanadas++;
    }
    
    repetir = (await rl.question("Jugar otra vez (s/n) : ")).toLowerCase(); //Permitimos ingresar mayusculas 
} while (repetir === "s")
//Ejecutamos la partida y recibimos su resultados 
console.log("\n===== ESTADÍSTICAS FINALES =====");
console.log(`Partidas jugadas: ${partidasJugadas}`);
console.log(`Partidas ganadas: ${partidasGanadas}`);
console.log("¡Gracias por jugar!");


rl.close();

