//Ejemplo usando arrays de datos
const orders = [
  {
    name: 'Nicolas',
    food: 'Pizza',
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
    food: 'HotDog',
  },
];

const list_container = document.getElementById('list_container');
const some_container = document.getElementById('some_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map((element) => {
  return `<li>${element.name} - ${element.food}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

//Iteración del array orders para determinar si alguien pidió Hamburguesa
const rta1 = orders.some((item) => item.food === 'Hamburguesa');

//Visualización de la respuesta en consola
console.log('¿Alguién pidió Hamburguesa?', rta1);

//Manipulación del DOM: (Modifica el DOM 1 vez)
some_container.innerHTML = rta1;
