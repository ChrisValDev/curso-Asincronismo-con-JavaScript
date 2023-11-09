const XMLHttpRequest = require('xmlhttprequest'); // XMLHttpRequest objeto con diversas propiedades.
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); // Instancia

    xhttp.open('GET', urlApi, true); // .open() abre una conexion a la API
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { // readyState 4 = Completed, hay 5 estados de 0 a 4.  
            if (xhttp.status === 200) { // status 200 - 299 = Respuestas satisfactorias, hay mas status
                callback(null, JSON.parse(xhttp.responseText)); // Recibir lo que entrege el servidor en string como objeto.
            }
        } else {
            const error = new Error('Error', urlApi);
            return callback(error, null);
        }
    }
    xhttp.send(); // Enviar
}