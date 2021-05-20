class TypeMesure {

    constructor(nom, code, unite, valMin, valMax) {
        this.nom = nom;
        this.code = code;
        this.unite = unite;
        this.valMax = valMax;
        this.valMin = valMin;
        console.log("Création d'un TypeMesure nommé " + this.nom);
    }
}