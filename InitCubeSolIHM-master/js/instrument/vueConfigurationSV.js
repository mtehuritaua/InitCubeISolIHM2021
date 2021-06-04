class VueConfigurationSV{
  constructor(gestConf) {
    this.gestionnaireConfiguration = gestConf;

    this.vueInstruPotentiels = new VueInstrumentPotentiels(this.gestionnaireConfiguration.gestionnaireInstruments);
    this.vueInstruSV = new VueInstrumentsSV(this.gestionnaireConfiguration.segmentVol);

    let gestionnaireCourant = this;
    
    $("#EnvoyerConf").click(function () {
     // gestionnaireCourant.viderListeInstrumentSV();//recupere /modifie la liste des instruments du SV 
      gestionnaireCourant.gestionnaireConfiguration.transmettreConfSV();
    });
    
    gestionnaireCourant.deplacerInstrument();
  }

  /*Permet de déplacer les instrument d'une liste à une autre*/
  deplacerInstrument() {
    $("#removeListe").click(function () {
      return !$('#instrumentExistant div :checked').closest('div').appendTo('#instrumentPotentiels');
    });

    $("#addListe").click(function () {
      return !$('#instrumentPotentiels div :checked').closest('div').appendTo('#instrumentExistant');
    });
  }

  /*Permet de vider la liste des instrument du Segment Vol*/
  viderListeInstrumentSV(){
   //$("#").empty(); Efface les valeurs entrer, avant son utilisation 
  }
}