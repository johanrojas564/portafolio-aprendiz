//Proyecto de Calculadora 
//Para ejcutarlo se encesita node JS, en la terminal se ejecuta como node calculadora js 
//Aqui creamos las variables  y las pedomos 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para realizar las operaciones
function calcular(a, b, operacion) {
    switch (operacion) {
        case '+': return a + b; // a y b Son de retorno asiq ue podemos introducir cualquier cosa 
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'No se puede dividir entre cero';
        default: return 'Operación no válida';
    }
}

// Capturar los datos
rl.question('Primer número: ', (num1) => {
    rl.question('Operación (+, -, *, /): ', (op) => {
        rl.question('Segundo número: ', (num2) => {

            const resultado = calcular(
                Number(num1),
                Number(num2),
                op
            );

            console.log('Resultado:', resultado);

            rl.close();
        });
    });
});