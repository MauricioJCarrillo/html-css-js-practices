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
	}
];

const newOrder = [
	{
		name: "Mauricio",
		food: "Hot Dog",
	},
	{
		name: "Diego",
		food: "Hot Dog",
	}
];

const list_container = document.getElementById('list_container');
const newList_container = document.getElementById('newList_container');
const concat_container = document.getElementById('concat_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = orders.map(element => {
    return `<li>${element.name} - ${element.food}</li>`;
});
console.log('List', list);

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

//Transformando el array de newOrder para agregarle las etiquetas <li></li>
const newList = newOrder.map(item => `<li>${item.name} - ${item.food}</li>`);
console.log('Nueva lista', newList);

//Manipulación del DOM: (Modifica el DOM 1 vez)
newList_container.innerHTML = newList.join('');

//Concatenación de orders y newOrder
const rta1 = orders.concat(newOrder);

//Visualización de rta1 en consola
console.log('Array concantenado : ', rta1);

//Transformando el array concatenado rta1 en elementos <li></li>
const concatList = rta1.map(item => `<li>${item.name} - ${item.food}</li>`);

//Modificación del DOM
concat_container.innerHTML = concatList.join('');

