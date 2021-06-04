class VueInstrumentPotentiels {
  constructor(gestInstrument) {
    this.gestionnaireInstru = gestInstrument;
    
    let gestionnaireCourant = this;
    gestionnaireCourant.genererListeInstruments();
  }

  /*Récupere la liste instrument de la classe gestionnaireInstrument*/
  genererListeInstruments() {
    let gestionnaireCourant = this;

    for (var i = 0; i < this.gestionnaireInstru.listeInstruments.length; i++) {   
      var instruPotentiels = gestionnaireCourant.gestionnaireInstru.listeInstruments[i].ref; 
        $("#instrumentPotentiels").append(
        '<input name="' +
        instruPotentiels +
          '" id="choix' +
          instruPotentiels +
          '" type="checkbox"> <label for="choix' +
          instruPotentiels +
          '" > '+
          instruPotentiels +
          '</label>'
      );
    }
  }
}