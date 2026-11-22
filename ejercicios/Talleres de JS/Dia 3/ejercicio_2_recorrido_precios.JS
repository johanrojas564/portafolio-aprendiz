const precios = [12000, 8500, 30000 ,5000];

const conIva = precios.map(x => x * 1.19); // El iva es del 19 % 
const preciosPequeños = precios.filter(x => x < 10000); //Todos los precios de 10000 para abajo 
const total = precios.reduce((valor,x) => valor + x,0 ); //total de precios 
console.log(conIva);
console.log(preciosPequeños);
console.log(total);
