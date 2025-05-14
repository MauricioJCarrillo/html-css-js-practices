//Ejemplo con array: Determinar si todos los numeros son menores a 40
const numbers = [1, 30, 49, 29, 10, 13];

//Inicializando el valor rta (Suponemos que es true)
let rta = true;

//Iterando el array con ciclo for
for (let index = 0; index < numbers.length; index++) {
	const element = numbers[index];
	if(element >= 40) {
		rta = false;
		break;
	}
}

//Visualización de rta en consola
console.log('Con ciclo for: ', rta);

//Iterando el array usando el metodo Every con las condición que deben cumplir los elementos
const rta2 = numbers.every(item => item <= 40);

//Visualización de rta en consola
console.log('Con método Every: ', rta2);

//-----------------------------------------------------------------
//Ejemplo usando arrays de objeto - Todos deben ser menores de 15 años
const team = [
	{
		name: "Nicolas",
		age: 12,
	},
	{
		name: "Andrea",
		age: 8,
	},
	{
		name: "Zulema",
		age: 2,
	},
	{
		name: "Santiago",
		age: 14,
	},
];

//Iterando el array con el metodo every
const rta3 = team.every(item => item.age < 15);

//Visualización de rta3 en consola
console.log('¿Menores de 15 años?', rta3);