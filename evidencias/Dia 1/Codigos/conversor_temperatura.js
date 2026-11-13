//Este programa es el conversor de temperatura
//Da solucion a el ejercicio guiado #2 (1.G2)

//Funcion flecha de conversion de celsius a fahrenheit 
const celsiusAFahrenheit = (celsius) => (celsius * 9 ) / 5 + 32 ;

//Funcion declarada con function de conversion fahrenheit a celsius
function fahrenheitACelsius(fahrenheit){
    return  ((fahrenheit - 32) * 5) / 9;
}

//Funcion para describir el clima segun los celcius presentes 

function describirClima (celsius){
    if(celsius < 10){
        return "Frio";
    } else if(celsius < 25){
            return "Templado";
    }
    return "Calido";     
}
console.log("Celsius | Fahrenheit | Clima ");
console.log("--------+------------+----------"); 

for(let c = 0; c <= 40; c += 10){ //Suma de 10 en 10 hasta que se llegue a mas de 40 
    const f = celsiusAFahrenheit(c); //C son celsius y f los farenheit 
     console.log(`${String(c).padStart(7)} | ${String(f).padStart(10)} | ${describirClima(c)}`); 
     //Esto arma la tabla en base a lo que hayamos hecho en lugar de construirla a mano 

}
console.log(`La temperatura corporal de 98.6 °F equivale a ${fahrenheitACelsius(98.6).toFixed(1)} °C`);
