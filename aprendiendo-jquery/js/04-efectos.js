$(document).ready(function(){
    var mostrar=$("#mostrar");
    var ocultar=$("#ocultar");
    var abrir=$("#animae");
    var caja=$("#caja")
    var animame=$("#animame");
    ocultar.hide();
    mostrar.click(function(){
        mostrar.hide();
        ocultar.show();
        // $("#caja").show("slow");
        $("#caja").slideDown("slow");
    })
    ocultar.click(function(){
        ocultar.hide();
        mostrar.show();
        // $("#caja").hide("slow");
        // $("#caja").fadeOut("slow");
        $("#caja").slideUp("slow",function(){
            console.log("Cartel Ocultado");
        });
    })
    abrir.click(function(){
        $("#caja").slideToggle("fast");
    });
    animame.click(function (){
        caja.animate({
            marginLeft:'500px',
            fontSize:'40px',
            height:'110px'
        },'slow')
        .animate({
            borderRadius: '900px',
            marginTop:'100px'
        },'slow')
        .animate({
            borderRadius: '0px',
            marginLeft:'0px'
        },'slow')
        .animate({
            borderRadius: '900px',
            marginTop:'0px'
        },'slow')
      })
})