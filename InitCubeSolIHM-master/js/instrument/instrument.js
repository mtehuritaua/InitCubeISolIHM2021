class Instrument {
  constructor(nom) {
    this.nom = nom;
    this.listeTypesMesure = new Array();
    console.log("Création d'un Instrument nommé" + this.nom);
  }

  addTypeMesure(mesure, unite, valMin, valMax){
    this.listeTypesMesure.push(new TypeMesure(mesure, unite, valMin, valMax));
  }

  genererJSON() {
    var textjson = JSON.stringify(this);/*{
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
    }*/
    return textjson;
  }
}