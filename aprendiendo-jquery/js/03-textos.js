$(document).ready(function(){
    reloadLinks();
    var boton=$('#add_button');
    var link=$('#add_link');
    boton.click(function(){
        $('#menu').append('<li><a href="'+link.val()+'"></a></li>');
        link.val('')
        reloadLinks();
    });
}
)

function reloadLinks(){
    $('a').each(function(index){
        var that=$(this)
          var enlace=that.attr('href');
          that.attr('target','blank')
          
          that.text(enlace);
    })
}