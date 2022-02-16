/*Para usar con node.js en la consola*/
/*let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;*/
let API = 'https://rickandmortyapi.com/api/character/';

let input_id_character = document.getElementById("input_id_character");
let mayor_a_zero = document.getElementById("mayor_a_zero");
let characters_id = document.getElementById("characters_id");
let num_id = document.getElementById("num_id");
let name_id = document.getElementById("name_id");
let status_id = document.getElementById("status_id");
let species_id = document.getElementById("species_id");
let gender_id = document.getElementById("gender_id");
let dimension_id = document.getElementById("dimension_id");

const apiRequest = async (url_api, id) => {
    try {
        //Forma de hacer el request con await en la respuesta json().
        let data1 = await fetch(url_api);
        data1 = await data1.json();
        console.log(data1.info.count);
        characters_id.innerText = data1.info.count;

        //Forma de hacer el request con .then en la respuesta json()
        const data2 = await fetch(url_api + data1.results[id-1].id).then(res => res.json());
        console.log(data2.id);
        console.log(data2.name);
        console.log(data2.status);
        console.log(data2.species);
        console.log(data2.gender);
        num_id.innerText = data2.id;
        name_id.innerText = data2.name;
        status_id.innerText = data2.status;
        species_id.innerText = data2.species;
        gender_id.innerText = data2.gender;

        const data3 = await fetch(data2.origin.url).then(res => res.json());;
        console.log(data3.dimension);
        dimension_id.innerText = data3.dimension;
    }
    catch (error) {
        console.error(error);
    }
}

function inputID() {
    let value_id_character = Number(input_id_character.value);
    if(value_id_character > 0 && value_id_character < 21 ) {
        mayor_a_zero.innerText = '';
        apiRequest(API, value_id_character);
    }
    else {
        mayor_a_zero.innerText = 'Ingrese un numero mayor a 0 y menor a 21';
        characters_id.innerText = '';
        num_id.innerText = '';
        name_id.innerText = '';
        status_id.innerText = '';
        species_id.innerText = '';
        gender_id.innerText = '';
        dimension_id.innerText = '';
    }
}