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

//Ejemplo de transformación de nuevo array agregando el atributo quantity en cada objeto
const list = products.map(element => {
    return {
        ...element,
        quantity: 2,
    };
});

//Ejemplo de transformación de nuevo array agregando strings
const list1 = list.map(element => {
    return `<li>${element.title} - ${element.price} - ${element.quantity}</li>`;
});

//Manipulación del DOM: (Modifica el DOM 1 vez)
app.innerHTML = list1.join('');