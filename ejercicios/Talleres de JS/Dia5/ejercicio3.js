async function obtenerUsuario() { 
    // Usamos async por que usamos una API,por ende tenemos que esperar a que llegue
    try{
    const url = "https://jsonplaceholder.typicode.com/users/1 ";
    const respuesta = await fetch(url); 
    // Await permite que se capture la api sin interferir con el proceso

    const usuario = await respuesta.json(); 
    // Con usuario podemos entrar a los datos de forma mas sencilla 


    //Mostramos los datos 
    document.getElementById("nombre").textContent = usuario.name;

    document.getElementById("correo").textContent = usuario.email;  
    }
    catch(error){
        console.error("Error al obtener el usuario", error);

        document.getElementById("nombre").textContent = "ERROR";

        document.getElementById("correo").textContent = "ERROR";  
    }

}
obtenerUsuario();
//A pesar de que se escribio la funcion, aun tenemos que ejecutarla para que funcione
