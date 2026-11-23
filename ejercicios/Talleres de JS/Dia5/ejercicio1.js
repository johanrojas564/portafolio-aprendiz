//Funcion para guardar el nombre 
function guardarNombre() {
    const nombre = document.getElementById("nombre").value;
    if (nombre.trim() !== "") { //Verifica que no haya espacios vacios
        localStorage.setItem("miNombre",nombre);//minombre es un identificador para el navegador 
        mostrarNombre();
    }
}
function mostrarNombre() {
    const nombreAlmacenado = localStorage.getItem("miNombre");

    if (nombreAlmacenado) {
        document.getElementById("recordar").textContent = " Hola, " + nombreAlmacenado;
    }
}
// Mostrar automáticamente al cargar la página
window.onload = function() {
    mostrarNombre();
};