"use strict";

const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const buton = document.getElementById("buton");
const tabla = document.getElementById("tabla");
const headTabla = document.getElementById("headTabla");
const baseTabla = document.getElementById("base");
const ivaTabla = document.getElementById("iva");
const total = document.getElementById("total");

function createNode(element) {
  return document.createElement(element);
}

let anyadirB = false;
let bI = 0;
function anyadir() {
  let tr = createNode("tr");
  tr.setAttribute("class","fila")
  let tdProd = createNode("td");
  tdProd.setAttribute("class","detalles")
  let textProd = document.createTextNode(producto.value + " (detalles)");
  tdProd.appendChild(textProd);

  let tdCant = createNode("td");
  let textCant = document.createTextNode(cantidad.value);
  tdCant.appendChild(textCant);

  let tdPrec = createNode("td");
  let textPrec = document.createTextNode(precio.value + "€");
  tdPrec.appendChild(textPrec);

  let precioTotal = createNode("td");
  let textPT = document.createTextNode(precio.value * cantidad.value + "€");
  precioTotal.appendChild(textPT);

  let acciones = createNode("td");
  acciones.setAttribute("class", "eliminar");
  let textA = document.createTextNode("(eliminar)");
  acciones.appendChild(textA);
  

  tr.appendChild(tdProd);
  tr.appendChild(tdCant);
  tr.appendChild(tdPrec);
  tr.appendChild(precioTotal);
  tr.appendChild(acciones);

  tabla.insertBefore(tr, headTabla);

  let base1 = parseFloat(precio.value) * parseFloat(cantidad.value);
  bI = bI + base1;
  baseTabla.innerHTML = bI + "€";

  let iva = bI * 0.21;
  ivaTabla.innerHTML = iva + "€";

  let totalT = bI + iva;
  total.innerHTML = totalT + "€";

  let d = document.querySelectorAll(".detalles")
  for(let de of d){
    de.addEventListener("click",detalles)
  }
  
  
  let e = document.querySelectorAll(".elimiar")
  for(let el of e){
   el.addEventListener("click",eliminarfila)
  }
}

function eliminarfila(){
  let fila = document.querySelectorAll(".fila")
  for(f of fila){
    f.removeChild(f)
  }
}

function detalles(){
    alert("Producto:  "+producto.value+
    "   Precio:  "+precio.value+"€"+
    "   Cantidad:  "+cantidad.value+
    "   Precio total:  "+precio.value*cantidad.value+"€")
}

buton.addEventListener("click", anyadir)

document.getElementById("pagar").addEventListener("click",()=>{
    let nom = document.getElementById("nombre").value
    let dni = document.getElementById("dni").value
    let pago = document.getElementById("pago").value
    document.getElementById("datos").innerHTML += `<span>${nom}</span>
    <span>DNI: ${dni}</span>
    <p>Metodo de pago:${pago}</p>
    `
})

function guardarCookie(nombre,valor){
  document.cookie = nombre+"="+valor
}

let colorE = document.getElementById("colorF")
let tamañoE = document.getElementById("tamñoE")
let tamañoT = document.getElementById("tamañoT")
let colorT = document.getElementById("fondoT")
let borde = document.getElementById("borde")
let colorB = document.getElementById("colorB")
let tamañoB = document.getElementById("bordeT")
let tipoB = document.getElementById("tipoB")

document.getElementById("btabla").addEventListener("click",()=>{
  let datos = document.getElementById("datos")
  let f = document.getElementById("f")
  let tabla = document.querySelector("table")
  let headt = document.querySelector("thead")
  datos.style.color = colorE.value
  datos.style.fontSize = tamañoE.value
  f.style.color = colorE.value
  f.style.fontSize = tamañoE.value
  tabla.style.background = colorT.value
  headt.style.color = colorT.value
  if(borde.value == "Si"){

    tabla.style.border = tamañoB+" "+tipoB+" "+colorB
  }else{
    tabla.style.border = "none"
  }

  guardarCookie("ColorEncabezado",colorE.value)
  guardarCookie("TamañoEncabezado",tamañoE.value)
  guardarCookie("TamañoTitulos",tamañoT.value)
  guardarCookie("ColorTitulos",colorT.value)
  guardarCookie("Borde",borde.value)
  guardarCookie("ColorBorde",colorB.value)
  guardarCookie("tamañoBorde",tamañoB.value)
  guardarCookie("TipoBorde",tipoB.value)
})

