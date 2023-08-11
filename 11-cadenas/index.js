// Cadenas - Strings
// Son valores primitivos, son inmutables
// Se usan comillas simples ('') o comillas dobles ("")
let str = 'Hi';
let greeting = "Hello";
console.log(str); // Hi
console.log(greeting); // Hello

// ES6 introdujo las literales de plantilla - permitendrinir una cadena usando (``)
let name = `John`;
console.log(name); // John

// Los literales de plantilla le permiten usar las comillas simples y dobles sin salir de ellas
let message = `"I'm good". She said`;
console.log(message); // "I´m good". She said

// Interpolacion de cadenas
// Se pueden colocar variables y expresiones dentro de un literal de plantilla
// Js resmplazara las variables con su valor de cadena
let name2 = 'John';
let message2 = `Hi, I'm ${name2}.`;
console.log(message2); // Hi, I´m John.

// Caracteres especiales
// Para escapar de caracteres especiales se usa "\"
/**
 * Salto de linea Windows '\r\n'
 * Salto de linea Unix '\n'
 * Pestaña '\t'
 * Barra invertida '\'
 */
// usando "\" para escapar del caracyer de comillas simples
let str2 = 'I\'m a string';
console.log(str2); // I'm a string

// Longitud de cadena - usando "length"
let str3 = "Good Morning!";
console.log(str3.length); // 13

// Accediendo a characters - usando "[]"
let str4 = "Hello";
console.log(str4[0]); // H
// Acceder a ultimo caracter de cadena - "length - 1"
let str5 = "Hello";
console.log(str5[str5.length - 1]); // o
// Acceder al ultimo caracter de cadena - "[]"
console.log(str4[4]); // o

// Concatenar cadenas - operador +
let name3 = 'John';
let str6 = 'Hello ' + name3;
console.log(str6); // Hello John
// Ensamblar una cadena pieza por pieza - "+="
let className = 'btn';
console.log(className); // btn
className += ' btn-primary';
console.log(className); // btn btn-primary
className += ' none';
console.log(className); // btn btn-primary none
// "+=" es igal a variable = variable + variable
let className2 = 'btn';
console.log(className2); // btn
className2 = className2 + ' btn-primary';
console.log(className2); // btn btn-primary
className2 = className2 + ' none';
console.log(className2); // btn btn-primary none

// Conversion de valores en cadena - no funciona para undefinded y null
/**
 * String(n);
 * "" + n
 * n.toString();
 */
// Si se convierte una cadena a booleana no se puede volver a convertir
let status2 = false;
let str7 = status2.toString();
console.log(str7); // false
let back = Boolean(str7);
console.log(back); // true

// Comparacion de cadenas 
/**
 * >
 * >=
 * <
 * <=
 * ==
 */
// Estan basados en los valores numericos de los caracteres
let result = 'a' < 'b';
console.log(result); // true
// Puede devolver el orden de las cadenas que es diferente en los diccionarios
let result2 = 'a' < 'B';
console.log(result2); // False