//Inicializamos las variables 
let contador = 0 

document.getElementById("boton").addEventListener("click",function(){
    contador = contador + 1;
    let nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento  "+ contador; // Mostrara elemento 1, 2, 3 
//Permite que se le agreguen elementos a la lista 
document.getElementById("lista").appendChild(nuevoElemento);
});
