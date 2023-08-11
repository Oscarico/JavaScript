/** Variables - es una etiqueta que hace referencia a un valor
 * Solo pueden contener letras, numeros, guiones o signos de dolar y no contienen espacios
 * den de comenzar con una letra (a-z, A,Z), guion bajo (_) o signo de dolar ($)
 * no se pueden utilizar palabras reservadas
 * se usa camelCase
 */
// Declaracion de variable con var - antes
var message;
var Message;
var yourVariable;
var myName;

// A partir de ES6 se usa let
// Declarar una variable
let message1;
// Inicializar una variable
message1 = "Hello";
console.log(message1); // Hello

// Declarar e inicializar una variable
let message2 = "Hello";
console.log(message2); // Hello

// Declarar dos o mas variables en una sola instruccion
let message3 = 'Hello',
    counter = 100;
console.log(message3); // Hello
console.log(counter); // 100

// Cambio de tipo de dato en variable
let message4 = "Hello";
console.log(message4); // Hello
message4 = 100;
console.log(message4); // 100

// Variables no definidas y variables no declaradas
//Variable no definida - se declara pero no se inicializa
let message5;
console.log(message5); // undefined
// Variable no declarada
console.log(counter2); // ReferenceError: counter2 is not defined

// Constantes - contiene un valor que no cambia - const - solo lectura
const workday = 5;
console.log(workday); // 5
// workday = 2; - Uncaught TypeError: Assignment to constant variable.
