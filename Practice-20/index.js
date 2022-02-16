//Ejercicio con la operación Suma

//Esta es la función callback
function sum(num1, num2) {
    return num1 + num2;
}

//Esta es la función principal (Función de orden superior) que tiene como parámetro un callback
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

//Llamado de la función principal (Función de orden superior) con callback como argumento
console.log(calc(6, 2, sum));

//-----------------------------------------------------------
//Ejercicio con fechas

//Esta es la función callback
function printDate(dateNow) {
    console.log(dateNow);
}

//Esta es la función principal (Función de orden superior) que tiene como parámetro un callback
function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000);
}

//Llamado de la función principal (Función de orden superior) con callback como argumento
date(printDate);




