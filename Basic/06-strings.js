// Strings

// Concatenación de texto.

let myName = "Mikel"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres.
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[2])
console.log(greeting[3])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Convierte toda la cadena de texto en MAYUSCULA
console.log(greeting.toLowerCase()) // Convierte toda la cadena de texto en minuscula
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Mikel")) // Indice donde encuenta la palabra entre comillas
console.log(greeting.indexOf("Mikezawa"))
console.log(greeting.includes("Hola")) //Comprueba si la palabra existe
console.log(greeting.includes("Mikel"))
console.log(greeting.includes("Mikezawa"))
console.log(greeting.slice(0, 10)) // Escoge un pedazo de frase.
console.log(greeting.replace("Mikel", "Mikezawa")) // Remplaza una palabra por otra.

// Templates literals (plantillas literales)

let message = `Hola, este es mi  
mi cuso de Javascript`  // Se puede hacer una variable en varias lineas con el acento `Hola, este es mi curso de Javascript` 

console.log(message)

let email = "mikel@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`) // Y para llamar a una variable desde dentro de una cadena de texto también se utiliza estos `` de esta manera ${myName}