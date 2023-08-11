// JavaScript Primitive vs. Reference Values
// Js tiene dos tipos diferentes de valores 
/**
 * Valores primitivos
 * Valores de referencia
 */

// Stack y heap memory
//Cuando se declara una variable el motor js le asigna la memoria en dos ubicaciones
// Stack(pila) y heap(cumulo)
// Los datos estaticos cuyo tamaño se fija en tiempo de compilacion
/**
 * valores primitivos ( null, indefined, boolean, number, string, symbol y BigInt)
 * valores de referencia: Hacen referencia a objetos
 */

// Stack
// Debido a que los datos estaticos tienen un tamaño que no cambia el motor js
// Asigna una cantidad fija de espacio de memoria a los datos estaticos y los almacena en la pila
let name = 'John';
let age = 25;
/**
 * --------------
 * |            |
 * --------------
 * |            |
 * --------------
 * |            |
 * --------------
 * |   age=25   |
 * --------------
 * | name="John"|
 * --------------
 */

// Heap
// A diferencia del stack, Js almacena objetos y funciones en el cumulo
// No asigna una cantidad fija de memoria para estos objetos
// Asigna mas espacio segun sea necesario
let name2 = 'John';
let age2 = 25;
let person = {
    name2: 'John',
    age: 25
};
/** Stack               Heap
 * --------------       ---------------------------------
 * |            |       |                               |
 * --------------       |   ---------------             |
 * |            |       |   |{name:"John",|             |
 * --------------       |   |age:25}      |             |
 * |            |       |   ---------------             |
 * --------------       |          |                    |
 * |   person   | ------|----------                     |
 * --------------       |                               |
 * |   age=25   |       |                               |
 * --------------       |                               |
 * | name:"John"|       |                               |
 * --------------       ---------------------------------
 */
// Js asigna en stack las 3 variables y asigna en el heap los datos del objeto asignandole una memoria mayor

// Propiedades dinamicas
// Un valor de referencia permite agregar, cambiar o eliminar propiedades en cualquier momento
let person2 = {
    name: 'John',
    age: 25
};
console.log(person2); // { name: 'John', age: 25 }
// Agregar propiedad ssn
person2.ssn = '123-45-6789'; 
console.log(person2); // { name: 'John', age: 25, ssn: '123-45-6789' }
// Cambiar propiedad name
person2.name = 'John Doe'; 
console.log(person2); // { name: 'John Doe', age: 25, ssn: '123-45-6789' }
// Eliminar propiedad age
delete person2.age;
console.log(person2); // { name: 'John Doe', ssn: '123-45-6789' }

// Un valor primitivo no puede tener propiedades
// Js permite agregar una propiedad pero no tendra ejecto
let name3 = 'John';
console.log(name3); // John
name3.alias = 'Knight';
console.log(name3.alias); // undefined

// Copiar valores
// Cuando se asigna un valor primitivo de una variable a otra, el motor js
// Crea una copia de ese valor y se lo asigna a una variable en segundo plano
let age3 = 25;
let newAge = age3;
console.log(age3); // 25
console.log(newAge); // 25
/**
 * --------------
 * |            |
 * --------------
 * |            |
 * --------------
 * |            |
 * --------------
 * | newAge=25  |
 * --------------
 * |   age=25   |
 * --------------
 */

// En la memoria de stack son variable separadas, si cambiamos el valor de una no afectara a la otra
let age4 = 25;
let newAge2 = age4;
newAge2 = newAge2 + 1;
console.log(age, newAge2); // 25 26
/**
 * --------------
 * |            |
 * --------------
 * |            |
 * --------------
 * |            |
 * --------------
 * | newAge=26  |
 * --------------
 * |   age=25   |
 * --------------
 */

// Cuando se asigna un valor de referencia de una variable a otra el motor js
// Crea una referencia para que ambas variables hagan referencia al mismo objeto en la memoria de cumulo
let persons = {
    name: 'John',
    age: 25
};
let member = persons;
member.age = 26;
console.log(persons); // { name: 'John', age: 26 }
console.log(member); // { name: 'John', age: 26 }