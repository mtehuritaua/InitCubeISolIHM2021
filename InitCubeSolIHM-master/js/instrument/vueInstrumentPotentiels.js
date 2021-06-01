class VueInstrumentPotentiels {
  constructor(gestInstrument) {
    this.gestionnaireInstru = gestInstrument;
    
    let gestionnaireCourant = this;
    gestionnaireCourant.genererListeInstruments();
  }

  genererListeInstruments() {
    let gestionnaireCourant = this;

    for (var i = 0; i < this.gestionnaireInstru.listeInstruments.length; i++) {    
        $("#instrumentPotentiels").append(
        '<input name="' +
        gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom +
          '" id="choix ' +
          gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom +
          '" type="checkbox"> <label for="choix' +
          gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom +
          '" > '+
          gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom +
          '</label>'
      );
    }
  }
}