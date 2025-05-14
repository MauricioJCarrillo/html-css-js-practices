//Ejemplo con array: Separar cada elemento por --.
const elements = ['Fire', 'Air', 'Water'];

//Inicializando el valor rta
let rta = '';
let separador = '--';

//Iterando el array con ciclo for
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  if (index === elements.length - 1) {
    rta = rta + element;
  } else rta = rta + element + separador;
}

//Visualización de rta en consola
console.log('Con ciclo for: ', rta);

//Iterando el array usando el metodo Join (Recibe el patron de separación).
const rta2 = elements.join('--');

//Visualización de rta2 en consola
console.log('Con método Join: ', rta2);

//------------------------------------------------------------------------
//Ejemplo usando método split (Separa el string por un patron de separación).
const title = 'Curso de manipulación de arrays';

//Separación del String usando el metodo Split, con patron de separación ' ' (Espacio).
const rta3 = title.split(' ');

//Visualización de rta3 en consola
console.log('Con método Split: ', rta3);

//Unión del string previamente separado, usando el patron ('-').
const rta4 = rta3.join('-');

//Visualización de rta4 en consola
console.log('Con método Join: ', rta4);

//Se pueden concatenar los metodos:
const rta5 = title.split(' ').join('-').toLowerCase();

//Visualización de rta4 en consola
console.log('Con métodos concatenados: ', rta5);
