// 1. Escribe un comentario en una línea

// Hola, esto es un comentario. 

// 2. Escribe un comentario en varias líneas

/* Hola, 
 esto es un 
 comentario en 
 varias lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// 1. Tipo String
    let myAlias = ("Mikezawa")

//2. Tipo Number
    let Number = 11

//3. Tipo Boolean

    let ihavejob = false

//4. Tipo Undefinded 

    let unValor = undefined

//5. Tipo null

    let ValorNull = null

//6. Tipo Symbol

    let MySymbol2 = Symbol("Este es mi Simbolo en este ejercicio.")

//7. Tipo BigInt

    let myBig = 783429479270943857298n
    let myBig2 = BigInt(453532652656235625662)

// 4. Imprime por consola el valor de todas las variables

console.log(myAlias)

console.log(Number)

console.log(ihavejob)

console.log(unValor)

console.log(ValorNull)

console.log(MySymbol2)

console.log(myBig)

console.log(myBig2)





// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myAlias)

console.log(typeof Number)

console.log(typeof ihavejob)

console.log(typeof unValor)

console.log(typeof ValorNull)

console.log(typeof MySymbol2)

console.log(typeof myBig)

console.log(typeof myBig2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myAlias = "Mikel"
console.log(myAlias)

Number = 17

ihavejob = true

mySymbol = "Otro simbolo diferente"
console.log(mySymbol)
myBig = 34243541451514515417
console.log(myBig)

myBig2 = 87298547983201749827
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myAlias = 43534254
console.log(myAlias)

Number = "Mynumber"
console.log(Number)

ihavejob = null
console.log(ihavejob)

ValorNull = "hello"
console.log(ValorNull)

unValor = "hola"
console.log(unValor)

mySymbol = 234235234255
console.log(mySymbol)

myBig = true
console.log(myBig)

myBig2 = false
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos


// 1. Tipo String
    const myAlias2 = ("Mikezawa")
    console.log(myAlias2)

//2. Tipo Number
    const Number2 = 11
    console.log(Number2)

//3. Tipo Boolean

    const ihavejob2 = false
    console.log(ihavejob2)

//4. Tipo Undefinded 

    const unValor2 = undefined
    console.log(unValor2)
//5. Tipo null

    const ValorNull2 = null
    console.log(ValorNull2)

//6. Tipo Symbol

    const MySymbol4 = Symbol("Este es mi Simbolo en este ejercicio.")
    console.log(MySymbol4)

//7. Tipo BigInt

    const myBig3 = 783429479270943857298n
    console.log(myBig3)
    const myBig4 = BigInt(453532652656235625662)
    console.log(myBig4)

// 9. A continuación, modifica los valores de las constantes

myAlias2 = "Mikel"
console.log(myAlias2)

Number2 = 17
console.log(Number2)

ihavejob2 = true
console.log(ihavejob2)

MySymbol4 = "Otro simbolo diferente"
console.log(MySymbol4)

myBig3 = 34243541451514515417
console.log(myBig3)

myBig4 = 87298547983201749827
console.log(myBig4)
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/* Nos da un error, TypeError: Assignment to constant variable; A causa de cambiar los valores aunque sean del mismo tipo a variables declaradas como constantes,
si usamos la palabra const para una varible estamos declarando de esa misma variable no cambiara. */