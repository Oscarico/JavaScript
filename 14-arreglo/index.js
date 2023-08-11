// Arrays - es una lista ordenada de valores
// Cada valor se denomina elemento especificado por un indice
// Una matriz puede tener valores tipo mixto (number, string, boolean, null)
// E tamaño de una matriz es dinamico y de crecimiento automatico
/**
 * index --- 0--1-----2------3-----4
 *           1  2  "three"  true  null
 */          

// Creacion de matrices JavaScript
// Js proporciona 2 formas de crear una matriz

// primera forma
let scores = new Array(); // Esta vacia
console.log(scores); // []

// Si se conoce el numero de elementos se define con un tamaño inicial
let scores2 = new Array(10); // Tamaño inicial de 10
console.log(scores2); // [ <10 empty items> ]

// Para crear una matriz e inicializarla, se pasan con elementos separados por ","
// Esto crea una matriz con un tamaño inicial
let scores3 = new Array(9, 10, 8, 7, 6); // 5 elementos - tamaño inicial
console.log(scores3); // [ 9, 10, 8, 7, 6 ]

// cuando se pasa un alor de otro tipo se cra una matrid de ese valor
let athletes = new Array(3); // Crea un array con un tamaño inicial de 3
console.log(athletes); // [ <3 empty items> ]
let scope = new Array(1, 2, 3); // Crea un arreglo con 3 numeros
console.log(scope); // [ 1, 2, 3 ]
let sign = new Array('Red'); // Crea un array con un elemento tipo string
console.log(sign); // [ 'Red' ]

// Js permite omitir el operador nre cuando se utiliza Array()
let artist = Array(); 
console.log(artist); // []
// En la practica rara vez se usara el constructor array() para contruir una matriz

// Segunda forma - forma preferida de crear una matriz
// let arrayName = [element1, element2, element3, ...];
// Forma literal
// Crear una matriz vacia
let emptyArray = [];
console.log(emptyArray); 
// Crear matriz con elementos
let colors = ['red', 'green', 'blue'];
console.log(colors); // [ 'red', 'green', 'blue' ]

// Acceso a elementos de matriz - arrayName[index];
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // Everest
console.log(mountains[1]); // Fuji
console.log(mountains[2]); // Nanga Parbat
console.log(mountains); // [ 'Everest', 'Fuji', 'Nanga Parbat' ]

// Cambiar valor de un elemento
let mountains2 = ['Everest', 'Fuji', 'Nanga Parbat'];
mountains2[2] = 'K2';
console.log(mountains2); // [ 'Everest', 'Fuji', 'K2' ]

// Obtener tamalo de arreglo - .length
let mountains3 = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains3.length); // 3

// Operaciones basicas en arreglos
/**
 * map()
 * filter()
 * reduce()
 */

// Agregar un nuevo elemento al final - push()
let seas = ['Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas); // [ 'Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea' ]
seas.push('Red Sea');
console.log(seas); // [ 'Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]

// Agregar un elemento al principio - unshift()
let seas2 = ['Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas2); // [ 'Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea' ]
seas2.unshift('Red sea');
console.log(seas2); // [ 'Red sea', 'Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea' ]

// Eliminar un elemento del final - pop()
let seas3 = ['Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas3); // [ 'Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea' ]
const lastElement = seas3.pop();
console.log(lastElement); // Baltic Sea

// Eliminar un elemento del principio - shift()
let seas4 = ['Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas4); // [ 'Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea' ]
const firsElement = seas4.shift();
console.log(firsElement); // Black Sea

// Encontrar un índice de un elemento - indexOf()
let seas5 = ['Black Sea', 'Caibbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas5.indexOf('North Sea');
console.log(index); // 2