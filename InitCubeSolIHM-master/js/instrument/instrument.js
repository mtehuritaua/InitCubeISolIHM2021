class Instrument {
  constructor(nom, ref, role, identifiant) {
    this.nom = nom;
    this.ref = ref;
    this.role = role;
    this.identifiant = identifiant;
    this.listeTypesMesure = new Array();
    console.log("Création d'un Instrument nommé " + this.nom);
  }

  addTypeMesure(nom, code, unite, valMin, valMax){
    this.listeTypesMesure.push(new TypeMesure(nom, code, unite, valMin, valMax));
  }

  genererJSON() {
    var textjson = JSON.stringify(this);
    console.log("JSON fabriqué automatiquement : " + textjson);
    return textjson;
  }
}