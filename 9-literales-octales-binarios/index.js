// Literales Octales y Binarios
// ES5 agrego literales numéricos en octal (prefijo), decimal (sin prefijo) y Hexadecimal

/* Literales octales - (0- 7) */
// para representar una literal octal en ES5 se utiliza el prefijo 0
let a = 0o51;
console.log(a); // 41

// Si el literal octal coniene un número que esta fuera del intervalo, js lo interpreta como decimal
let b = 58; // invalid octal - 8 no es un numero valido 
console.log(b); // 58

// Se pueden usar los literales octales en modo no estricto
// Si se usa en modo estricto arrojara error
//"use strict"
//let c = 058; //invalid octal
//console.log(c); // SyntaxError: Decimals with leading zeros are not allowed in strict mode.

// ES6 permite el literal octal usando 0o
let d = 0o51;
console.log(d); // 41
// Si se usa un numero no valido arrogara erroe
//let e = 058;
//console.log(e); // SyntaxError

/* Literales binarios */
// En ES5 no proporciono una forma literal para los números binarios
//para analizar una cadena binaria se usa parseInt()
let f = parseInt('111', 2);
console.log(f); // 7

// ES6 agrego soporte para literales binarios usando el prefijo 0b seguido de una serie de numeros binarios (0, 1)
let g = 0b111;
console.log(g); // 7