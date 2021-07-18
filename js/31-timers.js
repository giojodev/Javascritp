'use strict'
window.addEventListener('load',()=>{

    function IniciarIntervalo(){
        //Timers
        var tiempo=setInterval(function(){
            console.log("Set interval ejecutado");
            var encabezado= document.querySelector("h1");
            if(encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize="20px";
            }else{
                encabezado.style.fontSize="50px";
            }
           
        },1500);
        return tiempo;
    }
    
   var tiempo=IniciarIntervalo();

    var stop=document.querySelector("#stop");

    stop.addEventListener('click',function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start=document.querySelector("#start");

    start.addEventListener('click',function(){
        alert("Has iniciado el intervalo en bucle");
        IniciarIntervalo();
    });
});