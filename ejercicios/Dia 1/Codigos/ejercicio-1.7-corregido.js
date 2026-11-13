// ejercicio-1.7-depurar-promedio.js
// Este programa calcula el promedio, cuántas notas aprueban y la mejor nota.
// Resultado correcto esperado: promedio 3.86, aprobadas 4 de 5, mejor nota 5.
// Tu tarea: usar la pestaña Sources (puntos de interrupción) o la sentencia debugger
// para descubrir por qué los resultados no coinciden.

const notas = [3.0, 4.0, 2.8, 4.5, 5.0];
const notaMinima = 3.0;

function calcularPromedio(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) { //Ponemos 0 para que se lea el array completo 
    suma += lista[i];
  }
  return suma / lista.length;
}

function contarAprobadas(lista, minima) {
  let aprobadas = 0;
  for (const nota of lista) {
    if (nota >= minima) {//Damos la opcion para que pase con 3.0 
      aprobadas++;
    }
  }
  return aprobadas;
}

function encontrarMejorNota(lista) {
  let mejor = 0;
  for (const nota of lista) {
    if (nota > mejor) {
      mejor = nota;
    }
  }
  return mejor;
}

const botonCalcular = document.getElementById("boton-calcular");
const resPromedio = document.getElementById("res-promedio");
const resAprobadas = document.getElementById("res-aprobadas");
const resMejor = document.getElementById("res-mejor");

botonCalcular.addEventListener("click", () => {
  const promedio = calcularPromedio(notas);
  const aprobadas = contarAprobadas(notas, notaMinima);
  const mejor = encontrarMejorNota(notas);

  console.log("Promedio calculado:", promedio);
  console.log("Aprobadas:", aprobadas);
  // debugger;   // quita las dos barras: el navegador se detendrá aquí si F12 está abierto

  resPromedio.textContent = promedio.toFixed(2);
  resAprobadas.textContent = `${aprobadas} de ${notas.length}`;
  resMejor.textContent = String(mejor);
});
