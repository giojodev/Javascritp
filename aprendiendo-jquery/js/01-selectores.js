$(document).ready(function(){
    // console.log("estamos listos!");
    //Selector de ID jQuery
            var rojo=$("#rojo").css("background","red")
                   .css("color","white");

            $("#amarillo").css("background","yellow")
                            .css("color","green");
            $("#verde").css("background","green")
            .css("color","white");
    //Selector de Clase jQuery
            var mi_clase=$(".zebra").css("padding","5px");

            // mi_clase.css("border","5px dashed black")
            console.log(rojo);

            $(".sin_borde").click(function(){
                console.log("click")
                $(this).addClass('zebra');
            });

    //Selector de etiqueta jQuery
    var parrafos=$('p').css("cursor","pointer");

    parrafos.click(function(){
        var thas = $(this);
        if(!thas.hasClass('grande')){
            thas.addClass('grande');
        }else{
            thas.removeClass('grande');
        }
        
    });

    //Selector de Atributo jQuery
    $("a[title='Google']").css("background","#ccc");
    $('a[title="Facebook"]').css("background","blue");
    
    //Otros
    // $('p,a').addClass('margen_superior');
    // var busqueda = $("#caja").find('.resaltado');
    var busqueda = $("#caja .resaltado").eq(0).parent().parent().find("");
    console.log(busqueda);
});
