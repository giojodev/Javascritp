$(document).ready(function(){
    // var datos=$("#datos");
    //Load
    // $("#datos").load("https://reqres.in");
    
    //Get y POST
    $("#formulario").submit(function (e) { 
        e.preventDefault();
        var usuario={
                  name:$('input[name="name"').val(),
                  web:$('input[name="web"').val()
              }
            console.log(usuario);
            // $.post($(this).attr("action"),usuario,function (response){
            //     console.log(response);
            // }).done(function(){
            //     alert("Usuario añadido correctamente");
            //     $('input[name="name"').val("");
            //     $('input[name="web"').val("");
            // });

            $.ajax({
                type: "POST",
                url: $(this).attr("action"),
                data: usuario,
                dataType: "json",
                beforeSend:function(){
                    console.log("Enviando usuario...");
                },
                success: function (response) {
                    console.log(response);
                    $('input[name="name"').val("");
                        $('input[name="web"').val("");
                },
                error: function(){
                    console.log("Ha ocurrido un error");
                },
                timout:5000
            });

                return false
        
    });



    // $.get("https://reqres.in/api/users",{page: 2},function(response) {
    //     response.data.forEach((element,index) => {
    //         $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
    //     });
    //   });

    //   var usuario={
    //       "name":"Giovanni Orozco",
    //       "web":"www.google.com"
    //   }
    // $.post("https://reqres.in/api/users",usuario,function (response){
    //     console.log(response);
    // })  
})