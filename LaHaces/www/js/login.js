$( document ).ready(function() {
    $("#form_login").submit(function(event) {
        var $form = $(this),
            email = $form.find('input[name="email"]').val(),
            password = $form.find('input[name="password"]').val();
        event.preventDefault();
        $.ajax({
                url: "http://127.0.0.1:8080/event/login/"+email+"_"+password,
                success: function(json){
                    estado = json.estado,
                    nombre = json.first_name,
                    user_id = json.user_id,
                    apellido = json.last_name;
                    if (estado=="error"){
                        $("#mensaje").html('<p class="text-danger">Error en el logueo</p>');
                    }else{
                        $("#info").show();
                        $("#mensaje").html('<p value="'+user_id+'" class="text-success">Bienvenido '+nombre+' '+apellido+'</p>');
                        $("#form_login").hide();
                        $("#botonNuevoEnvento").html('<a href="nuevoEvento.html?id='+user_id+'" class="btn btn-success">Nuevo Evento</a>');
                    }

                }
            });

    });
});

