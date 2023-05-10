//Ejericicio 1
var tiempo = null
var respuesta = null

document.getElementById('clima').addEventListener('keyup', d => {
    tiempo = document.getElementById('clima').value
    respuesta = document.getElementById('respuesta').innerHTML = tiempo
    if (d.key === 'Enter') {
    }
})

//Ejercicio 2
function ejercicio_2(){
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
    let res1 = document.getElementById('res1')
    let res2 = document.getElementById('res2')
    console.log(edad)
    if(edad >= 18){
        res2.classList.add('hidden')
        res1.classList.remove('hidden')
    }else{
        res2.classList.remove('hidden')
        res1.classList.add('hidden')
    }
})

//Ejercicio 4
document.getElementById('ej4').addEventListener('keyup', e=> {
    let ej4 = document.getElementById('ej4').value
    let element = document.getElementsByClassName('ej4')
    console.log(ej4)
    if(ej4.charAt(0) == 'S' || ej4.charAt(0) == 's' || ej4.charAt(0) == 'n' || ej4.charAt(0) == 'n'){
        console.log('true')
        element[0].innerHTML = "Correcto"
    }else{
        console.log('false')
        element[0].innerHTML = "Incorrecto"
    }
})