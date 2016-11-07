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
                        $("#info_eventos").append('<div id="evento'+eventos[i].id+'">'
                        +'<form action="http://127.0.0.1:8080/event/'+eventos[i].id+'" method="get" class="list-group-item">'
                        //+'<a type="submit" value="Submit" class="list-group-item">'
                        +'<h4 class="list-group-item-heading">'+eventos[i].name+'</h4>'
                        +'<p class="list-group-item-text">Fecha: '+eventos[i].date+'</p>'
                        +'<p class="list-group-item-text">Lugar: '+eventos[i].place+'</p>'
                        +'<input type="submit" value="Ver Evento" class="btn btn-default btn-sm">'
                        +'</form></div>');
                    }
                }
            });
        }
    });
    $( '.evento' ).on("click",function(){
         $("#info_eventos").html("");
        
    });
        
});

