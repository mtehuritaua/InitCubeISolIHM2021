class VueNouvelleInstrument {
  constructor() {
    this.nbTypesMesure = 1;
    this.nbTypesMesureRecap = 1;
    let gestionnaireCourant = this; //Créer variable car sinon certaine ne sont pas définie

    gestionnaireCourant.bloquerEcriture();
    gestionnaireCourant.ajouterFormTypeMesure();
    gestionnaireCourant.resetForm();
    gestionnaireCourant.supprimerFormTypeMesure();
  }

  /*Bloquer écriture récapitulatif + IHM */
  bloquerEcriture() {
    $("#bloqueInput :input").prop("disabled", true);
  }

  /*Réinitialiser la page quand on clique sur bouton Annuler / Reset / EnvoieRecap + IHM*/
  resetForm() {
    $("#reset").click(function () {
      $("#formulaire").trigger("reset");
    });
    $("#Annuler").click(function () {
      $("#formulaire").trigger("reset");
    });
    $("#EnvoieRecap").click(function () {
      $("#formulaire").trigger("reset");
    });
  }

  //Mettre nouveau id pour chaque type mesure ajouter 
  ajouterFormTypeMesure() {
    let gestionnaireCourant = this;
    $("#Ajouter").click(function () {
      var add = $("#typeMesure0").clone().prop("id", "typeMesure" + gestionnaireCourant.nbTypesMesure++);
      add.find("input").val("");
      add.appendTo("#new");

      //clone dans recap
      var addRecap = $("#addRecap0").clone().prop("id", "addRecap" + gestionnaireCourant.nbTypesMesureRecap++);
      addRecap.appendTo("#newRecap");
    });
  }
  /*Permet de supprimer les types de mesures ajouter */
  supprimerFormTypeMesure() {
    let gestionnaireCourant = this;
    $("#Supprimer").click(function () {
      $("#typeMesure1").remove().prop("id", "typeMesure" + gestionnaireCourant.nbTypesMesure--);
      $("#addRecap1").remove().prop("id", "addRecap" + gestionnaireCourant.nbTypesMesure--);
    });
  }
}/*
$(document).ready(function () {
  $("#formulaire").validate({
    rules: {
      nom: {
        required: true,
      },
      identifiant: {
        minlength: 6,
        maxlength: 6,
        required: true,
      },
      ref: {
        required: true,
      },
      adresse: {
        minlength: 4,
        maxlength: 4,
        required: true,
      },
      role: {
        required: true,
      },
      nomMesure: {
        required: true,
      },
      codeMesure: {
        minlength: 2,
        maxlength: 3,
        required: true,
      },
      description: {
        required: true,
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
});*/

