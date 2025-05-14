//Ejemplo usando arrays de datos
const orders = [
	{
		name: "Nicolas",
		food: "Pizza",
	},
	{
		name: "Andrea",
		food: "Pizza",
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
		food: "Pizza",
	},
	{
		name: "Lucia",
		food: "Pizza",
	},
];

const list_container = document.getElementById('list_container');
const some_container = document.getElementById('some_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map(element => {
    return `<li>${element.name} - ${element.food}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

//Iteración del array orders para determinar si todos cumplen con la condición
const rta1 = orders.every(item => item.food === 'Pizza');

//Visualización de la respuesta en consola
console.log('¿Todos pidieron Pizza?: ', rta1);

//Manipulación del DOM: (Modifica el DOM 1 vez)
some_container.innerHTML = rta1;