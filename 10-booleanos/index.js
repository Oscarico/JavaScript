// Booleanos
// El tipo boolean contiene 2 valores literales: true y false
let completed = true;
let running = false;
console.log(completed); // true
console.log(running); // false

// Los literales booleanos distinguen entre mayusculas y minusculas
// True y False son identificadores validos pero no son valores
// Js permite que los valores de otros tipos se conviertan en valores booleanos
let error = 'An error occurred';
let hasError = Boolean(error);
console.log(hasError); // true

// Como Boolean transforma los valores de otros tipos en booleanos.
/**
 * Tipo de dato	Valores convertidos a true	        Valor convertido en false
   cuerda	    Cualquier cadena no vacía	        "" (cadena vacía)
   número	    Cualquier número distinto de cero	0, NaN
   objeto	    Cualquier objeto	                nulo
   indefinido	(no relevante)	                    indefinido
 */

// Usando condicion para convertir en booleano
let error1 = 'An error occured';
if (error1) {
    console.log(error); // An error occurred
} 

// Si se cambia a cadena vacia no se vera el mensaje
let error3 = '';
if (error3) {
  console.log(error3); // ''
}