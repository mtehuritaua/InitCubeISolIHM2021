class Instrument {
    constructor(nom, identifiant, ref, adresse, role) {
        this.nom = nom;
        this.identifiant = identifiant;
        this.ref = ref;
        this.adresse = adresse;
        this.role = role;
        this.listeTypesMesure = new Array();
        // console.log("Création d'un Instrument nommé " + this.nom);
    }

    addTypeMesure(nom, code, description, unite, valMin, valMax) {
        this.listeTypesMesure.push(new TypeMesure(nom, code, description, unite, valMin, valMax));
    }

    /*Genere une trame JSON avec toutes les données entrée dans le formulaire */
    genererJSON() {

    }
}