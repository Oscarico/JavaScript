// Separadores númericos
// Permite crear un separador visual entre grupod de digitos usando "_"
const budget = 1000000000; // Mil Millones - dificil de leer
const budget2 = 1_000_000_000; // Usando el separador - facil de leer
console.log(budget); // 1000000000
console.log(budget2); // 1000000000

// Se puede usar en numeros enteros y de coma flotante
let amount = 120_201_123.05; 
let expense = 123_450; 
let fee = 12345_00; 
console.log(amount); // 120201123.05
console.log(expense); // 123450
console.log(fee); // 1234500

// Se puede hacer para partes de facciones y exponentes
let amount2 = 0.000_001; // 1 millionth
console.log(amount2); // 0.000001

// Se puede hacer para todos los tipos de números
// BigInt
const max = 9_223_372_036_854_775_807n;
console.log(max); // 9223372036854775807n;
// Binario 
let nibbles = 0b1011_0101_0101;
console.log(nibbles); // 2901
// Octal
let val = 0o1234_5670;
console.log(val); // 2739128
// Hex
let message = 0xD0_E0_F0;
console.log(message); // 13689072