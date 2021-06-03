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
    var conf = JSON.stringify(gestionnaireCourant.segmentVol.listeInstruments);
    console.log("JSON fabriqué: " + conf);
    return conf;
  }

  transmettreConfSV() {
    let gestionnaireCourant = this;
    $.ajax({
      type: "POST",
      url: "cgi-bin/cgiConfigurerSV.cgi",
      data: gestionnaireCourant.genererConfigurationJSON(),
      dataType: "html",
      success: function (reponse) {
        console.log(": " + reponse);
      },
    });
  }
}
