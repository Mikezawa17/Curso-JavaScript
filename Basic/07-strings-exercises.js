// 1. Concatena dos cadenas de texto

let text = "Hola, " + "Brais"
console.log(text)

// 2. Muestra la longitud de una cadena de texto
console.log(text.length)

// 3. Muestra el primer y último carácter de un string
console.log(text[0])
console.log(text[10])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(text.toUpperCase()) //Masyuculas 
console.log(text.toLowerCase()) //Minusculas

// 5. Crea una cadena de texto en varias líneas

let text2 = `Hola, soy el 
mejor programador de mi 
casa.`

// 6. Interpola el valor de una variable en un string
let nombre = "Mikel"
let mensajes = 7
console.log(`Hola, ${nombre}, tienes ${mensajes} mensajes nuevos.`)


// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(text2.replaceAll(" ", "-"))


// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(text2.includes("Hola"))

// 9. Comprueba si dos strings son iguales
let soniguales = (text2 == text)
console.log(soniguales)
// 10. Comprueba si dos strings tienen la misma longitud

console.log(text2.length == text.length)