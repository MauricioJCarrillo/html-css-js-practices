//Ejemplo con array: Determinar si hay algú numero 30 en el array
const numbers = [1, 30, 49, 29, 10, 13];

//Inicializando el valor rta (Suponemos que no esta: "undefined")
let rta = undefined;

//Iterando el array con ciclo for
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    rta = 30;
    break;
  }
}

//Visualización de rta en consola
console.log('Con ciclo for: ', rta);

//Iterando el array usando el metodo Every con las condición que deben cumplir los elementos
const rta2 = numbers.find((item) => item === 30);

//Visualización de rta en consola
console.log('Con método Every: ', rta2);

//-----------------------------------------------------------------
//Ejemplo usando arrays de objetos - Encontrar la posición con ID de '🍔'
const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

//Iterando el array con el metodo find
const rta3 = products.find((item) => item.id === '🍔');

//Visualización de rta3 en consola
console.log('¿Hay un ID de 🍔?', rta3);

//Iterando el array con el metodo findIndex
const rta4 = products.findIndex((item) => item.id === '🍔');

//Visualización de rta4 en consola
console.log('¿Cual es la posicón del ID de 🍔?', rta4);
