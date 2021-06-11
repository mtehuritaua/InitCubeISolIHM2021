class VueConfigurationSV{
  constructor(gestConf) {
    this.gestionnaireConfiguration = gestConf;

    let gestionnaireCourant = this;
    this.genererListeInstrumentsPotentiels();
    this.genererListeInstrumentsSV();
    
    $("#EnvoyerConf").click(function () {
      gestionnaireCourant.modifierListeInstrumentSV();
      gestionnaireCourant.gestionnaireConfiguration.segmentVol.genererMenuInstruments();
      gestionnaireCourant.gestionnaireConfiguration.transmettreConfSV();
      location.href = "#pageConfiguration";
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

  /*Permet de modifer l'intérieure du tableau de la liste des instrument du Segment Vol*/
  modifierListeInstrumentSV(){
    let gestCourant = this;
    let liste = this.gestionnaireConfiguration.segmentVol.listeInstruments;
    liste.splice(0, liste.length);

    $("#instrumentExistant :input").each(function (index){
      $(this).attr('id');
      gestCourant.gestionnaireConfiguration.segmentVol.listeInstruments[index] = gestCourant.gestionnaireConfiguration.gestionnaireInstruments.listeInstruments[$(this).attr('id')];
    })
  }

  /*Récupere la liste instrument de la classe gestionnaireInstrument*/
  genererListeInstrumentsPotentiels() {
    let gestionnaireCourant = this;
    for (var i = 0; i < this.gestionnaireConfiguration.gestionnaireInstruments.listeInstruments.length; i++) {   
      let instruPotentiels = gestionnaireCourant.gestionnaireConfiguration.gestionnaireInstruments.listeInstruments[i].nom; 
        $("#instrumentPotentiels").append(
        '<input name="' +
        instruPotentiels +
          '" id="' +
          i +
          '" type="checkbox"> <label for="' +
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

    for (var i = 0; i < listeInstruSV.length; i++) {
      let numero = this.gestionnaireConfiguration.gestionnaireInstruments.getInstrumentNumberByID(listeInstruSV[i].identifiant);
      //console.log("Numéro de l'instrument dans genererListeInstruSV() : "+ numero);
      $('#'+ numero).appendTo('#instrumentExistant');
    }
  }
}