// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

Myname = "mikel"

if (Myname == "mikel") {
    console.log("Este es mi nombre")
} else {
    console.log("No es mi nombre")
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Mikel"
let pass = 1234

if (user = "Mikel" && pass == 1234) {
    console.log("Usuario correcto.")
} else {
    console.log("Usuario Incorrecto.")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 0

if (number == 0) {
    console.log("Es 0")
} else if (number > 0) {
    console.log("Es positivo")
} else {
    console.log("Es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 14

if (age >= 18) {
    console.log("Tu puedes votar")
} else {
    console.log(`Tu no puedes votar, tienes ${age} años y te faltan ${18 - age} años para poder votar.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let message = age >= 18 ? "Es adulto" : "No es adulto."
console.log(message)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2

if (mes === 0 || mes === 1 || mes === 2) {
    console.log("La estación es Invierno.")
} else if (mes === 3 || mes === 4 || mes === 5) {
    console.log("La estación es Primavera.")
} else if (mes === 6 || mes === 7 || mes === 8) {
    console.log("La estación es Verano.")
}
else if (mes === 9 || mes === 10 || mes === 11) {
    console.log("La estación Es Otoño.")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === 0) {
    console.log("Enero tiene 31 dias")
} else if (mes === 1) {
    console.log("Febrero tiene 28 dias ")
} else if (mes === 2) {
    console.log("Marzo tiene 31 dias ")
}
else if (mes === 3) {
    console.log("Abril tiene 30 dias ")
}
else if (mes === 4) {
    console.log("Mayo tiene 31 dias ")
}
else if (mes === 5) {
    console.log("Junio tiene 30 dias ")
}
else if (mes === 6) {
    console.log("Julio tiene 31 dias ")
}
else if (mes === 7) {
    console.log("Agosto tiene 31 dias ")
}
else if (mes === 8) {
    console.log("Septiembre tiene 30 dias ")
} else if (mes === 9) {
    console.log("Octubre tiene 31 dias ")
} else if (mes === 10) {
    console.log("Noviembre tiene 30 dias ")
} else if (mes === 11) {
    console.log("Diciembre tiene 31 dias ")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idiomaElegido = "frances"
let idioma
switch (idiomaElegido) {
    case "español":
        idioma = "¡Buenos días!"
        break

    case "ingles":
        idioma = "Good Moorning!"
        break
    case "frances":
        idioma = "Bon jour"
    break

    default:
        console.log("No se encontro idioma")
}

console.log(idioma)

/*const idioma ="esp"

switch (idioma){
    case "esp":
        console.log("Buenos días")
        break
    case "ing":
        console.log("Good Morning")

    case "fr":
        console.log("Bon jour, BON AMIC")

    default:
        console.log("No se encontro idioma")
}*/

// 9. Usa un switch para hacer de nuevo el ejercicio 6

const mes2 = 7
switch(mes2){
    case 0:
    case 1:
    case 2:
        console.log("La estación es invierno")
        break
    case 3:
    case 4:
    case 5:
        console.log("La estación es primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("La estación es verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("La estación es Otoño")
        break
    default:
        console.log("no fufa")

}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes2){
    case 0:
        console.log("Enero tiene 31 dias.")
        break
    case 1:
        console.log("Febrero tiene 28 dias.")
    break
    case 2:
        console.log("Marzo tiene 31 dias.")
    break
    case 3:
        console.log("Abril tiene 30 dias.")
    break
    case 4:
        console.log("Mayo tiene 31 dias.")
    break
    case 5:
        console.log("Junio tiene 30 dias.")
    break
    case 6:
        console.log("Julio tiene 31 dias.")
    break
    case 7:
        console.log("Agosto tiene 31 dias.")
    break
    case 8:
        console.log("Septiembre tiene 30 dias.")
    break
    case 9:
        console.log("Octubre tiene 31 dias.")
    break
    case 10:
        console.log("Noviembre tiene 30 dias.")
    break
    case 11:
        console.log("Diciembre tiene 31 dias.")
    break
}