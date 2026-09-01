// if, else if, else

// if (si pasa esto haz esto) cuando el codigo es verdadero.

let age = 27

if (age == 27) {
    console.log("La edad es 27")
}

//else (si no se pasa haz esto otro)

if (age == 27) {
    console.log("La edad es 27")
} else {
    console.log("La edad no es 27")
}


//else if (Mas condicionales que se puede añadir entre if y else)

if (age == 27) {
    console.log("La edad es 27")
} else if (age < 18) {
    console.log("Es menor de edad")
} else if (age >= 18) {
    console.log("Es mayor de edad")
} else {
    console.log("La edad no es 27")
}


// Operador Ternario

const message = age == 27 ? "La edad es 27" : "La edad no es 27"
console.log(message)

// switch (Es una alternativa, para cuando tenemos que verificar muchas cosa pero solo con una variable.)

let day = 2
let dayname

switch (day) {
    case 0:
        dayname = "Lunes"
        break
    case 1:
        dayname = "Martes"
        break
    case 2:
        dayname = "Miercoles"
        break
    case 3:
        dayname = "Jueves"
        break
    case 4:
        dayname = "Viernes"
        break
    case 5:
        dayname = "Sabado"
        break
    case 6:
        dayname = "Domingo"
        break
    default:
        dayname = "Numero de dia incorrecto."
}

console.log(dayname)