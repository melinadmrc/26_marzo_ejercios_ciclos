// FIZZBUZZ


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


let cadena = "Hola mundo";
let resultado = "";

for (let i = cadena.length - 1; i >= 0; i--) {
  resultado = resultado + cadena[i];
}

console.log(resultado);
