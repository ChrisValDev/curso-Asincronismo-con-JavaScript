function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(5, 8, sum));

setTimeout(function() {
    console.log("Hola JavaScript con setTimeout");
}, 4000)

function greeting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 4000, 'Christopher');