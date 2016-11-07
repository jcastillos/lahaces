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

    });

});
