'use strict'

window.addEventListener('load',()=>{
    console.log("DOM CAPTURADO");
    var formulario=document.querySelector("#formulario");
    var box_dashed=document.querySelector(".dashed");
    box_dashed.style.display="none";

    formulario.addEventListener('submit',function(){
        console.log("Evento submit capturado");
        
        var nombre=document.querySelector("#nombre").value;
        var apellido=document.querySelector("#apellidos").value;
        var edad=parseInt(document.querySelector("#edad").value);
        
        if(nombre.trim()==null||nombre.trim().lenght==0||!isNaN(edad)){
            alert("Ingrese un nombre valido");
            document.querySelector("#error").innerHTML="El nombre no es valido";
            return false;
        }
        else{
            document.querySelector("#error").style.display="none";
        }
        if(apellido.trim()==null||apellido.trim().lenght==0||!isNaN(apellido)){
            alert("Ingrese un apellido valido");
            document.querySelector("#error").innerHTML="El apellido no es valido";
            return false;
        }
        if(edad==null||edad <=0||isNaN(edad)){
            alert("La edad no es valido valido");
            document.querySelector("#error").innerHTML="La edad no es valida";
            return false;
        }

        box_dashed.style.display="block";

        var p_nombre=document.querySelector("#p_nombre span");
        var p_apellido=document.querySelector("#p_apellido span");
        var p_edad=document.querySelector("#p_edad span");

        p_nombre.innerHTML=nombre;
        p_apellido.innerHTML=apellido;
        p_edad.innerHTML=edad;
        // var datos_usuarios=[nombre,apellido,edad];
        // var indice;
        // for(indice in datos_usuarios){
        //     var parrafo=document.createElement("p");
        //     parrafo.append(datos_usuarios[indice]);
        //     box_dashed.append(parrafo);
        // }

      
        // parrafo.append(nombre);
        // parrafo.append(apellido);
        // parrafo.append(edad);
        // box_dashed.append(parrafo);

    });
});