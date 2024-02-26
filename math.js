/* function sum(n1,n2){
    let result = n1 + n2;
    return result;
}

function mul(n1,n2){
    let result = n1 * n2;
    return result;
}

function res(n1,n2){
    let result = n1 - n2;
    return result;
}

module.exports = {
    sum,
    mul,
    res,
} */

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Puedes tener seguridad de que 1 EUR es 1.07 USD:
// 1 EUR (Euro) = 1.07 USD (US Dollar)

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen / 0.8;
    // Retornamos el valor en dólares
    return valueInPound;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }