
// 1. SELECCIONAMOS LOS ELEMENTOS HTML

let entrada = document.getElementById("tarea");
let botonAgregar = document.getElementById("agregar");
let lista = document.getElementById("lista");
let pendientes = document.getElementById("pendientes");
let botonEjemplos = document.getElementById("cargarEjemplos");
let mensajeError = document.getElementById("mensajeError");

// Array principal
let tareas = [];


// 2. GUARDAR LAS TAREAS

function guardar() {

    localStorage.setItem("tareas", JSON.stringify(tareas));

}


// 3. RECUPERAR LAS TAREAS

function cargarTareas() {

    let datosGuardados = localStorage.getItem("tareas");

    if (datosGuardados !== null) {

        tareas = JSON.parse(datosGuardados);

    }

}


// 4. ACTUALIZAR EL CONTADOR

function actualizarContador() {

    let cantidad = tareas.filter(function(tarea) {

        return !tarea.completada;

    }).length;

    pendientes.textContent = "Tareas pendientes: " + cantidad;

}


// 5. MOSTRAR LAS TAREAS

function mostrarTareas() {

    lista.innerHTML = "";

    tareas.forEach(function(tarea, indice) {

        let nuevaTarea = document.createElement("li");

        let textoTarea = document.createElement("span");

        textoTarea.textContent = tarea.texto;
        textoTarea.classList.add("texto-tarea");

        if (tarea.completada) {

            nuevaTarea.classList.add("completada");

        }

        // Completar o descompletar tarea
        textoTarea.addEventListener("click", function() {

            tarea.completada = !tarea.completada;

            guardar();
            mostrarTareas();

        });

        // Crear botón eliminar
        let botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");

        botonEliminar.addEventListener("click", function() {

            tareas.splice(indice, 1);

            guardar();
            mostrarTareas();

        });

        nuevaTarea.appendChild(textoTarea);
        nuevaTarea.appendChild(botonEliminar);

        lista.appendChild(nuevaTarea);

    });

    actualizarContador();

}


// 6. AGREGAR UNA TAREA

function agregarTarea() {

    let texto = entrada.value.trim();

    if (texto === "") {

        alert("Por favor, escribe una tarea.");
        return;

    }

    let nuevaTarea = {

        texto: texto,
        completada: false

    };

    tareas.push(nuevaTarea);

    guardar();
    mostrarTareas();

    entrada.value = "";
    entrada.focus();

}


// 7. CARGAR TAREAS DESDE LA API

async function cargarEjemplos() {

    try {

        mensajeError.textContent = "";

        let respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );

        if (!respuesta.ok) {

            throw new Error("Error al consultar la API");

        }

        let datos = await respuesta.json();

        datos.forEach(function(tarea) {

            tareas.push({

                texto: tarea.title,
                completada: tarea.completed

            });

        });

        guardar();
        mostrarTareas();

    } catch (error) {

        mensajeError.textContent =
            "Error: no se pudieron cargar las tareas.";

        console.log(error);

    }

}


// 8. CONECTAMOS LOS BOTONES

botonAgregar.addEventListener("click", agregarTarea);

botonEjemplos.addEventListener("click", cargarEjemplos);


// 9. INICIAMOS LA APLICACIÓN

cargarTareas();
mostrarTareas();
