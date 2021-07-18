$(document).ready(function(){
    var mostrar=$("#mostrar");
    var ocultar=$("#ocultar");
    var abrir=$("#todoenuno");
    var caja=$("#caja")
    ocultar.hide();
    mostrar.click(function(){
        mostrar.hide();
        ocultar.show();
        // $("#caja").show("slow");
        $("#caja").fadeTo("slow",1);
    })
    ocultar.click(function(){
        ocultar.hide();
        mostrar.show();
        // $("#caja").hide("slow");
        // $("#caja").fadeOut("slow");
        $("#caja").fadeTo("slow",0);
    })
    abrir.click(function(){
        $("#caja").slideToggle("fast");
    })
})