//Ejemplo con array
const totals = [1, 2, 3, 4, 5];

//Valor del acumulador
let sum = 0;

//Reducir a un solo valor utilizando el ciclo for
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}

//Visualización de datos en consola
console.log('Suma con for: ', sum);

//Reducir a un solo valor utilizando el Método Reduce
const rta1 = totals.reduce((sum1, item) => sum1 + item, 0);
console.log('Suma con reduce: ', rta1);
