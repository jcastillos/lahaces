$(document).ready(function(){

    $.ajax({
        url: "http://127.0.0.1:8080/event/", success: function(json){
            eventos = json.eventos;
            for(i = 0; i < eventos.length; i++){
                        $("#lista").append('<tr action="http://127.0.0.1:8080/event/ method="get">'
                        +'<td>'+eventos[i].id+'</h4>'
                        +'<td>'+eventos[i].name+'</p>'
                        +'<td>'+eventos[i].date+'</p>'
                        +'<td>'+eventos[i].place+'</p>'
                        +'<td><button type="button" class="btn btn-block btn-primary" class="ver" value="'+eventos[i].id+'">Ver</button></td>'
                        +'</tr>');
            }
        }
    });

    $(".ver").click(function() {
        var id=$("#ver").val();
        $.ajax({
                url: "http://127.0.0.1:8080/buscar/events/"+id,
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
    });

});
