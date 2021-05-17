class GestionnaireInstruments {
  constructor() {
   // console.log('<canvas id="instru' + this.type + this.source + '"></canvas>');
    $("#instru").append(
      '<div class="instruments"><canvas id="instru' +
        this.type +
        '"></canvas></div>'
    );

    let gestionnaireCourant = this; //Créer variable car sinon certaine ne sont pas définie
    this.listeInstruments = new Array();
    
    gestionnaireCourant.bloquerEcriture();
    gestionnaireCourant.ajouterFormTypeMesure();
    gestionnaireCourant.resetForm();
    
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
   
    /*for each a faire
    this.listeInstruments[this.listeInstruments.length - 1].forEach(function(element){*/
      this.listeInstruments[this.listeInstruments.length - 1].addTypeMesure(
        $("#nomMesure").val(),
        $("#unite").val(),
        $("#valMin").val(),
        $("#valMax").val()
      );
 //   });
  }

  /*Reprise des données pour faire pop up récapitulatif*/
  recapFormInstrument() {
    var instrumentCourant = this.listeInstruments[this.listeInstruments.length - 1];
    $("#popNom").val(instrumentCourant.nom);
    $("#popRole").val(instrumentCourant.role);
    $("#popIdentifiant").val(instrumentCourant.identifiant);
   
    /*
    $("#popNomMesure").val(instrumentCourant.listeTypesMesure[0].nom);
    $("#popUnite").val(instrumentCourant.listeTypesMesure[0].unite);
    $("#popValMin").val(instrumentCourant.listeTypesMesure[0].valMin);
    $("#popValMax").val(instrumentCourant.listeTypesMesure[0].valMax);*/

    /*faire boucle pour créer plusieurs type mesure*/
    this.instrumentCourant.listeTypesMesure.forEach(function(element) {
      $("#popNomMesure").val(element.nom);
      $("#popUnite").val(element.unite);
      $("#popValMin").val(element.valMin);
      $("#popValMax").val(element.valMax);
      console.log("Mesure: " + element);
    });
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

  //Mettre nouveau id pour chaque type mesure ajouter
  ajouterFormTypeMesure() {
    $("#Ajouter").click(function () {
      var cloneCount = 1;
      var add = $("#clone").clone().attr('id', $("#clone")[0].id+ cloneCount++)
      add.appendTo("#new");

      var addRecap = $("#addRecap").clone().attr('id', 'id'+ cloneCount++);
      addRecap.appendTo("#newRecap");
    }); 
  }

  /*Réinitialiser la page quand on clique sur bouton Annuler / Reset / EnvoieRecap*/ 
  resetForm(){
    $("#reset").click(function () {
      $("#form").trigger("reset");
    });
    $("#Annuler").click(function () {
      $("#form").trigger("reset");
    });
    $("#EnvoieRecap").click(function () {
      $("#form").trigger("reset");
    });
  }
}