// Operadores

// Operadores Aritméticos.

let a = 7
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo o Resto
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- //Decremento
console.log(b)

// Operadores de asignación
let myVariable = 2 
console.log(myVariable)
myVariable +=2 // Suma la variable por el nuevo dato.
console.log(myVariable)

myVariable -=2 // Lo resta
myVariable *=2 // Lo multiplica
console.log(myVariable)
myVariable /=2 // Lo divide
myVariable %=2 // Lo modula
myVariable **=2 // Saca el exponente

// Operadores de comparación. 

console.log(a)
console.log(a > b) //Compara y saca verdadero(true) o Falso(false)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 8) // Igualdad por valor al solo poner dos igueles == solo por valor.
console.log(a == "8") // Igualdad por valor
console.log(a == a)
console.log(a === a) // Igualdad por Identidad(por tipo y valor) Al poner tres === iguales hace esto.
console.log(a === 8) // Igualdad por Identidad(por tipo y valor)
console.log(a === "8") // Igualdad por Identidad(por tipo y valor) Tiene que dar false.

console.log(a != 8) // Obtenemos el resultado contrario a comparación por igualdad
console.log(a !== 8)

// Truthy values (valores verdaderos)
// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

//__________________________________________________________

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

console.log(0 == false)
console.log(1 == false) // Falso porque todos los numeros son verdaderos a excepción al 0 
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '') // solo tiene dos == solo compara el valor y no el tipo
console.log(0 == "Hola")
console.log(0 === "") // Esta vacia pero no es el mismo tipo
console.log(undefined == null)
console.log(undefined === null) // No es el mismo tipo por eso sale false

// Operadores Lógicos

// and (&&)
console.log(5 > 10 && 15 > 20) // Dara false porqué ambos son falsos
console.log(5 < 10 && 15 < 20) // Dara true porqué ambos son verdaderos
console.log(5 < 10 && 15 > 20) // Dara false porqué en el And habiendo uno FALSO el resultado es false
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20) // Dara false porqué ambos son falsos
console.log(5 < 10 || 15 < 20)// Dara true porqué ambos son verdaderos
console.log(5 < 10 || 15 > 20) // Dara true porqué en el or con uno que sea verdadero sera el resultado true.
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 || 15 > 20 || 30 > 40) //sin ninguno se cumple ni el or ni el and es false
console.log(5 > 10 || 15 > 20 || 30 < 40) // si el or se cumple y el and no sera true. 

// not (!)
console.log(!(5 > 10 && 15 > 20)) // Saldría falso en ambos operaciones pero con ! niego y me pone lo contrario.
console.log(5 > 10 || 15 > 20)


// Operadores ternarios

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No esta lloviendo")

// Esta formado por dos simbolos por (?:) si la condición se cumple se pondra lo que hay detras de (?) y si no se cumple lo que hay detras (:)