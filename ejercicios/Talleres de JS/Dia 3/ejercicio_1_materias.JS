const materias = ["matematicas","biologia","quimica","ingles","ciencias sociales"]; // Declarammos el array 

materias.push("Ed.fisica");
materias.pop();

for(let i = 0; i < materias.length; i++ ){
    console.log(materias[i]);
}