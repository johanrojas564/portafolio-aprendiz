const yo = {
    nombre: "Johan",
    edad : 18,
    ciudad :"Bogota",
    presentarse(){
        return "Hola, soy " + this.nombre + " tengo " + this.edad + " años y vivo en " + this.ciudad; 
    }
};

console.log(yo.presentarse());// Imprime mi presentacion 