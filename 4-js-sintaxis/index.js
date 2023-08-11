// Espacios en blanco
/**
 * Carriage return
 * Space
 * New line
 * Tab
 */
// Codigo sin espacios en blanco
let formatted = true; if(formatted) {console.log('The code is easy to read');} // The code is easy to read
// Lo que es equivalente a:
let formatted2 = true;
if(formatted2) {
    console.log('The code is easy to read'); // The code is easy to read
}

// Declaraciones - instruccion que declara una variable o indica que ejecute una accion
// Una instruccion simple termina en ";"
let message = "Welcome to JavaScript"; 
console.log(message); // Welcome to JavaScript

// Bloques - secuencia de cero o mas sentencias simples usando "{}"
if(window.localStorage) {
    console.log('The local storage is supported'); // The local storage is supported
}

// Identificadores - nobre que se elige para variables, parametros, funciones, clases, etc.
/**
 * se comienza con una letra (a-z, A,Z)
 * un guion bajo (_)
 * un signo de dolar ($)
 * seguido de una secuencia de caracteres (a-z, A,Z)
 * numeros (0-9)
 * guiones bajos (_)
 * y signo de dolar ($)
 * no pueden contener espacios
 * no se pueden usar palabras reservadas
 */
// No esta limitada a caracteres ASCII y puede incluir ASCII extendido o unicode, no se recomienda
// Los identificadores distinguen entre mayusculas y minusculas
// Ambos son identificadores diferentes
let message1;
let Message1;

// Comentarios
// This is a single-line comment
/* This is a block comment
that can span multiple lines */

// Expresiones - fragmento de codigo que se evalua en un valor
console.log(2 + 1); // 3

// Palabras clave y palabras Reservadas
//palabras reservadas en ECMA-262
/**
 * break	case	catch
 * continue	debugger	default
 * else	export	extends
 * function	if	import
 * new	return	super
 * throw	try	null
 * void	while	with
 * class	delete	finally
 * in	switch	typeof
 * yield	const	do
 * for	instanceof	this
 * var		
 */
// Palabra reservadas en ECMA-252
/**
 * enum	implements	let
 * protected	private	public
 * await	interface	package
 * implements	public
 */