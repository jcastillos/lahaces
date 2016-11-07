$(document).ready(function(){

    $.ajax({
        url: "http://127.0.0.1:8080/event/", success: function(json){
            eventos = json.eventos;
             for(i = 0; i < eventos.length; i++){
                        $("#info_eventos").append('<div id="evento'+eventos[i].id+'">'
                        +'<form action="http://10.101.49.72:8080/event/'+eventos[i].id+'" method="get" class="list-group-item">'
                        +'<td id="id">'+eventos[i].name+'</h4>'
                        +'<td id="nombre">'+eventos[i].name+'</p>'
                        +'<td id="fecha">'+eventos[i].date+'</p>'
                        +'<td id="lugar">'+eventos[i].place+'</p>'
                        +'<td><button type="button" class="btn btn-block btn-primary"  id="ver">Ver</button></td>'
                        +'<td><button type="button" class="btn btn-block btn-sucess" id ="editar">Editar</button></td>');
            }
        }
    });

});
