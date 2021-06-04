class VueInstrumentsSV {
  constructor(segVol) {
    this.segmentVol = segVol;

    let gestCourant = this;
    gestCourant.genererInstrumentsSV();
  }

   /*Récupere la liste instrument de la classe segmentVol*/
  genererInstrumentsSV() {
    let gestCourant = this;

    for (var i = 0; i < this.segmentVol.listeInstruments.length; i++) {
      var instruExistant = gestCourant.segmentVol.listeInstruments[i].ref;
      $("#instrumentExistant").append(
        '<input name="' +
          instruExistant +
          '" id="choix' +
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
