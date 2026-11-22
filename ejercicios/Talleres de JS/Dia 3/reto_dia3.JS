//Grupo de estudiantes 
const grupo =[
    { nombre : "Juan", nota : 4.6},
    { nombre : "Danna", nota : 3.9},
    { nombre : "David", nota : 2.6},
    { nombre : "Juliana", nota :  2.3},
    { nombre : "Matias ", nota : 3.0}
]
// Los estudiantes aprobados 

const aprobados = grupo.filter(x => x.nota > 3.0); //Se aprueba a patir de 3.0 
const estudiantesAprobados = grupo
    .filter(x => x.nota >= 3.0) //Filtramos los que aprobamos 
    .map(x => x.nombre); // Despues imprimimos 

const sumaNotas = grupo.reduce((acumulador,estudiante) =>  
{
    return acumulador + estudiante.nota; // Acumula la suma de todas las notas 
},0) //Cero es para inicilizar la acumulacion
const promedioNotas = sumaNotas / grupo.length; //El segundo elemento cuenta los estudiantes 
// Expedimos todos los resultados 
const resultado = {
    grupo: grupo,
    aprobados: aprobados,
    nombresAprobados: estudiantesAprobados,
    promedio: promedioNotas
};
const resultadoFinal = JSON.stringify(resultado,null,2);

// Mostrar resultados
console.log(resultadoFinal);