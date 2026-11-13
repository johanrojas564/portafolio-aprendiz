//Este programa es referente a la actividad de guia 1
//Usaremos la terminal de node para poder instalarlo  
//Variables fijas 
const nombre = "Johan"; 
const apellido = "Rojas"; 
const anioNacimiento = "2008"; 
const anioActual = "2026"; 
const ciudadResidencia = "Soacha"; 
//Variables cambiantes 
let tazasDeCafe = 1; 
// Calcularemos la Edad 
 const Edad = anioActual - anioNacimiento;
console.log("----------------------------");
console.log("Mi Ficha de presentacion "); 
console.log(`Nombre completo: ${nombre} ${apellido}`);
console.log(`Edad: ${Edad} años`);
console.log(`Ciudad de Residencia: ${ciudadResidencia}`);

tazasDeCafe += 2; 
console.log(`Las tazas de cafe son ${tazasDeCafe}`);

const esMayorDeEdad = Edad >=18; //Se toma en cuenta que un adulto legalmente es de 18 años para adelante en Colombia 
console.log(`¿Es mayor de Edad ? ${esMayorDeEdad} `);
//Estos son los tipos de informacion
console.log("Tipos de dato"); 
console.log(typeof nombre); 
console.log(typeof Edad);
console.log(typeof esMayorDeEdad); 


