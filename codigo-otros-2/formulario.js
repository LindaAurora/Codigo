var formulario = document.querySelector("form")
var n = formulario.elements[0]
let ed = formulario.elements[1]
var na = formulario.elements[2]
var lista = document.getElementById("lista-de-invitados")

formulario.onsubmit = function(e) {
  e.preventDefault();
  var nombre = n.value;
  var edad = ed.value;
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

   if (nombre.length === 0) {
    n.classList.add("error")
    n.classList.remove("correct")

    console.log("error nombre");
  }
  if (edad < 18 || edad > 120) {
    ed.classList.add("error")
    ed.classList.remove("correct")
    console.log("error  edad ");
  }

 if (nombre.length > 0  && (edad > 18  && edad < 120) ) 
  {
    n.classList.remove("error")
    n.classList.add("correct")
    ed.classList.remove("error")
    ed.classList.add("correct")
    n.value = '';
    ed.value = '';
    agregarInvitado(nombre, edad, nacionalidad)

  }  

}


function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var elementoLista = document.createElement("div")

  elementoLista.classList.add("elemento-lista")
  lista.append(elementoLista)
  crearElemento("Nombre", nombre, elementoLista)
  crearElemento("Edad", edad, elementoLista)
  crearElemento("Nacionalidad",nacionalidad, elementoLista)
  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.append(corteLinea)
  elementoLista.append(botonBorrar);
  botonBorrar.onclick = function() {
  botonBorrar.parentNode.remove()
  }
}

function crearElemento(descripcion, valor , elementoLista) {
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.append(spanNombre)
  elementoLista.append(inputNombre)
  elementoLista.append(espacio)
  } 