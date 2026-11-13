//Ejercicio 3 - Practicar los bucles y ciclos 
// Ejecutar con node tabla-multiplicar.js
const numero = 7; 


//contador para tablas de multiplicar 

  for( let n = 1; n<=10; n++  ){
    console.log(`${numero} * ${n} =  ${numero * n }`)
}
 
//Ejercicio de suma 


  let suma = 0; 
let i = 1;
while (i <= 20 ){
    //Verificamos que el numero sea par(el residuo es 0 si se divide en 2 )
    if(i % 2 === 0){
        suma += i; 
    }
    i++; 
}
console.log(`La suma entre los numeros pares del 1 al 20 son ${suma}`); 
 
//Cuadricula de multiplicacion 



  for (let i = 1; i <= 5; i++) { //  Este for es el de las las lineas 
  let linea = "";
  for (let j = 1; j <= 5; j++) { // Este for crea las colunas 
    // Añadimos el producto y un espacio para separar las columnas
    linea += (i * j) + "\t"; 
  }
  console.log(linea);
}
 
//Cuenta hacia atras 
for(let i = 5; i >= 0; i--){
    console.log(i); 
    
    if(i === 0){
        console.log("¡Despegue!");
    }
}