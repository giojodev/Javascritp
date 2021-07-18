'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array.
2. Tiene que mostrar el array entero / todos sus elementos en el cuerpo de la pagina y la consola
3. Sacar el array de forma ordenada y mostrarlo
4. Invertir su orden y mostrarlo.
5. Mostrar cuantos elementos tiene el array.
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice.
*/
function mostrarArray(elemetos,textocustom="")
{
    document.write("<h1>Contenido del array "+textocustom+"</h1>");
    document.write("<ul>");
    elemetos.forEach((elemento,index)=>{
        document.write("<li>"+elemento+"</li>");
    }); 
    document.write("</ul>");
}

var numeros =[];

//Pedir 6 numeros
for(var i=0;i<=5;i++)
{
    //numeros[i]=parseInt(prompt("Introdusca numero",0));
    numeros.push(parseInt(prompt("Introdusca numero",0)));
}

//Mostrar en el cuerpo de la pagina
mostrarArray(numeros,"Gio");

//Mostrar el array en la consola
console.log(numeros);

//Ordenar y mostrar;
numeros.sort(function(a,b){return a-b});
//Para mostrar un array de numeros ordenado usar funcion de callback
//function(a,b){return a-b} ascendente
//function(a,b){return b-a} descendente
mostrarArray(numeros,"ordenado");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,"revertido");

//Contar indice
document.write("<h1>Cantidad de indices "+numeros.length+"</h1>");

//Busqueda
var busqueda=parseInt(prompt("Busca un numero",0));
var buscado=numeros.findIndex(numero=>numero==busqueda);
if(buscado&&buscado!=-1){
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+buscado+"</h1><hr/>");
}else{
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}