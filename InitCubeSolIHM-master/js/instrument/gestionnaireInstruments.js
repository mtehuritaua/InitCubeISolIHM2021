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
      gestionnaireCourant.recapFormInstrument();// -> construire recap a partir des données avant
    });

    $("#EnvoieRecap").click(function () {
      gestionnaireCourant.envoyerTrameJSON();
      location.href="#pageInstruments";
    });
  }

  /*Créer un nouvel instrument + stocke les données dans une instance*/
  ajouterInstrument() {
    let instrument = new Instrument($("#nom").val(), $("#identifiant").val(), $("#role").val(), $("#ref").val() );

    $('[id^="typeMesure"]').each(function() {
      instrument.addTypeMesure(
        $(this).find('input[name="nomMesure"]').val(),
        $(this).find('input[name="codeMesure"]').val(),
        $(this).find('input[name="unite"]').val(),
        $(this).find('input[name="valMin"]').val(),
        $(this).find('input[name="valMax"]').val()
      );
    });
    this.listeInstruments.push(instrument);
    console.log(this.listeInstruments);
  }

  /*Reprise des données pour faire pop up récapitulatif à partir des précedentes données*/ 
  recapFormInstrument() {
    var instrumentCourant = this.listeInstruments[this.listeInstruments.length - 1];
    $("#popNom").val(instrumentCourant.nom);
    $("#popRef").val(instrumentCourant.ref);
    $("#popIdentifiant").val(instrumentCourant.identifiant);
    $("#popRole").val(instrumentCourant.role);

    instrumentCourant.listeTypesMesure.forEach(function(element, index) {
      $('#addRecap' + index).find('input[name="nomMesure"]').val(element.nom);
      $('#addRecap' + index).find('input[name="codeMesure"]').val(element.code);
      $('#addRecap' + index).find('input[name="unite"]').val(element.unite);
      $('#addRecap' + index).find('input[name="valMin"]').val(element.valMin);
      $('#addRecap' + index).find('input[name="valMax"]').val(element.valMax);
      console.log("Mesure: " + element);
    });
  }

  /*Envoyer Trame JSON du nouvel instrument pour sauvegarder dans la base de donnée*/
  envoyerTrameJSON() {
    let gestionnaireCourant = this; 
    $.ajax({
      url: "cgi-bin/cgiAjoutInsturment.cgi",
      type: "POST",
      data: gestionnaireCourant.listeInstruments[gestionnaireCourant.listeInstruments.length - 1].genererJSON(),
      dataType: "html",
      success: function (codeRecu) {
        console.log(" " + codeRecu);
      },
    });
  }
}