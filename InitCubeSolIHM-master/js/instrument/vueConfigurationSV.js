class VueConfigurationSV{
  constructor(gestConf) {
    this.gestionnaireConfiguration = gestConf;

    this.vueInstruSV = new VueInstrumentsSV(this.gestionnaireConfiguration.segmentVol);

    let gestionnaireCourant = this;
    this.genererListeInstrumentsPotentiels();
    this.genererListeInstrumentsSV();
    
    $("#EnvoyerConf").click(function () {
      gestionnaireCourant.modifierListeInstrumentSV();
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

  /*Permet de vider l'intérieure du tableau de la liste des instrument du Segment Vol*/
  modifierListeInstrumentSV(){
    var liste = this.gestionnaireConfiguration.segmentVol.listeInstruments;
    liste.splice(0, liste.length);

  }

  /*Récupere la liste instrument de la classe gestionnaireInstrument*/
  genererListeInstrumentsPotentiels() {
    let gestionnaireCourant = this;
    for (var i = 0; i < this.gestionnaireConfiguration.gestionnaireInstruments.listeInstruments.length; i++) {   
      var instruPotentiels = gestionnaireCourant.gestionnaireConfiguration.gestionnaireInstruments.listeInstruments[i].nom; 
        $("#instrumentPotentiels").append(
        '<input name="' +
        instruPotentiels +
          '" id="instrument' +
          i +
          '" type="checkbox"> <label for="instrument' +
          i +
          '" > '+
          instruPotentiels +
          '</label>'
      );
    }
  }

   /*Récupere la liste instrument de la classe segmentVol*/
   genererListeInstrumentsSV() {
    //let gestCourant = this;
    var listeInstruSV = this.gestionnaireConfiguration.segmentVol.listeInstruments;
    for (var i = 0; i < this.gestionnaireConfiguration.segmentVol.listeInstruments.length; i++) {
      var numero = this.gestionnaireConfiguration.gestionnaireInstruments.getInstrumentNumberByID(listeInstruSV[i].identifiant);
      //console.log("Numéro de l'instrument dans genererListeInstruSV() : "+ numero);
      $('#instrument'+ numero).appendTo('#instrumentExistant');
    }
  }
}