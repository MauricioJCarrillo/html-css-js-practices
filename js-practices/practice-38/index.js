//Ejemplo 1
function asin(valor) {
  // declaración de la promesa.
  return new Promise((resolve, reject) => {
    //se valida que el parámetro cumpla las condiciones
    if ((typeof valor == 'number') & (valor % 2 === 0)) {
      console.log('Es un número par:', valor);
      let potencia = Math.pow(valor, 2); // Esta sería la petición al servidor
      resolve(potencia);
    }
    //si no se cumple la condición se manda un error.
    else {
      let error = new Error(`Error de ejecución. Valor era: ${valor}`);
      reject(error);
    }
  });
}

//========== Consiguiendo las respuestas ==========//
let numbers = ['Buenas', 2, 3, 4, 5, 6];
for (let index = 0; index < numbers.length; index++) {
  asin(numbers[index])
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.error(error));
}

//Ejemplo 2
//ejemplo de contar vacas
const cows = 25; //valor inicial de vacas

const countCows = new Promise(function (resolve, reject) {
  //solo si el número de vacas supera 10, se llama al resolve
  //de lo contrario: se llama a reject
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject('There is no cows on the farm');
  }
});

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('Finally'));

//Ejemplo 3
