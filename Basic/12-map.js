// Map

// Map es una coleccion de elementos formandos por un par, uno por clave y el otro un valor.

// Declaración

let myMap = new Map()

// Inicialiazación

myMap = new Map([
    ["name", "Miguel"],
    ["email", "mikelarance@gmail.com"],
    ["age", 31]
])

console.log(myMap)

// Métodos y propiedades

//set(Actualiza y añade valores)

myMap.set("alias", "Mikezawa")
myMap.set("name", "Mikel")

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname")) // NO EXISTE

//has (boolean, nos dice si esta o no el elemento.)
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//delete

myMap.delete("email")
console.log(myMap)

// Keys y values ( lISTADO DEL CLAVES y valores) 

console.log(myMap.keys())
console.log(myMap.values())

// size (Tamaño del mapa)

console.log(myMap.size)

// clear
myMap.clear()

console.log(myMap)


