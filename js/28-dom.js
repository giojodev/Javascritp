'use strict'

//DOM - Document Object Manager


function cambiaColor(color){
    caja.style.backgroundColor=color;

}

//Conseguir elementos con un Id concreto

//var caja=document.getElementById("micaja");
// var caja=document.querySelector("#micaja");
// caja.innerHTML="Texto en caja desde JS";

// caja.style.background="black";

// caja.style.padding="20px";

// caja.className="hola";

//Conseguir elementos por su etiqueta
var todosLosDivs=document.getElementsByTagName('div');
// var texto=todosLosDivs[1];
// texto.innerHTML="Otro text",
// texto.style.background="red";
// var contador=0;
var seccion=document.querySelector("#miseccion");
var hr=document.createElement("hr")
var valor;

for(valor in todosLosDivs){
    // if(todosLosDivs[valor].textContent.length>=1){
        if(typeof todosLosDivs[valor].textContent =='string'){
            var parrafo=document.createElement("p");
        var texto=document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo)
        }


    }
seccion.append(hr);
    

// for(var i=0;i<todosLosDivs.length;i++)
// {
// contador++;
// }

//Conseguir elementos por su clase

var divsRojos=document.getElementsByClassName('rojo');
var divsAmarillo=document.getElementsByClassName("amarillo");

divsAmarillo[0].style.backgroundColor="yellow";

var rojo;
for(rojo in divsRojos)
{
    if(divsRojos[rojo].className=="rojo"){
        divsRojos[rojo].style.backgroundColor="red";
    }

}


//Query Selector
var id=document.querySelector("#encabezado");

console.log(id);


//Query Selector solo captura un elemento si existen varios elementos dentro de la pagina
//no captura un array completo, unicamente para puede que sirva para whoiseleccionar id
var claseRojo=document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta=document.querySelectorAll("div");
console.log(etiqueta[2]);