class Instrument {
  constructor(nom) {
    this.nom = nom;
    this.listeTypesMesure = new Array();
    console.log("Création d'un Instrument nommé" + this.nom);
  }

  genererJSON() {
    var textjson = JSON.stringify({
      "Instrument": {
        "nom": this.nom,
        "typeMesure": [
          {
            "nom": this.listeTypesMesure[0].nom,
            "unite": this.listeTypesMesure[0].unite,
            "valMin": this.listeTypesMesure[0].valMin,
            "valMax": this.listeTypesMesure[0].valMax,
          },
        ],
      },
    });
    return textjson;
  }
}