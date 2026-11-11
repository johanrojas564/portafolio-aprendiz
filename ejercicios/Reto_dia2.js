//Dia 2
//Implementamos todo para que el progrma pueda iniciar 
import { createInterface } from "node:readline/promises";
import { stdin, stdout  } from "node:process" ; 
//Creamos la interfaz para que la connsola pueda funcionar
const rl = createInterface({input: stdin, output: stdout});

let opcionTextual = await rl.question("Que opcion va a tomar"); // Toma la opcion del usuario pero la toma como texto 
const opcion = Number(opcionTextual); //Esto permite conocer la opcion en numero 
//La tabla solo toma de 1 a 10 
function tablaMultiplicar(n){
    const resultados = []; // Es para devolver toda la tabla

    for (let a = 1; a < 11; a++) {

        const resultado = n * a;

        console.log(`${n} x ${a} = ${resultado}`);

        resultados.push(resultado);
    }

    return resultados; 
}
// Funcion para calcular una nota 
function estadoNota( a ){
    let veredicto = "";
    if (a <= 5 && a >= 3.5){ // 3.5 es la nota minima para pasar
        veredicto = " El estudiante paso ";
    } else if (a >= 0 && a < 3.5){ //De 3.5 para abajo se repreprueba
        veredicto = "El estudiante Reprobo";
    }else{
         return "Ingrese una nota válida, solo se permite de 0 a 5";
    }
    return veredicto; 
}// La calificacion se basa de 0 a 5 

//Tomamos la operacion en base a la decision tomada 
    console.log("1. Hacer una tabla de multiplicar hasta 10")
    console.log("2. Ver si un estudiante cumplio ")
    console.log("3.salir")
 switch(opcion){
    case 1: 
    const numeroEnTexto = await rl.question("Ingrese un numero: ");
    const numero = Number(numeroEnTexto); //Lo transoformavmos por que por defecto n es texto
    //Prevenimos de que el usuario pueda ingresar un texto 
    if (Number.isNaN(numero)) {
    console.log("Debe ingresar un número válido");
    }

    const tabla = tablaMultiplicar(numero); // Ejecutamos la tablas de multiplicar
    console.log("Resultados de la tabla:", tabla);
    break; 
    case 2: 
    let notaEnTexto = await rl.question("¿cual fue la nota final del estudiante?");
    let nota = Number(notaEnTexto); 

    console.log(estadoNota(nota))  ;
    break; 
    default: 
    console.error("Elija una opcion valida");  
}   






rl.close(); //Fin del programa 
