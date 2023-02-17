
const url = 'https://randomuser.me/api/'

const boton = document.querySelector("button")

let chanche = document.getElementById("seleccionar")
let profesores = []

let divA = document.getElementById("alumnos")
let divP = document.getElementById("profesores")

function hacerPeticion(){
    let peticion = new XMLHttpRequest()
        peticion.open("GET",url,true)
        peticion.send(null)
        peticion.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.responseText)
                //console.log(datos)
                profesores.push(datos.results[0])
            }
        }
}

function obtenerProfe(){
    for(let i=0;i<20;i++){
        hacerPeticion()
    }
    for(let p of profesores){
        document.getElementById("profesores").innerHTML +=
        `<div>
            <p>${p.email}</p>
            <p>${p.name.title} ${p.name.first} ${p.name.last}</p>
        </div>
        `
    }
}

console.log(profesores)

if(chanche.value == "profesor"){
    boton.addEventListener("click",obtenerProfe)
}