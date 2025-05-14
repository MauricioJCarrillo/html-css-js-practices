//Ejemplo con array
const items = [8, 1, 3, 2, 3, 3, 8, 8, 8, 10];

//Reducir a un solo valor "objeto" para determinar la cantidad de veces que se repite cada numero
const rta1 = items.reduce((objeto, item) => {
	if(!objeto[item]) {
		objeto[item] = 1;
	} else {
		objeto[item] ++;
	}
	return objeto;
}, {});

//Visualización de rta1
console.log('Nuevo array: ', rta1);

//-----------------------------------------------------------------
//Ejemplo usando arrays de datos
const data = [
	{
		name: "Nicolas",
		level: "low",
	},
	{
		name: "Andrea",
		level: "medium",
	},
	{
		name: "Zulema",
		level: "hight",
	},
	{
		name: "Santiago",
		level: "low",
	},
	{
		name: "Valentina",
		level: "medium",
	},
	{
		name: "Lucia",
		level: "hight",
	},
];

const rta2 = data.reduce((objeto, item) => {
	if(!objeto[item.level]) {
		objeto[item.level] = 1;
	} else {
		objeto[item.level] ++;
	}
	return objeto;
}, {});

//Visualización de rta2
console.log('Nuevo array: ', rta2);
