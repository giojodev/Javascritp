'use strict'

/*
Validar si un numero es par o impar

*/
var numero=parseInt(prompt("Numero",0));

while(isNaN(numero))
{
    numero=parseInt(prompt("No es un numero valido, ingrese nuevamente",0));
}

if(numero%2==0)
{
    alert("Numero "+numero+" es par");
}else if(numero%2!=0){
    alert("Numero "+numero+" es impar");  
}else{
    alert("Numero invalido");
}
    
