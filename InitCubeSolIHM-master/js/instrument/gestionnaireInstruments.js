class GestionnaireInstruments {
  constructor() {
    console.log('<canvas id="instru' + this.type + this.source + '"></canvas>');
    $("#instru").append(
      '<div class="instruments"><canvas id="instru' +
        this.type +
        '"></canvas></div>'
    );
    this.listeInstruments = new Array();
  }

  /*Créer un nouvel instrument*/
  ajouterInstrument() {
    this.listeInstruments.push(
      new Instrument($("#nom").val(), $("#role").val(), $("#identifiant").val())
    );
    this.listeInstruments[this.listeInstruments.length - 1].addTypeMesure(
      $("#nomMesure").val(),
      $("#unite").val(),
      $("#valMin").val(),
      $("#valMax").val()
    );
    /*console.log(
      "Generer trame JSON" +
        this.listeInstruments[this.listeInstruments.length - 1].genererJSON()
    );*/
  }

  /*Reprise des données pour faire pop up récapitulatif*/
  recapFormInstrument() {
    var instrumentCourant = this.listeInstruments[this.listeInstruments.length - 1];
    $("#popNom").val(instrumentCourant.nom);
    $("#popRole").val(instrumentCourant.role);
    $("#popIdentifiant").val(instrumentCourant.identifiant);
    $("#popNomMesure").val(instrumentCourant.listeTypesMesure[0].nom);
    $("#popUnite").val(instrumentCourant.listeTypesMesure[0].unite);
    $("#popValMin").val(instrumentCourant.listeTypesMesure[0].valMin);
    $("#popValMax").val(instrumentCourant.listeTypesMesure[0].valMax);
  }

   /*Bloquer écriture récapitulatif*/
  bloquerEcriture() {
    $("#bloqueInput :input").prop("disabled", true);
  }

  /*Envoyer Trame JSON du nouvel instrument pour sauvegarder dans la base de donnée*/
  enregistrerInstrument() {
    $("#EnvoieRecap").click(function () {
      let gestionnaireInstruments = new GestionnaireInstruments();
      gestionnaireInstruments.ajouterInstrument();
      gestionnaireInstruments.recapFormInstrument();

      let form_data = $("#testForm").serializeArray();
      console.log(form_data);
      let jsonString = JSON.stringify(form_data);
      $.ajax({
        url: "cgi-bin/addInstrument.cgi",
        type: "POST",
        data: jsonString,
        dataType: "html",
        success: function (codeRecu) {
          console.log(" " + codeRecu);
        },
      });
    });
  }

  ajouterTypeMesure() {
    /*Ajouter un nouveau formulaire de mesure*/
    $("#Ajouter").click(function () {
      var add = $("#test").clone();
      add.find(".champ");
      add.appendTo("#new");

      var addRecap = $("#addRecap").clone();
      addRecap.find(".rajout");
      addRecap.appendTo("#addRecap");
    }); /*
    $("#Supprimer").click(function () {
      var add = $("#new").remove();
      add.find(".champ");
      add.appendTo("#test");

  });*/
  }
}