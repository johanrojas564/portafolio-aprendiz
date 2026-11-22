const yo = {
    nombre: "Johan",
    edad : 18,
    ciudad :"Bogota",
    presentarse(){
        return "Hola, soy " + this.nombre + " tengo " + this.edad + " años y vivo en " + this.ciudad; 
    }
};
const presentacionTexto = JSON.stringify(yo); //Convertimos a texto 
console.log("Presentacion en texto:");
console.log(presentacionTexto);
const presentacionConvertida = JSON.parse(presentacionTexto); //La volvemos a convertir 
console.log("Presentacion convertida:")
console.log(presentacionConvertida);