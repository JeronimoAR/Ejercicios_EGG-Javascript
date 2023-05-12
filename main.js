//Ejericicio 1
var tiempo = null
var respuesta = null

document.getElementById('clima').addEventListener('keyup', d => {
    tiempo = document.getElementById('clima').value
    respuesta = document.getElementById('respuesta').innerHTML = tiempo
})

//Ejercicio 2
function ejercicio_2() {
    alert("Radio y perimetro")
    let num1 = prompt("Ingresa el radio:");
    const PI = 3.14159265359;
    let respuesta = PI * Math.pow(num1, 2);
    alert("El area es: " + respuesta)
    respuesta = 2 * PI * num1;
    alert("El perimetro es: " + respuesta)
}

//Ejercicio 3
var edad = 0
document.getElementById('edad').addEventListener('keyup', e => {
    edad = document.getElementById('edad').value
    let res1 = document.getElementsByClassName('res1')
    //console.log(edad)
    if (edad >= 18) {
        res1[0].innerHTML = 'Eres mayor de edad'
    } else {
        res1[0].innerHTML = 'Eres menor de edad'
    }
})

//Ejercicio 4
document.getElementById('ej4').addEventListener('keyup', e => {
    let ej4 = document.getElementById('ej4').value
    let element = document.getElementsByClassName('ej4')
    console.log(ej4)
    if (ej4.charAt(0) == 'S' || ej4.charAt(0) == 's' || ej4.charAt(0) == 'n' || ej4.charAt(0) == 'n') {
        //console.log('true')
        element[0].innerHTML = "Correcto"
    } else {
        //console.log('false')
        element[0].innerHTML = "Incorrecto"
    }
})

//Ejercicio 5
let botones = document.getElementsByClassName('botones')
let operacion = document.getElementById('operacion')
let resultado = document.getElementById('resultado')
let completo = ""
let num1 = 0
let num2 = 0
let res = 0
operacion.addEventListener("keyup", e => {
    let op = operacion.value.toString()
    console.log(op)
    if (e.key === "Enter") {
        sum = op.indexOf("+")
        res = op.indexOf("-")
        mul = op.indexOf("*")
        div = op.indexOf("/")
        if (sum > 0) {
            num1 = parseInt(op.substring(0, sum))
            num2 = parseInt(op.substring(sum + 1, op.length))
            res = num1 + num2
        } else if (res > 0) {
            num1 = parseInt(op.substring(0, res))
            num2 = parseInt(op.substring(res + 1, op.length))
            res = num1 - num2
        } else if (mul > 0) {
            num1 = parseInt(op.substring(0, mul))
            num2 = parseInt(op.substring(mul + 1, op.length))
            res = num1 * num2
        } else if (div > 0) {
            num1 = parseInt(op.substring(0, div))
            num2 = parseInt(op.substring(div + 1, op.length))
            res = num1 / num2
        }
        op = "0"
        resultado.innerHTML = res

        operacion.value = op
        if (operacion.value == "") {
            operacion.ariaPlaceholder = "0"
        }
    }
})
for (let i = 0; i < botones.length; i++) {
    let element = botones[i]
    element.addEventListener("click", e => {
        let op = element.innerHTML.toString()
        console.log(op)
        if (op == "=") {
            sum = completo.indexOf("+")
            res = completo.indexOf("-")
            mul = completo.indexOf("*")
            div = completo.indexOf("/")
            if (sum > 0) {
                num1 = parseInt(completo.substring(0, sum))
                num2 = parseInt(completo.substring(sum + 1, completo.length))
                res = num1 + num2
            } else if (res > 0) {
                num1 = parseInt(completo.substring(0, res))
                num2 = parseInt(completo.substring(res + 1, completo.length))
                res = num1 - num2
            } else if (mul > 0) {
                num1 = parseInt(completo.substring(0, mul))
                num2 = parseInt(completo.substring(mul + 1, completo.length))
                res = num1 * num2
            } else if (div > 0) {
                num1 = parseInt(completo.substring(0, div))
                num2 = parseInt(completo.substring(div + 1, completo.length))
                res = num1 / num2
            }
            completo = "0"
            resultado.innerHTML = res
        }

        if (op.charAt(0) == "<") {
            completo = completo.substring(0, completo.length - 1)
        } else if (op == "=") {
            completo = completo.substring(0, completo.length - 1)
        }
        else {
            completo += op
        }
        operacion.value = completo
        if (operacion.value == "") {
            operacion.ariaPlaceholder = "0"
        }
        console.log(completo)
    })
}

//Ejercicio 6
document.getElementById('parimpar').addEventListener('keyup', e => {
    let parimpar = parseInt(document.getElementById('parimpar').value)
    console.log(parimpar)
    let ej6 = document.getElementById('ej6')
    if(parimpar % 2 == 0){
        ej6.innerHTML = 'El numero es par'
    }else{
        ej6.innerHTML = 'El numero es impar'
    }
    if(Number.isNaN(parimpar)){
        ej6.innerHTML = 'Ninguno de los dos'
    }
})
