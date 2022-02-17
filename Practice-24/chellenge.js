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

//Ejemplo de iteración de cada elemento usando el metodo map y transformando cada elemento para colocarlo en un nuevo array.
const list = products.map(element => {
    return `<li>${element.title} - ${element.price}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
app.innerHTML = list.join('');