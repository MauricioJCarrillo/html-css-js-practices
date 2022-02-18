const products = [
    {
        title: 'Hamburguer',
        price: 121
    },
    {
        title: 'Pizza',
        price: 20
    },
    {
        title: 'Hot dog',
        price: 60
    }
];

const list_container = document.getElementById('list_container');
const input = document.getElementById('input');
const search_container = document.getElementById('search_container');

//Ejemsplo de transformación de nuevo array agregando strings
const list = products.map(element => {
    return `<li>${element.title}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

// Filtrar si hay un string dado por el usuario que contenga algún customerName
const search = (query) => {
    console.log('Este es el query: ', query);
	return  products.filter(item => {
		return item.title.includes(query)
	})
}

//Funció llamada si hay algún valor en el input
function functionFilter(query) {
    const rta3 = search(query);
    console.log("Array modificado 3: ", rta3);

    const list1 = rta3.map(item => {
        return `<li>${item.title}</li>`;
    });

    console.log("Array modificado 4: ", list1);

    //Manipulación del DOM: (Modifica el DOM 1 vez)
    search_container.innerHTML = list1.join('');
}

