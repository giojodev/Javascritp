$(document).ready(function(){
    var elemento=$(".elemento");
    var lista=$(".lista_seleccionable");
    var area=$("#area");
    var elementomovido=$("#elemento-movido");
    var mostrar=$("#mostrar");
    var caja_efectos=$(".caja-efectos");
    //Mover elemento por la pagina
    elemento.draggable();

    //Redimensionar
    elemento.resizable();

    //Seleccionable
    // lista.selectable();

    //Ordenar
    //CUANDO SE USA EL METODO SORTABLE NO SE PUEDE UTILIZAR EL METOODO SELECTABLE
    lista.sortable({
        update:function(event,ui){
            console.log("Ha cambiado la vista")
        }
    });

    //Drop
    elementomovido.draggable();
    area.droppable({
        drop:function(){
            console.log("Elemento dropeado");
        }
    });


    //Efectos jQuery
    mostrar.click(function () { 
        caja_efectos.toggle("fade",'slow');
     })

     //Tooltip
     $(document).tooltip();

     //Dialog
     $("#lanzar-popup").click(function(){
        $("#popup").dialog();
     })

     //Datepicker
     $("#calendario").datepicker(); 

     //Tabs
     $("#pestañas").tabs();
    
})