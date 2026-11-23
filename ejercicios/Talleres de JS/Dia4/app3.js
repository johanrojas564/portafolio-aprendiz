//Inicializamos las variables 

let entrada = document.getElementById("texto"); 
let resultado = document.getElementById("resultado")

//Evento del imput 
entrada.addEventListener("input",function(){
    resultado.textContent = entrada.value; 

});