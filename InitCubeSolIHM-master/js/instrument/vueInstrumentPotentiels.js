class VueInstrumentPotentiels {
  constructor(gestInstrument) {
    this.gestionnaireInstru = gestInstrument;
    let gestionnaireCourant = this;
    gestionnaireCourant.genererListeInstruments();
  }

  genererListeInstruments() {
    let gestionnaireCourant = this;
    console.log("entrée dans genererListeInstruments" + this.gestionnaireInstru.listeInstruments.length);

    for (var i = 0; i < this.gestionnaireInstru.listeInstruments.length; i++) {
        console.log("Nom de l'instrument " +gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom );
    
        $("#instrumentPotentiels").append(
        '<input type="checkbox" name="' +
        gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom +
          '" id="choix ' +
          gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom +
          '"><label for="choix' +
          gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom +
          '">' +
          gestionnaireCourant.gestionnaireInstru.listeInstruments[i].nom +
          "</label>"
      );

    }
  }
}
