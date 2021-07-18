'use strict'
//Arrays o arreglos, matrices
var nombre="Giovanni Orozco";
var nombres=["Jenny","Raul","Manolo","Gloria",52,true];
var lenguajes =["PHP","JS","GO","JAVA","C#","C++"];

// console.log(nombres.length);
// console.log(lenguajes[2]);

// var elemento=parseInt(prompt("Que elemento del array quieres??",0));
// if(elemento>nombres.length){
//     alert("Indice no fue encontrado,introducir numero menor que: "+nombres.length);
// }
// else{
//     alert(nombres[elemento]);
// }

// document.write("<h1>Lenguajes de programcion</h1>");
// document.write("<ul>");
// for(var i=0;i<lenguajes.length ;i++){
//     document.write("<li>"+lenguajes[i]+"</li>");
// }
// document.write("</ul>");
document.write("<h1>Lenguajes de programcion</h1>");
document.write("<ul>");

// lenguajes.forEach((element,index,data)=>{
// document.write("<li>"+index+" - "+element+" - "+data[index]+"</li>")
// });

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]   +"</li>")

}
document.write("</ul>");

//Busquedas

// var busqueda=lenguajes.find(function(lenguaje){
// return lenguaje=="PHP";
// });


// var busqueda=lenguajes.find(lenguaje=> lenguaje=="PHP");

var precios=[10,20,50,80];
var busqueda=precios.some(precio=> precio>=20);

// var busqueda=lenguajes.findIndex(lenguaje=> lenguaje=="JAVA");

console.log(busqueda);