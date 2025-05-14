//Ejemplo usando arrays de datos
const orders = [
  {
    name: 'Nicolas',
    food: 'Pizza',
  },
  {
    name: 'Andrea',
    food: 'Hamburguesa',
  },
  {
    name: 'Zulema',
    food: 'Pizza',
  },
  {
    name: 'Santiago',
    food: 'Pizza',
  },
  {
    name: 'Valentina',
    food: 'Hamburguesa',
  },
  {
    name: 'Lucia',
    food: 'Pizza',
  },
];

const list_container = document.getElementById('list_container');
const find_container = document.getElementById('find_container');
const findIndex_container = document.getElementById('findIndex_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map((element) => {
  return `<li>${element.name} - ${element.food}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

//Iteración del array orders para encontrar el primer pedido de Hamburguesa
const rta1 = orders.find((item) => item.food === 'Hamburguesa');

//Visualización de la respuesta en consola
console.log('¿Primer pedido de Hamburguesa?: ', rta1);

//Manipulación del DOM: (Modifica el DOM 1 vez)
find_container.innerHTML = `<li>${rta1.name} - ${rta1.food}</li>`;

//Iteración del array orders para encontrar el index del primer pedido de Hamburguesa
const rta2 = orders.findIndex((item) => item.food === 'Hamburguesa');

//Visualización de la respuesta en consola
console.log('¿Qué número de pedido es? ', rta2 + 1);

//Manipulación del DOM: (Modifica el DOM 1 vez)
findIndex_container.innerHTML = rta2 + 1;
