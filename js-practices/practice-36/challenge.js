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

const updateOrder = [
  {
    name: 'Zulema',
    food: 'Hamburguesa',
  },
  {
    name: 'Santiago',
    food: 'Hot Dog',
  },
];

const list_container = document.getElementById('list_container');
const updateOrder_container = document.getElementById('updateOrder_container');
const updated_container = document.getElementById('updated_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map(
  (element) => `<li>${element.name} - ${element.food}</li>`,
);
console.log('List', list);
list_container.innerHTML = list.join('');

//Transformamos a elementos <li> los obejtos de updateOrder
const listUpdateOrder = updateOrder.map(
  (item) => `<li>${item.name} - ${item.food}</li>`,
);
console.log('List update order: ', listUpdateOrder);
updateOrder_container.innerHTML = listUpdateOrder.join('');

//
const rta3 = orders.map((item) => {
  if (item.name === updateOrder[0].name) {
    item = { ...item, ...updateOrder[0] };
  }
  if (item.name === updateOrder[1].name) {
    item = { ...item, ...updateOrder[1] };
  }
  return `<li>${item.name} - ${item.food}</li>`;
});
console.log('Array modificado', rta3);
updated_container.innerHTML = rta3.join('');
