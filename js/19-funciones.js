'use strict'

//Funciones
function porPantalla(numero1,numero2)
{
        document.write("Suma: "+ (numero1+numero2)+"</br>");
        document.write("Resta: "+ (numero1-numero2)+"</br>");
        document.write("Multiplicacion: "+ (numero1*numero2)+"</br>");
        document.write("Division: "+ (numero1/numero2)+"</br>");
        document.write("**********************************");
}

function porConsola(numero1,numero2){
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+ (numero1-numero2));
    console.log("Multiplicacion: "+ (numero1*numero2));
    console.log("Division: "+ (numero1/numero2));
    console.log("**********************************");
}
function calduradora(numero1,numero2,mostrar=false){
    if(mostrar==false)
    {
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }
   return true;
}

calduradora(1,8);
calduradora(2,5,true);
