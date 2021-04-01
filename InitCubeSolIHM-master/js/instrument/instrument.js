class Instrument {
  constructor(nom, role, identifiant) {
    this.nom = nom;
    this.role = role;
    this.identifiant = identifiant;
    this.listeTypesMesure = new Array();
    console.log("Création d'un Instrument nommé " + this.nom);
  }

  addTypeMesure(nomMesure, unite, valMin, valMax){
    this.listeTypesMesure.push(new TypeMesure(nomMesure, unite, valMin, valMax));
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