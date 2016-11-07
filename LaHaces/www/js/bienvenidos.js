$(document).ready(function(){

    $.ajax({
        url: "http://127.0.0.1:8080/event/", success: function(json){
            eventos = json.eventos;
            alert("holaaa");
            for(i = 0; i < eventos.length; i++){
                        $("#lista").append('<tr action="http://127.0.0.1:8080/event/ method="get">'
                        +'<td>'+eventos[i].id+'</h4>'
                        +'<td>'+eventos[i].name+'</p>'
                        +'<td>'+eventos[i].date+'</p>'
                        +'<td>'+eventos[i].place+'</p>'
                        +'<td><button type="button" class="btn btn-block btn-primary"  id="ver">Ver</button></td>'
                        +'<td><button type="button" class="btn btn-block btn-sucess" id ="editar">Editar</button></td>'
                        +'</tr>');
            }
        }
    });

});
