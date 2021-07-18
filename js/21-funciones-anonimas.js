'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre

//Callback es una funcion que se ejecuta dentro de otra

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
    var sumar=numero1+numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5,7,function(dato){
    console.log("La suma es: ",dato);
},
//Funcion flecha reemplaza palabara reservada function por "=>"
(dato)=>{
    console.log("La suma por dos es: ",(dato*2));
}
);