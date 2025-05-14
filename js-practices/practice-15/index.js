//Ejemplo con array: Concatenar ambos arrays.
const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

//Inicializamos Nuevo Array
const rta1 = [...elements];

//Iterando el array con ciclo for
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  rta1.push(element);
}

//Visualización de rta1 en consola
console.log('Con ciclo for: ', rta1);

//Concatenando el array elements con array otherElements
const rta2 = elements.concat(othersElements);

//Visualización de rta2 en consola
console.log('Con método Concat: ', rta2);

//Otra forma de hacer concatenación con spread operation
const rta3 = [...elements, ...othersElements];

//Visualización de rta3 en consola
console.log('Con spread operation: ', rta3);

//------------------------------------------------------------
//Ejemplo si se quiere modificar el array original
const numeros = [1, 2, 3, 4, 5];
const otrosNumeros = [6, 7, 8];

//Anexa el array entero 'otrosNumeros' a la ultima posición del array 'numeros'
numeros.push(otrosNumeros);
console.log('Array numeros: ', numeros);

//Anexa cada uno de los elementos del array 'otrosNumeros' a la ultima posición del array 'numeros'
numeros.push(...otrosNumeros);
console.log('Array numeros: ', numeros);
