//Ejemplo usando arrays de datos
const orders = [
	{
		name: "Nicolas",
		food: "Pizza",
	},
	{
		name: "Andrea",
		food: "Hamburguesa",
	},
	{
		name: "Zulema",
		food: "Pizza",
	},
	{
		name: "Santiago",
		food: "Pizza",
	},
	{
		name: "Valentina",
		food: "Hamburguesa",
	},
	{
		name: "Lucia",
		food: "Pizza",
	},
];

const list_container = document.getElementById('list_container');
const join_container = document.getElementById('join_container');
const split_container = document.getElementById('split_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map(element => {
    return `<li>${element.name} - ${element.food}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

//Iteración del array orders para obtener array de nombres
const rta1 = orders.map(item => item.name);

//Visualización de rta1 en consola
console.log('Lista de nombres: ', rta1);

//Unión de los strings de la lista de nombres (rta1)
const rta2 = rta1.join(' - ');

//Visualización de rta2 en consola
console.log('Nombres unidos con - : ', rta2);

//Manipulación del DOM: (Modifica el DOM 1 vez)
join_container.innerHTML = `<li>${rta2}</li>`;

//-----------------------------------------------------------------------
//Separar las letras de la palabra Hamburguesa y unirlas con -

//Buscamos la palabra Hamburguesa en el array de 'orders'
const rta3 = orders.find(item => item.food === 'Hamburguesa');

//Visualización de la respuesta rta3 en consola
console.log('La encontramos! ', rta3);

//Separación de la palabra Hamburguesa
const rta4 = rta3.food.split('');

//Visualización de la respuesta rta4 en consola
console.log('Letras separadas: ', rta4);

//Unión de las letras por medio del patron (' - ').
const rta5 = rta4.join(' - ');

//Visualización de la respuesta rta4 en consola
console.log('Letras unidas con - : ', rta5);

//Manipulación del DOM: (Modifica el DOM 1 vez)
split_container.innerHTML = rta5;