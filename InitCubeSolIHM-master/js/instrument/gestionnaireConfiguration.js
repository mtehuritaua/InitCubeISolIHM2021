class GestionnaireConfiguration {
  constructor(segVol) {
    this.segmentVol = segVol;
    this.gestionnaireInstruments = new GestionnaireInstruments();
    let gestionnaireCourant = this;
    gestionnaireCourant.gestionnaireInstruments.listerInstrumentsPotentiels();
    
  }

  /*Genere une trame JSON avec toutes les données de la page configuration */
  genererConfigurationJSON() {
    let gestionnaireCourant = this;
    var conf = "{ \"ConfInstru\" : " + JSON.stringify(gestionnaireCourant.segmentVol.listeInstruments) + "}";
    console.log("Configuration segment vol: " + conf);
    return conf;
  }

  /*Création d'une requete ajax afin d'envoyer les données au script cgi suivant*/
  transmettreConfSV() {
    let gestionnaireCourant = this;
    $.ajax({
      type: "POST",
      url: "cgi-bin/cgiConfigurerSV.cgi",
      data: gestionnaireCourant.genererConfigurationJSON(),
      dataType: "html",
      success: function (code) {
        console.log(": " + code);
        gestionnaireCourant.popupReception(code);
      },
    });
  }
  /*Popup de confirmation de la reception du formulaire*/
  popupReception(value) {
    if (value == "OK") {
      $("#bienRecu").fadeIn(200).delay(3000).fadeOut(400)
    }
  }
}
