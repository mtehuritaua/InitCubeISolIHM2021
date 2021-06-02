class VueInstrumentPotentiels {
  constructor(gestInstrument) {
    this.gestionnaireInstru = gestInstrument;
    
    let gestionnaireCourant = this;
    gestionnaireCourant.genererListeInstruments();
  }

  genererListeInstruments() {
    let gestionnaireCourant = this;

    for (var i = 0; i < this.gestionnaireInstru.listeInstruments.length; i++) {   
      var instruPotentiels = gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom; 
        $("#instrumentPotentiels").append(
        '<input name="' +
        instruPotentiels +
          '" id="choix ' +
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