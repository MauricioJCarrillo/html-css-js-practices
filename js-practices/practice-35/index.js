//Ejemplo con array de arrays: Conseguir el array completo de todos los atributos de los usuarios.
const users = [
	{ userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
	{ userId: 2, username: "Mike", attributes: ["Lovely"] },
	{ userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

//Acotamos el array a solo los valores de los atributos y luego lo aplanamos.
const rta1 = users.map(item => item.attributes).flat();
console.log('Map y flat: ', rta1);

//Acotamos el array a solo los valores de los atributos y luego lo aplanamos (De forma simultanea).
const rta2 = users.flatMap(item => item.attributes);
console.log('FlatMap: ', rta2);

//---------------------------------------------------------------
//Ejemplo con calendars: Obtener el array de las fechas de inicio de los apointments
const calendars = {
	primaryCalendar: [
		{
			startDate: new Date(2021, 1, 1, 15),
			endDate: new Date(2021, 1, 1, 15, 30),
			title: "Cita 1",
		},
		{
			startDate: new Date(2021, 1, 1, 17),
			endDate: new Date(2021, 1, 1, 18),
			title: "Cita 2",
		},
	],
	secondaryCalendar: [
		{
			startDate: new Date(2021, 1, 1, 12),
			endDate: new Date(2021, 1, 1, 12, 30),
			title: "Cita 2",
		},
		{
			startDate: new Date(2021, 1, 1, 9),
			endDate: new Date(2021, 1, 1, 10),
			title: "Cita 4",
		},
	],
};

//Obtenemos los valores de los atributos
const rta3 = Object.values(calendars);
console.log('Values de calendars: ', rta3);

//Aplanamos el array (1 nivel)
const rta4 = rta3.flat();
console.log('Aplanamiento de array: ', rta4);

//Transformamos el array con solo los elementos de StartDate
const rta5 = rta4.map(item => item.startDate);
console.log('Arrays de fechas de inicio: ', rta5);

//Solución usando FlatMap
const rta6 = Object.values(calendars).flatMap(item => {
	console.log('item', item);
	return item.map(date => date.startDate);
});
console.log('FlatMap de fechas de inicio: ', rta6);
