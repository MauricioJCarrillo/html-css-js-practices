//Ejemplo usando arrays de datos
const orders = [
  {
    name: 'Nicolas',
    food: 'Hamburguesa',
  },
  {
    name: 'Andrea',
    food: 'Pizza',
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
    food: 'HotDog',
  },
  {
    name: 'Lucia',
    food: 'Hamburguesa',
  },
];

const list_container = document.getElementById('list_container');
const reduce_container = document.getElementById('reduce_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map((element) => {
  return `<li>${element.name} - ${element.food}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

//Reducción del array de orders a un solo valor "objeto" con las cantidades de comida
const rta1 = orders.reduce((objeto, item) => {
  if (!objeto[item.food]) {
    objeto[item.food] = 1;
  } else {
    objeto[item.food]++;
  }
  return objeto;
}, {});

//Visualización de rta1
console.log('Array con N° de comidas: ', rta1);

//Convertir el objeto rta1 en un array de arrays
const rta2 = Object.entries(rta1);
console.log(rta2);

//Obtener los keys de rt1
const rta3 = Object.keys(rta1);
console.log(rta3);

//Obtener los values de rt1
const rta4 = Object.values(rta1);
console.log(rta4);

//Manipulación del DOM: (Modifica el DOM 1 vez)
