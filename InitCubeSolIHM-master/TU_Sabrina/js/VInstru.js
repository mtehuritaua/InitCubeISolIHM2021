$.validator.addMethod("textOnly",
  function (value, element) {  // un car n'est pas alphanumérique
    return !/[^a-zA-Z0-9]/.test(value);
  }, "Que des caractères alphanumériques."
);

$.validator.addMethod("nomOnly",
  function (value, element) {
    return !/[^a-zA-Z0-9àáâãäåçèéêëìíîïòóôõöùúûüýÿ_. ]/.test(value);
  }, "Que des caractères alphanumériques accentués."
);

$(document).ready(function () {
  $("#formulaire").validate({
    rules: {
      nom: {
        required: true, 
        nomOnly:true,
      },
      identifiant: {
        minlength: 6,
        maxlength: 6,
        required: true,
      },
      ref: {
        required: true, 
        textOnly:true,
      },
      adresse: {
        minlength: 4,
        maxlength: 4,
        required: true,
      },
      role: {
        required: true, 
        nomOnly:true,
      },
      nomMesure: {
        required: true, 
        nomOnly:true,
      },
      codeMesure: {
        minlength: 2,
        maxlength: 3,
        required: true,
      },
      description: {
        required: true, 
        nomOnly:true,
      },
      unite: {
        required: true,
      },
    },
    messages: {
      nom: {
        required: "Entrez le nom de l'instrument.",
      },
      identifiant: {
        minlength: "Au moins 6 caractères",
        maxlength: "Au max 6 caractères",
        required: "Entrez un identifiant composé de 3 chiffres et 3 lettres.",
      },
      ref: {
        required: "Entrez une référence.",
      },
      adresse: {
        minlength: "Au moins 4 caractères",
        maxlength: "Au max 4 caractères",
        required: "Entrez une adresse commençant par 0x..",
      },
      role: {
        required: "Entrez le role de l'instrument.",
      },
      nomMesure: {
        required: "Entrez le nom de la mesure.",
      },
      codeMesure: {
        minlength: "Au moins 2 caractères",
        maxlength: "Au max 3 caractères",
        equalTo: "Entrez un code mesure",
      },
      description: {
        required: "Entrez la description de cette mesure.",
      },
      unite: {
        required: "Entrez l'unité utilisé pour cette mesure.",
      },
    },
    errorPlacement: function (error, element) {
      error.appendTo(element.parent());
    },
  });
});