$( document ).ready(function() {
    $("#form_login").submit(function(event) {
        var $form = $(this),
            email = $form.find('input[name="email"]').val(),
            password = $form.find('input[name="password"]').val();
        event.preventDefault();
        $.ajax({
                url: "http://127.0.0.1:8080/event/login/"+email+"_"+password,
                success: function(json){

                }
            });

    });
});

