'use strict'

//LocalStorage

//Comprobar disponibilidad de LocalStorage
if((typeof Storage)!== 'undefined'){
    console.log("LocalStorage Disponible")
}

//Guardar datos
localStorage.setItem("titulo","Curso de JS");

//Recuperar elemento

console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar Objetos
var usuario={
    nombre:"Giovanni Orozco",
    email:"jorozco9421@gmail.com",
    web:"gio.com"
};



localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar objeto
var userjs=JSON.parse(localStorage.getItem("usuario"));

console.log(userjs); 

document.querySelector("#datos").append(userjs.nombre+ " - "+userjs.email);

localStorage.removeItem("titulo");