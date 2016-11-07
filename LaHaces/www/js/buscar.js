$( document ).ready(function() {
      
    $("#buscar_input" ).keypress(function(e) {
        //console.log( "Handler for .keypress() called." );
        var nombre_evento = $( "#buscar_input" ).val();
        var nombre_sin_hashtag=nombre_evento.split("#")[1];
        if(e.keyCode == 13){
            $("#info_eventos").html("");
            $.ajax({
                url: "http://127.0.0.1:8080/buscar/events/"+String(nombre_sin_hashtag),
                success: function(json){
                    eventos = json.eventos;
                    for(i = 0; i < eventos.length; i++){
                        $("#info_eventos").append(' <a href="verEvento.html?id='+eventos[i].id+'" class="list-group-item">'
                        +'<h4 class="list-group-item-heading">'+eventos[i].name+'</h4>'
                        +'<p class="list-group-item-text">Fecha: '+eventos[i].date+'</p>'
                        +'<p class="list-group-item-text">Lugar: '+eventos[i].place+'</p>'
                        +' </a>');
                    }
                }
            });
        }
    });
    $( '.evento' ).on("click",function(){
         $("#info_eventos").html("");
        
    });
        
});

