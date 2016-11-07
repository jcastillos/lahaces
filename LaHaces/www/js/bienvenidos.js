$(document).ready(function(){
    $.ajax({
        url: "http://127.0.0.1:8080/event/", success: function(json){
            eventos = json.eventos;
            //alert("holaaa");
            for(i = 0; i < eventos.length; i++){
                        $("#info_eventos").append('<div id="evento'+eventos[i].id+'">'
                        +'<form action="http://127.0.0.1:8080/event/'+eventos[i].id+'" method="get" class="list-group-item">'
                        //+'<a type="submit" value="Submit" class="list-group-item">'
                        +'<h4 class="list-group-item-heading">'+eventos[i].name+'</h4>'
                        +'<p class="list-group-item-text">Fecha: '+eventos[i].date+'</p>'
                        +'<p class="list-group-item-text">Lugar: '+eventos[i].place+'</p>'
                        +'<a href="verEvento.html?id='+eventos[i].id+'" class="btn btn-default btn-sm">Ver Evento</a>'
                        //+'<a type="button" value="Ver Evento" class="btn btn-default btn-sm">'
                        +'</form></div>');
            }
        }
    });

});
