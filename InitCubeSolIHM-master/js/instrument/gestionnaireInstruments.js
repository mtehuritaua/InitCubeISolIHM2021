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
    
    $("#Envoyer").click(function () {
      gestionnaireCourant.ajouterInstrument(); //stocker donnée dans instance instrument
      gestionnaireCourant.ajouterTypesMesure();// ajouterTypesMesure à l'instrument
      gestionnaireCourant.recapFormInstrument();// -> construire recap a partir des données avant
    });

    $("#EnvoieRecap").click(function () {
      gestionnaireCourant.envoyerTrameJSON();
    });
  }

  /*Créer un nouvel instrument + stocke les données dans une instance*/
  ajouterInstrument() {
    let instrument = new Instrument($("#nom").val(), $("#role").val(), $("#identifiant").val());

    $('[id^="typeMesure"]').each(function() {
      instrument.addTypeMesure(
        $(this).find('input[name="nomMesure"]').val(),
        $(this).find('input[name="unite"]').val(),
        $(this).find('input[name="valMin"]').val(),
        $(this).find('input[name="valMax"]').val()
      );
    });

    this.listeInstruments.push(instrument);
    console.log(this.listeInstruments);
  }

  /*Permet de l'ajouter à l'instrument*/
  ajouterTypesMesure(){

  }

  /*Reprise des données pour faire pop up récapitulatif à partir des précedentes données*/ 
  recapFormInstrument() {
    var instrumentCourant = this.listeInstruments[this.listeInstruments.length - 1];
    $("#popNom").val(instrumentCourant.nom);
    $("#popRole").val(instrumentCourant.role);
    $("#popIdentifiant").val(instrumentCourant.identifiant);

    // faire boucle pour créer plusieurs type mesure
    instrumentCourant.listeTypesMesure.forEach(function(element, index) {
      $('#addRecap' + index).find('input[name="mesure"]').val(element.nom);
      $('#addRecap' + index).find('input[name="unite"]').val(element.unite);
      $('#addRecap' + index).find('input[name="valMin"]').val(element.valMin);
      $('#addRecap' + index).find('input[name="valMax"]').val(element.valMax);
      console.log("Mesure: " + element);
    });
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
}