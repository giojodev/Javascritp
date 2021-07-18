'use strict'

//Arrays Multidimensional

var categoria=['Accion','Terror','Comedia'];
var peliculas=['La verdad duele','La vida es bella','Gran Torino'];

// peliculas.sort();
peliculas.reverse(); 
console.log(peliculas);

var cine=[categoria,peliculas];
// console.log(cine[0][1]);
// console.log(cine[1][2]);

// var elemento="";
// do{
//     elemento=prompt("Introduce otra pelicula");
//     peliculas.push(elemento); 
// }while(elemento!="ACABAR");

// //peliculas.push("Batman");
// peliculas.pop();
// peliculas[0]=undefined;

var indice=peliculas.indexOf('Gran Torino');
console.log(indice);

if(indice>-1){
    peliculas.splice(indice),1;
}
//peliculas.pop(indice);
var peliculas2=peliculas.join();

var cadena="texto1, texto2, texto3";
var array=cadena.split(", ");

console.log(array);
