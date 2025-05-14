/*Para usar con node.js en la consola*/
/*let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;*/
let API = 'https://rickandmortyapi.com/api/character/';

let input_nivel_max = document.getElementById('input_nivel_max');
let characters_id = document.getElementById('characters_id');
let num_id = document.getElementById('num_id');
let name_id = document.getElementById('name_id');
let status_id = document.getElementById('status_id');
let species_id = document.getElementById('species_id');
let gender_id = document.getElementById('gender_id');
let dimension_id = document.getElementById('dimension_id');

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error en ' + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

//Primera petición --> Obtención de lista de caracteres
fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  //Segunda petición --> Obtención de lista de personaje 1 (Posición 0).
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    //Tercera petición --> Obtención de lista del origen personaje 1 (Posición 0).
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      //Mostramos los resultados
      console.log(data1.info.count);
      console.log(data2.id);
      console.log(data2.name);
      console.log(data2.status);
      console.log(data2.species);
      console.log(data2.gender);
      console.log(data3.dimension);

      characters_id.innerText = data1.info.count;
      num_id.innerText = data2.id;
      name_id.innerText = data2.name;
      status_id.innerText = data2.status;
      species_id.innerText = data2.species;
      gender_id.innerText = data2.gender;
      dimension_id.innerText = data3.dimension;

      //Rutas de las peticiones en orden
      console.log(API);
      console.log(API + data1.results[0].id);
      console.log(data2.origin.url);
    });
  });
});
