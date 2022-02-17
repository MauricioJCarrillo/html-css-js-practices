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

const app = document.getElementById('app');

//Recorrido del array y manipulación del DOM: (Modifica el DOM 3 veces)
products.forEach(element => {
    app.innerHTML += `<li>${element.title} - ${element.price}</li>`;
});


