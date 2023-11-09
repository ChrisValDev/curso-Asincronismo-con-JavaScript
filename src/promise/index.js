const promise = new Promise(function (resolve, reject) {
    resolve('Se ha realizado correctamente la tarea')
})

const cows = 11;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject('There is no cows on the farm');
    }
})

countCows.then((result) => { // .then() captura la respuesta del result
    console.log(result);
}).catch((error) => { // .cath() captura la respuesta de reject
    console.log(error);
}).finally(() => console.log('Finally'));