// FIZZBUZZ
/*
 * Múltiplos de 3 "fizz".
 * Múltiplos de 5 "buzz".
 * Múltiplos de 3 y de 5 a la vez "fizzbuzz".
 */

console.log("FIZZBUZZ");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}


// FIBONACCI
/*
 * Imprimir los 50 primeros números de la sucesión de Fibonacci empezando en 0
 *  sucesión de números en la que el siguiente siempre es la suma de los dos anteriores
 */

console.log("FIBONACCI");

let anterior = 0;
let actual = 1;

console.log(anterior);

for (let i = 1; i < 50; i++) {
  console.log(actual);
  let siguiente = anterior + actual;
  anterior = actual;
  actual = siguiente;
}

// INVERSIÓN DE CADENAS
/*
 * inviertir el orden de una cadena de texto
 * "Hola mundo" a "odnum aloH"
 */

console.log("INVERSIÓN DE CADENAS");

let cadena = "Hola mundo";
let resultado = "";

for (let i = cadena.length - 1; i >= 0; i--) {
  resultado = resultado + cadena[i];
}

console.log(resultado);
