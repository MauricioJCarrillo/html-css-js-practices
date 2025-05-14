//Ejemplo usando arrays de datos
const orders = [
	{
		name: "Nicolas",
		food: "Hamburguesa",
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
const includes_container = document.getElementById('includes_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map(element => {
    return `<li>${element.name} - ${element.food}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

//Iteración del array orders, (No recibe un arrow function, solamente el string a buscar)
const rta1 = orders[0].food.includes('Hamburguesa');

//Visualización de la respuesta en consola
console.log('¿El pedido 1, pidió Hamburguesa?: ', rta1);

//Manipulación del DOM: (Modifica el DOM 1 vez)
includes_container.innerHTML = rta1;