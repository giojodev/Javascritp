'use strict'
//EVENTOS

//Eventos del raton

window.addEventListener('load',()=>{
        function cambiarColor(){
            console.log("Me has dado click");
            var bg=boton.style.background;
            if(bg=="green"){
                boton.style.background="red";
                
            }else{
                boton.style.background="green";
            }
            boton.style.padding="10px";
                boton.style.border="1px solid #ccc"
            return true;
        
        }
        var boton=document.querySelector("#boton");
        //Evento que captura el click
        boton.addEventListener('click',function(){
            cambiarColor();
        })
        
        //Mouse over
        boton.addEventListener('mouseover',function(){
            boton.style.background="#CCC";
        })
        //Mouse out
        boton.addEventListener('mouseout',function(){
            boton.style.background="white";
        })
        
        //Focus
        var input=document.querySelector("#camponombre");
        
        input.addEventListener('focus',function(){
            console.log("Estas haciendo foco en el input");
        });
        //Blur
        input.addEventListener('blur',function(){
            console.log("[Blur] Estas fuera del input");
        });
        //Keydown
        input.addEventListener('keydown',function(){
            console.log("[Keydown] Estas pulsando esta tecla",String.fromCharCode(event.keyCode));
        });
        //Keypress
        input.addEventListener('keypress',function(){
            console.log("[Keypress] Tecla presionada",String.fromCharCode(event.keyCode));
        });
        //Keyup
        input.addEventListener('keyup',function(){
            console.log("[Keypress] Tecla soltada",String.fromCharCode(event.keyCode));
        });
})

