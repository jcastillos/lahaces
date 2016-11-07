$( document ).ready(function() {
    $("#info_evento").html("");
    var id= cogerVariable(0);
    $.ajax({
        url: "http://127.0.0.1:8080/event/"+id,
        success: function(json){
            evento = json;
                $("#info_evento").append('<h3>'+evento.name+'</h3>');
            }

    });
});

function cogerVariable(variable){

	var tipo = typeof variable;
	var direccion = location.href;

	if (tipo == "string"){
		var posicion = direccion.indexOf("?");
		posicion = direccion.indexOf(variable,posicion) + variable.length;
	}
	else if (tipo == "number"){
		var posicion=0;
		for (var contador = 0 ; contador < variable + 1 ; contador++){
			posicion = direccion.indexOf("=",++posicion);
			if (posicion == -1)posicion=999;
		}
	}
	if (direccion.charAt(posicion) == "="){
		var final = direccion.indexOf("&",posicion);
		if (final == -1){final=direccion.length;};
		return direccion.substring(posicion + 1,final);
	}
}


