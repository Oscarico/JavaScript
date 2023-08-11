// Tipos de datos en js
/** 
 * Datos primitivos
 * null
 * undefined
 * boolean
 * number
 * string
 * symbol - ES2015
 * bigint ES2020
 * 
 * Datos complejos
 * objeto
 */

//Tipado dinamico - una variable no se asocia con un tipo de dato
let counter = 120;
console.log(typeof counter); // number
counter = false;
console.log(typeof counter); // boolean
counter = "foo";
console.log(typeof counter); // string

// Obtener el tipo de valor que almacena la variable
let counter2 = 120;
console.log(typeof counter2); // number
counter2 = false
console.log(typeof counter2); // boolean
counter2 = "foo";
console.log(typeof counter2); // string

// Tipo indefinido (Undefined)
let counter3;
console.log(counter3); // undefined
console.log(typeof counter3); // undefined
console.log(typeof undeclaredVar); // undefined

// Tipo nulo (Null)
let obj = null;
console.log(typeof obj); // object
console.log(null == undefined); // false

// Tipo número (Number)
// Número entero
let num = 100;
console.log(num); // 100
// Número coma flotante
let price = 12.5;
let discount = 0.05;
console.log(price); // 12.5
console.log(discount); // 0.05
// Js convierte en entero un decimal si este parece un numero entero
let prices = 200.00 // intrepreted as an integer 200
console.log(prices); // 200
// Obtener el rango del tipo de dato número
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
// Se puede usar Infiniti para representar el número Infinito
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Indinity
console.log(-Number.MIN_VALUE - Number.MIN_VALUE); // -Infinity
// NaN - Not a Number - un valor numérico especial que indica un número no valido
console.log('a'/2); // NaN
// Cualquier operacion con NaN devuelve NaN
// NaN no es igual a ningun valor incluido el mismo NaN
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false

// Tipo cadena (string) - secuencia de cero o mas caracteres - comillas simples '' o comillas dobles ""
// Comilla simple
let greeting = 'Hi';
let message = "Bye";
console.log(greeting); // Hi
console.log(message); // Bye
// Usar comillas simples o dobles en una cadena literal usando \
let message2 = 'I\'m also a valid string' // use \ to escape the single quote (')
console.log(message2); // I'm also a valid string
// Las cadenas en js son inmutables - no se pueden modificar pero si se puede crear una nueva a partir de una existente
let str = 'JavaScript'; 
console.log(str); // JavaScript
str = str + ' String'; // JavaScript String
console.log(str); // JavaScript String
// Intentar cambiar caracter de cadena
let s = 'JavaScript';
s[0] = 'j';
console.log(s); // JavaScript

// Tipo booleano (boolean)
let inProgress = true;
console.log(inProgress); // true
let completed = false;
console.log(completed); // false
console.log(typeof inProgress); // boolean
console.log(typeof completed); // boolean
//convertir valores de otro tipo en booleanos
console.log(Boolean('Hi')); // true
console.log(Boolean('')); // false
console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false
console.log(Boolean({foo: 100})); // true on non-empty object
console.log(Boolean(null)); //false
// Cuando se evalua un objeto solo devuelve false si esta vacio
console.log(Boolean({})); // true
console.log(Boolean([0])); // true
//falsy (0, null, NaN, '') - buscar
//truthy - buscar
let usrLogon = true;
let profile = null;
if(Boolean(profile) === false) {
    console.log('Debes completar la informacion de tu perfil'); // Debes completar la informacion de tu perfil
} else {
    console.log('Gracias por completar tu perfil'); // Gracias por completar tu perfil
}

// Tipo simbolo (symbol) - ES6 - no tiene una forma literal
let s1 = Symbol();
// La funcion crea un nuevo valor unico cada vez que se llama
console.log(Symbol() == Symbol()); // false

// Tipo bigint - numeros enteros mayores a 2^53-1 agregando n al final
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // bigint

// Tipo Objeto (object) - coleccion de propiedade donde cada propiedad de define como clave-valor
// Objeto vacío
let emptyObject = {};
// Objeto con 2 propiedades
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person.firstName);
console.log(person.lastName);
//con comillas
let person2 = {
    "firstName": 'John',
    "lastName": 'Doe'
};
console.log(person2.firstName);
console.log(person2.lastName);
// Un objeto puede contener un objeto
let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example,com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
// Acceder a propiedad usando .
console.log(contact.firstName); // John
console.log(contact.lastName); // Doe
console.log(contact.address.city); // San Jose
// Si una propiedad no existe obtendra un valor
console.log(contact.age); // undefined
// Acceder a propiedad con []
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.dore@example.com'
console.log(contact['address']['city']); // San Jose
// Acceder a propiedades combinando . y []
console.log(contact.address['country']); // USA