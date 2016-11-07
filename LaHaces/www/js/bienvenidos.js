$(document).ready(function(){
    $.ajax({
                url: "http://127.0.0.1:8080/event/",
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

});
