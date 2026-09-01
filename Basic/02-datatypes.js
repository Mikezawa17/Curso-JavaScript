//  TIPOS DE DATOS PRIMITIVOS.


// Cadenas de texto (String)
let Myname = "Miguel"
let alias = 'Mikezawa'
let email = `mikele@gmail.com`


//Números (Number)
let age = 37 // Entero
let height = 1.77 // Decimal


//Booleanos (Boolean)
let isSteacher = true
let isStudent = false


// Undefined
let undefinedValue
console.log(undefinedValue) // Es un valor que no esta definido de momento.

// Null
let nullValue = null // Caundo no tiene valor, pero no como definido, es el valor nulo, a lo mejor en el futuro tiene otro valor.

// Symbol
let mySymbol = Symbol("mySymbol")// Para identfiadores unicos.
// BigInt

let myBigInt = BigInt (3243234247655656446743544567) // Su rango esta fuera de los numbers. 
let myBigInt2 = 4534523454523254511n //Otra forma de presentar al BigInt

// Mostramos el tipo de dato

console.log(typeof Myname)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isSteacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)


console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)








