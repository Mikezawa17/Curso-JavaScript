// set 

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set (["Mikel", "Mikezawa", "Miguel", 27, true,])

console.log(mySet)

//Métodos Comunes

// add y delete

mySet.add("mikel@gmail.com")

console.log(mySet)

mySet.delete("mikel@gmail.com") //No utliza los indices.
mySet.delete(true)

console.log(mySet)


// has

console.log(mySet.has("Mikezawa"))
console.log(mySet.has(true))

// size

console.log(mySet.size)

//convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)


//convertir un array a set

mySet = new Set(myArray)
console.log(mySet)
// el set no admite duplicados, exactamente iguales.

mySet.add(27)
console.log(mySet)