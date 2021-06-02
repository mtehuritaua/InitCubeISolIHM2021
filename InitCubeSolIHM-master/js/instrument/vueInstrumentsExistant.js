class VueInstrumentsExistant {
  constructor(gestInstrumentsExistant) {
    this.gestInstruExistant = gestInstrumentsExistant;

    let gestCourant = this;
    gestCourant.genererInstrumentsExistant();
  }

  genererInstrumentsExistant() {
    let gestCourant = this;

    for (var i = 0; i < this.gestInstruExistant.listeInstruments.length; i++) {
      var instruExistant = gestCourant.gestInstruExistant.listeInstruments[i].nom;
      $("#instrumentExistant").append(
        '<input name="' +
          instruExistant +
          '" id="choix ' +
          instruExistant +
          '" type="checkbox"> <label for="choix' +
          instruExistant +
          '" > ' +
          instruExistant +
          "</label>"
      );
    }
  }
}
