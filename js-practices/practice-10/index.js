//Ejemplo con array: Determinar si hay al menos un numero par
const numbers = [1, 2, 3, 4];

//Inicializando el valor rta (Suponemos que es falso)
let rta = false;

//Iterando el array con ciclo for
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}

//Visualización de rta en consola
console.log('Con ciclo for: ', rta);

//Iterando el array usando el metodo Some
const rta2 = numbers.some((item) => item % 2 === 0);

//Visualización de rta en consola
console.log('Con método Some: ', rta2);

//-----------------------------------------------------------------
//Ejemplo usando arrays de objetos
const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

//Prueba 1: ¿Alguna orden fue entregada?
const rta3 = orders.some((item) => item.delivered === true);

//Visualización de rta3 en consola
console.log('Alguna orden entregada: ', rta3);

//-----------------------------------------------------------------
//Ejemplo usando libreria de fechas
const dates = [
  {
    //Año - Mes - día - Hora - Minutos
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: 'Cita de trabajo',
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: 'Cita con mi jefe',
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: 'Cena',
  },
];

//Nueva cita de entrada a la función
const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

//Libreria date-fns
var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverLapping = (newDate) => {
  return dates.some((item) => {
    return areIntervalsOverlapping(
      { start: item.startDate, end: item.endDate },
      { start: newDate.startDate, end: newDate.endDate },
    );
  });
};

//Llamada de la función
const rta4 = isOverLapping(newAppointment);

//Visualización de datos
console.log('Se sobrepone la cita: ', rta4);
