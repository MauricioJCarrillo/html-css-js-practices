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

//Prueba 1: Transformación de nuevo array con los valores del atributo total
const rta1 = orders.map((item) => item.total);

console.log('Array original: ', orders);
console.log('Array modificado 1: ', rta1);

/*//Prueba 2: Transformación de nuevo array añadiendo nuevo atributo (Tambien se modifica el original)
const rta2 = orders.map(item => {
	item.tax = 0.19;
	return item;
});

console.log("Array original: ", orders);
console.log("Array modificado 2: ", rta2);*/

//Prueba 3: Transformación de nuevo array añadiendo nuevo atributo sin que se modifique el original.
const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log('Array original: ', orders);
console.log('Array modificado 3: ', rta3);

//Prueba 4: Transformación de nuevo array modificando el atributo total sin que se modifique el original.
const rta4 = orders.map((item) => {
  return {
    ...item,
    total: item.total + 5,
  };
});

console.log('Array original: ', orders);
console.log('Array modificado 4: ', rta4);
