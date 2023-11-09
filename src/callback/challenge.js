const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // XMLHttpRequest objeto con diversas propiedades.
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); // Instancia

    xhttp.open('GET', urlApi, true); // .open() abre una conexion a la API
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { // readyState 4 = Completed, hay 5 estados de 0 a 4.  
            if (xhttp.status === 200) { // status 200 - 299 = Respuestas satisfactorias, hay mas status
                callback(null, JSON.parse(xhttp.responseText)); // Recibir lo que entrege el servidor en string como objeto.
            } else {
                const error = new Error('Error', urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send(); // Enviar
}

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log('data1', data1[0]);
            console.log('data2', data2.title);
            console.log('data3', data3.name);
        }) 
    })    
});