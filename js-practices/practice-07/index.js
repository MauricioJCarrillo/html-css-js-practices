//Ejemplo con arrays
const words = ['spray', 'limit', 'elite', 'exuberant'];

//Nuevo array
const newArray = [];

//Filtrar las palabras con mas de 6 letras con metodo for
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length > 6) {
    newArray.push(element);
  }
}

console.log('Array original: ', words);
console.log('Array filtrado: ', newArray);

//Filtrar las palabras con mas de 6 letras con metodo .filter()
const newArray1 = words.filter((element) => element.length > 6);

console.log('Array original: ', words);
console.log('Array filtrado 1: ', newArray1);

//-------------------------------------------------------------
//Ejemplo con arrays de objetos
const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

//Prueba 1: Filtrar las ordenes de compra que fueron entregadas
const rta1 = orders.filter((item) => item.delivered === true);

console.log('Array original: ', orders);
console.log('Array modificado 1: ', rta1);

//Prueba 2: Filtrar las ordenes de compra que fueron entregadas y el total mayor a 100
const rta2 = orders.filter(
  (item) => item.delivered === true && item.total > 100,
);

console.log('Array original: ', orders);
console.log('Array modificado 2: ', rta2);

//Prueba 3: Filtrar si hay un string dado por el usuario que contenga algún customerName
const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

const rta3 = search('le');
console.log('Array modificado 3: ', rta3);
