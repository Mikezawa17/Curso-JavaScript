// array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//inicialización
myArray = [3]
myArray2 = new Array(3) // Reservar un huecos o items vacios

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4,5]
myArray2 = new Array(1,2,3,4) // Ya no reservar un huecos o items vacios

console.log(myArray)
console.log(myArray2)


myArray = ["Mikel", "Mikezawa", "Miguel", 27, true] //Se puede mezclar los tipos de datos.
myArray2 = new Array("Mikel", "Mikezawa", "Miguel", 27, true) 

console.log(myArray)
console.log(myArray2)

myArray2= new Array(3)
myArray2[0] = "Mikezawa"
//myArray2[1] = "Mikel"
myArray2[2] = "Miguel"
myArray2[3] = "Guapo"
console.log(myArray2)

myArray= [] // Recomienda utilizar esta sintasix.
myArray[0] = "Mikezawa"
//myArray2[1] = "Mikel"
myArray[2] = "Miguel"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

// El push sigue un orden creciente, el primer push que se ejecuta lo mete en elemento 0, el segundo push en elemento 1 y asi sucesivamente. Y agrega

myArray.push("Mikel")
myArray.push("Mikezawa")
myArray.push("miguel")
myArray.push(27)

// el pop elimina el ultimo y lo devuelve.

console.log(myArray.pop())
console.log(myArray)

//shift y unshift

//shift elimina el primer elemento de la array y unshift mete elementos en las primeros lugares

console.log(myArray.shift()) // ESTO ES UN OPERACION IGUAL QUE EL PUSH Y EL POP
console.log(myArray)

myArray.unshift(27,"MIKEL")
console.log(myArray)

//length 

myArray.length // Esto es una propiedad(algo que dentro de myarray tiene un valor) no se llama con los parentesis
console.log(myArray.length)

//clear 
// eliminar el array
myArray = []
myArray.length = 0 //alternativo
console.log(myArray)

// slice
// añadir una copia de un array pero solo de los elementos que prefieras.

myArray.push("Mikel", "Mikezawa", "Miguel", 27, true) 

let myNewArray = myArray.slice(1,2) //solo me da el elemento entre el 1 y el 2 sin contar el sengundo, si quiero el segundo tendria que ser 1, 3

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1,3) // Esta operación elimina elementos desde la posición en este caso sería el 1 y cuantos, en esta ocasión sería 3
console.log(myArray)

myArray = ["Mikel", "Mikezawa", "Miguel", 27, true]

myArray.splice(1,2, "Nueva entrada")
console.log(myArray)