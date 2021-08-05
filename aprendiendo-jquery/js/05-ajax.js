$(document).ready(function(){
    // var datos=$("#datos");
    //Load
    // $("#datos").load("https://reqres.in");
    
    //Get y POST

    $.get("https://reqres.in/api/users",{page: 2},function(response) {
        response.data.forEach((element,index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
      });
    
})