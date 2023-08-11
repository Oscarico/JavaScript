// Number
// Js usa el tipo number desde IEE-754
// en ES2020 introdujo bigint - números mayores a 2^53-1
// Todos los numeros en Js son números de coma flotante

/* Numeros enteros*/
let counter = 100;
console.log(counter); // 100

/* Números octales */
// Represntados en Octales (base 8) y Hexadecimal ( base 16)
// Representados en numeros del 0 al 7, comenzando con el 0
let num = 0o71; // pdf dice 071 - error
console.log(num); // 57
// Si no contiene un numero entre 0 o 7 el motor ignora el 0 y lo trata como numero decimal
let num1 = 80; //  Pdf dice 080 - error
console.log(num1); // 80
// En ES6 se introdujo una nueva literal "0o"
let num2 = 0o71;
console.log(num2); // 57
// Si es numero no valido mostrara error
// let num1 = 0o80; - eror
// console.log(num1); // SyntaxError: Invalid or unexpected token

/* Números hexadecimales */
// Comienza con 0x o 0X, seguidos de numeros 0 al 9 y letras de a a la f
let num3 = 0x1a;
console.log(num3); // 26

/* Números de coma flotante */
//son números que incluyen .
let price = 9.99;
let tax = 0.08;
let discount = .05; // valido pero no recomendado
console.log(price); // 9.99
console.log(tax); // 0.08
console.log(discount); // 0.05
// Si se tiene un numero muy grande se puede usar la notacion electronica (E)
let amount = 5e-7;
console.log(amount); // 0.0000005 - 5e-7
// Js convierte automaticamente cualquier numero con almenos seis ceros en notacion electronica (E)
let amount2 = 0.0000005;
console.log(amount2); // 0.0000005 - 5e-7
// Los números decimales tienen una presicion de hasta 17 decimales
// Cuando se realizan operaciones aritmeticas, a menudo se obtienen resultados aproximados
let amount3 = 0.2 + 0.1;
console.log(amount3); // 0.30000000000000004

// Enteros Grandes (BigInt) - introducido en ES2022
// Almacena valores mayores que 2^53-1
// Un entero grande tiene el caracter n al final
let pageView = 9007199254740991n;
console.log(pageView); //9007199254740991n
