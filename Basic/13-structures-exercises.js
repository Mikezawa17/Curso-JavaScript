// 1. Crea un array que almacene cinco animales
let myArray = []

myArray = ["gato", "perro", "pajaro", "león", "cebra"]

console.log(myArray)
// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("ratón")
myArray.push("girafa")
console.log(myArray)
// 3. Elimina el que se encuentra en tercera posición
myArray.splice(3,1)
console.log(myArray)
// 4. Crea un set que almacene cinco libros

let mySet = new Set()

mySet = new Set(["Harry Potter", "El señor de los anillos", "El imperio final", "Meditaciones", "El caballero de los siete reinos"])

console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("El capitan alatriste")
mySet.add("Meditaciones")
console.log(mySet)
// 6. Elimina uno concreto a tu elección
mySet.delete("Harry Potter")
console.log(mySet)
// 7. Crea un mapa que asocie el número del mes a su nombre
let Mymap = new Map()

Mymap = new Map([
    ["Enero", 1],
    ["Febrero", 2],
    ["Marzo", 3],
    ["Abril", 4],
    ["Mayo", 5],
    ["Junio", 6],
    ["Julio", 7],
    ["Agosto", 8],
    ["Septiembre", 9],
    ["Octubre", 10],
    ["Nomviembre", 11],
    ["Diciembre", 12]
])

console.log(Mymap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(Mymap.has("Mayo"))
console.log(Mymap.get("Mayo"))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let myArray2 = new Array()
myArray2 = new Array("Junio", "Julio", "Agosto")
Mymap.set("Meses de Verano", myArray2)
console.log(Mymap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let MiArray = new Array()

MiArray = new Array(1,2,3,4,5)

mySet = new Set(MiArray)

Mymap = new Map()

Mymap.set("Nueva Array Transformada en Set y almacenada en un Map", mySet)

console.log(Mymap)