//Ejercicio 1:
//Estructura de una promesa
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        } else {
            reject('Ups!');
        }
    });
}

//Metodos que son llamados dependiendo del resultado de la promesa
somethingWillHappen()
    .then(response => console.log(response))
	.catch(err => console.error(err));

//--------------------------------------------------------------
//Ejercicio 2:
//Estructura de una promesa
const somethingWillHappen2 = () => {
	return new Promise((resolve, reject) => {
		if(true) {
			setTimeout(() => resolve('Hey!'), 2000);
		} else {
			const error = new Error('Ups! Hubo algun error');
			reject(error);
		}
	});
}

somethingWillHappen2()
	.then(response => console.log(response))
	.catch(err => console.error(err));

//Promesas encadanedas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
	.then(response => console.log('Array of results', response))
	.catch(err => console.error(err));