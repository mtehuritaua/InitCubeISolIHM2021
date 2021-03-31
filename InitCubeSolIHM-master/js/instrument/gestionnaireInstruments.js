class GestionnaireInstruments {
  constructor() { 
    console.log('<canvas id="instru' + this.type + this.source + '"></canvas>');
    $("#instru").append(
      '<div class="instruments"><canvas id="instru' +
        this.type +
        '"></canvas></div>'
    );
    this.listeInstruments = new Array();
  }

  ajouterInstrument() {
    this.listeInstruments.push(
      new Instrument($("#nom").val(), $("#role").val(), $("#identifiant").val())
    );
    this.listeInstruments[this.listeInstruments.length - 1].addTypeMesure(
      $("#nomMesure").val(),
      $("#unite").val(),
      $("#valMin").val(),
      $("#valMax").val()
    );
    console.log(
      "Generer trame JSON" +
        this.listeInstruments[this.listeInstruments.length - 1].genererJSON()
    );
  }

  recapFormInstrument() {
    var instrumentCourant = this.listeInstruments[
      this.listeInstruments.length - 1
    ];
    $("#popNom").val(instrumentCourant.nom);
    $("#popRole").val(instrumentCourant.role);
    $("#popIdentifiant").val(instrumentCourant.identifiant);
    $("#popNomMesure").val(instrumentCourant.listeTypesMesure[0].nomMesure);
    $("#popUnite").val(instrumentCourant.listeTypesMesure[0].unite);
    $("#popValMin").val(instrumentCourant.listeTypesMesure[0].valMin);
    $("#popValMax").val(instrumentCourant.listeTypesMesure[0].valMax);
    // $('#popImage').text(instrumentCourant.nom);
  }
}