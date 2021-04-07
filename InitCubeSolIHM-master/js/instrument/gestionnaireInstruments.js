class GestionnaireInstruments {
  constructor() {
    console.log('<canvas id="instru' + this.type + this.source + '"></canvas>');
    $("#instru").append(
      '<div class="instruments"><canvas id="instru' +
        this.type +
        '"></canvas></div>'
    );

    let gestionnaireCourant = this;
    this.listeInstruments = new Array();
    
    gestionnaireCourant.bloquerEcriture();
    gestionnaireCourant.ajouterTypeMesure();
    
    $("#Envoyer").click(function () {
      gestionnaireCourant.ajouterInstrument();
      gestionnaireCourant.recapFormInstrument();
    });

    $("#EnvoieRecap").click(function () {
      gestionnaireCourant.envoyerTrameJSON();
    });
  }

  /*Créer un nouvel instrument*/
  ajouterInstrument() {
    this.listeInstruments.push(new Instrument($("#nom").val(), $("#role").val(), $("#identifiant").val()));
    this.listeInstruments[this.listeInstruments.length - 1].addTypeMesure(
      $("#nomMesure").val(),
      $("#unite").val(),
      $("#valMin").val(),
      $("#valMax").val()
    );
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

    /*faire boucle pour + type mesure
    listeInstruments.forEach((element) => {
      $("#popNomMesure").val(element.nom);
      $("#popUnite").val(element.unite);
      $("#popValMin").val(element.valMin);
      $("#popValMax").val(element.valMax);
    });*/
  }

   /*Bloquer écriture récapitulatif*/
  bloquerEcriture() {
    $("#bloqueInput :input").prop("disabled", true);
  }

  /*Envoyer Trame JSON du nouvel instrument pour sauvegarder dans la base de donnée*/
  envoyerTrameJSON() {
      $.ajax({
        url: "cgi-bin/addInstrument.cgi",
        type: "POST",
        data: this.listeInstruments[this.listeInstruments.length - 1].genererJSON(),
        dataType: "html",
        success: function (codeRecu) {
          console.log(" " + codeRecu);
        },
      });
  }
   
  /*Ajouter un nouveau formulaire de mesure*/
  ajouterTypeMesure() {
    $("#Ajouter").click(function () {
      var add = $("#clone").clone();
      add.find(".champ");
      add.appendTo("#new");

      var addRecap = $("#addRecap").clone();
      addRecap.find(".rajout");
      addRecap.appendTo("#newRecap");
    }); /*
    $("#Supprimer").click(function () {
      var add = $("#new").remove();
      add.find(".champ");
      add.appendTo("#test");

  });*/
  }
}