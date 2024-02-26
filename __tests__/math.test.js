/* let { mul, sum, res } = require("../math.js");

describe('Quiero probar estas funciones', ()=>{

    test('Quiero probar la suma de 2 números', () =>{
      expect(sum(1, 1)).toBe(2);
    });
    test('Quiero probar la multiplicacion de 2 números', () =>{
      expect(mul(5, 2)).toBe(10);
    });
    test('Quiero probar la resta de 2 números', () =>{
        expect(res(10, 2)).toBe(8);
      });

}); */

test("One euro should be 1.07 dollars", function() {
  // Importo la funcion desde app.js
  const { fromEuroToDollar } = require('../math.js');

  // Uso la función como debe ser usada
  const dollars = fromEuroToDollar(3.5);

  // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
  const expected = 3.5 * 1.07;

  // Hago mi comparación (la prueba)
  expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})



test("One euro should be 156.5 Yen", function() {
  // Importo la funcion desde app.js
  const { fromDollarToYen } = require('../math.js');

  // Uso la función como debe ser usada
  const dollars = fromDollarToYen(20);

  // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
  const expected = 20 * 156.5;

  // Hago mi comparación (la prueba)
  expect(fromDollarToYen(20)).toBe(3130); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One euro should be 156.5 Yen", function() {
  // Importo la funcion desde app.js
  const { fromYenToPound } = require('../math.js');

  // Uso la función como debe ser usada
  const pounds = fromYenToPound(20);

  // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
  const expected = 20 / 0.8;

  // Hago mi comparación (la prueba)
  expect(fromYenToPound(20)).toBe(25); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})