'use strict'

//Fechas
var fecha=new Date();
var year=fecha.getFullYear();
var mes=fecha.getMonth();
var dia=fecha.getDate();
var hora=fecha.getHours();
var min=fecha.getMinutes();
var sec=fecha.getSeconds();
var textoHora=`
    El año es : ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
    Los minutos son: ${min}
    Los segundos son: ${sec}
`;

console.log(textoHora);

var m=Math.random();