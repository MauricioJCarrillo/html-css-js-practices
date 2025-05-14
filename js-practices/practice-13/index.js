//Ejemplo con array: Determinar si hay un string dog en el array
const pets = ['cat', 'dog', 'bat'];

//Inicializando el valor rta (Suponemos que no esta = false)
let rta = false;

//Iterando el array con ciclo for
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'dog') {
    rta = true;
    break;
  }
}

//Visualización de rta en consola
console.log('Con ciclo for: ', rta);

//Iterando el array usando el metodo includes (No recibe un arrow function, solamente el string a buscar)
const rta2 = pets.includes('dog');

//Visualización de rta en consola
console.log('Con método Includes: ', rta2);
