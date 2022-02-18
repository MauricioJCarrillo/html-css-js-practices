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
const search_container = document.getElementById('search_container');

//Ejemplo de transformación de nuevo array agregando strings
const list = products.map(element => {
    return `<li>${element.title} - $ ${element.price}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
list_container.innerHTML = list.join('');

// Filtrar si hay un string dado por el usuario que contenga algún customerName
const rta1 = products.reduce((acumulador, item ) => acumulador + item.price, 0)
console.log('Valor acumulado: ', rta1);

//Manipulación del DOM: (Modifica el DOM 1 vez)
search_container.innerHTML = `<li>${rta1}</li>`;


