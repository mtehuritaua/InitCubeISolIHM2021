/*
$.validator.addMethod("textOnly", 
    function(value, element) {  // un car n'est pas alphanumérique
        return !/[^a-zA-Z0-9]/.test(value);
    }, "Que des caractères alphanumériques."
);

$(document).ready(function () {
    $("#formulaire").validate({
        rules: {
            nom: {
               textOnly: true, required: true
            },
            identifiant: {
                minlength: 4, maxlength: 6, textOnly: true, required: true
            },
            ref: {
                minlength: 4, maxlength: 15, textOnly: true, required: true
            },
             adresse: {
                minlength: 4, maxlength: 4, textOnly: true, required: true
            },
            role: {
                textOnly: true, required: true
            },
            nomMesure: {
                textOnly: true, required: true
            },
            unite: {
                textOnly: true, required: true
            },
            codeMesure: {
                minlength: 2, maxlength: 3, textOnly: true, required: true
            }
        },
        messages: {
            nom: {
                required: "Entrez le nom de l'instrument."
            },
            identifiant: {
                minlength: "Au moins 4 caractères",
                maxlength: "Au max 6 caractères",
                required: "Entrez un identifiant."
            },
            ref: {
                minlength: "Au moins 4 caractères",
                maxlength: "Au max 15 caractères",
                required: "Entrez une référence."
            },
            adresse: {
                minlength: "Au moins 4 caractères",
                maxlength: "Au max 4 caractères",
                required: "Entrez une adresse I2C commençant par 0x."
            },
            role: {
                required: "Entrez le role."
            },
            nomMesure: {
                required: "Entrez le nom de la mesure."
            },
            unite: {
                required: "Entrez l'unite."
            },
            codeMesure: {
                minlength: "Au moins 2 caractères",
                maxlength: "Au max 3 caractères",
                equalTo: "Entrez un code mesure"
            }
        },
        errorPlacement: function (error, element) {
            error.appendTo(element.parent().next());
        }
    });
});*/