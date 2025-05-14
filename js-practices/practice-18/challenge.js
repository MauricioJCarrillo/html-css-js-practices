//Ejemplo usando arrays de datos
const orders = [
  {
    name: 'Andrea',
    food: 'Hamburguesa',
    price: 300,
  },
  {
    name: 'Zulema',
    food: 'Hot Dog',
    price: 200,
  },
  {
    name: 'Santiago',
    food: 'Pizza',
    price: 250,
  },
  {
    name: 'Nicolas',
    food: 'Pizza',
    price: 500,
  },
  {
    name: 'Valentina',
    food: 'Empanada',
    price: 150,
  },
  {
    name: 'Lucia',
    food: 'Jugo de Mora',
    price: 100,
  },
];

const list_container = document.getElementById('list_container');
const sort_container = document.getElementById('sort_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map(
  (element) => `<li>${element.name} - ${element.food} - ${element.price}</li>`,
);
console.log('List', list);
list_container.innerHTML = list.join('');

//Ordenamos los objetos de mayor amenor según el precio y transformamos a elementos <li>
const listaOrdenada = orders
  .sort((a, b) => b.price - a.price)
  .map((item) => `<li>${item.name} - ${item.food} - ${item.price}</li>`);
console.log('Lista ordenada: ', listaOrdenada);
sort_container.innerHTML = listaOrdenada.join('');
