'use strict'

//BOM BROWSER OBJECT MANAGER

function getBOM(){
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);

}
function redirect(url){
window.location.href=url;
}

function abrirVentana(url){
    // window.open(url);
    window.open(url,"","width=400px,height=500px");
}