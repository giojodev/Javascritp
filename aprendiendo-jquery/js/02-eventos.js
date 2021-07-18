$(document).ready(function(){

    //MouseOver y MouseOut
    var caja=$("#caja");
    // caja.mouseover(function(){
    //     $(this).css('background','red')
    // });
    // caja.mouseout(function(){
    //     $(this).css('background','aqua');
    // });
    function mousein(){
            $(this).css('background','red')
        }
    function mouseout(){
            $(this).css('background','aqua');
         }
    //hover
    //La funcion hover puede recibir otras 2 funciones como callback y ejecutarla
    caja.hover(mousein,mouseout)

    //Click, doble clik
    caja.click(function(){
        $(this).css('background','white')
                .css('color','#000');
    });

    caja.dblclick(function(){
        $(this).css('background','pink')
                .css('color','black');
    });
    
    //Focus y blur
    var nombre=$("#nombre");
    var datos=$("#datos");
    var sigueme=$("#sigueme");
    nombre.focus(function(){
        $(this).css("border",'5px solid #339933')
    });

    nombre.blur(function(){
        $(this).css("border",'1px solid #000');
        
        datos.text( $(this).val()).show();
    });

    //Mousedown y mouseup
    datos.mousedown(function(){
        $(this).css('border-color','pink')
    });

    datos.mouseup(function(){
        $(this).css('border-color','red')
    })
    
    //Mousemove
    $(document).mousemove(function(){
        // console.log(event.clientX+" "+event.clientY);
        $('body').css('cursor','none')
        sigueme.css('left',event.clientX)
                .css('top',event.clientY);
    });

});