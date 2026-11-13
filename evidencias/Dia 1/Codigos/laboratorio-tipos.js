// Laboratorio-tipos 
//Se ejecuta en Node.JS con Laboratorio-tipos.js 
function mostrar(expresion, resultado) {
    console.log(expresion.padEnd(28) + " -> " + resultado);
}
mostrar("typeof null",typeof null);
mostrar("\"5\"+ 3", "5" + 3 );
mostrar("\"5\" - 3" ,"5" - 3 ); 
mostrar("\"5\" * \"2\"", "5" * "2");
mostrar("\"hola\" * 2 ", "hola" * 2 ); 
mostrar("true + 1 ", true + 1 ); 
mostrar("Number(\"\") ",Number("") );
mostrar("Number(\"abc\")",Number("abc"));
mostrar("parseInt(\"15.9\")",parseInt("15.9"));
mostrar("Boolean(\"false\")",Boolean("false"));
mostrar("5 == \"5\"", 5 == "5");
mostrar("5 === \"5\"", 5 === "5"); 
mostrar("null === undefined", null === undefined); 
mostrar("0.1 + 0.2 === 0.3", 0.1 + 0.2 === 0.3 )
/**
 * Las expresiones que mas me sorprendieron fueron 
 * la 6 y la 14 
 * La razon por la que la 6 da 2 en lugar de true mas 1, es por que true internamente se 
 */