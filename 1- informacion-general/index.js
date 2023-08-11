// Definir una variable - antes
var x = 10;
var y = 20;
console.log(x); // 10
console.log(y); // 20

// Desde es6-2015 se implemento let
let x1 = 10;
let y1 = 20;
console.log(x1); //10
console.log(y1); // 20

// Declarar una funcion
function add(a, b) {
    return a + b;
}
// Llamar una funcion
let result = add(x1, y1);
// Mostrar resultado en consola
console.log(result); // 30

// Instrucciones de condicion
let a1 = 20;
let b1 = 30;
// Declarando funcion
function divide(a1, b1) {
    // Si el resultado de b es 0 se lanza una excepcion 
    if(b1 == 0) {
        throw 'Division by zero';
    }
    // Si no entonces divide
    return a1 / b1;
}
// Imprimir resultado
console.log(divide(a1, b1)); // 0.6666666666666666

// Declarar un array
//let item = [];
let items = [1, 2, 3];
//acceder al numero de elementos de array
console.log(items.length); // 3
// Iterar elementos de array con for
for(let i = 0; i < items.length; i++) {
    console.log(items[i]); // 1, 2, 3
}
// En es6 se declara for...of para iterar
for(let item of items) {
    console.log(item); // 1, 2, 3
}