// Dia 2 Ejercicio 2 
// ejecutar con prueba.html 

let numeroSemana = Number(prompt("Ingresa el numero del dia de la semana"))

switch(numeroSemana){
    case 1: 
        console.log("Hoy es Lunes");
    break; 
    case 2:
        console.log("Hoy es Martes");
    break;
    case 3: 
        console.log("Hoy es Miercoles");
    break;
    case 4:
        console.log("Hoy es Jueves");
    break;
    case 5: 
        console.log("Hoy es Viernes");
    break;
    case 6:
        console.log("Hoy es Sabado");
    break;
    case 7:
        console.log("Hoy es Domingo");
    break; 

    default:
    console.error("Dia invalido");
}