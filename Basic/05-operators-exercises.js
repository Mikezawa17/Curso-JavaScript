// 1. Crea una variable para cada operación aritmética

let a = 10
let b = 20

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo o Resto
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- //Decremento


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticasca

console.log(b)
let myVariable = 3
console.log(myVariable)
myVariable +=b// Suma la variable por el nuevo dato.
console.log(myVariable)

myVariable -=b // Lo resta
myVariable *=b // Lo multiplica
console.log(myVariable)
myVariable /=b // Lo divide
myVariable %=b // Lo modula
myVariable **=b // Saca el exponente


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(20 > 10)
console.log(20 == 20)
console.log(!(20 < 7))
console.log(!(a === 7))
console.log(10 == "10")



// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(20 < 10)
console.log(20 > 20)
console.log((20 === 7))
console.log(!(a === 11))
console.log(10 == "11")


// 5. Utiliza el operador lógico and

console.log(10 > 5 && 15 > 20)

// 6. Utiliza el operador lógico or

console.log(10 > 5 || 15 > 20)

// 7. Combina ambos operadores lógicos

console.log(10 > 5 && 15 > 20 || 7 > 2)

// 8. Añade alguna negación

console.log(!(10 > 5 && 15 > 20))

// 9. Utiliza el operador ternario

isRunning = true

isRunning ? console.log("Esta corriendo por el campo.") : console.log("Esta parado y sentado en un arbol.")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(a * b > 10 && a + b < 40)