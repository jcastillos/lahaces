$( document ).ready(function() {
    $("form").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var $form = $(this),
            url = $form.attr('action');

        $.ajax({
                // el URL hace llamado a la función desarrollada en python
                url: url, 
                success: function(json){
                    evento = json;
                    for(i = 0; i < eventos.length; i++){                        
                        $("#info_eventos").html('<h1>Hola Mundo</h1>');
                    }
                }
        });
        window.location="bienvenidos.html";
    });    
});