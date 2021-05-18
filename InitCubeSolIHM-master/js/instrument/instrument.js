class Instrument {
  constructor(nom, ref, role, identifiant) {
    this.nom = nom;
    this.ref = ref;
    this.role = role;
    this.identifiant = identifiant;
    this.listeTypesMesure = new Array();
    console.log("Création d'un Instrument nommé " + this.nom);
  }

  addTypeMesure(nom, description, unite, valMin, valMax){
    this.listeTypesMesure.push(new TypeMesure(nom, description, unite, valMin, valMax));
  }

  genererJSON() {
    var textjson = JSON.stringify(this);
    console.log("JSON fabriqué automatiquement : " + textjson);/*{
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