class Commande {
    constructor(idSatellite, typeCommande, typeMesure) {
        this.idSatellite = idSatellite;
        this.typeCommande = typeCommande;
        //this.instrument = instrument;
        this.typeMesure = typeMesure;
        console.log("Instanciation d'une commande " + idSatellite + " " + typeCommande + " " + typeMesure);
    }
    setDate(date) {

    }
    genererJSON() {
        console.log("JSON fabriqué automatiquement : " + JSON.stringify(this));
        return cmd;
    }
}