//Dia 2 ejercicio4-FuncionesBasicas
//Ejecutar con el navegador e pagina de prueba

function esPar(numero){
    return numero % 2 === 0;
}

function areaRectangulo(b, h ){
    return b * h; // b = base / h = altura(height)
}

let opcion = Number(prompt("Ingresa una opción "))
console.log("================================");
console.log("1. Encontrar un numero "); 
console.log("2. Calcular el area de un rectangul");
console.log("================================");
switch(opcion){
    case 1:
        let numero = Number(prompt("Ingresa un numero cualquiera"))

        const siPar = esPar(numero);
    if (siPar) {
        console.log(`${numero} es par `);
    
    }else{
        console.log(`${numero} no es par`);
    }
    break; 

    case 2: 
        let base = Number(prompt("Ingrese la base de un rectangulo en cm")); 
        let altura = Number(prompt("Ingrese la altura de un rectangulo en cm")); 

        const area = areaRectangulo(base, altura);
        console.log(`El area del rectangulo es ${area}`);
    break;
    
    default:
    console.error("Opcion no valida"); 
} 


