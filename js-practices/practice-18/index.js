//Ejemplo usando arrays de meses: Ordenarlo dependiendo de su orden de calendario
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

//Ejemplo numeros: Ordenarlo de menor a mayor y de mayor a menor
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers);

//Ejemplo con las palabras con caracteres especiales: Ordenarlo alfabeticamente
const words = [
  'réservé',
  'premier',
  'communiqué',
  'café',
  'adieu',
  'éclair',
  'banana',
];
words.sort((a, b) => a.localeCompare(b));
console.log(words);

//Ejemplo con objetos:
const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: new Date(2022, 1, 22),
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2022, 1, 20),
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: new Date(2022, 1, 15),
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(2022, 1, 10),
  },
];

orders.sort((a, b) => b.total - a.total);
console.log('Orden según el total: ', orders);

orders.sort((a, b) => b.date - a.date);
console.log('Orden según fecha mas recinte: ', orders);
