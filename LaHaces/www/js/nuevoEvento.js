$( document ).ready(function() {
    var usuario_id= cogerVariable(0);
    $("#form_nuevo").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var $form = $(this),
            nombre = $form.find('input[name="nombre"]').val(),
            fecha = $form.find('input[name="fecha"]').val(),
            lugar = $form.find('input[name="lugar"]').val(),
            descripcion = $form.find('input[name="descripcion"]').val(),
            url = $form.attr('action'),
            fechita = fecha.substr(0,10),
            horita = fecha.substr(11,5),
            fecha2= fechita + " "+ horita+":00";

        /* Send the data using post */
        var posting = $.post(url, {
            nombre: nombre,
            fecha: fecha2,
            lugar: lugar,
            user_id: usuario_id,
            descripcion: descripcion
        });

        /* Put the results in a div */
        posting.done(function(data) {

            //var content = $(data).find('#content');
            //$("#result").empty().append(content);
        });
        window.location="bienvenidos.html";
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
