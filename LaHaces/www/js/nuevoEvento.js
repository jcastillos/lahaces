$( document ).ready(function() {
    $("#form_nuevo").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var $form = $(this),
            nombre = $form.find('input[name="nombre"]').val(),
            fecha = $form.find('input[name="fecha"]').val(),
            lugar = $form.find('input[name="lugar"]').val(),
            descripcion = $form.find('input[name="descripcion"]').val(),
            url = $form.attr('action');

        /* Send the data using post */
        var posting = $.post(url, {
            nombre: nombre,
            fecha: fecha,
            lugar: lugar,
            descripcion: descripcion
        });

        /* Put the results in a div */
        posting.done(function(data) {
            alert("Data: " + data + "\nStatus: " + status);
            //var content = $(data).find('#content');
            //$("#result").empty().append(content);
        });
        window.location="bienvenidos.html";
    });
    
});