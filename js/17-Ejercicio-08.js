'use strict'

/**
 * Calculadora
 * Pida dos numeros por pantalla
 * Si tenemos uno mal que lo vuelva a pedir
 * En el cuerpo de la pagina, crear una alerta y por la consola el resultado de 
 * sumar, restar, multiplicar y dividir estas 2 cifras
 */

var numero1=parseInt(prompt("Introduce el primer numero",0));
var numero2=parseInt(prompt("Introduce el segundo numero",0));

while(numero1<0||numero2<0||isNaN(numero1)||isNaN(numero2))
{
    numero1=parseInt(prompt("Introduce el primer numero",0));
    numero2=parseInt(prompt("Introduce el segundo numero",0));
}

var resultado =  "La suma es: "+(numero1+numero2)+"<br/>"+
                "La resta es: "+(numero1-numero2)+"<br/>"+
                "La multiplicación es: "+(numero1*numero2)+"<br/>"+
                "La division es: "+(numero1/numero2)+"<br/>";

var resultado2 =  "La suma es: "+(numero1+numero2)+"\n"+
                "La resta es: "+(numero1-numero2)+"\n"+
                "La multiplicación es: "+(numero1*numero2)+"\n"+
                "La division es: "+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultado2);