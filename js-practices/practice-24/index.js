//Ejemplo de array
const letters = ['a', 'b', 'c'];

//Nuevo array
const newArray = [];

//Ejemplo de iteración de cada elemento usando el ciclo for y transformando cada elemento para colocarlo en un nuevo array
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + '++');
}

//Visualización de datos
console.log('Array original', letters);
console.log('Array nuevo con for', newArray);

//Ejemplo de iteración de cada elemento usando el metodo map y transformando cada elemento para colocarlo en un nuevo array.
const newArray2 = letters.map((element) => element + '++');

//Visualización de datos
console.log('Array original', letters);
console.log('Array nuevo con map', newArray2);

//-----------------------------------------------------------
//Ejercicio JavaScript 2018

let sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
};

let alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
};

let martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
};

let dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
};

let vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
};

let paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
};

let personas = [sacha, alan, martin, dario, vicky, paula];

let personaEnCmts = personas.map((item) => ({
  ...item,
  altura: item.altura * 100,
}));

console.log('Array original: ', personas);
console.log('Array modificado: ', personaEnCmts);
