class VueConfigurationSV{
  constructor(gestConf) {
    this.gestionnaireConfiguration = gestConf;

    this.vueInstruPotentiels = new VueInstrumentPotentiels(this.gestionnaireConfiguration.gestionnaireInstruments);
    this.vueInstruSV = new VueInstrumentsSV(this.gestionnaireConfiguration.segmentVol);

    let gestionnaireCourant = this;
    
    $("#EnvoyerConf").click(function () {
      //recupere /modifie la liste des instruments du SV 
      gestionnaireCourant.gestionnaireConfiguration.transmettreConfSV();
      $("#popupTest").append('<p> "Configuration enregistrée" </p>').fadeIn(200).delay(3000).fadeOut(400);
    });
    
    gestionnaireCourant.deplacerInstrument();
  }

  deplacerInstrument() {
    $("#removeListe").click(function () {
      return !$('#instrumentExistant div :checked').closest('div').appendTo('#instrumentPotentiels');
    });

    $("#addListe").click(function () {
      return !$('#instrumentPotentiels div :checked').closest('div').appendTo('#instrumentExistant');
    });
  }
}