//Ejemplo de array
const letters = ['a', 'b', 'c'];

//Ejemplo de iteración de cada elemento usando el ciclo for
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('Usando for', element);
}

//Ejemplo de iteración de cada elemento usando el método forEach
letters.forEach((element) => console.log('Usando forEach', element));
