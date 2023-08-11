// Objetos - coleccion desordenada de pares de key-value - {}
/**
 * Clave (Key) - es una propiedad que puede ser una cadena
 * Valor (value) - es el valor de una propiedad
 */

// Objeto vacio
let empty = {};

// Objeto con propiedades - objectName.propertyName
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// Acceso a propiedades
// La notación de puntos (.)
console.log(person.firstName); // John
console.log(person.lastName); // Doe
// La notación similar a matriz ([]) - objectName['propertyName']
console.log(person['firstName']); // John
console.log(person['lastName']); // Doe

// Si la propiedad contiene espacios debe colocarlo entre ''
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};
// Acceder a las propiedades
// Si la clave tiene espacios solo se puede usar ['']
console.log(address['building no']); // 3960
console.log(address.country); // North 1st street
console.log(address.state); // CA
console.log(address.street); // USA

// Modificar valor de propiedad - usando operador de asignacion (=)
let persons = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(persons); // { firstName: 'John', lastName: 'Doe' }
// Cambiar valor
persons.firstName = 'Jane';
console.log(persons); // {firstName: 'Jane', lastName: 'Doe'}

// Agregar una nueva propiedad
// se puede agregar una propiedad despues de la creacion de un objeto
persons.age = 25;
console.log(persons); // { firstName: 'Jane', lastName: 'Doe', age: 25 }

// Eliminacion de una propiedad
// Para eliminar una propiedad utilizamos el operador delete - delete objectName.propertyName
delete persons.age;
console.log(persons); // { firstName: 'Jane', lastName: 'Doe' }
// Si se intenta volver a acceder a una propiedad eliminada se obtiene "undefined"

// Comprobar si existe una propiedad - operador "in" - propertyName in objectName
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};
// Si la propiedad no existe
console.log('ssn' in employee); // false
// Si la propiedad si existe
console.log('employeeId' in employee); // true

