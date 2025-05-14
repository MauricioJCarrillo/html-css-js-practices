//Ejercicio 1:
//Estructura de una promesa
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
			? setTimeout(() => resolve('Do something async'), 3000)
			: reject(new Error('Ups! Hubo un error'));
    });
}

//Resultado de la promesa usando async / await --> Reemplaza al .then
const doSomething = async () => {
	const something = await doSomethingAsync();
	console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

//Resultado de la promesa usando async / await y con Try / Catch
const anotherFunction = async () => {
	try {
		const something = await doSomethingAsync();
		console.log(something);
	}
	catch (error) {
		console.error(error);
	}
}

console.log('Before 2');
anotherFunction();
console.log('After 2');