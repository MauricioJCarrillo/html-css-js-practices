//Ejemplo usando arrays de datos
const orders = [
  {
    name: 'Nicolas',
    food: 'Pizza',
    sauces: ['Ketchup', 'Mustard'],
  },
  {
    name: 'Andrea',
    food: 'Hamburguesa',
    sauces: ['Mustard', 'Mayonnaise'],
  },
  {
    name: 'Zulema',
    food: 'Pizza',
    sauces: ['Mayonnaise', 'Pineapple'],
  },
  {
    name: 'Santiago',
    food: 'Pizza',
    sauces: ['Ketchup', 'Pineapple'],
  },
  {
    name: 'Valentina',
    food: 'Hamburguesa',
    sauces: ['Ketchup', 'Mayonnaise'],
  },
  {
    name: 'Lucia',
    food: 'Pizza',
    sauces: ['Mayonnaise', 'Pineapple'],
  },
];

const list_container = document.getElementById('list_container');
const flatMap_container = document.getElementById('flatMap_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map((element) => {
  return `<li>${element.name} - ${element.food} - Sauces: ${element.sauces[0]} and ${element.sauces[1]}</li>`;
});
console.log('List', list);

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

//Transformamos el array a solo los valores de sauces
const rta1 = orders.map((item) => item.sauces);
console.log('Array de sauces: ', rta1);

const rta2 = rta1.flat().map((item) => `<li>${item}<li>`);
console.log('Flat array de sauces: ', rta2);

//Manipulación del DOM: (Modifica el DOM 1 vez)
flatMap_container.innerHTML = rta2.join('');
