// Todas las contraseñas están en un array 
const candidatos = ["abc", "contrasena1", "Contasenia", "Contra 1A", "Segura2026"];

for (const pass of candidatos) {
    const problemas = validarContraseña(pass);
    if (problemas.length === 0) {
        console.log(`"${pass}" : valida`);
    } else {
        console.log(`"${pass}" No es valida -> ${problemas.join(";   ")}`);
    }
}

// Declaramos la función para validar que la contraseña es correcta 
function validarContraseña(contrasenia) {
    const problemas = [];

    // Si la contraseña es menor a 8 caracteres 
    if (contrasenia.length < 8) {
        problemas.push("La contraseña debe tener al menos 8 caracteres");
    }

    // Comprobantes para dígitos y mayúsculas
    let tieneDigito = false; 
    let tieneMayusc = false; 

    // Recorremos cada letra de la contraseña 
    for (const letra of contrasenia) {
        // Verificamos si tiene un dígito numérico 
        if ("0123456789".includes(letra)) {
            tieneDigito = true; 
        }
        // Verificamos si tiene una mayúscula 
        if (letra !== letra.toLowerCase()) {
            tieneMayusc = true;
        }
    }

    // Evaluamos si los comprobantes siguen en falso 
    if (!tieneDigito) {
        problemas.push("La contraseña debe incluir al menos un dígito"); 
    }
    
    if (!tieneMayusc) {
        problemas.push("La contraseña debe incluir al menos una letra en mayúscula");
    }

    // Validar espacios
    if (contrasenia.includes(" ")) {
        problemas.push("La contraseña no puede contener espacios.");
    }

    return problemas;
}