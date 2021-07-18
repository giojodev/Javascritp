'use strict'

//Añadir Pelicula usando form
var formulario=document.querySelector("#formpeliculas");

formulario.addEventListener('submit',function(){
    var titulo=document.querySelector("#addpelicula").value;
    console.log(titulo);
    if(titulo.length>= 1){
        localStorage.setItem(titulo,titulo);
    }
});

var ul=document.querySelector("#peliculaslist");

for(var i in localStorage){
    if(typeof localStorage[i]=="string"){
        var li=document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
    
}

//Eliminar pelicula de listado

var form2=document.querySelector("#formborrarpeliculas");

form2.addEventListener('submit',function(){
var titulo=document.querySelector("#borrarpelicula").value;
if(titulo.length>=1){
    localStorage.removeItem(titulo);
}
});