//Ejemplo con array de objetos: Obtener el producto de Hamburguesa y llevarlo a myProducts (carrito de compras)
const products = [
	{ title: "Pizza", price: 121, id: "🍕" },
	{ title: "Burger", price: 121, id: "🍔" },
	{ title: "Hot cakes", price: 121, id: "🥞" },
];

//Inicializamos myProducts
const myProducts = [];

//Buscamos el objeto la posición con ID de Hamburguesa
const rta1 = products.findIndex(item => item.id === '🍔')
console.log('Lo encontramos - Pos:  ', rta1);

if(rta1 !== -1) {
	myProducts.push(products[rta1]);
	products.splice(rta1, 1);
}
console.log('Products: ', products);
console.log('My products: ', myProducts);

//------------------------------------------------------------
//Ejemplo haciendo una actualización a products
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

//Ejemplo: Haciendo la actualización modificando el array principal
const rta2 = productsV2.findIndex(item => item.id === update.id);
productsV2[rta2] = {...productsV2[rta2], ...update.changes};
console.table('Array principal: ', productsV2);

//Ejemplo: Haciendo la actualización sin modificar el array principal
const rta3 = productsV2.map(item => {
	if(item.id === update.id) {
		item = {...item, ...update.changes};
	}
	return item;
});
console.log('Array modificado', rta3);
