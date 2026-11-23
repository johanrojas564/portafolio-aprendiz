
// 1. Seleccionamos los elementos HTML
let entrada = document.getElementById("tarea");
let botonAgregar = document.getElementById("agregar");
let lista = document.getElementById("lista");
let pendientes = document.getElementById("pendientes");


// 2. Creamos la función para contar tareas pendientes
function actualizarContador() {

    let cantidad = lista.querySelectorAll("li:not(.completada)").length;

    pendientes.textContent = "Tareas pendientes: " + cantidad;
}

// 3. Escuchamos el clic del botón Agregar
botonAgregar.addEventListener("click", function() {

    // Obtenemos el texto y quitamos espacios sobrantes
    let texto = entrada.value.trim();

    // Evitamos agregar tareas vacías
    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Creamos un nuevo elemento de lista
    let nuevaTarea = document.createElement("li");

    // Creamos el texto de la tarea
    let textoTarea = document.createElement("span");

    textoTarea.textContent = texto;
    textoTarea.classList.add("texto-tarea");

    // Marcamos o desmarcamos la tarea al hacer clic
    textoTarea.addEventListener("click", function() {

        nuevaTarea.classList.toggle("completada");

        actualizarContador();
    });

    // Creamos el botón Eliminar
    let botonEliminar = document.createElement("button");

    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");

    // Eliminamos la tarea al presionar el botón
    botonEliminar.addEventListener("click", function() {

        nuevaTarea.remove();

        actualizarContador();
    });

    // Agregamos el texto y el botón a la tarea
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonEliminar);

    // Agregamos la tarea a la lista
    lista.appendChild(nuevaTarea);

    // Limpiamos la casilla
    entrada.value = "";

    // Actualizamos el contador
    actualizarContador();

    // Volvemos a colocar el cursor en la casilla
    entrada.focus();

});
