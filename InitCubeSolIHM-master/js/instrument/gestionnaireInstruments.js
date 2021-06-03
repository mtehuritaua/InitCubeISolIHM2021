class GestionnaireInstruments {
  constructor() {
    let gestionnaireCourant = this; //Créer variable car sinon certaine ne sont pas définie
    this.listeInstruments = new Array();
    
    $("#Envoyer").click(function () {
      gestionnaireCourant.ajouterInstrument(); //stocker donnée dans instance instrument
      gestionnaireCourant.recapFormInstrument();// -> construire recap a partir des données avant
    });
    $("#EnvoieRecap").click(function () {
      gestionnaireCourant.envoyerTrameJSON();
      location.href = "#pageConfiguration";
    });
  }

  /*Créer un nouvel instrument + stocke les données dans une instance*/
  ajouterInstrument() {
    let instrument = new Instrument($("#nom").val(), $("#identifiant").val(), $("#ref").val(), $("#adresse").val(), $("#role").val());

    $('[id^="typeMesure"]').each(function () {
      instrument.addTypeMesure(
        $(this).find('input[name="nomMesure"]').val(),
        $(this).find('input[name="codeMesure"]').val(),
        $(this).find('input[name="description"]').val(),
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
    $("#popIdentifiant").val(instrumentCourant.identifiant);
    $("#popRef").val(instrumentCourant.ref);
    $("#popAdresse").val(instrumentCourant.adresse);
    $("#popRole").val(instrumentCourant.role);

    instrumentCourant.listeTypesMesure.forEach(function (element, index) {
      $('#addRecap' + index).find('input[name="nomMesure"]').val(element.nom);
      $('#addRecap' + index).find('input[name="codeMesure"]').val(element.code);
      $('#addRecap' + index).find('input[name="description"]').val(element.description);
      $('#addRecap' + index).find('input[name="unite"]').val(element.unite);
      $('#addRecap' + index).find('input[name="valMin"]').val(element.valMin);
      $('#addRecap' + index).find('input[name="valMax"]').val(element.valMax);
      console.log("Mesure: " + element);
    });
  }

  /*Liste les instruments potentiels qu'on peut ajouter au segment vol */
  listerInstrumentsPotentiels() {
    let gestionnaireCourant = this;
    $.ajax({
      type: 'GET',
      url: 'cgi-bin/cgiListerInstruments.cgi',
      dataType: 'html',
      async: false,
      success: function (reponse) {
        var tramesJson = new Array();
        tramesJson = reponse.split('\n');
        //console.log("Reponse: " + reponse);
        // console.log("TrameJSON: " + tramesJson);

        tramesJson.forEach(function (element) {
          gestionnaireCourant.addToListeInstruments(element);
          //console.log(" " + element);
        });

      }
    });
  }

  /*Ajouter la liste des instruments*/
  addToListeInstruments(instrumentJSON) {
    var instrumentParse = $.parseJSON(instrumentJSON);
    let instrument = new Instrument(instrumentParse.nom, instrumentParse.identifiant, instrumentParse.ref, instrumentParse.adresse, instrumentParse.role );

    instrumentParse.listeTypesMesure.forEach(function (element) {
      instrument.addTypeMesure(
        element.nom,
        element.code,
        element.description,
        element.unite,
        element.valMax,
        element.valMin
      );
    });
    this.listeInstruments.push(instrument);
    console.log(this.listeInstruments);
  }

  /*Envoyer Trame JSON du nouvel instrument pour sauvegarder dans la base de donnée*/
  envoyerTrameJSON() {
    let gestionnaireCourant = this;
    $.ajax({
      url: "cgi-bin/cgiAjouterInstrument.cgi",
      type: "POST",
      data: gestionnaireCourant.listeInstruments[gestionnaireCourant.listeInstruments.length - 1].genererJSON(),
      dataType: "html",
      success: function (codeRecu) {
        console.log(" " + codeRecu);
        //popup(codeRecu);
      },
    });
  }
/*
  popup(value) {
    if (value == "ACK") {
      $("#bienTransmis").fadeIn(200).delay(3000).fadeOut(400)
    } else if (value == "NACK")
      $("#malTransmis").fadeIn(200).delay(3000).fadeOut(400);
    else
      $("#erreurTransmis").fadeIn(200).delay(3000).fadeOut(400);
  }*/
}